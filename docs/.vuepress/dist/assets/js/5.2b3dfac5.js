(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{410:function(t,e,n){"use strict";var i=n(1),s=n(220).trim;i({target:"String",proto:!0,forced:n(414)("trim")},{trim:function(){return s(this)}})},412:function(t,e,n){var i=n(1),s=n(413);i({global:!0,forced:parseInt!=s},{parseInt:s})},413:function(t,e,n){var i=n(4),s=n(2),o=n(3),a=n(16),r=n(220).trim,u=n(221),c=i.parseInt,l=i.Symbol,h=l&&l.iterator,f=/^[+-]?0x/i,g=o(f.exec),d=8!==c(u+"08")||22!==c(u+"0x16")||h&&!s((function(){c(Object(h))}));t.exports=d?function(t,e){var n=r(a(t));return c(n,e>>>0||(g(f,n)?16:10))}:c},414:function(t,e,n){var i=n(109).PROPER,s=n(2),o=n(221);t.exports=function(t){return s((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||i&&o[t].name!==t}))}},419:function(t,e,n){"use strict";var i,s=n(1),o=n(3),a=n(33).f,r=n(85),u=n(16),c=n(143),l=n(31),h=n(144),f=n(19),g=o("".endsWith),d=o("".slice),p=Math.min,m=h("endsWith");s({target:"String",proto:!0,forced:!!(f||m||(i=a(String.prototype,"endsWith"),!i||i.writable))&&!m},{endsWith:function(t){var e=u(l(this));c(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,s=void 0===n?i:p(r(n),i),o=u(t);return g?g(e,o,s):d(e,s-o.length,s)===o}})},420:function(t,e,n){},421:function(t,e,n){},433:function(t,e,n){"use strict";e.a={}},434:function(t,e,n){"use strict";n(420)},435:function(t,e,n){"use strict";n(421)},443:function(t,e,n){"use strict";n(410),n(47),n(86),n(30),n(6),n(21),n(411),n(222),n(228),n(223),n(40),n(415),n(416),n(418),n(409),n(84),n(219),n(108),n(419),n(141);var i=n(229),s=n.n(i),o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=s()(e,"title","");return s()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),a(t,i)},a=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),s=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return s.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var o=t.endsWith(" ");return new RegExp(s.map((function(t,e){return s.length!==e+1||o?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},r={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||15,i=this.$localePath,s=[],a=0;a<e.length&&!(s.length>=n);a++){var r=e[a];if(this.getPageLocalePath(r)===i&&this.isSearchable(r))if(o(t,r))s.push(r);else if(r.headers)for(var u=0;u<r.headers.length&&!(s.length>=n);u++){var c=r.headers[u];c.title&&o(t,r,c.title)&&s.push(Object.assign({},r,{path:r.path+"#"+c.slug,header:c}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(434),n(15)),c=Object(u.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=c.exports},445:function(t,e,n){"use strict";n(435);var i=n(15),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.a=s.exports},463:function(t,e,n){},631:function(t,e,n){"use strict";n(463)},682:function(t,e,n){"use strict";n.r(e);n(412);var i=n(433),s=n(443),o=n(445),a=n(429);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var u={name:"Navbar",components:{SidebarButton:o.a,NavLinks:a.a,SearchBox:s.a,AlgoliaSearchBox:i.a},data:function(){return{linksWrapMaxWidth:null,isLandingPage:!1,clipLogo:!0}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?(t.linksWrapMaxWidth=null,document.documentElement.clientWidth<281?t.clipLogo=!0:t.clipLogo=!1):(t.clipLogo=!1,t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0))};n(),window.addEventListener("resize",n,!1),this.$nextTick((function(){"/"===this.$route.path&&(this.isLandingPage=!0)}))}},c=(n(631),n(15)),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{directives:[{name:"show",rawName:"v-show",value:!t.isLandingPage,expression:"!isLandingPage"}],on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("a",{staticClass:"home-link",attrs:{href:"https://api3.org"}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",class:{"logo-clipped":t.clipLogo},attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.$siteTitle,expression:"$siteTitle"}],ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo},on:{click:function(e){t.$themeConfig.startPath=t.$route.fullPath}}},[t._v(t._s(t.$siteTitle))])]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[n("Versions"),t._v(" "),t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):"/"!=t.$route.path&&!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("api3-JobsIcon",{staticClass:"can-hide"}),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);