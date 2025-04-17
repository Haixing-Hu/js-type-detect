////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  CSS_RULE_EXISTS,
  CSS_RULE_LIST_EXISTS,
  CSS_STYLE_DECLARATION_EXISTS,
  FONT_FACE_EXISTS,
  FONT_FACE_SET_EXISTS,
  MEDIA_LIST_EXISTS,
  MEDIA_QUERY_LIST_EXISTS,
  SCREEN_EXISTS,
  STYLE_SHEET_EXISTS,
  STYLE_SHEET_LIST_EXISTS,
} from './feature-detect';
import CSSOM_TO_STRING_VALUES from './impl/cssom-to-string-values';

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
  const str = Object.prototype.toString.call(obj);
  if (CSSOM_TO_STRING_VALUES.includes(str)) {
    return true;
  }
  return (CSS_RULE_EXISTS && (obj instanceof CSSRule))
    || (CSS_RULE_LIST_EXISTS && (obj instanceof CSSRuleList))
    || (CSS_STYLE_DECLARATION_EXISTS && (obj instanceof CSSStyleDeclaration))
    || (STYLE_SHEET_EXISTS && (obj instanceof StyleSheet))
    || (STYLE_SHEET_LIST_EXISTS && (obj instanceof StyleSheetList))
    || (FONT_FACE_EXISTS && (obj instanceof FontFace))
    || (FONT_FACE_SET_EXISTS && (obj instanceof FontFaceSet)) // eslint-disable-line no-undef
    || (MEDIA_LIST_EXISTS && (obj instanceof MediaList))
    || (MEDIA_QUERY_LIST_EXISTS && (obj instanceof MediaQueryList))
    || (SCREEN_EXISTS && (obj instanceof Screen));
}

export default isCssom;
