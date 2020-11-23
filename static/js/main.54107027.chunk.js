(this["webpackJsonpasync-week-project"]=this["webpackJsonpasync-week-project"]||[]).push([[0],{23:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n(1),i=n.n(l),s=n(15),a=n.n(s),r=(n(23),n(2)),o=[{title:"Stack",url:"/stack"},{title:"Queue",url:"/queue"},{title:"Linked List",url:"/linkedlist"},{title:"Binary Search Tree",url:"binarysearchtree"}],u=n(5),b=Object(u.a)({bar:{backgroundColor:"#87CEEB",height:"80px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.2rem",outline:"2px solid black"},menu:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridGap:"10px",textAlign:"center",width:"70vw",justifyContent:"end",marginRight:"2rem",listStyle:"none"},navLinks:{color:"black",textDecoration:"none",backgroundColor:"#008080",padding:"0.5rem 1rem","&:hover":{backgroundColor:"#6d76f7",borderRadius:"4px",transition:"all 0.2s ease-out"}}}),j=function(e){var t=b();return console.log(e),Object(c.jsxs)("nav",{className:t.bar,children:[Object(c.jsx)("h1",{className:"navbar-logo",children:"React"}),Object(c.jsx)("ul",{className:t.menu,children:o.map((function(n,l){return Object(c.jsxs)("li",{children:[console.log(n.title),Object(c.jsx)("button",{className:t.navLinks,onClick:function(){return e.setDisplay(n.title)},children:n.title})]},l)}))})]})},d=Object(u.a)({app:{display:"flex",width:"100vw",height:"100vh"}}),h=n(7),x=n(14),O=n.n(x),m=n(17),f=Object(u.a)({sideBar:{backgroundColor:"#87CEEB",display:"block",width:"15%",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"1.2rem",borderRight:"2px solid black",borderTop:"2px solid black"},window:{display:"flex",width:"100%",height:"90%",position:"relative"},button:{display:"inlineBlock",backgroundColor:"black",color:"white",border:"none",textAlign:"center",textDecoration:"none",margin:"5vh",borderRadius:"50%",width:"8vw",height:"8vw",fontSize:"1vw"},grid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",textAlign:"center",width:"100%",height:"7.5rem",outline:"2px solid black"},cell:{outline:"2px solid black",cursor:"pointer"},square:{display:"flex",width:"28px",height:"28px",margin:"1px",backgroundColor:"red",justifyContent:"center",alignItems:"center"},stacksquare:{display:"flex",width:"28px",height:"28px",margin:"20px",backgroundColor:"red",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"0"},total:{display:"flex",width:"25%",height:"25%",backgroundColor:"#00FF00",position:"absolute",justifyContent:"center",alignItems:"center",left:"45%",bottom:"35%",fontSize:"32px"}}),k=n(4),C=n(6),p=function(){function e(){Object(k.a)(this,e),this.top=null}return Object(C.a)(e,[{key:"add",value:function(e){return this.top={data:e,previous:this.top},this}},{key:"remove",value:function(){if(this.top){var e=this.top.data;return this.top=this.top.previous,e}}}]),e}(),v=function(){function e(){Object(k.a)(this,e),this.queue=null}return Object(C.a)(e,[{key:"add",value:function(e){if(this.queue){for(var t=this.queue;t.next;)t=t.next;t.next={data:e,next:null}}else this.queue={data:e,next:null};return this}},{key:"remove",value:function(){if(this.queue){var e=this.queue.data;return this.queue=this.queue.next,e}return null}}]),e}(),N=function(){function e(){Object(k.a)(this,e),this.head=this.tail=null}return Object(C.a)(e,[{key:"addToTail",value:function(e){if(this.tail)if(this.head.next){var t=new g(e,this.tail);this.tail.next=t,this.tail=t}else this.tail=new g(e,this.head),this.head.next=this.tail;else this.tail=new g(e),this.head=this.tail;return this}},{key:"removeFromTail",value:function(){var e=null;return this.tail?this.head!==this.tail?(e=this.tail.item,this.tail=this.tail.prev,this.tail.next=null,e):(e=this.head.item,this.tail=null,this.head=null,e):e}},{key:"forEach",value:function(e){var t=this.head;if(t){for(;t.next;)e(t.item),t=t.next;e(t.item)}}}]),e}(),g=function e(t,n,c){Object(k.a)(this,e),this.item=t,this.next=c||null,this.prev=n||null};var w=function(e){return Object(c.jsx)("div",{className:e.boxClass,id:e.id,children:e.num})},y=n(8),S=function(){for(var e=f(),t=Object(l.useState)(new p),n=Object(r.a)(t,2),i=n[0],s=n[1],a=Object(l.useState)(0),o=Object(r.a)(a,2),u=o[0],b=o[1],j=Object(l.useState)(0),d=Object(r.a)(j,2),x=d[0],k=d[1],C=Object(l.useState)([]),v=Object(r.a)(C,2),N=v[0],g=v[1],S=Object(l.useState)(1e3),q=Object(r.a)(S,2),T=q[0],B=q[1],L=[],I=function(){var e=Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(x+i.remove()),s(i),N.pop(),b(0),B(T+25);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=0;R<N.length;R++)R+1<N.length?L.push(Object(c.jsx)("div",{children:Object(c.jsx)(w,{number:R,id:"",num:N[R],boxClass:e.stacksquare})},"".concat(R,"Stack"))):L.push(Object(c.jsx)("div",{children:Object(c.jsx)(w,{number:R,id:"target",num:N[R],boxClass:e.stacksquare})},"".concat(R,"Stack")));return Object(c.jsxs)("div",{className:e.window,children:[Object(c.jsxs)("div",{className:e.sideBar,children:[Object(c.jsx)("button",{onClick:function(){return k(0)},children:"Clear Total"}),Object(c.jsxs)("div",{className:e.grid,children:[Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(1)},children:"1"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(2)},children:"2"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(3)},children:"3"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(4)},children:"4"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(5)},children:"5"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(6)},children:"6"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(7)},children:"7"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(8)},children:"8"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(9)},children:"9"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){b(u>=0?-1*u:u)},children:"-"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return b(0)},children:"0"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){b(u>=0?u:-1*u)},children:"+"})]}),Object(c.jsx)("button",{className:e.button,onClick:function(){return i.add(u),g([].concat(Object(h.a)(N),[u])),s(i),b(0),B(T-25),void Object(y.a)({targets:"#target",translateX:T,easing:"easeInOutSine"})},children:"Add to Stack"}),Object(c.jsx)("button",{className:e.button,onClick:function(){i.top?I():k(x)},children:"Remove from stack"})]}),Object(c.jsx)("div",{className:e.total,children:x}),Object(c.jsx)(w,{num:u,boxClass:e.square}),L]})},q=Object(u.a)({listsquare:{display:"flex",width:"28px",height:"28px",margin:"1px",backgroundColor:"red",justifyContent:"center",alignItems:"center"},listdiv:{display:"flex"}}),T=function(){for(var e=f(),t=q(),n=Object(l.useState)(0),i=Object(r.a)(n,2),s=i[0],a=i[1],o=Object(l.useState)(new N),u=Object(r.a)(o,2),b=u[0],j=u[1],d=Object(l.useState)([]),x=Object(r.a)(d,2),O=x[0],m=x[1],k=[],C=0;C<O.length;C++)C+1<O.length?k.push(Object(c.jsxs)("div",{className:t.listdiv,children:[Object(c.jsx)(w,{number:C,id:"",num:O[C],boxClass:e.listsquare}),Object(c.jsx)("span",{children:"\u2192"})]},"".concat(C,"List"))):k.push(Object(c.jsx)("div",{id:"target",className:t.listdiv,children:Object(c.jsx)(w,{number:C,num:O[C],boxClass:e.listsquare})},"".concat(C,"List")));return Object(c.jsxs)("div",{className:e.window,children:[Object(c.jsxs)("div",{className:e.sideBar,children:[Object(c.jsx)("button",{onClick:function(){m([]),j(new N)},children:"Clear List"}),Object(c.jsxs)("div",{className:e.grid,children:[Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(1)},children:"1"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(2)},children:"2"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(3)},children:"3"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(4)},children:"4"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(5)},children:"5"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(6)},children:"6"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(7)},children:"7"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(8)},children:"8"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(9)},children:"9"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){a(s>=0?-1*s:s)},children:"-"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return a(0)},children:"0"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){a(s>=0?s:-1*s)},children:"+"})]}),Object(c.jsx)("button",{className:e.button,onClick:function(){return b.addToTail(s),m([].concat(Object(h.a)(O),[s])),j(b),void a(0)},children:"Add to List"}),Object(c.jsx)("button",{className:e.button,onClick:function(){b?(b.removeFromTail(),j(b),a(0),O.pop(),m(O)):console.log("nothing here")},children:"Remove from List"})]}),Object(c.jsx)(w,{num:s,boxClass:e.square}),k]})},B=function(){var e=f(),t=Object(l.useState)(0),n=Object(r.a)(t,2),i=n[0],s=n[1],a=Object(l.useState)(0),o=Object(r.a)(a,2),u=(o[0],o[1]),b=Object(l.useState)(1e3),j=Object(r.a)(b,2);j[0],j[1];return Object(c.jsx)("div",{className:e.window,children:Object(c.jsxs)("div",{className:e.sideBar,children:[Object(c.jsx)("button",{onClick:function(){return u(0)},children:"Clear Total"}),Object(c.jsxs)("div",{className:e.grid,children:[Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(1)},children:"1"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(2)},children:"2"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(3)},children:"3"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(4)},children:"4"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(5)},children:"5"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(6)},children:"6"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(7)},children:"7"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(8)},children:"8"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(9)},children:"9"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){s(i>=0?-1*i:i)},children:"-"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(0)},children:"0"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){s(i>=0?i:-1*i)},children:"+"})]})]})})},L=function(){for(var e=f(),t=Object(l.useState)(0),n=Object(r.a)(t,2),i=n[0],s=n[1],a=Object(l.useState)(new v),o=Object(r.a)(a,2),u=o[0],b=o[1],j=Object(l.useState)(0),d=Object(r.a)(j,2),x=d[0],O=d[1],m=Object(l.useState)([]),k=Object(r.a)(m,2),C=k[0],p=k[1],N=Object(l.useState)(1e3),g=Object(r.a)(N,2),S=g[0],q=g[1],T=[],B=0;B<C.length;B++)B+1<C.length?T.push(Object(c.jsx)("div",{children:Object(c.jsx)(w,{number:B,id:"",num:C[B],boxClass:e.stacksquare})},"".concat(B,"Queue"))):T.push(Object(c.jsx)("div",{children:Object(c.jsx)(w,{number:B,id:"target",num:C[B],boxClass:e.stacksquare})},"".concat(B,"Queue")));return Object(c.jsxs)("div",{className:e.window,children:[Object(c.jsxs)("div",{className:e.sideBar,children:[Object(c.jsx)("button",{onClick:function(){return O(0)},children:"Clear Total"}),Object(c.jsxs)("div",{className:e.grid,children:[Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(1)},children:"1"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(2)},children:"2"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(3)},children:"3"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(4)},children:"4"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(5)},children:"5"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(6)},children:"6"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(7)},children:"7"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(8)},children:"8"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(9)},children:"9"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){s(i>=0?-1*i:i)},children:"-"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){return s(0)},children:"0"}),Object(c.jsx)("button",{className:e.cell,onClick:function(){s(i>=0?i:-1*i)},children:"+"})]}),Object(c.jsx)("button",{className:e.button,onClick:function(){return u.add(i),p([].concat(Object(h.a)(C),[i])),b(u),s(0),q(S-25),void Object(y.a)({targets:"#target",translateX:S,easing:"easeInOutSine"})},children:"Add to Queue"}),Object(c.jsx)("button",{className:e.button,onClick:function(){u?(O(x+u.remove()),b(u),s(0),C.shift()):O(x)},children:"Remove from Queue"})]}),Object(c.jsx)("div",{className:e.total,children:x}),Object(c.jsx)(w,{num:i,boxClass:e.square}),T]})};var I=function(){var e,t=d(),n=Object(l.useState)("Stack"),i=Object(r.a)(n,2),s=i[0],a=i[1];switch(s){case"Stack":e=Object(c.jsx)(S,{});break;case"Queue":e=Object(c.jsx)(L,{});break;case"Linked List":e=Object(c.jsx)(T,{});break;case"Binary Search Tree":e=Object(c.jsx)(B,{});break;default:e=Object(c.jsx)(S,{})}return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{setDisplay:a}),Object(c.jsx)("main",{className:t.app,children:e})]})};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.54107027.chunk.js.map