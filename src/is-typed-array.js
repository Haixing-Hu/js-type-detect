////////////////////////////////////////////////////////////////////////////////
import isMatchObjectTypeToStringName
  from './is-match-object-type-to-string-name';
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import isTypedArrayTypeName from './is-typed-array-type-name';

/**
 * Tests whether the specified value is a typed-array.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a typed-array; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isTypedArray(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  const toStringValue = Object.prototype.toString.call(value);
  if (!isMatchObjectTypeToStringName(toStringValue)) {
    return false;
  }
  const typeName = toStringValue.slice(8, -1);
  return isTypedArrayTypeName(typeName);
}

export default isTypedArray;
