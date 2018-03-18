const baseColorsSoft = require('../colors/soft')
const darken = require('../utilities/color').darken

const baseDark = '282c34'
const baseLight = 'eff1f5'

const green = '84e179'
const pink = 'ff5a90'
const yellow = 'f0c674'

const darkGreen = darken(baseColorsSoft.green)
const darkPink = darken(pink)
const darkYellow = darken(yellow, 0.25)

module.exports = {
  name: 'UV',

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
