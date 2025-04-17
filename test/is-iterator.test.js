////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
/**
 * @jest-environment jsdom
 */
import ITERATOR_TO_STRING_VALUES from '../src/impl/iterator-to-string-values';
import isIterator from '../src/is-iterator';

describe('Test the `isIterator()` function', () => {
  it('returns true for array iterators', () => {
    const array = [1, 2, 3];
    const iterator = array[Symbol.iterator]();
    expect(isIterator(iterator)).toBe(true);
  });

  it('returns true for string iterators', () => {
    const string = 'hello';
    const iterator = string[Symbol.iterator]();
    expect(isIterator(iterator)).toBe(true);
  });

  it('returns true for map iterators', () => {
    const map = new Map([['a', 1], ['b', 2]]);
    const keyIterator = map.keys();
    const valueIterator = map.values();
    const entriesIterator = map.entries();

    expect(isIterator(keyIterator)).toBe(true);
    expect(isIterator(valueIterator)).toBe(true);
    expect(isIterator(entriesIterator)).toBe(true);
  });

  it('returns true for set iterators', () => {
    const set = new Set([1, 2, 3]);
    const valueIterator = set.values();
    const keyIterator = set.keys();
    const entriesIterator = set.entries();

    expect(isIterator(valueIterator)).toBe(true);
    expect(isIterator(keyIterator)).toBe(true);
    expect(isIterator(entriesIterator)).toBe(true);
  });

  it('returns true for custom iterators with next method', () => {
    const customIterator = {
      index: 0,
      data: [1, 2, 3],
      next() {
        if (this.index < this.data.length) {
          return { value: this.data[this.index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
    expect(isIterator(customIterator)).toBe(true);
  });

  it('returns false for objects with next method but invalid return value', () => {
    const badIterator1 = {
      next() {
        return { foo: 'bar' }; // Missing 'done' and 'value'
      },
    };
    expect(isIterator(badIterator1)).toBe(false);

    const badIterator2 = {
      next() {
        return { done: true }; // Missing 'value'
      },
    };
    expect(isIterator(badIterator2)).toBe(false);

    const badIterator3 = {
      next() {
        return { value: 42 }; // Missing 'done'
      },
    };
    expect(isIterator(badIterator3)).toBe(false);
  });

  it('returns false for objects with next method that throws errors', () => {
    const errorIterator = {
      next() {
        throw new Error('Intentional error');
      },
    };
    expect(isIterator(errorIterator)).toBe(false);
  });

  it('returns false for objects where next is not a function', () => {
    const badObject = {
      next: 'not a function',
    };
    expect(isIterator(badObject)).toBe(false);
  });

  it('returns false for primitive values', () => {
    expect(isIterator(undefined)).toBe(false);
    expect(isIterator(null)).toBe(false);
    expect(isIterator(123)).toBe(false);
    expect(isIterator('string')).toBe(false);
    expect(isIterator(true)).toBe(false);
    expect(isIterator(Symbol('symbol'))).toBe(false);
    expect(isIterator(BigInt(123))).toBe(false);
  });

  it('returns false for non-iterator objects', () => {
    expect(isIterator({})).toBe(false);
    expect(isIterator([])).toBe(false);
    expect(isIterator(new Date())).toBe(false);
    expect(isIterator(new Map())).toBe(false);
    expect(isIterator(new Set())).toBe(false);
    expect(isIterator(new WeakMap())).toBe(false);
    expect(isIterator(new WeakSet())).toBe(false);
    expect(isIterator(/regex/)).toBe(false);
    expect(isIterator(new Error())).toBe(false);
    expect(isIterator(() => {})).toBe(false);
  });

  it('returns true for objects with known iterator toString values', () => {
    // Create a mock object that has a toString value matching a known iterator
    const mockIterator = {};
    // Assign original toString method to a different key to avoid recursive call
    const originalToString = Object.prototype.toString;

    // Test each known toString value
    ITERATOR_TO_STRING_VALUES.forEach((stringValue) => {
      // Mock toString to return the iterator string value
      // eslint-disable-next-line no-extend-native
      Object.prototype.toString = function mockToString() {
        if (this === mockIterator) {
          return stringValue;
        }
        return originalToString.call(this);
      };

      expect(isIterator(mockIterator)).toBe(true);
    });

    // Restore original toString method
    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('should works across realms', () => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    try {
      // Create an iterator in the iframe's realm
      const arrayFromIframe = new iframe.contentWindow.Array(1, 2, 3);
      const iteratorFromIframe = arrayFromIframe[Symbol.iterator]();
      expect(isIterator(iteratorFromIframe)).toBe(true);
    } finally {
      document.body.removeChild(iframe);
    }
  });
});
