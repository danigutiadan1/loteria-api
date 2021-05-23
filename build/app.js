"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _apuestas = _interopRequireDefault(require("./routes/apuestas.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); //const pool = require("./database");

app.get('/loteria-api', function (req, res) {
  res.sendFile('index.html', {
    root: 'src'
  });
});
app.use('/loteria-api/apuestas', _apuestas["default"]);
app.use('/loteria-api/auth', _auth["default"]);
var _default = app;
exports["default"] = _default;