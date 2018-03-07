const Color = require('color')

const withColor = hexColor => {
  const normalizedColor = hexColor.indexOf('#') >= 0 ?
    hexColor : `#${hexColor}`

  return Color(normalizedColor)
}

module.exports = withColor
