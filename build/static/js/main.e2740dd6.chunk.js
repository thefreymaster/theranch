(this.webpackJsonplumen=this.webpackJsonplumen||[]).push([[0],{174:function(e,t,n){e.exports=n(383)},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},212:function(e,t){},254:function(e,t,n){},380:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(159),i=n.n(r),c=(n(179),n(180),n(23)),l=n.n(c),s=(n(181),function(e){var t={display:"flex",justifyContent:e.justifyContent,alignItems:e.alignItems,height:window.innerHeight,width:window.innerWidth,backgroundColor:e.backgroundColor};return o.a.createElement("div",{className:l()("background-transition"),style:t},e.children)}),d=n(3),u=n(24),m=n(4),p=n(160),x=n.n(p),f=n(22),g=n(13),h=n.n(g),b=x()("http://192.168.124.121:6700"),E=o.a.createContext(),y=function(){return o.a.useContext(E)},w=function(e,t){var n=Object(u.a)({},e);switch(t.type){case"SET_HOMEBRIDGE_ACCESSORIES":n.homebridge=t.payload.accessories;break;case"SET_ROOMS":n.rooms=t.payload.rooms,n.house=t.payload.house;break;case"SET_ANALYTICS":n.analytics=t.payload;break;case"SET_IS_DAY":n.isDay=!0;break;case"SET_IS_NIGHT":n.isDay=!1;break;case"SET_WEATHER":n.weather=t.payload;break;default:throw new Error}return n},C={rooms:[],house:{analytics:[],totalPowerOn:0},isLoading:!1,isDay:!1,colors:{day:{color:"black",backgroundColor:"white"},night:{color:"white",backgroundColor:"#333333"}},homebridge:{success:!1,error:!1}},v=function(e){var t,n=(new Date).getHours();n>=6&&n<=17&&e({type:"SET_IS_DAY"}),h.a.get("/api/rooms").then((function(e){return e})).catch((function(e){console.log(e)})).then((function(t){e({type:"SET_ROOMS",payload:t.data})})),(t="4671654",h.a.get("/api/weather/".concat(t)).then((function(e){return e})).catch((function(e){console.log(e)}))).then((function(t){e({type:"SET_WEATHER",payload:t.data})}))},O=function(e){var t=o.a.useReducer(w,C),n=Object(m.a)(t,2),a=n[0],r=n[1];return o.a.useLayoutEffect((function(){v(r),function(e){b.on("groups_update",(function(t){e({type:"SET_ROOMS",payload:t})})),b.on("accessories_update",(function(t){e({type:"SET_HOMEBRIDGE_ACCESSORIES",payload:{accessories:t}})}))}(r)}),[]),o.a.createElement(E.Provider,{value:Object(u.a)({},a,{dispatch:r})},e.children)},S=function(e){var t=o.a.useContext(E).isDay,n=Object(u.a)({color:e.color?e.color:t?"#00000078":"white",fontSize:18,fontFamily:" 'Fredoka One', cursive"},e.style);return o.a.createElement("div",{style:n},e.children)},j=function(e){return e?"0 2px 1px -1px #ffffff80, 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)":"0 2px 1px -1px #00000080, 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"},k=function(e){var t,n=o.a.useContext(E).isDay,a=Object(u.a)((t={display:"flex",flexDirection:e.direction,justifyContent:e.justifyContent,alignItems:e.alignItems,height:e.height,width:e.width,backgroundColor:e.backgroundColor,padding:e.padding,margin:e.margin,borderRadius:e.borderRadius,flexWrap:e.flexWrap,boxShadow:e.boxShadow&&j(n)},Object(d.a)(t,"padding",e.padding),Object(d.a)(t,"flexWrap",e.wrap&&"wrap"),Object(d.a)(t,"textAlign",e.textAlign),t),e.style);return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{style:{minHeight:e.title&&30}},e.title),o.a.createElement("div",{onMouseDown:e.onMouseDown,className:l()(e.className,{"zoom-in-animation":e.animate}),style:a,onClick:e.onClick,onMouseOver:e.onMouseOver,onMouseLeave:e.onMouseLeave},e.children))},I=n(19),D=n(11),T=function(){var e=o.a.useContext(E).isDay;return o.a.createElement(k,{borderRadius:"3px 10px 10px",backgroundColor:e?"#333333":"#fff",height:"120px",width:"100%",justifyContent:"center",alignItems:"center",direction:"column"},o.a.createElement(I.a,{color:e?"#fff":"#333333",size:"2x",icon:D.e}),o.a.createElement("div",{style:{marginTop:10}}),o.a.createElement(S,{color:e?"#fff":"#333333"},"Domain"))},R=function(e){var t=o.a.useContext(E).isDay,n={name:{fontSize:e.fontSize,marginLeft:e.noMargin?0:10,color:e.titleColor?e.titleColor:t?"#000000a6":"white",fontFamily:'"Fredoka One", cursive',textAlign:e.textAlign},icon:{display:"flex",alignItems:"center",marginLeft:6},description:{fontSize:11,marginLeft:e.noMargin?0:10,color:e.secondaryColor?e.secondaryColor:t?"#00000078":"white",fontFamily:'"Fredoka One", cursive',textAlign:e.textAlign}};return o.a.createElement(k,{direction:"column"},o.a.createElement(k,{direction:"row"},o.a.createElement("div",{style:n.name},e.title),o.a.createElement("div",{style:n.icon},e.icon)),o.a.createElement("div",{style:n.description},e.description))},M=n(60),L=n.n(M),z=function(){var e=o.a.useContext(E),t=e.weather;e.isDay;if(!t)return o.a.createElement(k,{height:"100%",width:"100%",direction:"column",justifyContent:"center",alignItems:"center"},o.a.createElement(L.a,{type:"Puff",color:"#fff",height:30,width:30,timeout:3e3}));var n=t.main,a=Object(m.a)(t.weather,1)[0];return o.a.createElement(k,{direction:"column",width:"100%"},o.a.createElement(k,{width:"100%",direction:"column",alignItems:"center"},o.a.createElement(R,{noMargin:!0,fontSize:28,title:o.a.createElement("img",{style:{width:70},src:"http://openweathermap.org/img/wn/".concat(a.icon,"@4x.png")}),description:"".concat(a.main,", ").concat(a.description),textAlign:"center"})),o.a.createElement(k,{width:"100%",direction:"row",alignItems:"center"},o.a.createElement(R,{noMargin:!0,fontSize:28,title:"".concat(n.temp.toFixed(0),"\xb0"),description:"Temperature",textAlign:"center"}),o.a.createElement(k,{style:{flexGrow:1}}),o.a.createElement(R,{fontSize:28,title:"".concat(n.pressure,"mb"),description:"Pressure",textAlign:"center",noMargin:!0}),o.a.createElement(k,{style:{flexGrow:1}}),o.a.createElement(R,{fontSize:28,title:"".concat(n.humidity,"%"),description:"Humidity",textAlign:"center",noMargin:!0})))},A=(n(22),function(e){return 9*e/5+32}),F=(n(254),function(e){var t=e.id,n=e.setIsActivelyPressed;n({id:t,active:!0}),setInterval((function(){n({id:-1,active:!1})}),200)}),_=function(){var e=o.a.useState({id:-1,active:!1}),t=Object(m.a)(e,2),n=t[0],a=t[1],r=o.a.useContext(E),i=r.isDay,c=r.rooms;r.setIsLoading;return c.map((function(e,t){var r,c,s={bubble:{height:30,width:30,borderRadius:50,marginBottom:5,border:"4px solid grey",transition:"background-color 1s ease-in-out","@keyframes":"0% {background-color: #c55d03; 50% {background-color: #eb6d00;}; 100% {background-color: #c55d03;}}"},onFor:{fontSize:10,backgroundColor:"#cccccc",padding:"0px 10px 0px 10px",borderRadius:30}},d=new Date(e.lastOn).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}),u=function(e){var t=e.on,n=e.id;return t?function(e,t){return h.a.get("/api/room/off/".concat(e)).then((function(e){return e})).catch((function(e){console.log(e)}))}(n):function(e,t){return h.a.get("/api/room/on/".concat(e)).then((function(e){return e})).catch((function(e){console.log(e)}))}(n)};e.on?(r=(((new Date).getTime()-e.lastOn)/6e4).toFixed(2),c="".concat(r>60?"".concat((r/60).toFixed(2)," Hours"):"".concat(r," Minutes"))):c="Last on: ".concat(d);return o.a.createElement(k,{animate:!0,onClick:function(){u({on:e.on,id:e.id}),F({id:e.id,setIsActivelyPressed:a})},padding:"10px",direction:"column",justifyContent:"center",alignItems:"center",height:"calc(33% - 20px)",width:"calc(50% - 20px)",margin:"10px 10px",borderRadius:"10px",className:l()("cursor-hover status",{"status-day":i,"status-night":!i,"status-day-active":i&&n.id===e.id&&n.active})},o.a.createElement("div",{className:l()({"breath-animation":e.on}),style:s.bubble}),o.a.createElement(R,{noMargin:!0,fontSize:12,title:e.name}),o.a.createElement("div",{style:s.onFor},c))}))},H=n(169),W=n(9),N=function(){var e=o.a.useContext(E);if(0===e.rooms.length)return null;var t=Object(f.filter)(e.house.analytics,{id:(new Date).getMonth()}),n=Object(m.a)(t,1)[0],a=e.rooms.map((function(e){var t=Object(f.filter)(e.analytics,{id:(new Date).getMonth()}),a=Object(m.a)(t,1)[0];return{label:e.name,id:e.name,value:(a.totalTimeOn/n.totalTimeOn*100).toFixed(2)}}));return o.a.createElement(H.a,{enableRadialLabels:!W.isMobile,sliceLabel:function(e){return"".concat(parseInt(e.value).toFixed(0),"%")},data:a,margin:!W.isMobile&&{top:40,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,colors:{scheme:"nivo"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:e.isDay?"black":"white",radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:{from:"color"},slicesLabelsSkipAngle:10,slicesLabelsTextColor:e.isDay?"black":"white",animate:!0,motionStiffness:90,motionDamping:15,sortByValue:!0,theme:{textColor:"#eee",fontSize:"14px",tickColor:"#eee",fontWeight:900}})},B=function(){var e=o.a.useContext(E);if(0===e.house.analytics.length)return null;var t=(new Date).getMonth(),n=0===t?11:t-1,a=e.house.analytics[n],r=e.house.analytics[t],i=100*(a.totalTimeOn/r.totalTimeOn).toFixed(2);return o.a.createElement(R,{fontSize:28,title:"".concat(-100===i?"N/A":"".concat(i,"%")),titleColor:i>0?"#f95858":"#70e993",icon:o.a.createElement(I.a,{size:"2x",style:{color:i>0?"#f95858":"#70e993"},icon:-100===i?D.b:i>1?D.c:D.a}),description:-100===i?"Check back next month":"Change since last month"})},G=(n(380),function(e){return e?"0 2px 1px -1px #ffffff80, 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)":"0 2px 1px -1px #00000080, 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}),P=function(){var e=o.a.useContext(E),t=e.dispatch,n=e.isDay;return o.a.createElement(I.a,{size:"lg",color:n?"#fff":"#333333",icon:D.f,onClick:function(){t(n?{type:"SET_IS_NIGHT"}:{type:"SET_IS_DAY"})},style:{padding:"14px",backgroundColor:n?"#333333":"#fff",borderRadius:100,position:"absolute",bottom:"50px",right:"50px",height:"50px",width:"50px",boxShadow:G(n)},className:"navigation-button show-zoom-animation"})},Y=n(93),J=n.n(Y),U=n(168),V=function(e){var t=o.a.useContext(E).isDay,n=Object(u.a)({color:e.color?e.color:t?"#00000078":"white",fontSize:e.fontSize,fontFamily:" 'Fredoka One', cursive"},e.style);return o.a.createElement("div",{style:n},e.children)},X=(n(382),function(){var e,t,n,a,r=y(),i=r.homebridge,c=r.isDay,s=i.nest,u=s.eco,p=(s.fan,s.thermostat),x=Object(m.a)(p,1)[0],f=Object(m.a)(u,1)[0],g=x.values;x.serviceCharacteristics;return o.a.createElement(k,{direction:"column",justifyContent:"center",alignItems:"center",margin:"20px 0px 0px 0px"},o.a.createElement(k,{className:l()({"breath-animation-nest-heat":1===g.CurrentHeatingCoolingState,"breath-animation-nest-cool":2===g.CurrentHeatingCoolingState}),justifyContent:"center",alignItems:"center",height:"160px",width:"160px",borderRadius:"160px",style:{border:"4px solid grey"}},o.a.createElement(V,{color:c?null:"#ededed",style:{marginLeft:10},fontSize:48},A(g.CurrentTemperature).toFixed(0),"\xb0")),o.a.createElement(k,{direction:"row",margin:"10px"},o.a.createElement(k,{direction:"column",justifyContent:"center",alignItems:"center",width:"45px",margin:"5px 0px 5px 0px"},o.a.createElement(V,{fontSize:"10px"},"Target"),o.a.createElement(k,(e={borderRadius:"50px",backgroundColor:c?"#ededed":"#1d1d1d",direction:"column"},Object(d.a)(e,"direction","column"),Object(d.a)(e,"justifyContent","center"),Object(d.a)(e,"alignItems","center"),Object(d.a)(e,"width","45px"),e),o.a.createElement(V,null,A(g.TargetTemperature).toFixed(0),"\xb0"))),o.a.createElement(k,{direction:"column",justifyContent:"center",alignItems:"center",width:"75px",margin:"5px"},o.a.createElement(V,{fontSize:"10px"},"Status"),o.a.createElement(k,(t={borderRadius:"50px",backgroundColor:c?"#ededed":"#1d1d1d",direction:"column"},Object(d.a)(t,"direction","column"),Object(d.a)(t,"justifyContent","center"),Object(d.a)(t,"alignItems","center"),Object(d.a)(t,"width","75px"),t),o.a.createElement(V,null,0===(a=g.CurrentHeatingCoolingState)?"Off":1===a?"Heating":2===a?"Cooling":void 0))),o.a.createElement(k,{direction:"column",justifyContent:"center",alignItems:"center",width:"45px",margin:"5px"},o.a.createElement(V,{fontSize:"10px"},"Eco"),o.a.createElement(k,(n={borderRadius:"50px",backgroundColor:c?"#ededed":"#1d1d1d",direction:"column"},Object(d.a)(n,"direction","column"),Object(d.a)(n,"justifyContent","center"),Object(d.a)(n,"alignItems","center"),Object(d.a)(n,"width","45px"),n),o.a.createElement(V,null,f.values.On?"Yes":"No")))))}),$=function(){var e=y(),t=e.homebridge,n=e.isDay,a=t.temperatures;return o.a.createElement(k,{style:{flexWrap:"wrap"},direction:"row",margin:"20px 0px 0px 0px",width:"100%"},a.map((function(e){var t,a=e.serviceName.replace("Temperature","");return o.a.createElement(k,{width:"50%",direction:"column",height:"100px",justifyContent:"center",alignItems:"center"},o.a.createElement(V,{fontSize:"10px"},a),o.a.createElement(k,(t={borderRadius:"60px",backgroundColor:n?"#ededed":"#1d1d1d",direction:"column"},Object(d.a)(t,"direction","column"),Object(d.a)(t,"justifyContent","center"),Object(d.a)(t,"alignItems","center"),Object(d.a)(t,"width","60px"),Object(d.a)(t,"height","60px"),t),o.a.createElement(V,null,A(e.values.CurrentTemperature).toFixed(0),"\xb0")))})))},q=function(){var e,t=y(),n=t.homebridge,a=t.isDay,r=n.computers,i=Object(m.a)(r,1)[0];return o.a.createElement(k,{style:{flexWrap:"wrap"},direction:"column",justifyContent:"center",alignItems:"center",margin:"20px 0px 40px 0px",width:"100%"},o.a.createElement(V,{fontSize:"10px"},i.serviceName),o.a.createElement(k,(e={borderRadius:"60px",backgroundColor:a?"#ededed":"#1d1d1d",direction:"column"},Object(d.a)(e,"direction","column"),Object(d.a)(e,"justifyContent","center"),Object(d.a)(e,"alignItems","center"),Object(d.a)(e,"width","60px"),Object(d.a)(e,"height","60px"),e),o.a.createElement(I.a,{color:a?"#333333":"#fff",size:"2x",icon:i.values.On?D.d:D.g})),o.a.createElement(V,{fontSize:"10px"},i.values.On?"Online":"Offline"))},K=function(){var e=y(),t=e.dispatch,n=e.homebridge,a=e.isDay;return o.a.useLayoutEffect((function(){(function(){var e=Object(U.a)(J.a.mark((function e(){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/homebridge/accessories").then((function(e){return e.data})).catch((function(e){console.log(e)}));case 2:n=e.sent,console.log(n),t({type:"SET_HOMEBRIDGE_ACCESSORIES",payload:{accessories:n}});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.error?o.a.createElement(k,{animate:!0,height:"100%",direction:"column",justifyContent:"center",alignItems:"center"},o.a.createElement(I.a,{color:a?"#333333":"#fff",size:"2x",icon:D.g}),o.a.createElement(V,null,"Homebridge Offline")):n.system?o.a.createElement(k,{animate:!0,direction:"column",justifyContent:"center",alignItems:"center",height:"100%",width:"calc(100%)"},o.a.createElement(X,null),o.a.createElement(k,{style:{flexGrow:1}}),o.a.createElement($,null),o.a.createElement(k,{style:{flexGrow:1}}),o.a.createElement(q,null)):o.a.createElement(k,{height:"100%",direction:"column",justifyContent:"center",alignItems:"center"},o.a.createElement(L.a,{type:"Puff",color:"#fff",height:30,width:30,timeout:3e3}))},Q=function(){var e=o.a.useContext(E);if(0===e.house.analytics.length)return null;var t=(new Date).getMonth(),n=Object(f.filter)(e.house.analytics,{id:t})||0,a=Object(m.a)(n,1)[0],r=parseFloat(e.house.totalPowerOn).toFixed(3)||0;return o.a.createElement(R,{fontSize:28,title:"".concat(r,"W \u2022 ").concat((a.totalTimeOn/36e5).toFixed(2),"H"),description:"Power \u2022 Hours"})},Z=function(){var e=o.a.useContext(E).isDay,t=e?"#fff":"#333333";return W.isBrowser||W.isTablet?o.a.createElement(s,{backgroundColor:e?"#ededed":"#1d1d1d"},o.a.createElement(k,{width:"23%"},o.a.createElement(k,{direction:"column",alignItems:"flex-start",borderRadius:"3px 10px 10px",width:"100%",margin:"30px 30px 30px 30px",backgroundColor:t,boxShadow:!0},o.a.createElement(T,null),o.a.createElement(k,{direction:"column",width:"100%",height:"100%",padding:"0px 10px"},o.a.createElement(K,null)))),o.a.createElement(k,{width:"77%",margin:"30px 30px 30px 0px"},o.a.createElement(k,{height:"100%",width:"33%",margin:"0px 30px 0px 0px",direction:"column"},o.a.createElement(k,{animate:!0,borderRadius:"3px 10px 10px",title:"Weather",padding:"20px",height:"200px",width:"100%",backgroundColor:t,boxShadow:!0},o.a.createElement(z,null)),o.a.createElement(k,{wrap:!0,borderRadius:"3px 10px 10px",justifyContent:"flex-start",title:"Controls",direction:"row",padding:"20px",height:"calc(100% - 260px)",width:"calc(100%)",margin:"0px ".concat(W.isMobile?0:30," 0px 0px"),backgroundColor:t,boxShadow:!0},o.a.createElement(_,null))),o.a.createElement(k,{height:"100%",width:"66%",direction:"column"},o.a.createElement(k,{direction:"row",title:"Usage"},o.a.createElement(k,{animate:!0,borderRadius:"3px 10px 10px",padding:"20px",height:"100px",width:"50%",margin:"0px 30px 0px 0px",backgroundColor:t,boxShadow:!0},o.a.createElement(Q,null)),o.a.createElement(k,{animate:!0,borderRadius:"3px 10px 10px",padding:"20px",height:"100px",width:"50%",margin:"0px 0px 0px 0px",backgroundColor:t,boxShadow:!0},o.a.createElement(B,null))),o.a.createElement(k,{borderRadius:"3px 10px 10px",title:"Month",padding:"20px",height:"calc(100% - 160px)",width:"100%",margin:"0px 0px 0px 0px",backgroundColor:t,boxShadow:!0},o.a.createElement(N,null)))),o.a.createElement(k,null,o.a.createElement(P,null))):null},ee=function(){var e=o.a.useContext(E).isDay;return W.isMobile?o.a.createElement(s,{backgroundColor:e?"#ededed":"#1d1d1d"},o.a.createElement(k,{width:"100%",margin:"30px 30px 30px 30px"},o.a.createElement(k,{height:"100%",width:W.isMobile?"100%":"33%",margin:W.isMobile?"0px 0px 0px 0px":"0px 30px 0px 0px",direction:"column"},o.a.createElement(k,{wrap:!0,borderRadius:"3px 10px 10px",justifyContent:"flex-start",title:W.isMobile?"Breakdown":"Controls",direction:"row",padding:"20px",height:W.isMobile?"calc(100%)":"calc(100% - 160px)",width:"calc(100%)",margin:"0px ".concat(W.isMobile?0:30," 0px 0px"),backgroundColor:e?"#fff":"#333333",boxShadow:!0},o.a.createElement(K,null)))),o.a.createElement(k,null,o.a.createElement(P,null))):null},te=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,null),o.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(O,null,o.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[174,1,2]]]);
//# sourceMappingURL=main.e2740dd6.chunk.js.map