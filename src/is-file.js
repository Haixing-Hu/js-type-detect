////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  BLOB_EXISTS,
  FILE_EXISTS,
  FILE_LIST_EXISTS,
  FILE_READER_EXISTS,
  FILE_READER_SYNC_EXISTS,
} from './feature-detect';

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
  return (FILE_EXISTS && (value instanceof File))
    || (BLOB_EXISTS && (value instanceof Blob))
    || (FILE_LIST_EXISTS && (value instanceof FileList))
    || (FILE_READER_EXISTS && (value instanceof FileReader))
    || (FILE_READER_SYNC_EXISTS && (value instanceof FileReaderSync));   // eslint-disable-line no-undef
}

export default isFile;
