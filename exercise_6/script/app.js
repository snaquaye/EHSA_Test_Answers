(function () {
  'use strict';

  angular.module('diaryApp', ['pouchdb'])
    .service('service', function (pouchDB) {
      var db = pouchDB('name');
    })
    .controller('DairyController', ['$scope', 'pouchDB', function ($scope, pouchDB) {
      window.scope = $scope;
      var db, 
          options = {
            include_docs: true,
            live: true
          };

      db = pouchDB('diaryDB');

      $scope.viewData = {
        entry: {
          _id: '',
          title: '',
          entry: ''
        },
        entries: [],
        flashMessage: ''
      }

      $scope.actions = {
        add: add
      }

      function add() {
        $scope.viewData.entry._id = new Date().valueOf().toString();

        db.put($scope.viewData.entry).then(function() {
          $scope.viewData.flashMessage = 'Entry saved successfully';
        }).catch(function(error) {
          $scope.viewData.flashMessage = 'Saving entry failed with ' + error.message;
        })
      }

      function onSave(change) {
        $scope.viewData.entries.push(change);
        console.log($scope.viewData.entries);
      }

      db.changes(options).$promise.then(null, null, onSave);
    }])
})()