////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

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
  if (value === null || value === undefined) {
    return false;
  }
  const type = Object.prototype.toString.call(value);
  return type === '[object Error]'
      || type === '[object EvalError]'
      || type === '[object RangeError]'
      || type === '[object ReferenceError]'
      || type === '[object SyntaxError]'
      || type === '[object TypeError]'
      || type === '[object URIError]'
      || type === '[object AggregateError]';
}

export default isError;
