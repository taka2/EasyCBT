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

  it("getDescription", function() {
    var actual1 = questions.at(0).getDescription();
    var actual2 = questions.at(1).getDescription();
    expect(actual1).toEqual("コンパイルエラーが起きないのはどれか");
    expect(actual2).toEqual("intの最大値はどれか");
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
});
