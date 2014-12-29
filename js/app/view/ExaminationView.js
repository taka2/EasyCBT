var easycbt = easycbt || {};
easycbt.view = easycbt.view || {};

easycbt.view.ExaminationView = Backbone.View.extend({
  el: '#rendering_area',
  template: _.template($("#questions_template").html()),
  events: {
    'click #btn_finish': 'btnFinishClick'
  },
  initialize: function(options) {
  	var self = this;

    self.collection = options.collection;
    console.log('ExaminationView#initialize');
  },
  render: function() {
  	console.log('ExaminationView#render');
  	var self = this;
  	var output = self.template({'questions': self.collection.toJSON()});
  	self.$el.append(output);
  	return self;
  },
  // Finishボタンイベントハンドラ
  btnFinishClick: function() {
  	console.log('btn_finish');
  }
})