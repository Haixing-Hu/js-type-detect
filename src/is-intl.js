////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  IntlCollatorPrototype,
  IntlDateTimeFormatPrototype,
  IntlDisplayNamesPrototype,
  IntlDurationFormatPrototype,
  IntlListFormatPrototype,
  IntlLocalePrototype,
  IntlNumberFormatPrototype,
  IntlPluralRulesPrototype,
  IntlRelativeTimeFormatPrototype,
  IntlSegmenterPrototype,
} from './builtin-prototype';

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
 */
function isIntl(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  // 先使用 Object.prototype.toString.call() 检测以支持跨realm
  const type = Object.prototype.toString.call(value);
  if (type === '[object Intl.Collator]'
      || type === '[object Intl.DateTimeFormat]'
      || type === '[object Intl.DisplayNames]'
      || type === '[object Intl.DurationFormat]'
      || type === '[object Intl.ListFormat]'
      || type === '[object Intl.Locale]'
      || type === '[object Intl.NumberFormat]'
      || type === '[object Intl.PluralRules]'
      || type === '[object Intl.RelativeTimeFormat]'
      || type === '[object Intl.Segmenter]') {
    return true;
  }
  // 保留原有的原型链判断作为备用
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case IntlCollatorPrototype:             // drop down
    case IntlDateTimeFormatPrototype:       // drop down
    case IntlDisplayNamesPrototype:         // drop down
    case IntlDurationFormatPrototype:       // drop down
    case IntlListFormatPrototype:           // drop down
    case IntlLocalePrototype:               // drop down
    case IntlNumberFormatPrototype:         // drop down
    case IntlPluralRulesPrototype:          // drop down
    case IntlRelativeTimeFormatPrototype:   // drop down
    case IntlSegmenterPrototype:            // drop down
      return true;
    default:
      return false;
  }
}

export default isIntl;
