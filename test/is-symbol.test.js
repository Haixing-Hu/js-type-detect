////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isSymbol } from '../src';
import { SYMBOL_EXISTS } from '../src/feature-detect';

/**
 * Unit test of the `isString()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isSymbol()` function', () => {
  if (SYMBOL_EXISTS) {
    it('returns true for a symbol', () => {
      expect(isSymbol(Symbol('test'))).toBe(true);
    });
  }
  it('returns false for a string', () => {
    expect(isSymbol('test')).toBe(false);
  });
  it('returns false for a number', () => {
    expect(isSymbol(123)).toBe(false);
  });
  it('returns false for an object', () => {
    expect(isSymbol({})).toBe(false);
  });
  it('returns false for an array', () => {
    expect(isSymbol([])).toBe(false);
  });
  it('returns false for null', () => {
    expect(isSymbol(null)).toBe(false);
  });
  it('returns false for undefined', () => {
    expect(isSymbol(undefined)).toBe(false);
  });
  it('returns false for a boolean', () => {
    expect(isSymbol(true)).toBe(false);
  });
  it('returns false for a function', () => {
    expect(isSymbol(() => {})).toBe(false);
  });
  test('nullish values', () => {
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
  });
});
