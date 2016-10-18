[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Sass-JSON/blob/master/LICENSE.txt)
[![GitHub license](https://api.travis-ci.org/esr360/Sass-JSON.svg)](https://travis-ci.org/esr360/Sass-JSON)
[![Bower version](https://badge.fury.io/bo/Sass-JSON.svg)](https://badge.fury.io/bo/Sass-JSON)
[![npm version](https://badge.fury.io/js/Sass-JSON.svg)](https://badge.fury.io/js/Sass-JSON)

# Sass-JSON

> Output information about your Sass modules as JSON data

[View Documentation (via SassDoc)](https://esr360.github.io/Sass-JSON/)

### Why?

So you can access information about your Sass modules from your JavaScript.

### How?

All this library does is outputs a CSS selector with the `content` property populated with stringified JSON data converted from the Sass you pass to it, for example a Sass map. Once the data is in the stylesheet as JSON, it can be read from JavaScript using the [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method.

### Requirements

* Sass 3.3+

### Installation

#### Via Bower

```
bower install Sass-JSON
```

#### Via NPM

```
npm install Sass-JSON
```

#### As Git-Submodule

> Ensure you change the PATH/TO/SUBMODULES part to your desired location

```
git submodule add https://github.com/esr360/Sass-JSON.git PATH/TO/SUBMODULES
```

---

After you have installed Sass-JSON, import the following file into your project's main .scss file:

```
src/_sass-json.scss
```

To encode any Sass data to JSON, pass it through the `json-encode()` mixin:

```scss
$your_data:(
    'foo' : 'alpha',
    'bar' : (
        'baz' : 2,
        'qux' : #000000
    )
);

@include json-encode($value: $your_data, $selector: '#sassData');
```

As long as the element which matches your `$selector` value exists in the DOM, you will be able to access the data from your JavaScript:

```html
<div id="sassData"></div>

<script>
    var data = window.getComputedStyle(
        document.getElementById('sassData'), '::before'
    ).content;
    console.log(JSON.parse(data));
</script>
```

The above should log the following to your console:

```js
{"foo": "alpha", "bar": {"baz": 2, "qux": "#000000"}}
```

### Development

> The Sass unit test framework is [Sass True](https://github.com/oddbird/true)

#### Further Requirements

* Node.js (+ npm)
* Grunt (`npm install -g grunt-cli`)
* Scss Lint (`gem install scss-lint`)

Install Node modules:

```
npm install
```

To run unit tests, generate documentation and lint the source files, run the following command:

```
grunt compile
```