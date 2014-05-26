'use strict';

angular.module('insight.transactions')
  .factory('Transaction',
    function ($resource, apiaddress) {
        return $resource(apiaddress + '/api/tx/:txId', {
      txId: '@txId'
    }, {
      get: {
        method: 'GET',
        interceptor: {
          response: function (res) {
            return res.data;
          },
          responseError: function (res) {
            if (res.status === 404) {
              return res;
            }
          }
        }
      }
    });
  })
  .factory('TransactionsByBlock',
    function ($resource, apiaddress) {
        return $resource(apiaddress + '/api/txs', {
      block: '@block'
    });
  })
  .factory('TransactionsByAddress',
    function ($resource, apiaddress) {
        return $resource(apiaddress + '/api/txs', {
      address: '@address'
    });
  })
  .factory('Transactions',
    function ($resource, apiaddress) {
        return $resource(apiaddress + '/api/txs');
  });
