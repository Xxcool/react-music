(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[13],{106:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a.n(n),l=a(22),c=a(26),i=a(12),o=a(13),s=a(15),u=a(14),p=a(0),d=a.n(p),m=a(17),y=a(9),h=a(20),f=a(285),g=a.n(f),v=(a(287),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return d.a.createElement(g.a,{ref:function(t){return e.scrollObj=t},click:!0},this.props.children)}}]),a}(p.Component)),b=a(37),E=function(e){var t=parseInt(e),a=parseInt(t/60)||0,n=(t%60||0)+"";return 0===a?a="00":a<10&&(a="0"+a),1===n.length&&(n="0"+n),a+":"+n},O=a(48),k=a(126),P=a(21),j=P.a.setLocalStorage,N=P.a.getLocalStorage,x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t,a){var n=e.props,r=n.getMenusData,l=n.getPlayerIndex,c=n.getData,i=n.handlePlay,o=N("hot_history")||[];-1===o.indexOf(t.name)&&(o.push(t.name),j("hot_history",o)),r(t),l(a),c(t,i),j("player",t),j("playerIndex",a),e.props.handleListShow(!1,0)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.playerList,n=t.playerIndex;return d.a.createElement("section",{className:"content"},d.a.createElement(v,null,a.map((function(t,a){return d.a.createElement("div",{key:t.id,onClick:function(){return e.handleClick(t,a)}},d.a.createElement("div",{className:"left"},d.a.createElement(k.a,{src:t.picUrl}),d.a.createElement("div",{className:"info"},d.a.createElement("p",null,t.name),d.a.createElement("p",null,t.al?t.al.name:t.al," -",(t.ar||[]).map((function(e){return d.a.createElement(p.Fragment,{key:e.id},e.name," ")}))))),d.a.createElement("i",{className:n===a?"iconfont icon-bofang1":"iconfont icon-kaishi"}))}))))}}]),a}(p.Component),S=Object(m.b)((function(e){return{playerList:e.playerList,playerIndex:e.playerIndex}}),{getMenusData:y.f,getPlayerIndex:y.j})(x),I=a(28),D=a(288),C=a.n(D),w=a(289),M=a.n(w),L=P.a.setLocalStorage,T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={msg:"",isShow:!1},n.getData=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var c,i,o,s,u,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.props,i=c.getMenusData,o=c.getPlayLyric,e.prev=1,e.next=4,Object(h.g)(t.id);case 4:return e.next=6,Object(h.t)(t.id);case 6:return s=e.sent,e.next=9,Object(h.s)(t.id);case 9:u=e.sent,(p=s.data.data[0].url)?(i(Object(l.a)(Object(l.a)({},t),{},{url:p})),L("player",Object(l.a)(Object(l.a)({},t),{},{url:p})),o(Object(O.a)(u.data.lrc.lyric))):n.setState({msg:"\u8be5\u6b4c\u66f2,\u65e0\u7248\u6743\u6743\u9650"},(function(){n.handlePause(),o([]),n.promptRef.handlePromptToggle()})),a(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),n.setState({msg:"\u8be5\u6b4c\u66f2,\u65e0\u7248\u6743\u6743\u9650"},(function(){n.handlePause(),o([]),n.promptRef.handlePromptToggle()}));case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,a){return e.apply(this,arguments)}}(),n.handleTogglePlayer=function(){var e=n.props,t=e.isPlay,a=e.getIsPlay;t?(a(!1),n.handlePause()):(a(!0),n.handlePlay())},n.handleDishToggle=function(e,t){var a=n.props,r=a.getPlayStatus,l=a.isPlayStatus;Object(I.a)(e,{opacity:0},.4,(function(){r(!l),Object(I.a)(t,{opacity:1},.4,(function(){r(!l)}))}))},n.handleClickSlide=function(e){if(n.playerDOM.duration){var t=e.nativeEvent.offsetX*n.playerDOM.duration/n.lineRef.current.clientWidth;n.props.isPlay||(n.props.getIsPlay(!0),n.handlePlay()),n.playerDOM.currentTime=t}},n.handleUp=Object(c.a)(r.a.mark((function e(){var t,a,l,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.props,a=t.playerList,l=t.playerIndex,c=t.getPlayerIndex,i={},l?(c(l-1),L("playerIndex",l-1),i=a[l-1]):(c(a.length-1),L("playerIndex",a.length-1),i=a[a.length-1]),n.handleToggleAudio(i);case 4:case"end":return e.stop()}}),e)}))),n.handleNext=Object(c.a)(r.a.mark((function e(){var t,a,l,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.props,a=t.playerList,l=t.playerIndex,c=t.getPlayerIndex,i={},l===a.length-1?(c(0),L("playerIndex",0),i=a[0]):(c(l+1),L("playerIndex",l+1),i=a[l+1]),n.handleToggleAudio(i);case 4:case"end":return e.stop()}}),e)}))),n.handleToggleAudio=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.props,l=a.getMenusData,c=a.getIsPlay,l(t),L("player",t),n.getData(t,(function(){c(!0);var e=n.playerDOM;e.load();var t=e.play();void 0!==t&&t.then((function(){e.play()})).catch((function(){}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleMode=function(e){var t=n.props,a=t.modeTypeArr,r=t.modeNum,l=t.getModeNum;a.length-1===r?l(0):l(r+1),n.setState({msg:e},(function(){n.promptRef.handlePromptToggle()}))},n.handleListShow=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e?n.setState({isShow:e},(function(){Object(I.a)(n.playerList.current,{opacity:t},.8)})):Object(I.a)(n.playerList.current,{opacity:t},.8,(function(){n.setState({isShow:e})}))},n.componentDidRecover=function(){n.getData(n.props.player,(function(){}))},n.lyricContent=Object(p.createRef)(),n.dishContent=Object(p.createRef)(),n.lyricMain=Object(p.createRef)(),n.lineRef=Object(p.createRef)(),n.playerList=Object(p.createRef)(),e.cacheLifecycles.didRecover(n.componentDidRecover),n}return Object(o.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.getData(this.props.player,(function(){}))}},{key:"componentDidMount",value:function(){this.playerDOM=document.querySelector(".player_audio"),this.lyricMain.current.style.opacity=1,this.lyricMain.current.style.opacity=1,this.props.isPlay&&this.handlePlay()}},{key:"handlePlay",value:function(){var e=this.playerDOM,t=e.play();void 0!==t&&t.then((function(){e.play()})).catch((function(){}))}},{key:"handlePause",value:function(){var e=this.playerDOM;e&&e.pause()}},{key:"componentDidUpdate",value:function(e){var t=e.activateIndex,a=this.lyricContent.current;if(a){var n=a.children[t];if(n)this.bscrollRef.scrollObj.scroll.scrollToElement(n,1e3,0,!0)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,n=t.isPlay,r=t.progress,l=t.duration,c=t.currentTime,i=t.isPlayStatus,o=t.lyric,s=t.activateIndex,u=t.modeTypeArr,p=t.modeNum,m=t.getIsPlay,y=this.state,h=y.msg,f=y.isShow;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"player"},d.a.createElement("header",{className:"player_navbar"},d.a.createElement("i",{className:"iconfont icon-jiantouzuo",onClick:function(){return e.props.history.goBack()}}),d.a.createElement("div",{className:"info"},d.a.createElement("p",null,a.name),d.a.createElement("p",null,d.a.createElement("span",null,a.al.name),d.a.createElement("em",null,"/"),d.a.createElement("span",null,a.ar.map((function(e){return d.a.createElement("em",{key:e.id},e.name)})))))),d.a.createElement("section",{className:"player_container",style:{display:i?"none":"block"},ref:this.dishContent},d.a.createElement("div",{className:"dish",onClick:function(){return e.handleDishToggle(e.dishContent.current,e.lyricMain.current)}},d.a.createElement("div",{className:"needle"},d.a.createElement("img",{src:C.a,alt:"needle",width:"100%",height:"100%",style:{transform:n?"scale(0.5) rotate(-30deg)":"scale(0.5)"}})),d.a.createElement("div",{className:"disc",style:{backgroundImage:"url(".concat(M.a,")"),animationPlayState:n?"running":"paused"}},d.a.createElement("div",{className:"disc_cover"},d.a.createElement("img",{src:a.picUrl,alt:a.name}))))),d.a.createElement("section",{className:"lyric_wrap",style:{display:i?"block":"none"},onClick:function(){return e.handleDishToggle(e.lyricMain.current,e.dishContent.current)},ref:this.lyricMain},d.a.createElement(v,{ref:function(t){return e.bscrollRef=t}},d.a.createElement("ul",{className:"list",ref:this.lyricContent},o.map((function(e,t){return d.a.createElement("li",{key:t,className:t===s?"activate":null},e.content)}))))),d.a.createElement("div",{className:"player_controls"},d.a.createElement("div",{className:"time"},d.a.createElement("span",null,E(c)),d.a.createElement("div",{className:"slidre",onClick:this.handleClickSlide,ref:this.lineRef},d.a.createElement("div",{className:"bar",style:{width:r}},d.a.createElement("div",{className:"btn"}))),d.a.createElement("span",null,E(l))),d.a.createElement("div",{className:"operation"},d.a.createElement("i",{className:"iconfont "+u[p].icon,onClick:function(){return e.handleMode(u[p+1===u.length?0:p+1].msg)}}),d.a.createElement("i",{className:"iconfont icon-zuobofang",onClick:this.handleUp}),d.a.createElement("i",{className:n?"iconfont icon-bofang1":"iconfont icon-kaishi",onClick:this.handleTogglePlayer,style:{fontSize:".8rem"}}),d.a.createElement("i",{className:"iconfont icon-youbofang",onClick:this.handleNext}),d.a.createElement("i",{className:"iconfont icon-liebiao",onClick:function(){return e.handleListShow(!0,1)}})))),d.a.createElement("section",{className:"player_list",style:{display:f?"block":"none"},ref:this.playerList,onClick:function(){return e.handleListShow(!1,0)}},d.a.createElement(S,{handleListShow:this.handleListShow,getData:this.getData,handlePlay:function(){m(!0),e.handlePlay()}})),d.a.createElement(b.a,{msg:h,ref:function(t){return e.promptRef=t}}))}}]),a}(p.Component);t.default=Object(m.b)((function(e){return{player:e.player,isPlay:e.isPlay,progress:e.progress,currentTime:e.currentTime,duration:e.duration,isPlayStatus:e.isPlayStatus,lyric:e.lyric,activateIndex:e.activateIndex,playerList:e.playerList,playerIndex:e.playerIndex,modeTypeArr:e.modeTypeArr,modeNum:e.modeNum}}),{getIsPlay:y.e,getMenusData:y.f,getPlayStatus:y.i,getPlayLyric:y.h,getPlayerIndex:y.j,getModeNum:y.g})(T)},126:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(129),c=a.n(l);t.a=function(e){var t={options:{error:a(127),loading:a(128),throttleWait:1e3},src:e.src};return r.a.createElement(c.a,t)}},127:function(e,t,a){e.exports=a.p+"static/media/loading-error.99e68751.svg"},128:function(e,t,a){e.exports=a.p+"static/media/loading.0bab9ee3.svg"},288:function(e,t,a){e.exports=a.p+"static/media/needle.9c7747f9.png"},289:function(e,t,a){e.exports=a.p+"static/media/disc.7868e0d5.png"}}]);
//# sourceMappingURL=13.5ba192c6.chunk.js.map