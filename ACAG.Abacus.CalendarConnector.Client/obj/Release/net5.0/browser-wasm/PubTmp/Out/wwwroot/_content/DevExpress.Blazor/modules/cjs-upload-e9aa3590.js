DxBlazorInternal.define("cjs-upload-e9aa3590.js",(function(e,t,n){e("./cjs-chunk-c5286524.js");var o=e("./cjs-dom-utils-9b1ac92c.js"),i=e("./cjs-chunk-ad620f3e.js"),r=e("./cjs-chunk-e15409c9.js"),a=0,s=1,u=2,l=3,c=4,f=5,d=6,h=0;function p(e,t,n,a,s){var u;e=o.ensureElement(e),n=o.ensureElement(n),a=t.buttonCssSelector?document.querySelector(t.buttonCssSelector):o.ensureElement(a),t.dropZoneCssSelector&&(u=document.querySelector(t.dropZoneCssSelector)),n&&r.disposeEvents(n),a&&r.disposeEvents(a),u&&r.disposeEvents(u);var l,c=null,f=null,d=null,h=null;return e.files||(e.files=[]),n&&(t.multiple&&n.setAttribute("multiple",""),t.acceptedFileTypes&&n.setAttribute("accept",t.acceptedFileTypes.join(",")),c=function(o){m(n.files,s,t).then((function(t){b(t,e,s),n.value=""}))},i.attachEventToElement(n,"change",c),a&&i.attachEventToElement(a,"click",f=function(){n.click()}),u&&(d=function(n){n.preventDefault(),m(function(e,t){var n=[];if(e.items)for(var o=0,i=e.items[o];i;o++,i=e.items[o])"file"===i.kind&&n.push(i.getAsFile());else for(var r=0,a=e.files[r];a;r++,a=e.files[r])n.push(a);return function(e,t){if(!e.length||!t)return e;for(var n=[],o=function(e){return e.map((function(e){return e.trim()}))}(t),i=0,r=e.length;i<r;i++)S(e[i],o)&&n.push(e[i]);return n}(t.multiple?n:[n[0]],t.acceptedFileTypes)}(n.dataTransfer,t),s,t).then((function(t){b(t,e,s)})),l(n)},h=function(e){t.dragOverClassName&&o.addClassNameToElement(e.srcElement,t.dragOverClassName),e.preventDefault()},l=function(e){t.dragOverClassName&&o.removeClassNameFromElement(e.srcElement,t.dragOverClassName)},i.attachEventToElement(u,"drop",d),i.attachEventToElement(u,"dragover",h),i.attachEventToElement(u,"dragleave",l))),r.registerDisposableEvents(n,(function(){c&&i.detachEventFromElement(n,"change",c)})),a&&r.registerDisposableEvents(a,(function(){i.detachEventFromElement(a,"click",f)})),u&&r.registerDisposableEvents(u,(function(){i.detachEventFromElement(u,"drop",d),i.detachEventFromElement(u,"dragover",h),i.detachEventFromElement(u,"dragover",l)})),Promise.resolve("ok")}function m(e,t,n){return new Promise((function(o,i){t.invokeMethodAsync("CreateFileGuids",e.length).then((function(t){for(var i=[],r=0,a=e[r];a;r++,a=e[r]){var s=v(a,t[r],n);i.push(s)}o(i)}))}))}function v(e,t,n){var o={value:e,fileInfo:{name:e.name,size:e.size,type:e.type,lastModified:1e4*e.lastModified+621355968e9,guid:t},status:n.uploadMode===h?s:a,loadedBytes:0,isFileExtensionValid:E(e,n),isMinSizeValid:F(e,n),isMaxSizeValid:g(e,n),isValid:function(){return this.isFileExtensionValid&&this.isMaxSizeValid&&this.isMinSizeValid},isUploadComplete:function(){return this.loadedBytes>=this.fileInfo.size},loadStart:function(){this.status!==u&&(this.status=u,this.onLoadStart&&this.onLoadStart.call(this))},progress:function(){this.onProgress&&this.onProgress.call(this)},pause:function(){this.status=l,this.onPause&&this.onPause.call(this)},loadEnd:function(){this.isUploadComplete()&&(this.status=c,this.onLoadEnd&&this.onLoadEnd.call(this))},abort:function(){this.status!==f&&(this.status=f,this.request&&this.request.abort(),this.onAbort&&this.onAbort.call(this))},error:function(e){this.status=d,this.onError&&this.onError.call(this,e)}};return o.isValid()||(o.status=d),o}function E(e,t){var n=t.allowedFileExtensions,o=e.name.substring(e.name.lastIndexOf(".")).toLowerCase();if(0===n.length)return!0;for(var i=0;i<n.length;i++)if(o===n[i].toLowerCase())return!0;return!1}function g(e,t){var n=t.maxFileSize;return!(n>0)||e.size<=n}function F(e,t){var n=t.minFileSize;return!(n>0)||e.size>=n}function S(e,t){return t.some((function(t){if("."===t[0]){if(t=t.replace(".","\\."),e.name.match(new RegExp(t+"$","i")))return!0}else if(t=t.replace("*",""),e.type.match(new RegExp(t,"i")))return!0}))}function b(e,t,n){0!==e.length&&(t.files=t.files.concat(e),C(t.files,n).then((function(){e.forEach((function(e){return y(e,t,n)}))})))}function y(e,t,n){e&&e.isValid()&&e.status!==a&&e.status!==d&&function(e,t){return M("FileUploadStart",e,t)}(e,n).then((function(t){return!function(e,t){e.onLoadStart=function(){!function(e,t){M("FileUploadStarted",e,t)}(e,t)},e.onProgress=function(){!function(e,t){M("FileProgress",e,t)}(e,t)},e.onAbort=function(){!function(e,t){M("FileUploadAborted",e,t)}(e,t)},e.onPause=function(){!function(e,t){M("FileUploadPaused",e,t)}(e,t)},e.onError=function(n){!function(e,t,n,o,i){i.invokeMethodAsync("FileUploadError",x(e),t,n,o)}(e,n.status,n.statusText,n.responseText,t)},e.onLoadEnd=function(){!function(e,t){M("FileUploaded",e,t)}(e,t)}}(e,n),t?t.uploadUrl?(!function e(t,n,o,i){(n.chunkSize>0?I:k).upload(t,n,(function(t){t.loadEnd(),t.isUploadComplete()||t.status!==u||e(t,n)}))}(e,t),void 0):(e.error(),void 0):(e.abort(),void 0)}))}var I={upload:function(e,t,n){if(e){e.totalChunkCount||(e.chunkIndex=0,e.totalChunkCount=function(e,t){var n=Math.trunc(e/t.chunkSize);return e%t.chunkSize>0&&n++,n}(e.fileInfo.size,t));var o=t.chunkSize*e.chunkIndex,i=e.value.slice(o,o+t.chunkSize),r=function(e,t,n,o){var i=new window.FormData;for(var r in i.append(e,t),i.append("chunkMetadata",JSON.stringify({FileName:n.fileInfo.name,FileSize:n.fileInfo.size,FileType:n.fileInfo.type,LastModified:n.fileInfo.lastModified,FileGuid:n.fileInfo.guid,Index:n.chunkIndex,TotalCount:n.totalChunkCount})),o)Object.prototype.hasOwnProperty.call(o,r)&&i.append(r,o[r]);return i}(t.name,i,e,t.requestData);e.request=z.sendRequest(r,{url:t.uploadUrl,method:"POST",headers:t.requestHeaders,onAbort:function(t){e.abort()},onProgress:function(e){},onError:function(t){e.error(t.target)},onLoadStart:function(t){e.loadStart()},onLoad:function(t){200===t.target.status?(e.chunkIndex++,e.loadedBytes+=i.size,e.progress(),n(e)):e.error(t.target)}})}}},k={upload:function(e,t,n){if(e){var o=function(e,t,n){var o=new window.FormData;for(var i in o.append(e,t.value),n)Object.prototype.hasOwnProperty.call(n,i)&&o.append(i,n[i]);return o}(t.name,e,t.requestData);e.request=z.sendRequest(o,{url:t.uploadUrl,method:"POST",headers:t.requestHeaders,onProgress:function(t){e.loadedBytes=t.loaded>e.fileInfo.size?e.fileInfo.size:t.loaded,e.progress()},onAbort:function(t){e.abort()},onError:function(t){e.error(t.target)},onLoadStart:function(t){e.loadStart()},onLoad:function(t){200===t.target.status?n(e,t):e.error(t.target)}})}}},z={sendRequest:function(e,t){var n=new window.XMLHttpRequest;t.crossDomain=function(e){var t=!1,n=document.createElement("a"),o=document.createElement("a");n.href=window.location.href;try{o.href=e,o.href=o.href,t=n.protocol+"//"+n.host!=o.protocol+"//"+o.host}catch(e){t=!0}return t}(t.url);var o=function(e){var t=e.headers||{};return t.Accept=t.Accept||"*/*",e.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest"),t}(t);for(var i in n.open(t.method,t.url,!0),t.onLoadStart&&(n.upload.onloadstart=t.onLoadStart),t.onLoad&&(n.onload=t.onLoad),t.onLoadEnd&&(n.upload.onloadend=t.onLoadEnd),t.onProgress&&(n.upload.onprogress=t.onProgress),t.onError&&(n.upload.onerror=t.onError),t.onAbort&&(n.upload.onabort=t.onAbort),o)Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&n.setRequestHeader(i,o[i]);return n.send(e),{abort:function(){n.abort()}}}};function C(e,t){return t.invokeMethodAsync("SelectedFilesChanged",e.map((function(e){return x(e)})))}function M(e,t,n){return n.invokeMethodAsync(e,x(t))}function x(e){return{Name:e.fileInfo.name,Size:e.fileInfo.size,Type:e.fileInfo.type,LastModified:e.fileInfo.lastModified,Guid:e.fileInfo.guid,LoadedBytes:e.loadedBytes,Status:e.status,IsFileExtensionValid:e.isFileExtensionValid,IsMinSizeValid:e.isMinSizeValid,IsMaxSizeValid:e.isMaxSizeValid}}function L(e,t,n,o){e.files.forEach((function(e){t.forEach((function(t){e.fileInfo.guid===t&&(e.status=s,y(e,0,o))}))}))}function j(e,t,n,o){e.files.forEach((function(e){t.forEach((function(t){e.fileInfo.guid===t&&e.pause()}))}))}function w(e,t,n,o){e.files.forEach((function(e){t.forEach((function(t){e.fileInfo.guid===t&&e.abort()}))}))}function P(e,t,n,o){var i=e.files.filter((function(e){return t.indexOf(e.fileInfo.guid)>-1}));0!==!i.length&&(e.files=A(e.files,t),m(i.map((function(e){return e.value})),o,n).then((function(n){e.files=e.files.concat(n),function(e,t,n){n.invokeMethodAsync("FileReloaded",e,t)}(t,n.map((function(e){return e.fileInfo.guid})),o),n.forEach((function(e){e.status=s,y(e,0,o)}))})))}function q(e,t,n,o){e.files=A(e.files,t),C(e.files,o)}function A(e,t){return e.filter((function(e){return-1===t.indexOf(e.fileInfo.guid)}))}function U(e){if(e=o.ensureElement(e))return r.disposeEvents(e),Promise.resolve("ok")}var T={init:p,dispose:U,startFileUpload:L,pauseFileUpload:j,abortFileUpload:w,removeFiles:q,reloadFile:P};n.abortFileUpload=w,n.default=T,n.dispose=U,n.init=p,n.pauseFileUpload=j,n.reloadFile=P,n.removeFiles=q,n.startFileUpload=L}),["cjs-chunk-c5286524.js","cjs-dom-utils-9b1ac92c.js","cjs-chunk-ad620f3e.js","cjs-chunk-e15409c9.js"]);