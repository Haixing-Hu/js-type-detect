////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import isHtmlElement from './is-html-element';
import isObjectTypeName from './is-object-type-name';

/**
 * Gets the object type name of the specified value.
 *
 * @param value
 *     the specified value.
 * @return {undefined|string}
 *     `undefined` if the specified value is not an object; otherwise, the
 *     object type name.
 * @author Haixing Hu
 */
function getObjectType(value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
  if (/HTML\w+Element/.test(objectTypeName) && isHtmlElement(value)) {
    return 'HTMLElement';
  }
  if (isObjectTypeName(objectTypeName)) {
    return objectTypeName;
  }
  return undefined;
}

export default getObjectType;
