"use strict";(self.webpackChunkhisense=self.webpackChunkhisense||[]).push([[574],{2574:(y,l,s)=>{s.r(l),s.d(l,{TechTestimonialsModule:()=>O});var c=s(9808),t=s(1223),_=s(6007),g=s(2313),m=s(5830);const p=function(i){return{active:i}};function d(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"a",12),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw().changeTab(r)}),t._uU(1),t.qZA()}if(2&i){const e=o.$implicit,n=t.oxw();t.Q6J("ngClass",t.VKq(2,p,e==n.currentTab)),t.xp6(1),t.Oqu(e)}}function h(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw().playVideo(a)}),t._UZ(1,"img",26),t.O4$(),t.TgZ(2,"svg",27),t._UZ(3,"path",28)(4,"path",29),t.qZA()()}if(2&i){const e=t.oxw(),n=e.$implicit,a=e.index;t.xp6(1),t.Q6J("src",n.youtube_thumb_image,t.LSH)("alt","youtube thumbnail "+(a+1))}}function u(i,o){if(1&i&&t._UZ(0,"iframe",30),2&i){const e=t.oxw().$implicit,n=t.oxw();t.Q6J("src",n.getVideoLink(e.youtube_url),t.uOi)}}function T(i,o){if(1&i&&(t.TgZ(0,"div",13)(1,"div",14)(2,"div",15)(3,"div",16)(4,"div",15)(5,"p"),t._uU(6),t.qZA()()(),t.TgZ(7,"div",17)(8,"span",18),t._UZ(9,"span",19),t.qZA(),t.TgZ(10,"span",20),t._UZ(11,"span",19),t.qZA()(),t.TgZ(12,"div",21)(13,"div",15)(14,"div",22),t.YNc(15,h,5,2,"div",23),t.YNc(16,u,1,1,"iframe",24),t.qZA()()()()()()),2&i){const e=o.$implicit;t.xp6(6),t.Oqu(e.description),t.xp6(9),t.Q6J("ngIf",!e.playVideo),t.xp6(1),t.Q6J("ngIf",e.playVideo)}}function f(i,o){1&i&&(t.TgZ(0,"div",31),t._uU(1,"No Records Found!"),t.qZA())}function x(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"a",32),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return a.getPaginatedTestimonials(a.params.page-1)}),t._uU(1,"\xab"),t.qZA()}}function b(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"a",33),t.NdJ("click",function(){const r=t.CHM(e).index;return t.oxw().getPaginatedTestimonials(r+1)}),t._uU(1),t.qZA()}if(2&i){const e=o.index,n=t.oxw();t.Q6J("ngClass",t.VKq(2,p,n.params.page==e+1)),t.xp6(1),t.Oqu(e+1)}}function C(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"a",32),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return a.getPaginatedTestimonials(a.params.page+1)}),t._uU(1,"\xbb"),t.qZA()}}let v=(()=>{class i{constructor(e,n,a){this.state=e,this.sanitizer=n,this.api=a,this.testimonials=[],this.paginatedTestimonials=[],this.GlobalpaginatedTestimonials=[],this.totalPagesinTen=[],this.GlobaltotalPagesinTen=[],this.params={per_page:10,page:1},this.metaDataTabs=["National"],this.currentTab="National",this.state.mobileNavToggle.next(!1)}changeTab(e){this.params={per_page:10,page:1},this.currentTab=e,this.totalPagesinTen=[],this.paginatedTestimonials=[];let n=[];"Global"==this.currentTab?(n=this.testimonials.filter(a=>"global"==a.country),this.paginatedTestimonials=n.slice(10*(this.params.page-1),10*this.params.page)):(n=this.testimonials.filter(a=>"national"==a.country),this.paginatedTestimonials=n.slice(10*(this.params.page-1),10*this.params.page)),this.totalPagesinTen=new Array(Math.ceil(n.length/this.params.per_page)),console.log(this.paginatedTestimonials)}ngOnInit(){this.getTechTestimonials()}getTechTestimonials(e){e&&(this.params.page=e),this.api.getTechTestimonials(this.params).subscribe({next:n=>{this.testimonials=n.data,this.paginatedTestimonials=n.data.filter(a=>"national"==a.country).slice(10*(this.params.page-1),this.params.per_page),console.log(n.data),this.totalPagesinTen=new Array(Math.ceil(n.data.length/this.params.per_page))},error:n=>{console.log(n)}})}getPaginatedTestimonials(e){e&&(this.params.page=e),console.log(10*(this.params.page-1),10*this.params.page),this.paginatedTestimonials=this.testimonials.filter(n=>n.country==this.currentTab.toLowerCase()).slice(10*(this.params.page-1),10*this.params.page),console.log(this.paginatedTestimonials)}playVideo(e){for(let n of this.paginatedTestimonials)n.playVideo=!1;e.playVideo=!0}getVideoLink(e){return this.sanitizer.bypassSecurityTrustResourceUrl(e+="?autoplay=1&mute=0&showinfo=1&controls=1;")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(_.O),t.Y36(g.H7),t.Y36(m.s))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tech-testimonials"]],decls:15,vars:6,consts:[[1,"breadcrumb__yellow__banner"],[1,"tech__tabs__container"],[1,"col1","tabs"],["id","themeslist",1,"list-group"],["class","list-group-item list-group-item-action",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"container"],["class","wpb_column vc_column_container vc_col-sm-6",4,"ngFor","ngForOf"],[1,"",2,"width","80%","margin","20px auto"],["class","text-center","style","text-align: center;margin: 16px 0;",4,"ngIf"],[1,"pagination"],[3,"click",4,"ngIf"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"ngClass","click"],[1,"wpb_column","vc_column_container","vc_col-sm-6"],[1,"vc_column-inner"],[1,"wpb_wrapper"],[1,"wpb_text_column","wpb_content_element","vc_custom_1643340962550"],[1,"vc_separator","wpb_content_element","vc_separator_align_center","vc_sep_width_100","vc_sep_pos_align_center","vc_separator_no_text","vc_sep_color_black","vc_custom_1601664164113","vc_custom_1601664164113"],[1,"vc_sep_holder","vc_sep_holder_l"],[1,"vc_sep_line"],[1,"vc_sep_holder","vc_sep_holder_r"],[1,"wpb_raw_code","wpb_content_element","wpb_raw_html",2,"text-align","center"],[1,"text-center-img"],["class","youtube__fake__img__wrapper",3,"click",4,"ngIf"],["style","width: 90%;height: 300px;","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src",4,"ngIf"],[1,"youtube__fake__img__wrapper",3,"click"],[2,"width","90%","height","300px",3,"src","alt"],["xmlns","http://www.w3.org/2000/svg","width","1.43em","height","1em","preserveAspectRatio","xMidYMid meet","viewBox","0 0 256 180"],["fill","red","d","M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"],["fill","#FFF","d","m102.421 128.06l66.328-38.418l-66.328-38.418z"],["title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",2,"width","90%","height","300px",3,"src"],[1,"text-center",2,"text-align","center","margin","16px 0"],[3,"click"],[3,"ngClass","click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"TECH TESTIMONIALS"),t.qZA()(),t.TgZ(3,"div",1)(4,"div",2)(5,"div",3),t.YNc(6,d,2,4,"a",4),t.qZA()()(),t.TgZ(7,"div",5),t.YNc(8,T,17,3,"div",6),t.qZA(),t.TgZ(9,"div",7),t.YNc(10,f,2,0,"div",8),t.TgZ(11,"div",9),t.YNc(12,x,2,0,"a",10),t.YNc(13,b,2,4,"a",11),t.YNc(14,C,2,0,"a",10),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("ngForOf",n.metaDataTabs),t.xp6(2),t.Q6J("ngForOf",n.paginatedTestimonials),t.xp6(2),t.Q6J("ngIf",0==(null==n.totalPagesinTen?null:n.totalPagesinTen.length)),t.xp6(2),t.Q6J("ngIf",n.params.page>1),t.xp6(1),t.Q6J("ngForOf",n.totalPagesinTen),t.xp6(1),t.Q6J("ngIf",n.params.page<n.totalPagesinTen.length))},directives:[c.sg,c.mk,c.O5],styles:[".container[_ngcontent-%COMP%]{width:80%;margin:auto;display:grid;grid-template-columns:1fr 1fr;grid-gap:65px 70px;gap:65px 70px;margin-top:2.5rem}.vc_row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:1.5rem;gap:1.5rem}p[_ngcontent-%COMP%]{border-bottom:1px solid #2a2a2a;width:100%;margin-bottom:8px;padding-bottom:10px;font-size:16px;font-weight:700}.page__section[_ngcontent-%COMP%]{min-height:50vh}.page__cover[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;background-color:#202020;color:#fff;position:relative;overflow:hidden}.page__section_centered[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 0}.page__container[_ngcontent-%COMP%]{width:100%;max-width:740px;margin-left:auto;margin-right:auto;position:relative;z-index:2}.page__title[_ngcontent-%COMP%]{font-weight:600;font-size:60px;line-height:1.2;text-transform:uppercase;margin-bottom:16px}@media screen and (max-width: 768px){.container[_ngcontent-%COMP%]{grid-template-columns:1fr}iframe[_ngcontent-%COMP%]{width:100%!important}}.pagination[_ngcontent-%COMP%]{display:inline-block}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;float:left;padding:8px 16px;text-decoration:none;transition:background-color .3s;border:1px solid #ddd;font-size:22px}.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#0cc;color:#fff;border:1px solid #00cccc}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){background-color:#ddd}.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:1rem 3.25rem;margin-bottom:-1px;background-color:#fff;white-space:nowrap;border:1px solid rgba(0,0,0,.125)}.active[_ngcontent-%COMP%]{color:#fff;background-color:#00aaa6!important;border-color:#00aaa6!important}.list-group[_ngcontent-%COMP%]{display:flex;text-align:center}.tabs[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:3rem}.youtube__fake__img__wrapper[_ngcontent-%COMP%]{position:relative;cursor:pointer}.youtube__fake__img__wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(2)}.tech__tabs__container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center;padding:16px 0}.tech__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{border-radius:50px;padding:20px;box-shadow:#0000003d 0 3px 8px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]{display:flex;text-align:center;justify-content:center;width:100%;gap:16px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;white-space:nowrap;border:1.2px solid #09cbc6;border-radius:16px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#fff;background-color:#00aaa6!important;border-color:#00aaa6!important}@media screen and (max-width: 768px){.tech__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{padding:12px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]{gap:12px}.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.75rem 1rem;border:1.2px solid #09cbc6;border-radius:16px}}"]}),i})();var w=s(1590);const M=[{path:"",component:v}];let O=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,w.Bz.forChild(M)]]}),i})()}}]);