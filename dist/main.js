(()=>{"use strict";var n={434:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"/*\n  http://meyerweb.com/eric/tools/css/reset/\n  v2.0 | 20110126\n  License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]);const i=r},890:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"body {\n    /* max-width: 1200px; */\n    margin: 0 auto;\n    /* background-color: #353531;\n    background-image: linear-gradient(to top, #232525 75%, (30,215,96) 25%); */\n  }\n\n  \nnav {\n  display: flex;\n  flex-direction: row;\n  background-color: #232525;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n#form {\n  align-self: center;\n}\n\n.logoCont {\n\n}\n\n.logo {\n  width: 100px;\n\n}\n.logoCont span{\n  font-size: 30px;\n  font-weight: bold;\n  color: rgba(30,215,96,0.8);\n  border-color: rgba(30,215,96,0.7);\n}\n\n#city-input{\n  margin-right: 1em;\n  min-width: 100px;\n}\n\n#submit {\n  color: rgba(30,215,96,0.8);\n  border-color: rgba(30,215,96,0.7);\n}\n#submit:hover {\n  background-color: rgba(30,215,96,0.7);\n  color: white;\n}\n\n\n\nmain {\n  background-image: url('https://openw3.com/wp-content/uploads/2013/02/silverback-gorilla-leaves-africa.jpg');\n  background-position: center; /* Center the image */\nbackground-repeat: repeat; /* Do not repeat the image */\nbackground-size: cover;\nmin-height: -webkit-fill-available;\njustify-content: space-between;\n}\n\n.weather-box, .song-box {\n  background-color: white;\n  border-radius: 5px;\n  padding: 5%;\n  opacity: 0.9;\n}\n\n.songCont {\n  display: flex;\n    flex-direction: column;\n}\n\n.songCont img {\n  width: 40px;\n}\n\n.song-box {\n\n}\n\n.song {\n  display: flex;\n  margin-top: 1em;\n}\n.song li {\n  margin-left: 0.5em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n}\n\n\n/* Slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 42px;\n  height: 25px;\n}\n\n.convert span {\n  color: white;\n  font-weight: bold;\n  opacity: 0.9;\n}\n\n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: rgba(30,215,96,0.8)\n  ;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(18px);\n  -ms-transform: translateX(18px);\n  transform: translateX(18px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* end of slider */\n\n/* modal */\n.modalBox {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  }\n  \n  .modal-content {\n    display: flex;\n    justify-content: space-between;\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: fit-content; /* Could be more or less, depending on screen size */\n  }\n  \n  .exit-modal {\n    align-self: flex-end;\n    margin-top: 9%;\n  }\n\n  .loadCont {\n    background-color: red;\n    width: fit-content;\n    height: fit-content;\n  }\n\n\n.loader {\n  width : 80px;\n  height: 80px;\n  border: 16px solid white;\n  border-top:16px solid rgba(30,215,96,0.7);\n  border-radius: 50%;\n  display: none;\n  position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 50%;\n    top: 50%;\n\n  \n}\n\n.spin {\n  animation: spinner 1.5s linear infinite;\n  display: block;\n}\n\n@keyframes spinner {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},570:(n,e,t)=>{n.exports=t.p+"0e95909234178fd7ed68.png"},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var c=n[r],d=e.base?c[0]+e.base:c[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=a(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:h(p,e),references:1}),o.push(s)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,s=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=s(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(n,e){var t,o,r;if(e.singleton){var i=f++;t=m||(m=d(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=d(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var d=c(n,e),l=0;l<t.length;l++){var s=a(t[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=d}}}}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),o=t(434);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=t(890);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,t(570);const i=document.querySelector(".modasl"),a=document.querySelector(".exit-modal"),c=document.querySelector(".modal-content"),d=document.createElement("p");document.addEventListener("keydown",(n=>{const{keyCode:e}=n;27===e&&(i.style.display="none")}));const l=n=>Math.round(n-273.15),s=n=>Math.round(9*n/5+32),u=n=>Math.round(5*(n-32)/9),p=(document.getElementById("form"),document.getElementById("city-input")),m=document.getElementById("country"),f=document.getElementById("day"),h=document.getElementById("month"),g=document.getElementById("city"),b=document.getElementById("description"),y=document.getElementById("submit"),x=document.getElementById("temperature"),v=document.getElementById("feels_like"),w=document.getElementById("humidity"),C=document.getElementById("pressure"),k=document.getElementById("temp_max"),E=document.getElementById("temp_min"),S=document.querySelectorAll(".grades"),B=new Date,q=B.getDate(),j=B.getMonth(),I=(document.querySelector(".slider"),document.querySelector('input[type="checkbox"]')),T=document.querySelector(".loader");I.addEventListener("change",(function(){console.log(I.checked),I.checked?(S.forEach((n=>{n.textContent="ºF"})),x.textContent=s(x.textContent),v.textContent=s(v.textContent),k.textContent=s(k.textContent),E.textContent=s(E.textContent)):(S.forEach((n=>{n.textContent="ºC"})),x.textContent=u(x.textContent),v.textContent=u(v.textContent),k.textContent=u(k.textContent),E.textContent=u(E.textContent))})),y.addEventListener("click",(n=>{n.preventDefault(),I.checked&&I.click(),T.classList.add("spin"),(async n=>{try{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=5293324763a8d47157a1f33e0d7b8d86`,{mode:"cors"}),t=await e.json();if("404"===t.cod)throw new Error("Yeah... Sorry");return t}catch(n){i.style.display="block",d.textContent="City not found!",c.append(d,a),a.addEventListener("click",(()=>{i.style.display="none"}))}})(p.value).then((n=>{!function(){const n=document.querySelector(".loader");function e(){return new Promise((function(n,e){setTimeout((function(){n()}),3e3)}))}n.classList.add("spin"),e(),e().then((function(e){n.classList.remove("spin")}))}(),g.textContent=n.name,m.textContent=n.sys.country,C.textContent=n.main.pressure,w.textContent=n.main.humidity,x.textContent=l(n.main.temp),v.textContent=l(n.main.feels_like),k.textContent=l(n.main.temp_max),E.textContent=l(n.main.temp_min),f.textContent=q,h.textContent=(n=>["January","February","March","April","May","June","July","August","September","October","November","December"][n])(j),b.textContent=n.weather[0].description,T.classList.remove("spin")})),(async()=>{const n=await(async()=>{const n=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa("cff280b633eb4f439ae1a66233be8bf0:bce8dd6a0cc84cccaa31c1045bac6f85")},body:"grant_type=client_credentials"});return(await n.json()).access_token})();return await(async(n,e)=>{const t=await fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DWTyiBJ6yEqeu/tracks?limit=10",{method:"GET",headers:{Authorization:"Bearer "+n}});return(await t.json()).items})(n)})().then((n=>{(()=>{const n=document.querySelector(".songCont");for(;n.firstChild;)n.removeChild(n.firstChild)})(),n.forEach((n=>{(n=>{const e=document.createElement("ul"),t=document.querySelector(".songCont"),o=document.createElement("li"),r=document.createElement("li"),i=document.createElement("img");e.className="song",o.textContent=n.track.name,r.textContent=n.track.artists[0].name,i.src=n.track.album.images[0].url,e.appendChild(i),e.appendChild(o),e.appendChild(r),t.appendChild(e)})(n)}))}))}))})()})();