////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a Date object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a Date object; `false` otherwise.
 * @author Haixing Hu
 */
function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]';
}

export default isDate;
