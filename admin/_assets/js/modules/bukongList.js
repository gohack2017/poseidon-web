var BukongList = {
  run: function() {
    var that = this;
    ApiServer.getBukongInfos(function(data){
      items = ""
      if (data == null) {
        return
      }
      data.forEach(function(item){
        items += that.renderItem(item);
      })

      $("#bukong-list").html(items);
    }, function(e){
      console.log("获取布控列表信息失败");
    })

    $("#bukong-list").on("click", ".js-delete", this.onDelteItem.bind(this))
  },

  onDelteItem: function(event) {
    el = $(event.currentTarget)
    ApiServer.deleteBuKong(el.data("id"), function(data){
      el.closest("tr").remove();
    }, function(err){
      console.log(err)
    })
  },

  renderItem: function(data) {
    return `
      <tr>
        <td>${data.name}</td>
        <td>${data.phone}</td>
        <td>${data.class}</td>
        <td class="bukong-item__img">
          <img src="${data.uri}" />
        </td>
        <td>
          <a href="javascript:void(0)" class="js-delete" data-id="${data.id}">删除</a>
        </td>
      </tr>
    `
  }
}
