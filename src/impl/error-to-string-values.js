////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import ERROR_TYPE_NAMES from './error-type-names';

/**
 * The array of to string values for error objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const ERROR_TO_STRING_VALUES = ERROR_TYPE_NAMES.map((n) => `[object ${n}]`);

export default ERROR_TO_STRING_VALUES;
