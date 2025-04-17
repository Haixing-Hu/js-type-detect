////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import getTypeName from './get-type-name';
import CSSOM_TYPE_NAMES from './impl/cssom-type-names';

/**
 * Determines whether the specified object is a CSSOM object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a CSSOM object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isCssom(obj) {
  const name = getTypeName(obj);
  return CSSOM_TYPE_NAMES.includes(name);
}

export default isCssom;
