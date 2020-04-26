"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Upload = exports.Messages = exports.FormWithError = exports.Form = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _formGroup = require("./form-group.stories");

var _box = require("../atoms/box");

var _header = require("../atoms/header");

var _messageBox = require("./message-box");

var _dropZone = require("./drop-zone/drop-zone");

var _label = require("../atoms/label");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Molecules'
};
exports.default = _default;

const Form = () => _react.default.createElement(_box.Box, {
  m: "xxl"
}, _react.default.createElement(_header.H3, {
  mb: "xxl"
}, "All types of inputs"), _react.default.createElement(_formGroup.FormElements, null));

exports.Form = Form;

const FormWithError = () => _react.default.createElement(_box.Box, {
  m: "xxl"
}, _react.default.createElement(_header.H3, {
  mb: "xxl"
}, "With errors"), _react.default.createElement(_formGroup.FormElementsWithError, null));

exports.FormWithError = FormWithError;

const Messages = () => _react.default.createElement(_box.Box, {
  m: "xxl"
}, _react.default.createElement(_header.H3, {
  mb: "xxl"
}, "Messages"), _react.default.createElement(_header.H5, {
  mb: "xl"
}, "Variants"), _react.default.createElement(_messageBox.MessageBox, {
  message: "Some default message",
  onCloseClick: (0, _addonActions.action)('close clicked')
}), _react.default.createElement(_messageBox.MessageBox, {
  message: "Error message",
  mt: "default",
  variant: "danger",
  onCloseClick: (0, _addonActions.action)('close clicked')
}), _react.default.createElement(_messageBox.MessageBox, {
  message: "Info message",
  mt: "default",
  variant: "info",
  onCloseClick: (0, _addonActions.action)('close clicked')
}), _react.default.createElement(_header.H5, {
  mt: "xxl",
  mb: "xl"
}, "With text"), _react.default.createElement(_messageBox.MessageBox, {
  message: "Some default message",
  onCloseClick: (0, _addonActions.action)('close clicked')
}, "With inside text"), _react.default.createElement(_messageBox.MessageBox, {
  message: "Error message",
  mt: "default",
  variant: "danger",
  onCloseClick: (0, _addonActions.action)('close clicked')
}, "With inside text"), _react.default.createElement(_messageBox.MessageBox, {
  message: "Info message",
  mt: "default",
  variant: "info",
  onCloseClick: (0, _addonActions.action)('close clicked')
}, "With inside text"), _react.default.createElement(_header.H5, {
  mt: "xxl",
  mb: "xl"
}, "Small"), _react.default.createElement(_messageBox.MessageBox, {
  size: "sm",
  message: "Info message",
  mt: "default",
  variant: "info",
  icon: "AddComment",
  onCloseClick: (0, _addonActions.action)('close clicked')
}, "With inside text"));

exports.Messages = Messages;

const Upload = () => _react.default.createElement(_box.Box, {
  m: "xxl"
}, _react.default.createElement(_header.H3, {
  mb: "xxl"
}, "DropZone"), _react.default.createElement(_box.Box, {
  variant: "grey"
}, _react.default.createElement(_label.Label, {
  required: true
}, "Upload files"), _react.default.createElement(_dropZone.DropZone, {
  multiple: true,
  validate: {
    maxSize: 3291323,
    mimeTypes: ['image/png', 'image/gif']
  },
  onChange: (0, _addonActions.action)('on change')
})));

exports.Upload = Upload;