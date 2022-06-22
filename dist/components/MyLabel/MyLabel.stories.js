"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("./MyLabel");
exports.default = {
    title: "UI/mylabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: {
            control: "select",
        },
        color: {
            control: "select",
        },
        fontColor: {
            control: "color",
        },
        backgroundColor: {
            control: "color",
        },
    },
};
var template = function (args) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args))); };
exports.Basic = template.bind({});
exports.Basic.args = {
    label: "Hello World",
    size: "normal",
    allCaps: false,
};
exports.AllCaps = template.bind({});
exports.AllCaps.args = {
    label: "Capitalized",
    size: "normal",
    allCaps: true,
};
exports.Secondary = template.bind({});
exports.Secondary.args = {
    label: "Secondary",
    color: "secondary",
};
exports.Tertiary = template.bind({});
exports.Tertiary.args = {
    label: "Tertiary",
    color: "tertiary",
};
exports.CustomColor = template.bind({});
exports.Tertiary.args = {
    label: "Custom color",
};
