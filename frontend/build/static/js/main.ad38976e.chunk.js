(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(31),c=a.n(r),s=(a(125),a(126),a(5)),o=(a(127),a(128),a.p+"static/media/notes.7c831644.png"),i=a(15),l=a(17),u=a(181),d=a(175),j=a(183),b=a(9),p=a(107),h=a(180),O=a(11),f=a(10),x=a.n(f),m=a(14),g="USER_LOGIN_REQUEST",v="USER_LOGIN_SUCCESS",y="USER_LOGIN_FAIL",_="USER_LOGOUT",N="USER_REGISTER_REQUEST",S="USER_REGISTER_SUCCESS",E="USER_REGISTER_FAIL",w="USER_UPDATE_REQUEST",C="USER_UPDATE_SUCCESS",T="USER_UPDATE_FAIL",I=a(25),L=a.n(I),k=function(e,t){return function(){var a=Object(m.a)(x.a.mark((function a(n){var r,c,s;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:g}),r={headers:{"Content-type":"application/json"}},a.next=5,L.a.post("http://localhost:4000/api/users/login",{email:e,password:t},r);case 5:c=a.sent,s=c.data,n({type:v,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:y,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()},U=function(e,t,a,n){return function(){var r=Object(m.a)(x.a.mark((function r(c){var s,o,i;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:N}),s={headers:{"Content-type":"application/json"}},r.next=5,L.a.post("http://localhost:4000/api/users",{name:e,pic:n,email:t,password:a},s);case 5:o=r.sent,i=o.data,c({type:S,payload:i}),c({type:v,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:E,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(m.a)(x.a.mark((function t(a,n){var r,c,s,o,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:w}),r=n(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,L.a.post("http://localhost:4000/api/users/updateprofile",e,s);case 6:o=t.sent,i=o.data,a({type:C,payload:i}),a({type:v,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:T,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,a){return t.apply(this,arguments)}}()},A=a(1);var G=function(e){var t=e.setSearch,a=Object(i.f)(),n=Object(O.b)(),r=Object(O.c)((function(e){return e.userLogin})).userInfo,c=function(){n(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:_});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.push("/")};return Object(A.jsx)(u.a,{style:{backgroundColor:"black"},variant:"dark",expand:"lg",children:Object(A.jsxs)(d.a,{fluid:!0,children:[Object(A.jsx)(u.a.Brand,{className:"header_title ml-5 ",children:Object(A.jsxs)(l.b,{to:"/",children:[Object(A.jsx)("img",{src:o,style:{width:"1.6rem",marginRight:"10px"},alt:"n"}),"Safe Note"]})}),Object(A.jsx)(u.a.Toggle,{"aria-controls":"navbarScroll"}),Object(A.jsxs)(u.a.Collapse,{id:"navbarScroll",children:[Object(A.jsx)(j.a,{className:"m-auto",children:r?Object(A.jsx)(b.a,{className:"d-flex",children:Object(A.jsx)(p.a,{style:{width:"20vw"},type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",onChange:function(e){t(e.target.value)}})}):""}),Object(A.jsx)(j.a,{className:"mr-5 my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:r?Object(A.jsxs)(A.Fragment,{children:[" ",Object(A.jsx)(j.a.Link,{href:"/mynotes",className:"active",children:"My Notes"}),Object(A.jsxs)(h.a,{className:"active",title:r?"".concat(r.name):"Login",id:"navbarScrollingDropdown",children:[Object(A.jsx)(h.a.Item,{href:"/profile",children:"Profile "}),Object(A.jsx)(h.a.Divider,{}),Object(A.jsx)(h.a.Item,{onClick:function(){c()},children:"LogOut"})]})]}):Object(A.jsx)(j.a.Link,{href:"/login",className:"active",children:"Login"})})]})]})})},P=a(176),B=a(108);var D=function(){return Object(A.jsx)("div",{children:Object(A.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(A.jsx)(d.a,{children:Object(A.jsx)(P.a,{children:Object(A.jsx)(B.a,{className:"text-center py-3",children:"Copyright \xa9 Dhruv Deora"})})})})})},F=(a(159),a.p+"static/media/notess.84ba53e1.png");var H=function(){var e=Object(i.f)();return Object(n.useEffect)((function(){localStorage.getItem("userInfo")&&e.push("/mynotes")}),[e]),Object(A.jsxs)("div",{className:"land",children:[Object(A.jsxs)("div",{className:"land_left",children:[Object(A.jsx)("h2",{children:"Welcome to SafeNote !"}),Object(A.jsx)("p",{children:"Store your Notes in one of the Safest Online Notes Provider and retrieve them in a go. Build on MERN stack , this is one of the fastest Notes Provider."}),Object(A.jsxs)("div",{className:"land_btns",children:[Object(A.jsx)(l.b,{to:"/login",children:Object(A.jsx)("button",{className:"land_login",children:"Login"})}),Object(A.jsx)(l.b,{to:"/register",children:Object(A.jsx)("button",{className:"land_signup",children:"Register"})})]})]}),Object(A.jsx)("div",{className:"land_right",children:Object(A.jsx)("img",{className:"land_img",src:F,alt:"notes"})})]})},z=a(110),Q=a(184),Y=a(182),W=a(179),J=a(177);var M=function(e){var t=e.size,a=void 0===t?100:t;return Object(A.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(A.jsx)(J.a,{style:{width:a,height:a},animation:"border"})})},q=a(178),K=function(e){var t=e.variant,a=void 0===t?"info":t,n=e.children;return Object(A.jsx)(q.a,{variant:a,style:{fontSize:20},children:Object(A.jsx)("strong",{children:n})})};a(160);var V=function(e){var t=e.title,a=e.children;return Object(A.jsx)("div",{className:"main-back",children:Object(A.jsx)(d.a,{children:Object(A.jsx)(P.a,{children:Object(A.jsxs)("div",{className:"page",children:[t&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h1",{className:"heading",children:t}),Object(A.jsx)("hr",{})]}),a]})})})})},X=(a(161),a(111)),Z="NOTES_LIST_REQUEST",$="NOTES_LIST_SUCCESS",ee="NOTES_LIST_FAIL",te="NOTES_CREATE_REQUEST",ae="NOTES_CREATE_SUCCESS",ne="NOTES_CREATE_FAIL",re="NOTES_UPDATE_REQUEST",ce="NOTES_UPDATE_SUCCESS",se="NOTES_UPDATE_FAIL",oe="NOTES_DELETE_REQUEST",ie="NOTES_DELETE_SUCCESS",le="NOTES_DELETE_FAIL",ue="NOTE_GET_REQUEST ",de="NOTE_GET_SUCCESS",je="NOTE_GET_FAIL",be="NOTE_GET_REQUEST ",pe="NOTE_GET_SUCCESS",he="NOTE_GET_FAIL",Oe="SHARE_REQUEST",fe="SHARE_FAIL",xe="SHARE_SUCCESS",me=function(e){return function(){var t=Object(m.a)(x.a.mark((function t(a,n){var r,c,s,o,i,l;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=n(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=5,L.a.get("http://localhost:4000/api/notes/".concat(e),s);case 5:o=t.sent,i=o.data,a({type:de,payload:i}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,a({type:je,payload:l});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,a){return t.apply(this,arguments)}}()},ge=function(e){return function(){var t=Object(m.a)(x.a.mark((function t(a){var n,r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:be}),t.next=4,L.a.get("http://localhost:4000/api/notes/share/".concat(e));case 4:n=t.sent,r=n.data,a({type:pe,payload:r}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),c=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,a({type:he,payload:c});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},ve=function(e){return function(){var t=Object(m.a)(x.a.mark((function t(a,n){var r,c,s,o,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:Oe}),r=n(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,L.a.put("http://localhost:4000/api/notes/share/".concat(e),{},s);case 6:o=t.sent,Object(X.a)(o),a({type:xe}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),i=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,a({type:fe,payload:i});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()};var ye=function(e){var t=e.search,a=Object(i.f)(),r=Object(n.useState)(!1),c=Object(s.a)(r,2),o=c[0],u=c[1],d=Object(n.useState)(""),j=Object(s.a)(d,2),b=j[0],p=j[1],h=Object(O.b)(),f=Object(n.useState)(!1),g=Object(s.a)(f,2),v=g[0],y=g[1],_=Object(O.c)((function(e){return e.noteList})),N=_.loading,S=_.notes,E=_.error,w=Object(O.c)((function(e){return e.userLogin})).userInfo,C=Object(O.c)((function(e){return e.noteDelete})),T=C.loading,I=C.error,k=C.success,U=(Object(O.c)((function(e){return e.isShare})),function(){return u(!1)}),R=function(e){u(!0);var t=S.find((function(t){return t._id===e}));p(t)},G=function(e){window.confirm("Are You Sure")&&h(function(e){return function(){var t=Object(m.a)(x.a.mark((function t(a,n){var r,c,s,o,i,l;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:oe}),r=n(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,L.a.delete("http://localhost:4000/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,a({type:ie,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,a({type:le,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(e))},P=Object(O.c)((function(e){return e.noteCreate})).success,B=Object(O.c)((function(e){return e.noteUpdate})).success;return Object(n.useEffect)((function(){w||a.push("/"),h(function(){var e=Object(m.a)(x.a.mark((function e(t,a){var n,r,c,s,o,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Z}),n=a(),r=n.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,L.a.get("http://localhost:4000/api/notes",c);case 6:s=e.sent,o=s.data,t({type:$,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:ee,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}())}),[h,w,a,P,B,k,v]),Object(A.jsxs)(V,{title:"Welcome Back ".concat(w.name),children:[Object(A.jsx)("div",{className:"addnote_btn_div",children:Object(A.jsx)(l.b,{to:"/createnote",children:Object(A.jsx)(z.a,{className:"addnote_btn",style:{},size:"lg",children:"+"})})}),Object(A.jsxs)("div",{className:"mynotes_div",children:[N?Object(A.jsx)(M,{}):"",E?Object(A.jsx)(K,{variant:"danger",children:E}):"",T?Object(A.jsx)(M,{}):"",I?Object(A.jsx)(K,{variant:"danger",children:I}):"",null===S||void 0===S?void 0:S.reverse().filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(Q.a,{className:"card_body",style:{width:"18rem"},children:[Object(A.jsxs)(Q.a.Body,{onClick:function(){return R(e._id)},children:[Object(A.jsx)(Q.a.Title,{style:{fontSize:"1.4rem",fontWeight:"700"},children:e.title.slice(0,20)}),Object(A.jsx)(Q.a.Text,{style:{fontSize:"0.94rem",fontWeight:"300"},children:Object(A.jsx)(W.a,{children:e.content.slice(0,120)})})]}),Object(A.jsxs)("div",{className:"note_btns",children:[Object(A.jsx)(z.a,{className:"btn_edit",variant:"primary",href:"/note/".concat(e._id),children:"Edit"}),Object(A.jsx)(z.a,{className:"btn_delete",onClick:function(t){return G(e._id)},children:"Delete"}),Object(A.jsx)("div",{className:"button-flx",children:Object(A.jsx)(z.a,{className:"btn_share",onClick:function(t){return function(e){var t=function(){var t=Object(m.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(ve(e));case 2:y(!v);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}(e._id)},children:e&&!1===e.isShare?"Private":"Public"})})]}),Object(A.jsx)("div",{className:"button-flx",children:Object(A.jsx)(l.b,{to:"/share/".concat(e._id),children:Object(A.jsx)(z.a,{className:"btn_share",children:"SHARE"})})})]},e._id),Object(A.jsxs)(Y.a,{show:o,centered:!0,onHide:U,children:[Object(A.jsx)(Y.a.Header,{closeButton:!0,children:Object(A.jsx)(Y.a.Title,{className:"modal_title",children:b.title})}),Object(A.jsxs)(Y.a.Body,{className:"modal_body",children:[Object(A.jsxs)(W.a,{children:[" ",b.content]}),b.content]}),Object(A.jsxs)(Y.a.Footer,{children:[Object(A.jsx)(z.a,{style:{position:"absolute",left:10,backgroundColor:"yellowgreen",border:"0px solid"},href:"/note/".concat(b._id),children:"Edit"}),"Last Updated on ",e.createdAt.substring(0,10)]})]})]})}))]})]})},_e=(a(163),function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),d=u[0],j=u[1],p=Object(n.useState)(""),h=Object(s.a)(p,2),f=h[0],g=h[1],v=Object(n.useState)(""),y=Object(s.a)(v,2),_=y[0],N=y[1],S=Object(n.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),E=Object(s.a)(S,2),w=E[0],C=(E[1],Object(n.useState)(null)),T=Object(s.a)(C,2),I=T[0],L=T[1],k=Object(O.b)(),R=Object(O.c)((function(e){return e.userRegister})),G=R.loading,D=R.error,F=R.userInfo,H=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),f!==_?L("Passwords do not match"):k(U(r,d,f,w));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){F&&e.push("/mynotes")}),[e,F]),Object(A.jsx)("div",{className:"login_flex",children:Object(A.jsxs)(V,{title:"Register User",children:[D&&Object(A.jsx)(K,{variant:"danger",children:D}),I?Object(A.jsx)(K,{variant:"danger",children:I}):"",G?Object(A.jsx)(M,{}):"",Object(A.jsxs)(b.a,{className:"login_container",children:[Object(A.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(A.jsx)(b.a.Label,{children:"Name"}),Object(A.jsx)(b.a.Control,{value:r,type:"text",placeholder:"Enter Your Name",onChange:function(e){return c(e.target.value)}})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(A.jsx)(b.a.Label,{children:"Email address"}),Object(A.jsx)(b.a.Control,{value:d,type:"email",placeholder:"Enter email",onChange:function(e){return j(e.target.value)}}),Object(A.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(A.jsx)(b.a.Label,{children:"Password"}),Object(A.jsx)(b.a.Control,{type:"password",value:f,placeholder:"Password",onChange:function(e){return g(e.target.value)}})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(A.jsx)(b.a.Label,{children:"Confirm Password"}),Object(A.jsx)(b.a.Control,{type:"password",value:_,placeholder:"Confirm Password",onChange:function(e){return N(e.target.value)}})]}),Object(A.jsx)(b.a,{className:"login_btn",variant:"primary",type:"submit",onClick:H,children:"Register"})]}),Object(A.jsx)(P.a,{className:"py-3",children:Object(A.jsxs)(B.a,{children:["Have an Account ?",Object(A.jsx)(l.b,{className:"register_here",to:"/login",children:"\xa0Login Here"})]})})]})})}),Ne=(a(164),function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),d=u[0],j=u[1],p=Object(O.b)(),h=Object(O.c)((function(e){return e.userLogin})),f=h.loading,g=h.error,v=h.userInfo,y=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),p(k(r,d));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v&&e.push("/mynotes")}),[e,v]),Object(A.jsx)("div",{className:"login_flex",children:Object(A.jsxs)(V,{title:"Login",children:[g?Object(A.jsx)(K,{variant:"danger",children:g}):"",f?Object(A.jsx)(M,{}):"",Object(A.jsxs)(b.a,{className:"login_container",children:[Object(A.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(A.jsx)(b.a.Label,{children:"Email address"}),Object(A.jsx)(b.a.Control,{value:r,type:"email",placeholder:"Enter email",onChange:function(e){return c(e.target.value)}}),Object(A.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(A.jsx)(b.a.Label,{children:"Password"}),Object(A.jsx)(b.a.Control,{type:"password",value:d,placeholder:"Password",onChange:function(e){return j(e.target.value)}})]}),Object(A.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"}),Object(A.jsx)(b.a,{className:"login_btn",variant:"primary",type:"submit",onClick:y,children:"Login"})]}),Object(A.jsx)(P.a,{className:"py-3",children:Object(A.jsxs)(B.a,{children:["New Customer?"," ",Object(A.jsx)(l.b,{className:"register_here",to:"/register",children:"Register Here"})]})})]})})}),Se=(a(104),function(){var e=Object(i.f)(),t=Object(O.b)(),a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),d=u[0],j=u[1],p=Object(n.useState)(""),h=Object(s.a)(p,2),f=h[0],g=h[1],v=Object(O.c)((function(e){return e.noteCreate})),y=v.loading,_=v.error,N=function(a){a.preventDefault(),c&&f&&d&&(t(function(e,t,a){return function(){var n=Object(m.a)(x.a.mark((function n(r,c){var s,o,i,l,u,d;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:te}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},n.next=6,L.a.post("http://localhost:4000/api/notes/create",{title:e,content:t,category:a},i);case 6:l=n.sent,u=l.data,r({type:ae,payload:u}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),d=n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message,r({type:ne,payload:d});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}()}(c,f,d)),g(""),j(""),o(""),e.push("/mynotes"))};return Object(A.jsxs)("div",{className:"center_create",children:[y?Object(A.jsx)(M,{}):"",_?Object(A.jsx)(K,{variant:"danger",children:_}):"",Object(A.jsxs)(Q.a,{className:" create_card",children:[Object(A.jsx)(Q.a.Header,{className:"create_card_input_header",children:"Enter Your Note Here"}),Object(A.jsxs)(b.a,{children:[Object(A.jsxs)(b.a.Group,{className:"mb-3 create_card_input",children:[Object(A.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Title"}),Object(A.jsx)(b.a.Control,{type:"text",value:c,placeholder:"Title",onChange:function(e){return o(e.target.value)}})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3 create_card_input",controlId:"formBasicPassword",children:[Object(A.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Category"}),Object(A.jsx)(b.a.Control,{type:"text",placeholder:"Eg:- Urgent/Basic/ToDo",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3 create_card_input",controlId:"exampleForm.ControlTextarea1",children:[Object(A.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Content"}),Object(A.jsx)(b.a.Control,{as:"textarea",rows:6,value:f,placeholder:"Enter Your Note Here",onChange:function(e){return g(e.target.value)}})]}),f&&Object(A.jsxs)(Q.a,{className:"create_card_input my-3",children:[Object(A.jsx)(Q.a.Header,{children:"Note Preview"}),Object(A.jsx)(Q.a.Body,{children:Object(A.jsx)(W.a,{children:f})})]}),Object(A.jsx)(z.a,{className:"create_card_button",variant:"primary",type:"submit",onClick:function(e){return N(e)},children:"Submit"})]}),Object(A.jsx)(Q.a.Footer,{className:"text-muted",children:"Your Note is safe with You :-)"})]})]})});var Ee=function(){var e=Object(i.f)(),t=Object(i.g)(),a=Object(O.b)(),r=Object(n.useState)(),c=Object(s.a)(r,2),o=c[0],l=c[1],u=Object(n.useState)(),d=Object(s.a)(u,2),j=d[0],p=d[1],h=Object(n.useState)(),f=Object(s.a)(h,2),g=f[0],v=f[1],y=Object(n.useState)(),_=Object(s.a)(y,2),N=_[0],S=_[1],E=Object(O.c)((function(e){return e.noteUpdate})),w=E.loading,C=E.error,T=Object(O.c)((function(e){return e.noteGet})),I=T.data,k=(T.error,function(n){n.preventDefault(),o&&g&&j&&(a(function(e,t,a,n){return function(){var r=Object(m.a)(x.a.mark((function r(c,s){var o,i,l,u,d,j;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:re}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,L.a.put("http://localhost:4000/api/notes/".concat(e),{title:t,content:a,category:n},l);case 6:u=r.sent,d=u.data,c({type:ce,payload:d}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),j=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:se,payload:j});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.id,o,g,j)),v(""),p(""),l(""),e.push("/mynotes"))});return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(me(t.id));case 2:console.log(I),v(void 0!=I?I.content:""),p(void 0!=I?I.category:""),l(void 0!=I?I.title:""),S(void 0!=I?I.updatedAt:"");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.id,N]),Object(A.jsxs)("div",{className:"center_create",children:[w?Object(A.jsx)(M,{}):"",C?Object(A.jsx)(K,{variant:"danger",children:C}):"",Object(A.jsxs)(Q.a,{className:" create_ca =rd",children:[Object(A.jsx)(Q.a.Header,{className:"create_card_input_header",children:"Enter Your Note Here"}),Object(A.jsxs)(b.a,{children:[Object(A.jsxs)(b.a.Group,{className:"mb-3 create_card_input",children:[Object(A.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Title"}),Object(A.jsx)(b.a.Control,{type:"text",value:o,placeholder:"Title",onChange:function(e){return l(e.target.value)}})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3 create_card_input",controlId:"formBasicPassword",children:[Object(A.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Category"}),Object(A.jsx)(b.a.Control,{type:"text",placeholder:"Eg:- Urgent/Basic/ToDo",value:j,onChange:function(e){return p(e.target.value)}})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3 create_card_input",controlId:"exampleForm.ControlTextarea1",children:[Object(A.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Content"}),Object(A.jsx)(b.a.Control,{as:"textarea",rows:6,value:g,placeholder:"Enter Your Note Here",onChange:function(e){return v(e.target.value)}})]}),g&&Object(A.jsxs)(Q.a,{className:"create_card_input my-3",children:[Object(A.jsx)(Q.a.Header,{children:"Note Preview"}),Object(A.jsx)(Q.a.Body,{children:Object(A.jsx)(W.a,{children:g})})]}),Object(A.jsx)(z.a,{className:"create_card_button",variant:"primary",type:"submit",onClick:function(e){return k(e)},children:"Update"})]}),Object(A.jsx)(Q.a.Footer,{className:"text-muted",children:"Your Note is safe with You :-)"})]})]})};var we=function(){var e=Object(i.f)(),t=Object(O.c)((function(e){return e.userLogin})).userInfo,a=Object(n.useState)(t.name),r=Object(s.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(t.email),d=Object(s.a)(u,2),j=d[0],p=d[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),g=f[0],v=f[1],y=Object(n.useState)(""),_=Object(s.a)(y,2),N=_[0],S=_[1],E=Object(n.useState)(""),w=Object(s.a)(E,2),C=w[0],T=w[1],I=Object(O.c)((function(e){return e.userUpdate})),L=I.loading,k=I.error,U=I.success,G=Object(O.b)(),P=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),g!==N){e.next=6;break}G(R({name:c,email:j,password:g})),T(""),e.next=7;break;case 6:return e.abrupt("return",T("Passwords Do Not Match"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t||e.push("/")}),[e]),Object(A.jsx)("div",{children:Object(A.jsx)("div",{className:"login_flex",children:Object(A.jsxs)(V,{title:"Update Profile",children:[k?Object(A.jsx)(K,{variant:"danger",children:k}):"",C?Object(A.jsx)(K,{variant:"danger",children:C}):"",L?Object(A.jsx)(M,{}):"",U?Object(A.jsx)(K,{variant:"success",children:"SuccessFully Updated"}):"",Object(A.jsxs)(b.a,{className:"login_container",children:[Object(A.jsxs)(b.a.Group,{className:"mb-3",children:[Object(A.jsx)(b.a.Label,{children:"Name"}),Object(A.jsx)(b.a.Control,{value:c,type:"text",placeholder:"Update Name",onChange:function(e){return o(e.target.value)}}),Object(A.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(A.jsx)(b.a.Label,{children:"Email address"}),Object(A.jsx)(b.a.Control,{value:j,type:"email",placeholder:"Update email",onChange:function(e){return p(e.target.value)}}),Object(A.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(A.jsx)(b.a.Label,{children:"Password"}),Object(A.jsx)(b.a.Control,{type:"password",value:g,placeholder:"Update Password",onChange:function(e){return v(e.target.value)}})]}),Object(A.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(A.jsx)(b.a.Label,{children:" Confirm Password"}),Object(A.jsx)(b.a.Control,{type:"password",value:N,placeholder:"Update Password",onChange:function(e){return S(e.target.value)}})]}),Object(A.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"}),Object(A.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},className:"flex_btnsss",children:[Object(A.jsx)(b.a,{className:"login_btn",variant:"primary",type:"submit",onClick:P,children:"Update Profile"}),U?Object(A.jsx)(l.b,{to:"/mynotes",children:Object(A.jsx)(b.a,{style:{backgroundColor:"Green",textAlign:"center"},className:"login_btn",variant:"primary",type:"submit",children:"Go Back"})}):""]})]})]})})})},Ce=(a(165),a.p+"static/media/dance.6430ebc5.gif"),Te=a.p+"static/media/fortnite-dance.22b8422f.gif";var Ie=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),o=Object(s.a)(c,2),l=o[0],u=o[1],d=Object(n.useState)(),j=Object(s.a)(d,2),b=j[0],p=j[1],h=Object(n.useState)(),f=Object(s.a)(h,2),g=f[0],v=f[1],y=Object(i.g)(),_=Object(n.useState)(),N=Object(s.a)(_,2),S=N[0],E=N[1],w=Object(O.b)(),C=Object(O.c)((function(e){return e.shareNote})),T=C.data;return C.loading,C.error,Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(ge(y.id));case 2:r(T),v(void 0!=T?T.content:""),p(void 0!=T?T.category:""),u(void 0!=T?T.title:""),E(void 0!=T?T.updatedAt:""),console.log(T);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[y.id,S]),Object(A.jsx)(A.Fragment,{children:a&&a.title?Object(A.jsxs)("div",{className:"share-container",children:[Object(A.jsx)("h1",{children:l}),Object(A.jsx)("h3",{children:b}),Object(A.jsx)("p",{children:g})]}):Object(A.jsx)("div",{className:"not-auth",children:Object(A.jsxs)("div",{className:"dance-div",children:[Object(A.jsx)("h1",{children:"NOT AUTHORISED LMAO"}),Object(A.jsx)("h4",{children:"Make Note Public First"}),Object(A.jsx)("img",{src:Ce,alt:"Lol Not Auth"}),Object(A.jsx)("img",{src:Te,alt:"Lol Not Auth 2"})]})})})};var Le=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(A.jsx)(l.a,{children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(G,{setSearch:r}),Object(A.jsxs)(i.c,{children:[Object(A.jsx)(i.a,{path:"/mynotes",exact:!0,children:Object(A.jsx)(ye,{search:a})}),Object(A.jsx)(i.a,{path:"/profile",exact:!0,children:Object(A.jsx)(we,{})}),Object(A.jsx)(i.a,{path:"/createnote",exact:!0,children:Object(A.jsx)(Se,{})}),Object(A.jsx)(i.a,{path:"/note/:id",children:Object(A.jsx)(Ee,{})}),Object(A.jsx)(i.a,{path:"/login",exact:!0,children:Object(A.jsx)(Ne,{})}),Object(A.jsx)(i.a,{path:"/register",exact:!0,children:Object(A.jsx)(_e,{})}),Object(A.jsx)(i.a,{path:"/share/:id",exact:!0,children:Object(A.jsx)(Ie,{})}),Object(A.jsx)(i.a,{path:"/",exact:!0,children:Object(A.jsx)(H,{})})]}),Object(A.jsx)(D,{})]})})},ke=a(69),Ue=a(116),Re=a(115),Ae=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,Ge={userLogin:{userInfo:Ae},userRegister:{userInfo:Ae}},Pe=Object(ke.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{loading:!0};case v:return{loading:!1,userInfo:t.payload};case y:return{loading:!1,error:t.payload};case _:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case S:return{loading:!1,userInfo:t.payload};case E:return{loading:!1,error:t.payload};default:return e}},noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return{loading:!0};case $:return{loading:!1,notes:t.payload};case ee:return{loading:!1,error:t.payload};default:return e}},noteGet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return{loading:!0};case de:return{loading:!1,data:t.payload};case je:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return{loading:!0};case ae:return{loading:!1,success:!0};case ne:return{loading:!1,error:t.payload};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return{loading:!0};case ce:return{loading:!1,success:!0};case se:return{loading:!1,error:t.payload,success:!1};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return{loading:!0};case ie:return{loading:!1,success:!0};case le:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case C:return{loading:!1,userInfo:t.payload,success:!0};case T:return{loading:!1,error:t.payload,success:!1};default:return e}},shareNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return{loading:!0};case pe:return{loading:!1,data:t.payload};case he:return{loading:!1,error:t.payload};default:return e}},isShare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return{loading:!0};case xe:return{loading:!1,success:!0};case fe:return{loading:!1,error:t.payload,success:!1};default:return e}}}),Be=[Ue.a],De=Object(ke.createStore)(Pe,Ge,Object(Re.composeWithDevTools)(ke.applyMiddleware.apply(void 0,Be)));c.a.render(Object(A.jsx)(O.a,{store:De,children:Object(A.jsx)(Le,{})}),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.ad38976e.chunk.js.map