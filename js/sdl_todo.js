(function(angular) {
  'use strict';
var app = angular.module('sdl_App', [])
app.controller('Angular', function($scope) {
  $scope.Articles = [{
  name:'Closure',
  content:'• the function defined in the closure remembers the environment in which it was created. See more: http://marcofranssen.nl/writing-modular-javascript-without-polluting-the-global-namespace/'
  },{
  name:'Use Strict',
  content:'• During the javascript, use strict means: use a variable without declaring it, is not allowed. See more http://www.w3schools.com/js/js_strict.asp.'
  },{
  name:'Write tips',
  content:'• After the  ,  •  or  . , leave a blank Space will look much better. Give two blank Spaces to =, before and after.'
  },{
  name:' Google CDN',
  content:'• Google CDN do not play well in China. Abandon, use Relative Path.'
  },{
  name:'JS object',
  content:'• JS object just hash map'
  },{
  name:'How to understand window.angular',
  content:'• window.ABC scopes the ABC variable to window scope (effectively global.)  • var ABC scopes the ABC variable to whatever function the ABC variable resides in.'
  },{
  name:'Css Middle Tip',
  content:'Add margin:0 auto, means middle.'
  },{
  name:'No stylesheet, No link',
  content:'••••••••••Why, still confused.'
  },{
  name:'Mistake about src',
  content:'• remember <link here is ‘href’  not ‘src’>'
  },{
  name:'<meta> Tag',
  content:'• If you want search engines to find you, Remenber set keywords. • <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">'
  },{
  name:'Json data attention',
  content:'• json can not have (enter key)'
  },{
  name:'Matrix basic operation',
  content:'• Matrix multiplication satisfies the rules (AB)C = A(BC) (associativity), and (A+B)C = AC+BC as well as C(A+B) = CA+CB (left and right distributivity), but AB ≠ BA,'
  },{
  name:'Hashmap',
  content:'•••••••••••Need to explore.'
  },{
  name:'IaaS, PaaS, SaaS',
  content:'•••••••••••Need to explore.'
  },{
  name:'Trick to make gradient descent work well.(1)',
  content:'• Use Feature Scaling, make gradient descent run much faster and converge in a lot few other iterations. It means get every feature into approximately a -1<x<1 range.'
  },{
  name:'Trick to make gradient descent work well.(2)',
  content:'learning rate alpha. If α is too small: slow convergence. If α is too large : J(θ) may not decrease on every iteration; may not converge.To choose  α, try …, 0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 1….'
  },
  ];
});
})(window.angular);