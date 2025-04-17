////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import FUNCTION_TYPE_NAMES from './function-type-names';

/**
 * The to string values of all built-in functions.
 *
 * @type {string[]}
 */
const FUNCTION_TO_STRING_VALUES = FUNCTION_TYPE_NAMES.map((n) => `[object ${n}]`);

export default FUNCTION_TO_STRING_VALUES;
