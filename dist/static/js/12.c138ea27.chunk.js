(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[12],{104:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a.n(n),c=a(26),i=a(12),s=a(13),o=a(15),l=a(14),u=a(0),d=a.n(u),m=a(16),g=a(20),p=a(17),v=a(163),f=a(36),h=a(164),E=a(126),b=a(241),S=(a(162),h.a.setSessionStorage),k=h.a.getSessionStorage,O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={tag:[],videoList:[]},e.handleChangeTag=function(t){S("video_tag",t),e.getVideoTag(t.id)},e}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.A)();case 2:t=e.sent,this.setState({tag:t.data.data},(function(){a.getVideoTag((k("video_tag")||{}).id||a.state.tag[0].id)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getVideoTag",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props.loginStatus,Object.keys(a).length){e.next=3;break}return e.abrupt("return",b.a.info("\u8bf7\u5148\u767b\u5f55"));case 3:return e.next=5,Object(g.B)(t);case 5:200===(n=e.sent).data.code&&this.setState({videoList:n.data.datas});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.tag,a=e.videoList;return t.length?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"video"},d.a.createElement(v.a,{tagList:t,handleChangeTag:this.handleChangeTag,tagIndex:(k("video_tag")||{}).index}),d.a.createElement("section",null,a.map((function(e,t){return d.a.createElement(m.NavLink,{to:"/videoDetails/"+e.data.vid,key:t},d.a.createElement(E.a,{src:e.data.coverUrl}),d.a.createElement("div",{className:"info"},d.a.createElement("h4",null,e.data.title),d.a.createElement(E.a,{src:e.data.creator&&e.data.creator.avatarUrl})),d.a.createElement("section",{className:"bar"},d.a.createElement("div",{className:"left"},d.a.createElement(E.a,{src:e.data.creator&&e.data.creator.avatarUrl}),d.a.createElement("p",null,e.data.creator&&e.data.creator.nickname)),d.a.createElement("div",{className:"icon"},d.a.createElement("p",null,d.a.createElement("i",{className:"iconfont icon-ziyuan1"}),d.a.createElement("span",null,e.data.praisedCount)),d.a.createElement("p",null,d.a.createElement("i",{className:"iconfont icon-pinglun"}),d.a.createElement("span",null,e.data.commentCount)),d.a.createElement("p",null,d.a.createElement("i",{className:"iconfont icon-ziyuan"})))))}))))):d.a.createElement(f.a,null)}}]),a}(u.Component);t.default=Object(p.b)((function(e){return{loginStatus:e.loginStatus}}))(O)},126:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(129),i=a.n(c);t.a=function(e){var t={options:{error:a(127),loading:a(128),throttleWait:1e3},src:e.src};return r.a.createElement(i.a,t)}},127:function(e,t,a){e.exports=a.p+"static/media/loading-error.99e68751.svg"},128:function(e,t,a){e.exports=a.p+"static/media/loading.0bab9ee3.svg"},163:function(e,t,a){"use strict";var n=a(22),r=a(12),c=a(13),i=a(15),s=a(14),o=a(0),l=a.n(o),u=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={tagIndex:e.props.tagIndex||0},e.handleClickTag=function(t,a){e.setState({tagIndex:a}),e.props.handleChangeTag(Object(n.a)(Object(n.a)({},t),{},{index:a}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tagList,a=this.state.tagIndex;return l.a.createElement("nav",{className:"nav_list"},l.a.createElement("div",{className:"nav_list_scroll"},t.map((function(t,n){return l.a.createElement("section",{className:n===a?"activate":null,key:n,onClick:function(){return e.handleClickTag(t,n)}},l.a.createElement("p",null,t.name))}))))}}]),a}(o.Component);t.a=u},164:function(e,t,a){"use strict";t.a={getSessionStorage:function(e){return JSON.parse(sessionStorage.getItem(e))},setSessionStorage:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},recommendSessionStorage:function(e){sessionStorage.removeItem(e)}}}}]);
//# sourceMappingURL=12.c138ea27.chunk.js.map