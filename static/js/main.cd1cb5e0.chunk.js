(window.webpackJsonptest=window.webpackJsonptest||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),i=(n(16),n(4)),u=function(e){return{type:"INCREMENT",payload:e}},l=function(e){return{type:"DECREMENT",payload:e}};var s=function(){var e=Object(i.c)(function(e){return e.counter}),t=Object(i.c)(function(e){return e.isLogged}),n=Object(i.b)();return o.a.createElement("div",{className:"App m-5"},o.a.createElement("h1",{className:"text-dark"},"Redux Counter: ",e),o.a.createElement("button",{className:"btn btn-primary mx-5",onClick:function(){return n(u(5))}},"+"),o.a.createElement("button",{className:"btn btn-danger",onClick:function(){return n(l(5))}},"-"),t?o.a.createElement("h2",null,"Sensitive information"):"")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=n(3),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.payload;case"DECREMENT":return e-t.payload;default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!e;default:return e}},w=Object(d.b)({counter:E,isLogged:m}),p=Object(d.c)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(o.a.createElement(i.a,{store:p},o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.cd1cb5e0.chunk.js.map