const { makeBaseColors, makeBaseLightColors } = require('../colors/run')

const baseDark = '2c2634'
const baseLight = 'f4f6fa'

const baseColors = makeBaseColors()

module.exports = {
  name: 'Run',

  cursor: 'ff0080',
  cursorText: 'ffffff',

  vimText: baseLight,
  vimLightText: baseDark,

  baseDark,
  baseLight,

  baseColors: makeBaseColors({
    orange: baseLight,
    blue: baseLight
  }),

  baseLightColors: makeBaseLightColors(baseColors, {
    orange: baseDark,
    green: '569CD6',
    blue: baseDark
  })
}