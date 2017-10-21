var AlertList = {
  el: "#alert-list",

  run: function() {
    this.$el = $(this.el);
    ApiServer.fetchAerts(this.renderList.bind(this), function(err){
      console.log(err);
    })
  },

  renderList: function(items) {
    this.$el.html("")
    content = this.renderItem();
    this.$el.html(content);
  },

  renderItem: function(item) {
    return `
      <tr>
        <td>徐汇滨江</td>
        <td>强奸犯</td>
        <td><img src="xxxxx" /></td>
        <td><img src="xxxxx" /></td>
        <td>89.9%</td>
        <td>2017/10/09 19:56:56</td>
      </tr>
    `
  }
}
