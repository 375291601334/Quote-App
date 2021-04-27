(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-quote-module"],{

/***/ "3gGh":
/*!***************************************!*\
  !*** ./src/app/quote/quote.module.ts ***!
  \***************************************/
/*! exports provided: QuoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteModule", function() { return QuoteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "trG8");
/* harmony import */ var _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote-routing.module */ "GaGK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_2__["QuoteContainerComponent"],
    _components__WEBPACK_IMPORTED_MODULE_2__["QuoteComponent"],
    _components__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"],
    _components__WEBPACK_IMPORTED_MODULE_2__["QuotePreviewComponent"],
    _components__WEBPACK_IMPORTED_MODULE_2__["ShareFormComponent"],
];
class QuoteModule {
}
QuoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: QuoteModule });
QuoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function QuoteModule_Factory(t) { return new (t || QuoteModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuoteModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteContainerComponent"],
        _components__WEBPACK_IMPORTED_MODULE_2__["QuoteComponent"],
        _components__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"],
        _components__WEBPACK_IMPORTED_MODULE_2__["QuotePreviewComponent"],
        _components__WEBPACK_IMPORTED_MODULE_2__["ShareFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ }),

/***/ "6U+y":
/*!***************************************************************************!*\
  !*** ./src/app/quote/components/quote-preview/quote-preview.component.ts ***!
  \***************************************************************************/
/*! exports provided: QuotePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotePreviewComponent", function() { return QuotePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function QuotePreviewComponent_blockquote_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "cite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A9\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quote.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quote.author);
} }
class QuotePreviewComponent {
}
QuotePreviewComponent.ɵfac = function QuotePreviewComponent_Factory(t) { return new (t || QuotePreviewComponent)(); };
QuotePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuotePreviewComponent, selectors: [["app-quote-preview"]], inputs: { quote: "quote" }, decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function QuotePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuotePreviewComponent_blockquote_0_Template, 7, 2, "blockquote", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  flex-basis: 50%;\n}\nblockquote[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: 100%;\n  background: #8ccddd;\n  color: #ffffff;\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 26px;\n  text-align: justify;\n  position: relative;\n  display: block;\n  margin-bottom: 20px;\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after, blockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:before {\n  position: absolute;\n  font-family: \"icons\";\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:before {\n  content: \"\u275D\";\n  top: 0;\n  left: 0;\n  transform: translate(-50%, -20%);\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after {\n  content: \"\uE800\";\n  right: 0;\n  bottom: 0;\n  transform: translate(50%, 20%);\n}\nblockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtcHJldmlldy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDRSxlQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJDQ1k7RURBWixjQ0RhO0FEQ2Y7QUFFRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFFRSxrQkFBQTtFQUNBLG9CQ2xCUTtBRGlCZDtBQUlJO0VBQ0UsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7QUFGTjtBQUtJO0VBQ0UsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUFITjtBQU9FO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBTEoiLCJmaWxlIjoicXVvdGUtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZmxleC1iYXNpczogNTAlO1xufVxuXG5ibG9ja3F1b3RlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjOGNjZGRkO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbmJsb2NrcXVvdGUgc3Ryb25nIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuYmxvY2txdW90ZSBzdHJvbmc6YWZ0ZXIsIGJsb2NrcXVvdGUgc3Ryb25nOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IFwiaWNvbnNcIjtcbn1cbmJsb2NrcXVvdGUgc3Ryb25nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4p2dXCI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwJSk7XG59XG5ibG9ja3F1b3RlIHN0cm9uZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwi7qCAXCI7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMjAlKTtcbn1cbmJsb2NrcXVvdGUgY2l0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iLCIvLyB0eXBvZ3JhcGh5XG4kZm9udDogQ2FsaWJyaTtcbiRmb250X19zaXplOiAxNnB4OyAvLyAxNHB4O1xuJGZvbnRfX2ZhbGxiYWNrOiBzYW5zLXNlcmlmO1xuJGZvbnRfX3ByaW1hcnk6ICdTb3VyY2VTYW5zUHJvJywgJGZvbnRfX2ZhbGxiYWNrO1xuJGZvbnRfX2ljb25zOiAnaWNvbnMnO1xuXG4vLyBjb2xvcnNcbiRjb2xvcl9fYmxhY2s6ICMwMDAwMDA7XG4kY29sb3JfX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX19ibHVlOiAjOGNjZGRkO1xuJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms6ICM3Y2I2YzQ7XG4kY29sb3JfX2JsdWVfZGFyazogIzY0OTI5RTtcbiRjb2xvcl9fZXJyb3I6ICNmZjczNzM7XG4kY29sb3JfX2Rpc2FibGVkOiAjOTRiMmI5O1xuJGNvbG9yX19saWdodF9ncmF5OiAjYzdlNmVlO1xuLy8jXG5cbiRib3JkZXJfX3NpemU6IDJweDtcbiRib3JkZXJfX3JhZGl1czogMTBweDtcblxuJHNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcblxuLy8gYnJlYWtwb2ludHNcbiRicmVha3BvaW50X19zbTogMzIwcHg7XG4kYnJlYWtwb2ludF9fc21fbDogNDgwcHg7IC8vIDUwMHB4XG4kYnJlYWtwb2ludF9fbWRfczogNjIwcHg7XG4kYnJlYWtwb2ludF9fbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnRfX21kX2w6IDEwODBweDsgLy8gOTIwcHhcbiRicmVha3BvaW50X19sZzogMTI4MHB4O1xuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "GaGK":
/*!***********************************************!*\
  !*** ./src/app/quote/quote-routing.module.ts ***!
  \***********************************************/
/*! exports provided: QuoteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteRoutingModule", function() { return QuoteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "trG8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["QuoteContainerComponent"],
    },
];
class QuoteRoutingModule {
}
QuoteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: QuoteRoutingModule });
QuoteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function QuoteRoutingModule_Factory(t) { return new (t || QuoteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuoteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "I6y0":
/*!*******************************************************************************!*\
  !*** ./src/app/quote/components/quote-container/quote-container.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuoteContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteContainerComponent", function() { return QuoteContainerComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quote-share-modal/quote-share-modal.component */ "OWr9");
/* harmony import */ var _view_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view.models */ "yHeB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-smart-modal */ "bqtT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quote/quote.component */ "Lw4S");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ "668k");











function QuoteContainerComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-quote", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteContainerComponent_ng_container_0_ng_container_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.getRandomQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteContainerComponent_ng_container_0_ng_container_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const quote_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.openShareModal(quote_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const quote_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("quote", quote_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@isClicked", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, ctx_r4.isRefreshBtnClicked$) ? "isClicked" : "");
} }
function QuoteContainerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QuoteContainerComponent_ng_container_0_ng_container_1_Template, 6, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r0.isLoading$))("ngIfElse", _r1);
} }
function QuoteContainerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader");
} }
class QuoteContainerComponent {
    constructor(quoteService, modalService) {
        this.quoteService = quoteService;
        this.modalService = modalService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isRefreshBtnClicked$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isRefreshBtnClicked$ = this.isRefreshBtnClicked$$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.quote$ = this.quoteService.quote$;
        this.isLoading$ = this.quoteService.isLoading$;
    }
    handleDoubleClick() {
        this.getRandomQuote();
    }
    ngOnInit() {
        this.quoteService.getRandom().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
        this.quote$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.isRefreshBtnClicked$$.next(false))).subscribe();
        this.isRefreshBtnClicked$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.quoteService.getRandom())).subscribe();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    getRandomQuote() {
        this.isRefreshBtnClicked$$.next(true);
    }
    openShareModal(quote) {
        this.listenToShareModalEvents(this.createAndOpenShareModalWithData(quote));
    }
    createAndOpenShareModalWithData(quote) {
        return this.modalService
            .create(_view_models__WEBPACK_IMPORTED_MODULE_4__["ModalIds"].quoteShare, _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_3__["QuoteShareModalComponent"], {
            customClass: 'share-modal',
        })
            .setData({ quote })
            .open();
    }
    listenToShareModalEvents(modal) {
        // Listen to modal result
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            modal.onClose,
            modal.onDataAdded,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([, data]) => {
            if (data) {
                const { quote, email, phone } = data;
                return this.quoteService.share(quote, email ? { email } : { phone });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
        // Destroy modal after its close/dismiss to not duplicate its instances within modalService
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["race"])(modal.onCloseFinished, modal.onDismissFinished)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modalService.removeModal(_view_models__WEBPACK_IMPORTED_MODULE_4__["ModalIds"].quoteShare))).subscribe();
    }
}
QuoteContainerComponent.ɵfac = function QuoteContainerComponent_Factory(t) { return new (t || QuoteContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"])); };
QuoteContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QuoteContainerComponent, selectors: [["app-quote-container"]], hostBindings: function QuoteContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function QuoteContainerComponent_dblclick_HostBindingHandler() { return ctx.handleDoubleClick(); });
    } }, decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], [3, "quote"], [1, "quote-actions"], ["title", "Get another Quote", 1, "get-quote-btn", 3, "click"], ["title", "Share", 1, "share-quote-btn", 3, "click"]], template: function QuoteContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QuoteContainerComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QuoteContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.quote$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _quote_quote_component__WEBPACK_IMPORTED_MODULE_9__["QuoteComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n}\n\n.quote-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  outline: none;\n  right: 80px;\n  top: 120px;\n}\n\n.get-quote-btn[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 5px;\n  top: 0;\n  width: 36px;\n  height: 36px;\n  background: url('refresh.svg') no-repeat center center;\n}\n\n@media (max-width: 620px) {\n  .get-quote-btn[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 20px;\n  }\n}\n\n.share-quote-btn[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 5px;\n  top: 0;\n  width: 36px;\n  height: 36px;\n  background: url('share.svg') no-repeat center center;\n}\n\n@media (max-width: 620px) {\n  .share-quote-btn[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NKYTtBREFmOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0F6QlM7RUEwQlQsWUExQlM7RUEyQlQsc0RBQUE7QUFKRjs7QUVMRTtFRkdGO0lBU0ksV0FBQTtJQUNBLFNBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBdkNTO0VBd0NULFlBeENTO0VBeUNULG9EQUFBO0FBSEY7O0FFcEJFO0VGaUJGO0lBU0ksV0FBQTtJQUNBLFNBQUE7RUFGRjtBQUNGIiwiZmlsZSI6InF1b3RlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c2Nzcy92YXJpYWJsZXNcIjtcblxuJGJ0bi1zaXplOiAzNnB4O1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJGNvbG9yX193aGl0ZTtcbn1cblxuLnF1b3RlLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJpZ2h0OiA4MHB4O1xuICB0b3A6IDEyMHB4O1xufVxuXG4uZ2V0LXF1b3RlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1cHg7XG4gIHRvcDogMDtcbiAgd2lkdGg6ICRidG4tc2l6ZTtcbiAgaGVpZ2h0OiAkYnRuLXNpemU7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N0YXRpYy9yZWZyZXNoLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuXG4gIEBpbmNsdWRlIG1kX3Mge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMjBweDtcbiAgfVxufVxuXG4uc2hhcmUtcXVvdGUtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDVweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogJGJ0bi1zaXplO1xuICBoZWlnaHQ6ICRidG4tc2l6ZTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3RhdGljL3NoYXJlLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuXG4gIEBpbmNsdWRlIG1kX3Mge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMjBweDtcbiAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWRfbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWRfbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9zIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9zKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtX2wge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX3NtX2wpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('isClicked', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('isClicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(360deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isClicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')),
            ]),
        ] }, changeDetection: 0 });


/***/ }),

/***/ "Lw4S":
/*!***********************************************************!*\
  !*** ./src/app/quote/components/quote/quote.component.ts ***!
  \***********************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function QuoteComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "blockquote", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.quote.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9", ctx_r0.quote.author, "");
} }
class QuoteComponent {
}
QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(); };
QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], inputs: { quote: "quote" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "quote"], [1, "quote__blockquote"]], template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuoteComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@charset \"UTF-8\";\n.quote[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.quote__blockquote[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  padding: 190px 190px 190px;\n}\n@media (max-width: 1080px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 155px 155px 155px;\n  }\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 155px 155px 155px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 110px 110px 110px;\n  }\n}\n@media (max-width: 480px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 80px 15px 80px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n  font-family: \"icons\";\n  position: absolute;\n  font-size: 150px;\n  opacity: 0.5;\n}\n@media (max-width: 1080px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 120px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 100px;\n  }\n}\n@media (max-width: 480px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 60px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]::before {\n  content: \"\u275D\";\n  left: 0;\n  top: 0;\n}\n.quote__blockquote[_ngcontent-%COMP%]::after {\n  content: \"\uE800\";\n  right: 0;\n  bottom: 0;\n}\n.quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 40px;\n  text-align: justify;\n  line-height: 50px;\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 35px;\n    line-height: 40px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 30px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 35px;\n  line-height: 60px;\n  text-align: right;\n  display: block;\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n    line-height: 40px;\n    font-size: 30px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcbWl4aW5zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBY2hCO0VBQ0UsaUJBWlU7QUFBWjtBQWNFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFaSjtBQ09FO0VERUE7SUFNSSwwQkFBQTtFQVhKO0FBQ0Y7QUNWRTtFRGNBO0lBVUksMEJBQUE7RUFWSjtBQUNGO0FDR0U7RURKQTtJQWNJLDBCQUFBO0VBVEo7QUFDRjtBQ0lFO0VEVkE7SUFrQkksdUJBQUE7RUFSSjtBQUNGO0FBVUk7RUFFRSxvQkVuQ1E7RUZvQ1Isa0JBQUE7RUFDQSxnQkFqQ21CO0VBa0NuQixZQUFBO0FBVE47QUNuQkU7RUR1QkU7SUFRSSxnQkFwQ2U7RUE0QnJCO0FBQ0Y7QUNsQkU7RURpQkU7SUFZSSxnQkF2Q2U7RUFnQ3JCO0FBQ0Y7QUNqQkU7RURXRTtJQWdCSSxlQTFDZTtFQW9DckI7QUFDRjtBQVNJO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBUE47QUFVSTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVJOO0FBYUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVhKO0FDN0RFO0VEcUVBO0lBTUksZUFBQTtJQUNBLGlCQUFBO0VBVko7QUFDRjtBQ2pERTtFRG1EQTtJQVdJLGVBQUE7SUFDQSxpQkFBQTtFQVRKO0FBQ0Y7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWEo7QUNoRkU7RURzRkE7SUFRSSxpQkFBQTtJQUNBLGVBQUE7RUFWSjtBQUNGO0FDcEVFO0VEb0VBO0lBYUksZUFBQTtJQUNBLGlCQUFBO0VBVEo7QUFDRiIsImZpbGUiOiJxdW90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5xdW90ZSB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xufVxuLnF1b3RlX19ibG9ja3F1b3RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTkwcHggMTkwcHggMTkwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZSB7XG4gICAgcGFkZGluZzogMTU1cHggMTU1cHggMTU1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGUge1xuICAgIHBhZGRpbmc6IDE1NXB4IDE1NXB4IDE1NXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlIHtcbiAgICBwYWRkaW5nOiAxMTBweCAxMTBweCAxMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZSB7XG4gICAgcGFkZGluZzogODBweCAxNXB4IDgwcHg7XG4gIH1cbn1cbi5xdW90ZV9fYmxvY2txdW90ZTo6YmVmb3JlLCAucXVvdGVfX2Jsb2NrcXVvdGU6OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiaWNvbnNcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE1MHB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZTo6YmVmb3JlLCAucXVvdGVfX2Jsb2NrcXVvdGU6OmFmdGVyIHtcbiAgICBmb250LXNpemU6IDEyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlOjpiZWZvcmUsIC5xdW90ZV9fYmxvY2txdW90ZTo6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGU6OmJlZm9yZSwgLnF1b3RlX19ibG9ja3F1b3RlOjphZnRlciB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICB9XG59XG4ucXVvdGVfX2Jsb2NrcXVvdGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4p2dXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5xdW90ZV9fYmxvY2txdW90ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIu6ggFwiO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuLnF1b3RlX19ibG9ja3F1b3RlIHAge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZSBwIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGUgcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG59XG4ucXVvdGVfX2Jsb2NrcXVvdGUgY2l0ZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGUgY2l0ZSB7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlIGNpdGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgfVxufSIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWRfbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWRfbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9zIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9zKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtX2wge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX3NtX2wpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "OWr9":
/*!***********************************************************************************!*\
  !*** ./src/app/quote/components/quote-share-modal/quote-share-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: QuoteShareModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteShareModalComponent", function() { return QuoteShareModalComponent; });
/* harmony import */ var _view_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view.models */ "yHeB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-smart-modal */ "bqtT");
/* harmony import */ var _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quote-preview/quote-preview.component */ "6U+y");
/* harmony import */ var _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share-form/share-form.component */ "VgV8");





class QuoteShareModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        this.modal = this.modalService.get(_view_models__WEBPACK_IMPORTED_MODULE_0__["ModalIds"].quoteShare);
        const { quote } = this.modal.getData();
        this.quote = quote;
    }
    onShareSubmit(contactData) {
        this.modal.setData(Object.assign({ quote: this.quote }, contactData), true);
        this.modal.close();
    }
    onShareCancel() {
        this.modal.setData(null, true);
        this.modal.close();
    }
}
QuoteShareModalComponent.ɵfac = function QuoteShareModalComponent_Factory(t) { return new (t || QuoteShareModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"])); };
QuoteShareModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuoteShareModalComponent, selectors: [["app-share-modal"]], decls: 2, vars: 1, consts: [[3, "quote"], [3, "shareSubmit", "shareCancel"]], template: function QuoteShareModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-quote-preview", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-share-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("shareSubmit", function QuoteShareModalComponent_Template_app_share_form_shareSubmit_1_listener($event) { return ctx.onShareSubmit($event); })("shareCancel", function QuoteShareModalComponent_Template_app_share_form_shareCancel_1_listener() { return ctx.onShareCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("quote", ctx.quote);
    } }, directives: [_quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__["QuotePreviewComponent"], _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__["ShareFormComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n  }\n}\n  .share-modal {\n  max-width: 768px;\n}\n  .share-modal .nsm-content {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcbWl4aW5zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0FBRkY7QUNDRTtFREFGO0lBSUksc0JBQUE7RUFERjtBQUNGO0FBS0U7RUFDRSxnQkVjYTtBRmhCakI7QUFJSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBRk4iLCJmaWxlIjoicXVvdGUtc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfnNjc3MvbWl4aW5zJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIEBpbmNsdWRlIG1kIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5zaGFyZS1tb2RhbCB7XG4gICAgbWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWQ7XG5cbiAgICAubnNtLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWRfbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWRfbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9zIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9zKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtX2wge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX3NtX2wpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "VgV8":
/*!*********************************************************************!*\
  !*** ./src/app/quote/components/share-form/share-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShareFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareFormComponent", function() { return ShareFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ "QlUG");







function ShareFormComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ShareFormComponent_ng_container_5_Template_app_button_clicked_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const shareOption_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectShareOption(shareOption_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const shareOption_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.isShareOptionActive(shareOption_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", shareOption_r2.title);
} }
function ShareFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "share")("type", ctx_r1.selectedShareOption.inputType)("form", ctx_r1.form)("placeholder", ctx_r1.selectedShareOption.placeholder);
} }
// eslint-disable-next-line max-len
const EMAIL_REG_EX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class ShareFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.shareOptions = [
            {
                type: 'email',
                inputType: 'email',
                title: 'Email',
                placeholder: 'email@example.com',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(EMAIL_REG_EX),
                ],
            },
            {
                type: 'phone',
                inputType: 'tel',
                title: 'Phone',
                placeholder: '+380999998877',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)],
            },
        ];
        this.selectedShareOption = this.shareOptions[0];
        this.shareSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shareCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectShareOption(this.selectedShareOption);
    }
    ngOnInit() {
        this.form = this.fb.group({
            ['share']: this.shareFormControl,
        });
    }
    selectShareOption(shareOption) {
        this.selectedShareOption = shareOption;
        if (this.shareFormControl) {
            this.form.controls['share'].setValidators(shareOption.validators);
            this.shareFormControl.setValue('');
            return;
        }
        this.shareFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', shareOption.validators);
    }
    isShareOptionActive(shareOption) {
        return this.selectedShareOption === shareOption;
    }
    submit() {
        if (!this.isShareFormValid) {
            return;
        }
        this.shareSubmit.emit({ [this.selectedShareOption.type]: this.shareFormControl.value });
    }
    dismiss() {
        this.shareCancel.emit();
    }
    get isShareFormValid() {
        return this.shareFormControl && this.shareFormControl.valid;
    }
}
ShareFormComponent.ɵfac = function ShareFormComponent_Factory(t) { return new (t || ShareFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ShareFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShareFormComponent, selectors: [["app-share-form"]], outputs: { shareSubmit: "shareSubmit", shareCancel: "shareCancel" }, decls: 11, vars: 7, consts: [[1, "share-form-wrapper"], [1, "toggler-wrapper"], [1, "toggler-wrapper-options"], [4, "ngFor", "ngForOf"], ["class", "form-control-wrapper", 4, "ngIf"], [1, "button-wrapper"], ["type", "submit", 3, "disabled", "label", "clicked"], [3, "label", "clicked"], [1, "form-control-wrapper"], [3, "formGroup"], [3, "id", "type", "form", "placeholder"]], template: function ShareFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Share via:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShareFormComponent_ng_container_5_Template, 2, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShareFormComponent_div_7_Template, 4, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ShareFormComponent_Template_app_button_clicked_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ShareFormComponent_Template_app_button_clicked_10_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shareOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedShareOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isShareFormValid)("label", "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("cancel-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Dismiss");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 50%;\n  padding: 20px;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: auto;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-right: auto;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%]     app-button button {\n  border-radius: 0;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%]     app-button.active button {\n  background: #64929E;\n}\n\n.button-wrapper[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: flex-end;\n}\n\n.button-wrapper[_ngcontent-%COMP%]     app-button:first-child {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmUtZm9ybS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0k7RUFDRSxtQkFBQTtBQUROOztBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZOOztBQU1VO0VBQ0UsZ0JBQUE7QUFKWjs7QUFPVTtFQUNFLG1CQ3ZCTztBRGtCbkI7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FBVkY7O0FBYUk7RUFDRSxrQkFBQTtBQVhOIiwiZmlsZSI6InNoYXJlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNjc3MvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogNTAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2hhcmUtZm9ybS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcblxuICAudG9nZ2xlci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBsYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgICYtb3B0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIGFwcC1idXR0b24ge1xuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYWN0aXZlIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl9fYmx1ZV9kYXJrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblxuICA6Om5nLWRlZXAge1xuICAgIGFwcC1idXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4iLCIvLyB0eXBvZ3JhcGh5XG4kZm9udDogQ2FsaWJyaTtcbiRmb250X19zaXplOiAxNnB4OyAvLyAxNHB4O1xuJGZvbnRfX2ZhbGxiYWNrOiBzYW5zLXNlcmlmO1xuJGZvbnRfX3ByaW1hcnk6ICdTb3VyY2VTYW5zUHJvJywgJGZvbnRfX2ZhbGxiYWNrO1xuJGZvbnRfX2ljb25zOiAnaWNvbnMnO1xuXG4vLyBjb2xvcnNcbiRjb2xvcl9fYmxhY2s6ICMwMDAwMDA7XG4kY29sb3JfX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX19ibHVlOiAjOGNjZGRkO1xuJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms6ICM3Y2I2YzQ7XG4kY29sb3JfX2JsdWVfZGFyazogIzY0OTI5RTtcbiRjb2xvcl9fZXJyb3I6ICNmZjczNzM7XG4kY29sb3JfX2Rpc2FibGVkOiAjOTRiMmI5O1xuJGNvbG9yX19saWdodF9ncmF5OiAjYzdlNmVlO1xuLy8jXG5cbiRib3JkZXJfX3NpemU6IDJweDtcbiRib3JkZXJfX3JhZGl1czogMTBweDtcblxuJHNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcblxuLy8gYnJlYWtwb2ludHNcbiRicmVha3BvaW50X19zbTogMzIwcHg7XG4kYnJlYWtwb2ludF9fc21fbDogNDgwcHg7IC8vIDUwMHB4XG4kYnJlYWtwb2ludF9fbWRfczogNjIwcHg7XG4kYnJlYWtwb2ludF9fbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnRfX21kX2w6IDEwODBweDsgLy8gOTIwcHhcbiRicmVha3BvaW50X19sZzogMTI4MHB4O1xuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "trG8":
/*!*******************************************!*\
  !*** ./src/app/quote/components/index.ts ***!
  \*******************************************/
/*! exports provided: QuoteComponent, QuoteContainerComponent, QuoteShareModalComponent, QuotePreviewComponent, ShareFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote/quote.component */ "Lw4S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return _quote_quote_component__WEBPACK_IMPORTED_MODULE_0__["QuoteComponent"]; });

/* harmony import */ var _quote_container_quote_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote-container/quote-container.component */ "I6y0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuoteContainerComponent", function() { return _quote_container_quote_container_component__WEBPACK_IMPORTED_MODULE_1__["QuoteContainerComponent"]; });

/* harmony import */ var _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote-share-modal/quote-share-modal.component */ "OWr9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuoteShareModalComponent", function() { return _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"]; });

/* harmony import */ var _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote-preview/quote-preview.component */ "6U+y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuotePreviewComponent", function() { return _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__["QuotePreviewComponent"]; });

/* harmony import */ var _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share-form/share-form.component */ "VgV8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareFormComponent", function() { return _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__["ShareFormComponent"]; });








/***/ })

}]);
//# sourceMappingURL=quote-quote-module-es2015.js.map