////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import TYPED_ARRAY_TYPE_NAMES from './typed-array-type-names';

/**
 * The to string values of all built-in typed array objects.
 *
 * @type {string[]}
 */
const TYPED_ARRAY_TO_STRING_VALUES = TYPED_ARRAY_TYPE_NAMES.map((n) => `[object ${n}]`);

export default TYPED_ARRAY_TO_STRING_VALUES;
