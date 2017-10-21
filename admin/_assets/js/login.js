//= require modules/app

var LoginApp = {
  run: function() {
    this.bindEvent();
  },

  bindEvent: function() {
    $(".sign-form form").on("submit", this.onLogin.bind(this));
  },

  onLogin: function(event) {
    event.preventDefault();

    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();

    var that = this;
    ApiServer.login({
      email: email,
      password: password,
    }, function(data){
      App.goHome();
    }, function(err){
      if (err.status == 400) {
        alert("用户名或密码错误");
      } else if (err.status == 403) {
        alert("没有该区域权限");
      }
    })
  }
}

$(document).ready(function() {
  LoginApp.run();
});
