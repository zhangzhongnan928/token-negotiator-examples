(this["webpackJsonphotel-bogota-website"]=this["webpackJsonphotel-bogota-website"]||[]).push([[0],{135:function(e,t,n){},141:function(e,t){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),c=n.n(r),i=(n(135),n(5)),s=n(6),l=n(8),d=n(7),j=n(47),u=n(112),b=n(11),h=Object(a.createContext)({tokens:[]}),p=function(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),o=n[0],r=n[1];return window.addEventListener("message",(function(e){if("setSelectedTokens"===e.data.evt)r(e.data.selectedTokens)}),!1),Object(b.jsx)(m,{render:function(t){var n=t.negotiator,a=t.modalContainer;return Object(b.jsx)(h.Provider,{value:{tokens:o,negotiator:n,modalContainer:a},children:e.children})}})},m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(i.a)(this,n),a=t.call(this,e);return window.negotiator=new u.a({},"devcon-ticket-local-3002",{useOverlay:!0,tokenSelectorContainer:".tokenSelectorContainerElement"}),a.state={negotiator:window.negotiator},window.negotiator.negotiate(),a}return Object(s.a)(n,[{key:"render",value:function(){return this.props.render({negotiator:negotiator,modalContainer:this.state.modalContainer})}}]),n}(o.a.Component),x=n(168);n(152);var O=function(){return Object(b.jsx)("div",{className:"logo",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Hotel Bogota"}),Object(b.jsx)("h2",{children:"Condelaria"})]})})},f=(n(153),function(){return Object(b.jsx)("header",{children:Object(b.jsx)(O,{})})}),g=n(209),y=n(210),v=n(212),k=n(206),C=n(211),S=n(44),w=n(91),N=n(4),D=n.n(N),P=n(32),B=n(202),T=n(214),I=n(217),E=n(208),L=n(207),W=n(205),F=n(114),R=n(201),q=n(111),z=n.n(q),K=(n(154),Object(F.a)({palette:{primary:{main:"#0071c3"},secondary:{main:"#11cb5f"}}}));function M(e){var t,n,o=e.room,r=o.type,c=o.price,i=o.image,s=o.frequency,l=Object(a.useContext)(h).tokens,d=Object(a.useState)(!1),u=Object(j.a)(d,2),p=u[0],m=u[1],O=Object(a.useState)(),f=Object(j.a)(O,2),g=f[0],y=f[1],v=Object(a.useState)(!1),C=Object(j.a)(v,2),N=C[0],F=C[1],q=function(){var e=Object(P.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,negotiator.authenticate({unEndPoint:"https://crypto-verify.herokuapp.com/use-devcon-ticket",unsignedToken:l[0]});case 3:(t=e.sent).useEthKey&&t.proof&&y(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(P.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://raw.githubusercontent.com/TokenScript/token-negotiator/main/examples/hotel-bogota/mockbackend-responses/pay.json",fetch("https://raw.githubusercontent.com/TokenScript/token-negotiator/main/examples/hotel-bogota/mockbackend-responses/pay.json"+new URLSearchParams({tokenProof:g,bookingData:{formData:t}})).then((function(e){F(!0)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=Object(a.useReducer)((function(e,t){return Object(w.a)(Object(w.a)({},e),t)}),{reference:"Beeple",cardNo:"00000000000",cardSort:"00-00-00",cardCsv:"000"}),J=Object(j.a)(_,2),U=J[0],H=J[1],V=function(e){var t=e.target.name,n=e.target.value;H(Object(S.a)({},t,n))},A=function(e){e.preventDefault(),M({formInput:U,type:r})};return Object(b.jsxs)(R.a,{theme:K,children:[Object(b.jsx)(B.a,{color:"primary",className:"bookButton",onClick:function(){m(!0)},variant:"contained",children:"Book"}),Object(b.jsxs)(I.a,{open:p,onClose:function(){m(!1)},"aria-labelledby":"form-dialog-title",children:[N&&Object(b.jsx)("div",{className:"modalContainer",children:Object(b.jsxs)("div",{className:"center",children:[Object(b.jsx)("h3",{children:"Booking Confirmed!"}),Object(b.jsx)(z.a,{style:{color:"green",fontSize:"80px"}})]})}),!N&&Object(b.jsxs)("div",{className:"modalContainer",children:[Object(b.jsx)("div",{style:{width:"100%",height:"138px",overflow:"hidden"},children:Object(b.jsx)("img",{style:{width:"100%",position:"relative",top:"-71px"},src:i})}),Object(b.jsx)(W.a,{className:"title",disableTypography:!0,children:r}),!o.applyDiscount&&Object(b.jsx)(k.a,{children:Object(b.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:["COP ",c," / ",s]})}),o.applyDiscount&&Object(b.jsx)(k.a,{children:Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsxs)(x.a,{style:{color:"#d3182e",textDecoration:"line-through",marginRight:"4px"},variant:"body2",color:"textSecondary",component:"p",children:["COP ",o.price," / ",s]}),Object(b.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:["COP ",o.discountPrice," / ",s]})]})}),Object(b.jsx)(L.a,{children:Object(b.jsxs)("form",{onSubmit:A,children:[Object(b.jsx)(T.a,{id:"booking-name",label:"Reference name",placeholder:"Beeple",value:"Beeple",helperText:"(a check-in reference name for your booking)",fullWidth:!0,name:"reference",margin:"normal",onChange:V,InputLabelProps:{shrink:!0}}),Object(b.jsx)(T.a,{id:"card-no",label:"Card Number",fullWidth:!0,placeholder:"00000000000",value:"00000000000",name:"cardNo",margin:"normal",onChange:V,InputLabelProps:{shrink:!0}}),Object(b.jsx)(T.a,{id:"card-sort",label:"Card Sort Number",fullWidth:!0,placeholder:"00-00-00",value:"00-00-00",name:"cardSort",margin:"normal",onChange:V,InputLabelProps:{shrink:!0}}),Object(b.jsx)(T.a,{id:"card-csv",label:"CSV",fullWidth:!0,value:"000",placeholder:"000",name:"cardCsv",margin:"normal",onChange:V,InputLabelProps:{shrink:!0}})]})}),Object(b.jsx)("div",{className:"booking",children:Object(b.jsxs)(E.a,{children:[l.length>0&&!g&&Object(b.jsx)(B.a,(t={color:"primary",className:"paynow",variant:"contained",onClick:q},Object(S.a)(t,"color","primary"),Object(S.a)(t,"children","Use Token"),t)),(0===l.length||g)&&Object(b.jsx)(B.a,(n={color:"primary",className:"paynow",variant:"contained",onClick:A},Object(S.a)(n,"color","primary"),Object(S.a)(n,"children","Pay Now"),n))]})})]})]})]})}n(163);var _=Object(g.a)({root:{maxWidth:345,margin:"20px"},media:{height:140}});function J(e){var t=e.room,n=_(),a=t.type,o=t.price,r=t.image,c=t.frequency;return Object(b.jsxs)(y.a,{className:"roomCard",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(C.a,{className:n.media,image:r,title:"token"}),!t.applyDiscount&&Object(b.jsxs)(k.a,{children:[Object(b.jsx)(x.a,{style:{fontSize:"21px"},gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(b.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:["COP ",o," / ",c]})]}),t.applyDiscount&&Object(b.jsxs)(k.a,{children:[Object(b.jsx)(x.a,{style:{fontSize:"21px"},gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsxs)(x.a,{style:{color:"#d3182e",textDecoration:"line-through",marginRight:"4px"},variant:"body2",color:"textSecondary",component:"p",children:["COP ",t.price," / ",c]}),Object(b.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:["COP ",t.discountPrice," / ",c]})]})]})]}),Object(b.jsx)(v.a,{children:Object(b.jsx)(M,{room:t})})]})}var U=n(213),H=n(113),V=n(29),A=n(215);function G(e){var t=e.label,n=e.handleInput,a=e.date;return Object(b.jsx)(V.a,{utils:H.a,children:Object(b.jsx)(U.a,{container:!0,justifyContent:"space-around",children:Object(b.jsx)(A.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",className:"date-picker-inline",label:t,disabled:!0,value:a,onChange:function(e){return n(e,t)},KeyboardButtonProps:{"aria-label":"change date"}})})})}var Q=function(){var e=new Date,t=new Date;t.setDate(t.getDate()+1);var n=Object(a.useState)({from:e,to:t}),o=Object(j.a)(n,2),r=(o[0],o[1]),c=function(e,t){r(Object(S.a)({},t,e))};return Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"92px 0 82px 0"},children:Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"center",width:"80%"},children:[Object(b.jsx)("div",{style:{margin:"10px"},children:Object(b.jsx)(G,{name:"from",label:"check in",handleInput:c,date:"08/01/2021"})}),Object(b.jsx)("div",{style:{margin:"10px"},children:Object(b.jsx)(G,{name:"to",label:"check out",handleInput:c,date:"08/15/2021"})})]})})},X=(n(164),function(){var e=Object(a.useContext)(h).tokens,t={roomDiscount:e.length>0,freeShuttle:e.length>1},n=[{type:"Deluxe Room",price:2e5,frequency:"night",image:"./hotel_3.jpg"},{type:"King Suite",price:32e4,frequency:"night",image:"./hotel_2.png"},{type:"Superior Deluxe Suite",price:250030,frequency:"night",image:"./hotel_1.jpg"}].map((function(e,n){var a,o;return t.roomDiscount&&(e.applyDiscount=!0,e.discount=10,e.discountPrice=(a=e.price,o=e.discount,a-o/100*a)),e}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsx)(Q,{}),Object(b.jsx)("div",{className:"roomCardsContainer",children:n.length>0&&n.map((function(e,t){return Object(b.jsx)(J,{room:e},t)}))}),t.freeShuttle&&Object(b.jsx)("div",{children:Object(b.jsx)(x.a,{style:{padding:"20px"},className:"applyDiscountCopyContainer",gutterBottom:!0,variant:"body2",component:"p",children:"\ud83c\udf89 \xa0 Devcon Multi Ticket holder. Free shuttle service available with any booking."})}),Object(b.jsx)("div",{className:"tokenSelectorContainerElement",style:{position:"fixed",right:0,bottom:0,maxWidth:"100%"}})]})}),Y=function(){return Object(b.jsx)(p,{tokenName:"devcon-ticket",options:{tokenSelectorContainer:".tokenSelectorContainerElement"},children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(X,{}),Object(b.jsx)("div",{className:"tokenSelectorContainerElement",style:{position:"fixed",right:0,bottom:0,maxWidth:"100%"}})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(b.jsx)(Y,{}),document.getElementById("root")),Z()}},[[165,1,2]]]);
//# sourceMappingURL=main.3a564d7a.chunk.js.map