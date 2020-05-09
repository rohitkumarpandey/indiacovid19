function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    \r\n    <label style=\" font-size: x-large; position: sticky;color: gray;\">INDIA<span style=\"color: cornflowerblue;\">COVID-19</span></label>\r\n   \r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>                        \r\n            </button>\r\n            <!-- <a class=\"navbar-brand\" href=\"#\">WebSiteName</a> -->\r\n          </div>\r\n          <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            \r\n              <!-- <li class=\"active\"><a href=\"#\">Home</a></li> -->\r\n              \r\n                \r\n              \r\n            <ul class=\"nav navbar-nav \">\r\n                <li ><a href=\"#\" [routerLink]=\"['/home']\" >Home</a></li>\r\n                <li><a href=\"#\" [routerLink]=\"['/graph']\" >Graphs</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n   \r\n    <!-- <ul type=\"none\">\r\n        <li><a href=\"#\" [routerLink]=\"['/home']\" style=\"margin-right: 2vw;\">Home</a></li>\r\n        <li><a href=\"#\" [routerLink]=\"['/graph']\" style=\"margin-left: 2vw;\">Graphs</a></li>\r\n    </ul> -->\r\n\r\n\r\n<div class=\"container-fluid\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n<div class=\"container-fluid\" style=\"text-align: right; color: aliceblue;\">\r\n<label>{{signature}}</label></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row col-md-6 col-sm-10 col-md-offset-3\">\n        \n            \n                <input id=\"searchInput\" class=\"form-control\" placeholder=\"Search State...\" style=\"width: 100%;\">\n                <p>{{date | date:'medium'}}</p>\n            \n            \n                <table id=\"summaryTable\" class=\"table table-condensed w-auto\" style=\"width: 100%;\">\n                    <thead>\n                        <tr>\n                            <th style=\"color: orangered;\" >Confirmed</th>\n                            <th style=\"color: royalblue;\">Active</th>\n                            <th style=\"color: green;\" >Recovered</th>\n                            <th style=\"color: gray;\">Deceased</th>\n                    </tr>\n                    </thead>\n                    <tbody *ngFor=\"let t of total\">\n                        <tr >\n                            <td style=\"color: orangered;\">{{t.confirmed}}<p *ngIf=\"t.deltaConfirmed!=0\" style=\"font-size: small;\">&uarr;{{t.deltaConfirmed}}</p></td>\n                            <td style=\"color: royalblue;\" >{{t.active}}</td>\n                            <td style=\"color: green;\" >{{t.recovered}}<p *ngIf=\"t.deltaRecovered!=0\" style=\"font-size: small;\">&uarr;{{t.deltaRecovered}}</p></td>\n                            <td style=\"color: gray;\">{{t.deceased}}<p *ngIf=\"t.deltaDeaths!=0\" style=\"font-size: small;\">&uarr;{{t.deltaDeaths}}</p></td>\n                        </tr>\n                        <tr>\n                            <td style=\"font-size: small;\" colspan=4>Last updated at:{{t.lastUpdated}}</td>\n                        </tr>\n                    </tbody>\n                   \n                </table>\n           \n        \n<div >\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n            <th>State/UT</th>\n            <th style=\"color: orangered;\">Cnfrmd</th>\n            <th style=\"color: royalblue;\">Active</th>\n            <th style=\"color: green;\">Rcvrd</th>\n            <th style=\"color: gray;\">Dcsd</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let state of statewiseTemp\" id=\"stateTable\">\n            <tr (click)=\"getStateDetails(state.name, state.confirmed,state.deltaConfirmed, state.active, state.recover, state.deltaRecovered, state.deceased,state.deltaDeaths, state.lastUpdated)\" [routerLink]=\"['/state']\">\n                <td style=\"text-align: left;\">{{state.name}}</td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"state.deltaConfirmed!=0\" style=\"font-size: small; color: red;\">&uarr;{{state.deltaConfirmed}}&nbsp;</strong>{{state.confirmed}}</td>\n                <td>{{state.active}}</td>\n                <td style=\"text-align: right;\" ><strong *ngIf=\"state.deltaRecovered!=0\" style=\"font-size: small; color: green;\">&uarr;{{state.deltaRecovered}}&nbsp;</strong>{{state.recover}}</td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"state.deltaDeaths!=0\" style=\"font-size: small; color: gray;\">&uarr;{{state.deltaDeaths}}&nbsp;</strong>{{state.deceased}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>error works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/graph/graph.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graph/graph.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGraphGraphComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" style=\"display: inline-block;\">\n<google-chart style=\"float: left; background-color: black\"  [width]=\"400\" [height]=\"300\" [title]=\"title\" [type]=\"type\" [data]=\"data\" [columns]=\"columnNames\" [options]=\"options\">\n</google-chart>\n <!-- <google-chart [title]=\"title\" style=\"float: left;\" [type]=\"type\" [data]=\"data\" [columns]=\"columnNames\" [options]=\"options\">\n</google-chart> -->\n</div>\n<!-- <google-chart [title]=\"title\" [type]=\"type\" [data]=\"data\" [columns]=\"columnNames\" [options]=\"options\">\n</google-chart>\n<google-chart [title]=\"title\" [type]=\"type\" [data]=\"data\" [columns]=\"columnNames\" [options]=\"options\">\n</google-chart> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/state-details/state-details.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/state-details/state-details.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStateDetailsStateDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='contentBox' class=\"row col-md-6 col-md-offset-3\">\n    <label class=\"text-danger\" style=\"font-size: xx-large; float: left; color: orangered;\">{{state}}</label>\n    <table id=\"summaryTable\" class=\"table table-condensed w-auto\" style=\"width: 100%;\">\n        <thead>\n            <tr>\n            <th style=\"color: orangered;\" >Confirmed</th>\n            <th style=\"color: royalblue;\">Active</th>\n            <th style=\"color: green;\" >Recovered</th>\n            <th style=\"color: gray;\">Deceased</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let t of total\">\n            <tr >\n                <td style=\"color: orangered;\">{{t.confirmed}}<p *ngIf=\"t.deltaConfirmed!='0'\" style=\"font-size: small;\">&uarr;{{t.deltaConfirmed}}</p></td>\n                <td style=\"color: royalblue;\" >{{t.active}}</td>\n                <td style=\"color: green;\" >{{t.recovered}}<p *ngIf=\"t.deltaRecovered !='0'\" style=\"font-size: small;\">&uarr;{{t.deltaRecovered}}</p></td>\n                <td style=\"color: gray;\">{{t.deceased}}<p *ngIf=\"t.deltaDeaths !='0'\" style=\"font-size: small;\">&uarr;{{t.deltaDeaths}}</p></td>\n            </tr>\n            <tr>\n                <td style=\"font-size: small;\" colspan=4>Last updated at:{{t.lastUpdated}}</td>\n            </tr>\n        </tbody>\n    </table>\n    <table class=\"table table-condensed table-hover w-auto\" style=\"width: 100%;\">\n        <thead>\n            <tr>\n            <th>District</th>\n            <th style=\"color: orangered;\">Cnfrmd</th>\n            <th style=\"color: royalblue;\">Active</th>\n            <th style=\"color: green;\">Rcvrd</th>\n            <th style=\"color: gray;\">Dcsd</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let district of districtDataTemp\">\n            <tr>\n                <td style=\"text-align: left;\">{{district.name}}</td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"district.deltaConfirmed !='0'\" style=\"font-size: small; color: orangered;\">&uarr;{{district.deltaConfirmed}}&nbsp;</strong>{{district.confirmed}}</td>\n                <td>{{district.active}}</td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"district.deltaRecovered !='0'\" style=\"font-size: small;  color: green;\">&#91;&uarr;{{district.deltaRecovered}}&nbsp;</strong>{{district.recovered}}</td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"district.deltaDeaths !='0'\" style=\"font-size: small; color: gray;\">&#91;&uarr;{{district.deltaDeaths}}&nbsp;</strong>{{district.deceased}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _state_details_state_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./state-details/state-details.component */
    "./src/app/state-details/state-details.component.ts");
    /* harmony import */


    var _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./graph/graph.component */
    "./src/app/graph/graph.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'home',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'state',
      component: _state_details_state_details_component__WEBPACK_IMPORTED_MODULE_4__["StateDetailsComponent"]
    }, {
      path: 'graph',
      component: _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__["GraphComponent"]
    }, {
      path: 'error',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* @media screen and (max-width: 300px){\r\n    label{\r\n        font-size: large;\r\n        color: white;\r\n    }\r\n\r\n    ul li a{\r\n        text-decoration: none;\r\n        color: red;\r\n        font-size:large;\r\n    }\r\n}\r\n\r\n\r\n.container-fluid{\r\n    margin-bottom: 20vh;\r\n}\r\n\r\nul li{\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n\r\n\r\nul{\r\n    margin-top: 5vh;\r\n}*/\r\nul li a{\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size:medium;\r\n}\r\nul li a:hover{\r\n    color:gainsboro;\r\n}\r\nnav{\r\n    background:transparent;\r\n    border: 0;\r\n    border-width: 0;\r\n    color: white;\r\n    font-size: medium;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJCRTtBQUNGO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIGxpIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOmxhcmdlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcbn1cclxuXHJcbnVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxudWx7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbn0qL1xyXG51bCBsaSBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxufSBcclxuXHJcbnVsIGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjpnYWluc2Jvcm87XHJcbn1cclxuXHJcblxyXG5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.signature = 'Creator:- Rohit Pandey!';
        navigator.onLine ? console.log('Online') : router.navigateByUrl('/error');
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _state_details_state_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./state-details/state-details.component */
    "./src/app/state-details/state-details.component.ts");
    /* harmony import */


    var _graph_graph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./graph/graph.component */
    "./src/app/graph/graph.component.ts");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _state_details_state_details_component__WEBPACK_IMPORTED_MODULE_8__["StateDetailsComponent"], _graph_graph_component__WEBPACK_IMPORTED_MODULE_9__["GraphComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_10__["GoogleChartsModule"]],
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppService = function AppService() {
      _classCallCheck(this, AppService);
    };

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/dashboard/dasboard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dasboard.service.ts ***!
    \***********************************************/

  /*! exports provided: DasboardService */

  /***/
  function srcAppDashboardDasboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DasboardService", function () {
      return DasboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DasboardService = /*#__PURE__*/function () {
      function DasboardService(http) {
        _classCallCheck(this, DasboardService);

        this.http = http;
      }

      _createClass(DasboardService, [{
        key: "getAllData",
        value: function getAllData() {
          return this.http.get('https://api.covid19india.org/data.json').toPromise().then(function (res) {
            return res;
          })["catch"]();
        }
      }, {
        key: "getData",
        value: function getData() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiurl).toPromise().then(function (res) {
            return res;
          })["catch"]();
        }
      }, {
        key: "getLastConfirmData",
        value: function getLastConfirmData() {
          return Number(localStorage.getItem('confirm'));
        }
      }, {
        key: "setLastConfirmData",
        value: function setLastConfirmData(confirm) {
          localStorage.setItem('confirm', confirm);
        }
      }]);

      return DasboardService;
    }();

    DasboardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    DasboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DasboardService);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\r\n    background-color: yellow;\r\n  }\r\n  \r\n  @media only screen and (max-width: 600px) {\r\n    body {\r\n      background-color: lightblue;\r\n    }\r\n  }\r\n  \r\n  input{\r\n    margin-top: 5vh;\r\n    margin-bottom: 5vh;\r\n}\r\n  \r\n  #summaryTable{\r\n    margin-top: 5vh;\r\n    margin-bottom: 10vh;\r\n}\r\n  \r\n  #summaryTable td{\r\n    font-size: 3vw;\r\n}\r\n  \r\n  table{\r\n    width: 100%;\r\n   margin-top: 10px;\r\n}\r\n  \r\n  td{\r\n    word-break:normal;\r\n}\r\n  \r\n  thead{\r\n    text-align: center;\r\n    \r\n}\r\n  \r\n  th{\r\n    text-align: center;\r\n}\r\n  \r\n  tbody > tr{\r\n    text-align: center\r\n   \r\n}\r\n  \r\n  .table-hover tbody tr:hover{\r\n    color: #17223B;\r\n    background-color: whitesmoke;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjs7RUFHRjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0VBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztFQUNBO0lBQ0ksY0FBYztBQUNsQjs7RUFDQTtJQUNJLFdBQVc7R0FDWixnQkFBZ0I7QUFDbkI7O0VBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0VBS0E7SUFDSSxrQkFBa0I7O0FBRXRCOztFQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztFQUNBO0lBQ0k7O0FBRUo7O0VBRUE7SUFDSSxjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbmlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59XHJcbiNzdW1tYXJ5VGFibGV7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG59XHJcbiNzdW1tYXJ5VGFibGUgdGR7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxufVxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbnRke1xyXG4gICAgd29yZC1icmVhazpub3JtYWw7XHJcbn1cclxuICAgXHJcbiAgIFxyXG4gICAgXHJcblxyXG50aGVhZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbnRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRib2R5ID4gdHJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgXHJcbn1cclxuXHJcbi50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlcntcclxuICAgIGNvbG9yOiAjMTcyMjNCO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dasboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dasboard.service */
    "./src/app/dashboard/dasboard.service.ts");
    /* harmony import */


    var _data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data/data.service */
    "./src/app/data/data.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(service, dataService) {
        _classCallCheck(this, DashboardComponent);

        this.service = service;
        this.dataService = dataService;
        this.updatedConfirm = 0;
        this.stateDistrictData = [];
        this.statewise = [];
        this.date = new Date();
        this.statewiseTemp = [];
        this.total = [];
        this.totalConfirmed = 0;
        this.getStateWiseData();
        this.getAllData();
        this.updateData();
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAllData",
        value: function getAllData() {
          var _this = this;

          this.service.getAllData().then(function (res) {
            _this.tempData = res;

            _this.dataService.setAllData(_this.tempData); //console.log("confirmed cases "+ this.tempData['statewise'][0].active);


            _this.total = [];

            _this.total.push({
              confirmed: _this.tempData['statewise'][0].confirmed,
              active: _this.tempData['statewise'][0].active,
              recovered: _this.tempData['statewise'][0].recovered,
              deceased: _this.tempData['statewise'][0].deaths,
              deltaConfirmed: _this.tempData['statewise'][0].deltaconfirmed,
              deltaDeaths: _this.tempData['statewise'][0].deltadeaths,
              deltaRecovered: _this.tempData['statewise'][0].deltarecovered,
              lastUpdated: _this.tempData['statewise'][0].lastupdatedtime
            });

            _this.statewiseTemp = [];

            _this.tempData['statewise'].forEach(function (state) {
              if (!(state.state == "Total")) {
                _this.statewiseTemp.push({
                  name: state.state,
                  confirmed: state.confirmed,
                  active: state.active,
                  recover: state.recovered,
                  deceased: state.deaths,
                  deltaConfirmed: state.deltaconfirmed,
                  deltaDeaths: state.deltadeaths,
                  deltaRecovered: state.deltarecovered,
                  lastUpdated: state.lastupdatedtime,
                  statenotes: state.statenotes
                });
              }
            });
          })["catch"]();
        }
      }, {
        key: "getStateWiseData",
        value: function getStateWiseData() {
          var _this2 = this;

          this.service.getData().then(function (res) {
            _this2.data = res;

            _this2.dataService.setData(_this2.data);
          })["catch"]();
        }
      }, {
        key: "getStateDetails",
        value: function getStateDetails(name, confirmed, deltaConfirmed, active, recover, deltaRecovered, deceased, deltaDeaths, lastUpdated) {
          // console.log(name, confirmed,deltaConfirmed,active,recover,deltaRecovered,deceased, deltaDeaths);
          this.dataService.setStateName(name, confirmed, deltaConfirmed, active, recover, deltaRecovered, deceased, deltaDeaths, lastUpdated);
        }
      }, {
        key: "updateData",
        value: function updateData() {
          var _this3 = this;

          setInterval(function () {
            _this3.date = new Date();
          }, 1000);
          setInterval(function () {
            _this3.getAllData();

            _this3.getStateWiseData();
          }, 30000);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#searchInput').on('keyup', function () {
              var value = jquery__WEBPACK_IMPORTED_MODULE_4__(this).val().toString().toLowerCase();
              jquery__WEBPACK_IMPORTED_MODULE_4__("#stateTable tr").filter(function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).toggle(jquery__WEBPACK_IMPORTED_MODULE_4__(this).text().toLowerCase().indexOf(value) > -1);
                return true;
              });
            });
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dasboard_service__WEBPACK_IMPORTED_MODULE_2__["DasboardService"]
      }, {
        type: _data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/data/data.service.ts":
  /*!**************************************!*\
    !*** ./src/app/data/data.service.ts ***!
    \**************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
      }

      _createClass(DataService, [{
        key: "setData",
        value: function setData(data) {
          localStorage.setItem('data', JSON.stringify(data));
        }
      }, {
        key: "setAllData",
        value: function setAllData(allData) {
          localStorage.setItem('allData', JSON.stringify(allData));
        }
      }, {
        key: "getAllData",
        value: function getAllData() {
          return JSON.parse(localStorage.getItem('allData'));
        }
      }, {
        key: "getData",
        value: function getData() {
          return JSON.parse(localStorage.getItem('data'));
        }
      }, {
        key: "setStateName",
        value: function setStateName(name, confirmed, deltaConfirmed, active, recover, deltaRecovered, deceased, deltaDeaths, lastUpdated) {
          this.stateData = {
            name: name,
            confirmed: confirmed,
            deltaConfirmed: deltaConfirmed,
            active: active,
            recover: recover,
            deltaRecovered: deltaRecovered,
            deceased: deceased,
            deltaDeaths: deltaDeaths,
            lastUpdated: lastUpdated
          }; //console.log(this.stateData);

          localStorage.setItem('stateDetail', JSON.stringify(this.stateData));
        }
      }, {
        key: "getStateName",
        value: function getStateName() {
          return JSON.parse(localStorage.getItem('stateDetail'));
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/error/error.component.css":
  /*!*******************************************!*\
    !*** ./src/app/error/error.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent(router) {
        _classCallCheck(this, ErrorComponent);

        this.router = router;
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/error/error.component.css"))["default"]]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/graph/graph.component.css":
  /*!*******************************************!*\
    !*** ./src/app/graph/graph.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppGraphGraphComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/graph/graph.component.ts":
  /*!******************************************!*\
    !*** ./src/app/graph/graph.component.ts ***!
    \******************************************/

  /*! exports provided: GraphComponent */

  /***/
  function srcAppGraphGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphComponent", function () {
      return GraphComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _graph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./graph.service */
    "./src/app/graph/graph.service.ts");

    var GraphComponent = /*#__PURE__*/function () {
      function GraphComponent(service) {
        _classCallCheck(this, GraphComponent);

        this.service = service;
        this.title = 'Browser market shares at a specific website, 2014';
        this.type = 'LineChart';
        this.data = [['Firefox', 45.0], ['IE', 26.8], ['Chrome', 12.8], ['Safari', 8.5], ['Opera', 6.2], ['Others', 0.7]];
        this.columnNames = ['Browser', 'Percentage'];
        this.options = {
          hAxis: {
            title: 'Person'
          },
          vAxis: {
            title: 'Fruits'
          }
        };
        this.width = 650;
        this.height = 400;
        this.updateChart();
      }

      _createClass(GraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateChart",
        value: function updateChart() {
          this.service.updateChart().then()["catch"]();
        }
      }]);

      return GraphComponent;
    }();

    GraphComponent.ctorParameters = function () {
      return [{
        type: _graph_service__WEBPACK_IMPORTED_MODULE_2__["GraphService"]
      }];
    };

    GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-graph',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./graph.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/graph/graph.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./graph.component.css */
      "./src/app/graph/graph.component.css"))["default"]]
    })], GraphComponent);
    /***/
  },

  /***/
  "./src/app/graph/graph.service.ts":
  /*!****************************************!*\
    !*** ./src/app/graph/graph.service.ts ***!
    \****************************************/

  /*! exports provided: GraphService */

  /***/
  function srcAppGraphGraphServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphService", function () {
      return GraphService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var GraphService = /*#__PURE__*/function () {
      function GraphService(http) {
        _classCallCheck(this, GraphService);

        this.http = http;
      }

      _createClass(GraphService, [{
        key: "updateChart",
        value: function updateChart() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].graphDataUrl).toPromise().then(function (res) {
            console.log(res);
          })["catch"]();
        }
      }]);

      return GraphService;
    }();

    GraphService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GraphService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GraphService);
    /***/
  },

  /***/
  "./src/app/state-details/state-details.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/state-details/state-details.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStateDetailsStateDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table{\r\n    width: 100%;\r\n   margin-top: 10vh;\r\n    \r\n}\r\n#summaryTable{\r\n    margin-top: 10vh;\r\n    margin-bottom: 10vh;\r\n}\r\n#summaryTable td{\r\n    font-size: 3vw;\r\n}\r\nthead{\r\n    text-align: center;\r\n}\r\nth{\r\n    text-align: center;\r\n}\r\ntbody > tr{\r\n    text-align: center;\r\n}\r\n.table-hover tbody tr:hover{\r\n    color: #17223B;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGUtZGV0YWlscy9zdGF0ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0dBQ1osZ0JBQWdCOztBQUVuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N0YXRlLWRldGFpbHMvc3RhdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIFxyXG59XHJcbiNzdW1tYXJ5VGFibGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxufVxyXG4jc3VtbWFyeVRhYmxlIHRke1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbn1cclxudGhlYWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGh7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGJvZHkgPiB0cntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlcntcclxuICAgIGNvbG9yOiAjMTcyMjNCO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/state-details/state-details.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/state-details/state-details.component.ts ***!
    \**********************************************************/

  /*! exports provided: StateDetailsComponent */

  /***/
  function srcAppStateDetailsStateDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateDetailsComponent", function () {
      return StateDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data/data.service */
    "./src/app/data/data.service.ts");

    var StateDetailsComponent = /*#__PURE__*/function () {
      function StateDetailsComponent(dataService) {
        _classCallCheck(this, StateDetailsComponent);

        this.dataService = dataService;
        this.stateDistrictData = [];
        this.total = [];
        this.districtDataTemp = []; //this.showData();

        this.showDataTemp();
      }

      _createClass(StateDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showDataTemp",
        value: function showDataTemp() {
          var stateDetail = this.dataService.getStateName();
          this.state = stateDetail.name; // console.log("aaaaaaaaaa"+ stateName.name);

          this.total.push({
            confirmed: stateDetail.confirmed,
            active: stateDetail.active,
            recovered: stateDetail.recover,
            deceased: stateDetail.deceased,
            deltaConfirmed: stateDetail.deltaConfirmed,
            deltaDeaths: stateDetail.deltaDeaths,
            deltaRecovered: stateDetail.deltaRecovered,
            lastUpdated: stateDetail.lastUpdated
          });
          var stateDate = this.dataService.getData();
          console.log(stateDate[this.state]);

          for (var district in stateDate[this.state].districtData) {
            //console.log(stateDate[this.state].districtData[district].confirmed);
            this.districtDataTemp.push({
              name: district,
              confirmed: stateDate[this.state].districtData[district].confirmed,
              active: stateDate[this.state].districtData[district].active,
              recovered: stateDate[this.state].districtData[district].recovered,
              deceased: stateDate[this.state].districtData[district].deceased,
              deltaConfirmed: stateDate[this.state].districtData[district].delta.confirmed,
              deltaDeaths: stateDate[this.state].districtData[district].delta.deceased,
              deltaRecovered: stateDate[this.state].districtData[district].delta.recovered
            });
          } //  stateDate[this.state].forEach(district => {
          //    console.log(district);
          //  });

        }
      }, {
        key: "showData",
        value: function showData() {// this.state = this.dataService.getStateName();
          // var stateData = this.dataService.getData()[this.dataService.getStateName()]
          // for(var district in stateData.districtData){
          //   this.confirmed += stateData.districtData[district].confirmed;
          //   this.active += stateData.districtData[district].active;
          //   this.recovered += stateData.districtData[district].recovered;
          //   this.deceased += stateData.districtData[district].deceased;
          //   this.stateDistrictData.push({name : district, confirmed: stateData.districtData[district].confirmed, active : stateData.districtData[district].active, recover: stateData.districtData[district].recovered, deceased : stateData.districtData[district].deceased})
          // }
          // var op = 0.1;
          // var box = document.getElementById('contentBox');
          // console.log(box);
          // var timer = setInterval(()=>{
          //     if(op>1){
          //       clearInterval(timer);
          //     }
          //       box.style.opacity = String(op);
          //       box.style.filter = 'alpha(opacity=' + op * 100 + ")";
          //       op += op * 0.1;
          // },20);
        }
      }]);

      return StateDetailsComponent;
    }();

    StateDetailsComponent.ctorParameters = function () {
      return [{
        type: _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    StateDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-state-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./state-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/state-details/state-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./state-details.component.css */
      "./src/app/state-details/state-details.component.css"))["default"]]
    })], StateDetailsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiurl: 'https://api.covid19india.org/state_district_wise.json',
      graphDataUrl: 'https://api.covid19india.org/data.json'
    };
    /*
     * In development mode, for easier debugging, you can ignore zone related error
     * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
     * below file. Don't forget to comment it out in production mode
     * because it will have a performance impact when errors are thrown
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\rohit\Desktop\IndiaCovid19\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map