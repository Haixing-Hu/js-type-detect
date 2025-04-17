////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import ITERATOR_TYPE_NAMES from './iterator-type-names';

/**
 * The array of to string values for iterator objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const ITERATOR_TO_STRING_VALUES = ITERATOR_TYPE_NAMES.map((n) => `[object ${n}]`);

export default ITERATOR_TO_STRING_VALUES;
