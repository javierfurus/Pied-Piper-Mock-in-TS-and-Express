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

/***/ "./src/app/controllers/about.ts":
/*!**************************************!*\
  !*** ./src/app/controllers/about.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar knexfile = __webpack_require__(/*! ../knexfile */ \"./src/app/knexfile.js\").development;\nvar knex = __webpack_require__(/*! knex */ \"knex\")(knexfile);\nexports[\"default\"] = {\n    authorization: function (req, res, next) {\n        next();\n    },\n    index: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var card;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, knex.from(\"aboutCardContentFiller\").select(\"*\")];\n                case 1:\n                    card = _a.sent();\n                    try {\n                        console.log(\"Data acquired successfully!\");\n                        // Render about and use rows from aboutCardContentFiller\n                        res.render(\"about\", { cardsContent: card });\n                    }\n                    catch (err) {\n                        console.log(err);\n                    }\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    show: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var aboutId, card, err_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    aboutId = Number(req.params.id);\n                    return [4 /*yield*/, knex\n                            .from(\"aboutCardContentFiller\")\n                            .select(\"*\")\n                            .where(\"id\", aboutId)];\n                case 1:\n                    card = _a.sent();\n                    // Render about and use rows from aboutCardContentFiller\n                    if (card) {\n                        res.json(card).status(200);\n                    }\n                    else {\n                        res.sendStatus(404);\n                    }\n                    return [3 /*break*/, 3];\n                case 2:\n                    err_1 = _a.sent();\n                    console.log(err_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); },\n};\n\n\n//# sourceURL=webpack:///./src/app/controllers/about.ts?");

/***/ }),

/***/ "./src/app/controllers/home.ts":
/*!*************************************!*\
  !*** ./src/app/controllers/home.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar knexfile = __webpack_require__(/*! ../knexfile */ \"./src/app/knexfile.js\").development;\nvar knex = __webpack_require__(/*! knex */ \"knex\")(knexfile);\nexports[\"default\"] = {\n    authorization: function (req, res, next) {\n        next();\n    },\n    index: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var rows, err_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, knex.from('cardContentFiller').select('*')];\n                case 1:\n                    rows = _a.sent();\n                    // Render index and use rows from cardContentFiller\n                    res.render('home', { cardsContent: rows });\n                    return [3 /*break*/, 3];\n                case 2:\n                    err_1 = _a.sent();\n                    console.error(err_1);\n                    res.status(500);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); }\n};\n\n\n//# sourceURL=webpack:///./src/app/controllers/home.ts?");

/***/ }),

/***/ "./src/app/controllers/join.ts":
/*!*************************************!*\
  !*** ./src/app/controllers/join.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports[\"default\"] = {\n    authorization: function (req, res, next) {\n        next();\n    },\n    index: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            // Read every row data in from aboutCardContentFiller\n            try {\n                res.render('join');\n            }\n            catch (err) {\n                console.log(err);\n                throw err;\n            }\n            return [2 /*return*/];\n        });\n    }); }\n};\n\n\n//# sourceURL=webpack:///./src/app/controllers/join.ts?");

/***/ }),

/***/ "./src/app/knexfile.js":
/*!*****************************!*\
  !*** ./src/app/knexfile.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Update with your config settings.\n\nmodule.exports = {\n  development: {\n    client: 'mysql',\n    connection: {\n      host: 'siliconvalley-express-db',\n      user: 'root',\n      password: 'toor',\n      database: 'database'\n    },\n    migrations: {\n      tableName: 'migrations',\n      directory: './migrations'\n    },\n    seeds: {\n      directory: './seeds'\n    }\n  }\n\n};\n\n\n//# sourceURL=webpack:///./src/app/knexfile.js?");

/***/ }),

/***/ "./src/app/routers/about.ts":
/*!**********************************!*\
  !*** ./src/app/routers/about.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.router = void 0;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar about_1 = __webpack_require__(/*! ../controllers/about */ \"./src/app/controllers/about.ts\");\nvar router = express.Router({ mergeParams: true });\nexports.router = router;\nrouter.use(about_1[\"default\"].authorization);\nrouter.get('/', about_1[\"default\"].index);\nrouter.get('/:id', about_1[\"default\"].show);\n\n\n//# sourceURL=webpack:///./src/app/routers/about.ts?");

/***/ }),

/***/ "./src/app/routers/home.ts":
/*!*********************************!*\
  !*** ./src/app/routers/home.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.router = void 0;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar home_1 = __webpack_require__(/*! ../controllers/home */ \"./src/app/controllers/home.ts\");\nvar router = express.Router({ mergeParams: true });\nexports.router = router;\nrouter.use(home_1[\"default\"].authorization);\nrouter.get('/', home_1[\"default\"].index);\n\n\n//# sourceURL=webpack:///./src/app/routers/home.ts?");

/***/ }),

/***/ "./src/app/routers/index.ts":
/*!**********************************!*\
  !*** ./src/app/routers/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar about_1 = __webpack_require__(/*! ./about */ \"./src/app/routers/about.ts\");\nvar home_1 = __webpack_require__(/*! ./home */ \"./src/app/routers/home.ts\");\nvar join_1 = __webpack_require__(/*! ./join */ \"./src/app/routers/join.ts\");\nvar router = express.Router({ mergeParams: true });\nvar routes = [\n    {\n        path: '/',\n        router: home_1.router\n    },\n    {\n        path: '/about',\n        router: about_1.router\n    },\n    {\n        path: '/join',\n        router: join_1.router\n    }\n];\nroutes.forEach(function (r) { return router.use(r.path, r.router); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack:///./src/app/routers/index.ts?");

/***/ }),

/***/ "./src/app/routers/join.ts":
/*!*********************************!*\
  !*** ./src/app/routers/join.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.router = void 0;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar join_1 = __webpack_require__(/*! ../controllers/join */ \"./src/app/controllers/join.ts\");\nvar router = express.Router({ mergeParams: true });\nexports.router = router;\nrouter.use(join_1[\"default\"].authorization);\nrouter.get('/', join_1[\"default\"].index);\n\n\n//# sourceURL=webpack:///./src/app/routers/join.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar createMiddleware = __webpack_require__(/*! swagger-express-middleware */ \"swagger-express-middleware\");\nvar handlebars = __webpack_require__(/*! express-handlebars */ \"express-handlebars\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar routers_1 = __webpack_require__(/*! ./app/routers */ \"./src/app/routers/index.ts\");\nvar app = express();\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\n// Set up handlebars\napp.engine('hbs', handlebars({\n    layoutsDir: path.join(__dirname, 'app', 'views', 'layouts'),\n    extname: 'hbs'\n}));\n// Setup public directory\napp.use(express.static(path.join(__dirname, 'app', 'public')));\napp.set('view engine', 'hbs');\napp.set('views', path.join(__dirname, 'app', 'views'));\ncreateMiddleware('config/swagger.json', app, function (err, middleware) {\n    if (err) {\n        console.error(err);\n    }\n    app.use(middleware.metadata(), middleware.CORS(), middleware.parseRequest(), middleware.validateRequest());\n    app.use(routers_1[\"default\"]);\n    app.listen(PORT, function () {\n        console.log(\"Server started at http://localhost:\" + PORT);\n    });\n});\n\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-handlebars\");\n\n//# sourceURL=webpack:///external_%22express-handlebars%22?");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"knex\");\n\n//# sourceURL=webpack:///external_%22knex%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

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