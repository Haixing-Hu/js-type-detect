////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import isPlainObject from './is-plain-object';

const DOM_PROPERTIES_TO_CHECK = [
  'innerHTML',
  'ownerDocument',
  'style',
  'attributes',
  'nodeValue',
];

/**
 * Tests whether the specified value is a DOM element.
 *
 * @param value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a DOM element; `false` otherwise.
 * @author Haixing Hu
 */
function isHtmlElement(value) {
  if (value === null) {
    return false;
  }
  if (typeof value !== 'object') {
    return false;
  }
  if ((typeof value.nodeName) !== 'string') {
    return false;
  }
  if (!isPlainObject(value)) {
    return false;
  }
  return DOM_PROPERTIES_TO_CHECK.every((property) => property in value);
}

export default isHtmlElement;
