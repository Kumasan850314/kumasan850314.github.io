(function(t){function e(e){for(var n,s,o=e[0],d=e[1],l=e[2],r=0,b=[];r<o.length;r++)s=o[r],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&b.push(c[s][0]),c[s]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);p&&p(e);while(b.length)b.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var d=a[s];0!==c[d]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},c={app:0},i=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dc0b435c"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=c[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=n);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=s(t);var l=new Error;i=function(e){d.onerror=d.onload=null,clearTimeout(r);var a=c[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}c[t]=void 0}};var r=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var r=0;r<d.length;r++)e(d[r]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3e79":function(t,e,a){"use strict";a("54f0")},"54f0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c={class:"wrapper"},i=Object(n["f"])("input",{style:{display:"none"},id:"toggle",type:"checkbox"},null,-1);function s(t,e,a,s,o,d){const l=Object(n["v"])("Component-menu"),r=Object(n["v"])("Component-aside"),p=Object(n["v"])("Component-main");return Object(n["q"])(),Object(n["e"])("div",c,[i,Object(n["h"])(l),Object(n["h"])(r),Object(n["h"])(p)])}const o={class:"sidebar"},d={class:"logo"},l=Object(n["f"])("span",{class:"material-icons align-middle"},"view_list",-1),r=Object(n["f"])("span",{class:"toggle-checked-hide-aside-text"},"Record",-1),p=Object(n["f"])("div",{class:"profile"},[Object(n["f"])("div",{class:"profile-info"},[Object(n["f"])("span",{class:"material-icons align-middle"},"face"),Object(n["f"])("span",{class:"toggle-checked-hide-aside-text"},"Profile")])],-1),b={class:"nav-left"},u={href:""},h=Object(n["f"])("span",{class:"material-icons align-middle"},"shopping_bag",-1),f=Object(n["f"])("span",{class:"toggle-checked-hide-aside-text"},"購買明細",-1),m={href:""},j=Object(n["f"])("span",{class:"material-icons align-middle"},"store",-1),g=Object(n["f"])("span",{class:"toggle-checked-hide-aside-text"},"待售明細",-1),O={href:""},y=Object(n["f"])("span",{class:"material-icons align-middle"},"paid",-1),v=Object(n["f"])("span",{class:"toggle-checked-hide-aside-text"},"出售明細",-1),x={href:""},D=Object(n["f"])("span",{class:"material-icons align-middle"},"savings",-1),M=Object(n["f"])("span",{class:"toggle-checked-hide-aside-text"},"金額明細",-1),w={href:""},k=Object(n["f"])("span",{class:"material-icons align-middle"},"login",-1),P=Object(n["f"])("span",{class:"toggle-checked-hide-aside-text"},"沒有功能的登入",-1);function C(t,e){const a=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("aside",o,[Object(n["f"])("div",d,[Object(n["h"])(a,{to:"/Home"},{default:Object(n["C"])(()=>[l,r]),_:1})]),p,Object(n["f"])("div",b,[Object(n["f"])("div",null,[Object(n["f"])("a",u,[Object(n["h"])(a,{to:"/Home"},{default:Object(n["C"])(()=>[h,f]),_:1})])]),Object(n["f"])("div",null,[Object(n["f"])("a",m,[Object(n["h"])(a,{to:"/ForSale"},{default:Object(n["C"])(()=>[j,g]),_:1})])]),Object(n["f"])("div",null,[Object(n["f"])("a",O,[Object(n["h"])(a,{to:"/Sold"},{default:Object(n["C"])(()=>[y,v]),_:1})])]),Object(n["f"])("div",null,[Object(n["f"])("a",x,[Object(n["h"])(a,{to:"/Sum"},{default:Object(n["C"])(()=>[D,M]),_:1})])]),Object(n["f"])("div",null,[Object(n["f"])("a",w,[Object(n["h"])(a,{to:""},{default:Object(n["C"])(()=>[k,P]),_:1})])])])])}var S=a("6b0d"),z=a.n(S);const U={},G=z()(U,[["render",C]]);var F=G;const T={class:"menu"},_=Object(n["f"])("label",{class:"toggle-container",for:"toggle"},[Object(n["f"])("span",{class:"button button-toggle material-icons"},"menu")],-1),q=[_];function E(t,e){return Object(n["q"])(),Object(n["e"])("div",T,q)}const N={},A=z()(N,[["render",E]]);var V=A;const $={class:"main"};function H(t,e){const a=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["e"])("main",$,[Object(n["h"])(a)])}const L={},J=z()(L,[["render",H]]);var B=J,R={components:{ComponentAside:F,ComponentMain:B,ComponentMenu:V}};a("3e79");const Y=z()(R,[["render",s]]);var I=Y,K=a("6c02");const Q=Object(n["g"])('<header class="navbar-top" style="padding-right:30px;"><span>購買明細</span><div class="input-group" style="width:30%;"><input type="text" name="datefilter" class="form-control" placeholder="選擇日期區間" aria-label="選擇日期區間" aria-describedby="button-addon2" value=""><button class="btn btn-outline-primary material-icons align-middle" type="button" id="button-addon2"> search </button></div><button type="button" class="btn btn-outline-primary material-icons align-middle" data-bs-toggle="modal" data-bs-target="#myModal"> add </button></header>',1),W={class:"content"},X={class:"content-header"},Z=Object(n["f"])("span",{class:"content-header-date"},"2020-02",-1),tt={class:"content-header-cost"},et=Object(n["f"])("span",{class:"content-header-income"},"賣出金額： sum(賣出總金額)",-1),at=Object(n["f"])("span",{class:"content-header-sum"},"total： 購買金額-賣出金額",-1),nt=Object(n["f"])("hr",null,null,-1),ct={class:"table-responsive"},it=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",null,"商品圖片"),Object(n["f"])("th",null,"購買總金額"),Object(n["f"])("th",null,"賣出總金額"),Object(n["f"])("th",null,"盈餘"),Object(n["f"])("th",null,"詳細資訊"),Object(n["f"])("th",null,"刪除")])],-1),st={class:"align-middle"},ot=Object(n["f"])("td",null,[Object(n["f"])("img",{src:"https://img.ltn.com.tw/Upload/news/600/2019/03/30/phpUCF6ub.jpg",alt:""})],-1),dt=Object(n["f"])("td",null,"新增沒有賣出價啦",-1),lt=["onClick"],rt=["onClick"],pt=Object(n["g"])('<div style="display:flex;justify-content:space-around;flex-wrap:wrap;"><div style="padding:5px;background:#ffffff90;border-radius:2%;width:300px;height:350px;box-shadow:0 10px 16px 0 rgb(0 0 0 / 20%),;display:flex;flex-direction:column;justify-content:space-around;"><div style="display:flex;justify-content:center;"><img width="90%" src="https://img.ltn.com.tw/Upload/news/600/2019/03/30/phpUCF6ub.jpg" alt="" style="border-radius:2%;position:relative;"></div><div><div style="display:flex;justify-content:space-around;"><span style="color:red;">購入: $500</span><span style="color:green;">賣出: $300</span></div><div class="text-center" style="margin:0px auto;width:80%;padding-top:10px;font-size:1.2rem;border-top:1px solid black;"> 盈餘: $200 </div></div></div><div style="padding:5px;background:#ffffff90;border-radius:2%;width:300px;box-shadow:0 10px 16px 0 rgb(0 0 0 / 20%),;display:flex;flex-direction:column;justify-content:space-around;"><div style="display:flex;justify-content:center;"><img width="90%" src="https://img.ltn.com.tw/Upload/news/600/2019/03/30/phpUCF6ub.jpg" alt="" style="border-radius:2%;"></div><div><div style="display:flex;justify-content:space-around;"><span style="color:red;">購入: $500</span><span style="color:green;">賣出: $300</span></div><div class="text-center" style="margin:0px auto;width:80%;padding-top:10px;font-size:1.2rem;border-top:1px solid black;"> 盈餘: $200 </div></div></div><div style="padding:5px;background:#ffffff90;border-radius:2%;width:300px;box-shadow:0 10px 16px 0 rgb(0 0 0 / 20%),;display:flex;flex-direction:column;justify-content:space-around;"><div style="display:flex;justify-content:center;"><img width="90%" src="https://img.ltn.com.tw/Upload/news/600/2019/03/30/phpUCF6ub.jpg" alt="" style="border-radius:2%;"></div><div><div style="display:flex;justify-content:space-around;"><span style="color:red;">購入: $500</span><span style="color:green;">賣出: $300</span></div><div class="text-center" style="margin:0px auto;width:80%;padding-top:10px;font-size:1.2rem;border-top:1px solid black;"> 盈餘: $200 </div></div></div></div><br><br><br><br><br><div class="table-responsive"><table class="table align-middle"><thead><tr><th>商品圖片</th><th>購買總金額</th><th>賣出總金額</th><th>盈餘</th></tr></thead><tbody><tr class="align-middle"><td><img src="https://img.ltn.com.tw/Upload/news/600/2019/03/30/phpUCF6ub.jpg" alt=""></td><td>100</td><td>50</td><td>50</td><td><button class="btn btn-outline-primary">info</button></td></tr></tbody><tbody><tr class="align-middle"><td><img src="https://img.ltn.com.tw/Upload/news/600/2019/03/30/phpUCF6ub.jpg" alt=""></td><td>100</td><td>50</td><td>50</td><td><button class="btn btn-outline-primary">info</button></td></tr></tbody><tbody><tr class="align-middle"><td><img src="https://img.ltn.com.tw/Upload/news/600/2019/03/30/phpUCF6ub.jpg" alt=""></td><td>100</td><td>50</td><td>50</td><td><button class="btn btn-outline-primary">info</button></td></tr></tbody><tbody><tr class="align-middle"><td><img src="https://img.ltn.com.tw/Upload/news/600/2019/03/30/phpUCF6ub.jpg" alt=""></td><td>100</td><td>50</td><td>50</td><td><button class="btn btn-outline-primary">info</button></td></tr></tbody></table></div>',7),bt=Object(n["f"])("footer",{class:"footer"},null,-1);function ut(t,e,a,c,i,s){const o=Object(n["v"])("ComponentModal");return Object(n["q"])(),Object(n["e"])(n["a"],null,[Q,Object(n["f"])("section",W,[Object(n["f"])("div",X,[Z,Object(n["f"])("span",tt,"購買金額： "+Object(n["x"])(this.buyPrice),1),et,at]),nt,Object(n["f"])("div",ct,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(i.objectMerchandiseData,(t,e)=>(Object(n["q"])(),Object(n["e"])("table",{class:"table align-middle",key:t},[it,Object(n["f"])("tbody",null,[Object(n["f"])("tr",st,[ot,Object(n["f"])("td",null,Object(n["x"])(t.merchandiseTotalPrice),1),dt,Object(n["f"])("td",null,Object(n["x"])(t),1),Object(n["f"])("td",null,[Object(n["f"])("button",{class:"btn btn-outline-primary align-middle","data-bs-toggle":"modal","data-bs-target":"#myModal",onClick:a=>s.clickMerchandiseData(t,e)}," info ",8,lt)]),Object(n["f"])("td",null,[Object(n["f"])("button",{class:"btn btn-outline-primary align-middle",onClick:t=>s.deleteMerchandiseData(e)}," del ",8,rt)])])])]))),128))]),pt]),bt,Object(n["h"])(o)],64)}const ht={class:"modal fade",id:"myModal"},ft={class:"modal-dialog modal-xl"},mt={class:"modal-content"},jt={class:"modal-header"},gt=Object(n["f"])("h4",{class:"modal-title"},"新增周邊資訊",-1),Ot={class:"modal-body",style:{display:"flex",background:"#f1f0f061"}},yt=Object(n["g"])('<div style="display:flex;flex:3;justify-content:space-evenly;flex-direction:column;align-items:center;padding-right:10px;"><div class="input-group mb-3"><label class="btn btn-outline-primary input-group-text" for="inputGroupFile01">Upload</label><input type="file" class="form-control" id="inputGroupFile01"></div><div class="border border-1 shadow-sm p-3 mb-5 bg-body rounded" style="width:400px;height:400px;display:flex;justify-content:center;align-items:center;"><img style="border-radius:5%;" src="https://cf.shopee.tw/file/5325103cd678afe8f502b1d939c48b46" width="350" height="350"></div></div>',1),vt={style:{display:"flex",flex:"4","flex-direction":"column",width:"100%"}},xt={class:"input-group input-group-sm mb-3"},Dt=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"商品名稱",-1),Mt={class:"input-group input-group-sm mb-3"},wt=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"角色名稱",-1),kt={class:"input-group input-group-sm mb-3"},Pt=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"商品原價",-1),Ct={class:"input-group input-group-sm mb-3"},St=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"購買雜費",-1),zt={class:"input-group input-group-sm mb-3"},Ut=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"商品總價",-1),Gt={class:"input-group input-group-sm mb-3"},Ft=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"商品來源",-1),Tt=Object(n["f"])("option",{selected:"",disabled:""},"請選擇商品來源",-1),_t=Object(n["f"])("option",{value:"全新"},"全新",-1),qt=Object(n["f"])("option",{value:"二手"},"二手",-1),Et=Object(n["f"])("option",{value:"其他"},"其他",-1),Nt=[Tt,_t,qt,Et],At={class:"input-group input-group-sm mb-3"},Vt=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"購買平台",-1),$t=Object(n["g"])('<option selected disabled>請選擇購買平台</option><option value="露天拍賣">露天拍賣</option><option value="蝦皮拍賣">蝦皮拍賣</option><option value="安利美特">安利美特</option><option value="Facebook">Facebook</option><option value="Mercari">Mercari</option>',6),Ht=[$t],Lt={class:"input-group input-group-sm mb-3"},Jt=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"商品備註",-1),Bt={class:"input-group input-group-sm mb-3"},Rt=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"購入日期",-1),Yt={class:"modal-footer"};function It(t,e,a,c,i,s){return Object(n["q"])(),Object(n["e"])("div",ht,[Object(n["f"])("div",ft,[Object(n["f"])("div",mt,[Object(n["f"])("div",jt,[gt,Object(n["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal",onClick:e[0]||(e[0]=(...t)=>s.deleteModalData&&s.deleteModalData(...t))})]),Object(n["f"])("div",Ot,[yt,Object(n["f"])("div",vt,[Object(n["f"])("div",xt,[Dt,Object(n["D"])(Object(n["f"])("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm","onUpdate:modelValue":e[1]||(e[1]=t=>i.objectMerchandiseData.merchandiseName=t)},null,512),[[n["A"],i.objectMerchandiseData.merchandiseName]])]),Object(n["f"])("div",Mt,[wt,Object(n["D"])(Object(n["f"])("input",{type:"text",class:"form-control",placeholder:"逗號分隔角色 例如：友也,創,司,凜月,嵐","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm","onUpdate:modelValue":e[2]||(e[2]=t=>i.objectMerchandiseData.roleName=t)},null,512),[[n["A"],i.objectMerchandiseData.roleName]])]),Object(n["f"])("div",kt,[Pt,Object(n["D"])(Object(n["f"])("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm","onUpdate:modelValue":e[3]||(e[3]=t=>i.objectMerchandiseData.merchandiseOriginalPrice=t)},null,512),[[n["A"],i.objectMerchandiseData.merchandiseOriginalPrice]])]),Object(n["f"])("div",Ct,[St,Object(n["D"])(Object(n["f"])("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm","onUpdate:modelValue":e[4]||(e[4]=t=>i.objectMerchandiseData.merchandiseMiscellaneous=t)},null,512),[[n["A"],i.objectMerchandiseData.merchandiseMiscellaneous]])]),Object(n["f"])("div",zt,[Ut,Object(n["D"])(Object(n["f"])("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm","onUpdate:modelValue":e[5]||(e[5]=t=>i.objectMerchandiseData.merchandiseTotalPrice=t)},null,512),[[n["A"],i.objectMerchandiseData.merchandiseTotalPrice]])]),Object(n["f"])("div",Gt,[Ft,Object(n["D"])(Object(n["f"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[6]||(e[6]=t=>i.objectMerchandiseData.merchandiseSource=t)},Nt,512),[[n["z"],i.objectMerchandiseData.merchandiseSource]])]),Object(n["f"])("div",At,[Vt,Object(n["D"])(Object(n["f"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[7]||(e[7]=t=>i.objectMerchandiseData.merchandiseShoppingPlatform=t)},Ht,512),[[n["z"],i.objectMerchandiseData.merchandiseShoppingPlatform]])]),Object(n["f"])("div",Lt,[Jt,Object(n["D"])(Object(n["f"])("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea","onUpdate:modelValue":e[8]||(e[8]=t=>i.objectMerchandiseData.merchandiseNote=t)},null,512),[[n["A"],i.objectMerchandiseData.merchandiseNote]])]),Object(n["f"])("div",Bt,[Rt,Object(n["D"])(Object(n["f"])("input",{id:"todayDate",type:"date",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm","onUpdate:modelValue":e[9]||(e[9]=t=>i.objectMerchandiseData.merchandisePurchaseDate=t)},null,512),[[n["A"],i.objectMerchandiseData.merchandisePurchaseDate]])])])]),Object(n["f"])("div",Yt,[i.isEditedStatus?Object(n["d"])("",!0):(Object(n["q"])(),Object(n["e"])("button",{key:0,type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=(...t)=>s.addMerchandiseData&&s.addMerchandiseData(...t)),"data-bs-dismiss":"modal"}," 新增 ")),i.isEditedStatus?(Object(n["q"])(),Object(n["e"])("button",{key:1,class:"btn btn-primary",onClick:e[11]||(e[11]=(...t)=>s.editedMerchandiseData&&s.editedMerchandiseData(...t)),"data-bs-dismiss":"modal"}," 編輯 ")):Object(n["d"])("",!0)])])])])}var Kt=a("1344"),Qt=Object(Kt["a"])(),Wt={data(){return{objectMerchandiseData:{merchandiseName:"",roleName:"",merchandiseOriginalPrice:"",merchandiseMiscellaneous:"",merchandiseTotalPrice:"",merchandiseSource:"",merchandiseShoppingPlatform:"",merchandiseNote:"",merchandisePurchaseDate:""},tempToday:"",isEditedStatus:!1}},methods:{addMerchandiseData(){Qt.emit("addMerchandiseData",this.objectMerchandiseData),console.log("emit"),this.deleteModalData()},checkMerchandiseData(t){this.objectMerchandiseData=Object.assign({},t),console.log(this.objectMerchandiseData),this.isEditedStatus=!0},editedMerchandiseData(){Qt.emit("editedMerchandiseData",this.objectMerchandiseData),this.deleteModalData()},deleteModalData(){Object.keys(this.objectMerchandiseData).forEach(t=>delete this.objectMerchandiseData[t]),this.objectMerchandiseData.merchandisePurchaseDate=this.tempToday,this.isEditedStatus=!1}},created(){let t=new Date,e=("0"+t.getDate()).slice(-2),a=("0"+(t.getMonth()+1)).slice(-2),n=t.getFullYear()+"-"+a+"-"+e;this.tempToday=n,this.objectMerchandiseData.merchandisePurchaseDate=n,Qt.on("clickMerchandiseData",this.checkMerchandiseData)}};const Xt=z()(Wt,[["render",It]]);var Zt=Xt,te={components:{ComponentModal:Zt},data(){return{objectMerchandiseData:[],buyPrice:""}},methods:{showMerchandiseData(t){this.copy=Object.assign({},t),this.objectMerchandiseData.push(this.copy),this.copy="",console.log("on"),console.log(this.objectMerchandiseData)},clickMerchandiseData(t,e){t.index=e,Qt.emit("clickMerchandiseData",t),console.log("emit checkMerchandiseData",t,e)},edit(t){this.copy=Object.assign({},t),this.objectMerchandiseData.splice(this.copy.index,1,this.copy),console.log(this.objectMerchandiseData)},deleteMerchandiseData(t){this.objectMerchandiseData.splice(t,1)}},watch:{objectMerchandiseData:{handler(){this.buyPrice=0,this.objectMerchandiseData.forEach(t=>this.buyPrice=Number(this.buyPrice)+Number(t.merchandiseTotalPrice))},deep:!0}},computed:{calculateBuy(){return this.objectMerchandiseData.forEach(t=>this.buyPrice+=t.merchandiseTotalPrice)}},created(){Qt.on("addMerchandiseData",this.showMerchandiseData),Qt.on("editedMerchandiseData",this.edit)}};a("c3b3");const ee=z()(te,[["render",ut]]);var ae=ee;const ne=Object(n["g"])('<header class="navbar-top" style="padding-right:30px;"><span>待售明細</span><div class="input-group" style="width:50%;"><input type="text" class="form-control" placeholder="先放在這佔位" aria-label="先放在這佔位" aria-describedby="button-addon2"><button class="btn btn-outline-primary material-icons align-middle" type="button" id="button-addon2"> search </button></div></header><section class="content"><div class="table-responsive"><table class="table"><thead><tr><th scope="col">商品名稱</th><th scope="col">角色名稱</th><th scope="col">出售價格</th><th scope="col">備註</th></tr></thead><tbody><td>第六彈饅頭</td><td>敬人</td><td>145</td><td>自留友也、創、司、凜月、嵐</td></tbody></table></div></section><footer class="footer"></footer>',3);function ce(t,e){return ne}const ie={},se=z()(ie,[["render",ce]]);var oe=se;const de=Object(n["g"])('<header class="navbar-top"><span>出售明細</span></header><section class="content"><div class="table-responsive"><table class="table"><thead><tr><th scope="col">商品名稱</th><th scope="col">角色名稱</th><th scope="col">出售價格</th><th scope="col">出售平台</th><th scope="col">出售日期</th><th scope="col">備註</th></tr></thead><tbody><td>第六彈饅頭</td><td>敬人</td><td>145</td><td>露天</td><td>2020/2/2</td><td>自留友也、創、司、凜月、嵐</td></tbody></table></div></section><footer class="footer"></footer>',3);function le(t,e){return de}const re={},pe=z()(re,[["render",le]]);var be=pe;const ue=Object(n["g"])('<header class="navbar-top"><span>金額明細</span></header><section class="content"><div class="table-responsive"><table class="table"><thead><tr><th scope="col">#</th><th scope="col">商品名稱</th><th scope="col">總價格</th><th scope="col">備註</th></tr></thead><tbody></tbody></table></div></section><footer class="footer"></footer>',3);function he(t,e){return ue}const fe={},me=z()(fe,[["render",he]]);var je=me;const ge=[{path:"/",redirect:"Home"},{path:"/home",name:"Home",component:ae},{path:"/forSale",name:"ForSale",component:oe},{path:"/Sold",name:"Sold",component:be},{path:"/Sum",name:"Sum",component:je},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Oe=Object(K["a"])({history:Object(K["b"])(""),routes:ge});var ye=Oe;Object(n["c"])(I).use(ye).mount("#app")},c3b3:function(t,e,a){"use strict";a("e486")},e486:function(t,e,a){}});
//# sourceMappingURL=app.0b5156ea.js.map