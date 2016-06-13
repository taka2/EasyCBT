describe("Examinations", function() {
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

  beforeEach(function() {
    examinations = new easycbt.collection.Examinations();
    examinations.add(examinationsData);
  });

  it("size", function() {
    var actualSize = examinations.size();
    expect(actualSize).toEqual(2);
  });

  it("getExaminationName", function() {
    var actual1 = examinations.at(0).getExaminationName();
    expect(actual1).toEqual("Javaクイズ(カテゴリなしのみ)");
    var actual2 = examinations.at(1).getExaminationName();
    expect(actual2).toEqual("Javaクイズ(ALL)");
  });

  it("getQuestionCount", function() {
    var actual1 = examinations.at(0).getQuestionCount();
    expect(actual1).toEqual(2);
    var actual2 = examinations.at(1).getQuestionCount();
    expect(actual2).toEqual(3);
  });

  it("getCategories", function() {
    var actual1 = examinations.at(0).getCategories();
    expect(actual1).toEqual([undefined]);
    var actual2 = examinations.at(1).getCategories();
    expect(actual2).toEqual([undefined, 'Bronze']);
  });

  it("getActualQuestionCount", function() {
    var actual1 = examinations.at(1).getActualQuestionCount();
    expect(actual1).toEqual(3);
    examinations.at(1).setActualQuestionCount(2);
    var actual2 = examinations.at(1).getActualQuestionCount();
    expect(actual2).toEqual(2);
  });
});
