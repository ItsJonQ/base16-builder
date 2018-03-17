const darken = require('../utilities/color').darken

const baseDark = '494f30'
const baseLight = 'e7f954'

module.exports = {
  name: 'Gameboy',
  monochrome: true,

  baseDark,
  baseLight,

  basePaletteColors: {
    base00: '494F30',
    base01: '4F5634',
    base02: '757E4D',
    base03: 'A0AA74',

    base04: darken(baseLight, 0.4),
    base05: darken(baseLight, 0.3),
    base06: darken(baseLight, 0.2),
    base07: baseLight
  },

  baseColors: {
    red: baseLight,
    orange: baseLight,
    yellow: baseLight,
    green: baseLight,
    cyan: baseLight,
    blue: baseLight,
    magenta: baseLight,
    darkRed: baseLight,
  },
}
