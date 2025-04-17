////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a weak reference object, i.e., a
 * `WeakMap`, a `WeakSet` or a `WeakRef` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a weak reference object, i.e., a
 *     `WeakMap`, a `WeakSet` or a `WeakRef` object; `false` otherwise.
 * @author Haixing Hu
 */
function isWeak(value) {
  if ((value === null) || (typeof value !== 'object')) {
    return false;
  }
  switch (Object.prototype.toString.call(value)) {
    case '[object WeakMap]':        // drop down
    case '[object WeakSet]':        // drop down
    case '[object WeakRef]':        // drop down
      return true;
    default:
      return false;
  }
}

export default isWeak;
