////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isGlobalObject, GLOBAL_OBJECT, SYMBOL_EXISTS, BIGINT_EXISTS } from '../src';

/**
 * Unit test of the `isGlobalObject()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isGlobalObject()` function', () => {
  it('returns true for the global object', () => {
    expect(isGlobalObject(GLOBAL_OBJECT)).toBe(true);
  });
  it('returns true for the globalThis', () => {
    /* eslint-disable no-undef */
    expect(isGlobalObject(globalThis)).toBe(true);
  });
  it('returns false for a plain object', () => {
    expect(isGlobalObject({})).toBe(false);
  });
  it('returns false for a number', () => {
    expect(isGlobalObject(123)).toBe(false);
  });
  it('returns false for a string', () => {
    expect(isGlobalObject('global')).toBe(false);
  });
  it('returns false for a boolean', () => {
    expect(isGlobalObject(true)).toBe(false);
  });
  it('returns false for a function', () => {
    expect(isGlobalObject(() => {})).toBe(false);
  });
  if (SYMBOL_EXISTS) {
    it('returns false for a symbol', () => {
      expect(isGlobalObject(Symbol('global'))).toBe(false);
    });
  }
  if (BIGINT_EXISTS) {
    it('returns false for a BigInt', () => {
      expect(isGlobalObject(123n)).toBe(false);
    });
  }
  it('returns false for null', () => {
    expect(isGlobalObject(null)).toBe(false);
  });
  it('returns false for undefined', () => {
    expect(isGlobalObject(undefined)).toBe(false);
  });
});
