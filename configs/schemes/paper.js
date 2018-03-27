const red = 'e41f4b'
const fireRed = 'b42f24'
const pink = 'e400e1'
const magenta = '8d4ccb'
const orange = 'eb8500'
// const cyan = '318495'
const cyan = 'c8dcff'
// const cyanLight = '606aa1'
const cyanLight = '2459c5'
const neonGreen = '00ca35'
const green = '459730'

const baseColors = {
  red,
  orange: pink,
  yellow: cyan,
  green: neonGreen,
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
    red: fireRed,
    orange: magenta,
    yellow: cyanLight,
    green,
    cyan: cyanLight,
    blue: '143ccd',
    magenta,
    darkRed: fireRed,
  })
}
