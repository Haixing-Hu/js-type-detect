////////////////////////////////////////////////////////////////////////////////
import fixTypeNameCompatibility from './fix-type-name-compatibility';
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import hasToStringTag from './has-to-string-tag';
import isHtmlElement from './is-html-element';

/**
 * Gets the type name of a value.
 *
 * @param {object} value
 *     the value, must be an object.
 * @return {string}
 *     the type name of the value.
 */
function getTypeName(value) {
  let typeName = '';
  if (hasToStringTag(value)) {
    // note that Generator and AsyncGenerator objects has defined its own
    // Symbol.toStringTag property, so the following code will handle those cases.
    typeName = value[Symbol.toStringTag].replace(/\s/g, '');
  } else if (value.constructor
      && (value.constructor.name !== undefined)
      && (value.constructor.name !== null)
      && (value.constructor.name !== 'Object')) {
    // user defined class instance
    typeName = value.constructor.name;
  } else {
    const str = Object.prototype.toString.call(value);
    typeName = str.slice(8, -1).replace(/\s/g, '');
  }
  // for HTML elements, the type name is always 'HTMLElement'
  if (/HTML\w+Element/.test(typeName) && isHtmlElement(value)) {
    return 'HTMLElement';
  }
  return fixTypeNameCompatibility(typeName);
}

export default getTypeName;
