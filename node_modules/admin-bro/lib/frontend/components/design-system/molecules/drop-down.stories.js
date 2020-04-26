"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDownStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./drop-down/index");

var _icon = require("../atoms/icon");

var _link = require("../atoms/link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
const DropDownStory = () => _react.default.createElement(_index.DropDown, null, _react.default.createElement(_index.DropDownTrigger, {
  p: "default"
}, _react.default.createElement(_icon.Icon, {
  icon: "OverflowMenuHorizontal"
})), _react.default.createElement(_index.DropDownMenu, null, _react.default.createElement(_index.DropDownItem, null, _react.default.createElement(_link.Link, {
  href: "/some"
}, _react.default.createElement(_icon.Icon, {
  icon: "Video"
}), "Some menu item")), _react.default.createElement(_index.DropDownItem, null, _react.default.createElement(_link.Link, {
  href: "/some"
}, "Other item"))));

exports.DropDownStory = DropDownStory;