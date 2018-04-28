const colors = require('../colors/subtle')
const baseColors = colors.baseColors
const baseLightColors = colors.baseLightColors

const baseDark = '2c2634'
const baseLight = 'fdf6e3'

module.exports = {
  name: 'Verge',

  vimText: baseLight,
  vimLightText: baseDark,

  baseDark,
  baseLight,

  basePaletteColors: {
    base00: '2C2634',
    base01: '302938',
    base02: '463D53',
    base03: '635675',
    base04: 'c8c7bb',
    base05: 'eee8d6',
    base06: 'f8f0dd',
    base07: 'fdf6e3'
  },

  baseColors,
  baseLightColors
}
