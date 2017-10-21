var DeviceList = {
  el: "#device-list",

  run: function() {
    this.$el = $(this.el);
    ApiServer.fetchDevices(this.renderList.bind(this), function(err){
      console.log(err);
    })
  },

  renderList: function(items) {
    var content = "";
    var that = this;
    items.forEach(function(item, _){
      content += that.renderItem(item);
    })
    this.$el.html(content);
  },

  renderItem: function(item) {
    return `
      <tr>
        <td>${item.num}</td>
        <td>${item.password}</td>
        <td>${item.address}</td>
      </tr>
    `
  }
}
