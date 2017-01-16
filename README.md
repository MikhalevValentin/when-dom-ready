# domloaded

> Check when the DOM is loaded

[![Build Status](https://travis-ci.org/lukechilds/domloaded.svg?branch=master)](https://travis-ci.org/lukechilds/domloaded) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/domloaded/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/domloaded?branch=master)

Returns a Promise for cleaner usage and can also be used as pure function.

## Install

```shell
npm install --save domloaded
```

## Usage

```js
import domLoaded from 'domloaded';

domLoaded().then(() => console.log('DOM is loaded yo!'));
```

You can still use callbacks if you want to:

```js
domLoaded(() => console.log('DOM is loaded yo!'));
```

## Pure usage

You can make the function pure by passing in a `document` object. This is really useful for tests and mocking environments.

For example this works in Node.js:

```js
import jsdom from 'jsdom';
import domLoaded from 'domloaded';

const doc = jsdom.jsdom('').defaultView.document;

domLoaded(doc).then(() => console.log('DOM is loaded yo!'));
```

Again, you can use the callback version as a pure function too:

```js
domLoaded(() => console.log('DOM is loaded yo!'), doc);
```

## License

MIT © Luke Childs
