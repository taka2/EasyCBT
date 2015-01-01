// テストデータ
questions.add([
  {
    description: "次のうち、プリミティブ型でないものはどれ"
    , multiple_answer: true
    , answers: [
      {description: "int", correct: false}
      , {description: "boolean", correct: false}
      , {description: "String", correct: true}
      , {description: "short", correct: false}
    ]
  }
  , {
    description: "intの最大値はどれか"
    , multiple_answer: false
    , answers: [
      {description: "32767", correct: false}
      , {description: "2147483647", correct: true}
      , {description: "9223372036854775807", correct: false}
      , {description: "\\uffff", correct: false}
    ]
  }
  , {
    description: "コンパイルエラーが起きないのはどれか"
    , multiple_answer: true
    , answers: [
      {description: "ArrayList a = new ArrayList();", correct: true}
      , {description: "List a = new ArrayList();", correct: true}
      , {description: "List a = new List();", correct: false}
      , {description: "ArrayList a = new List();", correct: false}
    ]
  }
  , {
    description: "識別子として有効なものはどれか"
    , multiple_answer: true
    , answers: [
      {description: "日本語", correct: true}
      , {description: "volatile", correct: false}
      , {description: "val", correct: true}
      , {description: "true", correct: false}
    ]
    , category: 'Bronze'
  }
]);
