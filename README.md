# FLG

Flg is the simplest thing ever. You give it a string with "+" and "-" and flags in it, and it returns an object.

```
var flags = flg('+foo -bar +baz')
flags  // -> { foo: true, bar: false, baz: true }
```

It also does defaults.

```
var defaults = { foo: false, bar: true }
var flags = flg('+foo', defaults)
flags  // -> { foo: true, bar: true }
```

The plus sign is implied. And spaces are optional.

```
flg('foo')  // -> { foo: true }
flg('-foo+bar')  // -> { foo: false, bar: true }
```

You can also stringify an object into a string.

```
flg.stringify({ foo: true })  // -> '+foo'
```

And if you pass a defaults object, it will omit any values which are the same as the default.

```
var defaults = { foo: false, bar: true }
flg.stringify({ foo: false, baz: true }, defaults) // -> '+baz'
```

