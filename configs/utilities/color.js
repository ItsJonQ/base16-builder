const withColor = require('./withColor')

const adjustmentValue = 0.08

const hexColor = color => color.hex().replace('#', '')
const darken = (color, value = adjustmentValue) => hexColor(withColor(color).darken(value))

module.exports = {
  darken,
  hexColor
}
