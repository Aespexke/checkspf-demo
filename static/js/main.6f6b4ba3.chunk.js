(this["webpackJsonpproject-bell"]=this["webpackJsonpproject-bell"]||[]).push([[0],{61:function(e,t,a){},84:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),c=a.n(s),i=(a(84),a(61),a(38)),o=a.n(i),l=a(37),h=a(52),d=a(153),j=a(146),u=a(144),p=a(152),m=a(100),b=a(142),g=a(68),f=a.n(g),x=a(145),O=a(139),v=a(53),w=a.n(v),S=a(4),k=Object(O.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function y(e){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(" https://www.mecallapi.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){var e=k(),t=Object(n.useState)(),a=Object(l.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(),i=Object(l.a)(c,2),g=i[0],O=i[1],v=function(){var e=Object(h.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y({username:r,password:g});case 3:"accessToken"in(a=e.sent)?w()("Success",a.message,"success",{buttons:!1,timer:2e3}).then((function(e){localStorage.setItem("accessToken",a.accessToken),localStorage.setItem("user",JSON.stringify(a.user)),window.location.href="https://Aespexke.github.io/checkspf-demo/#/profile"})):w()("Failed",a.message,"error");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(b.a,{container:!0,className:e.root,children:[Object(S.jsx)(u.a,{}),Object(S.jsx)(b.a,{item:!0,xs:!1,md:7,className:e.image}),Object(S.jsx)(b.a,{item:!0,xs:12,md:5,component:m.a,elevation:6,square:!0,children:Object(S.jsxs)("div",{className:e.paper,children:[Object(S.jsx)(d.a,{className:e.avatar,children:Object(S.jsx)(f.a,{})}),Object(S.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(S.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:v,children:[Object(S.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",name:"email",label:"Email Address",autoFocus:!0,onChange:function(e){return s(e.target.value)}}),Object(S.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",autoComplete:"Current-password",onChange:function(e){return O(e.target.value)}}),Object(S.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"})]})]})})]})}var T=a(147),I=a(148),J=a(149),B=a(154),E=a(69),L=a(151),P=a(150),q=a(11),F=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},large:{width:e.spacing(20),height:e.spacing(20)}}}));function U(){var e=F(),t=r.a.useState(null),a=Object(l.a)(t,2),n=a[0],s=a[1],c=Boolean(n);JSON.parse(localStorage.getItem("user"));return Object(S.jsxs)("div",{className:e.root,children:[Object(S.jsx)(T.a,{position:"static",children:Object(S.jsxs)(I.a,{children:[Object(S.jsx)(J.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(S.jsx)(P.a,{})}),Object(S.jsx)(x.a,{variant:"h6",className:e.title,children:"Profile"}),Object(S.jsxs)("div",{children:[Object(S.jsx)(J.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(S.jsx)(L.a,{})}),Object(S.jsx)(E.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:function(){s(null)},children:Object(S.jsx)(B.a,{onClick:function(){localStorage.removeItem("accessToken"),window.location.href="/"},children:"Logout"})})]})]})}),Object(S.jsx)(q.a,{children:Object(S.jsx)("div",{class:!0,children:Object(S.jsxs)("ul",{class:"flex-container",children:[Object(S.jsx)("li",{class:"flex-item",children:Object(S.jsx)(j.a,{href:"https://drive.google.com/drive/folders/1f6qUvIU6r8j1eKhPyMh53PBc0V3VhoDv?usp=sharing",children:"\u0e16\u0e31\u0e07\u0e14\u0e31\u0e1a\u0e40\u0e1e\u0e25\u0e34\u0e07"})}),Object(S.jsx)("li",{class:"flex-item",children:Object(S.jsx)(j.a,{href:"https://docs.google.com/spreadsheets/d/1NbcvW6HSECEvWN7a1P4bf3Mna-_JEE8gUSosR6LSmKM/edit?usp=sharing",children:"Smoke Detector"})}),Object(S.jsx)("li",{class:"flex-item",children:Object(S.jsx)(j.a,{href:"https://docs.google.com/spreadsheets/d/15CCa8k8yhh_8JkBLXp0oC8AOu1rULdSzPXxStq89-28/edit?usp=sharing",children:"\u0e44\u0e1f\u0e09\u0e38\u0e01\u0e40\u0e09\u0e34\u0e19"})}),Object(S.jsx)("li",{class:"flex-item",children:Object(S.jsx)(j.a,{href:"https://docs.google.com/spreadsheets/d/13C6Tno4UgH6anlBqSH7fGFpEC3oqYwnUU74mJn-T6qE/edit?usp=sharing",children:"Heat Detector"})}),Object(S.jsx)("li",{class:"flex-item",children:Object(S.jsx)(j.a,{href:"https://docs.google.com/spreadsheets/d/1vhj2aK3YGCxdIWu4JhRZwoQuf9nLlSFTXdA_-B2YpXU/edit?usp=sharing",children:"\u0e0a\u0e38\u0e14\u0e0a\u0e33\u0e23\u0e30\u0e25\u0e49\u0e32\u0e07\u0e09\u0e38\u0e01\u0e40\u0e09\u0e34\u0e19"})}),Object(S.jsx)("li",{class:"flex-item",children:Object(S.jsx)(j.a,{href:"#",children:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e39\u0e1a\u0e19\u0e49\u0e33"})}),Object(S.jsx)("li",{class:"flex-item",children:Object(S.jsx)(j.a,{href:"https://drive.google.com/drive/folders/1pZeNdxZnwaNagYK4yv3Ry0yLh0a6AVG1?usp=sharing",children:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e07\u0e32\u0e19\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e14\u0e37\u0e2d\u0e19"})}),Object(S.jsx)("li",{class:"flex-item",children:Object(S.jsx)(j.a,{href:"https://drive.google.com/drive/folders/1lyDh8Ii3i9_3Vg9AY7xs36JHgdN-4n0L?usp=sharing",children:"\u0e1b\u0e23\u0e30\u0e15\u0e39\u0e17\u0e32\u0e07\u0e40\u0e02\u0e49\u0e32-\u0e2d\u0e2d\u0e01\u0e09\u0e38\u0e01\u0e40\u0e09\u0e34\u0e19"})})]})})})]})}var D=a(51);var A=function(){return localStorage.getItem("accessToken")?Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsx)(D.a,{basename:"/checkspf-demo",children:Object(S.jsxs)(q.c,{children:[Object(S.jsx)(q.a,{path:"/",children:Object(S.jsx)(U,{})}),Object(S.jsx)(q.a,{path:"/profile",children:Object(S.jsx)(U,{})})]})})}):Object(S.jsx)(N,{})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,155)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(A,{})}),document.getElementById("root")),W()}},[[98,1,2]]]);
//# sourceMappingURL=main.6f6b4ba3.chunk.js.map