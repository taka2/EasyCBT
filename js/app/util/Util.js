// answers[x]の文字列からxを取り出す
function extractNumber(answersString) {
  var result = answersString.match(/answers.+\[(.*)\]/);
  return Number(result[1]);
}
