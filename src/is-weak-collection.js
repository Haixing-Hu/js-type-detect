////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  WeakMapPrototype,
  WeakSetPrototype,
} from './builtin-prototype';

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
 */
function isWeakCollection(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case WeakMapPrototype:        // drop down
    case WeakSetPrototype:        // drop down
      return true;
    default:
      return false;
  }
}

export default isWeakCollection;
