const baseColorsSoft = require('../colors/soft')
const darken = require('../utilities/color').darken

const baseDark = '141820'
const baseLight = 'f4f2f0'

const green = '84e179'
const pink = 'ff5a90'
const yellow = 'f0c674'

const darkGreen = darken(baseColorsSoft.green)
const darkPink = darken(pink)
const darkYellow = darken(yellow, 0.25)

module.exports = {
  name: 'Universe',

  baseDark,
  baseLight,

  baseColors: {
    red: pink,
    orange: baseLight,
    yellow,
    green,
    cyan: baseLight,
    blue: green,
    magenta: pink,
    darkRed: baseLight,
  },

  baseLightColors: {
    red: darkPink,
    orange: baseDark,
    yellow: darkYellow,
    green: darkGreen,
    cyan: baseDark,
    blue: darkGreen,
    magenta: darkPink,
    darkRed: baseDark,
  }
}
