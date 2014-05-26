'use strict';

angular.module('insight.currency').factory('Currency',
  function ($resource, apiaddress) {
      return $resource(apiaddress + '/api/currency');
});
