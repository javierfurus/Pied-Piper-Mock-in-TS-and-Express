"use strict";
exports.__esModule = true;
var express = require("express");
var createMiddleware = require("swagger-express-middleware");
var routers_2 = require("./app/routers");
var app = express();
var _b = process.env.PORT, PORT = _b === void 0 ? 3000 : _b;
createMiddleware('config/swagger.json', app, function (err, middleware) {
    if (err) {
        console.error(err);
    }
    app.use(middleware.metadata(), middleware.CORS(), middleware.parseRequest(), middleware.validateRequest());
    app.use(routers_2["default"]);
    app.listen(PORT, function () {
        console.log("Server started at http://localhost:" + PORT);
    });
});
