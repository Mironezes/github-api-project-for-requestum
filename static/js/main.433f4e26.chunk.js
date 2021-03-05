(this["webpackJsonpreact-project-on-hooks"]=this["webpackJsonpreact-project-on-hooks"]||[]).push([[0],{104:function(e,t,r){},149:function(e,t,r){"use strict";r.r(t);var c,n,s=r(2),a=r(0),i=r(10),o=r.n(i),l=(r(104),r(28)),j=r(12),u=r(176),p=r(190),h=r(178),b=function(){return Object(s.jsx)(p.a,{component:"header",className:"header",children:Object(s.jsx)(u.a,{children:Object(s.jsxs)(h.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(s.jsx)("div",{className:"header-logo",children:Object(s.jsx)(l.b,{to:"/",children:"GitHub Searcher"})}),Object(s.jsxs)("nav",{className:"header-menu",children:[Object(s.jsx)(l.c,{to:"/",exact:!0,className:"nav-link",children:"Home"}),Object(s.jsx)(l.c,{to:"/about",className:"nav-link",children:"Information"})]})]})})})},d=Object(a.createContext)(),O=r(191),x=function(){var e=Object(a.useContext)(d),t=e.alert,r=e.hideAlert;return t?Object(s.jsx)(O.a,{severity:"error",onClick:r,children:t.text}):null},m=function(){return Object(s.jsx)(p.a,{className:"footer",component:"footer",children:Object(s.jsx)(u.a,{children:Object(s.jsx)("span",{className:"footer-copyright",children:"Developed by Alexey Suprun"})})})},f=r(46),g=r(180),v=r(181),y=r(182),R=r(192),S=r(183),w=r(189),E=Object(a.createContext)(),U=r(83),_=r.n(U),N=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),r=t[0],c=t[1],n=Object(a.useContext)(d),i=Object(a.useContext)(E),o=function(){if(r.trim()){var e=localStorage.getItem("Search Requests History");(e=e?e.split(","):[]).push(r),localStorage.setItem("Search Requests History",e.toString()),n.hideAlert(),i.isUsersSearch&&i.isReposSearch&&(i.searchUsers(r.trim()),i.searchRepos(r.trim())),i.isUsersSearch&&i.searchUsers(r.trim()),i.isReposSearch&&i.searchRepos(r.trim())}else n.showAlert("Search request can`t be empty","danger"),i.clearSearch()},l=Object(g.a)(o,1e3);return Object(s.jsx)(p.a,{component:"section",className:"search-panel",children:Object(s.jsxs)(h.a,{container:!0,direction:"column",children:[Object(s.jsx)("h1",{children:"GitHub Search panel"}),Object(s.jsxs)(h.a,{container:!0,direction:"row",justify:"space-between",className:"search-panel-filters",children:[Object(s.jsxs)(v.a,{row:!0,children:[Object(s.jsx)(y.a,{control:Object(s.jsx)(R.a,{color:"primary",checked:i.isUsersSearch,onChange:function(){i.clearSearch(),i.setUsersSearch(),o()},name:"checkUsers"}),label:"Users"}),Object(s.jsx)(y.a,{control:Object(s.jsx)(R.a,{color:"primary",checked:i.isReposSearch,onChange:function(){i.clearSearch(),i.setReposSearch(),o()},name:"checkRepos"}),label:"Repos"})]}),Object(s.jsx)(S.a,{size:"small",variant:"contained",color:"secondary",title:"Clear all",onClick:function(){i.clearSearch(),c(""),i.getPrevRequest()},children:Object(s.jsx)(_.a,{})})]}),Object(s.jsx)(w.a,{label:"e.g. mironezes",variant:"filled",value:r,onChange:function(e){return c(e.target.value)},onKeyDown:function(){return l.callback()}})]})})},k=r(184),L=r(185),C=r(186),A=function e(t){var r=t.entity;return e.defaultProps={entity:{}},Object(s.jsxs)(k.a,{className:"search-results-card",children:[Object(s.jsx)(L.a,{component:"img",image:r.avatar_url,alt:r.login}),Object(s.jsxs)(C.a,{children:[Object(s.jsx)("h2",{children:r.login||r.name}),r.owner?Object(s.jsxs)(p.a,{className:"repo-details",children:[Object(s.jsxs)("span",{className:"repo-details_lang",children:[Object(s.jsx)("strong",{children:"Language:"})," ",r.language||"Unknown"]}),Object(s.jsxs)("span",{className:"repo-details__desc",children:[Object(s.jsx)("strong",{children:"Description:"})," ",r.description]})]}):null,r.login?Object(s.jsx)(S.a,{variant:"contained",color:"primary",component:l.b,to:"/profile/".concat(r.login),children:"View profile"}):null]})]})},q=function e(t){var r=t.title,c=t.entities;return e.defaultProps={title:"Search results",entities:[]},Object(s.jsxs)(p.a,{component:"section",className:"search-results",children:[Object(s.jsx)("h3",{children:r}),Object(s.jsx)(h.a,{container:!0,direction:"row",spacing:3,children:c.map((function(e){return Object(s.jsx)(h.a,{item:!0,lg:3,sm:4,xs:12,children:Object(s.jsx)(A,{entity:e})},e.id)}))})]})},P=function(){var e=Object(a.useContext)(E),t=e.getPrevRequest,r=e.clearSearch,c=e.prevRequests;return Object(a.useEffect)((function(){return t(),function(){r()}}),[]),Object(s.jsxs)(p.a,{component:"section",className:"history",children:[Object(s.jsx)("h3",{children:"Recent search requests"}),c.length>0?Object(s.jsx)(h.a,{container:!0,spacing:3,children:c.slice(0,5).map((function(e,t){return Object(s.jsx)(h.a,{item:!0,sm:3,children:Object(s.jsx)(k.a,{className:"history-tile",children:e})},t)}))}):Object(s.jsx)("span",{children:"No data"})]})},H=r(84),T=r.n(H),I=function(){return Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)(T.a,{type:"Circles",color:"#24292e",height:100,width:100,timeout:3e3})})},F=(r(71),function(){var e=Object(a.useContext)(E),t=e.isLoading,r=e.users,c=e.repos,n=e.isUsersSearch,i=e.isReposSearch;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(N,{}),t?Object(s.jsx)(I,{}):Object(s.jsxs)(s.Fragment,{children:[n&&r.length>0?Object(s.jsx)(q,{title:"Users",entities:r}):null,i&&c.length>0?Object(s.jsx)(q,{title:"Repositories",entities:c}):null,Object(s.jsx)(P,{})]})]})}),D=r(151),G=function(){return Object(s.jsxs)(D.a,{component:"section",className:"about-app",children:[Object(s.jsx)("h1",{children:"Information"}),Object(s.jsxs)("p",{children:["Current app version: ",Object(s.jsx)("strong",{children:"1.2.1"})]}),Object(s.jsxs)("p",{children:["Latest update: ",Object(s.jsx)("strong",{children:"3/5/2021"})]})]})},B=function e(t){var r=t.repos;return e.defaultProps={repos:[]},Object(s.jsxs)(p.a,{component:"section",className:"profile-latest-repos",children:[Object(s.jsx)("h3",{className:"mb-3",children:"Latest repositories:"}),Object(s.jsx)(h.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1,children:r.map((function(e){return Object(s.jsx)(h.a,{item:!0,sm:6,xs:12,children:Object(s.jsx)(k.a,{className:"profile-latest-repos-tile",children:Object(s.jsxs)(C.a,{children:[Object(s.jsx)("h4",{children:Object(s.jsx)("a",{href:e.html_url,rel:"noreferrer",target:"_blank",className:"repo-link",children:e.name})}),Object(s.jsxs)("small",{children:["updated at ",e.updated_at]})]})})},e.id)}))})]})},W=r(187),z=r(85),J=r.n(z),V=r(193),K=r(188),Q=r(87),M=Object(W.a)((function(e){return{link:{display:"flex"},icon:{marginRight:e.spacing(.5),width:20,height:20}}})),X=function(e){var t=e.match,r=M(),c=Object(a.useContext)(E),n=c.getUser,i=c.getReps,o=(c.isLoading,c.user),j=c.userRepos,u=c.clearUser,b=t.params.name;return Object(a.useEffect)((function(){return n(b),i(b),function(){u()}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(V.a,{"aria-label":"breadcrumb",className:"breadcrumbs",children:[Object(s.jsxs)(K.a,{component:l.c,color:"inherit",to:"/",children:[Object(s.jsx)(J.a,{className:r.icon}),"Back to search"]}),Object(s.jsxs)(Q.a,{color:"textPrimary",children:[o.login,"`s profile"]})]}),Object(s.jsxs)(h.a,{container:!0,direction:"row",spacing:3,children:[Object(s.jsx)(h.a,{item:!0,sm:4,children:Object(s.jsxs)(k.a,{component:"section",className:"profile-card",children:[Object(s.jsx)(L.a,{component:"img",image:o.avatar_url,alt:o.login}),Object(s.jsxs)(C.a,{children:[Object(s.jsx)("h3",{children:o.name||"Anonymous"}),o.location?Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Location:"})," ",o.location]}):null,o.company?Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Company:"})," ",o.company]}):null,Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Followers:"})," ",o.followers]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Public repositories: "}),o.public_repos]}),Object(s.jsx)(S.a,{variant:"contained",color:"primary",href:o.html_url,target:"_blank",children:"Profile on GitHub"})]})]})}),Object(s.jsxs)(h.a,{item:!0,sm:8,children:[Object(s.jsxs)(p.a,{component:"section",className:"profile-details",children:[Object(s.jsx)("h1",{children:o.login}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Bio:"})," ",o.bio||"Unknown"]}),o.blog?Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Website:"})," ",o.blog]}):null,Object(s.jsxs)(p.a,{className:"profile-stats",children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{children:"Followers:"})," ",o.followers]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{children:"Followin:"})," ",o.following]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{children:"Repositories:"})," ",o.public_repos]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{children:"Gists:"})," ",o.public_repos]})]})]}),Object(s.jsx)(B,{repos:j})]})]})]})},Y="SHOW_ALERT",Z="HIDE_ALERT",$="CLEAR_SEARCH",ee="CLEAR_USER",te="GET_USER_REPS",re="GET_USER",ce="SEARCH_USERS",ne="SEARCH_REPOS",se="SET_LOADING",ae="SET_REPOS_SEARCH",ie="SET_USERS_SEARCH",oe="GET_PREV_REQUEST",le=r(15),je=(c={},Object(le.a)(c,Y,(function(e,t){return t.payload})),Object(le.a)(c,Z,(function(){return null})),Object(le.a)(c,"DEFAULT",(function(e){return e})),c),ue=function(e,t){return(je[t.type]||je.DEFAULT)(e,t)},pe=function(e){var t=e.children,r=Object(a.useReducer)(ue,null),c=Object(f.a)(r,2),n=c[0],i=c[1];return Object(s.jsx)(d.Provider,{value:{hideAlert:function(){return i({type:Z})},showAlert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"secondary";i({type:Y,payload:{type:t,text:e}})},alert:n},children:t})},he=r(19),be=r.n(he),de=r(34),Oe=r(62),xe=r(11),me=(n={},Object(le.a)(n,ce,(function(e,t){var r=t.payload;return Object(xe.a)(Object(xe.a)({},e),{},{users:r,isLoading:!1})})),Object(le.a)(n,ne,(function(e,t){var r=t.payload;return Object(xe.a)(Object(xe.a)({},e),{},{repos:r,isLoading:!1})})),Object(le.a)(n,re,(function(e,t){var r=t.payload;return Object(xe.a)(Object(xe.a)({},e),{},{user:r,isLoading:!1})})),Object(le.a)(n,te,(function(e,t){var r=t.payload;return Object(xe.a)(Object(xe.a)({},e),{},{userRepos:r,isLoading:!1})})),Object(le.a)(n,"GET_REPO",(function(e,t){var r=t.payload;return Object(xe.a)(Object(xe.a)({},e),{},{repo:r,isLoading:!1})})),Object(le.a)(n,ae,(function(e){return Object(xe.a)(Object(xe.a)({},e),{},{isReposSearch:!e.isReposSearch})})),Object(le.a)(n,ie,(function(e){return Object(xe.a)(Object(xe.a)({},e),{},{isUsersSearch:!e.isUsersSearch})})),Object(le.a)(n,se,(function(e){return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!0})})),Object(le.a)(n,oe,(function(e,t){var r=t.payload;return Object(xe.a)(Object(xe.a)({},e),{},{prevRequests:[].concat(Object(Oe.a)(e.prevRequests),Object(Oe.a)(r))})})),Object(le.a)(n,$,(function(e){return Object(xe.a)(Object(xe.a)({},e),{},{users:[],repos:[],prevRequests:[]})})),Object(le.a)(n,ee,(function(e){return Object(xe.a)(Object(xe.a)({},e),{},{user:[],userRepos:[]})})),Object(le.a)(n,"DEFAULT",(function(e){return e})),n),fe=function(e,t){return(me[t.type]||me.DEFAULT)(e,t)},ge=r(53),ve=r.n(ge),ye=function(e){var t=e.children,r=Object(a.useReducer)(fe,{user:{},userRepos:[],repo:{},users:[],repos:[],prevRequests:[],isLoading:!1,isUsersSearch:!0,isReposSearch:!0}),c=Object(f.a)(r,2),n=c[0],i=c[1],o=function(){var e=Object(de.a)(be.a.mark((function e(t){var r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,ve.a.get("https://api.github.com/search/users?q=".concat(t,"&per_page=8&order=desc"));case 3:r=e.sent,i({type:ce,payload:r.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(de.a)(be.a.mark((function e(t){var r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,ve.a.get("https://api.github.com/search/repositories?q=".concat(t,"&per_page=8&order=desc"));case 3:r=e.sent,i({type:ne,payload:r.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(de.a)(be.a.mark((function e(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i({type:ae});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(de.a)(be.a.mark((function e(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i({type:ie});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(de.a)(be.a.mark((function e(t){var r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,ve.a.get("https://api.github.com/users/".concat(t,"?"));case 3:r=e.sent,i({type:re,payload:r.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(de.a)(be.a.mark((function e(t){var r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,ve.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=8&sort=updated"));case 3:r=e.sent,i({type:te,payload:r.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){return i({type:se})},d=function(){var e=Object(de.a)(be.a.mark((function e(){var t;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:100,localStorage.getItem("Search Requests History")&&(t=localStorage.getItem("Search Requests History").split(",").reverse(),i({type:oe,payload:t}),t.length>100&&localStorage.clear());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=n.user,x=n.users,m=n.userRepos,g=n.repo,v=n.repos,y=n.isLoading,R=n.isUsersSearch,S=n.isReposSearch,w=n.prevRequests;return Object(s.jsx)(E.Provider,{value:{setLoading:b,searchUsers:o,searchRepos:l,getUser:p,getReps:h,clearSearch:function(){return i({type:$})},setUsersSearch:u,setReposSearch:j,getPrevRequest:d,clearUser:function(){return i({type:ee})},user:O,users:x,userRepos:m,repo:g,repos:v,isLoading:y,isUsersSearch:R,isReposSearch:S,prevRequests:w},children:t})};var Re=function(){return Object(s.jsx)(ye,{children:Object(s.jsxs)(pe,{children:[Object(s.jsxs)(l.a,{basename:"/github-api-project-for-requestum",children:[Object(s.jsx)(b,{}),Object(s.jsx)("main",{className:"page-content",children:Object(s.jsxs)(u.a,{maxWidth:"md",children:[Object(s.jsx)(x,{alert:{text:"",type:"danger"}}),Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{path:"/",component:F,exact:!0}),Object(s.jsx)(j.a,{path:"/about",component:G}),Object(s.jsx)(j.a,{path:"/profile/:name",component:X})]})]})})]}),Object(s.jsx)(m,{})]})})};o.a.render(Object(s.jsx)(Re,{}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.433f4e26.chunk.js.map