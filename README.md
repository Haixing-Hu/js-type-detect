# type-detect

[![npm package](https://img.shields.io/npm/v/@haixing_hu/type-detect.svg)](https://npmjs.com/package/@haixing_hu/type-detect)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-type-detect/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-type-detect/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-type-detect/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-type-detect?branch=master)


[type-detect] is a lightweight JavaScript library that provides utilities
for detecting the type of JavaScript variables. It is designed to be
compatible with the latest ECMAScript standards.

If you want to get more detailed type information of a variable, you can use the
[typeinfo] library, which is built on top of [type-detect].

## Table of Contents

- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
    - [Type](#type)
    - [Subtype](#subtype)
    - [Category](#category)
    - [Feature Detection Constants](#feature-detection)
    - [Type Prototype Constants](#type-prototype)
    - [Type Detection Functions](#type-detection)
- [Why `Proxy` Type Information is Unavailable](#why-no-proxy)
- [Contributing](#contributing)
- [License](#license)

## <span id="installation">Installation</span>

You can install [type-detect] via `npm`:
```sh
npm install @haixing_hu/type-detect
```
or via `yarn`:
```bash
yarn add @haixing_hu/type-detect
```
## <span id="usage">Usage</span>

### <span id="type-detection">Type Detection Functions</span>

The library provides the following functions for type detection:

- `isArguments(value): boolean`: whether the specified value is the JavaScript
  built-in `arguments` object.
- `isBigInt(value): boolean`: whether the specified value is a JavaScript
  built-in `bigint` primitive.
- `isBoolean(value): boolean`: whether the specified value is a JavaScript
  built-in `boolean` primitive or `Boolean` object.
- `isBuffer(value): boolean`: whether the specified value is a JavaScript
  built-in `ArrayBuffer` or `SharedArrayBuffer` object.
- `isBuiltInClass(Class): boolean`: whether the specified class is a JavaScript
  built-in class.
- `isCollection(value): boolean`: whether the specified value is a JavaScript
  built-in collection object, i.e., a `Map` or `Set` object. Note that the
  `WeakMap` and `WeakSet` objects are not considered normal collection objects.
- `isConsole(value): boolean`: whether the specified value is a JavaScript
  built-in `console` object.
- `isCssom(value): boolean`: whether the specified value is a JavaScript
  built-in `CSSOM` object.
- `isDom(value): boolean`: whether the specified value is a JavaScript
  built-in DOM object.
- `isError(value): boolean`: whether the specified value is an instance of the
  JavaScript built-in `Error` class or its subclass.
- `isEvent(value): boolean`: whether the specified value is a JavaScript
  built-in event object, i.e., an instance of the JavaScript built-in `Event`
  class or its subclass.
- `isFile(value): boolean`: whether the specified value is a JavaScript File API 
  object, i.e., an instance of the `File`, `Blob`, `FileList`, `FileReader`, 
  or `FileReaderSync` class.
- `isIntl(value): boolean`: whether the specified value is a JavaScript
  built-in object under the `Intl` namespace.
- `isIterator(value): boolean`: whether the specified value is an iterator
  object, i.e., an object with a `next()` method.
- `isNumber(value): boolean`: whether the specified value is a JavaScript
  built-in `number` primitive, or a `Number` object.
- `isNumeric(value): boolean`: whether the specified value is a JavaScript
  built-in `number` primitive, or `bigint` primitive, or `Number` object.
- `isString(value): boolean`: whether the specified value is a JavaScript
  built-in `string` primitive, or `String` object.
- `isSymbol(value): boolean`: whether the specified value is a JavaScript
  built-in `Symbol` primitive.
- `isTypedArray(value): boolean`: whether the specified value is a JavaScript
  built-in typed array object.
- `isWeak(value): boolean`: whether the specified value is a JavaScript
  built-in weak referenced object, i.e., a `WeakMap`, `WeakSet`, or `WeakRef`
  object.

The following code shows how to use these functions:
```js
import { isTypedArray } from '@haixing_hu/type-detect';

function foo(value) {
  if (isTypedArray(value)) {
    ...
  } else {
    ...
  }
}
```

### <span id="feature-detection">Feature Detection Constants</span>

This library provides the following constants for feature detection:

- `AGGREGATEERROR_EXISTS`: whether the JavaScript built-in class `AggregateError` exists.
- `ARRAYBUFFER_EXISTS`: whether the JavaScript built-in class `ArrayBuffer` exists.
- `ARRAY_ISARRAY_EXISTS`: whether the JavaScript built-in function `Array.isArray()` exists.
- `ARRAY_ITERATOR_EXISTS`: whether the JavaScript built-in function 
  `Array.prototype[Symbol.iterator]` exists.
- `ASYNC_FUNCTION_EXISTS`: whether the JavaScript built-in async function exists.
- `ATOMICS_EXISTS`: whether the JavaScript built-in object `Atomics` exists.
- `BIGINT64ARRAY_EXISTS`: whether the JavaScript built-in class `BigInt64Array` exists.
- `BIGINT_EXISTS`: whether the JavaScript built-in primitive `bigint` and 
  built-in function `BigInt` exists.
- `BIGUINT64ARRAY_EXISTS`: whether the JavaScript built-in class `BigUint64Array` exists.
- `DATAVIEW_EXISTS`: whether the JavaScript built-in class `DataView` exists.
- `FINALIZATIONREGISTRY_EXISTS`: whether the JavaScript built-in class `FinalizationRegistry` exists.
- `FLOAT32ARRAY_EXISTS`: whether the JavaScript built-in class `Float32Array` exists.
- `FLOAT64ARRAY_EXISTS`: whether the JavaScript built-in class `Float64Array` exists.
- `INT16ARRAY_EXISTS`: whether the JavaScript built-in class `Int16Array` exists.
- `INT32ARRAY_EXISTS`: whether the JavaScript built-in class `Int32Array` exists.
- `INT8ARRAY_EXISTS`: whether the JavaScript built-in class `Int8Array` exists.
- `INTERNALERROR_EXISTS`: whether the JavaScript built-in class `InternalError` class
  exists.
- `INTL_COLLATOR_EXISTS`: whether the JavaScript built-in class `Intl.Collator` class
  exists.
- `INTL_DATETIMEFORMAT_EXISTS`: whether the JavaScript built-in class
  `Intl.DateTimeFormat` class exists.
- `INTL_DISPLAYNAMES_EXISTS`: whether the JavaScript built-in class `Intl.DisplayNames`
  class exists.
- `INTL_DURATIONFORMAT_EXISTS`: whether the JavaScript built-in class
  `Intl.DurationFormat` class exists.
- `INTL_EXISTS`: whether the JavaScript built-in `Intl` namespace exists.
- `INTL_LISTFORMAT_EXISTS`: whether the JavaScript built-in class `Intl.ListFormat` exists.
- `INTL_LOCALE_EXISTS`: whether the JavaScript built-in class `Intl.Locale` exists.
- `INTL_NUMBERFORMAT_EXISTS`: whether the JavaScript built-in class `Intl.NumberFormat` exists.
- `INTL_PLURALRULES_EXISTS`: whether the JavaScript built-in class `Intl.PluralRules` exists.
- `INTL_RELATIVETIMEFORMAT_EXISTS`: whether the JavaScript built-in class 
  `Intl.RelativeTimeFormat` exists.
- `INTL_SEGMENTER_EXISTS`: whether the JavaScript built-in class `Intl.Segmenter` exists.
- `INTL_SEGMENTER_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `Intl.Segmenter.prototype[Symbol.iterator]` exists.
- `MAP_ENTRIES_EXISTS`: whether the JavaScript built-in function
  `Map.prototype.entries()` exists.
- `MAP_EXISTS`: whether the JavaScript built-in class `Map` exists.
- `MAP_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `Map.prototype[Symbol.iterator]` exists.
- `PROMISE_EXISTS`: whether the JavaScript built-in class `Promise` exists.
- `PROXY_EXISTS`: whether the JavaScript built-in class `Proxy` exists.
- `REFLECT_EXISTS`: whether the JavaScript built-in namespace `Reflect` exists.
- `REGEXP_EXISTS`: whether the JavaScript built-in class `RegExp` exists.
- `REGEXP_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `RegExp.prototype[Symbol.matchAll]` exists.
- `SET_ENTRIES_EXISTS`: whether the JavaScript built-in function
  `Set.prototype.entries()` exists.
- `SET_EXISTS`: whether the JavaScript built-in class `Set` exists.
- `SET_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `Set.prototype[Symbol.iterator]` exists.
- `SHAREDARRAYBUFFER_EXISTS`: whether the JavaScript built-in class
  `SharedArrayBuffer` exists.
- `STRING_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `String.prototype[Symbol.iterator]` exists.
- `SYMBOL_EXISTS`: whether the JavaScript built-in `Symbol` exists.
- `SYMBOL_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `Symbol.prototype[Symbol.iterator]` exists.
- `SYMBOL_MATCH_ALL_EXISTS`: whether the JavaScript built-in function
  `Symbol.prototype[Symbol.matchAll]` exists.
- `SYMBOL_TO_STRING_TAG_EXISTS`: whether the JavaScript built-in function
  `Symbol.prototype[Symbol.toStringTag]` exists.
- `UINT16ARRAY_EXISTS`: whether the JavaScript built-in class `Uint16Array` exists.
- `UINT32ARRAY_EXISTS`: whether the JavaScript built-in class `Uint32Array` exists.
- `UINT8ARRAY_EXISTS`: whether the JavaScript built-in class `Uint8Array` exists.
- `UINT8CLAMPEDARRAY_EXISTS`: whether the JavaScript built-in class
  `Uint8ClampedArray` exists.
- `WEAKMAP_EXISTS`: whether the JavaScript built-in class `WeakMap` exists.
- `WEAKREF_EXISTS`: whether the JavaScript built-in class `WeakRef` exists.
- `WEAKSET_EXISTS`: whether the JavaScript built-in class `WeakSet` exists.

The following code shows how to use these constants:
```js
import { WEAKMAP_EXISTS } from '@haixing_hu/type-detect';

function foo(value) {
  if (WEAKMAP_EXISTS) {
    ...
  } else {
    ...
  }
}
```

### <span id="type-prototype">Type Prototype Constants</span>

This library provides the following constants for the prototypes of JavaScript
built-in objects:

- `AggregateErrorPrototype`: the prototype of the JavaScript built-in
  `AggregateError` objects, or `undefined` if the `AggregateError` class does not
  exist.
- `ArrayBufferPrototype`: the prototype of the JavaScript built-in
  `ArrayBuffer` objects, or `undefined` if the `ArrayBuffer` class does not exist.
- `ArrayIteratorPrototype`: the prototype of the JavaScript built-in array
   iterator objects, or `undefined` if the array iterator does not exist.
- `BigInt64ArrayPrototype`: the prototype of the JavaScript built-in
  `BigInt64Array` objects, or `undefined` if the `BigInt64Array` class does not
  exist.
- `BigIntPrototype`: the prototype of the JavaScript built-in `bigint` primitive,
  or `undefined` if the `bigint` primitive does not exist.
- `BigUint64ArrayPrototype`: the prototype of the JavaScript built-in
  `BigUint64Array` objects, or `undefined` if the `BigUint64Array` class does not
  exist.
- `DataViewPrototype`: the prototype of the JavaScript built-in `DataView`
  objects, or `undefined` if the `DataView` class does not exist.
- `FinalizationRegistryPrototype`: the prototype of the JavaScript built-in
  `FinalizationRegistry` objects, or `undefined` if the `FinalizationRegistry`
  class does not exist.
- `Float32ArrayPrototype`: the prototype of the JavaScript built-in
  `Float32Array` objects, or `undefined` if the `Float32Array` class does not
  exist.
- `Float64ArrayPrototype`: the prototype of the JavaScript built-in
  `Float64Array` objects, or `undefined` if the `Float64Array` class does not
  exist.
- `Int16ArrayPrototype`: the prototype of the JavaScript built-in
  `Int16Array` objects, or `undefined` if the `Int16Array` class does not exist.
- `Int32ArrayPrototype`: the prototype of the JavaScript built-in
  `Int32Array` objects, or `undefined` if the `Int32Array` class does not exist.
- `Int8ArrayPrototype`: the prototype of the JavaScript built-in
  `Int8Array` objects, or `undefined` if the `Int8Array` class does not exist.
- `IntelSegmentIteratorPrototype`: the prototype of the JavaScript built-in
  `Intl.SegmentIterator` objects, or `undefined` if the `Intl.SegmentIterator`
  class does not exist.
- `InternalErrorPrototype`: the prototype of the JavaScript built-in
  `InternalError` objects, or `undefined` if the `InternalError` class does not
  exist.
- `IntlCollatorPrototype`: the prototype of the JavaScript built-in
  `Intl.Collator` objects, or `undefined` if the `Intl.Collator` class does not
  exist.
- `IntlDateTimeFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.DateTimeFormat` objects, or `undefined` if the `Intl.DateTimeFormat`
  class does not exist.
- `IntlDisplayNamesPrototype`: the prototype of the JavaScript built-in
  `Intl.DisplayNames` objects, or `undefined` if the `Intl.DisplayNames` class
  does not exist.
- `IntlDurationFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.DurationFormat` objects, or `undefined` if the `Intl.DurationFormat`
  class does not exist.
- `IntlListFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.ListFormat` objects, or `undefined` if the `Intl.ListFormat` class does
  not exist.
- `IntlLocalePrototype`: the prototype of the JavaScript built-in
  `Intl.Locale` objects, or `undefined` if the `Intl.Locale` class does not
  exist.
- `IntlNumberFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.NumberFormat` objects, or `undefined` if the `Intl.NumberFormat` class
  does not exist.
- `IntlPluralRulesPrototype`: the prototype of the JavaScript built-in
  `Intl.PluralRules` objects, or `undefined` if the `Intl.PluralRules` class
  does not exist.
- `IntlRelativeTimeFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.RelativeTimeFormat` objects, or `undefined` if the
  `Intl.RelativeTimeFormat` class does not exist.
- `IntlSegmenterPrototype`: the prototype of the JavaScript built-in
  `Intl.Segmenter` objects, or `undefined` if the `Intl.Segmenter` class does
  not exist.
- `MapIteratorPrototype`: the prototype of the JavaScript built-in `Map`
  iterator objects, or `undefined` if the `Map` iterator does not exist.
- `MapPrototype`: the prototype of the JavaScript built-in `Map` objects, or
  `undefined` if the `Map` class does not exist.
- `PromisePrototype`: the prototype of the JavaScript built-in `Promise`
  objects, or `undefined` if the `Promise` class does not exist.
- `RegExpIteratorPrototype`: the prototype of the JavaScript built-in
  `RegExp` iterator objects, or `undefined` if the `RegExp` iterator does not
  exist.
- `RegExpPrototype`: the prototype of the JavaScript built-in `RegExp` objects,
  or `undefined` if the `RegExp` class does not exist.
- `SetIteratorPrototype`: the prototype of the JavaScript built-in `Set`
  iterator objects, or `undefined` if the `Set` iterator does not exist.
- `SetPrototype`: the prototype of the JavaScript built-in `Set` objects, or
  `undefined` if the `Set` class does not exist.
- `SharedArrayBufferPrototype`: the prototype of the JavaScript built-in
  `SharedArrayBuffer` objects, or `undefined` if the `SharedArrayBuffer` class
  does not exist.
- `StringIteratorPrototype`: the prototype of the JavaScript built-in `String`
  iterator objects, or `undefined` if the `String` iterator does not exist.
- `SymbolPrototype`: the prototype of the JavaScript built-in `Symbol` primitives,
  or `undefined` if the `Symbol` primitive does not exist.
- `Uint16ArrayPrototype`: the prototype of the JavaScript built-in
  `Uint16Array` objects, or `undefined` if the `Uint16Array` class does not
  exist.
- `Uint32ArrayPrototype`: the prototype of the JavaScript built-in
  `Uint32Array` objects, or `undefined` if the `Uint32Array` class does not
  exist.
- `Uint8ArrayPrototype`: the prototype of the JavaScript built-in
  `Uint8Array` objects, or `undefined` if the `Uint8Array` class does not
  exist.
- `Uint8ClampedArrayPrototype`: the prototype of the JavaScript built-in
  `Uint8ClampedArray` objects, or `undefined` if the `Uint8ClampedArray` class
  does not exist.
- `WeakMapPrototype`: the prototype of the JavaScript built-in `WeakMap`
  objects, or `undefined` if the `WeakMap` class does not exist.
- `WeakRefPrototype`: the prototype of the JavaScript built-in `WeakRef`
  objects, or `undefined` if the `WeakRef` class does not exist.
- `WeakSetPrototype`: the prototype of the JavaScript built-in `WeakSet`
  objects, or `undefined` if the `WeakSet` class does not exist.

The following code shows how to use these constants:
```js
import { WeakMapPrototype } from '@haixing_hu/type-detect';

function foo(value) {
  const proto = Object.getPrototypeOf(value);
  if (proto === WeakMapPrototype) {
    ...
  } else {
    ...
  }
}
```

## <span id="no-proxy">Why `Proxy` Type Cannot be Detected</span>

One of the primary purposes of `Proxy` objects in JavaScript is to allow developers 
to customize the behavior of object operations, acting as a delegate for another 
object (referred to as the target object). One of the key features of `Proxy` is 
its transparency—externally, unless the proxy object is intentionally designed 
to reveal itself, it is challenging to distinguish a `Proxy` object from the 
target object it represents. This is largely because `Proxy` can intercept and
redefine almost all fundamental operations of an object, including but not 
limited to property access, assignment, and enumeration.

Therefore, when libraries like [type-detect] attempt to retrieve type information 
of an object, the inherent transparency of `Proxy` means these libraries can 
only process and "see" the final outcomes of operations, without direct means
to identify whether these operations were intercepted by a `Proxy`. If a 
`Proxy` flawlessly mimics the behavior of its target object, there exists no 
reliable method to determine from the operation outcomes whether an object is 
a `Proxy`. In essence, the design philosophy of `Proxy` aims to make it nearly
invisible to external observation, making it impossible for even libraries 
specialized in fetching type information to definitively ascertain if an object 
is a `Proxy`, unless the proxy object deliberately exposes its identity through 
certain intercepting behaviors. This design significantly enhances the power
and flexibility of `Proxy`, but it also means that directly detecting `Proxy`
objects through external observation presents a challenge.

## <span id="contributing">Contributing</span>

If you find any issues or have suggestions for improvements, please feel free
to open an issue or submit a pull request to the [GitHub repository].

## <span id="license">License</span>

[type-detect] is distributed under the Apache 2.0 license.
See the [LICENSE](LICENSE) file for more details.

[type-detect]: https://npmjs.com/package/@haixing_hu/type-detect
[typeinfo]: https://npmjs.com/package/@haixing_hu/typeinfo
[global object]: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
[Standard built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[GitHub repository]: https://github.com/Haixing-Hu/js-type-detect
