const baseColors = require('../colors/soft')
const withColor = require('../utilities/withColor')
const hexColor = require('../utilities/withTemplate').hexColor

const darken = (color) => hexColor(withColor(color).darken(0.08))
module.exports = {
  name: 'Seventy',

  baseDark: '282c34',
  baseLight: 'eff1f5',

  baseColors,

  baseLightColors: Object.assign({}, baseColors, {
    orange: darken(baseColors.orange),
    yellow: darken(baseColors.yellow),
  })
}
