const red = 'd03d69'
const pink = 'e400e1'
const magenta = '8d4ccb'
const orange = 'eb8500'
const cyan = '318495'
const green = '459730'

// const baseText = 'f3f3f3'
// const baseLightText = '0c0c0c'
const baseText = baseLightText = cyan

const baseColors = {
  red,
  orange: pink,
  yellow: baseText,
  green,
  cyan,
  blue: '328cff',
  magenta: pink,
  darkRed: red
}

module.exports = {
  name: 'Paper',

  cursor: '50E3C2',
  cursorText: '000000',

  baseDark: '000000',
  baseLight: 'ffffff',

  basePaletteColors: {
    base00: '000000',
    base01: '0c0c0c',
    base02: '2c2c2c',
    base03: '4c4c4c',

    base04: 'bbbbbb',
    base05: 'dcdcdc',
    base06: 'e5e5e5',
    base07: 'eeeeee',
  },

  baseColors,

  baseLightColors: Object.assign({}, baseColors, {
    orange: magenta,
    yellow: baseLightText,
    blue: '143ccd',
    magenta,
  })
}
