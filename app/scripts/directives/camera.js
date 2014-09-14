/**
 * Created by rasmusschlunsen on 14/09/14.
 */

angular.module('gmDirectives', []).directive('camera', function(){
   return {
       restrict: 'EA',
       templateUrl: '/views/directives/camera.html',

       controller: function($scope){
           $scope.onStreaming = function(elem){
               alert(3);
               console.log("Onstream", elem);
               $scope.name =  "asd";

           }

       },

       link: function(scope, el, attr) {
           scope.name = "hest"
           scope.onStreaming = function(elem){
               console.log("Onstream", elem);

           }
           el.find('a').click(function(){
               scope.name = "ny hest";

           });
       }

   }

});
