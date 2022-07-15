let getScript = document.currentScript
let fileName = getScript.dataset.filename
let permalink = getScript.dataset.permalink
let form = document.querySelector('[name=verify')
let greenLetters = document.querySelectorAll('.greenLetters')
let yellowLetters = document.querySelectorAll('.yellowLetters')
let greyLetters = document.querySelectorAll('.greyLetters')
greenLetters[0].focus()

for (let g = 0; g < greenLetters.length; g++) {
  const elem = greenLetters[g]
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
  elem.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z? ]/g, "")
    if (e.target.value) {
      e.target.classList.add('ws-fcs3')
    } else {
      e.target.classList.remove('ws-fcs3')
    }
  })
}

function handleSubmit(e) {
  e.preventDefault()
  let corretLettterArray = []
  Array.from(greenLetters).map((item) => {
    if (!item.value) {
      corretLettterArray.push(item.value.replace("", "_"))
    } else {
      corretLettterArray.push(item.value)
    }
  })
  let includesLettterArray = []
  Array.from(yellowLetters).map((item) => {
    if (!item.value) {
      includesLettterArray.push(item.value.replace("", "_"))
    } else {
      includesLettterArray.push(item.value)
    }
  })
  let exculdesLettterArray = []
  Array.from(greyLetters).map((item) => {
    if (!item.value) {
      exculdesLettterArray.push(item.value.replace("", "_"))
    } else {
      exculdesLettterArray.push(item.value)
    }
  })

  window.location = `/${permalink}/result` + '?' + "correct" + "=" + corretLettterArray.join("")
    + '&includes' + '=' + includesLettterArray.join("") + "&excludes" + '=' + exculdesLettterArray.join("")
}
form.addEventListener('submit', handleSubmit)