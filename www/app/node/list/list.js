(function() {
    'use strict';

    angular
        .module('app.node.list')
        .controller('NodeListController', NodeListController)
        .controller('NodeListMenuController', NodeListMenuController);

    /* @ngInject */
    function NodeListController($scope, synchronizationService, logger) {
        console.log('enter NodeListController');
        /*jshint validthis: true */
        $scope.nodeList = [{
            id: 1,
            title: "titre 1"
        }, {
            id: 2,
            title: "titre 2"
        }, {
            id: 3,
            title: "titre 3"
        }, {
            id: 4,
            title: "titre 4"
        }, ];

        $scope.itemContextualMenu = [{
            text: 'Edit',
            onTap: function(item, button) {
                alert(button.text + ' Button: ' + item.title)
            }
        }, {
            text: 'Delete',
            type: 'button-balanced',
            onTap: function(item, button) {
                alert(button.text + ' Button: ' + item.title)
            }
        }];
        $scope.createNode = function() {
            
        }
        $scope.deleteNode = function(item) {

        };
    }

    /* @ngInject */
    function NodeListMenuController($scope, synchronizationService, logger) {
        /*jshint validthis: true */

    }
})();
