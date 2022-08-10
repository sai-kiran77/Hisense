"use strict";
exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 54673:
/*!************************************************************************!*\
  !*** ./src/app/pages/offers-promotions/offers-promotions.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPromotionsComponent": () => (/* binding */ OffersPromotionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


const _c0 = function (a0) { return { "active": a0 }; };
function OffersPromotionsComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OffersPromotionsComponent_a_3_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const obj_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeTab(obj_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, obj_r2.tab == ctx_r0.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r2.tab);
} }
function OffersPromotionsComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.currentImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class OffersPromotionsComponent {
    constructor() {
        this.metaData = [
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2022/08/Warranty-Announcement-Hisense.webp',
                tab: '5th August 2022'
            },
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2022/07/Open-Letter-Hisense-July-23-2022.webp',
                tab: '23rd July 2022'
            },
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2021/12/Open-Letter-Hisense-December-1.jpg',
                tab: '1st Dec 2021'
            },
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2021/12/Open-Letter-Hisense-December.jpg',
                tab: '18th Nov 2021'
            },
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2021/09/Open-Letter-Hisense-23-july.jpg',
                tab: '23rd July 2021'
            },
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2021/09/Open-Letter-Hisense-10-july.jpg',
                tab: '10th July 2021'
            },
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2021/06/Open-Letter-Hisense.jpg',
                tab: '12th June 2021'
            },
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2021/05/Open-Letter-Hisense.jpg',
                tab: '1st May 2021'
            },
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2021/07/Open-Letter-Hisense.jpg',
                tab: '1st January 2021'
            },
            {
                image: 'https://www.hisense-india.com/wp-content/uploads/2020/09/Hisense-Open-Letter-v4-1.jpg',
                tab: '10th September 2020'
            },
        ];
        this.currentImg = this.metaData[0].image;
        this.currentTab = this.metaData[0].tab;
    }
    changeTab(obj) {
        this.currentImg = obj.image;
        this.currentTab = obj.tab;
    }
    ngOnInit() {
    }
}
OffersPromotionsComponent.ɵfac = function OffersPromotionsComponent_Factory(t) { return new (t || OffersPromotionsComponent)(); };
OffersPromotionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OffersPromotionsComponent, selectors: [["app-offers-promotions"]], decls: 6, vars: 2, consts: [[1, "container"], [1, "col1"], ["id", "themeslist", 1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col2"], [3, "src", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [3, "src"]], template: function OffersPromotionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OffersPromotionsComponent_a_3_Template, 2, 4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OffersPromotionsComponent_img_5_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.metaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentImg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  padding-top: 100px;\n  padding-bottom: 80px;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.col2[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00B3ac !important;\n  border-color: #00B3ac !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVycy1wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGhpc2Vuc2VcXHNyY1xcYXBwXFxwYWdlc1xcb2ZmZXJzLXByb21vdGlvbnNcXG9mZmVycy1wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGdDQUFBO0FDREoiLCJmaWxlIjoib2ZmZXJzLXByb21vdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNvbDEgYXtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbn1cclxuXHJcbi5jb2wye1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyRkE0RTcgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEIzYWMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwQjNhYyAhaW1wb3J0YW50O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBnYXA6IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ubGlzdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbDEgYSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG5cbi5jb2wyIHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjNhYyAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMEIzYWMgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 9419:
/*!*********************************************************************!*\
  !*** ./src/app/pages/offers-promotions/offers-promotions.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPromotionsModule": () => (/* binding */ OffersPromotionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _offers_promotions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers-promotions.component */ 54673);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _offers_promotions_component__WEBPACK_IMPORTED_MODULE_0__.OffersPromotionsComponent
    }
];
class OffersPromotionsModule {
}
OffersPromotionsModule.ɵfac = function OffersPromotionsModule_Factory(t) { return new (t || OffersPromotionsModule)(); };
OffersPromotionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OffersPromotionsModule });
OffersPromotionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OffersPromotionsModule, { declarations: [_offers_promotions_component__WEBPACK_IMPORTED_MODULE_0__.OffersPromotionsComponent,
        _offers_promotions_component__WEBPACK_IMPORTED_MODULE_0__.OffersPromotionsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

};
;
//# sourceMappingURL=419.js.map