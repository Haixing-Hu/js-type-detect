////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import isHtmlElement from '../src/is-html-element';

describe('Test the `isHtmlElement()` function', () => {
  it('returns true for real DOM elements', () => {
    const div = document.createElement('div');
    expect(isHtmlElement(div)).toBe(true);

    const span = document.createElement('span');
    expect(isHtmlElement(span)).toBe(true);

    const input = document.createElement('input');
    expect(isHtmlElement(input)).toBe(true);
  });

  it('returns false for null', () => {
    expect(isHtmlElement(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isHtmlElement(undefined)).toBe(false);
  });

  it('returns false for primitive values', () => {
    expect(isHtmlElement(123)).toBe(false);
    expect(isHtmlElement('string')).toBe(false);
    expect(isHtmlElement(true)).toBe(false);
    expect(isHtmlElement(false)).toBe(false);
    expect(isHtmlElement(Symbol('symbol'))).toBe(false);
    expect(isHtmlElement(BigInt(123))).toBe(false);
  });

  it('returns false for non-DOM objects', () => {
    expect(isHtmlElement({})).toBe(false);
    expect(isHtmlElement([])).toBe(false);
    expect(isHtmlElement(new Date())).toBe(false);
    expect(isHtmlElement(new Map())).toBe(false);
    expect(isHtmlElement(new Set())).toBe(false);
  });

  it('returns false for objects with nodeName but missing other properties', () => {
    const fakeElement = {
      nodeName: 'DIV',
      // Missing other required properties
    };
    expect(isHtmlElement(fakeElement)).toBe(false);
  });

  it('returns true for objects with nodeName that are not plain objects', () => {
    class CustomElement {
      constructor() {
        this.nodeName = 'DIV';
        this.innerHTML = '';
        this.ownerDocument = {};
        this.style = {};
        this.attributes = [];
        this.nodeValue = null;
      }
    }
    const element = new CustomElement();
    expect(isHtmlElement(element)).toBe(true);
  });

  it('returns false for plain objects that have all required DOM properties', () => {
    const mockElement = {
      nodeName: 'DIV',
      innerHTML: '',
      ownerDocument: {},
      style: {},
      attributes: [],
      nodeValue: null,
    };
    expect(isHtmlElement(mockElement)).toBe(false);
  });
});
