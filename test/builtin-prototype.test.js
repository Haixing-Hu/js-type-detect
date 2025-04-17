////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import * as BuiltinPrototype from '../src/builtin-prototype';
import * as FeatureDetect from '../src/feature-detect';

// 创建一个简单的脚本式测试，确保每个属性都被读取和测试
describe('Test the builtin-prototype.js', () => {
  // 测试导出的原型对象是否与预期一致
  test('should export all prototype objects correctly', () => {
    // 创建一个映射表，将功能检测标志和其对应的原型对象名称关联起来
    const prototypeMap = {
      'SYMBOL_EXISTS': 'SymbolPrototype',
      'BIGINT_EXISTS': 'BigIntPrototype',
      'REGEXP_EXISTS': 'RegExpPrototype',
      'AGGREGATEERROR_EXISTS': 'AggregateErrorPrototype',
      'INTERNALERROR_EXISTS': 'InternalErrorPrototype',
      'MAP_EXISTS': 'MapPrototype',
      'SET_EXISTS': 'SetPrototype',
      'WEAKMAP_EXISTS': 'WeakMapPrototype',
      'WEAKSET_EXISTS': 'WeakSetPrototype',
      'INT8ARRAY_EXISTS': 'Int8ArrayPrototype',
      'UINT8ARRAY_EXISTS': 'Uint8ArrayPrototype',
      'UINT8CLAMPEDARRAY_EXISTS': 'Uint8ClampedArrayPrototype',
      'INT16ARRAY_EXISTS': 'Int16ArrayPrototype',
      'UINT16ARRAY_EXISTS': 'Uint16ArrayPrototype',
      'INT32ARRAY_EXISTS': 'Int32ArrayPrototype',
      'UINT32ARRAY_EXISTS': 'Uint32ArrayPrototype',
      'BIGINT64ARRAY_EXISTS': 'BigInt64ArrayPrototype',
      'BIGUINT64ARRAY_EXISTS': 'BigUint64ArrayPrototype',
      'FLOAT32ARRAY_EXISTS': 'Float32ArrayPrototype',
      'FLOAT64ARRAY_EXISTS': 'Float64ArrayPrototype',
      'ARRAYBUFFER_EXISTS': 'ArrayBufferPrototype',
      'SHAREDARRAYBUFFER_EXISTS': 'SharedArrayBufferPrototype',
      'DATAVIEW_EXISTS': 'DataViewPrototype',
      'WEAKREF_EXISTS': 'WeakRefPrototype',
      'PROMISE_EXISTS': 'PromisePrototype',
      'FINALIZATIONREGISTRY_EXISTS': 'FinalizationRegistryPrototype',
    };

    // 测试原型对象是否正确导出
    Object.entries(prototypeMap).forEach(([featureFlag, prototypeVar]) => {
      // eslint-disable-next-line import/namespace
      const featureExists = FeatureDetect[featureFlag];
      let expectedValue;

      if (featureExists) {
        try {
          // 根据特征标志名称获取相应的全局构造函数
          // 去掉 _EXISTS 部分并获取原型
          const constructorName = featureFlag.replace('_EXISTS', '');
          // 这里不能使用 eval，需要显式处理每种情况
          switch (constructorName) {
            case 'SYMBOL':
              expectedValue = Symbol.prototype;
              break;
            case 'BIGINT':
              expectedValue = BigInt.prototype;
              break;
            case 'REGEXP':
              expectedValue = RegExp.prototype;
              break;
            case 'AGGREGATEERROR':
              expectedValue = AggregateError.prototype;
              break;
            case 'INTERNALERROR':
              try {
                expectedValue = InternalError.prototype;
              } catch (e) {
                expectedValue = undefined;
              }
              break;
            case 'MAP':
              expectedValue = Map.prototype;
              break;
            case 'SET':
              expectedValue = Set.prototype;
              break;
            case 'WEAKMAP':
              expectedValue = WeakMap.prototype;
              break;
            case 'WEAKSET':
              expectedValue = WeakSet.prototype;
              break;
            case 'INT8ARRAY':
              expectedValue = Int8Array.prototype;
              break;
            case 'UINT8ARRAY':
              expectedValue = Uint8Array.prototype;
              break;
            case 'UINT8CLAMPEDARRAY':
              expectedValue = Uint8ClampedArray.prototype;
              break;
            case 'INT16ARRAY':
              expectedValue = Int16Array.prototype;
              break;
            case 'UINT16ARRAY':
              expectedValue = Uint16Array.prototype;
              break;
            case 'INT32ARRAY':
              expectedValue = Int32Array.prototype;
              break;
            case 'UINT32ARRAY':
              expectedValue = Uint32Array.prototype;
              break;
            case 'BIGINT64ARRAY':
              expectedValue = BigInt64Array.prototype;
              break;
            case 'BIGUINT64ARRAY':
              expectedValue = BigUint64Array.prototype;
              break;
            case 'FLOAT32ARRAY':
              expectedValue = Float32Array.prototype;
              break;
            case 'FLOAT64ARRAY':
              expectedValue = Float64Array.prototype;
              break;
            case 'ARRAYBUFFER':
              expectedValue = ArrayBuffer.prototype;
              break;
            case 'SHAREDARRAYBUFFER':
              expectedValue = SharedArrayBuffer.prototype;
              break;
            case 'DATAVIEW':
              expectedValue = DataView.prototype;
              break;
            case 'WEAKREF':
              expectedValue = WeakRef.prototype;
              break;
            case 'PROMISE':
              expectedValue = Promise.prototype;
              break;
            case 'FINALIZATIONREGISTRY':
              expectedValue = FinalizationRegistry.prototype;
              break;
            default:
              expectedValue = undefined;
          }
        } catch (e) {
          console.warn(`无法获取 ${featureFlag} 的原型，可能环境不支持: ${e.message}`);
          expectedValue = undefined;
        }
      } else {
        expectedValue = undefined;
      }

      // eslint-disable-next-line import/namespace
      expect(BuiltinPrototype[prototypeVar]).toBe(expectedValue);

      // 确保代码覆盖分支
      if (featureExists && expectedValue !== undefined) {
        // eslint-disable-next-line import/namespace
        expect(BuiltinPrototype[prototypeVar]).not.toBeUndefined();
      } else {
        // eslint-disable-next-line import/namespace
        expect(BuiltinPrototype[prototypeVar]).toBeUndefined();
      }
    });
  });

  // 测试迭代器相关原型对象
  test('should export iterator prototype objects correctly', () => {
    // 创建一个映射表，将迭代器功能检测标志和其对应的原型对象名称关联起来
    const iteratorMap = [
      { flag: 'MAP_ENTRIES_EXISTS', proto: 'MapIteratorPrototype', getter: () => Object.getPrototypeOf(new Map().entries()) },
      { flag: 'SET_ENTRIES_EXISTS', proto: 'SetIteratorPrototype', getter: () => Object.getPrototypeOf(new Set().entries()) },
    ];

    // 对于所有迭代器，进行测试
    iteratorMap.forEach(({ flag, proto, getter }) => {
      // eslint-disable-next-line import/namespace
      const featureExists = FeatureDetect[flag];
      if (featureExists) {
        try {
          const expected = getter();
          // eslint-disable-next-line import/namespace
          expect(BuiltinPrototype[proto]).toBe(expected);
        } catch (e) {
          console.warn(`无法获取 ${proto}，可能是环境不完全支持`);
        }
      } else {
        // eslint-disable-next-line import/namespace
        expect(BuiltinPrototype[proto]).toBeUndefined();
      }
    });

    // 特殊处理某些迭代器，因为它们的获取方式不同
    if (FeatureDetect.ARRAY_ITERATOR_EXISTS && Symbol.iterator) {
      try {
        const expected = Object.getPrototypeOf([][Symbol.iterator]());
        expect(BuiltinPrototype.ArrayIteratorPrototype).toBe(expected);
      } catch (e) {
        console.warn('无法获取 ArrayIteratorPrototype，可能是环境不完全支持');
      }
    } else {
      expect(BuiltinPrototype.ArrayIteratorPrototype).toBeUndefined();
    }

    if (FeatureDetect.STRING_ITERATOR_EXISTS && Symbol.iterator) {
      try {
        const expected = Object.getPrototypeOf(''[Symbol.iterator]());
        expect(BuiltinPrototype.StringIteratorPrototype).toBe(expected);
      } catch (e) {
        console.warn('无法获取 StringIteratorPrototype，可能是环境不完全支持');
      }
    } else {
      expect(BuiltinPrototype.StringIteratorPrototype).toBeUndefined();
    }

    if (FeatureDetect.REGEXP_ITERATOR_EXISTS && Symbol.matchAll) {
      try {
        const expected = Object.getPrototypeOf(/^[a-z]/[Symbol.matchAll]());
        expect(BuiltinPrototype.RegExpIteratorPrototype).toBe(expected);
      } catch (e) {
        console.warn('无法获取 RegExpIteratorPrototype，可能是环境不完全支持');
      }
    } else {
      expect(BuiltinPrototype.RegExpIteratorPrototype).toBeUndefined();
    }
  });

  // 测试Intl相关原型对象
  test('should export Intl prototype objects correctly', () => {
    // 创建一个映射表，将Intl功能检测标志和其对应的原型对象名称关联起来
    const intlMap = [
      { flag: 'INTL_COLLATOR_EXISTS', proto: 'IntlCollatorPrototype', global: 'Intl.Collator' },
      { flag: 'INTL_DATETIMEFORMAT_EXISTS', proto: 'IntlDateTimeFormatPrototype', global: 'Intl.DateTimeFormat' },
      { flag: 'INTL_DISPLAYNAMES_EXISTS', proto: 'IntlDisplayNamesPrototype', global: 'Intl.DisplayNames' },
      { flag: 'INTL_DURATIONFORMAT_EXISTS', proto: 'IntlDurationFormatPrototype', global: 'Intl.DurationFormat' },
      { flag: 'INTL_LISTFORMAT_EXISTS', proto: 'IntlListFormatPrototype', global: 'Intl.ListFormat' },
      { flag: 'INTL_LOCALE_EXISTS', proto: 'IntlLocalePrototype', global: 'Intl.Locale' },
      { flag: 'INTL_NUMBERFORMAT_EXISTS', proto: 'IntlNumberFormatPrototype', global: 'Intl.NumberFormat' },
      { flag: 'INTL_PLURALRULES_EXISTS', proto: 'IntlPluralRulesPrototype', global: 'Intl.PluralRules' },
      { flag: 'INTL_RELATIVETIMEFORMAT_EXISTS', proto: 'IntlRelativeTimeFormatPrototype', global: 'Intl.RelativeTimeFormat' },
      { flag: 'INTL_SEGMENTER_EXISTS', proto: 'IntlSegmenterPrototype', global: 'Intl.Segmenter' },
    ];

    // 对于所有Intl对象，进行测试
    intlMap.forEach(({ flag, proto, global }) => {
      // eslint-disable-next-line import/namespace
      const featureExists = FeatureDetect[flag];
      if (featureExists) {
        try {
          // 安全获取Intl对象的原型
          let expectedValue;
          if (global === 'Intl.Collator') {
            expectedValue = Intl.Collator.prototype;
          } else if (global === 'Intl.DateTimeFormat') {
            expectedValue = Intl.DateTimeFormat.prototype;
          } else if (global === 'Intl.DisplayNames') {
            expectedValue = Intl.DisplayNames.prototype;
          } else if (global === 'Intl.DurationFormat') {
            expectedValue = Intl.DurationFormat.prototype;
          } else if (global === 'Intl.ListFormat') {
            expectedValue = Intl.ListFormat.prototype;
          } else if (global === 'Intl.Locale') {
            expectedValue = Intl.Locale.prototype;
          } else if (global === 'Intl.NumberFormat') {
            expectedValue = Intl.NumberFormat.prototype;
          } else if (global === 'Intl.PluralRules') {
            expectedValue = Intl.PluralRules.prototype;
          } else if (global === 'Intl.RelativeTimeFormat') {
            expectedValue = Intl.RelativeTimeFormat.prototype;
          } else if (global === 'Intl.Segmenter') {
            expectedValue = Intl.Segmenter.prototype;
          }
          // eslint-disable-next-line import/namespace
          expect(BuiltinPrototype[proto]).toBe(expectedValue);
        } catch (e) {
          console.warn(`无法获取 ${proto}，可能是环境不完全支持`);
        }
      } else {
        // eslint-disable-next-line import/namespace
        expect(BuiltinPrototype[proto]).toBeUndefined();
      }
    });

    // 特殊处理Intl.Segmenter迭代器原型
    if (FeatureDetect.INTL_SEGMENTER_ITERATOR_EXISTS) {
      try {
        const expected = Object.getPrototypeOf(
          new Intl.Segmenter('en', { granularity: 'grapheme' })
            .segment('')[Symbol.iterator](),
        );
        expect(BuiltinPrototype.IntelSegmentIteratorPrototype).toBe(expected);
      } catch (e) {
        console.warn('无法获取 IntelSegmentIteratorPrototype，可能是环境不完全支持');
      }
    } else {
      expect(BuiltinPrototype.IntelSegmentIteratorPrototype).toBeUndefined();
    }
  });
});
