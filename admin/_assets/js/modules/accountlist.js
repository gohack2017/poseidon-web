var AccountList = {
  run: function() {
    this.renderList();
    this.bindEvent();
  },

  bindEvent: function() {
    $("#account-list").on("click", ".js-account__delete", this.onDelete.bind(this))
  },

  renderList: function() {
    var that = this;

    ApiServer.fetchAccounts(function(data){
      that.renderItems(data);
    }, function(err){
      console.log(err);
    })
  },

  renderItems: function(data) {
    content = ""
    for (i in data) {
      content += this.renderItem(data[i]);
    }

    $("#account-list").append(content);
  },

  renderItem: function(item) {
    return `
      <tr>
        <td>${item.username}</td>
        <td>${item.phone}</td>
        <td>${item.area}</td>
        <td>${item.email}</td>
        <td>${item.role == 1? "管理员用户" : "普通用户"}</td>
        <td>
          <a href="/p/settings/account-edit.html?id=${item.id}">更新</a> /
          <a href="javascript:void(0)" data-id="${item.id}" class="js-account__delete">删除</a>
        </td>
      </tr>
    `
  },

  onDelete: function(event) {
    if (confirm("确认删除该账号？")) {
      item = $(event.currentTarget)
      id = item.data("id")
      ApiServer.deleteAccount(id, function(){
        item.closest("tr").remove();
      }, function(err){
        console.log(err)
      })
    }
  }
}
