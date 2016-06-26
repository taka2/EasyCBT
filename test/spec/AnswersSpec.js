describe("Answers", function() {
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
  }, {
    description: "mainメソッドの定義を書け"
    , question_type: 'input_text'
    , answers: [
      {description: 'public static void main(String[] args)', correct: true}
    ]
    , category: 'Java-Main'
  }];

  var questions;

  beforeEach(function() {
    questions = new easycbt.collection.Questions();
    questions.add(questionsData);
  });

  it("getter/setter", function() {
    var answer1 = new easycbt.model.Answer({});
    var question1 = questions.at(0);
    answer1.setQuestion(question1);
    expect(answer1.getQuestion()).toEqual(question1);
    var answers = [1, 2];
    answer1.setAnswers(answers);
    expect(answer1.getAnswers()).toEqual(answers);
  });

  it("isCorrectAnswer", function() {
    var question1 = questions.at(0);
    var question2 = questions.at(1);

    // 回答がなし（引数なし）の場合
    var answer1 = new easycbt.model.Answer({
      question: question1
    });
    expect(answer1.isCorrectAnswer()).toEqual(false);

    // 回答がなし（空配列）の場合
    var answer2 = new easycbt.model.Answer({
      question: question1
      , answers: []
    });
    expect(answer2.isCorrectAnswer()).toEqual(false);

    // 回答があり（複数、正解）の場合
    var answer3 = new easycbt.model.Answer({
      question: question1
      , answers: [0, 1]
    });
    expect(answer3.isCorrectAnswer()).toEqual(true);

    // 回答があり（複数、一部正解）の場合
    var answer4 = new easycbt.model.Answer({
      question: question1
      , answers: [0, 2]
    });
    expect(answer4.isCorrectAnswer()).toEqual(false);

    // 回答があり（複数、全部不正解）の場合
    var answer5 = new easycbt.model.Answer({
      question: question1
      , answers: [2, 3]
    });
    expect(answer5.isCorrectAnswer()).toEqual(false);

    // 回答があり（単一、正解）の場合
    var answer6 = new easycbt.model.Answer({
      question: question2
      , answers: [1]
    });
    expect(answer6.isCorrectAnswer()).toEqual(true);

    // 回答があり（単一、不正解）の場合
    var answer7 = new easycbt.model.Answer({
      question: question2
      , answers: [2]
    });
    expect(answer7.isCorrectAnswer()).toEqual(false);
  });

  it("isCorrectAnswer - INPUT_TEXT", function() {
    var question = questions.at(2);

    // 回答がなし（引数なし）の場合
    var answer1 = new easycbt.model.Answer({
      question: question
    });
    expect(answer1.isCorrectAnswer()).toEqual(false);

    // 回答があり（不正解）の場合
    var answer2 = new easycbt.model.Answer({
      question: question
      , answers: 'hoge'
    });
    expect(answer2.isCorrectAnswer()).toEqual(false);

    // 回答があり（正解）の場合
    var answer3 = new easycbt.model.Answer({
      question: question
      , answers: 'public static void main(String[] args)'
    });
    expect(answer3.isCorrectAnswer()).toEqual(true);
  });
});
