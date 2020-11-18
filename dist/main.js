(()=>{"use strict";var e={434:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"/*\n  http://meyerweb.com/eric/tools/css/reset/\n  v2.0 | 20110126\n  License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]);const a=r},890:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"body {\n    max-width: 1200px;\n    margin: 0 auto;\n    /* background-color: #353531;\n    background-image: linear-gradient(to top, #353531 75%, #ec4e20 25%); */\n  }\n  \n\n.modasl {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  }\n  \n  .modal-content {\n    display: flex;\n    justify-content: space-between;\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: fit-content; /* Could be more or less, depending on screen size */\n  }\n  \n  .exit-modal {\n    align-self: flex-end;\n    margin-top: 9%;\n  }",""]);const a=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],r=0;r<e.length;r++){var c=e[r],d=n.base?c[0]+n.base:c[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=i(s),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:s,updater:h(m,n),references:1}),o.push(s)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function h(e,n){var t,o,r;if(n.singleton){var a=f++;t=p||(p=d(n)),o=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=d(n),o=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=i(t[o]);a[r].references--}for(var d=c(e,n),l=0;l<t.length;l++){var s=i(t[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=d}}}}},n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(434);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=t(890);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const a=document.querySelector(".modasl"),i=document.querySelector(".exit-modal"),c=document.querySelector(".modal-content"),d=document.createElement("p");document.addEventListener("keydown",(e=>{const{keyCode:n}=e;27===n&&(a.style.display="none")}));const l=e=>Math.round(e-273.15),s=(document.getElementById("form"),document.getElementById("city-input")),u=document.getElementById("country"),m=document.getElementById("day"),p=document.getElementById("month"),f=document.getElementById("city"),h=document.getElementById("description"),y=document.getElementById("temperature"),b=document.getElementById("submit"),g=document.getElementById("feels_like"),v=document.getElementById("humidity"),w=document.getElementById("pressure"),x=document.getElementById("temp_max"),k=document.getElementById("temp_min"),E=new Date,C=E.getDate(),B=E.getMonth(),I=document.getElementById("song");b.addEventListener("click",(e=>{e.preventDefault(),(async e=>{try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=5293324763a8d47157a1f33e0d7b8d86`,{mode:"cors"}),t=await n.json();if("404"===t.cod)throw new Error("Yeah... Sorry");return console.log("Data.cod"),t}catch(e){a.style.display="block",d.textContent="City not found!",c.append(d,i),i.addEventListener("click",(()=>{a.style.display="none"}))}})(s.value).then((e=>{f.textContent=e.name,y.textContent=l(e.main.temp),u.textContent=e.sys.country,g.textContent=l(e.main.feels_like),w.textContent=l(e.main.pressure),v.textContent=l(e.main.humidity),x.textContent=l(e.main.temp_max),k.textContent=l(e.main.temp_min),m.textContent=C,p.textContent=(e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e])(B),h.textContent=e.weather[0].description,console.log("response")})),(async()=>{const e=await(async()=>{const e=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa("cff280b633eb4f439ae1a66233be8bf0:bce8dd6a0cc84cccaa31c1045bac6f85")},body:"grant_type=client_credentials"});return(await e.json()).access_token})(),n=await(async(e,n)=>{const t=await fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DWTyiBJ6yEqeu/tracks?limit=10",{method:"GET",headers:{Authorization:"Bearer "+e}});return(await t.json()).items})(e);return n.forEach((e=>console.log(e.track.name))),n})().then((e=>{I.textContent=e[0].track.name}))}))})()})();