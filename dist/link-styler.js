!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.linkStyler=t():e.linkStyler=t()}(self,(()=>(()=>{"use strict";var e={};return(()=>{var t,n=e;Object.defineProperty(n,"__esModule",{value:!0}),n.linkStyler=n.convert=n.start=void 0,function(e){e[e.ONLOAD=0]="ONLOAD",e[e.CONVERT=1]="CONVERT"}(t||(t={}));let o,r={bg:!0,bgColor:"#a9a9a94f",textColor:"#000000d9",borderRadius:15,showIcon:!0};function l(e=r){o=e,a(t.ONLOAD)}function i(e,n=r){return o=n,a(t.CONVERT,e)}function a(e,n=""){if(e===t.ONLOAD)"undefined"!=typeof window&&window.addEventListener("load",(function(){s(document.querySelector("body"))}));else if(e===t.CONVERT)return d(n)}function s(e){if(console.log("node --\x3e ",e),e.nodeType===Node.TEXT_NODE&&""!==e.textContent.trim()){const t=e.parentNode;if("A"!==t.tagName){let n=t.innerHTML;t.innerHTML=n.replace(e.textContent,d(e.textContent))}}else if(e.nodeType===Node.ELEMENT_NODE&&"A"!==e.tagName){let t=e.childNodes.length,n=e;for(let e=0;e<t;e++)s(n.childNodes[e])}}function d(e){const t=e,n=/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;let r,l=t;for(;null!==(r=n.exec(t));){const e=r[0];try{let t=`<span style="\n                position: relative;\n                background: ${o.bgColor};\n                padding: 1.5px 3px;\n                border-radius: ${o.borderRadius}px;\n                align-items: center;\n            ">`;t+=o.showIcon?`<span style="\n                  position: absolute;\n                  top: 3px;\n                  color: ${o.textColor};\n              ">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">\n                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>\n                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>\n                </svg>\n              </span>`:"",t+=`<a href="${e}" style="\n                  margin-left: 19px;\n                  text-decoration: none;\n                  color: ${o.textColor};\n              ">${e}</a>\n            </span>`,l=l.replace(e,t)}catch(e){console.error(`Error fetching link title: ${e}`)}}return l}n.start=l,n.convert=i,n.linkStyler={start:l,convert:i}})(),e})()));