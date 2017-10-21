var ApiServer = {
  host: "/v1.0",

  // session
  login: function(data, succussCall, failCall){
    var url = this.makeRequest("/login");
    this.post(url, data, succussCall, failCall);
  },

  isLogin: function(succussCall, failCall) {
    this.ajax(this.makeRequest("/islogin"), null, "HEAD", succussCall, failCall);
  },

  loginOut: function(succussCall, failCall){
    var url = this.makeRequest("/logout");
    this.ajax(url, {}, "DELETE", succussCall, failCall);
  },
  // end session

  getUser: function(succussCall, failCall){
    this.doGet(this.makeRequest("/session"), succussCall, failCall);
  },

  fetchAccounts: function(succussCall, failCall){
    this.doGet(this.makeRequest("/users"), succussCall, failCall);
  },

  fetchAccount: function(id, succussCall, failCall){
    this.doGet(this.makeRequest("/users/"+id), succussCall, failCall);
  },

  newAccount: function(payload, succussCall, failCall) {
    this.ajax(this.makeRequest("/users"), payload, "POST", succussCall, failCall);
  },

  deleteAccount: function(id, succussCall, failCall) {
    this.ajax(this.makeRequest("/users/"+id), null, "DELETE", succussCall, failCall);
  },

  updateAccount: function(id, payload, succussCall, failCall) {
    this.ajax(this.makeRequest("/users/"+id), payload, "PUT", succussCall, failCall);
  },

  getBukongInfos: function(succussCall, failCall) {
    this.doGet(this.makeRequest("/bukong"), succussCall, failCall);
  },

  deleteBuKong: function(id, succussCall, failCall) {
    this.ajax(this.makeRequest("/bukong/"+id), null, "DELETE", succussCall, failCall)
  },

  getBukongInfoPic: function(id, succussCall, failCall) {
    this.doGet(this.makeRequest("/bukong/"+id), succussCall, failCall);
  },

  fetchAerts: function(succussCall, failCall) {
    this.doGet(this.makeRequest("/alert"), succussCall, failCall);
  },

  fetchDevices: function(succussCall, failCall) {
    this.doGet(this.makeRequest("/device"), succussCall, failCall);
  },
  
  createDevice: function(payload, succussCall, failCall) {
    this.post(this.makeRequest("/device"), payload, succussCall, failCall);
  },

  post: function(url, data, succussCall, failCall){
    this.ajax(url, data, "POST", succussCall, failCall)
  },

  ajax: function(url, data, method, succussCall, failCall){
    $.ajax({
      type: method,
      url: url,
      data: JSON.stringify(data),
      success: succussCall,
      error: failCall,
    })
  },

  doGet: function(url, succussCall, failCall){
    $.ajax({
      type: "GET",
      url: url,
      success: succussCall,
      error: failCall
    });
  },

  makeRequest: function(endpoint) {
    return this.host + endpoint;
  }
}
