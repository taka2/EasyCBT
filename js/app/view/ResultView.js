var easycbt = easycbt || {};
easycbt.view = easycbt.view || {};

easycbt.view.ResultView = Backbone.View.extend({
  el: '#rendering_area',
  template: _.template($("#result_template").html()),
  initialize: function(options) {
    var self = this;
    self.takeExamination = options.takeExamination;
  },
  render: function() {
    var self = this;

    var output = self.template({
      'takeExamination': self.takeExamination
    });

    self.$el.html(output);
    return self;
  }
})
