////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import BUFFER_TYPE_NAMES from './buffer-type-names';

/**
 * The array of type names for buffer objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const BUFFER_TO_STRING_VALUES = BUFFER_TYPE_NAMES.map((n) => `[object ${n}]`);

export default BUFFER_TO_STRING_VALUES;
