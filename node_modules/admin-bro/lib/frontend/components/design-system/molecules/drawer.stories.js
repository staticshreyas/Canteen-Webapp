"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullDrawer = void 0;

var _react = _interopRequireDefault(require("react"));

var _drawer = require("./drawer/drawer");

var _drawerContent = require("./drawer/drawer-content");

var _drawerFooter = require("./drawer/drawer-footer");

var _header = require("../atoms/header");

var _button = require("../atoms/button");

var _icon = require("../atoms/icon");

var _box = require("../atoms/box");

var _formGroup = require("./form-group.stories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
const FullDrawer = () => _react.default.createElement(_drawer.Drawer, null, _react.default.createElement(_drawerContent.DrawerContent, null, _react.default.createElement(_header.H3, null, _react.default.createElement(_button.Button, {
  size: "icon",
  rounded: true,
  mr: "lg"
}, _react.default.createElement(_icon.Icon, {
  icon: "ChevronRight"
})), "Edit"), _react.default.createElement(_box.Box, {
  my: 7,
  p: 0
}, _react.default.createElement(_button.Button, {
  size: "sm"
}, _react.default.createElement(_icon.Icon, {
  icon: "Information"
}), "Info"), _react.default.createElement(_button.Button, {
  size: "sm",
  ml: "lg"
}, _react.default.createElement(_icon.Icon, {
  icon: "Delete"
}), "Delete")), _react.default.createElement(_formGroup.FormElements, null)), _react.default.createElement(_drawerFooter.DrawerFooter, null, _react.default.createElement(_button.Button, {
  variant: "primary"
}, "Save")));

exports.FullDrawer = FullDrawer;