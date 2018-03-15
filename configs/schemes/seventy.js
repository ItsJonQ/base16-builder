const baseColors = require('../colors/soft')
const withColor = require('../utilities/withColor')
const hexColor = require('../utilities/withTemplate').hexColor

const darken = (color, value = 0.08) => hexColor(withColor(color).darken(value))
const baseDark = '282c34'
const baseLight = 'eff1f5'
const orange = baseColors.yellow

module.exports = {
  name: 'Seventy',

  baseDark,
  baseLight,

  baseColors,

  baseLightColors: Object.assign({}, baseColors, {
    orange: darken(baseColors.orange),
    yellow: darken(baseColors.orange),
  })
}
