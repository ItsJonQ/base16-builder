const glob = require('glob')
const fs = require('fs')
const path = require('path')
const withTemplate = require('./configs/utilities/withTemplate')

const files = glob.sync('./configs/schemes/**/*.js')

const saveFile = (fileName, template) => {
  const yml = fileName.replace('.js', '.yml')
  const ymlPath = path.resolve(`./schemes/${yml}`)
  console.log(ymlPath)

  fs.writeFileSync(ymlPath , template)
}

files.forEach(file => {
  const fileName = path.basename(file)
  const template = withTemplate(require(file))
  saveFile(fileName, template)
})
