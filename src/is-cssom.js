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

/**
 * Determines whether the specified object is a CSSOM object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a CSSOM object; `false` otherwise.
 */
function isCssom(obj) {
  if (obj === null || obj === undefined) {
    return false;
  }
  // 使用 Object.prototype.toString.call() 进行跨realm检测
  const type = Object.prototype.toString.call(obj);
  if (type === '[object CSSRule]'
      || type === '[object CSSRuleList]'
      || type === '[object CSSStyleDeclaration]'
      || type === '[object CSSStyleSheet]'
      || type === '[object StyleSheet]'
      || type === '[object StyleSheetList]'
      || type === '[object FontFace]'
      || type === '[object FontFaceSet]'
      || type === '[object MediaList]'
      || type === '[object MediaQueryList]'
      || type === '[object Screen]') {
    return true;
  }
  // 保留原有的 instanceof 检查作为备用
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
