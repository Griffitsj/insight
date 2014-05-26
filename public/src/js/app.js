'use strict';

angular.module('insight',[
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ngProgress',
  'ui.bootstrap',
  'ui.route',
  'monospaced.qrcode',
  'insight.system',
  'insight.socket',
  'insight.blocks',
  'insight.transactions',
  'insight.address',
  'insight.search',
  'insight.status',
  'insight.connection',
  'insight.currency'
]);

var _apiaddress = 'http://blockexplorer.cloudapp.net:3000';
angular.module('insight.system', []).value('apiaddress', _apiaddress);
angular.module('insight.socket', []).value('apiaddress', _apiaddress);
angular.module('insight.blocks', []).value('apiaddress', _apiaddress);
angular.module('insight.transactions', []).value('apiaddress', _apiaddress);
angular.module('insight.address', []).value('apiaddress', _apiaddress);
angular.module('insight.search', []).value('apiaddress', _apiaddress);
angular.module('insight.status', []).value('apiaddress', _apiaddress);
angular.module('insight.connection', []).value('apiaddress', _apiaddress);
angular.module('insight.currency', []).value('apiaddress', _apiaddress);
