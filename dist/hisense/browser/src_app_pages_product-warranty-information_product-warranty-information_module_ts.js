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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






function ProductWarrantyInformationComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", cat_r5.display_value, " ");
} }
function ProductWarrantyInformationComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", cat_r6.display_value, " ");
} }
function ProductWarrantyInformationComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r7.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cat_r7.display_value, " ");
} }
function ProductWarrantyInformationComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r8.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cat_r8.display_value, " ");
} }
function ProductWarrantyInformationComponent_div_50_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r9.warranty == null ? null : ctx_r9.warranty.warranty_information == null ? null : ctx_r9.warranty.warranty_information.warranty_description_text, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function ProductWarrantyInformationComponent_div_50_p_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r11.warranty == null ? null : ctx_r11.warranty.warranty_information == null ? null : ctx_r11.warranty.warranty_information.warranty_duration_date_string, ")");
} }
function ProductWarrantyInformationComponent_div_50_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductWarrantyInformationComponent_div_50_p_7_span_2_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.warranty == null ? null : ctx_r10.warranty.warranty_information == null ? null : ctx_r10.warranty.warranty_information.warranty_duration_years_string, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.warranty == null ? null : ctx_r10.warranty.warranty_information == null ? null : ctx_r10.warranty.warranty_information.warranty_duration_date_string);
} }
function ProductWarrantyInformationComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Warranty Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductWarrantyInformationComponent_div_50_div_5_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductWarrantyInformationComponent_div_50_p_7_Template, 3, 2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19)(9, "a", 20);
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
        this.product_purchase_date = '';
        this.metaData = [];
        this.selectedCat = null;
        this.productVarients = [];
        this.selectedProd = null;
        this.readMore = false;
        const date = new Date();
        this.today = `${date.getFullYear()}-${(String(date.getMonth() + 1)).padStart(2, '0')}-${(String(date.getDate())).padStart(2, '0')}`;
    }
    setRegistrationDate(e) {
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
ProductWarrantyInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductWarrantyInformationComponent, selectors: [["app-product-warranty-information"]], decls: 51, vars: 7, consts: [[1, "breadcrumb__yellow__banner"], [1, "page_container", 2, "max-width", "850px", "margin", "auto"], [1, "my-5", 2, "justify-content", "center", "background-color", "#f8f8f8", "padding", "24px", "align-items", "center"], [1, "select-container"], [1, "form__group"], [1, "form__control"], [3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "0", "disabled", "", "selected", ""], [1, "mt-100"], [1, "select-container", "three-col"], ["type", "date", "name", "date", "id", "date", 1, "w-100", 3, "ngModel", "max", "ngModelChange", "change"], [4, "ngIf"], [3, "value"], [1, "text-center", 2, "display", "block"], [1, "col2", "text-center", 2, "max-width", "800px", "margin", "16px auto"], ["class", "mb-3", 4, "ngIf"], [1, "text-center"], [1, "my-5", 2, "text-align", "center"], ["routerLink", "/warranty-information", 1, "btn-hisense", 2, "color", "white !important", "height", "auto", "padding", "22px", "white-space", "nowrap"], [1, "mb-3"], [3, "innerHtml"]], template: function ProductWarrantyInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Product Warranty Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div")(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Select your product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "div", 4)(10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5)(13, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductWarrantyInformationComponent_Template_select_change_13_listener($event) { return ctx.updateCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductWarrantyInformationComponent_option_16_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5)(21, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductWarrantyInformationComponent_Template_select_change_21_listener($event) { return ctx.updateProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Select Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ProductWarrantyInformationComponent_option_24_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10)(26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Select date of purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11)(29, "div", 4)(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Year of Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 5)(33, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductWarrantyInformationComponent_Template_select_change_33_listener($event) { return ctx.updateYear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Select Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ProductWarrantyInformationComponent_option_36_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 4)(38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Month of Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 5)(41, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductWarrantyInformationComponent_Template_select_change_41_listener($event) { return ctx.updateMonth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Select Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ProductWarrantyInformationComponent_option_44_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 4)(46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Date of Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 5)(49, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductWarrantyInformationComponent_Template_input_ngModelChange_49_listener($event) { return ctx.product_purchase_date = $event; })("change", function ProductWarrantyInformationComponent_Template_input_change_49_listener($event) { return ctx.setRegistrationDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, ProductWarrantyInformationComponent_div_50_Template, 11, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.metaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productVarients);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedProd == null ? null : ctx.selectedProd.years_of_purchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedYear == null ? null : ctx.selectedYear.months_of_purchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.product_purchase_date)("max", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.warranty);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: [".col2[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 0.25rem;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\n\n.form__group[_ngcontent-%COMP%] {\n  flex: 1 0 25%;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b6b6b !important;\n}\n\nlabel[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.select-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 32px;\n  gap: 32px;\n}\n\n.page_container[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.three-col[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n.mt-100[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n@media screen and (max-width: 768px) {\n  .page_container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .select-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    flex-direction: column !important;\n  }\n\n  .form__group[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n  }\n  .form__group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .mt-100[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .three-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtd2FycmFudHktaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LXdhcnJhbnR5LWluZm9ybWF0aW9uXFxwcm9kdWN0LXdhcnJhbnR5LWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQUE7RUFFQSxzQkFBQTtBQ0RKOztBRElBOzs7RUFHSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDREo7O0FESUE7O0VBRUksbUJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0FDREo7O0FESUE7RUFDSSxrQ0FBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJO0lBQ0ksVUFBQTtFQ0ROOztFREdFO0lBQ0ksMEJBQUE7SUFDQSxpQ0FBQTtFQ0FOOztFREVFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNDTjtFREFNO0lBQ0ksV0FBQTtFQ0VWOztFREVFO0lBQ0ksZ0JBQUE7RUNDTjs7RURFRTtJQUNJLDBCQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0FKIiwiZmlsZSI6InByb2R1Y3Qtd2FycmFudHktaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sMiB7XHJcbiAgICAvLyBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhLFxyXG5zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxufVxyXG5cclxuLmZvcm1fX2dyb3Vwe1xyXG4gICAgZmxleDogMSAwIDI1JTtcclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZ2IoMTA3LCAxMDcsIDEwNykgIWltcG9ydGFudDtcclxufVxyXG5cclxubGFiZWwsXHJcbmgzIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5zZWxlY3QtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogMzJweDtcclxufVxyXG5cclxuLnBhZ2VfY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnRocmVlLWNvbHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbn1cclxuXHJcbi5tdC0xMDB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLnBhZ2VfY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0LWNvbnRhaW5lcntcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9ybV9fZ3JvdXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHNlbGVjdHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tdC0xMDB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGhyZWUtY29se1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59IiwiLmNvbDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuLmZvcm1fX2dyb3VwIHtcbiAgZmxleDogMSAwIDI1JTtcbn1cblxuc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzZiNmI2YiAhaW1wb3J0YW50O1xufVxuXG5sYWJlbCxcbmgzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnNlbGVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMzJweDtcbn1cblxuLnBhZ2VfY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnRocmVlLWNvbCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG59XG5cbi5tdC0xMDAge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2VfY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLnNlbGVjdC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mb3JtX19ncm91cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5mb3JtX19ncm91cCBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm10LTEwMCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC50aHJlZS1jb2wge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductWarrantyInformationModule, { declarations: [_product_warranty_information_component__WEBPACK_IMPORTED_MODULE_0__.ProductWarrantyInformationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-warranty-information_product-warranty-information_module_ts.js.map