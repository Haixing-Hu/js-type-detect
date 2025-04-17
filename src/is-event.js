////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { EVENT_EXISTS } from './feature-detect';
import EVENT_TO_STRING_VALUES from './impl/event-to-string-values';

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
  const type = Object.prototype.toString.call(obj);
  if (EVENT_TO_STRING_VALUES.includes(type)) {
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
  return EVENT_EXISTS && (obj instanceof Event);
}

export default isEvent;
