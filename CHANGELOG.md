# Changelog

* `1.1.5`: Fixed `json-encode` mixin to keep `body::before` in the render tree. Making it possible to access via `getComputedStyle(document.body, ':before')`
* `1.1.4`: Small fix for the `npm` release
* `1.1.3`: fixed error in `_pow` introduced after updating to Sass 3.3.0.rc.3
* `1.1.2`: Made it possible to import JSON files via `@import 'relative/path/to/file.json?variable-name'`
* `1.1.1`: fixing a minor issue with the gem
* `1.1.0`: adding the ability to import a JSON file
* `1.0.11`: fixing an issue with scientific number parsing
* `1.0.10`: improving number and string helpers
* `1.0.9`: fixing a bug in `_find-exponent`
* `1.0.8`: fixing a major issue in Ruby Gem
* `1.0.7`: minor fixes and stable Ruby Gem
* `1.0.6`: released a Ruby Gem
* `1.0.5`: improved the encoding mixin
* `1.0.4`: fixed an error in map parsing
* `1.0.3`: slightly edited the mixin to dump JSON to CSS
* `1.0.2`: fixed an issue with string parsing
* `1.0.1`: fixed an issue with alpha color parsing
* `1.0.0`: Stable API. `json-encode` and `json-decode`
* `0.0.2`: added `json-decode` and test
* `0.0.1`: initial commit
