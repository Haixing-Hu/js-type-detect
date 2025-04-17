////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import OBJECT_TYPE_NAMES from './impl/object-type-names';

/**
 * Tests whether the specified value is a built-in object type.
 *
 * @param name
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in object type; `false` otherwise.
 * @author Haixing Hu
 */
function isObjectTypeName(name) {
  return OBJECT_TYPE_NAMES.includes(name);
}

export default isObjectTypeName;
