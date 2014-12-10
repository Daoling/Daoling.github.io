(function(angular) {
  'use strict';
var app = angular.module('sdl_App', [])
app.controller('Angular', function($scope) {
  $scope.Articles = [{
  name:'Closure',
  content:' the function defined in the closure remembers the environment in which it was created.'
  },{
  name:'Use Strict',
  content:'During the javascript, use strict means: use a variable without declaring it, is not allowed.'
  },
  ];
});
})(window.angular);