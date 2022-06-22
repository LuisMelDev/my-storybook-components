"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.Header = exports.Button = void 0;
var Button_1 = require("./stories/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
var Header_1 = require("./stories/Header");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_1.Header; } });
var Page_1 = require("./stories/Page");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return Page_1.Page; } });
__exportStar(require("./components"), exports);
