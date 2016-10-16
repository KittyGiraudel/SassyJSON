[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Sass-JSON/blob/master/LICENSE.txt)
[![GitHub license](https://api.travis-ci.org/esr360/Sass-JSON.svg)](https://travis-ci.org/esr360/Sass-JSON)
[![Bower version](https://badge.fury.io/bo/Sass-JSON.svg)](https://badge.fury.io/bo/Sass-JSON)
[![npm version](https://badge.fury.io/js/Sass-JSON.svg)](https://badge.fury.io/js/Sass-JSON)

# Sass-JSON

> Output information about your Sass modules as JSON data

## Why?

So you can access information about your Sass modules from your JavaScript.

## How?

All this library does is outputs a CSS selector with the `content` property populated with stringified JSON data converted from Sass maps. Once the data is in the stylesheet as JSON, it can be read from JavaScript using the [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method.