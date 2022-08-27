"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=500,exports.ids=[500],exports.modules={92500:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PressCoveragesModule:()=>PressCoveragesModule});var common=__webpack_require__(69808),core=__webpack_require__(5e3),api_service=__webpack_require__(5830),global_state_service=__webpack_require__(66007);const _c0=["container"];function PressCoveragesComponent_div_8_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",11)(1,"div")(2,"p",12),core._uU(3),core.qZA(),core.TgZ(4,"p"),core._uU(5),core.qZA(),core.TgZ(6,"a",13),core._uU(7,"Read More"),core.qZA()(),core.TgZ(8,"div"),core._UZ(9,"img",14),core.qZA()()),2&rf){const data_r5=ctx.$implicit;core.xp6(3),core.hij(" ",data_r5.title," "),core.xp6(2),core.Oqu(null==data_r5?null:data_r5.description),core.xp6(1),core.Q6J("href",null==data_r5?null:data_r5.external_url,core.LSH),core.xp6(3),core.Q6J("src",null==data_r5?null:data_r5.image_full_url,core.LSH)}}function PressCoveragesComponent_a_10_Template(rf,ctx){if(1&rf){const _r7=core.EpF();core.TgZ(0,"a",15),core.NdJ("click",__name(function(){core.CHM(_r7);const ctx_r6=core.oxw();return ctx_r6.getMetaData(ctx_r6.params.page-1)},"PressCoveragesComponent_a_10_Template_a_click_0_listener")),core._uU(1,"\xab"),core.qZA()}}__name(PressCoveragesComponent_div_8_Template,"PressCoveragesComponent_div_8_Template"),__name(PressCoveragesComponent_a_10_Template,"PressCoveragesComponent_a_10_Template");const _c1=__name(function(a0){return{active:a0}},"_c1");function PressCoveragesComponent_a_11_Template(rf,ctx){if(1&rf){const _r11=core.EpF();core.TgZ(0,"a",16),core.NdJ("click",__name(function(){const i_r9=core.CHM(_r11).index;return core.oxw().getMetaData(i_r9+1)},"PressCoveragesComponent_a_11_Template_a_click_0_listener")),core._uU(1),core.qZA()}if(2&rf){const i_r9=ctx.index,ctx_r3=core.oxw();core.Q6J("ngClass",core.VKq(2,_c1,ctx_r3.params.page==i_r9+1)),core.xp6(1),core.Oqu(i_r9+1)}}function PressCoveragesComponent_a_12_Template(rf,ctx){if(1&rf){const _r13=core.EpF();core.TgZ(0,"a",15),core.NdJ("click",__name(function(){core.CHM(_r13);const ctx_r12=core.oxw();return ctx_r12.getMetaData(ctx_r12.params.page+1)},"PressCoveragesComponent_a_12_Template_a_click_0_listener")),core._uU(1,"\xbb"),core.qZA()}}__name(PressCoveragesComponent_a_11_Template,"PressCoveragesComponent_a_11_Template"),__name(PressCoveragesComponent_a_12_Template,"PressCoveragesComponent_a_12_Template");class PressCoveragesComponent{constructor(api,state){this.api=api,this.state=state,this.totalPagesinTen=[],this.params={per_page:10,page:1},this.state.mobileNavToggle.next(!1)}ngOnInit(){this.getMetaData()}getMetaData(page){page&&(this.params.page=page),this.api.getPressCoverages(this.params).subscribe(res=>{this.metaData=res.data,this.totalPagesinTen=new Array(res.data.last_page),this.container&&(console.log(this.container),this.container.nativeElement.scrollIntoView({behavior:"smooth"}))},err=>{console.log(err)})}}__name(PressCoveragesComponent,"PressCoveragesComponent"),PressCoveragesComponent.\u0275fac=__name(function(t){return new(t||PressCoveragesComponent)(core.Y36(api_service.s),core.Y36(global_state_service.O))},"PressCoveragesComponent_Factory"),PressCoveragesComponent.\u0275cmp=core.Xpm({type:PressCoveragesComponent,selectors:[["app-press-coverages"]],viewQuery:__name(function(rf,ctx){if(1&rf&&core.Gf(_c0,5),2&rf){let _t;core.iGM(_t=core.CRH())&&(ctx.container=_t.first)}},"PressCoveragesComponent_Query"),decls:13,vars:4,consts:[[1,"page__cover","page__section","page__section_centered"],[1,"page__cover-inner","desktop-banner",2,"background-color","rgb(32, 32, 32)","transform","translateY(0px)"],[1,"page__cover-inner","mobile-banner",2,"background-color","rgb(32, 32, 32)","transform","translateY(0px)"],[1,"page__container"],[1,"page__title"],[1,"container"],["container",""],["class","row","style","display: grid;grid-template-columns: 2fr 1fr;",4,"ngFor","ngForOf"],[1,"pagination"],[3,"click",4,"ngIf"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"row",2,"display","grid","grid-template-columns","2fr 1fr"],[1,"f-24"],["target","_blank",1,"btn","btn-default","read-more-btn",3,"href"],[3,"src"],[3,"click"],[3,"ngClass","click"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0),core._UZ(1,"div",1)(2,"div",2),core.TgZ(3,"div",3)(4,"h1",4),core._uU(5,"IN THE NEWS"),core.qZA()()(),core.TgZ(6,"div",5,6),core.YNc(8,PressCoveragesComponent_div_8_Template,10,4,"div",7),core.TgZ(9,"div",8),core.YNc(10,PressCoveragesComponent_a_10_Template,2,0,"a",9),core.YNc(11,PressCoveragesComponent_a_11_Template,2,4,"a",10),core.YNc(12,PressCoveragesComponent_a_12_Template,2,0,"a",9),core.qZA()()),2&rf&&(core.xp6(8),core.Q6J("ngForOf",null==ctx.metaData?null:ctx.metaData.data),core.xp6(2),core.Q6J("ngIf",ctx.params.page>1),core.xp6(1),core.Q6J("ngForOf",ctx.totalPagesinTen),core.xp6(1),core.Q6J("ngIf",ctx.params.page<ctx.totalPagesinTen.length))},"PressCoveragesComponent_Template"),directives:[common.sg,common.O5,common.mk],styles:[".page__section[_ngcontent-%COMP%]{min-height:50vh}.page__cover[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;background-color:#202020;color:#fff;position:relative;overflow:hidden}.page__section_centered[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 0}.page__container[_ngcontent-%COMP%]{width:100%;max-width:740px;margin-left:auto;margin-right:auto;position:relative;z-index:2}.page__title[_ngcontent-%COMP%]{font-weight:600;font-size:60px;line-height:1.2;text-transform:uppercase}.container[_ngcontent-%COMP%]{width:80%;margin:auto;display:flex;flex-direction:column;gap:2.5rem;margin-top:1.5rem;padding-top:100px;padding-bottom:80px}.read-more-btn[_ngcontent-%COMP%]{margin:20px 0;background-color:#0cc!important;color:#fff!important;padding:.71rem;display:block;width:-moz-fit-content;width:fit-content}.row[_ngcontent-%COMP%]{display:flex;gap:2.5rem}.f-24[_ngcontent-%COMP%]{font-size:24px!important;font-weight:700}p[_ngcontent-%COMP%]{margin:0 0 10px}.pagination[_ngcontent-%COMP%]{display:inline-block}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;float:left;padding:8px 16px;text-decoration:none;transition:background-color .3s;border:1px solid #ddd;font-size:22px}.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#0cc;color:#fff;border:1px solid #00cccc}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){background-color:#ddd}"]});var router=__webpack_require__(74202);const routes=[{path:"",component:PressCoveragesComponent}];class PressCoveragesModule{}__name(PressCoveragesModule,"PressCoveragesModule"),PressCoveragesModule.\u0275fac=__name(function(t){return new(t||PressCoveragesModule)},"PressCoveragesModule_Factory"),PressCoveragesModule.\u0275mod=core.oAB({type:PressCoveragesModule}),PressCoveragesModule.\u0275inj=core.cJS({imports:[[common.ez,router.Bz.forChild(routes)]]})}};