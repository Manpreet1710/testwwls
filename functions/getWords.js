const axios = require('axios')
const scrabble = require('./Dictonary/en-scrabble')
const swSowpods = require('./Dictonary/en-sowpods')
const swTwl06 = require('./Dictonary/en-twl06')
const swEnable = require('./Dictonary/en-enable')
const twl06 = require('./Dictonary/twl06.js')
const sowpods = require('./Dictonary/sowpods.js')
const words = require('./Dictonary/scrabbleword.js')
const enable = require('./Dictonary/enable.js')

exports.handler = function (event, context, callback) {
  let data = []
  let resultArr = []
  let request_data = event['queryStringParameters']
  let name = request_data['name']
  let selectedDictionary = request_data['selecteddictionary']
  let dictionaryData = []
  if (selectedDictionary === 'Dictionary') {
    dictionaryData = [...words]
    resultArr = words
    data = scrabble(name)
  } else if (selectedDictionary === 'sowpods') {
    dictionaryData = [...sowpods]
    resultArr = sowpods
    data = swSowpods(name)
  } else if (selectedDictionary === 'twl06') {
    dictionaryData = [...twl06]
    resultArr = twl06
    data = swTwl06(name)
  } else {
    dictionaryData = [...enable]
    resultArr = enable
    data = swEnable(name)
  }

  let newArr = []
  if (name.includes('?')) {
    const searchWord = (wordToSearch) => {
      let blankTileCount = wordToSearch.split('').filter((i) => i === '?').length
      wordToSearch = wordToSearch.replace(/\?/g, '')
      dictionaryData.map((word, index) => {
        let missedCase = 0
        let matchedCase = 0
        let searchWord = wordToSearch.split('')
        for (let i = 0; i < searchWord.length; i++) {
          if (word.includes(searchWord[i])) {
            word = word.replace(searchWord[i], '')
            matchedCase++
          }
        }
        missedCase = word.length
        if (matchedCase != 0) {
          if (missedCase <= blankTileCount) {
            newArr.push(resultArr[index])
          }
        }
      })
      newArr = [...new Set(newArr)]
    }
    searchWord(name)
  } else {
    newArr = data
  }
  const send = (body) => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Request-With, Content-Type , Accept',
      },
      body: JSON.stringify(newArr),
    })
  }
  //   Perform APi Call
  const getWords = () => {
    axios
      .get()
      .then((res) => send(res.data))
      .catch((err) => send(err))
  }
  //   Make sure method is GET
  if (event.httpMethod == 'GET') {
    getWords()
  }
}
