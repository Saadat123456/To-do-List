(()=>{"use strict";var e={571:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(81),r=n.n(i),s=n(645),o=n.n(s),a=n(667),c=n.n(a),l=new URL(n(477),n.b),d=o()(r()),p=c()(l);d.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody {\n  display: -ms-grid;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f6f6f6;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  box-shadow: 3px 3px 3px #e6e6e6;\n  width: 50vw;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n  border-bottom: 1px solid #f0f0f0;\n}\n\nheader > img {\n  width: 24px;\n  height: 24px;\n}\n\n.main > input {\n  padding: 16px;\n  border: none;\n  outline: none;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.main > a {\n  padding: 16px;\n  text-decoration: none;\n  color: inherit;\n  text-align: center;\n}\n\n.main > .inactive {\n  background-color: #f6f6f6;\n  color: #888;\n}\n\n.main > ul {\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  padding: 0;\n}\n\n.main > ul > li {\n  padding: 16px;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  align-items: center;\n  -webkit-transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  -moz-transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  -o-transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  border-left: 4px solid #1d2658;\n}\n\n.is-selected > span > input[type='text'] {\n  flex: 1;\n  outline: none;\n  border: none;\n  padding: 4px 8px;\n}\n\n.main > ul > li > input {\n  padding: 0 8px;\n}\n\n.is-selected > img {\n  content: url("+p+');\n  cursor: pointer !important;\n}\n\n.completed > img {\n  filter: invert(1);\n}\n\n.main > ul > li > img {\n  height: 24px;\n  cursor: all-scroll;\n}\n\n.completed > span {\n  color: #fff;\n}\n\n.main > ul > li > span {\n  flex: 1;\n  margin: 0 8px;\n  display: flex;\n  justify-content: stretch;\n}\n\n.main > ul > li > span > * {\n  width: 100%;\n}\n\n.completed {\n  background-color: #3f51b5;\n  margin-left: 4px;\n  border-bottom: 0;\n}\n\ninput[type="checkbox"] {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: red;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid #1d2658;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: -ms-grid;\n  display: grid;\n  place-content: center;\n}\n\ninput[type="checkbox"]::before {\n  content: "";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em #1d2658;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type="checkbox"]:checked::before {\n  transform: scale(1);\n}\n',""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},o=[],a=0;a<e.length;a++){var c=e[a],l=i.base?c[0]+i.base:c[0],d=s[l]||0,p="".concat(l," ").concat(d);s[l]=d+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,i);i.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=n(s[o]);t[a].references--}for(var c=i(e,r),l=0;l<s.length;l++){var d=n(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},477:(e,t,n)=>{e.exports=n.p+"images/delete.png"},116:(e,t,n)=>{e.exports=n.p+"images/three-dots.png"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{class e{constructor(e,t,n){this.index=e,this.completed=t,this.description=n}}class t{static list=[];static init(){this.loadDataFromStorage()}static addTask(t,n){const i=new e(this.list.length,t,n);return this.list.push(i),this.addToStorage(),i}static addToStorage(){localStorage.setItem("taskList",JSON.stringify(this.list))}static loadDataFromStorage(){const t=JSON.parse(localStorage.getItem("taskList"));t&&""!==t&&(this.list=t.map((t=>new e(t.index,t.completed,t.description))))}static deleteTask(e,t){let n=0;this.list=this.list.filter((i=>{if(i.index===e)return t.querySelector(`#item${i.index}`).remove(),!1;const r=t.querySelector(`#item${i.index}`);return i.index=n,r.id=`item${n}`,n+=1,!0})),this.addToStorage()}static clearCompletedTask(e){let t=0;this.list=this.list.filter((n=>{if(!0===n.completed)return e.querySelector(`#item${n.index}`).remove(),!1;const i=e.querySelector(`#item${n.index}`);return n.index=t,i.id=`item${t}`,t+=1,!0})),this.addToStorage()}}var i=n(116);class r{static listElem;static init(){this.listElem=document.querySelector("#list")}static addTask(e){const t=document.createElement("li");t.id=`item${e.index}`,t.classList.add("task"),e.completed&&t.classList.add("completed"),t.innerHTML+=`<input type="checkbox" name='completed' value='${e.completed?"completed":"not-completed"}' ${e.completed?"checked":""}>\n    <span>${e.description}</span>\n    <img src=${i} alt="Three Dots Button">`,this.addClickListener(t),this.listElem.append(t)}static addClickListener(e){this.checkboxClickListener(e),this.editTextListener(e),this.imageClickListener(e)}static checkboxClickListener(e){e.querySelector('input[type="checkbox"]').addEventListener("click",(()=>{var n,i;n=e.querySelector('input[type="checkbox"]').checked,i=e.id,n?document.querySelector(`#${i}`).classList.add("completed"):document.querySelector(`#${i}`).classList.remove("completed"),t.list[parseInt(i.substring(4),10)].completed=n,t.addToStorage()}))}static editTextListener(e){e.querySelector("span").addEventListener("click",(()=>{if(!e.querySelector("span").querySelector("input")){this.listElem.querySelectorAll(".is-selected").forEach((e=>{e.classList.remove("is-selected")})),e.classList.add("is-selected"),this.listElem.querySelectorAll('input[type="text"]').forEach((e=>{e.parentElement.innerHTML=e.value}));const t=`<input type='text' value='${e.querySelector("span").textContent}' class="focus-visible" data-focus-visible-added/>`;e.querySelector("span").innerHTML=t,e.querySelector("span > input").focus(),this.updateDescriptionListener(e.querySelector("span > input"),e)}}))}static updateDescriptionListener(e,t){const n=parseInt(t.id.substring(4),10);e.addEventListener("keypress",(i=>{13===i.keyCode&&this.updateDesc(e,t,n)}))}static updateDesc(e,n,i){""!==e.value?(e.parentElement.innerHTML=e.value,t.list[i].description=e.value,t.addToStorage()):e.parentElement.innerHTML=t.list[i].description,n.classList.remove("is-selected")}static imageClickListener(e){e.querySelector("img").addEventListener("click",(()=>{e.classList.contains("is-selected")&&t.deleteTask(parseInt(e.id.substring(4),10),this.listElem)}))}}var s=n(379),o=n.n(s),a=n(795),c=n.n(a),l=n(569),d=n.n(l),p=n(565),u=n.n(p),m=n(216),f=n.n(m),h=n(589),g=n.n(h),y=n(571),v={};v.styleTagTransform=g(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=f(),o()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals,window.addEventListener("load",(()=>{(class{static addItemInput;static clearCompletedButton;static init(){this.addItemInput=document.querySelector(".main > input"),this.addItemInput.addEventListener("keypress",(e=>{13===e.keyCode&&""!==this.addItemInput.value&&(r.addTask(t.addTask(!1,this.addItemInput.value)),this.addItemInput.value="")})),this.clearCompletedButton=document.querySelector('a[href="#complete"]'),this.clearCompletedButton.addEventListener("click",(()=>{t.clearCompletedTask(r.listElem)}))}}).init(),r.init(),t.init(),t.list.forEach((e=>{r.addTask(e)}))}))})()})();