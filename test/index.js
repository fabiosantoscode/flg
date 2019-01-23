'use strict'

var ok = require('assert')

var flg = require('..')

describe('flg', function () {
  it('can take an empty string', function () {
    ok.deepStrictEqual(flg(), {})
  })
  it('does what says on the tin', function () {
    ok.deepStrictEqual(flg('+foo -bar +baz'), {
      foo: true,
      bar: false,
      baz: true
    })
  })
  it('does defaults', function () {
    ok.deepStrictEqual(flg('+foo', { foo: false, bar: true }), {
      foo: true,
      bar: true
    })
  })
  it('takes no sign as a plus sign', function () {
    ok.deepStrictEqual(flg('lel'), { lel: true })
    ok.deepStrictEqual(flg('foo lel'), { foo: true, lel: true })
  })
  it('ignores a lack of a space character', function () {
    ok.deepStrictEqual(flg('-foo+bar'), { foo: false, bar: true })
  })
})

describe('flg.stringify', function () {
  it('can stringify objects back to a flg string', function () {
    ok.strictEqual(
      flg.stringify({ foo: true, bar: false, baz: 0 }),
      '-bar -baz +foo'
    )
    ok.strictEqual(flg.stringify({}), '')
  })
  it('can stringify without mentioning defaults', function () {
    var defaults = { foo: true }
    ok.strictEqual(flg.stringify({ foo: true, bar: false }, defaults), '-bar')
  })
})
