////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import INTL_TYPE_NAMES from './intl-type-names';

/**
 * The array of to string values for Intl objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const INTL_TO_STRING_VALUES = INTL_TYPE_NAMES.map((n) => `[object ${n}]`);

export default INTL_TO_STRING_VALUES;
