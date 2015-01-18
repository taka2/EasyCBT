// テストデータ
questions.add([
  {
    description: "PKIを構成するOCSPを利用する目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "誤って破棄してしまった秘密鍵の再発行処理の進捗状況を問い合わせる。", correct: false}
      , {description: "ディジタル証明書から生成した鍵情報の交換がOCSPクライアントとレスポンダの間で失敗した際，認証状態を確認する。", correct: false}
      , {description: "ディジタル証明書の失効情報を問い合わせる。", correct: true}
      , {description: "有効期限の切れたディジタル証明書の更新処理の進捗状況を確認する。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "ハッシュ関数の性質の一つである衝突発見困難性に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SHA-256の衝突発見困難性を示す，ハッシュ値が一致する二つのメッセージの探索に要する最大の計算量は， 256の2乗である。", correct: false}
      , {description: "SHA-256の衝突発見困難性を示す，ハッシュ値の元のメッセージの探索に要する最大の計算量は， 2の256乗である。", correct: false}
      , {description: "ハッシュ値が与えられたときに，元のメッセージの探索に要する計算量の大きさによる，探索の困難性のことである。", correct: false}
      , {description: "ハッシュ値が一致する二つのメッセージの探索に要する計算量の大きさによる，探索の困難性のことである。", correct: true}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "経済産業省が公表した“クラウドサービス利用のための情報セキュリティマネジメントガイドライン”が策定された目的について述べたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "JIS Q 27002の管理策を補完し，クラウドサービス利用者が情報セキュリテイ対策を円滑に行えるようにする。", correct: true}
      , {description: "クラウドサービス提供事業者に対して情報セキュリティ監査を実施する方法を利用者に提示する。", correct: false}
      , {description: "クラウドサービスの利用がもたらすセキュリティリスクをサーピス提供事業者の視点で提示する。", correct: false}
      , {description: "セキュリティリスクの懸念が少ないクラウドサービス提供事業者を利用者が選択できるような格付け基準を提供する。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "ディジタル証明書に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "S/MIMEや TLSで利用するディジタル証明書の規格は， ITU-T X.400で規定されている。", correct: false}
      , {description: "ディジタル証明書は， SSL(TLSプロトコルにおいて通信データの暗号化のための鍵交換や通信相手の認証に利用されている。", correct: true}
      , {description: "認証局が発行するディジタル証明書は，申請者の秘密鍵に対して認証局がディジタル署名したものである。", correct: false}
      , {description: "ルート認証局は，下位の認証局の公開鍵にルート認証局の公開鍵でディジタル署名したディジタル証明書を発行する。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "FIPS 140-2を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "暗号モジュールのセキュリティ要求事項", correct: true}
      , {description: "情報セキュリテイマネジメントシステムに関する認証基準", correct: false}
      , {description: "ディジタル証明書や証明書失効リストの標準仕様", correct: false}
      , {description: "無線LANセキュリティ技術", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "CSIRTの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPアドレスの割当て方針の決定， DNSルートサーバの運用監視， DNS管理に関する調整などを世界規模で行う組織である。", correct: false}
      , {description: "インターネットに関する技術文書を作成し，標準化のための検討を行う組織である。", correct: false}
      , {description: "企業・組織内や政府機関に設置され，コンビュータセキュリティインシデントに関する報告を受け取り，調査し，対応活動を行う組織の総称である。", correct: true}
      , {description: "情報技術を利用し，宗教的又は政治的な目標を達成するという目的をもった人や組織の総称である。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "基本評価基準，現状評価基準，環境評価基準の三つの基準で IT製品のセキュリティ脆弱性の深刻さを三副面するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CVSS", correct: true}
      , {description: "ISMS", correct: false}
      , {description: "PCI DSS", correct: false}
      , {description: "PMS", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "CRYPTRECの活動内容はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "暗号技術の安全性，実装性及び利用実績の評価・検討を行う。", correct: true}
      , {description: "情報セキュリティ政策に係る基本戦略の立案，官民における統一的，横断的な情報セキュリティ対策の推進に係る企画などを行う。", correct: false}
      , {description: "組織の情報セキュリティマネジメントシステムについて評価し認証する制度を運用する。", correct: false}
      , {description: "認証機関から貸与された暗号モジュール試験報告書作成支援ツールを用いて暗号モジュールの安全性についての評価試験を行う。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "DNSキャッシュサーバに対して外部から行われるキャッシュポイズニング攻撃への対策のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部ネットワークからの再帰的な問合せに応答できるように，コンテンツサーバにキャッシュサーバを兼ねさせる。", correct: false}
      , {description: "再帰的な問合せに対しては，内部ネットワークからのものだけに応答するように設定する。", correct: true}
      , {description: "再帰的な問合せを行う際の送信元のポート番号を固定する。", correct: false}
      , {description: "再帰的な問合せを行う際のトランザクションIDを固定する。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "標準化団体 OASISが， Webサイト間で認証，属性及び認可の情報を安全に交換するために策定したフレームワークはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SAML", correct: true}
      , {description: "SOAP", correct: false}
      , {description: "XKMS", correct: false}
      , {description: "XML Signature", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "暗号化や認証機能をもち，遠隔にあるコンビュータを操作する機能をもったものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPsec", correct: false}
      , {description: "L2TP", correct: false}
      , {description: "RADIUS", correct: false}
      , {description: "SSH", correct: true}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "DoS攻撃の一つである Smurf攻撃の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ICMPの応答パケットを大量に送り付ける。", correct: true}
      , {description: "TCP接続要求であるSYNパケットを大量に送り付ける。", correct: false}
      , {description: "サイズが大きいUDPパケットを大量に送り付ける。", correct: false}
      , {description: "サイズが大きい電子メールや大量の電子メールを送り付ける。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "サイドチャネル攻撃を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "暗号化装置における暗号化処理時の消費電力などの測定や統計処理によって，当該装置内部の機密情報を推定する攻撃", correct: true}
      , {description: "攻撃者が任意に選択した平文とその平文に対応した暗号文から数学的手法を用いて暗号鍵を推測し，同じ暗号鍵を用いて作成された暗号文を解読する攻撃", correct: false}
      , {description: "操作中の人の横から，入力操作の内容を観察することによって.IDとパスワードを盗み取る攻撃", correct: false}
      , {description: "無線 LANのアクセスポイントを不正に設置し，チャネル間の干渉を発生させることによって，通信を妨害する攻撃", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "ディジタルフォレンジックスを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "画像や音楽などのディジタルコンテンツに著作権者などの情報を埋め込む。", correct: false}
      , {description: "コンビュータやネットワークのセキュリティ上の弱点を発見するテスト手法のーつであり，システムを実際に攻撃して侵入を試みる。", correct: false}
      , {description: "ネットワークの管理者や利用者などから，巧みな話術や盗み聞き，盗み見などの手段によって，パスワードなどのセキュリティ上重要な情報を入手する。", correct: false}
      , {description: "犯罪に対する証拠となり得るデータを保全し，その後の訴訟などに備える。", correct: true}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "スパムメールへの対策である DKIM (DomainKeys Identified Mail)の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "送信側メールサーバでディジタル署名を電子メールのヘッダに付加して，受信側メールサーバで検証する。", correct: true}
      , {description: "送信側メールサーバで利用者が認証されたとき，電子メールの送信が許可される。", correct: false}
      , {description: "電子メールのヘッダや配送経路の情報から得られる送信元情報を用いて，メール送信元の IPアドレスを検証する。", correct: false}
      , {description: "ネットワーク機器で，内部ネットワークから外部のメールサーバの TCPポート番号25への直接の通信を禁止する。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "認証にクライアント証明書を用いるプロトコルはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "EAP-MD5", correct: false}
      , {description: "EAP-PEAP", correct: false}
      , {description: "EAP-TLS", correct: true}
      , {description: "EAP-TTLS", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "サンドボックスの仕組みについて述べたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Webアプリケーションの監弱性を悪用する攻撃に含まれる可能性が高い文字列を定義し，攻撃であると判定した場合には，その通信を遮断する。", correct: false}
      , {description: "侵入者をおびき寄せるために本物そっくりのシステムを設置し，侵入者の挙動などを監視する。", correct: false}
      , {description: "プログラムの影響がシステム全体に及ばないように，プログラムが実行できる機能やアクセスできるリソースを制限して動作させる。", correct: true}
      , {description: "プログラムのソースコードで SQL文の擁形の中に変数の場所を示す記号を置いた後，実際の値を割り当てる。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "DNSSECに関する記述として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DNSサーバへの DoS攻撃を防止できる。", correct: false}
      , {description: "IPsecによる暗号化通信が前提となっている。", correct: false}
      , {description: "代表的な DNSサーバの実装である BINDの代替として使用する。", correct: false}
      , {description: "ディジタル署名によって DNS応答の正当性を確認できる。", correct: true}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "リモートアクセス環境において，認証情報やアカウンテイング情報をやり取りするプロトコルはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CHAP", correct: false}
      , {description: "PAP", correct: false}
      , {description: "PPTP", correct: false}
      , {description: "RADIUS", correct: true}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "インターネット標準 RFC5322 (旧RFC822)に準拠した電子メールにおいて，へッダと本体を区別する方法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "&lt;header&gt;と&lt;/header&gt;で固まれた部分をヘッダ. &lt;body&gt;と&lt;/hody&gt;で固まれた部分を本体とする。", correct: false}
      , {description: "1個のピリオドだけから成る行の前後でヘッダと本体を分ける。", correct: false}
      , {description: "Subjectフィールドがヘッダの最後であり，それ以降を本体とする。", correct: false}
      , {description: "最初に現れる空行の前後でヘッダと本体を分ける。", correct: true}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "トランザクション A～Dに関する待ちグラフのうち，デッドロックが発生しているものはどれか。ここで，待ちグラフの矢印は.X→Yのとき，トランザクションXはトランザクション Yがロックしている資源のアンロックを待っていることを表す。"
    , multiple_answer: false
    , answers: [
      {description: "B->A C->B D->C D->A", correct: false}
      , {description: "A->C A->D B->A C->B", correct: true}
      , {description: "A->B A->C A->D", correct: false}
      , {description: "A>C B->C D->C", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "テストで使用されるスタブ又はドライパの説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "スタブは，テスト対象モジュールからの戻り値を表示・印刷する。", correct: false}
      , {description: "スタブは，テスト対象モジュールを呼び出すモジュールである。", correct: false}
      , {description: "ドライパは，テスト対象モジュールから呼び出されるモジュールである。", correct: false}
      , {description: "ドライバは，引数を渡してテスト対象モジュールを呼び出す。", correct: true}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "コンテンツの不正な複製を防止する方式の一つであるDTCP-IPの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "BSデジタル放送や地上デジタル放送に採用され，コピーワンスの番組を録画するときに使われる方式", correct: false}
      , {description: "DLNAとともに用いられ，接続する機器開で相互認証し，コンテンツ保護が行えると認識して初めて録画再生を可能にする方式", correct: true}
      , {description: "DVDに採用され，映像コンテンツを暗号化して，複製できないエリアにその暗号化鍵を記録する方式", correct: false}
      , {description: "HDMI端子が搭載されたディジタル AV機器に採用され， HDMI端子から表示機器にディジタル信号を送るときに受信する経路を暗号化する方式", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "JIS Q20000-1で定義されるインシデントに該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスの新人向け教育の依頼", correct: false}
      , {description: "ITサービスやシステムの機能，使い方に対する問合せ", correct: false}
      , {description: "アプリケーションの応答の大幅な遅延", correct: true}
      , {description: "新設営業所への ITサービス提供要求 ", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "情報セキュリティに関する従業員の責任について，”情報セキュリティ管理基準”に基づいて監査を行った。指摘事項に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "雇用の終了をもって守秘責任が解消されることが，雇用契約に定められている。", correct: true}
      , {description: "定められた勤務時間以外においても守秘責任を負うことが，雇用契約に定められている。", correct: false}
      , {description: "定められた守秘責任を果たさなかった場合，相応の措置がとられることが，雇用契約に定められている。", correct: false}
      , {description: "定められた内容の守秘義務契約書に署名することが，雇用契約に定められている。", correct: false}
    ]
    , category: 'SC-H26-AUTUMN'
  }
]);
