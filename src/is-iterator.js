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
  // first check if it is a built-in iterator type
  if (hasToStringValueOf(value, ITERATOR_TYPE_NAMES)) {
    return true;
  }  
  // then check if it conforms to the iterator protocol
  if (value !== null && typeof value === 'object') {
    if (typeof value.next === 'function') {
      try {
        const result = value.next();
        return result !== null 
               && typeof result === 'object'
               && 'done' in result
               && 'value' in result;
      } catch (e) {
        // if the next method throws an error, it is not a valid iterator
        return false;
      }
    }
  }  
  return false;
}

export default isIterator;
