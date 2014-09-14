'use strict';

/**
 * @ngdoc function
 * @name gifmachineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gifmachineApp
 */
angular.module('gifmachineApp')
    .controller('MainCtrl', function ($scope, $rootScope, $location) {
        var _video = null,
            patData = null;

        $scope.showDemos = false;
        $scope.edgeDetection = false;
        $scope.mono = false;
        $scope.invert = false;
        $scope.images = $rootScope.currentImages || [];

        $scope.patOpts = {x: 0, y: 0, w: 25, h: 25};

        $scope.webcamError = false;
        $scope.onError = function (err) {
            $scope.$apply(
                function () {
                    $scope.webcamError = err;
                    $location.path('/')
                }
            );
        };

        $scope.onSuccess = function (videoElem) {
            // The video element contains the captured camera data

            _video = videoElem;
            $scope.$apply(function () {
                $scope.patOpts.w = _video.width;
                $scope.patOpts.h = _video.height;
                $scope.showDemos = true;
                $scope.isCameraStarted = true;
            });
        };


        $scope.onStream = function (stream, videoElem) {
            // You could do something manually with the stream.
        };

        $scope.clearImages = function(){
            $scope.images = [];
            $rootScope.currentImages = [];
        }

        $scope.previewGIF = function(){
            $rootScope.currentImages = $scope.images
            $location.path('/previewGIF');
        }
        /**
         * Make a snapshot of the camera data and show it in another canvas.
         */
        $scope.makeSnapshot = function makeSnapshot() {

            if (_video) {
                var patCanvas = document.querySelector('#snapshot');
                if (!patCanvas) return;

                patCanvas.width = _video.width;
                patCanvas.height = _video.height;
                var ctxPat = patCanvas.getContext('2d');

                var idata = getVideoData($scope.patOpts.x, $scope.patOpts.y, $scope.patOpts.w, $scope.patOpts.h);
                ctxPat.putImageData(idata, 0, 0);

                patData = idata;

                var imgData = patCanvas.toDataURL();
                $scope.images.push(imgData);


            }
        };


        var getVideoData = function getVideoData(x, y, w, h) {
            var hiddenCanvas = document.createElement('canvas');
            hiddenCanvas.width = _video.width;
            hiddenCanvas.height = _video.height;
            var ctx = hiddenCanvas.getContext('2d');
            ctx.drawImage(_video, 0, 0, _video.width, _video.height);
            return ctx.getImageData(x, y, w, h);
        };


    });
