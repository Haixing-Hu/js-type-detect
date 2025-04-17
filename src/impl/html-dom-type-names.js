////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * The array of type names for HTML DOM objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API">The HTML DOM API</a>
 */
const HTML_DOM_TYPE_NAMES = [
  // HTML element interfaces
  'HTMLAnchorElement',
  'HTMLAreaElement',
  'HTMLAudioElement',
  'HTMLBaseElement',
  'HTMLBodyElement',
  'HTMLBRElement',
  'HTMLButtonElement',
  'HTMLCanvasElement',
  'HTMLDataElement',
  'HTMLDataListElement',
  'HTMLDetailsElement',
  'HTMLDialogElement',
  'HTMLDirectoryElement',
  'HTMLDivElement',
  'HTMLDListElement',
  'HTMLElement',
  'HTMLEmbedElement',
  'HTMLFieldSetElement',
  'HTMLFormElement',
  'HTMLHRElement',
  'HTMLHeadElement',
  'HTMLHeadingElement',
  'HTMLHtmlElement',
  'HTMLIFrameElement',
  'HTMLImageElement',
  'HTMLInputElement',
  'HTMLLabelElement',
  'HTMLLegendElement',
  'HTMLLIElement',
  'HTMLLinkElement',
  'HTMLMapElement',
  'HTMLMediaElement',
  'HTMLMenuElement',
  'HTMLMetaElement',
  'HTMLMeterElement',
  'HTMLModElement',
  'HTMLObjectElement',
  'HTMLOListElement',
  'HTMLOptGroupElement',
  'HTMLOptionElement',
  'HTMLOutputElement',
  'HTMLParagraphElement',
  'HTMLPictureElement',
  'HTMLPreElement',
  'HTMLProgressElement',
  'HTMLQuoteElement',
  'HTMLScriptElement',
  'HTMLSelectElement',
  'HTMLSlotElement',
  'HTMLSourceElement',
  'HTMLSpanElement',
  'HTMLStyleElement',
  'HTMLTableCaptionElement',
  'HTMLTableCellElement',
  'HTMLTableColElement',
  'HTMLTableElement',
  'HTMLTableRowElement',
  'HTMLTableSectionElement',
  'HTMLTemplateElement',
  'HTMLTextAreaElement',
  'HTMLTimeElement',
  'HTMLTitleElement',
  'HTMLTrackElement',
  'HTMLUListElement',
  'HTMLUnknownElement',
  'HTMLVideoElement',
  // Deprecated HTML Element Interfaces
  'HTMLMarqueeElement',
  // Obsolete HTML Element Interfaces
  'HTMLFontElement',
  'HTMLFrameElement',
  'HTMLFrameSetElement',
  // Web app and browser integration interfaces
  'BarProp',
  'Navigator',
  'Window',
  // Deprecated web app and browser integration interfaces
  'External',
  // Obsolete web app and browser integration interfaces
  'Plugin',
  'PluginArray',
  // Form support interfaces
  'FormDataEvent',
  'HTMLFormControlsCollection',
  'HTMLOptionsCollection',
  'RadioNodeList',
  'ValidityState',
  // Canvas and image interfaces
  'CanvasGradient',
  'CanvasPattern',
  'CanvasRenderingContext2D',
  'ImageBitmap',
  'ImageBitmapRenderingContext',
  'ImageData',
  'OffscreenCanvas',
  'OffscreenCanvasRenderingContext2D',
  'Path2D',
  'TextMetrics',
  // Media interfaces
  'AudioTrack',
  'AudioTrackList',
  'MediaError',
  'TextTrack',
  'TextTrackCue',
  'TextTrackCueList',
  'TextTrackList',
  'TimeRanges',
  'TrackEvent',
  'VideoTrack',
  'VideoTrackList',
  // Drag and drop interfaces
  'DataTransfer',
  'DataTransferItem',
  'DataTransferItemList',
  'DragEvent',
  // Page history interfaces
  'BeforeUnloadEvent',
  'HashChangeEvent',
  'History',
  'Location',
  'PageRevealEvent',
  'PageSwapEvent',
  'PageTransitionEvent',
  'PopStateEvent',
  // Web Components interfaces
  'CustomElementRegistry',
  // Miscellaneous and supporting interfaces
  'DOMStringList',
  'DOMStringMap',
  'ErrorEvent',
  'HTMLAllCollection',
  'MimeType',
  'MimeTypeArray',
  'PromiseRejectionEvent',
];

export default HTML_DOM_TYPE_NAMES;
