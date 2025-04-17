////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import GLOBAL_OBJECT from './global-object';
import GLOBAL_OBJECT_NAMES from './impl/global-object-names';

/**
 * Tests whether the specified value is the global object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is the global object; `false` otherwise.
 * @author Haixing Hu
 */
function isGlobalObject(value) {
  if (value === null || value === undefined) {
    return false;
  }
  // check if value is the global object of the current realm
  if (value === GLOBAL_OBJECT) {
    return true;
  }
  // use object notation to detect the global object
  const str = Object.prototype.toString.call(value);
  // in some environments, the global object may be represented as [object global] or [object Window]
  if (GLOBAL_OBJECT_NAMES.includes(str)) {
    return true;
  }
  // check if value is the global object of other realm
  try {
    // the global object has many built-in constructors and objects
    if (typeof value === 'object' && value !== null) {
      // check common global object properties and methods
      const hasGlobalThis = ('globalThis' in value) && (value.globalThis === value);
      const hasCommonGlobals = (typeof value.Object === 'function')
        && (typeof value.Array === 'function')
        && (typeof value.String === 'function')
        && (typeof value.Number === 'function')
        && (typeof value.Boolean === 'function')
        && (typeof value.Math === 'object')
        && (typeof value.Date === 'function')
        && (typeof value.JSON === 'object');
      // check common global methods
      const hasGlobalMethods = (typeof value.parseInt === 'function')
        && (typeof value.parseFloat === 'function')
        && (typeof value.isNaN === 'function')
        && (typeof value.isFinite === 'function');
      return hasGlobalThis && hasCommonGlobals && hasGlobalMethods;
    }
  } catch (e) {
    return false;
  }
  return false;
}

export default isGlobalObject;
