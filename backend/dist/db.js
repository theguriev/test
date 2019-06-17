'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url) {
  const { DATABASE_URL } = process.env;
  return (0, _mongoose.connect)(url, { useNewUrlParser: true });
};

var _mongoose = require('mongoose');
//# sourceMappingURL=db.js.map