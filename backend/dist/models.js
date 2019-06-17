'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = undefined;

var _mongoose = require('mongoose');

var _provider = require('./schemas/mongoose/provider');

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Provider = (0, _mongoose.model)('Provider', new _mongoose.Schema(_provider2.default), 'providers');
exports.Provider = Provider;
//# sourceMappingURL=models.js.map