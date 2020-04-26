"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _viewHelpers = _interopRequireDefault(require("../../../../backend/utils/view-helpers"));

var _designSystem = require("../../design-system");

var _hooks = require("../../../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NoRecords = props => {
  const {
    resource
  } = props;
  const h = new _viewHelpers.default();
  const {
    translateButton,
    translateMessage
  } = (0, _hooks.useTranslation)();
  const canCreate = resource.resourceActions.find(a => a.name === 'new');
  const newAction = h.resourceActionUrl({
    resourceId: resource.id,
    actionName: 'new'
  });
  return _react.default.createElement(_designSystem.InfoBox, {
    title: "No records"
  }, _react.default.createElement(_designSystem.Text, null, translateMessage('noRecordsInResource', resource.id)), canCreate ? _react.default.createElement(_designSystem.Text, {
    mt: "xl"
  }, _react.default.createElement(_reactRouterDom.Link, {
    to: newAction
  }, _react.default.createElement(_designSystem.Button, {
    variant: "primary",
    as: "span"
  }, _react.default.createElement(_designSystem.Icon, {
    icon: "Add"
  }), translateButton('createFirstRecord', resource.id)))) : '');
};

var _default = NoRecords;
exports.default = _default;