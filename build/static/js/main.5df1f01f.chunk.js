(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){},32:function(e,t,a){e.exports=a(56)},37:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(28),i=a.n(c),s=(a(37),a(4)),r=a(5),o=a(7),u=a(6),m=a(8),h=a(20),g=(a(15),a(9)),d=a(21),p=a.n(d),E=(a(47),p.a.initializeApp({apiKey:"AIzaSyAO4c81oiCzlETCQ1OgKqgB_qKbEZjAkyo",authDomain:"geek-line.firebaseapp.com",databaseURL:"https://geek-line.firebaseio.com",projectId:"geek-line",storageBucket:"geek-line.appspot.com",messagingSenderId:"1071228095913",appId:"1:1071228095913:web:784b0afa96cb9c8d"}).database(),p.a.firestore()),v=p.a,b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).save=function(e){e.preventDefault();var t=v.auth().currentUser;t&&E.collection("users").doc(t.uid).set({name:t.displayName,pic:t.photoURL||"/images/profile_placeholder.png",email:t.email,course:a.state.course,nickname:a.state.nickname}).then(function(){console.log("\u8ffd\u52a0\u306b\u6210\u529f\u3057\u307e\u3057\u305f ")}).catch(function(e){console.log("\u8ffd\u52a0\u306b\u5931\u6557\u3057\u307e\u3057\u305f (".concat(e,")"))})},a.state={course:["web"],nickname:""},a.send=a.save.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleInputText",value:function(e){this.setState({nickname:e.target.value})}},{key:"handleChange",value:function(e){console.log(this.state.course);var t=this.state.course,a=t.indexOf(e.target.value);-1===a?t.push(e.target.value):t.splice(a,1),this.setState({course:t}),console.log(this.state)}},{key:"render",value:function(){return console.log(this.props.user),l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement("header",null,this.props.user?l.a.createElement("div",{className:"header-content"},l.a.createElement("ul",{className:"header-list"})):l.a.createElement("div",{className:"header-content"})),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"App"},l.a.createElement("p",{className:"App-intro"})),this.props.user?l.a.createElement("div",null,l.a.createElement("div",null,"\u540d\u524d: ",this.props.user&&this.props.user.displayName),l.a.createElement("div",null,"E-mail: ",this.props.user&&this.props.user.email),l.a.createElement("div",null,l.a.createElement("img",{src:this.props.user.photoURL||"/images/profile_placeholder.png"})),l.a.createElement("div",null,"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u3092\u5165\u529b:",l.a.createElement("input",{type:"text",value:this.state.nickname,onChange:this.handleInputText.bind(this)})),l.a.createElement("div",null,"\u3044\u304f\u3064\u3067\u3082\u9078\u3093\u3067\u304f\u3060\u3055\u3044",l.a.createElement("div",null,l.a.createElement("input",{type:"radio",value:"first",checked:-1!==this.state.course.indexOf("first"),onChange:this.handleChange.bind(this)}),"\u6700\u521d\u306e\u9078\u629e\u80a2"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",value:"secound",checked:-1!==this.state.course.indexOf("secound"),onChange:this.handleChange.bind(this)}),"\u4e8c\u756a\u76ee\u306e\u9078\u629e\u80a2"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",value:"third",checked:-1!==this.state.course.indexOf("third"),onChange:this.handleChange.bind(this)}),"\u4e09\u756a\u76ee\u306e\u9078\u629e\u80a2")),""==this.state.nickname?l.a.createElement("div",null,"\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"):""==this.state.course?l.a.createElement("div",null,"\u30b3\u30fc\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"):l.a.createElement("button",{onClick:this.save},l.a.createElement(g.b,{to:"/index"},"geek-line\u306b\u767b\u9332")),l.a.createElement("li",{className:"gline-logout",onClick:this.logout},l.a.createElement(g.b,{to:"/"},"\u30ed\u30b0\u30a2\u30a6\u30c8"))):l.a.createElement("div",null)),l.a.createElement("footer",null,l.a.createElement("div",{className:"footer-content"}))))}}]),t}(l.a.Component),f=a(14),O=(a(19),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.user?l.a.createElement(g.a,null,l.a.createElement("header",null,l.a.createElement("div",{className:"login-header grey lighten-3"},l.a.createElement("ul",{className:"row center"},l.a.createElement("li",{className:"m2 s12 col logo-gline"},l.a.createElement("a",{href:""},l.a.createElement("span",{className:"orange-text text-lighten-1"},"G"),l.a.createElement("span",{className:"light-blue-text text-lighten-1"},"L"),l.a.createElement("span",{className:"black-text"},"I"),l.a.createElement("span",{className:"green-text text-lighten-1"},"N"),l.a.createElement("span",{className:"red-text text-lighten-1"},"E"))),l.a.createElement("li",{className:"m2 hide-on-small-and-down col"},l.a.createElement("p",null,"GLINE\u3068\u306f")),l.a.createElement("li",{className:"offset-m4 m2 hide-on-small-and-down col"},l.a.createElement("p",null,"\u30d8\u30eb\u30d7")),l.a.createElement("li",{className:"m2 s12 col",onClick:this.props.logout},l.a.createElement(g.b,{to:"/"},"\u30ed\u30b0\u30a2\u30a6\u30c8")))))):this.props.isLogging?l.a.createElement("div",null):l.a.createElement(g.a,null,l.a.createElement("header",null,l.a.createElement("div",{className:"login-header grey lighten-3"},l.a.createElement("ul",{className:"row center"},l.a.createElement("li",{className:"m2 s12 col logo-gline"},l.a.createElement("a",{href:""},l.a.createElement("span",{className:"orange-text text-lighten-1"},"G"),l.a.createElement("span",{className:"light-blue-text text-lighten-1"},"L"),l.a.createElement("span",{className:"black-text"},"I"),l.a.createElement("span",{className:"green-text text-lighten-1"},"N"),l.a.createElement("span",{className:"red-text text-lighten-1"},"E"))),l.a.createElement("li",{className:"m2 hide-on-small-and-down col"},l.a.createElement("p",null,"GLINE\u3068\u306f")),l.a.createElement("li",{className:"offset-m4 m2 hide-on-small-and-down col"},l.a.createElement("p",null,"\u30d8\u30eb\u30d7")),l.a.createElement("li",{className:"m2 s12 col",onClick:this.props.login},l.a.createElement(g.b,{to:"/login"},"\u30ed\u30b0\u30a4\u30f3")))))))}}]),t}(l.a.Component)),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,null,l.a.createElement("div",null,this.props.user?l.a.createElement("div",null):this.props.isLogging?l.a.createElement("div",null,"\u8aad\u307f\u8fbc\u307f\u4e2d\u3067\u3059"):l.a.createElement("div",null,l.a.createElement("li",{className:"gline-access",onClick:this.props.login},l.a.createElement(g.b,{to:"/login"},"Gline\u306b\u30a2\u30af\u30bb\u30b9")))))}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loading:!1,data:[]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/posts").then(function(e){return e.json()}).then(function(t){e.setState({loading:!1,data:t})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Posts"},l.a.createElement("div",null,this.state.data.map(function(e){return l.a.createElement("div",{key:e.id},e.id)})))}}]),t}(l.a.Component),N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"LandingPage\u3067\u3059")}}]),t}(l.a.Component),x=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"\u89e3\u7b54\u95b2\u89a7\u753b\u9762\u3067\u3059")}}]),t}(l.a.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"MyPage\u30da\u30fc\u30b8\u3067\u3059")}}]),t}(l.a.Component),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).login=function(){var t=new v.auth.GoogleAuthProvider;v.auth().signInWithPopup(t),e.setState({isLogging:!0})},e.logout=function(){v.auth().signOut(),e.setState({isLogging:!1})},e.state={user:null,isLogging:!1},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.auth().onAuthStateChanged(function(t){e.setState({user:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,{login:this.login,logout:this.logout,user:this.state.user,isLogging:this.state.isLogging}),l.a.createElement(j,{login:this.login,logout:this.logout,user:this.state.user,isLogging:this.state.isLogging}),l.a.createElement(b,{login:this.login,logout:this.logout,user:this.state.user,isLogging:this.state.isLogging}),l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement(f.a,{exact:!0,path:"/",component:j}),l.a.createElement(f.a,{exact:!0,path:"/login",component:b}),l.a.createElement(f.a,{path:"/post",component:k}),l.a.createElement(f.a,{path:"/library",component:N}),l.a.createElement(f.a,{path:"/answer",component:x}),l.a.createElement(f.a,{path:"/mypage",component:y}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.5df1f01f.chunk.js.map