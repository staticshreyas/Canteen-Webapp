"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _table = require("../atoms/table");

var _checkBox = require("../atoms/check-box");

var _link = require("../atoms/link");

var _dropDown = require("../molecules/drop-down.stories");

var _icon = require("../atoms/icon");

var _button = require("../atoms/button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
const TableStory = () => _react.default.createElement(_table.Table, null, _react.default.createElement(_table.TableCaption, null, "Monthly savings", _react.default.createElement(_button.Button, {
  variant: "text",
  size: "sm"
}, _react.default.createElement(_icon.Icon, {
  icon: "Delete"
}), "Remove")), _react.default.createElement(_table.TableHead, null, _react.default.createElement(_table.TableRow, null, _react.default.createElement(_table.TableCell, null, _react.default.createElement(_checkBox.CheckBox, null)), _react.default.createElement(_table.TableCell, null, _react.default.createElement(_link.Link, {
  href: "/#"
}, "Name", _react.default.createElement(_icon.Icon, {
  icon: "CaretUp"
}))), _react.default.createElement(_table.TableCell, null, _react.default.createElement(_link.Link, {
  href: "/#"
}, "Last", _react.default.createElement(_icon.Icon, {
  icon: "CaretDown"
}))), _react.default.createElement(_table.TableCell, null, "Surname"), _react.default.createElement(_table.TableCell, null, "Gender"), _react.default.createElement(_table.TableCell, null, "Age"), _react.default.createElement(_table.TableCell, null, "Actions"))), _react.default.createElement(_table.TableBody, null, _react.default.createElement(_table.TableRow, null, _react.default.createElement(_table.TableCell, null, _react.default.createElement(_checkBox.CheckBox, null)), _react.default.createElement(_table.TableCell, null, "Value 1"), _react.default.createElement(_table.TableCell, null, "Value 2"), _react.default.createElement(_table.TableCell, null, "Value 2"), _react.default.createElement(_table.TableCell, null, "Value 2"), _react.default.createElement(_table.TableCell, null, "Value 2"), _react.default.createElement(_table.TableCell, null, _react.default.createElement(_dropDown.DropDownStory, null))), _react.default.createElement(_table.TableRow, null, _react.default.createElement(_table.TableCell, null, _react.default.createElement(_checkBox.CheckBox, null)), _react.default.createElement(_table.TableCell, null, "Value 1"), _react.default.createElement(_table.TableCell, null, "Value 2"), _react.default.createElement(_table.TableCell, null, "Value 2"), _react.default.createElement(_table.TableCell, null, "Value 2"), _react.default.createElement(_table.TableCell, null, "Value 2"), _react.default.createElement(_table.TableCell, null, _react.default.createElement(_dropDown.DropDownStory, null)))));

exports.TableStory = TableStory;