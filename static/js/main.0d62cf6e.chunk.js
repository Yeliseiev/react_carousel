(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),r=n(2),s=n(3),c=n(5),o=n(4),u=n(1),m=n.n(u),l=(n(12),n(13),n(0)),d=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={position:0},t.handleButton=function(e,n,i,a){var r=e+n;n>0&&(r===n&&a&&(r=i),r>0&&(r=0)),n<0&&(r===i+n&&a&&(r=0),r<i&&(r=i)),t.setState({position:r})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state.position,n=this.props,i=n.images,a=n.step,r=n.frameSize,s=n.itemWidth,c=n.animationDuration,o=n.infinite,u=a*s,m=-s*(i.length-r);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"Carousel",children:[Object(l.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(r*s,"px")},children:i.map((function(t,n){return Object(l.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(e,"px)"),transition:"".concat(c,"ms")},children:Object(l.jsx)("img",{src:t,alt:"".concat(n+1),style:{width:s}})},t)}))}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:"buttons__button",onClick:function(){return t.handleButton(e,u,m,o)},disabled:0===e&&!o,children:"<"}),Object(l.jsx)("button",{type:"button",className:"buttons__button","data-cy":"next",onClick:function(){return t.handleButton(e,-u,m,o)},disabled:e===m&&!o,children:">"})]})]})})}}]),n}(u.Component),h=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.step,a=e.frameSize,r=e.itemWidth,s=e.animationDuration,c=e.infinite;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(n.length," images")}),Object(l.jsx)(d,{images:n,step:i,frameSize:a,itemWidth:r,animationDuration:s,infinite:c}),Object(l.jsxs)("form",{action:"#",method:"post",className:"form",children:[Object(l.jsxs)("div",{className:"form__container",children:[Object(l.jsx)("label",{htmlFor:"stepId",children:"Step: "}),Object(l.jsx)("label",{htmlFor:"frameSizeId",children:"Frame size: "}),Object(l.jsx)("label",{htmlFor:"itemWidthId",children:"Item width: "}),Object(l.jsx)("label",{htmlFor:"animationDurationId",children:"Animation duration: "}),Object(l.jsx)("label",{htmlFor:"infiniteId",children:"Infinite: "})]}),Object(l.jsxs)("div",{className:"form__container",children:[Object(l.jsx)("input",{type:"number",name:"step",id:"stepId",defaultValue:3,step:1,min:1,max:n.length,onChange:function(e){return t.setState({step:Number(e.currentTarget.value)})}}),Object(l.jsx)("input",{type:"number",name:"frameSize",id:"frameSizeId",defaultValue:3,step:1,max:n.length,min:1,onChange:function(e){return t.setState({frameSize:Number(e.currentTarget.value)})}}),Object(l.jsx)("input",{type:"number",name:"itemWidth",id:"itemWidthId",defaultValue:130,min:100,max:200,step:10,onChange:function(e){return t.setState({itemWidth:Number(e.currentTarget.value)})}}),Object(l.jsx)("input",{type:"number",name:"animationDuration",id:"animationDurationId",defaultValue:1e3,step:500,min:500,onChange:function(e){return t.setState({animationDuration:Number(e.currentTarget.value)})}}),Object(l.jsx)("input",{type:"checkbox",name:"infinite",id:"infiniteId",onChange:function(e){return t.setState({infinite:e.currentTarget.checked})}})]})]})]})}}]),n}(m.a.Component);a.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0d62cf6e.chunk.js.map