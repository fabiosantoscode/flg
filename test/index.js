'use strict'

var ok = require('assert')

var flg = require('..')

describe('flg', function () {
  it('does what says on the tin', function () {
    ok.deepEqual(flg('+foo -bar +baz'), {
      foo: true,
      bar: false,
      baz: true
    })
  })
  it('does defaults', function () {
    ok.deepEqual(flg('+foo', { foo: false, bar: true }), {
      foo: true,
      bar: true
    })
  })
  it('takes no sign as a plus sign', function () {
    ok.deepEqual(flg('lel'), { lel: true })
    ok.deepEqual(flg('foo lel'), { foo: true, lel: true })
  })
  it('ignores a lack of a space character', function () {
    ok.deepEqual(flg('-foo+bar'), { foo: false, bar: true })
  })
})

describe('flg.stringify', function () {
  it('can stringify objects back to a flg string', function () {
    ok.equal(
      flg.stringify({ foo: true, bar: false, baz: 0 }),
      '+foo -bar -baz'
    )
    ok.equal(flg.stringify({}), '')
  })
  it('can stringify without mentioning defaults', function () {
    var defaults = { foo: true }
    ok.equal(flg.stringify({ foo: true }, defaults), '')
  })
})
