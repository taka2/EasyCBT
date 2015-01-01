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
    copiedQuestions.reset(copiedQuestions.filterCategories(self.examination.get('categories')));
    copiedQuestions.reset(copiedQuestions.first(self.examination.get('questionCount')));

    var output = self.template({
      'examinationName': self.examination.get('examinationName')
      , 'questions': copiedQuestions
    });

    self.$el.html(output);
    return self;
  },
  // Finishボタンイベントハンドラ
  btnFinishClick: function() {
    var self = this;

    // 答え合わせ
    var correctAnswersCount = 0;
    var copiedQuestions = new easycbt.collection.Questions();
    for(var k=0; k<self.examination.get('questionCount'); k++) {
      // "answers(k+1)["で始まる要素を取得
      var elem = $("input[name ^= 'answers" + (k+1) + "\[']");

      // 問題を特定
      var questionNumber = extractNumber(elem[0].name);
      var question = questions.at(questionNumber).clone();

      if(question.get('multiple_answer')) {
        // チェックボックスの場合
        var answers = [];
        var correct = true;
        for(var i=0; i<elem.length; i++) {
          if(elem[i].checked) {
            var answerNumber = Number(elem[i].value);
            var answer = question.get('answers')[answerNumber];
            correct = correct && answer.correct;
            answers.push(answer);
          }
        }
        if(answers.length == 0){
          // 選択なしの場合は不正解とする
          correct = false;
        }
        var correctAnswers = getCorrectAnswers(question);
        if(answers.length != correctAnswers.length) {
          // 回答数と正解数があわない場合は不正解とする
          correct = false;
        }
      } else {
        // ラジオボタンの場合
        var answers = [];
        var correct = false;
        var radioButtonValue = elem.filter(":checked").val();
        if(radioButtonValue != undefined) {
          var answerNumber = Number(radioButtonValue);
          var answer = question.get('answers')[answerNumber];
          correct = answer.correct;
          answers.push(answer);
        }
        var correctAnswers = getCorrectAnswers(question);
      }

      // questionオブジェクトに正否、回答、解答をセット
      question.set({correct: correct});
      question.set({correctAnswers: correctAnswers});
      question.set({selectedAnswers: answers});
      if(question.get('correct')) {
        correctAnswersCount++;
      }
      copiedQuestions.push(question);
    }

    // 結果ページを描画
    var resultView = new easycbt.view.ResultView({
      examination: self.examination
      , questions2: copiedQuestions
      , correctAnswersCount : correctAnswersCount
    });
    resultView.render();
  }
})
