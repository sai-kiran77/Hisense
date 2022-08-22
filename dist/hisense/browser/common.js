"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["common"],{

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ApiService {
    constructor(http) {
        this.http = http;
        this.baseURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/v1`;
    }
    getSlugData(slugCategory, slugURL = '/categories/load-by-slug/') {
        return this.http.get(this.baseURL + slugURL + slugCategory);
    }
    getVarientData(varient, varientURL = '/product-variants/load-by-slug/') {
        return this.http.get(this.baseURL + varientURL + varient);
    }
    getPressCoverages(params, varientURL = '/press-coverages') {
        return this.http.get(this.baseURL + varientURL, {
            params
        });
    }
    postContactUsForm(body, endpoint = '/contact-requests') {
        return this.http.post(this.baseURL + endpoint, body);
    }
    signup(body, endpoint = '/delightful-india/register') {
        return this.http.post(this.baseURL + endpoint, body);
    }
    login(body, endpoint = '/delightful-india/login') {
        return this.http.post(this.baseURL + endpoint, body);
    }
    // ?username=email1_4788
    getHints(params, endpoint = '/delightful-india/hints') {
        return this.http.get(this.baseURL + endpoint, {
            params
        });
    }
    getTechTestimonials(endpoint = '/tech-testimonials') {
        return this.http.get(this.baseURL + endpoint);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2566:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeWhile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeWhile": () => (/* binding */ takeWhile)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);


function takeWhile(predicate, inclusive = false) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        let index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, (value) => {
            const result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}


/***/ })

}]);
//# sourceMappingURL=common.js.map