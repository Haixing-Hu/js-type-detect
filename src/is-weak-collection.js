////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a built-in weak collection object, i.e., a
 * `WeakMap` or a `WeakSet` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in weak collection object, i.e.,
 *     an `WeakMap` or a `WeakSet` object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href=" https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isWeakCollection(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  switch (Object.prototype.toString.call(value)) {
    case '[object WeakMap]':        // drop down
    case '[object WeakSet]':        // drop down
      return true;
    default:
      return false;
  }
}

export default isWeakCollection;
