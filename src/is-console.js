////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Determines whether the specified object is a `window.console` object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a `window.console` object; `false` otherwise.
 */
function isConsole(obj) {
  if (obj === null || obj === undefined) {
    return false;
  }
  
  // 检查常见属性来支持跨realm检测
  if (typeof obj === 'object' && obj !== null) {
    // 基本方法检测
    if (typeof obj.log === 'function' 
        && typeof obj.error === 'function'
        && typeof obj.warn === 'function'
        && typeof obj.info === 'function') {
      return true;
    }
  }
  
  // 尝试使用 toString 检测
  try {
    const type = Object.prototype.toString.call(obj);
    if (type === '[object Console]') {
      return true;
    }
  } catch (e) {
    // 忽略错误
  }
  
  // 检查是否为当前realm中的控制台对象
  return (obj === console || (typeof window !== 'undefined' && obj === window.console));
}

export default isConsole;
