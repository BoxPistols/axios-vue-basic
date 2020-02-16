Vue.component("price", {
  data: function() {
    return {
      items: [],
      selected: "data",
      options: [
        {text: "価格A", value: "data"},
        {text: "価格B", value: "data-b"},
        {text: "価格C", value: "data-c"}
      ]
    };
  },
  mounted: function() {
    this.load();
  },
  methods: {
    load: function() {
      var self = this;
      axios.get(this.selected + ".json").then(function(res) {
        self.items = res.data;
      });
    }
  },
  template:
    '<div><select v-model="selected" v-on:change="load">' +
    '<option v-for="option in options" v-bind:value="option.value">' +
    "{{ option.text }}" +
    "</option></select>" +
    "<table>" +
    '<tr v-for="item in items">' +
    "<td>{{ item.title }}</td><td>{{ item.price }}</td>" +
    "</tr></table></div>"
});
