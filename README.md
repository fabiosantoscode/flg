# FLG

[![Build Status](https://travis-ci.org/fabiosantoscode/flg.svg?branch=master)](https://travis-ci.org/fabiosantoscode/flg) [![Coverage Status](https://coveralls.io/repos/github/fabiosantoscode/flg/badge.svg?branch=master)](https://coveralls.io/github/fabiosantoscode/flg?branch=master)

Flg is the simplest thing ever. You give it a string with "+" and "-" and flags in it, and it returns an object.

```javascript
var flags = flg('+foo -bar +baz')
flags  // -> { foo: true, bar: false, baz: true }
```

It also does defaults.

```javascript
var defaults = { foo: false, bar: true }
var flags = flg('+foo', defaults)
flags  // -> { foo: true, bar: true }
```

The plus sign is implied. And spaces are optional.

```javascript
flg('foo')  // -> { foo: true }
flg('-foo+bar')  // -> { foo: false, bar: true }
```

You can also stringify an object into a string.

```javascript
flg.stringify({ foo: true })  // -> '+foo'
```

And if you pass a defaults object, it will omit any values which are the same as the default.

```javascript
var defaults = { foo: false, bar: true }
flg.stringify({ foo: false, baz: true }, defaults) // -> '+baz'
```

