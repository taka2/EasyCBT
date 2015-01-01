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
    self.examinationName = options.examinationName;
    self.questionCount = options.questionCount;
    self.collection = options.collection;
    console.log('ExaminationView#initialize');
  },
  render: function() {
    console.log('ExaminationView#render');
    var self = this;

    // 問題データの（シャッフル前）オリジナルインデックスを保存
    for(var i=0; i<questions.length; i++) {
      var question = questions.at(i);
      question.set({index: i});
      var answers = question.get('answers');
      for(var j=0; j<answers.length; j++) {
        answers[j].index = j;
      }
    }

    // 問題をシャッフルして、指定数だけ取り出す
    var copiedQuestions = questions.clone();
    copiedQuestions.reset(copiedQuestions.shuffle(), {silent:true});
    copiedQuestions = copiedQuestions.first(questionCount);
    
    // Type convert Array -> easycbt.collection.Questions
    var copiedQuestions2 = new easycbt.collection.Questions();
    copiedQuestions2.add(copiedQuestions);

    var output = self.template({
      'examinationName': self.examinationName
      , 'questions': copiedQuestions2
    });
    self.$el.append(output);
    return self;
  },
  // Finishボタンイベントハンドラ
  btnFinishClick: function() {
  	console.log('btn_finish');
  }
})
