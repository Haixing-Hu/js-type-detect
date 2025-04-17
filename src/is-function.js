////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import FUNCTION_TO_STRING_VALUES from './impl/function-to-string-values';

/**
 * Tests whether the specified value is a function object.
 *
 * An async function is also a function object, but the generator function is not
 * a function object. To detect generator functions, use the `isGenerator()`.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a function object; `false` otherwise.
 * @author Haixing Hu
 * @see isGenerator
 */
function isFunction(value) {
  const str = Object.prototype.toString.call(value);
  return FUNCTION_TO_STRING_VALUES.includes(str);
}

export default isFunction;
