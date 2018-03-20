const darken = require('../utilities/color').darken
const lighten = require('../utilities/color').lighten

const baseDark = '141820'
const baseLight = 'f9f9fb'

const mainColor = '289aff'
const subColor = darken(baseLight, 0.15)
const subLightColor = lighten(baseDark, 0.15)
const redColor = darken(baseLight, 0.35)
const redLightColor = lighten(baseDark, 0.4)

module.exports = {
  name: 'Ana',

  baseDark,
  baseLight,

  baseColors: {
    red: redColor,
    orange: subColor,
    yellow: subColor,
    green: mainColor,
    cyan: subColor,
    blue: mainColor,
    magenta: mainColor,
    darkRed: redColor,
  },

  baseLightColors: {
    red: redLightColor,
    orange: subLightColor,
    yellow: subLightColor,
    green: mainColor,
    cyan: subLightColor,
    blue: mainColor,
    magenta: mainColor,
    darkRed: redLightColor,
  }
}
