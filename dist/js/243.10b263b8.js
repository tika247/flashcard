(self["webpackChunkflashcard"]=self["webpackChunkflashcard"]||[]).push([[243],{437:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(252),l=n(577);const o={class:"hdg-02"};var s=(0,a.aZ)({__name:"HdgLevel02",props:{hdg:String,text:String},setup(e){return(t,n)=>((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("h2",null,(0,l.zw)(e.hdg),1),(0,a._)("span",null,(0,l.zw)(e.text),1)]))}}),i=n(744);const r=(0,i.Z)(s,[["__scopeId","data-v-e2fcf884"]]);var u=r},78:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(252);const l={xmlns:"http://www.w3.org/2000/svg",class:"thunderB"},o=(0,a._)("symbol",{id:"thunderB"},[(0,a._)("g",null,[(0,a._)("path",{d:"M441.086,390V696L567.327,558.818l-43.9-63.259L621.086,390Z",transform:"translate(-441.999 -390.162)",fill:"#4aad5b"}),(0,a._)("path",{d:"M0,0V306L126.242,168.818l-43.9-63.259L180,0Z",transform:"translate(399.086 531.838) rotate(180)",fill:"#4aad5b"})])],-1),s=[o];function i(e,t){return(0,a.wg)(),(0,a.iD)("svg",l,s)}var r=n(744);const u={},c=(0,r.Z)(u,[["render",i]]);var d=c},243:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(252),l=n(262),o=n(78),s=n(577);const i=e=>((0,a.dD)("data-v-7b8e0c3a"),e=e(),(0,a.Cn)(),e),r={class:"panel"},u=i((()=>(0,a._)("svg",{viewBox:"0 0 400 532",class:"panel__bg"},[(0,a._)("use",{"xlink:href":"#thunderB"})],-1)));var c=(0,a.aZ)({__name:"PanelCardA",props:{text:String,isSelectMode:Boolean},setup(e){return(t,n)=>((0,a.wg)(),(0,a.iD)("li",r,[(0,a._)("button",{class:(0,s.C_)({"is-selectMode":e.isSelectMode})},[(0,a._)("span",null,(0,s.zw)(e.text),1),u],2)]))}}),d=n(744);const v=(0,d.Z)(c,[["__scopeId","data-v-7b8e0c3a"]]);var m=v,_=n(437),g=n(730);const w=e=>((0,a.dD)("data-v-5225d658"),e=e(),(0,a.Cn)(),e),h={key:0,class:"panel"},p=w((()=>(0,a._)("svg",{viewBox:"0 0 400 532",class:"panel__bg"},[(0,a._)("use",{"xlink:href":"#thunderB"})],-1))),f={class:"panel__front"},C={class:"panel__back"},Z={class:"panel__table"},b=w((()=>(0,a._)("colgroup",null,[(0,a._)("col"),(0,a._)("col")],-1)));var k=(0,a.aZ)({__name:"PanelCardC",props:{wordData:Object},setup(e){const t=e;let n=(0,l.iH)(!1);const o=e=>{if(!t.wordData)return;const n=Object.entries(e);return n},i=()=>{n.value=!n.value};return(t,r)=>e.wordData?((0,a.wg)(),(0,a.iD)("li",h,[(0,a._)("button",{class:(0,s.C_)(["panel__btn",{"is-clicked":(0,l.SU)(n)}]),onClick:r[0]||(r[0]=e=>i())},[p,(0,a._)("div",f,(0,s.zw)(e.wordData[0].word),1),(0,a._)("div",C,[(0,a._)("table",Z,[(0,a._)("caption",null," information of "+(0,s.zw)(e.wordData[0].word),1),b,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o(e.wordData[0]),(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e[0]},[(0,a._)("th",null,(0,s.zw)(e[0]),1),(0,a._)("td",null,(0,s.zw)(e[1]),1)])))),128))])])],2)])):(0,a.kq)("",!0)}});const z=(0,d.Z)(k,[["__scopeId","data-v-5225d658"]]);var x=z;const B=["src","alt","width","height"];var D=(0,a.aZ)({__name:"BtnB",props:{filename:String,altText:String,widthNum:String,heightNum:String,sizeClass:String,currentActiveBtn:String,isInactive:Boolean},setup(e){return(t,l)=>((0,a.wg)(),(0,a.iD)("button",{class:(0,s.C_)(["btn",[e.sizeClass,{"is-inactive":e.isInactive},{"is-current":e.currentActiveBtn===e.filename}]])},[(0,a._)("img",{src:n(18)(`./icon-${e.filename}.svg`),alt:e.altText,width:e.widthNum,height:e.heightNum},null,8,B)],2))}});const S=(0,d.Z)(D,[["__scopeId","data-v-b3797a6a"]]);var M=S;const N={class:"quiz-contents"},U={class:"quiz-item"},H={class:"quiz-item__num"},I={class:"quiz-controller"};var W=(0,a.aZ)({__name:"QuizContents",props:{mode:String},emits:["eventUpdateMode"],setup(e,{emit:t}){const n=e,o=(0,a.f3)("$word");(0,a.aZ)({name:"PanelCardC",components:{PanelCardC:x}}),(0,a.aZ)({name:"BtnB",components:{BtnB:M}});const i=(0,l.iH)(1);let r=(0,l.iH)(void 0);const u=(0,l.iH)(n.mode);(0,a.YP)(u,(()=>{t("eventUpdateMode",u)}));const c=(0,a.Fl)((()=>{let e=null;if(i.value)return"preview"===u.value?e=d():"random"===u.value&&(e=v()),e})),d=()=>{let e=null;const t=o.value.filter((e=>"miss"===e.state));if(t.length){const n=Math.floor(Math.random()*t.length),a=o.value.indexOf(t[n]);e=[t[n],a]}else{alert("You don't have any word checked as 'miss'.\nLet's move to random mode!"),u.value="random",i.value=1,r.value=void 0;const t=Math.floor(Math.random()*o.value.length);e=[o.value[t],t]}return e},v=()=>{const e=Math.floor(Math.random()*o.value.length);return[o.value[e],e]},m=c,_=e=>{r.value=e},w=(0,a.Fl)((()=>!r.value)),h=()=>{m.value&&(o.value[m.value[1]].state=r.value,i.value+=1,r.value=void 0,g.Z.putWord(o.value))};return(0,a.YP)(m,(()=>{r.value=m.value[0].state?m.value[0].state:void 0})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",N,[(0,a._)("div",U,[(0,a._)("div",H,"Q"+(0,s.zw)(i.value),1),(0,a.Wm)(x,{wordData:(0,l.SU)(m)},null,8,["wordData"])]),(0,a._)("ul",I,[(0,a._)("li",null,[(0,a.Wm)(M,{filename:"ok",altText:"No problem about this word",widthNum:"24",heightNum:"42",sizeClass:"is-large",currentActiveBtn:(0,l.SU)(r),onClick:t[0]||(t[0]=e=>_("ok"))},null,8,["currentActiveBtn"])]),(0,a._)("li",null,[(0,a.Wm)(M,{filename:"miss",altText:"Could not get this word so preview later",widthNum:"24",heightNum:"42",sizeClass:"is-large",currentActiveBtn:(0,l.SU)(r),onClick:t[1]||(t[1]=e=>_("miss"))},null,8,["currentActiveBtn"])]),(0,a._)("li",null,[(0,a.Wm)(M,{filename:"next",altText:"Go to next word",widthNum:"24",heightNum:"42",sizeClass:"is-large",isInactive:(0,l.SU)(w),onClick:h},null,8,["isInactive"])])])]))}});const q=(0,d.Z)(W,[["__scopeId","data-v-1bcf1cff"]]);var y=q;const A={class:"quiz-lyt"},L={key:0,class:"quiz-panel-list"};var P=(0,a.aZ)({__name:"QuizView",setup(e){(0,a.aZ)({name:"ThunderB",components:{ThunderB:o.Z}}),(0,a.aZ)({name:"PanelCardA",components:{PanelCardA:m}}),(0,a.aZ)({name:"HdgLevel02",components:{HdgLevel02:_.Z}}),(0,a.aZ)({name:"QuizContents",components:{QuizContents:y}});let t=(0,l.iH)("");const n=(0,a.Fl)((()=>{let e=null;return e="preview"===t.value?"Preview Mode":"random"===t.value?"Random Mode":"Select Quiz Mode",e})),s=e=>{t.value=e.value};return(e,i)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",A,[(0,a.Wm)(_.Z,{hdg:"Word Quiz",text:(0,l.SU)(n)},null,8,["text"]),(0,l.SU)(t)?((0,a.wg)(),(0,a.j4)(y,{key:1,onEventUpdateMode:s,mode:(0,l.SU)(t)},null,8,["mode"])):((0,a.wg)(),(0,a.iD)("ul",L,[(0,a.Wm)(m,{text:"Review","is-select-mode":!0,onClick:i[0]||(i[0]=e=>{(0,l.dq)(t)?t.value="preview":t="preview"})}),(0,a.Wm)(m,{text:"Rondom","is-select-mode":!0,onClick:i[1]||(i[1]=e=>{(0,l.dq)(t)?t.value="random":t="random"})})]))]),(0,a.Wm)(o.Z)],64))}});const T=(0,d.Z)(P,[["__scopeId","data-v-1b345f66"]]);var O=T},18:function(e,t,n){var a={"./icon-add.svg":493,"./icon-close.svg":398,"./icon-done.svg":881,"./icon-edit.svg":743,"./icon-miss.svg":652,"./icon-next.svg":55,"./icon-ok.svg":469,"./icon-remove.svg":521};function l(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=o,e.exports=l,l.id=18}}]);
//# sourceMappingURL=243.10b263b8.js.map