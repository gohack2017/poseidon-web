App = {
  run: function(){
    CurrentUser.isLogin();
  },

  goHome: function() {
    location.href="/"
  },

  goLogin: function() {
    location.href="/login.html";
  },

  goAccountList: function() {
    location.href="/settings/account.html";
  }
}
