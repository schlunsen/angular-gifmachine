'use strict';
var myBlob;
angular.module('gifmachineApp')
    .controller('ShowGifCtrl', function ($scope, $rootScope) {

        $scope.images = $rootScope.createdGifs;
        $scope.latest_gif_data = $scope.images[$scope.images.length - 1]
    });

