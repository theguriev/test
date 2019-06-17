'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  PORT = 8080,
  DATABASE_URL = 'mongodb://localhost:27017/test'
} = process.env;
(0, _db2.default)(DATABASE_URL).then(async () => {
  _app2.default.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
});
//# sourceMappingURL=index.js.map