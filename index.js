'use strict'

module.exports = function (s, defaults) {
  s = s || ''
  var tags = s.split(/\s+/)
  var out = defaults || {}
  for (var i = 0; i < tags.length; i++) {
    var isOn = tags[i][0] !== '-'
    out[tags[i].replace(/^[-+]/, '')] = isOn
  }
  return out
}

