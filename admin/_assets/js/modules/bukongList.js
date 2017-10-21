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
      that.renderImages();
    }, function(e){
      console.log("获取布控列表信息失败");
    })

    $(".js-clear__bukong").on("click", function(){
      ApiServer.deleteBukongInfos(function(){
        $("#bukong-list").html("");
      }, function(err){
        console.log(err)
      })
    })
  },

  renderItem: function(data) {
    return `
      <tr>
        <td>${data.name}</td>
        <td>${data.phone}</td>
        <td>${data.sms == "1" ? "是" : "否"}</td>
        <td>${data.voice == "1" ? "是" : "否"}</td>
        <td id="bukong-item__sn-${data.id}" data-sn="${data.bk_sn}"></td>
        <td>${data.bk_name}</td>
        <td>${data.bk_phone}</td>
        <td>${data.bk_nation}</td>
        <td class="bukong-item__img" data-id="${data.id}" id="bukong-item__${data.id}">
        </td>
        <td>${data.bk_type == "o" ? data.bk_type_alias : data.bk_type}</td>
      </tr>
    `
  },

  renderImages: function() {
    $(".bukong-item__img").each(function(_, el) {
      var id = $(el).data("id");
      ApiServer.getBukongInfoPic(id, function(data){
        if (data != null) {
          $("#bukong-item__"+id).html(`<img src="${MyExtion.base64Src(data)}" />`);
        } else {
          var sn = $("#bukong-item__sn-"+id).data("sn");
          $("#bukong-item__sn-"+id).text(sn);
        }
      }, function(e){
        console.log(e);
      })
    })
  }
}
