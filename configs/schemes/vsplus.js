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


const vsMagenta = 'c88cbe'
const vsOrange = 'ce9178'
const vsYellow = 'dcdcaa'
const vsGreen = '4ec9b0'
const vsCyan = '9cdcfe'
const vsBlue = '569cd6'

const baseColors = {
  red: vsMagenta,
  orange: vsOrange,
  yellow: vsYellow,
  green: vsGreen,
  cyan: vsCyan,
  blue: vsBlue,
  magenta: vsMagenta,
  darkRed: vsMagenta,
}

module.exports = {
  name: 'VSPlus',

  cursor: '50E3C2',
  cursorText: '000000',

  baseDark: '1e1e1e',
  baseLight: 'ffffff',

  basePaletteColors: {
    base00: '1e1e1e',
    base01: '252526',
    base02: '333333',
    base03: '555555',

    base04: 'bbbbbb',
    base05: 'dcdcdc',
    base06: 'f3f3f3',
    base07: 'ffffff',
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
