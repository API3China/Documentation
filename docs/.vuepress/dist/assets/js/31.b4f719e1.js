(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{492:function(e,t,n){},649:function(e,t,n){"use strict";n(492)},685:function(e,t,n){"use strict";n.r(t);n(40),n(51),n(47),n(234),n(39),n(237),n(142),n(12),n(24),n(132),n(29),n(231),n(68),n(136);var a=n(79),o=n(483),r=n.n(o),s={name:"BeaconList",data:function(){return{loaded:!1,showSpinner:!1,error:null,beacons:[]}},mounted:function(){this.$nextTick(Object(a.a)(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.showSpinner=!0,this.error=null,e.next=5,r.a.get("https://raw.githubusercontent.com/api3dao/operations/main/data/documentation_metadata.json");case 5:for(t=e.sent,n=0;n<t.data.beacons.length;n++)(a=t.data.beacons[n]).show=!0,a.showDetails=!1,a.content=a.templateName.toLowerCase()+" "+a.apiName.toLowerCase()+" "+a.description.toLowerCase()+" "+a.chains.toString().toLowerCase().replace(/,/g," ");this.beacons=t.data.beacons,this.beacons.sort(this.sortByName),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.toString()),this.error=e.t0.toString();case 15:this.showSpinner=!1,this.loaded=!0;case 17:case"end":return e.stop()}}),e,this,[[0,11]])}))))},methods:{sortByName:function(e,t){return t.templateName.toLowerCase()>e.templateName.toLowerCase()?-1:t.templateName.toLowerCase()<e.templateName.toLowerCase()?1:0},find:function(e){var t=this.$el.querySelector("#searchText").value.toLowerCase().split(" ");this.beacons.forEach((function(e){var n=[];t.forEach((function(t){0===t.length||(e.content.indexOf(t)>-1?n.push(!0):n.push(!1)),n.includes(!1)?e.show=!1:e.show=!0}))}))}}},i=(n(649),n(9)),c=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return!0===e.loaded?n("div",[n("input",{staticClass:"b1-beacon-filter-input",attrs:{id:"searchText",spellcheck:"false",placeholder:"Filter (must contain all)"},on:{keyup:function(t){return e.find(t)}}}),e._v(" "),n("hr"),e._v(" "),n("div",{staticStyle:{"padding-left":"55px"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],attrs:{src:"/img/spinner.gif"}})]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:null!==e.error,expression:"error !== null"}],staticClass:"b1-error"},[e._v("\n    The Beacon list failed to load: ("+e._s(e.error)+")\n  ")]),e._v(" "),e._l(e.beacons,(function(e,t){return n("beacons-browser-BeaconItem",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}],key:"B"+t,attrs:{beacon:e}})}))],2):e._e()}),[],!1,null,null,null);t.default=c.exports}}]);