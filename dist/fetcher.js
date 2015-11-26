'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var Fetcher = (function () {
  function Fetcher() {
    _classCallCheck(this, Fetcher);

    this.adapter = new _adapter2['default']();
  }

  _createClass(Fetcher, [{
    key: 'setToken',
    value: function setToken(token) {
      this.token = token;
    }
  }, {
    key: 'process',
    value: function process(method, url, body, parameters) {
      return this.adapter.call(new _request2['default']({
        headers: this.headers,
        body: body,
        method: method,
        parameters: parameters,
        url: url
      }).raw());
    }
  }, {
    key: 'headers',
    get: function get() {
      return {
        Authorization: 'Bearer ' + this.token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };
    }
  }]);

  return Fetcher;
})();

exports['default'] = Fetcher;
module.exports = exports['default'];