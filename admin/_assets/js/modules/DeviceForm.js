var DeviceForm = {
  run: function() {
    this.bindEvent()
  },

  bindEvent: function() {
    $("#device-form").on("submit", this.onSubmit.bind(this));
  },

  onSubmit: function(event) {
    event.preventDefault()
    payload = {}

    $("#device-form input").each(function(_, item) {
      el = $(item)
      payload[el.attr("name")] = el.val();
    })

    ApiServer.createDevice(payload, function(data){
      location.href="/app/device.html";
    }, function(err){
      console.log(err)
    })

    return false
  }
}
