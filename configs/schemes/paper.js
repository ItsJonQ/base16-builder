const termColors = require('../colors/term')
const baseColors = termColors.baseColors
const baseLightColors = termColors.baseLightColors

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
    base07: 'eeeeee'
  },

  baseColors,
  baseLightColors
}
