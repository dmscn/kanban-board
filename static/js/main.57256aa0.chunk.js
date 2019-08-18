(window["webpackJsonpkanban-board"]=window["webpackJsonpkanban-board"]||[]).push([[0],{28:function(n,e,t){n.exports=t(42)},33:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"addTask",function(){return E}),t.d(r,"removeTask",function(){return T}),t.d(r,"moveTask",function(){return D});var a={};t.r(a),t.d(a,"BASE_URL",function(){return V}),t.d(a,"getTasks",function(){return K}),t.d(a,"createTask",function(){return H}),t.d(a,"updateTaskColumn",function(){return J}),t.d(a,"deleteTask",function(){return M});var o=t(0),c=t.n(o),i=t(19),u=t.n(i),s=(t(33),t(2)),l=t.n(s),p=t(4),f=t(7),d=t(10),b=t(24),m=t(5),g=t(6);function v(){var n=Object(m.a)(["\n  box-sizing: border-box;\n  width: ",";\n  height: ",";\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  margin-top: ","px;\n  margin-bottom: ","px;\n  margin-left: ","px;\n  margin-right: ","px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  background-color: ",";\n  border: ",";\n  border-radius: ","px;\n"]);return v=function(){return n},n}var h=g.a.div(v(),function(n){return n.width&&"".concat(n.width,"px")||n.full&&"100%"},function(n){return n.height&&"".concat(n.height,"px")||n.full&&"100%"},function(n){return n.full&&1},function(n){return n.column?"column":"row"},function(n){return n.justify||n.center&&"center"},function(n){return n.align||n.center&&"center"},function(n){return n.margin||n.marginVertical},function(n){return n.margin||n.marginVertical},function(n){return n.margin||n.marginHorizontal},function(n){return n.margin||n.marginHorizontal},function(n){return n.padding||n.paddingVertical},function(n){return n.padding||n.paddingVertical},function(n){return n.padding||n.paddingHorizontal},function(n){return n.padding||n.paddingHorizontal},function(n){return n.bg},function(n){return n.border&&"1px solid ".concat(n.border)},function(n){return n.borderRadius}),x=t(25),O=t(8);function j(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function w(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?j(t,!0).forEach(function(e){Object(O.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):j(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var y=function(n,e){var t=e.task;return w({},n,Object(O.a)({},t.column,[t].concat(Object(x.a)(n[t.column]))))},k=function(n,e){var t=e.task,r=e.column,a=n[r].filter(function(n){return n.id!==t.id});return w({},n,Object(O.a)({},r,a))},E=function(n){return{type:"board/ADD_TASK",payload:{task:n}}},T=function(n){return{type:"board/DELETE_TASK",payload:{task:n,column:n.column}}},D=function(n){return{type:"board/MOVE_TASK",payload:n}},P=c.a.createContext(),C=function(n,e){switch(e.type){case"board/ADD_TASK":return y(n,e.payload);case"board/DELETE_TASK":return k(n,e.payload);case"board/MOVE_TASK":return function(n,e){var t,r=e.task,a=e.from,o=e.to,c=k(n,{task:r,column:a})[a],i=y(n,{task:r,column:o})[o];return w({},n,(t={},Object(O.a)(t,a,c),Object(O.a)(t,o,i),t))}(n,e.payload);default:return n}};function S(){var n=Object(m.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  padding: 16px;\n  border-radius: 5px;\n  background: ",";\n  opacity: ",";\n  cursor: ",";\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\n  &:active {\n    cursor: grabbing;\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),\n      0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  button {\n    background-color: transparent;\n    border: none;\n    outline: none;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]);return S=function(){return n},n}var A=["#e0e0e0","#fdd835","#f44336","#8bc34a","#2196f3","#9c27b0","#f06292","#ffa726","#a1887f","#90a4ae"],L=g.a.div(S(),function(n){return n.color},function(n){return n.dragging||n.disabled?.5:1},function(n){return n.disabled?"not-allowed":"grab"}),R=function(n){var e=n.children,t=n.card,r=n.onRemove,a=Object(o.useState)(!1),i=Object(f.a)(a,2),u=i[0],s=i[1],l=Object(d.c)({item:{type:"Card",column:n.column,position:n.position,element:n.card},collect:function(n){return{isDragging:!!n.isDragging()}}}),p=Object(f.a)(l,2),b=p[0].isDragging,m=p[1],g=t.id&&t.id.match(/\d+/g)||[],v=A[+g.join().slice(-1)||0];return c.a.createElement(L,{ref:m,dragging:b,color:v,disabled:u},e,c.a.createElement("button",{onClick:function(){s(!0),r(t)}},"\xd7"))};function _(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function z(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(t,!0).forEach(function(e){Object(O.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var V="https://us-central1-generic-db2c3.cloudfunctions.net",K=function(){var n=Object(p.a)(l.a.mark(function n(){var e;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.info("Fetching tasks from server..."),n.prev=1,n.next=4,fetch("".concat(V,"/getTasks"));case 4:return e=n.sent,console.info("Response from server: ",e),n.next=8,e.json();case 8:return n.abrupt("return",n.sent);case 11:throw n.prev=11,n.t0=n.catch(1),new Error(n.t0.message);case 14:case"end":return n.stop()}},n,null,[[1,11]])}));return function(){return n.apply(this,arguments)}}(),H=function(){var n=Object(p.a)(l.a.mark(function n(e){var t;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.info("Creating new task on the server..."),n.prev=1,n.next=4,fetch("".concat(V,"/addTask"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({task:e})});case 4:return t=n.sent,console.info("Response from server:",t),n.next=8,t.json();case 8:return n.abrupt("return",n.sent);case 11:throw n.prev=11,n.t0=n.catch(1),new Error(n.t0.message);case 14:case"end":return n.stop()}},n,null,[[1,11]])}));return function(e){return n.apply(this,arguments)}}(),J=function(){var n=Object(p.a)(l.a.mark(function n(e,t){var r,a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.info("Updating task column on server..."),r=z({},e,{column:t.toLocaleLowerCase()}),n.prev=2,n.next=5,fetch("".concat(V,"/updateTask"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({task:r})});case 5:return a=n.sent,console.info("Response from server:",a),n.next=9,a.json();case 9:return n.abrupt("return",n.sent);case 12:throw n.prev=12,n.t0=n.catch(2),new Error(n.t0.message);case 15:case"end":return n.stop()}},n,null,[[2,12]])}));return function(e,t){return n.apply(this,arguments)}}(),M=function(){var n=Object(p.a)(l.a.mark(function n(e){var t;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.info("Deleting task on server..."),n.prev=1,n.next=4,fetch("".concat(V,"/deleteTask?id=").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return t=n.sent,console.info("Response from the server:",t),n.next=8,t.json();case 8:return n.abrupt("return",n.sent);case 11:throw n.prev=11,n.t0=n.catch(1),new Error(n.t0.message);case 14:case"end":return n.stop()}},n,null,[[1,11]])}));return function(e){return n.apply(this,arguments)}}(),N=function(n){var e=Object(o.useContext)(P),t=e.state,i=e.dispatch,u=t[n.title.toLowerCase()],s=Object(d.d)({accept:"Card",drop:function(){var e=Object(p.a)(l.a.mark(function e(t){var o,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.column===n.title){e.next=6;break}return e.next=3,a.updateTaskColumn(t.element,n.title.toLowerCase());case 3:o=e.sent,c=r.moveTask({task:o,from:t.column.toLowerCase(),to:n.title.toLowerCase()}),i(c);case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}),b=Object(f.a)(s,2)[1],m=function(){var n=Object(p.a)(l.a.mark(function n(e){return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.deleteTask(e.id);case 2:i(r.removeTask(e));case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();return c.a.createElement(h,{ref:b,column:!0,bg:"whitesmoke",border:"gainsboro",borderRadius:3,padding:20,width:300},c.a.createElement("span",null,n.title),u&&u.map(function(e,t){return c.a.createElement(h,{marginVertical:15,key:"".concat(n.title,"-").concat(e.id,"__").concat(Math.random())},c.a.createElement(R,{column:n.title,position:t,card:e,onRemove:m},e.text))}))};function B(){var n=Object(m.a)(["\n  box-sizing: border-box;\n  outline: none;\n  background-color: whitesmoke;\n  padding: 10px;\n  width: 250px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n\n  &:hover,\n  &:active,\n  &:focus {\n    border-color: gainsboro;\n  }\n"]);return B=function(){return n},n}var U=g.a.input(B()),F=function(){var n=Object(o.useContext)(P),e=(n.state,n.dispatch),t=Object(o.useRef)(null),i=function(){var n=Object(p.a)(l.a.mark(function n(o){var c;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o.preventDefault(),n.next=3,a.createTask({text:t.current.value,column:"todo"});case 3:c=n.sent,t.current.value="",c&&e(r.addTask(c));case 6:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();return c.a.createElement(h,{column:!0},c.a.createElement(h,{justify:"flex-end",padding:10},c.a.createElement("form",{onSubmit:i},c.a.createElement(U,{ref:t,placeholder:"New task..."}))),c.a.createElement(h,null,c.a.createElement(h,{column:!0,margin:10},c.a.createElement(N,{title:"Todo"})),c.a.createElement(h,{column:!0,margin:10},c.a.createElement(N,{title:"Doing"})),c.a.createElement(h,{column:!0,margin:10},c.a.createElement(N,{title:"Done"}))))};function I(){var n=Object(m.a)(["\n  left: 45px;\n  animation-delay: 0;\n"]);return I=function(){return n},n}function q(){var n=Object(m.a)(["\n  left: 26px;\n  animation-delay: -0.12s;\n"]);return q=function(){return n},n}function G(){var n=Object(m.a)(["\n  left: 6px;\n  animation-delay: -0.24s;\n"]);return G=function(){return n},n}function Q(){var n=Object(m.a)(["\n  display: inline-block;\n  position: absolute;\n  left: 6px;\n  width: 13px;\n  background-color: dimgray;\n  animation: loadingAnimation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  @keyframes loadingAnimation {\n    0% {\n      top: 6px;\n      height: 51px;\n    }\n    50%,\n    100% {\n      top: 19px;\n      height: 26px;\n    }\n  }\n"]);return Q=function(){return n},n}function W(){var n=Object(m.a)(["\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n"]);return W=function(){return n},n}var X=g.a.div(W()),Y=g.a.div(Q()),Z=Object(g.a)(Y)(G()),$=Object(g.a)(Y)(q()),nn=Object(g.a)(Y)(I()),en=function(){return c.a.createElement(X,null,c.a.createElement(Z,null)," ",c.a.createElement($,null)," ",c.a.createElement(nn,null))},tn=function(){return c.a.createElement(h,{full:!0,center:!0,column:!0},c.a.createElement("span",null,"Loading..."),c.a.createElement(h,{marginVertical:10},c.a.createElement(en,null)))},rn={todo:[],doing:[],done:[]},an=function(){var n=Object(o.useState)(!0),e=Object(f.a)(n,2),t=e[0],i=e[1],u=Object(o.useReducer)(C,rn),s=Object(f.a)(u,2),m=s[0],g=s[1];return Object(o.useEffect)(function(){(function(){var n=Object(p.a)(l.a.mark(function n(){return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.getTasks();case 2:n.sent.forEach(function(n){g(r.addTask(n))}),i(!1);case 5:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}})()()},[]),t?c.a.createElement(tn,null):c.a.createElement(h,{full:!0,center:!0},c.a.createElement(d.b,{backend:b.a},c.a.createElement(P.Provider,{value:{state:m,dispatch:g}},c.a.createElement(F,null))))};u.a.render(c.a.createElement(an,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.57256aa0.chunk.js.map