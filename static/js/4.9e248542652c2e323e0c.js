webpackJsonp([4],{r6UX:function(e,t){},xJsL:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"Login",data:function(){return{loginForm:{username:"",password:""},responseResult:[],seen:!1}},methods:{login:function(){var e=this,t=this;console.log(this.$store.state),this.$axios.post("http://localhost:3001/login",{username:this.loginForm.username,password:this.loginForm.password}).then(function(o){if(o&&200==o.status){console.log("@@@2",o),t.$store.commit("login",t.loginForm);var n=e.$route.query.redirect;e.$router.replace({path:"/"===n||void 0===n?"/library":n})}else 201==o.status&&(console.log("111111123"),e.seen=!0)}).catch(function(e){})}},created:function(){window.loginData=this}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("body",{attrs:{id:"poster"}},[o("el-form",{staticClass:"login-container",attrs:{"label-position":"left","label-width":"0px"}},[o("h3",{staticClass:"login-title"},[e._v("系统登录")]),e._v(" "),o("el-form-item",[o("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),o("el-form-item",[o("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"100%"}},[o("el-button",{staticStyle:{width:"100%",background:"#505458",border:"none"},attrs:{type:"primary"},on:{click:e.login}},[e._v("登录\r\n      ")])],1),e._v(" "),e.seen?o("h3",[e._v("账户或密码错误")]):e._e()],1)],1)},staticRenderFns:[]};var r=o("VU/8")(n,s,!1,function(e){o("r6UX")},null,null);t.default=r.exports}});
//# sourceMappingURL=4.9e248542652c2e323e0c.js.map