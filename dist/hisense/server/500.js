"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=500,exports.ids=[500],exports.modules={92500:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PressCoveragesModule:()=>PressCoveragesModule});var common=__webpack_require__(69808),core=__webpack_require__(5e3),api_service=__webpack_require__(5830),global_state_service=__webpack_require__(66007);const _c0=["container"],_c1=__name(function(a0){return{active:a0}},"_c1");function PressCoveragesComponent_a_6_Template(rf,ctx){if(1&rf){const _r9=core.EpF();core.TgZ(0,"a",12),core.NdJ("click",__name(function(){const tab_r7=core.CHM(_r9).$implicit;return core.oxw().changeTab(tab_r7)},"PressCoveragesComponent_a_6_Template_a_click_0_listener")),core._uU(1),core.qZA()}if(2&rf){const tab_r7=ctx.$implicit,ctx_r0=core.oxw();core.Q6J("ngClass",core.VKq(2,_c1,tab_r7==ctx_r0.currentTab)),core.xp6(1),core.Oqu(tab_r7)}}function PressCoveragesComponent_div_9_p_4_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p"),core._uU(1),core.qZA()),2&rf){const data_r10=core.oxw().$implicit;core.xp6(1),core.hij("(",null==data_r10?null:data_r10.vendor,")")}}function PressCoveragesComponent_div_9_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",13)(1,"div",14)(2,"p",15),core._uU(3),core.qZA(),core.YNc(4,PressCoveragesComponent_div_9_p_4_Template,2,1,"p",16),core.TgZ(5,"p"),core._uU(6),core.qZA(),core.TgZ(7,"a",17),core._uU(8,"Read More"),core.qZA()(),core.TgZ(9,"div",18),core._UZ(10,"img",19),core.qZA()()),2&rf){const data_r10=ctx.$implicit,i_r11=ctx.index;core.xp6(3),core.hij(" ",data_r10.title," "),core.xp6(1),core.Q6J("ngIf",null==data_r10?null:data_r10.vendor),core.xp6(2),core.Oqu(null==data_r10?null:data_r10.description),core.xp6(1),core.Q6J("href",null==data_r10?null:data_r10.external_url,core.LSH),core.xp6(3),core.Q6J("src",null==data_r10?null:data_r10.image_full_url,core.LSH)("alt","press coverage "+(i_r11+1))}}function PressCoveragesComponent_div_10_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",20),core._uU(1,"No Records Found!"),core.qZA())}function PressCoveragesComponent_a_12_Template(rf,ctx){if(1&rf){const _r15=core.EpF();core.TgZ(0,"a",21),core.NdJ("click",__name(function(){core.CHM(_r15);const ctx_r14=core.oxw();return ctx_r14.getMetaData(ctx_r14.params.page-1)},"PressCoveragesComponent_a_12_Template_a_click_0_listener")),core._uU(1,"\xab"),core.qZA()}}function PressCoveragesComponent_a_13_Template(rf,ctx){if(1&rf){const _r19=core.EpF();core.TgZ(0,"a",22),core.NdJ("click",__name(function(){const i_r17=core.CHM(_r19).index;return core.oxw().getMetaData(i_r17+1)},"PressCoveragesComponent_a_13_Template_a_click_0_listener")),core._uU(1),core.qZA()}if(2&rf){const i_r17=ctx.index,ctx_r5=core.oxw();core.Q6J("ngClass",core.VKq(2,_c1,ctx_r5.params.page==i_r17+1)),core.xp6(1),core.Oqu(i_r17+1)}}function PressCoveragesComponent_a_14_Template(rf,ctx){if(1&rf){const _r21=core.EpF();core.TgZ(0,"a",21),core.NdJ("click",__name(function(){core.CHM(_r21);const ctx_r20=core.oxw();return ctx_r20.getMetaData(ctx_r20.params.page+1)},"PressCoveragesComponent_a_14_Template_a_click_0_listener")),core._uU(1,"\xbb"),core.qZA()}}__name(PressCoveragesComponent_a_6_Template,"PressCoveragesComponent_a_6_Template"),__name(PressCoveragesComponent_div_9_p_4_Template,"PressCoveragesComponent_div_9_p_4_Template"),__name(PressCoveragesComponent_div_9_Template,"PressCoveragesComponent_div_9_Template"),__name(PressCoveragesComponent_div_10_Template,"PressCoveragesComponent_div_10_Template"),__name(PressCoveragesComponent_a_12_Template,"PressCoveragesComponent_a_12_Template"),__name(PressCoveragesComponent_a_13_Template,"PressCoveragesComponent_a_13_Template"),__name(PressCoveragesComponent_a_14_Template,"PressCoveragesComponent_a_14_Template");class PressCoveragesComponent{constructor(api,state){this.api=api,this.state=state,this.totalPagesinTen=[],this.params={per_page:10,page:1,country:"national"},this.metaDataTabs=["National","Global"],this.currentTab="National",this.state.mobileNavToggle.next(!1)}changeTab(tab){this.currentTab=tab,"Global"==this.currentTab?(this.metaData=[],this.totalPagesinTen=[],this.params.country="global",this.getMetaData(1)):(this.metaData=[],this.totalPagesinTen=[],this.params.country="national",this.getMetaData(1))}ngOnInit(){this.getMetaData()}getMetaData(page){page&&(this.params.page=page),this.api.getPressCoverages(this.params).subscribe(res=>{this.metaData=res.data,this.totalPagesinTen=new Array(res.data.last_page)},err=>{console.log(err)})}}__name(PressCoveragesComponent,"PressCoveragesComponent"),PressCoveragesComponent.\u0275fac=__name(function(t){return new(t||PressCoveragesComponent)(core.Y36(api_service.s),core.Y36(global_state_service.O))},"PressCoveragesComponent_Factory"),PressCoveragesComponent.\u0275cmp=core.Xpm({type:PressCoveragesComponent,selectors:[["app-press-coverages"]],viewQuery:__name(function(rf,ctx){if(1&rf&&core.Gf(_c0,5),2&rf){let _t;core.iGM(_t=core.CRH())&&(ctx.container=_t.first)}},"PressCoveragesComponent_Query"),decls:15,vars:6,consts:[[1,"breadcrumb__yellow__banner"],[1,"press__tabs__container"],[1,"col1","tabs"],["id","themeslist",1,"list-group"],["class","list-group-item list-group-item-action",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"container"],["container",""],["class","row","style","display: flex;",4,"ngFor","ngForOf"],["class","text-center","style","text-align: center;",4,"ngIf"],[1,"pagination"],[3,"click",4,"ngIf"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"ngClass","click"],[1,"row",2,"display","flex"],[2,"flex","0 0 75%"],[1,"f-24",2,"word-break","break-all"],[4,"ngIf"],["target","_blank",1,"btn","btn-default","read-more-btn",3,"href"],[2,"flex","0 0 25%"],[3,"src","alt"],[1,"text-center",2,"text-align","center"],[3,"click"],[3,"ngClass","click"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0)(1,"h1"),core._uU(2,"Press Coverages"),core.qZA()(),core.TgZ(3,"div",1)(4,"div",2)(5,"div",3),core.YNc(6,PressCoveragesComponent_a_6_Template,2,4,"a",4),core.qZA()()(),core.TgZ(7,"div",5,6),core.YNc(9,PressCoveragesComponent_div_9_Template,11,6,"div",7),core.YNc(10,PressCoveragesComponent_div_10_Template,2,0,"div",8),core.TgZ(11,"div",9),core.YNc(12,PressCoveragesComponent_a_12_Template,2,0,"a",10),core.YNc(13,PressCoveragesComponent_a_13_Template,2,4,"a",11),core.YNc(14,PressCoveragesComponent_a_14_Template,2,0,"a",10),core.qZA()()),2&rf&&(core.xp6(6),core.Q6J("ngForOf",ctx.metaDataTabs),core.xp6(3),core.Q6J("ngForOf",null==ctx.metaData?null:ctx.metaData.data),core.xp6(1),core.Q6J("ngIf",0==(null==ctx.metaData?null:ctx.metaData.data.length)),core.xp6(2),core.Q6J("ngIf",ctx.params.page>1),core.xp6(1),core.Q6J("ngForOf",ctx.totalPagesinTen),core.xp6(1),core.Q6J("ngIf",ctx.params.page<ctx.totalPagesinTen.length))},"PressCoveragesComponent_Template"),directives:[common.sg,common.mk,common.O5],styles:[".page__section[_ngcontent-%COMP%]{min-height:50vh}.page__cover[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;background-color:#202020;color:#fff;position:relative;overflow:hidden}.page__section_centered[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 0}.page__container[_ngcontent-%COMP%]{width:100%;max-width:740px;margin-left:auto;margin-right:auto;position:relative;z-index:2}.page__title[_ngcontent-%COMP%]{font-weight:600;font-size:60px;line-height:1.2;text-transform:uppercase;margin-bottom:16px}.container[_ngcontent-%COMP%]{width:80%;margin:auto;display:flex;flex-direction:column;gap:5rem;margin-top:1.5rem;padding-top:100px;padding-bottom:80px}.read-more-btn[_ngcontent-%COMP%]{margin:20px 0;background-color:#0cc!important;color:#fff!important;padding:.71rem;display:block;width:-moz-fit-content;width:fit-content}.row[_ngcontent-%COMP%]{display:flex;gap:2.5rem}.f-24[_ngcontent-%COMP%]{font-size:24px!important;font-weight:700}p[_ngcontent-%COMP%]{margin:0 0 10px}.pagination[_ngcontent-%COMP%]{display:inline-block}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;float:left;padding:8px 16px;text-decoration:none;transition:background-color .3s;border:1px solid #ddd;font-size:22px}.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#0cc;color:#fff;border:1px solid #00cccc}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){background-color:#ddd}.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:1rem 3.25rem;margin-bottom:-1px;background-color:#fff;white-space:nowrap;border:1px solid rgba(0,0,0,.125)}.active[_ngcontent-%COMP%]{color:#fff;background-color:#00aaa6!important;border-color:#00aaa6!important}.list-group[_ngcontent-%COMP%]{display:flex;text-align:center}.tabs[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:3rem}.press__tabs__container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center;padding:16px 0}.press__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{border-radius:50px;padding:20px;box-shadow:#0000003d 0 3px 8px}.press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]{display:flex;text-align:center;justify-content:center;width:100%;gap:16px}.press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;white-space:nowrap;border:1.2px solid #09cbc6;border-radius:16px}.press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#fff;background-color:#00aaa6!important;border-color:#00aaa6!important}@media screen and (max-width: 768px){.press__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{padding:12px}.press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]{gap:12px}.press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.75rem 1rem;border:1.2px solid #09cbc6;border-radius:16px}}"]});var router=__webpack_require__(74202);const routes=[{path:"",component:PressCoveragesComponent}];class PressCoveragesModule{}__name(PressCoveragesModule,"PressCoveragesModule"),PressCoveragesModule.\u0275fac=__name(function(t){return new(t||PressCoveragesModule)},"PressCoveragesModule_Factory"),PressCoveragesModule.\u0275mod=core.oAB({type:PressCoveragesModule}),PressCoveragesModule.\u0275inj=core.cJS({imports:[[common.ez,router.Bz.forChild(routes)]]})}};