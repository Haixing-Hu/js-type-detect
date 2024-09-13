////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isBigInt } from '../src';
import { SYMBOL_EXISTS } from '../src/feature-detect';

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
});
