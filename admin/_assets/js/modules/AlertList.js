var AlertList = {
  el: "#alert-list",

  run: function() {
    this.$el = $(this.el);
    ApiServer.fetchAerts(this.renderList.bind(this), function(err){
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
        <td>${item.address}</td>
        <td>${item.class}</td>
        <td><img src="${item.photo}"/></td>
        <td><img src="${item.scene_photo}"/></td>
        <td>${(item.score * 100).toFixed(2)} %</td>
        <td>${item.created_at}</td>
      </tr>
    `
  }
}
