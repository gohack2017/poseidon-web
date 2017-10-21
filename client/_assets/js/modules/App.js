var App = {
  data: {
    deviceId: null,
  },
  cookieId: "poseidon_device_id",

  run: function() {
    this.loadDeviceId();
    this.bindEvent();
  },

  bindEvent: function() {
    $("#device-setting form").on("submit", this.onSubmitSetting.bind(this))
  },

  onSubmitSetting: function(event) {
    event.preventDefault();
    payload = {}

    $("#device-setting input").each(function(_, item) {
      el = $(item)
      payload[el.attr("name")] = el.val();
    })

    var that = this;
    ApiServer.checkDevice(payload, function(data){
      that.deviceId = data.id;
      MyExtion.setCookie(that.cookieId, data.id);
    }, function(err){
      console.log(err)
      alert("设置信息失败，请核对账号")
    })

    return false
  },

  loadDeviceId: function() {
    deviceId = MyExtion.getCookie(this.cookieId)
    if (MyExtion.isEmptyStr(deviceId)) {
      this.showDeviceSetting();
    } else {
      this.data.deviceId = deviceId;
      FaceCover.run();
    }
  },

  showDeviceSetting: function() {
    $("#device-setting").show();
  }
}
