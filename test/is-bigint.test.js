////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isBigInt, SYMBOL_EXISTS } from '../src';

/**
 * Unit test of the `isBigInt()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isString()` function', () => {
  it('returns true for a bigint', () => {
    expect(isBigInt(123n)).toBe(true);
  });
  it('returns false for a number', () => {
    expect(isBigInt(123)).toBe(false);
  });
  it('returns false for a string', () => {
    expect(isBigInt('123')).toBe(false);
  });
  it('returns false for an object', () => {
    expect(isBigInt({})).toBe(false);
  });
  it('returns false for an array', () => {
    expect(isBigInt([])).toBe(false);
  });

  it('returns false for a boolean', () => {
    expect(isBigInt(true)).toBe(false);
  });
  if (SYMBOL_EXISTS) {
    it('returns false for a symbol', () => {
      expect(isBigInt(Symbol('test'))).toBe(false);
    });
  }
  it('returns false for a function', () => {
    expect(isBigInt(() => {})).toBe(false);
  });
  it('returns false for null', () => {
    expect(isBigInt(null)).toBe(false);
  });
  it('returns false for undefined', () => {
    expect(isBigInt(undefined)).toBe(false);
  });
  test('should works across realms', () => {
    expect(isBigInt(runInNewContext('0'))).toBe(false);
    expect(isBigInt(runInNewContext('1.2'))).toBe(false);
    expect(isBigInt(runInNewContext('new Number(123)'))).toBe(false);
    expect(isBigInt(runInNewContext('new Number(Infinity)'))).toBe(false);
    expect(isBigInt(runInNewContext('false'))).toBe(false);
    expect(isBigInt(runInNewContext('new Boolean(true)'))).toBe(false);
    expect(isBigInt(runInNewContext('null'))).toBe(false);
    expect(isBigInt(runInNewContext('undefined'))).toBe(false);
    expect(isBigInt(runInNewContext('1n'))).toBe(true);
    expect(isBigInt(runInNewContext('BigInt(123)'))).toBe(true);
  });
});
