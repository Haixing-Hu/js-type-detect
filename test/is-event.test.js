////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isEvent, EVENT_EXISTS } from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isEvent()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isEvent()` function', () => {
  if (EVENT_EXISTS) {
    test('should return true for Event object', () => {
      // 创建一个事件对象
      const event = new Event('click');
      // 验证isEvent是否正确返回true
      expect(isEvent(event)).toBe(true);
    });
    test('should return true for MouseEvent object', () => {
      const mouseEvent = new MouseEvent('click');
      expect(isEvent(mouseEvent)).toBe(true);
    });

    test('should return true for KeyboardEvent object', () => {
      const keyboardEvent = new KeyboardEvent('keydown');
      expect(isEvent(keyboardEvent)).toBe(true);
    });

    test('should return true for CustomEvent object', () => {
      const customEvent = new CustomEvent('my-event');
      expect(isEvent(customEvent)).toBe(true);
    });
    test('should return false for null', () => {
      expect(isEvent(null)).toBe(false);
    });
    test('should return false for undefined', () => {
      expect(isEvent(undefined)).toBe(false);
    });
    test('should return false for non-Event object', () => {
      // 创建一个普通对象
      const obj = {};
      // 验证isEvent是否正确返回false
      expect(isEvent(obj)).toBe(false);
    });

    test('should works across realms for non-Event objects', () => {
      expect(isEvent(runInNewContext('{}'))).toBe(false);
      expect(isEvent(runInNewContext('[]'))).toBe(false);
      expect(isEvent(runInNewContext('0'))).toBe(false);
      expect(isEvent(runInNewContext('false'))).toBe(false);
      expect(isEvent(runInNewContext('null'))).toBe(false);
      expect(isEvent(runInNewContext('undefined'))).toBe(false);
    });

    // 在Node.js环境中，Event不存在，所以这个测试会失败
    // 使用test.skip跳过这个测试
    test.skip('should return true for Event object in another realm', () => {
      expect(isEvent(runInNewContext('new Event("click")'))).toBe(true);
      expect(isEvent(runInNewContext('new MouseEvent("click")'))).toBe(true);
      expect(isEvent(runInNewContext('new KeyboardEvent("keydown")'))).toBe(true);
      expect(isEvent(runInNewContext('new CustomEvent("my-event")'))).toBe(true);
    });
  }
});
