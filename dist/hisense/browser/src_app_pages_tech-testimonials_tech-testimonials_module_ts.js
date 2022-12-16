"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_tech-testimonials_tech-testimonials_module_ts"],{

/***/ 3688:
/*!************************************************************************!*\
  !*** ./src/app/pages/tech-testimonials/tech-testimonials.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechTestimonialsComponent": () => (/* binding */ TechTestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = function (a0) { return { "active": a0 }; };
function TechTestimonialsComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TechTestimonialsComponent_a_6_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const tab_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.changeTab(tab_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, tab_r6 == ctx_r0.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tab_r6);
} }
function TechTestimonialsComponent_div_8_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TechTestimonialsComponent_div_8_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const obj_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.playVideo(obj_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 28)(4, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const obj_r9 = ctx_r16.$implicit;
    const i_r10 = ctx_r16.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", obj_r9.youtube_thumb_image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "youtube thumbnail " + (i_r10 + 1));
} }
function TechTestimonialsComponent_div_8_iframe_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 30);
} if (rf & 2) {
    const obj_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r12.getVideoLink(obj_r9.youtube_url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
} }
function TechTestimonialsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16)(4, "div", 15)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 17)(8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 21)(13, "div", 15)(14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TechTestimonialsComponent_div_8_div_15_Template, 5, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TechTestimonialsComponent_div_8_iframe_16_Template, 1, 1, "iframe", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const obj_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !obj_r9.playVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", obj_r9.playVideo);
} }
function TechTestimonialsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TechTestimonialsComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TechTestimonialsComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.getPaginatedTestimonials(ctx_r18.params.page - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TechTestimonialsComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TechTestimonialsComponent_a_13_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const i_r21 = restoredCtx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.getPaginatedTestimonials(i_r21 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r4.params.page == i_r21 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r21 + 1);
} }
function TechTestimonialsComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TechTestimonialsComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.getPaginatedTestimonials(ctx_r24.params.page + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class TechTestimonialsComponent {
    constructor(state, sanitizer, api, title) {
        this.state = state;
        this.sanitizer = sanitizer;
        this.api = api;
        this.title = title;
        this.testimonials = [];
        this.paginatedTestimonials = [];
        this.GlobalpaginatedTestimonials = [];
        this.totalPagesinTen = [];
        this.GlobaltotalPagesinTen = [];
        this.params = {
            per_page: 10,
            page: 1
        };
        // metaDataTabs = ['National', 'Global'];
        this.metaDataTabs = ['National'];
        this.currentTab = 'National';
        this.title.setTitle('Hisense India | TECH TESTIMONIALS');
        this.state.mobileNavToggle.next(false);
    }
    changeTab(tab) {
        this.params = {
            per_page: 10,
            page: 1
        };
        this.currentTab = tab;
        this.totalPagesinTen = [];
        this.paginatedTestimonials = [];
        let currentTestimonials = [];
        if (this.currentTab == 'Global') {
            currentTestimonials = this.testimonials.filter((obj) => obj.country == 'global');
            this.paginatedTestimonials = currentTestimonials.slice(((this.params.page - 1) * 10), (((this.params.page) * 10)));
        }
        else {
            currentTestimonials = this.testimonials.filter((obj) => obj.country == 'national');
            this.paginatedTestimonials = currentTestimonials.slice(((this.params.page - 1) * 10), (((this.params.page) * 10)));
            // this.getTechTestimonials(1);
        }
        this.totalPagesinTen = new Array(Math.ceil(currentTestimonials.length / this.params.per_page));
        console.log(this.paginatedTestimonials);
    }
    ngOnInit() {
        this.getTechTestimonials();
    }
    getTechTestimonials(page) {
        if (page) {
            this.params.page = page;
        }
        this.api.getTechTestimonials(this.params).subscribe({
            next: (res) => {
                this.testimonials = res.data;
                this.paginatedTestimonials = res.data.filter((obj) => obj.country == 'national').slice(((this.params.page - 1) * 10), this.params.per_page);
                console.log(res.data);
                this.totalPagesinTen = new Array(Math.ceil(res.data.length / this.params.per_page));
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
    getPaginatedTestimonials(page) {
        if (page) {
            this.params.page = page;
        }
        console.log(((this.params.page - 1) * 10), (((this.params.page) * 10)));
        this.paginatedTestimonials = this.testimonials.filter((obj) => obj.country == this.currentTab.toLowerCase()).slice(((this.params.page - 1) * 10), (((this.params.page) * 10)));
        console.log(this.paginatedTestimonials);
    }
    playVideo(obj) {
        for (let object of this.paginatedTestimonials) {
            object.playVideo = false;
        }
        obj.playVideo = true;
    }
    getVideoLink(url) {
        url = url + '?autoplay=1&mute=0&showinfo=1&controls=1;';
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
TechTestimonialsComponent.ɵfac = function TechTestimonialsComponent_Factory(t) { return new (t || TechTestimonialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title)); };
TechTestimonialsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TechTestimonialsComponent, selectors: [["app-tech-testimonials"]], decls: 15, vars: 6, consts: [[1, "breadcrumb__yellow__banner"], [1, "tech__tabs__container"], [1, "col1", "tabs"], ["id", "themeslist", 1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "container"], ["class", "wpb_column vc_column_container vc_col-sm-6", 4, "ngFor", "ngForOf"], [1, "", 2, "width", "80%", "margin", "20px auto"], ["class", "text-center", "style", "text-align: center;margin: 16px 0;", 4, "ngIf"], [1, "pagination"], [3, "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "wpb_column", "vc_column_container", "vc_col-sm-6"], [1, "vc_column-inner"], [1, "wpb_wrapper"], [1, "wpb_text_column", "wpb_content_element", "vc_custom_1643340962550"], [1, "vc_separator", "wpb_content_element", "vc_separator_align_center", "vc_sep_width_100", "vc_sep_pos_align_center", "vc_separator_no_text", "vc_sep_color_black", "vc_custom_1601664164113", "vc_custom_1601664164113"], [1, "vc_sep_holder", "vc_sep_holder_l"], [1, "vc_sep_line"], [1, "vc_sep_holder", "vc_sep_holder_r"], [1, "wpb_raw_code", "wpb_content_element", "wpb_raw_html", 2, "text-align", "center"], [1, "text-center-img"], ["class", "youtube__fake__img__wrapper", 3, "click", 4, "ngIf"], ["style", "width: 90%;height: 300px;", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"], [1, "youtube__fake__img__wrapper", 3, "click"], [2, "width", "90%", "height", "300px", 3, "src", "alt"], ["xmlns", "http://www.w3.org/2000/svg", "width", "1.43em", "height", "1em", "preserveAspectRatio", "xMidYMid meet", "viewBox", "0 0 256 180"], ["fill", "red", "d", "M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"], ["fill", "#FFF", "d", "m102.421 128.06l66.328-38.418l-66.328-38.418z"], ["title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 2, "width", "90%", "height", "300px", 3, "src"], [1, "text-center", 2, "text-align", "center", "margin", "16px 0"], [3, "click"], [3, "ngClass", "click"]], template: function TechTestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "TECH TESTIMONIALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TechTestimonialsComponent_a_6_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TechTestimonialsComponent_div_8_Template, 17, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TechTestimonialsComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TechTestimonialsComponent_a_12_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TechTestimonialsComponent_a_13_Template, 2, 4, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TechTestimonialsComponent_a_14_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.metaDataTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paginatedTestimonials);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.totalPagesinTen == null ? null : ctx.totalPagesinTen.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.params.page > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.totalPagesinTen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.params.page < ctx.totalPagesinTen.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 65px 70px;\n  gap: 65px 70px;\n  margin-top: 2.5rem;\n}\n\n.vc_row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n}\n\np[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #2a2a2a;\n  width: 100%;\n  margin-bottom: 8px;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.page__section[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\n\n.page__cover[_ngcontent-%COMP%] {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #202020;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n\n.page__section_centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 80px 0;\n}\n\n.page__container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 740px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.page__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 60px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  iframe[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  border: 1px solid #ddd;\n  font-size: 22px;\n}\n\n.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #00cccc;\n  color: white;\n  border: 1px solid #00cccc;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #ddd;\n}\n\n.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem 3.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 3rem;\n}\n\n.youtube__fake__img__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.youtube__fake__img__wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(2);\n}\n\n.tech__tabs__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  padding: 16px 0;\n}\n\n.tech__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  gap: 16px;\n}\n\n.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1.2px solid #09cbc6;\n  border-radius: 16px;\n}\n\n.tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n@media screen and (max-width: 768px) {\n  .tech__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .tech__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    border: 1.2px solid #09cbc6;\n    border-radius: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlY2gtdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGhpc2Vuc2VcXHNyY1xcYXBwXFxwYWdlc1xcdGVjaC10ZXN0aW1vbmlhbHNcXHRlY2gtdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUFBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFBQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSwwQkFBQTtFQ0NOOztFREVFO0lBQ0ksc0JBQUE7RUNDTjtBQUNGOztBREdBO0VBQ0kscUJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0RKOztBRElBO0VBQ0ksc0JBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGdDQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlDQUFBO0FDRFI7O0FETUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNISjs7QURJSTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FDSFI7O0FES0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDSFI7O0FESVE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNGWjs7QURJUTtFQUNJLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGdDQUFBO0FDSFo7O0FEU0E7RUFFUTtJQUNJLGFBQUE7RUNQVjtFRFNNO0lBQ0ksU0FBQTtFQ1BWO0VEUVU7SUFDSSxxQkFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7RUNOZDtBQUNGIiwiZmlsZSI6InRlY2gtdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogNjVweCA3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG59XHJcblxyXG4udmNfcm93IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhMmEyYTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBhZ2VfX3NlY3Rpb24ge1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLnBhZ2VfX2NvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhZ2VfX3NlY3Rpb25fY2VudGVyZWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDgwcHggMDtcclxufVxyXG5cclxuLnBhZ2VfX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNzQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wYWdlX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMDQsIDIwNCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMjA0LCAyMDQpO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uY29sMSBhIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMy4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJGQTRFNyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogM3JlbTtcclxufVxyXG5cclxuLnlvdXR1YmVfX2Zha2VfX2ltZ19fd3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHN2Z3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4udGVjaF9fdGFic19fY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgLnRhYnN7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2VhZTllOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBnYXA6IDE2cHg7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyRkE0RTcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRlY2hfX3RhYnNfX2NvbnRhaW5lcntcclxuICAgICAgICAudGFic3tcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiA2NXB4IDcwcHg7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cblxuLnZjX3JvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbnAge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhMmEyYTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYWdlX19zZWN0aW9uIHtcbiAgbWluLWhlaWdodDogNTB2aDtcbn1cblxuLnBhZ2VfX2NvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFnZV9fc2VjdGlvbl9jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMDtcbn1cblxuLnBhZ2VfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc0MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5wYWdlX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICBpZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2NjYztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBjY2NjO1xufVxuXG4ucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5jb2wxIGEge1xuICBwYWRkaW5nOiAxcmVtIDMuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDNyZW07XG59XG5cbi55b3V0dWJlX19mYWtlX19pbWdfX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi55b3V0dWJlX19mYWtlX19pbWdfX3dyYXBwZXIgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgyKTtcbn1cblxuLnRlY2hfX3RhYnNfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMDtcbn1cbi50ZWNoX190YWJzX19jb250YWluZXIgLnRhYnMge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xufVxuLnRlY2hfX3RhYnNfX2NvbnRhaW5lciAubGlzdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDE2cHg7XG59XG4udGVjaF9fdGFic19fY29udGFpbmVyIC5saXN0LWdyb3VwIGEge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi50ZWNoX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGVjaF9fdGFic19fY29udGFpbmVyIC50YWJzIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG4gIC50ZWNoX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAge1xuICAgIGdhcDogMTJweDtcbiAgfVxuICAudGVjaF9fdGFic19fY29udGFpbmVyIC5saXN0LWdyb3VwIGEge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXI6IDEuMnB4IHNvbGlkICMwOWNiYzY7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 3358:
/*!*********************************************************************!*\
  !*** ./src/app/pages/tech-testimonials/tech-testimonials.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechTestimonialsModule": () => (/* binding */ TechTestimonialsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tech_testimonials_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tech-testimonials.component */ 3688);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _tech_testimonials_component__WEBPACK_IMPORTED_MODULE_0__.TechTestimonialsComponent
    }
];
class TechTestimonialsModule {
}
TechTestimonialsModule.ɵfac = function TechTestimonialsModule_Factory(t) { return new (t || TechTestimonialsModule)(); };
TechTestimonialsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TechTestimonialsModule });
TechTestimonialsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TechTestimonialsModule, { declarations: [_tech_testimonials_component__WEBPACK_IMPORTED_MODULE_0__.TechTestimonialsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_tech-testimonials_tech-testimonials_module_ts.js.map