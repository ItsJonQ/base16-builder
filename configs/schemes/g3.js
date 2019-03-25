const makeColor = require('../colors/overwatch')

const mainColor = 'd06935'
const baseDark = '11151c'
const baseLight = '9bd1cf'

module.exports = Object.assign(makeColor(mainColor, baseDark, baseLight), {
  name: 'G3',
  monochrome: true,
})
