webpackJsonp([1],{Jq5s:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=1e3,a=6e4,r=36e5,o=864e5,c={name:"index",mounted:function(){var t=this;window.setInterval(function(){t.now=t.currentTime(),document.title=t.days+":"+t.hours+":"+t.minutes+":"+t.seconds+" - Beer O'Clock"},1e3),setTimeout(function(){t.filled=!0},1500)},data:function(){return{filled:!1,carbonate:!1,flow:!1,lqh:0,time:{days:0,hrs:0,mins:0,secs:0},now:this.currentTime(),au:new Audio("./static/final_countdown.mp3")}},computed:{ttb:function(){return this.nextFriday()-this.now.getTime()<=254e3&&this.au.paused&&(this.au.currentTime=(this.nextFriday()-this.now.getTime())/1e3,this.au.play()),5==this.now.getDay()&&this.now.getHours()<17?(this.lqh=28,this.carbonate=!0,this.flow=!0):(this.lqh=28*(this.perc>.075?this.perc:.075),this.flow=!1,this.carbonate=!1),this.nextFriday()-this.now.getTime()},perc:function(){return 1-Math.abs(this.now.getTime()-(this.nextFriday()-604800))/Math.abs(this.nextFriday()-604800-this.nextFriday())/1e3},seconds:function(){return String("0"+Math.floor(this.ttb%a/n)).slice(-2)},minutes:function(){return String("0"+Math.floor(this.ttb%r/a)).slice(-2)},hours:function(){return String("0"+Math.floor(this.ttb%o/r)).slice(-2)},days:function(){return String("0"+Math.floor(this.ttb/o)).slice(-2)}},methods:{currentTime:function(){return new Date},nextFriday:function(){var t=new Date(this.now);return t.setDate(t.getDate()+(12-t.getDay())%7),t.setHours(16,0,0,0),5==this.now.getDay()&&this.now.getHours()>=16&&t.setDate(t.getDate()+7),t.getTime()}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("h1",[t._v("Beer O'Clock")]),t._v(" "),s("div",{attrs:{id:"beer"}},[s("div",{staticClass:"mug"},[s("div",{staticClass:"beer-b"}),t._v(" "),s("div",{staticClass:"liquid",style:{height:t.lqh+"vmin"}},[s("div",{staticClass:"beer",class:{filled:t.filled,carbonate:t.carbonate}},[s("div",{staticClass:"cap"})])])]),t._v(" "),s("div",{staticClass:"froth bubble",class:{flow:t.flow}}),t._v(" "),s("div",{staticClass:"froth small-bubbles",class:{flow:t.flow}}),t._v(" "),s("div",{staticClass:"froth drip",class:{flow:t.flow}})]),t._v(" "),s("div",{attrs:{id:"timer"}},[s("span",[t._v(t._s(t.days))]),t._v(":"),s("span",[t._v(t._s(t.hours))]),t._v(":"),s("span",[t._v(t._s(t.minutes))]),t._v(":"),s("span",[t._v(t._s(t.seconds))])])])},staticRenderFns:[]},l=s("VU/8")(c,u,!1,function(t){s("Jq5s")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",render:function(t){return t(l)}})}},["NHnr"]);
//# sourceMappingURL=app.0e108860fd595a4f8451.js.map