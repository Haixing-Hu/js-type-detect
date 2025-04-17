////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import EVENT_TYPE_NAMES from './event-type-names';

/**
 * The array of to string values for event objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const EVENT_TO_STRING_VALUES = EVENT_TYPE_NAMES.map((n) => `[object ${n}]`);

export default EVENT_TO_STRING_VALUES;
