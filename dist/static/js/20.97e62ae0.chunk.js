(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[20],{105:function(e,a,t){"use strict";t.r(a);var n=t(12),o=t(13),r=t(15),c=t(14),l=t(0),m=t.n(l),s=t(17),i=t(37),u=t(9),g=t(21).a.setLocalStorage,p=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={itemColor:{}},e.colorConfig=[{name:"red",color:"#F56C6C",msg:"\u7ea2\u8272"},{name:"blue",color:"#409EFF",msg:"\u84dd\u8272"},{name:"pink",color:"#FFC0CB",msg:"\u7c89\u8272"},{name:"green",color:"#7FFFAA",msg:"\u7eff\u8272"},{name:"black",color:"#000000",msg:"\u9ed1\u8272"},{name:"orange",color:"#FF8C00",msg:"\u6a59\u8272"},{name:"purple",color:"#800080",msg:"\u7d2b\u8272"},{name:"gray",color:"#708090",msg:"\u7070\u8272"},{name:"coffee",color:"#D2691E",msg:"\u5496\u5561\u8272"},{name:"matcha",color:"#55862F",msg:"\u62b9\u8336\u8272"},{name:"golden",color:"#FFD700",msg:"\u571f\u8c6a\u91d1"},{name:"pale",color:"#F8F8FF",msg:"\u82cd\u767d\u8272"}],e.handleClick=function(a){var t=e.props.getThemeName;e.setState({itemColor:a},(function(){t(a),g("themeName",a),e.PromptRef.handlePromptToggle()}))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state.itemColor;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"skin"},m.a.createElement("header",{className:"header"},m.a.createElement("div",{className:"left"},m.a.createElement("i",{className:"iconfont icon-jiantouzuo",onClick:function(){return e.props.history.goBack()}}),m.a.createElement("p",null,"\u5207\u6362\u76ae\u80a4"))),m.a.createElement("section",{className:"skin_content"},this.colorConfig.map((function(a){return m.a.createElement("div",{className:"color",key:a.name,onClick:function(){return e.handleClick(a)}},m.a.createElement("div",{style:{backgroundColor:a.color}}),m.a.createElement("p",null,a.msg))})))),m.a.createElement(i.a,{msg:"\u5207\u6362\u5230"+a.msg+"\u4e3b\u9898",ref:function(a){return e.PromptRef=a}}))}}]),t}(l.Component);a.default=Object(s.b)(null,{getThemeName:u.m})(p)}}]);
//# sourceMappingURL=20.97e62ae0.chunk.js.map