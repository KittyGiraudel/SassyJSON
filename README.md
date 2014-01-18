# SassyJSON

A Sass API for JSON.

## Example

### Sass

``` sass
$map: ((a: (1 2 ( b : 1 )), b: ( #444444, false, ( a: 1, b: test ) ), c: (2 3 4 string));

@include json-encode($map);
```

### CSS

``` css
/* All browsers except IE8- */
body::before {
  content: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}';
}

/* All browsers except Opera (Presto based) */
head {
  font-family: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}';
}
```

## Requirements

All you need is a clean version of Sass 3.3. Otherwise it's just pure Sass madness.

## Development

### You need

  * [NodeJS](http://nodejs.org)
  * [Ruby](https://www.ruby-lang.org/)
  * Sass 3.3 via `gem instals sass --pre`
  * `grunt-cli` via `npm install -g grunt-cli`

### How to

  1. Fork this repository
  2. Run `npm install`
  3. `grunt dev`
  4. Make your changes + write tests
  5. Commit + Pull request

## Credits

Thanks to [Fabrice Weinberg](http://github.com/fweinb).
