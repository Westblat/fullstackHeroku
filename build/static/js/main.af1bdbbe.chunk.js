(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(19),u=n.n(r),i=(n(24),n(10)),o=n(3),a=n(5),l=n.n(a),d="/api/persons",j={getAll:function(){return l.a.get(d)},create:function(e){return l.a.post(d,e)},update:function(e,t){return l.a.put("".concat(d,"/").concat(e),t)},deleteObject:function(e){return l.a.delete("".concat(d,"/").concat(e))}},b=(n(43),n(0)),f=function(e){e.filter;var t=e.setFilter;return Object(b.jsxs)("div",{children:["filter shown with ",Object(b.jsx)("input",{onChange:function(e){return t(e.target.value)}})]})},h=function(e){var t=e.setPersons,n=e.persons,s=e.setErrorMessage,r=e.setSuccessMessage,u=Object(c.useState)(""),a=Object(o.a)(u,2),l=a[0],d=a[1],f=Object(c.useState)(""),h=Object(o.a)(f,2),O=h[0],p=h[1];return Object(b.jsxs)("form",{children:[Object(b.jsx)("h1",{children:" Add new person"}),Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{onChange:function(e){return d(e.target.value)}})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{onChange:function(e){return p(e.target.value)}})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"sumbit",onClick:function(e){if(e.preventDefault(),n.find((function(e){return e.name===l}))){if(window.confirm("User with name ".concat(l," exists already, do you want to replace old number?"))){var c=n.filter((function(e){return e.name===l}))[0];j.update(c.id,{name:l,number:O}).then((function(e){var s=n.filter((function(e){return e.id!==c.id}));t([].concat(Object(i.a)(s),[e.data])),r("User updated succesfully"),setTimeout((function(){r(null)}),5e3)})).catch((function(e){s(e.response.data.error),setTimeout((function(){s(null)}),5e3)}))}}else j.create({name:l,number:O}).then((function(e){t([].concat(Object(i.a)(n),[e.data])),r("User added succesfully"),setTimeout((function(){r(null)}),5e3)})).catch((function(e){s(e.response.data.error)}))},children:"add"})})]})},O=function(e){var t=e.shownNames,n=e.setPersons,c=e.persons,s=e.setErrorMessage,r=e.setSuccessMessage;return Object(b.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[e.name," ",e.number]}),Object(b.jsx)("button",{onClick:function(t){window.confirm("Delete ".concat(e.name," ?"))&&j.deleteObject(e.id).then((function(t){n(c.filter((function(t){return t.id!==e.id}))),r("User deleted succesfully"),setTimeout((function(){r(null)}),5e3)})).catch((function(e){s(e.response.data.error),setTimeout((function(){s(null)}),5e3)}))},children:"Delete"})]},t)}))})},p=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),u=Object(o.a)(r,2),i=u[0],a=u[1],l=Object(c.useState)(null),d=Object(o.a)(l,2),p=d[0],m=d[1],x=Object(c.useState)(null),v=Object(o.a)(x,2),g=v[0],w=v[1];Object(c.useEffect)((function(){j.getAll().then((function(e){e.error||s(e.data)}))}),[]);var S=n.filter((function(e){return e.name.includes(i)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),p&&Object(b.jsx)("p",{className:"success",children:p}),g&&Object(b.jsx)("p",{className:"error",children:g}),Object(b.jsx)(f,{setFilter:a}),Object(b.jsx)(h,{persons:n,setPersons:s,setErrorMessage:w,setSuccessMessage:m}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(O,{shownNames:S,persons:n,setPersons:s,setErrorMessage:w,setSuccessMessage:m})]})};u.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.af1bdbbe.chunk.js.map