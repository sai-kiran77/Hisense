"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_fifa-event_fifa-event_module_ts"],{

/***/ 2765:
/*!**********************************************************!*\
  !*** ./src/app/pages/fifa-event/fifa-event.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FifaEventComponent": () => (/* binding */ FifaEventComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




class FifaEventComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.fifaDetails = {
            "desktop_image": "slide-1-300822.webp",
            "mobile_image": "slide-1-300822-mobile.webp",
            "desktop_image_full_url": `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Desktop.webp`,
            "mobile_image_full_url": `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Mobile.webp`
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            // Set the date we're counting down to
            let countDownDate = new Date("Sep 15, 2022 00:00:00").getTime();
            // Update the count down every 1 second
            this.x = setInterval(() => {
                // Get today's date and time
                let now = new Date().getTime();
                // Find the distance between now and the count down date
                let distance = countDownDate - now;
                // Time calculations for days, hours, minutes and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (this.days !== days) {
                    console.log('days');
                    this.days = days;
                }
                if (this.hours !== hours) {
                    console.log('hours');
                    this.hours = hours;
                }
                if (this.minutes !== minutes) {
                    console.log('minutes');
                    this.minutes = minutes;
                }
                // Output the result in an element with id="demo"
                // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                //   + minutes + "m " + seconds + "s ";
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(this.x);
                    // document.getElementById("demo").innerHTML = "EXPIRED";
                }
            }, 1000);
        }
    }
    // ngDoCheck() {
    //   console.log('chnage detected');
    // }
    ngOnDestroy() {
        if (this.x) {
            clearInterval(this.x);
        }
    }
}
FifaEventComponent.ɵfac = function FifaEventComponent_Factory(t) { return new (t || FifaEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)); };
FifaEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FifaEventComponent, selectors: [["app-fifa-event"]], decls: 35, vars: 5, consts: [[1, "fifa__event__container"], ["media", "(min-width:768px)", 3, "srcset"], [1, "ls-bg", 2, "width", "100%", 3, "src"], [1, "countdown__wrapper"], [1, "countdown__container"], [1, "f-24"], [1, "count__container"], ["width", "96", "height", "25", "viewBox", "0 0 96 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "d-sm-none"], ["d", "M29.5654 12.1734L32.7897 15.431L36.0139 12.1734L32.7897 8.92823L29.5654 12.1734ZM14.9761 12.1734L17.805 15.0331L20.6463 12.1734L17.805 9.32611L14.9761 12.1734ZM0.386719 12.1734L2.8574 14.6601L5.32808 12.1734L2.8574 9.68666L0.386719 12.1734ZM58.7318 12.1734L62.7467 16.2268L66.7739 12.1734L62.7467 8.13245L58.7318 12.1734ZM44.1424 12.1734L47.7867 15.8289L51.4062 12.1734L47.7867 8.53034L44.1424 12.1734ZM95.4091 11.4771C95.2679 9.09816 94.429 6.81476 92.9984 4.91574C91.5678 3.01672 89.6097 1.58739 87.372 0.808542C85.1342 0.0296895 82.7172 -0.0636941 80.4266 0.540198C78.1361 1.14409 76.075 2.41812 74.5039 4.20117C72.9329 5.98421 71.9225 8.1962 71.6006 10.5573C71.2787 12.9183 71.6597 15.3224 72.6955 17.4655C73.7312 19.6086 75.3752 21.3944 77.4194 22.597C79.4636 23.7996 81.8163 24.365 84.1798 24.2216C87.3477 24.0295 90.3102 22.5791 92.4159 20.1893C94.5216 17.7994 95.5982 14.6657 95.4091 11.4771ZM86.0823 3.818C87.9979 4.43825 89.6342 5.71969 90.7024 7.43617C90.2545 7.74995 89.728 7.93087 89.183 7.95836C88.6755 7.98368 88.1696 7.88362 87.7094 7.66687C87.2492 7.45012 86.8487 7.1233 86.5429 6.71492C86.237 6.30654 86.0352 5.82899 85.9549 5.32402C85.8746 4.81905 85.9183 4.30205 86.0823 3.818ZM76.7184 17.2339C75.6745 15.8726 75.0631 14.2259 74.9642 12.5091C74.9642 12.248 74.9642 11.9994 74.9642 11.7382C75.5812 11.7798 76.1714 12.0076 76.6578 12.3919C77.1442 12.7762 77.5043 13.2991 77.691 13.8924C77.8777 14.4858 77.8825 15.122 77.7045 15.718C77.5266 16.3141 77.1743 16.8424 76.6937 17.2339H76.7184ZM76.3478 7.28697C77.4304 5.59471 79.0705 4.34019 80.9803 3.7434C81.0657 3.99685 81.1197 4.25988 81.1409 4.52665C81.1881 5.34935 80.9089 6.1573 80.3645 6.77282C79.8201 7.38835 79.0552 7.76109 78.2378 7.80916C77.5608 7.87599 76.8813 7.7094 76.3107 7.33668L76.3478 7.28697ZM84.0069 20.5412C82.8082 20.609 81.6087 20.4226 80.4862 19.9942C80.6762 19.3564 81.0655 18.7973 81.5963 18.3999C82.127 18.0024 82.7709 17.7878 83.4325 17.7878C84.094 17.7878 84.7379 18.0024 85.2686 18.3999C85.7994 18.7973 86.1886 19.3564 86.3787 19.9942C85.6096 20.3122 84.7978 20.5134 83.9698 20.591L84.0069 20.5412ZM86.9717 11.5642L85.8846 14.685C85.8284 14.8597 85.7172 15.0111 85.5679 15.1165C85.4186 15.222 85.2392 15.2756 85.0569 15.2694L81.7709 15.1948C81.5897 15.194 81.4136 15.1343 81.2689 15.0245C81.1241 14.9147 81.0186 14.7607 80.9679 14.5855L80.0167 11.415C79.9672 11.239 79.9739 11.0519 80.036 10.88C80.0981 10.7082 80.2124 10.5603 80.3626 10.4575L83.0557 8.5676C83.2038 8.46216 83.3807 8.40558 83.5621 8.40558C83.7436 8.40558 83.9205 8.46216 84.0686 8.5676L86.6752 10.5695C86.8304 10.6876 86.9408 10.8556 86.988 11.0456C87.0351 11.2356 87.0163 11.4361 86.9346 11.6139L86.9717 11.5642ZM90.5418 16.7614C89.993 16.4128 89.5678 15.8985 89.3271 15.292C89.0863 14.6855 89.0423 14.0179 89.2013 13.3847C89.3603 12.7514 89.7141 12.185 90.2123 11.7665C90.7105 11.3479 91.3274 11.0986 91.9748 11.0543C91.9748 11.1787 91.9748 11.3031 92.0366 11.4274C92.1387 13.3439 91.5993 15.2395 90.5048 16.8111L90.5418 16.7614Z"], [1, "count"], [1, "category"], ["width", "20", "height", "19", "viewBox", "0 0 20 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "countdown_diamondSVGIcon__1dyM8"], ["d", "M10.0036 0.013918L0.00390625 9.51367L10.0036 19.0134L20.0034 9.51367L10.0036 0.013918Z"]], template: function FifaEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "source", 1)(4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "section", 3)(6, "div", 4)(7, "div")(8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Tournament starts in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div")(29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("srcset", ctx.fifaDetails.desktop_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.fifaDetails.mobile_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.days);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.minutes);
    } }, styles: [".f-24[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.countdown__wrapper[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  padding: 48px;\n  background-color: #00b3ac;\n  color: white;\n}\n\n.countdown__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.count__container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5rem;\n  text-align: center;\n  margin-top: 36px;\n  align-items: center;\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: #17d9d3 !important;\n}\n\n.count[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 768px) {\n  .count__container[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n\n  .count[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .f-24[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .category[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .d-sm-none[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZmEtZXZlbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxmaWZhLWV2ZW50XFxmaWZhLWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxTQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxhQUFBO0VDQ047QUFDRiIsImZpbGUiOiJmaWZhLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmYtMjQge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG4uY291bnRkb3duX193cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgcGFkZGluZzogNDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIzYWM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb3VudGRvd25fX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdW50X19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgZmlsbDogIzE3ZDlkMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY291bnQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY291bnRfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mLTI0IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZC1zbS1ub25le1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iLCIuZi0yNCB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmNvdW50ZG93bl9fd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nOiA0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2FjO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb3VudGRvd25fX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY291bnRfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zdmcge1xuICBmaWxsOiAjMTdkOWQzICFpbXBvcnRhbnQ7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb3VudF9fY29udGFpbmVyIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAuY291bnQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mLTI0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAuY2F0ZWdvcnkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5kLXNtLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 9476:
/*!*******************************************************!*\
  !*** ./src/app/pages/fifa-event/fifa-event.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FifaEventModule": () => (/* binding */ FifaEventModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fifa_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fifa-event.component */ 2765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _fifa_event_component__WEBPACK_IMPORTED_MODULE_0__.FifaEventComponent
    }
];
class FifaEventModule {
}
FifaEventModule.ɵfac = function FifaEventModule_Factory(t) { return new (t || FifaEventModule)(); };
FifaEventModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FifaEventModule });
FifaEventModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FifaEventModule, { declarations: [_fifa_event_component__WEBPACK_IMPORTED_MODULE_0__.FifaEventComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_fifa-event_fifa-event_module_ts.js.map