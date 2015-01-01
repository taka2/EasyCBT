// answers[x]の文字列からxを取り出す
function extractNumber(answersString) {
  var result = answersString.match(/answers.+\[(.*)\]/);
  return Number(result[1]);
}

// question配列から正解オブジェクトを取り出す
function getCorrectAnswers(question) {
  var result = [];
  for(var i=0; i<question.get('answers').length; i++) {
    var answer = question.get('answers')[i];
    if(answer.correct) {
      result.push(answer);
    }
  }

  return result;
}

// answers配列のdescriptionを改行でつないだ文字列を返す
function concatAnswersDescription(answers) {
  if(answers.length == 1) {
    // 1件の場合は加工せず返す
    return answers[0].description;
  }

  // 複数件の場合は加工して返す
  var resultStringArray = [];
  for(var i=0; i<answers.length; i++) {
    resultStringArray.push("(" + (i+1) + ") " + answers[i].description);
  }

  return resultStringArray.join(' ');
}

// 正答率を計算する
function calcPercentageOfCorrectAnswers(questionCount, correctAnswersCount) {
  var percentage = (correctAnswersCount / questionCount * 100);
  // 小数点第2位まで表示（切り捨て）
  return (Math.floor(percentage * 100) / 100);
}
