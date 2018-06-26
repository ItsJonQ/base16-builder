const baseColors = require('./one')
const darken = require('../utilities/color').darken

const baseLightColors = {
  red: darken(baseColors.red),
  orange: darken(baseColors.orange),
  yellow: darken(baseColors.yellow),
  green: darken(baseColors.green),
  cyan: darken(baseColors.cyan),
  blue: darken(baseColors.blue),
  magenta: darken(baseColors.magenta),
  darkRed: darken(baseColors.darkRed),
}

module.exports = baseLightColors
