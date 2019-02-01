const darken = require('../utilities/color').darken

const red = 'c41a15'
const magenta = 'e400e1'
const orange = 'eb8500'
// const cyan = '318495'
const cyan = '56b6c2'
const cyanLight = '606aa1'
const yellow = 'f0c674'

// const baseText = 'f3f3f3'
// const baseLightText = '0c0c0c'
const baseText = baseLightText = cyan

const baseColors = {
  red,
  orange: magenta,
  yellow,
  green: '00ca35',
  cyan,
  blue: '328cff',
  magenta,
  darkRed: red
}

module.exports = {
  name: 'Term',

  // cursor: '50E3C2',
  // cursorText: '000000',

  baseDark: '000000',
  baseLight: 'ffffff',

  basePaletteColors: {
    base00: '000000',
    base01: '0c0c0c',
    base02: '2c2c2c',
    base03: '4c4c4c',

    base04: 'bbbbbb',
    base05: 'ececec',
    base06: 'f5f5f5',
    base07: 'ffffff',
  },

  baseColors,

  baseLightColors: Object.assign({}, baseColors, {
    yellow: darken(baseColors.yellow),
    cyan: cyanLight,
    blue: '143ccd',
  })
}
