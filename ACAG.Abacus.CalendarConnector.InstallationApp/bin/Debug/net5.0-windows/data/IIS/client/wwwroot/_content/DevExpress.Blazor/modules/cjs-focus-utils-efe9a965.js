DxBlazorInternal.define("cjs-focus-utils-efe9a965.js",(function(e,n,t){e("./cjs-chunk-c5286524.js");var c=e("./cjs-dom-utils-9b1ac92c.js"),s=e("./cjs-chunk-ad620f3e.js"),o=e("./cjs-chunk-e15409c9.js"),a=e("./cjs-chunk-a2fdd7b4.js");function u(e){function n(n){e.contains(n.srcElement)&&c.addClassNameToElement(e,"dxbs-focus-hidden")}function t(n){!e.contains(n.relatedTarget)&&document.hasFocus()&&c.removeClassNameFromElement(e,"dxbs-focus-hidden")}function o(n){9===n.keyCode&&c.removeClassNameFromElement(e,"dxbs-focus-hidden")}var u=document.documentElement;return s.attachEventToElement(u,a.TouchUIHelper.touchMouseDownEventName,n),s.attachEventToElement(e,"keydown",o),s.attachEventToElement(e,"focusout",t),function(){s.detachEventFromElement(u,a.TouchUIHelper.touchMouseDownEventName,n),s.detachEventFromElement(e,"keydown",o),s.detachEventFromElement(e,"focusout",t)}}function d(e){if(e){o.disposeEvents(e);var n=u(e);o.registerDisposableEvents(e,n)}}var i={attachEventsForFocusHiding:u,initFocusHidingEvents:d};t.attachEventsForFocusHiding=u,t.default=i,t.initFocusHidingEvents=d}),["cjs-chunk-c5286524.js","cjs-dom-utils-9b1ac92c.js","cjs-chunk-ad620f3e.js","cjs-chunk-e15409c9.js","cjs-chunk-a2fdd7b4.js"]);
