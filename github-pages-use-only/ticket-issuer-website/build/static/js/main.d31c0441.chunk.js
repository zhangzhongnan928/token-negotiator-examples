(this["webpackJsonpticket-issuer-website"]=this["webpackJsonpticket-issuer-website"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var c=n(12),s=n.n(c),a=n(55),i=n.n(a),r=(n(69),n(2)),o=n.n(r),l=n(18),j=n(41),d=n(61),u=n(122),b=(n(85),n(11));var x=function(e){var t=e.tokenInstance,n=t.ticketClass,c=t.ticketId,s=t.devconId;if(n&&c&&s)return Object(b.jsxs)("div",{className:"ticketContainer",children:[Object(b.jsxs)("div",{className:"ticketDetails",children:[Object(b.jsx)(u.a,{className:"ticketClass",variant:"h5",component:"h2",children:n.toString()}),Object(b.jsx)(u.a,{className:"ticketId",variant:"body2",color:"textSecondary",component:"p",children:c&&c.toString()}),Object(b.jsxs)(u.a,{className:"devconId",variant:"body2",color:"textSecondary",component:"p",children:["Devcon ID: ",s&&s.toString()]})]}),Object(b.jsx)("img",{className:"ticketImg",src:"ticket_example_image.svg"})]})},h=n(60),m=n.n(h);n(108);var v=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),r=i[0],u=i[1],h=new d.a({},"devcon-ticket-heroku",{});Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.negotiate();case 2:(t=e.sent)&&s(t);case 4:case"end":return e.stop()}}),e)}))),[]);var v=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.id,e.next=3,m.a.get("https://crypto-verify.herokuapp.com/issue-ticket?id=test@mah.com");case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("main",{children:[Object(b.jsx)("a",{href:"/",children:Object(b.jsx)("img",{className:"logo",src:"./devcon.svg"})}),Object(b.jsx)("div",{className:"flexCenter",children:Object(b.jsx)("p",{children:"[DEMO Ticket Issuer Website]"})}),Object(b.jsx)("div",{className:"flexCenter",children:Object(b.jsx)("img",{className:"devcon_bogota",src:"./devcon_bogota.svg"})}),Object(b.jsx)("div",{className:"flexCenter",children:Object(b.jsx)("p",{children:"A Devcon ticket provides access to the event and special offers between the dates X-XX for hotel bookings, travel, restaurants and more."})}),Object(b.jsx)("div",{className:"flexCenter",children:Object(b.jsx)("p",{children:"Claim your ticket (demonstration purposes only):"})}),Object(b.jsx)("div",{className:"flexCenter",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v({id:r})},children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{style:{fontSize:"14px",marginRight:"7px"},children:"Email:"}),Object(b.jsx)("input",{style:{marginRight:"7px"},type:"email",value:r,onChange:function(e){u(e.target.value)}})]}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})}),n.length>0&&Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"flexCenter",children:Object(b.jsx)("p",{children:"Your tickets:"})}),Object(b.jsx)("div",{className:"flexCenter",children:Object(b.jsx)("div",{className:"tokensWrapper",children:n&&n.length>0&&n.map((function(e,t){return Object(b.jsx)(x,{tokenInstance:e},t)}))})})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),p()},69:function(e,t,n){},75:function(e,t){},85:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.d31c0441.chunk.js.map