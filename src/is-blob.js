////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a Blob object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a Blob object; `false` otherwise.
 * @author Haixing Hu
 */
function isBlob(value) {
  if (typeof Blob === 'undefined') {
    return false;
  }
  return (value instanceof Blob) || Object.prototype.toString.call(value) === '[object Blob]';
}

export default isBlob;
