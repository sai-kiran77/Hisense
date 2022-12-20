"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_about-hisense_about-hisense_module_ts"],{

/***/ 2961:
/*!****************************************************************!*\
  !*** ./src/app/pages/about-hisense/about-hisense.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutHisenseComponent": () => (/* binding */ AboutHisenseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);



class AboutHisenseComponent {
    constructor(state, title) {
        this.state = state;
        this.title = title;
        this.state.mobileNavToggle.next(false);
        this.title.setTitle('Hisense India | About Hisense');
    }
    ngOnInit() {
    }
}
AboutHisenseComponent.ɵfac = function AboutHisenseComponent_Factory(t) { return new (t || AboutHisenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title)); };
AboutHisenseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutHisenseComponent, selectors: [["app-about-hisense"]], decls: 271, vars: 0, consts: [[1, "breadcrumb__yellow__banner"], [1, "about-sections"], ["id", "tab_1", 1, "about-sec", "two-tiles", "clearfix"], [1, "left"], [1, "padding"], [1, "overview-scroll"], [1, "right"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/about-img1.jpg", "alt", "Our Mission"], ["id", "tab_2", 1, "over-fixed", "two-tiles", "reverse"], [1, "cp-sec"], [1, "two-videos"], ["href", "https://www.youtube.com/embed/hEzT1237w2k?feature=oembed", 1, "fancybox-media"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/video1.jpg", "alt", "Corporate Profile 1"], [1, "play-btn"], ["href", "https://hisenseme.com/wp-content/themes/hisense-theme/img/Summary_final_1.mp4", 1, "fancybox-media"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/video2.jpg", "alt", "Corporate Profile 2"], [1, "clr"], [1, "counters"], [1, "counter"], [1, "counter-value"], [1, "counter-description"], ["id", "tab_4", 1, "core-business-sec", "over-fixed"], [1, "cd-content-container"], [1, "cd-visuals-content", "cd-content-container", 2, "display", "flex", "flex-wrap", "wrap"], [1, "cd-single-visual"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/core-business-img1.jpg", "alt", "Multimedia industry", 1, "m-bottom-25"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/core-business-img2.jpg", "alt", "Home appliance industry", 1, "m-bottom-25"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/core-business-img3.jpg", "alt", "Communication industry", 1, "m-bottom-25"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/core-business-img4.jpg", "alt", "Intelligent information systems", 1, "m-bottom-25"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/core-business-img5.jpg", "alt", "Modern real estate and service", 1, "m-bottom-25"], ["id", "tab_5", 1, "about-sec", "clearfix"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/about-img2.jpg", "alt", "RESEARCH AND DEVELOPMENT"], [1, "about-sec", "two-tiles", "clearfix"], [1, "cd-half"], [1, "dummy"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/about-img3.jpg", "alt", "Smart TV"], ["id", "tab_6", 1, "rewards-and-recognitions", "clearfix"], [1, "cd-visuals-content", "cd-content-container"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/awards-img1.jpg", "alt", "Hisense ULED TV", 1, "m-bottom-25"], [1, "bottom-info"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/awards-img2.jpg", "alt", "Hisense 4K Laser Cast TV", 1, "m-bottom-25"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/awards-img3.jpg", "alt", "The Best Global Image Award", 1, "m-bottom-25"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/awards-img4.jpg", "alt", "Hisense ULED TV", 1, "m-bottom-25"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/awards-img5.jpg", "alt", "Hisense Laser Cast", 1, "m-bottom-25"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/awards-img6.jpg", "alt", "2016 iF DESIGN AWARD", 1, "m-bottom-25"], ["id", "tab_7", 1, "about-sec", "clearfix"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/corporate-social-img.jpg", "alt", "CORPORATE SOCIAL RESPONSIBILITY"], [1, "row"], [1, "half"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/corp-img1.jpg", "alt", "corp 1"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/corp-img2.jpg", "alt", "corp 2"], ["id", "tab_9", 1, "products-has-padding", "over-fixed", "capacity", "clearfix"], [1, "info"], [1, "map-image"], ["href", "https://hisenseme.com/hisense_content/uploads/2014/11/map-large.jpg", 1, "fancybox"], ["src", "https://hisenseme.com/hisense_content/uploads/2014/11/map.jpg", "alt", "Capacity"]], template: function AboutHisenseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "About Hisense");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hisense\u2019s Mission is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "to deliver an enhanced customer experience that exceeds expectations with every product we sell.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Right from our cutting-edge technology, superior performance, elegant and sophisticated design, enduring reliability, to the most trusted retail partners in the industry, nothing is ever compromised.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Step off the beaten paths, choose Hisense, where innovation meets value.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "section", 8)(21, "div", 9)(22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Corporate Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Founded in 1969, Hisense is one of the largest consumer electronics and home appliances company in the world. Hisense offers a broad range of technology driven products that are manufactured and distributed across the world including smart TVs, smart phones, refrigerators, freezers, and air conditioners, among other products. Hisense has a workforce of over 70000 worldwide and its flat-panel TV market share in China has been No.1 for 13 consecutive years. Currently, Hisense boasts several subsidiaries, with sales revenue reaching CNY 100.3 billion in 2016.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Around the world, Hisense has built 18 overseas companies which are located in North America, Europe, Australia, Africa, the Middle East and Asia-Pacific. Hisense has 3 overseas production bases in South Africa, Czech and Mexico. Additionally, Hisense has 7 overseas R&D centers to strengthen key technologies and create leading-edge products constantly. Hisense\u2019s products are sold in more than 130 countries and regions around the world. In addition, Hisense has strategic partnerships with trusted global corporations such as IBM, Hitachi for the development and marketing of various products and services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Part of Hisense\u2019s international strategy has been to actively engage in sports marketing to raise brand awareness. Over the years, Hisense has sponsored major sporting events and teams like: UEFA\u2019s Euro 2016, the Australian Open, NASCAR Xfinity Series, Red Bull Racing, Joe Gibbs Racing, and Germany\u2019s FC Schalke 04. In 2017, Hisense announced its status as an official sponsor of the 2018 FIFA World Cup, becoming the first-ever Chinese consumer electronics brand to sponsor the tournament.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u201CTechnology, Quality, Integrity, and Responsibility\u201D are the four key elements of Hisense. Over the years, Hisense has developed energy-saving products that are more eco-friendly and has supported many primary schools in underdeveloped and disaster-impacted regions throughout China and across the world. Pursuing healthy operations, top quality, and honesty, Hisense has won the respect and loyalty of our business partners.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10)(33, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 12)(35, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 15)(38, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 17)(41, "div", 18)(42, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "130");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Countries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 18)(47, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Overseas Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 18)(52, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Overseas R&D Centers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 18)(57, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Overseas Production Bases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "section", 21)(62, "div", 22)(63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Hisense\u2019s Core Business Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 23)(66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Multimedia\u00A0industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ul")(71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Tablet\u00A0PC (I\u2019TV)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Set-top Box");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Media\u00A0network");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Home appliance\u00A0industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ul")(88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Refrigerator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Residential\u00A0air- conditioning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Commercial air conditioning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Washing machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Freezer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Communication\u00A0industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "ul")(103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Smart\u00A0phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Optical communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Intelligent\u00A0information systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "ul")(112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Intelligent transportation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Intelligent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "commercial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "system");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Modern\u00A0real estate\u00A0and\u00A0service");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "ul")(125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Real Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "section", 30)(130, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 3)(133, "div", 4)(134, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "RESEARCH AND DEVELOPMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 5)(137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Hisense\u2019s R&D team, which consists of a strong global R&D talent and experienced international management, played a vital role in accelerating the expansion of Hisense and has formed several diverse sectors over the years. This includes: multimedia, home appliances, communications, intelligent information systems, modern real estate based on multimedia technology, intelligence information technology, modern communications technology, energy-saving technology, intelligent transportation systems, fibre optics, digital medical systems and laser cast technology.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "section", 32)(140, "div", 3)(141, "div", 4)(142, "div", 5)(143, "div", 33)(144, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Smart TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "ul")(147, "li")(148, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Atlanta\u00A0\u00A0R&D Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " High-end Smart TVs in US ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "li")(152, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Canada R&D Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "\u00A0VIDAA TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "li")(156, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Europe \u00A0R&D Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "\u00A0European TV Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 33)(160, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Hiview Chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "ul")(163, "li")(164, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Silicon Valley\u00A0R&D Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " Design of Hiview Chips ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Smart Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "ul")(170, "li")(171, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "San Diego\u00A0R&D Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, " Telecommunications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 33)(177, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Optical Communications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "ul")(180, "li")(181, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Los Angeles and New Jersey R&D\u00A0Centers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, " Core Competitiveness of Optical Communications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "section", 36)(187, "div", 37)(188, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "AWARDS & RECOGNITIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 37)(191, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 39)(194, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Hisense ULED TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Annual Display Tech Gold Award\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 39)(201, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Hisense 4K Laser Cast TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "\"Global Display Tech Gold Award of the year\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 39)(208, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "The Best Global Image Award");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 39)(213, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Hisense ULED TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Annual Display Tech Gold Award\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 39)(220, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Hisense Laser Cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "\"Global Innovation Award for Best Future TV\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 39)(227, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "2016 iF DESIGN AWARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "2016 iF DESIGN AWARD (Product)-Classified Washer 2016 iF DESIGN AWARD (Communication)-Hisense Smart Butler 2016 iF DESIGN AWARD (Interior Architecture)-Laser Cast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "section", 45)(232, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 6)(235, "div", 4)(236, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "CORPORATE SOCIAL RESPONSIBILITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 5)(239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Hisense has always been deeply concerned with social responsibility. Over the years, the company has made numerous contributions to the charitable organizations and educational institutions across the globe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "In recognition for its contributions, Hisense has won the honour of being China\u2019s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "strong")(244, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Most Respected Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " five times. Also, Hisense has won China\u2019s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "strong")(248, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Best Public Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, " award six times. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Pursuing healthy operations, top quality products and honesty have won the respect and loyalty of our business partners. Hisense will continue to do its best towards improving humanity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 47)(254, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "ul")(257, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "In May 2014, Hisense donated TVs, smartphones and other devices to the UNESCO.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "ul")(262, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "From 2013 to 2016, Hisense and UNEP cooperated to promote sustainable development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "section", 51)(265, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 53)(269, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();


/***/ }),

/***/ 5595:
/*!*************************************************************!*\
  !*** ./src/app/pages/about-hisense/about-hisense.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutHisenseModule": () => (/* binding */ AboutHisenseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _about_hisense_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-hisense.component */ 2961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _about_hisense_component__WEBPACK_IMPORTED_MODULE_0__.AboutHisenseComponent
    }
];
class AboutHisenseModule {
}
AboutHisenseModule.ɵfac = function AboutHisenseModule_Factory(t) { return new (t || AboutHisenseModule)(); };
AboutHisenseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutHisenseModule });
AboutHisenseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutHisenseModule, { declarations: [_about_hisense_component__WEBPACK_IMPORTED_MODULE_0__.AboutHisenseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_about-hisense_about-hisense_module_ts.js.map