import"./esm-chunk-d81494b9.js";import{setInputAttribute as e,ensureElement as t,getParentByClassName as o,elementIsInDOM as n}from"./esm-dom-utils-c40cd314.js";import{a as s,d as r}from"./esm-chunk-9c16a801.js";import{d as c,r as u}from"./esm-chunk-f3c18c5b.js";import{T as a}from"./esm-chunk-1b6abd73.js";import{K as i}from"./esm-chunk-808bf349.js";import{getDropDownElement as d,onOutsideClick as l,isDropDownVisible as m}from"./esm-dropdowns-990ef398.js";import"./esm-chunk-13e2cf5f.js";import{scrollToFocusedItem as f,getParametersForVirtualScrollingRequest as p}from"./esm-grid-1b060bef.js";import"./esm-grid-column-resize-adeb3acf.js";import"./esm-popup-utils-32033e18.js";import"./esm-focus-utils-c767d78c.js";import"./esm-chunk-d4fc448c.js";import"./esm-dragAndDropUnit-f02dc664.js";import{k,a as y}from"./esm-chunk-30985063.js";function g(e){const t=d(e);f(t)}function v(t,o,n){e(t,"value",o),C(t),n&&function(e){e&&e.select()}(t)}function C(e){e.previousSibling.innerText=""===e.value&&e.placeholder?e.placeholder:e.value}function h(e){e=t(e),document.activeElement===e&&j(e)}function b(e,t){const n=e.target;T(n,!0),function(e){if(e){const t=o(e,"form-control");t.dataset.bluredClass&&(t.className=t.dataset.bluredClass)}}(n),n.dataset.timerId=setTimeout((function(){if(delete n.dataset.timerId,document.activeElement!==n)try{S(t,n)}catch(e){}}),200)}function T(e,t){e.dataset.timerId&&(clearTimeout(e.dataset.timerId),delete e.dataset.timerId),t||setTimeout((function(){T(e,!0)}),100)}function j(e){if(e){const t=o(e,"form-control");t.dataset.focusedClass&&(t.className=t.dataset.focusedClass)}}function E(e,t,o,n,s){I(e)&&(e.stopPropagation(),e.preventDefault());const r=function(e){const t=e.altKey&&(e.keyCode===i.Down||e.keyCode===i.Up),o=D(e),n=e.keyCode===i.Esc||e.keyCode===i.Enter,s=function(e){const t=0===e.target.value.length;return e.keyCode===i.Backspace&&t}(e);return t||o||n||s}(e)&&!e.repeat;n&&!e.repeat&&k(e),r&&w(e,t,o,s)}function w(e,t,o,n){const s=e.target.value,r=""!==e.target.dataset.previousValue;if(o&&n){const n=o.querySelector(".dxgvCSD");n&&(o=n);const c=p(o,!1);t.invokeMethodAsync("TagBoxVirtualScrollingProcessKey",s,e.keyCode,e.altKey,e.ctrlKey,c.requestScrollState.itemHeight,c.requestScrollState.scrollTop,c.requestScrollState.scrollHeight,r)}else t.invokeMethodAsync("TagBoxProcessKey",s,e.keyCode,e.altKey,e.ctrlKey,r)}function D(e){return e.keyCode===i.Down||e.keyCode===i.Up||e.keyCode===i.PageUp||e.keyCode===i.PageDown||e.ctrlKey&&(e.keyCode===i.Home||e.keyCode===i.End)}function I(e){return D(e)||e.keyCode===i.Enter}function S(e,t,o){if(!t)return;const n=(new Date).getTime();t.dataset.lastLostFocusTime&&n-t.dataset.lastLostFocusTime<300&&!o||(t.dataset.lastLostFocusTime=(new Date).getTime(),document.activeElement!==t&&(t.value=""),e.invokeMethodAsync("OnTagBoxLostFocus",t.value))}function K(e,o,f){const p=t(e);if(!p)return;c(p);const k=t(o.inputElement),g=d(p),v=function(e){return E(e,f,g,o.filteringEnabled,o.virtualScrollingEnabled)},h=function(e){return function(e,t,o,n,s){if(I(e))e.stopPropagation(),e.preventDefault(),e.keyCode!==i.Up&&e.keyCode!==i.Down||t.invokeMethodAsync("OnTagBoxKeyUp",e.keyCode===i.Up);else if(n&&y(e)){if(e.keyCode===i.Backspace&&""===e.target.dataset.previousValue)return;w(e,t,o,s)}return!1}(e,f,g,o.filteringEnabled,o.virtualScrollingEnabled)},D=function(e){return function(e,t){j(e.target)}(e)},K=function(e){return b(e,f)},x=function(e){return C(e.target)},P=function(e){return T(k)},F=function(e){return l(e,p,(function(){n(p)||c(p);const e=document.activeElement===k,t=k.dataset.timerId>0,o=g&&m(g);T(k),(e||t||o)&&S(f,k,!0)}))};return s(k,"keydown",v),s(k,"keyup",h),s(k,"focus",D),s(k,"blur",K),s(k,"input",x),s(p,"mousedown",P),s(document,a.touchMouseDownEventName,F),u(p,(function(){r(k,"keydown",v),r(k,"keyup",h),r(k,"focus",D),r(k,"blur",K),r(k,"input",x),r(p,"mousedown",P),r(document,a.touchMouseDownEventName,F)})),C(k),Promise.resolve("ok")}function x(e){if(e=t(e))return c(e),Promise.resolve("ok")}const P={init:K,dispose:x,prepareInputIfFocused:h,scrollToFocusedItem:g,fitInputWidth:C,forceInputValue:v};export default P;export{x as dispose,C as fitInputWidth,v as forceInputValue,K as init,h as prepareInputIfFocused,g as scrollToFocusedItem};