/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/database.json":
/*!******************************!*\
  !*** ./config/database.json ***!
  \******************************/
/*! exports provided: development, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"development\\\":{\\\"client\\\":\\\"mysql\\\",\\\"connection\\\":{\\\"host\\\":\\\"express-typescript-skeleton-db\\\",\\\"user\\\":\\\"root\\\",\\\"password\\\":\\\"toor\\\",\\\"database\\\":\\\"database\\\"},\\\"migrations\\\":{\\\"tableName\\\":\\\"migrations\\\",\\\"directory\\\":\\\"../migrations\\\"},\\\"seeds\\\":{\\\"directory\\\":\\\"../seeds\\\"}}}\");\n\n//# sourceURL=webpack:///./config/database.json?");

/***/ }),

/***/ "./src/app/controllers/user.ts":
/*!*************************************!*\
  !*** ./src/app/controllers/user.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar database_1 = __webpack_require__(/*! ../../lib/database */ \"./src/lib/database.ts\");\nvar table_1 = __webpack_require__(/*! ../../lib/table */ \"./src/lib/table.ts\");\nvar user_1 = __webpack_require__(/*! ../serializers/user */ \"./src/app/serializers/user.ts\");\nexports[\"default\"] = {\n    authorization: function (req, res, next) {\n        next();\n    },\n    index: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var users, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, database_1.database(table_1.Table.users).select()];\n                case 1:\n                    users = _a.sent();\n                    res.status(200).json(user_1[\"default\"].index(users));\n                    return [3 /*break*/, 3];\n                case 2:\n                    error_1 = _a.sent();\n                    console.error(error_1);\n                    res.sendStatus(500);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); },\n    show: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var user, error_2;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, database_1.database(table_1.Table.users).where({ id: req.params.id }).first()];\n                case 1:\n                    user = _a.sent();\n                    if (user) {\n                        res.status(200).json(user_1[\"default\"].show(user));\n                    }\n                    else {\n                        res.sendStatus(404);\n                    }\n                    return [3 /*break*/, 3];\n                case 2:\n                    error_2 = _a.sent();\n                    console.error(error_2);\n                    res.sendStatus(500);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); },\n    create: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var user, error_3;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    user = {\n                        email: req.body.email,\n                        firstName: req.body.firstName,\n                        lastName: req.body.lastName\n                    };\n                    return [4 /*yield*/, database_1.database(table_1.Table.users).insert(user)];\n                case 1:\n                    _a.sent();\n                    res.sendStatus(200);\n                    return [3 /*break*/, 3];\n                case 2:\n                    error_3 = _a.sent();\n                    console.error(error_3);\n                    res.sendStatus(500);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); },\n    update: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var user, updatedUser, error_4;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 5, , 6]);\n                    return [4 /*yield*/, database_1.database(table_1.Table.users).where({ id: req.params.id }).first()];\n                case 1:\n                    user = _a.sent();\n                    if (!user) return [3 /*break*/, 3];\n                    updatedUser = {\n                        email: req.body.email,\n                        firstName: req.body.firstName,\n                        lastName: req.body.lastName\n                    };\n                    return [4 /*yield*/, database_1.database(table_1.Table.users)\n                            .where({ id: req.params.id })\n                            .update(updatedUser)];\n                case 2:\n                    _a.sent();\n                    res.sendStatus(200);\n                    return [3 /*break*/, 4];\n                case 3:\n                    res.sendStatus(404);\n                    _a.label = 4;\n                case 4: return [3 /*break*/, 6];\n                case 5:\n                    error_4 = _a.sent();\n                    console.error(error_4);\n                    res.sendStatus(500);\n                    return [3 /*break*/, 6];\n                case 6: return [2 /*return*/];\n            }\n        });\n    }); },\n    destroy: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var user, error_5;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 5, , 6]);\n                    return [4 /*yield*/, database_1.database(table_1.Table.users).where({ id: req.params.id }).first()];\n                case 1:\n                    user = _a.sent();\n                    if (!user) return [3 /*break*/, 3];\n                    return [4 /*yield*/, database_1.database(table_1.Table.users)\n                            .where({ id: req.params.id })[\"delete\"]()];\n                case 2:\n                    _a.sent();\n                    res.sendStatus(204);\n                    return [3 /*break*/, 4];\n                case 3:\n                    res.sendStatus(404);\n                    _a.label = 4;\n                case 4: return [3 /*break*/, 6];\n                case 5:\n                    error_5 = _a.sent();\n                    console.error(error_5);\n                    res.sendStatus(500);\n                    return [3 /*break*/, 6];\n                case 6: return [2 /*return*/];\n            }\n        });\n    }); }\n};\n\n\n//# sourceURL=webpack:///./src/app/controllers/user.ts?");

/***/ }),

/***/ "./src/app/routers/index.ts":
/*!**********************************!*\
  !*** ./src/app/routers/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar user_1 = __webpack_require__(/*! ./user */ \"./src/app/routers/user.ts\");\nvar router = express.Router({ mergeParams: true });\nvar routes = [\n    {\n        path: '/user',\n        router: user_1.router\n    }\n];\nroutes.forEach(function (r) { return router.use(r.path, r.router); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack:///./src/app/routers/index.ts?");

/***/ }),

/***/ "./src/app/routers/user.ts":
/*!*********************************!*\
  !*** ./src/app/routers/user.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar user_1 = __webpack_require__(/*! ../controllers/user */ \"./src/app/controllers/user.ts\");\nvar router = express.Router({ mergeParams: true });\nexports.router = router;\nrouter.use(user_1[\"default\"].authorization);\nrouter.get('/', user_1[\"default\"].index);\nrouter.post('/', user_1[\"default\"].create);\nrouter.get('/:id', user_1[\"default\"].show);\nrouter.put('/:id', user_1[\"default\"].update);\nrouter[\"delete\"]('/:id', user_1[\"default\"].destroy);\n\n\n//# sourceURL=webpack:///./src/app/routers/user.ts?");

/***/ }),

/***/ "./src/app/serializers/user.ts":
/*!*************************************!*\
  !*** ./src/app/serializers/user.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar show = function (user) {\n    return {\n        email: user.email,\n        firstName: user.firstName,\n        lastName: user.lastName\n    };\n};\nvar index = function (users) {\n    return users.map(function (user) { return show(user); });\n};\nexports[\"default\"] = {\n    show: show,\n    index: index\n};\n\n\n//# sourceURL=webpack:///./src/app/serializers/user.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar createMiddleware = __webpack_require__(/*! swagger-express-middleware */ \"swagger-express-middleware\");\nvar routers_1 = __webpack_require__(/*! ./app/routers */ \"./src/app/routers/index.ts\");\nvar app = express();\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\ncreateMiddleware('config/swagger.json', app, function (err, middleware) {\n    if (err) {\n        console.error(err);\n    }\n    app.use(middleware.metadata(), middleware.CORS(), middleware.parseRequest(), middleware.validateRequest());\n    app.use(routers_1[\"default\"]);\n    app.listen(PORT, function () {\n        console.log(\"server started at http://localhost:\" + PORT);\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/lib/database.ts":
/*!*****************************!*\
  !*** ./src/lib/database.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Knex = __webpack_require__(/*! knex */ \"knex\");\nvar configs = __webpack_require__(/*! ../../config/database.json */ \"./config/database.json\");\nvar config = configs[\"development\" || false];\nexports.database = Knex(config);\n\n\n//# sourceURL=webpack:///./src/lib/database.ts?");

/***/ }),

/***/ "./src/lib/table.ts":
/*!**************************!*\
  !*** ./src/lib/table.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Table;\n(function (Table) {\n    Table[\"users\"] = \"users\";\n})(Table = exports.Table || (exports.Table = {}));\n\n\n//# sourceURL=webpack:///./src/lib/table.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"knex\");\n\n//# sourceURL=webpack:///external_%22knex%22?");

/***/ }),

/***/ "swagger-express-middleware":
/*!*********************************************!*\
  !*** external "swagger-express-middleware" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swagger-express-middleware\");\n\n//# sourceURL=webpack:///external_%22swagger-express-middleware%22?");

/***/ })

/******/ });