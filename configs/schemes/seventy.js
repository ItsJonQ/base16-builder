const baseColors = require('../colors/soft')
const darken = require('../utilities/color').darken

const baseDark = '282c34'
const baseLight = 'eff1f5'
const yellow = baseColors.cyan

module.exports = {
  name: 'Seventy',

  baseDark,
  baseLight,

  baseColors: Object.assign({}, baseColors, {
    yellow
  }),

  baseLightColors: Object.assign({}, baseColors, {
    green: darken(baseColors.green),
    yellow: darken(yellow),
  })
}
