////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import FILE_TYPE_NAMES from './file-type-names';

/**
 * The array of to string values for file objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const FILE_TO_STRING_VALUES = FILE_TYPE_NAMES.map((n) => `[object ${n}]`);

export default FILE_TO_STRING_VALUES;
