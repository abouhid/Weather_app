(()=>{"use strict";var n={434:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"/*\n  http://meyerweb.com/eric/tools/css/reset/\n  v2.0 | 20110126\n  License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]);const i=r},890:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"body {\n  /* max-width: 1200px; */\n  margin: 0 auto;\n\n  /* background-color: #353531;\n    background-image: linear-gradient(to top, #232525 75%, (30,215,96) 25%); */\n}\n\nnav {\n  display: flex;\n  flex-direction: row;\n  background-color: #232525;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  padding: 0 3%;\n}\n\n#form {\n  align-self: center;\n}\n\n.logoCont,\n.convert span,\n.quote {\n  cursor: pointer;\n}\n\n.logo {\n  width: 100px;\n}\n\n.logoCont span {\n  font-size: 30px;\n  font-weight: bold;\n  color: rgba(30, 215, 96, 0.8);\n  border-color: rgba(30, 215, 96, 0.7);\n}\n\n#city-input {\n  margin-right: 1em;\n  min-width: 100px;\n  width: 100vh;\n}\n\n#submit {\n  color: rgba(30, 215, 96, 0.8);\n  border-color: rgba(30, 215, 96, 0.7);\n}\n\n#submit:hover {\n  background-color: rgba(30, 215, 96, 0.7);\n  color: white;\n}\n\nmain {\n  background-image: url('https://openw3.com/wp-content/uploads/2013/02/silverback-gorilla-leaves-africa.jpg');\n  background-position: center; /* Center the image */\n  background-repeat: repeat; /* Do not repeat the image */\n  background-size: cover;\n  min-height: -webkit-fill-available;\n  justify-content: space-between;\n  width: 100%;\n  padding: 5% 3%;\n}\n\n.mainCont {\n  display: flex;\n  min-height: -webkit-fill-available;\n}\n\n.quote-box {\n  background-color: #232525;\n  width: 35%;\n  border-right: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 30px;\n  font-weight: bold;\n  color: rgba(30, 215, 96, 0.8);\n  padding: 2%;\n}\n\n.quote-box div {\n  font-family: monospace;\n  text-shadow: 2px 2px black;\n  text-decoration-style: dashed;\n  text-align: center;\n  font-style: italic;\n  line-height: 2.5em;\n  font-size: 19px;\n  padding: 20vh 0;\n  opacity: 0.9;\n}\n\n.welcome-box {\n  color: rgba(30, 215, 96, 0.8);\n  text-shadow: 1px 1px #232525;\n  text-decoration-style: dashed;\n  text-align: center;\n  font-size: 36px;\n  font-style: italic;\n  align-self: center;\n  background-color: white;\n  border-radius: 5px;\n  padding: 5%;\n  opacity: 0.85;\n  height: fit-content;\n  margin: 0 auto;\n}\n\n.welcome-box p {\n  font-size: 26px;\n  margin-top: 1em;\n}\n\n.weather-box,\n.song-box {\n  background-color: white;\n  border-radius: 5px;\n  padding: 3%;\n  opacity: 0.85;\n  height: fit-content;\n  display: none;\n}\n\n.cityCont {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.tempCont {\n  font-size: 30px;\n  text-align: end;\n}\n\n.weather-grid {\n  display: grid;\n  grid-gap: 1.3em;\n  grid-template-columns: 1fr 1fr;\n}\n\n.songCont {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.songCont img {\n  width: 40px;\n}\n\n.song-box h2 {\n  font-size: 19px;\n  font-weight: bold;\n  margin-bottom: 1em;\n  display: grid;\n  grid-template-columns: 0.7fr 0.4fr;\n}\n\n.song {\n  cursor: pointer;\n  display: grid;\n  margin-top: 1em;\n  grid-template-columns: 0.1fr 0.7fr 0.5fr;\n}\n\n.song li {\n  margin-left: 0.5em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n\n/* Slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 42px;\n  height: 25px;\n}\n\n.convert span {\n  color: white;\n  font-weight: bold;\n  opacity: 0.9;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider::before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: rgba(30, 215, 96, 0.8);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider::before {\n  -webkit-transform: translateX(18px);\n  -ms-transform: translateX(18px);\n  transform: translateX(18px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round::before {\n  border-radius: 50%;\n}\n\n/* end of slider */\n\n/* modal */\n.modalBox {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  display: flex;\n  justify-content: space-between;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: fit-content; /* Could be more or less, depending on screen size */\n}\n\n.exit-modal {\n  align-self: flex-end;\n  margin-top: 9%;\n}\n\n.loadCont {\n  background-color: red;\n  width: fit-content;\n  height: fit-content;\n}\n\n.loader {\n  width: 80px;\n  height: 80px;\n  border: 16px solid white;\n  border-top: 16px solid rgba(30, 215, 96, 0.7);\n  border-radius: 50%;\n  display: none;\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 50%;\n  top: 50%;\n}\n\n.spin {\n  animation: spinner 1.5s linear infinite;\n  display: block;\n}\n\n@keyframes spinner {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},o=[],r=0;r<n.length;r++){var d=n[r],l=e.base?d[0]+e.base:d[0],c=t[l]||0,s="".concat(l," ").concat(c);t[l]=c+1;var p=a(s),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:s,updater:f(u,e),references:1}),o.push(s)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,s=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=s(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function u(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,h=0;function f(n,e){var t,o,r;if(e.singleton){var i=h++;t=m||(m=l(e)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=l(e),o=u.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var l=d(n,e),c=0;c<t.length;c++){var s=a(t[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=l}}}}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(434);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=t(890);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const i={cold:["'Cause it's too cold for you here and now' - The Neighbourhood","'And if you feel you're sinking, I will (maybe) jump right over into cold, cold water for you' - Justin Bieber","'Well it's cold, cold, cold, cold inside, darker in the day than the dead of night' - Cage The Elephant","'You're feeling that ice cold, forgetting the good things' - Half alive","On a day like this, the heat, it feel like summer' - Childish Gambino"]},a=()=>i.cold[Math.floor(Math.random()*i.cold.length)],d=document.querySelector(".modalBox"),l=document.querySelector(".exit-modal"),c=document.querySelector(".modal-content"),s=document.createElement("p");document.addEventListener("keydown",(n=>{const{keyCode:e}=n;27===e&&(d.style.display="none")}));const p=n=>Math.round(n-273.15),u=n=>Math.round(9*n/5+32),m=n=>Math.round(5/9*(n-32)),h=document.getElementById("form"),f=document.getElementById("city-input"),g=document.getElementById("country"),b=document.getElementById("day"),y=document.getElementById("month"),x=document.getElementById("city"),v=document.getElementById("description"),w=document.getElementById("submit"),C=document.getElementById("temperature"),k=document.getElementById("feels_like"),E=document.getElementById("humidity"),S=document.getElementById("pressure"),q=document.getElementById("temp_max"),B=document.getElementById("temp_min"),I=document.querySelectorAll(".grades"),M=new Date,j=M.getDate(),z=M.getMonth(),T=document.querySelector('input[type="checkbox"]'),F=document.querySelector(".loader"),L=document.querySelector(".weather-box"),O=document.querySelector(".song-box"),Z=document.querySelector(".welcome-box"),_=document.querySelector(".quote");_.textContent=a(),T.addEventListener("change",(()=>{T.checked?(I.forEach((n=>{n.textContent=" ºF"})),C.textContent=u(C.textContent),k.textContent=u(k.textContent),q.textContent=u(q.textContent),B.textContent=u(B.textContent)):(I.forEach((n=>{n.textContent=" ºC"})),C.textContent=m(C.textContent),k.textContent=m(k.textContent),q.textContent=m(q.textContent),B.textContent=m(B.textContent))})),w.addEventListener("click",(n=>{n.preventDefault(),T.checked&&T.click(),F.classList.add("spin"),(async n=>{try{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=5293324763a8d47157a1f33e0d7b8d86`,{mode:"cors"}),t=await e.json();if(200===t.cod)return t;throw new Error}catch(n){return d.style.display="block",s.textContent="City not found!",c.append(s,l),void l.addEventListener("click",(()=>{d.style.display="none"}))}})(f.value).then((n=>{n&&(x.textContent=n.name,g.textContent=n.sys.country,S.textContent=n.main.pressure,E.textContent=n.main.humidity,C.textContent=p(n.main.temp),k.textContent=p(n.main.feels_like),q.textContent=p(n.main.temp_max),B.textContent=p(n.main.temp_min),b.textContent=j,y.textContent=(n=>["January","February","March","April","May","June","July","August","September","October","November","December"][n])(z),v.textContent=n.weather[0].description)})),(async n=>{let e="";const t=await(async()=>{const n=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("cff280b633eb4f439ae1a66233be8bf0:bce8dd6a0cc84cccaa31c1045bac6f85")}`},body:"grant_type=client_credentials"});return(await n.json()).access_token})();return e=n.textContent>30?"https://api.spotify.com/v1/playlists/37i9dQZF1DX0Uv9tZ47pWo/tracks":n.textContent>20?"https://api.spotify.com/v1/playlists/37i9dQZF1DX9XIFQuFvzM4/tracks":n.textContent>0&&n.textContent<=20?"https://api.spotify.com/v1/playlists/37i9dQZF1DX2pSTOxoPbx9/tracks":"https://api.spotify.com/v1/playlists/37i9dQZF1DX2yvmlOdMYzV/tracks",await(async(n,e)=>{const t=await fetch(`${e}?limit=10`,{method:"GET",headers:{Authorization:`Bearer ${n}`}});return(await t.json()).items})(t,e)})(C).then((n=>{(()=>{const n=document.querySelector(".songCont");for(;n.firstChild;)n.removeChild(n.firstChild)})(),n.forEach((n=>{(n=>{const e=document.createElement("ul"),t=document.querySelector(".songCont"),o=document.createElement("li"),r=document.createElement("li"),i=document.createElement("img");e.className="song",o.textContent=n.track.name,r.textContent=n.track.artists[0].name,i.src=n.track.album.images[0].url,e.appendChild(i),e.appendChild(o),e.appendChild(r),t.appendChild(e)})(n)})),_.textContent=a(),F.classList.remove("spin"),"X"!==x.textContent&&(Z.style.display="none",L.style.display="block",O.style.display="block"),h.reset()}))}))})()})();