const baseColors = require('../colors/soft')
const withColor = require('../utilities/withColor')
const hexColor = require('../utilities/withTemplate').hexColor

const darken = (color, value = 0.08) => hexColor(withColor(color).darken(value))
const baseDark = '282c34'
const baseLight = 'eff1f5'
const orange = 'f0b260'

module.exports = {
  name: 'Seventy',

  baseDark,
  baseLight,

  baseColors: Object.assign({}, baseColors, {
    orange,
    yellow: darken(baseLight, 0.095)
  }),

  baseLightColors: Object.assign({}, baseColors, {
    orange: darken(orange),
    yellow: baseDark,
  })
}
