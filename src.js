Vue.component("price", {
  data: function() {
    return {
      items: []
    };
  },
  mounted: function() {
    var self = this;
    axios.get("data.json").then(function(res) {
      self.items = res.data;
    });
  },
  template:
    "<table>" +
    '<tr v-for="item in items">' +
    "<td>{{ item.title }}</td><td>{{ item.price }}</td>" +
    "</tr></table>"
});
