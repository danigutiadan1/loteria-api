"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.register = exports.login = void 0;

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var conn, query, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _database["default"].getConnection();

          case 3:
            conn = _context.sent;
            //Crea una nueva consulta
            query = "SELECT name, surname, email, id FROM users where email=? && password=?"; //Se ejecuta la consulta

            _context.next = 7;
            return conn.query(query, [req.body.email, req.body.password]);

          case 7:
            response = _context.sent;
            //Respuesta al cliente
            res.status(200).json(response);
            conn.destroy();
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.login = login;

var register = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var conn, query, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _database["default"].getConnection();

          case 3:
            conn = _context2.sent;
            query = "INSERT INTO users (name, surname, dni, password, email) VALUES (?, ?, ?, ?, ?);";
            _context2.next = 7;
            return conn.query(query, [req.body.name, req.body.surname, req.body.dni, req.body.password, req.body.email]);

          case 7:
            response = _context2.sent;
            res.status(201).json(response);
            conn.destroy();
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function register(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.register = register;

var logout = function logout(req, res) {};

exports.logout = logout;