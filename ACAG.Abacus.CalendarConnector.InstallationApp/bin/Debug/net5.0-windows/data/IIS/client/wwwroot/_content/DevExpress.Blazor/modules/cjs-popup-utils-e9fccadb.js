DxBlazorInternal.define("cjs-popup-utils-e9fccadb.js",(function(t,e,o){t("./cjs-chunk-c5286524.js");var i=t("./cjs-dom-utils-9b1ac92c.js"),n=t("./cjs-chunk-ac940e94.js"),r="\\s*matrix\\(\\s*"+[0,0,0,0,0,0].map((function(){return"(\\-?\\d+\\.?\\d*)"})).join(",\\s*")+"\\)\\s*";function l(t){var e=0;if(null!=t&&""!==t)try{var o=t.indexOf("px");o>-1&&(e=parseFloat(t.substr(0,o)))}catch(t){}return Math.ceil(e)}function s(t){var e=new RegExp(r).exec(t.transform);return e?{left:parseInt(e[5]),top:parseInt(e[6])}:{left:0,top:0}}function a(t,e,o){t.transform="matrix(1, 0, 0, 1, "+e+", "+o+")"}function h(t,e,o){var i=t.getBoundingClientRect(),n={left:e(i.left),top:e(i.top),right:o(i.right),bottom:o(i.bottom)};return n.width=n.right-n.left,n.height=n.bottom-n.top,n}function c(t){return h(t,Math.floor,Math.ceil)}function f(t){return h(t,Math.ceil,Math.floor)}var d=function(t,e){this.key=t,this.info=e};d.prototype.checkMargin=function(){return!0},d.prototype.allowScroll=function(){return"height"===this.info.size},d.prototype.canApplyToElement=function(t){return i.getClassName(t).indexOf("dxbs-align-"+this.key)>-1},d.prototype.getRange=function(t){var e=this.getTargetBox(t)[this.info.to],o=e+this.info.sizeM*(t.elementBox[this.info.size]+(this.checkMargin()?t.margin:0));return{from:Math.min(e,o),to:Math.max(e,o),windowOverflow:0}},d.prototype.getTargetBox=function(t){return null},d.prototype.validate=function(t,e){var o=e[this.info.size];return t.windowOverflow=Math.abs(Math.min(0,t.from-o.from)+Math.min(0,o.to-t.to)),t.validTo=Math.min(t.to,o.to),t.validFrom=Math.max(t.from,o.from),0===t.windowOverflow},d.prototype.applyRange=function(t,e){e.appliedModifierKeys[this.info.size]=this.key;var o="width"===this.info.size?"left":"top",i=e.styles,r=t.from;this.allowScroll()&&t.windowOverflow>0&&(e.limitBox.scroll.width||(e.limitBox.scroll.width=!0,e.limitBox.width.to-=n.getVerticalScrollBarWidth()),e.isScrollable&&(i["max-height"]=e.height-t.windowOverflow+"px",e.width+=n.getVerticalScrollBarWidth(),e.elementBox.width+=n.getVerticalScrollBarWidth(),r=t.validFrom)),i.width=e.width+"px",this.checkMargin()&&(r+=Math.max(0,this.info.sizeM)*e.margin),e.elementBox[o]+=r,a(i,e.elementBox.left,e.elementBox.top)},d.prototype.dockElementToTarget=function(t){var e=this.getRange(t);this.dockElementToTargetInternal(e,t)||this.applyRange(e,t)},d.prototype.dockElementToTargetInternal=function(t,e){};var p=function(t){function e(e,o,i){t.call(this,e,o,i),this.oppositePointName=i||null}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getTargetBox=function(t){return t.targetBox.outer},e.prototype.getOppositePoint=function(){return this._oppositePoint||(this._oppositePoint=g.filter(function(t){return t.key===this.oppositePointName}.bind(this))[0])},e.prototype.dockElementToTargetInternal=function(t,e){if(this.validate(t,e.limitBox))this.applyRange(t,e);else{var o=this.getOppositePoint(),i=o.getRange(e);if(!(o.validate(i,e.limitBox)||i.windowOverflow<t.windowOverflow))return!1;o.applyRange(i,e)}return!0},e}(d),u=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.checkMargin=function(){return!1},e.prototype.getTargetBox=function(t){return t.targetBox.inner},e.prototype.dockElementToTargetInternal=function(t,e){return this.validate(t,e.limitBox),!1},e.prototype.validate=function(e,o){var i=Math.min(e.from,Math.max(0,e.to-o[this.info.size].to));return i>0&&(e.from-=i,e.to-=i),t.prototype.validate.call(this,e,o)},e}(d),g=[new p("above",{to:"top",from:"bottom",size:"height",sizeM:-1},"below"),new p("below",{to:"bottom",from:"top",size:"height",sizeM:1},"above"),new u("top-sides",{to:"top",from:"top",size:"height",sizeM:1}),new u("bottom-sides",{to:"bottom",from:"bottom",size:"height",sizeM:-1}),new p("outside-left",{to:"left",from:"right",size:"width",sizeM:-1},"outside-right"),new p("outside-right",{to:"right",from:"left",size:"width",sizeM:1},"outside-left"),new u("left-sides",{to:"left",from:"left",size:"width",sizeM:1}),new u("right-sides",{to:"right",from:"right",size:"width",sizeM:-1})];function m(t,e,o,n){return i.changeDom((function(){for(var r=function(t,e,o){var n,r,a,h,d=i.getCurrentStyleSheet(),p=c(t),u=f(e),m=t.ownerDocument.documentElement,w={isScrollable:i.elementHasCssClass(t,"dxbs-scrollable"),specifiedOffsetModifiers:g.filter((function(e){return e.canApplyToElement(t)})),margin:l(d.marginTop),width:o?Math.max(o.width,Math.ceil(t.offsetWidth)):Math.ceil(t.offsetWidth),height:Math.ceil(t.offsetHeight),appliedModifierKeys:{height:null,width:null}},y=s(d),M=t.classList.contains("visually-hidden")?u.left:p.left;w.elementBox={left:n=y.left-M,top:r=y.top-p.top,right:n+(a=p.width),bottom:r+(h=p.height),width:a,height:h},w.targetBox={outer:c(e),inner:f(e)},w.limitBox={scroll:{width:m.clientWidth<window.innerWidth,height:m.clientHeight<window.innerHeight},width:{from:0,to:m.clientWidth},height:{from:0,to:m.clientHeight}},w.styles={};var x=(t.getAttribute("data-popup-align")||o&&o.align).split(/\s+/);return w.offsetModifiers=g.filter((function(t){return x.some((function(e){return t.key===e}))})),w}(t,e,o),a=0;a<r.offsetModifiers.length;a++)r.offsetModifiers[a].dockElementToTarget(r);n(r),i.setStyles(t,r.styles)}))}o.getElementPaddingRight=function(t){return parseFloat(window.getComputedStyle(t,null).getPropertyValue("padding-right"))},o.getScrollbarWidth=function(){return window.innerWidth-document.body.getBoundingClientRect().width},o.hide=function(t){i.elementHasCssClass(t,"show")?(t.isDockedElementHidden&&delete t.isDockedElementHidden,i.clearStyles(t),i.toggleCssClass(t,"show",!1)):t.isDockedElementHidden&&delete t.isDockedElementHidden},o.parseTranslateInfo=s,o.show=function(t,e,o){null!==e&&(m(t,e,{align:o},(function(){})),i.toggleCssClass(t,"show",!0),i.clearStyles(t))},o.translatePosition=a}),["cjs-chunk-c5286524.js","cjs-dom-utils-9b1ac92c.js","cjs-chunk-ac940e94.js"]);