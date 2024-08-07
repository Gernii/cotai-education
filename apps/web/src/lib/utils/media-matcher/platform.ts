// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
let hasV8BreakIterator: boolean;

// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        typeof Intl !== "undefined" && (Intl as any).v8BreakIterator;
} catch {
    hasV8BreakIterator = false;
}

// We want to use the platform check because if the Document is shimmed
// without the navigator, the following checks will fail. This is preferred because
// sometimes the Document may be shimmed without the user's knowledge or intention
/** Whether the application is being rendered in the browser. */
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";

/** Whether the current browser is Microsoft Edge. */
const EDGE = isBrowser && /(edge)/i.test(navigator.userAgent);
/** Whether the current rendering engine is Microsoft Trident. */
const TRIDENT = isBrowser && /(msie|trident)/i.test(navigator.userAgent);

// EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
/** Whether the current rendering engine is Blink. */
const BLINK =
    isBrowser &&
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    !!((window as any).chrome || hasV8BreakIterator) &&
    typeof CSS !== "undefined" &&
    !EDGE &&
    !TRIDENT;

// Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
// ensure that Webkit runs standalone and is not used as another engine's base.
/** Whether the current rendering engine is WebKit. */
const WEBKIT = isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !BLINK && !EDGE && !TRIDENT;

/** Whether the current platform is Apple iOS. */
const IOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);

// It's difficult to detect the plain Gecko engine, because most of the browsers identify
// them self as Gecko-like browsers and modify the userAgent's according to that.
// Since we only cover one explicit Firefox case, we can simply check for Firefox
// instead of having an unstable check for Gecko.
/** Whether the current browser is Firefox. */
const FIREFOX = isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);

/** Whether the current platform is Android. */
// Trident on mobile adds the android platform to the userAgent to trick detections.
const ANDROID = isBrowser && /android/i.test(navigator.userAgent) && !TRIDENT;

// Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
// this and just place the Safari keyword in the userAgent. To be more safe about Safari every
// Safari browser should also use Webkit as its layout engine.
/** Whether the current browser is Safari. */
const SAFARI = isBrowser && /safari/i.test(navigator.userAgent) && WEBKIT;

export function getPlatform() {
    return {
        isBrowser,
        EDGE,
        TRIDENT,
        BLINK,
        WEBKIT,
        IOS,
        FIREFOX,
        ANDROID,
        SAFARI,
    };
}
