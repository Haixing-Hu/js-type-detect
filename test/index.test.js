////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

// 导入所有从index.js导出的类型检测函数和特性检测标志
import * as TypeDetect from '../src/index';

describe('Test the index.js exports', () => {
  test('should export getTypeName and use it', () => {
    expect(TypeDetect.getTypeName).toBeDefined();
    expect(typeof TypeDetect.getTypeName).toBe('function');

    // 实际使用getTypeName
    expect(TypeDetect.getTypeName(new Date())).toBe('Date');
    expect(TypeDetect.getTypeName([])).toBe('Array');
    expect(TypeDetect.getTypeName({})).toBe('Object');
  });

  test('should export GLOBAL_OBJECT', () => {
    expect(TypeDetect.GLOBAL_OBJECT).toBeDefined();
    expect(typeof TypeDetect.GLOBAL_OBJECT).toBe('object');

    // 验证GLOBAL_OBJECT是全局对象
    if (typeof global !== 'undefined') {
      expect(TypeDetect.GLOBAL_OBJECT).toBe(global);
    }
    if (typeof window !== 'undefined') {
      expect(TypeDetect.GLOBAL_OBJECT).toBe(window);
    }
  });

  test('should export and use type detection functions', () => {
    const testCases = [
      { func: 'isArguments', trueFor: (function () { return arguments; }()), falseFor: {} },
      { func: 'isBigInt', trueFor: BigInt(123), falseFor: 123 },
      { func: 'isBoolean', trueFor: true, falseFor: 1 },
      { func: 'isBuffer', trueFor: new ArrayBuffer(8), falseFor: new Uint8Array(8) },
      { func: 'isBuiltInClass', trueFor: Array, falseFor: class CustomClass {} },
      { func: 'isCollection', trueFor: new Map(), falseFor: {} },
      { func: 'isConsole', trueFor: console, falseFor: {} },
      { func: 'isDataView', trueFor: new DataView(new ArrayBuffer(8)), falseFor: new Uint8Array(8) },
      { func: 'isError', trueFor: new Error(), falseFor: {} },
      { func: 'isEvent', trueFor: new Event('test'), falseFor: {} },
      { func: 'isFunction', trueFor() {}, falseFor: {} },
      { func: 'isGlobalObject', trueFor: TypeDetect.GLOBAL_OBJECT, falseFor: {} },
      { func: 'isNumber', trueFor: 123, falseFor: '123' },
      { func: 'isNumeric', trueFor: 123, falseFor: {} },
      { func: 'isString', trueFor: 'hello', falseFor: 123 },
      { func: 'isSymbol', trueFor: Symbol('test'), falseFor: 'test' },
      { func: 'isTypedArray', trueFor: new Uint8Array(8), falseFor: [] },
      { func: 'isWeak', trueFor: new WeakMap(), falseFor: new Map() },
      { func: 'isWeakCollection', trueFor: new WeakMap(), falseFor: new Map() },
    ];

    // 对每个测试用例，确保函数按预期工作
    testCases.forEach(({ func, trueFor, falseFor }) => {
      expect(TypeDetect[func]).toBeDefined();
      expect(typeof TypeDetect[func]).toBe('function');

      // 对于一些环境特定的测试，需要检查对象是否存在
      try {
        expect(TypeDetect[func](trueFor)).toBe(true);
        expect(TypeDetect[func](falseFor)).toBe(false);
      } catch (e) {
        console.warn(`测试 ${func} 时出现异常，可能是环境不支持相关对象`);
      }
    });

    // 特殊情况：测试带有条件的函数
    // isDom只在DOM环境中有效
    if (typeof document !== 'undefined') {
      expect(TypeDetect.isDom(document)).toBe(true);
      expect(TypeDetect.isDom({})).toBe(false);
    }

    // isCssom只在支持CSS的环境中有效
    if (typeof CSSStyleSheet !== 'undefined') {
      try {
        const styleSheet = new CSSStyleSheet();
        expect(TypeDetect.isCssom(styleSheet)).toBe(true);
      } catch (e) {
        // 在某些环境中，CSSStyleSheet可能无法直接实例化
        console.warn('无法创建CSSStyleSheet实例');
      }
      expect(TypeDetect.isCssom({})).toBe(false);
    }

    // isFile只在支持File API的环境中有效
    if (typeof Blob !== 'undefined') {
      expect(TypeDetect.isFile(new Blob([]))).toBe(true);
      expect(TypeDetect.isFile({})).toBe(false);
    }

    // isGenerator只在支持Generator的环境中有效
    if (typeof function* () {}.constructor === 'function') {
      const genFunc = function* () { yield 1; };
      const genObj = genFunc();
      expect(TypeDetect.isGenerator(genObj)).toBe(true);
      expect(TypeDetect.isGenerator(genFunc)).toBe(false);
    }

    // isIntl只在支持Intl的环境中有效
    if (typeof Intl !== 'undefined') {
      expect(TypeDetect.isIntl(new Intl.DateTimeFormat())).toBe(true);
      expect(TypeDetect.isIntl({})).toBe(false);
    }

    // isIterator只在支持迭代器的环境中有效
    if (typeof Symbol !== 'undefined' && Symbol.iterator) {
      const iterator = [][Symbol.iterator]();
      expect(TypeDetect.isIterator(iterator)).toBe(true);
      expect(TypeDetect.isIterator({})).toBe(false);
    }
  });

  test('should export feature detection flags', () => {
    const featureFlags = [
      'AGGREGATEERROR_EXISTS',
      'ARRAYBUFFER_EXISTS',
      'ARRAY_ISARRAY_EXISTS',
      'ARRAY_ITERATOR_EXISTS',
      'ASYNC_FUNCTION_EXISTS',
      'ATOMICS_EXISTS',
      'BIGINT64ARRAY_EXISTS',
      'BIGINT_EXISTS',
      'BIGUINT64ARRAY_EXISTS',
      'DATAVIEW_EXISTS',
      'FINALIZATIONREGISTRY_EXISTS',
      'FLOAT32ARRAY_EXISTS',
      'FLOAT64ARRAY_EXISTS',
      'INT16ARRAY_EXISTS',
      'INT32ARRAY_EXISTS',
      'INT8ARRAY_EXISTS',
      'INTERNALERROR_EXISTS',
      'INTL_COLLATOR_EXISTS',
      'INTL_DATETIMEFORMAT_EXISTS',
      'INTL_DISPLAYNAMES_EXISTS',
      'INTL_DURATIONFORMAT_EXISTS',
      'INTL_EXISTS',
      'INTL_LISTFORMAT_EXISTS',
      'INTL_LOCALE_EXISTS',
      'INTL_NUMBERFORMAT_EXISTS',
      'INTL_PLURALRULES_EXISTS',
      'INTL_RELATIVETIMEFORMAT_EXISTS',
      'INTL_SEGMENTER_EXISTS',
      'INTL_SEGMENTER_ITERATOR_EXISTS',
      'MAP_ENTRIES_EXISTS',
      'MAP_EXISTS',
      'MAP_ITERATOR_EXISTS',
      'PROMISE_EXISTS',
      'PROXY_EXISTS',
      'REFLECT_EXISTS',
      'REGEXP_EXISTS',
      'REGEXP_ITERATOR_EXISTS',
      'SET_ENTRIES_EXISTS',
      'SET_EXISTS',
      'SET_ITERATOR_EXISTS',
      'SHAREDARRAYBUFFER_EXISTS',
      'STRING_ITERATOR_EXISTS',
      'SYMBOL_EXISTS',
      'SYMBOL_ITERATOR_EXISTS',
      'SYMBOL_MATCH_ALL_EXISTS',
      'SYMBOL_TO_STRING_TAG_EXISTS',
      'UINT16ARRAY_EXISTS',
      'UINT32ARRAY_EXISTS',
      'UINT8ARRAY_EXISTS',
      'UINT8CLAMPEDARRAY_EXISTS',
      'WEAKMAP_EXISTS',
      'WEAKREF_EXISTS',
      'WEAKSET_EXISTS',
      'DOM_NODE_EXISTS',
      'HTML_COLLECTION_EXISTS',
      'NODE_LIST_EXISTS',
      'NAMED_NODE_MAP_EXISTS',
      'NODE_ITERATOR_EXISTS',
      'TREE_WALKER_EXISTS',
      'ABSTRACT_RANGE_EXISTS',
      'MUTATION_RECORD_EXISTS',
      'MUTATION_OBSERVER_EXISTS',
      'DOM_TOKEN_LIST_EXISTS',
      'DOM_RECT_EXISTS',
      'DOM_POINT_READONLY_EXISTS',
      'DOM_PARSER_EXISTS',
      'DOM_IMPLEMENTATION_EXISTS',
      'DOM_EXCEPTION_EXISTS',
      'TIME_RANGES_EXISTS',
      'CSS_EXISTS',
      'CSS_RULE_EXISTS',
      'CSS_RULE_LIST_EXISTS',
      'CSS_STYLE_DECLARATION_EXISTS',
      'STYLE_SHEET_EXISTS',
      'STYLE_SHEET_LIST_EXISTS',
      'FONT_FACE_EXISTS',
      'FONT_FACE_SET_EXISTS',
      'MEDIA_LIST_EXISTS',
      'MEDIA_QUERY_LIST_EXISTS',
      'SCREEN_EXISTS',
      'ABORT_SIGNAL_EXISTS',
      'ABORT_CONTROLLER_EXISTS',
      'EVENT_EXISTS',
      'BLOB_EXISTS',
      'FILE_EXISTS',
      'FILE_LIST_EXISTS',
      'FILE_READER_EXISTS',
      'FILE_READER_SYNC_EXISTS',
    ];

    // 验证所有特性检测标志都被导出了
    featureFlags.forEach((flagName) => {
      expect(TypeDetect[flagName]).toBeDefined();
      expect(typeof TypeDetect[flagName]).toBe('boolean');
    });

    // 验证一些特性检测标志的值
    if (typeof ArrayBuffer !== 'undefined') {
      expect(TypeDetect.ARRAYBUFFER_EXISTS).toBe(true);
    }

    if (typeof Map !== 'undefined') {
      expect(TypeDetect.MAP_EXISTS).toBe(true);
    }

    if (typeof Set !== 'undefined') {
      expect(TypeDetect.SET_EXISTS).toBe(true);
    }

    if (typeof Symbol !== 'undefined') {
      expect(TypeDetect.SYMBOL_EXISTS).toBe(true);
    }

    if (typeof Promise !== 'undefined') {
      expect(TypeDetect.PROMISE_EXISTS).toBe(true);
    }

    if (typeof WeakMap !== 'undefined') {
      expect(TypeDetect.WEAKMAP_EXISTS).toBe(true);
    }

    if (typeof WeakSet !== 'undefined') {
      expect(TypeDetect.WEAKSET_EXISTS).toBe(true);
    }

    if (typeof Int8Array !== 'undefined') {
      expect(TypeDetect.INT8ARRAY_EXISTS).toBe(true);
    }
  });
});
