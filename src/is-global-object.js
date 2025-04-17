////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import GLOBAL_OBJECT from './global-object';

/**
 * Tests whether the specified value is the global object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is the global object; `false` otherwise.
 * @author Haixing Hu
 */
function isGlobalObject(value) {
  if (value === null || value === undefined) {
    return false;
  }
  // 检查是否是当前realm的全局对象
  if (value === GLOBAL_OBJECT) {
    return true;
  }
  
  // 使用对象表示法检测全局对象
  const type = Object.prototype.toString.call(value);
  // 在某些环境中，全局对象可能会表示为 [object global] 或 [object Window]
  if (type === '[object global]' || type === '[object Window]') {
    return true;
  }
  
  // 检查是否是其他realm的全局对象
  try {
    // 全局对象具有大量内置构造函数和对象
    if (typeof value === 'object' && value !== null) {
      // 检查常见的全局对象属性和方法
      const hasGlobalThis = 'globalThis' in value && value.globalThis === value;
      const hasCommonGlobals = 
            typeof value.Object === 'function' &&
            typeof value.Array === 'function' &&
            typeof value.String === 'function' &&
            typeof value.Number === 'function' &&
            typeof value.Boolean === 'function' &&
            typeof value.Math === 'object' &&
            typeof value.Date === 'function' &&
            typeof value.JSON === 'object';
      
      // 检查常见的全局方法
      const hasGlobalMethods =
            typeof value.parseInt === 'function' &&
            typeof value.parseFloat === 'function' &&
            typeof value.isNaN === 'function' &&
            typeof value.isFinite === 'function';
      
      return hasGlobalThis && hasCommonGlobals && hasGlobalMethods;
    }
  } catch (e) {
    return false;
  }
  
  return false;
}

export default isGlobalObject;
