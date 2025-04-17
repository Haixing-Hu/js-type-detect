////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive `boolean` or a built-in
 * `Boolean` object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive `boolean` or a built-in
 *     `Boolean` object; `false` otherwise.
 * @author Haixing Hu
 */
function isBoolean(value) {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}

export default isBoolean;
