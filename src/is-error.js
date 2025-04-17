////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import ERROR_TO_STRING_VALUES from './impl/error-to-string-values';

/**
 * Tests whether the specified value is an instance of the built-in `Error`
 * class or its subclass.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is an instance of the built-in `Error`
 *     class or its subclass; `false` otherwise.
 * @author Haixing Hu
 */
function isError(value) {
  const str = Object.prototype.toString.call(value);
  return ERROR_TO_STRING_VALUES.includes(str) || (value instanceof Error); // support customized Error class
}

export default isError;
