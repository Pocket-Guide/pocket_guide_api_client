'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var Request = (function () {
  function Request(_ref) {
    var body = _ref.body;
    var _ref$headers = _ref.headers;
    var headers = _ref$headers === undefined ? {} : _ref$headers;
    var method = _ref.method;
    var _ref$parameter = _ref.parameter;
    var parameter = _ref$parameter === undefined ? {} : _ref$parameter;
    var url = _ref.url;

    _classCallCheck(this, Request);

    this.body = body;
    this.headers = headers;
    this.method = method;
    this.parameters = parameters;
    this.urlString = url;
  }

  _createClass(Request, [{
    key: 'buildUrl',
    value: function buildUrl() {
      var _this = this;

      var urlObject = _url2['default'].parse(this.urlString);
      urlObject.serch = {};
      urlObject.query = {};
      Object.keys(this.parameters).forEach(function (key) {
        urlObject.query[key] = _this.parameters[key];
      });
      return urlObject;
    }
  }, {
    key: 'raw',
    value: function raw() {
      return {
        body: this.body,
        headers: this.headers,
        method: this.method,
        url: this.buildUrl
      };
    }
  }]);

  return Request;
})();

exports['default'] = Request;
module.exports = exports['default'];