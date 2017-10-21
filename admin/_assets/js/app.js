//= require modules/bukongList
//= require modules/loginout
//= require modules/accountlist
//= require modules/currentuser
//= require modules/app

$(document).ready(function() {
  App.run();
  setTimeout(function(){
    $(".js-app").each(function(_, el) {
      eval($(el).data("name")).run()
    })
  }, 500);
});
