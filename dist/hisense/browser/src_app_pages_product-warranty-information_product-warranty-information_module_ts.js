"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_product-warranty-information_product-warranty-information_module_ts"],{

/***/ 6433:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/product-warranty-information/product-warranty-information.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductWarrantyInformationComponent": () => (/* binding */ ProductWarrantyInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





function ProductWarrantyInformationComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", cat_r5.display_value, " ");
} }
function ProductWarrantyInformationComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", cat_r6.display_value, " ");
} }
function ProductWarrantyInformationComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r7.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", cat_r7.display_value, " ");
} }
function ProductWarrantyInformationComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r8.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", cat_r8.display_value, " ");
} }
function ProductWarrantyInformationComponent_div_37_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r9.warranty == null ? null : ctx_r9.warranty.warranty_information == null ? null : ctx_r9.warranty.warranty_information.warranty_description_text, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function ProductWarrantyInformationComponent_div_37_p_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r11.warranty == null ? null : ctx_r11.warranty.warranty_information == null ? null : ctx_r11.warranty.warranty_information.warranty_duration_date_string, ")");
} }
function ProductWarrantyInformationComponent_div_37_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductWarrantyInformationComponent_div_37_p_7_span_2_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.warranty == null ? null : ctx_r10.warranty.warranty_information == null ? null : ctx_r10.warranty.warranty_information.warranty_duration_years_string, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.warranty == null ? null : ctx_r10.warranty.warranty_information == null ? null : ctx_r10.warranty.warranty_information.warranty_duration_date_string);
} }
function ProductWarrantyInformationComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Warranty Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductWarrantyInformationComponent_div_37_div_5_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductWarrantyInformationComponent_div_37_p_7_Template, 3, 2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 15)(9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Read More About Warranty Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.warranty == null ? null : ctx_r4.warranty.warranty_information == null ? null : ctx_r4.warranty.warranty_information.warranty_description_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.warranty == null ? null : ctx_r4.warranty.warranty_information == null ? null : ctx_r4.warranty.warranty_information.warranty_duration_years_string);
} }
class ProductWarrantyInformationComponent {
    constructor(state, api) {
        this.state = state;
        this.api = api;
        this.metaData = [];
        this.selectedCat = null;
        this.productVarients = [];
        this.selectedProd = null;
        this.readMore = false;
    }
    updateCategory(event) {
        var _a;
        this.productVarients = [];
        (_a = this.metaData.find((obj) => obj.id == event.target.value)) === null || _a === void 0 ? void 0 : _a.products.forEach((object) => {
            object.product_variants.forEach((o) => {
                this.productVarients.push(o);
            });
        });
        console.log(this.productVarients);
    }
    updateProduct(event) {
        this.selectedProd = this.productVarients.find((obj) => obj.id == event.target.value);
    }
    updateYear(event) {
        this.selectedYear = this.selectedProd.years_of_purchase.find((obj) => obj.year == event.target.value);
    }
    updateMonth(event) {
        this.warranty = this.selectedYear.months_of_purchase.find((obj) => obj.month == event.target.value);
        console.log(this.warranty);
    }
    ngOnInit() {
        this.getproductWarrantyInformation();
    }
    getproductWarrantyInformation() {
        this.api.getproductWarrantyInformation().subscribe({
            next: (res) => {
                console.log(res);
                this.metaData = res.data;
            },
            error: (err) => {
            }
        });
    }
}
ProductWarrantyInformationComponent.ɵfac = function ProductWarrantyInformationComponent_Factory(t) { return new (t || ProductWarrantyInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
ProductWarrantyInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductWarrantyInformationComponent, selectors: [["app-product-warranty-information"]], decls: 38, vars: 5, consts: [[1, "breadcrumb__yellow__banner"], [1, "page_container", 2, "max-width", "850px", "margin", "auto"], [1, "my-5", "select-container", 2, "justify-content", "center", "background-color", "#f8f8f8", "padding", "24px", "align-items", "center"], [1, "form__group"], [1, "form__control"], [3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "0", "disabled", "", "selected", ""], [4, "ngIf"], [3, "value"], [1, "text-center", 2, "display", "block"], [1, "col2", "text-center", 2, "max-width", "800px", "margin", "16px auto"], ["class", "mb-3", 4, "ngIf"], [1, "text-center"], [1, "my-5", 2, "text-align", "center"], ["routerLink", "/warranty-information", 1, "btn-hisense", 2, "color", "white !important", "height", "auto", "padding", "22px", "white-space", "nowrap"], [1, "mb-3"], [3, "innerHtml"]], template: function ProductWarrantyInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Product Warranty Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductWarrantyInformationComponent_Template_select_change_9_listener($event) { return ctx.updateCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductWarrantyInformationComponent_option_12_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4)(17, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductWarrantyInformationComponent_Template_select_change_17_listener($event) { return ctx.updateProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Select Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProductWarrantyInformationComponent_option_20_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Year of Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 4)(25, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductWarrantyInformationComponent_Template_select_change_25_listener($event) { return ctx.updateYear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Select Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ProductWarrantyInformationComponent_option_28_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 3)(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Month of Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 4)(33, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductWarrantyInformationComponent_Template_select_change_33_listener($event) { return ctx.updateMonth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Select Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ProductWarrantyInformationComponent_option_36_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ProductWarrantyInformationComponent_div_37_Template, 11, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.metaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productVarients);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedProd == null ? null : ctx.selectedProd.years_of_purchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedYear == null ? null : ctx.selectedYear.months_of_purchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.warranty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".col2[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 0.25rem;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\n\n.form__group[_ngcontent-%COMP%] {\n  flex: 1 0 25%;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nlabel[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.select-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 32px;\n  gap: 32px;\n}\n\n.page_container[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n@media screen and (max-width: 768px) {\n  .page_container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .select-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    flex-direction: column !important;\n  }\n\n  .form__group[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n  }\n  .form__group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtd2FycmFudHktaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LXdhcnJhbnR5LWluZm9ybWF0aW9uXFxwcm9kdWN0LXdhcnJhbnR5LWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQUE7RUFFQSxzQkFBQTtBQ0RKOztBRElBOzs7RUFHSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtBQ0RKOztBRElBOztFQUVJLG1CQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxVQUFBO0VDRE47O0VER0U7SUFDSSwwQkFBQTtJQUNBLGlDQUFBO0VDQU47O0VERUU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0NOO0VEQU07SUFDSSxXQUFBO0VDRVY7QUFDRiIsImZpbGUiOiJwcm9kdWN0LXdhcnJhbnR5LWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbDIge1xyXG4gICAgLy8gcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbmlucHV0LFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbn1cclxuXHJcbi5mb3JtX19ncm91cHtcclxuICAgIGZsZXg6IDEgMCAyNSU7XHJcbn1cclxuXHJcbnNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmxhYmVsLFxyXG5oMyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uc2VsZWN0LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDMycHg7XHJcbn1cclxuXHJcbi5wYWdlX2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5wYWdlX2NvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdC1jb250YWluZXJ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZvcm1fX2dyb3Vwe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBzZWxlY3R7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jb2wyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG5cbi5mb3JtX19ncm91cCB7XG4gIGZsZXg6IDEgMCAyNSU7XG59XG5cbnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxubGFiZWwsXG5oMyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zZWxlY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDMycHg7XG59XG5cbi5wYWdlX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5zZWxlY3QtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybV9fZ3JvdXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuZm9ybV9fZ3JvdXAgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 7145:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/product-warranty-information/product-warranty-information.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductWarrantyInformationModule": () => (/* binding */ ProductWarrantyInformationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _product_warranty_information_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-warranty-information.component */ 6433);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _product_warranty_information_component__WEBPACK_IMPORTED_MODULE_0__.ProductWarrantyInformationComponent
    }
];
class ProductWarrantyInformationModule {
}
ProductWarrantyInformationModule.ɵfac = function ProductWarrantyInformationModule_Factory(t) { return new (t || ProductWarrantyInformationModule)(); };
ProductWarrantyInformationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductWarrantyInformationModule });
ProductWarrantyInformationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductWarrantyInformationModule, { declarations: [_product_warranty_information_component__WEBPACK_IMPORTED_MODULE_0__.ProductWarrantyInformationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-warranty-information_product-warranty-information_module_ts.js.map