"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class List extends _react.default.PureComponent {
  render() {
    const {
      property,
      record
    } = this.props;
    const value = record.params[property.name];
    const className = property.availableValues ? 'tag' : '';
    return typeof value !== 'undefined' ? _react.default.createElement("span", {
      className: className
    }, value) : '';
  }

}

exports.default = List;