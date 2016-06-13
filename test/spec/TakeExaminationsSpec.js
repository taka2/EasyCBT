describe("TakeExaminations", function() {
  var examinationsData = [
    {
      examinationName: "Javaクイズ(カテゴリなしのみ)"
      , questionCount: 2
      , categories: [undefined]
    }
    , {
      examinationName: "Javaクイズ(ALL)"
      , questionCount: 3
      , categories: [undefined, 'Bronze']
    }
  ];

  var examinations;

  var questionsData = [
  {
      description: "コンパイルエラーが起きないのはどれか"
      , multiple_answer: true
      , answers: [
        {description: "ArrayList a = new ArrayList();", correct: true}
        , {description: "List a = new ArrayList();", correct: true}
        , {description: "List a = new List();", correct: false}
        , {description: "ArrayList a = new List();", correct: false}
      ]
  }, {
    description: "intの最大値はどれか"
    , multiple_answer: false
    , answers: [
      {description: "32767", correct: false}
      , {description: "2147483647", correct: true}
      , {description: "9223372036854775807", correct: false}
      , {description: "\\uffff", correct: false}
    ]
  }];

  var questions;

  beforeEach(function() {
    examinations = new easycbt.collection.Examinations();
    examinations.add(examinationsData);
    questions = new easycbt.collection.Questions();
    questions.add(questionsData);
  });

  it("getter/setter", function() {
    var takeExamination = new easycbt.model.TakeExamination({
      examination: examinations.at(0)
    });

    expect(takeExamination.getExamination()).toEqual(examinations.at(0));
  });

  it("getCorrectAnswersCount/getPercentageOfCorrectAnswers - All correct", function() {
    // 全問正解
    var answers = new easycbt.collection.Answers();
    answers.push(new easycbt.model.Answer({
      question: questions.at(0)
      , answers: [0, 1]
    }));
    answers.push(new easycbt.model.Answer({
      question: questions.at(1)
      , answers: [1]
    }));
    var takeExamination = new easycbt.model.TakeExamination({
      examination: examinations.at(0)
      , answers: answers
    });

    expect(takeExamination.getCorrectAnswersCount()).toEqual(2);
    expect(takeExamination.getPercentageOfCorrectAnswers()).toEqual(100);
  });

  it("getCorrectAnswersCount/getPercentageOfCorrectAnswers - All incorrect", function() {
    // 全問不正解
    var answers = new easycbt.collection.Answers();
    answers.push(new easycbt.model.Answer({
      question: questions.at(0)
      , answers: [0, 1, 3]
    }));
    answers.push(new easycbt.model.Answer({
      question: questions.at(1)
      , answers: [2]
    }));
    var takeExamination = new easycbt.model.TakeExamination({
      examination: examinations.at(0)
      , answers: answers
    });

    expect(takeExamination.getCorrectAnswersCount()).toEqual(0);
    expect(takeExamination.getPercentageOfCorrectAnswers()).toEqual(0);
  });

  it("getWrongAnswerCountGroupByQuestion - All correct", function() {
    // 全問正解
    var answers = new easycbt.collection.Answers();
    answers.push(new easycbt.model.Answer({
      question: questions.at(0)
      , answers: [0, 1]
    }));
    answers.push(new easycbt.model.Answer({
      question: questions.at(1)
      , answers: [1]
    }));
    var takeExamination = new easycbt.model.TakeExamination({
      examination: examinations.at(0)
      , answers: answers
    });
    var takeExaminations = new easycbt.collection.TakeExaminations();
    takeExaminations.push(takeExamination);

    var actual = takeExaminations.getWrongAnswerCountGroupByQuestion();
    expect(actual.length).toEqual(0);
  });

  it("getWrongAnswerCountGroupByQuestion - There is a incorrect", function() {
    // 1問不正解
    var answers = new easycbt.collection.Answers();
    answers.push(new easycbt.model.Answer({
      question: questions.at(0)
      , answers: [0, 1]
    }));
    answers.push(new easycbt.model.Answer({
      question: questions.at(1)
      , answers: [2]
    }));
    var takeExamination = new easycbt.model.TakeExamination({
      examination: examinations.at(0)
      , answers: answers
    });
    var takeExaminations = new easycbt.collection.TakeExaminations();
    takeExaminations.push(takeExamination);

    var actual = takeExaminations.getWrongAnswerCountGroupByQuestion();
    expect(actual.length).toEqual(1);
    var actual1 = actual[0];
    expect(actual1.question.getDescription()).toEqual("intの最大値はどれか");
    expect(actual1.count).toEqual(1);
  });

  it("getWrongAnswerCountGroupByQuestion - There are incorrects", function() {
    // 複数問不正解
    var answers = new easycbt.collection.Answers();
    answers.push(new easycbt.model.Answer({
      question: questions.at(0)
      , answers: [2, 3]
    }));
    answers.push(new easycbt.model.Answer({
      question: questions.at(1)
      , answers: [2]
    }));
    answers.push(new easycbt.model.Answer({
      question: questions.at(1)
      , answers: [3]
    }));
    var takeExamination = new easycbt.model.TakeExamination({
      examination: examinations.at(0)
      , answers: answers
    });
    var takeExaminations = new easycbt.collection.TakeExaminations();
    takeExaminations.push(takeExamination);

    var actual = takeExaminations.getWrongAnswerCountGroupByQuestion();
    expect(actual.length).toEqual(2);
    var actual1 = actual[0];
    expect(actual1.question.getDescription()).toEqual("intの最大値はどれか");
    expect(actual1.count).toEqual(2);
    var actual2 = actual[1];
    expect(actual2.question.getDescription()).toEqual("コンパイルエラーが起きないのはどれか");
    expect(actual2.count).toEqual(1);
  });
});
