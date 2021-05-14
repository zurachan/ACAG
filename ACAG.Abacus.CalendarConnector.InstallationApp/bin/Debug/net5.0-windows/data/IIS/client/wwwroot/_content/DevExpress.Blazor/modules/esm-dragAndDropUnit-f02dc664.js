import"./esm-chunk-d81494b9.js";import{ensureElement as t,eraseBlazorIdentificators as e}from"./esm-dom-utils-c40cd314.js";import"./esm-chunk-9c16a801.js";import{T as i}from"./esm-chunk-1b6abd73.js";import{E as s}from"./esm-chunk-d4fc448c.js";class n{constructor(e,i,s,n,o,r){this.isModal=r,this.itemForDrag=e,t(this.itemForDrag),this.container=i,this.getDropTarget=s,this.clean=!1,this.getZeroPoint=o,n&&(this.dragAnchor=this.itemForDrag.querySelector(n)),this.dragAnchor||(this.dragAnchor=this.itemForDrag),this.cloneForMove=null,this.reset()}dropEvents(){this.events&&(this.events.dispose(),this.events=null)}dropTempObject(){this.currentPoint=null,this.startPoint=null,this.cloneForMove&&(this.cloneForMove.parentNode.removeChild(this.cloneForMove),this.cloneForMove=null)}reset(){if(this.clean)return;this.clean=!0,this.dropTempObject(),this.dropEvents(),this.events||(this.events=new s(this));const t=this;this.eventTokenDragStart=this.events.attachEvent(this.dragAnchor,i.touchMouseDownEventName,(function(t){this.dragTriger(t)})),this.container.size=function(){return g(t.container).size},this.itemForDrag.size=function(){return g(t.itemForDrag).size},this.itemForDrag.location=function(){return g(t.itemForDrag).location},this.contentHeightInt=-1}stop(){this.clean=!1,this.dropEvents()}dispose(){this.dropTempObject(),this.dropEvents(),this.onDragStart=null,this.onDrag=null,this.onDrop=null,this.onDragEndAnimateEnd=null,this.onDragCancel=null,this.itemForDrag=null,this.container=null}get contentHeight(){if(-1===this.contentHeightInt){this.contentHeightInt=0;const t=this.scrollContainer.children;for(let e=0;e<t.length;e++)t[e]!==this.cloneForMove&&(this.contentHeightInt+=t[e].getBoundingClientRect().height)}return this.contentHeightInt}get cursor(){return this.cursorPoint}get isScrollActive(){return this.contentHeight!==g(this.scrollContainer).height}get scrollContainer(){if(this.isModal){if(!this._scrollContainer){let t=this.container;for(;t!==window&&t.classList;){if(t.classList.contains("modal-body")){this._scrollContainer=t;break}t=t.parentNode}}return this._scrollContainer}return this.container}get scrollingCorrection(){return this.isModal&&this.isScrollActive?{y:this.scrollingStart-this.scrollContainer.scrollTop}:{y:0}}dragTriger(t){this.updateCursor(t);const e=this.cursor.clone();let s=null,n=null;const o=function(){s.dispose(),n.dispose()};return s=this.events.attachEvent(document,i.touchMouseMoveEventName,(function(i){this.updateCursor(i);return c(e,"-",this.cursor).scalarLength>3&&(o(),this.clean=!1,this.dragStart(t)),i.preventDefault(),!1})),n=this.events.attachEvent(document,i.touchMouseUpEventName,o),t.preventDefault(),!1}dragStart(t){this.itemForDrag&&(this.updateCursor(t),this.eventTokenDragStart.dispose(),this.cloneForMove=function(t){const i=t.cloneNode(!0);return i.center=function(){return g(i).center},i.size=function(){return g(i).size},i.style.transition="none",i.style.width=t.offsetWidth+"px",i.style.height=t.offsetHeight+"px",i.style.visibility="hidden",i.classList.add("in-drag"),e(i),i}(this.itemForDrag),this.itemForDrag.parentNode.insertBefore(this.cloneForMove,this.itemForDrag),this.onDragStart&&this.onDragStart(this.itemForDrag),this.scrollingStart=this.scrollContainer.scrollTop,this.eventTokenDrag=this.events.attachEvent(document,i.touchMouseMoveEventName,(function(t){this.drag(t)})),this.eventTokenDragEnd=this.events.attachEvent(document,i.touchMouseUpEventName,(function(t){this.dragEnd(t)})))}drag(t){if(!this.itemForDrag||!this.cloneForMove)return;this.updateCursor(t),this.scroll(),this.startPoint||(this.currentPoint=this.cursor.clone(),this.cloneForMove.style.visibility="visible",this.startPoint=g(this.cloneForMove).location);const e=c(this.scrollContainer,"-",this.cloneForMove.size());e.width=0,this.currentPoint=this.cursor.limitByRectangle(e);const i=c(this.currentPoint,"-",this.startPoint,"-",this.scrollingCorrection);this.translateElement(this.cloneForMove,i,0),this.onDrag&&(t.centerOfDraggingObject=this.toRelativeCoord(this.cloneForMove.center()),this.onDrag(this.itemForDrag,t))}dragEnd(t){if(!this.itemForDrag||!this.cloneForMove||!this.startPoint)return;this.eventTokenDrag.dispose(),this.eventTokenDragEnd.dispose();const e=this.getDropTarget(this.toRelativeCoord(this.cloneForMove.center()));if(e&&this.itemForDrag!==e.item){this.onDrop&&this.onDrop(this.itemForDrag,e.item);const t=function(){this.cloneForMove&&(this.cloneForMove.style["box-shadow"]="none"),this.onDropAnimationEnd&&this.onDropAnimationEnd(this.itemForDrag,e.item)},i=c(this.toScreanCoord(e.relativeRect),"-",this.startPoint,"-",this.scrollingCorrection);return this.animateItem(this.cloneForMove,i,t),void 0}this.cloneForMove&&this.animateItem(this.cloneForMove,{x:0,y:0},(function(){this.onDragCancel(this.itemForDrag),this.reset()}))}scroll(){if(!this.isScrollActive)return;const t=this.scrollContainer.getBoundingClientRect();let e=this.cursor.y+this.cloneForMove.size().height+2-t.bottom;if(e>0)return this.scrollContainer.scrollTop=Math.min(this.scrollContainer.scrollTop+e,this.contentHeight-t.height),void 0;e=this.cursor.y-2-t.top,e<0&&(this.scrollContainer.scrollTop=Math.max(this.scrollContainer.scrollTop+e,0))}updateCursor(t){this.cursorPoint=new r(this.getClientEventPos(t,"clientX"),this.getClientEventPos(t,"clientY")-this.itemForDrag.size().height/2)}translateElement(t,e,i){const s=t.style.transform;if(0===e.x&&0===e.y&&(s.includes("translate(0px)")||s.includes("translate(0px,0px)")))return!1;t.style.transition="all "+i+"s";const n=["translate(",Math.round(e.x),"px, ",Math.round(e.y),"px)"].join("");return!s.includes(n)&&(t.style.transform=n,!0)}animateItem(t,e,i){let s=null;const n=function(){s.dispose(),i.call(this)};s=this.events.attachEvent(t,"transitionend",n);const o=this.translateElement(t,e,"0.2");return o||n.call(this),o}toRelativeCoord(t){return c(t,"-",this.getZeroPoint())}toScreanCoord(t){return c(t,"+",this.getZeroPoint())}getClientEventPos(t,e){return void 0!==t[e]?t[e]:void 0!==t.touches&&t.touches[0]&&t.touches[0][e]?t.touches[0][e]:void 0!==t.changedTouches&&t.changedTouches[0]&&t.changedTouches[0][e]?t.changedTouches[0][e]:0}}class o{constructor(t,e,i,s){this.inputSelector=e,this.focusElement=t,this.container=i,this.input=e?this.focusElement.querySelector(e):null,this.restrictClick=!1,this.isBlurMode=s,this.lock=!1,this.reset()}onKeydown(t){32!==t.keyCode&&13!==t.keyCode||this.restrictClick||t.target!==this.focusElement||t.currentTarget!==this.focusElement||(this.lock=!0,this.input.click(),this.focusElement.setAttribute("aria-selected",this.input.checked),this.lock=!1)}onClickInternal(t){this.onClick&&!this.lock&&this.onClick(this.focusElement)}onFocusInternal(){this.updateStyleMetadata(),this.onFocus&&this.onFocus(this.focusElement)}onBlurInternal(){this.onBlur&&this.onBlur(this.focusElement)}reset(){let t;this.events&&this.events.dispose(),this.events=new s(this),this.input&&(this.input.tabIndex=-1,this.events.attachEvent(this.input,"focus",(function(){this.input.blur()})),this.events.attachEvent(this.input,"click",(function(){this.onClickInternal()})),this.events.attachEvent(this.focusElement,"keydown",this.onKeydown)),this.resetStyleMetadata(),document.activeElement===this.focusElement&&(this.updateStyleMetadata(),this.isBlurMode&&this.focusElement.blur()),this.isBlurMode?t=function(){this.focusElement.blur()}:(t=this.onFocusInternal,this.events.attachEvent(this.focusElement,"blur",this.onBlurInternal)),this.events.attachEvent(this.focusElement,"focus",t),this.events.attachEvent(this.focusElement,"mousedown",(function(t){t.preventDefault()})),this.restrictClick=!1}stop(){this.restrictClick=!0}focus(){this.isBlurMode||this.focusElement.focus()}blur(){this.focusElement.blur()}dispose(){this.events&&this.events.dispose(),this.events=null,this.focusElement=null,this.input=null}resetStyleMetadata(){void 0!==this.focusElement.style&&this.focusElement.style&&(this.focusElement.style.removeProperty("--h"),this.focusElement.style.removeProperty("--t"),this.focusElement.style.removeProperty("--bt"))}updateStyleMetadata(){if(void 0!==this.focusElement.style&&this.focusElement.style&&this.focusElement.style.cssText)return;const t=g(this.focusElement),e=g(this.container),i=window.getComputedStyle(this.focusElement)["border-top-width"];this.focusElement.setAttribute("style",`--h:${t.height}px; --t:${t.y-e.y}px; --bt:${i};`)}}class r{constructor(t,e){this.x=t,this.y=e}clone(){return new r(this.x,this.y)}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}equal(t){return this.x===t.x&&this.y===t.y}limitByRectangle(t){const e=Math.min(Math.max(this.y,t.top),t.bottom),i=Math.min(Math.max(this.x,t.left),t.right);return new r(i,e)}isInRect(t){return t.left<=this.x&&this.x<=t.right&&t.top<=this.y&&this.y<=t.bottom}}class h{constructor(t,e,i,s){this.x=t,this.y=e,this.width=i,this.height=s}clone(){return new h(this.x,this.y,this.width,this.height)}get left(){return this.x}get top(){return this.y}get bottom(){return this.y+this.height}get right(){return this.x+this.width}get size(){return new h(0,0,this.width,this.height)}get location(){return new h(this.x,this.y,0,0)}get center(){return new h(this.x+this.width/2,this.y+this.height/2,0,0)}get scalarLength(){return Math.sqrt(this.x*this.x+this.y*this.y)}equal(t){return this.x===t.x&&this.y===t.y&&this.width===t.width&&this.height===t.height}limitByRectangle(t){const e=Math.min(Math.max(this.y,t.top),t.bottom),i=Math.min(Math.max(this.x,t.left),t.right);return new h(i,e,0,0)}}function c(){const t=Array.from(arguments),e=[],i=[];t.forEach((function(t){"-"===t||"+"===t?e.push(t):i.push(t)}));const s=[];for(;i.length>0;)s.push(i.pop());for(;e.length>0;)s.push(e.shift());for(;s.length>0;){const t=s.shift();e.push("+"===t?l(e.pop(),e.pop()):"-"===t?a(e.pop(),e.pop()):t)}return e.pop()}function l(t,e){const i=u(t),s=u(e);return new h(i.x+s.x,i.y+s.y,i.width+s.width,i.height+s.height)}function a(t,e){const i=u(t),s=u(e);return new h(i.x-s.x,i.y-s.y,i.width-s.width,i.height-s.height)}function u(t){if(t.getBoundingClientRect)return g(t);let e=0,i=0,s=0,n=0;return t.x&&(e=t.x),t.y&&(i=t.y),t.width&&(s=t.width),t.height&&(n=t.height),{x:e,y:i,width:s,height:n}}function g(t){const e=t.getBoundingClientRect();return e&&e.left&&e.top&&!e.x&&!e.y&&(e.x=Math.min(e.left,e.right),e.y=Math.min(e.top,e.bottom)),new h(e.x,e.y,e.width,e.height)}function d(t){const e=g(t),i=window.getComputedStyle(t),s=m(i.marginLeft),n=m(i.marginRight),o=m(i.marginTop),r=m(i.marginBottom);return new h(e.x-s,e.y-o,e.width+s+n,e.height+o+r)}function m(t){return Math.max(parseFloat(t),0)}const p={DragAndDropUnit:n,FocusUnit:o,RectBlz:h,PointBlz:r,getClientRect:g,getClientRectWithMargins:d,geometry:c};export default p;export{n as DragAndDropUnit,o as FocusUnit,r as PointBlz,h as RectBlz,c as geometry,g as getClientRect,d as getClientRectWithMargins};
