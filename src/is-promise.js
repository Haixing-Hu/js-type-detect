////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a Promise object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a Promise object; `false` otherwise.
 * @author Haixing Hu
 */
function isPromise(value) {
  if (typeof Promise === 'undefined' || typeof value !== 'object' || value === null) {
    return false;
  }
  // use toString value to cross realms
  if (Object.prototype.toString.call(value) === '[object Promise]') {
    return true;
  }
  try {
    return ((typeof value.then === 'function') && (typeof value.catch === 'function'));
  } catch (e) {
    return false;
  }
}

export default isPromise;
