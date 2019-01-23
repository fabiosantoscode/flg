# FLG

[![Build Status](https://travis-ci.org/fabiosantoscode/flg.svg?branch=master)](https://travis-ci.org/fabiosantoscode/flg) [![Coverage Status](https://coveralls.io/repos/github/fabiosantoscode/flg/badge.svg?branch=master)](https://coveralls.io/github/fabiosantoscode/flg?branch=master)

Flg is the simplest thing ever. You give it a string with "+" and "-" and flags in it, and it returns an object.

## Parse flag string

A flag string is a string including `+flag` or `-flag` or just `flag` tokens, separated by spaces. They tell us what flags are to be turned on or turned off! You can use a flag string to define feature flags.

```javascript
var flags = flg('+foo -bar +baz')
flags // -> { foo: true, bar: false, baz: true }
```

It also does defaults.

```javascript
var defaults = { foo: false, bar: true }
var flags = flg('+foo', defaults)
flags // -> { foo: true, bar: true }
```

The plus sign is implied. And spaces are optional.

```javascript
flg('foo') // -> { foo: true }
flg('-foo+bar') // -> { foo: false, bar: true }
```

## Stringify flag string

(see "parse flag string"'s first paragraph for an explanation on what a flag string is)

You can also stringify an object into a flag string. The flags that come out are sorted alphabetically.

```javascript
flg.stringify({ foo: true }) // -> '+foo'
```

And if you pass a defaults object, it will omit any values which are the same as the default.

```javascript
var defaults = { foo: false, bar: true }
flg.stringify({ foo: false, baz: true }, defaults) // -> '+baz'
```

And you can turn off spaces by doing this

```js
flg.stringify({ foo: true, baz: false }, {}, { spaces: false }) // -> '-baz +foo'
```
