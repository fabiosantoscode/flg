'use strict'

var hop = {}.hasOwnProperty

module.exports = function (s, defaults) {
  s = s || ''
  var tags = s.split(/(\s+|(?=[+-]))/)
  var out = {}
  Object.keys(defaults || {}).forEach(function (key) {
    out[key] = defaults[key]
  })
  return tags.reduce(function (accum, tag) {
    tag = tag.trim()
    if (tag) {
      accum[tag.replace(/^[+-]/, '')] = tag[0] !== '-'
    }
    return accum
  }, out)
}

module.exports.stringify = function (object, defaults, options) {
  options = options || {}
  var out = ''
  var keys = Object.keys(object).sort()
  keys.forEach(function (key, i) {
    var value = !!object[key]
    var hasDefault = defaults && hop.call(defaults, key)
    var defaultValue = defaults && !!defaults[key]
    if (defaults && hasDefault && value === defaultValue) {
      return
    }
    if (options.spaces !== false && i > 0) out += ' '
    out += value === true
      ? '+' + key
      : '-' + key
  })
  return out
}
