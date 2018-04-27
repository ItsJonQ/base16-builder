const darken = require('../utilities/color').darken

const fireRed = 'd3423e'
const gold = 'ffc98b'
const green = '8dc891'
const indigo = '8390f1'
const orange = 'f78c6c'
const paleGreen = 'c3e88d'
const pink = 'ff5a90'

const baseColors = {
  red: pink,
  orange: orange,
  yellow: gold,
  green,
  cyan: indigo,
  blue: '82b1ff',
  magenta: 'c792ea',
  darkRed: pink,
}

const baseLightColors = {
  ...baseColors,
  red: darken(baseColors.red, 0.1),
  orange: darken(baseColors.orange, 0.1),
  yellow: darken(baseColors.yellow, 0.1),
  green: darken(baseColors.green, 0.1),
  cyan: darken(baseColors.cyan, 0.1),
  blue: darken(baseColors.blue, 0.1),
  magenta: darken(baseColors.magenta, 0.1),
  darkRed: darken(baseColors.darkRed, 0.1),
}

module.exports = {
  baseColors,
  baseLightColors
}
