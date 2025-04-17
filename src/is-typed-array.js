////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import TYPED_ARRAY_TO_STRING_VALUES from './impl/typed-array-to-string-values';

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
  const str = Object.prototype.toString.call(value);
  return TYPED_ARRAY_TO_STRING_VALUES.includes(str);
}

export default isTypedArray;
