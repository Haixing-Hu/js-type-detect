////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import WEAK_COLLECTION_TYPE_NAMES from './weak-collection-type-names';

/**
 * The array of to string values for weak collection objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const WEAK_COLLECTION_TO_STRING_VALUES = WEAK_COLLECTION_TYPE_NAMES.map((n) => `[object ${n}]`);

export default WEAK_COLLECTION_TO_STRING_VALUES;
