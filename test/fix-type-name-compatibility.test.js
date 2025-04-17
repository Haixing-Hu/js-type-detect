////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

import fixTypeNameCompatibility from '../src/impl/fix-type-name-compatibility';

describe('Test the `fixTypeNameCompatibility()` function', () => {
  test('should handle empty string (anonymous class in ES6)', () => {
    expect(fixTypeNameCompatibility('')).toBe('');
  });

  test('should handle "_class" string (anonymous class in ES5)', () => {
    expect(fixTypeNameCompatibility('_class')).toBe('');
  });

  test('should handle "_AsyncGenerator" string', () => {
    expect(fixTypeNameCompatibility('_AsyncGenerator')).toBe('AsyncGenerator');
  });

  test('should not modify other type names', () => {
    expect(fixTypeNameCompatibility('Object')).toBe('Object');
    expect(fixTypeNameCompatibility('Array')).toBe('Array');
    expect(fixTypeNameCompatibility('Function')).toBe('Function');
    expect(fixTypeNameCompatibility('CustomClass')).toBe('CustomClass');
  });
});
