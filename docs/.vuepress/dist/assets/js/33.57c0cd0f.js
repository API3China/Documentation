(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{495:function(e,t,a){},653:function(e,t,a){"use strict";a(495)},688:function(e,t,a){"use strict";a.r(t);var n={name:"BeaconItem",props:["beacon","cnt"],methods:{getArrowSrc:function(){return this.beacon.showDetails?"/img/arrow-down-16.png":"/img/arrow-right-16.png"},showDetails:function(){this.$parent.collapseBeaconDetails(this.beacon.beaconId),this.beacon.showDetails=!this.beacon.showDetails}}},s=(a(653),a(9)),o=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{key:e.beacon.beaconId,staticClass:"b2-beacon-box"},[a("div",{staticClass:"b2-beacon-provider"},[a("a",{attrs:{href:e.beacon.url}},[e._v(e._s(e.beacon.apiName))])]),e._v(" "),a("div",{staticClass:"b2-beacon-name",staticStyle:{cursor:"pointer","user-select":"none"},on:{click:function(t){return e.showDetails()}}},[a("span",{staticStyle:{opacity:"0.65"}},[a("Badge",{attrs:{type:"junk",text:(e.cnt+1).toString(),vertical:"middle"}})],1),e._v("\n\n    "+e._s(e.beacon.templateName)+"\n    "),a("img",{staticStyle:{cursor:"pointer",height:"12px","margin-top":"0px"},attrs:{src:e.getArrowSrc()}})]),e._v(" "),a("div",{staticClass:"b2-beacon-description"},[e._v("\n    "+e._s(e.beacon.description)+"\n  ")]),e._v(" "),a("div",{staticClass:"b2-beacon-id"},[e._v("Beacon ID: "+e._s(e.beacon.beaconId))]),e._v(" "),a("beacons-browser2-BeaconDetails",{directives:[{name:"show",rawName:"v-show",value:!0===e.beacon.showDetails,expression:"beacon.showDetails === true"}],attrs:{beacon:e.beacon}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);