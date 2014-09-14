'use strict';

/**
 * @ngdoc overview
 * @name gifmachineApp
 * @description
 * # gifmachineApp
 *
 * Main module of the application.
 */
angular
    .module('gifmachineApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'webcam'


    ])
    .config(function ($routeProvider) {


        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/previewGIF', {
                templateUrl: 'views/previewGIF.html',
                controller: 'PreviewCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/gifs', {
                templateUrl: 'views/show_gif.html',
                controller: 'ShowGifCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(['$rootScope', function($rootScope){
        $rootScope.currentImages = [];
        $rootScope.createdGifs = [];
    }]);
