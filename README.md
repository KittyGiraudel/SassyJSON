# SassyJSON

A Sass API for JSON.

## Example

### Sass

``` sass
$map: ((a: (1 2 ( b : 1 )), b: ( #444444, false, ( a: 1, b: test ) ), c: (2 3 4 string));

@include to-json($map);
```

### CSS

``` css
head {
  font-family: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}';
}
```

## Credits

Thanks to [Fabrice Weinberg](http://github.com/fweinb).
