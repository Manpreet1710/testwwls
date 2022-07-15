const fs = require('fs')

// function disp(){
// for (let i = 21; i <= 37; i++) {
// const htmlfile = `${i}-letter-words-with-these-letters-and-a-blank` + '.md'
// const htmldata = `---
// layout: default
// folderName: wordgames
// lang: en
// fileName: ${i}_letter_words_with_these_letters_and_a_blank
// permalink: ${i}-letter-words-with-these-letters-and-a-blank
// tool: ${i}-letter-words-with-blanks
// letter: ${i}
// ---
// `
// fs.writeFile(htmlfile, htmldata,function () {})
// }
// }
// disp()

// result page
// const fs = require('fs')

// function disp(){
// for (let i = 2; i <= 15; i++) {
// const htmlfile = `result-page-${i}-letter-words-with-these-letters-and-a-blank` + '.md'
// const htmldata = `---
// layout: page
// folderName: wordgames
// lang: en
// fileName: ${i}_letter_words_with_these_letters_and_a_blank
// permalink: ${i}-letter-words-with-these-letters-and-a-blank/result
// sitemap: false
// ---
// `
// fs.writeFile(htmlfile, htmldata,function () {})
// }
// }
// disp()

// for json
// const fs = require('fs')

function disp() {
    for (let x = 2; x <= 15; x++) {
        const dataToGenerate = {
            "filewords": {
                "name": "",
                "data": [
                    {
                        "word": "",
                        "x": "",
                        "gameName": ""
                    }
                ]
            },
            "filepath": {},
            "title": `${x} letter words with these letters and a blank- The most useful word finder tool`,
            "h1": `Find all ${x} letter words with these letters and a blank`,
            "h2": `To find the full list of ${x} letter words with these letters and a blank type the letters into the provided text field`,
            "meta": "Looking for a tool that can generate all combination of letters and blanks? Don't worry, this tool can help you decipher your letters.",
            "featureNo": "02",
            "feature_title": "Features",
            "blogNo": "03",
            "blog_title": "Blog",
            "FaqNo": "04",
            "Faq_title": "FAQ",
            "aboutNo": "05",
            "about_title": "About",
            "howto": "How to",
            "featureList": [
                {
                    "feature_heading": "Customization options",
                    "feature_text": `If you want to change the dictionary, you can use our ${x} letter words with these letters and a blank tool to do so. When you use our tool, you can look through 4 different dictionaries at the same time, increasing your chances of finding more words that are meaningful. Choose your favorite game dictionary from the drop-down menu. Dictionary, TWLO6 (US, Canada, and Thailand), SOWPODS (the UK and others), and Enable (Words with Friends) are the dictionary options available to us. If your game isn't listed, or if you're unsure, the Dictionary is a good place to begin. Furthermore, the changes you make will be recorded in our ${x} letter words with these letters and a blank tool. As a result, you will be able to easily generate the words.`,
                    "fa_class": "/assets/images/star.svg"
                },
                {
                    "feature_heading": "Advanced filter options",
                    "feature_text": `Our ${x} letter words with these letters and a blank tool also has an 'advanced filter' option. When you click on the 'Advanced filter' button, a list of options will be displayed. You may narrow down the results by using the criteria that Start with, End with, Must contains, Include, Exclude and have a specific word length. Due to the fact that it will not return any valid words, please exercise caution when using this feature. You also have the option of entering up to five wildcard characters (such as the question mark or the space bar). When employing wildcards, it is really useful. These look a lot like the blank tiles that may be seen in some word games. This is reset with each search; however, the dictionary preference is stored for use in later searches.`,
                    "fa_class": "/assets/images/star.svg"
                },
                {
                    "feature_heading": "Simple and easy to use",
                    "feature_text": `This ${x} letter words tool with these letters and a blank tool is very easy to use. First and foremost, the user interface is clear and simple to use. You won't have to waste time figuring out where to start because everything is in one convenient location. Furthermore, our tool is free of advertisements, resulting in a more pleasant end-user experience. Because our ${x} letter words with these letters and a blank tool was built in the browser, you don't need to install any additional software on your computer or mobile device. As a result, you have complete control over when and how you use it. To complete the registration process, simply enter our website's URL into your browser's address bar.`,
                    "fa_class": "/assets/images/star.svg"
                },
                {
                    "feature_heading": "Free of cost",
                    "feature_text": `Our ${x} letter words with these letters and a blank tool, which is absolutely free to use and has no restrictions, are available to you at any time. It is not necessary to pay to use this tool. To make use of our service, you do not need to register or sign in. You have the power to generate an infinite number of words in a single day if you work hard enough. Also without limits is this one.`,
                    "fa_class": "/assets/images/star.svg"
                },
                {
                    "feature_heading": "No compatibility issues",
                    "feature_text": `When using this ${x} letter words with these letters and a blank tool, users will have no compatibility issues. This website's ${x} letter words with these letters and a blank tool is a web-based service that may be accessed from any device that has access to the Internet. It is compatible with a wide range of major browsers, including Chrome, Safari, Firefox, Microsoft Edge, and many more. The ${x} letter words with these letters and a blank tool automatically adjust to any screen size, allowing you to use it on your desktop computer, tablet computer, or mobile phone, according to your preferences. With this service, you will be able to generate words without having to acquire any additional equipment or install any plug-ins on your computer.`,
                    "fa_class": "/assets/images/star.svg"
                },
                {
                    "feature_heading": "Word game helper",
                    "feature_text": `Every puzzle game, whether it's an anagram or a word problem, becomes increasingly tough as the game proceeds. Aren't these lines correct? Are you seeking word game solutions? You can easily answer any challenge by combining our ${x} letter words with these letters and a blank tool. Consider us a resource that you and your friends can utilize to resolve conflicts regarding the validity of any particular word, rather than a word cheat. Our tool will scan both the UK and US dictionaries in order to identify the most appropriate match for your requirements. To make matters even more convenient, our advanced filter can arrange results according to the criteria you provide, saving you time and effort. ${x} letter words using these letters and a blank tool let you wow your opponent while also increasing your vocabulary like never before!`,
                    "fa_class": "/assets/images/star.svg"
                }
            ],
            "HOW_TO_CONTENT": {
                "logoImageUrl": "/assets/images/howto.svg",
                "heading": `How does this ${x} letter words with these letters and a blank tool work?`,
                "steps": [
                    `Open our ${x} letter words with these letters and a blank tool.`,
                    `Enter the jumbled words into the search field. In the search box, you can type up to  ${x} letters. Up to five wildcards (? or space) may be used.These look like the blank tiles found in some word games.`,
                    `The most interesting thing about this game is that you can make changes in the dictionary. Furthermore, different dictionaries are available in these games, and you can choose one at your leisure. If your game isn't listed or you're unsure, a good place to start is the dictionary.`,
                    "You can further refine your search by using the 'advanced filter' options. To shorten the list of search results that contain too many words, you can also specify the suffix and/or prefix. If you want to filter your words, use the 'advanced filter' options, which include options such as 'Starts with', 'Ends with', 'Must contain', Include, Exclude, and Word length.",
                    "To use the advanced options, open the 'advanced filter' option and make the necessary changes. Find words that contain specific letters by specifying whether you want words that start with, end with, or must include specific letters. You can also specify whether you only want to see words of a specific length.",
                    "Click the search button, which looks like a magnifying glass and is located on the right side of the search bar.",
                    "The search results will be displayed in a variety of list formats. These lists will range from having words made with the most letters given to having words made with the fewest letters given.",
                    "Make a list of every word you can think of based on the letters you've provided. It also shows how many points you'll get if you use this word in a game. The number in the bottom right corner of each word represents the number of points you will receive from that word. Screen reader support enabled."
                ]
            },
            "faqList": [
                {
                    "Question": `Can we broaden our vocabulary by using this ${x} letter words with these letters and a blank tool?`,
                    "Answer": `Definitely, Learning new words is one of the most effective ways to increase your vocabulary. Rather than a word hack, think of us as a reference tool that you and your friends can use to expand your vocabulary. This becomes almost instinctive when you frequently use ${x} letter words with these letters and a blank tool. You will almost certainly come across some unfamiliar words because the tool will generate all valid words that can be made with the letters you provided. Our search engine will look through both UK and US dictionaries to find the best match for your letters. Instead of simply skimming the words, click on the ones that are unfamiliar, and the tool will take you directly to the definition. This method will help you to learn new words and expand your vocabulary on a consistent basis. It's simple and easy to use, and it's a lot of fun to use. However, using the ${x} letter words with these letters and a blank tool on a regular basis can help you improve your vocabulary in addition to being entertaining. Use this tool to learn new things in a fun and engaging manner.`
                },
                {
                    "Question": `How to use advanced options of this ${x} letter words with these letters and a blank tool? `,
                    "Answer": `The ${x} letter words with these letters and a blank tool advanced filter option to help you find word combinations that meet specific criteria. You can use our words with letters tool at any time because it is fully web-based. This tool is simple and easy to use the very first step is to type up to ${x} letters in the box below and then press search and wait for the tool to make words with these letters. We even have an advanced filter by which you can find a word with a given length or that matches a specific pattern. You can use the Starts with, Ends with, Must contains, Include, Exclude, and Word Length options to filter the results. These options will appear when you select the 'advanced filter' button. Please use this tool with attention, else no valid words will be given in the result. Furthermore, ${x} letter words with these letters and a blank tool allow you to use up to 5 wildcards or blank cards in the event that you have 'blank' tiles. The search results on this tool are filtered so that words made with the maximum number of letters from the given scrambled letters appear at the top and words made with the least number letters from the given scrambled letters appear at the bottom.`
                },
                {
                    "Question": `Do I need any installation or registration to use this ${x} letter words with these letters and a blank tool?`,
                    "Answer": `${x} letter words with these letters and a blank tool is an advanced web-based tool. There is no need to download any software or create an account to use this tool. It is safe and simple to use this tool. This program does not require any technical knowledge to be used. It is compatible with a wide range of browsers and works well.`
                },
                {
                    "Question": `What word problem games do this ${x} letter words with these letters and a blank tool help?`,
                    "Answer": `This ${x} letter words with these letters and a blank tool can be used for word puzzles, word problem games, and online word games. ${x} letter words with these letters and a blank tool searche the dictionary for all valid words from your jumbled letters. It's entertaining to play and will help you improve your word skills. Using these letters and a blank tool, you can find high-scoring words that begin with the letters you need to move on. This is similar to Words With Friends and Text Twist. Simply enter the letters into our word search bar, and we'll generate a list of words for you to choose from. Other games include Word Trip, Daily Jumble, Wordscapes, and many more. This tool is beneficial for all word problem games.`
                },
                {
                    "Question": `Can I sort the search results?`,
                    "Answer": "Yes, once the results are displayed, according to the number of results generated, the sort function with appear on the screen."
                },
                {
                    "Question": "What are the sorting options available?",
                    "Answer": "We provide a number of different sorting choices. You have the option of sorting the search results from A-Z or from Z-A. Another approach is to rank the results by the number of points they score on a scrabble board, starting with the highest and working our way down to the lowest."
                },
                {
                    "Question": "Can I know how many points will the word score in a word game?",
                    "Answer": `Yes, absolutely. Using our ${x} letter words with these letters and a blank tool not only provides you with all of the possible word forms based on the words you enter, but it also displays the points you will receive if you use this word in a game. The number in the lower right corner of each word indicates how many points you will receive for that word.`
                },
                {
                    "Question": `Why should we use this ${x} letter words with these letters and a blank tool?`,
                    "Answer": `The reason you should use this ${x} letter words with these letters and a blank tool is that it can help you find hidden words in anagrams and names.When you're playing a word game, this platform will come in handy because it contains a plenty of cool secret words.`
                }
            ],
            "tags": [],
            "categories": []
        } const htmlfile =
            `${x}_letter_words_with_these_letters_and_a_blank` +
            '.json'
        fs.writeFileSync(htmlfile, JSON.stringify(dataToGenerate), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}
disp()