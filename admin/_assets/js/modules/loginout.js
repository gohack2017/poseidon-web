var LoginOut = {
  run: function() {
    this.bindEvent();
  },

  bindEvent: function() {
    $(".brand-header__link").on("click", this.loginOut.bind(this));
  },

  loginOut: function() {
    ApiServer.loginOut(App.goHome, function(err){
      console.log(err);
    })
  }
}
