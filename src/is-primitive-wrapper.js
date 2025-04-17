////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive wrapper object.
 *
 * A primitive wrapper object is an object form of primitive data types.
 * In JavaScript, there are 5 primitive wrapper types:
 * - String object
 * - Number object
 * - BigInt object
 * - Boolean object
 * - Symbol object
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive wrapper object; `false` otherwise.
 * @author Haixing Hu
 */
function isPrimitiveWrapper(value) {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  const tag = Object.prototype.toString.call(value);
  return tag === '[object String]'
      || tag === '[object Number]'
      || tag === '[object BigInt]'
      || tag === '[object Boolean]'
      || tag === '[object Symbol]';
}

export default isPrimitiveWrapper;
