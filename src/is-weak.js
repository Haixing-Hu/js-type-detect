////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import WEAK_TO_STRING_VALUES from './impl/weak-to-string-values';

/**
 * Tests whether the specified value is a weak reference object, i.e., a
 * `WeakMap`, a `WeakSet` or a `WeakRef` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a weak reference object, i.e., a
 *     `WeakMap`, a `WeakSet` or a `WeakRef` object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isWeak(value) {
  const str = Object.prototype.toString.call(value);
  return WEAK_TO_STRING_VALUES.includes(str);
}

export default isWeak;
