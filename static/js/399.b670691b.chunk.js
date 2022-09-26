"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[399],{1399:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(9434),r=n(2791),c="container_container__vf0zN",s="container_title__YpJ7F",o=n(184),i=function(e){var t=e.title,n=e.children;return(0,o.jsxs)("div",{className:c,children:[(0,o.jsx)("h2",{className:s,children:t}),n]})},l=n(885),u="ContactForm_form__wDWPz",m="ContactForm_label__ZUV0d",d="ContactForm_input__wLnl+",h="ContactForm_button__KTiMq",v=n(9926),_=n(7750);function f(e){var t=e.onSubmit,n=(0,r.useState)(""),a=(0,l.Z)(n,2),c=a[0],s=a[1],i=(0,r.useState)(""),f=(0,l.Z)(i,2),x=f[0],p=f[1],b=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":p(a)}};return(0,o.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),t({name:c,number:x}),s(""),p("")},children:[(0,o.jsxs)("label",{className:m,children:["Name",(0,o.jsx)("input",{className:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:c,onChange:b})]}),(0,o.jsxs)("label",{className:m,children:["Number",(0,o.jsx)("input",{className:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:x,onChange:b})]}),(0,o.jsx)(v.Z,{variant:"contained",className:h,type:"submit",startIcon:(0,o.jsx)(_.Z,{}),children:"Add contact"})]})}var x="ContactList_contactList__rfZhn",p="ContactElement_contactElement__qJ-+X",b="ContactElement_contactText__RM54P",C="ContactElement_button__+k-2l",j=n(383),N=function(e){var t=e.name,n=e.number,a=e.onClick;return(0,o.jsxs)("li",{className:p,children:[(0,o.jsxs)("p",{className:b,children:[t,": ",n]}),(0,o.jsx)(v.Z,{variant:"contained",startIcon:(0,o.jsx)(j.Z,{}),className:C,type:"button",onClick:a,children:"Delete"})]})},Z=function(e){var t=e.contacts,n=e.removeContact;return(0,o.jsx)("ul",{className:x,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,o.jsx)(N,{name:a,number:r,onClick:function(){return n(t)}},t)}))})},z="Filter_filterLable__xUo7C",w="Filter_filterInput__cXwzH",g=function(e){var t=e.onChange,n=e.value;return(0,o.jsxs)("label",{className:z,children:["Find contacts by name",(0,o.jsx)("input",{className:w,type:"text",onChange:t,value:n})]})},k=n(2e3),F=n(5577),y=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},L=function(e){return e.filter},A="my-contacts_contacts__5wVo9",H=function(){var e=(0,a.v9)(y),t=(0,a.v9)(L),n=(0,a.I0)();(0,r.useEffect)((function(){n((0,k.yF)())}),[n]);return(0,o.jsxs)("div",{className:A,children:[(0,o.jsx)(i,{title:"Create New Contact",children:(0,o.jsx)(f,{onSubmit:function(e){n((0,k.uK)(e))}})}),(0,o.jsxs)(i,{title:"Contacts",children:[(0,o.jsx)(g,{onChange:function(e){var t=e.target;n((0,F.T)(t.value))},value:t}),(0,o.jsx)(Z,{contacts:e,removeContact:function(e){n((0,k.zY)(e))}})]})]})},M=function(){return(0,o.jsx)("div",{className:"container",children:(0,o.jsx)(H,{})})}},383:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),c=n(184),s=(0,r.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.Z=s},7750:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),c=n(184),s=(0,r.default)((0,c.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.Z=s}}]);
//# sourceMappingURL=399.b670691b.chunk.js.map