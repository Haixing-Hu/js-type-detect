////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import WEAK_COLLECTION_TO_STRING_VALUES
  from './weak-collection-to-string-values';

/**
 * The array of to string values for weak reference objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const WEAK_TO_STRING_VALUES = [
  ...WEAK_COLLECTION_TO_STRING_VALUES,
  '[object WeakRef]',
];

export default WEAK_TO_STRING_VALUES;
