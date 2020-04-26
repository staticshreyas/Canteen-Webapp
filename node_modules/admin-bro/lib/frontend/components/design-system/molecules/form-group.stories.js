"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormElementsWithError = exports.FormElements = void 0;

var _react = _interopRequireWildcard(require("react"));

var _formGroup = require("./form-group");

var _label = require("../atoms/label");

var _input = require("../atoms/input");

var _button = require("../atoms/button");

var _icon = require("../atoms/icon");

var _box = require("../atoms/box");

var _datePicker = require("./date-picker");

var _link = require("../atoms/link");

var _checkBox = require("../atoms/check-box");

var _text = require("../atoms/text");

var _radio = require("../atoms/radio");

var _dropZone = require("./drop-zone/drop-zone");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FormElements = props => {
  const {
    error
  } = props;
  const [date, setDate] = (0, _react.useState)('1984-03-02');
  return _react.default.createElement(_box.Box, null, _react.default.createElement(_formGroup.FormGroup, {
    error: error
  }, _react.default.createElement(_label.Label, {
    required: true
  }, "Example required input with all sorts of buttons"), _react.default.createElement(_formGroup.InputGroup, null, _react.default.createElement(_button.Button, {
    variant: "primary",
    size: "icon"
  }, _react.default.createElement(_icon.Icon, {
    icon: "ChevronRight"
  })), _react.default.createElement(_input.Input, null), _react.default.createElement(_label.Label, null, "100 KM"), _react.default.createElement(_button.Button, {
    variant: "primary",
    size: "icon"
  }, _react.default.createElement(_icon.Icon, {
    icon: "ChevronRight"
  }))), _react.default.createElement(_formGroup.FormMessage, null, "And the optional message")), _react.default.createElement(_formGroup.FormGroup, {
    error: error
  }, _react.default.createElement(_label.Label, null, "There is also not required filed with just a text"), _react.default.createElement(_formGroup.InputGroup, null, _react.default.createElement(_input.Input, null)), _react.default.createElement(_formGroup.FormMessage, null)), _react.default.createElement(_formGroup.FormGroup, {
    error: error,
    disabled: true
  }, _react.default.createElement(_label.Label, null, "Disabled field"), _react.default.createElement(_formGroup.InputGroup, null, _react.default.createElement(_input.Input, {
    disabled: true
  })), _react.default.createElement(_formGroup.FormMessage, null)), _react.default.createElement(_formGroup.FormGroup, {
    error: error
  }, _react.default.createElement(_label.Label, null, "Some date picker"), _react.default.createElement(_datePicker.DatePicker, {
    onChange: setDate,
    value: date
  }), _react.default.createElement(_formGroup.FormMessage, null)), _react.default.createElement(_formGroup.FormGroup, {
    error: error
  }, _react.default.createElement(_label.Label, null, "Some form data with button link"), _react.default.createElement(_formGroup.InputGroup, null, _react.default.createElement(_input.Input, null), _react.default.createElement(_link.Link, {
    href: "#someHref"
  }, "This is link")), _react.default.createElement(_formGroup.FormMessage, null)), _react.default.createElement(_formGroup.FormGroup, {
    error: error
  }, _react.default.createElement(_label.Label, null, "Pick the right color with check box"), _react.default.createElement(_text.Text, null, _react.default.createElement(_checkBox.CheckBox, {
    id: "check"
  }), _react.default.createElement(_label.Label, {
    inline: true,
    htmlFor: "check"
  }, "And check box")), _react.default.createElement(_text.Text, null, _react.default.createElement(_checkBox.CheckBox, {
    disabled: true,
    id: "check2",
    checked: true
  }), _react.default.createElement(_label.Label, {
    inline: true,
    disabled: true,
    htmlFor: "check2"
  }, "check box disabled")), _react.default.createElement(_formGroup.FormMessage, null)), _react.default.createElement(_formGroup.FormGroup, {
    error: error
  }, _react.default.createElement(_label.Label, null, "WIth radio"), _react.default.createElement(_text.Text, null, _react.default.createElement(_radio.Radio, {
    id: "radio"
  }), _react.default.createElement(_label.Label, {
    inline: true,
    htmlFor: "radio"
  }, "And radio")), _react.default.createElement(_text.Text, null, _react.default.createElement(_radio.Radio, {
    disabled: true,
    id: "radio2",
    checked: true
  }), _react.default.createElement(_label.Label, {
    inline: true,
    disabled: true,
    htmlFor: "radio2"
  }, "radio disabled")), _react.default.createElement(_formGroup.FormMessage, null)), _react.default.createElement(_formGroup.FormGroup, {
    error: error
  }, _react.default.createElement(_label.Label, null, "And upload form"), _react.default.createElement(_dropZone.DropZone, null), _react.default.createElement(_formGroup.FormMessage, null)));
};

exports.FormElements = FormElements;

const FormElementsWithError = () => _react.default.createElement(FormElements, {
  error: true
});

exports.FormElementsWithError = FormElementsWithError;