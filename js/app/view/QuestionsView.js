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
      var choices = question.getChoices();
      for(var j=0; j<choices.length; j++) {
        choices[j].index = j;
      }
    }

    // 問題をシャッフルして、指定数だけ取り出す
    var copiedQuestions = questions.deepCopy();
    copiedQuestions.reset(copiedQuestions.shuffle(), {silent:true});
    copiedQuestions.reset(copiedQuestions.filterCategories(self.examination.get('categories')));
    copiedQuestions.reset(copiedQuestions.first(self.examination.get('questionCount')));

    // 選択肢もシャッフル
    for(var i=0; i<copiedQuestions.length; i++) {
      var copiedChoices = _.clone(copiedQuestions.at(i).getChoices());
      copiedQuestions.at(i).setChoices(_.shuffle(copiedChoices));
    }

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
            var answer = question.getChoices()[answerNumber];
            correct = correct && answer.correct;
            answers.push(answer);
          }
        }
        if(answers.length == 0){
          // 選択なしの場合は不正解とする
          correct = false;
        }
        var correctAnswers = question.getCorrectAnswers();
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
          var answer = question.getChoices()[answerNumber];
          correct = answer.correct;
          answers.push(answer);
        }
        var correctAnswers = question.getCorrectAnswers();
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
    var percentageOfCorrectAnswers = calcPercentageOfCorrectAnswers(self.examination.get('questionCount'), correctAnswersCount);

    // 成績を保存
    var results = new easycbt.collection.Results();
    results.fetch();
    results.create(
      {
        'examination': self.examination
        , 'questions': copiedQuestions
        , 'percentageOfCorrectAnswers': percentageOfCorrectAnswers
        , 'created': new Date()
      }
    );

    // 結果ページを描画
    var resultView = new easycbt.view.ResultView({
      examination: self.examination
      , questions2: copiedQuestions
      , correctAnswersCount : correctAnswersCount
      , percentageOfCorrectAnswers: percentageOfCorrectAnswers
    });
    resultView.render();
  }
})
