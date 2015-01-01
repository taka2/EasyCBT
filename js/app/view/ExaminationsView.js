var easycbt = easycbt || {};
easycbt.view = easycbt.view || {};

easycbt.view.ExaminationsView = Backbone.View.extend({
  el: '#rendering_area',
  template: _.template($("#examinations_template").html()),
  initialize: function(options) {
    var self = this;
  },
  render: function() {
    var self = this;

    var output = self.template({
    });

    self.$el.html(output);
    return self;
  }
});
