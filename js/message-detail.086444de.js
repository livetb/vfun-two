(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["message-detail"],{"0c05":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chat-record-root"},[i("div",{ref:"records-root",staticClass:"main"},[i("van-pull-refresh",{staticClass:"pull-wrap",on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("div",t._l(t.msgList,(function(e,r){return i("div",{key:r,staticClass:"record-card",class:{self:e.fromUid+""!==t.touid+""}},[i("van-image",{attrs:{width:"34",height:"34",round:"",src:e.fromUid+""!==t.touid+""?t.profile.avatar:""}}),i("div",{staticClass:"content"},[i("div",{staticClass:"name-wrap"},[i("div",{staticClass:"date"},[t._v(t._s(e.createdTime))])]),i("div",{staticClass:"info"},[t._v(t._s(e.message))])])],1)})),0)])],1),i("div",{staticClass:"footer"},[i("message-input",{on:{send:t.sendmessage}})],1)])},n=[],s=(i("a4d3"),i("4de4"),i("4160"),i("26e9"),i("1d1c"),i("7a82"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("96cf"),i("89ba")),a=i("2fa7"),o=i("af82"),c=i("8ced"),l=i("5880");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(i,!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={data:function(){return{touid:this.$route.params.touid,page:1,msgList:[],refreshing:!1}},computed:h({},Object(l["mapState"])(["profile"])),components:{MessageInput:c["a"]},methods:{toBottom:function(){var t=this;this.$nextTick((function(){var e=t.$refs["records-root"];t.$refs["records-root"].scrollTop=e.scrollHeight}))},onRefresh:function(){this.page=1,this.loadData()},loadData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["h"](this.page,this.touid);case 2:e=t.sent,i=e.status,r=e.data,this.refreshing=!1,0===i&&(console.log(r),this.msgList=r?r.reverse():[]);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sendmessage:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,o["j"](e,this.touid);case 3:if(i=t.sent,r=i.status,0!==r){t.next=9;break}return t.next=8,this.loadData();case 8:this.toBottom();case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadData();case 2:this.toBottom();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},d=f,b=(i("b184"),i("2877")),p=Object(b["a"])(d,r,n,!1,null,null,null);e["default"]=p.exports},"23f4":function(t,e,i){},"26e9":function(t,e,i){"use strict";var r=i("23e7"),n=i("e8b5"),s=[].reverse,a=[1,2];r({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),s.call(this)}})},"2d80":function(t,e,i){},4614:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAuCAYAAABeUotNAAAEpklEQVRYR82YW6iUVRTH//893SjLtKjoZkpBN0orCorCCygqmVaShWSnCxHdTDAiu2h2Iyk1X6KC8qWgHqxefChIqZcIsqJ6qIdK6qEI0+5Zfr9Y0z6H45yZ+b45M0fPfpmBb621f9/69rpta5Qv4DJJMzxaOYETiqJYY3uR7UdGHShwkKRlwApJY8KRtheMKlBgLrBW0mmDv7TtiaMCFDgVWCdpbpOjuDOlNG6/ggKHSVoBLJN0cIt42ZpSmrrfQIFFwBpJJ7YLaGB9rVZbus9BgXMkbchppzTp2O6z/fI+AwXGFUWxOqV0K3BAKWEWsD3F9scjDgokSTcDj0k6uipglttt+3Dbu0cUFLgY2CDpvA4B6+J1T9pT6v+HY6BMBzhO0lPA4m72qJ9Nu6/noMCBku6W9CBwRNkLlT23vdT2+p6CArMkrQNOLwPof267kPQTcEwzHdvTbG/pCSgwUdIzwPyqgFnuX9trgfgCUd8bF7bH297ZFShwqKT7gOWSDukQ8k/b12X9i1p485uo8QPe73CDujhwNfC0pJOHob/L9jxJF2QbrUy8kVJaMCxQ4CxJzwLThwEY6eYHSbMl7ZL0aa71TU3ZXml7VUegwNiiKFbZvl1S5arSQBCfcqbtr4B3gBntXtb2fNtvVgIFIs/2AU9IahqZVTxr+3NJs2x/D9wEvFimZ/sU29+WggIX5uYhfoe9bH8gaY7tHcDxQEAfWeLNnyPiB8sMqUyR04qieNL2EklRp7tZb9fHCPv3HISbKqaxLSmlaU1Bc0dzB7BS0thu6Op5z35d0uJoKDLkQuC1KnZtr7N9zxDQfLDX56iuYqutDPB8Sum2XHkinY0HvpB0bBXjtm+wvXEvUOABYHUVA1VkIvBqtdr9g2X37Nmz0fb1VfTz15hs+5NmHj1f0o1AVIu2B73NZlHyltuOQjCwcg+wOWeQUlbbf0uKHvSflsEERCm8KqAlTc1Nb6lxSVG3b4m2rAFyDPCZpAlVjGRvbrM9pH9t2Y8Ck4qi6EspLQFOarPRX/k2YyA598sCUcXurAqZQV+yHY7aa5U2ztmrMyNRS4oaPbjT+cX2Ff2tWIM3o7t/r9MUN7gHbfnpy94ciJlncUDbjko12/ZHjXpAzOjbgDPKbA7xnD3V9taOPdpqIyAO/K/NngOP5rujTjkjIMfZjqals0/f8U5wLvChpBhLOlq2v7Y9qZlS6RntaKf/e9VXgGs71cvym1JKV+4r0OgPrpEUheTMToBtPxx3oSMCCkQXHoH1Qn/JjI1ytliYgc+uApwzyFsjBRq3IAG5TdJdtt9vSFNxvKKIxAgd904tl+0JtrePKGg2HlH7qqR7o0luAhzeD+DJTdLSDttHtXqLroMJqHu0YYPfbD8eY3Su3QOPc82fBzzUcNXzbkqp5Sw2UqABtt32Jba/a+Ul4PIMHBPp2lqtFhe6TddIgf5o+1LbX1YJImCOpD+aleJ+/Z6D5puN6Tm4qnBWkuk1aHglps29Ir8SSYlQL0Hj0jVm8c29ABuSFbo1mqP+ubhLsl1peBvOnr3waPSpyXZjihoOT+ti0K21du1et7YH6/8HXrgwslTFaH0AAAAASUVORK5CYII="},"565f":function(t,e,i){"use strict";var r=i("2638"),n=i.n(r),s=i("c31d"),a=i("ad06"),o=i("7744"),c=i("dfaf"),l=i("1325"),u=i("a142");function h(){return!u["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var f=i("a8c1"),d=h();function b(){d&&Object(f["e"])(Object(f["b"])())}var p=i("d282"),g=i("ea8e"),m=Object(p["a"])("field"),v=m[0],O=m[1];e["a"]=v({inheritAttrs:!1,props:Object(s["a"])({},c["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(u["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(s["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(g["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,r=this.$attrs.maxlength;return"number"===this.type&&Object(u["b"])(r)&&i.length>r&&(i=i.slice(0,r),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),b()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(l["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),r=e>=48&&e<=57||46===e&&i||45===e;r||Object(l["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(u["c"])(this.autosize)){var i=this.autosize,r=i.maxHeight,n=i.minHeight;r&&(e=Math.min(e,r)),n&&(e=Math.max(e,n))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:O("control",this.inputAlign)},[e]);var i={ref:"input",class:O("control",this.inputAlign),domProps:{value:this.value},attrs:Object(s["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",n()([{},i])):t("input",n()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:O("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(a["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:O("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(a["a"],{attrs:{name:this.rightIcon}})])},renderWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.$attrs.maxlength)return t("div",{class:O("word-limit")},[this.value.length,"/",this.$attrs.maxlength])}},render:function(){var t,e=arguments[0],i=this.slots,r=this.labelAlign,n={icon:this.renderLeftIcon};return i("label")&&(n.title=function(){return i("label")}),e(o["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[O("label",r),this.labelClass],arrowDirection:this.arrowDirection},class:O((t={error:this.error},t["label-"+r]=r,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:n,on:{click:this.onClick}},[e("div",{class:O("body")},[this.renderInput(),this.showClear&&e(a["a"],{attrs:{name:"clear"},class:O("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&e("div",{class:O("button")},[i("button")])]),this.renderWordLimit(),this.errorMessage&&e("div",{class:O("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},7744:function(t,e,i){"use strict";var r=i("c31d"),n=i("2638"),s=i.n(n),a=i("d282"),o=i("a142"),c=i("dfaf"),l=i("ba31"),u=i("48f4"),h=i("ad06"),f=Object(a["a"])("cell"),d=f[0],b=f[1];function p(t,e,i,r){var n=e.icon,a=e.size,c=e.title,f=e.label,d=e.value,p=e.isLink,g=e.arrowDirection,m=i.title||Object(o["b"])(c),v=i.default||Object(o["b"])(d),O=i.label||Object(o["b"])(f),y=O&&t("div",{class:[b("label"),e.labelClass]},[i.label?i.label():f]),j=m&&t("div",{class:[b("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[c]),y]),k=v&&t("div",{class:[b("value",{alone:!i.title&&!c}),e.valueClass]},[i.default?i.default():t("span",[d])]),w=i.icon?i.icon():n&&t(h["a"],{class:b("left-icon"),attrs:{name:n}}),C=i["right-icon"],S=C?C():p&&t(h["a"],{class:b("right-icon"),attrs:{name:g?"arrow-"+g:"arrow"}});function A(t){Object(l["a"])(r,"click",t),Object(u["a"])(r)}var B=p||e.clickable,x={clickable:B,center:e.center,required:e.required,borderless:!e.border};return a&&(x[a]=a),t("div",s()([{class:b(x),attrs:{role:B?"button":null,tabindex:B?0:null},on:{click:A}},Object(l["b"])(r)]),[w,j,k,S,i.extra&&i.extra()])}p.props=Object(r["a"])({},c["a"],{},u["c"]),e["a"]=d(p)},"7f75":function(t,e,i){},"8ced":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"message-input-root border"},[r("van-field",{attrs:{placeholder:"Say something……",center:""},on:{"click-right-icon":t._send},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[r("van-image",{attrs:{slot:"left-icon",width:"34",height:"34",round:"","lazy-load":"",src:t.profile.avatar},slot:"left-icon"}),r("van-icon",{attrs:{slot:"right-icon",size:"24",name:i("4614")},slot:"right-icon"})],1)],1)},n=[],s=(i("a4d3"),i("4de4"),i("4160"),i("1d1c"),i("7a82"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("2fa7")),a=(i("b342"),i("ad06")),o=(i("9eda"),i("565f")),c=(i("c625"),i("b650")),l=i("8bbf"),u=i.n(l),h=i("5880");function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(i,!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}u.a.use(a["a"]).use(o["a"]).use(c["a"]);var b={data:function(){return{message:""}},computed:d({},Object(h["mapState"])(["profile"])),methods:{_send:function(){this.message&&(this.$emit("send",this.message),this.message="")}}},p=b,g=(i("b673"),i("2877")),m=Object(g["a"])(p,r,n,!1,null,null,null);e["a"]=m.exports},"9eda":function(t,e,i){"use strict";i("3cd0"),i("5cc2"),i("7f75")},b184:function(t,e,i){"use strict";var r=i("23f4"),n=i.n(r);n.a},b673:function(t,e,i){"use strict";var r=i("2d80"),n=i.n(r);n.a},c625:function(t,e,i){"use strict";i("3cd0"),i("5cc2")},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var r={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}}}]);
//# sourceMappingURL=message-detail.086444de.js.map