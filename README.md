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

Boom.

