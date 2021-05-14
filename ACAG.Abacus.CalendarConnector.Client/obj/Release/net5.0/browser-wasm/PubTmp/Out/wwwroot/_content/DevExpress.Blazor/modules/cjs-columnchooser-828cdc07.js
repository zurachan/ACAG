DxBlazorInternal.define("cjs-columnchooser-828cdc07.js",(function(n,e,t){n("./cjs-chunk-c5286524.js");var o=n("./cjs-dom-utils-9b1ac92c.js");n("./cjs-chunk-ad620f3e.js"),n("./cjs-chunk-a2fdd7b4.js");var c,s,i,a,r,u,d,l,f,p,h=n("./cjs-chunk-5ddcb914.js"),m=n("./cjs-dragAndDropUnit-8e207f13.js"),v=null,g=-1,j=-1,w=!0,y=!1;function E(n,e,t,c){if(n.forEach((function(n){o.ensureElement(n)})),a?a._id!==c._id&&(I(a),a=c):a=c,!l)for(var d=l=e;d.parentNode!==document&&d.classList;){if(d.classList.contains("modal-body")){y=!0;break}d=d.parentNode}if(r=new Map,u&&u.dispose(),u=new h.EventRegister(l),v||(s=new Map,i=new Map,v=n),j=-1,u.attachEventWithContext(document,"keydown",x,document),v&&(v.sort((function(n,e){return n.dataset.vindex-e.dataset.vindex})),f=function(n,e){if(y)return n;var t=n,o=window.getComputedStyle(t);for(;o.position!==e&&t.parentNode!==document;)t=t.parentNode,o=window.getComputedStyle(t);return t}(l,"absolute"),b(t&&!y),k()))var m=u.attachEvent(f,"focusin",(function(){m.dispose(),v[0].focus()}));M(),p&&(p.parentNode.removeChild(p),p=null)}function b(n){w=n,d&&d.dispose();var e=document.querySelector(".column-chooser-exit-button");d=e?new m.FocusUnit(e,null,l,!w):null,i.forEach((function(n){n.dispose()})),i=new Map,v.forEach((function(n){!function(n,e){var t=s.get(n.dataset.column);t||((t=new m.DragAndDropUnit(n,n.parentNode,z,".column-chooser-drag-icon-owner",B,y)).onDragStart=A,t.onDrag=F,t.onDragCancel=U,t.onDropAnimationEnd=S,s.set(n.dataset.column,t));t.reset(),n.classList.remove("up"),n.classList.remove("down"),n.classList.remove("freeze");var o=i.get(n.dataset.column);o||((o=new m.FocusUnit(n,".custom-control-input",e,y||!w)).onFocus=D,o.onBlur=C,o.onClick=N,i.set(n.dataset.column,o));o.reset()}(n,f)}))}function k(){return w}function x(n){switch(k()||(b(!0),9===n.keyCode&&v[v.length-1].focus()),n.keyCode){case 32:j>=0&&(n.preventDefault(),v[j].click());break;case 38:n.preventDefault(),L(-1);break;case 40:n.preventDefault(),L(1)}}function L(n){if(v&&s){j=(j+=n)<0?v.length-1:j;var e=i.get(v[j%=v.length].dataset.column);e&&e.focus()}}function D(n){j=v.indexOf(n)}function C(n){j===v.indexOf(n)&&(j===v.length-1&&d&&d.focus(),j=-1)}function N(n){k()&&b(!1)}function O(n){return v.find((function(e,t,o){return function(n,e){var t=R(n);if(!t)return!1;return t.top<=e&&e<=t.bottom}(e,n.y)}))}function z(n){var e=O(n);return e?{item:e,relativeRect:R(e)}:null}function M(){if(c&&c.style){var n=s.get(c.dataset.column);n&&n.reset();var e=i.get(c.dataset.column);e&&e.reset(),g=-1,c.childNodes.forEach((function(n){n.style&&(n.style.visibility="")})),c=null}}function A(n){g=v.indexOf(c=n),v.forEach((function(n){n.blur(),n!==c&&n.classList.add("freeze")})),c.childNodes.forEach((function(n){n.style&&(n.style.visibility="hidden")}));var e=i.get(c.dataset.column);e&&e.stop()}function R(n){var e=r.get(n);if(e)return e;var t=m.getClientRect(n),o=B();return e=new m.RectBlz(t.x-o.x,t.y-o.y,t.width,t.height),r.set(n,e),e}function S(n,e){v.forEach((function(n){s.get(n.dataset.column).stop()})),p=l.cloneNode(!0),o.eraseBlazorIdentificators(p),p.style["z-index"]=2e3,l.parentNode.appendChild(p),a.invokeMethodAsync("OnElementsExchange",n.dataset.column,e.dataset.column).catch((function(n){window.console.error(n)}))}function U(n){v.forEach((function(n){n.classList.remove("up"),n.classList.remove("down"),n.classList.remove("freeze")})),M()}function B(){var n=y?l.parentNode:l,e=m.getClientRect(n);return 0!==n.scrollTop?{x:e.x,y:e.y-n.scrollTop}:e.location}function _(n){i.get(n.dataset.column).updateStyleMetadata()}function F(n,e){if(n){-1===g&&(g=v.indexOf(n));var t=O(e.centerOfDraggingObject);if(t){var o=v.indexOf(t),s=!1;v.forEach(g<o?function(n){c===n&&(s=!0),s?(_(n),n.classList.add("up")):n.classList.remove("up","down"),t===n&&(s=!1)}:g>o?function(n){t===n&&(s=!0),s?(_(n),n.classList.add("down")):n.classList.remove("up","down"),c===n&&(s=!1)}:function(n){n.classList.remove("up","down")})}}}function I(n){n._id===a._id&&(s.forEach((function(n){n.dispose()})),i.forEach((function(n){n.dispose()})),v=null,c=null,g=-1,l=null,r=null,s=null,i=null,a=null,u&&u.dispose(),u=null,p&&(p.parentNode.removeChild(p),p=null))}t.default={init:E,dispose:I},t.dispose=I,t.init=E}),["cjs-chunk-c5286524.js","cjs-dom-utils-9b1ac92c.js","cjs-chunk-ad620f3e.js","cjs-chunk-a2fdd7b4.js","cjs-chunk-5ddcb914.js","cjs-dragAndDropUnit-8e207f13.js"]);