const { basePaletteColors } = require('../colors/solarized')
const { baseColors, baseLightColors } = require('../colors/subtle')

const baseDark = '002b36'
const baseLight = 'fdf6e3'

module.exports = {
  name: 'Solarized',

  baseDark,
  baseLight,

  basePaletteColors: {
    ...basePaletteColors,
    base04: 'B3BDD0',
    base05: 'D9DDE7',
    base06: 'E6E9EF',
    base07: 'EFF1F5',
  },

  baseColors,
  baseLightColors,
}
