# SassyJSON [![NPM version](https://badge.fury.io/js/sassyjson.png)](http://badge.fury.io/js/sassyjson) [![Gem Version](https://badge.fury.io/rb/SassyJSON.png)](http://badge.fury.io/rb/SassyJSON) [![Build Status](https://travis-ci.org/HugoGiraudel/SassyJSON.png?branch=master)](https://travis-ci.org/HugoGiraudel/SassyJSON)

SassyJSON is a Sass-powered API for JSON. It provides you the classic `json-encode` and `json-decode` directly from your Sass files. We'll leave you the only judges of the point of this.

## Install

SassyJSON is available on [npm](https://npmjs.org/) or as a [Ruby Gem](http://rubygems.org/gems/SassyJSON).

### Git

``` git
git clone https://github.com/HugoGiraudel/SassyJSON.git && cd SassyJSON
```

### npm

``` bash
npm install sassyjson --save-dev
```

### Compass extension

1. `gem install SassyJSON`
2. Add `require 'SassyJSON'` to your `config.rb`
3. Import it in your stylesheets with `@import 'SassyJSON'`

### Sass

If you only want to play around the code without cloning the repo or using npm, you can find a [single file](https://github.com/HugoGiraudel/SassyJSON/blob/master/dist/_SassyJSON.scss) containing the whole API in the [dist](https://github.com/HugoGiraudel/SassyJSON/tree/master/dist) folder. You can copy its content directly into [Sassmeister](http://sassmeister.com/) to play with the code.

## Example

### Encoding Sass to JSON

#### Sass

``` scss
$map: ((a: (1 2 ( b : 1 )), b: ( #444444, false, ( a: 1, b: test ) ), c: (2 3 4 string)));

@include json-encode($map);
```

#### CSS

``` css
/*! json-encode: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}' */

body::before {
  content: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}';
}

head {
  font-family: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}';
}

@media -json-encode {
  json {
    json: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}';
  }
}
```

If you want to restrict the output to only one of the three drivers (comment, media query or regular output) you can pass a flag as the second parameter with one of the four following keywords: `all`, `comment`, `media` or `regular`. Default is `all`.

### Decoding JSON to Sass

``` scss
$json-decode: json-decode('{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}');
// ("a": 1 2 ("b": 1), "b": #444444 false ("a": 1, "b": "test"), "c": 2 3 4 "string")
```

## Requirements

All you need is a clean version of Sass 3.3. Otherwise it's just pure Sass madness.

## Development

### You need

  * [NodeJS](http://nodejs.org)
  * [Ruby](https://www.ruby-lang.org/)
  * Sass 3.3 via `gem install sass --pre`
  * `grunt-cli` via `npm install -g grunt-cli`

### How to

  1. Fork this repository
  2. Run `npm install`
  3. `grunt dev`
  4. Make your changes + write tests
  5. Commit + Pull request

## Credits

* [Fabrice Weinberg](http://twitter.com/fweinb)
* [Hugo Giraudel](http://twitter.com/hugogiraudel)
