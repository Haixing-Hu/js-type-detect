////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import COLLECTION_TO_STRING_VALUES from './impl/collection-to-string-values';

/**
 * Tests whether the specified value is a built-in collection object, i.e., a
 * `Map` or a `Set` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in collection object, i.e., an
 *     `Map` or a `Set` object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isCollection(value) {
  const str = Object.prototype.toString.call(value);
  return COLLECTION_TO_STRING_VALUES.includes(str);
}

export default isCollection;
