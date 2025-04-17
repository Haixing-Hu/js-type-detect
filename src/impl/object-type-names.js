////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import TYPED_ARRAY_TYPE_NAMES from './typed-array-type-names.js';

/**
 * The type names of all built-in object types.
 *
 * @type {string[]}
 */
const OBJECT_TYPE_NAMES = [
  'Function',
  'Generator',
  'AsyncGenerator',
  'GeneratorFunction',
  'AsyncGeneratorFunction',
  'AsyncFunction',
  'Observable',
  'Array',
  'Buffer',
  'Blob',
  'Object',
  'RegExp',
  'Date',
  'Error',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'WeakRef',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'DataView',
  'Promise',
  'URL',
  'FormData',
  'URLSearchParams',
  'HTMLElement',
  'NaN',
  ...TYPED_ARRAY_TYPE_NAMES,
];

export default OBJECT_TYPE_NAMES;
