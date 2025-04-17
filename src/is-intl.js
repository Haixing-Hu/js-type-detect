////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import INTL_TO_STRING_VALUES from './impl/intl-to-string-values';

/**
 * Tests whether the specified value is a built-in object in the `Intl`
 * namespace.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in object in the `Intl`
 *     namespace; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isIntl(value) {
  const str = Object.prototype.toString.call(value);
  return INTL_TO_STRING_VALUES.includes(str);
}

export default isIntl;
