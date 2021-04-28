(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-quote-module"], {
    /***/
    "3gGh":
    /*!***************************************!*\
      !*** ./src/app/quote/quote.module.ts ***!
      \***************************************/

    /*! exports provided: QuoteModule */

    /***/
    function gGh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteModule", function () {
        return QuoteModule;
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
      "trG8");
      /* harmony import */


      var _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quote-routing.module */
      "GaGK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteContainerComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuotePreviewComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ShareFormComponent"]];

      var QuoteModule = function QuoteModule() {
        _classCallCheck(this, QuoteModule);
      };

      QuoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: QuoteModule
      });
      QuoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function QuoteModule_Factory(t) {
          return new (t || QuoteModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuoteModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteContainerComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuotePreviewComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ShareFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "6U+y":
    /*!***************************************************************************!*\
      !*** ./src/app/quote/components/quote-preview/quote-preview.component.ts ***!
      \***************************************************************************/

    /*! exports provided: QuotePreviewComponent */

    /***/
    function UY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuotePreviewComponent", function () {
        return QuotePreviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function QuotePreviewComponent_blockquote_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "cite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA9\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quote.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quote.author);
        }
      }

      var QuotePreviewComponent = function QuotePreviewComponent() {
        _classCallCheck(this, QuotePreviewComponent);
      };

      QuotePreviewComponent.ɵfac = function QuotePreviewComponent_Factory(t) {
        return new (t || QuotePreviewComponent)();
      };

      QuotePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuotePreviewComponent,
        selectors: [["app-quote-preview"]],
        inputs: {
          quote: "quote"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function QuotePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuotePreviewComponent_blockquote_0_Template, 7, 2, "blockquote", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  flex-basis: 50%;\n}\nblockquote[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: 100%;\n  background: #8ccddd;\n  color: #ffffff;\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 26px;\n  text-align: justify;\n  position: relative;\n  display: block;\n  margin-bottom: 20px;\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after, blockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:before {\n  position: absolute;\n  font-family: \"icons\";\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:before {\n  content: \"\u275D\";\n  top: 0;\n  left: 0;\n  transform: translate(-50%, -20%);\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after {\n  content: \"\uE800\";\n  right: 0;\n  bottom: 0;\n  transform: translate(50%, 20%);\n}\nblockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtcHJldmlldy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsZUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQ0NZO0VEQVosY0NEYTtBRENmO0FBRUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBRUUsa0JBQUE7RUFDQSxvQkNsQlE7QURpQmQ7QUFJSTtFQUNFLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0FBRk47QUFLSTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBSE47QUFPRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUxKIiwiZmlsZSI6InF1b3RlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbn1cblxuYmxvY2txdW90ZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzhjY2RkZDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5ibG9ja3F1b3RlIHN0cm9uZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmJsb2NrcXVvdGUgc3Ryb25nOmFmdGVyLCBibG9ja3F1b3RlIHN0cm9uZzpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiBcImljb25zXCI7XG59XG5ibG9ja3F1b3RlIHN0cm9uZzpiZWZvcmUge1xuICBjb250ZW50OiBcIuKdnVwiO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMCUpO1xufVxuYmxvY2txdW90ZSBzdHJvbmc6YWZ0ZXIge1xuICBjb250ZW50OiBcIu6ggFwiO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDIwJSk7XG59XG5ibG9ja3F1b3RlIGNpdGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59IiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "GaGK":
    /*!***********************************************!*\
      !*** ./src/app/quote/quote-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: QuoteRoutingModule */

    /***/
    function GaGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteRoutingModule", function () {
        return QuoteRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components */
      "trG8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["QuoteContainerComponent"]
      }];

      var QuoteRoutingModule = function QuoteRoutingModule() {
        _classCallCheck(this, QuoteRoutingModule);
      };

      QuoteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: QuoteRoutingModule
      });
      QuoteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function QuoteRoutingModule_Factory(t) {
          return new (t || QuoteRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuoteRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "I6y0":
    /*!*******************************************************************************!*\
      !*** ./src/app/quote/components/quote-container/quote-container.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: QuoteContainerComponent */

    /***/
    function I6y0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteContainerComponent", function () {
        return QuoteContainerComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../quote-share-modal/quote-share-modal.component */
      "OWr9");
      /* harmony import */


      var _view_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../view.models */
      "yHeB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services */
      "o0su");
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-smart-modal */
      "bqtT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _quote_quote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../quote/quote.component */
      "Lw4S");
      /* harmony import */


      var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/components/loader/loader.component */
      "668k");

      function QuoteContainerComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-quote", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteContainerComponent_ng_container_0_ng_container_1_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r5.getRandomQuote();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteContainerComponent_ng_container_0_ng_container_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var quote_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r7.openShareModal(quote_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var quote_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("quote", quote_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@isClicked", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, ctx_r4.isRefreshBtnClicked$) ? "isClicked" : "");
        }
      }

      function QuoteContainerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QuoteContainerComponent_ng_container_0_ng_container_1_Template, 6, 4, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r0.isLoading$))("ngIfElse", _r1);
        }
      }

      function QuoteContainerComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader");
        }
      }

      var QuoteContainerComponent = /*#__PURE__*/function () {
        function QuoteContainerComponent(quoteService, modalService) {
          _classCallCheck(this, QuoteContainerComponent);

          this.quoteService = quoteService;
          this.modalService = modalService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.isRefreshBtnClicked$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.isRefreshBtnClicked$ = this.isRefreshBtnClicked$$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          this.quote$ = this.quoteService.quote$;
          this.isLoading$ = this.quoteService.isLoading$;
        }

        _createClass(QuoteContainerComponent, [{
          key: "handleDoubleClick",
          value: function handleDoubleClick() {
            this.getRandomQuote();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.quoteService.getRandom().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
            this.quote$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this.isRefreshBtnClicked$$.next(false);
            })).subscribe();
            this.isRefreshBtnClicked$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this.quoteService.getRandom();
            })).subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "getRandomQuote",
          value: function getRandomQuote() {
            this.isRefreshBtnClicked$$.next(true);
          }
        }, {
          key: "openShareModal",
          value: function openShareModal(quote) {
            this.listenToShareModalEvents(this.createAndOpenShareModalWithData(quote));
          }
        }, {
          key: "createAndOpenShareModalWithData",
          value: function createAndOpenShareModalWithData(quote) {
            return this.modalService.create(_view_models__WEBPACK_IMPORTED_MODULE_4__["ModalIds"].quoteShare, _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_3__["QuoteShareModalComponent"], {
              customClass: 'share-modal'
            }).setData({
              quote: quote
            }).open();
          }
        }, {
          key: "listenToShareModalEvents",
          value: function listenToShareModalEvents(modal) {
            var _this2 = this;

            // Listen to modal result
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([modal.onClose, modal.onDataAdded]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  data = _ref2[1];

              if (data) {
                var quote = data.quote,
                    email = data.email,
                    phone = data.phone;
                return _this2.quoteService.share(quote, email ? {
                  email: email
                } : {
                  phone: phone
                });
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(); // Destroy modal after its close/dismiss to not duplicate its instances within modalService

            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["race"])(modal.onCloseFinished, modal.onDismissFinished).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this2.modalService.removeModal(_view_models__WEBPACK_IMPORTED_MODULE_4__["ModalIds"].quoteShare);
            })).subscribe();
          }
        }]);

        return QuoteContainerComponent;
      }();

      QuoteContainerComponent.ɵfac = function QuoteContainerComponent_Factory(t) {
        return new (t || QuoteContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"]));
      };

      QuoteContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: QuoteContainerComponent,
        selectors: [["app-quote-container"]],
        hostBindings: function QuoteContainerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function QuoteContainerComponent_dblclick_HostBindingHandler() {
              return ctx.handleDoubleClick();
            });
          }
        },
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], [3, "quote"], [1, "quote-actions"], ["title", "Get another Quote", 1, "get-quote-btn", 3, "click"], ["title", "Share", 1, "share-quote-btn", 3, "click"]],
        template: function QuoteContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QuoteContainerComponent_ng_container_0_Template, 3, 4, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QuoteContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.quote$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _quote_quote_component__WEBPACK_IMPORTED_MODULE_9__["QuoteComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n}\n\n.quote-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  outline: none;\n  right: 80px;\n  top: 120px;\n}\n\n.get-quote-btn[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 5px;\n  top: 0;\n  width: 36px;\n  height: 36px;\n  background: url('refresh.svg') no-repeat center center;\n}\n\n@media (max-width: 620px) {\n  .get-quote-btn[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 20px;\n  }\n}\n\n.share-quote-btn[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 5px;\n  top: 0;\n  width: 36px;\n  height: 36px;\n  background: url('share.svg') no-repeat center center;\n}\n\n@media (max-width: 620px) {\n  .share-quote-btn[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ0phO0FEQWY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQXpCUztFQTBCVCxZQTFCUztFQTJCVCxzREFBQTtBQUpGOztBRUxFO0VGR0Y7SUFTSSxXQUFBO0lBQ0EsU0FBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0F2Q1M7RUF3Q1QsWUF4Q1M7RUF5Q1Qsb0RBQUE7QUFIRjs7QUVwQkU7RUZpQkY7SUFTSSxXQUFBO0lBQ0EsU0FBQTtFQUZGO0FBQ0YiLCJmaWxlIjoicXVvdGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYnRuLXNpemU6IDM2cHg7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAkY29sb3JfX3doaXRlO1xufVxuXG4ucXVvdGUtYWN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmlnaHQ6IDgwcHg7XG4gIHRvcDogMTIwcHg7XG59XG5cbi5nZXQtcXVvdGUtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDVweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogJGJ0bi1zaXplO1xuICBoZWlnaHQ6ICRidG4tc2l6ZTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3RhdGljL3JlZnJlc2guc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG5cbiAgQGluY2x1ZGUgbWRfcyB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAyMHB4O1xuICB9XG59XG5cbi5zaGFyZS1xdW90ZS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAkYnRuLXNpemU7XG4gIGhlaWdodDogJGJ0bi1zaXplO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdGF0aWMvc2hhcmUuc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG5cbiAgQGluY2x1ZGUgbWRfcyB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAyMHB4O1xuICB9XG59XG4iLCIvLyB0eXBvZ3JhcGh5XG4kZm9udDogQ2FsaWJyaTtcbiRmb250X19zaXplOiAxNnB4OyAvLyAxNHB4O1xuJGZvbnRfX2ZhbGxiYWNrOiBzYW5zLXNlcmlmO1xuJGZvbnRfX3ByaW1hcnk6ICdTb3VyY2VTYW5zUHJvJywgJGZvbnRfX2ZhbGxiYWNrO1xuJGZvbnRfX2ljb25zOiAnaWNvbnMnO1xuXG4vLyBjb2xvcnNcbiRjb2xvcl9fYmxhY2s6ICMwMDAwMDA7XG4kY29sb3JfX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX19ibHVlOiAjOGNjZGRkO1xuJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms6ICM3Y2I2YzQ7XG4kY29sb3JfX2JsdWVfZGFyazogIzY0OTI5RTtcbiRjb2xvcl9fZXJyb3I6ICNmZjczNzM7XG4kY29sb3JfX2Rpc2FibGVkOiAjOTRiMmI5O1xuJGNvbG9yX19saWdodF9ncmF5OiAjYzdlNmVlO1xuLy8jXG5cbiRib3JkZXJfX3NpemU6IDJweDtcbiRib3JkZXJfX3JhZGl1czogMTBweDtcblxuJHNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcblxuLy8gYnJlYWtwb2ludHNcbiRicmVha3BvaW50X19zbTogMzIwcHg7XG4kYnJlYWtwb2ludF9fc21fbDogNDgwcHg7IC8vIDUwMHB4XG4kYnJlYWtwb2ludF9fbWRfczogNjIwcHg7XG4kYnJlYWtwb2ludF9fbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnRfX21kX2w6IDEwODBweDsgLy8gOTIwcHhcbiRicmVha3BvaW50X19sZzogMTI4MHB4O1xuIiwiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9sIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9sKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kX3Mge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kX3MpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21fbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fc21fbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('isClicked', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('isClicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(360deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isClicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out'))])]
        },
        changeDetection: 0
      });
      /***/
    },

    /***/
    "Lw4S":
    /*!***********************************************************!*\
      !*** ./src/app/quote/components/quote/quote.component.ts ***!
      \***********************************************************/

    /*! exports provided: QuoteComponent */

    /***/
    function Lw4S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteComponent", function () {
        return QuoteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function QuoteComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.quote.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA9", ctx_r0.quote.author, "");
        }
      }

      var QuoteComponent = function QuoteComponent() {
        _classCallCheck(this, QuoteComponent);
      };

      QuoteComponent.ɵfac = function QuoteComponent_Factory(t) {
        return new (t || QuoteComponent)();
      };

      QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuoteComponent,
        selectors: [["app-quote"]],
        inputs: {
          quote: "quote"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "quote"], [1, "quote__blockquote"]],
        template: function QuoteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuoteComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["@charset \"UTF-8\";\n.quote[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.quote__blockquote[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  padding: 190px 190px 190px;\n}\n@media (max-width: 1080px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 155px 155px 155px;\n  }\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 155px 155px 155px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 110px 110px 110px;\n  }\n}\n@media (max-width: 480px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 80px 15px 80px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n  font-family: \"icons\";\n  position: absolute;\n  font-size: 150px;\n  opacity: 0.5;\n}\n@media (max-width: 1080px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 120px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 100px;\n  }\n}\n@media (max-width: 480px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 60px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]::before {\n  content: \"\u275D\";\n  left: 0;\n  top: 0;\n}\n.quote__blockquote[_ngcontent-%COMP%]::after {\n  content: \"\uE800\";\n  right: 0;\n  bottom: 0;\n}\n.quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 40px;\n  text-align: justify;\n  line-height: 50px;\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 35px;\n    line-height: 40px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 30px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 35px;\n  line-height: 60px;\n  text-align: right;\n  display: block;\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n    line-height: 40px;\n    font-size: 30px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXG1peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFjaEI7RUFDRSxpQkFaVTtBQUFaO0FBY0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVpKO0FDT0U7RURFQTtJQU1JLDBCQUFBO0VBWEo7QUFDRjtBQ1ZFO0VEY0E7SUFVSSwwQkFBQTtFQVZKO0FBQ0Y7QUNHRTtFREpBO0lBY0ksMEJBQUE7RUFUSjtBQUNGO0FDSUU7RURWQTtJQWtCSSx1QkFBQTtFQVJKO0FBQ0Y7QUFVSTtFQUVFLG9CRW5DUTtFRm9DUixrQkFBQTtFQUNBLGdCQWpDbUI7RUFrQ25CLFlBQUE7QUFUTjtBQ25CRTtFRHVCRTtJQVFJLGdCQXBDZTtFQTRCckI7QUFDRjtBQ2xCRTtFRGlCRTtJQVlJLGdCQXZDZTtFQWdDckI7QUFDRjtBQ2pCRTtFRFdFO0lBZ0JJLGVBMUNlO0VBb0NyQjtBQUNGO0FBU0k7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUFQTjtBQVVJO0VBQ0UsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBUk47QUFhRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBWEo7QUM3REU7RURxRUE7SUFNSSxlQUFBO0lBQ0EsaUJBQUE7RUFWSjtBQUNGO0FDakRFO0VEbURBO0lBV0ksZUFBQTtJQUNBLGlCQUFBO0VBVEo7QUFDRjtBQWFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFYSjtBQ2hGRTtFRHNGQTtJQVFJLGlCQUFBO0lBQ0EsZUFBQTtFQVZKO0FBQ0Y7QUNwRUU7RURvRUE7SUFhSSxlQUFBO0lBQ0EsaUJBQUE7RUFUSjtBQUNGIiwiZmlsZSI6InF1b3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnF1b3RlIHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG59XG4ucXVvdGVfX2Jsb2NrcXVvdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxOTBweCAxOTBweCAxOTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlIHtcbiAgICBwYWRkaW5nOiAxNTVweCAxNTVweCAxNTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZSB7XG4gICAgcGFkZGluZzogMTU1cHggMTU1cHggMTU1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGUge1xuICAgIHBhZGRpbmc6IDExMHB4IDExMHB4IDExMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlIHtcbiAgICBwYWRkaW5nOiA4MHB4IDE1cHggODBweDtcbiAgfVxufVxuLnF1b3RlX19ibG9ja3F1b3RlOjpiZWZvcmUsIC5xdW90ZV9fYmxvY2txdW90ZTo6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJpY29uc1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlOjpiZWZvcmUsIC5xdW90ZV9fYmxvY2txdW90ZTo6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGU6OmJlZm9yZSwgLnF1b3RlX19ibG9ja3F1b3RlOjphZnRlciB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZTo6YmVmb3JlLCAucXVvdGVfX2Jsb2NrcXVvdGU6OmFmdGVyIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gIH1cbn1cbi5xdW90ZV9fYmxvY2txdW90ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLinZ1cIjtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnF1b3RlX19ibG9ja3F1b3RlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi7qCAXCI7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4ucXVvdGVfX2Jsb2NrcXVvdGUgcCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlIHAge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZSBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5xdW90ZV9fYmxvY2txdW90ZSBjaXRlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZSBjaXRlIHtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGUgY2l0ZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG59IiwiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9sIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9sKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kX3Mge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kX3MpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21fbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fc21fbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIvLyB0eXBvZ3JhcGh5XG4kZm9udDogQ2FsaWJyaTtcbiRmb250X19zaXplOiAxNnB4OyAvLyAxNHB4O1xuJGZvbnRfX2ZhbGxiYWNrOiBzYW5zLXNlcmlmO1xuJGZvbnRfX3ByaW1hcnk6ICdTb3VyY2VTYW5zUHJvJywgJGZvbnRfX2ZhbGxiYWNrO1xuJGZvbnRfX2ljb25zOiAnaWNvbnMnO1xuXG4vLyBjb2xvcnNcbiRjb2xvcl9fYmxhY2s6ICMwMDAwMDA7XG4kY29sb3JfX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX19ibHVlOiAjOGNjZGRkO1xuJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms6ICM3Y2I2YzQ7XG4kY29sb3JfX2JsdWVfZGFyazogIzY0OTI5RTtcbiRjb2xvcl9fZXJyb3I6ICNmZjczNzM7XG4kY29sb3JfX2Rpc2FibGVkOiAjOTRiMmI5O1xuJGNvbG9yX19saWdodF9ncmF5OiAjYzdlNmVlO1xuLy8jXG5cbiRib3JkZXJfX3NpemU6IDJweDtcbiRib3JkZXJfX3JhZGl1czogMTBweDtcblxuJHNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcblxuLy8gYnJlYWtwb2ludHNcbiRicmVha3BvaW50X19zbTogMzIwcHg7XG4kYnJlYWtwb2ludF9fc21fbDogNDgwcHg7IC8vIDUwMHB4XG4kYnJlYWtwb2ludF9fbWRfczogNjIwcHg7XG4kYnJlYWtwb2ludF9fbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnRfX21kX2w6IDEwODBweDsgLy8gOTIwcHhcbiRicmVha3BvaW50X19sZzogMTI4MHB4O1xuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "OWr9":
    /*!***********************************************************************************!*\
      !*** ./src/app/quote/components/quote-share-modal/quote-share-modal.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: QuoteShareModalComponent */

    /***/
    function OWr9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteShareModalComponent", function () {
        return QuoteShareModalComponent;
      });
      /* harmony import */


      var _view_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../view.models */
      "yHeB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-smart-modal */
      "bqtT");
      /* harmony import */


      var _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../quote-preview/quote-preview.component */
      "6U+y");
      /* harmony import */


      var _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../share-form/share-form.component */
      "VgV8");

      var QuoteShareModalComponent = /*#__PURE__*/function () {
        function QuoteShareModalComponent(modalService) {
          _classCallCheck(this, QuoteShareModalComponent);

          this.modalService = modalService;
        }

        _createClass(QuoteShareModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal = this.modalService.get(_view_models__WEBPACK_IMPORTED_MODULE_0__["ModalIds"].quoteShare);

            var _this$modal$getData = this.modal.getData(),
                quote = _this$modal$getData.quote;

            this.quote = quote;
          }
        }, {
          key: "onShareSubmit",
          value: function onShareSubmit(contactData) {
            this.modal.setData(Object.assign({
              quote: this.quote
            }, contactData), true);
            this.modal.close();
          }
        }, {
          key: "onShareCancel",
          value: function onShareCancel() {
            this.modal.setData(null, true);
            this.modal.close();
          }
        }]);

        return QuoteShareModalComponent;
      }();

      QuoteShareModalComponent.ɵfac = function QuoteShareModalComponent_Factory(t) {
        return new (t || QuoteShareModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"]));
      };

      QuoteShareModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QuoteShareModalComponent,
        selectors: [["app-share-modal"]],
        decls: 2,
        vars: 1,
        consts: [[3, "quote"], [3, "shareSubmit", "shareCancel"]],
        template: function QuoteShareModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-quote-preview", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-share-form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("shareSubmit", function QuoteShareModalComponent_Template_app_share_form_shareSubmit_1_listener($event) {
              return ctx.onShareSubmit($event);
            })("shareCancel", function QuoteShareModalComponent_Template_app_share_form_shareCancel_1_listener() {
              return ctx.onShareCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("quote", ctx.quote);
          }
        },
        directives: [_quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__["QuotePreviewComponent"], _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__["ShareFormComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n  }\n}\n  .share-modal {\n  max-width: 768px;\n}\n  .share-modal .nsm-content {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXG1peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7QUFGRjtBQ0NFO0VEQUY7SUFJSSxzQkFBQTtFQURGO0FBQ0Y7QUFLRTtFQUNFLGdCRWNhO0FGaEJqQjtBQUlJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFGTiIsImZpbGUiOiJxdW90ZS1zaGFyZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+c2Nzcy9taXhpbnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQGluY2x1ZGUgbWQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLnNoYXJlLW1vZGFsIHtcbiAgICBtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZDtcblxuICAgIC5uc20tY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9sIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9sKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kX3Mge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kX3MpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21fbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fc21fbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIvLyB0eXBvZ3JhcGh5XG4kZm9udDogQ2FsaWJyaTtcbiRmb250X19zaXplOiAxNnB4OyAvLyAxNHB4O1xuJGZvbnRfX2ZhbGxiYWNrOiBzYW5zLXNlcmlmO1xuJGZvbnRfX3ByaW1hcnk6ICdTb3VyY2VTYW5zUHJvJywgJGZvbnRfX2ZhbGxiYWNrO1xuJGZvbnRfX2ljb25zOiAnaWNvbnMnO1xuXG4vLyBjb2xvcnNcbiRjb2xvcl9fYmxhY2s6ICMwMDAwMDA7XG4kY29sb3JfX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX19ibHVlOiAjOGNjZGRkO1xuJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms6ICM3Y2I2YzQ7XG4kY29sb3JfX2JsdWVfZGFyazogIzY0OTI5RTtcbiRjb2xvcl9fZXJyb3I6ICNmZjczNzM7XG4kY29sb3JfX2Rpc2FibGVkOiAjOTRiMmI5O1xuJGNvbG9yX19saWdodF9ncmF5OiAjYzdlNmVlO1xuLy8jXG5cbiRib3JkZXJfX3NpemU6IDJweDtcbiRib3JkZXJfX3JhZGl1czogMTBweDtcblxuJHNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcblxuLy8gYnJlYWtwb2ludHNcbiRicmVha3BvaW50X19zbTogMzIwcHg7XG4kYnJlYWtwb2ludF9fc21fbDogNDgwcHg7IC8vIDUwMHB4XG4kYnJlYWtwb2ludF9fbWRfczogNjIwcHg7XG4kYnJlYWtwb2ludF9fbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnRfX21kX2w6IDEwODBweDsgLy8gOTIwcHhcbiRicmVha3BvaW50X19sZzogMTI4MHB4O1xuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "VgV8":
    /*!*********************************************************************!*\
      !*** ./src/app/quote/components/share-form/share-form.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ShareFormComponent */

    /***/
    function VgV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareFormComponent", function () {
        return ShareFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/button/button.component */
      "VkHG");
      /* harmony import */


      var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/input/input.component */
      "QlUG");

      function ShareFormComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ShareFormComponent_ng_container_5_Template_app_button_clicked_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var shareOption_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.selectShareOption(shareOption_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var shareOption_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.isShareOptionActive(shareOption_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", shareOption_r2.title);
        }
      }

      function ShareFormComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "share")("type", ctx_r1.selectedShareOption.inputType)("form", ctx_r1.form)("placeholder", ctx_r1.selectedShareOption.placeholder);
        }
      } // eslint-disable-next-line max-len


      var EMAIL_REG_EX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      var ShareFormComponent = /*#__PURE__*/function () {
        function ShareFormComponent(fb) {
          _classCallCheck(this, ShareFormComponent);

          this.fb = fb;
          this.shareOptions = [{
            type: 'email',
            inputType: 'email',
            title: 'Email',
            placeholder: 'email@example.com',
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(EMAIL_REG_EX)]
          }, {
            type: 'phone',
            inputType: 'tel',
            title: 'Phone',
            placeholder: '+380999998877',
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]
          }];
          this.selectedShareOption = this.shareOptions[0];
          this.shareSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.shareCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectShareOption(this.selectedShareOption);
        }

        _createClass(ShareFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group(_defineProperty({}, 'share', this.shareFormControl));
          }
        }, {
          key: "selectShareOption",
          value: function selectShareOption(shareOption) {
            this.selectedShareOption = shareOption;

            if (this.shareFormControl) {
              this.form.controls['share'].setValidators(shareOption.validators);
              this.shareFormControl.setValue('');
              return;
            }

            this.shareFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', shareOption.validators);
          }
        }, {
          key: "isShareOptionActive",
          value: function isShareOptionActive(shareOption) {
            return this.selectedShareOption === shareOption;
          }
        }, {
          key: "submit",
          value: function submit() {
            if (!this.isShareFormValid) {
              return;
            }

            this.shareSubmit.emit(_defineProperty({}, this.selectedShareOption.type, this.shareFormControl.value));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.shareCancel.emit();
          }
        }, {
          key: "isShareFormValid",
          get: function get() {
            return this.shareFormControl && this.shareFormControl.valid;
          }
        }]);

        return ShareFormComponent;
      }();

      ShareFormComponent.ɵfac = function ShareFormComponent_Factory(t) {
        return new (t || ShareFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ShareFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShareFormComponent,
        selectors: [["app-share-form"]],
        outputs: {
          shareSubmit: "shareSubmit",
          shareCancel: "shareCancel"
        },
        decls: 11,
        vars: 7,
        consts: [[1, "share-form-wrapper"], [1, "toggler-wrapper"], [1, "toggler-wrapper-options"], [4, "ngFor", "ngForOf"], ["class", "form-control-wrapper", 4, "ngIf"], [1, "button-wrapper"], ["type", "submit", 3, "disabled", "label", "clicked"], [3, "label", "clicked"], [1, "form-control-wrapper"], [3, "formGroup"], [3, "id", "type", "form", "placeholder"]],
        template: function ShareFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Share via:\xA0");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ShareFormComponent_Template_app_button_clicked_9_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ShareFormComponent_Template_app_button_clicked_10_listener() {
              return ctx.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shareOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedShareOption);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isShareFormValid)("label", "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("cancel-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Dismiss");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 50%;\n  padding: 20px;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: auto;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-right: auto;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%]     app-button button {\n  border-radius: 0;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%]     app-button.active button {\n  background: #64929E;\n}\n\n.button-wrapper[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: flex-end;\n}\n\n.button-wrapper[_ngcontent-%COMP%]     app-button:first-child {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmUtZm9ybS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQURKOztBQUdJO0VBQ0UsbUJBQUE7QUFETjs7QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGTjs7QUFNVTtFQUNFLGdCQUFBO0FBSlo7O0FBT1U7RUFDRSxtQkN2Qk87QURrQm5COztBQWFBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQVZGOztBQWFJO0VBQ0Usa0JBQUE7QUFYTiIsImZpbGUiOiJzaGFyZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zY3NzL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnNoYXJlLWZvcm0td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG5cbiAgLnRvZ2dsZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAmLW9wdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICBhcHAtYnV0dG9uIHtcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFjdGl2ZSBidXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfX2JsdWVfZGFyaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cbiAgOjpuZy1kZWVwIHtcbiAgICBhcHAtYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "trG8":
    /*!*******************************************!*\
      !*** ./src/app/quote/components/index.ts ***!
      \*******************************************/

    /*! exports provided: QuoteComponent, QuoteContainerComponent, QuoteShareModalComponent, QuotePreviewComponent, ShareFormComponent */

    /***/
    function trG8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _quote_quote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quote/quote.component */
      "Lw4S");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteComponent", function () {
        return _quote_quote_component__WEBPACK_IMPORTED_MODULE_0__["QuoteComponent"];
      });
      /* harmony import */


      var _quote_container_quote_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./quote-container/quote-container.component */
      "I6y0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteContainerComponent", function () {
        return _quote_container_quote_container_component__WEBPACK_IMPORTED_MODULE_1__["QuoteContainerComponent"];
      });
      /* harmony import */


      var _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quote-share-modal/quote-share-modal.component */
      "OWr9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteShareModalComponent", function () {
        return _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"];
      });
      /* harmony import */


      var _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quote-preview/quote-preview.component */
      "6U+y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuotePreviewComponent", function () {
        return _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__["QuotePreviewComponent"];
      });
      /* harmony import */


      var _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./share-form/share-form.component */
      "VgV8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShareFormComponent", function () {
        return _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__["ShareFormComponent"];
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=quote-quote-module-es5.js.map