//= require modules/app

var LoginApp = {
  run: function() {
    this.bindEvent();
    this.loadRememberLogin();
  },

  bindEvent: function() {
    $(".sign-form form").on("submit", this.onLogin.bind(this));
  },

  onLogin: function(event) {
    event.preventDefault();

    address = CitySelector.value();
    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();

    rememberLogin = $("input[name='rememberLogin']").prop("checked");

    var that = this;
    ApiServer.login({
      email: email,
      password: password,
    }, function(data){
      LoginAddress.set(address)
      if (rememberLogin) {
        LoginName.set(email);
      } else {
        LoginName.clear();
      }
      App.goHome();
    }, function(err){
      if (err.status == 400) {
        alert("用户名或密码错误");
      } else if (err.status == 403) {
        alert("没有该区域权限");
      }
    })
  },

  loadRememberLogin: function() {
    loginName = LoginName.get();
    if (loginName.length > 0) $("#inputEmail").val(loginName);
  }
}

$(document).ready(function() {
  LoginApp.run();
});
