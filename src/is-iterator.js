////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  ArrayIteratorPrototype,
  IntelSegmentIteratorPrototype,
  MapIteratorPrototype,
  RegExpIteratorPrototype,
  SetIteratorPrototype,
  StringIteratorPrototype,
} from './builtin-prototype';

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
  if ((value === null) || (value === undefined)) {
    return false;
  }
  
  // 先使用 Object.prototype.toString.call() 检测以支持跨realm
  const type = Object.prototype.toString.call(value);
  if (type === '[object Array Iterator]'
      || type === '[object String Iterator]'
      || type === '[object Map Iterator]'
      || type === '[object Set Iterator]'
      || type === '[object RegExp String Iterator]'
      || type === '[object Segmenter String Iterator]') {
    return true;
  }
  
  // 检查迭代器特性，所有迭代器对象都实现了 next() 方法
  if (typeof value === 'object' && value !== null && typeof value.next === 'function') {
    try {
      const result = value.next();
      if ('done' in result && 'value' in result) {
        return true;
      }
    } catch (e) {
      // 忽略错误，继续使用原型链检测
    }
  }
  
  // 保留原有的原型链判断作为备用
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case MapIteratorPrototype:              // drop down
    case SetIteratorPrototype:              // drop down
    case ArrayIteratorPrototype:            // drop down
    case StringIteratorPrototype:           // drop down
    case RegExpIteratorPrototype:           // drop down
    case IntelSegmentIteratorPrototype:     // drop down
      return true;
    default:
      return false;
  }
}

export default isIterator;
