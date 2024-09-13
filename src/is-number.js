////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive `number`, or a built-in
 * `Number` object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive `number`, or a built-in
 *     `Number` object; `false` otherwise.
 * @see isNumeric
 * @see isBigInt
 * @author Haixing Hu
 */
function isNumber(value) {
  return (typeof value === 'number') || (value instanceof Number);
}

export default isNumber;
