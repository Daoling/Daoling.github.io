(function(angular) {
  'use strict';
var app = angular.module('sdl_App', [])
app.controller('Menu', function($scope) {
  $scope.Lables = [{
  content:'• Javascript'
  },{
  content:'• Css'
  },{
  content:'• Machine learning'
  },{
  content:'• Photography'
  },
  ];
});
app.controller('Angular', function($scope) {
  $scope.Notes = [{
  name:'Closure',
  content:'• the function defined in the closure remembers the environment in which it was created. See more: http://marcofranssen.nl/writing-modular-javascript-without-polluting-the-global-namespace/'
  },{
  name:'display:flex',
  content:'• Displays an element as an block-level flex container. New in CSS3'
  },{
  name:'transparent',
  content:'• Specifies that the background color should be transparent. This is default.'
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
  name:' Scope',
  content:'•  Long way to displore.'
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
  name:'Why Doctype',
  content:'The <!DOCTYPE> declaration must be the very first thing in your HTML document, before the <html> tag. The <!DOCTYPE> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.'
  },{
  name:'No stylesheet, No link',
  content:'•••••••Why, still confused.'
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
  content:'••••••。Need to explore.'
  },{
  name:'IaaS, PaaS, SaaS',
  content:'••••••Need to explore.'
  },{
  name:'Trick to make gradient descent work well.(1)',
  content:'• Use Feature Scaling, make gradient descent run much faster and converge in a lot few other iterations. It means get every feature into approximately a -1<x<1 range.'
  },{
  name:'Trick to make gradient descent work well.(2)',
  content:'• learning rate alpha. If α is too small: slow convergence. If α is too large : J(θ) may not decrease on every iteration; may not converge.To choose  α, try …, 0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 1….'
  },{
  name:'Normal Equation',
  content:'• θ = (XTX)-1XTY.'
  },{
  name:'When to use Gradient Descent, or Normal Equation',
  content:'• Gradient Descent: 1.Need to choose α. 2.Needs many iterations. 3.Work well even when n is large.    Normal Equation: 1.No need to choose α.  2.Dont’t need to iterate.  3.Need to compute  (XTX)-1 (sometimes it is no answer)    4.Slow if n is very large. (n>10000)'
  },{
  name:'Logistic Regression',
  content:'• Logistic Regression also called Classification Rrgression. 0≤hθ(x)≤1'
  },{
  name:'Logistic Regression',
  content:'• hθ(x)=g(θTx), g(z)=1/(1+e^(-z)).  '
  },{
  name:'Sigmoid function',
  content:'• g(z)=1/(1+e^(-z)). '
  },{
  name:'',
  content:''
  },{
  name:'',
  content:''
  },{
  name:'',
  content:''
  },
  ];
});
})(window.angular);



Show ="no";  
var OffX = -250;  
var PosX =  50;  
var PosY =  50;  
var speed        = 5;  
var increment    = 5;  
var incrementNS4 = 5;
var is_NS = navigator.appName=="Netscape";  
var is_Ver = parseInt(navigator.appVersion);  
var is_NS4 = is_NS&&is_Ver>=4&&is_Ver<5;  
var is_NS5up = is_NS&&is_Ver>=5;  

var MenuX = OffX;  
var SelX = PosX;  
var sPosX = PosX;  
var sOffX = OffX;  

if (Show == "yes") {  
sPosX = OffX;  
sOffX = PosX;  
MenuX = sOffX;  
SelX = sPosX;  
}  

if (is_NS4) {  
increment = incrementNS4;  
Lq = "document.layers.";  
Sq = "";  
eval(Lq+'menuSelect'+Sq+'.left=sPosX');  
eval(Lq+'menuShow'+Sq+'.left=sOffX');  
eval(Lq+'menuSelect'+Sq+'.top=PosY');  
eval(Lq+'menuShow'+Sq+'.top=PosY');  
} else {  
Lq = "document.all.";  
Sq = ".style";  
document.getElementById('menuSelect').style.left = sPosX+"px";  
document.getElementById('menuShow').style.left = sOffX+"px";  
document.getElementById('menuSelect').style.top = PosY+"px";  
document.getElementById('menuShow').style.top = PosY+"px";  
}    

function moveOnMenu() {  
if (MenuX < PosX) {   
MenuX = MenuX + increment;  
if (is_NS5up) {  
document.getElementById('menuShow').style.left = MenuX+"px";  
} else {  
eval(Lq+'menuShow'+Sq+'.left=MenuX');  
}  
setTimeout('moveOnMenu()',speed);  
   }  
}  

function moveOffMenu() {  
if (MenuX > OffX) {   
MenuX = MenuX - increment;  
if (is_NS5up) {  
document.getElementById('menuShow').style.left = MenuX+"px";  
} else {  
eval(Lq+'menuShow'+Sq+'.left=MenuX');  
}  
setTimeout('moveOffMenu()',speed);  
   }  
}  

function moveOffSelector() {  
if (SelX > OffX) {   
SelX = SelX - increment;  
if (is_NS5up) {  
document.getElementById('menuSelect').style.left = SelX+"px";  
} else {  
eval(Lq+'menuSelect'+Sq+'.left=SelX');  
}  
setTimeout('moveOffSelector()',speed);  
   }  
}  

function moveOnSelector() {  
if (SelX < PosX) {   
SelX = SelX + increment;  
if (is_NS5up) {  
document.getElementById('menuSelect').style.left = SelX+"px";  
} else {  
eval(Lq+'menuSelect'+Sq+'.left=SelX');  
}  
setTimeout('moveOnSelector()',speed);  
   }  
}  

function page1() {  
    document.getElementById('container').innerHTML="<img class='photography' src='img/photo1.jpg'>";
}  

function page2() {  
    document.getElementById('container').innerHTML="<img class='photography' src='img/photo1.jpg'>";
}  

