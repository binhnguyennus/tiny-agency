(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(194),c=n(161),s=n.n(c),l=n(191),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(u.a,{title:"Not Found"},i.a.createElement(s.a,{paragraph:!0,color:"primary",gutterBottom:!0,variant:"h3",component:"span"},"Hey! You just hit a page that doesn't exist."))},t}(i.a.Component);t.default=Object(l.a)(p)},162:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return d}),n.d(t,"useStaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(6),i=n.n(o),u=n(152),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(163),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var p=n(34);n.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},163:function(e,t,n){var a;e.exports=(a=n(175))&&a.default||a},174:function(e){e.exports={data:{site:{siteMetadata:{company:"Fox and Geese",contact:{email:"hi@foxandgeese.com"}}}}}},175:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),u=n(60),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},191:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(158),c=n(230),s=n.n(c),l=n(223),p=n.n(l),m=n(193),d=n(172),f=n.n(d);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(m.a)(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return i.a.createElement(p.a,{generateClassName:this.muiPageContext.generateClassName},i.a.createElement(u.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(s.a,null),i.a.createElement(f.a,{implementation:"css"},i.a.createElement(e,this.props))))},n}(i.a.Component)}},193:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return c});n(77),n(55),n(78),n(227);var r=n(165),o=n(158),i=Object(o.createMuiTheme)({typography:{useNextVariants:!0}});function u(){return{theme:i,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(o.createGenerateClassName)()}}function c(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=u()),a.__INIT_MATERIAL_UI__):u()}}).call(this,n(226),n(73))},194:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(174),c=n(162),s=n(196),l=n.n(s),p=n(161),m=n.n(p),d=n(172),f=n.n(d),h=n(218),g=n.n(h),y=n(173),E=function(e){var t=e.data.site.siteMetadata,n=t.company,a=t.contact.email;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{style:{marginTop:"48px",marginBottom:"24px"}}),i.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(m.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",n," ",i.a.createElement(f.a,{only:["xs","sm"]},"–"),i.a.createElement(f.a,{only:["xl","lg","md"]},i.a.createElement("br",null))," ",a),i.a.createElement("a",{href:"https://github.com/foxandgeese/tiny-agency",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(g.a,null,i.a.createElement(y.b,null))))))},v=function(e){return i.a.createElement(c.StaticQuery,{query:"2334881711",render:function(e){return i.a.createElement(E,{data:e})},data:u})},b=n(190),x=n.n(b),w=n(158),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.classes;return i.a.createElement("div",{className:n.topper},i.a.createElement(x.a,{container:!0,justify:"center",alignItems:"stretch"},i.a.createElement(x.a,{item:!0,xs:!0,className:n.root},t,i.a.createElement(v,null))))},t}(i.a.Component);t.a=Object(w.withStyles)(function(e){return{topper:{backgroundColor:"#eee"},root:{maxWidth:"1168px",marginTop:"94px"}}})(_)}}]);
//# sourceMappingURL=component---src-pages-404-js-07e44861e2570574df95.js.map