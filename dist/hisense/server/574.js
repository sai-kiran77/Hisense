"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=574,exports.ids=[574],exports.modules={82574:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TechTestimonialsModule:()=>TechTestimonialsModule});var common=__webpack_require__(69808),core=__webpack_require__(5e3),global_state_service=__webpack_require__(66007),platform_browser=__webpack_require__(22313),api_service=__webpack_require__(5830);const _c0=__name(function(a0){return{active:a0}},"_c0");function TechTestimonialsComponent_a_6_Template(rf,ctx){if(1&rf){const _r8=core.EpF();core.TgZ(0,"a",12),core.NdJ("click",__name(function(){const tab_r6=core.CHM(_r8).$implicit;return core.oxw().changeTab(tab_r6)},"TechTestimonialsComponent_a_6_Template_a_click_0_listener")),core._uU(1),core.qZA()}if(2&rf){const tab_r6=ctx.$implicit,ctx_r0=core.oxw();core.Q6J("ngClass",core.VKq(2,_c0,tab_r6==ctx_r0.currentTab)),core.xp6(1),core.Oqu(tab_r6)}}function TechTestimonialsComponent_div_8_div_15_Template(rf,ctx){if(1&rf){const _r14=core.EpF();core.TgZ(0,"div",25),core.NdJ("click",__name(function(){core.CHM(_r14);const obj_r9=core.oxw().$implicit;return core.oxw().playVideo(obj_r9)},"TechTestimonialsComponent_div_8_div_15_Template_div_click_0_listener")),core._UZ(1,"img",26),core.O4$(),core.TgZ(2,"svg",27),core._UZ(3,"path",28)(4,"path",29),core.qZA()()}if(2&rf){const obj_r9=core.oxw().$implicit;core.xp6(1),core.Q6J("src",obj_r9.youtube_thumb_image,core.LSH)}}function TechTestimonialsComponent_div_8_iframe_16_Template(rf,ctx){if(1&rf&&core._UZ(0,"iframe",30),2&rf){const obj_r9=core.oxw().$implicit,ctx_r11=core.oxw();core.Q6J("src",ctx_r11.getVideoLink(obj_r9.youtube_url),core.uOi)}}function TechTestimonialsComponent_div_8_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",13)(1,"div",14)(2,"div",15)(3,"div",16)(4,"div",15)(5,"p"),core._uU(6),core.qZA()()(),core.TgZ(7,"div",17)(8,"span",18),core._UZ(9,"span",19),core.qZA(),core.TgZ(10,"span",20),core._UZ(11,"span",19),core.qZA()(),core.TgZ(12,"div",21)(13,"div",15)(14,"div",22),core.YNc(15,TechTestimonialsComponent_div_8_div_15_Template,5,1,"div",23),core.YNc(16,TechTestimonialsComponent_div_8_iframe_16_Template,1,1,"iframe",24),core.qZA()()()()()()),2&rf){const obj_r9=ctx.$implicit;core.xp6(6),core.Oqu(obj_r9.description),core.xp6(9),core.Q6J("ngIf",!obj_r9.playVideo),core.xp6(1),core.Q6J("ngIf",obj_r9.playVideo)}}function TechTestimonialsComponent_div_10_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",31),core._uU(1,"No Records Found!"),core.qZA())}function TechTestimonialsComponent_a_12_Template(rf,ctx){if(1&rf){const _r18=core.EpF();core.TgZ(0,"a",32),core.NdJ("click",__name(function(){core.CHM(_r18);const ctx_r17=core.oxw();return ctx_r17.getPaginatedTestimonials(ctx_r17.params.page-1)},"TechTestimonialsComponent_a_12_Template_a_click_0_listener")),core._uU(1,"\xab"),core.qZA()}}function TechTestimonialsComponent_a_13_Template(rf,ctx){if(1&rf){const _r22=core.EpF();core.TgZ(0,"a",33),core.NdJ("click",__name(function(){const i_r20=core.CHM(_r22).index;return core.oxw().getPaginatedTestimonials(i_r20+1)},"TechTestimonialsComponent_a_13_Template_a_click_0_listener")),core._uU(1),core.qZA()}if(2&rf){const i_r20=ctx.index,ctx_r4=core.oxw();core.Q6J("ngClass",core.VKq(2,_c0,ctx_r4.params.page==i_r20+1)),core.xp6(1),core.Oqu(i_r20+1)}}function TechTestimonialsComponent_a_14_Template(rf,ctx){if(1&rf){const _r24=core.EpF();core.TgZ(0,"a",32),core.NdJ("click",__name(function(){core.CHM(_r24);const ctx_r23=core.oxw();return ctx_r23.getPaginatedTestimonials(ctx_r23.params.page+1)},"TechTestimonialsComponent_a_14_Template_a_click_0_listener")),core._uU(1,"\xbb"),core.qZA()}}__name(TechTestimonialsComponent_a_6_Template,"TechTestimonialsComponent_a_6_Template"),__name(TechTestimonialsComponent_div_8_div_15_Template,"TechTestimonialsComponent_div_8_div_15_Template"),__name(TechTestimonialsComponent_div_8_iframe_16_Template,"TechTestimonialsComponent_div_8_iframe_16_Template"),__name(TechTestimonialsComponent_div_8_Template,"TechTestimonialsComponent_div_8_Template"),__name(TechTestimonialsComponent_div_10_Template,"TechTestimonialsComponent_div_10_Template"),__name(TechTestimonialsComponent_a_12_Template,"TechTestimonialsComponent_a_12_Template"),__name(TechTestimonialsComponent_a_13_Template,"TechTestimonialsComponent_a_13_Template"),__name(TechTestimonialsComponent_a_14_Template,"TechTestimonialsComponent_a_14_Template");class TechTestimonialsComponent{constructor(state,sanitizer,api){this.state=state,this.sanitizer=sanitizer,this.api=api,this.testimonials=[],this.paginatedTestimonials=[],this.GlobalpaginatedTestimonials=[],this.totalPagesinTen=[],this.GlobaltotalPagesinTen=[],this.params={per_page:10,page:1},this.metaDataTabs=["National"],this.currentTab="National",this.state.mobileNavToggle.next(!1)}changeTab(tab){this.params={per_page:10,page:1},this.currentTab=tab,this.totalPagesinTen=[],this.paginatedTestimonials=[];let currentTestimonials=[];"Global"==this.currentTab?(currentTestimonials=this.testimonials.filter(obj=>"global"==obj.country),this.paginatedTestimonials=currentTestimonials.slice(10*(this.params.page-1),10*this.params.page)):(currentTestimonials=this.testimonials.filter(obj=>"national"==obj.country),this.paginatedTestimonials=currentTestimonials.slice(10*(this.params.page-1),10*this.params.page)),this.totalPagesinTen=new Array(Math.ceil(currentTestimonials.length/this.params.per_page)),console.log(this.paginatedTestimonials)}ngOnInit(){this.getTechTestimonials()}getTechTestimonials(page){page&&(this.params.page=page),this.api.getTechTestimonials(this.params).subscribe({next:res=>{this.testimonials=res.data,this.paginatedTestimonials=res.data.filter(obj=>"national"==obj.country).slice(10*(this.params.page-1),this.params.per_page),console.log(res.data),this.totalPagesinTen=new Array(Math.ceil(res.data.length/this.params.per_page))},error:err=>{console.log(err)}})}getPaginatedTestimonials(page){page&&(this.params.page=page),console.log(10*(this.params.page-1),10*this.params.page),this.paginatedTestimonials=this.testimonials.filter(obj=>obj.country==this.currentTab.toLowerCase()).slice(10*(this.params.page-1),10*this.params.page),console.log(this.paginatedTestimonials)}playVideo(obj){for(let object of this.paginatedTestimonials)object.playVideo=!1;obj.playVideo=!0}getVideoLink(url){return url+="?autoplay=1&mute=0&showinfo=1&controls=1;",this.sanitizer.bypassSecurityTrustResourceUrl(url)}}__name(TechTestimonialsComponent,"TechTestimonialsComponent"),TechTestimonialsComponent.\u0275fac=__name(function(t){return new(t||TechTestimonialsComponent)(core.Y36(global_state_service.O),core.Y36(platform_browser.H7),core.Y36(api_service.s))},"TechTestimonialsComponent_Factory"),TechTestimonialsComponent.\u0275cmp=core.Xpm({type:TechTestimonialsComponent,selectors:[["app-tech-testimonials"]],decls:15,vars:6,consts:[[1,"breadcrumb__yellow__banner"],[1,"tech__tabs__container"],[1,"col1","tabs"],["id","themeslist",1,"list-group"],["class","list-group-item list-group-item-action",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"container"],["class","wpb_column vc_column_container vc_col-sm-6",4,"ngFor","ngForOf"],[1,"",2,"width","80%","margin","20px auto"],["class","text-center","style","text-align: center;margin: 16px 0;",4,"ngIf"],[1,"pagination"],[3,"click",4,"ngIf"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"ngClass","click"],[1,"wpb_column","vc_column_container","vc_col-sm-6"],[1,"vc_column-inner"],[1,"wpb_wrapper"],[1,"wpb_text_column","wpb_content_element","vc_custom_1643340962550"],[1,"vc_separator","wpb_content_element","vc_separator_align_center","vc_sep_width_100","vc_sep_pos_align_center","vc_separator_no_text","vc_sep_color_black","vc_custom_1601664164113","vc_custom_1601664164113"],[1,"vc_sep_holder","vc_sep_holder_l"],[1,"vc_sep_line"],[1,"vc_sep_holder","vc_sep_holder_r"],[1,"wpb_raw_code","wpb_content_element","wpb_raw_html",2,"text-align","center"],[1,"text-center-img"],["class","youtube__fake__img__wrapper",3,"click",4,"ngIf"],["style","width: 90%;height: 300px;","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src",4,"ngIf"],[1,"youtube__fake__img__wrapper",3,"click"],[2,"width","90%","height","300px",3,"src"],["xmlns","http://www.w3.org/2000/svg","width","1.43em","height","1em","preserveAspectRatio","xMidYMid meet","viewBox","0 0 256 180"],["fill","red","d","M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"],["fill","#FFF","d","m102.421 128.06l66.328-38.418l-66.328-38.418z"],["title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",2,"width","90%","height","300px",3,"src"],[1,"text-center",2,"text-align","center","margin","16px 0"],[3,"click"],[3,"ngClass","click"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0)(1,"h1"),core._uU(2,"TECH TESTIMONIALS"),core.qZA()(),core.TgZ(3,"div",1)(4,"div",2)(5,"div",3),core.YNc(6,TechTestimonialsComponent_a_6_Template,2,4,"a",4),core.qZA()()(),core.TgZ(7,"div",5),core.YNc(8,TechTestimonialsComponent_div_8_Template,17,3,"div",6),core.qZA(),core.TgZ(9,"div",7),core.YNc(10,TechTestimonialsComponent_div_10_Template,2,0,"div",8),core.TgZ(11,"div",9),core.YNc(12,TechTestimonialsComponent_a_12_Template,2,0,"a",10),core.YNc(13,TechTestimonialsComponent_a_13_Template,2,4,"a",11),core.YNc(14,TechTestimonialsComponent_a_14_Template,2,0,"a",10),core.qZA()()),2&rf&&(core.xp6(6),core.Q6J("ngForOf",ctx.metaDataTabs),core.xp6(2),core.Q6J("ngForOf",ctx.paginatedTestimonials),core.xp6(2),core.Q6J("ngIf",0==(null==ctx.totalPagesinTen?null:ctx.totalPagesinTen.length)),core.xp6(2),core.Q6J("ngIf",ctx.params.page>1),core.xp6(1),core.Q6J("ngForOf",ctx.totalPagesinTen),core.xp6(1),core.Q6J("ngIf",ctx.params.page<ctx.totalPagesinTen.length))},"TechTestimonialsComponent_Template"),directives:[common.sg,common.mk,common.O5],styles:[".container[_ngcontent-%COMP%]{width:80%;margin:auto;display:grid;grid-template-columns:1fr 1fr;grid-gap:65px 70px;gap:65px 70px;margin-top:2.5rem}.vc_row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:1.5rem;gap:1.5rem}p[_ngcontent-%COMP%]{border-bottom:1px solid #2a2a2a;width:100%;margin-bottom:8px;padding-bottom:10px;font-size:16px;font-weight:700}.page__section[_ngcontent-%COMP%]{min-height:50vh}.page__cover[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;background-color:#202020;color:#fff;position:relative;overflow:hidden}.page__section_centered[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 0}.page__container[_ngcontent-%COMP%]{width:100%;max-width:740px;margin-left:auto;margin-right:auto;position:relative;z-index:2}.page__title[_ngcontent-%COMP%]{font-weight:600;font-size:60px;line-height:1.2;text-transform:uppercase;margin-bottom:16px}@media screen and (max-width: 768px){.container[_ngcontent-%COMP%]{grid-template-columns:1fr}iframe[_ngcontent-%COMP%]{width:100%!important}}.pagination[_ngcontent-%COMP%]{display:inline-block}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;float:left;padding:8px 16px;text-decoration:none;transition:background-color .3s;border:1px solid #ddd;font-size:22px}.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#0cc;color:#fff;border:1px solid #00cccc}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){background-color:#ddd}.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:1rem 3.25rem;margin-bottom:-1px;background-color:#fff;white-space:nowrap;border:1px solid rgba(0,0,0,.125)}.active[_ngcontent-%COMP%]{color:#fff;background-color:#00aaa6!important;border-color:#00aaa6!important}.list-group[_ngcontent-%COMP%]{display:flex;text-align:center}.tabs[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:3rem}.youtube__fake__img__wrapper[_ngcontent-%COMP%]{position:relative;cursor:pointer}.youtube__fake__img__wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(2)}.tech__tabs__container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center;padding:16px 0}.tech__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{border-radius:50px;padding:20px;box-shadow:#0000003d 0 3px 8px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]{display:flex;text-align:center;justify-content:center;width:100%;gap:16px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;white-space:nowrap;border:1.2px solid #09cbc6;border-radius:16px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#fff;background-color:#00aaa6!important;border-color:#00aaa6!important}@media screen and (max-width: 768px){.tech__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{padding:12px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]{gap:12px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.75rem 1rem;border:1.2px solid #09cbc6;border-radius:16px}}"]});var router=__webpack_require__(74202);const routes=[{path:"",component:TechTestimonialsComponent}];class TechTestimonialsModule{}__name(TechTestimonialsModule,"TechTestimonialsModule"),TechTestimonialsModule.\u0275fac=__name(function(t){return new(t||TechTestimonialsModule)},"TechTestimonialsModule_Factory"),TechTestimonialsModule.\u0275mod=core.oAB({type:TechTestimonialsModule}),TechTestimonialsModule.\u0275inj=core.cJS({imports:[[common.ez,router.Bz.forChild(routes)]]})}};