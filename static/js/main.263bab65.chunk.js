(this.webpackJsonpminimal_react_pwa=this.webpackJsonpminimal_react_pwa||[]).push([[0],{13:function(e,n,t){e.exports=t(24)},18:function(e,n,t){},22:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),a=t(7),i=t.n(a),c=(t(18),t(12)),l=t(10),s=t(11),u=t(8),d=t.n(u),f=(t(22),t(5)),h=t.n(f),p=t(9),m=function(){var e=Object(p.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos/".concat(n)).then((function(e){return e.json()})).catch((function(e){return console.error("Error while retrieving the todo from the test API!",e),{id:-1,number:n}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.useState)(),n=Object(c.a)(e,2),t=n[0],a=n[1],i=function(){a({id:-2});var e=Math.floor(10*Math.random())+1;m(e).then((function(e){return a(e)}))};Object(o.useEffect)((function(){return i()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"socialBanner"},r.a.createElement(s.a,{screenName:"coding_max"}),r.a.createElement(l.a,{href:"https://github.com/mjoellnier","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large","aria-label":"Follow @mjoellnier on GitHub",style:{float:"right"}},"Follow @mjoellnier")),r.a.createElement("div",{id:"app-wrapper",style:{backgroundImage:"url(".concat(d.a,")")}},function(){if(t)switch(t.id){case-2:return r.a.createElement("div",{className:"loader"});case-1:return r.a.createElement("p",null,"You're offline and tried to fetch the id ",t.number," which was not prechached!");default:return r.a.createElement("p",null,"Todo ",t.id," was fetched from the"," ",r.a.createElement("a",{href:"https://jsonplaceholder.typicode.com/",target:"_blank",rel:"noopener noreferrer"},"API"),"!")}return r.a.createElement("div",{className:"loader"})}(),r.a.createElement("input",{id:"todoButton",onClick:i,type:"button",value:"Get Todo"})))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/minimal_react_pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/minimal_react_pwa","/sw.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")):v(n,e)}))}}()},8:function(e,n,t){e.exports=t.p+"static/media/background.dbbfcb88.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.263bab65.chunk.js.map