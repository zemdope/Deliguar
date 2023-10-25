(self.webpackChunkdeliguar=self.webpackChunkdeliguar||[]).push([[134],{4129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r,a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e,t){return e(t={exports:{}},t.exports),t.exports}var s=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));u(s);s.BLOCKS;var p=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))}));u(p);p.INLINES;var f=c((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));u(f);var E=c((function(e,t){var n,r=l&&l.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},i=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var o=i(f);t.TOP_LEVEL_BLOCKS=[s.BLOCKS.PARAGRAPH,s.BLOCKS.HEADING_1,s.BLOCKS.HEADING_2,s.BLOCKS.HEADING_3,s.BLOCKS.HEADING_4,s.BLOCKS.HEADING_5,s.BLOCKS.HEADING_6,s.BLOCKS.OL_LIST,s.BLOCKS.UL_LIST,s.BLOCKS.HR,s.BLOCKS.QUOTE,s.BLOCKS.EMBEDDED_ENTRY,s.BLOCKS.EMBEDDED_ASSET,s.BLOCKS.EMBEDDED_RESOURCE,s.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[s.BLOCKS.PARAGRAPH,s.BLOCKS.HEADING_1,s.BLOCKS.HEADING_2,s.BLOCKS.HEADING_3,s.BLOCKS.HEADING_4,s.BLOCKS.HEADING_5,s.BLOCKS.HEADING_6,s.BLOCKS.OL_LIST,s.BLOCKS.UL_LIST,s.BLOCKS.HR,s.BLOCKS.QUOTE,s.BLOCKS.EMBEDDED_ENTRY,s.BLOCKS.EMBEDDED_ASSET,s.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[s.BLOCKS.TABLE,s.BLOCKS.TABLE_ROW,s.BLOCKS.TABLE_CELL,s.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[s.BLOCKS.HR,s.BLOCKS.EMBEDDED_ENTRY,s.BLOCKS.EMBEDDED_ASSET,s.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[s.BLOCKS.OL_LIST]=[s.BLOCKS.LIST_ITEM],n[s.BLOCKS.UL_LIST]=[s.BLOCKS.LIST_ITEM],n[s.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[s.BLOCKS.QUOTE]=[s.BLOCKS.PARAGRAPH],n[s.BLOCKS.TABLE]=[s.BLOCKS.TABLE_ROW],n[s.BLOCKS.TABLE_ROW]=[s.BLOCKS.TABLE_CELL,s.BLOCKS.TABLE_HEADER_CELL],n[s.BLOCKS.TABLE_CELL]=[s.BLOCKS.PARAGRAPH],n[s.BLOCKS.TABLE_HEADER_CELL]=[s.BLOCKS.PARAGRAPH],n),t.HEADINGS=[s.BLOCKS.HEADING_1,s.BLOCKS.HEADING_2,s.BLOCKS.HEADING_3,s.BLOCKS.HEADING_4,s.BLOCKS.HEADING_5,s.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([s.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[s.BLOCKS.DOCUMENT,s.BLOCKS.PARAGRAPH,s.BLOCKS.HEADING_1,s.BLOCKS.HEADING_2,s.BLOCKS.HEADING_3,s.BLOCKS.HEADING_4,s.BLOCKS.HEADING_5,s.BLOCKS.HEADING_6,s.BLOCKS.OL_LIST,s.BLOCKS.UL_LIST,s.BLOCKS.LIST_ITEM,s.BLOCKS.HR,s.BLOCKS.QUOTE,s.BLOCKS.EMBEDDED_ENTRY,s.BLOCKS.EMBEDDED_ASSET,p.INLINES.HYPERLINK,p.INLINES.ENTRY_HYPERLINK,p.INLINES.ASSET_HYPERLINK,p.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[o.default.BOLD,o.default.CODE,o.default.ITALIC,o.default.UNDERLINE]}));u(E);E.V1_MARKS,E.V1_NODE_TYPES,E.TEXT_CONTAINERS,E.HEADINGS,E.CONTAINERS,E.VOID_BLOCKS,E.TABLE_BLOCKS,E.LIST_ITEM_BLOCKS,E.TOP_LEVEL_BLOCKS;var d=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));u(d);var m=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));u(m);var y=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:s.BLOCKS.DOCUMENT,data:{},content:[{nodeType:s.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));u(y);var L=c((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(p.INLINES,e.nodeType)},t.isBlock=function(e){return n(s.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));u(L);L.isText,L.isBlock,L.isInline;var S=c((function(e,t){var n=l&&l.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=l&&l.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=l&&l.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},o=l&&l.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return r(t,e),t},a=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return s.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return p.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return a(f).default}}),i(E,t),i(d,t),i(m,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return a(y).default}});var u=o(L);t.helpers=u}));u(S);var g,I,O=S.helpers,N=(S.EMPTY_DOCUMENT,S.MARKS),h=S.INLINES,D=S.BLOCKS;function A(e,t){return e.map((function(e,n){return r=T(e,t),o=n,i.isValidElement(r)&&null===r.key?i.cloneElement(r,{key:o}):r;var r,o}))}function T(e,t){var n=t.renderNode,r=t.renderMark,i=t.renderText,a=t.preserveWhitespace;if(O.isText(e)){var l=i?i(e.value):e.value;if(a){var u=(l=l.replace(/ {2,}/g,(function(e){return"&nbsp;".repeat(e.length)}))).split("\n"),c=[];u.forEach((function(e,t){c.push(e),t!==u.length-1&&c.push(o.createElement("br",null))})),l=c}return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),l)}var s=A(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,s):o.createElement(o.Fragment,null,s)}var M=((g={})[D.DOCUMENT]=function(e,t){return t},g[D.PARAGRAPH]=function(e,t){return o.createElement("p",null,t)},g[D.HEADING_1]=function(e,t){return o.createElement("h1",null,t)},g[D.HEADING_2]=function(e,t){return o.createElement("h2",null,t)},g[D.HEADING_3]=function(e,t){return o.createElement("h3",null,t)},g[D.HEADING_4]=function(e,t){return o.createElement("h4",null,t)},g[D.HEADING_5]=function(e,t){return o.createElement("h5",null,t)},g[D.HEADING_6]=function(e,t){return o.createElement("h6",null,t)},g[D.EMBEDDED_ENTRY]=function(e,t){return o.createElement("div",null,t)},g[D.EMBEDDED_RESOURCE]=function(e,t){return o.createElement("div",null,t)},g[D.UL_LIST]=function(e,t){return o.createElement("ul",null,t)},g[D.OL_LIST]=function(e,t){return o.createElement("ol",null,t)},g[D.LIST_ITEM]=function(e,t){return o.createElement("li",null,t)},g[D.QUOTE]=function(e,t){return o.createElement("blockquote",null,t)},g[D.HR]=function(){return o.createElement("hr",null)},g[D.TABLE]=function(e,t){return o.createElement("table",null,o.createElement("tbody",null,t))},g[D.TABLE_ROW]=function(e,t){return o.createElement("tr",null,t)},g[D.TABLE_HEADER_CELL]=function(e,t){return o.createElement("th",null,t)},g[D.TABLE_CELL]=function(e,t){return o.createElement("td",null,t)},g[h.ASSET_HYPERLINK]=function(e){return b(h.ASSET_HYPERLINK,e)},g[h.ENTRY_HYPERLINK]=function(e){return b(h.ENTRY_HYPERLINK,e)},g[h.EMBEDDED_ENTRY]=function(e){return b(h.EMBEDDED_ENTRY,e)},g[h.HYPERLINK]=function(e,t){return o.createElement("a",{href:e.data.uri},t)},g),_=((I={})[N.BOLD]=function(e){return o.createElement("b",null,e)},I[N.ITALIC]=function(e){return o.createElement("i",null,e)},I[N.UNDERLINE]=function(e){return o.createElement("u",null,e)},I[N.CODE]=function(e){return o.createElement("code",null,e)},I[N.SUPERSCRIPT]=function(e){return o.createElement("sup",null,e)},I[N.SUBSCRIPT]=function(e){return o.createElement("sub",null,e)},I);function b(e,t){return o.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?T(e,{renderNode:a(a({},M),t.renderNode),renderMark:a(a({},_),t.renderMark),renderText:t.renderText,preserveWhitespace:t.preserveWhitespace}):null}},6091:function(e,t,n){"use strict";e.exports=n(4843)},4843:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;t.ProgressBar=function(e){var t=e.color1,n=e.color2,r=e.position,a=e.height,l=i.useRef(null),u=function(){var e=document.documentElement;l.current.style.width=Math.floor(e.scrollTop/(e.scrollHeight-e.clientHeight)*100)+"%"};i.useEffect((function(){return window.addEventListener("scroll",u),function(){return window.removeEventListener("scroll",u)}}),[]),t="string"==typeof t&&""!==t?t:"#808080",n="string"==typeof n&&""!==n?n:"#ffd700",a="string"==typeof a&&""!==a?a:"4px";var c={container:{position:r=["fixed","absolute","relative","sticky","static"].includes(r)?r:"fixed",height:a,backgroundColor:t,zIndex:"999",width:"100%",top:"0",left:"0"},progressBar:{backgroundColor:n,transition:"all 0.5s ease-out",width:"0%",height:"100%"}};return o.createElement("div",{style:c.container},o.createElement("div",{style:c.progressBar,ref:l}))}},3903:function(e,t,n){"use strict";n.r(t);var r=n(3346),i=n.n(r),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{!r&&l.return&&l.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u={},c=function(e,t){var n=t.entryId,r=t.linkType,i=t.spaceId;return i?e.get(i+"!"+r+"!"+n):e.get(r+"!"+n)},s=function e(t,n,r,i){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":o(t))){for(var a in t)t.hasOwnProperty(a)&&(t[a]=e(t[a],n,r,i));i&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==u}));for(var t in e)e[t]===u&&delete e[t];return e}(t))}return t},p=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.type,i=n.linkType;if("ResourceLink"===r){var o=t.sys.urn,l=/.*:spaces\/([A-Za-z0-9]*)\/entries\/([A-Za-z0-9]*)/;if(!l.test(o))return u;var s=o.match(l),p=a(s,3),f=(p[0],p[1]),E=p[2],d=i.split(":")[1];return c(e,{linkType:d,entryId:E,spaceId:f})||u}var m=t.sys.id;return c(e,{linkType:i,entryId:m})||u}(e,t);return r===u?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=i()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(l(t),l(e.includes[n]))}),[]),o=[].concat(l(n.items),l(r)).filter((function(e){return Boolean(e.sys)})),a=new Map(o.reduce((function(e,t){var n,r=(n=t.sys,n.space?[n.type+"!"+n.id,n.space.sys.id+"!"+n.type+"!"+n.id]:[n.type+"!"+n.id]).map((function(e){return[e,t]}));return e.push.apply(e,l(r)),e}),[]));return o.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,s(n,(function(e){return(t=e)&&t.sys&&"Link"===t.sys.type||function(e){return e&&e.sys&&"ResourceLink"===e.sys.type}(e);var t}),(function(e){return p(a,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},3346:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,u=Object.prototype,c=u.hasOwnProperty,s=u.propertyIsEnumerable,p="function"==typeof a,f="function"==typeof WeakMap,E=function(){if(f)return function(){return new WeakMap};var e=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,t){this._keys.push(e),this._values.push(t)},e}();return function(){return new e}}(),d=function(n,r){var i=n.__proto__||l(n);if(!i)return t(null);var o=i.constructor;if(o===r.Object)return i===r.Object.prototype?{}:t(i);if(~e.call(o).indexOf("[native code]"))try{return new o}catch(u){}return t(i)},m=function(e,t,n,r){var i=d(e,t);for(var o in r.set(e,i),e)c.call(e,o)&&(i[o]=n(e[o],r));if(p)for(var l=a(e),u=0,f=l.length,E=void 0;u<f;++u)E=l[u],s.call(e,E)&&(i[E]=n(e[E],r));return i},y=function(e,t,n,l){var u=d(e,t);l.set(e,u);for(var c=p?o(e).concat(a(e)):o(e),s=0,f=c.length,E=void 0,m=void 0;s<f;++s)if("callee"!==(E=c[s])&&"caller"!==E)if(m=i(e,E)){m.get||m.set||(m.value=n(e[E],l));try{r(u,E,m)}catch(y){u[E]=m.value}}else u[E]=n(e[E],l);return u},L=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},S=Array.isArray,g=Object.getPrototypeOf,I=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function O(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||I,i=n?y:m,o=function(e,t){if(!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);var a,l=e.__proto__||g(e),u=l&&l.constructor;if(!u||u===r.Object)return i(e,r,o,t);if(S(e)){if(n)return y(e,r,o,t);a=new u,t.set(e,a);for(var c=0,s=e.length;c<s;++c)a[c]=o(e[c],t);return a}if(e instanceof r.Date)return new u(e.getTime());if(e instanceof r.RegExp)return(a=new u(e.source,e.flags||L(e))).lastIndex=e.lastIndex,a;if(r.Map&&e instanceof r.Map)return a=new u,t.set(e,a),e.forEach((function(e,n){a.set(n,o(e,t))})),a;if(r.Set&&e instanceof r.Set)return a=new u,t.set(e,a),e.forEach((function(e){a.add(o(e,t))})),a;if(r.Blob&&e instanceof r.Blob)return e.slice(0,e.size,e.type);if(r.Buffer&&r.Buffer.isBuffer(e))return a=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(e.length):new u(e.length),t.set(e,a),e.copy(a),a;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(e))return a=new u(e.buffer.slice(0)),t.set(e,a),a;if(e instanceof r.ArrayBuffer)return a=e.slice(0),t.set(e,a),a}return"function"==typeof e.then||e instanceof Error||r.WeakMap&&e instanceof r.WeakMap||r.WeakSet&&e instanceof r.WeakSet?e:i(e,r,o,t)};return o(e,E())}return O.default=O,O.strict=function(e,t){return O(e,{isStrict:!0,realm:t?t.realm:void 0})},O}()},8872:function(e,t,n){"use strict";var r=n(4836);var i=n(4129),o=r(n(3903))},6168:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7294),i=n(5086),o=n(3172);const a=i.default.div.withConfig({displayName:"BlogItemstyles__Wrapper",componentId:"sc-j2xf61-0"})(["padding-top:45px;@media (min-width:1024px){padding-top:5rem;}@media (min-width:1280px){padding-top:10rem;}.details{display:flex;gap:20px;}.date{.profile-image{@media (max-width:768px){width:15px;height:15px;}}.profile-name{color:#5e286d;vertical-align:bottom;font-size:16px !important;@media (max-width:768px){font-size:14px !important;}}}.profile{position:relative;display:inline-block;.profile-image{@media (max-width:768px){width:15px;height:15px;}}.profile-name{color:#5e286d;vertical-align:bottom;font-size:16px !important;@media (max-width:768px){font-size:14px !important;}}}.profile::after{position:absolute;right:-10px;top:20%;display:block;content:'';height:60%;width:1px;background-color:#5e286d;@media (max-width:768px){top:30%;}}.half-width{@media (min-width:1024px){display:inline-block;width:50%;padding-inline:20px;}}.image-mobile{@media (min-width:1024px){display:none !important;}}.image-desktop{@media (max-width:1024px){display:none !important;}}a{color:#5e286d;font-family:'Open Sans';font-size:16px;font-style:normal;font-weight:600;display:flex;align-items:center;text-decoration:none !important;gap:5px;svg{width:20px;height:20px;}}.image-half-width{width:100%;object-fit:cover;margin-top:30px;margin-bottom:10px;@media (min-width:1024px){width:50%;margin-top:50px;margin-bottom:20px;}}.image-full-width{width:100%;display:block;object-fit:cover;margin-top:30px;margin-bottom:10px;@media (min-width:768px){margin-top:50px;margin-bottom:20px;}}padding-inline:18px;margin-top:70px;max-width:1440px;margin-inline:auto;@media (min-width:480px){padding-inline:32px;margin-inline:auto;}@media (min-width:768px){padding-inline:90px;}@media (min-width:1024px){padding-inline:110px;margin-top:102px;}@media (min-width:1280px){padding-left:165px;}h1{font-size:",";color:",";font-weight:700;line-height:3.6rem;margin-bottom:0;margin-bottom:40px;","{font-size:7.2rem;line-height:7.6rem;}@media (min-width:1024px){font-size:7.2rem;line-height:7.6rem;margin-bottom:60px;}}p{font-size:1.4rem;color:",";font-weight:400;line-height:2rem;margin:0;margin-top:10px;","{font-size:1.8rem;line-height:2.8rem;}}ul{list-style:none;margin-top:16px;@media (min-width:1024px){padding-left:50px;margin-top:25px;}li{background:url(",") no-repeat left 4px;background-size:13px 13px;padding-left:20px;font-size:1.4rem;color:",";font-weight:400;line-height:2rem;margin-bottom:6px;","{font-size:1.8rem;line-height:2.8rem;margin-bottom:10px;background-size:20px 20px;padding-left:30px;}}}.hero-image{width:100%;display:block;object-fit:cover;margin-top:8px;margin-bottom:30px;@media (min-width:768px){margin-top:18px;margin-bottom:36px;}}h2{color:#5e286d;font-family:'Open Sans';font-size:16px;font-style:normal;font-weight:700;line-height:20px;margin-top:40px;margin-bottom:20px;@media (min-width:768px){margin-top:50px;color:#5e286d;font-family:'Americane';font-size:40px;font-style:normal;font-weight:700;line-height:28px;margin-bottom:30px;}}"],(e=>{let{theme:t}=e;return t.font.size.headingMobile}),(e=>{let{theme:t}=e;return t.color.orange}),(e=>{let{theme:t}=e;return t.mq.tablet}),(e=>{let{theme:t}=e;return t.color.purple}),(e=>{let{theme:t}=e;return t.mq.tablet}),o.Z,(e=>{let{theme:t}=e;return t.color.purple}),(e=>{let{theme:t}=e;return t.mq.tablet}));var l=n(7398),u=(n(8872),n(6132),n(4160)),c=n(6091),s=n(912);var p=e=>{let{pageContext:t}=e;const{title:n,content:i,references:o,image:p,name:f,date:E}=t,d=i?JSON.parse(i.raw):"";return r.createElement(l.Z,null,r.createElement(c.ProgressBar,{color1:"#FAECD8",color2:"#5E286D",height:"3px",position:"fixed"}),r.createElement(a,null,r.createElement(u.rU,{to:"/blog"},r.createElement("span",{className:"back-arrow"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})))," ","Wróć"),r.createElement("h1",null,n||""),r.createElement("div",{className:"details"},r.createElement("div",{className:"profile"},r.createElement("img",{claaName:"profile-image",src:s.Z,alt:""})," ",r.createElement("span",{className:"profile-name"},f)),r.createElement("div",{className:"date"},r.createElement("img",{className:"profile-image",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMSAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjkyOTkgMy4xMDUyNlYxTTEzLjkyOTkgMy4xMDUyNlY1LjIxMDUzTTEzLjkyOTkgMy4xMDUyNkg5LjE5MzA4TTEuMjk4MzQgOS40MjEwNVYxOC44OTQ3QzEuMjk4MzQgMjAuMDU3NSAyLjI0MDkgMjEgMy40MDM2IDIxSDE4LjE0MDRDMTkuMzAzMiAyMSAyMC4yNDU3IDIwLjA1NzUgMjAuMjQ1NyAxOC44OTQ3VjkuNDIxMDVIMS4yOTgzNFoiIHN0cm9rZT0iIzVFMjg2RCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMS4yOTgzNCA5LjQyMTAxVjUuMjEwNDlDMS4yOTgzNCA0LjA0Nzc4IDIuMjQwOSAzLjEwNTIyIDMuNDAzNiAzLjEwNTIySDUuNTA4ODciIHN0cm9rZT0iIzVFMjg2RCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS41MDkwMyAxVjUuMjEwNTMiIHN0cm9rZT0iIzVFMjg2RCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjAuMjQ1NiA5LjQyMTAxVjUuMjEwNDlDMjAuMjQ1NiA0LjA0Nzc4IDE5LjMwMzEgMy4xMDUyMiAxOC4xNDAzIDMuMTA1MjJIMTcuNjE0IiBzdHJva2U9IiM1RTI4NkQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",alt:""})," ",r.createElement("span",{className:"profile-name"},E))),r.createElement("img",{className:"hero-image",src:p,alt:""}),r.createElement("div",null,((e,t)=>{if(!e)return null;const n=[];let i=0;return e.content.forEach(((e,o)=>{switch(e.nodeType){case"paragraph":n.push(r.createElement("p",{key:o},e.content.map((e=>e.value)).join("")));break;case"text":n.push(r.createElement("span",{key:o},e.value));break;case"unordered-list":n.push(r.createElement("ul",{key:o},e.content.map(((e,t)=>r.createElement("li",{key:t},e.content.map(((e,t)=>r.createElement("span",{key:t},e.content[0].value))))))));break;case"unstyled":n.push(r.createElement("p",{key:o},e.content.map(((e,t)=>r.createElement("span",{key:t},e.value)))));break;case"heading-2":n.push(r.createElement("h2",{key:o},e.content[0].value));break;case"heading-3":n.push(r.createElement("p",{className:"half-width",key:o},e.content[0].value));break;case"hr":n.push(r.createElement("hr",{key:o}));break;case"table":n.push(r.createElement("table",{key:o},e.content.map(((e,t)=>r.createElement("tr",{key:t},e.content.map(((e,t)=>{"table-header-cell"===e.nodeType?n.push(r.createElement("th",{key:t},e.content[0].content[0].value)):n.push(r.createElement("td",{key:t},e.content[0].content[0].value))})),";"))),";"));break;case"embedded-asset-block":if(t[i]&&t[i].publicUrl){const e=t[i],o=e.title||"100",a=("50"===o?"image-half-width":"image-full-width")+" "+("100-mobile"===o?"image-mobile":"")+" "+("100-desktop"===o?"image-desktop":"");n.push(r.createElement("img",{key:i,src:e.publicUrl,alt:"Image "+i,className:a})),i++}}})),n})(d,o))))}},3172:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IlN5bWJvbCArIiBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzcxXzI4NDcpIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTE3LjQ5NzIgMzVDMTQuNDQyOSAzNSAxMS45NzM2IDMyLjUyMzMgMTEuOTczNiAyOS40Nzc4VjUuNTIyMjNDMTEuOTczNiAyLjQ3MTU2IDE0LjQ0MjkgMCAxNy40OTcyIDBDMjAuNTUxNSAwIDIzLjAyMDggMi40NzE1NiAyMy4wMjA4IDUuNTIyMjNWMjkuNDc3OEMyMy4wMjA4IDMyLjUyMzMgMjAuNTUxNSAzNSAxNy40OTcyIDM1WiIgZmlsbD0iI0YyOEYxRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzIiIGQ9Ik0wIDE3LjUwMjdDMCAxNC40NTIgMi40Nzk2NiAxMS45ODA1IDUuNTIzNTkgMTEuOTgwNUgyOS40NzY0QzMyLjUzMDcgMTEuOTgwNSAzNSAxNC40NTIgMzUgMTcuNTAyN0MzNSAyMC41NTM0IDMyLjUzMDcgMjMuMDI0OSAyOS40NzY0IDIzLjAyNDlINS41MjM1OUMyLjQ3OTY2IDIzLjAyNDkgMCAyMC41NTM0IDAgMTcuNTAyN1oiIGZpbGw9IiNGMjhGMUQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83NzFfMjg0NyI+CjxyZWN0IHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-blog-post-template-js-aa68783cf80f933570fb.js.map