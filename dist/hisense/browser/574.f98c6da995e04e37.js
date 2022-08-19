"use strict";(self.webpackChunkhisense=self.webpackChunkhisense||[]).push([[574],{2574:(m,l,s)=>{s.r(l),s.d(l,{TechTestimonialsModule:()=>u});var p=s(9808),t=s(1223),g=s(6007),_=s(2313),r=s(5830);function d(i,a){if(1&i&&(t.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"div",9)(5,"p"),t._uU(6),t.qZA()()(),t.TgZ(7,"div",11)(8,"span",12),t._UZ(9,"span",13),t.qZA(),t.TgZ(10,"span",14),t._UZ(11,"span",13),t.qZA()(),t.TgZ(12,"div",15)(13,"div",9)(14,"div",16),t._UZ(15,"iframe",17),t.qZA()()()()()()),2&i){const n=a.$implicit,c=t.oxw();t.xp6(6),t.Oqu(n.description),t.xp6(9),t.Q6J("src",c.getVideoLink(n.youtube_url),t.uOi)}}let e=(()=>{class i{constructor(n,c,v){this.state=n,this.sanitizer=c,this.api=v,this.testimonials=[],this.state.mobileNavToggle.next(!1)}ngOnInit(){this.api.getTechTestimonials().subscribe({next:n=>{console.log(n),this.testimonials=n.data},error:n=>{console.log(n)}})}getVideoLink(n){return this.sanitizer.bypassSecurityTrustResourceUrl(n)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g.O),t.Y36(_.H7),t.Y36(r.s))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tech-testimonials"]],decls:8,vars:1,consts:[[1,"page__cover","page__section","page__section_centered"],[1,"page__cover-inner","desktop-banner",2,"background-color","rgb(32, 32, 32)","transform","translateY(0px)"],[1,"page__cover-inner","mobile-banner",2,"background-color","rgb(32, 32, 32)","transform","translateY(0px)"],[1,"page__container"],[1,"page__title"],[1,"container"],["class","wpb_column vc_column_container vc_col-sm-6",4,"ngFor","ngForOf"],[1,"wpb_column","vc_column_container","vc_col-sm-6"],[1,"vc_column-inner"],[1,"wpb_wrapper"],[1,"wpb_text_column","wpb_content_element","vc_custom_1643340962550"],[1,"vc_separator","wpb_content_element","vc_separator_align_center","vc_sep_width_100","vc_sep_pos_align_center","vc_separator_no_text","vc_sep_color_black","vc_custom_1601664164113","vc_custom_1601664164113"],[1,"vc_sep_holder","vc_sep_holder_l"],[1,"vc_sep_line"],[1,"vc_sep_holder","vc_sep_holder_r"],[1,"wpb_raw_code","wpb_content_element","wpb_raw_html",2,"text-align","center"],[1,"text-center-img"],["title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"]],template:function(n,c){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"div",1)(2,"div",2),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"TECH TESTIMONIALS"),t.qZA()()(),t.TgZ(6,"div",5),t.YNc(7,d,16,2,"div",6),t.qZA()),2&n&&(t.xp6(7),t.Q6J("ngForOf",c.testimonials))},directives:[p.sg],styles:[".container[_ngcontent-%COMP%]{width:80%;margin:auto;display:grid;grid-template-columns:1fr 1fr;grid-gap:1.5rem;gap:1.5rem;margin-top:2.5rem}.vc_row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:1.5rem;gap:1.5rem}p[_ngcontent-%COMP%]{border-bottom:1px solid #2a2a2a;width:100%;margin-bottom:8px;padding-bottom:10px;font-size:16px;font-weight:700}.page__section[_ngcontent-%COMP%]{min-height:50vh}.page__cover[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;background-color:#202020;color:#fff;position:relative;overflow:hidden}.page__section_centered[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 0}.page__container[_ngcontent-%COMP%]{width:100%;max-width:740px;margin-left:auto;margin-right:auto;position:relative;z-index:2}.page__title[_ngcontent-%COMP%]{font-weight:600;font-size:60px;line-height:1.2;text-transform:uppercase}@media screen and (max-width: 768px){.container[_ngcontent-%COMP%]{grid-template-columns:1fr}.page__title[_ngcontent-%COMP%]{font-size:45px}}"]}),i})();var o=s(1590);const h=[{path:"",component:e}];let u=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.ez,o.Bz.forChild(h)]]}),i})()},5830:(m,l,s)=>{s.d(l,{s:()=>_});var p=s(2340),t=s(1223),g=s(520);let _=(()=>{class r{constructor(e){this.http=e,this.baseURL=`${p.N.baseApiUrl}/v1`}getSlugData(e,o="/categories/load-by-slug/"){return this.http.get(this.baseURL+o+e)}getVarientData(e,o="/product-variants/load-by-slug/"){return this.http.get(this.baseURL+o+e)}getPressCoverages(e,o="/press-coverages"){return this.http.get(this.baseURL+o,{params:e})}postContactUsForm(e,o="/contact-requests"){return this.http.post(this.baseURL+o,e)}signup(e,o="/delightful-india/register"){return this.http.post(this.baseURL+o,e)}login(e,o="/delightful-india/login"){return this.http.post(this.baseURL+o,e)}getHints(e,o="/delightful-india/hints"){return this.http.get(this.baseURL+o,{params:e})}getTechTestimonials(e="/tech-testimonials"){return this.http.get(this.baseURL+e)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(g.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);