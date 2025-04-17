////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a function object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a function object; `false` otherwise.
 * @author Haixing Hu
 */
function isFunction(value) {
  // 直接类型检查，最常见的情况
  if (typeof value === 'function') {
    return true;
  }
  
  // 处理空值
  if (value === null || value === undefined) {
    return false;
  }
  
  try {
    // 跨realm检测
    const type = Object.prototype.toString.call(value);
    return type === '[object Function]' 
        || type === '[object AsyncFunction]'
        || type === '[object GeneratorFunction]';
  } catch (e) {
    return false;
  }
}

export default isFunction;
