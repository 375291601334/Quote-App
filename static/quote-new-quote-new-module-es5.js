(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-new-quote-new-module"], {
    /***/
    "BNVj":
    /*!*******************************************************************************************!*\
      !*** ./src/app/quote-new/components/quote-new-container/quote-new-container.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: QuoteNewContainerComponent */

    /***/
    function BNVj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteNewContainerComponent", function () {
        return QuoteNewContainerComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_routing_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../app-routing.config */
      "frgL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services */
      "o0su");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_quote_edit_form_quote_edit_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/quote-edit-form/quote-edit-form.component */
      "QQ6w");
      /* harmony import */


      var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/loader/loader.component */
      "668k");

      function QuoteNewContainerComponent_app_quote_edit_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-quote-edit-form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submitted", function QuoteNewContainerComponent_app_quote_edit_form_0_Template_app_quote_edit_form_submitted_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.createQuote($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function QuoteNewContainerComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader");
        }
      }

      var QuoteNewContainerComponent = /*#__PURE__*/function () {
        function QuoteNewContainerComponent(quoteService, router) {
          _classCallCheck(this, QuoteNewContainerComponent);

          this.quoteService = quoteService;
          this.router = router;
          this.isLoading$ = this.quoteService.isLoading$;
        }

        _createClass(QuoteNewContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createQuote",
          value: function createQuote(quote) {
            var _this = this;

            this.quoteService.create(quote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () {
              return _this.router.navigate([_app_routing_config__WEBPACK_IMPORTED_MODULE_1__["RoutesPaths"].quotes]);
            })).subscribe();
          }
        }]);

        return QuoteNewContainerComponent;
      }();

      QuoteNewContainerComponent.ɵfac = function QuoteNewContainerComponent_Factory(t) {
        return new (t || QuoteNewContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      QuoteNewContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: QuoteNewContainerComponent,
        selectors: [["app-quote-new-container"]],
        decls: 4,
        vars: 4,
        consts: [[3, "submitted", 4, "ngIf", "ngIfElse"], ["loader", ""], [3, "submitted"]],
        template: function QuoteNewContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuoteNewContainerComponent_app_quote_edit_form_0_Template, 1, 0, "app-quote-edit-form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuoteNewContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.isLoading$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_quote_edit_form_quote_edit_form_component__WEBPACK_IMPORTED_MODULE_6__["QuoteEditFormComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtbmV3LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoicXVvdGUtbmV3LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xufVxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "ByUV":
    /*!***********************************************!*\
      !*** ./src/app/quote-new/quote-new.module.ts ***!
      \***********************************************/

    /*! exports provided: QuoteNewModule */

    /***/
    function ByUV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteNewModule", function () {
        return QuoteNewModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components */
      "SMUp");
      /* harmony import */


      var _quote_new_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quote-new-routing.module */
      "PSuc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteNewContainerComponent"]];

      var QuoteNewModule = function QuoteNewModule() {
        _classCallCheck(this, QuoteNewModule);
      };

      QuoteNewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: QuoteNewModule
      });
      QuoteNewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function QuoteNewModule_Factory(t) {
          return new (t || QuoteNewModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _quote_new_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteNewRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuoteNewModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteNewContainerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _quote_new_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteNewRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "PSuc":
    /*!*******************************************************!*\
      !*** ./src/app/quote-new/quote-new-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: QuoteNewRoutingModule */

    /***/
    function PSuc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteNewRoutingModule", function () {
        return QuoteNewRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components */
      "SMUp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'new',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["QuoteNewContainerComponent"]
      }];

      var QuoteNewRoutingModule = function QuoteNewRoutingModule() {
        _classCallCheck(this, QuoteNewRoutingModule);
      };

      QuoteNewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: QuoteNewRoutingModule
      });
      QuoteNewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function QuoteNewRoutingModule_Factory(t) {
          return new (t || QuoteNewRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuoteNewRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "SMUp":
    /*!***********************************************!*\
      !*** ./src/app/quote-new/components/index.ts ***!
      \***********************************************/

    /*! exports provided: QuoteNewContainerComponent */

    /***/
    function SMUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _quote_new_container_quote_new_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quote-new-container/quote-new-container.component */
      "BNVj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteNewContainerComponent", function () {
        return _quote_new_container_quote_new_container_component__WEBPACK_IMPORTED_MODULE_0__["QuoteNewContainerComponent"];
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=quote-new-quote-new-module-es5.js.map