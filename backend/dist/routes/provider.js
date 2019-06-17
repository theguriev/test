'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _models = require('../models');

var _expressJoiValidator = require('express-joi-validator');

var _expressJoiValidator2 = _interopRequireDefault(_expressJoiValidator);

var _provider = require('../schemas/joi/provider');

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();

routes.put('/:id', (0, _expressJoiValidator2.default)(_provider2.default), async (req, res) => {
  let p = await _models.Provider.findById(req.params.id).exec();
  if (p === null) {
    res.status(500).json({ message: `${req.params.id} - provider not found!` });
  }
  await _models.Provider.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name } }).exec();
  res.status(200).json((await _models.Provider.findById(req.params.id).exec()));
});

exports.default = routes;
//# sourceMappingURL=provider.js.map