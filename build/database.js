"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mariadb = require('mariadb');

var pool = mariadb.createPool({
  host: '127.0.0.1',
  port: '3320',
  user: 'root',
  password: 'loteria',
  database: 'loteria'
});

function getConnection() {
  return _getConnection.apply(this, arguments);
}

function _getConnection() {
  _getConnection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var connection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return pool.getConnection();

          case 3:
            connection = _context.sent;
            return _context.abrupt("return", connection);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getConnection.apply(this, arguments);
}

module.exports = {
  getConnection: getConnection
};