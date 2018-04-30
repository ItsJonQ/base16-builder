const darken = require('../utilities/color').darken

const gold = 'ffc98b'
const green = '8dc891'
const indigo = '8390f1'
const orange = 'f78c6c'
const pink = 'ff5a90'
const cyan = '8BE9FD'

const baseColors = {
  red: pink,
  orange: orange,
  yellow: gold,
  green: cyan,
  cyan,
  blue: '82b1ff',
  magenta: 'be3c64',
  darkRed: pink,
}

const makeBaseColors = props => ({...baseColors, ...props })
const makeBaseLightColors = (baseProps, baseLightProps) => {
  const baseColors = makeBaseColors(baseProps)
  return {
    ...baseColors,
    red: darken(baseColors.red, 0.1),
    orange: darken(baseColors.orange, 0.1),
    yellow: darken(baseColors.yellow, 0.1),
    green: darken(baseColors.green, 0.1),
    cyan: darken(baseColors.cyan, 0.1),
    blue: darken(baseColors.blue, 0.1),
    magenta: darken(baseColors.magenta, 0.1),
    darkRed: darken(baseColors.darkRed, 0.1),
    ...baseLightProps
  }
}

const baseLightColors = makeBaseLightColors()

module.exports = {
  baseColors,
  baseLightColors,
  makeBaseColors,
  makeBaseLightColors,
}
