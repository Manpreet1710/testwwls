let form = document.querySelector('[name=verify')

let greenLetters = document.querySelectorAll('.greenLetters')
let yellowLetters = document.querySelectorAll('.yellowLetters')
let greyLetters = document.querySelectorAll('.greyLetters')
let wordleSolverData = document.getElementById('wordleSolverData')
greenLetters[0].focus()
let wordleWordCount = document.querySelector('#wordleWordCount')
let wordleSolvererrorMsg = document.querySelector('#wordleSolvererrorMsg')
let wordlesolver_submit = document.getElementById('wordlesolver_submit')
let newWordsLength = 0

let errMessage = document.querySelector('.errMessage')
let wrapper_div = document.querySelector('.wrapper_div')

const params = new URLSearchParams(window.location.search)
let correct = params.get('correct')
let includes = params.get('includes')
let excludes = params.get('excludes')


// let addMore = document.querySelector('#addMore')

// addMore.addEventListener('click', (e) => {
//   e.preventDefault()
//   let div = document.createElement('div')
//   div.classList.add('d-flex')
//   div.classList.add('mt-2')

//   for (let i = 20; i <= 24; i++) {
//     let input = document.createElement('input')
//     input.type = 'text'
//     input.setAttribute('maxlength', '1')
//     input.setAttribute('autocomplete', 'off')
//     if (i <= 24) {
//       input.setAttribute('tabIndex', i)
//     }
//     let classes = ['wordleSolver-field', 'greyLetters', 'form-control', 'px-5']
//     input.classList.add(...classes)
//     input.id = 'greyLetters'
//     div.append(input)
//     wrapper_div.append(div)
//   }
// })

let spinner = document.querySelector('.spinner')
const wordleSolver = async (value, value2, value3, greenWithIndex) => {
    try {
        let result = ''
        document.querySelector('#updateTxt').innerHTML = ''
        spinner.classList.add('spinner-border')
        wordleWordCount.innerHTML = 'Searching for best possible letters...'
        let response = await fetch('/.netlify/functions/wordleSolver', {
            method: 'POST',
            body: JSON.stringify({
                greenLetters: value,
                yellowLetters: value2,
                greyLetters: value3,
                greenWithIndex: greenWithIndex,
            }),
        })
        let data = await response.json()
        data = data.slice(0, 1000)
        document.querySelector('#updateTxt').innerHTML = 'Solve'
        spinner.classList.remove('spinner-border')

        let ok = true
        if (data.length === 0) {
            newWordsLength = ''
            wordleSolverData.innerHTML = ''
            wordleSolvererrorMsg.classList.add('alert-danger')
            wordleSolvererrorMsg.innerHTML = 'Sorry!! No words found'
            wordleWordCount.style.display = 'none'
            // console.log(wordleWordCount)
        } else {
            wordleWordCount.style.display = 'block'
            wordleSolverData.innerHTML = ''
            wordleSolvererrorMsg.classList.remove('alert-danger')
            wordleSolvererrorMsg.innerHTML = ''
            newWordsLength = ''
            newWordsLength += data.length
            result = data.map((item) => {
                if (item.length === 1) {
                    ok = false
                    newWordsLength = newWordsLength - 1
                } else {
                    // console.log(newWordsLength);
                    let ScrabbleLetterScore = ScrabbleScore()
                    sum = 0
                    item = item.toLowerCase()
                    for (let i = 0; i < item.length; i++) {
                        sum += ScrabbleLetterScore[item[i]] || 0 // for unknown characters
                    }
                    return `
          <a class="anchor__style" title="Lookup ${item} in Dictionary" target="_blank" href="/word-meaning?search=${item.toLowerCase()}">
          <li>
          ${item.toLowerCase()}
          <span class="points" value="${sum}" style="position:relative; top:4px; font-size:12px"> ${sum}</span>
          </li>
          </a>
          `
                }
            })
            if (ok) {
                wordleSolverData.innerHTML += `
            <div class="allfiveletterswords wordlistContainer">
                <div class="wordListHeading">
                    <h3 class="lead">Solve wordle with these words</h3>
                </div>
                <div class="wordList">
                    <ul class="ul list-unstyled">
                     ${result.join('')}
                    </ul>
                </div>
            </div>
            `
            }
        }

        if (newWordsLength === 0) {
            console.log(true)
            wordleSolvererrorMsg.classList.add('alert-danger')
            wordleSolvererrorMsg.innerHTML = 'Sorry!! No words found'
        } else {
            wordleWordCount.innerHTML = `<strong>Found <span style="color:#20a815">${newWordsLength}</span> matching words for wordle</strong>`
        }
    } catch (error) {
        console.log(error)
    }
}

for (let g = 0; g < greenLetters.length; g++) {
    const elem = greenLetters[g]
    let values = correct.split("")
    values.map((item, index) => {
        if (Number(elem.dataset.id) === index) {
            elem.value = item.replace("_", "")
            if (elem.value != "") {
                elem.classList.add('ws-fcs')
            }
        }
    })
    elem.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z? ]/g, "")
        if (e.target.value) {
            e.target.classList.add('ws-fcs')
        } else {
            e.target.classList.remove('ws-fcs')
        }
    })
}
for (let y = 0; y < yellowLetters.length; y++) {
    const elem = yellowLetters[y]
    let values = includes.split("")
    values.map((item, index) => {
        if (Number(elem.dataset.id) === index) {
            elem.value = item.replace("_", "")
            if (elem.value != "") {
                elem.classList.add('ws-fcs2')
            }
        }
    })
    elem.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z? ]/g, "")
        if (e.target.value) {
            e.target.classList.add('ws-fcs2')
        } else {
            e.target.classList.remove('ws-fcs2')
        }
    })
}
for (let e = 0; e < greyLetters.length; e++) {
    const elem = greyLetters[e]
    let values = excludes.split("")
    values.map((item, index) => {
        if (Number(elem.dataset.id) === index) {
            elem.value = item.replace("_", "")
            if (elem.value != "") {
                elem.classList.add('ws-fcs3')
            }
        }
    })

    elem.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z? ]/g, "")
        if (e.target.value) {
            e.target.classList.add('ws-fcs3')
        } else {
            e.target.classList.remove('ws-fcs3')
        }
    })
}

const getLetters = (object) => {
    let letters = []
    if (typeof object === 'string') {
        object = document.querySelectorAll(object)
    }
    for (let item of object) {
        if (item.value.trim().length === 1) {
            letters.push(item.value.toLowerCase())
        }
    }
    return letters
}
const getIndexs = (object) => {
    let index = []
    if (typeof object === 'string') {
        object = document.querySelectorAll(object)
    }
    for (let item of object) {
        if (item.value.trim().length === 1) {
            index.push({
                value: item.value.toLowerCase(),
                index: item.dataset.id,
            })
        }
    }
    return index
}


function handleSubmit(e) {
    e.preventDefault()
    document.querySelector(".refineSerach").style.display = "block"
    const scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scroll({ top: 515, behavior: 'smooth' });

    let greenWithIndex = getIndexs('.greenWithIndex')

    let corretLettterArray = []
    let getGreenLetters = []
    Array.from(greenLetters).map((item) => {
        if (!item.value) {
            corretLettterArray.push(item.value.replace("", "_"))
        } else {
            getGreenLetters.push(item.value)
            corretLettterArray.push(item.value)
        }
    })
    let includesLettersArray = []
    let getYellowLetters = []
    Array.from(yellowLetters).map((item) => {
        if (!item.value) {
            console.log(item.value)
            includesLettersArray.push(item.value.replace("", "_"))
        } else {
            getYellowLetters.push(item.value)
            includesLettersArray.push(item.value)
        }
    })
    let excludesLettersArray = []
    let getGreyLetters = []
    Array.from(greyLetters).map((item) => {
        if (!item.value) {
            excludesLettersArray.push(item.value.replace("", "_"))
        } else {
            getGreyLetters.push(item.value)
            excludesLettersArray.push(item.value)
        }
    })

    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host +
            window.location.pathname + '?' + "correct" + "=" + corretLettterArray.join("")
            + '&includes' + '=' + includesLettersArray.join("") + "&excludes" + '=' + excludesLettersArray.join("")
        window.history.pushState({ path: newurl }, '', newurl);

        const params = new URLSearchParams(window.location.search)
        let correct = params.get('correct')
        let includes = params.get('includes')
        let excludes = params.get('excludes')

        gtag('event', 'page_view', {
            page_location: window.location.pathname + location.search,
        })
    }
    wordleSolver(getGreenLetters, getYellowLetters, getGreyLetters, greenWithIndex)
}


if (correct === "" && includes === "" && excludes === "") {
    const scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scroll({ top: 515, behavior: 'smooth' });
    wordleSolver("", "", "", "")
} else {
    window.onload = function (e) {
        handleSubmit(e);
    };
    form.addEventListener('submit', handleSubmit)
}

document.querySelector(".refineSerach").addEventListener("click", () => {
    const scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scroll({ top: 0, behavior: 'smooth' });
})

const ScrabbleScore = () => {
    let twl06_sowpods = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
        l: 1,
        n: 1,
        r: 1,
        s: 1,
        t: 1,
        d: 2,
        g: 2,
        b: 3,
        c: 3,
        m: 3,
        p: 3,
        f: 4,
        h: 4,
        v: 4,
        w: 4,
        y: 4,
        k: 5,
        j: 8,
        x: 8,
        q: 10,
        z: 10,
    }
    return twl06_sowpods
}
