(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[9],{103:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n.n(a),c=n(26),i=n(12),s=n(13),o=n(15),l=n(14),u=n(0),m=n.n(u),p=n(16),d=n(17),h=n(20),f=n(9),g=n(165),v=n(134),E=n(166),y=n(150),b=n(37),k=n(36),w=n(126),j=n(21),N=n(241),O=(n(162),j.a.setLocalStorage),_=j.a.getLocalStorage,S=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={banner:[],recommend:[],song:[],newMusic:[]},e.option=[{icon:"iconfont icon-rili",title:"\u6bcf\u65e5\u63a8\u8350",path:null},{icon:"iconfont icon-gedan",title:"\u6b4c\u5355",path:"/songsheet"},{icon:"iconfont icon-paihangbang",title:"\u6392\u884c\u699c",path:"/rank"},{icon:"iconfont icon-diantai",title:"\u7535\u53f0",path:"/dj"}],e.handleRecommend=Object(c.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.props.loginStatus,Object.keys(n).length){t.next=5;break}return t.abrupt("return",N.a.info("\u8bf7\u5148\u767b\u5f55"));case 5:e.props.history.push("/recommend?id=daily");case 6:case"end":return t.stop()}}),t)}))),e.handleClick=function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,i,s,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.t)(n.id);case 2:c=t.sent,i={name:n.name,id:n.id,picUrl:n.picUrl,ar:n.song.artists,al:n,url:c.data.data[0].url},s=e.state.newMusic.map((function(e){return{name:e.name,id:e.id,picUrl:e.picUrl,ar:e.song.artists,al:e}})),-1===(o=_("hot_history")||[]).indexOf(n.name)&&(o.push(n.name),O("hot_history",o)),console.log(i,"option"),O("player",i),O("playerList",s),O("playerIndex",a),e.props.getMenusData(i),e.props.getPlayerList(s),e.props.getPlayerIndex(a),e.props.getIsPlay(!0),e.props.history.push("/player");case 16:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.getData(),this.getNewMusicData(),this.optionDOM=m.a.createElement("ul",{className:"discover_option"},this.option.map((function(t){return t.path?m.a.createElement("li",{key:t.title},m.a.createElement(p.NavLink,{to:t.path},m.a.createElement("div",{className:"icon"},m.a.createElement("i",{className:t.icon})),m.a.createElement("span",null,t.title))):m.a.createElement("li",{key:t.title},m.a.createElement("div",{onClick:e.handleRecommend},m.a.createElement("div",{className:"icon"},m.a.createElement("i",{className:t.icon})),m.a.createElement("span",null,t.title)))})))}},{key:"getData",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,c,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.c)(1);case 2:return t=e.sent,n=t.data.banners.map((function(e){return{image:e.pic}})),e.next=6,Object(h.k)(8);case 6:return a=e.sent,c=a.data.result.map((function(e){return{id:e.id,name:e.name,picUrl:e.picUrl,playCount:e.playCount}})),e.next=10,Object(h.o)("\u534e\u8bed","hot",39);case 10:i=e.sent,s=i.data.playlists.map((function(e){return{id:e.id,name:e.name,picUrl:e.coverImgUrl,playCount:e.playCount}})),this.setState({banner:n,recommend:c,song:s});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNewMusicData",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)();case 2:t=e.sent,this.setState({newMusic:t.data.result});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.banner,a=t.recommend,r=t.song,c=t.newMusic;return console.log(c),n.length?m.a.createElement(u.Fragment,null,m.a.createElement("div",{className:"discover recommend"},m.a.createElement(g.a,{banner:n,customPaging:function(){return m.a.createElement("span",null)},className:"home_slide",handleShowBanner:function(){e.largeSlide.handleShowBanner()}}),this.optionDOM,m.a.createElement("section",{className:"discover_song"},m.a.createElement("header",{className:"discover_song_head"},m.a.createElement("h3",null,"\u53d1\u73b0\u597d\u6b4c\u5355")),m.a.createElement(y.a,{recommend:a})),m.a.createElement("section",{className:"discover_song_new recommend_list"},m.a.createElement("header",{className:"discover_song_head"},m.a.createElement("h3",null,"\u6700\u65b0\u97f3\u4e50")),m.a.createElement("ul",null,c.map((function(t,n){return m.a.createElement("li",{key:n,onClick:function(){return e.handleClick(t,n)}},m.a.createElement("div",{className:"song_des"},m.a.createElement(w.a,{src:t.picUrl}),m.a.createElement("div",{className:"song_des_info"},m.a.createElement("p",{className:"title"},t.name,"\xa0",m.a.createElement("span",null,t.song.alias.length>0?"(".concat(t.song.alias[0],")"):"")),m.a.createElement("p",null,t.song.artists[0].name," - ",t.song.album.name))),m.a.createElement("div",{className:"song_mv"},m.a.createElement("i",{className:"iconfont icon-tuya-"})))})))),m.a.createElement("section",{className:"discover_song discover_song_every"},m.a.createElement("header",{className:"discover_song_head"},m.a.createElement("h3",null,"\u665a\u971e\u707f\u70c2 \u97f3\u4e50\u60ec\u610f")),m.a.createElement("section",{className:"song_every_list"},r.map((function(e,t){return m.a.createElement(p.NavLink,{to:"/recommend?id=".concat(e.id,"&name=").concat(e.name),key:t},m.a.createElement(v.a,{item:e,color:"#000"}))}))))),m.a.createElement(E.a,{ref:function(t){return e.largeSlide=t}},m.a.createElement(g.a,{banner:n,className:"slider_show_slide",customPaging:function(e){return m.a.createElement("div",null,e+1,"/",n.length)}})),m.a.createElement(b.a,{msg:"\u8bf7\u60a8\u767b\u9646",ref:function(t){return e.promptRef=t}})):m.a.createElement(k.a,null)}}]),n}(u.Component);t.default=Object(d.b)((function(e){return{loginStatus:e.loginStatus}}),{getMenusData:f.f,getPlayerList:f.k,getIsPlay:f.e,getPlayerIndex:f.j})(S)},126:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(129),i=n.n(c);t.a=function(e){var t={options:{error:n(127),loading:n(128),throttleWait:1e3},src:e.src};return r.a.createElement(i.a,t)}},127:function(e,t,n){e.exports=n.p+"static/media/loading-error.99e68751.svg"},128:function(e,t,n){e.exports=n.p+"static/media/loading.0bab9ee3.svg"},134:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(142),i=n(126);t.a=function(e){var t=e.item,n=e.color;return r.a.createElement("div",{className:"song_item",key:t.id},r.a.createElement("div",{className:"info"},r.a.createElement(i.a,{src:t.picUrl}),r.a.createElement("p",null,r.a.createElement("i",{className:"iconfont icon-bofangsanjiaoxing",style:{color:n}}),r.a.createElement("span",null,Object(c.a)(t.playCount)))),r.a.createElement("p",null,t.name))}},150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(16),i=n(134);t.a=function(e){var t=e.recommend;return r.a.createElement("section",{className:"song_recommend"},t.map((function(e,t){return r.a.createElement(c.NavLink,{to:"/recommend?id=".concat(e.id,"&name=").concat(e.name),key:t},r.a.createElement(i.a,{item:e,color:"#fff"}))})))}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(12),r=n(13),c=n(15),i=n(14),s=n(0),o=n.n(s),l=n(190),u=n.n(l),m=(n(192),n(193),function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.banner,n=e.className,a=e.customPaging,r=e.handleShowBanner;return o.a.createElement(u.a,Object.assign({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1},{customPaging:a,className:n}),t.map((function(e,t){return o.a.createElement("img",{src:e.image,alt:"",key:t,onClick:r||function(){}})})))}}]),n}(s.Component))},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(12),r=n(13),c=n(15),i=n(14),s=n(0),o=n.n(s),l=n(28),u=n(29),m=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={isBannerShow:!1},r.handleShowBanner=function(){r.setState({isBannerShow:!0}),Object(l.a)(r.slideShowRef.current,{opacity:1},.25,(function(){Object(u.a)(!0)}))},r.handleHideBanner=function(){Object(l.a)(r.slideShowRef.current,{opacity:0},.3,(function(){setTimeout((function(){r.setState({isBannerShow:!1})}),300)})),Object(u.a)(!1)},r.slideShowRef=Object(s.createRef)(),r}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.isBannerShow;return o.a.createElement("div",{className:"slider_show",onClick:this.handleHideBanner,ref:this.slideShowRef,style:{display:e?"block":"none"}},this.props.children)}}]),n}(s.Component)}}]);
//# sourceMappingURL=9.9437eb0e.chunk.js.map