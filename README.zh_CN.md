# type-detect

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/type-detect.svg)](https://npmjs.com/package/@qubit-ltd/type-detect)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English Document](https://img.shields.io/badge/文档-中文版-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-type-detect/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-type-detect/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-type-detect/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-type-detect?branch=master)

[type-detect] 是一个轻量级的 JavaScript 库，提供用于检测 JavaScript 变量类型的工具。
它设计为兼容最新的 ECMAScript 标准。

如果你想获取变量的更详细的类型信息，可以使用 [typeinfo] 库，它是基于 [type-detect] 构建的。

## Table of Contents

- [安装](#installation)
- [使用](#usage)
    - [类型检测函数](#type-detection)
    - [特性检测常量](#feature-detection)
    - [类型原型常量](#type-prototype)
- [为何无法检测`Proxy`类型](#why-no-proxy)
- [贡献](#contributing)
- [许可证](#license)

## <span id="installation">安装</span>

您可以通过 `npm` 安装 [type-detect]:
```sh
npm install @qubit-ltd/type-detect
```
或者通过 `yarn` 安装:
```bash
yarn add @qubit-ltd/type-detect
```

## <span id="usage">使用</span>

### <span id="type-detection">类型检测函数</span>

该库提供了以下用于类型检测的函数：

- `isArguments(value): boolean`：指定值是否为 JavaScript 内建的 `arguments` 对象，
  即一个类似数组的对象，表示传递给函数的参数。
- `isBigInt(value): boolean`：指定值是否为 JavaScript 内建的 `bigint` 基本类型。
- `isBoolean(value): boolean`：指定值是否为 JavaScript 内建的 `boolean` 基本类型或 `Boolean` 对象。
- `isBuffer(value): boolean`：指定值是否为 JavaScript 内建的 `ArrayBuffer` 或 `SharedArrayBuffer` 对象。
- `isBuiltInClass(Class): boolean`：指定类是否为 JavaScript 内建类。
- `isCollection(value): boolean`：指定值是否为 JavaScript 内建的集合对象，即 `Map` 或 `Set` 对象。
  注意，`WeakMap` 和 `WeakSet` 对象不被视为普通集合对象，它们可以通过 `isWeakCollection(value)` 函数检测。
- `isConsole(value): boolean`：指定值是否为 JavaScript 内建的 `console` 对象。
- `isCssom(value): boolean`：指定值是否为 JavaScript 内建的 `CSSOM` 对象。
- `isDataView(value): boolean`：指定值是否为 JavaScript 内建的 `DataView` 对象。
- `isDom(value): boolean`：指定值是否为 JavaScript 内建的 DOM 对象。
- `isError(value): boolean`：指定值是否为 JavaScript 内建的 `Error` 类或其子类的实例。
- `isEvent(value): boolean`：指定值是否为 JavaScript 内建的事件对象，即 JavaScript 内建的 `Event` 类或其子类的实例。
- `isFile(value): boolean`：指定值是否为 JavaScript 文件 API 对象，即 `File`、`Blob`、`FileList`、
  `FileReader` 或 `FileReaderSync` 类的实例。
- `isGlobalObject(value): boolean`: 指定值是否为[全局对象].
- `isIntl(value): boolean`：指定值是否为 JavaScript `Intl` 命名空间下的内建对象。
- `isIterator(value): boolean`：指定值是否为迭代器对象，即具有 `next()` 方法的对象。
- `isNumber(value): boolean`：指定值是否为 JavaScript 内建的 `number` 基本类型或 `Number` 对象。
- `isNumeric(value): boolean`：指定值是否为 JavaScript 内建的 `number` 基本类型、`bigint` 基本类型或 `Number` 对象。
- `isString(value): boolean`：指定值是否为 JavaScript 内建的 `string` 基本类型或 `String` 对象。
- `isSymbol(value): boolean`：指定值是否为 JavaScript 内建的 `Symbol` 基本类型。
- `isTypedArray(value): boolean`：指定值是否为 JavaScript 内建的类型化数组对象。
- `isWeak(value): boolean`：指定值是否为 JavaScript 内建的弱引用对象，即 `WeakMap`、`WeakSet` 或 `WeakRef` 对象。
- `isWeakCollection(value): boolean`：指定值是否为 JavaScript 内建的弱引用集合对象，即 `WeakMap`、或 `WeakSet` 对象。

以下代码展示了如何使用这些函数：
```js
import { isTypedArray } from '@qubit-ltd/type-detect';

function foo(value) {
  if (isTypedArray(value)) {
    ...
  } else {
    ...
  }
}
```

### <span id="feature-detection">特性检测常量</span>

此库提供以下常量用于 JavaScript 引擎的特性检测：

- `AGGREGATEERROR_EXISTS`：JavaScript 内置类 `AggregateError` 是否存在。
- `ARRAYBUFFER_EXISTS`：JavaScript 内置类 `ArrayBuffer` 是否存在。
- `ARRAY_ISARRAY_EXISTS`：JavaScript 内置函数 `Array.isArray()` 是否存在。
- `ARRAY_ITERATOR_EXISTS`：JavaScript 内置函数 `Array.prototype[Symbol.iterator]` 是否存在。
- `ASYNC_FUNCTION_EXISTS`: JavaScript 内置的异步函数是否存在。
- `ATOMICS_EXISTS`：JavaScript 内置对象 `Atomics` 是否存在。
- `BIGINT64ARRAY_EXISTS`：JavaScript 内置类 `BigInt64Array` 是否存在。
- `BIGINT_EXISTS`：JavaScript 内置基本类型 `bigint` 和内置函数 `BigInt` 是否存在。
- `BIGUINT64ARRAY_EXISTS`：JavaScript 内置类 `BigUint64Array` 是否存在。
- `DATAVIEW_EXISTS`：JavaScript 内置类 `DataView` 是否存在。
- `FINALIZATIONREGISTRY_EXISTS`：JavaScript 内置类 `FinalizationRegistry` 是否存在。
- `FLOAT32ARRAY_EXISTS`：JavaScript 内置类 `Float32Array` 是否存在。
- `FLOAT64ARRAY_EXISTS`：JavaScript 内置类 `Float64Array` 是否存在。
- `INT16ARRAY_EXISTS`：JavaScript 内置类 `Int16Array` 是否存在。
- `INT32ARRAY_EXISTS`：JavaScript 内置类 `Int32Array` 是否存在。
- `INT8ARRAY_EXISTS`：JavaScript 内置类 `Int8Array` 是否存在。
- `INTERNALERROR_EXISTS`：JavaScript 内置类 `InternalError` 是否存在。
- `INTL_COLLATOR_EXISTS`：JavaScript 内置类 `Intl.Collator` 是否存在。
- `INTL_DATETIMEFORMAT_EXISTS`：JavaScript 内置类 `Intl.DateTimeFormat` 是否存在。
- `INTL_DISPLAYNAMES_EXISTS`：JavaScript 内置类 `Intl.DisplayNames` 是否存在。
- `INTL_DURATIONFORMAT_EXISTS`：JavaScript 内置类 `Intl.DurationFormat` 是否存在。
- `INTL_EXISTS`：JavaScript 内置 `Intl` 命名空间是否存在。
- `INTL_LISTFORMAT_EXISTS`：JavaScript 内置类 `Intl.ListFormat` 是否存在。
- `INTL_LOCALE_EXISTS`：JavaScript 内置类 `Intl.Locale` 是否存在。
- `INTL_NUMBERFORMAT_EXISTS`：JavaScript 内置类 `Intl.NumberFormat` 是否存在。
- `INTL_PLURALRULES_EXISTS`：JavaScript 内置类 `Intl.PluralRules` 是否存在。
- `INTL_RELATIVETIMEFORMAT_EXISTS`：JavaScript 内置类 `Intl.RelativeTimeFormat` 是否存在。
- `INTL_SEGMENTER_EXISTS`：JavaScript 内置类 `Intl.Segmenter` 是否存在。
- `INTL_SEGMENTER_ITERATOR_EXISTS`：JavaScript 内置函数 `Intl.Segmenter.prototype[Symbol.iterator]` 是否存在。
- `MAP_ENTRIES_EXISTS`：JavaScript 内置函数 `Map.prototype.entries()` 是否存在。
- `MAP_EXISTS`：JavaScript 内置类 `Map` 是否存在。
- `MAP_ITERATOR_EXISTS`：JavaScript 内置函数 `Map.prototype[Symbol.iterator]` 是否存在。
- `PROMISE_EXISTS`：JavaScript 内置类 `Promise` 是否存在。
- `PROXY_EXISTS`：JavaScript 内置类 `Proxy` 是否存在。
- `REFLECT_EXISTS`：JavaScript 内置命名空间 `Reflect` 是否存在。
- `REGEXP_EXISTS`：JavaScript 内置类 `RegExp` 是否存在。
- `REGEXP_ITERATOR_EXISTS`：JavaScript 内置函数 `RegExp.prototype[Symbol.matchAll]` 是否存在。
- `SET_ENTRIES_EXISTS`：JavaScript 内置函数 `Set.prototype.entries()` 是否存在。
- `SET_EXISTS`：JavaScript 内置类 `Set` 是否存在。
- `SET_ITERATOR_EXISTS`：JavaScript 内置函数 `Set.prototype[Symbol.iterator]` 是否存在。
- `SHAREDARRAYBUFFER_EXISTS`：JavaScript 内置类 `SharedArrayBuffer` 是否存在。
- `STRING_ITERATOR_EXISTS`：JavaScript 内置函数 `String.prototype[Symbol.iterator]` 是否存在。
- `SYMBOL_EXISTS`：JavaScript 内置 `Symbol` 是否存在。
- `SYMBOL_ITERATOR_EXISTS`：JavaScript 内置函数 `Symbol.prototype[Symbol.iterator]` 是否存在。
- `SYMBOL_MATCH_ALL_EXISTS`：JavaScript 内置函数 `Symbol.prototype[Symbol.matchAll]` 是否存在。
- `SYMBOL_TO_STRING_TAG_EXISTS`：JavaScript 内置函数 `Symbol.prototype[Symbol.toStringTag]` 是否存在。
- `UINT16ARRAY_EXISTS`：JavaScript 内置类 `Uint16Array` 是否存在。
- `UINT32ARRAY_EXISTS`：JavaScript 内置类 `Uint32Array` 是否存在。
- `UINT8ARRAY_EXISTS`：JavaScript 内置类 `Uint8Array` 是否存在。
- `UINT8CLAMPEDARRAY_EXISTS`：JavaScript 内置类 `Uint8ClampedArray` 是否存在。
- `WEAKMAP_EXISTS`：JavaScript 内置类 `WeakMap` 是否存在。
- `WEAKREF_EXISTS`：JavaScript 内置类 `WeakRef` 是否存在。
- `WEAKSET_EXISTS`：JavaScript 内置类 `WeakSet` 是否存在。

以下代码展示如何使用这些常量：
```js
import { WEAKMAP_EXISTS } from '@qubit-ltd/type-detect';

function foo(value) {
  if (WEAKMAP_EXISTS) {
    ...
  } else {
    ...
  }
}
```

### <span id="type-prototype">类型原型常量</span>

这个库为 JavaScript 内建对象的原型提供了以下常量：

- `AggregateErrorPrototype`：JavaScript内建`AggregateError`对象的原型，如果`AggregateError`类不存在，则为`undefined`。
- `ArrayBufferPrototype`：JavaScript内建`ArrayBuffer`对象的原型，如果`ArrayBuffer`类不存在，则为`undefined`。
- `ArrayIteratorPrototype`：JavaScript内建数组迭代器对象的原型，如果数组迭代器不存在，则为`undefined`。
- `BigInt64ArrayPrototype`：JavaScript内建`BigInt64Array`对象的原型，如果`BigInt64Array`类不存在，则为`undefined`。
- `BigIntPrototype`：JavaScript内建`bigint`基本类型的原型，如果`bigint`基本类型不存在，则为`undefined`。
- `BigUint64ArrayPrototype`：JavaScript内建`BigUint64Array`对象的原型，如果`BigUint64Array`类不存在，则为`undefined`。
- `DataViewPrototype`：JavaScript内建`DataView`对象的原型，如果`DataView`类不存在，则为`undefined`。
- `FinalizationRegistryPrototype`：JavaScript内建`FinalizationRegistry`对象的原型，如果`FinalizationRegistry`类不存在，则为`undefined`。
- `Float32ArrayPrototype`：JavaScript内建`Float32Array`对象的原型，如果`Float32Array`类不存在，则为`undefined`。
- `Float64ArrayPrototype`：JavaScript内建`Float64Array`对象的原型，如果`Float64Array`类不存在，则为`undefined`。
- `Int16ArrayPrototype`：JavaScript内建`Int16Array`对象的原型，如果`Int16Array`类不存在，则为`undefined`。
- `Int32ArrayPrototype`：JavaScript内建`Int32Array`对象的原型，如果`Int32Array`类不存在，则为`undefined`。
- `Int8ArrayPrototype`：JavaScript内建`Int8Array`对象的原型，如果`Int8Array`类不存在，则为`undefined`。
- `IntelSegmentIteratorPrototype`：JavaScript内建`Intl.SegmentIterator`对象的原型，如果`Intl.SegmentIterator`类不存在，则为`undefined`。
- `InternalErrorPrototype`：JavaScript内建`InternalError`对象的原型，如果`InternalError`类不存在，则为`undefined`。
- `IntlCollatorPrototype`：JavaScript内建`Intl.Collator`对象的原型，如果`Intl.Collator`类不存在，则为`undefined`。
- `IntlDateTimeFormatPrototype`：JavaScript内建`Intl.DateTimeFormat`对象的原型，如果`Intl.DateTimeFormat`类不存在，则为`undefined`。
- `IntlDisplayNamesPrototype`：JavaScript内建`Intl.DisplayNames`对象的原型，如果`Intl.DisplayNames`类不存在，则为`undefined`。
- `IntlDurationFormatPrototype`：JavaScript内建`Intl.DurationFormat`对象的原型，如果`Intl.DurationFormat`类不存在，则为`undefined`。
- `IntlListFormatPrototype`：JavaScript内建`Intl.ListFormat`对象的原型，如果`Intl.ListFormat`类不存在，则为`undefined`。
- `IntlLocalePrototype`：JavaScript内建`Intl.Locale`对象的原型，如果`Intl.Locale`类不存在，则为`undefined`。
- `IntlNumberFormatPrototype`：JavaScript内建`Intl.NumberFormat`对象的原型，如果`Intl.NumberFormat`类不存在，则为`undefined`。
- `IntlPluralRulesPrototype`：JavaScript内建`Intl.PluralRules`对象的原型，如果`Intl.PluralRules`类不存在，则为`undefined`。
- `IntlRelativeTimeFormatPrototype`：JavaScript内建`Intl.RelativeTimeFormat`对象的原型，如果`Intl.RelativeTimeFormat`类不存在，则为`undefined`。
- `IntlSegmenterPrototype`：JavaScript内建`Intl.Segmenter`对象的原型，如果`Intl.Segmenter`类不存在，则为`undefined`。
- `MapIteratorPrototype`：JavaScript内建`Map`迭代器对象的原型，如果`Map`迭代器不存在，则为`undefined`。
- `MapPrototype`：JavaScript内建`Map`对象的原型，如果`Map`类不存在，则为`undefined`。
- `PromisePrototype`：JavaScript内建`Promise`对象的原型，如果`Promise`类不存在，则为`undefined`。
- `RegExpIteratorPrototype`：JavaScript内建`RegExp`迭代器对象的原型，

## <span id="why-no-proxy">为何无法检测`Proxy`类型</span>

在JavaScript的设计中，`Proxy`对象的主要目的之一是允许开发者自定义对象操作的行为，它能代理另一个对象（即目标对象）。
`Proxy`最关键的特性之一便是其透明性——对于外部代码而言，除非代理对象被设计为有意暴露自身，
否则很难区别一个`Proxy`对象与其所代理的目标对象。这主要是因为`Proxy`能够拦截并重定义几乎所有的对象基础操作，
包括但不限于属性读取、设置以及属性的枚举。

因此，当使用[type-detect]等库尝试获取对象的类型信息时，由于`Proxy`的这种透明化特征，这些库仅能处理并"看见"最终的操作结果，
而无法直接判断这些操作是否受到`Proxy`的拦截。如果`Proxy`完美模仿了其所代理的目标对象的行为，那么就不存在一个可靠的方法，
通过操作结果来断定该对象是否为一个`Proxy`。简言之，`Proxy`的设计哲学在于使其自身对外部观察几乎不可见，因此，
除非代理对象特意通过某些拦截行为暴露其身份，否则即便是专门用于获取类型信息的库也无法确切判断一个对象是否为`Proxy`。
这样的设计极大地增强了`Proxy`的强大性和灵活性，但同时也意味着直接通过外部检测来识别`Proxy`对象将是一个挑战。

## <span id="contributing">贡献</span>

如果您发现任何问题或有改进建议，请随时在[GitHub仓库]中提出问题或提交拉取请求。

## <span id="license">许可证</span>

[type-detect] 在 Apache 2.0 许可下分发。有关更多详情，请参阅[LICENSE](LICENSE)文件。


[type-detect]: https://npmjs.com/package/@qubit-ltd/type-detect
[typeinfo]: https://npmjs.com/package/@qubit-ltd/typeinfo
[全局对象]: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
[Standard built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[GitHub repository]: https://github.com/Haixing-Hu/js-type-detect
