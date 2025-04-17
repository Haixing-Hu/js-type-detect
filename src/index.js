////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import GLOBAL_OBJECT from './global-object';
import getObjectType from './get-object-type';
import getTypeName from './get-type-name';
import isArguments from './is-arguments';
import isBigInt from './is-bigint';
import isBoolean from './is-boolean';
import isBuffer from './is-buffer';
import isBuiltInClass from './is-built-in-class';
import isCollection from './is-collection';
import isConsole from './is-console';
import isCssom from './is-cssom';
import isDataView from './is-data-view';
import isDom from './is-dom';
import isError from './is-error';
import isEvent from './is-event';
import isFile from './is-file';
import isFunction from './is-function';
import isGenerator from './is-generator';
import isGlobalObject from './is-global-object';
import isHtmlElement from './is-html-element';
import isIntl from './is-intl';
import isIterator from './is-iterator';
import isMap from './is-map';
import isNonNullObject from './is-non-null-object';
import isNumber from './is-number';
import isNumeric from './is-numeric';
import isObjectTypeName from './is-object-type-name';
import isPlainObject from './is-plain-object';
import isSet from './is-set';
import isString from './is-string';
import isSymbol from './is-symbol';
import isTypedArray from './is-typed-array';
import isTypedArrayTypeName from './is-typed-array-type-name';
import isWeak from './is-weak';
import isWeakCollection from './is-weak-collection';
import {
  AGGREGATEERROR_EXISTS,
  ARRAYBUFFER_EXISTS,
  ARRAY_ISARRAY_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  ASYNC_FUNCTION_EXISTS,
  ATOMICS_EXISTS,
  BIGINT64ARRAY_EXISTS,
  BIGINT_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  DATAVIEW_EXISTS,
  FINALIZATIONREGISTRY_EXISTS,
  FLOAT32ARRAY_EXISTS,
  FLOAT64ARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  INT8ARRAY_EXISTS,
  INTERNALERROR_EXISTS,
  INTL_COLLATOR_EXISTS,
  INTL_DATETIMEFORMAT_EXISTS,
  INTL_DISPLAYNAMES_EXISTS,
  INTL_DURATIONFORMAT_EXISTS,
  INTL_EXISTS,
  INTL_LISTFORMAT_EXISTS,
  INTL_LOCALE_EXISTS,
  INTL_NUMBERFORMAT_EXISTS,
  INTL_PLURALRULES_EXISTS,
  INTL_RELATIVETIMEFORMAT_EXISTS,
  INTL_SEGMENTER_EXISTS,
  INTL_SEGMENTER_ITERATOR_EXISTS,
  MAP_ENTRIES_EXISTS,
  MAP_EXISTS,
  MAP_ITERATOR_EXISTS,
  PROMISE_EXISTS,
  PROXY_EXISTS,
  REFLECT_EXISTS,
  REGEXP_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  SET_ENTRIES_EXISTS,
  SET_EXISTS,
  SET_ITERATOR_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
  STRING_ITERATOR_EXISTS,
  SYMBOL_EXISTS,
  SYMBOL_ITERATOR_EXISTS,
  SYMBOL_MATCH_ALL_EXISTS,
  SYMBOL_TO_STRING_TAG_EXISTS,
  UINT16ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  WEAKMAP_EXISTS,
  WEAKREF_EXISTS,
  WEAKSET_EXISTS,
  DOM_NODE_EXISTS,
  HTML_COLLECTION_EXISTS,
  NODE_LIST_EXISTS,
  NAMED_NODE_MAP_EXISTS,
  NODE_ITERATOR_EXISTS,
  TREE_WALKER_EXISTS,
  ABSTRACT_RANGE_EXISTS,
  MUTATION_RECORD_EXISTS,
  MUTATION_OBSERVER_EXISTS,
  DOM_TOKEN_LIST_EXISTS,
  DOM_RECT_EXISTS,
  DOM_POINT_READONLY_EXISTS,
  DOM_PARSER_EXISTS,
  DOM_IMPLEMENTATION_EXISTS,
  DOM_EXCEPTION_EXISTS,
  TIME_RANGES_EXISTS,
  CSS_EXISTS,
  CSS_RULE_EXISTS,
  CSS_RULE_LIST_EXISTS,
  CSS_STYLE_DECLARATION_EXISTS,
  STYLE_SHEET_EXISTS,
  STYLE_SHEET_LIST_EXISTS,
  FONT_FACE_EXISTS,
  FONT_FACE_SET_EXISTS,
  MEDIA_LIST_EXISTS,
  MEDIA_QUERY_LIST_EXISTS,
  SCREEN_EXISTS,
  ABORT_SIGNAL_EXISTS,
  ABORT_CONTROLLER_EXISTS,
  EVENT_EXISTS,
  BLOB_EXISTS,
  FILE_EXISTS,
  FILE_LIST_EXISTS,
  FILE_READER_EXISTS,
  FILE_READER_SYNC_EXISTS,
} from './feature-detect';
import {
  AggregateErrorPrototype,
  ArrayBufferPrototype,
  ArrayIteratorPrototype,
  BigInt64ArrayPrototype,
  BigIntPrototype,
  BigUint64ArrayPrototype,
  DataViewPrototype,
  FinalizationRegistryPrototype,
  Float32ArrayPrototype,
  Float64ArrayPrototype,
  Int16ArrayPrototype,
  Int32ArrayPrototype,
  Int8ArrayPrototype,
  IntelSegmentIteratorPrototype,
  InternalErrorPrototype,
  IntlCollatorPrototype,
  IntlDateTimeFormatPrototype,
  IntlDisplayNamesPrototype,
  IntlDurationFormatPrototype,
  IntlListFormatPrototype,
  IntlLocalePrototype,
  IntlNumberFormatPrototype,
  IntlPluralRulesPrototype,
  IntlRelativeTimeFormatPrototype,
  IntlSegmenterPrototype,
  MapIteratorPrototype,
  MapPrototype,
  PromisePrototype,
  RegExpIteratorPrototype,
  RegExpPrototype,
  SetIteratorPrototype,
  SetPrototype,
  SharedArrayBufferPrototype,
  StringIteratorPrototype,
  SymbolPrototype,
  Uint16ArrayPrototype,
  Uint32ArrayPrototype,
  Uint8ArrayPrototype,
  Uint8ClampedArrayPrototype,
  WeakMapPrototype,
  WeakRefPrototype,
  WeakSetPrototype,
} from './builtin-prototype';

export {
  GLOBAL_OBJECT,
  getObjectType,
  getTypeName,
  isArguments,
  isBigInt,
  isBoolean,
  isBuffer,
  isBuiltInClass,
  isCollection,
  isConsole,
  isCssom,
  isDataView,
  isDom,
  isError,
  isEvent,
  isFile,
  isFunction,
  isGenerator,
  isGlobalObject,
  isHtmlElement,
  isIntl,
  isIterator,
  isMap,
  isNonNullObject,
  isNumber,
  isNumeric,
  isObjectTypeName,
  isPlainObject,
  isSet,
  isString,
  isSymbol,
  isTypedArray,
  isTypedArrayTypeName,
  isWeak,
  isWeakCollection,
  AGGREGATEERROR_EXISTS,
  ARRAYBUFFER_EXISTS,
  ARRAY_ISARRAY_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  ASYNC_FUNCTION_EXISTS,
  ATOMICS_EXISTS,
  BIGINT64ARRAY_EXISTS,
  BIGINT_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  DATAVIEW_EXISTS,
  FINALIZATIONREGISTRY_EXISTS,
  FLOAT32ARRAY_EXISTS,
  FLOAT64ARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  INT8ARRAY_EXISTS,
  INTERNALERROR_EXISTS,
  INTL_COLLATOR_EXISTS,
  INTL_DATETIMEFORMAT_EXISTS,
  INTL_DISPLAYNAMES_EXISTS,
  INTL_DURATIONFORMAT_EXISTS,
  INTL_EXISTS,
  INTL_LISTFORMAT_EXISTS,
  INTL_LOCALE_EXISTS,
  INTL_NUMBERFORMAT_EXISTS,
  INTL_PLURALRULES_EXISTS,
  INTL_RELATIVETIMEFORMAT_EXISTS,
  INTL_SEGMENTER_EXISTS,
  INTL_SEGMENTER_ITERATOR_EXISTS,
  MAP_ENTRIES_EXISTS,
  MAP_EXISTS,
  MAP_ITERATOR_EXISTS,
  PROMISE_EXISTS,
  PROXY_EXISTS,
  REFLECT_EXISTS,
  REGEXP_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  SET_ENTRIES_EXISTS,
  SET_EXISTS,
  SET_ITERATOR_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
  STRING_ITERATOR_EXISTS,
  SYMBOL_EXISTS,
  SYMBOL_ITERATOR_EXISTS,
  SYMBOL_MATCH_ALL_EXISTS,
  SYMBOL_TO_STRING_TAG_EXISTS,
  UINT16ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  WEAKMAP_EXISTS,
  WEAKREF_EXISTS,
  WEAKSET_EXISTS,
  DOM_NODE_EXISTS,
  HTML_COLLECTION_EXISTS,
  NODE_LIST_EXISTS,
  NAMED_NODE_MAP_EXISTS,
  NODE_ITERATOR_EXISTS,
  TREE_WALKER_EXISTS,
  ABSTRACT_RANGE_EXISTS,
  MUTATION_RECORD_EXISTS,
  MUTATION_OBSERVER_EXISTS,
  DOM_TOKEN_LIST_EXISTS,
  DOM_RECT_EXISTS,
  DOM_POINT_READONLY_EXISTS,
  DOM_PARSER_EXISTS,
  DOM_IMPLEMENTATION_EXISTS,
  DOM_EXCEPTION_EXISTS,
  TIME_RANGES_EXISTS,
  CSS_EXISTS,
  CSS_RULE_EXISTS,
  CSS_RULE_LIST_EXISTS,
  CSS_STYLE_DECLARATION_EXISTS,
  STYLE_SHEET_EXISTS,
  STYLE_SHEET_LIST_EXISTS,
  FONT_FACE_EXISTS,
  FONT_FACE_SET_EXISTS,
  MEDIA_LIST_EXISTS,
  MEDIA_QUERY_LIST_EXISTS,
  SCREEN_EXISTS,
  ABORT_SIGNAL_EXISTS,
  ABORT_CONTROLLER_EXISTS,
  EVENT_EXISTS,
  BLOB_EXISTS,
  FILE_EXISTS,
  FILE_LIST_EXISTS,
  FILE_READER_EXISTS,
  FILE_READER_SYNC_EXISTS,
  AggregateErrorPrototype,
  ArrayBufferPrototype,
  ArrayIteratorPrototype,
  BigInt64ArrayPrototype,
  BigIntPrototype,
  BigUint64ArrayPrototype,
  DataViewPrototype,
  FinalizationRegistryPrototype,
  Float32ArrayPrototype,
  Float64ArrayPrototype,
  Int16ArrayPrototype,
  Int32ArrayPrototype,
  Int8ArrayPrototype,
  IntelSegmentIteratorPrototype,
  InternalErrorPrototype,
  IntlCollatorPrototype,
  IntlDateTimeFormatPrototype,
  IntlDisplayNamesPrototype,
  IntlDurationFormatPrototype,
  IntlListFormatPrototype,
  IntlLocalePrototype,
  IntlNumberFormatPrototype,
  IntlPluralRulesPrototype,
  IntlRelativeTimeFormatPrototype,
  IntlSegmenterPrototype,
  MapIteratorPrototype,
  MapPrototype,
  PromisePrototype,
  RegExpIteratorPrototype,
  RegExpPrototype,
  SetIteratorPrototype,
  SetPrototype,
  SharedArrayBufferPrototype,
  StringIteratorPrototype,
  SymbolPrototype,
  Uint16ArrayPrototype,
  Uint32ArrayPrototype,
  Uint8ArrayPrototype,
  Uint8ClampedArrayPrototype,
  WeakMapPrototype,
  WeakRefPrototype,
  WeakSetPrototype,
};
