// answers[x]の文字列からxを取り出す
function extractNumber(answersString) {
  var result = answersString.match(/answers.+\[(.*)\]/);
  return Number(result[1]);
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
