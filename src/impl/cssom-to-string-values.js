////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import CSSOM_TYPE_NAMES from './cssom-type-names';

/**
 * The array of to string values for CSSOM objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const CSSOM_TO_STRING_VALUES = CSSOM_TYPE_NAMES.map((n) => `[object ${n}]`);

export default CSSOM_TO_STRING_VALUES;
