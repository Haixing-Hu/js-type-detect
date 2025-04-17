////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import {
  isGenerator,
  ASYNC_FUNCTION_EXISTS,
  SYMBOL_EXISTS,
} from '../src';

/**
 * Unit test of the `isGenerator()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isGenerator()` function', () => {
  test('returns true for a generator object', () => {
    function* foo() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
    const x = foo();
    expect(isGenerator(x)).toBe(true);
  });
  test('returns false for a generator function', () => {
    function* foo() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
    expect(isGenerator(foo)).toBe(false);
  });
  it('returns false for a function', () => {
    expect(isGenerator(() => {})).toBe(false);
  });
  if (ASYNC_FUNCTION_EXISTS) {
    test('returns true for an async generator object', () => {
      async function* foo() {
        yield await Promise.resolve('a');
        yield await Promise.resolve('b');
        yield await Promise.resolve('c');
      }
      const x = foo();
      expect(isGenerator(x)).toBe(true);
    });
    test('returns false for an async generator function', () => {
      async function* foo() {
        yield await Promise.resolve('a');
        yield await Promise.resolve('b');
        yield await Promise.resolve('c');
      }
      expect(isGenerator(foo)).toBe(false);
    });
    it('returns false for an async function', () => {
      expect(isGenerator(async () => {})).toBe(false);
    });
  }
  it('returns false for a string', () => {
    expect(isGenerator('test')).toBe(false);
  });
  it('returns false for a number', () => {
    expect(isGenerator(123)).toBe(false);
  });
  it('returns false for an object', () => {
    expect(isGenerator({})).toBe(false);
  });
  it('returns false for an array', () => {
    expect(isGenerator([])).toBe(false);
  });
  it('returns false for a boolean', () => {
    expect(isGenerator(true)).toBe(false);
  });
  if (SYMBOL_EXISTS) {
    it('returns false for a symbol', () => {
      expect(isGenerator(Symbol('test'))).toBe(false);
    });
  }
  it('returns false for null', () => {
    expect(isGenerator(null)).toBe(false);
  });
  it('returns false for undefined', () => {
    expect(isGenerator(undefined)).toBe(false);
  });
  
  test('should works across realms', () => {
    expect(isGenerator(runInNewContext(`
      (function* () {
        yield 'a';
        yield 'b';
      })()
    `))).toBe(true);
    
    expect(isGenerator(runInNewContext(`
      function* gen() {
        yield 'a';
        yield 'b';
      }
      gen
    `))).toBe(false);
    
    if (ASYNC_FUNCTION_EXISTS) {
      expect(isGenerator(runInNewContext(`
        (async function* () {
          yield await Promise.resolve('a');
          yield await Promise.resolve('b');
        })()
      `))).toBe(true);
    }
    
    expect(isGenerator(runInNewContext('{}'))).toBe(false);
    expect(isGenerator(runInNewContext('[]'))).toBe(false);
    expect(isGenerator(runInNewContext('0'))).toBe(false);
    expect(isGenerator(runInNewContext('false'))).toBe(false);
    expect(isGenerator(runInNewContext('null'))).toBe(false);
    expect(isGenerator(runInNewContext('undefined'))).toBe(false);
  });
});
