////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import COLLECTION_TYPE_NAMES from './collection-type-names';

/**
 * The array of to string values for collection objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const COLLECTION_TO_STRING_VALUES = COLLECTION_TYPE_NAMES.map((n) => `[object ${n}]`);

export default COLLECTION_TO_STRING_VALUES;
