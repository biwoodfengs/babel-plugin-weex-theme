"use strict";

require("element-ui/packages/message-box/style.css");

var _messageBox = _interopRequireDefault(require("element-ui/packages/message-box"));

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.$prototype.$message = _messageBox.default;
