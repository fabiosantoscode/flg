'use strict'

module.exports = function (s, defaults) {
  s = s || ''
  var tags = s.split(/(\s+|(?=[+-]))/)
  var out = defaults || {}
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].trim() === '') {
      continue
    }
    var isOn = tags[i][0] !== '-'
    out[tags[i].replace(/^[-+]/, '')] = isOn
  }
  return out
}

module.exports.stringify = function (object, defaults) {
  var out = ''
  for (var key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      var value = Boolean(object[key])
      var defaultValue = defaults && Boolean(defaults[key])
      if (defaults && value === defaultValue) {
        continue
      }
      out += value === true
        ? ' +' + key
        : ' -' + key
    }
  }
  return out.substring(1)  // trim starting space
}

