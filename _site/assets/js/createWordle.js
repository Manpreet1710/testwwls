let customWord = document.querySelector(".custom-word")
let generateLinkButton = document.querySelector(".generate-word-game-link")
let wordleGameLink = document.querySelector(".wordle-game-link")
let copy_btn = document.querySelector(".copy-btn")


let wordlePlayButton = document.querySelector("#wordle-play-button")
let facebookSHareLink = document.querySelector(".facebook-share-link")
let twitterSHareLink = document.querySelector(".twitter-share-link")
let whatsappSHareLink = document.querySelector(".whatsapp-share-link")

let form = document.querySelector('#create-wordle-form')
let openPopup = document.querySelector(".open-popup")

const alertContainer = document.querySelector(".alert-container")
let errorMsg = document.querySelector("#errorMsg")


customWord.focus()


let dictionary
async function getData() {
    const response = await fetch("/dictionary.json")
    const data = await response.json()
    dictionary = data
}
getData()



const createWordle = (e) => {
    e.preventDefault();

    if (customWord.value.length < 5) {
        errorMsg.innerHTML = "Not enough letters"
        alertContainer.classList.add("active-alert")
        setTimeout(() => {
            alertContainer.classList.remove("active-alert")
        }, 1000)
    }
    if (customWord.value.length === 5 && !dictionary.includes(customWord.value.toLocaleLowerCase())) {
        errorMsg.innerHTML = "Not a valid word"
        alertContainer.classList.add("active-alert")
        setTimeout(() => {
            alertContainer.classList.remove("active-alert")
        }, 1000)
    } else {
        if (customWord.value.length === 5) {
            openPopup.click()
            copy_btn.innerHTML = "Copy Link"
            copy_btn.style.background = "dodgerblue"
            wordlePlayButton.setAttribute("href", `/word-game-play?q=${btoa(customWord.value.toLocaleLowerCase())}`)
            wordleGameLink.setAttribute("href", `/word-game-play?q=${btoa(customWord.value.toLocaleLowerCase())}`)
            wordleGameLink.innerHTML = `${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${btoa(customWord.value.toLocaleLowerCase())}`

            facebookSHareLink.setAttribute("href",
                `https://www.facebook.com/share.php?u=${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${btoa(customWord.value.toLocaleLowerCase())}`)
            twitterSHareLink.setAttribute("href",
                `https://www.twitter.com/compose/tweet?&text=${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${btoa(customWord.value.toLocaleLowerCase())}`)
            whatsappSHareLink.setAttribute("href", `whatsapp://send?text=${window.location.protocol + "//" + window.location.hostname}/word-game-play?q=${btoa(customWord.value.toLocaleLowerCase())}`)
        }
    }
}
form.addEventListener('submit', createWordle);


const copyToClipboard = (str) => {
    try {
        const el = document.createElement('textarea')
        el.value = str
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        copy_btn.innerHTML = "Copied !"
        copy_btn.style.background = "#444"
        // copy_btn.setAttribute('data-tooltip', 'Copied !')
    } catch (error) {
        console.log(error)
    }
}
copy_btn.addEventListener('click', () => {
    copyToClipboard(wordleGameLink.innerHTML)
})
