"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperEngine = exports.MyCar = void 0;
var MyCar = /** @class */ (function () {
    function MyCar(name) {
        this.name = name;
    }
    MyCar.prototype.getName = function () {
        return this.name;
    };
    return MyCar;
}());
exports.MyCar = MyCar;
var engine_1 = require("./engine");
Object.defineProperty(exports, "SuperEngine", { enumerable: true, get: function () { return engine_1.Engine; } });
