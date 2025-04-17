////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import WEAK_TYPE_NAMES from './weak-type-names';

/**
 * The array of to string values for weak reference objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const WEAK_TO_STRING_VALUES = WEAK_TYPE_NAMES.map((n) => `[object ${n}]`);

export default WEAK_TO_STRING_VALUES;
