////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

import NUMERIC_TO_STRING_VALUES from './impl/numeric-to-string-values';

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
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isNumeric(value) {
  const str = Object.prototype.toString.call(value);
  return NUMERIC_TO_STRING_VALUES.includes(str);
}

export default isNumeric;
