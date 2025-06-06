////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isBoolean } from '../src';

/**
 * Unit test of the `isBoolean()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isBoolean()` function', () => {
  test('primitive boolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Boolean(true))).toBe(true);
    expect(isBoolean(Boolean(false))).toBe(true);
  });
  test('primitive non-boolean', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(0.0)).toBe(false);
    expect(isBoolean(0n)).toBe(false);
    expect(isBoolean('abc')).toBe(false);
  });
  test('Boolean object', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });
  test('non-Boolean object', () => {
    expect(isBoolean({ abc: 123 })).toBe(false);
    expect(isBoolean(new String('abc'))).toBe(false);
  });
  test('nullish values', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });
  test('should works across realms', () => {
    expect(isBoolean(runInNewContext('true'))).toBe(true);
    expect(isBoolean(runInNewContext('false'))).toBe(true);
    expect(isBoolean(runInNewContext('new Boolean(false)'))).toBe(true);
    expect(isBoolean(runInNewContext('new Boolean(true)'))).toBe(true);
    expect(isBoolean(runInNewContext('{}'))).toBe(false);
    expect(isBoolean(runInNewContext('[]'))).toBe(false);
    expect(isBoolean(runInNewContext('0'))).toBe(false);
    expect(isBoolean(runInNewContext('"true"'))).toBe(false);
    expect(isBoolean(runInNewContext('null'))).toBe(false);
    expect(isBoolean(runInNewContext('undefined'))).toBe(false);
  });
});
