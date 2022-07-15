const params = new URLSearchParams(window.location.search)
let gameBoard = document.querySelector(".game-board")
let serachValue = params.get('q')
let decodeBase64 = atob(serachValue)
let word = decodeBase64
let targetWord = word.toLocaleLowerCase()
let ANIMATION_DURATION = 500
let wordLength = 5
let keyboard = document.querySelector(".game-keyboard")
let alertContainer = document.querySelector(".alert-container")
let errorMsg = document.querySelector("#errorMsg")
let gameResult = document.querySelector(".gameResult")
let openPopup = document.querySelector(".open-popup")
let wordleGameShareLink = document.querySelector(".wordle-game-share-link")
let wordleGameCopyLink = document.querySelector(".wordle-game-copy-link")
let ResutlGuessWord = document.querySelector(".guess-word")
let answer = document.querySelector("#answer")
let facebookSHareLink = document.querySelector(".facebook-share-link")
let twitterSHareLink = document.querySelector(".twitter-share-link")
let whatsappSHareLink = document.querySelector(".whatsapp-share-link")

document.querySelector(".navbar").style.display = "none"
document.querySelector(".tools_headings").style.display = "none"
document.querySelector(".ads_layout").style.display = "none"
document.querySelector(".relatedPosts").style.display = "none"
document.querySelector(".footer-section").style.display = "none"
document.querySelector(".rating-tool").style.display = "none"

let wordleTime = document.querySelector(".wordle-time")
let gameResultTime = document.querySelector("#game-result-time")
let wordleRunningTimer = document.querySelector("#wordle-running-timer")
// wordleRunningTimer.innerHTML = "00:00"



let tile = document.querySelector('.tile')
let x = window.matchMedia("(min-width: 768px)")
if (x.matches) {
    tile.focus()
}
// function limitKeypress(event, maxLength) {
//     event.target.value = event.target.value.replace(/[^a-zA-Z? ]/g, '')
//     event.target.value = event.target.value.substring(0, maxLength)
// }


let second = 0
let minutes = 0
let clear
let bool = false
function startTime() {
    second++
    if (second == 59) {
        minutes++
        second = 0
    }
    min = checkTime(minutes)
    sec = checkTime(second)

    // console.log(min + ":" + sec)

    wordleRunningTimer.innerText = min + ":" + sec
    gameResultTime.innerHTML = "Your game ended :" + " " + min + ":" + sec

    clear = setTimeout(function () {
        startTime()
    }, 1000)
}
function expriyTime() {
    clearInterval(clear)
}
function checkTime(i) {
    if (i < 10) {
        i = '0' + i
    }
    return i
}

// wordleTime.addEventListener("click", (() => {
//     if (bool) {
//         bool = false
//         wordleRunningTimer.style.display = "block"
//     } else {
//         bool = true
//         wordleRunningTimer.style.display = "none"
//     }
// }))

let dictionary
let attempt = 0
async function getData() {
    const response = await fetch("/dictionary.json")
    const data = await response.json()
    dictionary = data
}
getData()

const handleClick = (e) => {
    if (e.target.matches("[data-key]")) {
        pressCount++;
        if (pressCount == 1) {
            startTime()
        }
        pressKey(e.target.dataset.key)
        return
    }
    if (e.target.matches("[data-enter]")) {
        handleSubmit()
        return
    }
    if (e.target.matches("[data-delete]")) {
        deleteKey()
        return
    }
}
let pressCount = 0;
const handleKeyPress = (e) => {
    pressCount++;
    if (pressCount == 1) {
        startTime()
    }
    if (e.key === "Enter") {
        handleSubmit()
        return
    }
    if (e.key === "Delete" || e.key === "Backspace") {
        deleteKey()
        return
    }
    if (e.key.match(/^[a-zA-Z]$/)) {
        pressKey(e.key)
        return
    }
}
const getActiveTiles = () => {
    return gameBoard.querySelectorAll('[data-state="active"]')
}
const pressKey = (key) => {
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= wordLength) return
    const nextTile = gameBoard.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.dataset.state = "active"
    nextTile.classList.add("popAni")
    nextTile.value = key
    let x = window.matchMedia("(min-width: 768px)")
    if (x.matches) {
        nextTile.focus()
    }

    nextTile.style.border = "2px solid #a7adc0"
}
const deleteKey = () => {
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length - 1]
    if (lastTile == null) return
    lastTile.value = ""
    let x = window.matchMedia("(min-width: 768px)")
    if (x.matches) {
        lastTile.focus()
    }
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
    lastTile.style.border = "2px solid #dee1e9"
    lastTile.classList.remove("popAni")
}

const handleSubmit = () => {
    const allTiles = [...getActiveTiles()]
    if (allTiles.length !== wordLength) {
        showAlertMessage("Not enough letters")
        shakeTiles(allTiles)
        return
    }
    const guessWord = allTiles.reduce((word, tile) => {
        return word + tile.dataset.letter
    }, "")


    if (guessWord === targetWord) {
    } else {
        if (!dictionary.includes(guessWord)) {
            showAlertMessage("Not a valid word")
            shakeTiles(allTiles)
            return
        }
    }

    stopAllEventListeners()
    let matchLetters = [...targetWord]
    let matchedLettersCount = matchLetters.reduce((obj, letter) => {
        if (obj[letter]) {
            obj[letter]++;
            return obj;
        }

        obj[letter] = 1;
        return obj;
    }, {})
    evaluateTiles(allTiles, matchedLettersCount, guessWord)
}
const evaluateTiles = (allTiles, matchedLettersCount, guessWord) => {
    let reEvaluate = []
    allTiles.map((tile, index) => {
        tile.setAttribute("disabled", true)
        if (targetWord !== guessWord) {
            setTimeout(() => {
                tile.classList.add("flip")
            }, (index * ANIMATION_DURATION) / 2)

            tile.addEventListener(
                "transitionend",
                () => {
                    tile.classList.remove("flip")
                })
        }
        let letter = tile.dataset.letter
        let key = keyboard.querySelector(`[data-key="${letter}"i]`)
        if (targetWord[index] === letter) {
            tile.dataset.state = "correct-spot"
            key.dataset.state = "correct-spot"
            matchedLettersCount[letter]--;
            return
        }
        reEvaluate.push(tile)
    })
    reEvaluate.map((tile) => {
        let letter = tile.dataset.letter
        let key = keyboard.querySelector(`[data-key="${letter}"i]`)
        if (matchedLettersCount[letter] > 0) {
            tile.dataset.state = "wrong-spot"
            key.dataset.state = "wrong-spot"
            matchedLettersCount[letter]--;
        }
        else {
            tile.dataset.state = "wrong-word"
            key.dataset.state = "wrong-word"
        }
    })
    startAllEventListeners()
    gameOver(guessWord, allTiles)
}
const shakeTiles = (tiles) => {
    tiles.forEach(tile => {
        tile.classList.add("shake")
        tile.addEventListener('animationend', () => {
            // console.log('Animation ended');
            tile.classList.remove("shake")
        });
    })
}
const gameOver = (guessWord, tiles) => {
    attempt++
    const danceTiles = (tiles) => {
        tiles.forEach((tile) => {
            tile.classList.add("dance")
            tile.addEventListener("animationend", () => {
                tile.classList.remove("dance")
            })
        })
    }
    if (guessWord === targetWord) {
        expriyTime()
        // console.log(`Wordle guessed in ${attempt}/6!`)
        facebookSHareLink.setAttribute("href",
            `https://www.facebook.com/share.php?u=${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}&quote=
             I guessed this wordle in ${attempt}/6 tries. Can you do better ? 
             Try this wordle: 
             ${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}`)

        twitterSHareLink.setAttribute("href",
            `https://www.twitter.com/compose/tweet?&text=I guessed this wordle in ${attempt}/6 tries. 
                                                                          Can you do better ? Try this wordle: ${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}`)

        whatsappSHareLink.setAttribute("href", `whatsapp://send?text=I guessed this wordle in ${attempt}/6 tries.
                                                                         Can you do better ? Try this wordle: ${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}`)

        startConfetti()
        showAlertMessage("You WON! 🏆")
        stopAllEventListeners()
        danceTiles(tiles)
        setTimeout(() => {
            openPopup.click()
            stopConfetti()
        }, 1500);
        return
    }
    const remainingTiles = gameBoard.querySelectorAll(":not([data-letter])")
    if (remainingTiles.length === 0) {
        expriyTime()
        facebookSHareLink.setAttribute("href",
            `https://www.facebook.com/share.php?u=${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}&quote=
         I guessed this wordle in ${attempt}/6 tries. Can you do better ? 
         Try this wordle: 
         ${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}`)
        twitterSHareLink.setAttribute("href",
            `https://www.twitter.com/compose/tweet?&text=I guessed this wordle in ${attempt}/6 tries. 
                                                                      Can you do better ? Try this wordle: ${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}`)
        whatsappSHareLink.setAttribute("href", `whatsapp://send?text=I guessed this wordle in ${attempt}/6 tries.
                                                                     Can you do better ? Try this wordle: ${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}`)
        showAlertMessage("You LOST!")
        setTimeout(() => {
            openPopup.click()
        }, 1000);
        stopAllEventListeners()
    }

}
const startAllEventListeners = () => {
    document.addEventListener("keydown", handleKeyPress)
    document.addEventListener("click", handleClick)
}
startAllEventListeners()

const stopAllEventListeners = () => {
    document.removeEventListener("click", handleClick)
    document.removeEventListener("keydown", handleKeyPress)
}
const showAlertMessage = (msg) => {
    if (msg === "You LOST!") {
        answer.innerText = "The answer was"
    }

    ResutlGuessWord.innerHTML = targetWord
    gameResult.innerHTML = msg
    errorMsg.innerHTML = msg

    alertContainer.classList.add("active-alert")
    setTimeout(() => {
        alertContainer.classList.remove("active-alert")
    }, 1000)
}
const copyToClipboard = (str) => {
    try {
        const el = document.createElement('textarea')
        el.value = str
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        errorMsg.innerHTML = "Copied !"
        alertContainer.classList.add("active-alert")
        setTimeout(() => {
            alertContainer.classList.remove("active-alert")
        }, 1000)
    } catch (error) {
        console.log(error)
    }
}
wordleGameCopyLink.addEventListener('click', () => {
    copyToClipboard(`${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}`)
})
wordleGameShareLink.addEventListener('click', () => {
    copyToClipboard(`${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${(serachValue)}`)
})



