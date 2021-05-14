DxBlazorInternal.define("cjs-dx-style-helper-5f20fa65.js",(function(e,t,n){var o=e("./cjs-chunk-c5286524.js"),r=e("./cjs-dom-utils-9b1ac92c.js"),i=function(e,t){this._name=e,this._value=t},l={name:{configurable:!0},value:{configurable:!0}};l.name.get=function(){return this._name},l.value.get=function(){return this._value},Object.defineProperties(i.prototype,l);var s=function(e,t){this._selectors=e,this._rules=t},u={selectors:{configurable:!0},rules:{configurable:!0}};u.selectors.get=function(){return this._selectors},u.rules.get=function(){return this._rules},s.prototype.toString=function(e){for(var t=this.rules.join("\n"),n=0;n<e.length;n++){var o=e[n];t=t.replace(new RegExp(""+o.name,"g"),o.value)}return this.selectors.join(",\n")+" { "+t+" }"},Object.defineProperties(s.prototype,u);var c=function(){this._rules=[],this._dummyContainer=null,this._ieCssStyles=[new s(["th:focus .dxColumnResizeAnchor"],["box-shadow: 0 0 0 1px --dx-accent-shadow-color;"]),new s(["th:focus .dxColumnResizeAnchor::after"],["border-left: 1px solid --dx-accent-color;","border-right: 1px solid --dx-accent-color;"]),new s([".table th:focus:before"],["box-shadow: 0 0 0 2px --dx-accent-color;"])],this.initialize()},a={styleElement:{configurable:!0}};function m(){window.dxDefaultStyle||(window.dxDefaultStyle=new c)}a.styleElement.get=function(){return null==this._styleElement&&(this._styleElement=this.createStyleElement()),this._styleElement},c.prototype.createStyleElement=function(){var e=document.createElement("STYLE");return document.head.appendChild(e),e},c.prototype.initialize=function(){this.initializeDummyElements(),this.initializeRules(),this.updateStyleElement(),this.removeDummyElements()},c.prototype.initializeDummyElements=function(){var e=this.createDummyContainer(),t=this.createDummyLink();e.appendChild(t),document.documentElement.appendChild(e),this._dummyContainer=e},c.prototype.createDummyContainer=function(){var e=document.createElement("DIV");return e.style.top=r.toPx(-1e4),e.style.left=r.toPx(-1e4),e.className="dxAIFE",e.setAttribute("aria-hidden",!0),e},c.prototype.createDummyLink=function(){var e=document.createElement("A");return e.innerHTML="test",e.href="javascript:;",e},c.prototype.removeDummyElements=function(){document.documentElement.removeChild(this._dummyContainer),this._dummyContainer=null},c.prototype.initializeRules=function(){var e=this.getAccentColor();this._rules.push(new i("--dx-accent-color",e)),this._rules.push(new i("--dx-accent-shadow-color",this.getAccentShadowColor(e)))},c.prototype.getAccentColor=function(){var e=this._dummyContainer.querySelector("a");return window.getComputedStyle(e).color},c.prototype.getAccentShadowColor=function(e){var t=e.replace("rgb","").replace("(","").replace(")","").split(",").map((function(e){return e.trim()}));return t.push(".25"),"rgba("+t.join(",")+")"},c.prototype.updateStyleElement=function(){o.Browser.IE?this.updateIEStyleElement():this.updateStyleElementCore()},c.prototype.updateIEStyleElement=function(){var e=this,t=this._ieCssStyles.map((function(t){return t.toString(e._rules)})).join("\n");this.styleElement.innerHTML=t},c.prototype.updateStyleElementCore=function(){var e=this._rules.map((function(e){return e.name+": "+e.value})).join(";\n");this.styleElement.innerHTML=":root{ "+e+" }"},c.prototype.update=function(){this._rules=[],this.initialize()},Object.defineProperties(c.prototype,a),n.default={ensureDefaultStyle:m},n.ensureDefaultStyle=m}),["cjs-chunk-c5286524.js","cjs-dom-utils-9b1ac92c.js"]);
