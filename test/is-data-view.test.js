////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isDataView, ARRAYBUFFER_EXISTS, DATAVIEW_EXISTS } from '../src';

describe('isDataView', () => {
  if (ARRAYBUFFER_EXISTS && DATAVIEW_EXISTS) {
    it('returns true for a DataView object', () => {
      const buffer = new ArrayBuffer(8);
      const dataView = new DataView(buffer);
      expect(isDataView(dataView)).toBe(true);
    });
  }
  it('returns false for a plain object', () => {
    expect(isDataView({})).toBe(false);
  });
  it('returns false for an array', () => {
    expect(isDataView([])).toBe(false);
  });
  it('returns false for a string', () => {
    expect(isDataView('test')).toBe(false);
  });
  it('returns false for a number', () => {
    expect(isDataView(123)).toBe(false);
  });
  it('returns false for a boolean', () => {
    expect(isDataView(true)).toBe(false);
  });
  it('returns false for a function', () => {
    expect(isDataView(() => {})).toBe(false);
  });
  it('returns false for a symbol', () => {
    expect(isDataView(Symbol('test'))).toBe(false);
  });
  it('returns false for a BigInt', () => {
    expect(isDataView(123n)).toBe(false);
  });
  it('returns false for null', () => {
    expect(isDataView(null)).toBe(false);
  });
  it('returns false for undefined', () => {
    expect(isDataView(undefined)).toBe(false);
  });
});
