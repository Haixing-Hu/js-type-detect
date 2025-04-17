////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified type name matches the toString() name of an object.
 *
 * @param name
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified type name matches the object type name;
 */
function isMatchObjectTypeToStringName(name) {
  return /^\[object [A-Za-z0-9]+]$/.test(name);
}

export default isMatchObjectTypeToStringName;
