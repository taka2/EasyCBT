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
    , category: 'Java'
  }, {
    description: "次のうち、プリミティブ型でないものはどれ"
    , multiple_answer: true
    , answers: [
      {description: "int", correct: false}
      , {description: "boolean", correct: false}
      , {description: "String", correct: true}
      , {description: "short", correct: false}
    ]
    , category: ['Java', 'Compile']
  }];

  var questions;

  beforeEach(function() {
    questions = new easycbt.collection.Questions();
    questions.add(questionsData);
  });

  it("size", function() {
    var actualSize = questions.size();
    expect(actualSize).toEqual(3);
  });

  it("saveOriginalIndex", function() {
    var actualQuestions = questions.deepCopy();
    actualQuestions = actualQuestions.saveOriginalIndex();
    for(var i=0; i<actualQuestions.size(); i++) {
      expect(actualQuestions.at(i).get('index')).toEqual(i);
      var choices = actualQuestions.at(i).getChoices();
      for(var j=0; j<choices.length; j++) {
        expect(choices[j].index).toEqual(j);
      }
    }
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

  it("getChoices", function() {
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

  it("getCategory", function() {
    var actual1 = questions.at(0).getCategory();
    var actual2 = questions.at(1).getCategory();
    expect(actual1).toBeUndefined();
    expect(actual2).toEqual("Java");
  });

  it("getCorrectAnswers", function() {
    var actual1 = questions.at(0).getCorrectAnswers();
    var actual2 = questions.at(1).getCorrectAnswers();
    expect(actual1.length).toEqual(2);
    expect(actual2.length).toEqual(1);
  });

  it("getSelectedAnswers", function() {
    var actual1 = questions.at(0).getSelectedAnswers([0, 1]);
    expect(actual1.length).toEqual(2);
    expect(actual1[0].description).toEqual("ArrayList a = new ArrayList();");
    expect(actual1[1].description).toEqual("List a = new ArrayList();");
  });

  it("getCorrectAnswersDescription", function() {
    var actual1 = questions.at(0).getCorrectAnswersDescription();
    var actual2 = questions.at(1).getCorrectAnswersDescription();
    expect(actual1).toEqual("(1) ArrayList a = new ArrayList(); (2) List a = new ArrayList();");
    expect(actual2).toEqual("2147483647");
  });

  it("getSelectedAnswersDescription", function() {
    var actual1 = questions.at(0).getSelectedAnswersDescription([0, 2]);
    var actual2 = questions.at(1).getSelectedAnswersDescription([2]);
    expect(actual1).toEqual("(1) ArrayList a = new ArrayList(); (2) List a = new List();");
    expect(actual2).toEqual("9223372036854775807");
  });

  it("filterCategories - no categories specified", function() {
    var actual = questions.filterCategories();
    var actualSize = actual.length;
    expect(actualSize).toEqual(3);
  });

  it("filterCategories - one category specified", function() {
    var actual = questions.filterCategories(['Compile']);
    var actualSize = actual.length;
    expect(actualSize).toEqual(1);
    var actualDescription = actual[0].getDescription();
    expect(actualDescription).toEqual("次のうち、プリミティブ型でないものはどれ");
  });

  it("filterCategories - one category specified pattern2", function() {
    var actual = questions.filterCategories(['Java']);
    var actualSize = actual.length;
    expect(actualSize).toEqual(2);
    var actualDescription1 = actual[0].getDescription();
    expect(actualDescription1).toEqual("intの最大値はどれか");
    var actualDescription2 = actual[1].getDescription();
    expect(actualDescription2).toEqual("次のうち、プリミティブ型でないものはどれ");
  });

  it("filterCategories - two categories specified", function() {
    var actual = questions.filterCategories(['Java', 'Compile']);
    var actualSize = actual.length;
    expect(actualSize).toEqual(2);
    var actualDescription1 = actual[0].getDescription();
    expect(actualDescription1).toEqual("intの最大値はどれか");
    var actualDescription2 = actual[1].getDescription();
    expect(actualDescription2).toEqual("次のうち、プリミティブ型でないものはどれ");
  });

  it("filterCategories - two categories specified with undefined", function() {
    var actual = questions.filterCategories(['Compile', undefined]);
    var actualSize = actual.length;
    expect(actualSize).toEqual(2);
    var actualDescription1 = actual[0].getDescription();
    expect(actualDescription1).toEqual("コンパイルエラーが起きないのはどれか");
    var actualDescription2 = actual[1].getDescription();
    expect(actualDescription2).toEqual("次のうち、プリミティブ型でないものはどれ");
  });
});
