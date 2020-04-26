"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationTemplate = exports.TopBar = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _box = require("../atoms/box");

var _navGroup = require("../molecules/nav-group");

var _label = require("../atoms/label");

var _text = require("../atoms/text");

var _header = require("../atoms/header");

var _icon = require("../atoms/icon");

var _loggedUser = require("../molecules/logged-user");

var _dropDown = require("../molecules/drop-down");

var _link = require("../atoms/link");

var _navigation = require("./navigation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Templates'
};
exports.default = _default;

const TopBar = () => _react.default.createElement(_box.Box, {
  height: "64px",
  flex: true,
  flexDirection: "row",
  borderBottom: "1px solid",
  borderColor: "grey20"
}, _react.default.createElement(_box.Box, {
  flexGrow: 1
}, _react.default.createElement(_box.Box, {
  py: "default",
  px: "xxl"
}, _react.default.createElement(_text.Text, {
  color: "grey60"
}, _react.default.createElement("b", null, "Admin: "), "1.7.1"), _react.default.createElement(_text.Text, {
  color: "grey60"
}, _react.default.createElement("b", null, "App: "), "1.7.1"))), _react.default.createElement(_box.Box, {
  flexShrink: 0,
  py: "default"
}, _react.default.createElement(_loggedUser.LoggedUser, {
  email: "wojtek@krysiak.com",
  title: "Administrator"
}, _react.default.createElement(_dropDown.DropDownItem, null, _react.default.createElement(_link.Link, {
  href: "#logout"
}, "Some element")))));

exports.TopBar = TopBar;

const NavigationTemplate = props => _react.default.createElement(_navigation.Navigation, props, _react.default.createElement(_box.Box, {
  flexShrink: 0,
  px: "lg",
  pb: "xxl"
}, _react.default.createElement(_header.H3, null, _react.default.createElement(_icon.Icon, {
  icon: "Menu",
  size: 24,
  pr: 5
}), "Logo")), _react.default.createElement(_box.Box, {
  flexGrow: 1
}, _react.default.createElement(_label.Label, {
  uppercase: true,
  ml: 4
}, "Navigation"), _react.default.createElement(_navGroup.NavGroup, {
  icon: "Package",
  title: "Some group"
}, _react.default.createElement(_text.Text, {
  my: 3
}, "Product matches"), _react.default.createElement(_text.Text, {
  my: 3
}, "Brands")), _react.default.createElement(_navGroup.NavGroup, {
  icon: "Trophy",
  title: "Another link"
}, _react.default.createElement(_text.Text, {
  my: 3
}, "Trophies"), _react.default.createElement(_text.Text, {
  my: 3
}, "Categories"))), _react.default.createElement(_box.Box, {
  flexShrink: 0
}, _react.default.createElement(_label.Label, {
  uppercase: true,
  ml: 4
}, "Custom pages"), _react.default.createElement(_box.Box, {
  p: "8px 0",
  ml: 4
}, _react.default.createElement(_text.Text, null, "Page some"), _react.default.createElement(_text.Text, null, "Some other page"))));

exports.NavigationTemplate = NavigationTemplate;