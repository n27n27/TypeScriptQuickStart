"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine(name) {
        this.name = name;
    }
    Engine.prototype.getName = function () {
        return this.name;
    };
    return Engine;
}());
exports.Engine = Engine;
