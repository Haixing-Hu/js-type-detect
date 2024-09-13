////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive `string` or a built-in `String`
 * object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive `string` or a built-in `String`
 *     object; `false` otherwise.
 * @author Haixing Hu
 */
function isString(value) {
  return (typeof value === 'string') || (value instanceof String);
}

export default isString;
