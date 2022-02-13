"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var export_variables_1 = require("./export-variables");
console.log("Api Name : ", export_variables_1.ver);
console.log("Api Version : ", export_variables_1.author);
export_variables_1.extensions.forEach(function (s) {
    console.log("extensions : ", s);
});
console.log("display() : ", (0, export_variables_1.display)());
