////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

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
 */
function isFile(value) {
  const name = Object.prototype.toString.call(value);
  switch (name) {
    case '[object File]':
    case '[object Blob]':
    case '[object FileList]':
    case '[object FileReader]':
    case '[object FileReaderSync]':
      return true;
    default:
      return false;
  }
}

export default isFile;
