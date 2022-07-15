const fs = require('fs')
let languages = {
    id: 'Bahasa Indonesia',
    da: 'Dansk',
    de: 'Deutsch',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    nl: 'Nederlands',
    pl: 'Polski',
    pt: 'Português',
    sv: 'Svenska',
    vi: 'Tiếng Việt',
    tr: 'Türkçe',
    ru: 'Русский',
    uk: 'Українська',
    ar: 'العربية',
    hi: 'हिन्दी',
    th: 'ภาษาไทย',
    ko: '한국어',
    ja: '日本語',
    zh: '简体中文',
    'zh-tw': '繁體中文',
}






























// for (let [lang] of Object.entries(languages)) {
//     for (let i = 10; i <= 17; i++) {
//         let value
//         let string
//         if (i === 10) {
//             value = 6
//             string = "six"
//         }
//         else if (i === 11) {
//             value = 7
//             string = "seven"
//         }
//         else if (i === 12) {
//             value = 8
//             string = "eight"
//         }
//         else if (i === 13) {
//             value = 9
//             string = "nine"
//         }
//         else if (i === 14) {
//             value = 10
//             string = "ten"
//         }
//         else if (i === 15) {
//             value = 11
//             string = "eleven"
//         }
//         else if (i === 16) {
//             value = 12
//             string = "twelve"
//         }
//         else if (i === 17) {
//             value = 13
//             string = "thirteen"
//         }
//         let htmlfile = `${string}_letter_words_with_these_letters` + '.json'

//         fs.mkdir(
//             `./word-game/${lang}` + htmlfile,
//             function () { }
//         )
//     }
// }


// for (let [lang] of Object.entries(languages)) {
//     let htmlfile, htmldata
//     for (let i = 6; i <= 17; i++) {
//         let value
//         let string
//         if (i === 6) {
//             value = 2
//             string = "two"
//         }
//         else if (i === 7) {
//             value = 3
//             string = "three"
//         }
//         else if (i === 8) {
//             value = 4
//             string = "four"
//         }
//         else if (i === 9) {
//             value = 5
//             string = "five"
//         }
//         else if (i === 10) {
//             value = 6
//             string = "six"
//         }
//         else if (i === 11) {
//             value = 7
//             string = "seven"
//         }
//         else if (i === 12) {
//             value = 8
//             string = "eight"
//         }
//         else if (i === 13) {
//             value = 9
//             string = "nine"
//         }
//         else if (i === 14) {
//             value = 10
//             string = "ten"
//         }
//         else if (i === 15) {
//             value = 11
//             string = "eleven"
//         }
//         else if (i === 16) {
//             value = 12
//             string = "twelve"
//         }
//         else if (i === 17) {
//             value = 13
//             string = "thirteen"
//         }

//         htmlfile = `result${i}` + '.md'
//         htmldata = `---
// layout: page2
// folderName: wordgames
// lang: ${lang}
// fileName: ${string}_letter_words_with_these_letters
// permalink: ${lang}/${string}-letter-words-with-these-letters/result
// letter: ${value}
// sitemap: false
// nointernationalization: true   
// ---
// `
//         fs.writeFileSync(
//             `./result_pages/${lang}/` + htmlfile,
//             htmldata,
//             function () { }
//         )
//     }

// }


// for (let [lang] of Object.entries(languages)) {
//     let htmlfile, htmldata
//     for (let i = 2; i <= 15; i++) {
//         htmlfile = `${i}-letter-words-with-these-letters-and-a-blank` + '.md'
//         htmldata = `---
// layout: default
// folderName: wordgames
// lang: ${lang}
// fileName: ${i}_letter_words_with_these_letters_and_a_blank
// permalink: ${lang}/${i}-letter-words-with-these-letters-and-a-blank
// tool: ${i}-letter-words-with-blanks
// letter: ${i}
// ---
// `
//         fs.writeFileSync(
//             `./X-letter-words_pages/${lang}/` + htmlfile,
//             htmldata,
//             function () { }
//         )
//     }

// }


// for (let [lang] of Object.entries(languages)) {
//     let htmlfile, htmldata
//     for (let i = 2; i <= 15; i++) {
//         htmlfile = `wordle-solver-result` + '.md'
//         htmldata = `---
// layout: tools
// folderName: wordgames
// lang: ${lang}
// fileName: resultData
// permalink: ${lang}/wordle-solver/result
// sitemap: false
// nointernationalization: true
// ---
// <style>
//     .ads_layout{
//         display:none !important;
//     }
// </style>
// {%- include wordle-solver/wordle-solver.html -%}       
// `
//         fs.writeFileSync(
//             `./result_pages/${lang}/` + htmlfile,
//             htmldata,
//             function () { }
//         )
//     }

// }


// for (let [lang] of Object.entries(languages)) {
//     const htmlfile = `words-spelled-with-these-letters` + '.md'
//     const htmldata = `---
// layout: default
// folderName: wordgames
// lang: ${lang}
// permalink: ${lang}/words-spelled-with-these-letters
// fileName: words_spelled_with_these_letters
// tool: word-spelled-with-these-letters       
// ---
// `
//     fs.writeFileSync(
//         `./words-from-letter_pages/${lang}/` + htmlfile,
//         htmldata,
//         function () { }
//     )
// }

// for (let [lang] of Object.entries(languages)) {
//     const htmlfile = `result18` + '.md'
//     const htmldata = `---
// layout: page
// folderName: wordgames
// lang: ${lang}
// fileName: what-words-can-I-spell-with-these-letters-and-a-blank
// permalink: ${lang}/what-words-can-i-spell-with-these-letters-and-a-blank/result
// sitemap: false
// blanktilerange: 1
// nointernationalization: true
// ---
// `
//     fs.writeFileSync(
//         `./result_pages/${lang}/` + htmlfile,
//         htmldata,
//         function () { }
//     )
// }



// for (let [lang] of Object.entries(languages)) {
//     const htmlfile = `result5` + '.md'
//     const htmldata = `---
// layout: page
// folderName: wordgames
// lang: ${lang}
// permalink: ${lang}/words-spelled-with-these-letters/result
// fileName: words_spelled_with_these_letters
// sitemap: false
// nointernationalization: true
// ---
// `
//     fs.writeFileSync(
//         `./result_pages/${lang}/` + htmlfile,
//         htmldata,
//         function () { }
//     )
// }


