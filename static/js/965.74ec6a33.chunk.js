"use strict";(self.webpackChunkcar_washing=self.webpackChunkcar_washing||[]).push([[965],{2965:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});var r=a(9439),t=a(2791),l=a(9434),i=a(5705),c=a(7520),s=a(4925),d=a(822),u=a(9256),o=a(1599),h=a(5365),x=a(184),p=function(e){var n=(0,l.I0)(),a=function(){e.handleExitModal(!0)},r=(0,i.TA)({initialValues:{category:"",name:"",pricePerMeter:"",price:"",employeePercent:""},onSubmit:function(e){n((0,h.M)(e)),a()}});return(0,x.jsx)(c.YM,{onClick:function(e){e.target===e.currentTarget&&a()},children:(0,x.jsxs)(c.u_,{children:[(0,x.jsx)(c.PZ,{type:"button",onClick:a,children:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"}),(0,x.jsxs)(c.l0,{onSubmit:r.handleSubmit,children:[(0,x.jsx)(c.Dx,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043f\u043e\u0441\u043b\u0443\u0433\u0443"}),(0,x.jsx)(s.Z,{id:"category-label",children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043e\u0431'\u0454\u043a\u0442 \u043f\u043e\u0441\u043b\u0443\u0433\u0438"}),(0,x.jsxs)(d.Z,{required:!0,labelId:"category-label",id:"category",name:"category",value:r.values.category,onChange:r.handleChange,variant:"standard",style:{width:"100%"},children:[(0,x.jsx)(u.Z,{value:"\u0410\u0432\u0442\u043e",children:"\u0410\u0432\u0442\u043e"}),(0,x.jsx)(u.Z,{value:"\u041a\u0438\u043b\u0438\u043c",children:"\u041a\u0438\u043b\u0438\u043c"})]}),(0,x.jsx)(o.Z,{required:!0,type:"text",id:"name",name:"name",label:"\u041d\u0430\u0437\u0432\u0430 \u043f\u043e\u0441\u043b\u0443\u0433\u0438",value:r.values.name,onChange:r.handleChange,variant:"standard",className:"field"}),(0,x.jsx)(s.Z,{id:"pricePerMeter-label",children:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0437\u0430 \u043c\xb2?"}),(0,x.jsxs)(d.Z,{required:!0,labelId:"pricePerMeter-label",id:"pricePerMeter",name:"pricePerMeter",value:r.values.pricePerMeter,onChange:r.handleChange,variant:"standard",style:{width:"100%"},children:[(0,x.jsx)(u.Z,{value:"\u0422\u0430\u043a",children:"\u0422\u0430\u043a"}),(0,x.jsx)(u.Z,{value:"\u041d\u0456",children:"\u041d\u0456"})]}),(0,x.jsx)(o.Z,{required:!0,type:"text",id:"price",name:"price",label:"\u0426\u0456\u043d\u0430 \u043f\u043e\u0441\u043b\u0443\u0433\u0438",value:r.values.price,onChange:r.handleChange,variant:"standard",className:"field"}),(0,x.jsx)(o.Z,{required:!0,type:"text",id:"employeePercent",name:"employeePercent",label:"\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u043f\u0440\u0430\u0446\u0456\u0432\u043d\u0438\u043a\u0443",value:r.values.employeePercent,onChange:r.handleChange,variant:"standard",className:"field"}),(0,x.jsx)("button",{type:"submit",className:"btn",children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})})},j=a(1214),m=function(){var e=(0,l.v9)(j.f),n=(0,t.useState)(!1),a=(0,r.Z)(n,2),i=a[0],c=a[1],s=(0,l.I0)();(0,t.useEffect)((function(){s((0,h.U)())}),[s]);return(0,x.jsxs)("section",{children:[(0,x.jsxs)("div",{style:{marginBottom:"50px",display:"flex",justifyContent:"space-between"},children:[(0,x.jsx)("h2",{children:"\u041f\u043e\u0441\u043b\u0443\u0433\u0438"}),(0,x.jsx)("button",{type:"button",onClick:function(){return c(!0)},className:"btn",style:{color:"var(--white-color)"},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043f\u043e\u0441\u043b\u0443\u0433\u0443"})]}),(0,x.jsx)("ul",{className:"list",style:{display:"flex",flexDirection:"column",gap:"20px"},children:e.map((function(e){return(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"\u041e\u0431'\u0454\u043a\u0442 \u043f\u043e\u0441\u043b\u0443\u0433\u0438: ".concat(e.category)}),(0,x.jsx)("p",{children:"\u041d\u0430\u0437\u0432\u0430 \u043f\u043e\u0441\u043b\u0443\u0433\u0438: ".concat(e.name)}),e.pricePerMeter&&(0,x.jsx)("p",{children:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0437\u0430 \u043c\xb2: \u0422\u0430\u043a"}),(0,x.jsx)("p",{children:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c: ".concat(e.price," \u0433\u0440\u043d")}),(0,x.jsx)("p",{children:"\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u043f\u0440\u0430\u0446\u0456\u0432\u043d\u0438\u043a\u0430: ".concat(e.employeePercent,"%")})]},e._id)}))}),i&&(0,x.jsx)(p,{handleExitModal:function(){c(!1)}})]})}},1214:function(e,n,a){a.d(n,{f:function(){return r}});var r=function(e){return e.services.items}}}]);
//# sourceMappingURL=965.74ec6a33.chunk.js.map