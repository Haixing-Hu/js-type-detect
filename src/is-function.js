////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a function object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a function object; `false` otherwise.
 * @author Haixing Hu
 */
function isFunction(value) {
  return (typeof value === 'function');
}

export default isFunction;
