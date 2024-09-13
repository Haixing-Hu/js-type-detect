////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive `number`, or a primitive `bigint`,
 * or a built-in `Number` object.
 *
 * Note that a native `bigint` value is considered as a numeric value.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive `number`, or a primitive `bigint`,
 *     or a built-in `Number` object; `false` otherwise.
 * @see isNumber
 * @see isBigInt
 * @author Haixing Hu
 */
function isNumeric(value) {
  switch (typeof value) {
    case 'number':
    case 'bigint':
      return true;
    case 'object':
      return (value instanceof Number);
    default:
      return false;
  }
}

export default isNumeric;
