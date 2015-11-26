'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var Adapter = (function () {
  function Adapter() {
    _classCallCheck(this, Adapter);
  }

  _createClass(Adapter, [{
    key: 'call',
    value: function call(url) {
      return (0, _isomorphicFetch2['default'])(url, {
        body: environment.body,
        header: environment.header,
        method: environment.method
      }).then(function (response) {
        return response.json(), then(function (body) {
          return {
            body: response.body,
            header: response.header,
            status: response.status
          };
        });
      });
    }
  }]);

  return Adapter;
})();

exports['default'] = Adapter;
module.exports = exports['default'];