////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import GLOBAL_OBJECT_NAMES from './global-object-names';

/**
 * The array of type names for special global objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const GLOBAL_OBJECT_TO_STRING_VALUES = GLOBAL_OBJECT_NAMES.map((n) => `[object ${n}]`);

export default GLOBAL_OBJECT_TO_STRING_VALUES;
