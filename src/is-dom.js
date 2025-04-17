////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import DOM_TYPE_NAMES from './impl/dom-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Determines whether the specified object is a DOM object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a DOM object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isDom(obj) {
  return hasToStringValueOf(obj, DOM_TYPE_NAMES);
}

export default isDom;
