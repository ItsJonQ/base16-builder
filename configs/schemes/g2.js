const makeColor = require('../colors/overwatch')

const mainColor = '31c794'
const baseDark = '11151c'
const baseLight = '9bd1cf'

module.exports = Object.assign(makeColor(mainColor, baseDark, baseLight), {
  name: 'G2',
  monochrome: true,
})
