const baseColors = require('../colors/soft')
const withColor = require('../utilities/withColor')
const hexColor = require('../utilities/withTemplate').hexColor

const darken = (color, value = 0.08) => hexColor(withColor(color).darken(value))
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
    yellow: darken(yellow),
  })
}
