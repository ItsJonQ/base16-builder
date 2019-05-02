const darken = require('../utilities/color').darken

const red = 'eb6f6b'
const magenta = 'fd70fb'
const orange = 'eb8500'
// const cyan = '318495'
const cyan = '67fdff'
const cyanLight = '606aa1'
const yellow = 'fffe72'
const darkYellow = 'c7c626'

// const baseText = 'f3f3f3'
// const baseLightText = '0c0c0c'
const baseText = (baseLightText = cyan)

const baseColors = {
  red,
  orange: magenta,
  yellow,
  green: '1ac428',
  cyan,
  blue: '328cff',
  magenta,
  darkRed: red,
}

module.exports = {
  name: 'Terminal',

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
    yellow: darkYellow,
    cyan: cyanLight,
    blue: '143ccd',
  }),
}
