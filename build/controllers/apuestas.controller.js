"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteApuestaById = exports.createApuesta = exports.getApuestaById = exports.getApuestasByUserId = exports.getApuestas = void 0;

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getApuestas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var conn, query, productos;
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
            query = "SELECT * FROM apuestas"; //Se ejecuta la consulta

            _context.next = 7;
            return conn.query(query);

          case 7:
            productos = _context.sent;
            //Respuesta al cliente
            res.status(200).json(productos);
            conn.end();
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

  return function getApuestas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getApuestas = getApuestas;

var getApuestasByUserId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var conn, query, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _database["default"].getConnection();

          case 3:
            conn = _context2.sent;
            query = "SELECT combinacion, sorteo_date, created_date, apuesta_id FROM apuestas WHERE user_id=?";
            _context2.next = 7;
            return conn.query(query, req.params.userId);

          case 7:
            result = _context2.sent;
            res.status(200).json(result);
            conn.end();
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

  return function getApuestasByUserId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getApuestasByUserId = getApuestasByUserId;

var getApuestaById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var conn, query, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _database["default"].getConnection();

          case 3:
            conn = _context3.sent;
            query = "SELECT combinacion, sorteo_date FROM apuestas WHERE user_id=? && apuesta_id=?";
            _context3.next = 7;
            return conn.query(query, [req.params.userId, req.params.apuestaId]);

          case 7:
            result = _context3.sent;
            res.status(200).json(result);
            conn.end();
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function getApuestaById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getApuestaById = getApuestaById;

var createApuesta = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, combinacion, sorteo_date, conn, query, result;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, combinacion = _req$body.combinacion, sorteo_date = _req$body.sorteo_date;
            _context4.prev = 1;
            _context4.next = 4;
            return _database["default"].getConnection();

          case 4:
            conn = _context4.sent;
            //Crea una nueva consulta
            query = "INSERT INTO apuestas (user_id, combinacion, sorteo_date) VALUES (?,?,?)"; //Se ejecuta la consulta

            _context4.next = 8;
            return conn.query(query, [req.params.userId, combinacion, sorteo_date]);

          case 8:
            result = _context4.sent;
            res.status(201).json(result);
            conn.end();
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 13]]);
  }));

  return function createApuesta(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createApuesta = createApuesta;

var deleteApuestaById = function deleteApuestaById(req, res) {};

exports.deleteApuestaById = deleteApuestaById;