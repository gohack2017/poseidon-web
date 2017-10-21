var ApiServer = {
  host: "/v1.0",

  checkDevice: function(payload, succussCall, failCall) {
    this.post(this.makeRequest("/existdevice"), payload, succussCall, failCall)
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

  makeRequest: function(endpoint) {
    return this.host + endpoint;
  }
}
