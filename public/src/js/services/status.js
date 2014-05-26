'use strict';

angular.module('insight.status')
  .factory('Status',
    function ($resource, apiaddress) {
        return $resource(apiaddress + '/api/status', {
        q: '@q'
      });
    })
  .factory('Sync',
    function ($resource, apiaddress) {
        return $resource(apiaddress + '/api/sync');
    })
  .factory('PeerSync',
    function ($resource, apiaddress) {
        return $resource(apiaddress + '/api/peer');
    });
