////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import DOM_TYPE_NAMES from './dom-type-names';

/**
 * The array of to string values for DOM objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const DOM_TO_STRING_VALUES = DOM_TYPE_NAMES.map((n) => `[object ${n}]`);

export default DOM_TO_STRING_VALUES;
