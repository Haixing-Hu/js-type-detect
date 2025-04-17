////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import BUFFER_TO_STRING_VALUES from './impl/buffer-to-string-values.js';

/**
 * Tests whether the specified value is a buffer object, i.e., an `ArrayBuffer`
 * or a `SharedBuffer` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a buffer object, i.e., an `ArrayBuffer`
 *     or a `SharedBuffer` object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isBuffer(value) {
  const str = Object.prototype.toString.call(value);
  return BUFFER_TO_STRING_VALUES.includes(str);
}

export default isBuffer;
