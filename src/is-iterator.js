////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import ITERATOR_TO_STRING_VALUES from './impl/iterator-to-string-values';

/**
 * Tests whether the specified value is a built-in iterator object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in iterator object; `false`
 *     otherwise.
 * @author Haixing Hu
 */
function isIterator(value) {
  if (value === null || value === undefined) {
    return false;
  }
  const str = Object.prototype.toString.call(value);
  if (ITERATOR_TO_STRING_VALUES.includes(str)) {
    return true;
  }
  // 检查迭代器特性，所有迭代器对象都实现了 next() 方法
  if (typeof value === 'object' && typeof value.next === 'function') {
    try {
      const result = value.next();
      if ('done' in result && 'value' in result) {
        return true;
      }
    } catch (e) {
      // 忽略错误，继续使用原型链检测
    }
  }
  return false;
}

export default isIterator;
