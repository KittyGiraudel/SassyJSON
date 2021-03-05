# SassyJSON [![NPM version](https://badge.fury.io/js/sassyjson.png)](http://badge.fury.io/js/sassyjson) [![Gem Version](https://badge.fury.io/rb/SassyJSON.png)](http://badge.fury.io/rb/SassyJSON)

**⚠️ SassyJSON was an experimental project. It is not meant to be used in production. If you need to transit JSON data from and to your Sass layer, have a look into [Eyeglass](https://github.com/sass-eyeglass/eyeglass) and [Sassport](https://github.com/davidkpiano/sassport).**

SassyJSON is a Sass-powered API for JSON. It provides you the classic `json-encode` and `json-decode` directly from your Sass files. We'll leave you the only judges of the point of this.

## Install

SassyJSON is available on [npm](https://npmjs.org/) or as a [Ruby Gem](http://rubygems.org/gems/SassyJSON).

### Git

``` git
git clone https://github.com/KittyGiraudel/SassyJSON.git && cd SassyJSON
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

If you only want to play around the code without cloning the repo or using npm, you can find a [single file](https://github.com/KittyGiraudel/SassyJSON/blob/master/dist/_SassyJSON.scss) containing the whole API in the [dist](https://github.com/KittyGiraudel/SassyJSON/tree/master/dist) folder.

Also, SassyJSON is available at [Sassmeister](http://sassmeister.com/).

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
  display:block;
  width:0;height:0;
  overflow:hidden;
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

## Importing and decoding a JSON file

To importe and decode an external `.json` file directly into a Sass variable:

``` scss
@import 'SassyJSON'; // Import SassyJSON first!
@import 'relative/path/to/file.json?variable-name';
// Do something with $variable-name
```

**Important:**

* the path to the JSON file is relative to importing file
* the get parameter is the variable name to use it in Sass

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
* [Kitty Giraudel](http://twitter.com/KittyGiraudel)
