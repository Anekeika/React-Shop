(this.webpackJsonpreact_shop=this.webpackJsonpreact_shop||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(2),a=c.n(n),i=c(7),r=c.n(i),s=(c(13),c(0));function o(){return Object(s.jsx)("nav",{className:"purple darken-4",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"!#",className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function l(){return Object(s.jsx)("footer",{className:"page-footer purple darken-2",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var d=c(8),j=c(1),u=c(3);function b(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})}function h(t){var e=t.mainId,c=t.displayName,n=t.price.finalPrice,a=t.displayAssets,i=t.granted,r=t.addToCart,o=void 0===r?Function.prototype:r,l=e;return Object(s.jsxs)("div",{className:"card",id:l,children:[Object(s.jsxs)("div",{className:"card-image",children:[Object(s.jsx)("img",{src:a[0].background,alt:c}),Object(s.jsx)("span",{className:"card-title ",children:c})]}),Object(s.jsx)("div",{className:"card-content",children:Object(s.jsx)("p",{children:i[0].description})}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return o({id:l,displayName:c,finalPrice:n})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"price right",children:[n," \u0440\u0443\u0431."]})]})]})}function O(t){var e=t.goods,c=void 0===e?[]:e,n=t.addToCart,a=void 0===n?Function.prototype:n;return c.length?Object(s.jsx)("div",{className:"goods",children:c.map((function(t){return Object(s.jsx)(h,Object(j.a)(Object(j.a)({},t),{},{addToCart:a}),t.mainId)}))}):Object(s.jsx)("h3",{children:"Nothing here"})}function m(t){var e=t.quantity,c=void 0===e?0:e,n=t.handleCartShow,a=void 0===n?Function.prototype:n;return Object(s.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:a,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(s.jsx)("span",{className:"cart-quantity",children:c}):null]})}function p(t){var e=t.id,c=t.displayName,n=t.finalPrice,a=t.quantity,i=t.removeFromCart,r=void 0===i?Function.prototype:i,o=t.decQuantityInCart,l=void 0===o?Function.prototype:o,d=t.incQuantityInCart,j=void 0===d?Function.prototype:d;return Object(s.jsxs)("li",{className:"collection-item",children:[c," (",n," \u0440\u0443\u0431.) x",a," = ",n*a," \u0440\u0443\u0431."," ",Object(s.jsx)("i",{className:"material-icons cart-delete cart-quantity",onClick:function(){return l(e)},children:"remove"})," ",Object(s.jsx)("i",{className:"material-icons cart-delete cart-quantity",onClick:function(){return j(e)},children:"add"}),Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return r(e)},children:Object(s.jsx)("i",{className:"material-icons cart-delete",children:"close"})})]})}function f(t){var e=t.order,c=void 0===e?[]:e,n=t.handleCartShow,a=void 0===n?Function.prototype:n,i=t.removeFromCart,r=void 0===i?Function.prototype:i,o=t.incQuantityInCart,l=t.decQuantityInCart,d=c.reduce((function(t,e){return t+e.finalPrice*e.quantity}),0);return Object(s.jsxs)("ul",{className:"collection card-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(t){return Object(s.jsx)(p,Object(j.a)({removeFromCart:r,incQuantityInCart:o,decQuantityInCart:l},t),t.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",d," \u0440\u0443\u0431. ",Object(s.jsx)("button",{className:"secondary-content button-buy",children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"})]}),Object(s.jsx)("i",{className:"material-icons cart-close",onClick:a,children:"close"})]})}function x(t){var e=t.displayName,c=void 0===e?"":e,a=t.closeAlert,i=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var t=setTimeout(i,3e3);return function(){clearTimeout(t)}}),[c]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function v(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(!0),r=Object(u.a)(i,2),o=r[0],l=r[1],h=Object(n.useState)([]),p=Object(u.a)(h,2),v=p[0],y=p[1],N=Object(n.useState)(!1),C=Object(u.a)(N,2),g=C[0],q=C[1],F=Object(n.useState)(""),k=Object(u.a)(F,2),I=k[0],S=k[1],w=function(){q(!g)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"49963e70-57af7940-164463ba-48f0a9ae"}}).then((function(t){return t.json()})).then((function(t){t.shop&&a(t.shop),l(!1)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(m,{quantity:v.length,handleCartShow:w}),o?Object(s.jsx)(b,{}):Object(s.jsx)(O,{goods:c,addToCart:function(t){var e=v.findIndex((function(e){return e.id===t.id}));if(e<0){var c=Object(j.a)(Object(j.a)({},t),{},{quantity:1});y([].concat(Object(d.a)(v),[c]))}else{var n=v.map((function(t,c){return c===e?Object(j.a)(Object(j.a)({},t),{},{quantity:t.quantity+1}):t}));y(n)}S(t.displayName)}}),g&&Object(s.jsx)(f,{order:v,handleCartShow:w,removeFromCart:function(t){var e=v.filter((function(e){return e.id!==t}));y(e)},incQuantityInCart:function(t){var e=v.map((function(e){if(e.id===t){var c=e.quantity+1;return Object(j.a)(Object(j.a)({},e),{},{quantity:c})}return e}));y(e)},decQuantityInCart:function(t){var e=v.map((function(e){if(e.id===t){var c=e.quantity-1;return Object(j.a)(Object(j.a)({},e),{},{quantity:c>=0?c:0})}return e}));y(e)}}),I&&Object(s.jsx)(x,{displayName:I,closeAlert:function(){S("")}})]})}var y=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(v,{}),Object(s.jsx)(l,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.24ea3583.chunk.js.map