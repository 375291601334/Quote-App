(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\aws-course\ngQuote-develop\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0SCp":
    /*!**********************************************************************!*\
      !*** ./src/app/core/components/auth-layout/auth-layout.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AuthLayoutComponent */

    /***/
    function SCp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
        return AuthLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthLayoutComponent = /*#__PURE__*/function () {
        function AuthLayoutComponent() {
          _classCallCheck(this, AuthLayoutComponent);
        }

        _createClass(AuthLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthLayoutComponent;
      }();

      AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
        return new (t || AuthLayoutComponent)();
      };

      AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 1,
        vars: 0,
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImF1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "1ua0":
    /*!********************************************!*\
      !*** ./src/app/shared/components/index.ts ***!
      \********************************************/

    /*! exports provided: TableComponent, ButtonComponent, InputComponent, TextAreaComponent, LoaderComponent, QuoteEditFormComponent, QuoteTagComponent, BurgerButtonComponent */

    /***/
    function ua0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _table_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./table/table.component */
      "Xv+k");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
        return _table_table_component__WEBPACK_IMPORTED_MODULE_0__["TableComponent"];
      });
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./button/button.component */
      "VkHG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
        return _button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"];
      });
      /* harmony import */


      var _input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./input/input.component */
      "QlUG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
        return _input_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"];
      });
      /* harmony import */


      var _text_area_text_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./text-area/text-area.component */
      "LWN/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextAreaComponent", function () {
        return _text_area_text_area_component__WEBPACK_IMPORTED_MODULE_3__["TextAreaComponent"];
      });
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./loader/loader.component */
      "668k");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"];
      });
      /* harmony import */


      var _quote_edit_form_quote_edit_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./quote-edit-form/quote-edit-form.component */
      "QQ6w");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteEditFormComponent", function () {
        return _quote_edit_form_quote_edit_form_component__WEBPACK_IMPORTED_MODULE_5__["QuoteEditFormComponent"];
      });
      /* harmony import */


      var _quote_tag_quote_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./quote-tag/quote-tag.component */
      "ziTr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteTagComponent", function () {
        return _quote_tag_quote_tag_component__WEBPACK_IMPORTED_MODULE_6__["QuoteTagComponent"];
      });
      /* harmony import */


      var _burger_button_burger_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./burger-button/burger-button.component */
      "gO2n");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BurgerButtonComponent", function () {
        return _burger_button_burger_button_component__WEBPACK_IMPORTED_MODULE_7__["BurgerButtonComponent"];
      });
      /***/

    },

    /***/
    "668k":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/loader/loader.component.ts ***!
      \**************************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          _classCallCheck(this, LoaderComponent);
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || LoaderComponent)();
      };

      LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderComponent,
        selectors: [["app-loader"]],
        decls: 11,
        vars: 0,
        consts: [[1, "loader-wrapper"], [1, "lds-grid"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.loader-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.lds-grid[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation: lds-grid 1.2s linear infinite;\n          animation: lds-grid 1.2s linear infinite;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  top: 8px;\n  left: 8px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  top: 8px;\n  left: 32px;\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  top: 8px;\n  left: 56px;\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  top: 32px;\n  left: 8px;\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  top: 32px;\n  left: 32px;\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  top: 32px;\n  left: 56px;\n  -webkit-animation-delay: -1.2s;\n          animation-delay: -1.2s;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  top: 56px;\n  left: 8px;\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  top: 56px;\n  left: 32px;\n  -webkit-animation-delay: -1.2s;\n          animation-delay: -1.2s;\n}\n\n.lds-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\n  top: 56px;\n  left: 56px;\n  -webkit-animation-delay: -1.6s;\n          animation-delay: -1.6s;\n}\n\n@-webkit-keyframes lds-grid {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n@keyframes lds-grid {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7QUFDRjs7QUFFQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxZQUFBO0VBQ0Y7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxZQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2FkZXItd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sZHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubGRzLWdyaWQgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGFuaW1hdGlvbjogbGRzLWdyaWQgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoMikge1xuICB0b3A6IDhweDtcbiAgbGVmdDogMzJweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbn1cblxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoMykge1xuICB0b3A6IDhweDtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbn1cblxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNCkge1xuICB0b3A6IDMycHg7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbn1cblxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNSkge1xuICB0b3A6IDMycHg7XG4gIGxlZnQ6IDMycHg7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG5cbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgdG9wOiAzMnB4O1xuICBsZWZ0OiA1NnB4O1xuICBhbmltYXRpb24tZGVsYXk6IC0xLjJzO1xufVxuXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg3KSB7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogOHB4O1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xufVxuXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg4KSB7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMzJweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4ycztcbn1cblxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoOSkge1xuICB0b3A6IDU2cHg7XG4gIGxlZnQ6IDU2cHg7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuNnM7XG59XG5cbkBrZXlmcmFtZXMgbGRzLWdyaWQge1xuICAwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        isAuthorizationEnabled: false,
        apiUrls: {
          auth: '',
          quote: '',
          share: ''
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "LWN/":
    /*!********************************************************************!*\
      !*** ./src/app/shared/components/text-area/text-area.component.ts ***!
      \********************************************************************/

    /*! exports provided: TextAreaComponent */

    /***/
    function LWN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextAreaComponent", function () {
        return TextAreaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var TextAreaComponent = /*#__PURE__*/function () {
        function TextAreaComponent() {
          _classCallCheck(this, TextAreaComponent);

          this.placeholder = '';
          this.label = '';
        }

        _createClass(TextAreaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.control = this.form.get(this.id);
          }
        }]);

        return TextAreaComponent;
      }();

      TextAreaComponent.ɵfac = function TextAreaComponent_Factory(t) {
        return new (t || TextAreaComponent)();
      };

      TextAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextAreaComponent,
        selectors: [["app-text-area"]],
        inputs: {
          placeholder: "placeholder",
          label: "label",
          form: "form",
          id: "id"
        },
        decls: 5,
        vars: 6,
        consts: [[3, "formGroup"], [1, "label-text"], [1, "app-text-area", 3, "formControl", "placeholder"]],
        template: function TextAreaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.form.controls[ctx.id].invalid && ctx.form.controls[ctx.id].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("placeholder", ctx.placeholder);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
        styles: [".app-text-area[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: Calibri, \"SourceSansPro\", sans-serif, sans-serif;\n  resize: vertical;\n  border: 2px solid #7cb6c4;\n  border-radius: 10px;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n}\n.app-text-area[_ngcontent-%COMP%]:focus {\n  border-color: #64929E;\n}\n.app-text-area.invalid[_ngcontent-%COMP%] {\n  border-color: #ff7373;\n}\n.label-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ffffff;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGV4dC1hcmVhLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLDZEQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxxQkFBQTtBQURKO0FBSUU7RUFDRSxxQkNIVztBRENmO0FBTUE7RUFDRSxpQkFBQTtFQUNBLGNDYmE7RURjYixlQUFBO0FBSEYiLCJmaWxlIjoidGV4dC1hcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvdmFyaWFibGVzJztcblxuLmFwcC10ZXh0LWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6ICRmb250LCAkZm9udF9fcHJpbWFyeSwgJGZvbnRfX2ZhbGxiYWNrO1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3JfX2JsdWVfbGlnaHRfZGFyaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX19ibHVlX2Rhcms7XG4gIH1cblxuICAmLmludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX19lcnJvcjtcbiAgfVxufVxuXG4ubGFiZWwtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogJGNvbG9yX193aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "N/25":
    /*!***********************************************!*\
      !*** ./src/app/auth/services/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function N25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_services_auth_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../api-services/auth-api.service */
      "Phn6");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(authApiService, router) {
          _classCallCheck(this, AuthService);

          this.authApiService = authApiService;
          this.router = router;
          var authData = localStorage.getItem('authData');
          this.authData$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](authData ? JSON.parse(authData) : null);
          this.authData$ = this.authData$$.asObservable();
          this.isLoading$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.isLoading$ = this.isLoading$$.asObservable();
        }

        _createClass(AuthService, [{
          key: "authDataValue",
          get: function get() {
            return this.authData$$.value;
          }
        }, {
          key: "login",
          value: function login(user) {
            var _this = this;

            this.isLoading$$.next(true);
            return this.authApiService.login(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref) {
              var data = _ref.data;
              localStorage.setItem('authData', JSON.stringify(data));

              _this.authData$$.next(data);

              return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              return _this.isLoading$$.next(false);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              _this.isLoading$$.next(false);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('authData');
            this.authData$$.next(null);
            this.router.navigate(['auth', 'login']);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_services_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Nlor":
    /*!********************************************************!*\
      !*** ./src/app/core/interceptors/error.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function Nlor(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../auth/services */
      "bTys");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authService, toastrService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authService = authService;
          this.toastrService = toastrService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this2 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this2.authService.logout();
              }

              var error = err.error.message || err.statusText;
              var defaultErrorMessage = 'Sorry, but something went wrong, please try again.';

              _this2.toastrService.error(defaultErrorMessage);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "PC/O":
    /*!*******************************************!*\
      !*** ./src/app/auth/guards/auth.guard.ts ***!
      \*******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function PCO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services */
      "bTys");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].isAuthorizationEnabled) {
              return true;
            }

            var user = this.authService.authDataValue;

            if (user) {
              // logged in so return true
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['auth', 'login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components */
      "1ua0");
      /* harmony import */


      var _directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./directives */
      "vu/V");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["InputComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["TextAreaComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteEditFormComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteTagComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["BurgerButtonComponent"]];
      var DIRECTIVES = [_directives__WEBPACK_IMPORTED_MODULE_3__["TemplateDirective"]];

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["InputComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["TextAreaComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteEditFormComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteTagComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["BurgerButtonComponent"], _directives__WEBPACK_IMPORTED_MODULE_3__["TemplateDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
          exports: [_components__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["InputComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["TextAreaComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteEditFormComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteTagComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["BurgerButtonComponent"], _directives__WEBPACK_IMPORTED_MODULE_3__["TemplateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "Phn6":
    /*!**************************************************!*\
      !*** ./src/app/api-services/auth-api.service.ts ***!
      \**************************************************/

    /*! exports provided: AuthApiService */

    /***/
    function Phn6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthApiService", function () {
        return AuthApiService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthApiService = /*#__PURE__*/function () {
        function AuthApiService(http) {
          _classCallCheck(this, AuthApiService);

          this.http = http;
          this.apiBase = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrls.auth;
        }

        _createClass(AuthApiService, [{
          key: "login",
          value: function login(user) {
            var url = "".concat(this.apiBase, "/login");
            return this.http.post(url, user);
          }
        }, {
          key: "logout",
          value: function logout() {
            var url = "".concat(this.apiBase, "/logout");
            return this.http.get(url);
          }
        }]);

        return AuthApiService;
      }();

      AuthApiService.ɵfac = function AuthApiService_Factory(t) {
        return new (t || AuthApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AuthApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthApiService,
        factory: AuthApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "QQ6w":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/components/quote-edit-form/quote-edit-form.component.ts ***!
      \********************************************************************************/

    /*! exports provided: QuoteEditFormComponent */

    /***/
    function QQ6w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteEditFormComponent", function () {
        return QuoteEditFormComponent;
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


      var _input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../input/input.component */
      "QlUG");
      /* harmony import */


      var _text_area_text_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../text-area/text-area.component */
      "LWN/");
      /* harmony import */


      var _quote_tag_quote_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../quote-tag/quote-tag.component */
      "ziTr");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../button/button.component */
      "VkHG");

      var _c0 = ["quoteTags"];

      var QuoteEditFormComponent = /*#__PURE__*/function () {
        function QuoteEditFormComponent(fb) {
          _classCallCheck(this, QuoteEditFormComponent);

          this.fb = fb;
          this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.initialData = {
            author: '',
            text: '',
            source: '',
            tags: ''
          };
        }

        _createClass(QuoteEditFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this$fb$group;

            this.editQuoteForm = this.fb.group((_this$fb$group = {}, _defineProperty(_this$fb$group, 'author', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.initialData.author, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])), _defineProperty(_this$fb$group, 'text', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.initialData.text, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])), _defineProperty(_this$fb$group, 'source', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.initialData.source, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])), _this$fb$group));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.editQuoteForm.invalid) {
              return;
            }

            this.submitted.emit(Object.assign(Object.assign(Object.assign({}, this.initialData), this.editQuoteForm.value), {
              tags: this.quoteTags.getValue
            }));
          }
        }]);

        return QuoteEditFormComponent;
      }();

      QuoteEditFormComponent.ɵfac = function QuoteEditFormComponent_Factory(t) {
        return new (t || QuoteEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      QuoteEditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuoteEditFormComponent,
        selectors: [["app-quote-edit-form"]],
        viewQuery: function QuoteEditFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.quoteTags = _t.first);
          }
        },
        inputs: {
          initialData: "initialData"
        },
        outputs: {
          submitted: "submitted"
        },
        decls: 7,
        vars: 10,
        consts: [[1, "edit-form", 3, "formGroup"], ["label", "Author*", 3, "id", "form"], ["label", "Source*", 3, "id", "form"], ["label", "Text*", 3, "id", "form"], [3, "initialData"], ["quoteTags", ""], ["type", "submit", 3, "label", "disabled", "clicked"]],
        template: function QuoteEditFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-area", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-quote-tag", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function QuoteEditFormComponent_Template_app_button_clicked_6_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editQuoteForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "author")("form", ctx.editQuoteForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "source")("form", ctx.editQuoteForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "text")("form", ctx.editQuoteForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialData", ctx.initialData.tags);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Submit")("disabled", ctx.editQuoteForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _input_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"], _text_area_text_area_component__WEBPACK_IMPORTED_MODULE_3__["TextAreaComponent"], _quote_tag_quote_tag_component__WEBPACK_IMPORTED_MODULE_4__["QuoteTagComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  padding: 20px;\n}\n\napp-quote-tag[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n}\n\n.edit-form[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 20px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 10px;\n}\n\n.label-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ffffff;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtZWRpdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkNEZTtBRERqQjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsY0NoQmE7RURpQmIsZUFBQTtBQUZGIiwiZmlsZSI6InF1b3RlLWVkaXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmFwcC1xdW90ZS10YWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmVkaXQtZm9ybSB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG5cbiAgYm9yZGVyOiAkYm9yZGVyX19zaXplIHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXJfX3JhZGl1cztcbn1cblxuLmxhYmVsLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICRjb2xvcl9fd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiIsIi8vIHR5cG9ncmFwaHlcbiRmb250OiBDYWxpYnJpO1xuJGZvbnRfX3NpemU6IDE2cHg7IC8vIDE0cHg7XG4kZm9udF9fZmFsbGJhY2s6IHNhbnMtc2VyaWY7XG4kZm9udF9fcHJpbWFyeTogJ1NvdXJjZVNhbnNQcm8nLCAkZm9udF9fZmFsbGJhY2s7XG4kZm9udF9faWNvbnM6ICdpY29ucyc7XG5cbi8vIGNvbG9yc1xuJGNvbG9yX19ibGFjazogIzAwMDAwMDtcbiRjb2xvcl9fd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfX2JsdWU6ICM4Y2NkZGQ7XG4kY29sb3JfX2JsdWVfbGlnaHRfZGFyazogIzdjYjZjNDtcbiRjb2xvcl9fYmx1ZV9kYXJrOiAjNjQ5MjlFO1xuJGNvbG9yX19lcnJvcjogI2ZmNzM3MztcbiRjb2xvcl9fZGlzYWJsZWQ6ICM5NGIyYjk7XG4kY29sb3JfX2xpZ2h0X2dyYXk6ICNjN2U2ZWU7XG4vLyNcblxuJGJvcmRlcl9fc2l6ZTogMnB4O1xuJGJvcmRlcl9fcmFkaXVzOiAxMHB4O1xuXG4kc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xuXG4vLyBicmVha3BvaW50c1xuJGJyZWFrcG9pbnRfX3NtOiAzMjBweDtcbiRicmVha3BvaW50X19zbV9sOiA0ODBweDsgLy8gNTAwcHhcbiRicmVha3BvaW50X19tZF9zOiA2MjBweDtcbiRicmVha3BvaW50X19tZDogNzY4cHg7XG4kYnJlYWtwb2ludF9fbWRfbDogMTA4MHB4OyAvLyA5MjBweFxuJGJyZWFrcG9pbnRfX2xnOiAxMjgwcHg7XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "QlUG":
    /*!************************************************************!*\
      !*** ./src/app/shared/components/input/input.component.ts ***!
      \************************************************************/

    /*! exports provided: InputComponent */

    /***/
    function QlUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
        return InputComponent;
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

      function InputComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.clearButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " x ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var InputComponent = /*#__PURE__*/function () {
        function InputComponent() {
          _classCallCheck(this, InputComponent);

          this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.placeholder = '';
          this.label = '';
          this.hasClearButton = false;
        }

        _createClass(InputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.control = this.form.get(this.id);
          }
        }, {
          key: "clearButtonClicked",
          value: function clearButtonClicked() {
            this.clear.emit(this.id);
          }
        }]);

        return InputComponent;
      }();

      InputComponent.ɵfac = function InputComponent_Factory(t) {
        return new (t || InputComponent)();
      };

      InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputComponent,
        selectors: [["app-input"]],
        inputs: {
          placeholder: "placeholder",
          label: "label",
          hasClearButton: "hasClearButton",
          form: "form",
          type: "type",
          id: "id"
        },
        outputs: {
          clear: "clear"
        },
        decls: 6,
        vars: 8,
        consts: [[3, "formGroup"], [1, "label-text"], [1, "app-input", 3, "type", "formControl", "placeholder"], ["class", "clear-button", 3, "click", 4, "ngIf"], [1, "clear-button", 3, "click"]],
        template: function InputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputComponent_button_5_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.form.controls[ctx.id].invalid && ctx.form.controls[ctx.id].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.control)("placeholder", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasClearButton);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".app-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #7cb6c4;\n  border-radius: 10px;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n}\n.app-input[_ngcontent-%COMP%]:focus {\n  border-color: #64929E;\n}\n.app-input.invalid[_ngcontent-%COMP%] {\n  border-color: #ff7373;\n}\n.label-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ffffff;\n  font-size: 16px;\n}\nlabel[_ngcontent-%COMP%] {\n  position: relative;\n}\nlabel[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50%);\n  padding: 5px;\n  background: #8ccddd;\n  color: #ffffff;\n  border: 2px solid #7cb6c4;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5wdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkNjZTtFRGJmLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UscUJDRWU7QURIbkI7QUFJRTtFQUNFLHFCQ0RXO0FERGY7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsY0NYYTtFRFliLGVBQUE7QUFIRjtBQU1BO0VBQ0Usa0JBQUE7QUFIRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJDMUJVO0VEMkJWLGNDNUJXO0VENkJYLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKIiwiZmlsZSI6ImlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvdmFyaWFibGVzJztcblxuLmFwcC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6ICRib3JkZXJfX3NpemUgc29saWQgJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXJfX3JhZGl1cztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX19ibHVlX2Rhcms7XG4gIH1cblxuICAmLmludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX19lcnJvcjtcbiAgfVxufVxuXG4ubGFiZWwtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogJGNvbG9yX193aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY2xlYXItYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yX19ibHVlO1xuICAgIGNvbG9yOiAkY29sb3JfX3doaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcl9fYmx1ZV9saWdodF9kYXJrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbn1cbiIsIi8vIHR5cG9ncmFwaHlcbiRmb250OiBDYWxpYnJpO1xuJGZvbnRfX3NpemU6IDE2cHg7IC8vIDE0cHg7XG4kZm9udF9fZmFsbGJhY2s6IHNhbnMtc2VyaWY7XG4kZm9udF9fcHJpbWFyeTogJ1NvdXJjZVNhbnNQcm8nLCAkZm9udF9fZmFsbGJhY2s7XG4kZm9udF9faWNvbnM6ICdpY29ucyc7XG5cbi8vIGNvbG9yc1xuJGNvbG9yX19ibGFjazogIzAwMDAwMDtcbiRjb2xvcl9fd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfX2JsdWU6ICM4Y2NkZGQ7XG4kY29sb3JfX2JsdWVfbGlnaHRfZGFyazogIzdjYjZjNDtcbiRjb2xvcl9fYmx1ZV9kYXJrOiAjNjQ5MjlFO1xuJGNvbG9yX19lcnJvcjogI2ZmNzM3MztcbiRjb2xvcl9fZGlzYWJsZWQ6ICM5NGIyYjk7XG4kY29sb3JfX2xpZ2h0X2dyYXk6ICNjN2U2ZWU7XG4vLyNcblxuJGJvcmRlcl9fc2l6ZTogMnB4O1xuJGJvcmRlcl9fcmFkaXVzOiAxMHB4O1xuXG4kc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xuXG4vLyBicmVha3BvaW50c1xuJGJyZWFrcG9pbnRfX3NtOiAzMjBweDtcbiRicmVha3BvaW50X19zbV9sOiA0ODBweDsgLy8gNTAwcHhcbiRicmVha3BvaW50X19tZF9zOiA2MjBweDtcbiRicmVha3BvaW50X19tZDogNzY4cHg7XG4kYnJlYWtwb2ludF9fbWRfbDogMTA4MHB4OyAvLyA5MjBweFxuJGJyZWFrcG9pbnRfX2xnOiAxMjgwcHg7XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "Rfgh":
    /*!*********************************************************!*\
      !*** ./src/app/shared/directives/template.directive.ts ***!
      \*********************************************************/

    /*! exports provided: TemplateDirective */

    /***/
    function Rfgh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateDirective", function () {
        return TemplateDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TemplateDirective = function TemplateDirective(template) {
        _classCallCheck(this, TemplateDirective);

        this.template = template;
      };

      TemplateDirective.ɵfac = function TemplateDirective_Factory(t) {
        return new (t || TemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      TemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TemplateDirective,
        selectors: [["ng-template", "name", ""]],
        inputs: {
          name: "name"
        }
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'quoteApp';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  min-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "VkHG":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/button/button.component.ts ***!
      \**************************************************************/

    /*! exports provided: ButtonComponent */

    /***/
    function VkHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
        return ButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ButtonComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
        }
      }

      var ButtonComponent = /*#__PURE__*/function () {
        function ButtonComponent() {
          _classCallCheck(this, ButtonComponent);

          this.type = 'button';
          this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick(event) {
            this.clicked.next(event);
          }
        }]);

        return ButtonComponent;
      }();

      ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)();
      };

      ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonComponent,
        selectors: [["app-button"]],
        inputs: {
          label: "label",
          type: "type",
          disabled: "disabled",
          "class": "class"
        },
        outputs: {
          clicked: "clicked"
        },
        decls: 2,
        vars: 5,
        consts: [[1, "app-button", 3, "disabled", "type", "click"], ["class", "app-button__text", 4, "ngIf"], [1, "app-button__text"]],
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener($event) {
              return ctx.onClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_span_1_Template, 2, 1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx["class"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("type", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".app-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 14px;\n  background: #7cb6c4;\n  border-radius: 18px;\n  color: #fff;\n  font-weight: bold;\n}\n.app-button.cancel-btn[_ngcontent-%COMP%] {\n  background: none;\n  color: #7cb6c4;\n  border-radius: 0;\n  border-bottom: 2px solid transparent;\n  padding: 5px 0;\n}\n.app-button.cancel-btn[_ngcontent-%COMP%]:hover {\n  color: #64929E;\n  border-bottom: 2px solid #64929E;\n  background: none;\n}\n.app-button[_ngcontent-%COMP%]:hover {\n  background: #64929E;\n}\n.app-button[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 15px;\n}\n.app-button[_ngcontent-%COMP%]:disabled {\n  background-color: #94b2b9;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJDTXVCO0VETHZCLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREY7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsY0NEcUI7RURFckIsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0UsY0NOYTtFRE9iLGdDQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUtFO0VBQ0UsbUJDYmU7QURVbkI7QUFNRTtFQUNFLGlCQUFBO0FBSko7QUFPRTtFQUNFLHlCQ25CYztFRG9CZCxtQkFBQTtBQUxKIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL3ZhcmlhYmxlcyc7XG5cbi5hcHAtYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICRjb2xvcl9fYmx1ZV9saWdodF9kYXJrO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgJi5jYW5jZWwtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAkY29sb3JfX2JsdWVfbGlnaHRfZGFyaztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiA1cHggMDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRjb2xvcl9fYmx1ZV9kYXJrO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvcl9fYmx1ZV9kYXJrO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JfX2JsdWVfZGFyaztcbiAgfVxuXG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9fZGlzYWJsZWQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "Vyfh":
    /*!******************************************!*\
      !*** ./src/app/core/components/index.ts ***!
      \******************************************/

    /*! exports provided: PrivateLayoutComponent, AuthLayoutComponent, NavigationComponent */

    /***/
    function Vyfh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./private-layout/private-layout.component */
      "ZuDb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PrivateLayoutComponent", function () {
        return _private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_0__["PrivateLayoutComponent"];
      });
      /* harmony import */


      var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth-layout/auth-layout.component */
      "0SCp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
        return _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"];
      });
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navigation/navigation.component */
      "tfXs");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"];
      });
      /***/

    },

    /***/
    "Xv+k":
    /*!************************************************************!*\
      !*** ./src/app/shared/components/table/table.component.ts ***!
      \************************************************************/

    /*! exports provided: TableComponent */

    /***/
    function XvK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
        return TableComponent;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../directives */
      "vu/V");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TableComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](column_r5.label);
        }
      }

      function TableComponent_tr_3_ng_container_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r11 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r11, " ");
        }
      }

      function TableComponent_tr_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableComponent_tr_3_ng_container_1_td_1_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r9 = ctx.$implicit;

          var data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r6[column_r9.key] == null ? null : data_r6[column_r9.key].value);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          $implicit: a0
        };
      };

      function TableComponent_tr_3_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, data_r6))("ngTemplateOutlet", _r3);
        }
      }

      function TableComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableComponent_tr_3_ng_container_1_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableComponent_tr_3_td_2_Template, 2, 4, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isApiProvided);
        }
      }

      function TableComponent_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No data found. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", ctx_r2.columns.length);
        }
      }

      function TableComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 7);
        }

        if (rf & 2) {
          var row_r14 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.templateRefList["control-cell"])("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, row_r14));
        }
      }

      var TableComponent = /*#__PURE__*/function () {
        function TableComponent() {
          _classCallCheck(this, TableComponent);

          this.tableData = [];
          this.columns = [];
          this.isApiProvided = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrls.quote;
        }

        _createClass(TableComponent, [{
          key: "contentChildren",
          set: function set(queryList) {
            if (!queryList.length) {
              return;
            }

            this.templateRefList = queryList.toArray().reduce(function (buf, templateDirective) {
              return Object.assign(Object.assign({}, buf), _defineProperty({}, templateDirective.name, templateDirective.template));
            }, {});
          }
        }]);

        return TableComponent;
      }();

      TableComponent.ɵfac = function TableComponent_Factory(t) {
        return new (t || TableComponent)();
      };

      TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TableComponent,
        selectors: [["app-table"]],
        contentQueries: function TableComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _directives__WEBPACK_IMPORTED_MODULE_1__["TemplateDirective"], 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contentChildren = _t);
          }
        },
        inputs: {
          tableData: "tableData",
          columns: "columns"
        },
        decls: 8,
        vars: 3,
        consts: [[4, "ngFor", "ngForOf"], [1, "no-data-tr"], [3, "colSpan", 4, "ngIf"], ["controlButtons", ""], [4, "ngIf"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], [3, "colSpan"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
        template: function TableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableComponent_th_2_Template, 2, 1, "th", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableComponent_tr_3_Template, 3, 2, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "tr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TableComponent_td_5_Template, 2, 1, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TableComponent_ng_template_6_Template, 1, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tableData);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.tableData || !ctx.tableData.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
        styles: ["table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"SourceSansPro\", sans-serif;\n  color: #ffffff;\n  font-size: 16px;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 2px solid #ffffff;\n  padding: 10px;\n}\ntable[_ngcontent-%COMP%]   .no-data-tr[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGFibGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtBQURGO0FBR0U7RUFDRSxnQkFBQTtFQUNBLHdDQ0hZO0VESVosY0NDVztFREFYLGVBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBRko7QUFLRTtFQUNFLGNDVFc7QURNZiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG4gIHRoIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udF9fcHJpbWFyeTtcbiAgICBjb2xvcjogJGNvbG9yX193aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICB0aCwgdGQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcl9fd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5uby1kYXRhLXRyIHtcbiAgICBjb2xvcjogJGNvbG9yX193aGl0ZTtcbiAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-smart-modal */
      "bqtT");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZuDb":
    /*!****************************************************************************!*\
      !*** ./src/app/core/components/private-layout/private-layout.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PrivateLayoutComponent */

    /***/
    function ZuDb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivateLayoutComponent", function () {
        return PrivateLayoutComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../auth/services */
      "bTys");
      /* harmony import */


      var ng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-sidebar */
      "k4pO");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../navigation/navigation.component */
      "tfXs");
      /* harmony import */


      var _shared_components_burger_button_burger_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/burger-button/burger-button.component */
      "gO2n");

      var PrivateLayoutComponent = /*#__PURE__*/function () {
        function PrivateLayoutComponent(authService, router) {
          _classCallCheck(this, PrivateLayoutComponent);

          this.authService = authService;
          this.router = router;
          this.opened = false;
          this.isAnimated = false;
          this.listenOnRouteChange();
          this.authService.authData$.subscribe();
        }

        _createClass(PrivateLayoutComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isAnimated = true;
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.opened = !this.opened;
          }
        }, {
          key: "listenOnRouteChange",
          value: function listenOnRouteChange() {
            var _this3 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              _this3.opened = false;
            })).subscribe();
          }
        }]);

        return PrivateLayoutComponent;
      }();

      PrivateLayoutComponent.ɵfac = function PrivateLayoutComponent_Factory(t) {
        return new (t || PrivateLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      PrivateLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: PrivateLayoutComponent,
        selectors: [["app-private-layout"]],
        decls: 11,
        vars: 2,
        consts: [["position", "right", "showBackdrop", "true", 3, "animate", "opened", "openedChange"], [1, "close-sidebar", 3, "click"], ["ng-sidebar-content", ""], [1, "logo"], [3, "clicked"]],
        template: function PrivateLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-sidebar-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ng-sidebar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("openedChange", function PrivateLayoutComponent_Template_ng_sidebar_openedChange_1_listener($event) {
              return ctx.opened = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrivateLayoutComponent_Template_button_click_2_listener() {
              return ctx.toggleSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-burger-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clicked", function PrivateLayoutComponent_Template_app_burger_button_clicked_8_listener() {
              return ctx.toggleSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("animate", ctx.isAnimated)("opened", ctx.opened);
          }
        },
        directives: [ng_sidebar__WEBPACK_IMPORTED_MODULE_4__["SidebarContainer"], ng_sidebar__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _shared_components_burger_button_burger_button_component__WEBPACK_IMPORTED_MODULE_6__["BurgerButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]],
        styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  position: -webkit-sticky;\n  position: sticky;\n  padding-left: 20px;\n  top: 0;\n  background: #64929E;\n  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);\n  -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   app-navigation[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   app-burger-button[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-family: \"icons\";\n  font-size: 57px;\n  position: relative;\n  color: #c7e6ee;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:before {\n  position: relative;\n  content: \"\uE800\";\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   header[_ngcontent-%COMP%]   app-navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   header[_ngcontent-%COMP%]   app-burger-button[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: 20px;\n  }\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n  ng-sidebar .ng-sidebar {\n  width: 320px;\n  background-color: #7cb6c4;\n}\n@media (max-width: 480px) {\n    ng-sidebar .ng-sidebar {\n    width: 100%;\n  }\n}\n  ng-sidebar app-navigation ul {\n  display: flex;\n  flex-direction: column;\n}\n  ng-sidebar app-navigation ul li {\n  margin-left: 0 !important;\n  margin-bottom: 20px;\n}\n  ng-sidebar .close-sidebar {\n  width: 40px;\n  height: 40px;\n  background-color: #ffffff;\n  position: relative;\n}\n  ng-sidebar .close-sidebar:before,   ng-sidebar .close-sidebar:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 5%;\n  width: 90%;\n  height: 2px;\n  background-color: #7cb6c4;\n}\n  ng-sidebar .close-sidebar:before {\n  transform: rotateZ(45deg);\n}\n  ng-sidebar .close-sidebar:after {\n  transform: rotateZ(135deg);\n}\n  .ng-sidebar__content,   div[ng-sidebar-content] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJpdmF0ZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBR2hCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkNKZTtFREtmLGlEQ0lLO0VESEwseURDR0s7RURGTCxzRENFSztBREhUO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFJSTtFQUNFLGFBQUE7QUFGTjtBQUtJO0VBQ0Usb0JDekJRO0VEMEJSLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNDbEJjO0FEZXBCO0FBS007RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFIUjtBRS9CRTtFRnVDSTtJQUNFLGFBQUE7RUFMTjtFQVFJO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFOTjtBQUNGO0FBVUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQVJKO0FBY0k7RUFDRSxZQUFBO0VBQ0EseUJDckRtQjtBRDBDekI7QUUxQkU7RUZtQ0U7SUFLSSxXQUFBO0VBVk47QUFDRjtBQWNNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBWlI7QUFjUTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFaVjtBQWlCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDN0VTO0VEOEVULGtCQUFBO0FBZk47QUFpQk07RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJDdEZpQjtBRHNFekI7QUFtQk07RUFDRSx5QkFBQTtBQWpCUjtBQW9CTTtFQUNFLDBCQUFBO0FBbEJSO0FBdUJFOztFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFyQkoiLCJmaWxlIjoicHJpdmF0ZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICM2NDkyOUU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xufVxuOmhvc3QgaGVhZGVyIGFwcC1uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IGhlYWRlciBhcHAtYnVyZ2VyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCBoZWFkZXIgLmxvZ28ge1xuICBmb250LWZhbWlseTogXCJpY29uc1wiO1xuICBmb250LXNpemU6IDU3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNjN2U2ZWU7XG59XG46aG9zdCBoZWFkZXIgLmxvZ286YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb250ZW50OiBcIu6ggFwiO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IGhlYWRlciBhcHAtbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICA6aG9zdCBoZWFkZXIgYXBwLWJ1cmdlci1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuOmhvc3QgbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuOjpuZy1kZWVwIG5nLXNpZGViYXIgLm5nLXNpZGViYXIge1xuICB3aWR0aDogMzIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Y2I2YzQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgOjpuZy1kZWVwIG5nLXNpZGViYXIgLm5nLXNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG46Om5nLWRlZXAgbmctc2lkZWJhciBhcHAtbmF2aWdhdGlvbiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46Om5nLWRlZXAgbmctc2lkZWJhciBhcHAtbmF2aWdhdGlvbiB1bCBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG46Om5nLWRlZXAgbmctc2lkZWJhciAuY2xvc2Utc2lkZWJhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCBuZy1zaWRlYmFyIC5jbG9zZS1zaWRlYmFyOmJlZm9yZSwgOjpuZy1kZWVwIG5nLXNpZGViYXIgLmNsb3NlLXNpZGViYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1JTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Y2I2YzQ7XG59XG46Om5nLWRlZXAgbmctc2lkZWJhciAuY2xvc2Utc2lkZWJhcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xufVxuOjpuZy1kZWVwIG5nLXNpZGViYXIgLmNsb3NlLXNpZGViYXI6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMTM1ZGVnKTtcbn1cbjo6bmctZGVlcCAubmctc2lkZWJhcl9fY29udGVudCxcbjo6bmctZGVlcCBkaXZbbmctc2lkZWJhci1jb250ZW50XSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbn0iLCIvLyB0eXBvZ3JhcGh5XG4kZm9udDogQ2FsaWJyaTtcbiRmb250X19zaXplOiAxNnB4OyAvLyAxNHB4O1xuJGZvbnRfX2ZhbGxiYWNrOiBzYW5zLXNlcmlmO1xuJGZvbnRfX3ByaW1hcnk6ICdTb3VyY2VTYW5zUHJvJywgJGZvbnRfX2ZhbGxiYWNrO1xuJGZvbnRfX2ljb25zOiAnaWNvbnMnO1xuXG4vLyBjb2xvcnNcbiRjb2xvcl9fYmxhY2s6ICMwMDAwMDA7XG4kY29sb3JfX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX19ibHVlOiAjOGNjZGRkO1xuJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms6ICM3Y2I2YzQ7XG4kY29sb3JfX2JsdWVfZGFyazogIzY0OTI5RTtcbiRjb2xvcl9fZXJyb3I6ICNmZjczNzM7XG4kY29sb3JfX2Rpc2FibGVkOiAjOTRiMmI5O1xuJGNvbG9yX19saWdodF9ncmF5OiAjYzdlNmVlO1xuLy8jXG5cbiRib3JkZXJfX3NpemU6IDJweDtcbiRib3JkZXJfX3JhZGl1czogMTBweDtcblxuJHNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcblxuLy8gYnJlYWtwb2ludHNcbiRicmVha3BvaW50X19zbTogMzIwcHg7XG4kYnJlYWtwb2ludF9fc21fbDogNDgwcHg7IC8vIDUwMHB4XG4kYnJlYWtwb2ludF9fbWRfczogNjIwcHg7XG4kYnJlYWtwb2ludF9fbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnRfX21kX2w6IDEwODBweDsgLy8gOTIwcHhcbiRicmVha3BvaW50X19sZzogMTI4MHB4O1xuIiwiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9sIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9sKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kX3Mge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kX3MpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21fbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fc21fbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "bTys":
    /*!****************************************!*\
      !*** ./src/app/auth/services/index.ts ***!
      \****************************************/

    /*! exports provided: AuthService */

    /***/
    function bTys(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      "N/25");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"];
      });
      /***/

    },

    /***/
    "frgL":
    /*!***************************************!*\
      !*** ./src/app/app-routing.config.ts ***!
      \***************************************/

    /*! exports provided: RoutesPaths */

    /***/
    function frgL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutesPaths", function () {
        return RoutesPaths;
      });

      var RoutesPaths;

      (function (RoutesPaths) {
        RoutesPaths["root"] = "/";
        RoutesPaths["quotes"] = "quotes";
        RoutesPaths["auth"] = "auth";
        RoutesPaths["new"] = "new";
        RoutesPaths["edit"] = "edit";
      })(RoutesPaths || (RoutesPaths = {}));
      /***/

    },

    /***/
    "gO2n":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/burger-button/burger-button.component.ts ***!
      \****************************************************************************/

    /*! exports provided: BurgerButtonComponent */

    /***/
    function gO2n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BurgerButtonComponent", function () {
        return BurgerButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BurgerButtonComponent = /*#__PURE__*/function () {
        function BurgerButtonComponent() {
          _classCallCheck(this, BurgerButtonComponent);

          this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(BurgerButtonComponent, [{
          key: "onClick",
          value: function onClick() {
            this.clicked.emit();
          }
        }]);

        return BurgerButtonComponent;
      }();

      BurgerButtonComponent.ɵfac = function BurgerButtonComponent_Factory(t) {
        return new (t || BurgerButtonComponent)();
      };

      BurgerButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BurgerButtonComponent,
        selectors: [["app-burger-button"]],
        outputs: {
          clicked: "clicked"
        },
        decls: 1,
        vars: 0,
        consts: [[3, "click"]],
        template: function BurgerButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BurgerButtonComponent_Template_button_click_0_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #ffffff;\n  border-left: 0;\n  border-right: 0;\n  cursor: pointer;\n  font-size: 0;\n  height: 24px;\n  position: relative;\n  width: 32px;\n}\nbutton[_ngcontent-%COMP%]:after {\n  background: #ffffff;\n  content: \"\";\n  height: 2px;\n  left: 0;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnVyZ2VyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSxtQkNMVztFRE1YLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFESiIsImZpbGUiOiJidXJnZXItYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvdmFyaWFibGVzLnNjc3MnO1xuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yX193aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDA7XG4gIGhlaWdodDogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzJweDtcblxuICAmOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JfX3doaXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIvLyB0eXBvZ3JhcGh5XG4kZm9udDogQ2FsaWJyaTtcbiRmb250X19zaXplOiAxNnB4OyAvLyAxNHB4O1xuJGZvbnRfX2ZhbGxiYWNrOiBzYW5zLXNlcmlmO1xuJGZvbnRfX3ByaW1hcnk6ICdTb3VyY2VTYW5zUHJvJywgJGZvbnRfX2ZhbGxiYWNrO1xuJGZvbnRfX2ljb25zOiAnaWNvbnMnO1xuXG4vLyBjb2xvcnNcbiRjb2xvcl9fYmxhY2s6ICMwMDAwMDA7XG4kY29sb3JfX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX19ibHVlOiAjOGNjZGRkO1xuJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms6ICM3Y2I2YzQ7XG4kY29sb3JfX2JsdWVfZGFyazogIzY0OTI5RTtcbiRjb2xvcl9fZXJyb3I6ICNmZjczNzM7XG4kY29sb3JfX2Rpc2FibGVkOiAjOTRiMmI5O1xuJGNvbG9yX19saWdodF9ncmF5OiAjYzdlNmVlO1xuLy8jXG5cbiRib3JkZXJfX3NpemU6IDJweDtcbiRib3JkZXJfX3JhZGl1czogMTBweDtcblxuJHNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcblxuLy8gYnJlYWtwb2ludHNcbiRicmVha3BvaW50X19zbTogMzIwcHg7XG4kYnJlYWtwb2ludF9fc21fbDogNDgwcHg7IC8vIDUwMHB4XG4kYnJlYWtwb2ludF9fbWRfczogNjIwcHg7XG4kYnJlYWtwb2ludF9fbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnRfX21kX2w6IDEwODBweDsgLy8gOTIwcHhcbiRicmVha3BvaW50X19sZzogMTI4MHB4O1xuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "jJqB":
    /*!*************************************************************!*\
      !*** ./src/app/core/interceptors/basic-auth.interceptor.ts ***!
      \*************************************************************/

    /*! exports provided: BasicAuthInterceptor */

    /***/
    function jJqB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function () {
        return BasicAuthInterceptor;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../auth/services */
      "bTys");

      var BasicAuthInterceptor = /*#__PURE__*/function () {
        function BasicAuthInterceptor(authService) {
          _classCallCheck(this, BasicAuthInterceptor);

          this.authService = authService;
          this.apiBase = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrls.quote;
          this.apiShare = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrls.share;
          this.isAuthorizationEnable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].isAuthorizationEnabled;
        }

        _createClass(BasicAuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (!this.isAuthorizationEnable) {
              return next.handle(request);
            }

            var authData = this.authService.authDataValue;
            var isLoggedIn = authData && authData.access_token;
            var isApiUrl = request.url.startsWith(this.apiBase) || request.url.startsWith(this.apiShare);

            if (isLoggedIn && isApiUrl) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Basic ".concat(authData.access_token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return BasicAuthInterceptor;
      }();

      BasicAuthInterceptor.ɵfac = function BasicAuthInterceptor_Factory(t) {
        return new (t || BasicAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      BasicAuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BasicAuthInterceptor,
        factory: BasicAuthInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "lOrH":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/components/quote-tag/quote-tag.models-rules.ts ***!
      \***********************************************************************/

    /*! exports provided: generateUniqueId, getTagsArrayFromString, getFormattedTagsFromFormValue */

    /***/
    function lOrH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateUniqueId", function () {
        return generateUniqueId;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTagsArrayFromString", function () {
        return getTagsArrayFromString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFormattedTagsFromFormValue", function () {
        return getFormattedTagsFromFormValue;
      });
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! uuid */
      "4USb");

      function generateUniqueId() {
        return uuid__WEBPACK_IMPORTED_MODULE_0__["v4"]();
      }

      function getTagsArrayFromString(tags) {
        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';
        return tags.split(separator).map(function (tag) {
          return {
            id: generateUniqueId(),
            value: tag
          };
        });
      }

      function getFormattedTagsFromFormValue(tagForm) {
        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';
        return Object.entries(tagForm.value).filter(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              _ = _ref3[0],
              value = _ref3[1];

          return !!value;
        }).map(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              _ = _ref5[0],
              value = _ref5[1];

          return value.replace(/,/g, '');
        }).join(separator);
      }
      /***/

    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-sidebar */
      "k4pO");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components */
      "Vyfh");
      /* harmony import */


      var _interceptors_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./interceptors/basic-auth.interceptor */
      "jJqB");
      /* harmony import */


      var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./interceptors/error.interceptor */
      "Nlor");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_5__["PrivateLayoutComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]];

      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["BasicAuthInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_5__["PrivateLayoutComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"]],
          exports: [_components__WEBPACK_IMPORTED_MODULE_5__["PrivateLayoutComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]]
        });
      })();
      /***/

    },

    /***/
    "s1vL":
    /*!*************************************************!*\
      !*** ./src/app/auth/guards/login-page.guard.ts ***!
      \*************************************************/

    /*! exports provided: LoginPageGuard */

    /***/
    function s1vL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageGuard", function () {
        return LoginPageGuard;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginPageGuard = /*#__PURE__*/function () {
        function LoginPageGuard(router) {
          _classCallCheck(this, LoginPageGuard);

          this.router = router;
        }

        _createClass(LoginPageGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].isAuthorizationEnabled) {
              this.router.navigate(['/']);
              return false;
            }

            return true;
          }
        }]);

        return LoginPageGuard;
      }();

      LoginPageGuard.ɵfac = function LoginPageGuard_Factory(t) {
        return new (t || LoginPageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      LoginPageGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoginPageGuard,
        factory: LoginPageGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "tfXs":
    /*!********************************************************************!*\
      !*** ./src/app/core/components/navigation/navigation.component.ts ***!
      \********************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function tfXs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _app_navigation_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../app-navigation.config */
      "u43F");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../auth/services */
      "bTys");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/button/button.component */
      "VkHG");

      function NavigationComponent_ng_container_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var navigationItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", navigationItem_r2.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](navigationItem_r2.label);
        }
      }

      function NavigationComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationComponent_ng_container_1_li_1_Template, 3, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var navigationItem_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !navigationItem_r2.isDisabled);
        }
      }

      function NavigationComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clicked", function NavigationComponent_li_2_Template_app_button_clicked_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent(authService) {
          _classCallCheck(this, NavigationComponent);

          this.authService = authService;
          this.navigationItems = _app_navigation_config__WEBPACK_IMPORTED_MODULE_1__["APP_NAVIGATION_CONFIG"];
          this.isAuthenticated = !!this.authService.authDataValue;
          this.isAuthorizationEnable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].isAuthorizationEnabled;
        }

        _createClass(NavigationComponent, [{
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngFor", "ngForOf"], ["class", "logout", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"], [1, "logout"], ["label", "Logout", 3, "clicked"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationComponent_ng_container_1_Template, 2, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationComponent_li_2_Template, 2, 0, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.navigationItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.isAuthorizationEnable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 20px;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     a {\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     button {\n  padding: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     button, [_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     a {\n  position: relative;\n  background: transparent;\n  color: #ffffff;\n  font-family: \"SourceSansPro\", sans-serif;\n  font-weight: bold;\n  font-size: 18px;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     button:hover:after, [_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     a:hover:after {\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  bottom: -5px;\n  left: 0;\n  height: 3px;\n  background-color: #8ccddd;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.logout[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQURKO0FBS1E7RUFDRSxrQkFBQTtBQUhWO0FBTVE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUpWO0FBT1E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0NoQks7RURpQkwsd0NDdEJNO0VEdUJOLGlCQUFBO0VBQ0EsZUFBQTtBQUxWO0FBUVk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EseUJDNUJBO0FEc0JkO0FBWU07RUFDRSxpQkFBQTtBQVZSIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNjc3MvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBsaSB7XG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICBhIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLCBhIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICRjb2xvcl9fd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250X19wcmltYXJ5O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3R0b206IC01cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfX2JsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYubG9nb3V0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyB0eXBvZ3JhcGh5XG4kZm9udDogQ2FsaWJyaTtcbiRmb250X19zaXplOiAxNnB4OyAvLyAxNHB4O1xuJGZvbnRfX2ZhbGxiYWNrOiBzYW5zLXNlcmlmO1xuJGZvbnRfX3ByaW1hcnk6ICdTb3VyY2VTYW5zUHJvJywgJGZvbnRfX2ZhbGxiYWNrO1xuJGZvbnRfX2ljb25zOiAnaWNvbnMnO1xuXG4vLyBjb2xvcnNcbiRjb2xvcl9fYmxhY2s6ICMwMDAwMDA7XG4kY29sb3JfX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX19ibHVlOiAjOGNjZGRkO1xuJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms6ICM3Y2I2YzQ7XG4kY29sb3JfX2JsdWVfZGFyazogIzY0OTI5RTtcbiRjb2xvcl9fZXJyb3I6ICNmZjczNzM7XG4kY29sb3JfX2Rpc2FibGVkOiAjOTRiMmI5O1xuJGNvbG9yX19saWdodF9ncmF5OiAjYzdlNmVlO1xuLy8jXG5cbiRib3JkZXJfX3NpemU6IDJweDtcbiRib3JkZXJfX3JhZGl1czogMTBweDtcblxuJHNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcblxuLy8gYnJlYWtwb2ludHNcbiRicmVha3BvaW50X19zbTogMzIwcHg7XG4kYnJlYWtwb2ludF9fc21fbDogNDgwcHg7IC8vIDUwMHB4XG4kYnJlYWtwb2ludF9fbWRfczogNjIwcHg7XG4kYnJlYWtwb2ludF9fbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnRfX21kX2w6IDEwODBweDsgLy8gOTIwcHhcbiRicmVha3BvaW50X19sZzogMTI4MHB4O1xuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "u43F":
    /*!******************************************!*\
      !*** ./src/app/app-navigation.config.ts ***!
      \******************************************/

    /*! exports provided: APP_NAVIGATION_CONFIG */

    /***/
    function u43F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APP_NAVIGATION_CONFIG", function () {
        return APP_NAVIGATION_CONFIG;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _app_routing_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.config */
      "frgL");

      var APP_NAVIGATION_CONFIG = [{
        label: 'Home',
        path: [_app_routing_config__WEBPACK_IMPORTED_MODULE_1__["RoutesPaths"].root]
      }, {
        label: 'Quotes list',
        path: [_app_routing_config__WEBPACK_IMPORTED_MODULE_1__["RoutesPaths"].quotes]
      }, {
        label: 'Add quote',
        path: [_app_routing_config__WEBPACK_IMPORTED_MODULE_1__["RoutesPaths"].quotes, _app_routing_config__WEBPACK_IMPORTED_MODULE_1__["RoutesPaths"]["new"]],
        isDisabled: !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrls.quote
      }];
      /***/
    },

    /***/
    "uwWd":
    /*!**************************************!*\
      !*** ./src/app/auth/guards/index.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function uwWd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "PC/O");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.config */
      "frgL");
      /* harmony import */


      var _auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/guards */
      "uwWd");
      /* harmony import */


      var _auth_guards_login_page_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth/guards/login-page.guard */
      "s1vL");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/components */
      "Vyfh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        children: [{
          path: '',
          canActivate: [_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          component: _core_components__WEBPACK_IMPORTED_MODULE_5__["PrivateLayoutComponent"],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | quote-quote-module */
              [__webpack_require__.e("default~quote-edit-quote-edit-module~quote-new-quote-new-module~quote-quote-module~quotes-list-quote~f47df4a7"), __webpack_require__.e("common"), __webpack_require__.e("quote-quote-module")]).then(__webpack_require__.bind(null,
              /*! ./quote/quote.module */
              "3gGh")).then(function (m) {
                return m.QuoteModule;
              });
            }
          }, {
            path: _app_routing_config__WEBPACK_IMPORTED_MODULE_2__["RoutesPaths"].quotes,
            children: [{
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | quotes-list-quotes-list-module */
                [__webpack_require__.e("default~quote-edit-quote-edit-module~quote-new-quote-new-module~quote-quote-module~quotes-list-quote~f47df4a7"), __webpack_require__.e("common"), __webpack_require__.e("quotes-list-quotes-list-module")]).then(__webpack_require__.bind(null,
                /*! ./quotes-list/quotes-list.module */
                "AP/m")).then(function (m) {
                  return m.QuotesListModule;
                });
              }
            }, {
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | quote-edit-quote-edit-module */
                [__webpack_require__.e("default~quote-edit-quote-edit-module~quote-new-quote-new-module~quote-quote-module~quotes-list-quote~f47df4a7"), __webpack_require__.e("quote-edit-quote-edit-module")]).then(__webpack_require__.bind(null,
                /*! ./quote-edit/quote-edit.module */
                "CVSR")).then(function (m) {
                  return m.QuoteEditModule;
                });
              }
            }, {
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | quote-new-quote-new-module */
                [__webpack_require__.e("default~quote-edit-quote-edit-module~quote-new-quote-new-module~quote-quote-module~quotes-list-quote~f47df4a7"), __webpack_require__.e("quote-new-quote-new-module")]).then(__webpack_require__.bind(null,
                /*! ./quote-new/quote-new.module */
                "ByUV")).then(function (m) {
                  return m.QuoteNewModule;
                });
              }
            }]
          }]
        }, {
          path: _app_routing_config__WEBPACK_IMPORTED_MODULE_2__["RoutesPaths"].auth,
          component: _core_components__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
          canActivate: [_auth_guards_login_page_guard__WEBPACK_IMPORTED_MODULE_4__["LoginPageGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | auth-auth-module */
              "auth-auth-module").then(__webpack_require__.bind(null,
              /*! ./auth/auth.module */
              "Yj9t")).then(function (m) {
                return m.AuthModule;
              });
            }
          }]
        }, {
          path: '**',
          redirectTo: ''
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vu/V":
    /*!********************************************!*\
      !*** ./src/app/shared/directives/index.ts ***!
      \********************************************/

    /*! exports provided: TemplateDirective */

    /***/
    function vuV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _template_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./template.directive */
      "Rfgh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TemplateDirective", function () {
        return _template_directive__WEBPACK_IMPORTED_MODULE_0__["TemplateDirective"];
      });
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "ziTr":
    /*!********************************************************************!*\
      !*** ./src/app/shared/components/quote-tag/quote-tag.component.ts ***!
      \********************************************************************/

    /*! exports provided: QuoteTagComponent */

    /***/
    function ziTr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteTagComponent", function () {
        return QuoteTagComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _quote_tag_models_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./quote-tag.models-rules */
      "lOrH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../button/button.component */
      "VkHG");
      /* harmony import */


      var _input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../input/input.component */
      "QlUG");

      function QuoteTagComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function QuoteTagComponent_app_input_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clear", function QuoteTagComponent_app_input_3_Template_app_input_clear_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.deleteTagById($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasClearButton", true)("id", tag_r2.id)("form", ctx_r1.form);
        }
      }

      var QuoteTagComponent = /*#__PURE__*/function () {
        function QuoteTagComponent(fb) {
          _classCallCheck(this, QuoteTagComponent);

          this.fb = fb;
          this.tags = [];
        }

        _createClass(QuoteTagComponent, [{
          key: "getValue",
          get: function get() {
            return Object(_quote_tag_models_rules__WEBPACK_IMPORTED_MODULE_1__["getFormattedTagsFromFormValue"])(this.form);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.tags = Object(_quote_tag_models_rules__WEBPACK_IMPORTED_MODULE_1__["getTagsArrayFromString"])(this.initialData);
            this.form = this.fb.group({});
            this.tags.forEach(function (tag) {
              _this4.form.addControl(tag.id, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](tag.value));
            });
          }
        }, {
          key: "addTag",
          value: function addTag() {
            var uniqueId = Object(_quote_tag_models_rules__WEBPACK_IMPORTED_MODULE_1__["generateUniqueId"])();
            this.form.addControl(uniqueId, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''));
            this.tags.push({
              id: uniqueId,
              value: ''
            });
          }
        }, {
          key: "deleteTagById",
          value: function deleteTagById(id) {
            var index = this.tags.findIndex(function (tag) {
              return tag.id === id;
            });

            if (index !== -1) {
              this.tags.splice(index, 1);
              this.form.removeControl(id);
            }
          }
        }]);

        return QuoteTagComponent;
      }();

      QuoteTagComponent.ɵfac = function QuoteTagComponent_Factory(t) {
        return new (t || QuoteTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      QuoteTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: QuoteTagComponent,
        selectors: [["app-quote-tag"]],
        inputs: {
          initialData: "initialData"
        },
        decls: 5,
        vars: 3,
        consts: [["class", "label-text", 4, "ngIf"], [3, "formGroup"], [3, "hasClearButton", "id", "form", "clear", 4, "ngFor", "ngForOf"], ["label", "Add new tag", 3, "clicked"], [1, "label-text"], [3, "hasClearButton", "id", "form", "clear"]],
        template: function QuoteTagComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuoteTagComponent_span_0_Template, 2, 0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuoteTagComponent_app_input_3_Template, 1, 3, "app-input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clicked", function QuoteTagComponent_Template_app_button_clicked_4_listener() {
              return ctx.addTag();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tags.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tags);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"]],
        styles: [".label-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ffffff;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtdGFnLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQ0thO0VESmIsZUFBQTtBQURGIiwiZmlsZSI6InF1b3RlLXRhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL3ZhcmlhYmxlcyc7XG5cbi5sYWJlbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAkY29sb3JfX3doaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIvLyB0eXBvZ3JhcGh5XG4kZm9udDogQ2FsaWJyaTtcbiRmb250X19zaXplOiAxNnB4OyAvLyAxNHB4O1xuJGZvbnRfX2ZhbGxiYWNrOiBzYW5zLXNlcmlmO1xuJGZvbnRfX3ByaW1hcnk6ICdTb3VyY2VTYW5zUHJvJywgJGZvbnRfX2ZhbGxiYWNrO1xuJGZvbnRfX2ljb25zOiAnaWNvbnMnO1xuXG4vLyBjb2xvcnNcbiRjb2xvcl9fYmxhY2s6ICMwMDAwMDA7XG4kY29sb3JfX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX19ibHVlOiAjOGNjZGRkO1xuJGNvbG9yX19ibHVlX2xpZ2h0X2Rhcms6ICM3Y2I2YzQ7XG4kY29sb3JfX2JsdWVfZGFyazogIzY0OTI5RTtcbiRjb2xvcl9fZXJyb3I6ICNmZjczNzM7XG4kY29sb3JfX2Rpc2FibGVkOiAjOTRiMmI5O1xuJGNvbG9yX19saWdodF9ncmF5OiAjYzdlNmVlO1xuLy8jXG5cbiRib3JkZXJfX3NpemU6IDJweDtcbiRib3JkZXJfX3JhZGl1czogMTBweDtcblxuJHNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcblxuLy8gYnJlYWtwb2ludHNcbiRicmVha3BvaW50X19zbTogMzIwcHg7XG4kYnJlYWtwb2ludF9fc21fbDogNDgwcHg7IC8vIDUwMHB4XG4kYnJlYWtwb2ludF9fbWRfczogNjIwcHg7XG4kYnJlYWtwb2ludF9fbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnRfX21kX2w6IDEwODBweDsgLy8gOTIwcHhcbiRicmVha3BvaW50X19sZzogMTI4MHB4O1xuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map