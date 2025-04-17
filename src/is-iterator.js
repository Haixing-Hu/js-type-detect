////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import ITERATOR_TYPE_NAMES from './impl/iterator-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a built-in iterator object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in iterator object; `false`
 *     otherwise.
 * @author Haixing Hu
 */
function isIterator(value) {
  return hasToStringValueOf(value, ITERATOR_TYPE_NAMES);
}

export default isIterator;
