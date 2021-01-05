(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(4),i=n.n(c),s=n(23),r=n.n(s),o=n(7),l=n(8),u=n(15),d=n(10),j=n(9),p=(n(34),n(21));p.a.initializeApp({apiKey:"AIzaSyDFDbdbYaAzfKGI2BTPIUkfqA_Lg0znmHI",authDomain:"personal-website-3a530.firebaseapp.com",projectId:"personal-website-3a530",storageBucket:"personal-website-3a530.appspot.com",messagingSenderId:"772832630272",appId:"1:772832630272:web:eb707299d68ab29c2daae5",measurementId:"G-Y315THN0P2"});var b=p.a,h=n(18),m=(n(41),n.p+"static/media/email.331b6e97.svg"),f=n.p+"static/media/github.4e3f6662.svg",O=n.p+"static/media/instagram.68f82812.svg",v=n.p+"static/media/linkedin.09e78e0b.svg",x=n.p+"static/media/twitter.536733a8.svg",g=n(14),k=n.n(g),y=n(17),w=function(){function e(){Object(o.a)(this,e),this.db=b.firestore()}return Object(l.a)(e,[{key:"fetchAboutMe",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("aboutMe").get();case 2:return t=e.sent,n=t.docs[0],e.abrupt("return",n.data());case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchContact",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("contact").get();case 2:return t=e.sent,n={github:"",linkedin:"",instagram:"",twitter:"",gmail:""},t.forEach((function(e){n[e.data().platform]=e.data().link})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchExperience",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("experience").get();case 2:return t=e.sent,n=[],t.forEach((function(e){n.push({company:e.data().company,description:e.data().description,duration:e.data().duration,position:e.data().position})})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchProjects",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("projects").get();case 2:return t=e.sent,n=[],t.forEach((function(e){n.push({name:e.data().name,description:e.data().description,img:e.data().img})})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={github:"",linkedin:"",instagram:"",twitter:"",gmail:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;(new w).fetchContact().then((function(t){e.setState(t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("a",{href:this.state.github,target:"_blank",className:"logo",children:Object(a.jsx)(h.a,{src:f})}),Object(a.jsx)("a",{href:this.state.linkedin,target:"_blank",className:"logo",children:Object(a.jsx)(h.a,{src:v})}),Object(a.jsx)("a",{href:this.state.instagram,target:"_blank",className:"logo",children:Object(a.jsx)(h.a,{src:O})}),Object(a.jsx)("a",{href:this.state.twitter,target:"_blank",className:"logo",children:Object(a.jsx)(h.a,{src:x})}),Object(a.jsx)("a",{href:"mailto:{this.state.gmail}",target:"_blank",className:"logo",children:Object(a.jsx)(h.a,{src:m})})]})}}]),n}(i.a.Component),C=(n(43),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={name:"",intro:"",isLoading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;(new w).fetchAboutMe().then((function(t){e.setState({name:t.name,intro:t.intro,isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?Object(a.jsx)("div",{className:"loader"}):Object(a.jsxs)("div",{className:"homeComponent",children:[Object(a.jsxs)("h1",{className:"head",children:["Hi, I'm ",Object(a.jsx)("span",{className:"name",children:"Ahad"})]}),Object(a.jsx)("p",{className:"intro",children:this.state.intro}),Object(a.jsx)(N,{})]})}}]),n}(i.a.Component)),I=(n(44),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.call(this)}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){document.getElementById("card1").classList.toggle("blur")}},{key:"render",value:function(){return console.log(this.props),Object(a.jsxs)("div",{id:"card1",className:"card",children:[Object(a.jsx)("p",{className:"cardHeading",children:this.props.company}),Object(a.jsxs)("p",{className:"cardSubHeading",children:[this.props.position," | ",this.props.duration]}),Object(a.jsx)("p",{className:"content",children:this.props.description})]})}}]),n}(i.a.Component)),L=(n(45),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={pic:"",bio:"",experience:[{company:"",description:"",duration:"",position:""}],isLoading:!0},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){document.getElementById("para1").classList.toggle("blur")}},{key:"componentDidMount",value:function(){var e,t,n=this,a=new w;a.fetchAboutMe().then((function(n){e=n.pic,t=n.bio})),a.fetchExperience().then((function(a){n.setState({experience:a,isLoading:!1,pic:e,bio:t})}))}},{key:"render",value:function(){var e=this;return this.state.isLoading?Object(a.jsx)("div",{className:"loader"}):Object(a.jsxs)("div",{className:"aboutMeContainer",children:[Object(a.jsxs)("h1",{className:"head",children:["About ",Object(a.jsx)("span",{className:"name",children:"Me"})]}),Object(a.jsxs)("div",{className:"bioContainer",children:[Object(a.jsx)("img",{className:"myPic",src:this.state.pic}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"BIO"}),Object(a.jsx)("p",{id:"para1",className:"bioPara blur",children:this.state.bio})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("h2",{children:"EXPERIENCE"}),Object(a.jsx)("div",{style:{display:"flex"},children:this.state.experience.map((function(t,n){return Object(a.jsx)(I,{drawer:e.props.drawer,company:t.company,description:t.description,duration:t.duration,position:t.position},n)}))})]})}}]),n}(i.a.Component)),D=(n(46),n(47),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.call(this)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"projectCard",children:[Object(a.jsx)("p",{className:"projectHeading",children:this.props.name}),Object(a.jsx)("img",{className:"projectImage",src:this.props.img}),Object(a.jsx)("p",{className:"projectSubHeading",children:this.props.description})]})}}]),n}(i.a.Component)),M=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={projects:[],isLoading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;(new w).fetchProjects().then((function(t){e.setState({projects:t,isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?Object(a.jsx)("div",{className:"loader"}):Object(a.jsxs)("div",{className:"projectsContainer",children:[Object(a.jsxs)("h1",{className:"head",children:[Object(a.jsx)("span",{className:"name",children:"My"})," Projects"]}),Object(a.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:this.state.projects.map((function(e,t){return Object(a.jsx)(D,{name:e.name,description:e.description,img:e.img},t)}))})]})}}]),n}(i.a.Component),E=n(28),S=(n(48),n(49),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.call(this)}return Object(l.a)(n,[{key:"openInNewTab",value:function(e,t){"gmail"==t?window.open("mailto:"+e,"_blank"):window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"contactContentContainer",onClick:function(){return e.openInNewTab(e.props.link,e.props.platform)},children:[Object(a.jsx)("p",{children:Object(a.jsxs)("strong",{style:{color:"rgb(39, 172, 167)",textShadow:"0.5px 0.5px 1px black",fontSize:"22px",textTransform:"uppercase"},children:[this.props.platform,":"]})}),Object(a.jsx)("p",{style:{fontSize:"22px",padding:"0 0 0 0"},children:this.props.link})]})}}]),n}(i.a.Component)),B=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={data:{github:"",linkedin:"",instagram:"",twitter:"",gmail:""},isLoading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;(new w).fetchContact().then((function(t){e.setState({data:{github:t.github,linkedin:t.linkedin,instagram:t.instagram,twitter:t.twitter,gmail:t.gmail},isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?Object(a.jsx)("div",{className:"loader"}):Object(a.jsxs)("div",{className:"contactMeContainer",children:[Object(a.jsxs)("h1",{className:"head",children:["Contact ",Object(a.jsx)("span",{className:"name",children:"Me"})]}),Object(a.jsx)("p",{className:"contactSubheading",children:"Enough about me. Let's catch up."}),Object(a.jsx)("div",{style:{margin:"50px 50px 50px 50px",display:"flex",flexWrap:"wrap"},children:Object.entries(this.state.data).map((function(e){var t=Object(E.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)(S,{platform:n,link:c})}))})]})}}]),n}(i.a.Component),A=(n(50),n(51),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).sendData=e.sendData.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"sendData",value:function(){this.props.callback(this.props.name)}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"element",className:"elements",onClick:this.sendData,children:Object(a.jsx)("h1",{children:this.props.name})})}}]),n}(i.a.Component)),P=(n(52),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={pic:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new w,document.getElementById("pic").classList.toggle("maximize"),t.fetchAboutMe().then((function(e){n.setState({pic:e.pic})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){document.getElementById("pic").classList.toggle("maximize")}},{key:"render",value:function(){return Object(a.jsx)("img",{id:"pic",src:this.state.pic,className:"profilePic"})}}]),n}(i.a.Component)),H=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).sendData=e.sendData.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){document.getElementById("drawer").classList.toggle("hidden")}},{key:"sendData",value:function(e){this.props.parentCallback(e)}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"drawer",className:"drawerContainer hidden",children:[Object(a.jsxs)("div",{className:"elementContainer",children:[Object(a.jsx)(A,{name:"Home",callback:this.sendData}),Object(a.jsx)(A,{name:"About Me",callback:this.sendData}),Object(a.jsx)(A,{name:"Projects",callback:this.sendData}),Object(a.jsx)(A,{name:"Contact Me",callback:this.sendData})]}),Object(a.jsx)("div",{className:"profileContainer",children:Object(a.jsx)(P,{drawer:this.props.drawer})})]})}}]),n}(i.a.Component),z=(n(53),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={drawer:!1,component:"Home"},e.onMenuClick=e.onMenuClick.bind(Object(u.a)(e)),e.callbackFuntion=e.callbackFuntion.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"onMenuClick",value:function(){window.scrollTo(0,0),document.getElementById("menuIcon").classList.toggle("change"),document.getElementById("glassLayer").classList.toggle("visible"),this.setState((function(e){return{drawer:!e.drawer}}))}},{key:"callbackFuntion",value:function(e){document.getElementById("menuIcon").classList.toggle("change"),document.getElementById("glassLayer").classList.toggle("visible"),this.setState((function(t){return{drawer:!1,component:e}}))}},{key:"renderComponent",value:function(e){switch(e){case"Home":return Object(a.jsx)(C,{});case"About Me":return Object(a.jsx)(L,{drawer:this.state.drawer});case"Projects":return Object(a.jsx)(M,{});case"Contact Me":return Object(a.jsx)(B,{})}}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"mainPage",children:[Object(a.jsx)("div",{className:"tintedLayer"}),Object(a.jsxs)("div",{id:"menuIcon",class:"drawerIcon",onClick:this.onMenuClick,children:[Object(a.jsx)("div",{class:"bar1"}),Object(a.jsx)("div",{class:"bar2"}),Object(a.jsx)("div",{class:"bar3"})]}),this.renderComponent(this.state.component),Object(a.jsx)("div",{id:"glassLayer",className:"layer"}),Object(a.jsx)(H,{drawer:this.state.drawer,parentCallback:this.callbackFuntion})]})}}]),n}(i.a.Component));r.a.render(Object(a.jsx)(z,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.1895123a.chunk.js.map