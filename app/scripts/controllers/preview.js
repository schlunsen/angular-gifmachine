'use strict';
var myBlob;
angular.module('gifmachineApp')
    .controller('PreviewCtrl', function ($scope, $rootScope, $location) {
        $scope.images = $rootScope.currentImages;


        $scope.createGIF = function () {

            var imageElm = document.createElement('img')

            // Load image to get it's size. After create gifs
            imageElm.addEventListener('load', function () {
                var gif = new GIF({
                    workers: 2,
                    quality: 1,
                    workerScript: '/scripts/vendors/gif.worker.js',
                    width: imageElm.width,
                    height: imageElm.height
                });

                $('img').each(function () {
                    gif.addFrame($(this)[0]);

                })

                gif.on('progress', function (p) {
                    console.log("progress", p);

                })


                gif.on('finished', function (blob) {
                    $scope.$apply(function () {
                        //var urlCreator = window.URL || window.webkitURL;
                        //var imageUrl = urlCreator.createObjectURL( blob );

                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(blob)
                        fileReader.onloadend = function () {
                            $scope.$apply(function () {

                                $rootScope.createdGifs.push(fileReader.result);
                                $location.path('/gifs')
                            });
                        }
                    });

                });

                gif.render();


            });
            imageElm.src = $scope.images[0];



        }
    });

