const withColor = require('./withColor')
const hexColor = require('./withTemplate').hexColor

const adjustmentValue = 0.08
const darken = (color, value = adjustmentValue) => hexColor(withColor(color).darken(value))

module.exports = {
  darken
}
