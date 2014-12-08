(function(angular) {
  'use strict';
angular.module('sdl_App', [])
.controller('Blog', function($scope, $filter) {
  $scope.originalText = 'hello';
  $scope.filteredText = $filter('uppercase')($scope.originalText);
});
})(window.angular);