(fuction(){
var Angular_content = { name: 'First', content: 11};
var app = angular.module('sdl_App', []);
app.controller('Blog',function(){
    this.Angular = Angular_content;
});
})();