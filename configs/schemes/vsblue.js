const colors = require('../colors/vs')
const lighten = require('../utilities/color').lighten

const {
  baseColors,
  baseLightColors
} = colors

const baseDark = '002451'
const baseLight = 'ffffff'

const basePaletteColors = Object.assign({}, colors.basePaletteColors, {
  base00: baseDark,
  base01: lighten(baseDark, 0.085),
  base02: lighten(baseDark, 0.60),
  base03: lighten(baseDark, 1.25),
})

module.exports = {
  name: 'VS Blue',

  baseDark,
  baseLight,

  basePaletteColors,
  baseColors,
  baseLightColors,
}
