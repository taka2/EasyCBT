describe("TakeExaminations", function() {
  it("getter/setter", function() {
    var examination = new easycbt.model.Examination({
      examinationName: 'aaa'
      , questionCount: 10
      , categories: []
    });
    var takeExamination = new easycbt.model.TakeExamination({
      examination: examination
    });

    expect(takeExamination.getExamination()).toEqual(examination);
  });
});
