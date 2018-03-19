const baseColors = require('../colors/soft')
const darken = require('../utilities/color').darken

const baseDark = '282c34'
const baseLight = 'eff1f5'
const cyan = baseColors.cyan

module.exports = {
  name: 'Seventy',

  baseDark,
  baseLight,

  baseColors: Object.assign({}, baseColors, {
    orange: cyan,
    yellow: cyan
  }),

  baseLightColors: Object.assign({}, baseColors, {
    green: darken(baseColors.green),
    orange: darken(cyan),
    yellow: darken(cyan),
  })
}
