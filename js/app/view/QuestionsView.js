var easycbt = easycbt || {};
easycbt.view = easycbt.view || {};

easycbt.view.QuestionsView = Backbone.View.extend({
  el: '#rendering_area',
  template: _.template($("#questions_template").html()),
  events: {
    'click #btn_finish': 'btnFinishClick'
  },
  initialize: function(options) {
    var self = this;
    self.examination = options.examination;
  },
  render: function() {
    var self = this;

    // 問題データの（シャッフル前）オリジナルインデックスを保存
    questions.saveOriginalIndex();

    // 問題をシャッフルして、指定カテゴリで絞り、指定数だけ取り出す
    var copiedQuestions = questions.deepCopy();
    copiedQuestions.reset(copiedQuestions.shuffle(), {silent:true});
    copiedQuestions.reset(copiedQuestions.filterCategories(self.examination.getCategories()));
    copiedQuestions.reset(copiedQuestions.first(self.examination.getQuestionCount()));

    // 選択肢もシャッフル
    for(var i=0; i<copiedQuestions.length; i++) {
      var copiedChoices = _.clone(copiedQuestions.at(i).getChoices());
      copiedQuestions.at(i).setChoices(_.shuffle(copiedChoices));
    }

    var output = self.template({
      'examination': self.examination
      , 'questions': copiedQuestions
    });

    self.$el.html(output);
    return self;
  },
  // Finishボタンイベントハンドラ
  btnFinishClick: function() {
    var self = this;

    // 答え合わせ
    var answers = new easycbt.collection.Answers();
    for(var k=0; k<self.examination.getQuestionCount(); k++) {
      // "answers(k+1)["で始まる要素を取得
      var elem = $("input[name ^= 'answers" + (k+1) + "\[']");
      var elemType = elem.prop('type');

      // 問題を特定
      var questionNumber = extractNumber(elem[0].name);
      var question = questions.at(questionNumber);

      if(elemType == 'checkbox') {
        // チェックボックスの場合
        var answersIndex = [];

        for(var i=0; i<elem.length; i++) {
          if(elem[i].checked) {
            var answerNumber = Number(elem[i].value);
            answersIndex.push(answerNumber);
          }
        }
        answers.push(new easycbt.model.Answer({
          question: question
          , answers: answersIndex
        }));
      } else if(elemType == 'radio') {
        // ラジオボタンの場合
        var answersIndex = [];

        var radioButtonValue = elem.filter(":checked").val();
        if(radioButtonValue != undefined) {
          var answerNumber = Number(radioButtonValue);
          answersIndex.push(answerNumber);
        }
        answers.push(new easycbt.model.Answer({
          question: question
          , answers: answersIndex
        }));
      }
    }

    // 成績をローカルストレージに保存
    var takeExamination = new easycbt.model.TakeExamination({
      examination: self.examination
      , answers: answers
      , created: new Date()
    });

    var takeExaminations = new easycbt.collection.TakeExaminations();
    takeExaminations.fetch();
    takeExaminations.create(takeExamination.clone());

    // 結果ページを描画
    var resultView = new easycbt.view.ResultView({
      takeExamination: takeExamination
    });
    resultView.render();
  }
})
