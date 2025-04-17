////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import hasTypeNameOf from './impl/has-type-name-of';
import SVG_DOM_TYPE_NAMES from './impl/svg-dom-type-names';

/**
 * Determines whether the specified object is a SVG DOM object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a SVG DOM object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isSvgDom(obj) {
  return hasTypeNameOf(obj, SVG_DOM_TYPE_NAMES);
}

export default isSvgDom;
