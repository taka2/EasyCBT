var router = new easycbt.router.MyRouter();
Backbone.history.start();

// 問題データの（シャッフル前）オリジナルインデックスを保存
for(var i=0; i<questions.length; i++) {
  var question = questions.at(i);
  question.set({index: i});
  var choices = question.getChoices();
  for(var j=0; j<choices.length; j++) {
    choices[j].index = j;
  }
}
