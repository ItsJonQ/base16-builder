const blue = '3ca0ff'
const cyan = 'c8dcff'
const cyanLight = '2459c5'
const royalBlue = '143ccd'

const fireRed = 'b42f24'
const pink = 'f828eb'
// const red = 'f83355'
const red = 'ee475f'

const orange = 'eb8500'

const green = '459730'
const neonGreen = '00ca35'

const magenta = '8d4ccb'

const baseColors = {
  red,
  orange: pink,
  yellow: cyan,
  green: neonGreen,
  cyan,
  blue,
  magenta: pink,
  darkRed: red
}

const baseLightColors = {
  red: fireRed,
  orange: magenta,
  yellow: cyanLight,
  green,
  cyan: cyanLight,
  blue: royalBlue,
  magenta,
  darkRed: fireRed
}

module.exports = {
  baseColors,
  baseLightColors
}
