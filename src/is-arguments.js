////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether a value is an arguments object of a function.
 *
 * @param {any} value
 *     the value to be checked.
 * @return {boolean}
 *     {@code true} if the value is an arguments object of a function;
 *     {@code false} otherwise.
 * @author Haixing Hu
 */
function isArguments(value) {
  if (value === null || value === undefined) {
    return false;
  }
  // 首先检查是否确实是arguments对象的toString结果
  const stringTag = Object.prototype.toString.call(value);
  if (stringTag === '[object Arguments]') {
    // 需要进一步检查，因为对象可以使用Symbol.toStringTag伪装成Arguments对象
    try {
      // 检查是否是通过Symbol.toStringTag伪装的
      if (Object.prototype.hasOwnProperty.call(value, Symbol.toStringTag)
          && value[Symbol.toStringTag] === 'Arguments') {
        // 如果是通过Symbol.toStringTag明确设置的，需要进一步检查其他属性
        return typeof value.callee === 'function'
          && typeof value.length === 'number'
          && Array.isArray(Object.keys(value).filter((k) => /^\d+$/.test(k)));
      }
      // 否则认为是真正的arguments对象
      return true;
    } catch (err) {
      // 这可能是一个严格模式下的arguments对象，访问callee会抛出TypeError
      return err.message.indexOf('callee') !== -1;
    }
  }
  return false;
}

export default isArguments;
