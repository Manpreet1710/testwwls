const fs = require('fs')
const featuresPath = './_data/wordgames'
const newKeys = {
    tags: [],
    categories: [],
}
let langFolders = fs.readdirSync(featuresPath)
langFolders.map((lang) => {
    let featureFiles = fs.readdirSync(`${featuresPath}/${lang}`)
    featureFiles.map((file) => {
        let fileContent = fs.readFileSync(`${featuresPath}/${lang}/${file}`)
        fileContent = JSON.parse(fileContent)
        let newContent = { ...fileContent, ...newKeys }
        fs.writeFileSync(
            `${featuresPath}/${lang}/${file}`,
            JSON.stringify(newContent)
        )
    })
})