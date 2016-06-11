describe("Questions", function() {
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
    questions = new easycbt.collection.Questions();
    questions.add(questionsData);
  });

  it("size", function() {
    var actualSize = questions.size();
    expect(actualSize).toEqual(2);
  });

  it("getQuestionType", function() {
    var actual1 = questions.at(0).getQuestionType();
    var actual2 = questions.at(1).getQuestionType();
    expect(actual1).toEqual(easycbt.model.Question.QUESTION_TYPE_MULTIPLE_CHOICE);
    expect(actual2).toEqual(easycbt.model.Question.QUESTION_TYPE_SINGLE_CHOICE);
  });

  it("getDescription", function() {
    var actual1 = questions.at(0).getDescription();
    var actual2 = questions.at(1).getDescription();
    expect(actual1).toEqual("コンパイルエラーが起きないのはどれか");
    expect(actual2).toEqual("intの最大値はどれか");
  });

  it("getCchoices", function() {
    var actual1 = questions.at(0).getChoices();
    expect(actual1.length).toEqual(4);
    expect(actual1[0].description).toEqual("ArrayList a = new ArrayList();");
    expect(actual1[1].description).toEqual("List a = new ArrayList();");
    expect(actual1[2].description).toEqual("List a = new List();");
    expect(actual1[3].description).toEqual("ArrayList a = new List();");
  });

  it("setChoices", function() {
    var expectedChoices = [
        {description: "List a = new ArrayList();", correct: true}
        , {description: "ArrayList a = new ArrayList();", correct: true}
        , {description: "List a = new List();", correct: false}
    ];

    var question1 = questions.at(0).setChoices(expectedChoices);
    var actual1 = question1.getChoices();
    expect(actual1.length).toEqual(3);
    expect(actual1).toEqual(expectedChoices);
  });

  it("getCorrectAnswers", function() {
    var actual1 = questions.at(0).getCorrectAnswers();
    var actual2 = questions.at(1).getCorrectAnswers();
    expect(actual1.length).toEqual(2);
    expect(actual2.length).toEqual(1);
  });

  it("getCorrectAnswersDescription", function() {
    var actual1 = questions.at(0).getCorrectAnswersDescription();
    var actual2 = questions.at(1).getCorrectAnswersDescription();
    expect(actual1).toEqual("(1) ArrayList a = new ArrayList(); (2) List a = new ArrayList();");
    expect(actual2).toEqual("2147483647");
  });

  it("isCorrectAnswer", function() {
    // 回答がなし（引数なし）の場合
    var actual1 = questions.at(0).isCorrectAnswer();
    expect(actual1).toEqual(false);

    // 回答がなし（空配列）の場合
    var actual2 = questions.at(0).isCorrectAnswer([]);
    expect(actual2).toEqual(false);

    // 回答があり（複数、正解）の場合
    var actual3 = questions.at(0).isCorrectAnswer([0, 1]);
    expect(actual3).toEqual(true);

    // 回答があり（複数、一部正解）の場合
    var actual4 = questions.at(0).isCorrectAnswer([0, 2]);
    expect(actual4).toEqual(false);

    // 回答があり（複数、全部不正解）の場合
    var actual5 = questions.at(0).isCorrectAnswer([2, 3]);
    expect(actual5).toEqual(false);

    // 回答があり（単一、正解）の場合
    var actual6 = questions.at(1).isCorrectAnswer([1]);
    expect(actual6).toEqual(true);

    // 回答があり（単一、不正解）の場合
    var actual7 = questions.at(1).isCorrectAnswer([2]);
    expect(actual7).toEqual(false);
  });
});
