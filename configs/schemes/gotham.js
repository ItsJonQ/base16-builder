const makeColor = require('../colors/overwatch');

const mainColor = '36b98e';
const baseDark = '11151c';
const baseLight = '6ca8b8';

module.exports = Object.assign(makeColor(mainColor, baseDark, baseLight), {
  name: 'Gotham',
});
