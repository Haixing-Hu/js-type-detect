////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import FILE_TO_STRING_VALUES from './impl/file-to-string-values';

/**
 * Tests whether the specified value is a JavaScript File API object.
 *
 * A File API object is an instance of the `File`, `Blob`, `FileList`,
 * `FileReader`, or `FileReaderSync` class.
 *
 * @param {any} value
 *     The value to test.
 * @return {boolean}
 *     `true` if the specified value is a JavaScript File API object; `false`
 *     otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isFile(value) {
  const str = Object.prototype.toString.call(value);
  return FILE_TO_STRING_VALUES.includes(str);
}

export default isFile;
