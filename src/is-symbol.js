////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a symbol object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a symbol object; `false` otherwise.
 * @author Haixing Hu
 */
function isSymbol(value) {
  return (typeof value === 'symbol');
}

export default isSymbol;
