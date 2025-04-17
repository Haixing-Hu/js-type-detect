////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import NUMERIC_TYPE_NAMES from './numeric-type-names';

/**
 * The array of to string values for numeric values/objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const NUMERIC_TO_STRING_VALUES = NUMERIC_TYPE_NAMES.map((n) => `[object ${n}]`);

export default NUMERIC_TO_STRING_VALUES;
