"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _pagination = require("./pagination");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
const PaginationStory = () => _react.default.createElement(_pagination.Pagination, {
  page: 2,
  perPage: 10,
  total: 2013,
  onChange: () => console.log('changed')
});

exports.PaginationStory = PaginationStory;