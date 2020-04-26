"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spacings = exports.Colors = exports.Badges = exports.Buttons = exports.Typography = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var theme = _interopRequireWildcard(require("../theme"));

var _box = require("./box");

var _text = require("./text");

var _header = require("./header");

var _button = require("./button");

var _icon = require("./icon");

var _badge = require("./badge");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Atoms'
};
exports.default = _default;
const mainVariants = ['primary', 'danger', 'success', 'info', 'secondary'];

const Typography = () => _react.default.createElement(_box.Box, {
  flex: true
}, _react.default.createElement(_box.Box, {
  width: 1 / 2,
  padding: "lg"
}, _react.default.createElement(_header.H1, null, "H1 Header - 40"), _react.default.createElement(_text.Text, {
  variant: "sm",
  mb: 5
}, "Roboto 40 - line height - 40"), _react.default.createElement(_header.H2, null, "H2 Header - 32"), _react.default.createElement(_text.Text, {
  variant: "sm",
  mb: 5
}, "Roboto 32 - line height - 40"), _react.default.createElement(_header.H3, null, "H3 Header - 28"), _react.default.createElement(_text.Text, {
  variant: "sm",
  mb: 5
}, "Roboto 28 - line height - 32"), _react.default.createElement(_header.H4, null, "H4 Header - 24"), _react.default.createElement(_text.Text, {
  variant: "sm",
  mb: 5
}, "Roboto 24 - line height - 32"), _react.default.createElement(_header.H5, null, "H5 Header - 18"), _react.default.createElement(_text.Text, {
  variant: "sm",
  mb: 5
}, "Roboto 18 - line height - 24"), _react.default.createElement(_header.H6, null, "H6 Header - 16"), _react.default.createElement(_text.Text, {
  variant: "sm",
  mb: 5
}, "Roboto 16 - line height - 24")), _react.default.createElement(_box.Box, {
  width: 1 / 2,
  padding: "lg"
}, _react.default.createElement(_text.Text, {
  variant: "sm",
  mb: 5
}, _react.default.createElement("p", null, "This is small [variant=sm] text")), _react.default.createElement(_text.Text, {
  mb: 5
}, _react.default.createElement("p", null, "This is regular text")), _react.default.createElement(_text.Text, {
  variant: "lg",
  mb: 5
}, _react.default.createElement("p", null, "This is a big [variant=lg] text")), _react.default.createElement(_text.Text, {
  variant: "xs",
  mb: 5
}, _react.default.createElement("p", null, "And there is also a super small [variant=xs] text"))));

exports.Typography = Typography;

const Buttons = () => _react.default.createElement(_box.Box, {
  padding: "lg"
}, _react.default.createElement(_header.H3, {
  my: "lg"
}, "Buttons"), _react.default.createElement(_header.H4, {
  my: "lg"
}, "Variants"), _react.default.createElement(_text.Text, null, _react.default.createElement(_button.Button, null, "Regular"), mainVariants.map(color => _react.default.createElement(_button.Button, {
  key: color,
  m: "default",
  variant: color
}, color)), _react.default.createElement(_button.Button, {
  ml: "default",
  variant: "text"
}, "Text")), _react.default.createElement(_header.H4, {
  my: "lg"
}, "Sizes"), _react.default.createElement(_text.Text, null, _react.default.createElement(_button.Button, {
  size: "sm"
}, "Small"), _react.default.createElement(_button.Button, {
  ml: "default"
}, "Regular size"), _react.default.createElement(_button.Button, {
  size: "lg",
  ml: "default"
}, "Large")), _react.default.createElement(_header.H4, {
  my: "lg"
}, "Icons"), _react.default.createElement(_text.Text, null, _react.default.createElement(_button.Button, {
  mr: "default"
}, _react.default.createElement(_icon.Icon, {
  icon: "Settings"
}), "With icon"), _react.default.createElement(_button.Button, {
  size: "icon",
  mr: "default"
}, _react.default.createElement(_icon.Icon, {
  icon: "Settings"
})), _react.default.createElement(_button.Button, {
  rounded: true,
  size: "icon",
  mr: "default"
}, _react.default.createElement(_icon.Icon, {
  icon: "Settings"
})), _react.default.createElement(_button.Button, {
  variant: "danger",
  mr: "default"
}, _react.default.createElement(_icon.Icon, {
  icon: "Delete"
}), "Delete me"), _react.default.createElement(_button.Button, {
  mr: "default",
  variant: "text",
  size: "sm"
}, _react.default.createElement(_icon.Icon, {
  icon: "Add"
}), "Create new item")), _react.default.createElement(_header.H4, {
  my: "lg"
}, "State"), _react.default.createElement(_text.Text, null, _react.default.createElement(_button.Button, {
  disabled: true
}, "Disabled"), _react.default.createElement(_button.Button, {
  ml: "default",
  variant: "primary",
  disabled: true
}, "Disabled")));

exports.Buttons = Buttons;

const Badges = () => _react.default.createElement(_box.Box, {
  p: "lg"
}, _react.default.createElement(_header.H3, {
  mb: "xl"
}, "Badges"), _react.default.createElement(_header.H4, {
  my: "xl"
}, "Variants"), _react.default.createElement("p", null, _react.default.createElement(_badge.Badge, {
  ml: "default"
}, "Default"), mainVariants.map(color => _react.default.createElement(_badge.Badge, {
  key: color,
  ml: "default",
  variant: color
}, color))), _react.default.createElement(_header.H4, {
  my: "xl"
}, "Outline"), _react.default.createElement("p", null, _react.default.createElement(_badge.Badge, {
  ml: "default",
  outline: true
}, "Default"), mainVariants.map(color => _react.default.createElement(_badge.Badge, {
  key: color,
  ml: "default",
  variant: color,
  outline: true
}, color))), _react.default.createElement(_header.H4, {
  my: 5
}, "Sizes"), _react.default.createElement("p", null, _react.default.createElement(_badge.Badge, {
  ml: "default",
  variant: "primary",
  size: "sm"
}, "small"), _react.default.createElement(_badge.Badge, {
  ml: "default",
  variant: "primary"
}, "regular"), _react.default.createElement(_badge.Badge, {
  ml: "default",
  variant: "primary",
  size: "lg"
}, "large")));

exports.Badges = Badges;

const Colors = () => {
  const blueColors = Object.keys(theme.colors).filter(color => color.match('blue'));
  const greyColors = Object.keys(theme.colors).filter(color => color.match(/grey/i));
  const restColors = Object.keys(theme.colors).filter(color => !color.match(/grey/i) && !color.match('blue'));
  return _react.default.createElement(_box.Box, null, _react.default.createElement(_header.H3, {
    my: "xl"
  }, "Blues"), _react.default.createElement(_box.Box, {
    flex: true
  }, blueColors.map(name => _react.default.createElement(_text.Text, {
    m: "default",
    textAlign: "center"
  }, _react.default.createElement(_box.Box, {
    display: "inline-block",
    width: "60px",
    height: "60px",
    bg: theme.colors[name]
  }), _react.default.createElement(_text.Text, null, name)))), _react.default.createElement(_header.H3, {
    my: "xl"
  }, "Greys"), _react.default.createElement(_box.Box, {
    flex: true
  }, greyColors.map(name => _react.default.createElement(_text.Text, {
    m: "default",
    textAlign: "center"
  }, _react.default.createElement(_box.Box, {
    display: "inline-block",
    width: "60px",
    height: "60px",
    bg: theme.colors[name]
  }), _react.default.createElement(_text.Text, null, name)))), _react.default.createElement(_header.H3, {
    my: "xl"
  }, "Rest"), _react.default.createElement(_box.Box, {
    flex: true
  }, restColors.map(name => _react.default.createElement(_text.Text, {
    m: "default",
    textAlign: "center"
  }, _react.default.createElement(_box.Box, {
    display: "inline-block",
    width: "60px",
    height: "60px",
    bg: theme.colors[name]
  }), _react.default.createElement(_text.Text, null, name)))));
};

exports.Colors = Colors;

const Spacings = () => {
  const spaces = Object.keys(theme.space);
  return _react.default.createElement(_box.Box, null, _react.default.createElement(_header.H3, {
    my: "xl"
  }, "Spacings"), _react.default.createElement(_box.Box, null, spaces.map(name => _react.default.createElement(_box.Box, null, _react.default.createElement(_text.Text, null, name, ' ', "[", theme.space[name], "]"), _react.default.createElement(_box.Box, {
    mb: "xxl",
    width: "600px",
    height: theme.space[name],
    bg: "#C7D2FC"
  })))));
};

exports.Spacings = Spacings;