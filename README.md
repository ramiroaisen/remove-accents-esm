# This is the module version of remove-accents npm package
# remove-accents

Removes the accents from a string, converting them to their corresponding non-accented ASCII characters.

```
npm install remove-accents-esm
```
<!-- 
TODO: Add our own build status
[![Build Status](https://travis-ci.org/tyxla/remove-accents.svg)](https://travis-ci.org/tyxla/remove-accents)
-->

## About

An easy to use solution for converting all accented characters to their corresponding non-accented ASCII characters.

## Syntax

``` js
import removeAccents from "remove-accents-esm";
removeAccents(inputString)
```

#### inputString

The string that you wish to remove accents from.

## Usage

Call `removeAccents()` by passing the string you wish to remove accents from, and you will get the non-accented string as result.

``` js
import removeAccents from "remove-accents-esm";

var input = 'ÀÁÂÃÄÅ';
var output = removeAccents(input);

console.log(output); // AAAAAA
```

## Methods

The exported function also has helper methods.

#### hasAccents

Determine if a string has any accented characters.

``` js
import { hasAccents } from "remove-accents-esm";
 
console.log(hasAccents('ÀÁÂÃÄÅ')); // true
console.log(hasAccents('ABC'));    // false
```

#### named export removeAccents

Alias of default export.

``` js
import { removeAccents } = from "remove-accents-esm";

console.log(removeAccents('ÀÁÂÃÄÅ')); // AAAAAA
```

## License
MIT
