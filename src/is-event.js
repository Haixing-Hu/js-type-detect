////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import EVENT_TYPE_NAMES from './impl/event-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Determines whether the specified object is an event object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is an event object; `false` otherwise.
 */
function isEvent(obj) {
  if (obj === null || obj === undefined) {
    return false;
  }
  // 使用 Object.prototype.toString.call() 进行跨realm检测
  if (hasToStringValueOf(obj, EVENT_TYPE_NAMES)) {
    return true;
  }
  // 特性检测，Event对象通常有这些属性
  if ((typeof obj === 'object')
      && (typeof obj.type === 'string')
      && (obj.target !== undefined)
      && (obj.currentTarget !== undefined)
      && (typeof obj.preventDefault === 'function')
      && (typeof obj.stopPropagation === 'function')) {
    return true;
  }
  // 保留原有的 instanceof 检查作为备用
  return (typeof Event === 'function') && (obj instanceof Event);
}

export default isEvent;
