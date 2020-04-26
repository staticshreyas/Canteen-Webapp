"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyList = exports.ListWithSidebar = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _box = require("../atoms/box");

var _template = require("../templates/template.stories");

var _table = require("../organisms/table.stories");

var _header = require("../atoms/header");

var _badge = require("../atoms/badge");

var _pagination = require("../organisms/pagination");

var _text = require("../atoms/text");

var _infoBox = require("../molecules/info-box");

var _button = require("../atoms/button");

var _icon = require("../atoms/icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Pages'
};
exports.default = _default;

const ActionHeader = () => _react.default.createElement(_header.H3, {
  mb: "lg"
}, "Adding New Car", _react.default.createElement(_badge.Badge, {
  variant: "primary",
  size: "sm",
  ml: "lg"
}, "Draft"));

const ListWithSidebar = () => _react.default.createElement(_box.Box, {
  width: "1200px",
  height: "900px",
  flex: true
}, _react.default.createElement(_template.NavigationTemplate, {
  width: "300px",
  px: "lg"
}), _react.default.createElement(_box.Box, {
  flex: true,
  flexDirection: "column",
  flexGrow: 1
}, _react.default.createElement(_template.TopBar, null), _react.default.createElement(_box.Box, {
  flexGrow: 1,
  variant: "grey"
}, _react.default.createElement(ActionHeader, null), _react.default.createElement(_box.Box, {
  variant: "white"
}, _react.default.createElement(_table.TableStory, null), _react.default.createElement(_box.Box, {
  mt: "xxl"
}, _react.default.createElement(_text.Text, {
  textAlign: "center"
}, _react.default.createElement(_pagination.Pagination, {
  page: 3,
  perPage: 4,
  total: 214,
  onChange: (0, _addonActions.action)('pagination')
})))))));

exports.ListWithSidebar = ListWithSidebar;

const EmptyList = () => _react.default.createElement(_box.Box, {
  width: "1200px",
  height: "900px",
  flex: true
}, _react.default.createElement(_template.NavigationTemplate, {
  width: "300px",
  px: "lg"
}), _react.default.createElement(_box.Box, {
  flex: true,
  flexDirection: "column",
  flexGrow: 1
}, _react.default.createElement(_template.TopBar, null), _react.default.createElement(_box.Box, {
  flexGrow: 1,
  variant: "grey"
}, _react.default.createElement(ActionHeader, null), _react.default.createElement(_infoBox.InfoBox, {
  title: "There are no cars yet"
}, _react.default.createElement(_text.Text, null, "Currently we do not have any cars in the system. You can create first car by clicking create new car"), _react.default.createElement(_text.Text, {
  mt: "xl"
}, _react.default.createElement(_button.Button, {
  variant: "primary"
}, _react.default.createElement(_icon.Icon, {
  icon: "Add"
}), "Create First Car"))))));

exports.EmptyList = EmptyList;