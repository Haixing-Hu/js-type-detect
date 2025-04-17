////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isConsole } from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isConsole()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isConsole()` function', () => {
  it('undefined', () => {
    expect(isConsole(undefined)).toBe(false);
  });
  it('null', () => {
    expect(isConsole(null)).toBe(false);
  });
  it('123', () => {
    expect(isConsole(123)).toBe(false);
  });
  it('"str"', () => {
    expect(isConsole('str')).toBe(false);
  });
  it('{}', () => {
    expect(isConsole({})).toBe(false);
  });
  if (window && window.console) {
    it('window.console', () => {
      expect(isConsole(window.console)).toBe(true);
    });
  }
  if (console) {
    it('console', () => {
      expect(isConsole(console)).toBe(true);
    });
  }

  test('should works across realms', () => {
    expect(isConsole(runInNewContext('console'))).toBe(true);
    expect(isConsole(runInNewContext('{}'))).toBe(false);
    expect(isConsole(runInNewContext('[]'))).toBe(false);
    expect(isConsole(runInNewContext('0'))).toBe(false);
    expect(isConsole(runInNewContext('false'))).toBe(false);
    expect(isConsole(runInNewContext('null'))).toBe(false);
    expect(isConsole(runInNewContext('undefined'))).toBe(false);
  });
});
