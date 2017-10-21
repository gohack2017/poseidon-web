var CurrentUser = {
  data: {},
  fetch: function(callback) {
    var that = this;
    ApiServer.getUser(function(data){
      that.data = data;
      if (MyExtion.isFunction(callback)) {
        callback(data);
      }
    },App.goHome)
  },

  isLogin: function(callback) {
    var that = this;
    ApiServer.isLogin(function(data){
      that.data = data;
      if (MyExtion.isFunction(callback)) {
        callback(data);
      }
    }, App.goLogin)
  }
}
