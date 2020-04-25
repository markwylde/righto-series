# righto-series
[![Build Status](https://travis-ci.org/markwylde/righto-series.svg?branch=master)](https://travis-ci.org/markwylde/righto-series)
[![David DM](https://david-dm.org/markwylde/righto-series.svg)](https://david-dm.org/markwylde/righto-series)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/markwylde/righto-series)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/markwylde/righto-series)](https://github.com/markwylde/righto-series/releases)
[![GitHub](https://img.shields.io/github/license/markwylde/righto-series)](https://github.com/markwylde/righto-series/blob/master/LICENSE)

Run a collection of righto's in series, one at a time.

## Installation
```bash
npm i --save righto-series
```

## Usage
```javascript
function * doInSeries () {
  const first = yield firstThing()
  const second = yield secondThing(first)
  const third = yield thirdThing(second)

  return third
}

rightoSeries(doInSeries, (error, result) => {
  // result === third
})
```
