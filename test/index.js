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
  it('takes no sign as a plus sign', function () {
    ok.deepEqual(flg('lel'), { lel: true })
  })
  it('does defaults', function () {
    ok.deepEqual(flg('+foo', { foo: false, bar: true }), {
      foo: true,
      bar: true
    })
  })
})
