////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import getTypeName from './get-type-name';

/**
 * Tests whether the specified value is a generator object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a generator object; `false` otherwise.
 * @author Haixing Hu
 */
function isGenerator(value) {
  if ((typeof value !== 'object') || (value === null)) {
    return false;
  }
  const typeName = getTypeName(value);
  return /Generator$/.test(typeName);
}

export default isGenerator;
