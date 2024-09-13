////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import GLOBAL_OBJECT from './global-object';

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
  return (value === GLOBAL_OBJECT);
}

export default isGlobalObject;
