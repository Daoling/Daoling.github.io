(function() {
  'use strict';
var Angular_content = { name:'First Step to use Angular', content:''};
var app = angular.module('sdl_App', [])
app.controller('Blog', function($scope, $filter) {
  $scope.Angular = Angular_content;
});
})();