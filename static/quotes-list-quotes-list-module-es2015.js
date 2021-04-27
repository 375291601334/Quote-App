(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-list-quotes-list-module"],{

/***/ "AP/m":
/*!***************************************************!*\
  !*** ./src/app/quotes-list/quotes-list.module.ts ***!
  \***************************************************/
/*! exports provided: QuotesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesListModule", function() { return QuotesListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "SZXg");
/* harmony import */ var _quotes_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes-list-routing.module */ "jF8K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_2__["QuotesListContainerComponent"],
    _components__WEBPACK_IMPORTED_MODULE_2__["QuotesListTableComponent"],
    _components__WEBPACK_IMPORTED_MODULE_2__["DeleteQuoteModalComponent"],
];
class QuotesListModule {
}
QuotesListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: QuotesListModule });
QuotesListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function QuotesListModule_Factory(t) { return new (t || QuotesListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _quotes_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuotesListRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuotesListModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["QuotesListContainerComponent"],
        _components__WEBPACK_IMPORTED_MODULE_2__["QuotesListTableComponent"],
        _components__WEBPACK_IMPORTED_MODULE_2__["DeleteQuoteModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _quotes_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuotesListRoutingModule"]] }); })();


/***/ }),

/***/ "MeOC":
/*!*************************************************************************************************!*\
  !*** ./src/app/quotes-list/components/quotes-list-container/quotes-list-container.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: QuotesListContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesListContainerComponent", function() { return QuotesListContainerComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _quotes_list_container_models_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotes-list-container.models.rules */ "cg3A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var _quotes_list_table_quotes_list_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quotes-list-table/quotes-list-table.component */ "w31n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







class QuotesListContainerComponent {
    constructor(quoteService) {
        this.quoteService = quoteService;
        this.quotes$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.quotes$ = this.quotes$$.asObservable();
        this.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe();
    }
    getAll() {
        return this.quoteService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((quotes) => Object(_quotes_list_container_models_rules__WEBPACK_IMPORTED_MODULE_2__["filterDeleted"])(quotes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_quotes_list_container_models_rules__WEBPACK_IMPORTED_MODULE_2__["getTableData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => this.quotes$$.next(data)));
    }
    deleteById(id) {
        this.quoteService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => this.getAll())).subscribe();
    }
}
QuotesListContainerComponent.ɵfac = function QuotesListContainerComponent_Factory(t) { return new (t || QuotesListContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["QuoteService"])); };
QuotesListContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QuotesListContainerComponent, selectors: [["app-quotes-list-container"]], decls: 2, vars: 3, consts: [[3, "data", "delete"]], template: function QuotesListContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-quotes-list-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("delete", function QuotesListContainerComponent_Template_app_quotes_list_table_delete_0_listener($event) { return ctx.deleteById($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.quotes$));
    } }, directives: [_quotes_list_table_quotes_list_table_component__WEBPACK_IMPORTED_MODULE_5__["QuotesListTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGVzLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJxdW90ZXMtbGlzdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "SZXg":
/*!*************************************************!*\
  !*** ./src/app/quotes-list/components/index.ts ***!
  \*************************************************/
/*! exports provided: QuotesListContainerComponent, QuotesListTableComponent, DeleteQuoteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quotes_list_container_quotes_list_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotes-list-container/quotes-list-container.component */ "MeOC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuotesListContainerComponent", function() { return _quotes_list_container_quotes_list_container_component__WEBPACK_IMPORTED_MODULE_0__["QuotesListContainerComponent"]; });

/* harmony import */ var _quotes_list_table_quotes_list_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes-list-table/quotes-list-table.component */ "w31n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuotesListTableComponent", function() { return _quotes_list_table_quotes_list_table_component__WEBPACK_IMPORTED_MODULE_1__["QuotesListTableComponent"]; });

/* harmony import */ var _delete_quote_modal_delete_quote_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-quote-modal/delete-quote-modal.component */ "j3pv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteQuoteModalComponent", function() { return _delete_quote_modal_delete_quote_modal_component__WEBPACK_IMPORTED_MODULE_2__["DeleteQuoteModalComponent"]; });






/***/ }),

/***/ "cg3A":
/*!****************************************************************************************************!*\
  !*** ./src/app/quotes-list/components/quotes-list-container/quotes-list-container.models.rules.ts ***!
  \****************************************************************************************************/
/*! exports provided: getTableData, getQuoteFromTableDataSource, filterDeleted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableData", function() { return getTableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuoteFromTableDataSource", function() { return getQuoteFromTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDeleted", function() { return filterDeleted; });
function getTableData(data) {
    return data.map(({ text, author, id }) => {
        return {
            id: {
                value: id,
            },
            text: {
                value: text,
            },
            author: {
                value: author,
            },
        };
    });
}
function getQuoteFromTableDataSource(tableData) {
    return {
        id: tableData.id.value,
        text: tableData.text.value,
        author: tableData.author.value,
    };
}
function filterDeleted(quotes) {
    return quotes.filter((quote) => !quote.isDeleted);
}


/***/ }),

/***/ "j3pv":
/*!*******************************************************************************************!*\
  !*** ./src/app/quotes-list/components/delete-quote-modal/delete-quote-modal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DeleteQuoteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQuoteModalComponent", function() { return DeleteQuoteModalComponent; });
/* harmony import */ var _quote_components_view_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../quote/components/view.models */ "yHeB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-smart-modal */ "bqtT");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ "VkHG");




class DeleteQuoteModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        this.modal = this.modalService.get(_quote_components_view_models__WEBPACK_IMPORTED_MODULE_0__["ModalIds"].deleteQuote);
        this.quoteIdToDelete = this.modal.getData();
    }
    deleteQuote() {
        this.modal.setData(this.quoteIdToDelete, true);
        this.modal.close();
    }
    cancel() {
        this.modal.setData(null, true);
        this.modal.close();
    }
}
DeleteQuoteModalComponent.ɵfac = function DeleteQuoteModalComponent_Factory(t) { return new (t || DeleteQuoteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"])); };
DeleteQuoteModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteQuoteModalComponent, selectors: [["app-delete-quote-modal"]], decls: 5, vars: 0, consts: [[1, "button-wrapper"], ["label", "Yes", 3, "clicked"], ["label", "Cancel", 1, "cancel-btn", 3, "clicked"]], template: function DeleteQuoteModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Are you sure you want to delete this quote ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function DeleteQuoteModalComponent_Template_app_button_clicked_3_listener() { return ctx.deleteQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function DeleteQuoteModalComponent_Template_app_button_clicked_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: [".button-wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.button-wrapper[_ngcontent-%COMP%]     app-button:first-child {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGVsZXRlLXF1b3RlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNJO0VBQ0Usa0JBQUE7QUFDTiIsImZpbGUiOiJkZWxldGUtcXVvdGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICA6Om5nLWRlZXAge1xuICAgIGFwcC1idXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "jF8K":
/*!***********************************************************!*\
  !*** ./src/app/quotes-list/quotes-list-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: QuotesListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesListRoutingModule", function() { return QuotesListRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "SZXg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["QuotesListContainerComponent"],
    },
];
class QuotesListRoutingModule {
}
QuotesListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: QuotesListRoutingModule });
QuotesListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function QuotesListRoutingModule_Factory(t) { return new (t || QuotesListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuotesListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w31n":
/*!*****************************************************************************************!*\
  !*** ./src/app/quotes-list/components/quotes-list-table/quotes-list-table.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: QuotesListTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesListTableComponent", function() { return QuotesListTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _app_routing_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-routing.config */ "frgL");
/* harmony import */ var _quote_components_view_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../quote/components/view.models */ "yHeB");
/* harmony import */ var _delete_quote_modal_delete_quote_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../delete-quote-modal/delete-quote-modal.component */ "j3pv");
/* harmony import */ var _quotes_list_container_quotes_list_container_models_rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../quotes-list-container/quotes-list-container.models.rules */ "cg3A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-smart-modal */ "bqtT");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/table/table.component */ "Xv+k");
/* harmony import */ var _shared_directives_template_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directives/template.directive */ "Rfgh");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ "668k");
















function QuotesListTableComponent_app_table_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuotesListTableComponent_app_table_0_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const row_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.editQuote(row_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuotesListTableComponent_app_table_0_ng_template_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const row_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.deleteQuote(row_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuotesListTableComponent_app_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuotesListTableComponent_app_table_0_ng_template_1_Template, 4, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx_r0.data)("columns", ctx_r0.columns);
} }
function QuotesListTableComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class QuotesListTableComponent {
    constructor(router, modalService, quoteService) {
        this.router = router;
        this.modalService = modalService;
        this.quoteService = quoteService;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columns = [
            {
                label: 'Text',
                key: 'text',
            },
            {
                label: 'Author',
                key: 'author',
            },
        ];
        this.isControlCellAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrls.quote;
        this.isLoading$ = this.quoteService.isLoading$;
        if (this.isControlCellAvailable) {
            this.columns.push({
                label: 'Action',
                key: 'action',
            });
        }
    }
    editQuote(row) {
        const { id } = Object(_quotes_list_container_quotes_list_container_models_rules__WEBPACK_IMPORTED_MODULE_7__["getQuoteFromTableDataSource"])(row);
        this.router.navigate([`/${_app_routing_config__WEBPACK_IMPORTED_MODULE_4__["RoutesPaths"].quotes}`, _app_routing_config__WEBPACK_IMPORTED_MODULE_4__["RoutesPaths"].edit, id]);
    }
    deleteQuote(row) {
        const { id } = Object(_quotes_list_container_quotes_list_container_models_rules__WEBPACK_IMPORTED_MODULE_7__["getQuoteFromTableDataSource"])(row);
        this.listenToShareModalEvents(this.createAndOpenDeleteQuoteModal(id));
    }
    createAndOpenDeleteQuoteModal(id) {
        return this.modalService
            .create(_quote_components_view_models__WEBPACK_IMPORTED_MODULE_5__["ModalIds"].deleteQuote, _delete_quote_modal_delete_quote_modal_component__WEBPACK_IMPORTED_MODULE_6__["DeleteQuoteModalComponent"])
            .setData(id)
            .open();
    }
    listenToShareModalEvents(modal) {
        // Listen to modal result
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            modal.onClose,
            modal.onDataAdded,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([, id]) => {
            if (id) {
                this.delete.emit(id);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
        // Destroy modal after its close/dismiss to not duplicate its instances within modalService
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["race"])(modal.onCloseFinished, modal.onDismissFinished)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modalService.removeModal(_quote_components_view_models__WEBPACK_IMPORTED_MODULE_5__["ModalIds"].deleteQuote))).subscribe();
    }
}
QuotesListTableComponent.ɵfac = function QuotesListTableComponent_Factory(t) { return new (t || QuotesListTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__["NgxSmartModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["QuoteService"])); };
QuotesListTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuotesListTableComponent, selectors: [["app-quotes-list-table"]], inputs: { data: "data" }, outputs: { delete: "delete" }, decls: 4, vars: 4, consts: [[3, "tableData", "columns", 4, "ngIf", "ngIfElse"], ["loader", ""], [3, "tableData", "columns"], ["name", "control-cell"], [3, "click"]], template: function QuotesListTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuotesListTableComponent_app_table_0_Template, 2, 2, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuotesListTableComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.isLoading$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"], _shared_directives_template_directive__WEBPACK_IMPORTED_MODULE_13__["TemplateDirective"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\napp-table[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin: 20px;\n}\n\napp-table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  margin-right: 10px;\n}\n\napp-table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\napp-table[_ngcontent-%COMP%]     table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGVzLWxpc3QtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDRSwwQkFBQTtBQUNOOztBQUlJO0VBQ0UsV0FBQTtBQUZOIiwiZmlsZSI6InF1b3Rlcy1saXN0LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbmFwcC10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=quotes-list-quotes-list-module-es2015.js.map