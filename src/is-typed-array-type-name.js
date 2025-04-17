////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import TYPED_ARRAY_TYPE_NAMES from './impl/typed-array-type-names';

/**
 * Tests whether the specified value is a built-in typed array object.
 *
 * @param name
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in typed array object; `false` otherwise.
 * @author Haixing Hu
 */
function isTypedArrayTypeName(name) {
  return TYPED_ARRAY_TYPE_NAMES.includes(name);
}

export default isTypedArrayTypeName;
