'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _expressJoiValidator = require('express-joi-validator');

var _expressJoiValidator2 = _interopRequireDefault(_expressJoiValidator);

var _models = require('../models');

var _provider = require('../schemas/joi/provider');

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();

routes.get('/', async (req, res) => {
  res.status(200).json((await _models.Provider.find({}).exec()));
});

routes.post('/', (0, _expressJoiValidator2.default)(_provider2.default), async (req, res) => {
  let p = new _models.Provider({ name: req.body.name });
  await p.save();
  res.status(200).json(p);
});

exports.default = routes;
//# sourceMappingURL=providers.js.map