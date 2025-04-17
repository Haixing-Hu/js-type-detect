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
 * @see <a href=" https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isNumeric(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  switch (Object.prototype.toString.call(value)) {
    case '[object Number]':        // drop down
    case '[object BigInt]':        // drop down
      return true;
    default:
      return false;
  }
}

export default isNumeric;
