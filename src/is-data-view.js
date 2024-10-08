////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { DataViewPrototype } from './builtin-prototype';

/**
 * Tests whether the specified value is a data view object, i.e., an `DataView`
 * object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a data view object, i.e., an `DataView`
 *     object; `false` otherwise.
 * @author Haixing Hu
 */
function isDataView(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return (proto === DataViewPrototype);
}

export default isDataView;
