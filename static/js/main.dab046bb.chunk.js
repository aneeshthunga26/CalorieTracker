(this["webpackJsonpcalorie-app"]=this["webpackJsonpcalorie-app"]||[]).push([[0],{32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(22),i=n.n(r),o=(n(32),n(2)),l=n(26),d=n(4),s=n(3),j=Object(a.createContext)(void 0),b=n(10),u=n(1);function p(e){var t=e.consumed,n=e.target,c=Object(a.useState)(""),r=Object(b.a)(c,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){o(function(e,t){var n=(new Date).toLocaleString("en-us",{weekday:"long"});if(void 0!==e&&void 0!==t)return"".concat(n," ").concat(e," / ").concat(t," (KCals)");if(void 0!==e)return"".concat(n," ").concat(e," (KCals)");return n}(t,n))}),[t,n]),i}var O,x,v,h,f,g,y,m,C,k=function(e){var t=p(e);return Object(u.jsx)("span",{children:Object(u.jsx)("label",{children:t})})},w=s.a.header(O||(O=Object(o.a)(["\n  border-radius: 15px;\n  background: rgba(0, 0, 30, 0.7);\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]))),S=function(){var e=Object(a.useContext)(j).appState;return Object(u.jsxs)(w,{className:"App-header",children:[Object(u.jsx)("div",{children:"Calorie Tracker"}),Object(u.jsx)(k,{consumed:e.totalCalories,target:e.targetCalories})]})},A=n(42),T=s.a.input(x||(x=Object(o.a)(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: black;\n  margin: 0.5em;\n  padding: 0.75em;\n"]))),E=s.a.button(v||(v=Object(o.a)(["\n  background: #4b4c61;\n  border-radius: 5px;\n  border: 2px solid #4b4c61;\n  color: white;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"]))),I=function(){var e=Object(a.useContext)(j).dispatch,t=Object(a.useState)(void 0),n=Object(b.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(void 0),o=Object(b.a)(i,2),l=o[0],d=o[1],s=Object(a.useState)(void 0),p=Object(b.a)(s,2),O=p[0],x=p[1];return Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),void 0!==l&&void 0!==c){var n={id:Object(A.a)(),time:new Date,calories:l,item:c};e({type:"add-entry",payload:{entry:n,calorieAction:{type:"add-calorie",payload:l}}}),d(void 0),r(void 0)}void 0!==O&&(e({type:"set-target",payload:O}),x(void 0))},children:[Object(u.jsxs)("span",{children:[Object(u.jsx)(T,{placeholder:"Enter Food Item",value:c||"",onChange:function(e){r(e.currentTarget.value)}}),Object(u.jsx)(T,{placeholder:"Enter Calories",value:l?"".concat(l):"",onChange:function(e){var t=parseInt(e.currentTarget.value);d(t)}}),Object(u.jsx)(T,{placeholder:"Enter Target (KCals)",value:O?"".concat(O):"",onChange:function(e){var t=parseInt(e.currentTarget.value);x(t)}})]}),Object(u.jsx)("div",{children:Object(u.jsx)(E,{children:"+"})})]})},D=s.a.li(h||(h=Object(o.a)(["\n  list-style-type: none;\n  padding: 2px 2px;\n"]))),K=s.a.span(f||(f=Object(o.a)(["\n  background: ",";\n  border-radius: 5px;\n  height: 50px;\n  text-align: left;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n"])),(function(e){return e.index%2===0?"rgba(130,130,160,0.3)":"rgba(255,255,255,0.3)"})),F=s.a.label(g||(g=Object(o.a)(["\n  padding-left: 10px;\n  flex: 3;\n"]))),J=s.a.label(y||(y=Object(o.a)(["\n  flex: 2;\n"]))),L=s.a.label(m||(m=Object(o.a)(["\n  flex: 2;\n"]))),M=Object(s.a)(E)(C||(C=Object(o.a)(["\n  flex: 1;\n"])));var N,R,z,B,H,P,U,q=function(e){var t,n=Object(a.useContext)(j).dispatch;return Object(u.jsx)(D,{children:Object(u.jsxs)(K,{index:e.index,children:[Object(u.jsx)(F,{children:(t=e.value.item,t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}),Object(u.jsx)(L,{children:e.value.calories}),Object(u.jsx)(J,{children:"".concat(e.value.time.getHours(),":").concat(e.value.time.getMinutes())}),Object(u.jsx)(M,{onClick:function(){n({type:"remove-entry",payload:{id:e.value.id,calorieAction:{type:"subtract-calorie",payload:e.value.calories}}})},children:"Remove"})]})},e.value.id)},G=s.a.li(N||(N=Object(o.a)(["\n  list-style-type: none;\n  padding: 7px 2px;\n"]))),Q=s.a.span(R||(R=Object(o.a)(["\n  color: white;\n  background: rgba(0, 0, 30, 0.7);\n  border-radius: 10px;\n  height: 40px;\n  text-align: left;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),V=s.a.label(z||(z=Object(o.a)(["\n  padding-left: 10px;\n  flex: 3;\n"]))),W=s.a.label(B||(B=Object(o.a)(["\n  flex: 2;\n"]))),X=s.a.label(H||(H=Object(o.a)(["\n  flex: 2;\n"]))),Y=Object(s.a)(E)(P||(P=Object(o.a)(["\n  flex: 1;\n  visibility: hidden;\n"]))),Z=function(){return Object(u.jsx)(G,{children:Object(u.jsxs)(Q,{children:[Object(u.jsx)(V,{children:"Food"}),Object(u.jsx)(X,{children:"Calories"}),Object(u.jsx)(W,{children:"Time"}),Object(u.jsx)(Y,{children:"  "})]})},-1)},$=s.a.ul(U||(U=Object(o.a)(["\n  padding-left: 0;\n"]))),_=function(){var e=Object(a.useContext)(j).appState;return Object(u.jsxs)("div",{children:[Object(u.jsxs)($,{children:[e.items.length>0&&Object(u.jsx)(Z,{}),e.items.map((function(e,t){return Object(u.jsx)(q,{value:e,index:t},t)}))]}),Object(u.jsx)(I,{})]})},ee=n(8);function te(e,t){switch(t.type){case"add-calorie":return Object(ee.a)(Object(ee.a)({},e),{},{totalCalories:e.totalCalories?e.totalCalories+t.payload:t.payload});case"subtract-calorie":return Object(ee.a)(Object(ee.a)({},e),{},{totalCalories:e.totalCalories?e.totalCalories-t.payload:0});default:return t.type}}var ne=n(27);function ae(e,t){var n=t.type;return"add-calorie"===n||"subtract-calorie"===n?te(e,t):"add-entry"===n||"remove-entry"===n?function(e,t){switch(t.type){case"add-entry":return e=te(e,t.payload.calorieAction),Object(ee.a)(Object(ee.a)({},e),{},{items:[].concat(Object(ne.a)(e.items),[t.payload.entry])});case"remove-entry":return e=te(e,t.payload.calorieAction),Object(ee.a)(Object(ee.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload.id}))});default:return t}}(e,t):"set-target"===n?function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{targetCalories:t.payload})}(e,t):e}var ce,re,ie=s.a.section(ce||(ce=Object(o.a)(["\n  height: 100vh;\n  display: flex;\n  padding: 0 3%;\n  align-items: center;\n  justify-content: center;\n"]))),oe=s.a.div(re||(re=Object(o.a)(["\n  width: 90vh;\n  border-radius: 1em;\n  padding: 0.5% 0.5%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(20px);\n"])));var le=function(){var e=function(e){var t=Object(a.useReducer)(ae,e),n=Object(b.a)(t,2);return{appState:n[0],dispatch:n[1]}}({items:[],totalCalories:void 0,targetCalories:void 0});return Object(u.jsx)(l.a,{children:Object(u.jsx)(ie,{className:"App",children:Object(u.jsx)(j.Provider,{value:e,children:Object(u.jsxs)(oe,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(d.c,{children:Object(u.jsx)(d.a,{exact:!0,path:"/",children:Object(u.jsx)(_,{})})})]})})})})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(le,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dab046bb.chunk.js.map