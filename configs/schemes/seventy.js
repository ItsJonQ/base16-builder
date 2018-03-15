const baseColors = require('../colors/soft')
const withColor = require('../utilities/withColor')
const hexColor = require('../utilities/withTemplate').hexColor

const darken = (color) => hexColor(withColor(color).darken(0.08))
const baseDark = '282c34'
const baseLight = 'eff1f5'

module.exports = {
  name: 'Seventy',

  baseDark,
  baseLight,

  baseColors: Object.assign({}, baseColors, {
    yellow: baseLight
  }),

  baseLightColors: Object.assign({}, baseColors, {
    orange: darken(baseColors.orange),
    yellow: baseDark,
  })
}
