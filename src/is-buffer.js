////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  ArrayBufferPrototype,
  SharedArrayBufferPrototype,
} from './builtin-prototype';

/**
 * Tests whether the specified value is a buffer object, i.e., an `ArrayBuffer`
 * or a `SharedBuffer` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a buffer object, i.e., an `ArrayBuffer`
 *     or a `SharedBuffer` object; `false` otherwise.
 * @author Haixing Hu
 */
function isBuffer(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  // 先使用 Object.prototype.toString.call() 检测以支持跨realm
  const type = Object.prototype.toString.call(value);
  if (type === '[object ArrayBuffer]' || type === '[object SharedArrayBuffer]') {
    return true;
  }
  // 保留原有的原型链判断作为备用
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case ArrayBufferPrototype:              // drop down
    case SharedArrayBufferPrototype:        // drop down
      return true;
    default:
      return false;
  }
}

export default isBuffer;
