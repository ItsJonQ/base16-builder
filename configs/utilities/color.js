const withColor = require('./withColor')

const adjustmentValue = 0.08

const hexColor = color => color.hex().replace('#', '')
const darken = (color, value = adjustmentValue) => hexColor(withColor(color).darken(value))
const lighten = (color, value = adjustmentValue) => hexColor(withColor(color).lighten(value))

module.exports = {
  darken,
  hexColor,
  lighten,
}
