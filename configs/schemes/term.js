const red = 'c41a15'
const magenta = 'e400e1'
const orange = 'eb8500'
const cyan = '318495'

// const baseText = 'f3f3f3'
// const baseLightText = '0c0c0c'
const baseText = baseLightText = cyan

const baseColors = {
  red,
  orange: magenta,
  yellow: baseText,
  green: '00ca35',
  cyan,
  blue: '328cff',
  magenta,
  darkRed: red
}

module.exports = {
  name: 'Term',

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
    yellow: baseLightText,
    blue: '143ccd',
  })
}
