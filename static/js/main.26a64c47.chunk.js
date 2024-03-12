(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,a,c){},13:function(e,a,c){"use strict";c.r(a);var t=c(1),s=c(4),r=c.n(s),n=(c(9),c(10),c(11),c(2)),i=c.n(n),l=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],d=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],o=c(0);const j=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((e=>{const a=(c=e.categoryId,d.find((e=>e.id===c)));var c;if(!a)return null;const t=(s=a.ownerId,l.find((e=>e.id===s)));var s;return t?{...e,category:a,user:t}:null}));const h=()=>{const[e,a]=Object(t.useState)(""),[c,s]=Object(t.useState)("all"),r=function(e,a){let c=[...j];const t=e.trim().toLowerCase();return t&&(c=c.filter((e=>e.name.toLowerCase().includes(t)))),"all"!==a&&(c=c.filter((e=>e.user.name===a))),c}(e,c);return Object(o.jsx)("div",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"Product Categories"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(o.jsx)("a",{className:i()({"is-active":"all"===c}),"data-cy":"FilterAllUsers",href:"#/",onClick:()=>s("all"),children:"All"}),Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:()=>s("Roma"),children:"Roma"}),Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:i()({"is-active":"Anna"===c}),onClick:()=>s("Anna"),children:"Anna"}),Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:()=>s("Max"),className:i()({"is-active":"Max"===c}),children:"Max"}),Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:()=>s("John"),className:i()({"is-active":"John"===c}),children:"John"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",onChange:e=>a(e.target.value),value:e}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(o.jsx)("span",{className:"icon is-right",children:e&&Object(o.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:()=>a("")})})]})}),Object(o.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(o.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),c&&Object(o.jsx)("div",{className:"box table-container",children:r.length>0?Object(o.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(o.jsx)("tbody",{children:r.map((e=>{const a="f"===e.user.sex;return Object(o.jsxs)("tr",{"data-cy":"Product",children:[Object(o.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(o.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(o.jsxs)("td",{"data-cy":"ProductCategory",children:[e.category.icon,"-",e.category.title]}),Object(o.jsx)("td",{"data-cy":"ProductUser",className:i()("has-text-link",{"has-text-danger":a}),children:e.user.name})]},e.id)}))})]}):Object(o.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.26a64c47.chunk.js.map