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


    __webpack_exports__["default"] = "<div class=\"sticky\"><label  style=\" font-size: x-large; position: sticky;color: whitesmoke; \">INDIA<span style=\"color: cornflowerblue;\">COVID-19</span></label>\r\n</div>\r\n    <nav id=\"navbar\" class=\"navbar navbar-inverse sticky\" >\r\n        <div class=\"container-fluid\">\r\n          <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>                        \r\n            </button>\r\n            <!-- <a class=\"navbar-brand\" href=\"#\">WebSiteName</a> -->\r\n          </div>\r\n          <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            \r\n              <!-- <li class=\"active\"><a href=\"#\">Home</a></li> -->\r\n              \r\n                \r\n              \r\n            <ul class=\"nav navbar-nav \">\r\n                <li ><a href=\"#\" [routerLink]=\"['/home']\" >Home</a></li>\r\n                <li><a href=\"#\" [routerLink]=\"['/graph']\" >Graphs</a></li>\r\n            </ul>\r\n            <!-- <ul class=\"nav navbar-nav navbar-right\">\r\n              <li class=\"dropdown\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Theme\r\n                <span class=\"caret\"></span></a>\r\n                <ul class=\"dropdown-menu\">\r\n                  <li><a href=\"#\" (click)=\"themeChange('dark')\">Dark</a></li>\r\n                  <li><a href=\"#\" (click)=\"themeChange('light')\">Light</a></li>\r\n                  \r\n                </ul>\r\n              </li>\r\n              </ul> -->\r\n          </div>\r\n        </div>\r\n      </nav>\r\n<div class=\"container-fluid\">\r\n  \r\n<router-outlet></router-outlet>\r\n</div>\r\n<div id=\"signature\" class=\"container-fluid\" >\r\n<label>{{signature}}</label></div>";
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


    __webpack_exports__["default"] = "<app-loading  *ngIf=\"!isDataLoaded\" ></app-loading>\n<div class=\"row col-md-6 col-md-offset-3\" style=\"height: 100%;\" *ngIf=\"isDataLoaded\">\n        \n                <div class=\"container-fluid\" style=\"width: 90%;\">\n                    <strong>STAY HOME <span style=\"color: royalblue;\">SAVE LIVES</span></strong>\n                <input id=\"searchInput\" class=\"form-control\" placeholder=\"Search State...\" >\n                <p>{{date | date:'medium'}}</p>\n            </div>\n            \n            \n                <table id=\"summaryTable\" class=\"table table-condensed w-auto\" >\n                    <thead>\n                        <tr>\n                            <th style=\"color: orangered;\" >Confirmed</th>\n                            <th style=\"color: royalblue;\">Active</th>\n                            <th style=\"color: green;\" >Recovered</th>\n                            <th style=\"color: gray;\">Deceased</th>\n                    </tr>\n                    </thead>\n                    <tbody *ngFor=\"let t of total\">\n                        <tr >\n                            <td style=\"color: orangered;\"><div>{{t.confirmed}}<p *ngIf=\"t.deltaConfirmed!=0\" style=\"font-size: small;\">&uarr;{{t.deltaConfirmed}}</p></div></td>\n                            <td style=\"color: royalblue;\" ><div >{{t.active}}</div></td>\n                            <td style=\"color: green;\" ><div>{{t.recovered}}<p *ngIf=\"t.deltaRecovered!=0\" style=\"font-size: small;\">&uarr;{{t.deltaRecovered}}</p></div></td>\n                            <td style=\"color: gray;\"><div>{{t.deceased}}<p *ngIf=\"t.deltaDeaths!=0\" style=\"font-size: small;\">&uarr;{{t.deltaDeaths}}</p></div></td>\n                        </tr>\n                        <tr>\n                            <td style=\"font-size: small;\" colspan=4>Last updated at:{{t.lastUpdated}}</td>\n                        </tr>\n                    </tbody>\n                   \n                </table>\n           \n        \n\n    <table class=\"table table-hover\" id=\"stateTable\">\n        \n        <thead >\n            <tr>\n            <th style=\"color: black;\">State/UT</th>\n            <th style=\"color: orangered;\">Confirmed</th>\n            <th style=\"color: royalblue;\">Active</th>\n            <th style=\"color: green;\">Recovered</th>\n            <th style=\"color: black;\">Deceased</th>\n        </tr>\n        </thead>\n    \n        <tbody *ngFor=\"let state of statewiseTemp\" >\n            <tr href=\"#\" (click)=\"getStateDetails(state.name, state.confirmed,state.deltaConfirmed, state.active, state.recover, state.deltaRecovered, state.deceased,state.deltaDeaths, state.lastUpdated)\">\n                \n                <td style=\"text-align: left;\">{{state.name}}</td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"state.deltaConfirmed!=0\" style=\"font-size: small; color: red;\">&uarr;{{state.deltaConfirmed}}&nbsp;</strong>{{state.confirmed}}</td>\n                <td>{{state.active}}</td>\n                <td style=\"text-align: right;\" ><strong *ngIf=\"state.deltaRecovered!=0\" style=\"font-size: small; color: green;\">&uarr;{{state.deltaRecovered}}&nbsp;</strong>{{state.recover}}</td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"state.deltaDeaths!=0\" style=\"font-size: small; color: gray;\">&uarr;{{state.deltaDeaths}}&nbsp;</strong>{{state.deceased}}</td>\n           \n            </tr>\n        </tbody>\n    </table>\n\n\n\n</div>\n\n";
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


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n<p>Possible reasons you are in this page are:</p>\n<ul >\n    <li>No Internet Connection.</li>\n    <li>Trying to fetch wrong URL.</li>\n</ul>\n<button class=\"btn btn-sm btn-primary\" [routerLink]=\"['/home']\"> Reload</button></div>";
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


    __webpack_exports__["default"] = "\n<div id=\"label\" class=\"row\" style=\"position: sticky;top: 15vh; z-index : 10000; background-color: #282C35;\"><label>INDIA COVID-19 Statistics</label></div>\n\n<app-loading  *ngIf=\"!isDataLoaded\" ></app-loading>\n<div class=\"row chartDiv\" *ngIf=\"isDataLoaded\">\n <div class=\" container chartContainer\" > \n    <label style=\"color: orangered;\">Confirmed Cases Over Months</label>\n<google-chart  [width]=\"320\" [height]=\"200\"  type=\"LineChart\" [data]=\"confirmedData\"  [options]=\"confirmedOptions\">\n</google-chart>\n</div>\n\n<div class=\" container chartContainer\" > \n   <label style=\"color: forestgreen;\">People Recovered</label>\n <google-chart  [width]=\"320\" [height]=\"200\" type=\"LineChart\" [data]=\"recoveredData\"  [options]=\"recoveredOptions\">\n</google-chart>\n</div>\n\n\n<div class=\" container chartContainer\"> \n   <label style=\"color: gainsboro;\">Deceased People</label>\n<google-chart   [width]=\"320\" [height]=\"200\" type=\"LineChart\" [data]=\"deceasedData\"  [options]=\"deceasedOptions\">\n</google-chart>\n</div>\n\n\n\n\n</div>\n<br>\n\n<div class=\"row pieChartDiv\" *ngIf=\"isDataLoaded\">\n\n   <div class=\"container chartContainer\" >\n      <label style=\"color: gainsboro;\">Confirmed & Deceased Cases in Months</label>\n\n     \n\n      <google-chart \n         type=\"ColumnChart\"\n         [data]=\"confirmedInMonths\"\n         [options] = \"confirmedInMonthsOptions\"\n         [width]=\"320\" [height]=\"200\">\n      </google-chart>\n      \n      </div>\n\n\n   \n   <div class=\"container chartContainer\" >\n      <label style=\"color: gainsboro;\">Infection Ratio by Gender</label>\n\n      <google-chart \n      \n         type=\"PieChart\"\n         [data]=\"infectionRatioByGender\"\n         [options] = \"infectionRatioByGenderOptions\"\n         [width]=\"320\" [height]=\"200\">\n      </google-chart>\n      \n      </div>\n\n\n    \n\n     \n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid col-md-4 col-md-offset-4\">Loading...\n    <div id=\"loader\"></div></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResourcesResourcesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"resourcesContainer\"class=\"container-fluid\">\n    <table class=\"table table-condensed\" >\n        <tbody >\n        <tr *ngFor=\"let r of resources\"> \n        <div class=\"container-fluid resource\">\n            <h5>{{r.city}}</h5>\n            \n            <div class=\"container-fluid resourceDetail\">\n                <h6>{{r.nameoftheorganisation}}</h6>\n                \n                <p>{{r.descriptionandorserviceprovided}}</p>\n                <label>{{r.phonenumber}}</label>\n            </div>\n        </div>\n        </tr>\n    </tbody>\n    </table>\n</div>\n";
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


    __webpack_exports__["default"] = "\n<app-loading  *ngIf=\"!isDataLoaded\" ></app-loading>\n<div class=\"row\" *ngIf=\"isDataLoaded\">\n<button class=\"btn btn-primary\"><i class=\"fa fa-chevron-left\" [routerLink]=\"['/home']\" ></i></button>\n</div>\n<br>\n<div id='contentBox' class=\"row col-md-6 col-md-offset-3\" *ngIf=\"isDataLoaded\">\n    <label class=\"text-danger\" style=\"font-size: xx-large; float: left; color: orangered;\">{{state}}</label>\n    <table id=\"summaryTable\" class=\"table table-condensed w-auto\" style=\"width: 100%;\">\n        <thead>\n            <tr>\n            <th style=\"color: orangered;\" >Confirmed</th>\n            <th style=\"color: royalblue;\">Active</th>\n            <th style=\"color: green;\" >Recovered</th>\n            <th style=\"color: gray;\">Deceased</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let t of total\">\n            <tr >\n                <td style=\"color: orangered;\"><div>{{t.confirmed}}<p *ngIf=\"t.deltaConfirmed!=0\" style=\"font-size: small;\">&uarr;{{t.deltaConfirmed}}</p></div></td>\n                <td style=\"color: royalblue;\" ><div >{{t.active}}</div></td>\n                <td style=\"color: green;\" ><div>{{t.recovered}}<p *ngIf=\"t.deltaRecovered!=0\" style=\"font-size: small;\">&uarr;{{t.deltaRecovered}}</p></div></td>\n                <td style=\"color: gray;\"><div>{{t.deceased}}<p *ngIf=\"t.deltaDeaths!=0\" style=\"font-size: small;\">&uarr;{{t.deltaDeaths}}</p></div></td>\n            </tr>\n            <tr>\n                <td style=\"font-size: small;\" colspan=4>Last updated at: {{t.lastUpdated}}</td>\n            </tr>\n        </tbody>\n    </table>\n    <table class=\"table table-condensed table-hover w-auto\" style=\"width: 100%;\" id=\"districtTable\">\n        <thead>\n            <tr>\n            <th style=\"color: black;\">District</th>\n            <th style=\"color: orangered;\">Confirmed</th>\n            <th style=\"color: royalblue;\">Active</th>\n            <th style=\"color: green;\">Recovered</th>\n            <th style=\"color: grey;\">Deceased</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let district of districtDataTemp\">\n            <tr >\n                <td  style=\"text-align: left;\"><div [style.background] = 'district.zone'>&nbsp;{{district.name}}</div></td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"district.deltaConfirmed !='0'\" style=\"font-size: small; color: orangered;\">&uarr;{{district.deltaConfirmed}}&nbsp;</strong>{{district.confirmed}}</td>\n                <td>{{district.active}}</td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"district.deltaRecovered !='0'\" style=\"font-size: small;  color: green;\">&uarr;{{district.deltaRecovered}}&nbsp;</strong>{{district.recovered}}</td>\n                <td style=\"text-align: right;\"><strong *ngIf=\"district.deltaDeaths !='0'\" style=\"font-size: small; color: gray;\">&uarr;{{district.deltaDeaths}}&nbsp;</strong>{{district.deceased}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"container categoryContainer\"  *ngIf=\"isDataLoaded\">\n    <div class=\"form-group\">\n        <select [(ngModel)]=\"selectedCategory\" class=\"form-control\" id=\"category\" >\n            <option [value]=\"Resources\" disabled style=\"background-color: grey;\">Resources</option>\n        <option *ngFor='let category of resourcesCategory' [value]=\"category\">{{category}}</option>\n    </select>\n</div>\n\n<app-resources [state] = \"state\" [category]=\"selectedCategory\" *ngIf=\"selectedCategory\" ></app-resources>\n</div>\n";
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
      redirectTo: '/home',
      pathMatch: 'full'
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
    }, {
      path: '**',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })],
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


    __webpack_exports__["default"] = " @media screen and (max-width: 600px){\r\n     nav.sticky{\r\n         top :0!important;\r\n     }\r\n     #myNavbar{\r\n         width: 60%;\r\n         float: right;\r\n     }\r\n     #myNavbar ul{\r\n         float: left;\r\n     }\r\n\r\n     #signature{\r\n         height: 6vh!important;\r\n         border-radius: 6px!important;\r\n     }\r\n  \r\n}\r\n\r\n\r\n div.sticky{\r\n    position:-webkit-sticky;\r\n    position:sticky;\r\n    top:0;\r\n    z-index: 100; \r\n    background-color: #1e272c;\r\n}\r\n\r\n\r\n nav.sticky{\r\n    position:-webkit-sticky;\r\n    position:sticky;\r\n    top:38px;\r\n    z-index:100; \r\n    background: transparent;\r\n    }\r\n\r\n\r\n ul li a{\r\n    text-decoration: none;\r\n    font-size:medium;\r\n    color: white;\r\n}\r\n\r\n\r\n ul li a:hover{\r\n    color:gainsboro;\r\n}\r\n\r\n\r\n nav{\r\n    background:transparent;\r\n    border: 0;\r\n    border-width: 0;\r\n    font-size: medium;\r\n\r\n}\r\n\r\n\r\n #myNavbar{\r\n    background-color: #17223B;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n button{\r\n    background-color: transparent;\r\n    height: 5vh;\r\n}\r\n\r\n\r\n #signature{\r\n    margin-top: 5vh;\r\n    text-align: center;\r\n    background-color: transparent;\r\n    color: whitesmoke;\r\n    font-size: small;\r\n    height: 8vh;\r\n    text-align: right;\r\n    border-radius: 6px!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7S0FDSTtTQUNJLGdCQUFnQjtLQUNwQjtLQUNBO1NBQ0ksVUFBVTtTQUNWLFlBQVk7S0FDaEI7S0FDQTtTQUNJLFdBQVc7S0FDZjs7S0FFQTtTQUNJLHFCQUFxQjtTQUNyQiw0QkFBNEI7S0FDaEM7O0FBRUw7OztDQUdDO0lBQ0csdUJBQWU7SUFBZixlQUFlO0lBQ2YsS0FBSztJQUNMLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7OztDQUNBO0lBQ0ksdUJBQWU7SUFBZixlQUFlO0lBQ2YsUUFBUTtJQUNSLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkI7OztDQUlKO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7Q0FFQTtJQUNJLGVBQWU7QUFDbkI7OztDQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjs7O0NBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOzs7Q0FDQztJQUNHLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7OztDQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICBuYXYuc3RpY2t5e1xyXG4gICAgICAgICB0b3AgOjAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICAjbXlOYXZiYXJ7XHJcbiAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICB9XHJcbiAgICAgI215TmF2YmFyIHVse1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICB9XHJcblxyXG4gICAgICNzaWduYXR1cmV7XHJcbiAgICAgICAgIGhlaWdodDogNnZoIWltcG9ydGFudDtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgXHJcbn1cclxuXHJcblxyXG4gZGl2LnN0aWNreXtcclxuICAgIHBvc2l0aW9uOnN0aWNreTtcclxuICAgIHRvcDowO1xyXG4gICAgei1pbmRleDogMTAwOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI3MmM7XHJcbn1cclxubmF2LnN0aWNreXtcclxuICAgIHBvc2l0aW9uOnN0aWNreTtcclxuICAgIHRvcDozOHB4O1xyXG4gICAgei1pbmRleDoxMDA7IFxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbnVsIGxpIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6bWVkaXVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IFxyXG5cclxudWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOmdhaW5zYm9ybztcclxufVxyXG5cclxubmF2e1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxufVxyXG4jbXlOYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcyMjNCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogNXZoO1xyXG59XHJcblxyXG4jc2lnbmF0dXJle1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IWltcG9ydGFudDtcclxufSJdfQ== */";
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
        this.signature = 'Developed By: ROHIT PANDEY';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!navigator.onLine) this.router.navigateByUrl('/error');
          $('.navbar-collapse li a').click(function () {
            $(".navbar-collapse").collapse('hide');
          });
        }
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
    /* harmony import */


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./loading/loading.component */
    "./src/app/loading/loading.component.ts");
    /* harmony import */


    var _resources_resources_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./resources/resources.component */
    "./src/app/resources/resources.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _state_details_state_details_component__WEBPACK_IMPORTED_MODULE_8__["StateDetailsComponent"], _graph_graph_component__WEBPACK_IMPORTED_MODULE_9__["GraphComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], _resources_resources_component__WEBPACK_IMPORTED_MODULE_13__["ResourcesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_10__["GoogleChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
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
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dataUrl).toPromise().then(function (res) {
            return res;
          })["catch"]();
        }
      }, {
        key: "getData",
        value: function getData() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].stateDistrictDataurl).toPromise().then(function (res) {
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


    __webpack_exports__["default"] = "@media only screen and (max-width: 600px){\r\n    #stateTable thead tr th {\r\n        top: 5vh!important;\r\n    }\r\n    #summaryTable tbody tr td div{\r\n        height: 15vh!important;\r\n    }\r\n}\r\n\r\n.row{\r\n    padding: 0;\r\n}\r\n\r\ninput{\r\n    margin-top: 5vh;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\n#summaryTable{\r\n    margin-top: 5vh;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n#summaryTable tr{\r\n    text-align: center;\r\n    background-color: #282C35;\r\n}\r\n\r\n#summaryTable td{\r\n    font-size: large;\r\n    \r\n}\r\n\r\n#summaryTable thead th{\r\n    font-size: smaller;\r\n   \r\n}\r\n\r\n#summaryTable tbody tr td div{\r\n    background-color: #17223B;\r\n    border-radius: 8px;\r\n    height: 10vh!important;\r\n    padding: 0.5em;\r\n    height: 100%;\r\n}\r\n\r\ntable{\r\n    table-layout: fixed;\r\n   background-color: #282C35;\r\n   margin-top: 10px;\r\n   padding: 0.5em;\r\n   word-spacing: normal;\r\n   word-break: keep-all;\r\n   \r\n}\r\n\r\nthead th{\r\n    text-align: center;\r\n    font-size: x-small;\r\n   \r\n}\r\n\r\ntbody > tr{\r\n    text-align: center;\r\n    font-size: x-small;\r\n    font-weight: 700;\r\n    line-height: 3em;\r\n    background-color: #17223B;\r\n    border-radius: 5px;\r\n   \r\n}\r\n\r\n.table-hover tbody tr:hover{\r\n    color: #17223B;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n#stateTable thead tr th{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top:14vh;\r\n    background-color: whitesmoke;\r\n    font-size: smaller;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFDQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLG1CQUFtQjtHQUNwQix5QkFBeUI7R0FDekIsZ0JBQWdCO0dBQ2hCLGNBQWM7R0FDZCxvQkFBb0I7R0FDcEIsb0JBQW9COztBQUV2Qjs7QUFPQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7O0FBRXRCOztBQUdBO0lBQ0ksY0FBYztJQUNkLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAjc3RhdGVUYWJsZSB0aGVhZCB0ciB0aCB7XHJcbiAgICAgICAgdG9wOiA1dmghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3N1bW1hcnlUYWJsZSB0Ym9keSB0ciB0ZCBkaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZoIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnJvd3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59XHJcbiNzdW1tYXJ5VGFibGV7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG59XHJcbiNzdW1tYXJ5VGFibGUgdHJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQzM1O1xyXG59XHJcbiNzdW1tYXJ5VGFibGUgdGR7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgXHJcbn1cclxuI3N1bW1hcnlUYWJsZSB0aGVhZCB0aHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgXHJcbn1cclxuI3N1bW1hcnlUYWJsZSB0Ym9keSB0ciB0ZCBkaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcyMjNCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiAxMHZoIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbnRhYmxle1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MkMzNTtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgcGFkZGluZzogMC41ZW07XHJcbiAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICAgXHJcbn1cclxuXHJcbiAgIFxyXG4gICBcclxuICAgIFxyXG5cclxuXHJcbnRoZWFkIHRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICBcclxufVxyXG50Ym9keSA+IHRye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcyMjNCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICBcclxufVxyXG5cclxuXHJcbi50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlcntcclxuICAgIGNvbG9yOiAjMTcyMjNCO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuI3N0YXRlVGFibGUgdGhlYWQgdHIgdGh7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOjE0dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgXHJcbn0iXX0= */";
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(service, dataService, router) {
        _classCallCheck(this, DashboardComponent);

        this.service = service;
        this.dataService = dataService;
        this.router = router;
        this.isDataLoaded = false;
        this.stateDistrictData = [];
        this.statewise = [];
        this.date = new Date();
        this.statewiseTemp = [];
        this.total = [];
        this.totalConfirmed = 0;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateData();
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
            }); //Display table


            _this.isDataLoaded = true;
          }).then(function () {
            _this.service.getData().then(function (res) {
              _this.data = [];
              _this.data = res;

              _this.dataService.setData(_this.data);
            });
          })["catch"]();
        }
      }, {
        key: "getStateDetails",
        value: function getStateDetails(name, confirmed, deltaConfirmed, active, recover, deltaRecovered, deceased, deltaDeaths, lastUpdated) {
          // console.log(name, confirmed,deltaConfirmed,active,recover,deltaRecovered,deceased, deltaDeaths);
          if (confirmed != 0) {
            this.dataService.setStateName(name, confirmed, deltaConfirmed, active, recover, deltaRecovered, deceased, deltaDeaths, lastUpdated);
            this.router.navigateByUrl('/state');
          }
        }
      }, {
        key: "updateData",
        value: function updateData() {
          var _this2 = this;

          this.getAllData();
          setInterval(function () {
            _this2.date = new Date();
          }, 1000);
          setInterval(function () {
            _this2.getAllData();
          }, 30000);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dasboard_service__WEBPACK_IMPORTED_MODULE_2__["DasboardService"]
      }, {
        type: _data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
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


    __webpack_exports__["default"] = "div{\r\n    padding: 2em;\r\n    font-size: smaller;\r\n    width: auto;\r\n    text-align: left;\r\n}\r\ndiv ul{\r\n    margin-top: 2vh;\r\n    margin-bottom: 5vh;\r\n    margin: 0;list-style-type: circle;\r\n}\r\ndiv ul li{\r\n    padding-left:0 ;\r\n    margin-left: 0;\r\n    text-indent: -10px;\r\n}\r\nbutton{\r\n    margin-top: 10vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTLENBQUMsdUJBQXVCO0FBQ3JDO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5kaXYgdWx7XHJcbiAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICBtYXJnaW46IDA7bGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XHJcbn1cclxuXHJcbmRpdiB1bCBsaXtcclxuICAgIHBhZGRpbmctbGVmdDowIDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC0xMHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbn0iXX0= */";
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


    __webpack_exports__["default"] = "@media only screen and (max-width: 600px) {\r\n  div.chartContainer{\r\n       text-align: center!important;\r\n       margin-top: 5vh!important;\r\n       margin-left: 1vw!important;\r\n       float: none!important;\r\n    }\r\n    .chartDiv{\r\n        text-align: center!important;\r\n    }\r\n    #label{\r\n      top : 5vh!important;\r\n    }\r\n  \r\n  }\r\n\r\ndiv.chartDiv{\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\ndiv.chartContainer{\r\n  background-color: #1e272c;\r\n text-align: center;\r\n align-items: center;\r\n border-radius: 5px;\r\n padding: 10px;\r\n margin-top: 20px;\r\n float: left;\r\n width: -webkit-fit-content;\r\n width: -moz-fit-content;\r\n width: fit-content;\r\n}\r\n\r\ndiv.pieChartDiv{\r\n  margin-top: 10vh;\r\n  display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO09BQ0ssNEJBQTRCO09BQzVCLHlCQUF5QjtPQUN6QiwwQkFBMEI7T0FDMUIscUJBQXFCO0lBQ3hCO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFRjs7QUFFRjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsMEJBQWtCO0NBQWxCLHVCQUFrQjtDQUFsQixrQkFBa0I7QUFDbkI7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBkaXYuY2hhcnRDb250YWluZXJ7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgICAgbWFyZ2luLXRvcDogNXZoIWltcG9ydGFudDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAxdnchaW1wb3J0YW50O1xyXG4gICAgICAgZmxvYXQ6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNoYXJ0RGl2e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjbGFiZWx7XHJcbiAgICAgIHRvcCA6IDV2aCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuZGl2LmNoYXJ0RGl2e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5jaGFydENvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyNzJjO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIGJvcmRlci1yYWRpdXM6IDVweDtcclxuIHBhZGRpbmc6IDEwcHg7XHJcbiBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gZmxvYXQ6IGxlZnQ7XHJcbiB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuZGl2LnBpZUNoYXJ0RGl2e1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */";
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
    /* harmony import */


    var _data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data/data.service */
    "./src/app/data/data.service.ts");

    var GraphComponent = /*#__PURE__*/function () {
      function GraphComponent(service, dataService) {
        _classCallCheck(this, GraphComponent);

        this.service = service;
        this.dataService = dataService;
        this.isDataLoaded = false;
        this.totalMale = 0;
        this.totalFemale = 0;
        this.totalOthers = 0;
        this.confirmedData = [];
        this.recoveredData = [];
        this.deceasedData = [];
        this.infectionRatioByGender = [['Gender', 'Numbers']];
        this.confirmedInMonths = [];
        this.confirmedInMonthsOptions = {
          colors: ['red', 'grey'],
          columnNames: ['Confirmed', 'Deceased'],
          legend: {
            position: 'top'
          },
          is3D: true
        };
        this.recoveredInMonths = [];
        this.deceasedInMonths = [];
        this.deceasedInMonthsOptions = {
          colors: ['grey'],
          legend: 'none'
        };
        this.arr = [];
        this.infectionRatioByGenderOptions = {
          colors: ['#85929E', '#e6693e', '#455AF3'],
          is3D: true
        };
        this.confirmedOptions = {
          //   hAxis: {
          //     title: 'Date'
          //  },
          //  vAxis:{
          //     title: 'Number of People Infected in India'
          //  } 
          backgroundColor: '#f5f5f5',
          legend: 'none',
          colors: ['red']
        };
        this.recoveredOptions = {
          backgroundColor: '#f5f5f5',
          colors: ['green'],
          legend: 'none'
        };
        this.deceasedOptions = {
          backgroundColor: '#f5f5f5',
          colors: ['gray'],
          legend: 'none'
        };
      }

      _createClass(GraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getRawData();
        }
      }, {
        key: "updateChart",
        value: function updateChart() {
          var totalInMonth = 0;
          var deceasedInMonth = 0;
          var startMonth = 'March';

          for (var month in this.dataService.getAllData()['cases_time_series']) {
            if (!(this.dataService.getAllData()['cases_time_series'][month].date.includes("January") || this.dataService.getAllData()['cases_time_series'][month].date.includes("February"))) {
              this.arr = [];
              this.arr.push(this.dataService.getAllData()['cases_time_series'][month].date);
              this.arr.push(Number(this.dataService.getAllData()['cases_time_series'][month].totalconfirmed));
              this.confirmedData.push(this.arr);
              this.arr = [];
              this.arr.push(this.dataService.getAllData()['cases_time_series'][month].date);
              this.arr.push(Number(this.dataService.getAllData()['cases_time_series'][month].totalrecovered));
              this.recoveredData.push(this.arr);
              this.arr = [];
              this.arr.push(this.dataService.getAllData()['cases_time_series'][month].date);
              this.arr.push(Number(this.dataService.getAllData()['cases_time_series'][month].totaldeceased));
              this.deceasedData.push(this.arr);
              this.arr = [];

              if (this.dataService.getAllData()['cases_time_series'][month].date.includes(startMonth)) {
                totalInMonth += Number(this.dataService.getAllData()['cases_time_series'][month].dailyconfirmed);
                deceasedInMonth += Number(this.dataService.getAllData()['cases_time_series'][month].dailydeceased);
              } else {
                this.confirmedInMonths.push([startMonth, totalInMonth, deceasedInMonth]);
                startMonth = this.dataService.getAllData()['cases_time_series'][month].date.trim().slice(2);
                totalInMonth = Number(this.dataService.getAllData()['cases_time_series'][month].dailyconfirmed);
                deceasedInMonth = Number(this.dataService.getAllData()['cases_time_series'][month].dailydeceased);
              }
            }
          }

          this.confirmedInMonths.push([startMonth, totalInMonth, deceasedInMonth]);
          this.isDataLoaded = true;
        }
      }, {
        key: "getRawData",
        value: function getRawData() {
          var _this3 = this;

          this.service.getRawData().then(function (res) {
            _this3.data = res;
          }).then(function () {
            _this3.updatePieChart(_this3.data);
          }).then(function () {
            return _this3.updateChart();
          }).then(function () {})["catch"]();
        }
      }, {
        key: "updatePieChart",
        value: function updatePieChart(data) {
          //console.log(data); 
          for (var d in data['raw_data']) {
            if (data['raw_data'][d].gender == 'M') {
              this.totalMale += 1;
            } else if (data['raw_data'][d].gender == 'F') {
              this.totalFemale += 1;
            } else if (data['raw_data'][d].gender == '') {
              this.totalOthers += 1;
            }
          }

          this.arr = [];
          this.infectionRatioByGender = [];
          this.arr.push("Male");
          this.arr.push(Number(this.totalMale));
          this.infectionRatioByGender.push(this.arr);
          this.arr = [];
          this.arr.push("Female");
          this.arr.push(Number(this.totalFemale));
          this.infectionRatioByGender.push(this.arr);
          this.arr = [];
          this.arr.push("Not Specified");
          this.arr.push(Number(this.totalOthers));
          this.infectionRatioByGender.push(this.arr);
          this.arr = [];
        }
      }]);

      return GraphComponent;
    }();

    GraphComponent.ctorParameters = function () {
      return [{
        type: _graph_service__WEBPACK_IMPORTED_MODULE_2__["GraphService"]
      }, {
        type: _data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
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
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].dataUrl).toPromise().then(function (res) {
            return res;
          })["catch"]();
        }
      }, {
        key: "getRawData",
        value: function getRawData() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rawDataUrl).toPromise().then(function (res) {
            return res;
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
  "./src/app/loading/loading.component.css":
  /*!***********************************************!*\
    !*** ./src/app/loading/loading.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoadingLoadingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\ndiv #loader{\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius : 50%;\r\n    background-color: red;\r\n    position: relative;\r\n    -webkit-animation-name: loader;\r\n            animation-name: loader;\r\n    -webkit-animation-duration: 4s;\r\n            animation-duration: 4s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n     \r\n  }\r\n\r\n@-webkit-keyframes loader {\r\n    0%   {background-color:red; left:50px; top:0px;}\r\n    25%  {background-color:yellow; left:250px; top:0px;}\r\n    50%  {background-color:blue; left:250px; top:200px;}\r\n    75%  {background-color:green; left:50px; top:200px;}\r\n    100% {background-color:red; left:50px; top:0px;}\r\n  }\r\n\r\n@keyframes loader {\r\n    0%   {background-color:red; left:50px; top:0px;}\r\n    25%  {background-color:yellow; left:250px; top:0px;}\r\n    50%  {background-color:blue; left:250px; top:200px;}\r\n    75%  {background-color:green; left:50px; top:200px;}\r\n    100% {background-color:red; left:50px; top:0px;}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMkNBQW1DO1lBQW5DLG1DQUFtQzs7RUFFckM7O0FBRUE7SUFDRSxNQUFNLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7SUFDL0MsTUFBTSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO0lBQ25ELE1BQU0scUJBQXFCLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQztJQUNuRCxNQUFNLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7SUFDbkQsTUFBTSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO0VBQ2pEOztBQU5BO0lBQ0UsTUFBTSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO0lBQy9DLE1BQU0sdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQztJQUNuRCxNQUFNLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7SUFDbkQsTUFBTSxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0lBQ25ELE1BQU0sb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztFQUNqRCIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmRpdiAjbG9hZGVye1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzIDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxvYWRlcjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICBcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBsb2FkZXIge1xyXG4gICAgMCUgICB7YmFja2dyb3VuZC1jb2xvcjpyZWQ7IGxlZnQ6NTBweDsgdG9wOjBweDt9XHJcbiAgICAyNSUgIHtiYWNrZ3JvdW5kLWNvbG9yOnllbGxvdzsgbGVmdDoyNTBweDsgdG9wOjBweDt9XHJcbiAgICA1MCUgIHtiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7IGxlZnQ6MjUwcHg7IHRvcDoyMDBweDt9XHJcbiAgICA3NSUgIHtiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuOyBsZWZ0OjUwcHg7IHRvcDoyMDBweDt9XHJcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOnJlZDsgbGVmdDo1MHB4OyB0b3A6MHB4O31cclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/loading/loading.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/loading/loading.component.ts ***!
    \**********************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoadingComponent = /*#__PURE__*/function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingComponent;
    }();

    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading.component.css */
      "./src/app/loading/loading.component.css"))["default"]]
    })], LoadingComponent);
    /***/
  },

  /***/
  "./src/app/resources/resources.component.css":
  /*!***************************************************!*\
    !*** ./src/app/resources/resources.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResourcesResourcesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#resourcesContainer{\r\n    background-color: #1e272c;\r\n    text-align: left;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    \r\n    \r\n}\r\ntbody{\r\n    margin: 2vh 0 2vh 0;\r\n    display: block;\r\n    max-height: 85vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    \r\n}\r\n.resource{\r\n    margin-top: 15px;\r\n    background-color: #282C35;\r\n    color: cadetblue;\r\n    border-radius: 10px;\r\n    border-style: solid;\r\n    border-width: 0px;\r\n    border-color: whitesmoke;\r\n    box-shadow:1px 1px 4px grey;\r\n    \r\n}\r\n.resourceDetail{\r\n    text-align: justify;\r\n    float: left;\r\n    padding: 10px;\r\n    width: 100%;\r\n    margin-bottom: 2vh;\r\n    background-color: #1e272c;\r\n}\r\n.resourceDetail h6{\r\n    font-weight: 900;\r\n    color: royalblue;\r\n}\r\n.resourceDetail p{\r\n    text-align: left;\r\n    justify-content: left;\r\n    font-size: small;\r\n    font-stretch: condensed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2VzL3Jlc291cmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVzs7O0FBR2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsMkJBQTJCOztBQUUvQjtBQUlBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZXNvdXJjZXNDb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyNzJjO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxudGJvZHl7XHJcbiAgICBtYXJnaW46IDJ2aCAwIDJ2aCAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtaGVpZ2h0OiA4NXZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIFxyXG59XHJcbi5yZXNvdXJjZXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQzM1O1xyXG4gICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3gtc2hhZG93OjFweCAxcHggNHB4IGdyZXk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4ucmVzb3VyY2VEZXRhaWx7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyNzJjO1xyXG59XHJcbi5yZXNvdXJjZURldGFpbCBoNntcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogcm95YWxibHVlO1xyXG59XHJcbi5yZXNvdXJjZURldGFpbCBwe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXN0cmV0Y2g6IGNvbmRlbnNlZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/resources/resources.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/resources/resources.component.ts ***!
    \**************************************************/

  /*! exports provided: ResourcesComponent */

  /***/
  function srcAppResourcesResourcesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function () {
      return ResourcesComponent;
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


    var _resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resources.service */
    "./src/app/resources/resources.service.ts");

    var ResourcesComponent = /*#__PURE__*/function () {
      function ResourcesComponent(service) {
        _classCallCheck(this, ResourcesComponent);

        this.service = service;
        this.resources = [];
      }

      _createClass(ResourcesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.getResources(changes.category.currentValue);
        }
      }, {
        key: "getResources",
        value: function getResources(category) {
          var _this4 = this;

          this.service.getResources().then(function (res) {
            _this4.resources = [];
            res['resources'].forEach(function (element) {
              if (element.state == _this4.state && element.category == category) {
                _this4.resources.push({
                  category: element.category,
                  city: element.city,
                  descriptionandorserviceprovided: element.descriptionandorserviceprovided,
                  nameoftheorganisation: element.nameoftheorganisation,
                  phonenumber: element.phonenumber
                });
              }
            });
          })["catch"]();
        }
      }]);

      return ResourcesComponent;
    }();

    ResourcesComponent.ctorParameters = function () {
      return [{
        type: _resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResourcesComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResourcesComponent.prototype, "state", void 0);
    ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resources',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resources.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resources.component.css */
      "./src/app/resources/resources.component.css"))["default"]]
    })], ResourcesComponent);
    /***/
  },

  /***/
  "./src/app/resources/resources.service.ts":
  /*!************************************************!*\
    !*** ./src/app/resources/resources.service.ts ***!
    \************************************************/

  /*! exports provided: ResourcesService */

  /***/
  function srcAppResourcesResourcesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesService", function () {
      return ResourcesService;
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

    var ResourcesService = /*#__PURE__*/function () {
      function ResourcesService(http) {
        _classCallCheck(this, ResourcesService);

        this.http = http;
      }

      _createClass(ResourcesService, [{
        key: "getResources",
        value: function getResources() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].resourcesUrl).toPromise().then(function (resources) {
            return resources;
          })["catch"]();
        }
      }]);

      return ResourcesService;
    }();

    ResourcesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ResourcesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ResourcesService);
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


    __webpack_exports__["default"] = "@media only screen and (max-width: 600px){\r\n    #districtTable thead tr th {\r\n        top: 5vh!important;\r\n    }\r\n    div.categoryContainer{\r\n       \r\n        width: -webkit-fit-content!important;\r\n       \r\n        width: -moz-fit-content!important;\r\n       \r\n        width: fit-content!important;\r\n        \r\n        \r\n    }\r\n   \r\n    #category option{\r\n        float: left!important;\r\n        padding: 0!important;\r\n        word-break: break-all!important;\r\n        white-space: nowrap!important;\r\n        \r\n    }\r\n    \r\n    \r\n}\r\n\r\n.row{\r\n    padding: 0;\r\n}\r\n\r\ntable{\r\n    table-layout: fixed;\r\n    margin-top: 10px;\r\n    padding: 0;\r\n    word-spacing: normal;\r\n    word-break: keep-all;\r\n    \r\n}\r\n\r\n#summaryTable{\r\n    margin-top: 10vh;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n#summaryTable td{\r\n    font-size: large;\r\n}\r\n\r\n#summaryTable tbody tr td div{\r\n    background-color: #17223B;\r\n    border-radius: 8px;\r\n    height: 10vh!important;\r\n    padding: 0.5em;\r\n    height: 100%;\r\n}\r\n\r\nthead{\r\n    text-align: center;\r\n    \r\n}\r\n\r\nth{\r\n    text-align: center;\r\n    font-size: x-small;\r\n   \r\n}\r\n\r\ntbody > tr{\r\n    text-align: center;\r\n    font-size: x-small;\r\n    font-weight: 700;\r\n    line-height: 3em;\r\n    \r\n   \r\n}\r\n\r\n#districtTable thead tr th{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 8vh;\r\n    background-color: whitesmoke;\r\n    font-size: smaller;\r\n    \r\n}\r\n\r\n#districtTable tbody tr:hover{\r\n    background-color: whitesmoke!important;\r\n    color: cadetblue;\r\n}\r\n\r\n#districtTable tbody tr td{\r\n    background-color: #17223B;\r\n}\r\n\r\n#districtTable tbody tr td div{\r\n      padding: 1px;\r\n      width: 3%;\r\n}\r\n\r\n#districtTable tbody tr:hover{\r\n    background-color: aliceblue;\r\n   \r\n}\r\n\r\nbutton{\r\n    margin-left: 1vw;\r\n    background-color: transparent;\r\n   float: left;\r\n   position: -webkit-sticky;\r\n   position: sticky;\r\n     z-index: 10000;\r\n        top:0;\r\n    \r\n}\r\n\r\ndiv.categoryContainer{\r\n    width: 52%;\r\n}\r\n\r\n#category{\r\n    background-color: #1e272c;\r\n    color: cadetblue;\r\n}\r\n\r\n#category option{\r\n    font-size: xx-small;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGUtZGV0YWlscy9zdGF0ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBOztRQUVJLG9DQUE0Qjs7UUFBNUIsaUNBQTRCOztRQUE1Qiw0QkFBNEI7OztJQUdoQzs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsK0JBQStCO1FBQy9CLDZCQUE2Qjs7SUFFakM7OztBQUdKOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLG9CQUFvQjs7QUFFeEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7OztBQUdwQjs7QUFJQTtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QixrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtNQUNNLFlBQVk7TUFDWixTQUFTO0FBQ2Y7O0FBQ0E7SUFDSSwyQkFBMkI7O0FBRS9COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtHQUM5QixXQUFXO0dBQ1gsd0JBQWdCO0dBQWhCLGdCQUFnQjtLQUNkLGNBQWM7UUFDWCxLQUFLOztBQUViOztBQUlBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLG1CQUFtQjs7QUFFdkIiLCJmaWxlIjoic3JjL2FwcC9zdGF0ZS1kZXRhaWxzL3N0YXRlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgI2Rpc3RyaWN0VGFibGUgdGhlYWQgdHIgdGgge1xyXG4gICAgICAgIHRvcDogNXZoIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGRpdi5jYXRlZ29yeUNvbnRhaW5lcntcclxuICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgI2NhdGVnb3J5IG9wdGlvbntcclxuICAgICAgICBmbG9hdDogbGVmdCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsIWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbnRhYmxle1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICAgIFxyXG59XHJcbiNzdW1tYXJ5VGFibGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxufVxyXG4jc3VtbWFyeVRhYmxlIHRke1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4jc3VtbWFyeVRhYmxlIHRib2R5IHRyIHRkIGRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzIyM0I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEwdmghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnRoZWFke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxudGh7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgIFxyXG59XHJcbnRib2R5ID4gdHJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDNlbTtcclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG4jZGlzdHJpY3RUYWJsZSB0aGVhZCB0ciB0aHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDh2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBcclxufVxyXG4jZGlzdHJpY3RUYWJsZSB0Ym9keSB0cjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2UhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxufVxyXG4jZGlzdHJpY3RUYWJsZSB0Ym9keSB0ciB0ZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzIyM0I7XHJcbn1cclxuXHJcbiNkaXN0cmljdFRhYmxlIHRib2R5IHRyIHRkIGRpdntcclxuICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICB3aWR0aDogMyU7XHJcbn1cclxuI2Rpc3RyaWN0VGFibGUgdGJvZHkgdHI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgIFxyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgZmxvYXQ6IGxlZnQ7XHJcbiAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5kaXYuY2F0ZWdvcnlDb250YWluZXJ7XHJcbiAgICB3aWR0aDogNTIlO1xyXG59XHJcbiNjYXRlZ29yeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI3MmM7XHJcbiAgICBjb2xvcjogY2FkZXRibHVlO1xyXG59XHJcbiNjYXRlZ29yeSBvcHRpb257XHJcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG4gICAgXHJcbn0iXX0= */";
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
    /* harmony import */


    var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./state.service */
    "./src/app/state-details/state.service.ts");

    var StateDetailsComponent = /*#__PURE__*/function () {
      function StateDetailsComponent(dataService, service) {
        _classCallCheck(this, StateDetailsComponent);

        this.dataService = dataService;
        this.service = service;
        this.isDataLoaded = false;
        this.resourcesCategory = [];
        this.resources = [];
        this.districtZone = [];
        this.stateDistrictData = [];
        this.total = [];
        this.districtDataTemp = [];
      }

      _createClass(StateDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stateDetail = this.dataService.getStateName();
          this.state = this.stateDetail.name;
          this.getZoneData();
        }
      }, {
        key: "showDataTemp",
        value: function showDataTemp() {
          this.total.push({
            confirmed: this.stateDetail.confirmed,
            active: this.stateDetail.active,
            recovered: this.stateDetail.recover,
            deceased: this.stateDetail.deceased,
            deltaConfirmed: this.stateDetail.deltaConfirmed,
            deltaDeaths: this.stateDetail.deltaDeaths,
            deltaRecovered: this.stateDetail.deltaRecovered,
            lastUpdated: this.stateDetail.lastUpdated
          });
          var stateDate = this.dataService.getData();
          var zone;

          for (var district in stateDate[this.state].districtData) {
            this.districtZone.forEach(function (element) {
              if (element.district == district) {
                zone = element.zone;
              }
            });
            this.districtDataTemp.push({
              name: district,
              confirmed: stateDate[this.state].districtData[district].confirmed,
              active: stateDate[this.state].districtData[district].active,
              recovered: stateDate[this.state].districtData[district].recovered,
              deceased: stateDate[this.state].districtData[district].deceased,
              deltaConfirmed: stateDate[this.state].districtData[district].delta.confirmed,
              deltaDeaths: stateDate[this.state].districtData[district].delta.deceased,
              deltaRecovered: stateDate[this.state].districtData[district].delta.recovered,
              zone: zone
            });
          }
        } //get zone data

      }, {
        key: "getZoneData",
        value: function getZoneData() {
          var _this5 = this;

          this.service.getZoneData().then(function (res) {
            res['zones'].forEach(function (element) {
              if (element.state == _this5.state) {
                _this5.districtZone.push({
                  district: element.district,
                  zone: element.zone.toLowerCase()
                });
              }
            });
          }).then(function () {
            return _this5.showDataTemp();
          }).then(function () {
            return _this5.getResources();
          }).then(function () {
            _this5.isDataLoaded = true;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getResources",
        value: function getResources() {
          var _this6 = this;

          this.service.getResources().then(function (res) {
            res['resources'].forEach(function (element) {
              if (element.state == _this6.state) {
                if (!_this6.resourcesCategory.includes(element.category)) {
                  _this6.resourcesCategory.push(element.category);
                } // this.resources.push({category:element.category, city : element.city,descriptionandorserviceprovided :element.descriptionandorserviceprovided,
                //    nameoftheorganisation : element.nameoftheorganisation, phonenumber : element.phonenumber})

              }
            });
          })["catch"]();
        }
      }]);

      return StateDetailsComponent;
    }();

    StateDetailsComponent.ctorParameters = function () {
      return [{
        type: _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
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
  "./src/app/state-details/state.service.ts":
  /*!************************************************!*\
    !*** ./src/app/state-details/state.service.ts ***!
    \************************************************/

  /*! exports provided: StateService */

  /***/
  function srcAppStateDetailsStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return StateService;
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

    var StateService = /*#__PURE__*/function () {
      function StateService(http) {
        _classCallCheck(this, StateService);

        this.http = http;
      }

      _createClass(StateService, [{
        key: "getZoneData",
        value: function getZoneData() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneDataUrl).toPromise().then(function (res) {
            return res;
          })["catch"](function (error) {
            return error;
          });
        }
      }, {
        key: "getResources",
        value: function getResources() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].resourcesUrl).toPromise().then(function (resources) {
            return resources;
          })["catch"]();
        }
      }]);

      return StateService;
    }();

    StateService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StateService);
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
      stateDistrictDataurl: 'https://api.covid19india.org/state_district_wise.json',
      dataUrl: 'https://api.covid19india.org/data.json',
      rawDataUrl: 'https://api.covid19india.org/raw_data.json',
      zoneDataUrl: 'https://api.covid19india.org/zones.json',
      resourcesUrl: 'https://api.covid19india.org/resources/resources.json'
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