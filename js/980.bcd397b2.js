"use strict";(self["webpackChunkctwing_shop_h5"]=self["webpackChunkctwing_shop_h5"]||[]).push([[980],{9059:function(t,s,e){e.d(s,{Z:function(){return c}});var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"product-send-to"},[e("van-popup",{style:{height:"86%"},attrs:{round:"",position:"bottom"},on:{open:t.initAddress},model:{value:t.showPopup,callback:function(s){t.showPopup=s},expression:"showPopup"}},[e("div",{staticClass:"title-box"},[t._v(" 请选择收货地址 "),e("div",{staticClass:"svg-box",on:{click:t.onClose}},[e("svg-icon",{staticClass:"icon-close",attrs:{"icon-class":"icon-close"}})],1)]),e("div",{staticClass:"address-body"},t._l(t.addressList,(function(s){return e("div",{key:s.addrId,staticClass:"address-item",on:{click:function(e){return t.onAddress(s)}}},[e("div",{staticClass:"pr12"},[e("svg-icon",{staticClass:"svg-checked ",attrs:{"icon-class":s.addrId==t.addressId?"icon-checked":"icon-location"}})],1),e("div",[e("div",{staticClass:"ft14"},[t._v(" "+t._s(s.addrDetail)+" ")]),e("div",{staticClass:"text-box"},[e("span",{staticClass:"text"},[t._v(t._s(s.contacter))]),e("span",{staticClass:"pl10"},[t._v(t._s(s.contactPhone))])])])])})),0),e("div",{staticClass:"footer-body",on:{click:function(s){return t.$router.push("/newAddress")}}},[e("div",{staticClass:"btn-box"},[e("div",{staticClass:"btn"},[t._v("使用其他收货地址")])])])])],1)},a=[],i={name:"productSendTo",data(){return{showPopup:!1,radio:!0,addressList:[],query:{tenantId:10037279,pageSize:10,pageNow:1},addressId:""}},methods:{initAddress(){this.$api.qryCustAddrListInfoByTenantId({...this.query}).then((t=>{"core.0000"==t.code?this.addressList=t.data.list:this.$toast(t.msg)})).catch((t=>{this.$toast(t.msg)}))},onAddress(t){this.addressId=t.addrId,this.$emit("onAddress",t),this.showPopup=!1},initChangeSelectAddressId(t){this.addressId=t},onClose(){this.showPopup=!1}}},o=i,n=e(3736),d=(0,n.Z)(o,r,a,!1,null,"e3948ea6",null),c=d.exports},6478:function(t,s,e){e.d(s,{Z:function(){return l}});var r=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[t.item.orderItems?r("div",{staticClass:"address"},[r("img",{attrs:{src:e(3509),alt:""}}),r("div",[r("p",[r("span",{staticClass:"name"},[t._v(t._s(t.item.orderItems[0].orderRecvInfos[0].receiverName))]),r("span",{staticClass:"phone"},[t._v(t._s(t.item.orderItems[0].orderRecvInfos[0].recvPhone))])]),r("p",{staticClass:"location"},[t._v(t._s(t.item.orderItems[0].orderRecvInfos[0].recvAddress))])]),t.isEdit?r("span",{staticClass:"button",on:{click:function(s){return s.stopPropagation(),t.handleAddress.apply(null,arguments)}}},[t._v("修改")]):t._e()]):t._e(),r("productSendTo",{ref:"sendToRef",on:{onAddress:t.onAddress}})],1)},a=[],i=e(9059),o={components:{productSendTo:i.Z},props:{isEdit:{type:Boolean,default:!0},item:{type:Object,default:()=>{}}},data(){return{}},methods:{onAddress(t){this.$emit("Address",t)},handleAddress(){this.$refs.sendToRef.showPopup=!0}}},n=o,d=e(3736),c=(0,d.Z)(n,r,a,!1,null,null,null),l=c.exports},4185:function(t,s,e){e.d(s,{Z:function(){return c}});var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.item.orderItems?e("div",{staticClass:"oredr-goods"},[e("div",{staticClass:"company-name"},[t._v(" "+t._s(t.item.orderItems[0].sellerName))]),e("div",{staticClass:"goods-box"},[e("img",{directives:[{name:"real-img",rawName:"v-real-img",value:t.item.orderItems[0].orderProdInst.imgUrl,expression:"item.orderItems[0].orderProdInst.imgUrl"}],staticClass:"goods-img"}),e("div",{staticClass:"goods-text-box"},[e("div",{staticClass:"goods-title"},[t._v(" "+t._s(t.item.orderItems[0].orderProdInst.prodName)+" ")]),t.item.orderItems[0].orderProdInst.catName?e("van-tag",{attrs:{plain:"",type:"primary"}},[t._v(t._s(t.item.orderItems[0].orderProdInst.catName))]):t._e(),t.item.orderItems[0].orderProdInst.prodTypeName?e("van-tag",{attrs:{plain:"",type:"danger"}},[t._v(t._s(t.item.orderItems[0].orderProdInst.prodTypeName))]):t._e(),e("div",{staticClass:"price"},[e("span",[t._v("￥")]),e("span",{staticClass:"num"},[t._v(t._s(t.item.totalFee))])])],1)]),t.item.orderItems[0].orderProdInst.orderProdResInsts&&t.item.orderItems[0].orderProdInst.orderProdResInsts.length>0?e("div",t._l(t.item.orderItems[0].orderProdInst.orderProdResInsts,(function(s,r){return e("div",{key:r,staticClass:"goodes-remark"},[e("span",{staticClass:"nowrap ell"},[t._v(" "+t._s(s.name)+" ")]),e("span",[t._v("x"+t._s(s.quantity))])])})),0):t._e(),t.item.orderItems[0].orderProdInst.orderProdInstAttrs&&t.item.orderItems[0].orderProdInst.orderProdInstAttrs.length>0?e("div",{staticClass:"goods-serve"},t._l(t.item.orderItems[0].orderProdInst.orderProdInstAttrs,(function(s,r){return e("p",{key:r},[s.attrValueName&&"XSTS"!=s.attrCode?[t._v(" 已选："+t._s(s.attrName)),"XSZF"!=s.attrCode?[t._v(","+t._s(s.attrValueName))]:t._e()]:t._e()],2)})),0):t._e(),0!=t.item.discountFee?e("div",{staticClass:"actual-price"},[e("span",[t._v("小计")]),e("span",{staticClass:"num"},[t._v("¥ "+t._s(t.item.totalFee||0))])]):t._e(),0!=t.item.discountFee?e("div",{staticClass:"actual-price"},[e("span",[t._v("优惠")]),e("span",{staticClass:"num red"},[t._v(" ¥ "+t._s(t.item.discountFee||0))])]):t._e(),e("div",{staticClass:"actual-price"},[e("span",[t._v("实价")]),e("span",{staticClass:"num",staticStyle:{color:"#FF2C4E"}},[t._v("¥ "+t._s(t.item.payAmount||0))])])]):t._e()},a=[],i={props:["item"],data(){return{}}},o=i,n=e(3736),d=(0,n.Z)(o,r,a,!1,null,null,null),c=d.exports},9998:function(t,s,e){e.r(s),e.d(s,{default:function(){return I}});var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"logistics-info"},[e("div",{staticClass:"info-body"},[t.item?e("order-address",{attrs:{item:t.item,isEdit:!1}}):t._e(),t.stepsList[0]?e("div",{staticClass:"list-box mt9"},[e("div",{staticClass:"flex-between ft14 title-box"},[e("p",[t._v(t._s(t.stepsList[0].shipperCode))]),e("div",{staticClass:"flex-end"},[e("p",{staticClass:"gray"},[t._v(t._s(t.stepsList[0].logisticCode))]),t._v("  ｜  "),e("span",{on:{click:function(s){return t.copy(t.stepsList[0].logisticCode)}}},[t._v("复制")])])]),e("div",{staticClass:"content-box"},[e("steps",{attrs:{stepsList:t.stepsList}})],1)]):t._e(),t.item?e("orderDetailsGoods",{attrs:{item:t.item}}):t._e()],1)])},a=[],i=(e(7658),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"steps"},[e("van-steps",{attrs:{direction:"vertical",active:0}},t._l(t.stepsList[0].traces,(function(s,r){return e("van-step",{key:r},[e("div",{staticClass:"flex",class:"已签收"==s.state?"blue":""},[e("p",{staticClass:"ft15 mr6",class:"已签收"==s.state?"":"deep-gray"},[t._v(t._s(s.actionName))]),e("span",{staticClass:"ft12",class:"已签收"==s.state?"":"gray"},[t._v(t._s(s.acceptTime))])]),e("p",{staticClass:"ft14  mt7 lh-22",class:"已签收"==s.state?"black":"gray"},[t._v(t._s(s.acceptStation))]),t._l(s.list,(function(s,r){return e("van-step",{key:r},[e("div",{staticClass:"flex"},[e("span",{staticClass:"ft12 gray"},[t._v(t._s(s.acceptTime))])]),e("p",{staticClass:"ft14 gray mt7 lh-22"},[t._v(t._s(s.acceptStation))])])}))],2)})),1)],1)}),o=[],n={props:{stepsList:{type:Array,required:!0}}},d=n,c=e(3736),l=(0,c.Z)(d,i,o,!1,null,"7c7a2b48",null),p=l.exports,u=e(2083),m=e(4185),v=e(6478),h={name:"logisticsInfo",components:{steps:p,orderDetailsGoods:m.Z,orderAddress:v.Z},data(){return{copy:u.JG,stepsList:[],item:{}}},created(){this.$nextTick((()=>{this.logistics(),this.queryAepOrderDetailInfo(this.$route.query.custOrderId,this.$route.query.tenantId)}))},mounted(){},methods:{logistics(){let t={orderItemId:this.$route.query.orderItemId,tenantId:this.$route.query.tenantId};this.$api.logistics(t).then((t=>{t&&(this.stepsList=t,this.formatList(t))}))},queryAepOrderDetailInfo(t,s){let e={custOrderId:t,tenantId:s};this.$api.queryAepOrderDetailInfo(e).then((t=>{"core.0000"==t.code&&(this.item=t.data)}))},formatList(t){let s=[],e=this,r=t[0].traces.sort((function(t,s){let e=t["acceptTime"],r=s["acceptTime"];const a=Math.floor(new Date(e).getTime()/1e3),i=Math.floor(new Date(r).getTime()/1e3);return i-a}));for(let a=0;a<r.length;a++){let t=s.find((t=>t.action===r[a].action));if(t){let t=s.findIndex((t=>t.action===r[a].action));s[t].list.push(r[a])}else r[a].list=[],s.push(r[a])}e.stepsList[0].traces=s}}},f=h,C=(0,c.Z)(f,r,a,!1,null,"5ad0c0c2",null),I=C.exports},2083:function(t,s,e){e.d(s,{JG:function(){return o},vw:function(){return i}});var r=e(9146);function a(t){return t<10&&(t="0"+t),t}function i(t,s){if(!t)return"";let e=t.getFullYear(),r=a(t.getMonth()+1),i=a(t.getDate()),o=a(t.getHours()),n=a(t.getMinutes()),d=a(t.getSeconds());return s?e+"-"+r+"-"+i:e+"-"+r+"-"+i+" "+o+":"+n+":"+d}function o(t){let s=document.createElement("input");s.value=t,document.body.appendChild(s),s.select(),document.execCommand("Copy"),r.Z.success("复制成功"),s.remove()}},3509:function(t){t.exports="data:image/png;base64,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"}}]);