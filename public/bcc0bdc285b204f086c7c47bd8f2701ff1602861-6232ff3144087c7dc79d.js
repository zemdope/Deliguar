/*! For license information please see bcc0bdc285b204f086c7c47bd8f2701ff1602861-6232ff3144087c7dc79d.js.LICENSE.txt */
(self.webpackChunkdeliguar=self.webpackChunkdeliguar||[]).push([[785],{94184:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)){if(i.length){var r=a.apply(null,i);r&&e.push(r)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var l in i)n.call(i,l)&&i[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},21239:function(e,t,i){"use strict";t.Z=i.p+"static/politykaen-31d7d5c6f3b2d9d62a48c7de98064181.pdf"},84058:function(e,t,i){"use strict";var n=i(64836);t.__esModule=!0;var a={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.withIntl=t.navigate=t.changeLocale=t.Link=t.IntlContextProvider=t.IntlContextConsumer=void 0;var o=i(46384);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===o[e]||(t[e]=o[e]))}));var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var i=c(t);if(i&&i.has(e))return i.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,i&&i.set(e,n);return n}(i(59029));t.Link=r.default,t.navigate=r.navigate,t.changeLocale=r.changeLocale;var l=n(i(99982));t.withIntl=l.default;var s=i(66971);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(c=function(e){return e?i:t})(e)}t.IntlContextProvider=s.IntlContextProvider,t.IntlContextConsumer=s.IntlContextConsumer},59029:function(e,t,i){"use strict";var n=i(64836);t.__esModule=!0,t.navigate=t.default=t.changeLocale=void 0;var a=n(i(10434)),o=n(i(7071)),r=n(i(67294)),l=n(i(45697)),s=i(11883),c=i(66971),d=["to","language","children","onClick"],u=r.default.forwardRef((function(e,t){var i=e.to,n=e.language,l=e.children,u=e.onClick,p=(0,o.default)(e,d);return r.default.createElement(c.IntlContextConsumer,null,(function(e){var o=n||e.language,c=e.routed||n?"/"+o+i:""+i;return r.default.createElement(s.Link,(0,a.default)({},p,{to:c,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),u&&u(e)},ref:t}),l)}))}));u.propTypes={children:l.default.node.isRequired,to:l.default.string,language:l.default.string},u.defaultProps={to:""};var p=u;t.default=p;t.navigate=function(e,t){if("undefined"!=typeof window){var i=window.___gatsbyIntl,n=i.language,a=i.routed?"/"+n+e:""+e;(0,s.navigate)(a,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var i=window.___gatsbyIntl.routed,n="/"+e+(t||function(e){if(!i)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,s.navigate)(n)}}},99982:function(e,t,i){"use strict";var n=i(64836);t.__esModule=!0,t.default=void 0;var a=n(i(67294)),o=i(46384);t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),a.default.createElement((0,o.injectIntl)(e),t)}}},37515:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});const n=(0,i(85086).createGlobalStyle)(['*,*::before,*::after{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html{background-color:#ffffff;font-size:62.5%;scroll-behavior:smooth;margin:0;overflow-x:hidden;}body{scroll-behavior:smooth;}main{background-color:#FFFBF5;}section{margin-inline:auto;}body{margin:0;font-size:1.6rem;overflow-x:hidden;}h1,h2,h3,h4,h5,h6{font-weight:900;line-height:1.2;font-family:"Americane";}p,li,a{font-family:"Open sans",sans-serif;font-weight:normal;line-height:1.5;font-size:1.5rem;}a{cursor:pointer;white-space:nowrap;text-decoration:none;height:44px !important;font-size:16px !important;@media (min-width:1024px){height:46px !important;font-size:20px !important;}}'])},91052:function(e,t,i){"use strict";i.d(t,{r:function(){return n}});const n={color:{background:"rgba(250, 236, 216, 0.50)",light:" #FFFBF5",orange:"#F28F1D",purpleDark:"\t#4C2058",purple:"#5E286D",black:"#000000",beige:"#FAECD8",lightBlack:"#02182b",white:"#FFF8EE"},size:{desktopHeroHeight:"700px"},font:{size:{heading:"6.5rem",headingMobile:"3.2rem",headingSmall:"2.4rem",headingSmallMobile:"1.6rem",buttonMobile:"1.6rem",button:"2rem",paragraph:"1.8rem",paragraphMobile:"1.4rem"}},mq:{mobileLandscape:"@media (orientation: landscape) and (max-height: 500px)",tabletAnimation:"@media (min-width: 630px)",tablet:"@media (min-width: 768px)",desktop:"@media (min-width: 1024px)",bigDesktop:"@media (min-width: 1280px)",huge:"@media(min-width: 1440px)"}}},57398:function(e,t,i){"use strict";i.d(t,{Z:function(){return S}});var n=i(67294),a=i(11883),o=i(84058);var r=()=>{const e=(0,a.useStaticQuery)("993904680"),t="pl"===(0,o.useIntl)().locale?"pl":"en",{0:i,1:r}=(0,n.useState)(t),l="pl"===t?"en-US":"pl",s=e.allContentfulMenuTop.nodes.filter((e=>e.node_locale===l)),c=s.length>0?s:[];return n.createElement(n.Fragment,null,c.map((e=>n.createElement("li",{key:e.test},n.createElement(a.Link,{to:e.url,title:e.test},e.test)))))},l=i(85086);const s=l.default.li.withConfig({displayName:"Navbarstyles__SocialWrapper",componentId:"sc-1hc4rbe-0"})(["display:flex;justify-content:flex-end;gap:16px;position:absolute;bottom:30px;right:16px;","{display:none;}img{width:100%;}"],(e=>{let{theme:t}=e;return t.mq.desktop})),c=l.default.ul.withConfig({displayName:"Navbarstyles__List",componentId:"sc-1hc4rbe-1"})(["opacity:",";display:flex;visibility:",";margin:0;transform:",";flex-direction:column;justify-content:flex-start;list-style:none;padding:120px 20px;background-color:",";height:100vh;transition:opacity 0.3s ease-out;li{width:100%;opacity:",";transform:",";transition:transform 0.25s ease-out,opacity 0.25s ease-out;a{display:inline-block;color:",";text-decoration:none;font-weight:400;line-height:2.8rem;height:auto !important;padding-top:10px;padding-bottom:10px;font-size:",";@media (min-width:768px){line-height:3.4rem;font-size:2.4rem;}}a.active{}a:hover{}}li:nth-child(2){transition-delay:0.08s;}li:nth-child(3){transition-delay:0.14s;}li:nth-child(2),li:nth-child(1){border-bottom:1px solid rgba(250,236,216,0.2);}","{transform:translateY(0);opacity:1;visibility:visible;flex-direction:row;padding:35px 20px;li{opacity:1;width:auto;}li:nth-child(2),li:nth-child(1){border-bottom:none;}li:last-child{}}li:nth-child(4){a{display:none !important;width:160px;padding:8px 32px !important;margin-top:-8px;position:relative;z-index:0;justify-content:center;align-items:center;flex-shrink:0;font-weight:700 !important;border-radius:32px;background:#5E286D;box-shadow:5px 5px 10px 0px rgba(22,27,29,0.23),-5px -5px 10px 0px rgba(250,251,255,0.1);","{display:flex !important;}&::after{content:'';position:absolute;inset:0;z-index:-1;width:100%;height:100%;opacity:0;border-radius:32px;box-shadow:10px 10px 20px 0px rgba(22,27,29,0.23),-10px -10px 20px 0px rgba(250,251,255,0.1);transition:opacity 0.3s ease-in-out;}&:hover::after{opacity:1;}}"],(e=>{let{isOpen:t}=e;return t?"1":"0"}),(e=>{let{isOpen:t}=e;return t?"visible":"hidden"}),(e=>{let{isOpen:t}=e;return t?"translateY(0)":"translateY(-100%)"}),(e=>{let{theme:t}=e;return t.color.purple}),(e=>{let{isOpen:t}=e;return t?"1":"0"}),(e=>{let{isOpen:t}=e;return t?"translateX(0)":"translateX(-40px)"}),(e=>{let{theme:t}=e;return t.color.white}),(e=>{let{theme:t}=e;return t.font.size.parapgraph}),(e=>{let{theme:t}=e;return t.mq.desktop}),(e=>{let{theme:t}=e;return t.mq.desktop})),d=l.default.header.withConfig({displayName:"Navbarstyles__Header",componentId:"sc-1hc4rbe-2"})(["margin-inline:auto;position:fixed;top:0;left:50%;z-index:999;transform:translateX(-50%);background-color:",";height:72px;width:100%;box-shadow:5px 5px 10px 0px rgba(22,27,29,0.23);transition:background-color 0.3s ease-out;","{height:100px;}"],(e=>{let{theme:t}=e;return t.color.orange}),(e=>{let{theme:t}=e;return t.mq.desktop})),u=l.default.a.withConfig({displayName:"Navbarstyles__ShopLink",componentId:"sc-1hc4rbe-3"})(["border:none;cursor:pointer;padding:0;z-index:3;position:absolute;right:68px;top:16px;@media (min-width:1024px){display:none;}"]),p=(0,l.default)(a.Link).withConfig({displayName:"Navbarstyles__LogoLink",componentId:"sc-1hc4rbe-4"})(["width:",";img{max-width:58px;max-height:63px;position:absolute;top:50%;transform:translateY(-50%);left:16px;z-index:999;}","{img{left:40px;max-width:77px;}}@media (min-width:1610px){img{left:20px;}}"],(e=>{let{isOpen:t}=e;return t?"145px":"58px"}),(e=>{let{theme:t}=e;return t.mq.desktop})),M=l.default.nav.withConfig({displayName:"Navbarstyles__Navigation",componentId:"sc-1hc4rbe-5"})(["position:relative;top:0;background-color:transparent;width:100%;max-width:1920px;margin-inline:auto;height:70px;","{height:100px;max-width:1440px;margin-inline:auto;ul{height:auto;}li:not(:nth-child(4)){a{padding:0;font-size:20px;transition:all 200ms ease-out;color:",";}a:hover{text-shadow:0 0 1px white,0 0 1px white,0 0 1px white;scale:1.1;}}}","{margin-left:auto;ul{display:flex;justify-content:flex-end;background-color:transparent;margin-top:0;li:not(:last-child){margin:0 53px 0 0px;}}}}"],(e=>{let{theme:t}=e;return t.mq.desktop}),(e=>{let{theme:t}=e;return t.color.white}),(e=>{let{theme:t}=e;return t.mq.desktop})),g=l.default.button.withConfig({displayName:"Navbarstyles__StyledBurger",componentId:"sc-1hc4rbe-6"})(["display:flex;flex-direction:column;justify-content:space-around;width:34px;height:34px;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;position:absolute;right:10px;top:16px;img{width:100%;position:absolute;top:0;left:0;}img:nth-child(1){display:",";}img:nth-child(2){display:",";}","{display:none;}"],(e=>{let{isOpen:t}=e;return t?"none":"inline"}),(e=>{let{isOpen:t}=e;return t?"inline":"none"}),(e=>{let{theme:t}=e;return t.mq.desktop}));l.default.a.withConfig({displayName:"Navbarstyles__Button",componentId:"sc-1hc4rbe-7"})(["display:none !important;width:160px;padding:8px 32px !important;margin-top:-8px;position:relative;z-index:0;justify-content:center;align-items:center;flex-shrink:0;font-weight:700 !important;border-radius:32px;background:#f2851d;box-shadow:5px 5px 10px 0px rgba(22,27,29,0.23),-5px -5px 10px 0px rgba(250,251,255,0.1);","{display:flex !important;}&::after{content:'';position:absolute;inset:0;z-index:-1;width:100%;height:100%;opacity:0;border-radius:32px;box-shadow:10px 10px 20px 0px rgba(22,27,29,0.23),-10px -10px 20px 0px rgba(250,251,255,0.1);transition:opacity 0.3s ease-in-out;}&:hover::after{opacity:1;}"],(e=>{let{theme:t}=e;return t.mq.desktop}));var x=i.p+"static/newLogo-baf1872ed299a2ded316605a0e995150.svg",I=i(32921),m=i(26861),N="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5Ljc1IDIxSDcuMjVDMy41IDIxIDEgMTguNSAxIDE0Ljc1VjcuMjVDMSAzLjUgMy41IDEgNy4yNSAxSDE5Ljc1QzIzLjUgMSAyNiAzLjUgMjYgNy4yNVYxNC43NUMyNiAxOC41IDIzLjUgMjEgMTkuNzUgMjFaIiBzdHJva2U9IiNGRkZCRjUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuMTcwOSA3LjM4NzYyTDE2LjE4NTkgOS41MTkyN0MxNy4yNzE0IDEwLjM3MTkgMTcuMjcxNCAxMS42NTA5IDE2LjE4NTkgMTIuNTAzNkwxMy4xNzA5IDE0LjYzNTJDMTEuOTY0OCAxNS40ODc5IDExIDE0Ljc3NzMgMTEgMTMuMjE0MVY4Ljk1MDgzQzExIDcuMTAzNCAxMS45NjQ4IDYuNTM0OTYgMTMuMTcwOSA3LjM4NzYyWiIgc3Ryb2tlPSIjRkZGQkY1IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";var h=e=>{let{data:t}=e;const{0:i,1:a}=(0,n.useState)(!1);(0,o.useIntl)();return n.createElement(d,null,n.createElement(M,null,n.createElement(p,{isOpen:i,to:"/"},n.createElement("img",{src:i?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAAZCAYAAAAxO8yWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlQSURBVHgB7VtNUhtXEO5+o5HIKqIQqcoqYhNgBZwg4gTBJ7A4AXACixMAJ4h8AsgJkE9geWVgY2WVqtiUlVWMpHmd7jcaaebNm9FIAjup4qvClmbe37zXP193jxD+Bxjc3x0BUIv/+oqwVaptvo7fH326PRgh1SuKrnB1uwfPeDL88/l93QvwN/7Y4L+O79Ehwn8c40V/mF7Bvu+VN3B1oy/fBvc3b4FgN7oHGvfLP/zchWc8CQafblmAqBm7dFGSQ1IBnrE0VfM6E0CfEN6oQHW+5iGVRlCnhKhTdTgc1vlDd/jxfYMmAhTeAwVsteAwb0z6/KH6oB+abNV2+Fs9uo6kuoTBO99buYqE9Bk2pvs1xk7J03jJH3ZndZVzRIIDUFq0v0uEp5Xa5hV8AyAGOQJPf2fdCa2aejUMWIDCtsmeqBvypEM9OGONu/I9ffrsHmdDAc0WoBS4DwJdDj7encE3hL++3eEzn1pFFFdH5662wqs8rd5aptgNYovG7YYar8XawTNyoWAZoD4WTiLuAb4RfFXZ5wM/JKJTX+k9l+UY3t++AtLnoXDMARJXitdM3F/CMzJRclzrsHT04hfY6FeRox+n1eJrw2AgFimXh5imLGyj0Zdd5jh1+c7usWesyRIQ7sLWoqdQMYfRqfuDT++bLGAtd2fsM6fqsKvuG1+PuOsSNG0iQ5hEhKFbhIbvcd+C7k6efRh8OSj6zNI+CAYNDbqqQPE6db9ov5EeHPFz1Xnlb8q17fZkfuGSKtiV8Uo5VGTeuR1CRK/Lta22q7Eh4UNooUJLM6nJhzVZsA1DgBGFizT4oKa9UA75hj9he1H+IVZGhIRYmrXGHm/AXkSKZb0crb2yqI/Qnh5qOvRrWx17PBE6XqP0qcfaT0j2A6cTMKBLM3eAIsAvZh2urGOoH655IBMkfPl4c7KyvuV0u4m9Gk+u5QF43wb3t33+mMvVQoWOXDY2h/d3O6JbzPOaoERBwvF43zt8zvvF577p8YExfeAxrP2cy519xwuv/LAtmn2auikb73ooOWR2CRDmFTLA/IPDeON25kTCyvDBi7ZHX4VEJ4TBrBO67AL3sg5eFCFQtC+CFrYXa4Wn0+50FJu9SqhmujqxWvF1qMy9ujvL3asYV5PcWOq2oRVJzsdW5JgDhmOHhW0M/rrbLT63rJ/HdnijhThRZX27xf9d2JPYJDSyElAQ0nYRQXKO5dhQEQxf0YtZ4bsoS3ltawOJ9n1V3lg2CiVbkCHtMtkyXMuBQ6EBoc4W4tLN1bBwasL3g3Gu7fa3wnM7sDCx9r1Ky15wXCtzuUgOjCA9QkQkPt0x+FwuU6zV18gXjRWnAXOCvdR53JrIWjU6vIQNtq6a4ET2Igw6CkSsOVhYiMLNJSvpSA3513ARt8nuGO32KqvyJ1HVxG3ER1Emrb4UAtIpsytJxKz2Ys5ZIz+zRaDEn4k++XmeCLJXLmUjwKvZeyXJVZ1Is6ysMddy7Km48Wi88trmqnCyrLmh4DlFKMES4AW8QcRGbKXGTBsOAEkTzsT3daW23bSGaMufmHKIa+LYNS4VuYkLiWe6ZRMzrEpoNTPMuYk+jVDvwxPA8DY76ckWs7K+1bKatvnQO5wcvrZ4XoP+fF/HH0MLK1xJUzKrLAJZWdt8kZ4bU88czm3oSmJupgdXJjhwcKKlhCiNyNdjylezsO2MhSUNCfktxs8kT4hjB74KcFbCtQ5PNjXtJp6dNZ6VreVqKlyNletwTIAneCiZvTLRHru4X+1+ZU+fgHNu+KXo3ONUyok9t2ApIUJUP1la1BsvJiUUuZlxcl7dgccEYT3znlZtDn9fugjvk8PaF62tgMWCWOcw3E5Ee7G9StW2snNZ1tyk6TXMnrtr91syYx1yoBh68FhAWOpAWWNsvlbNIuxSUA48vWd8v2S/2fzDV8A/Dq6lkGYTecrZZ7StJma3tbtigfMjSK1vYSEySTkrdGXG/zs8ElgrlhqLSpQShLycjgnrOUdkEqak32W1C7Pb8Qs0u3htLHbiSj+a026bTgc4F2G1yS46zxjIEoiZbj2l3Jr03wu5s6xMcGV8cJza71KKWMMVFsxhMMn9w0Hu5oIckGRlIRE6U5OJZ8d+qW0eMGl9hyFfGw/JxDsnCDDlBv3QSO5VLKoV7Y8Jzrga0IIMuIgzpKLkojD9GtPv+JLX28oMQD5zOiGwo17VmVuITGpcc7SS0hhs4+pWTz4FBG8UwoHdt1zbnFlfe0xwmHpKiejR1MHanBup+2ub2fkUVDtZRI1Nd4fvJNIXkpLgNMC+s/iruQyRTjZOhFh4CMbTIdxW3o4or/+cIsOivFrTmb00qeHBAkhH1+zyM+qgoeHQl/Z1MRwpIfLQ+15CRvv60BeJZUkFaLhqUVxBP50OXGmz9h0lNAzggEnZB0n4gfa6fhBmS2Flpf9UCT1DBFPWKExo8lqaHMlceJq6pRH0hp5XRY9+JZPaT5HT/DElJcGhN7v4ybOZ/ULkPbDdnXldpRN9K5dWzvngjhKkPnw74iDaK3NJ1qbBUb6YKu+8cM4tddD7m8Y8c6Mk1GBZeGqvvJp829GYXaDLQv1Jnbs0TzAuCibCSpMIG7uP9PrpMF4IHruTt1CEa2SBc0xcBtmLvpossaLrxaM5bMet8pf7m2NFsPC7WZJ9jgq6oaLGnzU5l43HmHvJ6Az7cqC2AAnkVQNnodY5jj5+qpe/xMolCqqLgHlP3DqHrwdn5F6KDdiMlysky0xAC/M0pg5HsCDM3EXPyTk3vlLzFOwsdOQlsLysspBjjXBSZA6NyqnVVPJSfUuluEBY9TtQqfZRQRUgPweTB3F38e9i7RTgi0WF037FV7L5Cx9mPDOfCv9nR25yTksJUqGCXQSUA2M/KNantrVfpJgpki45GJPIytpwdhdZlfKxlYsf/kV83sT6c8YxY9W2jgOPNmatxU66SWTp+nGCWFuxcmLS3fUq+fWJrJ0O7TlcyieHOV2fQ/FkbRIsWAceXy8L9kWsfS/rdeEF5u455yZ9YWRYmLf8qiJvEiGfUX1mGYgZj2shkdcv8uuR8Jcd7rbmTcOhV533VyjRm5bROnzf701+isThLI2CA468+qaoWQDxfbT3y7zQN4KmjFdRlXaRYCK+V6XSSqL2F9b7oC7Roi2Q0TrsPvMgMbf1LPbc/wKqk77m+jB54wAAAABJRU5ErkJggg==":x,alt:""})),n.createElement(g,{isOpen:i,onClick:()=>{a(!i)}},n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iOC4xMTkxNCIgeT0iOC4zMzMyNSIgd2lkdGg9IjE3LjMzMzMiIGhlaWdodD0iMS45MzMzMyIgcng9IjAuOTY2NjY3IiBzdHJva2U9IiNGRkY4RUUiLz4KPHJlY3QgeD0iOC4xMTkxNCIgeT0iMTUuNjY2NSIgd2lkdGg9IjE3LjMzMzMiIGhlaWdodD0iMS45MzMzMyIgcng9IjAuOTY2NjY3IiBzdHJva2U9IiNGRkY4RUUiLz4KPHJlY3QgeD0iOC4xMTkxNCIgeT0iMjMiIHdpZHRoPSIxNy4zMzMzIiBoZWlnaHQ9IjEuOTMzMzMiIHJ4PSIwLjk2NjY2NyIgc3Ryb2tlPSIjRkZGOEVFIi8+CjxyZWN0IHg9IjAuNzg1NjQ1IiB5PSIxIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4LjUiIHN0cm9rZT0iI0ZGRjhFRSIvPgo8L3N2Zz4K",alt:""}),n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTEuMDc0MiIgeT0iOS43MDcxMSIgd2lkdGg9IjE3LjMzMzMiIGhlaWdodD0iMS45MzMzMyIgcng9IjAuOTY2NjY3IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxMS4wNzQyIDkuNzA3MTEpIiBzdHJva2U9IiNGQUVDRDgiLz4KPHJlY3QgeD0iOS42ODgzMSIgeT0iMjEuNTc3OSIgd2lkdGg9IjE3LjMzMzMiIGhlaWdodD0iMS45MzMzMyIgcng9IjAuOTY2NjY3IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgOS42ODgzMSAyMS41Nzc5KSIgc3Ryb2tlPSIjRkFFQ0Q4Ii8+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4LjUiIHN0cm9rZT0iI0ZBRUNEOCIvPgo8L3N2Zz4K",alt:""})),n.createElement(u,{href:"https://allegro.pl/oferta/suplement-dla-psa-i-kota-na-trawienie-deliguard-14236919045"},n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDY1MSI+CjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik0xMS44NjcyIDAuNUw2LjI4NTcxIDUuNU0yMS43MDQyIDAuNUwyNy4yODU3IDUuNSIgc3Ryb2tlPSIjRkZGOEVFIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iVmVjdG9yXzIiIGQ9Ik0xLjI4NTcxIDkuNDk4MzFDMS4yODU3MSA2LjcyNDg3IDIuODIwMjEgNi41IDQuNzI2NzEgNi41SDI4Ljg0NDdDMzAuNzUxMiA2LjUgMzIuMjg1NyA2LjcyNDg3IDMyLjI4NTcgOS40OTgzMUMzMi4yODU3IDEyLjcyMTUgMzAuNzUxMiAxMi40OTY2IDI4Ljg0NDcgMTIuNDk2Nkg0LjcyNjcxQzIuODIwMjEgMTIuNDk2NiAxLjI4NTcxIDEyLjcyMTUgMS4yODU3MSA5LjQ5ODMxWiIgc3Ryb2tlPSIjRkZGOEVFIi8+CjxwYXRoIGlkPSJWZWN0b3JfMyIgZD0iTTEzLjIyODEgMTkuNVYyNC44MjVNMjAuNTMzOSAxOS41VjI0LjgyNU0zLjI4NTcxIDEzLjVMNS41MjUxMiAyNi40NkM2LjAzMzM1IDI5LjM3IDcuMjU2MjkgMzEuNSAxMS43OTg2IDMxLjVIMjEuMzc1N0MyNi4zMTUxIDMxLjUgMjcuMDQ1NyAyOS40NiAyNy42MTc1IDI2LjY0TDMwLjI4NTcgMTMuNSIgc3Ryb2tlPSIjRkZGOEVFIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9nPgo8L3N2Zz4K",alt:""})),n.createElement(c,{isOpen:i},n.createElement(r,null),n.createElement(s,{isOpen:i},n.createElement("a",{href:"https://www.instagram.com/deliguard.pets/"},n.createElement("img",{src:I.Z,alt:""})),n.createElement("a",{href:"https://www.facebook.com/deliguard"},n.createElement("img",{src:m.Z,alt:""})),n.createElement("a",{href:"https://www.youtube.com/@DeliGuard/"},n.createElement("img",{src:N,alt:""}))))))};const j=l.default.div.withConfig({displayName:"Footerstyles__SocialContainer",componentId:"sc-1ujmuhp-0"})(["display:flex;justify-content:flex-end;margin-top:17px;gap:16px;@media (min-width:992px){gap:24px;justify-content:flex-end;}"]),y=l.default.div.withConfig({displayName:"Footerstyles__FooterWrapper",componentId:"sc-1ujmuhp-1"})(["max-width:1440px;margin-inline:auto;padding-inline:18px;padding-top:22px;padding-bottom:22px;@media (min-width:480px){padding-inline:32px;}@media (min-width:768px){padding-inline:50px;}@media (min-width:992px){padding-inline:90px;padding-top:52px;padding-bottom:52px;}@media (min-width:1280px){padding-inline:165px;}h5{color:#fef8ed;margin-bottom:8px;font-family:'Open Sans';font-size:14px;font-style:normal;font-weight:400;line-height:22px;white-space:nowrap;@media (min-width:992px){font-size:16px;font-weight:700;line-height:20px;}}a{color:#FEF8ED;font-family:\"Open Sans\";font-size:14px;font-style:normal;font-weight:400;line-height:22px;}"]),f=l.default.footer.withConfig({displayName:"Footerstyles__FooterContainer",componentId:"sc-1ujmuhp-2"})(["background-color:#5e286d;position:relative;z-index:9;"]);var D=i(34051),z=i(31555),w=(i.p,i.p+"static/polityka-4f9719883b64e1e54faf53c249e66954.pdf"),A=i(21239);var k=()=>{const e=(0,o.useIntl)(),t=(0,a.useStaticQuery)("915429955").allContentfulKontaktIStopka.nodes[0];return n.createElement(f,null,n.createElement(y,null,n.createElement(D.Z,null,n.createElement(z.Z,{xs:"6",lg:"8"},n.createElement(D.Z,null,n.createElement(z.Z,{xs:"12"},n.createElement("h5",null,t.stopkaTekst),n.createElement("a",{href:"pl"===e.locale?w:A.Z,target:"blank"},"pl"===e.locale?"Polityka Prywatności":"Privacy policy")))),n.createElement(z.Z,{xs:"6",lg:"4",className:"text-end"},n.createElement(a.Link,null," ",n.createElement("img",{src:t.deliguardIcon.url,alt:""})),n.createElement(z.Z,{xs:"12",lg:"12"},n.createElement(j,null,n.createElement("a",{href:t.linkIg},n.createElement("img",{src:I.Z,alt:""})),n.createElement("a",{href:t.linkFb},n.createElement("img",{src:m.Z,alt:""})),n.createElement("a",{href:t.linkYt},n.createElement("img",{src:N,alt:""}))))))))};const b=l.default.div.withConfig({displayName:"Cookie-bannerstyles__Wrapper",componentId:"sc-1dustp3-0"})(["position:fixed;top:72px;background:#FAECD8;box-shadow:5px 5px 10px 0px rgba(22,27,29,0.23);z-index:9999;width:100%;","{top:100px;}"],(e=>{let{theme:t}=e;return t.mq.desktop})),E=l.default.div.withConfig({displayName:"Cookie-bannerstyles__InnerWrapper",componentId:"sc-1dustp3-1"})(["display:flex;flex-direction:column;align-items:center;gap:36px;padding-top:30px;padding-bottom:50px;margin-inline:auto;max-width:1440px;padding-inline:18px;@media (min-width:1024px){padding-inline:30px;padding-right:110px;flex-direction:row;align-items:flex-start;}@media (min-width:1440px){padding-left:40px;padding-right:100px;}@media (min-width:1600px){padding-left:30px;padding-right:110px;}svg{",'{width:220px;}}h2{color:#5E286D;font-family:"Open Sans";font-size:20px;font-style:normal;font-weight:700;line-height:30px;margin-bottom:13px;text-align:center;@media (min-width:1024px){text-align:left;}}p{color:#5E286D;font-family:"Open Sans";font-size:16px;font-style:normal;font-weight:400;line-height:26px;text-align:center;max-width:700px;@media (min-width:1024px){text-align:left;max-width:unset;}}a{color:#5E286D;font-family:"Open Sans";font-size:16px;font-style:normal;font-weight:700;line-height:20px;}.button-container{@media (min-width:1024px){align-self:flex-end;}}.disable-button{width:100%;max-width:280px;color:white;font-size:1.6rem;line-height:2rem;font-family:\'Open sans\';font-weight:700;color:white;padding:8px 32px;border-radius:32px;background:',";box-shadow:5px 5px 10px 0px rgba(22,27,29,0.23),-5px -5px 10px 0px rgba(250,251,255,0.1);text-decoration:none;margin-inline:auto;position:relative;display:block;text-align:center;color:#fff8ee !important;text-align:center;z-index:0;@media (min-width:992px){color:#fff8ee;text-align:center;margin-inline:unset;font-size:1.9rem;line-height:30px;}&::after{content:'';position:absolute;inset:0;z-index:-1;width:100%;height:100%;opacity:0;border-radius:32px;box-shadow:10px 10px 20px 0px rgba(22,27,29,0.23),-10px -10px 20px 0px rgba(250,251,255,0.1);transition:opacity 0.3s ease-in-out;}&:hover::after{opacity:1;}}"],(e=>{let{theme:t}=e;return t.mq.desktop}),(e=>{let{theme:t}=e;return t.color.orange}));var T=function(){const{0:e,1:t}=(0,n.useState)(!0);return(0,n.useEffect)((()=>{const e=localStorage.getItem("cookiesAccepted");t(!e)}),[]),e&&n.createElement(b,null,n.createElement(E,null,n.createElement("svg",{width:"119",height:"120",viewBox:"0 0 119 120",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M114.448 71.3746C109.28 96.8363 86.7687 116 59.782 116C28.9744 116 4 91.026 4 60.2182C4 31.2935 26.0154 7.51061 54.2038 4.71191",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("path",{d:"M29.1019 49.0621C27.5615 49.0621 26.3128 47.8133 26.3128 46.273C26.3128 44.7326 27.5615 43.4839 29.1019 43.4839C30.6423 43.4839 31.891 44.7326 31.891 46.273C31.891 47.8133 30.6423 49.0621 29.1019 49.0621Z",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("path",{d:"M107.197 15.5931C105.656 15.5931 104.408 14.3444 104.408 12.804C104.408 11.2636 105.656 10.0149 107.197 10.0149C108.737 10.0149 109.986 11.2636 109.986 12.804C109.986 14.3444 108.737 15.5931 107.197 15.5931Z",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("path",{d:"M59.782 99.266C56.7011 99.266 54.2038 96.7687 54.2038 93.6878C54.2038 90.607 56.7011 88.1096 59.782 88.1096C62.8628 88.1096 65.3602 90.607 65.3602 93.6878C65.3602 96.7687 62.8628 99.266 59.782 99.266Z",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("path",{d:"M31.891 77.0085L31.9468 76.9465",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("path",{d:"M87.673 77.0085L87.7287 76.9465",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("path",{d:"M54.2038 60.2731L54.2596 60.2112",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("path",{d:"M109.986 43.5393L110.042 43.4773",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("path",{d:"M87.673 26.8044L87.7287 26.7424",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("path",{d:"M54.2036 4.43652C51.4145 12.8038 56.9921 21.1711 65.8369 21.1711C54.2036 40.6948 65.36 60.2185 93.2509 57.4294C93.2509 71.3749 107.196 74.164 113.889 71.4508",stroke:"#5E286D","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"})),n.createElement("div",null,n.createElement("h2",null,"Ciasteczka... Pychota...."),n.createElement("p",null,"Strona wykorzystuje pliki cookies m.in. w celu poprawienia jej dostępności, personalizacji, obsługi kont użytkowników czy aby zebrać dane, dotyczące ruchu na stronie. Każdy może sam decydować o tym czy dopuszcza pliki cookies, ustawiając odpowiednio przeglądarkę. Więcej informacji znajdziesz w ",n.createElement("a",{href:w,target:"blank"},"Polityce Prywatności"))),n.createElement("div",{className:"button-container"},n.createElement("a",{role:"button",className:"disable-button",onClick:()=>{localStorage.setItem("cookiesAccepted","true"),t(!1)}},"Akceptuję wszystkie"))))},L=i(37515),C=i(91052);var S=e=>{let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(L.Z,null),n.createElement(l.ThemeProvider,{theme:C.r},n.createElement(h,null),n.createElement("noscript",null,n.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-5B442CLK",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})),n.createElement(T,null),n.createElement("main",null,t),n.createElement(k,null)))}},31555:function(e,t,i){"use strict";var n=i(94184),a=i.n(n),o=i(67294),r=i(76792),l=i(85893);const s=o.forwardRef(((e,t)=>{const[{className:i,...n},{as:o="div",bsPrefix:s,spans:c}]=function({as:e,bsPrefix:t,className:i,...n}){t=(0,r.vE)(t,"col");const o=(0,r.pi)(),l=(0,r.zG)(),s=[],c=[];return o.forEach((e=>{const i=n[e];let a,o,r;delete n[e],"object"==typeof i&&null!=i?({span:a,offset:o,order:r}=i):a=i;const d=e!==l?`-${e}`:"";a&&s.push(!0===a?`${t}${d}`:`${t}${d}-${a}`),null!=r&&c.push(`order${d}-${r}`),null!=o&&c.push(`offset${d}-${o}`)})),[{...n,className:a()(i,...s,...c)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,l.jsx)(o,{...n,ref:t,className:a()(i,!c.length&&s)})}));s.displayName="Col",t.Z=s},34051:function(e,t,i){"use strict";var n=i(94184),a=i.n(n),o=i(67294),r=i(76792),l=i(85893);const s=o.forwardRef((({bsPrefix:e,className:t,as:i="div",...n},o)=>{const s=(0,r.vE)(e,"row"),c=(0,r.pi)(),d=(0,r.zG)(),u=`${s}-cols`,p=[];return c.forEach((e=>{const t=n[e];let i;delete n[e],null!=t&&"object"==typeof t?({cols:i}=t):i=t;const a=e!==d?`-${e}`:"";null!=i&&p.push(`${u}${a}-${i}`)})),(0,l.jsx)(i,{ref:o,...n,className:a()(t,s,...p)})}));s.displayName="Row",t.Z=s},76792:function(e,t,i){"use strict";i.d(t,{pi:function(){return c},vE:function(){return s},zG:function(){return d}});var n=i(67294);i(85893);const a=["xxl","xl","lg","md","sm","xs"],o=n.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:r,Provider:l}=o;function s(e,t){const{prefixes:i}=(0,n.useContext)(o);return e||i[t]||t}function c(){const{breakpoints:e}=(0,n.useContext)(o);return e}function d(){const{minBreakpoint:e}=(0,n.useContext)(o);return e}},26861:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjM0NjYgMC45SDkuNTYwNTdDNi43NjA4OCAwLjkgNC41MDE4IDMuMDk2NDkgNC41MDE4IDUuNzk1MjlWOC41NDY1NEgxLjY1MzM1QzEuMjM0NDggOC41NDY1NCAwLjkgOC44NjE5MiAwLjkgOS4yNjIxNVYxMy40NDE4QzAuOSAxMy44NDIxIDEuMjM0NDggMTQuMTU3NCAxLjY1MzM1IDE0LjE1NzRINC41MDE4VjIyLjM2ODJDNC41MDE4IDIyLjc4MTMgNC44MzI4NCAyMy4xIDUuMjM4NCAyMy4xSDkuNTYwNTdDOS45NjYxMyAyMy4xIDEwLjI5NzIgMjIuNzgxMyAxMC4yOTcyIDIyLjM2ODJWMTQuMTU3NEgxMy4xNDU2QzEzLjU0NiAxNC4xNTc0IDEzLjg5OSAxMy44NDM3IDEzLjg5OSAxMy40NDE4VjkuMjYyMTVDMTMuODk5IDguODYwMzEgMTMuNTQ2IDguNTQ2NTQgMTMuMTQ1NiA4LjU0NjU0SDEwLjI5NzJWNi41MjcxSDEzLjM0NjZDMTMuNzY4OSA2LjUyNzEgMTQuMSA2LjE5MjIxIDE0LjEgNS43OTUyOVYxLjYzMTgxQzE0LjEgMS4yMTcwNCAxMy43NjcyIDAuOSAxMy4zNDY2IDAuOVpNOC44MDcyMiAxMy40NDE4VjIxLjYzNjRINS45OTE3NVYxMy40NDE4QzUuOTkxNzUgMTMuMDI3MSA1LjY1OSAxMi43MSA1LjIzODQgMTIuNzFIMi40MDY3VjkuOTkzOTZINS4yMzg0QzUuNjU5IDkuOTkzOTYgNS45OTE3NSA5LjY3NjkyIDUuOTkxNzUgOS4yNjIxNVY1Ljc5NTI5QzUuOTkxNzUgMy44OTM0MSA3LjU4NTU1IDIuMzQ3NDIgOS41NjA1NyAyLjM0NzQySDEyLjYxMDFWNS4wNjM0OEg5LjU2MDU3QzkuMTM5OTcgNS4wNjM0OCA4LjgwNzIyIDUuMzgwNTIgOC44MDcyMiA1Ljc5NTI5VjkuMjYyMTVDOC44MDcyMiA5LjY3NjkyIDkuMTM5OTcgOS45OTM5NiA5LjU2MDU3IDkuOTkzOTZIMTIuMzkyM1YxMi43MUg5LjU2MDU3QzkuMTM5OTcgMTIuNzEgOC44MDcyMiAxMy4wMjcxIDguODA3MjIgMTMuNDQxOFoiIGZpbGw9IiNGRkZCRjUiIHN0cm9rZT0iI0ZGRkJGNSIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KPC9zdmc+Cg=="},32921:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI3Nl8xMTk1KSI+CjxwYXRoIGQ9Ik0xNi4xNjE5IC0wLjFINS44MzgwOEMyLjU2Njg5IC0wLjEgLTAuMSAyLjU2OSAtMC4xIDUuODQyNDZWMTYuMTc0Qy0wLjEgMTkuNDQ3OSAyLjU2NzI2IDIyLjEgNS44MzgwOCAyMi4xSDE2LjE2MTlDMTkuNDMyNyAyMi4xIDIyLjEgMTkuNDQ3OSAyMi4xIDE2LjE3NFY1Ljg0MjQ2QzIyLjEgMi41NjkgMTkuNDMzMSAtMC4xIDE2LjE2MTkgLTAuMVpNMTYuMTYxOSAyMC42NDU3SDUuODM4MDhDMy4zNzAzOCAyMC42NDU3IDEuMzY5ODcgMTguNjI3NyAxLjM2OTg3IDE2LjE3NFY1Ljg0MjQ2QzEuMzY5ODcgMy4zNzIwMiAzLjM3MDYxIDEuMzU0MzEgNS44MzgwOCAxLjM1NDMxSDE2LjE2MTlDMTguNjI5NCAxLjM1NDMxIDIwLjYzMDEgMy4zNzIwMiAyMC42MzAxIDUuODQyNDZWMTYuMTc0QzIwLjYzMDEgMTguNjI3NyAxOC42Mjk2IDIwLjY0NTcgMTYuMTYxOSAyMC42NDU3WiIgZmlsbD0iI0ZGRkJGNSIgc3Ryb2tlPSIjRkZGQkY1IiBzdHJva2Utd2lkdGg9IjAuMiIvPgo8cGF0aCBkPSJNMTEuMDAwMSA0LjcxOTA5QzcuNTMwOTkgNC43MTkwOSA0LjcxNTY3IDcuNTM2NjMgNC43MTU2NyAxMS4wMDgxQzQuNzE1NjcgMTQuNDggNy41MzEzNCAxNy4yODA3IDExLjAwMDEgMTcuMjgwN0MxNC40NjkgMTcuMjgwNyAxNy4yODQ1IDE0LjQ2MzMgMTcuMjg0NSAxMS4wMDgxQzE3LjI4NDUgNy41NTMzMSAxNC40NjkzIDQuNzE5MDkgMTEuMDAwMSA0LjcxOTA5Wk0xMS4wMDAxIDE1LjgyNjRDOC4zMzQ0NiAxNS44MjY0IDYuMTg1NTQgMTMuNjU5OSA2LjE4NTU0IDExLjAwODFDNi4xODU1NCA4LjM1NTk3IDguMzM0ODkgNi4xNzM0MSAxMS4wMDAxIDYuMTczNDFDMTMuNjY1NSA2LjE3MzQxIDE1LjgxNDYgOC4zMzk2OCAxNS44MTQ2IDExLjAwODFDMTUuODE0NiAxMy42NzU5IDEzLjY0OTYgMTUuODI2NCAxMS4wMDAxIDE1LjgyNjRaIiBmaWxsPSIjRkZGQkY1IiBzdHJva2U9IiNGRkZCRjUiIHN0cm9rZS13aWR0aD0iMC4yIi8+CjxwYXRoIGQ9Ik0xOC43NTEyIDMuMjUxMjNDMTguMzcxOSAyLjg3MTYzIDE3Ljg2MDYgMi42NzM1OCAxNy4zMzI5IDIuNjczNThDMTYuMjI4IDIuNjczNTggMTUuMzM3NCAzLjU2NDgxIDE1LjMzNzQgNC42NTQwOEMxNS4zMzc0IDUuNzQzMzUgMTYuMjI4IDYuNjUxMDggMTcuMzMyOSA2LjY1MTA4QzE4LjQzNzkgNi42NTEwOCAxOS4zMjg0IDUuNzU5ODYgMTkuMzI4NCA0LjY1NDA4QzE5LjMyODQgNC4xMjU5NSAxOS4xMzA1IDMuNjMwODIgMTguNzUxMiAzLjI1MTIzWk0xNy4zMzI5IDUuMzk2NzZDMTYuOTM3MSA1LjM5Njc2IDE2LjYwNzMgNS4wNjY2OCAxNi42MDczIDQuNjU0MDhDMTYuNjA3MyA0LjI0MTQ4IDE2LjkzNzEgMy45Mjc5IDE3LjMzMjkgMy45Mjc5QzE3LjcyODcgMy45Mjc5IDE4LjA3NSA0LjI1Nzk4IDE4LjA3NSA0LjY1NDA4QzE4LjA3NSA1LjA1MDE4IDE3Ljc0NTIgNS4zOTY3NiAxNy4zMzI5IDUuMzk2NzZaIiBmaWxsPSIjRkZGQkY1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjc2XzExOTUiPgo8cmVjdCB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},10434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=bcc0bdc285b204f086c7c47bd8f2701ff1602861-6232ff3144087c7dc79d.js.map