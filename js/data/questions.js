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
    , category: 'Java'
    , explanation: 'Stringは参照型です。'
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
    , category: 'Java-Bronze'
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
    , category: 'Java'
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
    , category: 'Java-Bronze'
  }
  , {
    description: "mainメソッドの定義を書け"
    , question_type: 'input_text'
    , answers: [
      {description: 'public static void main(String[] args)', correct: true}
      , {description: 'public static void main(String[] args) throws Exception', correct: true}
    ]
    , category: 'Java-Bronze'
  }
  , {
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
      , {description: "企業・組織内や政府機関に設置され，コンピュータセキュリティインシデントに関する報告を受け取り，調査し，対応活動を行う組織の総称である。", correct: true}
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
    description: "暗号化や認証機能をもち，遠隔にあるコンピュータを操作する機能をもったものはどれか。"
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
      , {description: "コンピュータやネットワークのセキュリティ上の弱点を発見するテスト手法のーつであり，システムを実際に攻撃して侵入を試みる。", correct: false}
      , {description: "ネットワークの管理者や利用者などから，巧みな話術や盗み聞き，盗み見などの手段によって，パスワードなどのセキュリティ上重要な情報を入手する。", correct: false}
      , {description: "犯罪に対する証拠となり得るデータを保全し，その後の訴訟などに備える。", correct: true}
    ]
    , category: 'SC-H26-AUTUMN'
  }
  , {
    description: "スパムメールへの対策であるDKIM（DomainKeys Identified Mail）の説明はどれか。"
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
    description: "トランザクション A～Dに関する待ちグラフのうち，デッドロックが発生しているものはどれか。ここで，待ちグラフの矢印は，X→Yのとき，トランザクションXはトランザクションYがロックしている資源のアンロックを待っていることを表す。"
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
  , {
    description: "特定の認証局が発行した CRL(Certificate Revocation List)に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CRLには，失効したディジタル証明書に対応する秘密鍵が登録される。", correct: false}
      , {description: "CRLには，有効期限内のディジタル証明書のうち破棄されているディジタル証明書と破棄された日時の対応が提示される。", correct: true}
      , {description: "CRLは，鍵の漏えい，破棄申請の状況をリアルタイムに反映するプロトコルである。", correct: false}
      , {description: "有効期限切れで失効したディジタル証明書は，所有者が新たなディジタル証明書を取得するまでの間，CRLに登録される。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "XML署名において署名対象であるオブジェクトの参照を指定する表記形式はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "OIDの形式", correct: false}
      , {description: "SSIDの形式", correct: false}
      , {description: "URIの形式", correct: true}
      , {description: "ディジタル証明書のシリアル番号の形式", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "クラウドサービスにおける，従量課金を利用した EDoS（Economic Denial of Service. Economic Denial of Sustainability）攻撃の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "カード情報の取得を目的に，金融機関が利用しているクラウドサービスに侵入する攻撃", correct: false}
      , {description: "課金回避を目的に，同じハードウェア上に構築された別の仮想マシンに侵入し，課金機能を利用不可にする攻撃", correct: false}
      , {description: "クラウド利用企業の経済的な損失を目的に，リソースを大量消費させる攻撃", correct: true}
      , {description: "パスワード解析を目的に，クラウド環境のリソースを悪用する攻撃", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "スパムメールの対策として，宛先ポート番号25番の通信に対してISPが実施するOP25Bの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ISP管理外のネットワークからの通信のうち，スパムメールのシグネチャに該当するものを遮断する。", correct: false}
      , {description: "動的IPアドレスを割り当てたネットワークからISP管理外のネットワークへの直接の通信を遮断する。", correct: true}
      , {description: "メール送信元のメールサーバについてDNSの逆引きができない場合，そのメールサーバからの通信を遮断する。", correct: false}
      , {description: "メール不正中継の脆弱ぜい性をもつメールサーバからの通信を遮断する。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "PCなどに内蔵されるセキュリティチップ (TPM：Trusted Platform Module)がもつ機能はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "TPM間での共通鍵の交換", correct: false}
      , {description: "鍵ペアの生成", correct: true}
      , {description: "ディジタル証明書の発行", correct: false}
      , {description: "ネットワーク経由の乱数送信", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "ファイアウォールにおけるダイナミックパケットフィルタリングの特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPアドレスの変換が行われるので，ファイアウォール内部のネットワーク構成を外部から隠蔽できる。", correct: false}
      , {description: "暗号化されたパケットのデータ部を復号して，許可された通信かどうかを判断できる。", correct: false}
      , {description: "パケットのデータ部をチェックして，アプリケーション層での不正なアクセスを防止できる。", correct: false}
      , {description: "戻りのパケットに関しては，過去に通過したリクエストパケットに対応付けられるものだけを通過させることができる。", correct: true}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "ポリモーフィック型ウイルスの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インターネットを介して，攻撃者が PCを遠隔操作する。", correct: false}
      , {description: "感染するごとにウイルスのコードを異なる鍵で暗号化し，ウイルス自身を変化させて同一のパターンで検知されないようにする。", correct: true}
      , {description: "複数のOSで利用できるプログラム言話でウイルスを作成することによって，複数のOS上でウイルスが動作する。", correct: false}
      , {description: "ルートキットを利用してウイルスに感染していないように見せかけることによって，ウイルスを隠蔽する。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "ICMP Flood攻撃に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "HTTP GETコマンドを繰返し送ることによって，攻撃対象のサーバにコンテンツ送信の負荷を掛ける。", correct: false}
      , {description: "pingコマンドを用いて大量の要求パケットを発信することによって，攻撃対象のサーバに至るまでの回線を過負荷にしてアクセスを妨害する。", correct: true}
      , {description: "コネクション開始要求に当たるSYNパケットを大量に送ることによって，攻撃対象のサーバに，接続要求ごとに応答を返すための過大な負荷を掛ける。", correct: false}
      , {description: "大量のTCPコネクションを確立することによって，攻撃対象のサーバに接続を維持させ続けてリソースを枯渇させる。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "自ネットワークのホストへの侵入を，ファイアウォールにおいて防止する対策のうち， IPスプーフィング（spoofing）攻撃の対策について述べたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部から入るTCPコネクション確立要求パケットのうち，外部へのインターネットサービスの提供に必要なもの以外を破棄する。", correct: false}
      , {description: "外部から入るUDPパケットのうち，外部へのインターネットサービスの提供や利用したいインターネットサービスに必要なもの以外を破棄する。", correct: false}
      , {description: "外部から入るパケットの宛先IPアドレスが，インターネットとの直接の通信をすべきでない自ネットワークのホストのものであれば，そのパケットを破棄する。", correct: false}
      , {description: "外部から入るパケットの送信元IPアドレスが自ネットワークのものであれば，そのパケットを破棄する。", correct: true}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "WebサーバがHTTPS通信の応答でcookieにSecure属性を設定したときのブラウザの処理はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ブラウザは，cookieの”Secure=”に続いて指定された時間を参照し，指定された時間を過ぎている場合にそのcookieを削除する。", correct: false}
      , {description: "ブラウザは，cookieの“Secure=”に続いて指定されたホスト名を参照し，指定されたホストにそのcookieを送信する。", correct: false}
      , {description: "ブラウザは，cookieの“Secure”を参照し，HTTPS通信時だけそのcookieを送信する。", correct: true}
      , {description: "ブラウザは，cookieの“Secure”を参照し，ブラウザの終了時にその cookieを削除する。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "テンペスト（TEMPEST）攻撃を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "故意に暗号化演算を誤動作させて正しい処理結果との差異を解析する。", correct: false}
      , {description: "処理時間の差異を計測し解析する。", correct: false}
      , {description: "処理中に機器から放射される電磁波を観測し解析する。", correct: true}
      , {description: "チップ内の信号線などに探針を直接当て，処理中のデータを観測し解析する。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "脆弱性検査で，対象ホストに対してポートスキャンを行った。対象ポートの状態を判定する方法のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "対象ポートにSYNパケットを送信し，対象ホストから”RST/ACK”パケットを受信するとき，対象ポートが開いていると判定する。", correct: false}
      , {description: "対象ポートにSYNパケットを送信し，対象ホストから”SYN/ACK”パケットを受信するとき，対象ポートが閉じていると判定する。", correct: false}
      , {description: "対象ポートにUDPパケットを送信し，対象ホストからメッセージ“port unreachable”を受信するとき，対象ポートが閉じていると判定する。", correct: true}
      , {description: "対象ポートにUDPパケットを送信し，対象ホストからメッセージ“port unreachable”を受信するとき，対象ポートが開いていると判定する。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "無線LANのセキュリティ対策に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "EAPは，クライアントPCとアクセスポイントとの問で，あらかじめ登録した共通鍵による暗号化通信を実現できる。", correct: false}
      , {description: "RADIUSでは，クライアントPCとアクセスポイントとの問で公開鍵暗号方式による暗号化通信を実現できる。", correct: false}
      , {description: "SSIDは，クライアント PCごとの秘密鍵を定めたものであり，公開鍵暗号方式による暗号化通信を実現できる。", correct: false}
      , {description: "WPA2では，IEEE 802.1Xの規格に沿った利用者認証及び動的に更新される暗号化鍵を用いた暗号化通信を実現できる。", correct: true}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "JVN（Japan Vulnerability Notes）などの脆弱性対策ポータルサイトで採用されているCWE（Common Weakness Enumeration）はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "基本評価基準，現状評価基準，環境評価基準の三つの基準でIT製品の脆弱性を評価する手法", correct: false}
      , {description: "製品を識別するためのプラットフォーム名の一覧", correct: false}
      , {description: "セキュリティに関連する設定項目を識別するための識別子", correct: false}
      , {description: "ソフトウェアの脆弱性の種類の一覧", correct: true}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "Webアプリケーションの監弱性を悪用する攻撃手法のうち，Perlのsystem関数やPHPのexec関数など外部プログラムの呼出しを可能にするための関数を利用し，不正にシェルスクリプトや実行形式のファイルを実行させるものは，どれに分類されるか。"
    , multiple_answer: false
    , answers: [
      {description: "HTTPヘッダインジエクション", correct: false}
      , {description: "OSコマンドインジェクション", correct: true}
      , {description: "クロスサイトリクエストフォージェリ", correct: false}
      , {description: "セッションハイジヤック", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "WAF (Web Application Firewall）のブラックリスト又はホワイトリストの説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ブラックリストは，脆弱性があるサイトの IPアドレスを登録したものであり，該当する通信を遮断する。", correct: false}
      , {description: "ブラックリストは，問題がある通信データパターンを定義したものであり，該当する通信を遮断するか又は無害化する。", correct: true}
      , {description: "ホワイトリストは，暗号化された受信データをどのように復号するかを定義したものであり，復号鍵が登録されていないデータを遮断する。", correct: false}
      , {description: "ホワイトリストは，脆弱性がないサイトのFQDNを登録したものであり，登録がないサイトへの通信を遮断する。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "SSLに対するパージョンロールバック攻撃の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SSLの実装の脆ぜい弱性を用いて，通信経路に介在する攻撃者が，弱い暗号化通信方式を強制することによって，暗号化通信の内容を解読して情報を得る。", correct: true}
      , {description: "SSLのハンドシェイクプロトコルの終了前で，使用暗号化アルゴリズムの変更メッセージを，通信経路に介在する攻撃者が削除することによって，通信者が暗号化なしでセッションを開始し，攻撃者がセッションの全通信を盗聴したり改ざんしたりする。", correct: false}
      , {description: "SSLを実装した環境において，攻撃者が物理デバイスから得られた消費電流の情報などを利用して秘密情報を得る。", correct: false}
      , {description: "保守作業のミスや誤操作のときに回復できるようにバックアップしたSSLの旧バージョンのライブラリを，攻撃者が外部から破壊する。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "10Mビット/秒のLANで接続された4台のノード（A，B，C，D）のうち，2組（AとB，CとD）のノード問でそれぞれ次のファイル転送を行った場合，LANの利用率はおよそ何%か。ここで，転送時にはファイルの大きさの30%に当たる各種制御情報が付加されるものとする。また，LANではリピータハプが使用されており，更に衝突は考えないものとする。<br>ファイルの大きさ：平均 1,000バイト<br>ファイルの転送頻度：平均60回/秒（1組当たり）"
    , multiple_answer: false
    , answers: [
      {description: "2", correct: false}
      , {description: "6", correct: false}
      , {description: "10", correct: false}
      , {description: "12", correct: true}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "VoIPにおいて，ユーザエージエント聞のセッションの確立，変更，切断を行うプロトコルはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "RTCP", correct: false}
      , {description: "RIP", correct: false}
      , {description: "SDP", correct: false}
      , {description: "SIP", correct: true}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "インターネットVPNを実現するために用いられる技術であり，ESP（Encapsulating Security Payload）やAH（Authentication Header）などのプロトコルを含むものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "lPsec", correct: true}
      , {description: "MPLS", correct: false}
      , {description: "PPP", correct: false}
      , {description: "SSL", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "関係モデルにおける外部キーに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部キーの値は，その関係の中で一意でなければならない。", correct: false}
      , {description: "外部キーは，それが参照する候補キーと比較可能でなくてもよい。", correct: false}
      , {description: "参照先の関係に，参照元の外部キーの値と一致する候補キーが存在しなくてもよい。", correct: false}
      , {description: "一つの関係に外部キーが複数存在してもよい。", correct: true}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "UML2.0において，オブジェクト間の相互作用を時間の経過に注目して記述するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "アクティビティ図", correct: false}
      , {description: "コミュニケーション図", correct: false}
      , {description: "シーケンス図", correct: true}
      , {description: "ユースケース図", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "SOA（Service Oriented Architecture）の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Webサービスを利用するためのインタフェースやプロトコルを規定したものである。", correct: false}
      , {description: "XMLを利用して，インターネット上に存在するWebサービスを検索できる仕組みである。", correct: false}
      , {description: "業務機能を提供するサービスを組み合わせることによって，システムを構築する考え方である。", correct: true}
      , {description: "サービス提供者と委託者との問でサービスの内容，範聞及び品質に対する要求水準を明確にして，あらかじめ合意を得ておくことである。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "システムの改善に向けて提出された4案について，評価項目を設定して採点した結果を，採点結果表に示す。効果及びリスクについては5段階評価とし，それぞれの評価項目の重要度に応じて，重み付け表に示すとおりの重み付けを行った上で次の式で総合評価点を算出したとき，総合評価点が最も高い改善案はどれか。" +
    "[総合評価点の算出式]" +
    "　総合評価点＝効果の総評価点－リスクの総評価点" +
    "<p>採点結果表" +
    "<table class='table table-bordered' style='width:60%'>" +
    "<tr><td colspan=\"2\"></td><td>案1</td><td>案2</td><td>案3</td><td>案4</td></tr>" +
    "<tr><td rowspan=\"3\">効果</td><td>セキュリティ強化</td><td>3</td><td>4</td><td>5</td><td>2</td></tr>" +
    "<tr><td>システム運用品質向上</td><td>2</td><td>4</td><td>2</td><td>5</td></tr>" +
    "<tr><td>作業コスト削減</td><td>5</td><td>4</td><td>2</td><td>4</td></tr>" +
    "<tr><td rowspan=\"3\">リスク</td><td>スケジュールリスク</td><td>2</td><td>4</td><td>1</td><td>5</td></tr>" +
    "<tr><td>技術リスク</td><td>4</td><td>1</td><td>5</td><td>1</td></tr>" +
    "</table>" +
    "<p>重み付け表" +
    "<table class='table table-bordered' style='width:60%'>" +
    "<tr><td colspan=\"2\">評価項目</td><td>重み</td></tr>" +
    "<tr><td rowspan=\"3\">効果</td><td>セキュリティ強化</td><td>4</td></tr>" +
    "<tr><td>システム運用品質向上</td><td>2</td></tr>" +
    "<tr><td>作業コスト削減</td><td>3</td></tr>" +
    "<tr><td rowspan=\"2\">リスク</td><td>スケジュールリスク</td><td>8</td></tr>" +
    "<tr><td>技術リスク</td><td>3</td></tr>" +
    "</table>"
    , multiple_answer: false
    , answers: [
      {description: "案1", correct: false}
      , {description: "案2", correct: false}
      , {description: "案3", correct: true}
      , {description: "案4", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }
  , {
    description: "システム監査報告書に記載された改善勧告に対して，被監査部門から提出された改善計画を経営者がITガバナンスの観点から評価する際の方針のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "1年以内に実現できる改善を実施する。", correct: false}
      , {description: "経営資源の状況を踏まえて改善を実施する。", correct: true}
      , {description: "情報システムの機能面の改善に絞って実施する。", correct: false}
      , {description: "被監査部門の予算の範囲内で改善を実施する。", correct: false}
    ]
    , category: 'SC-H26-SPRING'
  }

  , {
    description: "RLO（Right-to-Left Override）を利用した手口の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "”コンピュータウイルスに感染している”といった偽の警告を出して利用者を脅し，ウイルス対策ソフトの購入などを迫る。", correct: false}
      , {description: "脆弱性があるホストやシステムをあえて公開し，攻撃の内容を観察する。", correct: false}
      , {description: "ネットワーク機器の MIB情報のうち監視項目の値の変化を感知し，セキュリティに関するイベントを SNMPマネージャに通知するように動作させる。", correct: false}
      , {description: "文字の表示順を変える制御文字を利用し，ファイル名の拡張子を偽装する。", correct: true}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "XMLディジタル署名の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "XML文書中の，指定したエレメントに対して署名することができる。", correct: true}
      , {description: "エンベローピング署名（EnvelopingSignature）では一つの署名対象に必ず複数の署名を付ける。", correct: false}
      , {description: "署名形式として， CMS（Cryptographic Message Syntax）を用いる。", correct: false}
      , {description: "署名対象と署名アルゴリズムをASN.1によって記述する。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "共通鍵暗号方式で，100人の送受信者のそれぞれが，相互に暗号化通信を行うときに必要な共通鍵の総数は幾つか。"
    , multiple_answer: false
    , answers: [
      {description: "200", correct: false}
      , {description: "4,950", correct: true}
      , {description: "9,900", correct: false}
      , {description: "10,000", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "無線LANにおけるWPA2の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "AHとESPの機能によって認証と暗号化を実現する。", correct: false}
      , {description: "暗号化アルゴリズムにAESを採用したCCMP（Counter-mode with CBC-MAC Protocol）を使用する。", correct: true}
      , {description: "端末とアクセスポイントの問で通信を行う際に，SSL Handshake Protocolを使用して，お互いが正当な相手かどうかを認証する。", correct: false}
      , {description: "利用者が設定する秘密鍵と，製品で生成するIVC（Initialization Vector）とを連結した数字を基に，データをフレームごとにRC4で暗号化する。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "JVN（Japan Vulnerability Notes）などの脆弱性対策ポータルサイトで採用されているCWE（Common Weakness Enumeration）はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "コンピュータで必要なセキュリティ設定項目を識別するための識別子である。", correct: false}
      , {description: "脆弱性を利用して改ざんされたWebサイトの画面ショットを識別するための識別子である。", correct: false}
      , {description: "製品に含まれる脆弱性を識別するための識別子である。", correct: true}
      , {description: "セキュリテイ製品を識別するための識別子である。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "サイドチャネル攻撃の手法であるタイミング攻撃の対策として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "演算アルゴリズムに対策を施して，機密情報の違いによって演算の処理時間に差異が出ないようにする。", correct: true}
      , {description: "故障を検出する機構を設けて，検出したら機密情報を破壊する。", correct: false}
      , {description: "コンデンサを挿入して，電力消費量が時間的に均一になるようにする。", correct: false}
      , {description: "保護層を備えて，内部のデータが不正に書き換えられないようにする。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "テンペスト技術の説明とその対策として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ディスプレイなどから放射される電磁波を傍受し，表示内容などを盗み見る技術であり，電磁波を遮断することによって対抗する。", correct: true}
      , {description: "データ通信の途中でパケットを横取りし，内容を改ざんする技術であり，ディジタル署名を利用した改ざん検知によって対抗する。", correct: false}
      , {description: "マクロウイルスにおいて使われる技術であり，ウイルス対策ソフトを導入し，最新の定義ファイルを適用することによって対抗する。", correct: false}
      , {description: "無線 LANの信号を傍受し，通信内容を解析する技術であり，通信パケットを暗号化することによって対抗する。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "DMZ上のコンピュータがインターネットからのpingに応答しないようにファイアウォールのルールを定めるとき，”通過禁止”に設定するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ICMP", correct: true}
      , {description: "TCP及びUDPのポート番号53", correct: false}
      , {description: "TCPのポート番号21", correct: false}
      , {description: "UDPのポート番号123", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "共通鍵暗号の鍵を見つけ出す，ブルートフォース攻撃に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "1組の平文と暗号文が与えられたとき，全ての鍵候補を一つずつ試して鍵を見つけ出す。", correct: true}
      , {description: "平文と暗号文と鍵の関係を代数式に表して数学的に鍵を見つけ出す。", correct: false}
      , {description: "平文の一部分の情報と暗号文の一部分の情報との聞の統計的相関を手掛かりに鍵を見つけ出す。", correct: false}
      , {description: "平文を一定量変化させたときの暗号文の変化から鍵を見つけ出す。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "利用者PCがボッ卜に感染しているかどうかをhostsファイルで確認するとき，設定内容が改ざんされていないと判断できるものはどれか。ここで，hostsファイルには設定内容が1行だけ書かれているものとする。"
    , multiple_answer: false
    , answers: [
      {description: "127.0.0.1 a.b.com | a.b.comはOS提供元のFQDNを示す。", correct: false}
      , {description: "127.0.0.1 c.d.com | c.d.comはPC製造元のFQDNを示す。", correct: false}
      , {description: "127.0.0.1 e.f.com | e.f.comはウイルス定義ファイルの提供元のFQDNを示す。", correct: false}
      , {description: "127.0.0.1 localhost | localhostは利用者PC自身を示す。", correct: true}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "ルートキット（rootkit）を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "OSの中核であるカーネル部分の脆ぜい弱性を分析するツール", correct: false}
      , {description: "コンピュータがウイルスやワームに感染していないことをチェックするツール", correct: false}
      , {description: "コンピュータやルータのアクセス可能な通信ポートを外部から調査するツール", correct: false}
      , {description: "不正侵入してOSなどに組み込んだものを隠蔽するツール", correct: true}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "送信元を詐称した電子メールを拒否するために，SPF（Sender Policy Framework）の仕組みにおいて受信側が行うことはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Resent-Sender:，Resent-From:，Sender:，Fromなどのメールヘッダの送信者メールアドレスを基に送信メールアカウントを検証する。", correct: false}
      , {description: "SMTPが利用するポート番号25の通信を拒否する。", correct: false}
      , {description: "SMTP通信中にやり取りされるMAILFROMコマンドで与えられた送信ドメインと送信サーバのIPアドレスの適合性を検証する。", correct: true}
      , {description: "電子メールに付加されたディジタル署名を検証する。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "迷惑メールの検知手法であるベイジアンフィルタリングの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "信頼できるメール送信元を許可リストに登録しておき，許可リストにないメール送信元からの電子メールは迷惑メールと判定する。", correct: false}
      , {description: "電子メールが正規のメールサーバから送信されていることを検証し，迷惑メールであるかどうかを判定する。", correct: false}
      , {description: "電子メールの第三者中継を許可しているメールサーバを登録したデータベースに掲載されている情報を基に，迷惑メールであるかどうかを判定する。", correct: false}
      , {description: "利用者が振り分けた迷惑メールから特徴を学習し，迷惑メールであるかどうかを統計的に解析して判定する。", correct: true}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "DNSの再帰的な問合せを使ったサービス不能攻撃（DNS amp）の踏み台にされることを防止する対策はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "キャッシュサーバとコンテンツサーバに分離し，インターネット側からキャッシュサーバに問合せできないようにする。", correct: true}
      , {description: "問合せがあったドメインに関する情報をWhoisデータベースで確認する。", correct: false}
      , {description: "一つのDNSレコードに複数のサーバのIPアドレスを割り当て，サーバへのアクセスを振り分けて分散させるように設定する。", correct: false}
      , {description: "他のDNSサーバから送られてくるIPアドレスとホスト名の対応情報の信頼性をディジタル署名で確認するように設定する。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "SQLインジェクション対策について，Webアプリケーションの実装における対策とWebアプリケーションの実装以外の対策として，ともに適切なものはどれか。" +
    "Webアプリケーションの実装における対策 | Webアプリケーションの実装以外の対策"
    , multiple_answer: false
    , answers: [
      {description: "Webアプリケーション中でシェルを起動しない。 | chroot環境でWebサーバを実行する。", correct: false}
      , {description: "セッションIDを乱数で生成する。 | SSLによって通信内容を秘匿する。", correct: false}
      , {description: "バインド機構を利用する。 | データベースのアカウントのもつデータベースアクセス権限を必要最小限にする。", correct: true}
      , {description: "パス名やファイル名をパラメタとして受け取らないようにする。 | 重要なファイルを公開領域に置かない。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "ディレクトリトラバーサル攻撃はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "攻撃者が，OSの操作コマンドを利用するアプリケーションに対して，OSのディレクトリ作成コマンドを渡して実行する。", correct: false}
      , {description: "攻撃者が，SQL文のリテラル部分の生成処理に問題があるアプリケーションに対して，任意のSQL文を渡して実行する。", correct: false}
      , {description: "攻撃者が，シングルサインオンを提供するディレクトリサービスに対して，不正に入手した認証情報を用いてログインし，複数のアプリケーションを不正使用する。", correct: false}
      , {description: "攻撃者が，ファイル名の入力を伴うアプリケーションに対して，上位のディレクトリを意味する文字列を使って，非公開のファイルにアクセスする。", correct: true}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "LANの制御方式に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CSMA/CD方式では，単位時間当たりの送出フレーム数が増していくと，衝突の頻度が増すので，スループットはある値をピークとして，その後下がる。", correct: true}
      , {description: "CSMA/CD方式では，一つの装置から送出されたフレームが順番に各装置に伝送されるので，リング状のLANに適している。", correct: false}
      , {description: "TDMA方式では，伝送路上におけるフレームの伝搬遅延時間による衝突が発生する。", correct: false}
      , {description: "トークンパッシング方式では，トークンの巡回によって送信権を管理しているので，トラフィックが増大すると，CSMA/CD方式に比べて伝送効率が急激に低下する。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "コンピュータとスイッチングハブ（レイヤ 2スイッチ）の間，又は2台のスイッチングハブの聞を接続する複数の物理回線を論理的に1本の回線に束ねる技術はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "スパニングツリー", correct: false}
      , {description: "ブリッジ", correct: false}
      , {description: "マルチホーミング", correct: false}
      , {description: "リンクアグリゲーション", correct: true}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "電子メールシステムにおいて，利用者端末がサーバから電子メールを受信するために使用するプロトコルであり，選択した電子メールだけを利用者端末へ転送する機能，サーバ上の電子メールを検索する機能，電子メールのヘッダだけを取り出す機能などをもつものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "lMAP4", correct: true}
      , {description: "MIME", correct: false}
      , {description: "POP3", correct: false}
      , {description: "SMTP", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "TCPのサプミッションポート（ポート番号587）の説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "FTPサービスで，制御用コネクションのポート番号21とは別にデータ転送用に使用する。", correct: false}
      , {description: "Webアプリケーションで，ポート80番のHTTP要求とは別に，サブミットボタンをクリックした際の入力フォームのデータ送信に使用する。", correct: false}
      , {description: "コマンド操作の遠隔ログインで，通信内容を暗号化するためにTELNETのポート番号23の代わりに使用する。", correct: false}
      , {description: "電子メールサービスで，迷惑メール対策としてSMTPのポート番号25の代わりに使用する。", correct: true}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "分散データベースシステムにおける”分割に対する透過性”を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "データの格納サイトが変更されても，利用者のアプリケーションや操作法に影響がないこと", correct: false}
      , {description: "同ーのデータが複数のサイトに格納されていても，利用者はそれを意識せずに利用できること", correct: false}
      , {description: "一つの表が複数のサイトに分割されて格納されていても，利用者はそれを意識せずに利用できること", correct: true}
      , {description: "利用者がデータベースの位置を意識せずに利用できること", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "安全性と信頼性について，次の方針でプログラム設計を行う場合，その方針を表す用語はどれか。<br>" +
    "”不特定多数の人が使用するプログラムには，自分だけが使用するプログラムに比べて，より多くのデータチェックの機能を組み込む。プログラムが処理できるデータの前提条件を文書に書いておくだけでなく，その前提条件を満たしていないデータが実際に入力されたときは，エラーメッセージを表示して再入力を促すようにプログラムを作る。"
    , multiple_answer: false
    , answers: [
      {description: "フールプルーフ", correct: true}
      , {description: "フェールセーフ", correct: false}
      , {description: "フェールソフト", correct: false}
      , {description: "フォールトトレラント", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "表は，システムへの要求の明確さに応じた開発方針と，開発方針に適した開発モデルの組である。a～cに該当する開発モデルの組合せはどれか。" +
    "<table class=\"table\">" +
    "<tr><td>要求の明確さ</td><td>開発方針</td><td>開発モデル</td></tr>" +
    "<tr><td>要求が明確になっている。</td><td>全機能を一斉に開発する。</td><td>a</td></tr>" +
    "<tr><td>要求に不明確な部分がある。</td><td>簡易なシステムを実装し、動作を評価しながら要求を早期に明確にする。その後は全機能を一斉に開発する。</td><td>b</td></tr>" +
    "<tr><td>要求に変更される可能性が高い部分がある。</td><td>最初に要求が確定した部分だけを開発する。その後に要求が確定した部分を逐次追加していく。</td><td>c</td></tr>" +
    "</table>"
    , multiple_answer: false
    , answers: [
      {description: "a=ウォータフォールモデル，b=進化的モデル，c=プロトタイピングモデル", correct: false}
      , {description: "a=ウォータフォールモデル，b=プロトタイピングモデル，c=進化的モデル", correct: true}
      , {description: "a=進化的モデル，b=ウォータフォールモデル，c=プロトタイピングモデル", correct: false}
      , {description: "a=プロトタイピングモデル，b=ウォータフォールモデル，c=進化的モデル", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントの問題管理プロセスにおけるプロアクティプな活動はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデントの根本原因を究明する。", correct: false}
      , {description: "過去に同様のインシデントが発生していないか調査する。", correct: false}
      , {description: "過去のインシデントの記録を分析し，今後起こりそうなインシデントを予測する。", correct: true}
      , {description: "根本原因を突き止めた問題を既知のエラーとして登録する。", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "被監査企業がSaaSをサービス利用契約して業務を実施している場合，被監査企業のシステム監査人がSaaSの利用者環境からSaaSへのアクセスコントロールを評価できる対象のIDはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DBMSの管理者ID", correct: false}
      , {description: "アプリケーションの利用者ID", correct: true}
      , {description: "サーバのOSの利用者ID", correct: false}
      , {description: "ストレージデバイスの管理者ID", correct: false}
    ]
    , category: 'SC-H25-AUTUMN'
  }
  , {
    description: "APT（Advanced Persistent Threats）の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "攻撃者はDoS攻撃及びDDoS攻撃を繰り返し組み合わせて，長期間にわたって特定組織の業務を妨害する。", correct: false}
      , {description: "攻撃者は興味本位で場当たり的に，公開されている攻撃ツールや脆弱性検査ツールを悪用した攻撃を繰り返す。", correct: false}
      , {description: "攻撃者は特定の目的をもち，特定組織を標的に複数の手法を組み合わせて気付かれないよう執拗に攻撃を繰り返す。", correct: true}
      , {description: "攻撃者は不特定多数への感染を目的として，複数の攻撃方法を組み合わせたマルウェアを継続的にばらまく。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "DNSSEC（DNS Security Extensions）の機能はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DNSキャッシュサーバの設定によって再帰的な問合せの受付範囲が最大になるようにする。", correct: false}
      , {description: "DNSサーバから受け取るリソースレコードに対するディジタル署名を利用して，リソースレコードの送信者の正当性とデータの完全性を検証する。", correct: true}
      , {description: "ISPなどのセカンダリDNSサーバを利用してDNSコンテンツサーバを二重化することで名前解決の可用性を高める。", correct: false}
      , {description: "共通鍵暗号技術とハッシュ関数を利用したセキュアな方法で，DNS更新要求が許可されているエンドポイントを特定し認証する。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "PKIを構成する OCSP（Online Certificate Status Protocol）を利用する目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "誤って破棄してしまった秘密鍵の再発行処理の進捗状況を問い合わせる。", correct: false}
      , {description: "ディジタル証明書から生成した鍵情報の交換がOCSPクライアントとレスポンダの間で失敗した際，認証状態を確認する。", correct: false}
      , {description: "ディジタル証明書の失効情報を問い合わせる。", correct: true}
      , {description: "有効期限の切れたディジタル証明書の更新処理の進捗状況を確認する。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "図のような構成と通信サービスのシステムにおいて，Webアプリケーションの脆弱性対策としてネットワークのパケットをキャブチャしてWAFによる検査を行うとき，WAFの設置場所として最も適切な箇所はどこか。ここで，WAFには通信を暗号化したり，復号したりする機能はないものとする。" +
    "<p>PC <-> インターネット <-(a)HTTPS-> ファイアウォール <-(b)HTTPS-> SSLアクセラレータ <-(c)HTTP-> Webサーバ <-(d)データベースアクセス用サービス-> データベースサーバ</p>"
    , multiple_answer: false
    , answers: [
      {description: "a", correct: false}
      , {description: "b", correct: false}
      , {description: "c", correct: true}
      , {description: "d", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "サイドチャネル攻撃の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "暗号アルゴリズムを実装した攻撃対象の物理デバイスから得られる物理量（処理時間や消費電流など）やエラーメッセージから，攻撃対象の機密情報を得る。", correct: true}
      , {description: "企業などの機密情報を詐取するソーシャルエンジニアリングの手法の一つであり，オフィスの紙ゴミの中から不用意に捨てられた機密情報の印刷物を探し出す。", correct: false}
      , {description: "通信を行う二者の聞に割り込んで，両者が交換する情報を自分のものとすり替えることによって，気付かれることなく盗聴する。", correct: false}
      , {description: "データベースを利用するWebサイトに入力パラメタとしてSQL文の断片を与えることによって，データベースを改ざんする。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "SMTP-AUTHにおける認証の動作を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SMTPサーバに電子メールを送信する前に，電子メールを受信し，その際にパスワード認証が行われたクライアントのIPアドレスは，一定時間だけ電子メールの送信が許可される。", correct: false}
      , {description: "クライアントがSMTPサーバにアクセスしたときに利用者認証を行い，許可された利用者だけから電子メールを受け付ける。", correct: true}
      , {description: "サーバは認証局のディジタル証明書をもち，クライアントから送信された認証局の署名付きクライアント証明書の妥当性を確認する。", correct: false}
      , {description: "利用者が電子メールを受信する際の認証情報を秘匿できるように，パスワードからハッシュ値を計算して，その値で利用者認証を行う。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "無線LAN環境に複数台のPC，複数のアクセスポイント及び利用者認証情報を管理する1台のサーバがある。利用者認証とアクセス制御にIEEE802.1XとRADIUSを利用する場合の実装方法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "PCにはIEEE802.1Xのサプリカントを実装し，RADIUSクライアントの機能をもたせる。", correct: false}
      , {description: "アクセスポイントにはIEEE802.1Xのオーセンティケータを実装し，RADIUSクライアントの機能をもたせる。", correct: true}
      , {description: "アクセスポイン卜にはIEEE802.1Xのサプリカントを実装し，RADIUSサーバの機能をもたせる。", correct: false}
      , {description: "サーバにはIEEE802.1Xのオーセンテイケータを実装し，RADIUSサーバの機能をもたせる。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "CSIRTの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPアドレスの割当て方針の決定，DNSルートサーバの運用監視，DNS管理に関する調整などを世界規模で行う組織である。", correct: false}
      , {description: "インターネットに関する技術文書を作成し，標準化のための検討を行う組織である。", correct: false}
      , {description: "国レベルや企業・組織内に設置され，コンピュータセキュリティインシデントに関する報告を受け取り，調査し，対応活動を行う組織の総称である。", correct: true}
      , {description: "情報技術を利用し，信教や政治的な目標を達成するという目的をもった人や組織の総称である。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "NISTの定義によるクラウドコンピューティングのサービスモデルにおいて，パブリッククラウドサービスの利用企業のシステム管理者が，仮想サーバのゲストOSに係る設定作業及びセキュリティパッチ管理作業を実施可かどうかの組合せのうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IaaS=実施可，PaaS=実施可，SaaS=実施不可", correct: false}
      , {description: "IaaS=実施可，PaaS=実施不可，SaaS=実施不可", correct: true}
      , {description: "IaaS=実施不可，PaaS=実施可，SaaS=実施不可", correct: false}
      , {description: "IaaS=実施不可，PaaS=実施不可，SaaS=実施可", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "基本評価基準，現状評価基準，環境評価基準の三つの基準でIT製品のセキュリテイ脆弱ぜい性の深刻さを評価するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CVSS", correct: true}
      , {description: "ISMS", correct: false}
      , {description: "PCIDSS", correct: false}
      , {description: "PMS", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "CRYPTRECの活動内容はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "客観的な評価によって安全性及び実装性に優れると判断された暗号技術のリストを決定する。", correct: true}
      , {description: "情報セキュリティ政策に係る基本戦略の立案，官民における統一的，横断的な情報セキュリテイ対策の推進に係る企画などを行う。", correct: false}
      , {description: "組織の情報セキュリティマネジメントシステムについて評価し認証する制度を運用する。", correct: false}
      , {description: "認証機関から貸与された暗号モジュール試験報告書作成支援ツールを用いて暗号モジュールの安全性についての評価試験を行う。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "企業のDMZ上で1台のDNSサーバをインターネット公開用と社内用で共用している。このDNSサーバが，DNSキャッシュポイズニングの被害を受けた結果，直接引き起こされ得る現象はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DNSサーバのハードディスク上のファイルに定義されたDNSサーバ名が書き換わり，外部からの参照者が，DNSサーバに接続できなくなる。", correct: false}
      , {description: "DNSサーバのメモリ上にワームが常駐し，DNS参照元に対して不正プログラムを送り込む。", correct: false}
      , {description: "社内の利用者が，インターネット上の特定のWebサーバを参照しようとすると，本来とは異なるWebサーバに誘導される。", correct: true}
      , {description: "社内の利用者間で送信された電子メールの宛先アドレスが書き換えられ，正常な送受信ができなくなる。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "ウイルスの検出手法であるビヘイビア法を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "あらかじめ特徴的なコードをパターンとして登録したウイルス定義ファイルを用いてウイルス検査対象と比較し，同じパターンがあれば感染を検出する。", correct: false}
      , {description: "ウイルスに感染していないことを保証する情報をあらかじめ検査対象に付加しておき，検査時に不整合があれば感染を検出する。", correct: false}
      , {description: "ウイルスの感染が疑わしい検査対象を，安全な場所に保管されている原本と比較し，異なっていれば感染を検出する。", correct: false}
      , {description: "ウイルスの感染や発病によって生じるデータ書込み動作の異常や通信量の異常増加などの変化を監視して，感染を検出する。", correct: true}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "DoS攻撃の一つである Smurf攻撃の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ICMPの応答パケットを大量に発生させる。", correct: true}
      , {description: "TCP接続要求であるSYNパケットを大量に送信する。", correct: false}
      , {description: "サイズが大きいUDPパケットを大量に送信する。", correct: false}
      , {description: "サイズが大きい電子メールや大量の電子メールを送信する。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "ダウンローダ型ウイルスが内部ネットワークのPCに感染した場合に，インターネット経由で他のウイルスがダウンロードされることを防ぐ対策として，最も有効なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "URLフィルタを用いてインターネット上の不正Webサイトへの接続を遮断する。", correct: true}
      , {description: "インターネットから内部ネットワークに向けた要求パケットによる不正侵入行為をIPSで破棄する。", correct: false}
      , {description: "スパムメール対策サーバでインターネットからのスパムメールを拒否する。", correct: false}
      , {description: "メールフィルタで他サイトへの不正メール発信を遮断する。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "スパムメールの対策であるDKIM（DomainKeys Identified Mail）の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "送信側メールサーバでディジタル署名を電子メールのヘッダに付加して，受信側メールサーバで検証する。", correct: true}
      , {description: "送信側メールサーバで利用者が認証されたとき，電子メールの送信が許可される。", correct: false}
      , {description: "電子メールのヘッダや配送経路の情報から得られる送信元情報を用いて，メール送信元の IPアドレスを検証する。", correct: false}
      , {description: "ネットワーク機器で，内部ネットワークから外部のメールサーバのTCPポート番号25への直接の通信を禁止する。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "IEEE 802.11aやIEEE802.11bで採用されているアクセス制御方式はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CSMA/CA", correct: true}
      , {description: "CSMA/CD", correct: false}
      , {description: "LAPB", correct: false}
      , {description: "トークンパッシング方式", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "IPv6グローバルユニキャストアドレスはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "::1", correct: false}
      , {description: "2001:dc3:35", correct: true}
      , {description: "fd00::12:fff:fea9:18", correct: false}
      , {description: "fe80::f:acff:fea9:18", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "TCPのフロー制御に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "OSI基本参照モデルのネットワーク層の機能である。", correct: false}
      , {description: "ウインドウ制御の単位は，バイトではなくビットである。", correct: false}
      , {description: "確認応答がない場合は再送処理によってデータ回復を行う。", correct: true}
      , {description: "データの順序番号をもたないので，データは受信した順番のままで処理する。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "電子メールが配送される途中に経由したMTAのIPアドレスや時刻などの経由情報を，MTAが付加するヘッダフィールドはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Accept", correct: false}
      , {description: "Received", correct: true}
      , {description: "Return-Path", correct: false}
      , {description: "Via", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "関係データベースのビューを利用する目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DISTINCT指定，GROUP BY句及びHAVING句をもつ演算処理を独立させて，プログラムに単純化したデータ更新手段を提供する。", correct: false}
      , {description: "行や列を特定の条件で絞り込んだビューだけをアクセスさせることによって，基となる表のデータの一部を隠蔽して保護する手段を提供する。", correct: true}
      , {description: "データベースの物理的記憶構造の変更に影響されないように，アプリケーションプログラムに対して物理的データ独立性を提供する。", correct: false}
      , {description: "複数の表を結合したビューにインデックスを付与することによって，複数の表にまたがった高度な検索手段を提供する。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "既存システムを基に，新システムのモデル化を行う場合のDFD作成の手順として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "現物理モデル→現論理モデル→新物理モデル→新論理モデル", correct: false}
      , {description: "現物理モデル→現論理モデル→新論理モデル→新物理モデル", correct: true}
      , {description: "現論理モデル→現物理モデル→新物理モデル→新論理モデル", correct: false}
      , {description: "現論理モデル→現物理モデル→新論理モデル→新物理モデル", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "SOA（Service Oriented Architecture）でサービスを設計する際の注意点のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "可用性を高めるために，ステートフルなインタフェースとする。", correct: false}
      , {description: "業務からの独立性を確保するために，サービスの命名は役割を表すものとする。", correct: false}
      , {description: "業務の変化に対応しやすくするために，サービス問の関係は疎結合にする。", correct: true}
      , {description: "セキュリティを高めるために，一度開発したサービスは再利用しない方がよい。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "情報システムの設計のうち，フェールソフトの例はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "UPSを設置することによって，停電時に手順どおりにシステムを停止できるようにし，データを保全する。", correct: false}
      , {description: "制御プログラムの障害時に，システムの暴走を避け，安全に運転を停止できるようにする。", correct: false}
      , {description: "ハードウェアの障害時に，パフォーマンスは低下するが，構成を縮小して運転を続けられるようにする。", correct: true}
      , {description: "利用者の誤操作や誤入力を未然に防ぐことによって，システムの誤動作を防止できるようにする。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "新システムへの移行に関するシステム監査で確認した状況のうち，指摘事項に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "移行作業と併せて，システム運用部門及びシステム利用部門に対する新システムの操作教育を計画し，実施していた。", correct: false}
      , {description: "移行対象，移行方法，移行実施体制及び移行スケジュールを明記した移行計画に従って，移行作業を行っていた。", correct: false}
      , {description: "移行ツールを利用して，データベースの移行及びその移行結果の検証を行っていた。", correct: false}
      , {description: "システム開発部門内に検証体制を作って移行結果の検証を行い，移行完了としていた。", correct: true}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "特定のCAが発行したCRL（Certified Revocation List）に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CRLには，失効された公開鍵証明書に対応する秘密鍵が登録される。", correct: false}
      , {description: "CRLには，有効期限内の公開鍵証明書のうち破棄されている公開鍵証明書と破棄された日時の対応が提示される。", correct: true}
      , {description: "CRLは，鍵の漏えい，破棄申請の状況をリアルタイムに反映するプロトコルである。", correct: false}
      , {description: "有効期限切れで無効になった公開鍵証明書は，所有者が新たな公開鍵証明書を取得するまでの問，CRLに登録される。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "IEEE 802.1Xで使われるEAP-TLSによって実現される認証はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CHAPを用いたチャレンジレスポンスによる利用者認証", correct: false}
      , {description: "あらかじめ登録した共通鍵によるサーバ認証と，時刻同期のワンタイムパスワードによる利用者認証", correct: false}
      , {description: "ディジタル証明書による認証サーバとクライアントの相互認証", correct: true}
      , {description: "利用者IDとパスワードによる利用者認証", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "SEO（Search Engine Optimization）ポイズニングの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Web検索サイトの順位付けアルゴリズムを悪用して，キーワードで検索した結果の上位に，悪意のあるサイトを意図的に表示させる。", correct: true}
      , {description: "ウイルス検索エンジンのセキュリティ上の監弱性を悪用して，システム権限で不正な処理を実行させる。", correct: false}
      , {description: "車などで移動しながら，無線LANのアクセスポイントを探し出して，ネットワークに不正侵入する。", correct: false}
      , {description: "ネットワークを流れるパケットから，不正侵入のパターンに合致するものを検出して，管理者への通知や，検出した内容の記録を行う。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "2011年に経済産業省が公表した”クラウドサービス利用のための情報セキュリティマネジメントガイドライン”が策定された目的について述べたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "JIS Q 27002の管理策を拡張し，クラウドサービス利用者が情報セキュリティ対策を円滑に行えるようにする。", correct: true}
      , {description: "クラウドサービス提供事業者に対して情報セキュリティ監査を実施する方法を利用者に提示する。", correct: false}
      , {description: "クラウドサービスの利用がもたらすセキュリテイリスクをサービス提供事業者の視点で提示する。", correct: false}
      , {description: "セキュリティリスクの懸念の少ないクラウドサービス提供事業者を利用者が選択できるような格付け基準を提供する。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "スパムメールの対策として，宛先ポート番号25番の通信に対してISPが実施するOP25Bの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ISP管理外のネットワークからの通信のうち，スパムメールのシグネチャに該当するものを遮断する。", correct: false}
      , {description: "動的IPアドレスを割り当てたネットワークからISP管理外のネットワークへの直援の通信を遮断する。", correct: true}
      , {description: "メール送信元のメールサーバについてDNSの逆引きができない場合，そのメールサーバからの通信を遮断する。", correct: false}
      , {description: "メール不正中継の髄弱性をもつメールサーバからの通信を遮断する。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "ファイアウォールにおけるダイナミックパケットフィルタリングの特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPアドレスの変換が行われるので，ファイアウオール内部のネットワーク構成を外部から隠蔽できる。", correct: false}
      , {description: "暗号化されたパケットのデータ部を復号して，許可された通信かどうかを判断できる。", correct: false}
      , {description: "戻りのパケットに関しては，過去に通過したリクエストパケットに対応したものだけを通過させることができる。", correct: true}
      , {description: "パケットのデータ部をチェックして，アプリケーション層での不正なアクセスを防止できる。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "ポリモーフィック型ウイルスの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インターネットを介して，攻撃者がPCを遠隔操作する。", correct: false}
      , {description: "感染するごとに鍵を変えてウイルスのコードを暗号化することによってウイルス自身を変化させて，同一のパターンで検知されないようにする。", correct: true}
      , {description: "複数のOSで利用できるプログラム言語でウイルスを作成することによって，複数のOS上でウイルスが動作する。", correct: false}
      , {description: "ルートキットを利用してウイルスに感染していないように見せかけることによって，ウイルスを隠蔽する。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "FIPS 140-2を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "暗号モジュールのセキュリティ要求事項", correct: true}
      , {description: "情報セキュリティマネジメントシステムに関する認証基準", correct: false}
      , {description: "ディジタル証明暫や証明書失効リストの標準仕様", correct: false}
      , {description: "無線LANセキュリティ技術", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "特定の情報資産の漏えいに関するリスク対応のうち，リスク回避に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部の者が侵入できないように，入退室をより厳重に管理する。", correct: false}
      , {description: "情報資産を外部のデータセンタに預託する。", correct: false}
      , {description: "情報の新たな収集を禁止し，収集済みの情報を消去する。", correct: true}
      , {description: "情報の重要性と対策費用を勘案し，あえて対策をとらない。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "ICMP Flood攻撃に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "pingコマンドを用いて同時に発信した大量の要求パケットによって，攻撃対象のサーバに至るまでの回線を過負荷にしてアクセスを妨害する。", correct: true}
      , {description: "繰り返しHTTP GETコマンドを送ることによって，攻撃対象のサーバにコンテンツ送信の負荷を掛ける。", correct: false}
      , {description: "コネクション開始要求に当たるSYNパケットを大量に送ることによって，攻撃対象のサーバに，接続要求ごとに応答を返すための過大な負荷を掛ける。", correct: false}
      , {description: "大量のTCPコネクションを確立することによって，攻撃対象のサーバに接続を維持させ続けリソースを枯渇させる。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "標準化団体OASISが，Webサイト間で認証，属性及び認可の情報を安全に交換するために策定したフレームワークはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SAML", correct: true}
      , {description: "SOAP", correct: false}
      , {description: "XKMS", correct: false}
      , {description: "XML Signature", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "ディジタルフォレンジックスを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "画像や音楽などのディジタルコンテンツに著作権者などの情報を埋め込む。", correct: false}
      , {description: "コンピュータやネットワークのセキュリティ上の弱点を発見するテスト手法のーつであり，システムを実際に攻撃して侵入を試みる。", correct: false}
      , {description: "ネットワークの管理者や利用者などから，巧みな話術や盗み聞き，盗み見などの手段によって，パスワードなどのセキュリティ上重要な情報を入手する。", correct: false}
      , {description: "犯罪に対する証拠となり得るデータを保全し，その後の訴訟などに備える。", correct: true}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "ゼロデイ攻撃の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "セキュリティパッチが提供される前にパッチが対象とする脆弱性を攻撃する。", correct: true}
      , {description: "特定のサイトに対し，日時を決めて，複数台のPCから同時に攻撃する。", correct: false}
      , {description: "特定のターゲットに対し，フィッシングメールを送信して不正サイトへ誘導する。", correct: false}
      , {description: "不正中継が可能なメールサーバを見つけた後，それを踏み台にチェーンメールを大量に送信する。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "SSLに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SSLで使用するWebサーバのディジタル証明書にはIPアドレスの組込みが必須なので，WebサーバのIPアドレスを変更する場合は，ディジタル証明書を再度取得する必要がある。", correct: false}
      , {description: "SSLで使用する個人認証用のディジタル証明書は，ICカードなどに格納できるので，格納場所を特定のPCに限定する必要はない。", correct: true}
      , {description: "SSLはWebサーバを経由した特定の利用者間の通信のために開発されたプロトコルであり，Webサーバ提供者への事前の利用者登録が不可欠である。", correct: false}
      , {description: "日本国内では，SSLで使用する共通鍵の長さは，128ピット未満に制限されている。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "WAF（Web Application Firewall）のブラックリスト又はホワイトリストの説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ブラックリストは，髄弱性があるサイトのIPアドレスを登録したものであり，該当する通信を遮断する。", correct: false}
      , {description: "ブラックリストは，問題がある通信データパターンを定義したものであり，該当する通信を遮断するか又は無害化する。", correct: true}
      , {description: "ホワイトリストは，暗号化された受信データをどのように復号するかを定義したものであり，復号鍵が登録されていないデータを遮断する。", correct: false}
      , {description: "ホワイトリストは，脆弱性がないサイトのFQDNを登録したものであり，登録がないサイトへの通信を遮断する。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "SSLに対するバージョンロールバック攻撃の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SSLの実装の脆弱ぜい性を用いて，通信経路に介在する攻撃者が弱い暗号化通信方式を強制することによって，暗号化通信の内容を解読して情報を得る。", correct: true}
      , {description: "SSLのハンドシェイクプロトコルの終了前で，使用暗号化アルゴリズムの変更メッセージを，通信経路に介在する攻撃者が削除することによって，通信者が暗号化なしでセッションを開始し，攻撃者がセッションの全通信を盗聴したり改ざんしたりする。", correct: false}
      , {description: "SSLを実装した環境において，攻撃者が物理デバイスから得られた消費電流の情報などを利用して秘密情報を得る。", correct: false}
      , {description: "保守作業のミスや誤操作のときに回復できるようにバックアップしたSSLの旧バージョンのライブラリを，攻撃者が外部から破壊する。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "ネットワークを構成する装置の用途や機能に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ゲートウェイは，主にトランスポート層以上での中継を行う装置であり，異なったプロトコル体系のネットワーク問の接続などに用いられる。", correct: true}
      , {description: "ブリッジは，物理層での中継を行う装置であり，フレームのフィルタリング機能をもつ。", correct: false}
      , {description: "リピータは，ネットワーク層での中継を行う装置であり，伝送途中で減衰した信号レベルの補正と再生増幅を行う。", correct: false}
      , {description: "ルータは，データリンク層のプロトコルに基づいてフレームの中継と交換を行う装置であり，フロー制御や最適経路選択などの機能をもつ。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "DNSSECに関する記述として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DNSサーバへのDoS攻撃を防止できる。", correct: false}
      , {description: "IPsecによる暗号化通信が前提となっている。", correct: false}
      , {description: "代表的なDNSサーバの実装であるBINDの代替として使用する。", correct: false}
      , {description: "ディジタル署名によってDNS応答の正当性を確認できる。", correct: true}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "2台のPCをIPv6ネットワークに接続するとき，2台ともプレフィックスが2001:db8:100:1000::/56のIPv6サブネットに入るようになるIPアドレスの組合せばどれか。"
    , multiple_answer: false
    , answers: [
      {description: "2001:db8:100::aa:bb  2001:db8:100::cc:dd", correct: false}
      , {description: "2001:db8:100:1000::aa:bb  2001:db8:100:2000::cc:dd", correct: false}
      , {description: "2001:db8:100:1010::aa:bb  2001:db8:100:1020::cc:dd", correct: true}
      , {description: "2001:db8:100:1100::aa:bb  2001:db8:100:1200::cc:dd", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "HTTPの認証機能を利用するクライアント側の処理として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ダイジェスト認証では，利用者IDとパスワードを”:”で連結したものを，MD5を使ってエンコードしAuthorizationヘッダで指定する。", correct: false}
      , {description: "ダイジェスト認証では，利用者IDとパスワードを”:”で連結したものを，SHA を使ってエンコードしAuthorizationヘッダで指定する。", correct: false}
      , {description: "ベーシック認証では，利用者IDとパスワードを”:”で連結したものを，BASE64 でエンコードしAuthorizationヘッダで指定する。", correct: true}
      , {description: "ベーシック認証では，利用者IDとパスワードを”:”で連結したものを，エンコードせずにAuthorizationヘッダで指定する。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "データベースのデータを更新するトランザクションが，実行途中で異常終了したとき，更新中のデータに対して行われる処理はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "異常終了時点までの更新ログ情報を破棄することによって，データをトランザクション開始前の状態に回復する。", correct: false}
      , {description: "チェックポイント時点からコミットが完了しているトランザクションの更新をロールフォワードすることによって，データを回復する。", correct: false}
      , {description: "トランザクションの更新ログ情報を使って異常終了時点までロールフォワードすることによって，データを回復する。", correct: false}
      , {description: "ロールパックすることによって，データをトランザクション開始前の状態に回復する。", correct: true}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "オブジェクト指向における情報隠蔽に関する記述として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "オブジェクトの特性（属性，関連，操作）をまとめて抽象化する。", correct: false}
      , {description: "オブジェクトは，メッセージによってだけアクセス可能となる。", correct: true}
      , {description: "親クラスに定義されたメソッドを，実行時に子クラスに引き継ぐ。", correct: false}
      , {description: "同一メッセージでも，実行時の受信クラスに基づいて適用されるメソッドが決まる。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "特許権に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "A社が特許を出願するよりも前に独自に開発して発売した製品は，A社の特許権の侵害にならない。", correct: true}
      , {description: "組込み機器におけるハードウェアは特許権で保護されるが，ソフトウェアは保護されない。", correct: false}
      , {description: "審査を受けて特許権を取得した後に，特許権が無効となることはない。", correct: false}
      , {description: "先行特許と同ーの技術であっても，独自に開発した技術であれば特許権の侵害にならない。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "ソフトウェア開発・保守の工程において，リポジトリを構築する理由として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "各工程で検出した不良を管理することが可能になり，ソフトウェアの品質分析が容易になる。", correct: false}
      , {description: "各工程での作業手順を定義することが容易になり，開発・保守時の作業ミスを防止することができる。", correct: false}
      , {description: "各工程での作業予定と実績を関連付けて管理することが可能になり，作業の進捗管理が容易になる。", correct: false}
      , {description: "各工程での成果物を一元管理することによって，開発・保守作業の効率が良くなり，用語の統ーもできる。", correct: true}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "システム監査で用いる統計的サンプリングに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "開発プロセスにおけるコントロールを評価する際には，開発規模及び影響度の大きい案件を選定することによって，母集団全体への評価を導き出すことができる。", correct: false}
      , {description: "コントロールが有効であると判断するために必要なサンプル件数を事前に決めることができる。", correct: true}
      , {description: "正しいサンプリング手順を踏むことによって，母集団全件に対して検証を行う場合と同じ結果を常に導き出すことができる。", correct: false}
      , {description: "母集団からエラー対応が行われたデータを選定することによって，母集団全体に対してコントロールが適切に行われていることを確認できる。", correct: false}
    ]
    , category: 'SC-H24-AUTUMN'
  }
  , {
    description: "クリックジャッキング攻撃に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Webアプリケーションの脆弱性を悪用し，Webサーバに不正なリクエストを送ってWebサーバからのレスポンスを二つに分割させることによって，利用者のブラウザのキャッシュを偽造する。", correct: false}
      , {description: "Webページのコンテンツ上に透明化した標的サイトのコンテンツを配置し，利用者が気づかないうちに標的サイト上で不正操作を実行させる。", correct: true}
      , {description: "ブラウザのタブ表示機能を利用し，ブラウザの非活性なタブの中身を，利用者が気づかないうちに偽ログインページに書き換えて，それを操作させる。", correct: false}
      , {description: "利用者のブラウザの設定を変更することによって，利用者のWebページの閲覧履歴やパスワードなどの機密情報を盗み出す。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "作成者によってディジタル署名された電子文書に，タイムスタンプ機関がタイムスタンプを付与した。この電子文書を公開する場合のタイムスタンプの効果のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "タイムスタンプを付与した時刻以降に，作成者が電子文書の内容を他の電子文書へコピーして流用することを防止する。", correct: false}
      , {description: "タイムスタンプを付与した時刻以降に，第三者が電子文書の内容を他の電子文書へコピーして流用することを防止する。", correct: false}
      , {description: "電子文書がタイムスタンプの時刻以前に存在したことを示すことによって，作成者が電子文書の作成を否認することを防止する。", correct: true}
      , {description: "電子文書がタイムスタンプの時刻以前に存在したことを示すことによって，第三者が電子文書を改ざんすることを防止する。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "ディジタル証明書に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "S/MIMEやTLSで利用するディジタル証明書の規格は，ITU-T X.400で規定されている。", correct: false}
      , {description: "ディジタル証明書は，SSL/TLSプロトコルにおいて通信データの暗号化のための鍵交換や通信相手の認証に利用されている。", correct: true}
      , {description: "認証局が発行するディジタル証明書は，申請者の秘密鍵に対して認証局がディジタル署名したものである。", correct: false}
      , {description: "ルート認証局は，下位層の認証局の公開鍵にルート認証局の公開鍵でディジタル署名したディジタル証明書を発行する。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "米国NISTが制定した，AESにおける鍵長の条件はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "128ビット，192ビット，256ビットから選択する。", correct: true}
      , {description: "256ビット未満で任意に指定する。", correct: false}
      , {description: "暗号化処理単位のブロック長より32ビット長くする。", correct: false}
      , {description: "暗号化処理単位のブロック長より 32ビット短くする。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "コンティンジェンシープランにおける留意点はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業の全てのシステムを対象とするのではなく，システムの復旧の重要性と緊急性を勘案して対象を決定する。", correct: true}
      , {description: "災害などへの対応のために，すぐに使用できるよう，パックアップデータをコンピュータ室内又はセンタ内に保存しておく。", correct: false}
      , {description: "バックアップの対象は，機密情報の中から機密度を勘案して選択する。", correct: false}
      , {description: "被害のシナリオを作成し，これに基づく”予防策策定手順”を策定する。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "JIS Q 27001:2006における情報システムのリスクとその評価に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "脅威とは，監弱性が顕在化する源のことであり，情報システムに組み込まれた技術的管理策によって脅威のレベルと発生の可能性が決まる。", correct: false}
      , {description: "脆弱性とは，情報システムに対して悪い影響を与える要因のことであり，自然災害，システム障害，人為的過失及び不正行為に大別される。", correct: false}
      , {description: "リスクの特定では，脅威が管理策の脆弱性に付け込むことによって情報資産に与える影響を特定する。", correct: true}
      , {description: "リスク評価では，リスク回避とリスク低減の二つに評価を分類し，リスクの大きさを判断して対策を決める。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "ファイアウォールにおいて，自ネットワークのホストへの侵入を防止する対策のうち，IPスプーフィング（spoofing）攻撃の対策について述べたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部から入るTCPコネクション確立要求パケットのうち，外部へのインターネットサービスの提供に必要なもの以外を破棄する。", correct: false}
      , {description: "外部から入るUDPパケットのうち，外部へのインターネットサービスの提供や利用したいインターネットサービスに必要なもの以外を破棄する。", correct: false}
      , {description: "外部から入るパケットの宛先IPアドレスが，インターネットとの直接の通信をすべきでない自ネットワークのホストのものであれば，そのパケットを破棄する。", correct: false}
      , {description: "外部から入るパケットの送信元IPアドレスが自ネットワークのものであれば，そのパケットを破棄する。", correct: true}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "サイドチャネル攻撃の手法であるタイミング攻撃の対策として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "演算アルゴリズムに対策を施して，演算内容による処理時間の差異が出ないようにする。", correct: true}
      , {description: "故障を検出する機構を設けて，検出したら機密情報を破壊する。", correct: false}
      , {description: "コンデンサを挿入して，電力消費量が時間的に均ーとなるようにする。", correct: false}
      , {description: "保護層を備えて，内部のデータが不正に書き換えられないようにする。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "PCIデータセキュリティ基準（PCIDSS Version 2.0）の要件のうち，詳細要件の選択肢として，WAFの導入を含むものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "要件 1:カード会員データを保護するために，ファイアウォールをインストールして構成を維持すること", correct: false}
      , {description: "要件 3:保存されるカード会員データを保護すること", correct: false}
      , {description: "要件 6:安全性の高いシステムとアプリケーションを開発し，保守すること", correct: true}
      , {description: "要件 7:カード会員データへのアクセスを，業務上必要な範囲内に制限すること", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "DMZ上のコンピュータがインターネットからのpingに応答しないようにファイアウォールのセキュリティルールを定めるとき，”通過禁止”に設定するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ICMP", correct: true}
      , {description: "TCP及びUDPのポート番号53", correct: false}
      , {description: "TCPのポート番号21", correct: false}
      , {description: "UDPのポーれ番号123", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "有料の公衆無線LANサービスにおいて実施される，ネットワークサービスの不正利用に対するセキュリティ対策の方法と目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "利用者ごとに異なるSSIDを割り当てることによって，利用者PCへの不正アクセスを防止する。", correct: false}
      , {description: "利用者ごとに異なるサプリカントを割り当てることによって，利用者PCへの不正アクセスを防止する。", correct: false}
      , {description: "利用者ごとに異なるプライベートIPアドレスを割り当てることによって，第三者によるアクセスポイントへのなりすましを防止する。", correct: false}
      , {description: "利用者ごとに異なる利用者IDを割り当て，パスワードを設定することによって，契約者以外の利用者によるアクセスを防止する。", correct: true}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "送信元を詐称した電子メールを拒否するために，SPF（Sender Policy Framework）の仕組みにおいて受信側が行うことはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Resent-Sender:，Resent-From:，Sender:，From:などのメールヘッダ情報の送信者メールアドレスを基に送信メールアカウントを検証する。", correct: false}
      , {description: "SMTPが利用するポート番号25の通信を拒否する。", correct: false}
      , {description: "SMTP通信中にやり取りされるMAILFROMコマンドで与えられた送信ドメインと送信サーバのIPアドレスの適合性を検証する。", correct: true}
      , {description: "電子メールに付加されたディジタル署名を受信側が検証する。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "迷惑メールの検知手法であるベイジアンフィルタリングの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "信頼できるメール送信元を許可リストに登録しておき，許可リストにない送信元からの電子メールは迷惑メールと判定する。", correct: false}
      , {description: "電子メールが正規のメールサーバから送信されていることを検証し，迷惑メールであるかどうかを判定する。", correct: false}
      , {description: "電子メールの第三者中継を許可しているメールサーバを登録したデータベースに掲載されている情報を基に，迷惑メールであるかどうかを判定する。", correct: false}
      , {description: "迷惑メールを利用者が振り分けるときに，迷惑メールの特徴を自己学習し，迷惑メールであるかどうかを統計的に解析して判定する。", correct: true}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "DNSの再帰的な問合せを使ったサービス不能攻撃（DNS amp）の踏み台にされることを防止する対策はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "キャッシュサーバとコンテンツサーバに分離し，インターネット側からキャッシュサーバに問合せできないようにする。", correct: true}
      , {description: "問合せされたドメインに関する情報をWhoisデータベースで確認する。", correct: false}
      , {description: "一つのDNSレコードに複数のサーバのIPアドレスを割り当て，サーバへのアクセスを振り分けて分散させるように設定する。", correct: false}
      , {description: "他のDNSサーバから送られてくるIPアドレスとホスト名の対応情報の信頼性をディジタル署名で確認するように設定する。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "SMTP-AUTHを使ったメールセキュリティ対策はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ISP管理下の動的IPアドレスからの電子メール送信について，管理外ネットワークのメールサーバへのSMTP通信を禁止する。", correct: false}
      , {description: "PCからの電子メール送信は，POP接続で利用者認証済の場合にだけ許可する。", correct: false}
      , {description: "通常のSMTPのポートとは別のサブミッションポートを使用して，PCからメールサーバへの電子メール送信時の認証を行う。", correct: true}
      , {description: "電子メール送信元のサーバについてDNSの逆引きが成功した場合にだけ，電子メール受信を許可する。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "SQLインジェクション対策について，Webアプリケーションの実装における対策とWebアプリケーションの実装以外の対策として，ともに適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Webアプリケーション中でシェルを起動しない。chroot環境でWebサーバを実行する。", correct: false}
      , {description: "セッションIDを複雑なものにする。SSLによって通信内容を秘匿する。", correct: false}
      , {description: "バインド機構を利用する。データベースのアカウントのもつデータベースアクセス権限を必要最小限にする。", correct: true}
      , {description: "パス名やファイル名をパラメタとして受け取らないようにする。重要なファイルを公開領域に置かない。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "無線LANで用いられるSSIDの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "48ビットのネットワーク識別子であり，アクセスポイントのMACアドレスとー致する。", correct: false}
      , {description: "48ビットのホスト識別子であり，有線LANのMACアドレスと同様の働きをする。", correct: false}
      , {description: "最長32オクテットのネットワーク識別子であり，接続するアクセスポイントの選択に用いられる。", correct: true}
      , {description: "最長32オクテットのホスト識別子であり，ネットワーク上で一意である。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "シリアル回線で使用するものと同じデータリンクのコネクション確立やデータ転送を，LAN上で実現するプロトコルはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "MPLS", correct: false}
      , {description: "PPP", correct: false}
      , {description: "PPPoE", correct: true}
      , {description: "PPTP", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "ネットワーク管理プロトコルであるSNMPパージョン1のメッセージタイプのうち，事象の発生をエージェント自身が自発的にマネージャに知らせるために使用するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "get-request", correct: false}
      , {description: "get-response", correct: false}
      , {description: "set-request", correct: false}
      , {description: "trap", correct: true}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "WebDAVの特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "HTTP上のSOAPによってソフトウェア同士が通信して，ネットワーク上に分散したアプリケーションを連携させることができる。", correct: false}
      , {description: "HTTPを拡張したプロトコルを使って，サーバ上のファイルの参照や作成，削除及びパージョン管理が行える。", correct: true}
      , {description: "WebアプリケーションからIMAPサーバにアクセスして，ブラウザから添付ファイルを含む電子メールの操作ができる。", correct: false}
      , {description: "ブラウザで”ftp://”から始まるURLを指定して，ソフトウェアなどの大容量ファイルのダウンロードができる。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "SQLのGRANT文による権限定義に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "PUBLIC指定によって，全ての権限を与えることができる。", correct: false}
      , {description: "WITH GRANT OPTION指定によって，権限を付与可能にすることができる。", correct: true}
      , {description: "ビューに対して固有の参照権限を定義できない。", correct: false}
      , {description: "表定義のSQL文内にGRANT文を指定することによって，権限定義ができる。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "システム開発で行われる各テストについて，そのテスト要求事項が定義されるアクティビティとテストの組合せのうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "システム方式設計=運用テスト ソフトウェア方式設計=システム結合テスト ソフトウェア詳細設計=ソフトウェア結合テスト", correct: false}
      , {description: "システム方式設計=運用テスト ソフトウェア方式設計=ソフトウェア結合テスト ソフトウェア詳細設計=ソフトウェアユニットテスト", correct: false}
      , {description: "システム方式設計=システム結合テスト ソフトウェア方式設計=ソフトウェア結合テスト ソフトウェア詳細設計=ソフトウェアユニットテスト", correct: true}
      , {description: "システム方式設計=システム結合テスト ソフトウェア方式設計=ソフトウェアユニットテスト ソフトウェア詳細設計=ソフトウェア結合テスト", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "開発した製品で利用している新規技術に関して特許の出願を行った。日本において特許権の取得が可能なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "学会で技術内容を発表した日から11か月目に出願した。", correct: false}
      , {description: "顧客と守秘義務の確認を取った上で技術内容を説明した後，製品発表前に出願した。", correct: true}
      , {description: "製品に使用した暗号の生成式を出願した。", correct: false}
      , {description: "製品を販売した後に出願した。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "ITサービスマネジメン卜の情報セキュリティ管理プロセスに対して，JIS Q 20000-1が要求している事項はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "潜在的な問題を低減させるために，予防処置を取らなければならない。", correct: false}
      , {description: "ディジタルの構成品目の原本を，物理的又は電子的にセキュリティが保たれた書庫で管理しなければならない。", correct: false}
      , {description: "変更要求に対しては，そのリスク，影響及び事業利益について，アセスメントを行わなければならない。", correct: false}
      , {description: "変更を実装する前に，変更がセキュリティ管理策に与える影響のアセスメントを行わなければならない。", correct: true}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "内部監査として実施したシステム監査で，問題点を検出後，改善勧告を行うまでの問に監査人が考慮すべき事項として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "改善事項を被監査部門へ事前に通知した場合，不備の是正が行われ，元から不備が存在しなかったように見える可能性があるので，被監査部門に秘匿する。", correct: false}
      , {description: "監査人からの一方的な改善提案は実行不可能なものとなるおそれがあるので，改善勧告の前に，改善策について被監査部門との間で協議する場をもつ。", correct: true}
      , {description: "経営判断に関与することを避けるため，不備を改善する際の経済合理性などの判断を行わず，そのまま経営者に対する改善勧告とする。", correct: false}
      , {description: "将来のフォローアップに際して，客観的で中立的な判断を阻害する要因となるので，改善勧告の優先度付けや取捨選択を行うことを避ける。", correct: false}
    ]
    , category: 'SC-H24-SPRING'
  }
  , {
    description: "DNSSEC（DNS Security Extensions）の機能はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DNSキャッシュサーバの設定によって再帰的な問合せの受付範囲が最大限になるように拡張する。", correct: false}
      , {description: "DNSサーバから受け取るリソースレコードに対するディジタル署名を利用して，リソースレコードの送信者の正当性とデータの完全性を検証する。", correct: true}
      , {description: "ISPなどのセカンダリDNSサーバを利用してDNSコンテンツサーバを二重化することで名前解決の可用性を高める。", correct: false}
      , {description: "共通鍵暗号技術とハッシュ関数を利用したセキュアな方法で，DNS更新要求が許可されているエンドポイントを特定し認証する。", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "セキュアハッシュ関数SHA-256を用いて，32ビット，256ビット，2,048ビットの三つの長さのメッセージからハッシュ値を求めたとき，それぞれのメッセージのハッシュ値の長さはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "32bit 256bit 256bit", correct: false}
      , {description: "32bit 256bit 2,048bit", correct: false}
      , {description: "256bit 256bit 256bit", correct: true}
      , {description: "256bit 256bit 2,048bit", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "A社のWebサーバは，認証局で生成したWebサーバ用のディジタル証明書を使ってSSL/TLS通信を行っている。PCがA社のWebサーバにSSL/TLSを用いてアクセスしたときにPCが行う処理のうち，サーバのディジタル証明書を入手した後に，認証局の公開鍵を利用して行うものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "暗号化通信に利用する共通鍵を生成し，認証局の公開鍵を使って暗号化する。", correct: false}
      , {description: "暗号化通信に利用する共通鍵を認証局の公開鍵を使って復号する。", correct: false}
      , {description: "ディジタル証明書の正当性を認証局の公開鍵を使って検証する。", correct: true}
      , {description: "利用者が入力して送付する秘匿データを認証局の公開鍵を使って暗号化する。", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "SSLを使用して通信を暗号化する場合，SSL-VPN装置に必要な条件はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SSL-VPN装置は，FQDN又はIPアドレスを含むディジタル証明書を組み込む必要がある。", correct: true}
      , {description: "SSL-VPN装置は，装置メーカが用意した機種固有のディジタル証明書を組み込む必要がある。", correct: false}
      , {description: "SSL-VPN装置は，装置メーカから提供される認証局を利用する必要がある。", correct: false}
      , {description: "同一ドメイン内で複数拠点に SSL-VPN装置を設置する場合は，同一のディジタル証明書を利用する必要がある。", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "ISP＂A＂管理下のネットワークから別のISP＂B＂管理下の宛先へSMTPで電子メールを送信する。電子メール送信者がSMTP-AUTHを利用していない場合，スパムメール対策OP25Bによって遮断される電子メールはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ISP＂A＂管理下の固定IPアドレスから送信されたが，受信者の承諾を得ていない広告の電子メール", correct: false}
      , {description: "ISP＂A＂管理下の固定IPアドレスから送信されたが，送信元IPアドレスがDNSで逆引きできなかった電子メール", correct: false}
      , {description: "ISP＂A＂管理下の動的IPアドレスからISP＂A＂のメールサーバを経由して送信された電子メール", correct: false}
      , {description: "ISP＂A＂管理下の動的IPアドレスからISP＂A＂のメールサーバを経由せずに送信された電子メール", correct: true}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "100人の送受信者が共通鍵暗号方式で，それぞれが相互に暗号化通信を行うときに必要な共通鍵の総数は幾つか。"
    , multiple_answer: false
    , answers: [
      {description: "200", correct: false}
      , {description: "4,950", correct: true}
      , {description: "9,900", correct: false}
      , {description: "10,000", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "IPアドレスに対する MACアドレスの不正な対応関係を作り出す攻撃はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ARPスプーフィング攻撃", correct: true}
      , {description: "DNSキャッシュポイズニング攻撃", correct: false}
      , {description: "URLエンコーディング攻撃", correct: false}
      , {description: "バッファオーバフロー攻撃", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "DNSサーバに格納されるネットワーク情報のうち，第三者に公開する必要のない情報が攻撃に利用されることを防止するための，プライマリDNSサーバの設定はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SOAレコードのシリアル番号を更新する。", correct: false}
      , {description: "外部のDNSサーバにリソースレコードがキャッシュされる時間を短く設定する。", correct: false}
      , {description: "ゾーン転送を許可するDNSサーバを限定する。", correct: true}
      , {description: "ラウンドロビン設定を行う。", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "サービス不能攻撃（DoS）の一つであるSmurf攻撃の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ICMPの応答パケットを大量に発生させる。", correct: true}
      , {description: "TCP接続要求であるSYNパケットを大量に送信する。", correct: false}
      , {description: "サイズの大きいUDPパケットを大量に送信する。", correct: false}
      , {description: "サイズの大きい電子メールや大量の電子メールを送信する。", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "表に示すテーブルX，Yへのアクセス要件に関して，J1S Q 27001:2006（ISO/IEC 27001:2005）が示す＂完全性＂の観点からセキュリティを脅かすおそれのあるアクセス権付与はどれか。" +
    "<table class='table'>" +
    "<tr><td>テーブル</td><td>アクセス要件</td></tr>" +
    "<tr><td>X（注文テーブル）</td><td>①調達課の利用者Aが注文データを入力するために，又は内容を確認するためにアクセスする。<br>②管理課の利用者Bはアクセスしない。</td></tr>" +
    "<tr><td>Y（仕入先マスタテーブル）</td><td>①調達課の利用者Aが仕入先データを照会する目的だけでアクセスする。<br>②管理課の利用者Bが仕入先データのマスタメンテナンス作業を行うためにアクセスする。</td></tr>" +
    "</table>"
    , multiple_answer: false
    , answers: [
      {description: "GRANT INSERT ON Y TO A", correct: true}
      , {description: "GRANT INSERT ON Y TO B", correct: false}
      , {description: "GRANT SELECT ON X TO A", correct: false}
      , {description: "GRANT SELECT ON X TO B", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "テンペスト（TEMPEST）攻撃を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "故意に暗号化演算を誤動作させて正しい処理結果との差異を解析する。", correct: false}
      , {description: "処理時間の差異を計測し解析する。", correct: false}
      , {description: "処理中に機器から放射される電磁波を観測し解析する。", correct: true}
      , {description: "チップ内の信号線などに探針を直接当て，処理中のデータを観測し解析する。", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "ダウンローダ型ウイルスがPCに侵入した場合に，インターネット経路で他のウイルスがダウンロードされることを防ぐ対策のうち，最も有効なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "URLフィルタを用いてインターネット上の不正Webサイトへの接続を遮断する。", correct: true}
      , {description: "インターネットから内部ネットワークに向けた要求パケットによる不正侵入行為をIPSで破棄する。", correct: false}
      , {description: "スパムメール対策サーバでインターネットからのスパムメールを拒否する。", correct: false}
      , {description: "メールフィルタで他サイトへの不正メール発信を遮断する。", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "ルートキット（rootkit）を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "OSの中核であるカーネル部分の脆ぜい弱性を分析するツール", correct: false}
      , {description: "コンピュータがウイルスやワームに感染していないことをチェックするツール", correct: false}
      , {description: "コンピュータやルータのアクセス可能な通信ポートを外部から調査するツール", correct: false}
      , {description: "不正侵入してOSなどに不正に組み込んだものを隠蔽する機能をまとめたツール", correct: true}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "スパムメールの対策であるDKIM（Domain Keys Identified Mail）の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "送信側メールサーバでディジタル署名を電子メールのヘッダに付与して，受信側メールサーバで検証する。", correct: true}
      , {description: "送信側メールサーバで利用者が認証されたとき，電子メールの送信が許可される。", correct: false}
      , {description: "電子メールのヘッダや配送経路の情報から得られる送信元情報を用いて，メール送信元のIPアドレスを検証する。", correct: false}
      , {description: "ネットワーク機器で，内部ネットワークから外部のメールサーバのTCPポート25番への直接の通信を禁止する。", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "IPsecのAHに関する説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPパケットを暗号化する対象部分によって，トランスポートモード，トンネルモードの方式がある。", correct: false}
      , {description: "暗号化アルゴリズムや暗号化鍵のライフタイムが設定される管理テーブルで，期聞を過ぎると新しいデータに更新される。", correct: false}
      , {description: "暗号化アルゴリズムを決定し，暗号化鍵を動的に生成する鍵交換プロトコルで，暗号化通信を行う。", correct: false}
      , {description: "データの暗号化は行わず，SPI，シーケンス番号，認証データを用い，完全性の確保と認証を行う。 ", correct: true}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "Webアプリケーションの脆弱性を悪用する攻撃手法のうち，Perlのsystem関数やPHPのexec関数など外部プログラムの呼出しを可能にするための関数を利用し，不正にシェルスクリプトや実行形式のファイルを実行させるものはどれに分類されるか。"
    , multiple_answer: false
    , answers: [
      {description: "HTTPヘッダインジェクション", correct: false}
      , {description: "OSコマンドインジェクション", correct: true}
      , {description: "クロスサイトリクエストフォージェリ", correct: false}
      , {description: "セッションハイジャック", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "DNSのMXレコードで指定するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "エラーが発生したときの通知先のメールアドレス", correct: false}
      , {description: "送信先ドメインのメールサーバ", correct: true}
      , {description: "複数のDNSサーバが動作しているときのマスタDNSサーバ", correct: false}
      , {description: "メーリングリストを管理しているサーバ", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "コンピュータとスイッチングハブの間，又は2台のスイッチングハブの問を接続する複数の物理回線を論理的に1本の回線に束ねる技術はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "スパニングツリー", correct: false}
      , {description: "ブリッジ", correct: false}
      , {description: "マルチホーミング", correct: false}
      , {description: "リンクアグリゲーション", correct: true}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "電源オフ時にIPアドレスを保持することができない装置が，電源オン時に自装置のMACアドレスから自装置に割り当てられているIPアドレスを知るために用いるデータリンク層のプロトコルで，ブロードキャストを利用するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ARP", correct: true}
      , {description: "DHCP", correct: false}
      , {description: "DNS", correct: false}
      , {description: "RARP", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "TCPヘッダに含まれる情報はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "宛先ポート番号", correct: false}
      , {description: "パケット生存時間（TTL）", correct: false}
      , {description: "発信元IPアドレス", correct: false}
      , {description: "プロトコル番号", correct: true}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "次数がnの関係Rには，属性なし（φ）も含めて異なる射影は幾つあるか。"
    , multiple_answer: false
    , answers: [
      {description: "n", correct: false}
      , {description: "2n", correct: false}
      , {description: "n^2", correct: false}
      , {description: "2^n", correct: true}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "パグ埋込み法において，埋め込まれたパグ数をS，埋め込まれたパグのうち発見されたパグ数をm，埋め込まれたパグを含まないテスト開始前の潜在パグ数をT，発見された総パグ数をnとしたとき，S，T，m，nの関係を表す式はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "m/S = (n-m)/T", correct: true}
      , {description: "m/S = T/(n-m)", correct: false}
      , {description: "m/S = n/T", correct: false}
      , {description: "m/S = T/n", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "ソフトウェア開発組織の活動状態のうち，CMMIモデルにおける成熟度レベルが最も高いものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "作業成果物の状況が，主要なタスクの完了時点で管理層に対して見える状態になっている。", correct: false}
      , {description: "実績が定量的に把握されておりプロセスが組織的に管理されている。", correct: false}
      , {description: "プロセスが明文化されて，組織内の全ての人がそれを利用している。", correct: false}
      , {description: "プロセスを継続的に改善していくための仕組みが機能している。", correct: true}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "情報システムの設計において，フェールソフトが講じられているのはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "UPS装置を設置することで，停電時に手順どおりにシステムを停止できるようにし，データを保全する。", correct: false}
      , {description: "制御プログラムの障害時に，システムの暴走を避け，安全に運転を停止できるようにする。", correct: false}
      , {description: "ハードウェアの障害時に，パフォーマンスは低下するが，構成を縮小して運転を続けられるようにする。", correct: true}
      , {description: "利用者の誤操作や誤入力を未然に防ぐことで，システムの誤動作を防止できるようにする。", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "ISMSにおけるリスク分析手法の一つである＂詳細リスク分析＂で行う作業はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "情報セキュリティポリシの作成", correct: false}
      , {description: "セーフガードの選択", correct: false}
      , {description: "リスクの評価", correct: true}
      , {description: "リスクの容認", correct: false}
    ]
    , category: 'SC-H23-AUTUMN'
  }
  , {
    description: "AESの暗号化方式を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "鍵長によって，段数が決まる。", correct: true}
      , {description: "段数は，6回以内の範囲で選択できる。", correct: false}
      , {description: "データの暗号化，復号，暗号化の順に3回繰り返す。", correct: false}
      , {description: "同ーの公開鍵を用いて暗号化を3回繰り返す。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "IEEE 802.1Xで使われるEAP-TLSによって実現される認証はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "あらかじめ登録した共通鍵によるサーバ認証と，時刻同期のワンタイムパスワードによる利用者認証", correct: false}
      , {description: "チャレンジレスポンスによる利用者認証", correct: false}
      , {description: "ディジタル証明書による認証サーバとクライアントの相互認証", correct: true}
      , {description: "利用者IDとパスワードによる利用者認証", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "PCに内蔵されるセキュリティチップ（TPM: Trusted Platform Module）がもつ機能はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "TPM間の共通鍵の交換", correct: false}
      , {description: "鍵ペアの生成", correct: true}
      , {description: "ディジタル証明書の発行", correct: false}
      , {description: "ネットワーク経由の乱数送信", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "暗号アルゴリズムの危殆化を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外国の輸出規制によって十分な強度をもつ暗号アルゴリズムを実装した製品が利用できなくなること", correct: false}
      , {description: "鍵の不適切な管理によって，鍵が漏えいする危険性が増すこと", correct: false}
      , {description: "計算能力の向上などによって，健の推定が可能となり，暗号の安全性が低下すること", correct: true}
      , {description: "最高性能のコンピュータを用い，膨大な時間やコストを掛けて暗号強度をより確実なものとすること", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "SMTP-AUTHにおける認証の動作を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SMTPサーバに電子メールを送信する前に，電子メールを受信し，その際にパスワード認証が行われたクライアントのIPアドレスに対して，一定時間だけ電子メールの送信を許可する。", correct: false}
      , {description: "クライアントがSMTPサーバにアクセスしたときに利用者認証を行い，許可された利用者だけから電子メールを受け付ける。", correct: true}
      , {description: "サーバは認証局のディジタル証明書をもち，クライアントから送信された認証局の署名付きクライアント証明書の妥当性を確認する。", correct: false}
      , {description: "利用者が電子メールを受信する際の認証情報を秘匿できるように，パスワードからハッシュ値を計算して，その値で利用者認証を行う。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "X.509における CRL（Certificate Revocation List）の運用を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "PKIの利用者は，認証局の公開鍵がブラウザに組み込まれていれば，CRLを参照しなくてもよい。", correct: false}
      , {description: "認証局は，X.509によって1年に1回のCRL発行が義務付けられている。", correct: false}
      , {description: "認証局は，ディジタル証明書を有効期限内にCRLに登録することがある。", correct: true}
      , {description: "認証局は，発行したすべてのディジタル証明書の有効期限をCRLに登録する。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "認証局が送信者に発行したディジタル証明書を使用して送信者又は受信者が行えることはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "受信した暗号文を復号して，盗聴を検知する。", correct: false}
      , {description: "受信した暗号文を復号して，メッセージが改ざんされていないことと送信者が商取引相手として信頼できることを確認する。", correct: false}
      , {description: "受信したメッセージのディジタル署名を検証して，メッセージが改ざんされていないこととメッセージの送信者に偽りのないことを確認する。", correct: true}
      , {description: "メッセージにディジタル署名を添付して，盗聴を防止する。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "サーバへのログイン時に用いるパスワードを不正に取得しようとする攻撃とその対策の組合せのうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "辞書攻撃=パスワードを平文で送信しない。 スニッフィング=ログインの試行回数に制限を設ける。 ブルートフォース攻撃=ランダムな値でパスワードを設定する。", correct: false}
      , {description: "辞書攻撃=ランダムな値でパスワードを設定する。 スニッフィング=パスワードを平文で送信しない。 ブルートフォース攻撃=ログインの試行回数に制限を設ける。", correct: true}
      , {description: "辞書攻撃=ランダムな値でパスワードを設定する。 スニッフィング=ログインの試行回数に制限を設ける。 ブルートフォース攻撃=パスワードを平文で送信しない。", correct: false}
      , {description: "辞書攻撃=ログインの試行回数に制限を設ける。 スニッフィング=ランダムな値でパスワードを設定する。 ブルートフォース攻撃=パスワードを平文で送信しない。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "ウイルスの検出手法であるピヘイビア法を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "あらかじめ特徴的なコードをパターンとして登録したウイルス定義ファイルを用いてウイルス検査対象と比較し，同じパターンがあれば感染を検出する。", correct: false}
      , {description: "ウイルスに感染していないことを保証する情報をあらかじめ検査対象に付加しておき，検査時に不整合があれば感染を検出する。", correct: false}
      , {description: "ウイルスの感染が疑わしい検査対象を，安全な場所に保管する原本と比較し，異なっていれば感染を検出する。", correct: false}
      , {description: "ウイルスの感染や発病によって生じるデータ書込み動作の異常や通信量の異常増加などの変化を監視して，感染を検出する。", correct: true}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "ウイルスの調査手法に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "逆アセンブルは，バイナリコードの新種ウイルスの動作を解明するのに有効な手法である。", correct: true}
      , {description: "パターンマッチングでウイルスを検知する方式は，暗号化された文書中のマクロウイルスの動作を解明するのに有効な手法である。", correct: false}
      , {description: "ファイルのハッシュ値を基にウイルスを検知する方式は，ウイルスのハッシュ値からどのウイルスの亜種かを特定するのに確実な手法である。", correct: false}
      , {description: "不正な動作からウイルスを検知する方式は，ウイルス名を特定するのに確実な手法である。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "通信の暗号化に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPsecのトランスポートモードでは，ゲートウェイ間の通信経路上だけではなく，送信ホストと受信ホストとの聞の全経路上でメッセージが暗号化される。", correct: true}
      , {description: "LDAPクライアントがLDAPサーバに接続するとき，その通信内容は暗号化することができない。", correct: false}
      , {description: "S/MIMEで暗号化した電子メールは，受信側のメールサーバ内に格納されている聞は，メール管理者が平文として見ることができる。", correct: false}
      , {description: "SSLを使用すると，暗号化されたHTML文書はブラウザでキャッシュの有無が設定できず，ディスク内に必ず保存される。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "自社の中継用メールサーバのログのうち，外部ネットワークからの第三者中継と判断できるものはどれか。ここで，AAA.168.1.5とAAA.168.1.10は自社のグローバルIPアドレスとし，BBB.45.67.89とBBB.45.67.90は社外のグローバルIPアドレスとする。a.b.cは自社のドメイン名とし，a.b.dとa.b.eは他社のドメイン名とする。また，IPアドレスとドメイン名は詐称されていないものとする。"
    , multiple_answer: false
    , answers: [
      {description: "接続元IPアドレス=AAA.168.1.5 送信者のドメイン=a.b.c 受信者のドメイン=a.b.d", correct: false}
      , {description: "接続元IPアドレス=AAA.168.1.10 送信者のドメイン=a.b.c 受信者のドメイン=a.b.c", correct: false}
      , {description: "接続元IPアドレス=BBB.45.67.89 送信者のドメイン=a.b.d 受信者のドメイン=a.b.e", correct: true}
      , {description: "接続元IPアドレス=BBB.45.67.90 送信者のドメイン=a.b.d 受信者のドメイン=a.b.c", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "経済産業省＂ソフトウェア管理ガイドライン＂に定められた，ソフトウェアを使用する法人，団体などが実施すべき基本的事項の記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ウイルスからソフトウェアを保護するため，関係法令や使用許諾契約などについて利用者の教育啓発を行う。", correct: false}
      , {description: "セキュリティ対策に責任を負うセキュリティ管理責任者を任命し，適切な管理体制を整備する。", correct: false}
      , {description: "ソフトウェアの違法複製などの有無を確認するため，すべてのソフトウェアを対象として，その使用状況についての監査を実施する。", correct: true}
      , {description: "ソフトウェアの脆弱性を突いた不正アクセスから保護するため，ソフトウェアの使用手順や管理方法などを定めたソフトウェア管理規則を制定する。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "共通フレーム2007に従いシステム開発の要件定義の段階で実施することとして，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "システムに必要なセキュリティ機能及びその機能が対策として達成すべき内容を決定する。", correct: true}
      , {description: "システムに必要なセキュリティ機能に関連するチェックリストを用いてソースコードをレビューする。", correct: false}
      , {description: "組織に必要なセキュリティ機能を含むシステム化計画を立案する。", correct: false}
      , {description: "第三者によるシステムのセキュリティ監査を脆弱性評価ツールを用いて定期的に実施する。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "ICカードの耐タンパ性を高める対策はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ICカードとICカードリーダとが非接触の状態で利用者を認証して，利用者の利便性を高めるようにする。", correct: false}
      , {description: "故障に備えてあらかじめ作成した予備のICカードを保管し，故障時に直ちに予備カードに交換して利用者がICカードを使い続けられるようにする。", correct: false}
      , {description: "信号の読出し用プローブの取付けを検出するとICチップ内の保存情報を消去する回路を設けて，ICチップ内の情報を容易に解析できないようにする。", correct: true}
      , {description: "退職者のICカードは業務システム側で利用を停止して，ほかの利用者が使用できないようにする。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "ルータで接続された二つのセグメント間でのコリジョンの伝搬とブロードキャストフレームの中継について，適切な組合せはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "コリジョンの伝搬=伝搬する ブロードキャストフレームの中継=中継する", correct: false}
      , {description: "コリジョンの伝搬=伝搬する ブロードキャストフレームの中継=中継しない", correct: false}
      , {description: "コリジョンの伝搬=伝搬しない ブロードキャストフレームの中継=中継する", correct: false}
      , {description: "コリジョンの伝搬=伝搬しない ブロードキャストフレームの中継=中継しない", correct: true}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "ある企業の本店で内線通話を調査したところ，通話数が1時間当たり120回，平均適話時聞が90秒であった。本店内線の呼量は何アーランか。"
    , multiple_answer: false
    , answers: [
      {description: "0.03", correct: false}
      , {description: "3", correct: true}
      , {description: "180", correct: false}
      , {description: "10,800", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "インターネットVPNを実現するために用いられる技術であり，ESP（Encapsu1ating Security Payload）やAH（Authentication Header）などのプロトコルを含むものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPsec", correct: true}
      , {description: "MPLS", correct: false}
      , {description: "PPP", correct: false}
      , {description: "SSL", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "TCPのフロー制御に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "OSI基本参照モデルのネットワーク層の機能である。", correct: false}
      , {description: "ウインドウ制御はピット単位で行う。", correct: false}
      , {description: "認応答がない場合は再送処理によってデータ回復を行う。", correct: true}
      , {description: "データの順序番号をもたないので，データは受信した順番のままで処理する。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "通信プロトコルで使用するデータ形式を記述するための記法であって，SNMPのパケットの符号化に利用されているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ASN.1", correct: true}
      , {description: "JSON", correct: false}
      , {description: "SGML", correct: false}
      , {description: "SOAP", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "次のSQL文をA表の所有者が発行した場合を説明したものはどれか。<br>GRANT ALL PRIVILEGES ON A TO B WITH GRANT OPTION"
    , multiple_answer: false
    , answers: [
      {description: "A表に関する，SELECT権限，UPDATE権限，INSERT権限，DELETE権限などのすべての権限，及びそれらの付与権限を利用者Bに対して付与する。", correct: true}
      , {description: "A表に関する，SELECT権限，UPDATE権限，INSERT権限，DELETE権限などのすべての権限を利用者Bに対して付与するが，それらの権限の付与権限は付与しない。", correct: false}
      , {description: "A表に関する，SELECT権限，UPDATE権限，INSERT権限，DELETE権限は与えないが，それらのすべての権限の付与権限だけを利用者Bに対して付与する。", correct: false}
      , {description: "A表に関する，SELECT権限，及びSELECT権限の付与権限を利用者Bに対して付与し，UPDATE権限，INSERT権限，DELETE権限，及びそれらの付与権限は付与しない。", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "操作に不慣れな人も利用するシステムでは，間違ったデータが入力されることが想定される。誤入力が発生しても，プログラムやシステムを異常終了させずに，エラーメッセージを表示して次の操作を促すような設計を何というか。"
    , multiple_answer: false
    , answers: [
      {description: "フールブルーフ", correct: true}
      , {description: "フェールセーフ", correct: false}
      , {description: "フェールソフト", correct: false}
      , {description: "フォールトトレランス", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "共通フレーム2007で取り決められているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "作成する文書の種類及び書式", correct: false}
      , {description: "信頼性，保守性などのソフトウェアの品質尺度", correct: false}
      , {description: "適用すべき開発モデル，技法及びツール", correct: false}
      , {description: "プロセスごとの作業の主体者（役割）と責任の所在", correct: true}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "(1)〜(4)はある障害の発生から本格的な対応までの一連の活動である。(1)〜(4)の各活動とそれに対応するITILの管理プロセスの組合せのうち，適切なものはどれか。" +
    "<ul><li>(1) 利用者からサービスデスクに＂特定の入力操作が拒否される＂という連絡があったので，別の入力操作による回避方法を利用者に伝えた</li>" +
    "<li>(2) 原因を開発チームで追究した結果，アプリケーションプログラムに不具合がある乙とが分かった。</li>" +
    "<li>(3) 障害の原因となったアプリケーションプログラムの不具合を改修する必要があるのかどうか，改修した場合に不具合箇所以外に影響が出る心配はないかどうかについて，関係者を集めて確認し，改修することを決定した。</li>" +
    "<li>(4) 改修したアプリケーションプログラムの稼働環境への適用については，利用者への周知，適用手順及び失敗時の切戻し手順の確認など，十分に事前準備を行った。</li>"
    , multiple_answer: false
    , answers: [
      {description: "(1)=インシデント管理 (2)=問題管理 (3)=変更管理 (4)=リリース管理及び展開管理", correct: true}
      , {description: "(1)=インシデント管理 (2)=問題管理 (3)=リリース管理及び展開管理 (4)=変更管理", correct: false}
      , {description: "(1)=問題管理 (2)=インシデント管理 (3)=変更管理 (4)=リリース管理及び展開管理", correct: false}
      , {description: "(1)=問題管理 (2)=インシデント管理 (3)=リリース管理及び展開管理 (4)=変更管理", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "入出金管理システムから出力された入金データファイルを，売掛金管理システムが読み込んでマスタファイルを更新する。入出金管理システムから売掛金管理システムへのデータ受渡しの正確性及び網羅性を確保するコントロールはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "売掛金管理システムにおける入力データと出力結果とのランツーランコントロール", correct: false}
      , {description: "売掛金管理システムのマスタファイル更新におけるタイムスタンプ機能", correct: false}
      , {description: "入金額及び入金データ件数のコントロールトータルのチェック", correct: true}
      , {description: "入出金管理システムへの入力のエディットバリデーションチェック", correct: false}
    ]
    , category: 'SC-H23-SPRING'
  }
  , {
    description: "シングルサインオンの説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "クッキーを使ったシングルサインオンの場合，サーバごとの認証情報を含んだクッキーをクライアントで生成し，各サーバ上で保存，管理する。", correct: false}
      , {description: "クッキーを使ったシングルサインオンの場合，認証対象の各サーバを異なるインターネットドメインに配置する必要がある。", correct: false}
      , {description: "リパースプロキシを使ったシングルサインオンの場合，認証対象の各Webサーバを異なるインターネットドメインに配置する必要がある。", correct: false}
      , {description: "リパースプロキシを使ったシングルサインオンの場合，利用者認証においてパスワードの代わりにディジタル証明書を用いることができる。", correct: true}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "作成者によってディジタル署名された電子文書に，タイムスタンプ機関がタイムスタンプを付与した。この電子文書を公開する場合のタイムスタンプの効果のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "タイムスタンプを付与した時刻以降に，作成者が，電子文書の内容をほかの電子文書へコピーして流用することを防止する。", correct: false}
      , {description: "タイムスタンプを付与した時刻以降に，第三者が，電子文書の内容をほかの電子文書へコピーして流用することを防止する。", correct: false}
      , {description: "電子文書が，タイムスタンプの時刻以前に存在したことを示し，作成者が，電子文書の作成を否認することを防止する。", correct: true}
      , {description: "電子文書が，タイムスタンプの時刻以前に存在したことを示し，第三者が，電子文書を改ざんすることを防止する。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "FIPS 140-2を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "暗号モジュールのセキュリティ要求事項", correct: true}
      , {description: "情報セキュリティマネジメントシステムに関する認証基準", correct: false}
      , {description: "ディジタル証明書や証明書失効リストの標準仕様", correct: false}
      , {description: "無線LANセキュリティ技術", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "米国NISTが制定したAESにおける鍵長の条件はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "128ビット，192ビット，256ビットから選択する。", correct: true}
      , {description: "256ビット未満で任意に指定する。", correct: false}
      , {description: "暗号化処理単位のフロック長より32ビット長くする。", correct: false}
      , {description: "暗号化処理単位のフロック長より32ビット短くする。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "JIS Q 27001:2006における情報システムのリスクとその評価に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "脅威とは，脆弱ぜい性が顕在化する確率のことであり，情報システムに組み込まれた技術的管理策によって決まる。", correct: false}
      , {description: "脆弱性とは，情報システムに対して悪い影響を与える要因のことであり，自然災害，システム障害，人為的過失及び不正行為に大別される。", correct: false}
      , {description: "リスクの特定では，脅威が情報資産の脆弱性に付け込み，情報資産に与える影響を特定する。", correct: true}
      , {description: "リスク評価では，リスク回避とリスク低減の二つに評価を分類し，リスクの大きさを判断して対策を決める。 ", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "DMZ上に公開しているWebサーバで入力データを受け付け，内部ネットワークのDBサーバにそのデータを蓄積するシステムがある。インターネットからDMZを経由してなされるDBサーバへの不正侵入対策のーつとして，DMZと内部ネットワークとの聞にファイアウォールを設置するとき，最も有効な設定はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DBサーバの受信ポート番号を固定し，WebサーバからDBサーバの受信ポート番号への通信だけをファイアウォールで通す。", correct: true}
      , {description: "DMZからDBサーバへの通信だけをファイアウォールで通す。", correct: false}
      , {description: "Webサーバの発信ポート番号は任意のポート番号を使用し，ファイアウォールでは，いったん終了した通信と同じ発信ポート番号を使った通信を拒否する。", correct: false}
      , {description: "Webサーバの発信ポート番号を固定し，その発信ポート番号からの通信だけをファイアウォールで通す。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "ファイアウォールにおいて，自ネットワークのホストへの侵入を防止する対策のうち，IPスプーフィング（spoofing）攻撃に有効なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部から入るTCPコネクション確立要求パケットのうち，外部へのインターネットサービスの提供に必要なもの以外を阻止する。", correct: false}
      , {description: "外部から入るUDPパケットのうち，外部へのインターネットサービスの提供や利用したいインターネットサービスに必要なもの以外を阻止する。", correct: false}
      , {description: "外部から入るパケットのあて先IPアドレスが，インターネットとの直接の通信をすべきでない自ネットワークのホストのものであれば，そのパケットを阻止する。", correct: false}
      , {description: "外部から入るパケットの送信元IPアドレスが自ネットワークのものであれば，そのパケットを阻止する。", correct: true}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "SQLインジェクション攻撃を防ぐ方法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "入力から，上位ディレクトリを指定する文字列（..）を取り除く。", correct: false}
      , {description: "入力中の文字がデータベースへの問合せや操作において特別な意味をもつ文字として解釈されないようにする。", correct: true}
      , {description: "入力にHTMLタグが含まれていたら，解釈，実行できないほかの文字列に置き換える。", correct: false}
      , {description: "入力の全体の長さが制限を超えていたときは受け付けない。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "通信を要求したPCに対し，ARPの仕組みを利用して実現できる通信の可否の判定方法のうち，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "PCにインストールされているソフトウェアを確認し，登録されているソフトウェアだけがインストールされている場合に通信を許可する。", correct: false}
      , {description: "PCのMACアドレスを確認し，事前に登録されているMACアドレスをもつ場合だけ通信を許可する。", correct: true}
      , {description: "PCのOSのパッチ適用状況を確認し，最新のパッチが適用されている場合だけ通信を許可する。", correct: false}
      , {description: "PCのマルウェア対策ソフトの定義ファイルを確認し，最新になっている場合だけ通信を許可する。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "暗号方式に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "AESは公開鍵暗号方式，RSAは共通鍵暗号方式の一種である。", correct: false}
      , {description: "共通鍵暗号方式では，暗号化及び復号に使用する鍵が同一である。", correct: true}
      , {description: "公開鍵暗号方式を通信内容の秘匿に使用する場合は，暗号化鍵を秘密にして，復号鍵を公開する。", correct: false}
      , {description: "ディジタル署名に公開鍵暗号方式が使用されることはなく，共通鍵暗号方式が使用される。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "社内とインターネットの接続点にパケットフィルタリング型ファイアウォールを設置したネットワーク構成において，社内のPCからインターネット上のSMTPサーバに電子メールを送信するとき，ファイアウォールで通過許可とするTCPパケットのポート番号の組合せはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "<table class='table'><tr><td></td><td>送信元</td><td>あて先</td><td>送信元ポート番号</td><td>あて先ポート番号</td></tr><tr><td>発信</td><td>PC</td><td>SMTPサーバ</td><td>25</td><td>1024以上</td></tr><tr><td>応答</td><td>SMTPサーバ</td><td>PC</td><td>1024以上</td><td>25</td></tr></table>", correct: false}
      , {description: "<table class='table'><tr><td></td><td>送信元</td><td>あて先</td><td>送信元ポート番号</td><td>あて先ポート番号</td></tr><tr><td>発信</td><td>PC</td><td>SMTPサーバ</td><td>1024以上</td><td>25</td></tr><tr><td>応答</td><td>SMTPサーバ</td><td>PC</td><td>25</td><td>1024以上</td></tr></table>", correct: true}
      , {description: "<table class='table'><tr><td></td><td>送信元</td><td>あて先</td><td>送信元ポート番号</td><td>あて先ポート番号</td></tr><tr><td>発信</td><td>SMTPサーバ</td><td>PC</td><td>110</td><td>1024以上</td></tr><tr><td>応答</td><td>PC</td><td>SMTPサーバ</td><td>1024以上</td><td>110</td></tr></table>", correct: false}
      , {description: "<table class='table'><tr><td></td><td>送信元</td><td>あて先</td><td>送信元ポート番号</td><td>あて先ポート番号</td></tr><tr><td>発信</td><td>SMTPサーバ</td><td>PC</td><td>1024以上</td><td>110</td></tr><tr><td>応答</td><td>PC</td><td>SMTPサーバ</td><td>110</td><td>1024以上</td></tr></table>", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "送信元を詐称した電子メールを拒否するために，SPF（Sender Policy Framework）の仕組みにおいて受信側が行うことはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Resent-Sender:，Resent-From:，Sender:，From:などのメールヘッダ情報の送信者メールアドレスを基に送信メールアカウントを検証する。", correct: false}
      , {description: "SMTPが利用するポート番号25の通信を拒否する。", correct: false}
      , {description: "SMTP通信中にやり取りされるMAILFROMコマンドで与えられた送信ドメインと送信サーバのIPアドレスの適合性を検証する。", correct: true}
      , {description: "付加されたディジタル署名を受信側が検証する。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "ISP管理下の動的IPアドレスを割り当てられたPCからのスパムメール送信を防止する対策OP25Bはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "管理下の動的IPアドレスから，管理外のグローバルIPアドレスへのPOP通信を拒否する。", correct: false}
      , {description: "管理下の動的IPアドレスから，管理外のグローバルIPアドレスへのSMTP通信を拒否する。", correct: true}
      , {description: "メールサーバで，受信メールのあて先電子メールアドレスが管理外のドメインを指す場合，電子メールの受信を拒否する。", correct: false}
      , {description: "メールサーバで，スパムメール受信時に送信元の電子メールアドレスをブラックリストに登録しておき，スパムメール送信元からの電子メールの受信を拒否する。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "無線LANにおける通信の暗号化の仕組みに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "EAPは，クライアントPCとアクセスポイントとの間で，あらかじめ登録した共通鍵による暗号化通信を実現する。", correct: false}
      , {description: "ESS-IDは，クライアントPCごとの秘密鍵を定めたものであり，公開鍵暗号方式による暗号化通信を実現する。", correct: false}
      , {description: "WEPでは，クライアントPCとアクセスポイントとの問で公開鍵暗号方式による暗号化通信を実現できる。", correct: false}
      , {description: "WPA2では，IEEE802.1Xの規格に沿って機器認証を行い，動的に更新される暗号化鍵を用いて暗号化通信を実現できる。", correct: true}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "SSLの利用に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SSLで使用する個人認証用のディジタル証明書は，ICカードなどに格納できるので，格納場所を特定のPCに限定する必要はない。", correct: true}
      , {description: "SSLはWebサーバを経由した特定の利用者間の通信のために開発されたプロトコルであり，Webサーバ提供者への事前の利用者登録が不可欠である。", correct: false}
      , {description: "SSLを利用するWebサーバのディジタル証明書にはIPアドレスの組込みが必須なので，WebサーバのIPアドレスを変更する場合は，ディジタル証明書を再度取得する必要がある。", correct: false}
      , {description: "日本国内では，SSLで使用する共通鍵の長さは，128ピット未満に制限されている。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "WAF（Web Application Firewall）のブラックリスト文はホワイトリストの説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ブラックリストは，脆弱性のあるサイトのIPアドレスを登録したものであり，該当する通信を遮断する。", correct: false}
      , {description: "ブラックリストは，問題のある通信データパターンを定義したものであり，該当する通信を遮断するか又は無害化する。", correct: true}
      , {description: "ホワイトリストは，脆弱性のないサイトのFQDNを登録したものであり，該当する通信を遮断する。", correct: false}
      , {description: "ホワイトリストは問題のある送信データをどのように無害化するかを定義したものであり，該当するデータを無害化する。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "1台のサーバと複数台のクライアントが，100Mピット/秒のLANで接続されている。業務のピーク時には，クライアント1台につき1分当たり600kバイトのデータをサーバからダウンロードする。このとき，同時使用しでもピーク時に業務を滞りなく遂行できるクライアント数は何台までか。ここで，LANの伝送効率は50%，サーバ及びクライアント内の処理時間は無視できるものとし，1Mビット/秒=10^6ビット/秒，1kバイト=1,000バイトとする。"
    , multiple_answer: false
    , answers: [
      {description: "10", correct: false}
      , {description: "625", correct: true}
      , {description: "1,250", correct: false}
      , {description: "5,000", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "LANの制御方式に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CSMA/CD方式では，単位時間当たりの送出フレーム数が増していくと，衝突の頻度が増すので，スルーフットはある値をピークとして，その後下がる。", correct: true}
      , {description: "CSMA/CD方式では，一つの装置から送出されたフレームが順番に各装置に伝送されるので，リング状のLANに適している。", correct: false}
      , {description: "TDMA方式では，伝送路上におけるフレームの伝搬遅延時間による衝突が発生する。", correct: false}
      , {description: "トークンアクセス方式では，トークンの巡回によって送信権を管理しているので，トラフィックが増大すると，CSMA/CD方式に比べて伝送効率が急激に低下する。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "DNSSECの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DNSサーバへのDoS攻撃を防止できる。", correct: false}
      , {description: "IPsecによる暗号化通信が前提となっている。", correct: false}
      , {description: "代表的なDNSサーバの実装であるBINDの代替として使用する。", correct: false}
      , {description: "ディジタル署名によってDNS応答の正当性を確認できる。", correct: true}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "TCPのコネクション確立方式である3ウェイハンドシェイクを表す図はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "→SYN ←SYN+ACK →ACK", correct: true}
      , {description: "→SYN ←ACK ←SYN →ACK →SYN ←ACK", correct: false}
      , {description: "→SYN →SYN →SYN ←ACK", correct: false}
      , {description: "→SYN ←ACK →SYN ←ACK →SYN ←ACK", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "和両立である表 R（*ID，NAME），S（*NO，NAMAE）がある。差集合R-Sを求めるSELECT文とするために，aに入れるべき適切な字句はどれか。ここで，*は主キーを表す。また，NAMEとNAMAEはNULL不可とする。 " +
    "<p>SELECT * FROM R WHERE (a) <br>(SELECT * FROM S WHERE S.NO = R.ID AND S.NAMAE = R.NAME)"
    , multiple_answer: false
    , answers: [
      {description: "EXISTS", correct: false}
      , {description: "NOT EXISTS", correct: true}
      , {description: "NOT IN", correct: false}
      , {description: "R.ID NOT IN", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "ソフトウェアの保守作業の効率向上施策として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "エンドユーザによる動作確認テスト", correct: false}
      , {description: "コーディング規約に準拠したプログラムの作成", correct: true}
      , {description: "最適化コンパイルによる性能改善", correct: false}
      , {description: "発生したパグの要因分類による傾向分析", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "SOA（Service Oriented Architecture）でサービスを設計する際の注意点のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "可用性を高めるために，ステートフルなインタフェースとする。", correct: false}
      , {description: "業務からの独立性を確保するために，サービスの命名は役割を表すものとする。", correct: false}
      , {description: "業務の変化に対応しやすくするために，サービス間の関係は疎結合にする。", correct: true}
      , {description: "セキュリティを高めるために，一度開発したサービスは再利用しない方がよい。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "レプリケーションが有効な対策となるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "悪意によるデータの改ざんを防ぐ。", correct: false}
      , {description: "コンピュータウイルスによるデータの破壊を防ぐ。", correct: false}
      , {description: "災害発生時にシステムが長時間停止するのを防ぐ。", correct: true}
      , {description: "操作ミスによるデータの削除を防ぐ。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "請負契約でシステム開発を委託している案件について，委託元のシステム監査人の指摘事項に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "委託した開発案件の品質を委託元の管理者が定期的にモニタリングしている。", correct: false}
      , {description: "委託元の管理者が委託先の開発担当者を指揮命令している。", correct: true}
      , {description: "契約書に機密保持のための必要事項が盛り込まれている。", correct: false}
      , {description: "特定の委託先との契約が長期化しているので，その妥当性を確認している。", correct: false}
    ]
    , category: 'SC-H22-AUTUMN'
  }
  , {
    description: "セキュアハッシュ関数SHA-256を用いて，32ビット，256ビット，2,048ビットの三つの長さのメッセージからハッシュ値を求めたとき，それぞれのメッセージのハッシュ値の長さはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "32 256 256", correct: false}
      , {description: "32 256 2,048", correct: false}
      , {description: "256 256 256", correct: true}
      , {description: "256 256 2,048", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "XMLディジタル署名の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "XML文書中の，指定したエレメントに対して署名することができる。", correct: true}
      , {description: "エンベローピング署名（Enveloping Signature）では一つの署名対象に必ず複数の署名を付ける。", correct: false}
      , {description: "署名形式として，CMS（Cryptographic Message Syntax）を用いる。", correct: false}
      , {description: "署名対象と署名アルゴリズムをASN.1によって記述する。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "A社のWebサーバは，認証局で生成したWebサーバ用のディジタル証明書を使ってSSL/TLS通信を行っている。PCがA社のWebサーバにSSL/TLSを用いてアクセスしたとき，サーバのディジタル証明書を入手した後に，認証局の公開鍵を利用しPCが行う処理はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "暗号化通信に利用する共通鍵を生成し，認証局の公開鍵を使って暗号化する。", correct: false}
      , {description: "暗号化通信に利用する共通鍵を認証局の公開鍵を使って復号する。", correct: false}
      , {description: "ディジタル証明書の正当性を認証局の公開鍵を使って検証する。", correct: true}
      , {description: "利用者が入力，送付する秘匿データを認証局の公開鍵を使って暗号化する。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "S/KEYワンタイムパスワードに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "クライアントは認証要求のたびに，サーバへシーケンス番号と種（Seed）からなるチャレンジデータを送信する。", correct: false}
      , {description: "サーバはクライアントから送られた使い捨てパスワードを演算し，サーバで記憶している前回の使い捨てパスワードと比較することによって，クライアントを認証する。", correct: true}
      , {description: "時刻情報を基にパスワードを生成し，クライアント，サーバ間でパスワードを時刻で同期させる。", correct: false}
      , {description: "利用者が設定したパスフレーズは 1回ごとに使い捨てる。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "100人の送受信者が共通鍵暗号方式で，それぞれ秘密に通信を行うときに必要な共通鍵の総数は幾つか。"
    , multiple_answer: false
    , answers: [
      {description: "200", correct: false}
      , {description: "4,950", correct: true}
      , {description: "9,900", correct: false}
      , {description: "10,000", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "情報漏えいに関するリスク対応のうち，リスク回避に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部の者が侵入できないように，入退室をより厳重に管理する。", correct: false}
      , {description: "情報資産を外部のデータセンタに預託する。", correct: false}
      , {description: "情報の重要性と対策費用を勘案し，あえて対策をとらない。", correct: false}
      , {description: "データの安易な作成を禁止し，不要なデータを消去する。", correct: true}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "経済産業省告示の“ソフトウェア等脆弱性関連＂情報取扱基準＂におけるWebアプリケーションに関する脆弱性関連情報の適切な取扱いはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Webアプリケーションの脆弱性についての情報を受けた受付機関は，発見者の氏名・連絡先をWebサイト運営者に通知する。", correct: false}
      , {description: "Webアプリケーションの脆弱性についての通知を受けたWebサイト運営者は，当該脆弱性に起因する個人情報の漏えいなどが発生した場合，事実関係を公表しない。", correct: false}
      , {description: "受付機関は，Webサイト運営者からWebアプリケーションの脆弱性が修正されたという通知を受けたら，それを速やかに発見者に通知する。", correct: true}
      , {description: "受付機関は，一般利用者に不安を与えないために，Webアプリケーションの脆弱性関連情報の届出状況は，受付機関の中で管理し，公表しない。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "DNSサーバに格納されるネットワーク情報のうち，第三者に公開する必要のない情報が攻撃に利用されることを防止するための，プライマリDNSサーバの設定はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SOAレコードのシリアル番号を更新する。", correct: false}
      , {description: "外部のDNSサーバにリソースレコードがキャッシュされる時間を短く設定する。", correct: false}
      , {description: "ゾーン転送を許可するDNSサーバを登録する。", correct: true}
      , {description: "ラウンドロビン設定を行う。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "ワームの侵入に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "公開サーバへのワームの侵入は，IDSでは検知できない。", correct: false}
      , {description: "未知のワームの侵入は，パターンマッチング方式で検知できる。", correct: false}
      , {description: "ワームは，アプリケーションソフトの脆弱性を突いて侵入できる。", correct: true}
      , {description: "ワームは，仮想OS環境内のゲストOSに侵入できない。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "ステガノグラフィを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "データの複写を不可能にする（コピーできないようにする）技術のことをいう。", correct: false}
      , {description: "データを第三者に盗み見られでも解読できないようにするため，決まった規則に従ってデータを変換することをいう。", correct: false}
      , {description: "文書の正当性を保証するために付けられる暗号化された署名情報のことをいう。", correct: false}
      , {description: "メッセージを画像データや音声データなどに埋め込み，その存在を隠す技術のことをいう。", correct: true}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "DMZ上のコンピュータがインターネットからのpingに応答しないようにファイアウォールのセキュリティルールを定めるとき，＂通過禁止＂に設定するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ICMP", correct: true}
      , {description: "TCP及びUDPのポート番号53", correct: false}
      , {description: "TCPのポート番号21", correct: false}
      , {description: "UDPのポート番号123", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "ダウンローダ型ウイルスがPCに侵入した場合に，インターネット経路でほかのウイルスがダウンロードされることを防ぐ有効な対策はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "URLフィルタを用いてインターネット上の不正Webサイトへの接続を遮断する。", correct: true}
      , {description: "インターネットから内部ネットワークに向けた要求パケットによる不正侵入行為をIPSで破棄する。", correct: false}
      , {description: "スパムメール対策サーバでインターネットからのスパムメールを拒否する。", correct: false}
      , {description: "メールフィルタで他サイトへの不正メール発信を遮断する。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "ディジタル証明書を使わずに，通信者同士が，通信によって交換する公開鍵を用いて行う暗号化通信において，通信内容を横取りする目的で当事者になりすますものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Man-in-the-middle攻撃", correct: true}
      , {description: "wardriving", correct: false}
      , {description: "トロイの木馬", correct: false}
      , {description: "ブルートフォース攻撃", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "スパムメールの対策であるDKIM（Domain Keys Identified Mail）の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "送信側メールサーバでディジタル署名を電子メールのヘッダに付与して，受信側メールサーバで検証する。", correct: true}
      , {description: "送信側メールサーバで利用者が認証されたとき，電子メールの送信が許可される。", correct: false}
      , {description: "電子メールのヘッダや配送経路の情報から得られる送信元情報を用いて，メール送信元のIPアドレスを検証する。", correct: false}
      , {description: "ネットワーク機器で，内部ネットワークから外部のメールサーバのTCPポート25番への直接の通信を禁止する。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "SMTP-AUTHを使ったメールセキュリティ対策はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ISP管理下の動的IPアドレスからの電子メール送信について，管理外ネットワークのメールサーバへSMTP通信を禁止する。", correct: false}
      , {description: "PCからの電子メール送信について，POP接続で利用者認証済の場合にだけ許可する。", correct: false}
      , {description: "通常のSMTPとは独立したサプミッショ-ンポートを使用して，メールサーバ接続時の認証を行う。", correct: true}
      , {description: "電子メール送信元のサーバについてDNSの逆引きが成功した場合にだけ，電子メール受信を許可する。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "セキュリティプロトコルSSL/TLSの機能はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "FTPなどの様々なアプリケーションに利用されて，アプリケーション層とトランスポート層（TCP）との間で暗号化する。", correct: true}
      , {description: "MIMEをベースとして，電子署名とメッセージの暗号化によって電子メールのセキュリティを強化する。", correct: false}
      , {description: "PPTPとL2Fが統合された仕様で，PPPをトンネリングする。", correct: false}
      , {description: "特定のアプリケーションの通信だけではなく，あらゆるIPパケットをIP層で暗号化する。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "IPsecに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IKEはIPsecの鍵交換のためのプロトコルであり，ポート番号80が使用される。", correct: false}
      , {description: "鍵交換プロトコルとして，HMAC-MD5が使用される。", correct: false}
      , {description: "トンネルモードを使用すると，元のヘッダまで含めて暗号化される。", correct: true}
      , {description: "ホストAとホストBとの間でIPsecによる通信を行う場合，認証や暗号化アルゴリズムを両者で決めるためにESPヘッダではなくAHヘッダを使用する。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "図のような2台のレイヤ2スイッチ，1台のルータ，4台の端末からなるIPネットワークで，端末Aから端末Cに通信を行う際に，送付されるパケットのあて先IPアドレスである端末CのIPアドレスと，端末CのMACアドレスとを対応付けるのはどの機器か。ここで，ルータZにおいてプロキシARPは設定されていないものとする。" +
    "ルータZ<br>" +
    "├レイヤ2スイッチX<br>" +
    "│　├端末A<br>" +
    "│　└端末B<br>" +
    "└レイヤ2スイッチY<br>" +
    "　 ├端末C<br>" +
    " 　└端末D"
    , multiple_answer: false
    , answers: [
      {description: "端末A", correct: false}
      , {description: "ルータZ", correct: true}
      , {description: "レイヤ2スイッチX", correct: false}
      , {description: "レイヤ2スイッチY", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "インターネットで電子メールを送信するとき，メッセージの本文の暗号化に共通鍵暗号方式を用い，共通鍵の受渡しには公開鍵暗号方式を用いるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "AES", correct: false}
      , {description: "IPsec", correct: false}
      , {description: "MIME", correct: false}
      , {description: "S/MIME", correct: true}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "192.168.1.0/24のネットワークアドレスを，16個のサブネットに分割したときのサブネットマスクはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "255.255.255.192", correct: false}
      , {description: "255.255.255.224", correct: false}
      , {description: "255.255.255.240", correct: true}
      , {description: "255.255.255.248", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "データマイニングツールに関する記述として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業内で発生する情報を主題ごとに時系列で蓄積することによって，既存の情報システムだけでは得られない情報を提供する。", correct: false}
      , {description: "集計データを迅速かつ容易に表示するなど，利用者に対して様々な情報分析機能を提供する。", correct: false}
      , {description: "大量に蓄積されたデータに対して統計処理などを行い，法則性の発見を支援する。", correct: true}
      , {description: "利用者が情報を利用するための目的別データベースであり，あらかじめ集計処理などを施しておくことによって検索時間を短縮する。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "次のクラス図におけるクラス問の関係の説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "＂パス＂，＂トラック＂などのクラスが＂自動車＂クラスの定義を引き継ぐことを，インスタンスという。", correct: false}
      , {description: "＂パス＂，＂トラック＂などのクラスの共通部分を抽出し＂自動車＂クラスとして定義することを，汎化という。", correct: true}
      , {description: "＂パス＂，＂トラック＂などのクラスは，＂自動車＂クラスに対するオブジェクトという。", correct: false}
      , {description: "＂パス＂，＂トラック＂などのそれぞれのクラスの違いを＂自動車＂クラスとして定義することを，特化という。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "SOA（Service Oriented Architecture）の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Webサービスを利用するためのインタフェースやプロトコルを規定したものである。", correct: false}
      , {description: "XMLを利用して，インターネット上に存在するWebサービスを検索できる仕組みである。", correct: false}
      , {description: "業務機能を提供するサービスを組み合わせることによって，システムを構築する考え方である。", correct: true}
      , {description: "サービス提供者と委託者との間でサービスの内容，範囲及び品質に対する要求水 準を明確にして，あらかじめ合意を得ておくことである。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "情報システムの設計において，フェールソフトが講じられているのはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "UPS装置を設置することで，停電時に手順どおりにシステムを停止できるようにし，データを保全する。", correct: false}
      , {description: "制御プログラムの障害時に，システムの暴走を避け，安全に運転を停止できるようにする。", correct: false}
      , {description: "ハードウェアの障害時に，パフォーマンスは低下するが，構成を縮小して運転を続けられるようにする。", correct: true}
      , {description: "利用者の誤操作や誤入力を未然に防ぐことで，システムの誤動作を防止できるようにする。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "＂情報セキュリティ監査基準＂の位置付けはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査人が情報資産の監査を行う際に判断の尺度として用いるべき基準であり，監査人の規範である。", correct: false}
      , {description: "情報資産を保護するためのベストプラクティスをまとめたものであり，監査マニュアル作成の手引書である。", correct: false}
      , {description: "情報セキュリティ監査業務の品質を確保し，有効かつ効率的に監査を実施することを目的とした監査人の行為規範である。", correct: true}
      , {description: "組織体が効果的な情報セキュリティマネジメント体制を構築し，適切なコントロールを整備，運用するための実践規範である。", correct: false}
    ]
    , category: 'SC-H22-SPRING'
  }
  , {
    description: "ITサービスマネジメントにおけるインシデント及びサービス要求管理プロセスと問題管理プロセスとのインタフェースに関する要件のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデント及びサービス要求管理プロセスでは，インシデント解決の進捗状況を問題管理プロセスに伝えなければならない。", correct: false}
      , {description: "インシデント及びサービス要求管理プロセスでは，インシデントの根本原因を調査して，その結果を問題管理プロセスに伝えなければならない。", correct: false}
      , {description: "問題管理プロセスでは，既知の誤り及び問題解決策に関する最新の情報を，インシデント及びサービス要求管理プロセスに提供しなければならない。", correct: true}
      , {description: "問題管理プロセスでは，問題の根本原因を正すために要求される変更を，インシデント及びサービス要求管理プロセスに伝えなければならない。", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "JIS Q 20000-1において，サービスレベル管理は，サービスマネジメントシステム(SMS)を構成するどのプロセスに属するか。"
    , multiple_answer: false
    , answers: [
      {description: "解決プロセス", correct: false}
      , {description: "関係プロセス", correct: false}
      , {description: "サービス提供プロセス", correct: true}
      , {description: "統合的制御プロセス", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "ITILにおいて，良い目標値を設定するための条件として\"SMART\"がある.\"S\"はSpecific(具体的).\"M\"はMeasurable(測定可能).\"R\"はRelevant(適切).\"T\"はTime-bound(適時)の頭文字である。\"A\"は何の頭文字か。"
    , multiple_answer: false
    , answers: [
      {description: "Achievable (達成可能)", correct: true}
      , {description: "Analyzable (分析可能)", correct: false}
      , {description: "Ambitious (意欲的)", correct: false}
      , {description: "Auditable (監査可能)", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "\"ITサービスが必要とされるときに，合意した条件の下で要求された機能を果たせる状態にある能力\"について，定義し，分析し，計画し，測定し，改善する活動を行うITILの管理プロセスはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービス継続性管理", correct: false}
      , {description: "インシデント管理", correct: false}
      , {description: "可用性管理", correct: true}
      , {description: "問題管理", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "サービスレベル管理における運用レベル合意書(OLA)はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SLAを実現するために，サービス提供者が同じ組織内の内部グループとの問で取り交わす合意書", correct: true}
      , {description: "SLAを実現するために，サービス提供者が供給者との間で取り交わす契約書", correct: false}
      , {description: "サービス提供者が顧客に提出する， SLAの達成状況や未達成事項をまとめた文書", correct: false}
      , {description: "サービスレベルに関して，サービス提供者が顧客との間で取り交わす合意書", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおいて，災害による重大なサービス停止に関する事業影響度分析は，どのプロセスで実施するか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデント及びサービス要求管理", correct: false}
      , {description: "サービス継続及び可用性管理", correct: true}
      , {description: "サービスレベル管理", correct: false}
      , {description: "問題管理", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおける変更要求に対する活動のうち，リリース及び展開管理プロセスに含まれるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "稼働環境に展開される変更された構成品目(CI)の集合の構築", correct: true}
      , {description: "変更の影響を受ける構成品目(cI)の識別", correct: false}
      , {description: "変更要求(RFC) の記録", correct: false}
      , {description: "変更要求を評価するための変更諮問委員会(CAB) の召集", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおいて，構成ベースラインを確立することによって可能になることはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスの存続期間を通したパフォーマンスの変化の測定", correct: false}
      , {description: "インシデントが発生したときの問題管理プロセスでの状況証拠の分析", correct: false}
      , {description: "構成監査及び切り戻しのための基準の提供", correct: true}
      , {description: "サービスを機能させるために必要な最低限の利用可能レベルの定義", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "ITILにおいて，インシデントに対する一連の活動のうち，イベント管理プロセスが分担する活動はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデントの発生後に，インシデントの原因などをエラーレコードとして記録する。", correct: false}
      , {description: "インシデントの発生後に，問題の根本原因を分析して記録する。", correct: false}
      , {description: "インシデントの発生時に，ITサービスを迅速に復旧するための対策を講じる。", correct: false}
      , {description: "インシデントの発生を検出して，関連するプロセスに通知する。", correct: true}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "ITILで定義されるサービスのライフサイクルにおけるサービストランジション段階の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "規定された要件と制約に沿って，サービスを運用に移行し，確実に稼働させることである。", correct: true}
      , {description: "サービスの効率，有効性，費用対効果の観点で運用状況を継続的に測定し，改善していくことである。", correct: false}
      , {description: "サービスの内容を具体的に決めることである。", correct: false}
      , {description: "戦略的資産として，どのようにサービスマネジメントを設計，開発，導入するかについての手引を提供することである。", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "バックアップサイトの説明のうち，ウォームスタンバイの説明として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "同じようなシステムを運用する外部の企業や組織と協定を結び，緊急時には互いのシステムを貸し借りして，サービスを復旧する。", correct: false}
      , {description: "緊急時にバックアップシステムを持ち込んでシステムを再開し，サービスを復旧する。", correct: false}
      , {description: "別の場所に常にデータの同期が取れているバックアップシステムを用意しておき，緊急時にバックアップシステムに切り換えて直ちにサービスを復旧する。", correct: false}
      , {description: "別の場所にバックアップシステムを用意しておき，緊急時にバックアップシステムを起動してデータを最新状態にする処理を行った後にサービスを復旧する。", correct: true}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "データベースのロールバック処理の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ログの更新後情報を用いて， トランザクション開始後の障害直前の状態にまでデータを復元させる。", correct: false}
      , {description: "ログの更新後情報を用いて， トランザクション開始直前の状態にまでデータを復元させる。", correct: false}
      , {description: "ログの更新前情報を用いて， トランザクション開始後の障害直前の状態にまでデータを復元させる。", correct: false}
      , {description: "ログの更新前情報を用いて， トランザクション開始直前の状態にまでデータを復元させる。", correct: true}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "\"24時間365日\"の有人オペレーションサービスを提供する。シフト勤務の条件が次のとき，オペレータは最少で何人必要か。<br/>" +
"〔条件〕<br/>" +
"(1) 1日に3シフトの交代勤務とする。<br/>" +
"(2) 各シフトで勤務するオペレータは2人以上とする。<br/>" +
"(3) 各オペレータの勤務回数は7日間当たり5回以内とする。<br/>"
    , multiple_answer: false
    , answers: [
      {description: "8", correct: false}
      , {description: "9", correct: true}
      , {description: "10", correct: false}
      , {description: "16", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "情報セキュリティに関する従業員の責任について，\"情報セキュリティ管理基準\"に基づいて監査を行った。指摘事項に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "雇用の終了をもって守秘責任が解消されることが，雇用契約に定められている。", correct: true}
      , {description: "定められた勤務時間以外においても守秘責任を負うことが，雇用契約に定められている。", correct: false}
      , {description: "定められた守秘責任を果たさなかった場合，相応の措置がとられることが，雇用契約に定められている。", correct: false}
      , {description: "定められた内容の守秘義務契約書に署名することが，雇用契約に定められている。", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "データ管理者(DA)とデータベース管理者(DBA) を別々に任命した場合のDAの役割として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "業務データ量の増加傾向を把握し，ディスク装置の増設などを計画して実施する。", correct: false}
      , {description: "システム開発の設計工程では，主に論理データベース設計を行い，データ項目を管理して標準化する。", correct: true}
      , {description: "システム開発のテスト工程では，主にパフォーマンスチューニングを担当する。", correct: false}
      , {description: "システム障害が発生した場合には，データの復旧や整合性のチェックなどを行う。", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "プロジェクトの進捗管理をEVM(Earned Value Management) で行っている。コストが超過せず，納期にも遅れないと予想されるプロジェクトはどれか。ここで，それぞれのプロジェクトの開発の生産性は現在までと変わらないものとする。<br/><br/>" +
    "<img src = \"js/data/image/H26_q16.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ア", correct: false}
      , {description: "イ", correct: false}
      , {description: "ウ", correct: true}
      , {description: "エ", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "プロジェクト管理で使用する分析技法のうち，傾向分析の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "個々の選択肢とそれぞれを選択した場合に想定されるシナリオの関係を図に表し，それぞれのシナリオにおける期待値を計算して，最善の策を選択する。", correct: false}
      , {description: "個々のリスクが現実のものとなったときの，プロジェクトの目標に与える影響の度合いを調べる。", correct: false}
      , {description: "時間の経過に伴うプロジェクトのパフォーマンスの変動を検討する。", correct: true}
      , {description: "発生した障害とその要因の関係を魚の骨のような図にして分析する。", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "プロジェクトのリスクを，デルファイ法を利用して抽出しているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ステークホルダや経験豊富なプロジェクトマネージャといった専門家にインタビューし，回答を収集してリスクとしてまとめる。", correct: false}
      , {description: "複数のお互いに関係のないステークホルダやプロジェクトマネージャにアンケートを行い，その結果を要約する。さらに，要約結果を用いてアンケートを行い，結果を要約することを繰り返してリスクをまとめる。", correct: true}
      , {description: "プロジェクトチームのメンバにPMOのメンバやステークホルダを複数名加え，一堂に会して会議をし，リスクに対する意見を出し合い，進行役がリスクとしてまとめる。", correct: false}
      , {description: "プロジェクトを強み，弱み，好機，脅威のそれぞれの観点及びその組合せで分析し，リスクをまとめる。", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "パイプラインハザード対策に関する記述のうち，アウトオブオーダ実行方式を用いたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "演算に必要なデータがそろうまで実行が待たされている命令によって，後続の命令の実行が待たされることを防ぐために，既にデータがそろっている後続の命令があれば，それを先に実行する。", correct: true}
      , {description: "条件分岐命令の判定結果が分かるまで分岐後の命令実行が待たされることを防ぐために，分岐する確率が高い方の命令を先読みして実行する。", correct: false}
      , {description: "前の命令の演算結果がレジスタに書き込まれるまで次の命令の実行が待たされることを防ぐために，プロセッサ内にバイパス経路を設け，演算結果を演算器に直接入力して次の命令を実行する。", correct: false}
      , {description: "レジスタへのアクセスが競合して後続の命令の実行が待たされることを防ぐために，クロックサイクルを細分化し，サイクル前半を書込み，後半を読出しとすることで競合なく命令を実行する。", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "二つのシステムの信頼性評価指標の関係に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "稼働率が等しければ， MTBFも等しい。", correct: false}
      , {description: "稼働率が等しければ， MTTRも等しい。", correct: false}
      , {description: "故障発生率が等しければ， MTBFも等しい。", correct: true}
      , {description: "故障発生率が等しければ， MTTRも等しい。", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "トランザクションA～Dに関する待ちグラフのうち，テッドロックが発生しているものはどれか。ここで，待ちグラフの矢印は，X→Yのとき，トランザクションXはトランザクションYがロックしている資源のアンロックを待っていることを表す。<br/>" +
    "<img src = \"js/data/image/h26_q21.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ア", correct: false}
      , {description: "イ", correct: true}
      , {description: "ウ", correct: false}
      , {description: "エ", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "図は，組織内のTCP/lPネットワークにあるクライアントが，プロキシサーバ，ルータ，インターネットを経由して組織外のWebサーバを利用するときの経路を示している。この通信のTCPコネクションが設定される場所はどれか。<br/>" +
    "<img src = \"js/data/image/H26_q22.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "クライアントとWebサーバの間，クライアントとプロキシサーバの間", correct: false}
      , {description: "クライアントとプロキシサーバの問，プロキシサーバとWebサーバの間", correct: true}
      , {description: "クライアントとプロキシサーバの間，プロキシサーバとルータの間，ルータとWebサーバの問", correct: false}
      , {description: "クライアントとルータの問，ルータとWebサーバの間", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "シングルサインオンの実装方式の特徴のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "クッキーを使ったシングルサインオンの場合，サーバごとの認証情報を含んだクツキーをクライアントで生成し，各サーバ上で保存，管理する。", correct: false}
      , {description: "クッキーを使ったシングルサインオンの場合，認証対象のサーバを，異なるインターネットドメインに配置する必要がある。", correct: false}
      , {description: "リバースプロキシを使ったシングルサインオンの場合，認証対象のWebサーバを，異なるインターネットドメインに配置する必要がある。", correct: false}
      , {description: "リバースプロキシを使ったシングルサインオンの場合，利用者認証においてパスワードの代わりにディジタル証明書を用いることができる。", correct: true}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "NISTの定義によるクラウドコンピューティングのサービスモデルにおいて，パブリッククラウドサービスの利用企業のシステム管理者が，仮想サーバのゲストOSに関わる設定作業及びセキュリティパッチ管理作業を実施可かどうかの組合せのうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IaaS=実施可、PaaS=実施可、Saas=実施不可", correct: false}
      , {description: "IaaS=実施可、PaaS=実施不可、Saas=実施不可", correct: true}
      , {description: "IaaS=実施不可、PaaS=実施可、Saas=実施不可", correct: false}
      , {description: "IaaS=実施不可、PaaS=実施不可、Saas=実施可", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  , {
    description: "刑法の包子計算機使用詐欺罪が適用される違法行為はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "いわゆるねずみ誘方式による取引形態のWebページを開設する。", correct: false}
      , {description: "インターネット上に，実際よりも良品と誤認させる商品カタログを掲載し，粗悪な商品を販売する。", correct: false}
      , {description: "インターネットを経由して銀行のシステムに虚偽の情報を与え，不正な振込や送金をさせる。", correct: true}
      , {description: "企業のWebページを不正な手段で改変し，その企業の信用を傷つける情報を流す。", correct: false}
    ]
    , category: 'SM-H26-AUTUMN'
  }
  ,   {
    description: "ITILのサービスストラテジ段階で管理するサービスポートフォリオの構成要素のうち，サービスパイプラインに収録されるサービスはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "開発が完了し，顧客に提供することが可能なサービス", correct: false}
      , {description: "今後，段階的に停止されたり，取り消されたりするサービス", correct: false}
      , {description: "サービスオペレーション段階で実行されているサービス", correct: false}
      , {description: "将来提供する予定である開発中のサービス", correct: true}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "JIS Q 20000-1の関係プロセスの規定における，供給者，サービス提供者及び顧客の3者の関係のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "供給者，サービス提供者及び顧客は，それぞれ別々の組織(外部)に所属する。", correct: false}
      , {description: "供給者のサービスも含めて，サービス提供者が，顧客にサービスを提供する。", correct: true}
      , {description: "供給者は，サービス提供者を顧客とみなしてサービスを提供することはない。", correct: false}
      , {description: "供給者はサービス提供者からサービスや製品を受領して，顧客に提供する。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントのプロセスの一つである構成管理を導入することによって得られるメリットはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITリソースに対する，現在の需要の把握と将来の需要の予測ができる。", correct: false}
      , {description: "緊急事態時でも最低限のITサービス基盤を提供することによって，事業の継続が可能になる。", correct: false}
      , {description: "構成品目の情報を正確に把握することによって，他のプロセスの確実な実施を支援できる。", correct: true}
      , {description: "適正な費用で常に一定した品質でのITサービスが提供されるようになる。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "オンラインシステムの性能監視における注意事項のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "OSやネットワークなどの複数の測定項目を定常的に監視する。", correct: true}
      , {description: "オンライン時間帯に性能を測定することはサービスレベルの低下につながるので，測定はオフライン時間帯に行う。", correct: false}
      , {description: "性能データのうちの一定期間内の最大値だけに着目し，管理の限界を逸脱しているかどうかを確認する。", correct: false}
      , {description: "性能を測定する間隔は短いほど良い。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "レプリケーションが有効な対策となるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "悪意によるデータの改ざんを防ぐ。", correct: false}
      , {description: "コンピュータウイルスによるデータの破壊を防ぐ。", correct: false}
      , {description: "災害発生時にシステムが長時間停止するのを防ぐ。", correct: true}
      , {description: "操作ミスによるデータの削除を防ぐ。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "システムが障害によって停止したときに行う，システム再開の方法の一つであるウォームスタートの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "システムの再立上げの過程で，システム停止時に処理中であったジョブのうち，処理の続行が可能なものは処理を再開させ，入出力キューに残っているものは，そのまま処理の対象とする。", correct: true}
      , {description: "システムの初期化のために，イニシャルプログラムローダによってコンフィギュレーション情報を主記憶装置上に展開する。", correct: false}
      , {description: "システムの停止で処理が中断したジョブについて，それまでに採取されたチェックポイント情報によって回復作業を実施する。", correct: false}
      , {description: "ジャーナルファイルに記録されているデータを使用して，ファイルを障害発生以前の状態に戻す。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ITILによれば，インシデントの階層的エスカレーションに該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "現在の担当者では解決できなかったインシデントの対応を，高度な専門知識をもつサポートグループに委ねる。", correct: false}
      , {description: "現在の担当者では解決できなかったインシデントの対応を，広範にわたる関係者を招集する権限をもつ上級マネージャに委ねる。", correct: true}
      , {description: "自分のシフト勤務時間内に完了しなかったインシデントの対応を，次のシフト勤務者に委ねる。", correct: false}
      , {description: "中央サービスデスクで受け付けたインシデントの対応を，利用者が属する地域のローカルサービスデスクに委ねる。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ITILのインシデント管理の方針において，インシデントモデルを定義しておくことによって得られるメリットはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデント管理プロセス及びその運用の効率性と有効性を判断するための基準を明確にすることができる。", correct: false}
      , {description: "過去のインシデントについて，履歴，カテゴリ，及び解決するために取られた処置を容易に参照することができる。", correct: false}
      , {description: "繰り返し発生するインシデントを，事前に定義した経路で，事前に定義した期間内に処理することができる。", correct: true}
      , {description: "根本原因が判明していない問題に対する解決策を提供することができる。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ITILのITサービス継続性管理の達成目標に関する説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "災害が起こった後，一定期間内にシステムを復旧し，事業を継続させる。", correct: true}
      , {description: "災害だけでなく，インシデントも含めた対策を実施する。", correct: false}
      , {description: "災害によって被害を被った情報システムの構成を修復する。", correct: false}
      , {description: "災害の発生を予測したプロアクティプな予防措置よりも，事後の復旧に重点を置く。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ITILによれば，既存及び新規の全てのサービスに対してビジネスインパクト分析を行うことを役割とするマネージャはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービス継続性管理プロセス・マネージャ", correct: true}
      , {description: "可用性管理プロセス・マネージャ", correct: false}
      , {description: "キャパシティ管理プロセス・マネージャ", correct: false}
      , {description: "サービスレベル管理プロセス・マネージャ", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ITサービスマネジメン卜におけるサービスレベル管理プロセスの活動はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスの提供に必要な予算に対して，適切な資金を確保する。", correct: false}
      , {description: "現在のリソースの調整と最適化，及び将来のリソース要件に関する予測を記載した計画を作成する。", correct: false}
      , {description: "災害や障害などで事業が中断しても，要求されたサービス機能を合意された期間内に確実に復旧できるように，事業影響度の評価や復旧優先順位を明確にする。", correct: false}
      , {description: "提供するITサービス及びサービス目標を特定し，サービス提供者が顧客との問で合意文書を交わす。", correct: true}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "JIS Q 20000-1におけるサービス継続及び可用性管理プロセスで行う活動はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデント及び問題の影響を識別し，これを最小限に抑える，又は回避するための手順を採用する。", correct: false}
      , {description: "サービス全体の可用性などの要求事項を，事業計画，SLA及びリスクを考慮して特定する。", correct: true}
      , {description: "サービスの容量・能力を監視し，サービスのパフォーマンスを調整して，かつ，適切な容量・能力を提供するための方法，手順及び技法を明確にする。", correct: false}
      , {description: "提供する個々のサービスを定義し，これに合意して，かつ，文書化する。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "サービス提供時間帯が毎日6～20 時のシステムにおいて， ある月の停止時間，修復時間及びシステムメンテナンス時間は次のとおりであった。このとき，この月の可用性は何%か。ここで. 1か月の稼働回数は30日，可用性(%)は小数第2位を四捨五入するものとする。<br><br>" +
    "〔停止時間，修復時間及びシステムメンテナンス時間〕<br>" +
"・システム障害によるサービス提供時間内の停止時間：7時間<br>" +
"・システム障害によるサービス提供時間外の修復時間：3時間<br>" +
".サービス提供時間外のシステムメンテナンス時間：8時間"
    , multiple_answer: false
    , answers: [
      {description: "95.7", correct: false}
      , {description: "97.6", correct: false}
      , {description: "98.3", correct: true}
      , {description: "99.0", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ITILにおいて，可用性管理のリアクティブな活動で用いる技法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "故障樹解析", correct: false}
      , {description: "コンポーネント障害インパクト分析", correct: false}
      , {description: "サービス障害分析", correct: true}
      , {description: "単一障害点分析", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントの情報セキュリテイ管理プロセスに対して，JIS Q 20000-1が要求している事項はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "潜在的な問題を低減させるために，予防処置を取らなければならない。", correct: false}
      , {description: "ディジタルの構成品目の原本を，物理的又は電子的にセキュリティが保たれた書庫で管理しなければならない。", correct: false}
      , {description: "変更要求が情報セキュリティ基本方針及び管理策に与える影響を評価しなければならない。", correct: true}
      , {description: "変更要求の受入れについての意思決定では， リスク，事業利益及び技術的実現可能性を考慮しなければならない。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "システムの本番移行に支障を来すリスクに対するコントロールを監査するチェックポイントはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "システム運用段階で新システムの稼働状況がレビューされ，その結果についてシステム開発部門及びユーザ部門の責任者の承認が得られているか。", correct: false}
      , {description: "システム開発段階で抽出された問題への対策が，移行後のシステム改善計画に反映されているか。", correct: false}
      , {description: "システム企画段階で，システムの投資対効果が評価されているか。", correct: false}
      , {description: "ユーザ部門を含めた各部門の役割と責任を明確にした移行計画が作成されているか。", correct: true}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "工程別の生産性が次のとおりのとき，全体の生産性を表す式はどれか。<br><br>" +
"〔工程別の生産性〕<br>" +
"設計工程:Xステップ/人月<br>" +
"製造工程・Yステップ/人月<br>" +
"試験工程Zステップ/人月"
    , multiple_answer: false
    , answers: [
      {description: "X+Y+Z", correct: false}
      , {description: "(X+Y+Z)/3", correct: false}
      , {description: "1/X+1/Y+1/Z", correct: false}
      , {description: "1/(1/X+1/Y+1/Z)", correct: true}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "システムを開発するときの進捗管理と費用管理を同時に行うために， トレンドチャートを用いる。マイルストーンの予定の位置から実績の位置に結んだ矢印が垂直に下に向かっているときの進捗と費用に関する状況説明のうち，適切なものはどれか。<br>" +
    "<img src = \"js/data/image/H25_q18.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "進捗が予定どおりで，費用が予算を下回っている。", correct: true}
      , {description: "進捗が予定どおりで，費用が予算を超過している。", correct: false}
      , {description: "進捗が予定より遅れ，費用が予算を超過している。", correct: false}
      , {description: "進捗が予定より進み，費用が予算を下回っている。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "期間10日のプロジェクトを，5日目の終了時にアーンドバリュ一分析したところ，表のとおりであった。現在のコスト効率が今後も続く場合，完成時総コスト見積り(EAC)は何万円か。<br><br>" +
    "<table class='table table-bordered' style='width:40%'>" +
    "<tr><th>管理項目</th><th>金額（万円）</th></tr>" +
    "<tr><td>完成時総予算（BAC）</td><td>100</td>" +
    "<tr><td>プランドバリュー（PV）</td><td>50</td>" +
    "<tr><td>アーンドバリュー（EV）</td><td>40</td>" +
    "<tr><td>実コスト（AC）</td><td>60</td>" +
    "</table>"
    , multiple_answer: false
    , answers: [
      {description: "110", correct: false}
      , {description: "120", correct: false}
      , {description: "135", correct: false}
      , {description: "150", correct: true}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "プロセッサの省電力技術の一つであるパワーゲーティングの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "仕事量に応じて，プロセッサへ供給する電源電圧やクロック周波数を変える。", correct: false}
      , {description: "動作していない回路ブロックへのクロック供給を停止する。", correct: false}
      , {description: "動作していない回路ブロックへの電源供給を遮断する。", correct: true}
      , {description: "マルチコアプロセッサにおいて，使用しないコアの消費電力枠を，動作しているコアに割り当てる。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ソフトウェアの安全対策の考え方のうち，アフォーダンスに関する記述はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "機能や使い方が直感的に分かるように，コントロールパネルのボタンなどの形，色や配置を工夫することによって，誤操作を低減する。", correct: true}
      , {description: "故障による被害を最小限にとどめるように，ファイルの自動パックアップを行う機能をもたせる。", correct: false}
      , {description: "セキュリティ面の保護を複数の手段で講じて，多層で防御する機能をもたせる。", correct: false}
      , {description: "利用者が操作や入力値を誤った場合でも危険な状態が発生しないようにする。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "関係データベースのビューに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ビューの元の表に新たな列を追加するときは，既存のビューにも影響が出るので，ビューを再定義する必要がある。", correct: false}
      , {description: "ビューの列は，元の表の列名と異なる名称で定義することができる。", correct: true}
      , {description: "ビューは，元の表から指定した列を抜き出すように定義するものであり，指定条件を満たす行を抜き出すように定義することはできない。", correct: false}
      , {description: "二つ以上の表の結合によって定義されたビューは，いつでも更新操作が可能である。", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "磁気ディスク装置や磁気テープ装置などのストレージ(補助記憶装置)を，通常のLANとは別の高速な専用ネットワークで構成する方式はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DAFS", correct: false}
      , {description: "DAS", correct: false}
      , {description: "NAS", correct: false}
      , {description: "SAN", correct: true}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "ISO 22301:2012が要求事項を規定している対象はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスマネジメントシステム", correct: false}
      , {description: "個人情報保護マネジメントシステム", correct: false}
      , {description: "事業継続マネジメントシステム", correct: true}
      , {description: "情報セキュリティマネジメントシステム", correct: false}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "派遣労働者の受入れに関する記述のうち，派遣先責任者の役割，立場として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "派遣先責任者は，派遣先管理台帳の管理，派遣労働者から申出を受けた苦情への対応，派遣元事業主との連絡調整，派遣労働者の人事記録と考課などの任務を行わなければならない。", correct: false}
      , {description: "派遣先責任者は，派遣就業場所が複数ある場合でも，一人に絞って選任されなければならない。", correct: false}
      , {description: "派遣先責任者は，派遣労働者が従事する業務全般を統括する管理職位の者の内から選任されなければならない。", correct: false}
      , {description: "派遣先責任者は，派遣労働者に直接指揮命令する者に対して，労働者派違法などの関連法規の規定，労働者派遣契約の内容，派遣元からの通知などを周知しなければならない。", correct: true}
    ]
    , category: 'SM-H25-AUTUMN'
  }
  , {
    description: "システムの改善に向けて提出された4案について，評価項目を設定して採点した結果を，採点結果表に示す。効果及びリスクについては5段階評価とし，それぞれの評価項目の重要度に応じて，重み付け表に示すとおりの重み付けを行った上で次の式で総合評価点を算出したとき，総合評価点が最も高い改善案はどれか。<br><br>" +
    "[総合評価点の算出式]<br>" +
    "　総合評価点＝効果の総評価点－リスクの総評価点" +
    "<p>採点結果表" +
    "<table class='table table-bordered' style='width:60%'>" +
    "<tr><td colspan=\"2\"></td><td>案1</td><td>案2</td><td>案3</td><td>案4</td></tr>" +
    "<tr><td rowspan=\"3\">効果</td><td>セキュリティ強化</td><td>3</td><td>4</td><td>5</td><td>2</td></tr>" +
    "<tr><td>システム運用品質向上</td><td>2</td><td>4</td><td>2</td><td>5</td></tr>" +
    "<tr><td>作業コスト削減</td><td>5</td><td>4</td><td>2</td><td>4</td></tr>" +
    "<tr><td rowspan=\"3\">リスク</td><td>スケジュールリスク</td><td>2</td><td>4</td><td>1</td><td>5</td></tr>" +
    "<tr><td>技術リスク</td><td>4</td><td>1</td><td>5</td><td>1</td></tr>" +
    "</table>" +
    "<p>重み付け表" +
    "<table class='table table-bordered' style='width:60%'>" +
    "<tr><td colspan=\"2\">評価項目</td><td>重み</td></tr>" +
    "<tr><td rowspan=\"3\">効果</td><td>セキュリティ強化</td><td>4</td></tr>" +
    "<tr><td>システム運用品質向上</td><td>2</td></tr>" +
    "<tr><td>作業コスト削減</td><td>3</td></tr>" +
    "<tr><td rowspan=\"2\">リスク</td><td>スケジュールリスク</td><td>8</td></tr>" +
    "<tr><td>技術リスク</td><td>3</td></tr>" +
    "</table>"
    , multiple_answer: false
    , answers: [
      {description: "案1", correct: false}
      , {description: "案2", correct: false}
      , {description: "案3", correct: true}
      , {description: "案4", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "JIS Q 20000-1において，供給者管理に求められるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "供給者管理における変更は，変更管理プロセスではなく，供給者管理プロセスに従う。", correct: false}
      , {description: "供給者は，供給者管理プロセスへの適合を実証する。", correct: false}
      , {description: "サービス提供者は，供給者管理プロセスを文書化する。", correct: true}
      , {description: "重要な契約についてのレビューを，少なくとも3年に1回実施する。", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおいて，インシデントに対する一連の活動のうち，イベント管理プロセスが分担する活動はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデントの発生後に，インシデントの原因などをエラーレコードとして記録する。", correct: false}
      , {description: "インシデントの発生後に，問題の根本原因を分析して記録する。", correct: false}
      , {description: "インシデントの発生時に，ITサービスを迅速に復旧するための対策を講じる。", correct: false}
      , {description: "インシデントの発生を早期に検出して，関連するプロセスに通知する。", correct: true}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントのインシデント管理の達成目標はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インフラストラクチャの弱点を探り，それらの弱点を取り除くための提案を行ってインシデントを予防する。", correct: false}
      , {description: "過去のインシデントの根本原因を見つけ，改善や是正に関する提案を行い，インシデントを未然に防ぐ。", correct: false}
      , {description: "顧客が要求するITサービスを，継続して維持し，改善していくようにする。", correct: false}
      , {description: "組織やユーザのビジネス活動に対するインパクトを最小限に抑えるために，できるだけ早くSLAで定めた通常のサービスレベルに復帰させる。", correct: true}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "システム障害が発生したときにシステムを初期状態に戻して再開する方法であり，イニシャルプログラムロードとも呼ばれるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ウォームスタート", correct: false}
      , {description: "コールドスタート", correct: true}
      , {description: "ロールバック", correct: false}
      , {description: "ロールフォワード", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "次の文章は，法人顧客向けITサービス提供者のサービスデスクとサポートチームの行動である。明らかに改善が必要なマネジメントプロセスはどれか。" +
"<p>ある顧客から特定の処理結果に誤りがあるのではないかというクレームがあった。クレームを受けた担当者は緊急度が低いと判断し，インシデントとして記録した後，技術サポートチームに調査を依頼した。技術サポートチームが調査した結果，プログラムのバグが原因と判明し，問題レコードを記録して変更要求(RFC) を提起した。変更管理チームは変更を完了させて関係者に連絡した後，その変更をクローズした。変更のクローズを受け，サービスデスクはクレームに対して回答するために，既知のエラーデータベースを参照したが，処置内容が登録されていなかったので回答できなかった。"
    , multiple_answer: false
    , answers: [
      {description: "イベント管理", correct: false}
      , {description: "変更管理", correct: false}
      , {description: "インシデント管理", correct: false}
      , {description: "問題管理", correct: true}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおける変更要求に対する活動のうち，リリース管理プロセスに含まれるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "変更された構成アイテム(CI)のパッケージ化", correct: true}
      , {description: "変更諮問委員会(CAB)の召集", correct: false}
      , {description: "変更の影響を受ける構成アイテム(CI)の識別", correct: false}
      , {description: "変更要求(RFC)のレビュー", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "ITILにおけるワークアラウンドの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデント管理，問題管理のプロセスにおける問題の状態のこと", correct: false}
      , {description: "インシデント管理から問題管理，変更管理へと問題を扱うプロセスが遷移すること", correct: false}
      , {description: "インシデントの中で，障害ではないもののこと", correct: false}
      , {description: "インシデントや問題に対する完全な解決策がまだ存在しないときの暫定処置のこと", correct: true}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "ITIL v3における変更諮問委員会(CAB)の役割の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "変更されたリリースパッケージの導入に対する最終承認を行う。", correct: false}
      , {description: "変更に対する切り戻し計画とテスト計画の作成を行う。", correct: false}
      , {description: "変更の許可を支援し，変更の評価と優先度付けにおいて変更管理を援助する。", correct: true}
      , {description: "変更要求の受領及び登録を行い，非現実的な要求は却下する。", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "\"ITサービスが必要とされたときに合意済の機能を実行する能力\"について，様々な側面を定義，分析，計画立案，測定，改善することを責務とするITILのプロセスはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービス継続性管理", correct: false}
      , {description: "インシデント管理", correct: false}
      , {description: "可用性管理", correct: true}
      , {description: "問題管理", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "ITIL v3におけるサービストランジションの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "規定された要件と制約に沿って，サービスを運用に移行し，確実に稼働させることである。", correct: true}
      , {description: "サービスの効率，有効性，費用対効果の観点で運用状況を継続的に測定し，改善していくことである。", correct: false}
      , {description: "サービスの内容を具体的に決めることである。", correct: false}
      , {description: "戦略的資産として，どのようにサービスマネジメントを設計，開発，導入するかについての手引を提供することである。", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "次の処理条件でサーバ上のファイルを磁気テープにパックアップするとき，バックアップの運用に必要な磁気テープは何本か。<br><br>" +
"〔処理条件〕<br>" +
"(1) 毎月初日(1日)にフルパックアップを取る。フルパックアップは1回につき1本の磁気テープを必要とする。<br>" +
"(2) フルバックアップを取った翌日から次のフルパックアップまでは，毎日，差分バックアップを取る。差分バックアップは，差分バックアップ用として別の磁気テープに追記し，1か月分が1本に記録できる。<br>" +
"(3) 常に6か月前の同一日までのデータについて，指定日の状態にファイルを復元できることを保証する。ただし，6か月前の同一日が存在しない場合は，当該月の月末日以降のデータについて，指定日の状態にファイルを復元できることを保証する(例本日が10月31日の場合は， 4月30日以降のデータについて，指定日の状態にファイルを復元できることを保証する)。"
    , multiple_answer: false
    , answers: [
      {description: "12", correct: false}
      , {description: "13", correct: false}
      , {description: "14", correct: true}
      , {description: "15", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおいて，構成ベースラインを確立することによって可能になることはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスの存続期間を通したパフォーマンスの変化の測定", correct: false}
      , {description: "インシデントが発生したときの問題管理プロセスでの状況証拠の分析", correct: false}
      , {description: "サービスを機能させるために必要な最低限の利用可能レベルの定義", correct: false}
      , {description: "変更後などの構成監査及び切り戻しのための基準の提供", correct: true}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "バックアップサイトの説明のうち，ウォームスタンバイの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "同じようなシステムを運用する外部の企業や組織と協定を結び，緊急時には互いのシステムを貸し借りして，サービスを回復する。", correct: false}
      , {description: "緊急時にバックアップシステムを持ち込んでシステムを再開し，サービスを回復する。", correct: false}
      , {description: "別の場所に常にデータの同期が取れているバックアップシステムを用意し，緊急時にパックアップシステムに切り換えてサービスを回復する。", correct: false}
      , {description: "別の場所にバックアップシステムを用意し，緊急時にパックアップシステムを起動してデータを最新状態にした後にサービスを回復する。", correct: true}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "アプリケーションサービス供給，インソーシング，パートナシップ，ビジネスプロセスアウトソーシングの長所と短所に関する記述のうち，ビジネスプロセスアウトソーシングはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "サービスを採用する組織にとって，共有ソフトウェアの複雑性とコストが低減できるという長所があるが，提供されたサービスを単に利用するだけで，サービス提供者のナレッジは利用できないという短所がある。", correct: false}
      , {description: "サービスを採用する組織にとって，異なる複数の専門能力や市場機会を戦略的に活用できるという長所があるが，プロジェクトが複雑になり，知的所有権の保護が複雑になるという短所がある。", correct: false}
      , {description: "サービスを採用する組織にとって，専門スキルが低コストで利用できるという長所があるが，事業上のナレッジを喪失するリスクが存在するという短所がある。", correct: true}
      , {description: "自社の方針やプロセスを熟知しているので，組織問で意思疎通がしやすいという長所があるが，利用可能な要員数やスキルなどによって，時期や成果が左右されるという短所がある。", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "システム監査を保証型で行う目的として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部利害関係者からの信頼獲得", correct: true}
      , {description: "システム開発コストの削減", correct: false}
      , {description: "情報システムの効率性改善", correct: false}
      , {description: "不正行為の防止", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "PMBOKにおいて，プロジェクトやフェーズの終結に当たってステークホルダの公式な承認を受けるために照合することとされているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "作業パフォーマンス情報とスケジュールベースライン", correct: false}
      , {description: "作業パフォーマンス測定結果と品質マネジメント計画書", correct: false}
      , {description: "要素成果物とプロジェクト憲章", correct: false}
      , {description: "要素成果物とプロジェクトスコープ記述書", correct: true}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "クリテイカルチェーン法におけるタスクのスケジューリングとバッファの設定方法のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "クリテイカルパス上にないタスクのチェーンには，バッファを設定しない。", correct: false}
      , {description: "クリテイカルパス上の最後のタスクの終了期と納期の聞に，プロジェクト全体で使用するバッファを設定する。", correct: true}
      , {description: "クリテイカルパス上の全てのタスクに，バッファを設定する。", correct: false}
      , {description: "なるべく前倒しでタスクを開始するように計画し，バッファを少しでも多く確保する。", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "情報システムの企画，開発，運用，保守作業に関わる国際標準の一つであるSPA(Software Process Assessment)の説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ソフトウェアプロセスがどの程度標準化・定量化され，継続的に改善されているかを判定することを目的としている。", correct: true}
      , {description: "ソフトウェアライフサイクルを主プロセス，支援プロセス，組織プロセスの三つのプロセス群に分け，作業内容を定めている。", correct: false}
      , {description: "品質保証に関する要求項目を体系的に規定した国際規格の一部である。", correct: false}
      , {description: "プロジェクトマネジメントの知識体系と応用のためのガイドである。", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "主記憶アクセスの高速化技術であるライトバック方式における，キャッシュメモリ及び主記憶への書込みの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "キャッシュメモリ及び主記憶の両方に同時に書き込む。", correct: false}
      , {description: "キャッシュメモリにだけ書き込み，対応する主記憶の更新は，キャッシュメモリからデータが追い出されるときに行う。", correct: true}
      , {description: "キャッシュメモリへの書込みと同時にバッファに書き込んだ後，バッファから主記憶へ順次書き込む。", correct: false}
      , {description: "主記憶を，独立して動作する複数のブロックに分けて，各ブロックに並列に書き込む。", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "二つのシステムの信頼性評価指標の関係に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "稼働率が等しければ，MTBFも等しい。", correct: false}
      , {description: "稼働率が等しければ，MTTRも等しい。", correct: false}
      , {description: "故障発生率が等しければ，MTBFも等しい。", correct: true}
      , {description: "故障発生率が等しければ，MTTRも等しい。", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "無線LANの規格であるIEEE802.11b及びIEEE802.11gに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IEEE 802.11b同士の最大伝送速度の方が，IEEE 802目11g同士の最大伝送速度よりも高速である。", correct: false}
      , {description: "IEEE 802.11gの一つのアクセスポイントの記下に，IEEE 802.11bとIEEE802.11gの両方の端末が混在できる。", correct: true}
      , {description: "いずれも屋外では利用できない。", correct: false}
      , {description: "いずれも最大伝送速度は1Mビット/秒である。", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "TCP/lPネットワークで使用されるARPの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPアドレスからMACアドレスを得るためのプロトコル", correct: true}
      , {description: "IPアドレスからホスト名(ドメイン名)を得るためのプロトコル", correct: false}
      , {description: "MACアドレスからIPアドレスを得るためのプロトコル", correct: false}
      , {description: "ホスト名(ドメイン名)からIPアドレスを得るためのプロトコル", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "家庭内で，PCを無線LANとブロードバンドルータを介してインターネットに接続するとき，期待できるセキュリテイ上の効果の記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPマスカレード機能による，インターネットからの不正侵入に対する防止効果", correct: true}
      , {description: "PPPoE機能による，経路上の盗聴に対する防止効果", correct: false}
      , {description: "WPA機能による，不正なWebサイトへの接続に対する防止効果", correct: false}
      , {description: "WPS機能による，インターネットからのウイルス感染に対する防止効果", correct: false}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "申込みの撤回又は契約の解除に応じない旨の取引条件を告知していた販売業者からPCを購入した場合に，法令で定めた期間内であれば特定商取引法に基づく契約の解除が可能な取引はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Webサイトから，最終申込画面で取引条件を承諾して購入した。", correct: false}
      , {description: "コンピュータ専門誌の広告を見て電話で購入した。", correct: false}
      , {description: "コンピュータ専門店舗の店頭で購入した。", correct: false}
      , {description: "自宅に訪れた営業担当者と契約して購入した。", correct: true}
    ]
    , category: 'SM-H24-AUTUMN'
  }
  , {
    description: "重要性や需要変動，在庫コストの観点から商品単位に定量発注法，定期発注法，2ビン発注法のいずれの方法にするかを決定したい。発注方式を決定するために用いる手法として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ABC分析", correct: true}
      , {description: "管理図", correct: false}
      , {description: "クリテイカルパスメソッド", correct: false}
      , {description: "線形計画法", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおけるプロセスで，サービスライフサイクルのサービスストラテジに含まれる戦略レベルのプロセスの組みはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデント管理，問題管理", correct: false}
      , {description: "サービス資産管理，構成管理", correct: false}
      , {description: "サービスポートフォリオ管理，財務管理", correct: true}
      , {description: "サービスレベル管理，キャパシティ管理", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "コンピュータシステムにおけるジョブスケジューリングの特徴のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "CPUに割り当てるジョブをOSが強制的に切り替えるタイムスライス方式では，タイマ割込みが多発するので，スループットが低下する。", correct: false}
      , {description: "FCFS (first-come first-served)方式のジョブスケジューリングは，ジョブ間にCPUを公平に割り当てるので，スループットや応答時間の保証が可能となる。", correct: false}
      , {description: "対話型処理とバッチ処理が混在するシステムでは，対話型処理の優先度を高くすることによって，対話型処理の応答性能の向上が期待できる。", correct: true}
      , {description: "入出力を多用するジョブよりもCPUを多用するジョブの処理優先度を上げた方が，CPUの待ち時間が少なくなるので，全体のスループットの向上が期待できる。", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "情報システムの設計において，フェールソフトが講じられているのはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "UPS装置を設置することで，停電時に手順どおりにシステムを停止できるようにし，データを保全する。", correct: false}
      , {description: "制御プログラムの障害時に，システムの暴走を避け，安全に運転を停止できるようにする。", correct: false}
      , {description: "ハードウェアの障害時に，パフォーマンスは低下するが，構成を縮小して運転を続けられるようにする。", correct: true}
      , {description: "利用者の誤操作や誤入力を未然に防ぐことで，システムの誤動作を防止できるようにする。", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "RAIDにおいて，信頼性向上ではなく，性能向上だけを目的としたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "RAID0", correct: true}
      , {description: "RAID1", correct: false}
      , {description: "RAID3", correct: false}
      , {description: "RAID5", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおいて，リリース管理からインシデント管理に伝達することが望ましいとされている情報はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "リリースが許可された証拠", correct: false}
      , {description: "リリースするものに含まれている既知の誤り", correct: true}
      , {description: "リリースに関連しないインシデント", correct: false}
      , {description: "リリースまでに要したコスト", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "システムが障害によって停止したときに行う，システム再開の方法の一つであるウォームスタートの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "システムの再立上げの過程で，システム停止時に処理中であったジョブのうち，処理の続行が可能なものは処理を再開させ，入出力キューに残っているものは，そのまま処理の対象とする。", correct: true}
      , {description: "システムの初期化のために，イニシャルプログラムローダによってコンフィギュレーション情報を主記憶装置上に展開する。", correct: false}
      , {description: "システムの停止で処理が中断したジョブについて，それまでに採取されたチェックポイント情報によって回復作業を実施する。", correct: false}
      , {description: "ジャーナルファイルに記録されているデータを使用して，ファイルを障害発生以前の状態に戻す。", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "ITILのキャパシティ管理において，監視項目となるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデント発生件数", correct: false}
      , {description: "オペレータ要員数", correct: false}
      , {description: "ディスク使用率", correct: true}
      , {description: "平均故障間隔", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "ITILにおいて，サービスレベル管理プロセスの活動とされているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスの提供に必要な予算に対して，適切な資金を確保する。", correct: false}
      , {description: "現在のリソースのチューニングと最適化，及び将来のリソース要件に関する予測を記載した計画を作成する。", correct: false}
      , {description: "災害や障害などで事業が中断しでも，要求されたサービス機能を合意された期間内に確実に復旧できるように，ビジネスインパクトの評価や復旧優先順位を明確にする。", correct: false}
      , {description: "提供するITサービスとその目標値などについて， ITサービスプロパイダが顧客との間で合意書を交わす。", correct: true}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "JIS Q 20000規格群におけるサービス継続及び可用性の管理プロセスで行う活動はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデント及び問題の影響を識別し，最小限に抑える，又は回避するための手順を採用する。", correct: false}
      , {description: "サービス中止の許容可能な最長継続時間などの要求事項を，事業計画，SLA及びリスクアセスメントに基づいて特定する。", correct: true}
      , {description: "サービスの容量・能力を監視し，サービスのパフォーマンスを調整して，かつ，適切な容量・能力を提供するための方法，手順及び技法を明確にする。", correct: false}
      , {description: "提供する個々のサービスを定義し，合意して，かつ，文書化する。", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "システム運用管理における管理情報の取扱いに関する記述のうち，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "管理は少人数の管理者グループで行う。管理用アカウントは，グループ専用のものを共用する。管理情報は，一般利用者に公開し，利用者自身がチェックできるようにする。", correct: false}
      , {description: "管理は少人数の管理者グループで行う。管理用アカウントは，グループ専用のものを共用する。管理情報は，セキュリティレベルなどを考慮した上で一般利用者への公開を行う。", correct: false}
      , {description: "管理は少人数の管理者グループで行う。管理用アカウントは，個々の管理者専用のものを使用する。管理情報は，セキュリティレベルなどを考慮した上で一般利用者への公開を行う。", correct: true}
      , {description: "管理は一人の管理者で行う。管理情報は，セキュリティレベルなどを考慮した上で一般利用者への公開を行う。", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "様式が複数ある伝票から，様式ごとに定められた項目のデータを入力する。項目の入力漏れを検出するためにプログラムで実行する処理として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "伝票の様式ごとに定められた項目数と入力された項目数が一致することを確認する。", correct: true}
      , {description: "伝票の様式に基づいて，入力された項目の値のデータ形式を検査する。", correct: false}
      , {description: "入力された項目の内容が，伝票で定義された範囲に収まっていることを確認する。", correct: false}
      , {description: "マスタファイルと突き合わせて，入力された項目の内容が正しいことを確認する。", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "雷サージによって通信回線に誘起された異常電圧から通信機器を防護するための装置はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IDF(Intermediate Distributing Frame)", correct: false}
      , {description: "MCCB(Molded Case Circuit Breaker)", correct: false}
      , {description: "アレスタ", correct: true}
      , {description: "避雷針", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "システム監査人の外観上の独立性に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査報告書における指摘事項の多寡によって報酬が決まるような契約が望ましい。", correct: false}
      , {description: "公正かつ客観的な監査判断を行うための精神上の独立性が保たれることによって保証される。", correct: false}
      , {description: "組織的な独立の他，過去の自己の業務に対する監査とならないか，被監査部門の長が監査人の元上司でないか，なども考慮する必要がある。", correct: true}
      , {description: "第三者がうかがい知ることの困難な精神上の独立性とは異なり，内部監査では必要ないが，外部監査では厳密に要求される。", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "システム開発委託先(受託者)から委託元(委託者)に納品される成果物に対する受入れテストの適切性を確かめるシステム監査の要点はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "委託者が作成した受入れテスト計画書に従って，受託者が成果物に対して受入れテストを実施していること", correct: false}
      , {description: "受託者が成果物と一緒に受入れテスト計画書を納品していること", correct: false}
      , {description: "受託者から納品された成果物に対して，委託者が受入れテストを実施していること", correct: true}
      , {description: "受託者から納品された成果物に対して，監査人が受入れテスト計画を策定していること", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "プロジェクトのスケジュールを管理するときに使用する\"クリテイカルチェーン法\"の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "クリテイカルパス上の作業に生産性を向上させるための開発ツールを導入する。", correct: false}
      , {description: "クリテイカルパス上の作業に要員を追加投入する。", correct: false}
      , {description: "クリテイカルパス上の先行作業が終了する前に後続作業に着手し，並行して実施する。", correct: false}
      , {description: "クリテイカルパスを守るために，フィーディングバッファと所要期間バッファを設ける。", correct: true}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "プロジェクトの進捗管理をEVM(Earned Value Management) で行っている。コストが超過せず，納期にも遅れないと予想されるプロジェクトはどれか。ここで，それぞれのプロジェクトの開発の生産性は現在までと変わらないものとする。<br/>" +
    "<img src = \"js/data/image/H26_q16.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ア", correct: false}
      , {description: "イ", correct: false}
      , {description: "ウ", correct: true}
      , {description: "エ", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "定性的リスク分析の活動として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "検討対象以外の全ての不確実な要素をベースライン値に固定した状態で，プロジェクトの個々の不確定要素が，検討対象の目標に与える影響の度合いを調べる。", correct: false}
      , {description: "デシジョンツリー図を使用して，選択肢に対する期待金額価値(EMV)を比較する。", correct: false}
      , {description: "リスクに関するインタビューを通じて，各WBS要素に対する三点見積りをする。", correct: false}
      , {description: "リスクの発生確率と影響度を評価して，識別したリスクに等級付けをする。", correct: true}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "MPUの高速化技術の一つであるスーパスカラの特徴として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "同時に実行可能な複数の動作をまとめて一つの命令として実行する。", correct: false}
      , {description: "独立した複数の命令ストリームを用意し，これらの実行を適宜切り換えながら行う。", correct: false}
      , {description: "パイプラインの深さを増すとともに，パイプラインピッチを短くして，平均命令実行時間を短縮する。", correct: false}
      , {description: "パイプラインを複数用意し，同時に複数の命令を実行する。", correct: true}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "ECCメモリで，2ビットの誤りを検出し，1ビットの誤りを訂正するために用いるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "偶数パリティ", correct: false}
      , {description: "垂直パリティ", correct: false}
      , {description: "チェックサム", correct: false}
      , {description: "ハミング符号", correct: true}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "信頼性設計におけるフォールバックを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "サーバに障害が発生した場合，あらかじめ確保しておいた予備のサイトに必要な機器や媒体を持ち込み，サーバを復元して業務を再開する。", correct: false}
      , {description: "サーバに障害が発生した場合，他のサーバに処理を一旦引き継ぎ，障害が回復した後に元のサーバに処理を戻す。", correct: false}
      , {description: "人間の操作ミスやシステムの故障の際，その結果が人間などに危害や損害を与えることがないようにする。", correct: false}
      , {description: "不具合が起きた場合，不具合の箇所を含む分割可能な部分を切り離して，残りの部分で処理を続行する。", correct: true}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "次数がnの関係Rには，属性なし(φ)も含めて異なる射影は幾つあるか。"
    , multiple_answer: false
    , answers: [
      {description: "n", correct: false}
      , {description: "2n", correct: false}
      , {description: "n^2", correct: false}
      , {description: "2^n", correct: true}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "TCP，UDPのポート番号を識別し，プライベートIPアドレスとグローバルIPアドレスとの対応関係を管理することによって，プライベートIPアドレスを使用するLAN上の複数の端末が，一つのグローバルIPアドレスを共有してインターネットにアクセスする仕組みはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPスプーフィング", correct: false}
      , {description: "IPマルチキャスト", correct: false}
      , {description: "NAPT", correct: true}
      , {description: "NTP3", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "ステガノグラフィの機能はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "画像データなどにメッセージを埋め込み，メッセージの存在そのものを隠す。", correct: true}
      , {description: "メッセージの改ざんやなりすましの検出，及び否認の防止を行う。", correct: false}
      , {description: "メッセージの認証を行って改ざんの有無を検査する。", correct: false}
      , {description: "メッセージを決まった手順で変換し，通信途中での盗聴を防ぐ。", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "請負契約を締結していても，労働者派遣とみなされる受託者の行為はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "休暇取得のルールを発注者側の指示に従って取り決める。", correct: true}
      , {description: "業務の遂行に関する指導や評価を自ら実施する。", correct: false}
      , {description: "勤務に関する規律や職場秩序の保持を実施する。", correct: false}
      , {description: "発注者の業務上の要請を受託者側の責任者が窓口となって受け付ける。", correct: false}
    ]
    , category: 'SM-H23-AUTUMN'
  }
  , {
    description: "JIS Q 20000-1において，供給者管理に求められるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "供給者管理における変更は，変更管理プロセスではなく，供給者管理プロセスに従う。", correct: false}
      , {description: "供給者は，供給者管理プロセスへの適合を実証する。", correct: false}
      , {description: "サービス提供者は，供給者管理プロセスを文書化する。", correct: true}
      , {description: "重要な契約についてのレビューを少なくとも3年に1回実施する。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "コンピュータルームにおけるオペレータの行動のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "オペレーションミスによる障害が発生したので，ジョプを再実行した。この結果，予定時間内に作業が完了したので，正常処理として取り扱った。", correct: false}
      , {description: "ジョブの異常終了の原因が，システムリソースの不足にあることが分かったので，運用マニュアルに記載された回復処理手順に従ってジョブを再処理した。", correct: true}
      , {description: "ジョブの実行に必要なデータファイルの記録媒体が準備されておらず，保管庫の管理者が不在だったので，自分自身で保管庫から探し出して，ジョブを実行した。", correct: false}
      , {description: "プログラムの開発者から直接，緊急のジョブを実行するように依頼があったので，この依頼を自分の判断で受け入れて，緊急のジョブを処理した。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "JIS Q 20000規格群の関係プロセスの規定における，供給者，サービス提供者及び顧客の3者の関係のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "供給者，サービス提供者及び顧客は，それぞれ別々の組織(外部)に所属する。", correct: false}
      , {description: "供給者のサービスも含めて，サービス提供者が責任をもって，顧客にサービスを提供する。", correct: true}
      , {description: "供給者は，サービス提供者を顧客とみなしてサービスを提供することはない。", correct: false}
      , {description: "供給者はサービス提供者からサービスや製品を受領して，顧客に提供する。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおけるSLAの対象項目として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "移植性", correct: false}
      , {description: "開発生産性", correct: false}
      , {description: "信頼性", correct: true}
      , {description: "妥当性", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおける問題管理プロセスとして，実施するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "システムダウンから暫定的に復旧させ，業務を継続できるようにする。", correct: false}
      , {description: "システムダウンに備えて，復旧のための設計をする。", correct: false}
      , {description: "システムダウンの根本原因を究明し，抜本的な対応策を策定する。", correct: true}
      , {description: "システムダウンの発生を記録し，関係する部署に状況を連絡する。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "JIS Q 20000規格群におけるインシデント管理プロセスと問題管理プロセスの関係はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデント管理プロセスでは，インシデント解決の進捗状況を問題管理プロセスに伝えなければならない。", correct: false}
      , {description: "インシデント管理プロセスでは，インシデントの根本原因を調査して，その結果を問題管理プロセスに伝えなければならない。", correct: false}
      , {description: "問題管理プロセスでは，既知の誤り及び是正された問題に関する最新情報を，インシデント管理プロセスが利用できるようにしなければならない。", correct: true}
      , {description: "問題管理プロセスでは，問題の根本原因を正すために要求される変更を，インシデント管理プロセスに伝えなければならない。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "システム障害が発生したときにシステムを初期状態に戻して再開する方法で，イニシャルプログラムロードとも呼ばれるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ウォームスタート", correct: false}
      , {description: "コールドスタート", correct: true}
      , {description: "ロールバック", correct: false}
      , {description: "ロールフォワード", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "レプリケーションが有効な対策となるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "悪意によるデータの改ざんを防ぐ。", correct: false}
      , {description: "コンピュータウイルスによるデータの破壊を防ぐ。", correct: false}
      , {description: "災害発生時にシステムが長時間停止するのを防ぐ。", correct: true}
      , {description: "操作ミスによるデータの削除を防ぐ。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "ITILv3における変更諮問委員会(CAB)の役割の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "変更されたリリースパッケージの導入に対する最終承認を行う。", correct: false}
      , {description: "変更に対する切り戻し計画とテスト計画の作成を行う。", correct: false}
      , {description: "変更の許可を支援し，変更の評価と優先度付けにおいて変更管理を援助する。", correct: true}
      , {description: "変更要求の受領及び登録を行い，非現実的な要求は却下する。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "システムを毎日8:00から24:00まで稼働させるために，要員を図の3種類の勤務時問で1名ずつ配置している。このシステムを，年間365日稼働させるために必要となる要員の総数は，最少で何人か。ここで，年間の休日は120 日，年次有給休暇日数は20 日とする。また，休暇や病欠などで要員の確保が不可能にならないように調整できるものとする。<br><br>" +
    "<img src = \"js/data/image/H22_q10.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "3", correct: false}
      , {description: "4", correct: false}
      , {description: "5", correct: true}
      , {description: "6", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "ITILにおけるサービスレベル管理の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスを供給するために使用されるIT資産と資源を財務的に管理するプロセスである。", correct: false}
      , {description: "顧客と提供者の合意事項が達成できるようにITサービスの品質を維持し，改善するプロセスである。", correct: true}
      , {description: "サービスの品質を阻害する事象に対して，迅速に元のサービスレベルまで回復させるプロセスである。", correct: false}
      , {description: "必須となるITインフラとサービス設備が，合意した期限内に回復できるようにするプロセスである。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "\"ITサービスが必要とされたときに合意済の機能を実行する能力\"について，様々な側面を定義，分析，計画立案，測定，改善することを責務とするITILのプロセスはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービス継続性管理", correct: false}
      , {description: "インシデント管理", correct: false}
      , {description: "可用性管理", correct: true}
      , {description: "問題管理", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "ITILv3におけるサービストランジションの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "規定された要件と制約に沿って，サービスを運用に移行し，確実に稼働させることである。", correct: true}
      , {description: "サービスの効率，有効性，費用対効果の観点で運用状況を継続的に測定し，改善していくととである。", correct: false}
      , {description: "サービスの内容を具体的に決めることである。", correct: false}
      , {description: "戦略的資産として，どのようにサービスマネジメントを設計，開発，導入するかについての手引を提供することである。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "ソフトウェア開発・保守の工程において，リポジトリを構築する理由はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "各工程で検出した不良を管理することが可能になり，ソフトウェアの品質分析が容易になる。", correct: false}
      , {description: "各工程での作業手順を定義することが容易になり，開発・保守時の作業ミスを防止することができる。", correct: false}
      , {description: "各工程での作業予定と実績を関連付けて管理することが可能になり，作業の進捗管理が容易になる。", correct: false}
      , {description: "各工程での成果物を一元管理することによって，開発・保守作業の効率が良くなり，用語の統ーもできる。", correct: true}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "システム運用にかかわる費用を，利用部門に公平に賦課するための制度はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "委託計算", correct: false}
      , {description: "外部委託", correct: false}
      , {description: "課金", correct: true}
      , {description: "標準原価", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "ミッションクリテイカルシステムの意味として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "OSなどのように，業務システムを稼働させる上で必要不可欠なシステム", correct: false}
      , {description: "システム運用条件が，性能の限界に近い状態の下で稼働するシステム", correct: false}
      , {description: "障害が起きると，企業活動に重大な影響を及ぼすシステム", correct: true}
      , {description: "先行して試験導入され，成功すると本格的に導入されるシステム", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "請負契約でシステム開発を委託している案件について，委託元のシステム監査人の指摘事項に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "委託した開発案件の品質を委託元の管理者が定期的にモニタリングしている。", correct: false}
      , {description: "委託元の管理者が委託先の開発担当者を指揮命令している。", correct: true}
      , {description: "契約書に機密保持のための必要事項が盛り込まれている。", correct: false}
      , {description: "特定の委託先との契約が長期化しているので，その妥当性を確認している。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "EVM (Earned Value Management) は，プロジェクトのスケジュールの遅れやコストの超過を可視化できる進捗管理手法である。図中のAが示すものはどれか。<br><br>" +
    "<img src = \"js/data/image/H22_q18.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "実質的な削減金額", correct: false}
      , {description: "実質的な超過金額", correct: false}
      , {description: "進捗の遅延日数", correct: false}
      , {description: "進捗の遅れを金額で表した値", correct: true}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "プロジェクトのリスクマネジメントにおけるリスク対応策のうち，リスクの受容策はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "開発人員を追加投入する。", correct: false}
      , {description: "開発を他社に委託する。", correct: false}
      , {description: "スコープを縮小する。", correct: false}
      , {description: "リスク発生に備えてコンティンジェンシー予備を設ける。", correct: true}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "RAID3の組合せとして，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ストライピングの単位=ビット、冗長化=ハミングコード、冗長ディスク構成=固定", correct: false}
      , {description: "ストライピングの単位=ビット、冗長化=パリティ、冗長ディスク構成=固定", correct: true}
      , {description: "ストライピングの単位=ブロック、冗長化=パリティ、冗長ディスク構成=固定", correct: false}
      , {description: "ストライピングの単位=ブロック、冗長化=パリティ、冗長ディスク構成=分散", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "Webシステムにおいてロードパランサ(負荷分散装置)が定期的に行っているアプリケーションレベルの稼働監視に関する記述として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "WebサーバでOSのコマンドを実行し，その結果が正常かどうかを確認する。", correct: false}
      , {description: "Webサーバの特定のURLにアクセスし，その結果に含まれる文字列が想定値と一致するかどうかを確認する。", correct: true}
      , {description: "Webサーバの特定のポートに対して接続要求パケットを発行し，確認、応答パケットが返ってくるかどうかを確認する。", correct: false}
      , {description: "ネットワークの疎通を確認するコマンドを実行し， Webサーバから応答が返ってくるかどうかを確認する。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "商品の販売状況分析を商品軸，販売チャネル軸，時間軸，顧客タイプ軸で行う。データ集計の観点を，商品，販売チャネルごとから，商品，顧客タイプごとに切り替える操作はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ダイス", correct: true}
      , {description: "データクレンジング", correct: false}
      , {description: "ドリルダウン", correct: false}
      , {description: "ロールアップ", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "図は，組織内のTCP/lPネットワークにあるクライアントが，プロキシサーバ，ルータ，インターネットを経由して組織外のWebサーバを利用するときの経路を示している。この通信のTCPコネクションが設定される場所はどれか。<br/>" +
    "<img src = \"js/data/image/H26_q22.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "クライアントとWebサーバの間，クライアントとプロキシサーバの間", correct: false}
      , {description: "クライアントとプロキシサーバの問，プロキシサーバとWebサーバの間", correct: true}
      , {description: "クライアントとプロキシサーバの間，プロキシサーバとルータの間，ルータとWebサーバの問", correct: false}
      , {description: "クライアントとルータの問，ルータとWebサーバの間", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "暗号方式に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "AESは公開鍵暗号方式， RSAは共通鍵暗号方式の一種である。", correct: false}
      , {description: "共通鍵暗号方式では，暗号化及び復号に使用する鍵が同一である。", correct: true}
      , {description: "公開鍵暗号方式を通信内容の秘匿に使用する場合は，暗号化鍵を秘密にして，復号鍵を公開する。", correct: false}
      , {description: "ディジタル署名に公開鍵暗号方式が使用されることはなく，共通鍵暗号方式が使用される。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "製造業者の責任に関して，製造物責任法(PL法)に定められているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "顧客の財産に関する損害については，製造業者は製造物を顧客に引き渡した時から永久に損害賠償責任を負う。", correct: false}
      , {description: "製造物の欠陥原因が部品メーカの製造した部品であった場合，完成品メーカの設計どおりに製造し納品した部品であっても，部品メーカに損害賠償責任がある。", correct: false}
      , {description: "製造物を顧客に引き渡した時における科学又は技術水準では発見できない内容の欠陥であれば，その製造業者の損害賠償責任は問われない。", correct: true}
      , {description: "製造物を輸入して販売している販売業者は，製造業者ではないので，その製造物によって顧客が財産上の損害を被っても，損害賠償責任は問われない。", correct: false}
    ]
    , category: 'SM-H22-AUTUMN'
  }
  , {
    description: "重要性や需要変動，在庫コストの観点から商品単位に定量発注法，定期発注法，2ビン発注法のいずれの方法にするかを決定したい。発注方式を決定するために用いる手法として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ABC分析", correct: true}
      , {description: "管理図", correct: false}
      , {description: "クリティカルパスメソッド", correct: false}
      , {description: "線形計画法", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "ITILv2における\"ユーザ\"文は\"顧客\"の説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IT運用の費用を負担する責任者は\"ユーザ\"である。", correct: false}
      , {description: "ITサービスに対するサービス要求を決定する者は\"ユーザ\"である。", correct: false}
      , {description: "ITサービスを日々利用する者は\"ユーザ\"である。", correct: true}
      , {description: "サービスデスクを主な窓口として利用する者は\"顧客\"である。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "システムの改善に向けて提出された4案について，評価項目を設定して採点した結果を，採点結果表に示す。効果及びリスクについては5段階評価とし，それぞれの評価項目の重要度に応じて，重み付け表に示すとおりの重み付けを行った上で次の式で総合評価点を算出したとき，総合評価点が最も高い改善案はどれか。<br><br>" +
    "[総合評価点の算出式]<br>" +
    "　総合評価点＝効果の総評価点－リスクの総評価点" +
    "<p>採点結果表" +
    "<table class='table table-bordered' style='width:60%'>" +
    "<tr><td colspan=\"2\"></td><td>案1</td><td>案2</td><td>案3</td><td>案4</td></tr>" +
    "<tr><td rowspan=\"3\">効果</td><td>セキュリティ強化</td><td>3</td><td>4</td><td>5</td><td>2</td></tr>" +
    "<tr><td>システム運用品質向上</td><td>2</td><td>4</td><td>2</td><td>5</td></tr>" +
    "<tr><td>作業コスト削減</td><td>5</td><td>4</td><td>2</td><td>4</td></tr>" +
    "<tr><td rowspan=\"3\">リスク</td><td>スケジュールリスク</td><td>2</td><td>4</td><td>1</td><td>5</td></tr>" +
    "<tr><td>技術リスク</td><td>4</td><td>1</td><td>5</td><td>1</td></tr>" +
    "</table>" +
    "<p>重み付け表" +
    "<table class='table table-bordered' style='width:60%'>" +
    "<tr><td colspan=\"2\">評価項目</td><td>重み</td></tr>" +
    "<tr><td rowspan=\"3\">効果</td><td>セキュリティ強化</td><td>4</td></tr>" +
    "<tr><td>システム運用品質向上</td><td>2</td></tr>" +
    "<tr><td>作業コスト削減</td><td>3</td></tr>" +
    "<tr><td rowspan=\"2\">リスク</td><td>スケジュールリスク</td><td>8</td></tr>" +
    "<tr><td>技術リスク</td><td>3</td></tr>" +
    "</table>"
    , multiple_answer: false
    , answers: [
      {description: "案1", correct: false}
      , {description: "案2", correct: false}
      , {description: "案3", correct: true}
      , {description: "案4", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "エージェント機能を利用した運用監視の例はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "WWWサーバやFTPサーバなどのサーバが正常に稼働しているかどうかを調べるために，実際にそのサービスを利用して確認する。", correct: false}
      , {description: "監視対象機器内の監視プログラムがリソースの使用状況を監視し，しきい値を超えたら監視サーパに通知する。", correct: true}
      , {description: "監視対象機器に対して監視サーバから定期的にpingコマンドを発行し，機器の死活を監視する。", correct: false}
      , {description: "メールサーバ上にウイルス対策ソフトを配置し，PCへのウイルス感染を防ぐ。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントのインシデント管理の達成目標はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インフラストラクチャの弱点を探り，それらの弱点を取り除くための提案を行ってインシデントを予防する。", correct: false}
      , {description: "過去のインシデントの根本原因を見つけ，改善や是正に関する提案を行い，インシデントを未然に防ぐ。", correct: false}
      , {description: "顧客が要求するITサービスを，継続して維持し，改善していくようにする。", correct: false}
      , {description: "組織やユーザのビジネス活動に対するインパクトを最小限に抑えるために，できるだけ早くSLAで定めた通常のサービスレベルに復帰させる。", correct: true}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "ITILにおけるバーチャルサービスデスクはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "サービスデスク機能を実現するために，専門の業者にアウトソーシングする。", correct: false}
      , {description: "サービスデスクは各地に存在するが，ユーザからはサービスデスク機能があたかも1か所にあるかのように見える。", correct: true}
      , {description: "地域ごとにサービスデスクを設置し，各地域のビジネスニーズに対応したサービスデスク機能を提供する。", correct: false}
      , {description: "複数のユーザサイトに対するサービスデスク機能を1か所に設置したサービスデスクで提供する。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントのプロセスの一つである構成管理を導入することによって得られるメリットはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IT資産の情報を正確に把握することによって，ほかのプロセスの確実な実施を支援できる。", correct: true}
      , {description: "ITリソースに対する，現在の需要の把握と将来の需要の予測ができる。", correct: false}
      , {description: "緊急事態時でも最低限のITサービス基盤を提供することによって，事業の継続が可能になる。", correct: false}
      , {description: "適正なコストで常に一定した品質でのITサービスが提供されるようになる。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "災害によるITサービス停止が，ビジネスへどれだけの影響を及ぼすかを分析するピジネスインパクト分析は，どのプロセスで実施するか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービス継続性管理", correct: true}
      , {description: "インシデント管理", correct: false}
      , {description: "可用性管理", correct: false}
      , {description: "問題管理", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "複数のサーパへのアクセスに用いられる，シングルサインオンに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "安全性を高めるために，利用者認証には使い捨てパスワード(ワンタイムパスワード)方式の採用が前提になる。", correct: false}
      , {description: "公開鍵暗号方式を用いるので，認証局への利用者登録が必要となる。", correct: false}
      , {description: "ディレクトリサービスを用いることで，複数サーバのIDとパスワードを統一して管理できる。", correct: true}
      , {description: "利用者によるパスワードの管理が容易になり，パスワード漏えい時のリスクが減少する。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "コンピュータシステムの利用料金を逓減課金方式にしたときのグラフはどれか。ここで，横軸を使用量，縦軸を利用料金とする。<br><br>" +
    "<img src = \"js/data/image/H21_q10.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ア", correct: false}
      , {description: "イ", correct: false}
      , {description: "ウ", correct: true}
      , {description: "エ", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "様式が複数ある伝票から，様式ごとに定められた項目のデータを入力する。入力漏れがないことを確認するためにプログラムで実行する処理として適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "伝票の様式ごとに定められた項目数と入力された項目数が一致することを確認する。", correct: true}
      , {description: "伝票の様式に基づいて，入力された項目の値のデータ形式を検査する。", correct: false}
      , {description: "入力された項目の内容が，伝票で定義された範囲に収まっていることを確認する。", correct: false}
      , {description: "マスタファイルと突き合わせて，入力された項目の内容が正しいことを確認する。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "ウォームスタンバイの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "同じようなシステムを運用する外部の企業や組織と協定を結び，緊急時には互いのシステムを貸し借りして，サービスを回復する。", correct: false}
      , {description: "緊急時にバックアップシステムを持ち込んでシステムを再開し，サービスを回復する。", correct: false}
      , {description: "別の場所に常にデータの同期が取れているバックアップシステムを用意し，緊急時にバックアップシステムに切り換えてサービスを回復する。", correct: false}
      , {description: "別の場所にバックアップシステムを用意し，緊急時にバックアップシステムを起動してデータを最新状態にした後にサービスを回復する。", correct: true}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントの構築に当たり，現状の業務のやり方とITILなどのベストプラクティスとを照合し，課題を明確にするために実施するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ギャップ分析", correct: true}
      , {description: "サービスレベル管理", correct: false}
      , {description: "マネジメントレビュー", correct: false}
      , {description: "リスクアセスメント", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "ITサービスマネジメントにおけるリスクの対応策の具体例のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "リスクを回避するために，設備に保険をかける。", correct: false}
      , {description: "リスクを軽減するために，指紋認証を採用する。", correct: true}
      , {description: "リスクを受容するために，新たにバックアップシステムを構築する。", correct: false}
      , {description: "リスクを転嫁するために，バックアップシステムを遠隔地に移転する。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "空調設備の送風方式の一つである床下空調方式の特徴として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "機器の配置に合わせてダクトを設置する。", correct: false}
      , {description: "送風の流れと暖気の上昇の流れが同じ方向であり，効率よく冷却できる。", correct: true}
      , {description: "適切にダクトを配置することによって，温度分布を均一化できる。", correct: false}
      , {description: "取付けが簡単で工事費用が安いので，小型機用によく使われる。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "雷サージによって通信回線に誘起された異常電圧から通信機器を防護するための装置はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IDF(Intermediate Distributing Frame)", correct: false}
      , {description: "MCCB(Molded Case Circuit Breaker)", correct: false}
      , {description: "アレスタ", correct: true}
      , {description: "避雷針", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "\"システム監査基準\"の前文に記述されている基準の利用の目的として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "システム監査業務の品質を確保し，有効かつ効率的に監査を実施することを目的とした監査人の行為規範である。", correct: true}
      , {description: "システム監査人が監査上の判断の尺度として用いる基準であって，情報セキュリティ監査基準と一体となって機能する基準である。", correct: false}
      , {description: "情報システムに保証を付与することを目的とした監査でなく，改善のための助言を行うことを目的とした監査に利用する基準である。", correct: false}
      , {description: "組織体の外部者に監査を依頼するシステム監査でなく，組織体の内部監査部門などが実施するシステム監査に利用する基準である。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "プロジェクトの工程管理や進捗管理に使用されるガントチャートの特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "各作業の開始時点と終了時点が一目で把握できる。", correct: true}
      , {description: "各作業の前後関係が明確になり，クリティカルパスが把握できる。", correct: false}
      , {description: "各作業の余裕日数が容易に把握できる。", correct: false}
      , {description: "各作業を要素に分解することによって，管理がしやすくなる。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "顧客に対して自社製品のプレゼンテーションを行うことになった。このとき，同業他社における複数の導入成功事例を挙げ，この製品を導入することで大きな効果が期待できることを訴求したい。このプレゼンテーションで使用するストーリ構成法として適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "演繹的構成法", correct: false}
      , {description: "帰納的構成法", correct: true}
      , {description: "重点順位構成法", correct: false}
      , {description: "難易構成法", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "シリアルATAの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "PCと周辺機器とを結ぶシリアルインタフェースであり，キーボード，マウス，スピーカ，プリンタ， CD-RWドライプなど多岐にわたる周辺機器を接続する。", correct: false}
      , {description: "PCと周辺機器とを結ぶシリアルインタフェースであり，磁気ディスク装置，DVDドライブなどの高速な周辺機器を接続する。", correct: true}
      , {description: "PCと通信機器とを結ぶシリアルインタフェースであり，ルータ又はモデムを接続する。", correct: false}
      , {description: "PCとディジタルAV機器とを結ぶシリアルインタフェースであり，セットトップボックス， DVDプレーヤなどを接続する。", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "1台のCPUの性能を1とするとき，そのCPUをn台用いたマルチプロセッサの性能Pが，<br>" +
"P=n/(1+(n-1)a)<br>" +
"で表されるとする。ここで，aはオーバヘッドを表す定数である。例えば，a = 0.1，n=4とすると，p≒3なので，4台のCPUからなるマルチプロセッサの性能は約3になる。この式で表されるマルチプロセッサの性能には上限があり，nを幾ら大きくしでもある値以上には大きくならない。a=0.1の場合，その値は幾らか。"
    , multiple_answer: false
    , answers: [
      {description: "5", correct: false}
      , {description: "10", correct: true}
      , {description: "15", correct: false}
      , {description: "20", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "データマイニングを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "多次元データベースを使ってデータの組合せを変え，データ間の関連性を分析すること", correct: false}
      , {description: "データとメソッドを一緒にしてオブジェクトの内部構造を利用者に見えなくすること", correct: false}
      , {description: "データベースをチューニングし，データ更新を高速化すること", correct: false}
      , {description: "データを，いろいろな視点や切り口から，発見型の手法や統計的手法を使って分析することで，隠れているデータ間の関連性や規則性を見つけ出すこと", correct: true}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "TCP/IPネットワークで使用されるARPの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IPアドレスからMACアドレスを得るためのプロトコル", correct: true}
      , {description: "IPアドレスからホスト名(ドメイン名)を得るためのプロトコル", correct: false}
      , {description: "MACアドレスからIPアドレスを得るためのプロトコル", correct: false}
      , {description: "ホスト名(ドメイン名)からIPアドレスを得るためのプロトコル", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "緊急事態を装って組織内部の人間からパスワードや機密情報を入手する不正な行為は，どれに分類されるか。"
    , multiple_answer: false
    , answers: [
      {description: "ソーシャルエンジニアリング", correct: true}
      , {description: "トロイの木馬", correct: false}
      , {description: "パスワードクラック", correct: false}
      , {description: "踏み台攻撃", correct: false}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "労働者派遣法に適合するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "派遣契約の内容にかかわらず合理的な理由がある場合には，派遣先の作業指示者の判断で派遣労働者に残業を命じることができる。", correct: false}
      , {description: "派遣先の事業所に属する従業員はだれでも，派遣労働者に業務命令を行うことができる。", correct: false}
      , {description: "労働者派遣法で認められた業務であれば，派遣先の判断で派遣労働者の業務内容を変更できる。", correct: false}
      , {description: "労働者派遣法で認められた特殊な技能を要する業務であれば，同一人の派遣を3年を超えて行うことができる。", correct: true}
    ]
    , category: 'SM-H21-AUTUMN'
  }
  , {
    description: "IT投資マネジメントを，プロジェクト単位での最適化を目的とする個別プロジェクトマネジメントと企業レベルの最適化を目的とする戦略マネジメントの二つに分類した場合，戦略マネジメントでの実施項目はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "実施中のプロジェクトの評価を行い，全社IT統括部門に進捗状況などを報告した上で，必要に応じて実施計画を修正する。", correct: false}
      , {description: "全社IT投資計画を基にプロジェクトの実施計画を策定し，投資目的・目標の設定と，投資額の見積りを行い，予算の配分を判断する。", correct: false}
      , {description: "全社規模でのIT投資評価の方法や，複数のプロジェクトから成るIT投資ボートフォリオの選択基準を決定し，全社IT投資テーマを起案する。", correct: true}
      , {description: "プロジェクトが完了してから一定期聞が経過した後，実施計画段階で設定した効果目標が達成されているか否かを実績に基づいて検証する。", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "TCOの算定に当たって，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "エンドユーザコンピューティングにおける利用部門の運用費用は考慮しない。", correct: false}
      , {description: "システム監査における監査対象データの収集費用や管理費用は考慮しない。", correct: false}
      , {description: "システム障害の発生などによって，その障害とは直接関係のない仕入先企業が被るおそれがある，将来的な損失額も考慮する。", correct: false}
      , {description: "利用部門におけるシステム利用に起因する，埋没原価などの見えない費用も考慮する。 ", correct: true}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "物流業務において，10%の物流コストの削減の目標を立てて，図のような業務プロセスの改善活動を実施している。図中のcに相当する活動はどれか。<br><br>" +
                 "<img src = \"js/data/image/ST_H27_q03.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "CSF (Critical Success Factorlの抽出", correct: false}
      , {description: "KGI (Key Goal Indicator)の設定", correct: false}
      , {description: "KPI (Key Performance Indicator)の設定", correct: true}
      , {description: "MBO (Management by Objectives)の導入", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "共通フレームによれば，システム化計画の立案において，システム化機能を整理し，情報と処理の流れを明確にするために実施する作業はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "機能要件の定義", correct: false}
      , {description: "業務運用手順の文書化", correct: false}
      , {description: "業務モデルの作成", correct: true}
      , {description: "システム方式の確立", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "IT投資案件Xの5年間の投資効果をNPVで評価する場合の算出式はどれか。<br><br>" +
                 "<img src = \"js/data/image/ST_H27_q05.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "<img src = \"js/data/image/ST_H27_q05a.png\"/>", correct: false}
      , {description: "<img src = \"js/data/image/ST_H27_q05b.png\"/>", correct: false}
      , {description: "<img src = \"js/data/image/ST_H27_q05c.png\"/>", correct: true}
      , {description: "<img src = \"js/data/image/ST_H27_q05d.png\"/>", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "アンゾフの成長マトリクスを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部環境と内部環境の観点から，強み，弱み，機会，脅威という伺つの要因について情報を整理し，企業を取り巻く環境を分析する手法である。", correct: false}
      , {description: "企業のビジョンと戦略を実現するために，財務，顧客，内部ビジネスプロセス，学習と成長という四つの視点から事業活動を検討し，アクションプランまで具体化していくマネジメント手法である。", correct: false}
      , {description: "事業を，市場浸透，市場拡大，製品開発，多角化という四つのタイプに分類し，事業の方向性を分析する手法である。", correct: true}
      , {description: "製品を，導入期，成長期，成熟期，衰退期という四つの段階に分類し，企業にとって最適な戦略を分析する手法である。", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "バリューチェーンは，付加価値を生み出す事業活動を五つの主活動と四つの支援活動に分類する。支援活動に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "技術開発", correct: true}
      , {description: "購買物流", correct: false}
      , {description: "サービス", correct: false}
      , {description: "製造", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "観測データを類似性によって集団や群に分類し，その特徴となる要因を分析する手法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "クラスタ分析法", correct: true}
      , {description: "指数平滑法", correct: false}
      , {description: "デルファイ法", correct: false}
      , {description: "モンテカルロ法", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "消費者市場のセグメンテーション変数のうち，心理的変数はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "使用頻度，ロイヤリテイ", correct: false}
      , {description: "性格，ライフスタイル", correct: true}
      , {description: "都市規模，人口密度", correct: false}
      , {description: "年齢，職業", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "バイラルマーケティングを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インターネット上で成果報酬型広告の仕組みを用いるマーケティング手法である。", correct: false}
      , {description: "個々の顧客を重要視し，個別ニーズへの対応を図るマーケティング手法である。", correct: false}
      , {description: "セグメントごとに差別化した，異なる商品を提供するマーケティング手法である。", correct: false}
      , {description: "人から人へと評判が伝わることを積極的に利用するマーケティング手法である。", correct: true}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "マーケットバスケット分析を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "POSシステムなどで収集した販売情報から，顧客が買物をした際の購入商品の組合せを分析する。", correct: true}
      , {description: "網の目状に一定の経線と緯線で区切った地域に対して，人口，購買力など様々なデータを集計し，より細かく地域の分析を行う。", correct: false}
      , {description: "一定の目的で地域を幾つかに分割し，各地域にオピニオンリーダを選んで反復調査を行い，地域の傾向や実態を把握する。", correct: false}
      , {description: "商品ごとの販売金額又は粗利益額を高い順に並べ，その累計比率から商品を三つのランクに分けて商品分析を行い，売れ筋商品を把握する。", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "一人の顧客に関する顧客生涯価値の見積りで留意すべきことはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "顧客が紹介する他の顧客の購入見込みも対象とする。", correct: true}
      , {description: "顧客の平均購入単価よりも年間購入回数を重視する。", correct: false}
      , {description: "商品を新しく買い換える行為は考慮しない。", correct: false}
      , {description: "新製品のプロモーション費用は対象としない。", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "企業が実施するマクロ環境分析のうち.PEST分析によって戦略を策定している事例はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "購買決定者の年齢層や社会的なポジション，購買に至るプロセスの中で購買行動に影響する要因を把握し，自社の製品の市場投入方法を決定する。", correct: false}
      , {description: "自社の製品市場に参入してくると見込まれる，別市場の企業の動向を把握し，新製品の開発を決定する。", correct: false}
      , {description: "自社の販売力，生産力の評価や自社の保有する技術力を検証し，新しく進出する市場分野を決定する。", correct: false}
      , {description: "法規制，景気動向，流行の推移や新技術の状況を把握し，自社の製品改善方針を決定する。", correct: true}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "知識創造プロセス (SECIモデル)において，表出化に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "顧客への対応の仕方を，業種別にマニュアル化する。", correct: true}
      , {description: "顧客を訪問し，要望についてのヒアリングを行う。", correct: false}
      , {description: "製品操作マニュアルと業務マニュアルから，運用マニュアルを作成する。", correct: false}
      , {description: "マニュアルに記載された方法を実践し，スキルを習得する。", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "企業と大学との共同研究に関する記述として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業のニーズを受け入れて共同研究を実施するための機関として，各大学にTLO (Technology Licensing Organization)が設置されている。", correct: false}
      , {description: "共同研究で得られた成果を特許出願する場合，研究に参加した企業，大学などの法人を発明者とする。", correct: false}
      , {description: "共同研究に必要な経費を企業が全て負担した場合でも，実際の研究は大学の教職員と企業の研究者が対等の立場で行う。", correct: true}
      , {description: "国立大学法人が共同研究を行う場合，その研究に必要な費用は全て国が負担しなければならない。", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "ebXMLを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "XML文書をペースとしたメッセージをHTTPなどのプロトコルで交換することによって，他のコンピュータ上のオブジェクトにアクセスするための仕様である。", correct: false}
      , {description: "XMLを応用したもので，インターネット上のディレクトリ(登録簿)にWebサーピスを登録し，検索可能とするための仕様である。", correct: false}
      , {description: "XMLを用いたWebサービス間の通信プロトコルやビジネスプロセスの記述方法，取引情報のフォーマットなどを定義する一連の仕様である。", correct: true}
      , {description: "プログラムからWebサービスを呼び出す際に必要なインタフェース情報を，XML形式の言語で記述するための仕様である。 ", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "インターネットにおける広告形態のうち，インプレッション保証型広告の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "あらかじめ決められたキーワードを利用者が検索エンジンに入力した際に表示される広告", correct: false}
      , {description: "掲載した広告を見た利用者が，その広告をクリックした上で，掲載者の意図に沿った行動を起こした場合に，掲載料を支払う広告", correct: false}
      , {description: "契約した表示回数に達するまで掲載を続ける広告", correct: true}
      , {description: "ポータルサイトのトップページや特集ページなどに一定期間掲載する広告", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "e-ビジネス分野で提唱されているロングテールの考え方を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "売れ筋商品に絞り込んで販売するのではなく，多品種少量販売によって大きな売上や利益を得ることができる。", correct: true}
      , {description: "業界標準を確立した製品・サービスは生産規模が2倍になると生産性が更に向上し，収益が2倍以上になる。", correct: false}
      , {description: "全体の2割の優良顧客が全体の売上の8割を占め，全商品の上位2割が8割の売上を占める。", correct: false}
      , {description: "利用者が増えるほど，個々の利用者の便益が増加し，その結果，ますます利用者が繕えることで寡占化が進む。", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "リーダシップを“タスク志向”と“人間関係志向”の強弱で四つの型に分類し，部下の成熟度によって，有効なリーダシツプの型が変化するとしたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SL理論", correct: true}
      , {description: "Y理論", correct: false}
      , {description: "コンビテンシモデル", correct: false}
      , {description: "マズローの欲求段階説", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "A社とB社の比較表から分かる，A社の特徴はどれか。<br><br>" +
                 "<img src = \"js/data/image/ST_H27_q20.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "売上高の増加が大きな利益に結び付きやすい。", correct: true}
      , {description: "限界利益率が低い。", correct: false}
      , {description: "損益分岐点が低い。", correct: false}
      , {description: "不況時にも，売上高の減少が大きな損失に結び付かず不況抵抗力は強い。", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "EVA (経済的付加価値)の算出方法を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "効果の現在価値と投資額の差がゼロになる資本コストを求める。", correct: false}
      , {description: "投資額に対してどれだけ利益を生み出しているかを求める。", correct: false}
      , {description: "投資額を回収するのに必要な期間(年数)を求める。", correct: false}
      , {description: "利益から資本費用(投資額x資本コスト)を引いて金額を求める。", correct: true}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "我が国における，連結の対象となる子会社の範囲を決定する基準はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "営業循環基準", correct: false}
      , {description: "影響力基準", correct: false}
      , {description: "支配力基準", correct: true}
      , {description: "持株基準", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "国税関係帳簿を磁気媒体で保存する場合，法律で規定されているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "あらかじめ所轄の税務署長の承認が必要となる。", correct: true}
      , {description: "定められた性能の媒体を用いなければならない。", correct: false}
      , {description: "電子取引に関する記録に限って許可されている。", correct: false}
      , {description: "バックアップとして紙又はマイクロフィルムでの保存が義務付けられている。", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "JIS Q 22301:2013が要求事項を規定している対象はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスマネジメントシステム", correct: false}
      , {description: "個人情報保護マネジメントシステム", correct: false}
      , {description: "事業継続マネジメントシステム", correct: true}
      , {description: "情報セキュリティマネジメントシステム", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "メールサーバ(SMTPサーバ)の不正利用を防止するために，メールサーバにおいて行う設定はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ゾーン転送のアクセス元を制御する。", correct: false}
      , {description: "第三者中継を禁止する。", correct: true}
      , {description: "ディレクトリに存在するファイル名の表示を禁止する。", correct: false}
      , {description: "特定のディレクトリ以外でのCGIプログラムの実行を禁止する。 ", correct: false}
    ]
    , category: 'ST-H27-AUTUMN'
  }
  , {
    description: "エンタープライズアーキテクチャの参照モデルのうち，BRM(Business ReferenceModel)で提供されるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "アプリケーションサービスを機能的な観点から分類・体系化したサービスコンポーネントから成る，アプリケーションサービスの再利用を促進するためのモデル", correct: false}
      , {description: "業務分類に従った業務体系・システム体系と各種業務モデルから成る，組織全体で業務やシステムの共通化の対象領域を洗い出すためのモデル", correct: true}
      , {description: "サービスコンポーネントを実際に活用するためのプラットフォームやテクノロジの標準仕様から成る，組織全体での技術の標準化を促進するためのモデル", correct: false}
      , {description: "組織間で共有される可能性の高い情報について，名称，定義及び各種属性を総体的に記述したモデルから成る，情報の再利用・統合を促進するためのモデル", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "IDEALによるプロセス改善の取組みにおいて，図のbに当てはまる説明はどれか。<br><br>" +
                 "<img src = \"js/data/image/ST_H26_q02.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "解決策を作り，その先行評価・試行・展開を行う。", correct: false}
      , {description: "改善活動の優先順位を設定し，具体的な改善計画を作成する。", correct: true}
      , {description: "活動を分析してその妥当性を確認し，次のサイクルの準備を行う。", correct: false}
      , {description: "業務の現状を調査して可視化し，改善ポイントを明らかにする。", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "BI (Business Intelligence)を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業内外のデータを蓄積し，分類・加工・分析して活用することによって，企業の意思決定の迅速化を支援する手法", correct: true}
      , {description: "企業内の慣行などにとらわれず，業務プロセスを抜本的に再構築することによって，コスト・品質・サービス水準などを改善する手法", correct: false}
      , {description: "企業内の業務の流れを可視化し，業務改善サイクルを適用することによって，継続的な業務改善を図る手法", correct: false}
      , {description: "企業内の異なるシステムを互いに連結し，データやプロセスの統合を図ることによって，効率よく活用する手法", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "IT投資案件において，投資効果を.. PBP(Pay Back Period)で評価する。投資額が500のとき，期待できるキャッシュインの四つのシナリオa～dのうち，PBP効果が最も高いものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "<img src = \"js/data/image/ST_H26_q04a.png\"/>", correct: false}
      , {description: "<img src = \"js/data/image/ST_H26_q04b.png\"/>", correct: false}
      , {description: "<img src = \"js/data/image/ST_H26_q04c.png\"/>", correct: false}
      , {description: "<img src = \"js/data/image/ST_H26_q04d.png\"/>", correct: true}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "IT技術動向，ソフトウェアパッケージ情報，開発方法論などの情報提供をベンダに要請するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "IFB", correct: false}
      , {description: "RFI", correct: true}
      , {description: "RFP", correct: false}
      , {description: "RFQ", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "専門の事業者が提供するサービスのうち，EMSの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "コールセンタの企画，設計から業務運用までを一括して受託することによって，委託元のコールセンタへの設備投資や人員調達を不要とするサービス", correct: false}
      , {description: "人事，経理，総務などの業務を標準化してグループ内の1か所に集約することによって，グループ全体の間接業務のコスト削減に貢献するサービス", correct: false}
      , {description: "複数の電子機器メーカから製品の設計，製造を一括して受託することによって，生産規模を確保し，低コストで製品を提供するサービス", correct: true}
      , {description: "プロパイダ側のコンピュータ上でソフトウェアを稼働させて，利用者はそのソフトウェアの機能をネットワーク経由で利用するサービス", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "LBOの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "株式市場で一般株主に対して，一定期間に一定の価格で株式を買い付けることを公告し，相手先企業の株式を取得する。", correct: false}
      , {description: "現経営陣や事業部門の責任者が株主から自社の株式を譲り受けることによって，当該事業の経営権を取得する。", correct: false}
      , {description: "投資会社が，業績不振などの問題を抱えた企業の株式の過半数を取得した上で，マネジメントチームを派遣い経営に参画する。", correct: false}
      , {description: "買収先企業の資産などを担保に，金融機関から資金を調達するなどして，限られた資金で企業を買収する。 ", correct: true}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "PPMにおいて，投資用の資金源として位置付けられる事業はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "市場成長率が高く，相対的市場占有率が高い事業", correct: false}
      , {description: "市場成長率が高く，相対的市場占有率が低い事業", correct: false}
      , {description: "市場成長率が低く，相対的市場占有率が高い事業", correct: true}
      , {description: "市場成長率が低く，相対的市場占有率が低い事業", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "コールセンタシステムにおけるIVRを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業ピル内などに設置して，外線電話と内線電話，内線電話同士を交換する装置", correct: false}
      , {description: "顧客からの電話に自動応答し，顧客自身の操作によって情報の選択や配信，合成音声による応答などを行う仕組み", correct: true}
      , {description: "コンピュータと電話を統合し，顧客データベースとPBXを連動させて，発呼や着呼と同時に必要な顧客情報をオペレータの画面上に表示するシステム", correct: false}
      , {description: "着信した電話を，あらかじめ決められたルールに従ってa複数のオペレータのうちの1人だけに接続する仕組み", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "消費者市場のセグメンテーション変数のうち，行動的変数はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "社会階層，ライフスタイル", correct: false}
      , {description: "使用頻度，ロイヤルティ", correct: true}
      , {description: "都市規模，人口密度", correct: false}
      , {description: "年齢，職業", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "マーケティング調査におけるエスノグラフィーの活用事例はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "業界誌や業界新聞，調査会社の売れ筋ランキングなどから消費者の動向を探る。", correct: false}
      , {description: "広告の一部に資料請求の項目を入れておき，それを照会してきた人数を調べる。", correct: false}
      , {description: "消費行動の現場で観察やインタビューを行い，気付かなかった需要を発掘する。", correct: true}
      , {description: "同等の条件下で複数パターンの見出しを広告として表示し，反応の違いを測る。", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "顧客の収益が表のように見込まれるとき，3年間の顧客生涯価値(LTV)は何百万円か。ここで，割引率は10%とし，計算は百万円未満を切り捨てるものとする。<br><br>" +
                 "<img src = \"js/data/image/ST_H26_q12.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "65", correct: false}
      , {description: "67", correct: true}
      , {description: "70", correct: false}
      , {description: "73", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "ファイブフォース分析において，企業の競争力に影響を与える五つの要因として，新規参入者の脅威，バイヤの交渉力，競争業者間の敵対関係，代替製品の脅威と，もう一つはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "サプライヤの交渉力", correct: true}
      , {description: "自社製品の品質", correct: false}
      , {description: "消費者の購買力", correct: false}
      , {description: "政府の規制", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "経営戦略に用いるCSF分析で明らかになるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "業界内の競争に影響する要因と，自社の強み", correct: false}
      , {description: "競争環境の脅威と機会，企業の強み・弱み", correct: false}
      , {description: "成功するための重要な機能や特性", correct: true}
      , {description: "保有する事業の成長性と収益性", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "カーブアウトの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業の経営者などが自社の株式や事業部門を買収すること", correct: false}
      , {description: "競争相手に知られたくない技術を，特許取得せずノウハウとして社内に秘匿すること", correct: false}
      , {description: "自社の事業の一部を戦略的に切り出し，埋もれた技術や人材を社外の別組織として独立させること", correct: true}
      , {description: "製造委託契約を締結し，外部から完成品を調達すること", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "製品のロードマップに従って製品を開発していく場合に，プロダクトライン開発を適用する利点はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "技術者個人のカを組織力よりも重視するので，成熟度が低い組織でも製品開発に成功しやすい。", correct: false}
      , {description: "品質が安定した資産を再利用していくので，品質が安定した製品を低いコストで開発できる。", correct: true}
      , {description: "ロードマップ上の各製品を完全に独立して開発していくので，一つの製品の不具合が他の製品に波及することがない。", correct: false}
      , {description: "ロードマップ上の最初の機種の開発開始時に，開発環境を準備するなどの初期投資が不要なので，市場への新規参入が容易になる。", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "TOC (Theory of Constraints)の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "個々の工程を個別に最適化することによって，生産工程全体を最適化する。", correct: false}
      , {description: "市場の需要が供給能力を下回っている場合に有効な理論である。", correct: false}
      , {description: "スループット(=売上高一資材費)の増大を最重要視する。", correct: true}
      , {description: "生産プロセス改善のための総投資額を制約条件として確立された理論である。", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "ある会社の生産計画部では，毎月25日に次の手続で翌月分の計画生産量を決定している。8月分の計画生産量を求める式はどれか。<br><br>" +
                 "<img src = \"js/data/image/ST_H26_q18.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "I6+P7-S7+S8", correct: false}
      , {description: "S8+S9+S10+S11-I7", correct: true}
      , {description: "S8+S9+S10+S11-I8", correct: false}
      , {description: "S9+S10+S11-I7", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "HEMSの説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "太陽光発電システム及び家庭用燃料電池が発電した電気を，家庭などで利用できるように変換するシステム", correct: false}
      , {description: "廃棄物の減量及び資源の有効利用推進のために，一般家庭及び事務所から排出された家電製品の有用な部分をリサイクルするシステム", correct: false}
      , {description: "ヒートポンプを利用して，より少ないエネルギーで大きな熱量を発生させる電気給湯システム", correct: false}
      , {description: "複数の家電製品をネットワークでつなぎ，電力の可視化及び電力消費の最適制御を行うシステム", correct: true}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "コンピテンシモデルの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "権限行使と命令統制による労務管理を批判し，目標管理制度や経営参加制度などによる動機付けが有効であるとしたもの", correct: false}
      , {description: "最適なリーダシップの唯一のスタイルは存在せず，望ましいリーダシップのスタイルは，状況に応じて異なるとしたもの", correct: false}
      , {description: "人材の評価や育成の基準とするために，恒常的に成果に結び付けることができる個人の行動や思考特性を定義したもの", correct: true}
      , {description: "人間の基本的欲求を低次から，生理的欲求，安全の欲求，所属と愛の欲求，承認の欲求，自己実現の欲求としたもの", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "マトリックス組織を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "事業部制組織と職能制組織との両方の特徴を生かそうとする組織である。", correct: true}
      , {description: "新事業開発のために社内に独立した活動単位として設置し，小さな企業であるかのように運営する組織である。", correct: false}
      , {description: "製品群などを事業単位として構成し，事業単位ごとに意思決定を行う組織である。", correct: false}
      , {description: "専門性を生かした組織であり，研究開発，製造，販売，人事・総務，経理・財務のような職能別に構成された組織である。", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "ROE (ReturnOnEquity)を減少させるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ROAの増加", correct: false}
      , {description: "自己資本比率の増加", correct: true}
      , {description: "総資本回転率の増加", correct: false}
      , {description: "当期純利益率の増加", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "次の条件において.. A社の連結損益計算書を作成した場合の連結売上高は何百万円か。<br>" +
    "<br/>" +
"<div>〔条件〕" +
"・A社は，B社の株式の80%を取得している。" +
"・B社は，C社の株式の60%を取得している。" +
"・B社は，D社の株式の20%を取得している。ただし，役員の派遣などはない。" +
"・A社の売上高は，700,000百万円であり，その10%は，B社に対するものである。" +
"・B社の売上高は，350,000百万円であり，その20%は，D社に対するものである。" +
"・C社の売上高は，250,000百万円である。" +
"・D社の売上高は，200,000百万円である。" +
"・A社とB社，B社とD社以外の相互間取引はない。</div>"
    , multiple_answer: false
    , answers: [
      {description: "1,230,000", correct: true}
      , {description: "1,300,000", correct: false}
      , {description: "1,360,000", correct: false}
      , {description: "1,430,000", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "刑法の電子計算機使用詐欺罪が適用される違法行為はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "いわゆるねずみ講方式による取引形態のWebページを開設する。", correct: false}
      , {description: "インターネット上に，実際よりも良品と誤認させる商品カタログを掲載し，粗悪な商品を販売する。", correct: false}
      , {description: "インターネットを経由して銀行のシステムに虚偽の情報を与え，不正な振込や送金をさせる。", correct: true}
      , {description: "企業のWebページを不正な手段で改変し，その企業の信用を傷つける情報を流す。", correct: false}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "シングルサインオンの実装方式の特徴のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "クッキーを使ったシングルサインオンの場合，サーバごとの認証情報を含んだクッキーをクライアントで生成し，各サーバ上で保存，管理する。", correct: false}
      , {description: "クッキーを使ったシングルサインオンの場合，認証対象のサーバを，異なるインターネットドメインに配置する必要がある。", correct: false}
      , {description: "リバースプロキシを使ったシングルサインオンの場合，認証対象のWebサーバを，異なるインターネットドメインに配置する必要がある。", correct: false}
      , {description: "リバースプロキシを使ったシングルサインオンの場合，利用者認証においてパスワードの代わりにディジタル証明書を用いることができる。 ", correct: true}
    ]
    , category: 'ST-H26-AUTUMN'
  }
  , {
    description: "情報戦略の投資効果を評価するとき，利益額を分子に，投資額を分母にして算出するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "EVA", correct: false}
      , {description: "IRR", correct: false}
      , {description: "NPV", correct: false}
      , {description: "ROI", correct: true}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "TCOの策定に当たって適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "エンドユーザコンピューティングにおけるユーザ部門の運用コストを考慮する必要はない。", correct: false}
      , {description: "システム監査における監査対象データの収集コストや管理コストを考慮する必要はない。", correct: false}
      , {description: "システム障害の発生などによって仕入先企業が被るおそれのある，将来的な損失額も考慮する必要がある。", correct: false}
      , {description: "ユーザ部門におけるシステム利用に起因する，埋没原価などの見えないコストも考慮する必要がある。", correct: true}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "エンタープライズアーキテクチャを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "今まで開発してきた業務システムをビジネス価値とソリューション品質の2軸で分析し，業務システムごとの改善の方向を決定する。", correct: false}
      , {description: "既存の業務と情報システムの全体像及び将来の目標を明示することによって，ITガパナンスを強化し，経営の視点からIT投資効果を高める。", correct: true}
      , {description: "財務，顧客，内部ビジネスプロセス，学習と成長の四つの視点から評価指標を設定し，IT投資による組織全体への効果を的確に管理する。", correct: false}
      , {description: "情報システムの開発・保守とその組織運営の現状を調査し，ソフトウェアプロセスの成熟度を評価して，プロセス改善の方向を決定する。", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "BABOKでは，要求をビジネス要求，ステークホルダ要求，ソリューション要求及び移行要求の4種類に分類している。ソリューション要求の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "経営戦略や情報化戦略などから求められる要求であり，エンタープライズアナリシスの活動で定義している。", correct: false}
      , {description: "新システムへのデータ変換や要員教育などに関する要求であり，ソリューションのアセスメントと妥当性確認の活動で定義している。", correct: false}
      , {description: "組織・業務・システムが実現すべき機能要求と非機能要求であり，要求アナリシスの活動で定義している。", correct: true}
      , {description: "利用部門や運用部門などから個別に発せられるニーズであり，要求アナリシスの活動で定義している。", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "非機能要件の使用性に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "4時間以内のトレーニングで新しい画面インタフェースを操作できること", correct: true}
      , {description: "業務のピーク時でも 8時間以内で夜間パッチ処理を完了できること", correct: false}
      , {description: "現行のシステムから新システムへ72時間以内で移行できること", correct: false}
      , {description: "地震などの大規模災害時でも144時間以内にシステムを復旧できること", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "グリーン購入法において，“環境物品等”として規定されているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ISO 14001認証を取得した企業が製造又は提供する製品・サービス", correct: false}
      , {description: "IT活用による省エネなど，グリーンITに関わる製品・サービス", correct: false}
      , {description: "環境への負荷低減に資する原材料・部品文は製品・サービス", correct: true}
      , {description: "コーズリレーテッドマーケティング対象の，環境配慮の製品・サービス ", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "市場成長率と相対的市場シェアから，市場と企業の関係を分析し，自社製品や事業についての最適な資源配分方針を求めるための手法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "3C", correct: false}
      , {description: "BSC", correct: false}
      , {description: "PPM", correct: true}
      , {description: "SWOT", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "アンゾフの成長マトリクスを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部環境と内部環境の観点から，強み，弱み，機会及び脅威の四つの要因について情報を整理し，企業を取り巻く環境を分析する手法である。", correct: false}
      , {description: "企業のビジョンと戦略を実現するために，財務，顧客，内部ビジネスプロセス及び学習と成長の四つの視点から事業活動を検討し，アクションプランまで具体化していくマネジメント手法である。", correct: false}
      , {description: "事業を，市場浸透，市場拡大，製品開発及び多角化の四つのタイプに分類し，事業の方向性を分析する手法である。", correct: true}
      , {description: "製品を，導入期，成長期，成熟期及び衰退期の四つの段階に分類し，企業にとって最適な戦略を分析する手法である。", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "コアコンビタンスに該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "主な事業ドメインの高い成長率", correct: false}
      , {description: "競合他社よりも効率性が高い生産システム", correct: true}
      , {description: "参入を予定している事業分野の競合状況", correct: false}
      , {description: "収益性が高い事業分野での市場シェア", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "バリューチェーンは，付加価値を生み出す事業活動を五つの主活動と四つの支援活動に分類する。支援活動に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "技術開発", correct: true}
      , {description: "購買物流", correct: false}
      , {description: "サービス", correct: false}
      , {description: "製造", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "観測データを類似性によって集団や群に分類し，その特徴となる要因を分析する手法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "クラスタ分析法", correct: true}
      , {description: "指数平滑法", correct: false}
      , {description: "デルファイ法", correct: false}
      , {description: "モンテカルロ法", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "人から人へと評判が伝わることを積極的に利用することが特徴的なマーケティング手法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "アフィリエイトマーケティング", correct: false}
      , {description: "セグメン卜内差別化マーケティング", correct: false}
      , {description: "パーミッションマーケティング", correct: false}
      , {description: "バイラルマーケティング", correct: true}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "プランド戦略における，プランドエクイティを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "顧客がそのブランドに対してどの程度の執着心をもっているかを示す概念であり，これが高いほど，顧客は他のブランドに乗り換えにくくなる。", correct: false}
      , {description: "顧客がプランド要素に接触したとき，企業として顧客の心の中に何を連想してほしいかのイメージである。", correct: false}
      , {description: "特定の組織にとって自社のブランドの名前やシンボルと結び付いたブランドの資産の集合であり，製品やサービスの価値を増大させるものである。", correct: true}
      , {description: "名称，キャッチフレーズ，ロゴマーク，キャラクタ，記号，包装，スローガンなど，ブランドを特定して差別化するための要素である。", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "計画的陳腐化を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "機能がまだ十分に使用可能な製品を，新しいデザインに変更することによって，既存製品からの移行を進めていくこと", correct: true}
      , {description: "製品の誕生から廃棄までのうち，製品のニーズがなくなることによって，売上も利益も下降線をたどる段階のこと", correct: false}
      , {description: "製品の値引き販売をすることによって，多くの人の購入を狙うこと", correct: false}
      , {description: "大規模な流通業者が，あえてプランド名を付けないことによって，旧タイプの製品を提供すること", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "マーケットバスケット分析を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "POSシステムで収集した販売情報から，顧客が貨物をした際の購入商品の組合せなどを分析する。", correct: true}
      , {description: "網の白状に一定の経線と緯線で区切った地域に対して，人口，購買力など様々なデータを集計し，より細かく地域の分析を行う。", correct: false}
      , {description: "一定の目的で地域を幾つかに分割し，各地域にオピニオンリーダを選んで反復調査を行い，地域の傾向や実態を把握する。", correct: false}
      , {description: "商品ごとの販売金額文は粗利益額を高いl頓に並べ，その累計比率から商品を三つのランクに分けて商品分析を行い，売れ筋商品を把握する。", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "企業が実施するマクロ環境分析のうち，PEST分析によって戦略を策定している事例はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "購買決定者の年齢層や社会的なポジション，購買に至るプロセスの中で購買行動に影響する要因を把握し，自社の製品の市場投入方法を決定する。", correct: false}
      , {description: "自社の製品市場に参入してくると見込まれる，別市場の企業の動向を把握し，新製品の開発を決定する。", correct: false}
      , {description: "自社の販売力，生産力の評価や自社の保有する技術力を検証し，新しく進出する市場分野を決定する。", correct: false}
      , {description: "法規制，景気動向，流行の推移や新技術の状況を把握し，自社の製品改善方針を決定する。", correct: true}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "SECIモデルにおける，内面化の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "新たに創造された知識を組織に広め，新たな暗黙知として習得すること", correct: true}
      , {description: "組織内の個人，小グループが有する暗黙知を形式知として明示化すること", correct: false}
      , {description: "組織内の個人，小グループで暗黙知の共有化や，新たな暗黙知を創造すること", correct: false}
      , {description: "明示化した形式知を組み合わせ，それを基に新たな知識を創造すること", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "特許を分析して生まれた問題解決技法であり，問題(矛盾)を創造的・発明的に解決するための弁証法的な思考j去を具体的な方法論にまとめたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "QFD", correct: false}
      , {description: "TRIZ", correct: true}
      , {description: "シックスシグマ", correct: false}
      , {description: "親和図法", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "ある期間の生産計画において，図の部品表で表される製品Aの需要量が10個であるとき，部品Dの正味所要量は何個か。ここで，ユニットBの在庫残が5個，部品Dの在庫残が25個あり，他の在庫残，仕掛残，注文残，引当残などはないものとする。<br/><br/>" +
                 "<img src = \"js/data/image/ST_H25_q19.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "80", correct: false}
      , {description: "90", correct: true}
      , {description: "95", correct: false}
      , {description: "105", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "ファプレスの特徴を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "1人又は数人が全工程を担当する方式であり，作業内容を変えるだけで生産品目を変更でき，多品種少量生産への対応が容易である。", correct: false}
      , {description: "後工程から，部品納入の時期，数量を示した作業指示書を前工程に渡して部品供給を受ける仕組みであり，在庫を圧縮することができる。", correct: false}
      , {description: "生産設備である工場をもたないので，資金が固定化せず，需給変動や製品ライフサイクルに伴うリスクが低減できる。", correct: true}
      , {description: "生産設備をもたない複数の企業の製造を請け負うことによって，効率の良い設備運営や高度な研究開発を行える。", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "リーダシップを“タスク志向“と“人間関係志向”の強弱で四つの型に分類し，部下の成熟度によって，有効なリーダシップの型が変化するとしたものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SL理論", correct: true}
      , {description: "Y理論", correct: false}
      , {description: "コンピテンシモデル", correct: false}
      , {description: "マズローの欲求段階説", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "アクションラーニングを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ある企業や業界で起こった事例を基にして，問題解決や意思決定について議論する学習方法", correct: false}
      , {description: "自社が直面する経営課題に対して参加者が自ら施策を立案し，問題解決に向けた取組みを実践していく学習方法", correct: true}
      , {description: "シミュレーション機能を使用して，販売，製造，人事，財務における意思決定を模擬体験する学習方法", correct: false}
      , {description: "特定の状況設定の下で，様々な立場の役割を演じて，それぞれの問題点や解決方法を考える学習方法", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "X社では(1)～(4)に示す算定方式で在庫補充量を決定している。第n週の週末時点での在庫量をB[n]，第n週の販売量をC[n]としたとき，第n週の週末に発注する在庫補充量の算出式はどれか。ここで，nは3以上とする。<br/><br/>" +
                 "〔在庫補充盈の算定方式〕<br/>" +
                 "(1) 週末ごとに在庫補充量を算出し，発注を行う。在庫は翌週の月曜日に補充される。<br/>" +
                 "(2) 在庫補充量は，翌週の販売予測量から現在の在庫量を引き，安全在庫量を加えて算出する。<br/>" +
                 "(3) 翌週の販売予測量は，先週の販売量と今週の販売量の平均値とする。<br/>" +
                 "(4) 安全在庫量は，翌週の販売予測量の10%とする。"
    , multiple_answer: false
    , answers: [
      {description: "(C[n-1]+C[n])/2x1.1-B[n]", correct: true}
      , {description: "(C[n-1]+C[n])/2x1.1-B[n-1]", correct: false}
      , {description: "(C[n-1]+C[n])/2+C[n]x0.1-B[n]", correct: false}
      , {description: "(C[n-2]+C[n-1])/2+C[n]x0.1-B[n]", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "連絡貸借対照表作成に関する相殺消去について，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "持分法適用会社相互間の債権と債務は，相殺消去しなければならない。", correct: false}
      , {description: "持分法適用会社に対する投資は，当該会社の資本と相殺消去しなければならない。", correct: false}
      , {description: "連結会社相互間の債権と債務は，相殺消去しなければならない。", correct: true}
      , {description: "連絡会社相互間の売買取引に基づく棚卸資産の期末残高は，売上と相殺消去しなければならない。", correct: false}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "派遣労働者の受入れに関する記述のうち，派遣先責任者の役割，立場として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "派遣先賢任者は，派遣先管理台帳の管理，派遣労働者から申出を受けた苦情への対応，派遣元事業主との連絡調整，派遣労働者の人事記録と考課などの任務を行わなければならない。", correct: false}
      , {description: "派遣先責任者は，派遣就業場所が複数ある場合でも，一人に絞って選任されなければならない。", correct: false}
      , {description: "派遣先責任者は，派遣労働者が従事する業務全般を統括する管理職伎の者の内から選任されなければならない。", correct: false}
      , {description: "派遣先責任者は，派遣労働者に直接指揮命令する者に対して，労働者派遣法などの関連法規の規定，労働者派遣契約の内容，派遣元からの通知などを周知しなければならない。", correct: true}
    ]
    , category: 'ST-H25-AUTUMN'
  }
  , {
    description: "エンタープライズアーキテクチャ(EA)のビジネスアーキテクチャで機能情報関連図(DFD)を作成する目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "業務・システムの機能と情報の流れを明確にする。", correct: true}
      , {description: "業務・システムの目的・機能，情報システムの管理・運用体制を明確にする。", correct: false}
      , {description: "情報システム間でやり取りされる情報の種類と方向を明確にする。", correct: false}
      , {description: "物理的なデータ構造を明確にする。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "“システム管理基準”によれば，情報戦略の全体最適化計画策定において，実施すべきことはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "開発，運用及び保守の費用の算出基礎を明確にする。", correct: false}
      , {description: "個別開発計画の優先順位及び順イ立付けのルールを明確にする。", correct: true}
      , {description: "情報システム部門及びユーザ部門の役割分担を明確にする。", correct: false}
      , {description: "ユーザニーズ調査の対象，範囲及び方法を明確にする。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "内閣府の“事業継続ガイドライン”による事業継続計画の継続的改善のプロセスを順番に並べたときcに入るものはどれか。ここで，ア～エはa～dのいずれかに入る。<br/><br/>" +
                 "<img src = \"js/data/image/ST_H24_q03.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "教育・訓練の実施", correct: false}
      , {description: "経営層による見直し", correct: false}
      , {description: "実施及び運用", correct: false}
      , {description: "点検及び是正指置", correct: true}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "システム化計画の立案において実施する作業であり，その作業の結果を基に，後続の作業でシステム化機能を整理し，情報と処理の流れを明確にするものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "機能要件の定義", correct: false}
      , {description: "業務運用手順の文書化", correct: false}
      , {description: "業務モデルの作成", correct: true}
      , {description: "システム方式の設計", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "情報システムの全体計画立案のためにE-Rモデルを用いて全社のデータモデルを作成する手順はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "管理層の業務から機能を抽出し，機能をエンティティとする。次に，機能の相互関係に基づいてリレーションシップを定義する。さらに，全社の帳票類を調査して整理し，正規化された項目に基づいて属性を定義し，全社のデータモデルとする。", correct: false}
      , {description: "企業の全体像を把握するために，主要なエンティティだけを抽出し，それらの相互間のリレーションシップを含めて，鳥瞰図を作成する。次に，エンティティを詳細化し，全てのリレーションシップを明確にしたものを全社のデータモデルとする。", correct: true}
      , {description: "業務層の現状システムを分析し，エンティティとリレーションシップを抽出する。それぞれについて適切な属性を定め，これらを基にER図を作成し，それを抽象化して，全社のデータモデルを作成する。", correct: false}
      , {description: "全社のデータとその処理過程を分析し，重要な処理を行っている業務を基本エンティティとする。次に，基本エンティティ相互のデータの流れをリレーションシップとして捉え，適切な識別名を与える。さらに，基本エンティティと関係あるデータを属性とし，全社のデータモデルを作成する。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "専門の事業者が提供するサービスのうち，EMSの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "コールセンタの企画，設計から業務運用まで一括して受託することによって，委託元のコールセンタ開設のための設備投資や人員調達を不要とするサービス", correct: false}
      , {description: "人事や経理，総務などの業務を標準化してグループ内の1か所に集約することによって，グループ全体の間接業務のコスト削減に貢献するサービス", correct: false}
      , {description: "複数の電子機器メーカから製品の設計，製造を一括して受託することによって，生産規模を確保し，低コストで製品を提供するサービス", correct: true}
      , {description: "プロパイダ側のコンピュータ上で、ノフトウェアを稼働させて，利用者はそのソフトウェアの機能をネットワーク経由で利用するサービス", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "LBOの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "株式市場で一般株主に対して，一定期間に一定の価格で株式を買い付けることを公告し，相手先企業の株式を取得する。", correct: false}
      , {description: "現経営陣や事業部門の責任者が株主から自社の株式を譲り受けることによって，当該事業の経営権を取得する。", correct: false}
      , {description: "投資会社などが，業績不振などの問題を抱えた企業の株式の過半数を取得した上で，マネジメントチームを派遣し，経営に参画する。", correct: false}
      , {description: "買収先企業の資産などを担保に，金融機関から資金を調達するなどして，限られた資金で企業を買収する。", correct: true}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "プロダクトポートフォリオマネジメン卜(PPM)マトリックスのa. bに入れる語句の適切な組合せはどれか。<br/><br/>" +
                 "<img src = \"js/data/image/ST_H24_q08.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "a=売上高利益率, b=市場占有率", correct: false}
      , {description: "a=市場成長率, b=売上高利益率", correct: false}
      , {description: "a=市場成長率, b=市場占有率", correct: true}
      , {description: "a=市場占有率, b=市場成長率", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "コアコンビタンスを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "経営活動における基本精神や行動指針", correct: false}
      , {description: "事業戦略の遂行によって達成すべき到達目標", correct: false}
      , {description: "自社を取り巻く環境に関するビジネス上の機会と脅威", correct: false}
      , {description: "他社との差別化の源泉となる経営資源", correct: true}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "事業戦略のうち，収穫戦略に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "売上高をできるだけ維持しながら，製品や事業に掛けるコストを徐々に引き下げていく乙とによって，短期的なキャッシュフローの増大を図る。", correct: true}
      , {description: "事業を分社化し，その会社を売却することによって投下資金の回収を図る。", correct: false}
      , {description: "新規事業に進出するととによって企業を成長させ，利益の増大を図る。", correct: false}
      , {description: "低価格戦略と積極的なプロモーションによって，新製品のマーケットシェアの増大を図る。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "商品の購入希望者に対して，その商品に関連する別の商品又は組合せ商品などを推奨して販売することを何というか。"
    , multiple_answer: false
    , answers: [
      {description: "アップセリング", correct: false}
      , {description: "カテゴリキラー", correct: false}
      , {description: "カテゴリトップ", correct: false}
      , {description: "クロスセリング", correct: true}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "コンジョイント分析の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "顧客ごとの売上高，利益額などを高い順に並べ，自社のビジネスの中心をなしている顧客を分析する手法", correct: false}
      , {description: "商品がもつ価格，デザイン，使いやすさなど，購入者が重視している複数の属性の組合せを分析する手法", correct: true}
      , {description: "同一世代は年齢を重ねても，時代が変化しでも，共通の行動や意識を示すことに注目した，消費者の行動を分析する手法", correct: false}
      , {description: "ブランドがもつ複数のイメージ項目を散布図にプロットし，それぞれのプランドのポジショニングを分析する手法", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "将来の科学技術の進歩の予測など、について，専門家などに対するアンケートを実施し，その結果をその都度回答者にフィードバックすることによって，ぱらぱらの予測を図のように収束させる方法はどれか。<br/><br/>" +
                 "<img src = \"js/data/image/ST_H24_q13.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ゴードン法", correct: false}
      , {description: "デルファイ法", correct: true}
      , {description: "ミニマックス法", correct: false}
      , {description: "モンテカルロ法", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "表のような顧客の収益状況が見込まれるとき，3年間の顧客生涯価値(LTV)は何百万円か。ここで，割引率は10%とし，計算は百万円未満を切り捨てるものとする。<br/><br/>" +
                 "<img src = \"js/data/image/ST_H24_q14.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "65", correct: false}
      , {description: "67", correct: true}
      , {description: "70", correct: false}
      , {description: "73", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "経営戦略に用いるCSF分析の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "業界内の競争に影響する要因と，自社の強みを明らかにする。", correct: false}
      , {description: "競争環境の脅威と機会，企業の強み・弱みを明らかにする。", correct: false}
      , {description: "成功するための重要な機能や特性を明らかにする。", correct: true}
      , {description: "保有する事業の成長性と収益性を明らかにする。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "コールセンタシステムにおけるIVRを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業ビル内などに設置して，外線電話と内線電話，内線電話同士を交換する装置", correct: false}
      , {description: "顧客からの電話に自動応答し，顧客自身の操作によって情報の選択や配信，合成音声による応答などを行う仕組み", correct: true}
      , {description: "コンピュータと電話を統合し，顧客データベースとPBXを連動させて，発呼や着呼と同時に必要な顧客情報をオペレータの函面上に表示するシステム", correct: false}
      , {description: "着信した電話を，あらかじめ決められたルールに従って，複数のオペレータのうちの1人だけに接続する住組み", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "製品のロードマップに従って製品を開発していく場合に，プロダクトライン開発を適用する利点はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "技術者個人のカを組織力よりも重視するので，成熟度の低い組織でも製品開発に成功しやすい。", correct: false}
      , {description: "品質が安定した資産を再利用していくので，品質が安定した製品を低いコストで開発できる。", correct: true}
      , {description: "ロードマップ上の各製品を完全に独立して開発していくので，一つの製品の不具合が他の製品に波及することがない。", correct: false}
      , {description: "ロードマップ上の最初の機種の開発開始時に，ソフトウェア資産を準備するなどの初期投資が不要なので，市場への新規参入が容易になる。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "アパレル業界におけるSPAの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "過剰在庫，返品，特殊サイズ，傷などによって正規の価格では売れない商品を低価格で販売する。", correct: false}
      , {description: "顧客のニーズに対応したカスタマイズを実現するために，顧客の注文を受けてから最終製品の生産を行う。", correct: false}
      , {description: "商品企画から生産，販売までを行う製造小売業であり，自社のブランド商品を消費者に直接提供する。", correct: true}
      , {description: "特定の商品分野に絞り込み，豊富な品揃えとローコストオペレーションによって，徹底した低価格訴求を行う。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "XBRLを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業内文は企業間で使用される複数の業務システムを連携させることであり，データやビジネスプロセスの効率的な統合が可能となる。", correct: false}
      , {description: "小売庖の端末からネットワーク経由で発注を行うことによって，迅速かつ正確な発注作業が実現でき，リードタイムの短縮や受発注業務の効率向上が可能となる。", correct: false}
      , {description: "財務報告用の情報の作成・流通・利用ができるように標準化した言語であり，適用業務パッケージやプラットフォームに依存せずに財務情報の利用が可能となる。", correct: true}
      , {description: "通信プロトコルやデータフォーマットの標準的な規約を定めることによって，企業間での受発注，決済，入出荷などの情報の電子的な交換が可能となる。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "TOC (Theory Of Constraints)の特徴はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "個々の工程を個別に最適化することによって，生産工程全体を最適化する。", correct: false}
      , {description: "市場の需要が供給能力を下回っている場合に有効な理論である。", correct: false}
      , {description: "スループット(=売上高-資材費)の増大を最重要視する。", correct: true}
      , {description: "生産プロセス改善のための総投資額を制約条件として確立された理論である。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "ゲーム理論を使って検討するのに適している業務はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "イベント会場の入場ゲート数の決定", correct: false}
      , {description: "売れ筋商品の要因の分析", correct: false}
      , {description: "競争者がいる地域での販売戦略の策定", correct: true}
      , {description: "新規開発商品の需要の予測", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "合格となるべきロットが，抜取検査で誤って不合格となる確率のことを何というか。"
    , multiple_answer: false
    , answers: [
      {description: "合格品質水準", correct: false}
      , {description: "消費者危険", correct: false}
      , {description: "生産者危険", correct: true}
      , {description: "有意水準", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "投資評価方法の説明のうち， IRR (Internal Rate Of Return)法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "“将来に期待されるキャッシュインフローの現在価値の総額初期投資額”を算出し，評価する。", correct: false}
      , {description: "“投下された資本=将来に期待される各期のキャッシュインフローの累計”になるまでの期間を算出し，評価する。", correct: false}
      , {description: "“投資案のキャッシュアウトフローの現在価値の総額=将来に期待されるキャッシュインフローの現在価値の総額”になるような割引率を算出し，評価する。", correct: true}
      , {description: "“投資案の効果が及ぶ最終年までの平均年間純利益÷投資総額”で利回りを算出し，評価する。", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "次の資料を基に，A社の連結損益計算書を作成した場合の連結売上高は何百万円か。<br>" +
    "<br/>" +
"<div>" +
"・A社は，B社の株式の80%を取得している。" +
"・B社は，C社の株式の60%を取得している。" +
"・B社は，D社の株式の20%を取得している。ただし，役員の派遣などはない。" +
"・A社の売上高は，700,000百万円であり，その10%は，B社に対するものである。" +
"・B社の売上高は，350,000百万円であり，その20%は，D社に対するものである。" +
"・C社の売上高は，250,000百万円である。" +
"・D社の売上高は，200,000百万円である。" +
"・A社とB社，B社とD社以外の相互間取引はない。</div>"
    , multiple_answer: false
    , answers: [
      {description: "1,230,000", correct: true}
      , {description: "1,300,000", correct: false}
      , {description: "1,360,000", correct: false}
      , {description: "1,430,000", correct: false}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "製造物責任法(PL法)において，免責と規定されているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "製造物の欠陥の原因となった製造過程における過失を被害者が証明できない場合", correct: false}
      , {description: "製造物を海外から輸入して国内で販売している場合", correct: false}
      , {description: "製造物を引き渡した時点から5年を過ぎて事故が発生した場合", correct: false}
      , {description: "製造物を引き渡した時点の科学又は技術では欠陥を認識できなかった場合", correct: true}
    ]
    , category: 'ST-H24-AUTUMN'
  }
  , {
    description: "この夏はとても雨が少なかった。We ..."
    , question_type: 'input_text'
    , answers: [
      {description: "We had very little rain this summer.", correct: true}
    ]
    , category: 'English-Grammer-01'
  }
  , {
    description: "先生は彼に英語を一生懸命勉強するようにと言った。The teacher told..."
    , question_type: 'input_text'
    , answers: [
      {description: "The teacher told him to study English hard.", correct: true}
    ]
    , category: 'English-Grammer-01'
  }
  , {
    description: "ジムは息子の15歳の誕生日に、ギターをプレゼントした。"
    , question_type: 'input_text'
    , answers: [
      {description: "Jim gave his son a guitar on his fifteenth birthday.", correct: true}
    ]
    , category: 'English-Grammer-01'
  }
  , {
    description: "私はあなたにここに来てほしくなかった。"
    , question_type: 'input_text'
    , answers: [
      {description: "I didn't want you to come here.", correct: true}
    ]
    , category: 'English-Grammer-01'
  }
  , {
    description: "二階へ行って、お父さんにすぐ来るように言いなさい。Go...downstairs at once."
    , question_type: 'input_text'
    , answers: [
      {description: "Go upstairs and tell Father to come downstairs at once.", correct: true}
    ]
    , category: 'English-Grammer-01'
  }
  , {
    description: "一番近い駅までの道を教えてください。...the nearest station?"
    , question_type: 'input_text'
    , answers: [
      {description: "Would you show me the way to the nearest station?", correct: true}
    ]
    , category: 'English-Grammer-02'
  }
  , {
    description: "私は昨日、事故のせいで授業に出られなかった。Yesterday..."
    , question_type: 'input_text'
    , answers: [
      {description: "Yesterday I couldn't attend the class because of the accident.", correct: true}
    ]
    , category: 'English-Grammer-02'
  }
  , {
    description: "ドアは開けたままにしておいてくれる？...for me."
    , question_type: 'input_text'
    , answers: [
      {description: "Please leave the door open for me.", correct: true}
    ]
    , category: 'English-Grammer-02'
  }
  , {
    description: "彼に君の成功について話してあげたほうがいいと思うよ。I think..."
    , question_type: 'input_text'
    , answers: [
      {description: "I think you had better tell him about your success.", correct: true}
    ]
    , category: 'English-Grammer-02'
  }
  , {
    description: "トムはこれ以上、暑さに耐えられない。"
    , question_type: 'input_text'
    , answers: [
      {description: "Tom can't stand the heat any longer.", correct: true}
    ]
    , category: 'English-Grammer-02'
  }
  , {
    description: "彼の15回めの誕生パーティーを開くとのことです。He says he...birthday party."
    , question_type: 'input_text'
    , answers: [
      {description: "He says he is going to have his fifteenth birthday party.", correct: true}
    ]
    , category: 'English-Grammer-03'
  }
  , {
    description: "彼が帰宅したときそれについて彼に尋ねてみましょう。"
    , question_type: 'input_text'
    , answers: [
      {description: "I will ask him about it when he comes home.", correct: true}
    ]
    , category: 'English-Grammer-03'
  }
  , {
    description: "昨夜、和夫はとても眠かったので宿題をしなかった。Last night, Kazuo..."
    , question_type: 'input_text'
    , answers: [
      {description: "Last night, Kazuo was so sleepy that he did not do his homework.", correct: true}
    ]
    , category: 'English-Grammer-03'
  }
  , {
    description: "私のお気に入りの歌を聞いてたところよ。Just..."
    , question_type: 'input_text'
    , answers: [
      {description: "Just listening to my favourite song.", correct: true}
    ]
    , category: 'English-Grammer-03'
  }
  , {
    description: "ナンシーは机で食べようとしたが、上司にそこで食べるなと言われた。Nancy was going to eat at her desk, but her boss..."
    , question_type: 'input_text'
    , answers: [
      {description: "Nancy was going to eat at her desk, but her boss told her not to eat there.", correct: true}
    ]
    , category: 'English-Grammer-03'
  }
  , {
    description: "この前の火曜日からずっととても寒い。"
    , question_type: 'input_text'
    , answers: [
      {description: "It has been very cold since last Tuesday.", correct: true}
    ]
    , category: 'English-Grammer-04'
  }
  , {
    description: "彼女はどのくらい学校を休んでいますか。"
    , question_type: 'input_text'
    , answers: [
      {description: "How long has she been absent from school?", correct: true}
    ]
    , category: 'English-Grammer-04'
  }
  , {
    description: "今まで私たちはあんなひどい嵐にあったことはない。"
    , question_type: 'input_text'
    , answers: [
      {description: "We have never had such a heavy storm before. ", correct: true}
    ]
    , category: 'English-Grammer-04'
  }
  , {
    description: "私の弟は今しがた帰宅したばかりです。"
    , question_type: 'input_text'
    , answers: [
      {description: "My younger brother has just come back home.", correct: true}
    ]
    , category: 'English-Grammer-04'
  }
  , {
    description: "宿題はもうすみましたか。Have...?"
    , question_type: 'input_text'
    , answers: [
      {description: "Have you finished your homework yet?", correct: true}
    ]
    , category: 'English-Grammer-04'
  }
  , {
    description: "トムはふつう7時に学校に出かけます。"
    , question_type: 'input_text'
    , answers: [
      {description: "Tom usually leaves home for school at seven.", correct: true}
    ]
    , category: 'English-Grammer-05'
  }
  , {
    description: "だれも彼に何を期待してよいかわかりませんでした。...him."
    , question_type: 'input_text'
    , answers: [
      {description: "No one knew what to expect from him.", correct: true}
    ]
    , category: 'English-Grammer-05'
  }
  , {
    description: "お父さんは家であなたを何と呼びますか？What...at your home?"
    , question_type: 'input_text'
    , answers: [
      {description: "What does your father call you at your home?", correct: true}
    ]
    , category: 'English-Grammer-05'
  }
  , {
    description: "太郎君は一日にどのくらい英語を勉強したか、あなたは知っていますか。"
    , question_type: 'input_text'
    , answers: [
      {description: "Do you know how long Taro studied English each day?", correct: true}
    ]
    , category: 'English-Grammer-05'
  }
  , {
    description: "あなたは、少しも疲れていないみたいだ。"
    , question_type: 'input_text'
    , answers: [
      {description: "You do not look tired at all.", correct: true}
    ]
    , category: 'English-Grammer-05'
  }
  , {
    description: "この本をどこで買ったらよいか、彼に聞いてもよいですか。"
    , question_type: 'input_text'
    , answers: [
      {description: "May I ask him where to buy this book.", correct: true}
    ]
    , category: 'English-Grammer-06'
  }
  , {
    description: "私たちに自己紹介していただきたい。"
    , question_type: 'input_text'
    , answers: [
      {description: "We would like you to introduce yourself to us.", correct: true}
    ]
    , category: 'English-Grammer-06'
  }
  , {
    description: "お茶をもう一杯飲みませんか。"
    , question_type: 'input_text'
    , answers: [
      {description: "Will you have another cup of tea?", correct: true}
    ]
    , category: 'English-Grammer-06'
  }
  , {
    description: "ボブは5時までにその仕事を終えなければならない。"
    , question_type: 'input_text'
    , answers: [
      {description: "Bob will have to finish doing the work by five.", correct: true}
    ]
    , category: 'English-Grammer-06'
  }
  , {
    description: "私たち家族は、このあたりに住んでいた。"
    , question_type: 'input_text'
    , answers: [
      {description: "Our family used to live around here.", correct: true}
    ]
    , category: 'English-Grammer-06'
  }
  , {
    description: "あなたが気に入ろうと、そうでなかろうと、世界はどんどん小さくなっていくだろう。"
    , question_type: 'input_text'
    , answers: [
      {description: "The world will become smaller and smaller whether you like it or not.", correct: true}
    ]
    , category: 'English-Grammer-07'
  }
  , {
    description: "貧しいからといって人を見下してはいけない。"
    , question_type: 'input_text'
    , answers: [
      {description: "Don't look down upon them just because they are poor.", correct: true}
    ]
    , category: 'English-Grammer-07'
  }
  , {
    description: "彼女は手紙をくれると約束したけれど、僕は再び彼女から連絡をもらうことはなかった。"
    , question_type: 'input_text'
    , answers: [
      {description: "She promised to write, but I never heard from her again.", correct: true}
    ]
    , category: 'English-Grammer-07'
  }
  , {
    description: "あなたがそれをやり終えたら、すぐに知らせてください。"
    , question_type: 'input_text'
    , answers: [
      {description: "Let me know at once when you have finished it.", correct: true}
    ]
    , category: 'English-Grammer-07'
  }
  , {
    description: "この仕事を全て7時までに終わらせることができたとしても、パーティーに時間どおりに着くことができるとは思えない。I still don't think we will be able to get the party on time..."
    , question_type: 'input_text'
    , answers: [
      {description: "I still don't think we will be able to get the party on time even if we can finish all this work by seven.", correct: true}
    ]
    , category: 'English-Grammer-07'
  }
  , {
    description: "この車は日本で作られた。"
    , question_type: 'input_text'
    , answers: [
      {description: "This car was made in Japan.", correct: true}
    ]
    , category: 'English-Grammer-08'
  }
  , {
    description: "あのボクサーのことは、この国のだれでもよく知っている。"
    , question_type: 'input_text'
    , answers: [
      {description: "That boxer is well known to everybody in this country.", correct: true}
    ]
    , category: 'English-Grammer-08'
  }
  , {
    description: "その子供たちは、毎晩母親に新しい話をしてもらう。The children..."
    , question_type: 'input_text'
    , answers: [
      {description: "The children are told a new story by their mother every night.", correct: true}
    ]
    , category: 'English-Grammer-08'
  }
  , {
    description: "僕は知らない人に突然話しかけられた。"
    , question_type: 'input_text'
    , answers: [
      {description: "I was suddenly spoken to by a stranger.", correct: true}
    ]
    , category: 'English-Grammer-08'
  }
  , {
    description: "私の家族はFBIによって保護されている。"
    , question_type: 'input_text'
    , answers: [
      {description: "My family is being protected by FBI.", correct: true}
    ]
    , category: 'English-Grammer-08'
  }
  , {
    description: "私は美弥にあげる写真をたくさん持っていまｓ。"
    , question_type: 'input_text'
    , answers: [
      {description: "I have a lot of pictures to give Miya.", correct: true}
    ]
    , category: 'English-Grammer-09'
  }
  , {
    description: "カーティスはみんなを元気づけるために大声で歌った。"
    , question_type: 'input_text'
    , answers: [
      {description: "Kurtis sang aloud so as to cheer everyone up.", correct: true}
    ]
    , category: 'English-Grammer-09'
  }
  , {
    description: "君が彼のことを尋ねるなんて不思議だ。"
    , question_type: 'input_text'
    , answers: [
      {description: "It is strange for you to ask about him.", correct: true}
    ]
    , category: 'English-Grammer-09'
  }
  , {
    description: "この靴は私が履くには小さ過ぎます。These shoes..."
    , question_type: 'input_text'
    , answers: [
      {description: "These shoes are too small for me to wear.", correct: true}
    ]
    , category: 'English-Grammer-09'
  }
  , {
    description: "だれも自分の心の決め方なんて教えてくれない。"
    , question_type: 'input_text'
    , answers: [
      {description: "Nobody tells you how to make up your own mind.", correct: true}
    ]
    , category: 'English-Grammer-09'
  }
  , {
    description: "彼はUFOを見たと主張した。"
    , question_type: 'input_text'
    , answers: [
      {description: "He insisted on having seen a UFO.", correct: true}
    ]
    , category: 'English-Grammer-10'
  }
  , {
    description: "窓を閉めていただけますか。Would..."
    , question_type: 'input_text'
    , answers: [
      {description: "Would you mind shutting the window for me?", correct: true}
    ]
    , category: 'English-Grammer-10'
  }
  , {
    description: "私たちが辞書なしでこの本を読むことは困難です。"
    , question_type: 'input_text'
    , answers: [
      {description: "Reading this book without any dictionaries is difficult for us.", correct: true}
    ]
    , category: 'English-Grammer-10'
  }
  , {
    description: "彼の人気の理由を説明することはできない。"
    , question_type: 'input_text'
    , answers: [
      {description: "There is no explaining the reason of his popularity.", correct: true}
    ]
    , category: 'English-Grammer-10'
  }
  , {
    description: "彼女はその歌を聞くと悲しい気分になります。"
    , question_type: 'input_text'
    , answers: [
      {description: "Listening to the song makes her sad.", correct: true}
    ]
    , category: 'English-Grammer-10'
  }
  , {
    description: "角に立っているあの背の高い男の人はだれですか。"
    , question_type: 'input_text'
    , answers: [
      {description: "Who is that tall man standing in the corner.", correct: true}
    ]
    , category: 'English-Grammer-11'
  }
  , {
    description: "あそこでピアノを弾いている女の子はルーシーという名前です。"
    , question_type: 'input_text'
    , answers: [
      {description: "The girl playing the piano there is named Lucy.", correct: true}
    ]
    , category: 'English-Grammer-11'
  }
  , {
    description: "投げ捨てられたカンやビンで私たちの街が汚れてしまいます。"
    , question_type: 'input_text'
    , answers: [
      {description: "Cans and bottles thrown away by people make our city dirty.", correct: true}
    ]
    , category: 'English-Grammer-11'
  }
  , {
    description: "ママがサンタにキスしてるのを見ちゃった。"
    , question_type: 'input_text'
    , answers: [
      {description: "I saw Mommy kissing Santa Claus.", correct: true}
    ]
    , category: 'English-Grammer-11'
  }
  , {
    description: "この冬はずっとスノーボードをして過ごした。"
    , question_type: 'input_text'
    , answers: [
      {description: "I spent the whole winter snow-boarding.", correct: true}
    ]
    , category: 'English-Grammer-11'
  }
  , {
    description: "右に曲がると、郵便局が左手にあります。Turning..."
    , question_type: 'input_text'
    , answers: [
      {description: "Turning right, you'll find a post office on your left.", correct: true}
    ]
    , category: 'English-Grammer-12'
  }
  , {
    description: "バスには空席がなかったので、私はずっと立ち続けだった。..., I kept on standing."
    , question_type: 'input_text'
    , answers: [
      {description: "There being no vacant seat in the bus, I kept on standing.", correct: true}
    ]
    , category: 'English-Grammer-12'
  }
  , {
    description: "駅がどこにあるかわからなかったので私は人に道を聞いた。..., I asked a man the way."
    , question_type: 'input_text'
    , answers: [
      {description: "Not knowing where the station was, I asked a man the way.", correct: true}
    ]
    , category: 'English-Grammer-12'
  }
  , {
    description: "彼の話し方からすると、きっと彼は関西出身だ。...from the Kansai district."
    , question_type: 'input_text'
    , answers: [
      {description: "Judging from the way he talks, he must be from the Kansai district.", correct: true}
    ]
    , category: 'English-Grammer-12'
  }
  , {
    description: "全てをやり遂げたが、彼女はまだ自由にはなっていない。"
    , question_type: 'input_text'
    , answers: [
      {description: "Having done everything, she still isn't free.", correct: true}
    ]
    , category: 'English-Grammer-12'
  }
  , {
    description: "私たちは稼いだお金を全て教会に寄付します。"
    , question_type: 'input_text'
    , answers: [
      {description: "All the money we make will go to the church.", correct: true}
    ]
    , category: 'English-Grammer-13'
  }
  , {
    description: "大阪出身の背の高い少年は、私の友達です。That tall boy..."
    , question_type: 'input_text'
    , answers: [
      {description: "That tall boy who comes from Osaka is a friend of mine.", correct: true}
    ]
    , category: 'English-Grammer-13'
  }
  , {
    description: "彼は大学がいくつかある町に住んでいる。"
    , question_type: 'input_text'
    , answers: [
      {description: "He lives in a town where there are several colleges.", correct: true}
    ]
    , category: 'English-Grammer-13'
  }
  , {
    description: "4月は人が新しい場所へと移動していく月だ。...in."
    , question_type: 'input_text'
    , answers: [
      {description: "April is the month which people move to new places in.", correct: true}
    ]
    , category: 'English-Grammer-13'
  }
  , {
    description: "ほしい物をほしいときに言っていいよ。You can tell..."
    , question_type: 'input_text'
    , answers: [
      {description: "You can tell me what you want, when you want it.", correct: true}
    ]
    , category: 'English-Grammer-13'
  }
  , {
    description: "もしあなたの忠告がなかったならば、彼は研究に失敗していたかもしれない。...your advice, he might have failed in his study."
    , question_type: 'input_text'
    , answers: [
      {description: "If it had not been for your advice, he might have failed in his study.", correct: true}
    ]
    , category: 'English-Grammer-14'
  }
  , {
    description: "もし彼の住所を知っていれば、訪ねて行くのだけれど。If I..."
    , question_type: 'input_text'
    , answers: [
      {description: "If I knew his address, I would visit him.", correct: true}
    ]
    , category: 'English-Grammer-14'
  }
  , {
    description: "忙しくなければ会議に出席できたのだが。If I...the meeting."
    , question_type: 'input_text'
    , answers: [
      {description: "If I had not been busy, I could have attended the meeting.", correct: true}
    ]
    , category: 'English-Grammer-14'
  }
  , {
    description: "これがずっと続けばいいのになあ。"
    , question_type: 'input_text'
    , answers: [
      {description: "I wish this could last forever.", correct: true}
    ]
    , category: 'English-Grammer-14'
  }
  , {
    description: "もし彼だったら、君たち全員を擁護するだろう。"
    , question_type: 'input_text'
    , answers: [
      {description: "He would stand up for you all.", correct: true}
    ]
    , category: 'English-Grammer-14'
  }
  , {
    description: "兄は毎月僕の3倍の本を読む。...every month."
    , question_type: 'input_text'
    , answers: [
      {description: "My brother reads three times as many books as I every month.", correct: true}
    ]
    , category: 'English-Grammer-15'
  }
  , {
    description: "ジェーンほど速く泳げる生徒はこのクラスにはいません。"
    , question_type: 'input_text'
    , answers: [
      {description: "No student in this class can swim as fast as Jane.", correct: true}
    ]
    , category: 'English-Grammer-15'
  }
  , {
    description: "今夜はいつもより早めに食事をしたいと思います。"
    , question_type: 'input_text'
    , answers: [
      {description: "I would like to eat dinner earlier than usual this evening.", correct: true}
    ]
    , category: 'English-Grammer-15'
  }
  , {
    description: "一番暑い季節はいつですか。"
    , question_type: 'input_text'
    , answers: [
      {description: "Which is the hottest of all the seasons.", correct: true}
    ]
    , category: 'English-Grammer-15'
  }
  , {
    description: "これはどんな写真よりもずっときれいだ。...anything ever."
    , question_type: 'input_text'
    , answers: [
      {description: "This picture is still more beautiful than anything ever.", correct: true}
    ]
    , category: 'English-Grammer-15'
  }
  , {
    description: "妻がぐっすり寝ているから静かにしてもらえますか。Please..."
    , question_type: 'input_text'
    , answers: [
      {description: "Please be quiet because my wife is sound asleep.", correct: true}
    ]
    , category: 'English-Grammer-16'
  }
  , {
    description: "彼の結婚は少し急だったので私はびっくりしている。His marriage..."
    , question_type: 'input_text'
    , answers: [
      {description: "His marriage was kind of sudden, so I am surprised.", correct: true}
    ]
    , category: 'English-Grammer-16'
  }
  , {
    description: "光一はよりよいアイデアを思いつかなかった。"
    , question_type: 'input_text'
    , answers: [
      {description: "Koichi hardly could think of any better ideas.", correct: true}
    ]
    , category: 'English-Grammer-16'
  }
  , {
    description: "これは本当にすてきなプレゼントですね。"
    , question_type: 'input_text'
    , answers: [
      {description: "This is so lovely a present.", correct: true}
    ]
    , category: 'English-Grammer-16'
  }
  , {
    description: "目的もなく外国で勉強するのはやめといたほうがいいと思うよ。"
    , question_type: 'input_text'
    , answers: [
      {description: "You better not study abroad without any goals.", correct: true}
    ]
    , category: 'English-Grammer-16'
  }
  , {
    description: "私の姉は音楽に関しての情報をたくさんくれる。"
    , question_type: 'input_text'
    , answers: [
      {description: "My sister gives me a good deal of information abount music.", correct: true}
    ]
    , category: 'English-Grammer-17'
  }
  , {
    description: "彼、自分のジャケットが古いってわかってないのかしら。, does he?"
    , question_type: 'input_text'
    , answers: [
      {description: "He doesn't know his jacket is behind the times, does he?", correct: true}
    ]
    , category: 'English-Grammer-17'
  }
  , {
    description: "りっぱな家具をありがとうございます。"
    , question_type: 'input_text'
    , answers: [
      {description: "Thank you for a fine piece of futniture.", correct: true}
    ]
    , category: 'English-Grammer-17'
  }
  , {
    description: "彼は川の片側の岸からもう片側の岸へ飛び移った。...side."
    , question_type: 'input_text'
    , answers: [
      {description: "He jumped from one side of the river to the other side.", correct: true}
    ]
    , category: 'English-Grammer-17'
  }
  , {
    description: "洗面器にはせっけん1個とシャンプーが残っていた。There left...in the basin."
    , question_type: 'input_text'
    , answers: [
      {description: "There left a cake of soap and a shampoo in the basin.", correct: true}
    ]
    , category: 'English-Grammer-17'
  }
  , {
    description: "”システム監査基準”で定めているシステム監査業務の品質管理の主な目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査時期，範囲，手続などについてのシステム監査計画を立案すること", correct: false}
      , {description: "システム監査結果の適正性を確保すること", correct: true}
      , {description: "システム監査で入手した情報の機密性を維持すること", correct: false}
      , {description: "システム監査の実施を通して，情報システムの品質向上に貢献すること", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "システム監査において実施される”試査”に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査対象に最も適合した監査手続を決定するために，幾つかの監査技法を試行する。", correct: false}
      , {description: "計算モジュールの正確性を確認するために，ソースプログラムをレビューする。", correct: false}
      , {description: "全てのトランザクションデータに監査手続を試験的に適用し，その処理の正当性について判断する。", correct: false}
      , {description: "抽出した一定件数のトランザクションデータに監査手続を適用し，データ全件の正当性について判断する。", correct: true}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "財務報告に係る内部統制監査におけるリスクアプローチの説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査の効率性を念頭におき，固有リスクだけを評価する。", correct: false}
      , {description: "財務諸表の重要な虚偽表示リスクの有無にかかわらず，任意に抽出した業務プロセスに対してリスクを評価する。", correct: false}
      , {description: "財務報告に係る全ての業務に対して，ボトムアップで網羅的にリスクを洗い出して評価する。", correct: false}
      , {description: "想定されるリスクのうち，財務諸表の重要な虚偽表示リスクが高い項目に監査のリソースを重点的に配分する。", correct: true}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "”システム監査基準”における”監査の手順”はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "打合せ→情報収集→予備調査→報告書作成", correct: false}
      , {description: "監査対象の明確化→本調査→監査手続書の作成→評価・報告", correct: false}
      , {description: "監査手続書の作成→実地調査→フォローアップ→報告書作成", correct: false}
      , {description: "予備調査→本調査→評価・結論", correct: true}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "表はコンピュータを利用して行うシステム監査技法についてまとめたものである。(1)～(4)の組合せとして，適切なものはどれか。<br/><br/>" +
                 "<img src = \"js/data/image/AU_H28_q05.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ア", correct: false}
      , {description: "イ", correct: true}
      , {description: "ウ", correct: false}
      , {description: "エ", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "日本公認会計士協会の監査・保証実務委員会実務指針第 86号”受託業務に係る内部統制の保証報告書”に基づいて作成される文書と作成者の適切な組合せはどれか。ここで，受託業務の一部について再委託が行われており，除外方式を採用しているものとする。<br/><br/>" +
                 "<img src = \"js/data/image/AU_H28_q06.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ア", correct: false}
      , {description: "イ", correct: false}
      , {description: "ウ", correct: true}
      , {description: "エ", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "JIS Q 19011:2012における第二者監査に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査法人による会社法監査", correct: false}
      , {description: "業務委託先である子会社へのシステム監査", correct: true}
      , {description: "審査機関による ISMS認証審査", correct: false}
      , {description: "内部監査人が行う情報セキュリテイ監査", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "システム監査で利用する統計的サンプリング法に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "サンプルの抽出に無作為抽出法を用い，サンプルの評価結果に基づいて母集団に関する結論を出す場合に，確率論の考え方を用いる。", correct: true}
      , {description: "抽出するサンプル数は，統計的サンプリングと非統計的サンプリングの選択を決定付ける重要な判断基準である。", correct: false}
      , {description: "抽出するサンプルを統計的に決定するのではなく，サンプルに対して評価手続を実施した結果を統計的に推定する。", correct: false}
      , {description: "無作為抽出法を用いるだけではなく，システム監査人が経験的判断を加味して，サンプルを抽出する。", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "金融庁の”財務報告に係る内部統制の評価及び監査の基準”における IT業務処理統制に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部委託に関する契約の管理", correct: false}
      , {description: "システムの運用管理", correct: false}
      , {description: "システムの開発・保守に係る管理", correct: false}
      , {description: "利用部門によるエラーデータの修正と再処理", correct: true}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "債権管理システムから出力された債権残高の集計処理結果を用いて，経理部門が事後的に実施できる，異常の有無の検証に有効な方法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "債権データ生成時における，得意先コードを用いた得意先マスタとの自動マッチング", correct: false}
      , {description: "債権データの金額項目のフォーマットチェック", correct: false}
      , {description: "スプレッドシートを用いた売掛債権回転期間の前年同期比較チェック", correct: true}
      , {description: "正規の権限者による操作に限定するアクセスコントロール", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "ITILで定義されるサービスのライフサイクルにおける，サービストランジション段階の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "規定された要件と制約に沿って，サービスを運用に移行し，確実に稼働させることである。", correct: true}
      , {description: "サービスの効率，有効性，費用対効果の観点で運用状況を継続的に測定し，改善していくことである。", correct: false}
      , {description: "サービスの内容を具体的に決めることである。", correct: false}
      , {description: "戦略的資産として，どのようにサービスマネジメントを設計，開発，導入するかについての手引を提供することである。", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "ITサービスマネジメントにおいて，構成ベースラインを確立することによって可能になることはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスの存続期間を通したパフォーマンスの変化の測定", correct: false}
      , {description: "インシデントが発生したときの問題管理プロセスでの状況証拠の分析", correct: false}
      , {description: "構成監査及び切り戻しのための基準の提供", correct: true}
      , {description: "サービスを機能させるために必要な最低限の利用可能レベルの定義", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "法人が作成し，公開，発売したソフトウェアの著作権の権利期聞は公開から何年か。"
    , multiple_answer: false
    , answers: [
      {description: "15", correct: false}
      , {description: "20", correct: false}
      , {description: "30", correct: false}
      , {description: "50", correct: true}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "常時10名以上の従業員を有するソフトウェア開発会社が，社内の情報セキュリティ管理を強化するために，機密情報を扱う担当従業員の扱いを見直すこととした。労働法に照らし，適切な行為はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "就業規則に業務上知り得た秘密の漏えい禁止の一般的な規定があるが，担当従業員の職務に即して秘密の内容を特定する個別合意を行う。", correct: true}
      , {description: "就業規則には業務上知り得た秘密の漏えい禁止の規定がないので，漏えい禁止と処分の規定を従業員の合意を得ずに就業規則に追加する。", correct: false}
      , {description: "情報セキュリテイ事故を起こした場合の処分について，担当従業員との聞で，就業規則よりも処分の内容を重くした個別合意を行う。", correct: false}
      , {description: "情報セキュリティに関連する規定は就業規則に記載する事項ではないので，就業規則に規定を設けようとはせずに，全ての従業員と個別合意を行う。", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "製造物責任法(PL法)において，製造物責任を問われる事例はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITサービスの品質に問題が発覚し，SLAを締結している顧客へのサービスがー時的に提供できなくなったので，顧客から多大なクレームを受けた。", correct: false}
      , {description: "機器に組み込まれているROMに記録されたプログラムに瑕疵があったので，その機器の使用者に大けがをさせた。", correct: true}
      , {description: "工場に配備されている制御系コンピュータのオペレーションを誤ったので，製品製造のラインを長時間停止させ大きな損害を与えた。", correct: false}
      , {description: "ソフトウェアパッケージに重大な瑕疵が発見され，修復に時間が掛かったので，販売先の業務に大混乱をもたらした。", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "表は，CSR(Corporate Social Responsibility)をキャロルによる四つの責任分野に分類し，それぞれの企業活動例を示している。表中のcに入るものはどれか。<br/><br/>" +
                 "<img src = \"js/data/image/AU_H28_q16.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "経済的責任", correct: false}
      , {description: "社会貢献責任", correct: false}
      , {description: "法的責任", correct: false}
      , {description: "倫理的責任", correct: true}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "導出表を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "実表に依存していない表のことである。", correct: false}
      , {description: "実表の一部をコピーして別に保存した表である。", correct: false}
      , {description: "何らかの問合せによって得られた表である。", correct: true}
      , {description: "二つ以上の実表の関連である。", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "ネットワークの経路制御プロトコルのうち，IPv6ネットワークに使用され，距離ベクトル方式を用いているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "BGP-4", correct: false}
      , {description: "OSPFv3", correct: false}
      , {description: "RIP-2", correct: false}
      , {description: "RIPng", correct: true}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "CRYPTRECの役割として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外国為替及び外国貿易法で規制されている暗号装置の輸出を審査，検査する。", correct: false}
      , {description: "政府調達においてIT関連製品のセキュリティ機能の適切性を評価，認証する。", correct: false}
      , {description: "電子政府での利用を推奨する暗号技術の安全性を評価，監視する。", correct: true}
      , {description: "民間企業のサーバに対するセキュリテイ攻掌を監視，検知する。", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "ウイルスの検出手法であるピへイピア法を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "あらかじめ特徴的なコードをパターンとして登録したウイルス定義ファイルを用いてウイルス検査対象と比較し，同じパターンがあれば感染を検出する。", correct: false}
      , {description: "ウイルスに感染していないことを保証する情報をあらかじめ検査対象に付加しておき，検査時に不整合があれば感染を検出する。", correct: false}
      , {description: "ウイルスの感染が疑わしい検査対象を，安全な場所に保管されている原本と比較し，異なっていれば感染を検出する。", correct: false}
      , {description: "ウイルスの感染や発病によって生じるデータ書込み動作の異常や通信量の異常増加などの変化を監視して，感染を検出する。", correct: true}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "DNSSECの機能はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DNSキャッシュサーバの設定によって再帰的な問合せの受付範囲が最大になるようにする。", correct: false}
      , {description: "DNSサーバから受け取るリソースレコードに対するディジタル署名を利用して，リソースレコードの送信者の正当性とデータの完全性を検証する。", correct: true}
      , {description: "ISPなどのセカンダリDNSサーバを利用してDNSコンテンツサーバを二重化することによって，名前解決の可用性を高める。", correct: false}
      , {description: "共通鍵暗号技術とハッシュ関数を利用したセキュアな方法によって，DNS更新要求が許可されているエンドポイントを特定して認証する。", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "デザインレビュー方法に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インスペクションでは，絞られた問題事項に関して様々な角度からの分析を行うことができるので，対策を引き出しやすい。", correct: true}
      , {description: "ウォークスルーでは，運営を指揮するリーダが，メンバが作成したレビュー対象の資料成果物を参加者に説明する。", correct: false}
      , {description: "プロトタイプを採用する開発では，利用者が直接検証するプロトタイピングによってレビューを省略できる。", correct: false}
      , {description: "ラウンドロビンレビューでは，参加者の作業量を均一にすることによって，参加者の経験や知識レベルに影響されないようにする。", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "JIS X 0161:2008によるソフトウェア保守のタイプのうち，適応保守はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ソフトウェア製品の引渡し後に発見された問題を訂正するために行う受け身の修正", correct: false}
      , {description: "引渡し後，変化した又は変化している環境において，ソフトウェア製品を使用できるように保ち続けるために実施するソフトウェア製品の修正", correct: true}
      , {description: "引渡し後のソフトウェア製品の潜在的な障害が，故障として現れる前に，検出し訂正するための修正", correct: false}
      , {description: "引渡し後のソフトウェア製品の潜在的な障害が運用障害になる前に発見し，是正を行うための修正", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "市場成長率と相対的市場シェアから，市場と企業の関係を分析し，自社製品や事業についての最適な資源配分方針を求めるための手法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "3C", correct: false}
      , {description: "BSC", correct: false}
      , {description: "PPM", correct: true}
      , {description: "SWOT", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "SECIモデルにおける，内面化の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "新たに創造された知識を組織に広め，新たな暗黙知として習得すること", correct: true}
      , {description: "組織内の個人，小グループが有する暗黙知を形式知として明示化すること", correct: false}
      , {description: "組織内の個人，小グループで暗黙知の共有化や，新たな暗黙知の創造を行うこと", correct: false}
      , {description: "明示化した形式知を組み合わせ，それを基に新たな知識を創造すること", correct: false}
    ]
    , category: 'AU-H28-SPRING'
  }
  , {
    description: "システム監査技法であるITF(Integrated Test Facility)法の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査機能をもったモジュールを監査対象プログラムに組み込んで実環境下で実行し，抽出条件に合った例外データ，異常データなどを収集し，監査対象プログラムの処理の正確性を検証する方法である。", correct: false}
      , {description: "監査対象ファイルにシステム監査人用の口座を設け，実稼働中にテストデータを入力し，その結果をあらかじめ用意した正しい結果と照合して，監査対象プログラムの処理の正確性を検証する方法である。", correct: true}
      , {description: "システム監査人が準備した監査用プログラムと監査対象プログラムに同ーのデータを入力し，両者の実行結果を比較することによって，監査対象プログラムの処理の正確性を検証する方法である。", correct: false}
      , {description: "プログラムの検証したい部分を通過したときの状態を出力し，それらのデータを基に監査対象プログラムの処理の正確性を検証する方法である。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "インシデントの究明やシステム監査にも利用できる，証拠を収集し保全する技法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "コンティンジェンシープラン", correct: false}
      , {description: "サンプリング", correct: false}
      , {description: "ディジタルフォレンジックス", correct: true}
      , {description: "ベンチマーキング", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "システム監査において，ペネトレーションテストが最も適合するチェックポイントはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "オフィスへの入退に，不正防止及び機密保護の物理的な対策が講じられているか。", correct: false}
      , {description: "データ入力が漏れなく，重複なく正確に行われているか。", correct: false}
      , {description: "ネットワークの負荷状況の推移が記録，分析されているか。", correct: false}
      , {description: "ネットワークへのアクセスコントロールが有効に機能しているか。", correct: true}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "テストデータ法をシステム監査手続として使用する上での留意点はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査モジュールを適時に組み込み，本番データの正当性を検証すること", correct: false}
      , {description: "テスト対象プログラムのロジックが本番で稼働しているものと同一であるかを確認すること", correct: true}
      , {description: "テストデータには本番データをそのまま用いること", correct: false}
      , {description: "テストデータの作成に当たっては統計的サンプリング手法を用いること", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "システム監査報告書に記載された改善勧告への取組みに対する監査人のフォローアップとして，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "改善勧告に対する改善の実施を，被監査部門の長に指示する。", correct: false}
      , {description: "改善勧告に対する被監査部門の改善実施状況を確認する。", correct: true}
      , {description: "改善勧告に対する被監査部門の改善実施プロジェクトの管理を行う。", correct: false}
      , {description: "改善勧告の内容を被監査部門に示し，改善実施計画を策定する。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "システムの開発，運用及び保守を担当者が1人だけで実施している企業におけるシステム監査に関する記述のうち，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "開発，運用及び保守の実施状況を熟知している当該担当者に対するヒアリング結果だけを監査証拠にする。", correct: false}
      , {description: "システム改修時の利用部門による動作確認及び責任者による承認の実施状況を確認できる監査手続にする。", correct: true}
      , {description: "適正な監査手続の実施が不可能であることを当然のこととして，監査意見を形成する。", correct: false}
      , {description: "内部統制による牽制が十分であることを当然のこととして，監査計画を策定する。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "システム監査の手順に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査作業は，予備調査，本調査，評価・結論，指摘事項に対する改善の順に行う。", correct: false}
      , {description: "評価・結論の作業は，監査担当者による評価，被監査部門による評価，監査責任者による評価を順に経て，最終結論を下す。", correct: false}
      , {description: "本調査の作業は，予備調査結果の確認，監査証拠の入手，証拠能力の評価の順に行う。", correct: true}
      , {description: "予備調査の作業は，同業他社の状況調査，被監査部門の過去の監査結果の評価，サンプリングによる実地調査の順に行う。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "システム監査における監査証跡はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査業務の全過程において，監査人が収集及び作成した資料である。", correct: false}
      , {description: "監査対象システムの入力から出力に至る過程を追跡できる一連の仕組みと記録である。", correct: true}
      , {description: "監査人が監査証拠を入手するために実施する監査技術の組合せである。", correct: false}
      , {description: "監査人が監査手続を実施して収集した資料を監査人の判断に基づいて評価した結果である。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "個人情報取扱事業者に対する監査において，個人情報の第三者提供の観点から指摘事項に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "社員が意識不明に陥り，家族とも連絡がつかないときに，救急隊員に社員本人の個人情報を，本人の同意を得ずに渡した。", correct: false}
      , {description: "税務署の要請によって，従業員の給与振込先口座の情報を，本人の同意を得ずに提出した。", correct: false}
      , {description: "フランチャイズの本部から加盟店に，顧客の個人情報を，本人の同意を得ずに渡した。", correct: true}
      , {description: "法令で定められた共同利用に関する事項をWebサイトに明示した上で，プレゼントキャンペーンの応募者データを，本人の向意を得ずにグループ会社と共同利用した。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "人事給与システムのシステム監査において，勤怠データの入力漏れを発見するコントロールの評価項目として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "人事マスタに未登録の社員の勤怠データは，通常の入力操作では入力できないこと", correct: false}
      , {description: "データ入力を行う担当者に，正規の手続によってアクセス権限が付与されていること", correct: false}
      , {description: "入力された勤怠時間に対する限界値チェック機能が，システムに組み込まれていること", correct: false}
      , {description: "入力された内容がプルーフリストとして出力され，人事部の管理者が入力原票と照合を行っていること", correct: true}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "システム監査の個別計画書の記載内容を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "個別計画書に記述される監査時期，監査日程には，本調査だけでなく，予備調査や監査結果の報告会，フォローアップも含める。", correct: true}
      , {description: "個別計画書に記述される監査手続とは，監査項目に対応した監査の基本方針のことである。", correct: false}
      , {description: "個別計画書には監査対象ごとに重点監査テーマを記載し，システム監査の方針とする。", correct: false}
      , {description: "個別計画書は監査の具体的な実行計画なので，計画策定後はたとえ組織体の長の意向であっても変更すべきではない。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "JIS Q 20000-1の”サービスマネジメントシステムの監視及びレビュー”の要求事項のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査員は，自らの仕事を監査してはならない。", correct: true}
      , {description: "監査の基準は，文書化された手順の中に定義してはならない。", correct: false}
      , {description: "特定された不適合，懸念事項は，該当する利害関係者であっても開示してはならない。", correct: false}
      , {description: "レビューの間隔は，あらかじめ定めてはならない。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "ITサービスマネジメントにおける，インシデント及びサービス要求管理の主な活動はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "インシデントの影響を最小限にするための既知の誤り記録の作成", correct: false}
      , {description: "インシデントの解決とサービスの復旧", correct: true}
      , {description: "インシデントの傾向分析と予防処置", correct: false}
      , {description: "インシデントの未知の根本原因の特定", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "プログラムの著作物について，著作権法上，適法である行為はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "海賊版を複製したプログラムと事前に知りながら入手し，業務で使用した。", correct: false}
      , {description: "業務処理用に購入したプログラムを複製し，社内教育用として各部門に配布した。", correct: false}
      , {description: "職務著作のプログラムを，作成した担当者が独断で複製し，他社に貸与した。", correct: false}
      , {description: "処理速度を向上させるために，購入したプログラムを改変した。", correct: true}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "電子帳簿保存法の要件に反しない事実関係はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "自社内に会計システムをもたない会社が，委託先会計事務所の電子計算機を用いて，取引の最初の記録から一貫して国税関係の帳簿を作成している。", correct: true}
      , {description: "支店などの新設がない場合において，仕訳帳を会計期間の中途から電磁的に記録している。", correct: false}
      , {description: "電子帳簿保存を行うシステム関係書類(システム概要書，システム仕様書，操作説明書)の備え付けはしていない。", correct: false}
      , {description: "電子帳簿保存を行うシステムで仕訳情報の登録，削除の内容は検索できるが，訂正の内容は検索ができない。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "合格となるべきロットが，抜取検査で誤って不合格となる確率のことを何というか。"
    , multiple_answer: false
    , answers: [
      {description: "合格品質水準", correct: false}
      , {description: "消費者危険", correct: false}
      , {description: "生産者危険", correct: true}
      , {description: "有意水準", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "関係データベースのビューを利用する目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DISTINCT指定，GROUP BY句及びHAVIlG句をもつ演算処理を独立させて，プログラムに単純化したデータ更新手段を提供する。", correct: false}
      , {description: "行や列を特定の条件で絞り込んだビューだけをアクセスさせることによって，基となる表のデータの一部を隠蔽して保護する手段を提供する。", correct: true}
      , {description: "データベースの物理的記憶構造の変更に影響されないように，アプリケーションプログラムに対して物理的データ独立性を提供する。", correct: false}
      , {description: "複数の表を結合したビューにインデックスを付与するととによって，複数の表にまたがった高度な検索手段を提供する。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "Webページ内でinfo@example.co.jpが電子メールアドレスであることを表し，このアドレスへの電子メールの送信に利用されるURIはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "imap:info@example.co.jp", correct: false}
      , {description: "mailto:info@example.co.jp", correct: true}
      , {description: "pop:info@example.co.jp", correct: false}
      , {description: "smtp:info@example.co.jp", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "共通鍵暗号方式において，100人の送受信者のそれぞれが，相互に暗号化通信を行うときに必要な共通鍵の総数は幾つか。"
    , multiple_answer: false
    , answers: [
      {description: "200", correct: false}
      , {description: "4,950", correct: true}
      , {description: "9,900", correct: false}
      , {description: "10,000", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "”システム管理基準”に該当する記述はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITILというITサービスの品質向上のためのガイドラインを基に作成した，ITサーピスマネジメントに関するフレームワークである。", correct: false}
      , {description: "一般基準，実施基準及び報告基準から構成されており，一般基準ではシステム監査人の独立性や職業倫理について規定している。", correct: false}
      , {description: "システム監査業務の品質を確保し，有効かつ効率的に監査を実施することを目的とした監査人の行為規範である。", correct: false}
      , {description: "情報システム戦略に基づき，効果的な情報システム投資のための，また，リスクを低減するためのコントロールを適切に整備・運用するための実践規範である。", correct: true}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "PCIデータセキュリティ基準(PCIDSS Version 3.0)のセキュリティ要件から見て，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "管理者のアクセスログは取得するが，プライバシを考慮して，一般利用者のアクセスログは取得しない。", correct: false}
      , {description: "従業員によるネットワーク外部からのリモートアクセスを許可する場合，管理者以外の従業員は利用者IDとそのIDのパスワードだけの認証でよい。", correct: false}
      , {description: "伝送中及び保存中のパスワードは，暗号化して解読不能にする。", correct: true}
      , {description: "利用されない利用者IDの削除及び無効化は，1年に1回まとめて行う。", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "安全性と信頼性について，次の方針でプログラム設計を行う場合，その方針を表す用語はどれか。<br/><br/>" +
                  "[方針〕<br/>" +
                  "不特定多数の人が使用するプログラムには，自分だけが使用するプログラムに比べて，より多くのデータチェックの機能を組み込む。プログラムが処理できるデータの前提条件を文書に書いておくだけでなく，その前提条件を満たしていないデータが実際に入力されたときは，エラーメッセージを表示して再入力を促すようにプログラムを作る。"
    , multiple_answer: false
    , answers: [
      {description: "フールプルーフ", correct: true}
      , {description: "フェールセーフ", correct: false}
      , {description: "フェールソフト", correct: false}
      , {description: "フォールトトレラント", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "JIS X 25010:2013で規定されるシステム及びソフトウェア製品の品質特性の定義のうち，”性能効率性”の定義はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "意図した保守者によって，製品又はシステムが修正することができる有効性及び効率性の度合い", correct: false}
      , {description: "明記された状態(条件)で使用する資源の量に関係する性能の度合い", correct: true}
      , {description: "明示された時間帯で，明示された条件下に，システム，製品又は構成要素が明示された機能を実行する度合い", correct: false}
      , {description: "明示された条件下で使用するとき，明示的ニーズ及び暗黙のニーズを満足させる機能を，製品又はシステムが提供する度合い", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "ある顧客層の今後3年間を通しての，年間顧客維持率が40%，1人当たり年平均売上高が200万円，売上高コスト比率が50%と想定される場合，今後3年間のLTV(顧客1人当たりの生涯価値)は何万円か。ここで，割引率は考慮しないものとする。"
    , multiple_answer: false
    , answers: [
      {description: "62.4", correct: false}
      , {description: "156", correct: true}
      , {description: "210", correct: false}
      , {description: "312", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "バランススコアカードを説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業のビジョンと戦略を実現するために，財務，顧客，内部ビジネスプロセス，学習と成長という四つの視点から検討するマネジメント手法", correct: true}
      , {description: "経営環境を，強み，弱み，機会，脅威という四つのカテゴリに分類して分析し，企業にとっての事業機会を導き出すマネジメント手法", correct: false}
      , {description: "製品を，導入期，成長期，成熟期，衰退期という四つの段階に分類し，企業にとっての最適な事業戦略を立案するマネジメント手法", correct: false}
      , {description: "ビジネスを，問題児，花形，金のなる木，負け犬という四つのカテゴリに分類し，経営資源配分を決定するためのマネジメント手法", correct: false}
    ]
    , category: 'AU-H27-SPRING'
  }
  , {
    description: "”システム監査基準”におけるシステム監査業務の品質管理の主な目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査時期・範囲・手続などについての適切なシステム監査計画を立案すること", correct: false}
      , {description: "システム監査結果の適正性を確保すること", correct: true}
      , {description: "システム監査で入手した情報の機密性を維持すること", correct: false}
      , {description: "システム監査の実施を通して，情報システムの品質向上に貢献すること", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "”システム管理基準”で定めている，運用業務におけるソフトウェア管理に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "プログラムからの出力情報の利用状況を記録し，定期的に分析する。", correct: false}
      , {description: "プログラムで用いるデータファイルへのアクセスをコントロールする。", correct: false}
      , {description: "プログラムの違法コピーが発生しないよう教育する。", correct: true}
      , {description: "プログラムのテスト結果を記録，保管する。", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "受注管理システムのデータ入力に対するシステム監査の報告書において，指摘事項に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "営業担当者が起票した受注伝票が，直接，受注入力担当者に送られ，受注入力担当者が伝票内容をシステムに入力し，その入力データによって出荷指示が自動的に行われている。", correct: true}
      , {description: "受注管理責任者と受注入力担当者が任命され，それぞれの役割が職務記述書に明文化されている。", correct: false}
      , {description: "受注件数が増えたので，契約社員を受注入力担当者に任命し，営業管理者の承認印のある受注伝票をシステムに入力させている。", correct: false}
      , {description: "受注入力担当者がシステムに入力した結果のプルーフリストを，受注管理責任者が出力し，入力した受注伝票と照合している。", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "経済産業省の”営業秘密管理指針”に基づく営業秘密データの管理状況について監査を行うとき，秘密管理性のチェックポイントはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "当該データが経営効率の改善に役立つているかどうかを分析していること", correct: false}
      , {description: "当該データの記録媒体に秘密を意味する表示をしていること", correct: true}
      , {description: "当該データの内容が刊行物に掲載されていないかを定期的に確認していること", correct: false}
      , {description: "当該データの内容が公序良俗に反していないかを確認していること", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "外部委託管理の監査に関する記述のうち，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "請負契約においては，委託側の事務所で作業を行っている受託側要員のアクセス管理が妥当かどうかを，委託側が監査できるように定める。", correct: true}
      , {description: "請負契約の場合は，受託側要員に対する委託側責任者の指揮命令が適切に行われているかどうかを，委託側で監査する。", correct: false}
      , {description: "外部委託で開発した業務システムの品質管理状況は，委託側で監査する必要はなく，受託側で監査すべきである。", correct: false}
      , {description: "機密度の高い業務システムの開発を外部に委託している場合は，自社開発に切り替えるよう改善勧告する。", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "表はコンピュータを利用して行うシステム監査技法についてまとめたものである。(1)～(4)の組合せとして，適切なものはどれか。<br/><br/>" +
                 "<img src = \"js/data/image/AU_H28_q05.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ア", correct: false}
      , {description: "イ", correct: true}
      , {description: "ウ", correct: false}
      , {description: "エ", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "監査調書に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "記載事項について被監査部門の承認を受ける。", correct: false}
      , {description: "実施した監査手続を記載し，証拠資料は写しでなく原資料を添付して保管する。", correct: false}
      , {description: "被監査部門から入手した証拠資料の写しに被監査部門の承認印を受ける。", correct: false}
      , {description: "必要に応じて被監査部門から入手した証拠資料を添付して保管する。", correct: true}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "個人情報の取得に関して，JIS Q 15001における個人情報取得時の要求事項への準拠性を監査した。指摘事項に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "Webサイトから注文するシステムにおいて，利用者が注文申込みボタンを押し，注文受付完了画面が表示された時点で，個人情報の利用目的を表示している。", correct: true}
      , {description: "営業担当者が，顧客から口頭で注文を受ける際，顧客に対して口頭で個人情報の利用目的を伝えている。", correct: false}
      , {description: "商品購入者に商品を利用した感想を答えてもらうアンケートはがきに，個人情報の利用目的を記載している。", correct: false}
      , {description: "通信販売コールセンタのオペレータが，電話で注文を受ける際，電話を通して顧客に個人情報の利用目的を伝えている。", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "日本公認会計士協会の監査・保証実務委員会実務指針第86号”受託業務に係る内部統制の保証報告書”に基づいて作成される文書と作成者の適切な組合せはどれか。ここでは，受託業務の一部について再委託が行われており，除外方式を採用しているものとする。<br/><br/>" +
                 "<img src = \"js/data/image/AU_H26_q09.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ア", correct: false}
      , {description: "イ", correct: false}
      , {description: "ウ", correct: true}
      , {description: "エ", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "金融庁の”財務報告に係る内部統制の評価及び監査の基準”におけるIT業務処理統制に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "外部委託に関する契約の管理", correct: false}
      , {description: "システムの運用管理", correct: false}
      , {description: "システムの開発・保守に係る管理", correct: false}
      , {description: "利用部門によるエラーデータの修正と再処理", correct: true}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "職務著作の要件のうち，プログラムの著作物の場合は満たす必要がなく，プログラム以外の著作物の場合は必要なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "著作権が作成者に帰属するとの取り決めがないこと", correct: false}
      , {description: "法人等が自己の著作の名義の下に公表していること", correct: true}
      , {description: "法人等の業務に従事する者が作成していること", correct: false}
      , {description: "法人等の発意に基づいていること", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "下請業者から納品されたプログラムに，下請業者側の事情を原因とするパグが発見され，プログラムの修正が必要となった。このとき，支払期日を改めて定めようとする場合，下請代金支払遅延等防止法上認められている期間(60日)の起算日はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "当初のプログラムの検査が終了した日", correct: false}
      , {description: "当初のプログラムが下請業者に返却された日", correct: false}
      , {description: "修正済プログラムが納品された日", correct: true}
      , {description: "修正済プログラムの検査が終了した日", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "会社法に基づく監査委員会の役割はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "委員会設置会社の機関であり，取締役及び執行役の職務の執行を監査し，株主総会に提出する会計監査人の選任などに関する議案の内容を決定する。", correct: true}
      , {description: "大会社である公開会社に設置が義務付けられている機関であり，監査役及び監査役会を統括する。", correct: false}
      , {description: "日本公認会計士協会に設置される機関であり，公認会計士監査に関する実務上の指針である監査基準委員会報告書を公表する。", correct: false}
      , {description: "連結グループに属する会社法監査対象会社の会計監査人によって構成される機関であり，連結グループに属する会社の監査役の活動を監査する。", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "ある研究所において，社員は一つ以上の学会に所属している。社員と学会の関係をUMLを用いて表した図のうち，適切なものはどれか。ここで，会員番号は学会が所属する会員を一意に識別するために付与する番号である。<br/><br/>" +
                 "<img src = \"js/data/image/AU_H26_q14.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "ア", correct: false}
      , {description: "イ", correct: false}
      , {description: "ウ", correct: true}
      , {description: "エ", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "クラスBのIPアドレスで255.255.255.0のサブネットマスクを用いたとき，同一サブネット内で設定可能なホストアドレス数は最大で幾つか。"
    , multiple_answer: false
    , answers: [
      {description: "126", correct: false}
      , {description: "254", correct: true}
      , {description: "65,534", correct: false}
      , {description: "16,777,214", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "IPv6において，拡張ヘッダを利用することによって実現できるセキュリティ機能はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "URLフィルタリング機能", correct: false}
      , {description: "暗号化機能", correct: true}
      , {description: "ウイルス検疫機能", correct: false}
      , {description: "情報漏えい検知機能", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "コンティンジェンシープランにおける留意点はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "企業の全てのシステムを対象とするのではなく，システムの復旧の重要性と緊急性を勘案して対象を決定する。", correct: true}
      , {description: "災害などへの対応のために，すぐに使用できるよう，パックアップデータはコンピュータ室内又はセンタ内に保存しておく。", correct: false}
      , {description: "バックアップの対象は，機密情報の中から機密度を勘案して選択する。", correct: false}
      , {description: "被害のシナリオを作成し，これに基づく”予防策策定手順”を策定する。", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "SSLに関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "SSLで使用するWebサーバのディジタル証明書にはIPアドレスの組込みが必須なので， WebサーバのIPアドレスを変更する場合は，ディジタル証明書を再度取得する必要がある。", correct: false}
      , {description: "SSLで使用する個人認証用のディジタル証明書は，ICカードなどに格納できるので，格納場所を特定のPCに限定する必要はない。", correct: true}
      , {description: "SSLはWebサーバを経由した特定の利用者間の通信のために開発されたプロトコルであり，Webサーバ提供者への事前の利用者登録が不可欠である。", correct: false}
      , {description: "日本国内では，SSLで使用する共通鍵の長さは，128ビット未満に制限されている。", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "UML 2.0において，オブジェクト間の相互作用を時間の経過に注目して記述するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "アクティビテイ図", correct: false}
      , {description: "コミュニケーション図", correct: false}
      , {description: "シーケンス図", correct: true}
      , {description: "ユースケース図", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "ソフトウェアの潜在エラー数を推定する方法の一つにエラー埋込み法がある。100個のエラーを故意にプログラムに埋め込んだとき，そのエラーの存在を知らない検査グループが30個のエラーを発見した。そのうち 20個は故意に埋め込んでおいたものであった。この時点で，このプログラムには埋込みエラーを除く残存エラー数は幾つと推定できるか。"
    , multiple_answer: false
    , answers: [
      {description: "40", correct: true}
      , {description: "50", correct: false}
      , {description: "70", correct: false}
      , {description: "150", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "システムの改善に向けて提出された4案について，評価項目を設定して採点した結果を，採点結果表に示す。効果及びリスクについては5段階評価とし，それぞれの評価項目の重要度に応じて，重み付け表に示すとおりの重み付けを行った上で次の式で総合評価点を算出したとき，総合評価点が最も高い改善案はどれか。<br/><br/>" +
                 "<img src = \"js/data/image/AU_H26_q21.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "案1", correct: false}
      , {description: "案2", correct: false}
      , {description: "案3", correct: true}
      , {description: "案4", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "ITサービスマネジメントにおける問題管理プロセスの活動はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "根本原因の特定", correct: true}
      , {description: "サービス要求の優先度付け", correct: false}
      , {description: "変更要求の記録", correct: false}
      , {description: "リリースの試験", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "企業の競争戦略におけるリーダ戦略はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "上位企業の市場シェアを奪うことを目標に製品，サービス，販売促進，流通チャネルなどのあらゆる面での差別化戦略をとる。", correct: false}
      , {description: "潜在的な需要がありながら，大手企業が参入してこないような専門特化した市場に，限られた経営資源を集中する。", correct: false}
      , {description: "目標とする企業の戦略を観察し，迅速に模倣することで，開発や広告のコストを抑制し，市場での存続を図る。", correct: false}
      , {description: "利潤，名声の維持・向上と最適市場シェアの確保を目標として，市場内の全ての顧客をターゲットにした全方位戦略をとる。", correct: true}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "TOCにおけるDBR(ドラム・バッファ・ロープ)のドラムの説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "制約条件工程を最大限に稼働させるために制約条件工程の前に置かれる余裕時間や計画的な在庫", correct: false}
      , {description: "制約条件工程を含む工程全体の売上高から，原材料費などの費用を差し引いたもの", correct: false}
      , {description: "全体の生産量を決める上で能力上制約となる工程のこと，又はその工程のペースに合わせること", correct: true}
      , {description: "先頭の工程への原材料の投入タイミングを制約条件工程の生産速度に同期させる仕組み", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "前期の製品Aの売上高は1,000万円，営業利益は50万円であり，限界利益は400万円であった。当期は売上高が10%減少するととが予想されている。当期も前期と同じ営業利益を得るために必要な，固定費の削減額は何万円か。ここで，当期の限界利益率は前期と同じものとする。"
    , multiple_answer: false
    , answers: [
      {description: "35", correct: false}
      , {description: "40", correct: true}
      , {description: "60", correct: false}
      , {description: "65", correct: false}
    ]
    , category: 'AU-H26-SPRING'
  }
  , {
    description: "システム監査技法であるITF(lntegrated Test Facility)法の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査機能をもったモジュールを監査対象プログラムに組み込んで実環境下で実行し，抽出条件に合った例外データ，異常データなどを収集し，監査対象プログラムの処理の正確性を検証する方法である。", correct: false}
      , {description: "監査対象ファイルにシステム監査人用の口座を設け，実稼働中にテストデータを入力し，その結果をあらかじめ用意した正しい結果と照合して，監査対象プログラムの処理の正確性を検証する方法である。", correct: true}
      , {description: "システム監査人が準備した監査用プログラムと監査対象プログラムに同ーのデータを入力し，両者の実行結果を比較することによって，監査対象プログラムの処理の正確性を検証する方法である。", correct: false}
      , {description: "プログラムの検証したい部分を通過したときの状態を出力し，それらのデータを基に監査対象プログラムの処理の正確性を検証する方法である。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "インシデントの究明やシステム監査にも利用できる，証拠を収集し保全する技法はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "コンティンジェンシープラン", correct: false}
      , {description: "サンプリング", correct: false}
      , {description: "ディジタルフォレンジックス", correct: true}
      , {description: "ベンチマーキング", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "A社のシステム開発課長の指揮監督下でB社のプログラマが開発業務を担当する状況において，監査報告書に記載された指摘事項として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "B社が一般労働者派遣事業の許可を得ていない場合，派遣契約はできないので，指揮命令系統は変えずに請負契約に改める必要がある。", correct: false}
      , {description: "請負契約であり，B社に対してはコーディング業務に限定して発注する必要がある。", correct: false}
      , {description: "請負契約であり，著作権の帰属があいまいになるので，法人著作である旨と著作者人格権とを，A社の権利として，契約条項に記載する必要がある。", correct: false}
      , {description: "派遣契約であり，B社のプログラマがA社の著作権を侵害した場合の措置に関する規定を設けておく必要がある。", correct: true}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "システム監査において，ペネトレーションテストが最も適合するチェックポイントはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "オフィスへの入退に，不正防止及び機密保護の物理的な対策が講じられているか。", correct: false}
      , {description: "データ入力が漏れなく，重複なく正確に行われているか。", correct: false}
      , {description: "ネットワークの負荷状況の推移が記録，分析されているか。", correct: false}
      , {description: "ネットワークへのアクセスコントロールが有効に機能しているか。", correct: true}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "給与計算業務を外部に委託している場合に，受託会社が提供する業務における，委託会社の財務報告に関わる内部統制の有効性が，外部の監査人によって保証されていることを確認できるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "一般財団法人日本情報経済社会推進協会 ISMS認証証明書", correct: false}
      , {description: "一般財団法人日本情報経済社会推進協会 プライパシーマーク登録証", correct: false}
      , {description: "特別民間法人日本公認会計士協会 監査・保証実務委員会実務指針第86号に基づく保証報告書", correct: true}
      , {description: "独立行政法人情報処理推進機構 JISEC認証報告書", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "システム監査における監査証跡はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査業務の全過程において，監査人が収集及び作成した資料である。", correct: false}
      , {description: "監査対象システムの入力から出力に至る過程を追跡できる一連の仕組みと記録である。", correct: true}
      , {description: "監査人が監査証拠を入手するために実施する監査技術の組合せである。", correct: false}
      , {description: "監査人が監査手続を実施して収集した資料，及び監査人の判断に基づいて評価された資料である。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "組織体が情報システムにまつわるリスクに対するコントロールを適切に整備・運用する目的として，”システム管理基準”に示されているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "システム監査業務の品質を確保し，有効かつ効率的に監査を実施するため", correct: false}
      , {description: "情報システムが，組織体の目的を実現するように安全，有効かつ効率的に機能するため", correct: true}
      , {description: "情報セキュリティに係るリスクのマネジメントが効果的に実施されるよう，リスクマネジメントに基づくコントロールの整備・運用の状況を評価するため", correct: false}
      , {description: "リスクに対するコントロールをシステム監査人が評価し，保証又は助言を行い，ITガパナンスの実現に寄与するため", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "システム監査で利用する統計的サンプリング法に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "サンプルの抽出に無作為抽出法を用い，サンプルの評価結果に基づいて母集団に関する結論を出す場合に，確率論の考え方を用いる。", correct: true}
      , {description: "抽出されるサンプル数は，統計的サンプリングと非統計的サンプリングの選択を決定付ける重要な判断基準である。", correct: false}
      , {description: "抽出するサンプルを統計的に決定する手法ではなく，サンプルに対して評価手続を実施した結果を統計的に推定する方法である。", correct: false}
      , {description: "無作為抽出法を用いるだけではなく，システム監査人が経験的判断を加味して，サンプルを抽出する。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "外部委託に関するシステム監査において，経営破綻などによってソフトウェア資産のメンテナンスが受けられなくなることを防ぐために確認すべき契約項目はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "開発したソフトウエアの瑕疵担保責任条項", correct: false}
      , {description: "外部委託先のサービスを評価するためのSLA条項", correct: false}
      , {description: "責任の所在を明確にするためのソフトウェア開発の再委託禁止条項", correct: false}
      , {description: "ソフトウェアのソースコードなどを第三者へ預託するエスクロウ条項", correct: true}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "”ソフトウェア管理ガイドライン”への準拠性を確かめることを目的とした監査はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "情報システムに対する自然災害，機器の障害，故意や過失などのリスクを未然に防止する対策事項の監査", correct: false}
      , {description: "情報システムの信頼性と安全性を確実に具備する対策事項の監査", correct: false}
      , {description: "ソフトウェアの違法複製を防止・発見する対策事項の監査", correct: true}
      , {description: "ソフトウェアの脆弱性関連情報の取扱いに関する対策事項の監査", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "金融庁の”財務報告に係る内部統制の評価及び監査に関する実施基準”において，”全社的な内部統制”としての”ITへの対応”に該当する評価項目はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITに係る業務の外部委託に関する契約の管理を適切に行っているか。", correct: false}
      , {description: "新たなシステムの導入に当たり十分な試験が行われているか。", correct: false}
      , {description: "経営者は，ITに関する適切な戦略，計画などを定めているか。", correct: true}
      , {description: "システムに障害が発生した場合，分析や解決などの対応が適切に行われているか。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "データ管理者(DA)とデータベース管理者(DBA)を別々に任命した場合のDAの役割として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "業務データ量の増加傾向を把握し，ディスク装置の増設などを計画して実施する。", correct: false}
      , {description: "システム開発の設計工程では，主に論理データベース設計を行い，データ項目を管理して標準化する。", correct: true}
      , {description: "システム開発のテスト工程では，主にパフォーマンスチューニングを担当する。", correct: false}
      , {description: "システム障害が発生した場合には，データの復旧や整合性のチェックなどを行う。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "情報システムの設計のうち，フェールソフトの例はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "UPSを設置することによって，停電時に手順どおりにシステムを停止できるようにし，データを保全する。", correct: false}
      , {description: "制御プログラムの障害時に，システムの暴走を避け，安全に運転を停止できるようにする。", correct: false}
      , {description: "ハードウェアの障害時に，パフォーマンスは低下するが，構成を縮小して運転を続けられるようにする。", correct: true}
      , {description: "利用者の誤操作や誤入力を未然に防ぐことによって，システムの誤動作を防止できるようにする。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "不正競争防止法で保護されるものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "特許権を取得した発明", correct: false}
      , {description: "頒布されている独自のシステム開発手順書", correct: false}
      , {description: "秘密として管理している事業活動用の非公開の顧客名簿", correct: true}
      , {description: "秘密としての管理を行っていない，自社システムを開発するために重要な設計書", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "公益通報者保護法に定められているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "自主的な製品回収計画を監督官庁に届け出ることは，公益通報である。", correct: false}
      , {description: "社内のコンプライアンス窓口への通報は，公益通報ではない。", correct: false}
      , {description: "派遣労働者は，派遣先企業の違法行為について通報を行うことができる。", correct: true}
      , {description: "労働組合や新聞社など，行政機関ではない社外の機関に通報することはできない。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "刑法の電子計算機使用詐欺罪が適用される違法行為はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "いわゆるねずみ講方式による取引形態のWebページを開設する。", correct: false}
      , {description: "インターネット上に，実際よりも良品と誤認させる商品カタログを掲載し，粗悪な商品を販売する。", correct: false}
      , {description: "インターネットを経由して銀行のシステムに虚偽の情報を与え，不正な振込や送金をさせる。", correct: true}
      , {description: "企業のWebページを不法な手段で変造し，その企業の信用を傷つける情報を流す。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "金融商品に関する会計基準において，原則として時価を貸借対照表価額とするものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "受取手形，売掛金，貸付金などの債権", correct: false}
      , {description: "子会社及び関連会社の株式", correct: false}
      , {description: "売買目的有価証券", correct: true}
      , {description: "満期保有目的の債券", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "関係データベースのビューを利用する目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "DISTINCT指定，GROUP BY匂及びHAVING句をもつ演算処理を独立させて，プログラムに単純化したデータ更新手段を提供する。", correct: false}
      , {description: "行や列を特定の条件で絞り込んだビューだけをアクセスさせることによって，基となる表のデータの一部を隠蔽して保護する手段を提供する。", correct: true}
      , {description: "データベースの物理的記憶構造の変更に影響されないように，アプリケーションプログラムに対して物理的データ独立性を提供する。", correct: false}
      , {description: "複数の表を結合したビューにインデックスを付与することによって，複数の表にまたがった高度な検索手段を提供する。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "関係XとYを結合した後，関係Zを得る関係代数演算はどれか。<br/><br/>" +
                 "<img src = \"js/data/image/AU_H25_q19.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "射影と選択", correct: true}
      , {description: "射影と和", correct: false}
      , {description: "選択", correct: false}
      , {description: "選択と和", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "ダイナミック DNS(DNS UPDATE)の説明として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "PCのIPアドレスが変わっても，そのPCには同じホスト名でアクセスできる。", correct: true}
      , {description: "PCのホスト名が変わっても，そのPCには同じIPアドレスでアクセスできる。", correct: false}
      , {description: "ネットワークに接続されたPCの起動時に自動的にIPアドレスを割り当てる。", correct: false}
      , {description: "ネットワークに接続されたPCの起動時に自動的にホスト名を割り当てる。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "ブルートフォース攻撃に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "可能性のある文字のあらゆる組合せのパスワードでログインを試みる。", correct: true}
      , {description: "コンピュータへのキ一入力を全て記録して外部に送信する。", correct: false}
      , {description: "盗聴者が正当な利用者のログインシーケンスをそのまま記録してサーバに送信する。", correct: false}
      , {description: "ブラウザとWebサーバの問の通信で，認証が成功してセッションが開始されているときに，Cookieなどのセッション情報を盗む。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "Webコンテンツの作成に当たって，アクセシビリティを確保する観点から考慮すベきことはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "キーボードだけでも操作できるように，TabキーとEnterキーでリンクを選択できるようにする。", correct: true}
      , {description: "どこに入力するかを分かりやすくするために，項目名の直後に入力欄を配置し，”(半角)”などの入力方法は入力欄の後ろに配置する。", correct: false}
      , {description: "文字位置をそろえるために，単語の途中に空白を入れて調整する。", correct: false}
      , {description: "利用者がどこを誤ったか分かるように，入力エラーがあった項目名を赤色の文字に変更した入力画面を再表示する。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "共通フレーム2007における監査プロセスの目的はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "あるアクティビティのソフトウェア製品が，先行するアクティピテイで決められた要求事項又は条件を満たしていることを確認する。", correct: false}
      , {description: "客観性及び独立性を保証された立場から，成果物及びプロセスが要求事項，計画及び合意に適合しているかどうかを判定する。", correct: true}
      , {description: "システム又はソフトウェア製品が，明確に意図した使用方法を満足していることを確認する。", correct: false}
      , {description: "プロジェクトの管理レベル及び技術レベルの両面に対して，プロジェクト活動の状況及び成果物を評価する。", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "ファイブフォース分析において，企業の競争力に影響を与える五つの要因として，新規参入者の脅威，バイヤの交渉力，競争業者間の敵対関係，代替製品の脅威と，もう一つはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "サプライヤの交渉力", correct: true}
      , {description: "自社製品の品質", correct: false}
      , {description: "消費者の購買力", correct: false}
      , {description: "政府の規制", correct: false}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "新たに創造された知識を組織に広め，新たな暗黙知として習得することを，SECIモデルでは，どれに分類するか。"
    , multiple_answer: false
    , answers: [
      {description: "共同化(Socialization)", correct: false}
      , {description: "表出化(Externalization)", correct: false}
      , {description: "連結化(Combination)", correct: false}
      , {description: "内面化(Internalization)", correct: true}
    ]
    , category: 'AU-H25-SPRING'
  }
  , {
    description: "システム監査における，サンプリング(試査)に関わる用語の説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "許容誤謬率とは，サンプルの件数を決めるときに用いるものであって，監査人が受け入れることのできる所定の内部統制からの逸脱率である。", correct: true}
      , {description: "サンプリングリスクとは，固有リスクと統制リスクを掛け合わせた結果である。", correct: false}
      , {description: "統計的サンプリングとは，特定の種類の例外取引を全部抽出する方法である。", correct: false}
      , {description: "母集団とは，評価対象から結論を導き出すのに必要なデータ全体のうち，リスクの高いデータの集合である。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "システム監査における監査証拠の説明のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査人が収集又は作成する資料であり，監査報告書に記載する監査意見や指摘事項は，その資料によって裏付けられていなければならない。", correct: true}
      , {description: "監査人が当初設定した監査手続を記載した資料であり，監査人はその資料に基づいて厳査を実施しなければならない。", correct: false}
      , {description: "機密性の高い情報が含まれている資料であり，監査人は監査報告書の作成後，速やかに全てを処分しなければならない。", correct: false}
      , {description: "被監査部門が監査人に提出する資料であり，監査人が自ら作成する資料は含まれない。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "ソフトウェアパッケージ購入に関する監査において監査人自身が行う手続として，最も適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "自社開発と購入の場合の投資対効果をそれぞれ分析，比較して，ソフトウェアパッケージを選定する。", correct: false}
      , {description: "ソフトウェアパッケージに適合するハードウェア性能の検討が行われていることを確認する。", correct: true}
      , {description: "ソフトウェアパッケージを提供する企業の財務内容が健全かどうかを調査する。", correct: false}
      , {description: "他の同種のソフトウェアパッケージに関する資料を取り寄せて，価格，性能などを比較する。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "”JIS Q 27001：2006”の管理策を参考にして設定した，ノート型PCに対する物理的セキュリティ対策の妥当性を確かめるための監査手続はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "オフィス内を視察し，不在者のノート型PCが施錠されたキャビネットに保管されていることを確認する。", correct: true}
      , {description: "管理ルールを調べ，ノート型PCを社外に持ち出す場合には，セキュリティ管理者の許可を得るルールになっていることを確認する。", correct: false}
      , {description: "教育計画及び教育記録を閲覧し，ノート型PCの安全管理についての社員教育が適切に行われていることを確認する。", correct: false}
      , {description: "実際にノート型PCを操作して，パスワードを入力しないと利用可能にならない仕組みになっていることを確認する。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "システム監査報告書に記載された改善勧告に対する監査人の取組みのうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "改善勧告に対する改善実施状況を確認する。", correct: true}
      , {description: "改善勧告に対する改善の実施を，被監査部門の長に指示する。", correct: false}
      , {description: "改善勧告に対する被監査部門の改善実施プロジェクトの管理を行う。", correct: false}
      , {description: "改善勧告の内容を被監査部門に示し，改善実施計画を提出させる。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "”システム管理基準”で定めている，運用業務におけるソフトウェア管理に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "プログラムからの出力情報の利用状況を記録し，定期的に分析する。", correct: false}
      , {description: "プログラムで用いるデータファイルへのアクセスをコントロールする。", correct: false}
      , {description: "プログラムの違法コピーが発生しないよう教育する。", correct: true}
      , {description: "プログラムのテスト結果を記録，保管する。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "提案依頼書(RFP)によるベンダ選定手続に関するシステム監査の結果，指摘事項に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "RFPに，システム化要求事項の他，あるべき業務モデルも添付していた。", correct: false}
      , {description: "RFP発行後，問合せをしてきたITベンダに対して追加資料を提供していた。", correct: true}
      , {description: "提案を希望するITベンダを集めて，RFP説明会を実施していた。", correct: false}
      , {description: "予算額の範囲を，RFPに明示していた。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "システム監査の予備調査の段階で行う作業はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "監査計画書の作成", correct: false}
      , {description: "監査証拠の評価", correct: false}
      , {description: "監査対象の実態把握", correct: true}
      , {description: "監査目的の設定", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "内部統制として効果的な職務の分離の説明はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "開発部門のプログラマが運用部門のオペレータを兼務しない。", correct: true}
      , {description: "購買管理で購入物品の検品確認と検品確認入力を同じ担当者が行わない。", correct: false}
      , {description: "資材管理で資材の搬入確認と搬入確認入力を兼務しない。", correct: false}
      , {description: "電子送金システムでシステムの始動と送金操作を同じ担当者が行わない。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "金融庁の”財務報告に係る内部統制の評価及び監査の基準”では，内部統制の基本的要素の一つとして”ITへの対応”を示している。”ITへの対応”に関する記述のうち，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "COSOの”内部統制の統合的枠組み”にも，構成要素のーつとして示されている。", correct: false}
      , {description: "IT環境への対応と，ITの利用及び統制からなる。", correct: true}
      , {description: "ITを利用しない手作業での統制活動では内部統制の目的は達成できない。", correct: false}
      , {description: "他の内部統制の基本的要素と独立に存在する。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "内部統制の基本的要素の一つである”統制活動”に該当するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "経営目的を達成するための経営方針及び経営戦略", correct: false}
      , {description: "個人情報保護に関する脅威と脆弱性の分析", correct: false}
      , {description: "受注から出荷に至る業務プロセスに組み込まれた処理結果の検証", correct: true}
      , {description: "定期的に計画して実施する内部業務監査", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "ITサービスマネジメントにおけるインシデント管理プロセスの効率性又は有効性を判断するための指標として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "うまくいかずに切戻しをした変更の個数", correct: false}
      , {description: "根本原因の診断や必要な変更が完了していない問題の個数", correct: false}
      , {description: "サービス停止の発生頻度", correct: false}
      , {description: "サービスデスクがエスカレーションせずにクローズしたインシデントの割合", correct: true}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "ITILv3におけるサービスライフサイクルの段階のうち，キャパシティ管理を含むものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "サービスオペレーション", correct: false}
      , {description: "サービスストラテジ", correct: false}
      , {description: "サービスデザイン", correct: true}
      , {description: "サービストランジション", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "電子署名法に規定されているものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "電子署名技術は公開鍵暗号技術によるものと規定されている。", correct: false}
      , {description: "電子署名には，電磁的記録以外の，コンピュータ処理の対象とならないものも含まれる。", correct: false}
      , {description: "電子署名には，民事訴訟法における押印と同様の効力が認められている。", correct: true}
      , {description: "電子署名の認証業務を行うことができるのは，政府が運営する認証局に限られる。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "JIS Q 9001 (ISO 9001)で内部監査について規定していることはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "内部監査では，品質マネジメントシステムが定められたとおり正しく機能しているかどうかを，予告することなく不定期に確認する。", correct: false}
      , {description: "内部監査では，品質マネジメントシステムの効果的な実施と維持及び規格要求事項への適合を確認する。", correct: true}
      , {description: "内部監査は，社内のシステム監査部門又はシステム監査技術者が行う。", correct: false}
      , {description: "内部監査を実施する前提条件として，ISO 9001に基づく品質マネジメントシステムの審査登録が必要である。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "リーダシップのスタイルは，その組織の状況に合わせる必要がある。組織とリーダシップの関係に次のことが想定できるとすると，野球チームの監督のリーダシップのスタイルとして，図のdと考えられるものはどれか。<br/><br/>" +
                 "〔組織とリーダシップの関係〕<br/>" +
                 "組織は発足当時，構成員や仕組みの成熟度が低いので，リーダが仕事本位のリーダシップで引っ張っていく。成熟度が上がるにつれ，リーダと構成員の人間関係が培われ，仕事本位から人間関係本位のリーダシップに移行していく。更に成熟度が進むと，構成員は自主的に行動でき，リーダシップは仕事本位，人間関係本位のいずれもが弱まっていく。<br/><br/>" +
                 "<img src = \"js/data/image/AU_H24_q16.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "うるさく言うのも半分くらいで勝てるようになってきた。", correct: false}
      , {description: "勝つためには選手と十分に話し合って戦略を作ることだ。", correct: false}
      , {description: "勝つためには選手の足を引っ張らないことだ。", correct: true}
      , {description: "選手をきちんと管理することが勝つための条件だ。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "”商品”表に対して，次のSQL文を実行して得られる仕入先数は幾つか。<br/><br/>" +
                 "SELECT DISTINCT 仕入先コード FROM 商品<br/>" +
                 "WHERE (販売単価 - 仕入単価) ><br/>" +
                 "(SELECT AVG (販売単価 - 仕入単価) FROM 商品)<br/><br/>" +
                 "<img src = \"js/data/image/AU_H24_q17.png\"/>"
    , multiple_answer: false
    , answers: [
      {description: "1", correct: false}
      , {description: "2", correct: false}
      , {description: "3", correct: true}
      , {description: "4", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "IEEE 802.1QのタグVLANの特徴に関する記述として，適切なものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "MACアドレスを用いたグルーピングを行う。", correct: false}
      , {description: "VLAN識別子(VID)の最大は 1,024である。", correct: false}
      , {description: "イーサネットフレームのタイプフィールドにVLAN識別子(VID)を指定する。", correct: false}
      , {description: "複数のスイッチングハブにまたがる仮想LANを構築できる。", correct: true}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "一つのグローバルIPアドレスを使って複数のホストが同時にインターネットにアクセスできるようにする仕組みを何と呼ぶか。"
    , multiple_answer: false
    , answers: [
      {description: "DHCP", correct: false}
      , {description: "IPマルチキャスト", correct: false}
      , {description: "NAPT", correct: true}
      , {description: "VPN", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "IPv6において，拡張ヘッダを利用することによって実現できるセキュリティ機能はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "URLフィルタリング機能", correct: false}
      , {description: "暗号化機能", correct: true}
      , {description: "ウイルス検疫機能", correct: false}
      , {description: "情報漏えい検知機能", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "”システム管理基準”に該当する記述はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "ITILというITサービスの品質向上のためのガイドラインを基に作成した，ITサービスマネジメントに関するフレームワークである。", correct: false}
      , {description: "一般基準，実施基準及び報告基準から構成されており，一般基準ではシステム監査人の独立性や職業倫理について規定されている。", correct: false}
      , {description: "システム監査業務の品質を確保し，有効かつ効率的に監査を実施することを目的とした監査人の行為規範である。", correct: false}
      , {description: "情報システム戦略に基づき，効果的な情報システム投資のための，また，リスクを低減するためのコントロールを適切に整備・運用するための実践規範である。", correct: true}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "UML2.0において，オブジェクト聞の相互作用を時間の経過に注目して記述するものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "アクティビティ図", correct: false}
      , {description: "コミュニケーション図", correct: false}
      , {description: "シーケンス図", correct: true}
      , {description: "ユースケース図", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "開発ライフサイクルモデルとして，ウォータフォールモデル，進化的モデル，スパイラルモデルの三つを考える。ソフトウェア保守は，どのモデルを採用したときに必要か。"
    , multiple_answer: false
    , answers: [
      {description: "ウォータフォールモデルだけ", correct: false}
      , {description: "ウォータフォールモデルと進化的モデルだけ", correct: false}
      , {description: "ウォータフォールモデルとスパイラルモデルだけ", correct: false}
      , {description: "ウォータフォールモデル，進化的モデル，スパイラルモデルの全て", correct: true}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "ブランド戦略のうち，ブランド拡張を説明したものはどれか。"
    , multiple_answer: false
    , answers: [
      {description: "既存のブランドネームをそのまま用いた上で，対象市場を新しいマーケットセグメントに変更し，売上高の増加を狙う戦略である。", correct: false}
      , {description: "既存のブランドネームを他の商品においても展開することで，既存ブランドの認知度を新商品にも利用し，販売効果を高める戦略である。", correct: true}
      , {description: "従来の市場をターゲットとし続けるが，従来のブランドネームを廃棄して新しいブランドネームに変更する戦略である。", correct: false}
      , {description: "単一のブランドを強調するだけでなく，同一カテゴリで複数ブランドを使い分けることによって市場シェアの獲得を狙う戦略である。", correct: false}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "企業が実施するマクロ環境分析のうちPEST分析によって戦略を策定している事例はどれか。"
    , multiple_answer: false
    , answers: [
      {description: "購買決定者の年齢層や社会的なポジション，購買に至るプロセスの中で購買行動に影響する要因を把握し，自社の製品の市場投入方法を決定する。", correct: false}
      , {description: "自社の製品市場に参入してくると見込まれる，別市場の企業の動向を把握し，新製品の開発を決定する。", correct: false}
      , {description: "自社の販売力，生産カの評価や自社の保有する技術力を検証し，新しく進出する市場分野を決定する。", correct: false}
      , {description: "法規制，景気動向，流行の推移や新技術の状況を把握し，自社の製品改善方針を決定する。", correct: true}
    ]
    , category: 'AU-H24-SPRING'
  }
  , {
    description: "次の構成のうち、最も可用性が高くなる構成はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "1つのリージョン内の1つのAZに4台のWebサーバ(EC2)を配置し、ELBを用いて負荷分散する", correct: false}
      , {description: "1つのリージョン内の2つのAZに各2台のWebサーバ(EC2)を配置し、ELBを用いて負荷分散する", correct: true}
      , {description: "2つのリージョン内の各1つのAZに2台ずつWebサーバ(EC2)を配置し、ELBを用いて負荷分散する", correct: false}
      , {description: "2つのリージョン内の各2つのAZに1台ずつWebサーバ(EC2)を配置し、ELBを用いて負荷分散する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "次のうち、利用者の責任で実施しなければいけないセキュリティ対策はどれか？2つ選べ。"
    , multiple_answer: true
    , answers: [
      {description: "EC2インスタンスの物理ホスト上のハイパーバイザのセキュリティパッチの適用", correct: false}
      , {description: "S3上のデータの暗号化", correct: true}
      , {description: "物理ディスクの適切な廃棄", correct: false}
      , {description: "EC2インスタンス上のOSのセキュリティパッチの適用", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "AWSアカウント／認証情報の推奨される運用はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "ルートアカウントに複雑なパスワードを割り当てて、定期的に更新しながら利用する", correct: false}
      , {description: "S3バケットへのファイルのアップロードを行うプログラムのソースコードに、S3バケットへのファイルアップロードが許可されたIAMユーザのアクセスキーとシークレットアクセスキーを記載する", correct: false}
      , {description: "S3バケットへのファイルのアップロードを行うプログラムをEC2インスタンスで実行する場合、S3バケットへのファイルのアップロードが許可されたIAMロールをEC2インスタンスに割り当ててEC2インスタンスを作成する", correct: true}
      , {description: "AWSの使用頻度に関わらず、全従業員(約1,000人)をそれぞれIAMユーザとして登録し、各自のアクセスキーとシークレットキーを用いてAWSを利用させる", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "サブネットの特徴についての次の記述のうち、正しいものはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "7つのベストプラクティスの1つである「故障に備えた設計で障害を回避」を実現するために、サブネットは複数のAZにまたがって作成することが推奨されている。", correct: false}
      , {description: "サブネットを作成する際、パブリックサブネット機能を有効化することで、インターネットと通信が可能なパブリックサブネットを作成することができる。", correct: false}
      , {description: "異なるAZに作成されたサブネット間の通信も、デフォルトのルーティングルールで許可されており、ルーティングルールでは通信を制限することができない。", correct: true}
      , {description: "パブリックサブネット内のインスタンスとプライベートサブネット内のインスタンスの通信を許可するには、セキュリティグループ、ネットワークACLとルートテーブルの3つ全ての設定を見直す必要がある。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "プライベートサブネット内のEC2インスタンスがインターネットにアクセスするのに不要な手順はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "インターネットゲートウェイをVPCにアタッチする。", correct: false}
      , {description: "NATインスタンスを作成し、NATインスタンスの送信先／送信元チェックを無効化する。", correct: false}
      , {description: "インターネットにアクセスさせるプライベートサブネット内のEC2インスタンスに、Elastic IPをアタッチする。", correct: true}
      , {description: "プライベートサブネットのルートテーブルの送信先0.0.0.0/0のターゲットにNATインスタンスを設定する。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "パブリックサブネット内のWebサーバのEC2インスタンスにインターネットからHTTPアクセス(80番ポート)ができない。確認不要な設定はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "Webサーバのセキュリティグループのインバウンドで、80番ポートへのアクセスが許可されていることを確認する。", correct: false}
      , {description: "Webサーバのセキュリティグループのアウトバウンドで、戻りのトラフィックの通過が許可されていることを確認する。", correct: true}
      , {description: "パブリックサブネットのネットワークACLのインバウンドで、80番ポートへのアクセスが許可されていることを確認する。", correct: false}
      , {description: "パブリックサブネットのネットワークACLのアウトバウンドで、戻りのトラフィックの通過が許可されていることを確認する。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "VPCピア機能の正しい利用方法はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "災害対策で2つのリージョンに同じシステムを構築した。リージョン間のデータの同期のために、各VPCをピア接続で接続した。", correct: false}
      , {description: "本番環境と開発環境を同一のネットワーク環境(同じプライベートCIDRブロック)としたいため、VPCを分けて作成した。本番環境で発生した障害を開発環境で検証するために、本番環境と開発環境をVPCピア接続で接続した。", correct: false}
      , {description: "オンプレミスのデータセンタとVPC-AがVPN接続されている。VPC-B内のEC2インスタンスにオンプレミスのデータセンタからVPNを介してセキュアに接続するために、オンプレミスのデータセンタ内のルーティングルールでVPC-B宛を追加し、VPC-AとVPC-BをVPCピア接続した。", correct: false}
      , {description: "プライベートネットワークアドレスが10.200.0.0/16のVPC-Aと192.168.0.0/16のVPC-BをVPCピア接続で接続したところ、PCX-1が作成された。そこで、VPC-Aのルートテーブルに「送信先192.168.0.0/16のターゲットとしてPCX-1」を追加し、VPC-Bのルートテーブルに「送信先10.200.0.0/16のターゲットとしてPCX-1」を追加した。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "EC2インスタンスの初回起動時にソフトウェアをインストールしたり、サービスを起動したりすることを指定するEC2のデータはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "メタデータ", correct: false}
      , {description: "起動スクリプト", correct: false}
      , {description: "rc.ec2", correct: false}
      , {description: "ユーザデータ", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "インスタンスIDやIPアドレスなど、EC2インスタンス自身に関する情報が格納されており、EC2インスタンスの初回起動時の設定などに用いられるEC2のデータはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "メタデータ", correct: true}
      , {description: "起動スクリプト", correct: false}
      , {description: "rc.ec2", correct: false}
      , {description: "ユーザデータ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "EBSボリュームに格納しているデータが削除されるタイミングとして正しい選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "EC2インスタンス再起動時", correct: false}
      , {description: "EC2インスタンス停止時", correct: false}
      , {description: "EC2インスタンス削除時(EBSボリュームのDelete on Terminationはオフ)", correct: false}
      , {description: "OSからデータの削除処理を行った時", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "インスタンスストアに格納しているデータが削除されるタイミングとして正しい選択肢はどれか？正しい選択肢を全て選べ。"
    , multiple_answer: true
    , answers: [
      {description: "EC2インスタンス再起動時", correct: false}
      , {description: "EC2インスタンス停止時", correct: true}
      , {description: "EC2インスタンス削除時(EBSボリュームのDelete on Terminationはオフ)", correct: true}
      , {description: "OSからデータの削除処理を行った時", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "EBS-backedインスタンスにはできるが、instance store-backedインスタンスにはできない操作はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "EC2インスタンス再起動", correct: false}
      , {description: "EC2インスタンス停止", correct: true}
      , {description: "EC2インスタンス削除", correct: false}
      , {description: "OSからのシャットダウン(停止)", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "Provisioned IOPSタイプのEBSボリュームを利用して、安定したIO性能をアプリケーションに提供したい。推奨される構成として正しい選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "Provisioned IOPSのEBSボリュームを4本以上用意し、ソフトウェアRAIDによってRAID5を組む", correct: false}
      , {description: "Provisioned IOPS最適化EC2インスタンスを起動して、Provisioned IOPSのEBSボリュームをそのEC2インスタンスにアタッチする", correct: false}
      , {description: "EBS最適化EC2インスタンスを起動して、Provisioned IOPSのEBSボリュームをそのEC2インスタンスにアタッチする", correct: true}
      , {description: "Provisioned IOPSのEBSボリュームを2本用意し、ソフトウェアRAIDによってRAID1を組む", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "EBSデータボリューム(非ルートボリューム)のスナップショット取得方法として、適切な選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "対象となるEBSボリュームへのディスクI/Oは気にせずに、スナップショットの取得を開始する。", correct: false}
      , {description: "対象となるEBSボリュームへのディスクI/Oが少なくなる時間帯に、スナップショットの取得を開始する。", correct: false}
      , {description: "対象となるEBSボリュームをアンマウントし、スナップショットの取得を開始する。開始後はスナップショットの取得完了を待たずにEBSボリュームを再びマウントして、ディスクI/Oを再開する。", correct: true}
      , {description: "対象となるEBSボリュームをアンマウントし、スナップショットの取得を開始する。スナップショットの取得完了を待ってEBSボリュームを再びマウントして、ディスクI/Oを再開する。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "EBSボリュームの特徴(取り扱い)として、正しい選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "EBSボリュームは同じVPC内のEC2インスタンスであれば、どのEC2インスタンスにでもアタッチ(接続)することができる。", correct: false}
      , {description: "あるEBSボリュームを他のリージョンのEC2インスタンスにアタッチ(接続)したい場合、EBSボリュームのリージョン間コピーを利用して、該当リージョンにコピーする。", correct: false}
      , {description: "あるEBSボリュームを同じリージョン内の別のAZのEC2インスタンスにアタッチしたい場合は、EBSボリュームのAZ間コピーを利用して、該当AZにコピーする。", correct: false}
      , {description: "あるEBSボリュームを同じリージョン内の別のAZのEC2インスタンスにアタッチしたい場合は、一度スナップショットを作成し、そのスナップショットから新たなEBSボリュームを作成する。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "プレイスメントグループの特徴を示した選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "単一のAZ内に作られたグループで、そのグループ内に起動したEC2インスタンス間のネットワークアクセスを高速化する。", correct: true}
      , {description: "単一のリージョン内に作られたグループで、そのグループ内に起動したEC2インスタンス間のネットワークアクセスを高速化する。", correct: false}
      , {description: "単一のAZ内に作られたグループで、そのグループ内に起動したEC2インスタンス間の通信が自動的に暗号化される。", correct: false}
      , {description: "単一のリージョン内に作られたグループで、そのグループ内に起動したEC2インスタンス間の通信が自動的に暗号化される。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "Dedicatedインスタンスの特徴を示した選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "ネットワーク接続型のストレージであるEBSボリュームとの間に、ディスクI/O専用の帯域を確保し、ディスクI/Oを安定化させるEC2インスタンス。", correct: false}
      , {description: "特定のAZ内で、特定のインスタンスタイプを1年あるいは3年の契約で低価格で利用できるEC2インスタンス。", correct: false}
      , {description: "特定のAZにおける市場価格に対して、その市場価格を上回る価格で入札し、低価格で利用できるEC2インスタンス。", correct: false}
      , {description: "EC2インスタンスを起動する物理ホストにおいて、自アカウント以外のEC2インスタンスが起動しないことを保証されたEC2インスタンス。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "RAW画像データを様々な形式に変換する処理を行っている。データの耐久性やコストの最適化を考慮した場合、それぞれのデータに適した格納先はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "RAW画像：EBS　変換後画像：スタンダードS3", correct: false}
      , {description: "RAW画像：EBS　変換後画像：RRS S3", correct: false}
      , {description: "RAW画像：スタンダードS3　変換後画像：RRS S3", correct: true}
      , {description: "RAW画像：スタンダードS3　変換後画像：Glacier", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "S3に保存すべきデータとして適していないものはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "社内の従業員に公開する動画", correct: false}
      , {description: "世界中のエンドユーザに公開する動画", correct: false}
      , {description: "ゲノムのシーケンスデータ", correct: false}
      , {description: "DBのオンライントランザクションログ", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "S3に対してオブジェクトの格納／上書き／削除を行った際、発生する可能性がある選択肢はどれか？正しい選択肢を全て選べ。"
    , multiple_answer: true
    , answers: [
      {description: "S3バケットに新規にオブジェクトを格納する操作をし、「完了」と表示された。その後すぐにバケット内のオブジェクトの一覧表示をしたが、格納したはずのオブジェクトが表示されなかった。", correct: false}
      , {description: "S3バケットに格納済みのオブジェクトを上書きする操作をし、「完了」と表示された。その後すぐに上書きしたオブジェクトを開くと以前のデータが参照された。", correct: true}
      , {description: "S3バケットに格納済みのオブジェクトを削除する操作をし、「完了」と表示された。その後すぐにバケット内のオブジェクトの一覧表示をしたが、削除したはずのオブジェクトが表示された。", correct: true}
      , {description: "他の選択肢はすべて発生する可能性がない。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "S3バケットに格納しているオブジェクトを特定のAWSアカウントのIAMユーザにのみ参照させたい。利用するS3のアクセス制限はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "アクセスコントロールリスト(ACL)", correct: false}
      , {description: "バケットポリシー", correct: true}
      , {description: "IAMポリシー(ユーザポリシー)", correct: false}
      , {description: "署名付きURL", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "S3のデフォルトで有効な機能はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "オブジェクトの暗号化", correct: false}
      , {description: "アクセスログの取得", correct: false}
      , {description: "オブジェクトのバージョニング", correct: false}
      , {description: "オブジェクトのリージョン内複製", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "S3オブジェクトの誤削除に対する有効な機能／設定はどれか？正しい選択肢を全て選べ。"
    , multiple_answer: true
    , answers: [
      {description: "オブジェクトのバージョニング", correct: true}
      , {description: "オブジェクトのリージョン内複製", correct: false}
      , {description: "アクセスコントロールリスト(ACL)", correct: false}
      , {description: "バケットポリシー", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "Glacierに格納すべきデータとして適切なものはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "社内の従業員に公開する動画", correct: false}
      , {description: "世界中のエンドユーザに公開する動画", correct: false}
      , {description: "ゲノムのシーケンスデータ", correct: true}
      , {description: "DBのオンライントランザクションログ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "マルチAZ配置したRDSインスタンスでフェイルオーバーが発生した際に、利用者側で実施しなければいけない操作として正しい選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "マスターとして動作していたインスタンスに割り振られていたプライベートIPアドレスを、スレーブとしてスタンバイしているインスタンスに割り振る。", correct: false}
      , {description: "マスターとして動作していたインスタンスを再起動し、スレーブとしてスタンバイするように設定する。", correct: false}
      , {description: "RDSインスタンスへの読み書きを行っていたアプリケーションのRDSインスタンスの接続先を、マスターのプライベートIPアドレスからスレーブのプライベートIPアドレスに変更し、再度デプロイする。", correct: false}
      , {description: "特に何も操作する必要はない。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "オペレーションミスによるデータ損失に対する有効なRDSの機能／設定はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "マルチAZ配置", correct: false}
      , {description: "自動バックアップ", correct: true}
      , {description: "パッチ適用", correct: false}
      , {description: "Provisioned IOPS", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "DynamoDBの特徴／メリット／ユースケースとして正しい選択肢を全て選べ。"
    , multiple_answer: true
    , answers: [
      {description: "DynamoDBは、データを3ヶ所のデータセンタに冗長的に格納するため耐久性が非常に高く、Key-Value Store形式に対応したNoSQLデータベースである。その上、拡張性があり、格納したデータに合わせて自動的に拡張するため、S3の代替用途として利用できる。", correct: false}
      , {description: "DynamoDBテーブルへのアクセスはデフォルトですべてのアクセスが拒否されているため、セキュリティグループでアクセスを受け付ける必要がある。", correct: false}
      , {description: "DynamoDBは拡張性があり、格納したデータに合わせて自動的に拡張する上、高いI/O性能を有している。そのため、頻繁に書き込みが発生する大量のデータの格納先として適している。", correct: true}
      , {description: "DynamoDBは拡張性があるものの、項目の最大サイズは限られている、そのため、大きなデータサイズのデータを扱うには、実データについてはS3に保管し、DynamoDBにはメタデータを格納する。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "ElasticCacheの特徴／メリット／ユースケースとして正しい選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "ElasticCacheはインメモリキャッシュとして高速に読み書きできるため、ログインが必要な会員Webサイトのユーザのセッション情報の格納先として適している。", correct: true}
      , {description: "ElasticCacheに対してデータを読み書きするアプリケーションがEC2インスタンス上で動作している場合、ElasticCacheへのアクセスを許可したIAMポリシーを設定したIAMロールをEC2インスタンスに割り当てることで、ElasticCacheへのアクセス制限を安全に管理することができる。", correct: false}
      , {description: "ElasticCacheはリージョン内の3か所のデータセンタのサーバにデータをキャッシングすることで、利用者は3か所のうちの最も近いデータセンタからデータを低レイテンシーでダウンロードすることができる。", correct: false}
      , {description: "ElasticCacheはインメモリキャッシュとして高速に読み書きできるため、Webサーバの前段に配置することにより、キャッシングしているデータを高速に利用者に応答するメリットがあるほか、Webサーバへの負荷を軽減することができる。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "Webサーバとして利用しているEC2インスタンスの標準メトリックスとして正しい選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "メモリ使用率", correct: false}
      , {description: "Webページへのロード時間", correct: false}
      , {description: "Webサーバのプロセス／スレッド数", correct: false}
      , {description: "Network I/O", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "ELBについて、その特徴やメリットを正しく説明している選択肢はどれか？"
    , multiple_answer: false
    , answers: [
      {description: "マルチリージョン(東京リージョンとソウルリージョン)にEC2インスタンスを冗長的に起動し、それらをELBの配下に配置することで、リージョンレベルの障害にも備えた高可用なシステムを構築できる。", correct: false}
      , {description: "ELBは配下のEC2インスタンスのヘルスチェックを行っており、異常のインスタンスを検出すると、そのインスタンスをターミネートし、配下から削除する。新しいインスタンスの起動については、Auto Scalingと組み合わせて利用する必要がある。", correct: false}
      , {description: "ELBはPCからのアクセスやモバイル端末からのアクセスなど、受信したトラフィックの種類に応じて特定のEC2インスタンスにトラフィックを分散することができる。", correct: false}
      , {description: "ELBは負荷に応じてELB自体が動的にスケーリングすることにより、ボトルネックにならないように設計されている。スケーリングに応じてELBの実体のIPアドレスも変化するため、ELBのIPアドレスを直接指定(使用)してはいけない。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "可用性やコストメリットを考慮した上で、適切なシステム構成はどれか？正しい選択肢を全て選べ。"
    , multiple_answer: true
    , answers: [
      {description: "システムの負荷テストを1週間かけて行い、予測される最大の負荷に対応できるEC2インスタンスタイプ／数を初期構成とする。予測できない負荷に対しては、Auto Scalingを実装して対応する。", correct: false}
      , {description: "システムの負荷テストは1日で終わらせ、予測される平均の負荷に対応できるEC2インスタンスタイプ／数を初期構成とする。予測できない負荷に対しては、Auto Scalingを実装して対応する。", correct: true}
      , {description: "オンプレミス環境で80時間かかっていた分散／並列処理が可能なバッチ処理がある。この処理をコンピューティング最適化インスタンスファミリーの中で一番性能／利用料金の高いc4.8xlargeを1台使用して40時間で処理する。", correct: false}
      , {description: "オンプレミス環境で80時間かかっていた分散／並列処理が可能なバッチ処理がある。この処理をコンピューティング最適化インスタンスファミリーの中で一番性能／利用料金の高いc4.8xlargeを40台使用して1時間で処理する。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "年末年始の休暇が1か月後に迫り、Auto Scaling設定がされている運航チケット予約WebシステムのEC2インスタンスの最大数を一時的に増やしたい。Auto Scalingのどの設定を変更したらよいか？"
    , multiple_answer: false
    , answers: [
      {description: "起動設定(Launch Configuration)", correct: false}
      , {description: "Auto Scaling Group", correct: true}
      , {description: "Auto Scalingポリシー", correct: false}
      , {description: "CloudWatchアラームの閾値", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "2つのAZ(AZ-1とAZ-2)内のサブネット設定がされたAuto Scalingグループがある。現在それぞれのAZに2台ずつAuto Scalingグループに所属しているEC2インスタンスが起動している。Auto ScalingポリシーでCPU利用率が70%を超えたら2台インスタンスを増やし、40%を下回ったら1台インスタンスを減らし、さらに30%を下回ったら1台インスタンスを減らす設定をしている。CPU利用率が次のように遷移した場合、各AZのインスタンス数の分布として発生しうる選択肢はどれか？正しい選択肢を全て選べ。CPU利用率：50%→75%→45%→35%"
    , multiple_answer: true
    , answers: [
      {description: "AZ-1：3　AZ-2：3", correct: false}
      , {description: "AZ-1：2　AZ-2：2", correct: false}
      , {description: "AZ-1：3　AZ-2：2", correct: true}
      , {description: "AZ-1：2　AZ-2：3", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "SQSを導入することで効果が見込まれるシステムはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "動画トランスコード", correct: true}
      , {description: "動画配信", correct: false}
      , {description: "ショッピングサイトの買い物かご", correct: false}
      , {description: "ショッピングサイトの注文－請求処理", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "S3の静的ウェブサイトホスティング機能を利用したWebページを、「example.com」という名前でアクセスさせるよう、Route 53で名前解決したい。どのレコードを使用すればよいか？"
    , multiple_answer: false
    , answers: [
      {description: "Aレコード", correct: false}
      , {description: "AAAAレコード", correct: false}
      , {description: "CNAMEレコード", correct: false}
      , {description: "ALIASレコード", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "2つのリージョンにそれぞれ同じWebシステムを構成し、世界のどこからアクセスしても同じURLでWebシステムにアクセスできるようにRoute 53で名前解決している。このとき、利用すべきRoute 53の機能として、適切なものはどれか？正しい選択肢を全て選べ。"
    , multiple_answer: true
    , answers: [
      {description: "加重ラウンドロビン", correct: false}
      , {description: "レイテンシーベースルーティング", correct: true}
      , {description: "ヘルスチェック／フェイルオーバー", correct: true}
      , {description: "クロスリージョンルーティング", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "CloudFrontを利用した際のメリットはどれか？正しい選択肢を全て選べ。"
    , multiple_answer: true
    , answers: [
      {description: "1年単位の契約でCDNサービスが利用できる。", correct: false}
      , {description: "コンテンツを世界各地のエッジロケーションにキャッシュすることで、動画などの大きなコンテンツを高速にダウンロードできる。", correct: true}
      , {description: "アクセス(ダウンロード)させるオリジナルのデータ(コンテンツ)格納先として、AWS上のS3バケットやELB(EC2インスタンス)の他、オンプレミスのサーバも指定でき、コンテンツ配信サーバの負荷を下げることができる。", correct: true}
      , {description: "CloudFrontでは、ディストリビューション作成時にオリジナルデータ(コンテンツ)が世界各地のエッジロケーションにキャッシュされるため、最初にアクセスしたエンドユーザから高速アクセス(ダウンロード)が可能となる。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "年度初めに行われた期首方針の社外秘の説明動画を、全世界の支店／事務所に配信したい。どのように配信するのが最も適切か？"
    , multiple_answer: false
    , answers: [
      {description: "全てのリージョンに動画配信用のS3バケットを作成し、その中に動画をコピーする。全従業員をIAMユーザとして登録し、IAMポリシーで各従業員の最寄りのリージョンのS3バケット内の動画へのアクセスを許可する。", correct: false}
      , {description: "全てのリージョンに動画配信用のS3バケットを作成し、その中に動画をコピーする。動画オブジェクトのURLから署名付きURLを作成し、各支店／事務所のイントラサイトに署名付きURLを掲載する。", correct: false}
      , {description: "本社近くのリージョンに動画配信用のS3バケットを作成し、その中に動画を格納する。CloudFrontを利用して、そのS3バケットをオリジンサーバに設定し、全社のイントラサイトにCloudFrontのディストリビューションURLを掲載する。", correct: false}
      , {description: "本社近くのリージョンに動画配信用のS3バケットを作成し、その中に動画を格納する。本社の従業員を含め、S3バケットからの直接動画配信を禁止し、全社のイントラサイトにCloudFrontの署名付きURLを記載する。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "CloudFormationで実施できることとして、誤っているものはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "インフラストラクチャをコードとして記述でき、バージョン管理できる。", correct: false}
      , {description: "リソースを作成するリージョンごとに異なるテンプレートを作成する必要がある。", correct: true}
      , {description: "本番環境と開発環境でEC2インスタンスの台数が異なるが、1つのテンプレートで本番環境と開発環境の設定が記述できる。", correct: false}
      , {description: "CloudFormationで作成したリソースを一括して更新／削除できる。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "CloudFormationの特徴として、正しいものはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "CloudFormationはテンプレートに記述された順番にリソースを作成していくため、依存関係のあるリソースは記載順序に気をつける。", correct: false}
      , {description: "CloudFormationでスタックの作成途中にエラーが発生した場合、デフォルトでは、たとえそれまでに課金が発生するリソースが起動していたとしても、そのリソースを削除してロールバックする。", correct: true}
      , {description: "CloudFormerというツールを利用し、作成したテンプレートに間違いがないかを確認することができる。", correct: false}
      , {description: "CloudFormationはEC2インスタンスやRDSインスタンスなどの実体を作成するツールであり、VPCは作成できないため、事前にVPCを作成しておく必要がある。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "CloudFormation／Elastic Beanstalk／OpsWorksの使い方として、適切なものはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "CloudFormationのテンプレートにバージョン番号をつけ、アプリケーションのバージョンアップに合わせてスタックの更新を行う。", correct: false}
      , {description: "複数のリージョンで本番環境とは異なるVPCで開発環境と検証環境を作成するため、Elastic Beanstalkを利用して環境をデプロイする。", correct: false}
      , {description: "OpsWorksからChefのレシピを実行し、ELBの配下にAuto Scaling設定がされたEC2インスタンスが配置される構成を作成する。", correct: false}
      , {description: "Web-DB連携アプリケーション開発環境を複数用意するため、CloudFormationでELBとEC2インスタンスとRDSインスタンスを作成し、EC2インスタンスに必要なソフトウェアをインストールする。CloudFormationからOpsWorksを呼び出して、アプリケーションソフトウェアの接続先のDBとしてRDSを設定する。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "24時間365日サービスを提供するチケット販売WebシステムをELBと配下のAuto ScalingグループのEC2インスタンス、及びRDSで構成している。初期EC2インスタンス数は2台だが、チケット販売開始時期にはアクセスが集中するため、販売開始時期の5分前にもう2台手動で追加しておき、販売開始後はAuto Scalingで自動拡張するように設定した。リサーブドインスタンスの使いどころとして適切なものはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "初めから起動している2台のインスタンス", correct: true}
      , {description: "販売開始時刻の5分前に追加する2台のインスタンス", correct: false}
      , {description: "販売開始後にAuto Scalingによって追加されるインスタンス", correct: false}
      , {description: "このシステムにリザーブドインスタンスを使う必要はない。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "24時間365日サービスを提供するチケット販売WebシステムをELBと配下のAuto ScalingグループのEC2インスタンス、及びRDSで構成している。初期EC2インスタンス数は2台だが、チケット販売開始時期にはアクセスが集中するため、販売開始時期の5分前にもう2台手動で追加しておき、販売開始後はAuto Scalingで自動拡張するように設定した。スポットインスタンスの使いどころとして適切なものはどれか？"
    , multiple_answer: false
    , answers: [
      {description: "初めから起動している2台のインスタンス", correct: false}
      , {description: "販売開始時刻の5分前に追加する2台のインスタンス", correct: false}
      , {description: "販売開始後にAuto Scalingによって追加されるインスタンス", correct: true}
      , {description: "このシステムにリザーブドインスタンスを使う必要はない。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-JP'
  }
  , {
    description: "AWSがデータセンターをクラスタリングする世界中の物理的な場所について、次のうちどれが説明されていますか？"
    , multiple_answer: false
    , answers: [
      {description: "Endpoint", correct: false}
      , {description: "Collection", correct: false}
      , {description: "Fleet", correct: false}
      , {description: "Region", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "各AWS地域は2つ以上の場所で構成されており、単一のデータセンターを使用する場合よりも高可用性、耐障害性、スケーラビリティの高い運用システムを運用することができます。 これらの場所は何と呼ばれていますか？"
    , multiple_answer: false
    , answers: [
      {description: "Availability Zones", correct: true}
      , {description: "Replication areas", correct: false}
      , {description: "Geographic districts", correct: false}
      , {description: "Compute centers", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "クラウドリソースを内部システムに接続するために既存のオンプレミスインフラストラクチャをクラウドに拡張する環境のデプロイに関する用語は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "All-in deployment", correct: false}
      , {description: "Hybrid deployment", correct: true}
      , {description: "On-premises deployment", correct: false}
      , {description: "Scatter deployment", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのAWSクラウドサービスを利用すれば、リソース使用率、アプリケーションパフォーマンス、および運用上の健康状態をシステム全体で把握できますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS Identity and Access Management (IAM)", correct: false}
      , {description: "Amazon Simple Notification Service (Amazon SNS)", correct: false}
      , {description: "Amazon CloudWatch", correct: true}
      , {description: "AWS CloudFormation", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のAWSクラウドサービスのうち、完全に管理されるNoSQLデータベースサービスはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Simple Queue Service (Amazon SQS)", correct: false}
      , {description: "Amazon DynamoDB", correct: true}
      , {description: "Amazon ElastiCache", correct: false}
      , {description: "Amazon Relational Database Service (Amazon RDS)", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社は、フラッシュ販売に基づいて、電子商取引ウェブサイトへのトラフィックパターンの変動を経験します。 フラッシュ販売中に必要なコンピューティング能力をトラフィックの急上昇に動的に対応させるには、どのようなサービスが役立ちますか？"
    , multiple_answer: false
    , answers: [
      {description: "Auto Scaling", correct: true}
      , {description: "Amazon Glacier", correct: false}
      , {description: "Amazon Simple Notification Service (Amazon SNS)", correct: false}
      , {description: "Amazon Virtual Private Cloud (Amazon VPC)", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社はオンライン写真共有サービスを提供しています。 開発チームは、待ち時間の最も短い画像ファイルをエンドユーザーに配信する方法を模索しており、ウェブサイトのコンテンツは最高のパフォーマンスで配信されます。 どのようなサービスが世界中のエンドユーザーにこれらのイメージファイルの配布をスピードアップするのに役立ちますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Elastic Compute Cloud (Amazon EC2)", correct: false}
      , {description: "Amazon Route 53", correct: false}
      , {description: "AWS Storage Gateway", correct: false}
      , {description: "Amazon CloudFront", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Compute Cloud（Amazon EC2）インスタンスを定期的に実行して、大規模で成長するファイルシステムに対してバッチ処理を実行します。 バッチジョブが終了したら、費用を節約するためにAmazon EC2インスタンスをシャットダウンしますが、以前のバッチ処理からAmazon EC2インスタンス上のファイルシステムを維持する必要があります。 これらの要件を満たすためにどのようなAWSクラウドサービスを利用できますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Elastic Block Store (Amazon EBS)", correct: true}
      , {description: "Amazon DynamoDB", correct: false}
      , {description: "Amazon Glacier", correct: false}
      , {description: "AWS CloudFormation", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのAWSクラウドサービスが、AWSクラウドの論理的に分離されたセクションを提供していますか？組織は定義した仮想ネットワークでAWSリソースを起動できますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Simple Workflow Service (Amazon SWF)", correct: false}
      , {description: "Amazon Route 53", correct: false}
      , {description: "Amazon Virtual Private Cloud (Amazon VPC)", correct: true}
      , {description: "AWS CloudFormation", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社は人気のあるテレビ番組のモバイル投票アプリケーションを提供しています。視聴者は5〜2,500万人で、すべての投票が15秒のタイムスパンで行われます。 投票アプリケーションを、投票を集計したバックエンドサービスから切り離すために、どのようなメカニズムを使用できますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS CloudTrail", correct: false}
      , {description: "Amazon Simple Queue Service (Amazon SQS)", correct: true}
      , {description: "Amazon Redshift", correct: false}
      , {description: "Amazon Simple Notification Service (Amazon SNS)", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）オブジェクトストレージはどのようにブロックストレージおよびファイルストレージとどのように異なるのですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon S3は固定サイズのブロックにデータを格納します。", correct: false}
      , {description: "オブジェクトは番号付きアドレスで識別されます", correct: false}
      , {description: "オブジェクトはどんなサイズでもかまいません", correct: false}
      , {description: "オブジェクトにはデータとメタデータの両方が含まれています", correct: true}
      , {description: "オブジェクトはバケットに格納されています", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）の適切な使用例ではないものはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "ウェブコンテンツを保存する", correct: false}
      , {description: "Amazon Elastic Compute Cloud（Amazon EC2）インスタンスにマウントされたファイルシステムを格納する", correct: true}
      , {description: "リレーショナルデータベースのバックアップを保存する", correct: false}
      , {description: "データベースのプライマリストレージ", correct: true}
      , {description: "分析ログの保存", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）の重要な特徴は何ですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "すべてのオブジェクトにはURLがあります", correct: true}
      , {description: "Amazon S3は無制限のデータを格納できます。", correct: true}
      , {description: "オブジェクトはデフォルトで世界的に読み込み可能です", correct: false}
      , {description: "Amazon S3はREST（Representational State Transfer）アプリケーションプログラムインタフェース（API）を使用しています。", correct: true}
      , {description: "バケットにストレージをあらかじめ割り当てる必要があります", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）データへのアクセスを制限するために使用できる機能はどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "バケット上の静的ウェブサイトのホスティングを有効にする", correct: false}
      , {description: "オブジェクトにあらかじめ署名されたURLを作成する", correct: true}
      , {description: "バケットまたはオブジェクトにAmazon S3アクセス制御リスト（ACL）を使用する", correct: true}
      , {description: "ライフサイクルポリシーを使用する", correct: false}
      , {description: "Amazon S3バケットポリシーを使用する", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "アプリケーションは重要なデータをAmazon Simple Storage Service（Amazon S3）に保存します。Amazon S3は、不注意または故意の削除から保護する必要があります。 このデータはどのように保護されますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "クロスリージョンレプリケーションを使用して別のバケットにデータを自動的にコピーする", correct: false}
      , {description: "ボールトロックを設定する", correct: false}
      , {description: "バケットのバージョン管理を有効にする", correct: true}
      , {description: "ライフサイクルポリシーを使用してAmazon Glacierにデータを移行する", correct: false}
      , {description: "バケットのMFA削除を有効にする", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社はAmazon Simple Storage Service（Amazon S3）にドキュメントを保存しますが、コストを最小限に抑えたいと考えています。 ほとんどの文書は約1ヶ月間だけ積極的に使用され、次にあまり頻繁に使用されません。 ただし、要求された場合、すべてのデータを数分以内に利用できる必要があります。 どのようにこれらの要件を満たすことができますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon S3 Reduced Redundancy Storage（RRS）のデータを30日後に移行する", correct: false}
      , {description: "Amazon Glacierにデータを30日後に移行する", correct: false}
      , {description: "Amazon S3標準にデータを移行する - 30日後にアクセスが稀になる（IA）", correct: true}
      , {description: "バージョン管理を有効にし、古いバージョンをAmazon Glacierに移行する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "高耐久性のためにAmazon Simple Storage Service（Amazon S3）にデータを保存する方法は？"
    , multiple_answer: false
    , answers: [
      {description: "データは自動的に他の地域に複製されます", correct: false}
      , {description: "データは地域内で自動的に複製されます", correct: true}
      , {description: "バケットでバージョニングが有効になっている場合にのみデータがレプリケートされます。", correct: false}
      , {description: "データは自動的にテープにバックアップされ、必要に応じて復元されます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のいずれかの記述が正しいAmazon Simple Storage Service（Amazon S3）のURLに基づいていますか？" +

                  "https://bucket1.abc.com.s3.amazonaws.com/folderx/myfile.doc"
    , multiple_answer: false
    , answers: [
      {description: "バケット\"bucket1.abc.com \"のフォルダ\" folderx \"にオブジェクト\" myfile.doc \"が格納されています。", correct: false}
      , {description: "オブジェクト\" myfile.doc \"はバケット\" bucket1.abc.com \"に格納されます。", correct: false}
      , {description: "オブジェクト\" folderx / myfile.doc \"はバケット\" bucket1.abc.com \"に格納されます。", correct: true}
      , {description: "オブジェクト\" myfile.doc \"はバケット\" bucket1 \"に格納されます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "誰があなたのAmazon Simple Storage Service（Amazon S3）データにアクセスしたのか、どこから何をすべきかを記録するには？"
    , multiple_answer: false
    , answers: [
      {description: "バケットのバージョン管理を有効にする", correct: false}
      , {description: "バケットでウェブサイトのホスティングを有効にする", correct: false}
      , {description: "バケット上のサーバアクセスログを有効にする", correct: true}
      , {description: "AWSアイデンティティとアクセス管理（IAM）バケットポリシーを作成する", correct: false}
      , {description: "Amazon CloudWatchログを有効にする", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）バケットでクロスリージョンレプリケーションを有効にする理由は何ですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "誤って削除した場合のデータのバックアップが必要です", correct: false}
      , {description: "より短い待ち時間で2番目のバケットにアクセスできるユーザーまたは顧客のセットがあります。", correct: true}
      , {description: "コンプライアンス上の理由から、最初の地域から少なくとも300マイル離れた場所にデータを格納する必要があります。", correct: true}
      , {description: "あなたのデータに少なくとも5つの耐久性が必要です。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社では、外部ストレージに送信されるすべてのデータを暗号化して送信する必要があります。 どのAmazon Simple Storage Service（Amazon S3）暗号化ソリューションがこの要件を満たしますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS管理キー付きSSE（Server-Side Encryption）（SSE-S3）", correct: false}
      , {description: "顧客提供キー付きSSE（SSE-C）", correct: false}
      , {description: "顧客管理キーによるクライアント側の暗号化", correct: true}
      , {description: "AWS Key Management Service（AWS KMS）キー（SSE-KMS）を使用したサーバー側の暗号化", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）バケットに格納されたデータにアクセスする一般的なWebアプリケーションがあります。 アクセスは非常に読み込みが集中し、多くのクライアントから要求される要求速度は最大500 GET /秒です。 この場合、Amazon S3のパフォーマンスとスケーラビリティをどのように高めることができますか？"
    , multiple_answer: false
    , answers: [
      {description: "データが複数の場所から配信されるようにするために領域外レプリケーションを有効にする", correct: false}
      , {description: "キー名にハッシュ接頭辞を含めることによって名前空間のランダム性を確保する", correct: true}
      , {description: "サーバーアクセスログを有効にする", correct: false}
      , {description: "プリフェッチを有効にするためにキー名が順次であることを確認する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）バケットでクロスリージョンレプリケーションを有効にするには、何が必要ですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "バケットのバージョン管理を有効にする", correct: true}
      , {description: "ライフサイクルルールを有効にしてデータを第2の領域に移行する", correct: false}
      , {description: "静的なウェブサイトのホスティングを有効にする", correct: false}
      , {description: "AWSアイデンティティとアクセス管理（IAM）ポリシーを作成して、Amazon S3があなたのためにオブジェクトを複製できるようにする", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社には100TBの財務記録があり、法律で7年間保管する必要があります。 経験によると、1歳以上の記録はアクセスされない可能性があります。 次のいずれかのストレージプランが、費用対効果の最も高い方法でこれらのニーズを満たしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "t2.microインスタンスにアタッチされたAmazon Elastic Block Store（Amazon EBS）ボリュームにデータを格納する", correct: false}
      , {description: "Amazon Simple Storage Service（Amazon S3）にライフサイクルポリシーを適用してストレージクラスを1年後にAmazon Glacierに変更し、7年後にオブジェクトを削除する", correct: true}
      , {description: "Amazon DynamoDBにデータを保存し、7年以上経過したデータを削除するためのスクリプトを毎日実行する", correct: false}
      , {description: "Amazon Elastic MapReduce（Amazon EMR）にデータを保存する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（S3）バケットポリシーは、Amazon S3バケットへのアクセスを制限することができます。 （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "会社名", correct: false}
      , {description: "IP address range", correct: true}
      , {description: "AWS account", correct: true}
      , {description: "Country of origin", correct: false}
      , {description: "特定の接頭辞を持つオブジェクト", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）は最終的に一貫したストレージシステムです。 最終的な一貫性の結果として失効したデータを取得することは可能ですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "新しいオブジェクトのPUT後にGET", correct: false}
      , {description: "削除後のGETまたはLIST", correct: true}
      , {description: "PUTを上書きしてから（既存のキーへのPUT）", correct: true}
      , {description: "新しいオブジェクトのPUT後のDELETE", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）バケットで静的なWebサイトをホストするためには何が必要ですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "静的なホスティング用にバケットを設定し、インデックスとエラードキュメントを指定する", correct: true}
      , {description: "ウェブサイトと同じ名前のバケットを作成する", correct: true}
      , {description: "バケット上のファイル転送プロトコル（FTP）を有効にする", correct: false}
      , {description: "バケット内のオブジェクトをパブリックにする", correct: true}
      , {description: "バケットのHTTPを有効にする", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたは、AWS上でホストされている貴重なメディアファイルを持っており、それらをあなたのWebアプリケーションの認証されたユーザーにのみ提供することにしたいです。 あなたは、あなたのコンテンツが無料で盗まれ、配布される可能性があると懸念しています。 どのようにあなたのコンテンツを保護することができますか？"
    , multiple_answer: false
    , answers: [
      {description: "静的Webホスティングを使用する", correct: false}
      , {description: "Webアプリケーションのコンテンツ用に事前に署名されたURLを生成する", correct: true}
      , {description: "AWSアイデンティティとアクセス管理（IAM）ポリシーを使用してアクセスを制限する", correct: false}
      , {description: "あなたのコンテンツを追跡するためにログを使用する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Glacierは以下のどのデータに適していますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "まれにしかアクセスされない", correct: true}
      , {description: "必要なときにすぐに利用可能", correct: false}
      , {description: "3〜5時間の復元期間の後に利用可能", correct: true}
      , {description: "30日以内に頻繁に消去されます", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Glacierについての真実は？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon Glacierはアーカイブに存在するオブジェクトにデータを格納します。", correct: false}
      , {description: "Amazon Glacierのアーカイブはユーザー指定のキー名で識別されます", correct: false}
      , {description: "Amazon Glacierのアーカイブは復元に3〜5時間かかる", correct: true}
      , {description: "Amazon Glacier vaultsはロックすることができます", correct: true}
      , {description: "Amazon Glacierは、スタンドアロンサービスとしてもAmazon S3ストレージクラスとしても使用できます。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ほとんどの場合、安定したトラフィックをサポートするために、Webアプリケーションには4つのインスタンスが必要です。 毎月最終日に、トラフィックは3倍になります。 このトラフィックパターンを処理する費用効果の高い方法は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "12の予約インスタンスを常に実行してください。", correct: false}
      , {description: "4つのオンデマンドインスタンスを常に実行してから、毎月最終日に8つのオンデマンドインスタンスを追加します。", correct: false}
      , {description: "4つのリザーブドインスタンスを常に実行してから、毎月最終日に8つのオンデマンドインスタンスを追加します。", correct: true}
      , {description: "4つのオンデマンドインスタンスを常に実行してから、毎月最終日に8つのリザーブドインスタンスを追加します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "受注処理アプリケーションは、2つの予約インスタンスが10件/分を処理するキューから抽出された受注を処理します。 処理中に注文が失敗した場合、注文はペナルティなしでキューに戻されます。 週末の販売のため、キューには数百の注文がバックアップされています。 バックアップは大惨事ではありませんが、顧客が確認メールをすばやく入手できるように、バックアップを排除したいと考えています。 受注用のキューを排除する費用効果の高い方法は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "キューをさらに作成する", correct: false}
      , {description: "注文を処理するために追加のスポットインスタンスを配備する", correct: true}
      , {description: "注文を処理するのに役立つ追加の予約済みインスタンスを配備する", correct: false}
      , {description: "注文を処理するために追加のオンデマンドインスタンスを配備する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "新しいAmazon Elastic Compute Cloud（Amazon EC2）Windowsインスタンスを起動するときに指定する必要があるのはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon EC2インスタンスID", correct: false}
      , {description: "管理者アカウントのパスワード", correct: false}
      , {description: "Amazon EC2インスタンスタイプ", correct: true}
      , {description: "Amazon Machine Image (AMI)", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "us-east-1aにm3.xlarge Linux Reservedインスタンスを購入しました。 この予約をどのように変更できますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "2つのm3.largeインスタンスに変更する", correct: true}
      , {description: "Windowsのインスタンスに変更する", correct: false}
      , {description: "us-east-1bに移動する", correct: true}
      , {description: "m4.xlargeに変更する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "インスタンスは2つのセキュリティグループに関連付けられています。 1つ目は、ポートレスのCIDR（Classless Inter-Domain Routing）ブロック72.14.0.0/16からのリモートデスクトッププロトコル（RDP）アクセスを可能にすることです。 2つ目は、CIDRブロック0.0.0.0/0からのポート80経由のHTTPアクセスを許可します。 あなたのインスタンスに到達できるトラフィックは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "CIDRブロック0.0.0.0/0からのRDPとHTTPアクセス", correct: false}
      , {description: "トラフィックは許可されていません", correct: false}
      , {description: "72.14.0.0/16からのRDPとHTTPトラフィック", correct: false}
      , {description: "RDPトラフィックはポート3389で72.14.0.0/16、HTTPトラフィックはポート80で0.0.0.0/0", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうち拡張ネットワークの機能はどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "More Packets Per Second (PPS)", correct: true}
      , {description: "低レイテンシ", correct: true}
      , {description: "複数のネットワークインタフェース", correct: false}
      , {description: "Border Gateway Protocol (BGP) ルーティング", correct: false}
      , {description: "Less jitter", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "高性能コンピューティング（HPC）クラスターを作成しており、インスタンス間の待ち時間と帯域幅が非常に小さくなっています。 次のどのような組み合わせによってこれが可能になりますか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "10 Gbpsネットワークパフォーマンスでインスタンスタイプを使用する", correct: true}
      , {description: "インスタンスをプレースメントグループに入れる", correct: true}
      , {description: "専用インスタンスを使用する", correct: false}
      , {description: "インスタンスで拡張ネットワークを有効にする", correct: true}
      , {description: "リザーブドインスタンスを使用する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのAmazon Elastic Compute Cloud（Amazon EC2）の機能によって、インスタンスが他のAWS顧客のインスタンスと物理ホストを共有しないことが保証されますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Virtual Private Cloud (VPC)", correct: false}
      , {description: "Placement groups", correct: false}
      , {description: "Dedicated Instances", correct: true}
      , {description: "Reserved Instances", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうちどれがインスタンスストアに当てはまりますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "自動バックアップ", correct: false}
      , {description: "インスタンスが停止するとデータが失われます。", correct: true}
      , {description: "Very high IOPS", correct: true}
      , {description: "費用はプロビジョニングされたストレージの総量に基づいています。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Block Store（Amazon EBS）の機能は次のうちどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon EBSに保存されたデータは、可用性ゾーン内で自動的に複製されます。", correct: true}
      , {description: "Amazon EBSデータは自動的にテープにバックアップされます。", correct: false}
      , {description: "Amazon EBSボリュームは、接続されたインスタンスのワークロードに対して透過的に暗号化できます。", correct: true}
      , {description: "接続されたインスタンスが停止すると、Amazon EBSボリュームのデータが失われます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Block Store（Amazon EBS）ボリュームのスナップショットを撮る必要があります。 ボリュームはどれくらいの期間利用できませんか？"
    , multiple_answer: false
    , answers: [
      {description: "ボリュームのプロビジョニングされたサイズに依存します。", correct: false}
      , {description: "ボリュームはすぐに利用可能になります。", correct: true}
      , {description: "ボリュームに格納されているデータの量によって異なります。", correct: false}
      , {description: "添付されたインスタンスがAmazon EBSに最適化されたインスタンスかどうかによって異なります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "スナップショットからAmazon Elastic Block Store（Amazon EBS）ボリュームをリストアしています。 データが利用可能になるまでの期間はどのくらいですか？"
    , multiple_answer: false
    , answers: [
      {description: "ボリュームのプロビジョニングされたサイズに依存します。", correct: false}
      , {description: "データはすぐに利用可能になります。", correct: true}
      , {description: "ボリュームに格納されているデータの量によって異なります。", correct: false}
      , {description: "付されたインスタンスがAmazon EBSに最適化されたインスタンスかどうかによって異なります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "耐久性が必要なデータには、15,000の一貫性のあるIOPSを必要とするワークロードがあります。 次のステップのどのような組み合わせが必要ですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon Elastic Block Store（Amazon EBS）最適化インスタンスを使用する", correct: true}
      , {description: "インスタンスストアを使用する", correct: false}
      , {description: "プロビジョニングされたIOPS SSDボリュームを使用する", correct: true}
      , {description: "磁気ボリュームを使用する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうちブートストラップによって達成できるものはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "最新のセキュリティアップデートをインストールする", correct: false}
      , {description: "現在のバージョンのアプリケーションをインストールする", correct: false}
      , {description: "オペレーティングシステム（OS）サービスを設定する", correct: false}
      , {description: "ほかの選択肢すべて", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "SSHを使って新しいLinuxインスタンスに接続するにはどうすればいいですか？"
    , multiple_answer: false
    , answers: [
      {description: "ルートパスワードの復号化", correct: false}
      , {description: "証明書の使用", correct: false}
      , {description: "インスタンスのキーペアのプライベートな方を使用する", correct: true}
      , {description: "マルチファクタ認証（MFA）の使用", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "VMのインポート/エクスポートでは、既存の仮想マシンを次のようにインポートできます。（2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon Elastic Block Store（Amazon EBS）ボリューム", correct: false}
      , {description: "Amazon Elastic Compute Cloud（Amazon EC2）のインスタンス", correct: true}
      , {description: "Amazon Machine Images (AMIs)", correct: true}
      , {description: "セキュリティグループ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Compute Cloud（Amazon EC2）インスタンスをWeb上で扱うために使用できるのは次のうちどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Windowsマシン名", correct: false}
      , {description: "パブリックDNS名", correct: true}
      , {description: "Amazon EC2インスタンスID", correct: false}
      , {description: "Elastic IPアドレス", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "正しく復号化された管理者パスワードとRDPを使用すると、起動したばかりのWindowsインスタンスにログインできなくなります。 次のうちどれが考えられる理由はありますか？"
    , multiple_answer: false
    , answers: [
      {description: "IPアドレスからポート3389経由でRDPアクセスを許可するセキュリティグループルールはありません。", correct: true}
      , {description: "インスタンスはリザーブドインスタンスです", correct: false}
      , {description: "インスタンスは拡張ネットワークを使用していません", correct: false}
      , {description: "インスタンスはAmazon EBSに最適化されたインスタンスではありません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "通常の使用中に1,500 IOPSで1TBの耐久性ブロックストレージが必要な作業負荷があります。 毎晩、15分間3000 IOPSが必要なExtract、Transform、Load（ETL）タスクがあります。 このワークロードに最も適したボリュームタイプは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "プロビジョニングされたIOPS SSDボリュームを3,000 IOPSで使用する", correct: false}
      , {description: "インスタンスストアを使用する", correct: false}
      , {description: "汎用SSDボリュームを使用する", correct: true}
      , {description: "磁気ボリュームを使用する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたはElastic IPアドレスをどのように請求されますか？"
    , multiple_answer: false
    , answers: [
      {description: "インスタンスと関連付けられている時間ごとに", correct: false}
      , {description: "インスタンスと関連付けられていない時間単位", correct: true}
      , {description: "それらを流れるデータに基づいて", correct: false}
      , {description: "それらが接続されているインスタンスのタイプに基づいて", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon VPCで使用できる最小サイズのサブネットとは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "/24", correct: false}
      , {description: "/26", correct: false}
      , {description: "/28", correct: true}
      , {description: "/30", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "既存のサーバー資産をAWSに移行している大規模な旅行会社で働くソリューションアーキテクトです。 カスタムAmazon VPCを使用することをお勧めしており、進んでいくことに同意しています。 彼らは、自分のWebサーバー用のパブリックサブネットと、データベースを配置するプライベートサブネットが必要になります。 また、Webサーバーとデータベースサーバーの可用性が高く、Webサーバーが最低2台、データベースサーバーが2台必要です。 高可用性を維持する必要があるサブネットの数はいくつですか？"
    , multiple_answer: false
    , answers: [
      {description: "2", correct: false}
      , {description: "3", correct: false}
      , {description: "4", correct: true}
      , {description: "1", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうちVPCのサブネット層に適用できるオプションのセキュリティ制御はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Network ACL", correct: true}
      , {description: "Security Group", correct: false}
      , {description: "Firewall", correct: false}
      , {description: "Web application firewall", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon VPCで使用できるIPアドレスの最大サイズは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "/16", correct: true}
      , {description: "/24", correct: false}
      , {description: "/28", correct: false}
      , {description: "/30", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "新しいサブネットを作成し、IGWを使用してそのサブネットからインターネットにトラフィックをルーティングするルートテーブルにルートを追加します。 どのタイプのサブネットを作成しましたか？"
    , multiple_answer: false
    , answers: [
      {description: "An internal subnet", correct: false}
      , {description: "A private subnet", correct: false}
      , {description: "An external subnet", correct: false}
      , {description: "A public subnet", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "新しいAmazon VPCを作成するとどうなりますか？"
    , multiple_answer: false
    , answers: [
      {description: "メインルートテーブルはデフォルトで作成されます", correct: true}
      , {description: "デフォルトで3つのサブネットが作成されます.1つは各空き領域ごとに1つです。", correct: false}
      , {description: "1つのアベイラビリティゾーンに3つのサブネットがデフォルトで作成されます。", correct: false}
      , {description: "IGWはデフォルトで作成されます", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "US-East-1で新しいVPCを作成し、このAmazon VPC内に3つのサブネットを用意します。 次のうちどれが当てはまりますか？"
    , multiple_answer: false
    , answers: [
      {description: "デフォルトでは、これらのサブネットは互いに通信することができません;ルートを作成する必要があります。", correct: false}
      , {description: "すべてのサブネットはデフォルトでパブリックです", correct: false}
      , {description: "すべてのサブネットはデフォルトで相互に通信できます", correct: true}
      , {description: "各サブネットは同一のCIDRブロックを持ちます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon VPCには一度にいくつのIGWを接続できますか？"
    , multiple_answer: false
    , answers: [
      {description: "1", correct: true}
      , {description: "2", correct: false}
      , {description: "3", correct: false}
      , {description: "4", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon VPCのどの面がステートフルですか？"
    , multiple_answer: false
    , answers: [
      {description: "Network ACLs", correct: false}
      , {description: "Security groups", correct: true}
      , {description: "Amazon DynamoDB", correct: false}
      , {description: "Amazon S3", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "プライベートサブネットとパブリックサブネットの両方を備えたカスタムAmazon VPCを作成しました。 NATインスタンスを作成し、このインスタンスをパブリックサブネットに展開しました。 EIPアドレスを添付し、NATをルートテーブルに追加しました。 残念ながら、プライベートサブネットのインスタンスは引き続きインターネットにアクセスできません。 これは何が原因でしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "NATはパブリックサブネットにありますが、プライベートサブネットにある必要があります。", correct: false}
      , {description: "あなたのNATはElastic Load Balancerの背後にあるべきです", correct: false}
      , {description: "NATのソース/宛先チェックを無効にする必要があります。", correct: true}
      , {description: "あなたのNATはWindowsインスタンスにデプロイされていますが、他のインスタンスはLinuxです.LinuxインスタンスにNATを再デプロイする必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Block Store（Amazon EBS）に関連付けられたEIPを持つAmazon VPC内のAmazon EC2インスタンスが停止され、開始された場合、次のうちどれが発生しますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "EIPはインスタンスから分離されます", correct: false}
      , {description: "インスタンスストアデバイスのすべてのデータが失われます。", correct: true}
      , {description: "Amazon EBSデバイスのすべてのデータが失われます。", correct: false}
      , {description: "ENIは切り離されています", correct: false}
      , {description: "インスタンスの基礎となるホストが変更されました", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "同じAWSリージョン内にある4つのVPCに対して、他の各トラフィックにトラフィックを送信できるようにするには、いくつのVPCピアリング接続が必要ですか？"
    , multiple_answer: false
    , answers: [
      {description: "3", correct: false}
      , {description: "4", correct: false}
      , {description: "5", correct: false}
      , {description: "6", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "EC2-VPCインスタンスがAWS以外のDNS名を解決するために使用するAWSリソースはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "A VPC peering connection", correct: false}
      , {description: "A DHCP option set", correct: true}
      , {description: "A routing rule", correct: false}
      , {description: "An IGW", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AmazonのVPN接続のAmazon側はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "An EIP", correct: false}
      , {description: "A CGW", correct: false}
      , {description: "An IGW", correct: false}
      , {description: "A VPG", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "顧客が地域内に持つ可能性があるAmazon VPCの数のデフォルトの制限はいくらですか？"
    , multiple_answer: false
    , answers: [
      {description: "5", correct: true}
      , {description: "6", correct: false}
      , {description: "7", correct: false}
      , {description: "リージョン内には、VPCのデフォルト最大数はありません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたはあなたの会社のAWSリソースを担当しており、あなたの会社には顧客がいない外国のIPアドレスから大量のトラフィックが発生しています。 トラフィックの詳細な調査は、トラフィックの送信元がEC2-VPCインスタンスのオープンポートをスキャンしていることを示します。 トラフィックがインスタンスに到達することを拒否できるリソースはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Security group", correct: false}
      , {description: "Network ACL", correct: true}
      , {description: "NAT instance", correct: false}
      , {description: "An Amazon VPC endpoint", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon VPCでサポートされているセキュリティプロトコルはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "SSH", correct: false}
      , {description: "Advanced Encryption Standard (AES)", correct: false}
      , {description: "Point-to-Point Tunneling Protocol (PPTP)", correct: false}
      , {description: "IPsec", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "EC2-VPCインスタンスがAmazon S3に直接トラフィックを送信するために使用するAmazon VPCリソースはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon S3 gateway", correct: false}
      , {description: "IGW", correct: false}
      , {description: "CGW", correct: false}
      , {description: "VPC endpoint", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "作成時にAmazon VPCのどのプロパティを指定する必要がありますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "IPアドレス範囲を表すCIDRブロック", correct: true}
      , {description: "Amazon VPCの1つ以上のサブネット", correct: false}
      , {description: "Amazon VPCのリージョン", correct: true}
      , {description: "Amazon VPCピアリング関係", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのAmazon VPC機能を使用して、デュアルホームインスタンスを作成できますか？"
    , multiple_answer: false
    , answers: [
      {description: "EIP address", correct: false}
      , {description: "ENI", correct: true}
      , {description: "Security groups", correct: false}
      , {description: "CGW", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "オートスケーリンググループの必須要素は次のうちどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Minimum size", correct: true}
      , {description: "Health checks", correct: false}
      , {description: "Desired capacity", correct: false}
      , {description: "Launch configuration", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Port 80でリスニングするElastic Load Balancingロードバランサを作成し、ポート80で待機している単一のAmazon Elastic Compute Cloud（Amazon EC2）インスタンスに登録しました。クライアントは正しいプロトコルでロードバランサに要求します このシナリオでは、バランサは何コネクションを維持していますか？"
    , multiple_answer: false
    , answers: [
      {description: "1", correct: false}
      , {description: "2", correct: true}
      , {description: "3", correct: false}
      , {description: "4", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon CloudWatchはメトリックデータをどのくらい保持しますか？"
    , multiple_answer: false
    , answers: [
      {description: "1 day", correct: false}
      , {description: "2 days", correct: false}
      , {description: "1 week", correct: false}
      , {description: "2 weeks", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Auto Scalingの起動設定を作成するために最低限必要な要素はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "設定名、Amazon Machine Image（AMI）、インスタンスタイプの起動", correct: true}
      , {description: "設定名、AMI、インスタンスタイプ、キーペアの起動", correct: false}
      , {description: "構成名、AMI、インスタンスタイプ、キーペア、セキュリティグループの起動", correct: false}
      , {description: "構成名、AMI、インスタンスタイプ、キーペア、セキュリティグループ、ブロックデバイスマッピングを起動する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "複数のAmazon EC2インスタンス上で実行されている会社の既存のアプリケーション用のアプリケーションロギングソリューションは、お客様が担当しています。 AWS内のアプリケーションログを集約するための最良の方法はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon CloudWatchカスタムメトリック", correct: false}
      , {description: "Amazon CloudWatch Logs Agent", correct: true}
      , {description: "An Elastic Load Balancing listener", correct: false}
      , {description: "内部Elastic Load Balancingロードバランサ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "着信トラフィックを受け入れるために、Elastic Load Balancingロードバランサで次のうちどれを設定する必要がありますか。"
    , multiple_answer: false
    , answers: [
      {description: "A port", correct: false}
      , {description: "A network interface", correct: false}
      , {description: "A listener", correct: true}
      , {description: "An instance", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Auto Scalingグループは、最小サイズ値10、最大サイズ値100、および希望する容量値50で構成された新しい領域に作成します。ただし、Amazon Elastic Compute Cloud（Amazon EC2）のインスタンスが起動できません。 この行動の原因は次のうちどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "20より大きい自動スケーリンググループを定義することはできません", correct: false}
      , {description: "Auto Scalingグループの最大値は20を超えることはできません", correct: false}
      , {description: "Elastic Load BalancingロードバランサをAuto Scalingグループに接続していませんでした", correct: false}
      , {description: "あなたは新しい地域のデフォルトAmazon EC2容量（20）を上げていませんでした。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "1つのX.509証明書を持つElastic Load Balancingロードバランサの背後にある複数のAmazon EC2インスタンスに複数のHTTPS（Hypertext Transfer Protocol Secure）Webサイトをホストしたいとします。 ロードバランサに接続するクライアントに接続時に警告が表示されないように、SSL（Secure Sockets Layer）証明書をどのように構成する必要がありますか。"
    , multiple_answer: false
    , answers: [
      {description: "各ウェブサイト名に対してサブジェクト代替名（SAN）の値を持つSSL証明書を1つ作成する", correct: true}
      , {description: "サーバー名表示（SNI）値がチェックされた1つのSSL証明書を作成する", correct: false}
      , {description: "各ウェブサイト名に対してSAN値を持つ複数のSSL証明書を作成する", correct: false}
      , {description: "各可用性ゾーンのSSL証明書を各ウェブサイト名のSAN値で作成する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Webアプリケーションのフロントエンドは、Elastic Load Balancingロードバランサの背後にある複数のAmazon Compute Cloud（Amazon EC2）インスタンスで構成されています。 これらのAmazon EC2インスタンスでヘルスチェックを実行するようにロードバランサを設定しました。 インスタンスがヘルスチェックに合格しなかった場合、どのステートメントが正しいでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "インスタンスはロードバランサによって自動的に置き換えられます。", correct: false}
      , {description: "インスタンスはロードバランサによって自動的に終了します。", correct: false}
      , {description: "ロードバランサは、ヘルスチェックに失敗したインスタンスへのトラフィックの送信を停止します。", correct: true}
      , {description: "インスタンスが原因解析のためにロードバランサによって隔離されています。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Compute Cloud（Amazon EC2）の基本監視パッケージでは、Amazon CloudWatchのメトリックはどのように使用できますか？"
    , multiple_answer: false
    , answers: [
      {description: "失敗したトランザクション要求数などのWebサーバーの可視メトリック", correct: false}
      , {description: "メモリ使用率などのオペレーティングシステムの可視メトリック", correct: false}
      , {description: "接続数などのデータベース可視メトリック", correct: false}
      , {description: "CPU使用率などのハイパーバイザ可視メトリック", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "携帯電話会社はコンテストのためにダイナミックコンテンツのテレビコマーシャルを運営しています。 彼らは彼らのウェブサイトが商業放送の後に来るトラフィックスパイクに対処することを望んでいる。 ウェブサイトはインタラクティブで、場所、購入履歴、現在の商業放送に基づいて各訪問者にパーソナライズされたコンテンツを提供します。 静かな期間にコストを最小限に抑えながら、Auto Scalingを拡張して需要の急増に対応するように設計するアーキテクチャはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "自動スケーリンググループの最小サイズを設定して、スケールアウトせずに高いトラフィック量を処理できるようにします。", correct: false}
      , {description: "ピークトラフィックの負荷を処理するのに十分な大きさのAuto Scalingグループを作成し、いくつかのインスタンスを停止します。 停止したインスタンスを使用してトラフィックが増加したときにスケールアウトするように自動スケーリングを設定すると、新しい容量がすぐにオンラインになります。", correct: false}
      , {description: "トラフィックの増加に応じてスケールアウトするように自動スケーリングを設定します。 事前設定済みのAmazon Machine Image（AMI）から新しいインスタンスを起動するように、起動設定を構成します。", correct: true}
      , {description: "Amazon CloudFrontおよびAmazon Simple Storage Service（Amazon S3）を使用して、自動スケーリンググループを元に設定して、変化するコンテンツをキャッシュします。 自動スケールでCloudFrontとAmazon ElastiCacheを初期設定し、キャッシュが完全に読み込まれた後にスケールインするのに必要なインスタンスを持つように設定します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "3つのアベイラビリティゾーン（ap-northeast-1a、ap-northeast-1b、およびap-northeast-1c）を持つap-northeast-1領域で実行されているアプリケーションの場合、通常は9つのアプリケーション Amazon Elastic Compute Cloud（Amazon EC2）インスタンスを実行していますが、容量の65％以上で実行できますが、自動スケーリングは残りの可用性ゾーンで代替インスタンスを起動しますか？"
    , multiple_answer: false
    , answers: [
      {description: "ap-northeast-1aの4つのサーバーとap-northeast-1bの5つのサーバーにアプリケーションをデプロイし、ap-northeast-1aに5つの停止インスタンスを予約として保持します。", correct: false}
      , {description: "ap-northeast-1aの3つのサーバー、ap-northeast-1bの3つのサーバー、およびap-northeast-1cの3つのサーバーにアプリケーションを展開します。", correct: true}
      , {description: "ap-northeast-1bの6つのサーバーとap-northeast-1cの3つのサーバーにアプリケーションを展開します。", correct: false}
      , {description: "アプリケーションをap-northeast-1bの9つのサーバーにデプロイし、ap-northeast-1aに9つの停止インスタンスを予約として保持します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS上のAuto Scalingサービスの特徴は次のうちどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "正常なインスタンスにトラフィックを送ります", correct: false}
      , {description: "Amazon Elastic Compute Cloud（Amazon EC2）インスタンスを追加または終了して変化する条件に応答する", correct: true}
      , {description: "メトリックを収集して追跡し、アラームを設定する", correct: false}
      , {description: "プッシュ通知を配信する", correct: false}
      , {description: "指定されたAmazonマシンイメージ（AMI）からインスタンスを起動する", correct: true}
      , {description: "実行しているAmazon EC2インスタンスの数を最小限に抑える", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Auto Scalingグループの一部ではなく、Auto Scalingグループが起動設定を参照するのはなぜですか？"
    , multiple_answer: false
    , answers: [
      {description: "Auto Scalingグループを中断することなくAmazon Elastic Compute Cloud（Amazon EC2）のインスタンスタイプとAmazon Machine Image（AMI）を変更することができます。", correct: false}
      , {description: "Auto Scalingグループによって管理されているインスタンスの既存のセットへのパッチのロールアウトを容易にする", correct: false}
      , {description: "Auto Scalingグループに変更を加えることなく、起動したインスタンスに関連付けられたセキュリティグループを変更することができます。", correct: false}
      , {description: "その他のすべての選択肢", correct: true}
      , {description: "選択肢にはありません", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "自動スケーリンググループでは、次のものを使用できます。（2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "On-Demand Instances", correct: true}
      , {description: "Stopped instances", correct: false}
      , {description: "Spot Instances", correct: true}
      , {description: "On-premises instances", correct: false}
      , {description: "Auto Scalingグループの起動設定と同じAmazonマシンイメージ（AMI）を使用し、別のAuto Scalingグループの一部ではないインスタンスを既に実行している", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon CloudWatchはどのタイプの監視計画をサポートしていますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "無料の基本監視", correct: true}
      , {description: "基本的な監視、追加費用がかかります", correct: false}
      , {description: "アドホックな監視は無料です", correct: false}
      , {description: "アドホックモニタリング、追加費用がある", correct: false}
      , {description: "詳細な監視は無料です", correct: false}
      , {description: "追加の費用がかかる詳細な監視", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Elastic Load Balancingのヘルスチェックは、次のようになります。（3つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "A ping", correct: true}
      , {description: "鍵ペア検証", correct: false}
      , {description: "接続試行", correct: true}
      , {description: "ページリクエスト", correct: true}
      , {description: "Amazon Elastic Compute Cloud（Amazon EC2）インスタンスの状態チェック", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "接続排水を使用するElastic Load Balancingロードバランサに登録されたAmazon Elastic Compute Cloud（Amazon EC2）インスタンスが登録解除または不健全になった場合、次のうちどれが実行されますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "直ちにそのインスタンスへの既存の接続をすべて閉じる", correct: false}
      , {description: "接続をそのインスタンスに開いたままにして、空のリクエストを完了しようとする", correct: true}
      , {description: "リクエストがユーザー定義のエラーページにリダイレクトされます。たとえば、\"Oops this is embarrassing \"または\"Under Construction\"", correct: true}
      , {description: "タイムアウト期間が経過した後、そのインスタンスへのすべての接続を強制的に閉じる", correct: false}
      , {description: "ロードバランサが実行されている間は接続を開いたままにしておいてください。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Elastic Load Balancingは、次のタイプのロードバランサをサポートしていますか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Cross-region", correct: false}
      , {description: "Internet-facing", correct: true}
      , {description: "Interim", correct: false}
      , {description: "Itinerant", correct: false}
      , {description: "Internal", correct: true}
      , {description: "Secure Sockets Layer（SSL）を使用したHypertext Transfer Protocol Secure（HTTPS）", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "自動スケーリングは、自動スケーリンググループの次の計画のどれをサポートしていますか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Predictive", correct: false}
      , {description: "Manual", correct: true}
      , {description: "Preemptive", correct: false}
      , {description: "Scheduled", correct: true}
      , {description: "Dynamic", correct: true}
      , {description: "End-user request driven", correct: false}
      , {description: "Optimistic", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSクラウドサービスにアクセスするためのプリンシパルとしてAWS SDKを使用するアプリケーションを認証できるようにするには、次のどの方法がありますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "IAMユーザーを作成し、ユーザーのユーザー名とパスワードをアプリケーションの構成に保存します。", correct: false}
      , {description: "IAMユーザーを作成し、ユーザーのアクセスキーの両方の部分をアプリケーションの構成に保存します。", correct: true}
      , {description: "割り当てられたIAMロールを持つAmazon EC2インスタンス上でアプリケーションを実行します。", correct: true}
      , {description: "すべてのAPI呼び出しをSSL接続で行います。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "IAMポリシーには次のうちどれがありますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Service Name", correct: true}
      , {description: "Region", correct: false}
      , {description: "Action", correct: true}
      , {description: "Password", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSアカウント管理者は、今日あなたの会社を辞めました。 管理者は、rootユーザーと個人用のIAM管理者アカウントにアクセスできました。 これらのアカウントで、彼は他のIAMアカウントとキーを生成しました。 AWSインフラストラクチャを保護するために今日、次のうちどれを実行する必要がありますか？ （4つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "パスワードを変更し、rootユーザーにMFAを追加します。", correct: true}
      , {description: "rootユーザーにIP制限を設定します。", correct: true}
      , {description: "IAMアカウントのキーを変更し、パスワードを変更します。", correct: true}
      , {description: "すべてのIAMアカウントを削除します。", correct: false}
      , {description: "管理者の個人IAMアカウントを削除します。", correct: true}
      , {description: "すべてのAmazon EC2インスタンスを新しいロールで再起動します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうちIAMが認可できるアクションはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Windows ServerへのASP.NETのインストール", correct: false}
      , {description: "Amazon Linux EC2インスタンスの起動", correct: true}
      , {description: "Oracleデータベースのクエリ", correct: false}
      , {description: "Amazon Simple Queue Service（Amazon SQS）キューにメッセージを追加する", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "IAMのセキュリティ機能はどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "パスワードポリシー", correct: true}
      , {description: "Amazon DynamoDBグローバルセカンダリインデックス", correct: false}
      , {description: "MFA", correct: true}
      , {description: "Consolidated Billing", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon EC2の役割を使用する利点はどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "ポリシーは必要ありません。", correct: false}
      , {description: "資格証明をAmazon EC2インスタンスに格納する必要はありません。", correct: true}
      , {description: "鍵のローテーションは必要ありません。", correct: true}
      , {description: "Active Directoryとの統合は自動的に行われます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうち一時的なセキュリティトークンに基づくものはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon EC2 roles", correct: true}
      , {description: "MFA", correct: false}
      , {description: "Root user", correct: false}
      , {description: "Federation", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "セキュリティチームは、IAM管理者ユーザーアカウント（すべてのIAM機能とアカウントを構成するために使用されるアカウント）の脆弱性に非常に懸念を抱いています。 これらのアカウントをロックダウンするための手順は？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "アカウントにマルチファクタ認証（MFA）を追加します。", correct: true}
      , {description: "ログインを米国の特定の州に限定する。", correct: false}
      , {description: "AWSアカウントにパスワードポリシーを実装します。", correct: true}
      , {description: "ユーザーが企業ネットワーク上にいるときにのみアクセス許可を与えるポリシーに送信元IPアドレス条件を適用します。", correct: true}
      , {description: "アカウントにCAPTCHAテストを追加します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ネットワークチームの担当者に、Amazon EC2インスタンスを完全に操作できるようにする必要があります。 次のうちどれがこの目標を達成していますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "EC2：*アクションを許可する新しいポリシーを作成し、NetworkTeamポリシーに名前を付けます。", correct: false}
      , {description: "管理対象ポリシーEC2FullAccessをNetworkTeamという名前のグループに割り当て、すべてのチームメンバーのIAMユーザーアカウントをそのグループに割り当てます。", correct: true}
      , {description: "すべてのリソースに対してEC2：*アクションを許可する新しいポリシーを作成し、そのポリシーをネットワークチームの各個人のIAMユーザーアカウントに割り当てます。", correct: true}
      , {description: "NetworkTeam IAMグループを作成し、グループのユーザ名/パスワードを使用して各チームメンバーにAWS Management Consoleにログインさせます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "IAMポリシーの形式は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "XML", correct: false}
      , {description: "キーと値のペア", correct: false}
      , {description: "JSON", correct: true}
      , {description: "タブ区切りテキスト", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "従来のオンライントランザクション処理（OLTP）に最適なAWSデータベースサービスはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Redshift", correct: false}
      , {description: "Amazon Relational Database Service (Amazon RDS)", correct: true}
      , {description: "Amazon Glacier", correct: false}
      , {description: "Elastic Database", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "非リレーショナルデータベースに最適なAWSデータベースサービスはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Redshift", correct: false}
      , {description: "Amazon Relational Database Service (Amazon RDS)", correct: false}
      , {description: "Amazon Glacier", correct: false}
      , {description: "Amazon DynamoDB", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSでウェブサイトを運営するメディア会社のソリューションアーキテクトです。現在、Amazon EC2インスタンスには、Amazon EC2インスタンスがローカルにインストールされたAWS上のAmazon EC2インスタンスが1つあります。会社の生産環境をより弾力性のあるものにし、パフォーマンスを向上させるよう求められました。会社は、マルチAZを有効にしたAmazon RDSインスタンスにMySQLデータベースを分割することをお勧めします。これは、会社の弾力性向上の要求に対応します。これでパフォーマンスを向上させる方法を提案する必要があります。同社のエンドユーザーの99％は、ウェブサイト上で追加の記事を読む雑誌購読者であるため、エンドユーザーの1％だけがサイトにデータを書き込む必要があります。パフォーマンスを向上させるにはどうすればよいですか？"
    , multiple_answer: false
    , answers: [
      {description: "ユーザーがデータを書き込む場合は、Multi-AZデータベースのセカンダリコピーに書き込まれるように接続文字列を変更します。", correct: false}
      , {description: "接続文字列を変更して、ユーザーがデータを書き込む場合、Multi-AZデータベースのプライマリコピーに書き込まれるようにします。", correct: false}
      , {description: "会社が読み取り複製を使用し、複数の読み取り複製にトラフィックを分散することを推奨します。", correct: true}
      , {description: "MySQLデータベースをAmazon Redshiftに移行して、カラム型ストレージを活用し、パフォーマンスを最大化します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "オンライン分析処理（OLAP）に最適なAWSクラウドサービスはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Redshift", correct: true}
      , {description: "Amazon Relational Database Service (Amazon RDS)", correct: false}
      , {description: "Amazon Glacier", correct: false}
      , {description: "Amazon DynamoDB", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "昨年、Amazon RDS（Amazon Relational Database Service）を使用して、自動バックアップを有効にした重要なアプリケーションを実行してきました。 チームメンバの1人が定期的なメンテナンスを実行していて、誤って重要なテーブルを破棄して停止しています。 停止時間を最小限に抑えながら、欠落したデータをどのように回復できますか？"
    , multiple_answer: false
    , answers: [
      {description: "取り消し操作を実行し、表をリカバリーします。", correct: false}
      , {description: "最近の自動DBスナップショットからデータベースを復元します。", correct: true}
      , {description: "削除されたテーブルのみをDBスナップショットから復元します。", correct: false}
      , {description: "データを回復することはできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのAmazon Relational Database Service（Amazon RDS）データベースエンジンがMulti-AZをサポートしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "他の選択肢すべて", correct: true}
      , {description: "Microsoft SQL Server、MySQL、およびOracle", correct: false}
      , {description: "Oracle、Amazon Aurora、PostgreSQL", correct: false}
      , {description: "MySQL", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのAmazon Relational Database Service（Amazon RDS）データベースエンジンがレプリカの読み取りをサポートしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "Microsoft SQL ServerおよびOracle", correct: false}
      , {description: "MySQL、MariaDB、PostgreSQL、およびAurora", correct: true}
      , {description: "Aurora、Microsoft SQL Server、およびOracle", correct: false}
      , {description: "MySQLとPostgreSQL", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたのチームは複数の可用性ゾーンにまたがる注文処理システムを構築しています。 テスト中、チームはアプリケーションがデータベースフェールオーバーにどのように反応するかをテストしたかったのです。 このタイプのテストをどのように有効にできますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon RDSコンソールを使用してプライマリインスタンスをリブートすることにより、複数のAZのフェールオーバーを1つの可用性ゾーンから別の可用性ゾーンに強制します。", correct: true}
      , {description: "DBインスタンスを終了し、新しいインスタンスを作成します。 接続文字列を更新します。", correct: false}
      , {description: "フェールオーバーを求めるサポートケースを作成します。", correct: false}
      , {description: "フェイルオーバーをテストすることはできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "システム管理者は、本番データベースをAWSに移行しました。あなたの会社はAmazon CloudWatchを使用してその不動産を監視し、Amazon Simple Notification Service（Amazon SNS）を使用して携帯電話にアラームを送信します。ある夜、あなたの主要なAmazon Relational Database Service（Amazon RDS）インスタンスがダウンしたという警告が表示されます。このインスタンスでMulti-AZが有効になっています。フェールオーバーが迅速に行われるようにするにはどうすればよいですか？"
    , multiple_answer: false
    , answers: [
      {description: "セカンダリインスタンスの新しいIPアドレスを指すようにドメインネームシステム（DNS）を更新し、アプリケーションをセカンダリインスタンスにフェイルオーバーさせます。", correct: false}
      , {description: "Secure Shell（SSH）を使用してサーバーに接続し、アプリケーションが障害の発生したプライマリインスタンスではなくセカンダリインスタンスと通信できるように接続文字列を更新します。", correct: false}
      , {description: "セカンダリインスタンスのスナップショットを作成し、このスナップショットを使用して新しいインスタンスを作成し、新しいインスタンスを指すように接続文字列を更新します。", correct: false}
      , {description: "何もする必要はありません。接続文字列がデータベースエンドポイントを指していれば、AWSはこのエンドポイントを自動的に更新してセカンダリインスタンスを指し示します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "専用のデータベース管理者がいない小規模な組織で働いています。 Amazon Relational Database Service（Amazon RDS）にアカウンティングバックオフィスアプリケーションをサポートするには、Microsoft SQL Server Enterprise Editionをすぐにインストールする必要があります。 あなたは何をするべきか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon RDS DBインスタンスを起動し、Bring Your Own License（BYOL）モデルでMicrosoft SQL Server Enterprise Editionを選択します。", correct: true}
      , {description: "Amazon RDS Consoleの[ライセンスを含む]オプションを使用してSQL Server Enterprise Editionをプロビジョニングします。", correct: false}
      , {description: "SQL Server Enterprise Editionは、コマンドラインインターフェイス（CLI）を介してのみ使用できます。 ラップトップにコマンドラインツールをインストールし、CLIを使用して新しいAmazon RDSインスタンスをプロビジョニングします。", correct: false}
      , {description: "Amazon RDSでSQL Server Enterprise Editionを使用することはできません。 専用のAmazon Elastic Compute Cloud（Amazon EC2）インスタンスにインストールする必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "エンタープライズアプリケーション用のデータベース層を構築しており、1日中何度もアクティビティが発生します。 デフォルトのオプションとしてどのストレージタイプを選択する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "磁気ストレージ", correct: false}
      , {description: "汎用ソリッドステートドライブ（SSD）", correct: true}
      , {description: "プロビジョニングされたIOPS（SSD）", correct: false}
      , {description: "ストレージエリアネットワーク（SAN）に接続", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "潜在的に何十万人もの同時ユーザーに拡大する電子商取引Webアプリケーションを設計しています。 多数の同時ユーザーのセッション状態を保持するのに最も適しているデータベース技術はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Relational Database Service（Amazon RDS）を使用したリレーショナルデータベース", correct: false}
      , {description: "Amazon DynamoDBを使用したNoSQLデータベーステーブル", correct: true}
      , {description: "Amazon Redshiftを使用したデータウェアハウス", correct: false}
      , {description: "Amazon Simple Storage Service（Amazon S3）", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Recovery Point Objective（RPO）およびRecovery Time Objective（RTO）の要件を満たすのに役立つ次のテクニックはどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "DBスナップショット", correct: true}
      , {description: "DBオプショングループ", correct: false}
      , {description: "レプリカを読む", correct: true}
      , {description: "マルチAZ配備", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Relational Database Service（Amazon RDS）Multi-AZを使用する場合、プライマリからの読み取り要求をどのようにオフロードできますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "プライマリが書き込みに使用されている間に、セカンダリノードに接続して読み取りを実行するクライアントの接続文字列を構成します。", correct: false}
      , {description: "Amazon RDSは自動的にプライマリに書き込みを送信し、セカンダリに読み取りを送信します。", correct: false}
      , {description: "読み取りレプリカDBインスタンスを追加し、読み取りレプリカを使用するようにクライアントのアプリケーションロジックを構成します。", correct: true}
      , {description: "ElastiCacheを使用して頻繁に使用されるデータをキャッシュするためのキャッシュ環境を作成します。 アプリケーションロジックをキャッシュから読み書きするように更新します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "大規模な受注処理システムを構築しており、データベースのセキュリティー管理を担当しています。 データを保護するためにどのような行動を取るのですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "管理者のAWS IDおよびアクセス管理（IAM）権限を調整します。", correct: true}
      , {description: "ネットワークアクセスを制限するには、セキュリティグループとネットワークのアクセス制御リスト（ACL）を構成します。", correct: true}
      , {description: "データベースユーザーを構成し、データベースオブジェクトへのアクセス許可を与えます。", correct: true}
      , {description: "Amazon RDS DBインスタンスにウイルス対策ソフトウェアをインストールします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたのチームはAmazon Relational Database Service（Amazon RDS）MySQLバックエンドを実行している一般的なWebサイトを管理しています。 マーケティング部門では、今後数千人の新しい訪問者をウェブサイトに誘導する予定のテレビCMについてお知らせしています。 どのように負荷を処理するためにデータベースを準備できますか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "より強力なインスタンスクラスを選択して、DBインスタンスを垂直方向にスケーリングします。", correct: true}
      , {description: "読取り要求をオフロードしてアプリケーションを更新する読取りレプリカを作成します。", correct: true}
      , {description: "ストレージを磁気ボリュームから汎用ソリッドステートドライブ（SSD）ボリュームにアップグレードします。", correct: true}
      , {description: "Amazon Redshiftにアップグレードすると、より速いカラムストレージが可能になります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon DynamoDBテーブルにある数百万のイメージのメタデータを管理する写真管理アプリケーションを構築しています。 写真が取得されると、画像の横にメタデータが表示されます。 どのAmazon DynamoDB操作を使用して、テーブルからメタデータ属性を取得しますか？"
    , multiple_answer: false
    , answers: [
      {description: "スキャン操作", correct: false}
      , {description: "検索操作", correct: false}
      , {description: "クエリ操作", correct: true}
      , {description: "操作を検索", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ソーシャルチャットアプリケーション用のメッセージを含むAmazon DynamoDBテーブルを作成しています。 このテーブルには、Username（String）、Timestamp（Number）、Message（String）という属性があります。 どの属性をパーティションキー、ソートキーとして使用しますか？"
    , multiple_answer: false
    , answers: [
      {description: "ユーザー名、タイムスタンプ", correct: true}
      , {description: "ユーザー名、メッセージ", correct: false}
      , {description: "タイムスタンプ、メッセージ", correct: false}
      , {description: "メッセージ、タイムスタンプ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon DynamoDBテーブルに関する次の記述はどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "グローバル・セカンダリ索引は、表の作成時にのみ作成できます。", correct: false}
      , {description: "ローカル二次索引は、表の作成時にのみ作成できます。", correct: true}
      , {description: "1つだけグローバルセカンダリインデックスを持つことができます。", correct: false}
      , {description: "1つだけローカルセカンダリインデックスを持つことができます。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうちAmazon Redshiftで動作するのに適したワークロードはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "多忙な電子商取引注文処理ウェブサイトをサポートするトランザクションデータベース", correct: false}
      , {description: "バックオフィス分析をサポートするレポートデータベース", correct: true}
      , {description: "複数の異種データソースを集約するために使用されるデータウェアハウス", correct: true}
      , {description: "数千人の同時ユーザーのセッション状態とユーザープロファイルデータを管理する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうち、サポートされているAmazon Simple Notification Service（Amazon SNS）プロトコルではないものはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "HTTPS", correct: false}
      , {description: "AWS Lambda", correct: false}
      , {description: "Email-JSON", correct: false}
      , {description: "Amazon DynamoDB", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "新しいAmazon Simple Notification Service（Amazon SNS）トピックを作成すると、次のうちどれが自動的に作成されますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazonリソース名（ARN）", correct: true}
      , {description: "サブスクライバ", correct: false}
      , {description: "Amazon SNSトピックを配信するためのAmazon Simple Queue Service（Amazon SQS）キュー", correct: false}
      , {description: "メッセージ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Notification Service（Amazon SNS）の特徴はどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "パブリッシャ", correct: true}
      , {description: "リーダー", correct: false}
      , {description: "サブスクライバ", correct: true}
      , {description: "トピック", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Queue Service（Amazon SQS）の可視性タイムアウトのデフォルトの時間は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "30秒", correct: true}
      , {description: "60秒", correct: false}
      , {description: "1時間", correct: false}
      , {description: "12時間", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Queue Service（Amazon SQS）の可視性のタイムアウトに使用できる時間はどれくらいですか？"
    , multiple_answer: false
    , answers: [
      {description: "30秒", correct: false}
      , {description: "60秒", correct: false}
      , {description: "1時間", correct: false}
      , {description: "12時間", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうち、Amazon Simple Queue Service（Amazon SQS）メッセージの有効なプロパティはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Destination", correct: false}
      , {description: "Message ID", correct: true}
      , {description: "Type", correct: false}
      , {description: "Body", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたは、新しいテイクアウト注文アプリケーションにAmazon Simple Workflow Service（Amazon SWF）を使用したいモバイルアプリケーション会社のために働いているソリューションアーキテクトです。 インタラクションする必要がある複数のワークフローがあります。 Amazon SWF環境のデザインを構成する際に、アドバイスする必要があるのは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "それぞれが単一のワークフローを含む複数のドメインを使用し、異なるドメイン間でやりとりするワークフローを設計します。", correct: false}
      , {description: "複数のワークフローを含む単一のドメインを使用します。 このようにして、ワークフローは相互作用することができます。", correct: true}
      , {description: "単一のワークフローで単一のドメインを使用し、この単一のワークフロー内ですべてのアクティビティを折りたたみます。", correct: false}
      , {description: "ワークフローは互いに対話できません。 彼らのアプリケーションにAmazon Simple Queue Service（Amazon SQS）とAmazon Simple Notification Service（Amazon SNS）を使用するほうが良いでしょう。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Workflow Service（Amazon SWF）では、次のうちどれがアクターですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Activity workers", correct: true}
      , {description: "Workflow starters", correct: true}
      , {description: "Deciders", correct: true}
      , {description: "Activity tasks", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたは新しいアプリケーションを設計しており、アプリケーションのコンポーネントがしっかりと結合されていないことを保証する必要があります。 この目標を達成するために使用するさまざまなAWSクラウドサービスを決定しようとしています。 アプリケーションコンポーネント間のメッセージは複数回配信されないことがあり、タスクは同期または非同期のいずれかで完了する必要があり、タスクが完了したときの動作を決定する何らかのアプリケーションロジックが必要です。 どのアプリケーションサービスを使用しますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Simple Queue Service（Amazon SQS）", correct: false}
      , {description: "Amazon Simple Workflow Service（Amazon SWF）", correct: true}
      , {description: "Amazon Simple Storage Service（Amazon S3）", correct: false}
      , {description: "Amazon Simple Email Service (Amazon SES)", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Queue Service（Amazon SQS）はどのようにメッセージを配信しますか？"
    , multiple_answer: false
    , answers: [
      {description: "Last In, First Out (LIFO)", correct: false}
      , {description: "First In, First Out (FIFO)", correct: false}
      , {description: "Sequentially", correct: false}
      , {description: "Amazon SQSは、特定の順序でメッセージの配信を保証するものではありません。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "以下のオプションのうち、単一のAmazon Simple Notification Service（Amazon SNS）メッセージを複数のAmazon Simple Queue Service（Amazon SQS）キューにファンアウトする効率的な方法は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon SNSを使用してAmazon SNSトピックを作成します。 次に、Amazon SNSトピックに送信された複数のAmazon SQSキューを作成し、購読します。", correct: true}
      , {description: "複数のAmazon SNSトピックを購読するAmazon SQSキューを1つ作成します。", correct: false}
      , {description: "Amazon SNSでは、各トピックに対して正確に1人の加入者しか参加できないため、ファンアウトはできません。", correct: false}
      , {description: "Amazon SNSを使用してAmazon SNSトピックを作成します。 そのトピックにサブスクライブし、メッセージを複製するアプリケーションを作成します。 複数のAmazon SQSキューにコピーを送信する。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "アプリケーションはAmazon Simple Queue Service（Amazon SQS）のキューを頻繁にポーリングし、すぐに空のReceiveMessageResponsesを返します。 Amazon SQSのコストを削減するためにできることは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon SQSの価格には、サービスリクエストの費用は含まれていません。 したがって、心配はありません。", correct: false}
      , {description: "レスポンスを返す前に、短いポーリングがメッセージを長く待つためのタイムアウト値を増やします。", correct: false}
      , {description: "メッセージの可視性値を高い数値に変更します。", correct: false}
      , {description: "ReceiveMessageを呼び出すときに0秒を超えるWaitTimeSecondsを指定して、長いポーリングを使用します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Queue Service（Amazon SQS）の長いポーリングタイムアウトで使用できる時間はどれくらいですか？"
    , multiple_answer: false
    , answers: [
      {description: "10秒", correct: false}
      , {description: "20秒", correct: true}
      , {description: "30秒", correct: false}
      , {description: "1時間", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Queue Service（Amazon SQS）の設定可能なメッセージ保持期間はどれくらいですか？"
    , multiple_answer: false
    , answers: [
      {description: "30分", correct: false}
      , {description: "4日", correct: false}
      , {description: "30秒", correct: false}
      , {description: "14日間", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Queue Service（Amazon SQS）のデフォルトのメッセージ保持期間は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "30分", correct: false}
      , {description: "4日", correct: true}
      , {description: "30秒", correct: false}
      , {description: "14日間", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Notification Service（Amazon SNS）はプッシュ通知サービスで、多数の受信者に個別または複数のメッセージを送信できます。 どのようなタイプのクライアントがサポートされていますか？"
    , multiple_answer: false
    , answers: [
      {description: "パブリッシャおよびサブスクライバの種類をサポートするJavaおよびJavaScriptクライアント", correct: false}
      , {description: "CおよびC++クライアントによってサポートされるプロデューサおよびコンシューマ", correct: false}
      , {description: "パブリッシャとサブスクライバのクライアントタイプのモバイルとAMQPのサポート", correct: false}
      , {description: "パブリッシャとサブスクライバのクライアントタイプ", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Workflow Service（Amazon SWF）では、決定者は何を担当していますか？"
    , multiple_answer: false
    , answers: [
      {description: "作業の各ステップを実行する", correct: false}
      , {description: "作業順序、タイミング、および障害条件を指定して作業調整ロジックを定義する", correct: true}
      , {description: "ワークフローの実行", correct: false}
      , {description: "Amazon SWFでアクティビティとワークフローを登録する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Notification Service（Amazon SNS）のトピックは以前に使用されたトピック名で再作成できますか？"
    , multiple_answer: false
    , answers: [
      {description: "はい。 トピック名は、通常、同じ名前の前のトピックが削除されてから24時間後に利用可能になります。", correct: false}
      , {description: "はい。 トピック名は、通常、同じ名前の前のトピックが削除されてから1〜3時間後に利用可能になります。", correct: false}
      , {description: "はい。 トピック名は、通常、同じ名前の前のトピックが削除されてから30〜60秒後に利用可能になります。", correct: true}
      , {description: "現時点では、この機能はサポートされていません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Queue Service（Amazon SQS）のキューに異なるAWSアカウントのアクセス許可を与えるにはどうすればよいですか？"
    , multiple_answer: false
    , answers: [
      {description: "アカウント情報をAWSアカウントに共有し、他のアカウントのアプリケーションでアカウントの資格情報を使用してAmazon SQSキューにアクセスできるようにします。", correct: false}
      , {description: "AWS Identity and Access Management（IAM）でそのアカウントのユーザを作成し、キューへのアクセスを許可するIAMポリシーを確立します。", correct: false}
      , {description: "他のアカウントへのアクセスを許可するAmazon SQSポリシーを作成します。", correct: true}
      , {description: "これを実現するには、Amazon Virtual Private Cloud（Amazon VPC）のピアリングを使用する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Notification Service（Amazon SNS）メッセージは、トピックに公開された後で削除できますか？"
    , multiple_answer: false
    , answers: [
      {description: "加入者がまだメッセージを読んでいない/持っていない場合のみ", correct: false}
      , {description: "Amazon SNSリコールメッセージパラメータが設定されている場合のみ", correct: false}
      , {description: "トピックにメッセージが正常に公開された後は、それを呼び出すことはできません。", correct: true}
      , {description: "はい。 ただし、サブスクライバがAmazon SQSキューの場合にのみ削除できます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "トラフィックをIPv6アドレスにルーティングするために一般的に使用されるレコードのタイプはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Aレコード", correct: false}
      , {description: "CNAME", correct: false}
      , {description: "AAAAレコード", correct: true}
      , {description: "MXレコード", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ドメイン名はどこに登録しますか？"
    , multiple_answer: false
    , answers: [
      {description: "あなたの地方政府機関", correct: false}
      , {description: "ドメインレジストラを使用する", correct: true}
      , {description: "InterNICで直接", correct: false}
      , {description: "IANA（Internet Assigned Numbers Authority）", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "法律上の理由から、米国市民がアクセスする際に米国でホストされなければならないアプリケーションがあります。 欧州連合（EU）の市民がアクセスすれば、そのアプリケーションはEU内でホストされなければなりません。 世界中の他の市民にとっては、シドニーでアプリケーションをホストする必要があります。 これを達成するにはどのルーティングポリシーを選択する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "レイテンシベースのルーティング", correct: false}
      , {description: "シンプルなルーティング", correct: false}
      , {description: "ジオロケーションルーティング", correct: true}
      , {description: "フェールオーバールーティング", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのタイプのDNSレコードを使用してIPアドレスをドメイン名に解決する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "Aレコード", correct: false}
      , {description: "CNAME", correct: false}
      , {description: "SPFレコード", correct: false}
      , {description: "PTRレコード", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "世界中の複数のAWS地域でWebアプリケーションをホストし、エンドユーザが可能な限り高速なネットワークパフォーマンスを得るようにDNSを設定する必要があります。 どのルーティングポリシーを適用する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "ジオロケーションルーティング", correct: false}
      , {description: "レイテンシベースのルーティング", correct: true}
      , {description: "シンプルなルーティング", correct: false}
      , {description: "加重ルーティング", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのDNSレコードを使用して、目的のメールサーバーへの電子メールの送信を構成する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "SPFレコード", correct: false}
      , {description: "Aレコード", correct: false}
      , {description: "MXレコード", correct: true}
      , {description: "SOAレコード", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "電子メールのなりすましやスパムを阻止するために一般的に使用されるDNSレコードはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "MXレコード", correct: false}
      , {description: "SPFレコード", correct: true}
      , {description: "Aレコード", correct: false}
      , {description: "CNAME", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "WebアプリケーションのAとBのテストバージョンを展開して、最も売り上げが高いバージョンを確認します。 バージョンAに行くにはトラフィックの10％、バージョンBに行くには10％、残りを現在の製品バージョンにする必要があります。 これを達成するために選択するルーティングポリシーはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "シンプルなルーティング", correct: false}
      , {description: "加重ルーティング", correct: true}
      , {description: "ジオロケーションルーティング", correct: false}
      , {description: "フェールオーバールーティング", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "すべてのゾーンがデフォルトで持つ必要があるDNSレコードはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "SPF", correct: false}
      , {description: "TXT", correct: false}
      , {description: "MX", correct: false}
      , {description: "SOA", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社は、西ヨーロッパには主要生産拠点を、アジア太平洋にはDRサイトを持っています。 プライマリサイトが使用できなくなった場合、セカンダリサイトにDNSが失敗するようにDNSを構成する必要があります。 どのDNSルーティングポリシーがこれを達成するのに最適でしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "加重ルーティング", correct: false}
      , {description: "ジオロケーションルーティング", correct: false}
      , {description: "シンプルなルーティング", correct: false}
      , {description: "フェールオーバールーティング", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ドメイン名を別のドメイン名に解決するには、どのタイプのDNSレコードを使用する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "Aレコード", correct: false}
      , {description: "CNAMEレコード", correct: true}
      , {description: "SPFレコード", correct: false}
      , {description: "PTRレコード", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Route 53が実行しない機能はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "ドメイン登録", correct: false}
      , {description: "DNSサービス", correct: false}
      , {description: "ロードバランシング", correct: true}
      , {description: "健康チェック", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのDNSレコードを使用して、サーバ、ネットワーク、およびその他のアカウンティングデータに関する情報を、ホストが読み取り可能な情報を格納するために使用することができますか？"
    , multiple_answer: false
    , answers: [
      {description: "TXTレコード", correct: true}
      , {description: "MXレコード", correct: false}
      , {description: "SPFレコード", correct: false}
      , {description: "PTRレコード", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ホストされているゾーンexample.comに対して許可されないリソースレコードセットはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "www.example.com", correct: false}
      , {description: "www.aws.example.com", correct: false}
      , {description: "www.example.ca", correct: true}
      , {description: "www.beta.example.com", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのポート番号を使用してDNSによる要求を処理しますか？"
    , multiple_answer: false
    , answers: [
      {description: "22", correct: false}
      , {description: "53", correct: true}
      , {description: "161", correct: false}
      , {description: "389", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのプロトコルが主にDNSによって要求を処理するために使用されていますか？"
    , multiple_answer: false
    , answers: [
      {description: "伝送制御プロトコル（TCP）", correct: false}
      , {description: "ハイパーテキスト転送プロトコル（HTTP）", correct: false}
      , {description: "ファイル転送プロトコル（FTP）", correct: false}
      , {description: "ユーザーデータグラムプロトコル（UDP）", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "応答データのサイズが512バイトを超えた場合、どのプロトコルがDNSで使用されますか？"
    , multiple_answer: false
    , answers: [
      {description: "伝送制御プロトコル（TCP）", correct: true}
      , {description: "ハイパーテキスト転送プロトコル（HTTP）", correct: false}
      , {description: "ファイル転送プロトコル（FTP）", correct: false}
      , {description: "ユーザーデータグラムプロトコル（UDP）", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Route 53で作成できる異なるホストゾーンは何ですか？" +
                  "1.公開ホストゾーン" +
                  "2.グローバルホストゾーン" +
                  "3.プライベートホストゾーン"
    , multiple_answer: false
    , answers: [
      {description: "1および2", correct: false}
      , {description: "1および3", correct: true}
      , {description: "2および3", correct: false}
      , {description: "1,2,3", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Route 53はどのAWSリソースにクエリをルーティングできませんか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon CloudFrontディストリビューション", correct: false}
      , {description: "弾性負荷分散ロードバランサ", correct: false}
      , {description: "Amazon EC2", correct: false}
      , {description: "AWS OpsWorks", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "既存のドメインのDNSサービスとしてAmazon Route 53を設定する場合に、実行する必要がある最初のステップは？"
    , multiple_answer: false
    , answers: [
      {description: "ホストされたゾーンを作成します。", correct: false}
      , {description: "リソースレコードセットを作成します。", correct: false}
      , {description: "Amazon Route 53でドメインを登録する。", correct: false}
      , {description: "現在のレジストラからAmazon Route 53にドメイン登録を転送します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうち、キャッシュに格納するのに適したオブジェクトはどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "セッション状態", correct: true}
      , {description: "ショッピングカート", correct: true}
      , {description: "製品カタログ", correct: true}
      , {description: "銀行口座残高", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうち、Amazon ElastiCacheでサポートされているキャッシュエンジンはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "MySQL", correct: false}
      , {description: "Memcached", correct: true}
      , {description: "Redis", correct: true}
      , {description: "Couchbase", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Memcachedを実行しているAmazon ElastiCacheクラスタにいくつのノードを追加できますか？"
    , multiple_answer: false
    , answers: [
      {description: "1", correct: false}
      , {description: "5", correct: false}
      , {description: "20", correct: true}
      , {description: "100", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Redisを実行しているAmazon ElastiCacheクラスタにいくつのノードを追加できますか？"
    , multiple_answer: false
    , answers: [
      {description: "1", correct: true}
      , {description: "5", correct: false}
      , {description: "20", correct: false}
      , {description: "100", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "アプリケーションは、Memcachedを使用して、頻繁に使用されるデータベースクエリをキャッシュします。 最小限の変更でAmazon ElastiCacheを使用するためにアプリケーションを移行するために必要な手順は？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon ElastiCacheライブラリを使用するようにアプリケーションを再コンパイルします。", correct: false}
      , {description: "構成ファイルをAmazon ElastiCacheクラスタのエンドポイントで更新します。", correct: true}
      , {description: "アプリケーションサーバーからのアクセスを許可するようにセキュリティグループを構成します。", correct: true}
      , {description: "Secure Shell（SSH）を使用してAmazon ElastiCacheノードに接続し、Memcachedの最新バージョンをインストールします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Redisを実行しているAmazon ElastiCacheに保存されているデータをどのようにバックアップできますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon Elastic Compute Cloud（Amazon EC2）インスタンスのイメージを作成します。", correct: false}
      , {description: "毎晩キャッシュ環境をバックアップするように自動スナップショットを構成します。", correct: true}
      , {description: "手動でスナップショットを作成します。", correct: true}
      , {description: "Redisクラスタはバックアップできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon ElastiCacheクラスタを保護するにはどうすればいいですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Memcachedのルートパスワードを変更します。", correct: false}
      , {description: "AWS IDおよびアクセス管理（IAM）ポリシーを使用してアプリケーションプログラミングインターフェイス（API）アクションを制限する。", correct: true}
      , {description: "セキュリティグループを使用してネットワークアクセスを制限する。", correct: true}
      , {description: "ネットワークアクセス制御リスト（ACL）を使用してネットワークアクセスを制限する。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたはモバイルゲームアプリケーションの開発に取り組んでおり、何百万人ものユーザーのトップスコアを追跡するためのリーダーボード機能を構築しています。 このユースケースにはどのAWSサービスが最適ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Redshift", correct: false}
      , {description: "Memcachedを使用しているAmazon ElastiCache", correct: false}
      , {description: "Redisを使用したAmazon ElastiCache", correct: true}
      , {description: "Amazon Simple Storage Service（S3）", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Memcachedを使用してAmazon ElastiCacheを使用して頻繁なクエリ結果を格納する大規模なWebアプリケーションを構築しました。 ユーザトラフィックの増加に対応するため、Webホスト群とキャッシュホスト群を次の年に何度も展開する予定です。 スケーリングイベントが発生したときに必要な変更量を最小限に抑えるにはどうすればよいですか？"
    , multiple_answer: false
    , answers: [
      {description: "クライアント側で自動検出を構成する", correct: true}
      , {description: "サーバー側で自動検出を構成する", correct: false}
      , {description: "新しいクラスタごとに構成ファイルを更新する", correct: false}
      , {description: "Elastic Load Balancerを使用してリクエストをプロキシする", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon ElastiCacheはどのキャッシュエンジンをサポートしていますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Memcached", correct: true}
      , {description: "Redis", correct: true}
      , {description: "Membase", correct: false}
      , {description: "Couchbase", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon CloudFrontはどのオリジンサーバーをサポートしていますか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon Route 53ホストゾーン", correct: false}
      , {description: "Amazon Simple Storage Service（Amazon S3）バケット", correct: true}
      , {description: "Amazon Elastic Compute Cloud（Amazon EC2）上で動作するHTTPサーバー", correct: true}
      , {description: "Amazon EC2自動スケーリンググループ", correct: false}
      , {description: "オンプレミスで実行されているHTTPサーバー", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次の中でAmazon CloudFrontの有効な使用例はどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "急速に変化する動的コンテンツを使用して、世界中のユーザーをサポートする一般的なソフトウェアダウンロードサイト", correct: true}
      , {description: "従業員にトレーニングビデオを提供する企業Webサイト。 ほとんどの従業員は同じ都市の2つの企業キャンパス内にあります。", correct: false}
      , {description: "有償の加入者にのみ配信されるコンテンツを必要とする頻繁に使用されるビデオおよび音楽ストリーミングサービス", correct: true}
      , {description: "グローバルな人材を支援する法人向けのWebサイト。 サイトには機密データが含まれているため、すべてのユーザーは企業の仮想プライベートネットワーク（VPN）を介して接続する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）バケツの静的コンテンツ（主にイメージとCSSファイル）と、Amazon Elastic Compute Cloud（Amazon EC2）上で動作するPHP Webアプリケーションが現在提供している動的コンテンツの両方を含むWebアプリケーションがあります。 Amazon CloudFrontのどの機能を使用して、このアプリケーションを単一のAmazon CloudFrontディストリビューションでサポートすることができますか？（2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Multiple Origin Access Identifiers", correct: false}
      , {description: "Multiple signed URLs", correct: false}
      , {description: "Multiple origins", correct: true}
      , {description: "Multiple edge locations", correct: false}
      , {description: "Multiple cache behaviors", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたは、PCとモバイルデバイスの両方でエンドユーザーにビデオファイルを提供するメディア共有Webアプリケーションを構築しています。 メディアファイルはAmazon Simple Storage Service（Amazon S3）バケットにオブジェクトとして格納されますが、Amazon CloudFrontを通じて配信されます。 Amazon CloudFrontだけがAmazon S3バケット内のオブジェクトにアクセスできるようにする最も簡単な方法は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon S3オブジェクトごとに署名付きURLを作成します。", correct: false}
      , {description: "Amazon CloudFront Origin Access Identifier（OAI）を使用します。", correct: true}
      , {description: "公開鍵と秘密鍵は、署名付きのCookieで使用します。", correct: false}
      , {description: "AWS IDおよびアクセス管理（IAM）バケットポリシーを使用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "貴社のデータセンターは完全に満杯ですが、販売グループは200TBの製品ビデオを保管する必要があると判断しました。 このビデオは過去数年間に作成されたもので、最も最近のものは最も頻繁にセールスによってアクセスされます。 データはローカルにアクセスする必要がありますが、このデータを格納するローカルストレージデバイスをインストールするスペースはデータセンターにありません。 どのAWSクラウドサービスが販売の要件を満たしますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS Storage Gateway Gateway-Storedボリューム", correct: false}
      , {description: "Amazon EBSボリュームが接続されたAmazon Elastic Compute Cloud（Amazon EC2）インスタンス", correct: false}
      , {description: "AWS Storage Gateway Gateway-Cached volumes", correct: true}
      , {description: "AWSインポート/エクスポートディスク", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "既存のオンプレミスActive Directoryとの信頼関係を確立せずに、既存のMicrosoft Active Directory機能をAmazon Virtual Private Cloud（Amazon VPC）に拡張したいと考えています。 この目標を達成するための最良のアプローチはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSディレクトリサービスADコネクタを作成して接続します。", correct: false}
      , {description: "AWS Directory Service Simple ADを作成して接続します。", correct: true}
      , {description: "Microsoft Active Directory（Enterprise Edition）用のAWSディレクトリサービスを作成して接続します。", correct: false}
      , {description: "他の選択肢のいずれでもない。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSの復号化を決して終了しないAWS鍵管理サービス（AWS KMS）の鍵は、以下のいずれですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS KMS data keys", correct: false}
      , {description: "Envelope encryption keys", correct: false}
      , {description: "AWS KMS Customer Master Keys (CMKs)", correct: true}
      , {description: "A and C", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS Key Management Service（AWS KMS）がデータを暗号化するために使用する暗号方式はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "パスワードベースの暗号化", correct: false}
      , {description: "非対称", correct: false}
      , {description: "共有秘密", correct: false}
      , {description: "エンベロープ暗号化", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "アカウントでAPI（アプリケーションプログラムインターフェイス）の呼び出しを記録し、ログファイルをAmazon Simple Storage Service（Amazon S3）バケットに配信するAWSサービスはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS CloudTrail", correct: true}
      , {description: "Amazon CloudWatch", correct: false}
      , {description: "Amazon Kinesis", correct: false}
      , {description: "AWSデータパイプライン", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS KMSで暗号文を復号しようとしていますが、復号化操作に失敗しています。 次のうちどれが原因が考えられますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "秘密鍵が暗号文の公開鍵と一致しません。", correct: false}
      , {description: "プレーンテキストは暗号化コンテキストとともに暗号化されており、Decrypt APIを呼び出すときには同一の暗号化コンテキストを提供していません。", correct: true}
      , {description: "解読しようとしている暗号文が無効です。", correct: true}
      , {description: "正しい対称鍵をDecrypt APIに提供していません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社には30年分の財務記録があり、15TBのオンプレミスストレージを使用します。 これらの記録を維持することが規制されていますが、今年は誰もこのデータを要求してこなかった会社で働いています。 同社のデータセンターが既にインターネット接続の帯域幅を満たしていることを考えると、最も適切なクラウドストレージにデータを格納する代替手段は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Simple Storage Service（Amazon S3）へのAWSインポート/エクスポート", correct: false}
      , {description: "Amazon GlacierへのAWSインポート/エクスポート", correct: true}
      , {description: "Amazon Kinesis", correct: false}
      , {description: "Amazon Elastic MapReduce（AWS EMR）Glacier", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社は、フランチャイズ店舗のすべての場所で販売店からの情報を収集します。 毎月、これらのプロセスはAmazon Simple Storage Service（Amazon S3）に格納されている200TBの情報を収集します。 このデータから知識を収集するために、24時間を要する分析ジョブが実行されます。 次のうち、これらの分析を費用効果の高い方法で実行できるのはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "永続的なAmazon Elastic MapReduce（Amazon EMR）クラスタにデータをコピーし、MapReduceジョブを実行します。", correct: false}
      , {description: "Amazon S3バケットの情報を読み取り、Amazon Kinesisストリームを介して実行するアプリケーションを作成します。", correct: false}
      , {description: "一時的なAmazon EMRクラスタを実行し、Amazon S3で直接データに対してMapReduceジョブを実行します。", correct: true}
      , {description: "d2.8xlarge（32 vCPU、244GB RAM）Amazon Elastic Compute Cloud（Amazon EC2）インスタンスを起動し、アプリケーションを実行して各オブジェクトを順次読み込んで処理します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "飛行中の無制限のデータストリームを処理できるサービスはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Kinesis Firehose", correct: false}
      , {description: "Amazon Elastic MapReduce（Amazon EMR）", correct: false}
      , {description: "Amazon Redshift", correct: false}
      , {description: "Amazon Kinesis Streams", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "どのようなサービスの組み合わせにより、毎日50TBのデータをAmazonストレージにコピーし、Hadoopでデータを処理し、結果を大規模なデータウェアハウスに格納することができますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Kinesis, Amazon Data Pipeline, Amazon Elastic MapReduce (Amazon EMR), and Amazon Elastic Compute Cloud (Amazon EC2)", correct: false}
      , {description: "Amazon Elastic Block Store (Amazon EBS), Amazon Data Pipeline, Amazon EMR, and Amazon Redshift", correct: false}
      , {description: "Amazon Simple Storage Service (Amazon S3), Amazon Data Pipeline, Amazon EMR, and Amazon Redshift", correct: true}
      , {description: "Amazon S3, Amazon Simple Workflow, Amazon EMR, and Amazon DynamoDB", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社には、2秒ごとに更新を送信する全国の気象ステーションが50,000台あります。 このデータストリームを取り込んで、Amazon Simple Storage Service（Amazon S3）に保存して後で処理できるようにするサービスはありますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Simple Queue Service（Amazon SQS）", correct: false}
      , {description: "Amazon Kinesis Firehose", correct: true}
      , {description: "Amazon Elastic Compute Cloud（Amazon EC2）", correct: false}
      , {description: "Amazon Data Pipeline", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの組織はChefをデプロイ自動化に大いに利用しています。 Chefレシピと統合して新しいアプリケーションサーバーインスタンスを開始し、アプリケーションサーバーソフトウェアを構成し、アプリケーションを展開するAWSクラウドサービスは？"
    , multiple_answer: false
    , answers: [
      {description: "AWS Elastic Beanstalk", correct: false}
      , {description: "Amazon Kinesis", correct: false}
      , {description: "AWS OpsWorks", correct: true}
      , {description: "AWS CloudFormation", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "企業はテストプラットフォームをAWSに移行し、開発者にクリーンなテストおよび開発環境への即時アクセスを提供します。 会社の主な要件は、環境を簡単に再現性と代替性にすることです。 どのようなサービスが企業の要件を満たすのに役立ちますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS CloudFormation", correct: true}
      , {description: "AWS Config", correct: false}
      , {description: "Amazon Redshift", correct: false}
      , {description: "AWS Trusted Advisor", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "貴社のIT管理チームは、お金を節約し、システムの可用性とパフォーマンスを向上させ、セキュリティのギャップを埋めるための推奨事項を提供するオンラインツールを探しています。 経営陣を助けることができるものは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Cloud-init", correct: false}
      , {description: "AWS Trusted Advisor", correct: true}
      , {description: "AWS Config", correct: false}
      , {description: "Configuration Recorder", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社は、内部ポリシーとベストプラクティスの遵守を確実にするためにAWS環境の頻繁な監査を必要とするデータを処理します。 これらの監査を実行するには、関連する構成変更を評価するために、リソースの履歴構成にアクセスする必要があります。 どのサービスが監査に必要な情報を提供しますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS Config", correct: true}
      , {description: "AWS鍵管理サービス（AWS KMS）", correct: false}
      , {description: "AWS CloudTrail", correct: false}
      , {description: "AWS OpsWorks", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "すべてのWebサイトの展開は現在、貴社の開発チームによって行われています。 ウェブサイトの人気が高まる中、同社は導入の機敏性を高める方法を模索しています。 どのAWSクラウドサービスが、サーバ、データベース、ロードバランサ、ファイアウォール、ネットワークの管理や設定に時間を費やすのではなく、コードを書くことに集中することができますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS Config", correct: false}
      , {description: "AWS Trusted Advisor", correct: false}
      , {description: "Amazon Kinesis", correct: false}
      , {description: "AWS Elastic Beanstalk", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "データセキュリティのためにAWSが実行する運用プロセスはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "任意の共有ストレージデバイスに格納されたデータのAdvanced Encryption Standard（AES）-256暗号化", correct: false}
      , {description: "業界標準のプラクティスを使用したストレージデバイスの廃止", correct: true}
      , {description: "Amazon Elastic Block Store（Amazon EBS）ボリュームとAmazon EBSスナップショットのバックグラウンドウイルススキャン", correct: false}
      , {description: "複数のAWS領域にわたるデータの複製", correct: false}
      , {description: "Amazon EBSボリュームがマウントされていない場合のAmazon EBSデータの安全な拭き取り", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Windows Amazon Elastic Compute Cloud（Amazon EC2）インスタンスを起動し、起動時のインスタンスにAmazon EC2キーペアを指定しました。 次のうち、インスタンスへのログイン方法を正確に説明しているのはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon EC2キーペアを使用して、Secure Shell（SSH）経由でインスタンスに安全に接続します。", correct: false}
      , {description: "インスタンスにログインするには、AWS IDおよびアクセス管理（IAM）ユーザーX.509証明書を使用します。", correct: false}
      , {description: "Amazon EC2キーペアを使用して管理者パスワードを復号化し、管理者としてリモートデスクトッププロトコル（RDP）経由でインスタンスに安全に接続します。", correct: true}
      , {description: "キーペアは必要ありません。 RDP経由でインスタンスに安全に接続します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "データベースセキュリティグループは、仮想プライベートクラウド（VPC）の内部にあるデータベースインスタンスへのネットワークアクセスを制御し、デフォルトではアクセスを許可しますか？"
    , multiple_answer: false
    , answers: [
      {description: "データベースが使用する標準ポートの任意のIPアドレスからのアクセスは、デフォルトで提供されます。", correct: false}
      , {description: "任意のポートの任意のIPアドレスからのアクセスは、デフォルトでDBセキュリティグループに提供されます。", correct: false}
      , {description: "デフォルトではアクセスは提供されておらず、DBセキュリティグループにルールを明示的に追加する必要があります。", correct: true}
      , {description: "データベース接続文字列のアクセスは、デフォルトでDBセキュリティグループで提供されます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）は、サービスサイド暗号化（SSE）でデータを暗号化するために、どの暗号化アルゴリズムを使用していますか？"
    , multiple_answer: false
    , answers: [
      {description: "高度暗号化標準（AES）-256", correct: true}
      , {description: "RSA 1024", correct: false}
      , {description: "RSA 2048", correct: false}
      , {description: "AES-128", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSアイデンティティとアクセス管理（IAM）ユーザが一度にアクティブにできるアクセスキーの数はいくつですか？"
    , multiple_answer: false
    , answers: [
      {description: "0", correct: false}
      , {description: "1", correct: false}
      , {description: "2", correct: true}
      , {description: "3", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSが顧客と一緒に採用しているセキュリティモデルの名前はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "共有秘密モデル", correct: false}
      , {description: "共有責任モデル", correct: true}
      , {description: "共有秘密鍵モデル", correct: false}
      , {description: "秘密鍵責任モデル", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS Key Management Service（AWS KMS）を利用してデータを暗号化するAmazon Redshiftクラスタで使用されるスキームについて、次のうちどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Redshiftは、暗号化に1層のキーベースのアーキテクチャを使用します。", correct: false}
      , {description: "Amazon Redshiftは、暗号化に2層のキーベースのアーキテクチャを使用しています。", correct: false}
      , {description: "Amazon Redshiftは、暗号化に3層のキーベースのアーキテクチャを使用しています。", correct: false}
      , {description: "Amazon Redshiftは、暗号化に4層のキーベースのアーキテクチャを使用しています。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ロードバランサがSSL（Secure Sockets Layer）接続に使用される暗号を判別することを保証する次のElastic Load Balancingオプションはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "クライアントサーバー暗号スイート", correct: false}
      , {description: "サーバー暗号のみ", correct: false}
      , {description: "最初のサーバー暗号", correct: false}
      , {description: "サーバーの注文の優先順位", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon WorkSpacesはどのテクノロジーを使用してデータセキュリティを提供していますか？"
    , multiple_answer: false
    , answers: [
      {description: "SSL（Secure Sockets Layer）/ TLS（Transport Layer Security）", correct: false}
      , {description: "高度暗号化標準（AES）-256", correct: false}
      , {description: "PC-over-IP（PCoIP）", correct: true}
      , {description: "AES-128", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ソリューションアーキテクトとして、AWSでシステムをどのように構築する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "最低限のコストで設計してください", correct: false}
      , {description: "Amazon Simple Storage Service（Amazon S3）の耐久性を活用するには、AWSの使用方法を設計する必要があります。", correct: false}
      , {description: "複数のリージョンと可用性ゾーンを利用するには、AWSの使用法を設計する必要があります。", correct: true}
      , {description: "Amazon Elastic Compute Cloud（Amazon EC2）自動スケーリングを使用して設計して、必要に応じて容量を確保する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS MFA（AWS Multi-Factor Authentication）トークンで使用されるセキュリティスキームはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "時間ベースワンタイムパスワード（TOTP）", correct: true}
      , {description: "完璧な前方秘密（PFC）", correct: false}
      , {description: "エフェメラルディフィーヘルマン（EDH）", correct: false}
      , {description: "スプリットキー暗号化（SKE）", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "DynamoDBテーブルには、保護が必要な機密データが含まれている場合があります。 次のうちDynamoDBテーブルの内容を保護する方法はどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "DynamoDBはデフォルトですべてのデータサーバー側を暗号化するため、何も必要ありません。", correct: false}
      , {description: "DynamoDBは、クライアント側の暗号化ライブラリソリューションで暗号化されたデータを格納してから、DynamoDBに格納することができます。", correct: true}
      , {description: "DynamoDBは格納されているすべてのデータを難読化し、暗号化は不要です。", correct: false}
      , {description: "DynamoDBをAWS Key Management Serviceと共に使用して、データを暗号化してからDynamoDBにデータを格納することができます。", correct: true}
      , {description: "DynamoDBは、保護が必要な機密情報の格納には使用しないでください。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "EC2-ClassicにAmazon Linux Elastic Compute Cloud（Amazon EC2）インスタンスを起動し、インスタンスがSystem Status CheckおよびInstance Status Checkに合格しました。 セキュアシェル（SSH）経由でインスタンスに安全に接続しようとすると、「警告：非公開のプライベートキーファイル」という応答が返され、ログインが失敗します。 次のうちログインに失敗した原因はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "間違った秘密鍵を使用しています。", correct: false}
      , {description: "プライベートキーのアクセス許可は、キーを信頼するにはあまりにも安全ではありません。", correct: true}
      , {description: "セキュリティグループルールによって接続がブロックされています。", correct: false}
      , {description: "セキュリティグループルールは秘密キーに関連付けられていません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次の公的アイデンティティプロバイダのどれがAmazon Cognito Identityによってサポートされていますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon", correct: false}
      , {description: "Google", correct: false}
      , {description: "Facebook", correct: false}
      , {description: "その他の選択肢全て", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Compute Cloud（Amazon EC2）インスタンスからインスタンスへのアクセスキーを必要とせずにプラットフォームへの呼び出しを許可するように設計されたAWSの機能は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS Identity and Access Management（IAM）インスタンスプロファイル", correct: true}
      , {description: "IAMグループ", correct: false}
      , {description: "IAMロール", correct: false}
      , {description: "Amazon EC2のキーペア", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のAmazon仮想プライベートクラウド（Amazon VPC）要素のどれがステートレスなファイアウォールとして機能しますか？"
    , multiple_answer: false
    , answers: [
      {description: "セキュリティグループ", correct: false}
      , {description: "ネットワークアクセスコントロールリスト（ACL）", correct: true}
      , {description: "ネットワークアドレス変換（NAT）インスタンス", correct: false}
      , {description: "Amazon VPCエンドポイント", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうちAWSデジタル署名計算プロセスの最新バージョンはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "署名バージョン1", correct: false}
      , {description: "署名バージョン2", correct: false}
      , {description: "署名バージョン3", correct: false}
      , {description: "署名バージョン4", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "単一の顧客専用のハードウェアでAmazon Elastic Compute Cloud（Amazon EC2）インスタンスを起動できるAmazon Virtual Private Cloud（Amazon VPC）内の機能の名前はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon VPC-based tenancy", correct: false}
      , {description: "Dedicated tenancy", correct: true}
      , {description: "Default tenancy", correct: false}
      , {description: "Host-based tenancy", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうち、Amazon Elastic MapReduce（Amazon EMR）がクラスタへのアクセスをどのように保護するかについて説明していますか？"
    , multiple_answer: false
    , answers: [
      {description: "マスターノードとスレーブノードは、Amazon仮想プライベートクラウド（Amazon VPC）に起動されます。", correct: false}
      , {description: "マスターノードは、クラスタ起動時に指定されたキーから仮想プライベートネットワーク（VPN）接続をサポートします。", correct: false}
      , {description: "マスタノードは、セキュアシェル（SSH）とサービスアクセスを許可するセキュリティグループに投入され、スレーブノードはマスターノードとの通信のみを許可する別のセキュリティグループに起動されます。", correct: true}
      , {description: "マスターノードとスレーブノードは、SSHとサービスアクセスを許可するセキュリティグループに投入されます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "単一のハードウェアコンポーネントの障害によるデータ損失を防ぐため、Amazon Elastic Block Storage（Amazon EBS）は自動的にEBSボリュームデータを次のどれかに複製しますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon EBSは、地域内の同じ可用性ゾーン内のEBSボリュームデータを複製します。", correct: true}
      , {description: "Amazon EBSは、同じ地域内の他の可用性ゾーン間でEBSボリュームデータを複製します。", correct: false}
      , {description: "Amazon EBSは、EBSボリュームデータを、同じリージョン内の可用性ゾーンと可用性ゾーン内の他の1つのリージョンに複製します。", correct: false}
      , {description: "Amazon EBSは、EBSボリュームデータを、他のすべての地域の同じ地域と可用性ゾーンの可用性ゾーンに複製します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSは、さまざまな異なるメカニズムを使用して、セキュリティおよび制御環境に関して顧客と通信します。 次のうち有効なメカニズムはどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "業界の認定と独立したサードパーティのアテステーションの取得", correct: true}
      , {description: "Webサイト、ホワイトペーパー、ブログを介したセキュリティとAWSコントロールの実践に関する情報の公開", correct: true}
      , {description: "顧客に証明書、レポート、およびその他の文書を直接提供する場合もあります（場合によってはNDAの下で）", correct: true}
      , {description: "顧客の監査人がAWSデータセンター、インフラストラクチャ、シニアスタッフに直接アクセスできるようにする", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS共有責任モデルについては、次のうちどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "共有責任モデルは、セキュリティの考慮事項に限定されています。 それはITコントロールにまで及んでいません。", correct: false}
      , {description: "共有責任モデルは、SOC 1タイプIIに準拠したい顧客にのみ適用されます。", correct: false}
      , {description: "共有責任モデルは、セキュリティ上の考慮事項に限定されるものではありません。 それはITコントロールにも及んでいます。", correct: true}
      , {description: "共有責任モデルは、ISO 27001に準拠したい顧客にのみ適用されます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSは、IT管理情報を次のいずれの方法で顧客に提供していますか？"
    , multiple_answer: false
    , answers: [
      {description: "特定のコントロール定義を使用するか、または一般的なコントロール標準コンプライアンス", correct: true}
      , {description: "特定のコントロール定義を使用するか、SAS 70", correct: false}
      , {description: "一般的なコントロールの標準準拠を使用し、ISO 27001", correct: false}
      , {description: "ISO 27001およびSOC 1タイプII", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSの有効なレポート、認証、または第三者の認証はどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "SOC 1", correct: true}
      , {description: "PCI DSSレベル1", correct: true}
      , {description: "SOC 4", correct: false}
      , {description: "ISO 27001", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうちどれが当てはまりますか？"
    , multiple_answer: false
    , answers: [
      {description: "ITガバナンスは、IT資産をAWSプラットフォームに導入しているにもかかわらず、依然として顧客の責任です。", correct: true}
      , {description: "AWSプラットフォームは、レベル1のPCI DSS準拠です。顧客は、このプラットフォームにWebアプリケーションを導入することができ、自動的にPCI DSSに準拠します。", correct: false}
      , {description: "共有責任モデルはITセキュリティにのみ適用されます。 ガバナンスには関係しません。", correct: false}
      , {description: "AWSはリスク管理を非常に重視しておらず、AWSインフラストラクチャのリスクを軽減することはお客様の責任です。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS環境のリスクとコンプライアンスのメリットについては、次のうちどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "さまざまな認定およびサードパーティのアテステーションに準拠するためには、ワークロードをAWSクラウドに完全に移行する必要があります。", correct: false}
      , {description: "さまざまな認定および第三者のアテステーションに準拠するためには、ワークロードの重要なコンポーネントをAWSクラウドに完全に移行する必要がありますが、重要ではないコンポーネントはAWSクラウドに移行しないでください。", correct: false}
      , {description: "ワークロードのクリティカルでないコンポーネントは、さまざまな認定およびサードパーティのアテステーションに準拠するために、AWSクラウドに完全に移行する必要がありますが、重要なコンポーネントはAWSクラウドにはありません。", correct: false}
      , {description: "ワークロードのいくつか、多く、またはすべてのコンポーネントをAWSクラウドに移行することができますが、ワークロード全体がさまざまな認定およびサードパーティのアテステーションに準拠していることを保証することは、お客様の責任です。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "可用性ゾーンを最もよく表している次の文はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "各可用性ゾーンは、冗長電源とネットワーク/接続性を備えた単一の個別データセンターで構成されています。", correct: false}
      , {description: "各可用性ゾーンは、冗長電源とネットワーク/接続性を備えた複数の個別のデータセンターで構成されています。", correct: true}
      , {description: "各可用性ゾーンは、複数の個別領域で構成され、それぞれが冗長電源とネットワーク/接続性を備えた単一のデータセンターを備えています。", correct: false}
      , {description: "各アベイラビリティゾーンは、共有電源および冗長ネットワーキング/接続を備えた複数の個別のデータセンターで構成されています。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "脆弱性スキャンおよびAWSプラットフォームの脅威評価に関して、次の記述のうちどれが当てはまりますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "AWSは、公開されている脆弱性のエンドポイントIPアドレスのスキャンを定期的に実行します。", correct: true}
      , {description: "AWSによって実行されるスキャンには、顧客インスタンスが含まれます。", correct: false}
      , {description: "AWSセキュリティは、特定された脆弱性を是正するよう適切な関係者に通知します。", correct: true}
      , {description: "お客様は事前の通知なしにいつでも独自のスキャンを実行できます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSに対する顧客のリスクとコンプライアンスのコミュニケーション責任は、次のどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSと顧客は、常にセキュリティと制御環境情報を互いに通信します。", correct: false}
      , {description: "AWSは、オンラインでAWSのセキュリティと管理の実践に関する情報をNDAの顧客に直接公開しています。 顧客は、AWSにその使用と設定を伝える必要はありません。", correct: true}
      , {description: "顧客は常にAWSにその使用と設定を伝えます。 AWSは、セキュリティ上の理由から、AWSのセキュリティおよび制御プラクティスを顧客に伝えません。", correct: false}
      , {description: "顧客とAWSの両方は、セキュリティと管理の慣行を完全に機密に保ち、すべての関係者に最高のセキュリティを保証するためにそれらを共有しません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "リスク管理については、次のうちどれが当てはまりますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSは戦略的な事業計画を策定しません。 リスク管理と緩和はまったく顧客の責任です。", correct: false}
      , {description: "AWSは、あらゆるリスクを特定し、そのリスクを軽減または管理するためのコントロールを実施するための戦略的ビジネス計画を策定しました。 顧客は、独自のリスク管理計画を策定し、維持する必要はありません。", correct: false}
      , {description: "AWSは、あらゆるリスクを識別するための戦略的ビジネス計画を策定し、そのリスクを緩和または管理するための管理を実施しています。 また、お客様は、関連する統制および認証に準拠していることを確認するために、独自のリスク管理計画を策定および維持する必要があります。", correct: true}
      , {description: "AWSも顧客もリスク管理について心配する必要はないため、いずれの当事者からも計画は必要ありません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWSクラウドサービスの安全な提供のために、AWSコントロール環境が用意されています。 集団管理環境に明示的に含まれていないのは次のうちどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "人", correct: false}
      , {description: "エネルギー", correct: true}
      , {description: "技術", correct: false}
      , {description: "プロセス", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS環境のセキュリティグループの構成は誰が担当しますか？"
    , multiple_answer: false
    , answers: [
      {description: "顧客とAWSはともに、セキュリティグループが正しく安全に構成されていることを保証する責任を負います。", correct: false}
      , {description: "AWSは、すべてのセキュリティグループが正しく安全に構成されるようにする責任があります。 顧客はセキュリティグループの設定を心配する必要はありません。", correct: false}
      , {description: "AWSも顧客も、セキュリティグループの設定を担当していません。 セキュリティヒューリスティックを使用して、セキュリティグループがインテリジェントかつ自動的に構成されます。", correct: false}
      , {description: "AWSはセキュリティグループの機能をサービスとして提供しますが、お客様は自分自身のセキュリティグループを正しく安全に設定する責任があります。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ITコントロール環境全体で強力なコンプライアンスとガバナンスを達成しようとする顧客に対して、推奨されるアプローチではないものはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "全体的なアプローチ：AWSから入手可能な情報を他のすべての情報とともにレビューし、すべての準拠要件を文書化します。", correct: false}
      , {description: "すべてのコントロール目標が満たされ、すべてのキーコントロールが設計され、効果的に動作していることを確認します。", correct: false}
      , {description: "組織のコンプライアンス要件を満たすように特別に設計されていない汎用コントロール目標を実装する。", correct: true}
      , {description: "すべての第三者が所有するコントロールを特定し、文書化する。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "疎結合システムを設計する場合、どのAWSサービスがコンポーネント間に中間耐久性のあるストレージレイヤーを提供しますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon CloudFront", correct: false}
      , {description: "Amazon Kinesis", correct: true}
      , {description: "Amazon Route 53", correct: false}
      , {description: "AWS CloudFormation", correct: false}
      , {description: "Amazon Simple Queue Service（Amazon SQS）", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Webサーバーファームの可用性を向上させるのに役立つ次のオプションはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon CloudFrontを使用すると、待ち時間が短くデータ転送速度が速いエンド・ユーザーにコンテンツを配信できます。", correct: false}
      , {description: "複数の可用性ゾーンにわたってWebサーバーインスタンスを起動します。", correct: true}
      , {description: "自動スケーリングを活用して、失敗したインスタンスから復旧する。", correct: true}
      , {description: "Amazon Virtual Private Cloud（Amazon VPC）にインスタンスを展開します。", correct: false}
      , {description: "各インスタンスにさらにCPUとRAMを追加します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のAWSクラウドサービスのどれかがマルチAZの原則に従って設計されていますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon DynamoDB", correct: true}
      , {description: "Amazon ElastiCache", correct: false}
      , {description: "Elastic Load Balancing", correct: false}
      , {description: "Amazon Virtual Private Cloud (Amazon VPC)", correct: false}
      , {description: "Amazon Simple Storage Service (Amazon S3)", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの電子商取引サイトはステートレスに設計されており、現在Amazon Elastic Compute Cloud（Amazon EC2）のインスタンスで動作しています。 コストを管理し、可用性を向上させるためには、サイトの需要曲線に合わせてCPUとネットワークの使用率に基づいて艦隊を拡張する必要があります。 この要件を満たすにはどんなサービスが必要ですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon CloudWatch", correct: true}
      , {description: "Amazon DynamoDB", correct: false}
      , {description: "Elastic Load Balancing", correct: false}
      , {description: "Auto Scaling", correct: true}
      , {description: "Amazon Simple Storage Service (Amazon S3)", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "コンプライアンス部門は、Amazon Elastic Block Storage（Amazon EBS）ボリュームのすべてのデータを暗号化する必要があるという新しい要件を義務付けました。 既存のAmazon EBSボリュームが新しい要件に準拠するためには、次のどの手順を実行しますか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "既存のAmazon EBSボリュームをAmazon仮想プライベートクラウド（Amazon VPC）に移行します。", correct: false}
      , {description: "暗号化が有効になっている新しいAmazon EBSボリュームを作成します。", correct: true}
      , {description: "既存のAmazon EBSボリュームプロパティを変更して、暗号化を有効にします。", correct: false}
      , {description: "暗号化を有効にしたAmazon EBSボリュームをデータをホストするインスタンスに接続し、データを暗号化対応のAmazon EBSボリュームに移行します。", correct: true}
      , {description: "暗号化を有効にして、暗号化されていないAmazon EBSボリュームからAmazon EBSボリュームにデータをコピーします。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "分散型サービス拒否（DDoS） - 柔軟性アーキテクチャを構築する際、Amazon Virtual Private Cloud（Amazon VPC）はどのようにして攻撃対象領域を最小限に抑えるのでしょうか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "必要なインターネットエントリポイントの数を減らす", correct: true}
      , {description: "エンドユーザトラフィックと管理トラフィックを組み合わせる", correct: false}
      , {description: "信頼できないエンドユーザーがアクセスできないレベルに必要なインターネットエントリポイントを難読化する", correct: true}
      , {description: "重要ではないインターネットエントリポイントをアーキテクチャに追加する", correct: true}
      , {description: "ネットワークを拡張してDDoS攻撃を吸収する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "電子商取引アプリケーションは、顧客の購入時にさまざまなビジネスユニットに毎日および随時のレポートを提供します。 この結果、MySQL Amazon Relational Database Service（Amazon RDS）インスタンスへの読み取りトラフィックが非常に高くなります。 データベースのパフォーマンスに影響を与えずに読み取りトラフィックを拡大するにはどうすればよいですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon RDSインスタンスの割り当てられたストレージを増やします。", correct: false}
      , {description: "Amazon RDSインスタンスをマルチAZ展開に変更します。", correct: false}
      , {description: "Amazon RDSインスタンスの読み取りレプリカを作成します。", correct: true}
      , {description: "Amazon RDSインスタンスDBエンジンのバージョンを変更します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたのウェブサイトは、Elastic Load Balancer（ELB）を使用して、複数の可用性ゾーンにわたって負荷分散されている複数のWebサーバー上でホストされています。 Amazon Route 53のどのようなレコードセットを使用して、myawesomeapp.comをあなたのウェブサイトに向けられますか？"
    , multiple_answer: false
    , answers: [
      {description: "タイプAエイリアスリソースレコードセット", correct: true}
      , {description: "MXレコードセット", correct: false}
      , {description: "TXTレコードセット", correct: false}
      , {description: "CNAMEレコードセット", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Compute Cloud（Amazon EC2）インスタンス上で動作するアプリケーションにAWSクレデンシャルを配布して、補足的なAWSクラウドサービスにアクセスするための安全な方法が必要です。 どのようなアプローチを使用すると、アプリケーションのアクセスで他のユーザーからの資格情報を保護しながら要求に署名するための短期資格情報を使用できるようになりますか？"
    , multiple_answer: false
    , answers: [
      {description: "各Amazon EC2インスタンスのUserDataパラメータに資格情報を追加します。", correct: false}
      , {description: "設定ファイルを使用して、アクセスと秘密鍵をAmazon EC2インスタンスに格納します。", correct: false}
      , {description: "アプリケーションに直接アクセスキーと秘密鍵を指定します。", correct: false}
      , {description: "適切な権限を持つインスタンスプロファイルを使用してAmazon EC2インスタンスをプロビジョニングします。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS Lambdaで、タスク管理システム用にAmazon DynamoDBに格納されたデータにビジネスロジックとアクセスを提供する一連のマイクロサービスを実行しています。 新しいモバイルアプリケーションをサポートするためにトラフィックに合わせて拡張する、これらのマイクロサービス用に明確に定義されたRESTfulアプリケーションプログラムインターフェイス（API）を作成する必要があります。 必要なRESTful APIを作成するのにどのAWSクラウドサービスを使用できますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Kinesis", correct: false}
      , {description: "Amazon APIゲートウェイ", correct: true}
      , {description: "Amazon Cognito", correct: false}
      , {description: "Amazon Elastic Compute Cloud（Amazon EC2）コンテナレジストリ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "WordPressのWebサイトは、Auto Scalingを活用して高可用性を実現するAmazon EC2インスタンスにホストされています。 WordPressサイトのコンテンツがスケールアップおよびスケールダウンイベントによって確実に維持されるようにするには、複数のAmazon EC2インスタンス間で共有される共通のファイルシステムが必要です。 どのAWSクラウドサービスがこの要件を満たすことができますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon CloudFront", correct: false}
      , {description: "Amazon ElastiCache", correct: false}
      , {description: "Amazon Elastic File System（Amazon EFS）", correct: true}
      , {description: "Amazon Elastic Beanstalk", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "個々のAmazon Elastic Compute Cloud（Amazon EC2）インスタンスからセッション状態情報を移動するようにアプリケーションを変更して、自動スケーリングによって提供される弾力性とコストの利点を活用します。 次のAWSクラウドサービスのどれがセッション状態情報を保存するための代替手段として最も適していますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon DynamoDB", correct: true}
      , {description: "Amazon Redshift", correct: false}
      , {description: "Amazon Storage Gateway", correct: false}
      , {description: "Amazon Kinesis", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "メディア共有アプリケーションは、非常に短い時間で非常に大量のデータを生成しています。 バックエンドサービスは大量のトランザクションを管理できません。 バックエンドサービスへのトランザクションの流れを管理する方法は何か？"
    , multiple_answer: false
    , answers: [
      {description: "インバウンドトランザクションをAmazon Relational Database Service（Amazon RDS）インスタンスに格納し、バックエンドサービスが時間の許す限り取得できるようにします。", correct: false}
      , {description: "Amazon Simple Queue Service（Amazon SQS）キューを使用してインバウンドトランザクションをバッファリングします。", correct: true}
      , {description: "Amazon Simple Notification Service（Amazon SNS）トピックを使用してインバウンドトランザクションをバッファリングします。", correct: false}
      , {description: "インバウンドトランザクションをAmazon Elastic MapReduce（Amazon EMR）クラスタに格納し、バックエンドサービスが時間の許す限り取得できるようにします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "AWS Identity and Access Management（IAM）ユーザアクセスキーを管理するためのベストプラクティスはどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "アクセスコードをアプリケーションコードに直接埋め込みます。", correct: false}
      , {description: "さまざまなアプリケーションに異なるアクセスキーを使用します。", correct: true}
      , {description: "アクセスキーを定期的に回転させます。", correct: true}
      , {description: "未使用のアクセスキーは無期限に保管してください。", correct: false}
      , {description: "最も機密性の高い操作のためにマルチファクタ認証（MFA）を設定します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "アプリケーションプログラムインターフェイス（API）呼び出しと関連するイベントの履歴をAWSアカウントにスキャンするサービスを実装する必要があります。 このサービスは、未使用のアクセス許可、特権アカウントの過剰使用、異常なログインなどを検出します。 このサービスを実装するために利用できる次のAWSクラウドサービスはどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "AWS CloudTrail", correct: true}
      , {description: "Amazon Simple Storage Service（Amazon S3）", correct: true}
      , {description: "Amazon Route 53", correct: false}
      , {description: "Auto Scaling", correct: false}
      , {description: "AWS Lambda", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "政府の規制では、コンプライアンス上の理由から、会社がすべての通信を7年間維持する必要があります。 このデータを費用対効果の高い方法で保護するための最良のストレージメカニズムは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon S3", correct: false}
      , {description: "Amazon Glacier", correct: true}
      , {description: "Amazon EBS", correct: false}
      , {description: "Amazon EFS", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社は、有料サブスクリプションモデルを通じてインターネットを介して顧客にメディアコンテンツを提供します。 Amazon CloudFrontを活用して、待ち時間の少ない顧客にコンテンツを配信します。 このプライベートコンテンツを有料の加入者に安全に提供するためにどのようなアプローチを使用できますか？"
    , multiple_answer: false
    , answers: [
      {description: "有料のコンテンツにアクセスする認証済みのユーザーに、署名済みのAmazon CloudFront URLを提供します。", correct: true}
      , {description: "HTTPSリクエストを使用して、Amazon CloudFrontが視聴者にコンテンツを提供する際にオブジェクトが暗号化されていることを確認します。", correct: false}
      , {description: "有料のユーザのためにAmazon CloudFrontがメディアファイルを自動的に圧縮するように設定します。", correct: false}
      , {description: "Amazon CloudFrontジオ制限機能を使用して、国レベルですべての有料購読メディアへのアクセスを制限します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社は、アマチュアプロデューサーが短編映画をさまざまなビデオ形式にフォーマットするためのトランスコードサービスを提供しています。 どのサービスがビデオを保存するための最良のオプションを提供していますか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Glacier", correct: false}
      , {description: "Amazon Simple Storage Service (Amazon S3)", correct: true}
      , {description: "Amazon Relational Database Service (Amazon RDS)", correct: false}
      , {description: "AWS Storage Gateway", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "昨年のサイバー月曜日の1週間前に、企業のデータセンターで空調ユニットの故障が発生し、サーバーラックに洪水が発生しました。 結果として生じる停止は、貴社の重要な収益にかかります。 あなたのCIOはクラウドへの移行を義務づけましたが、データセンターにおける致命的な障害についてはまだ心配しています。 彼の懸念を和らげるためにあなたは何ができますか？"
    , multiple_answer: false
    , answers: [
      {description: "複数の可用性ゾーンにアーキテクチャを分散する。", correct: true}
      , {description: "サブネットを持つAmazon Virtual Private Cloud（Amazon VPC）を使用します。", correct: false}
      , {description: "プレースメントグループ内の処理サービスの計算を開始します。", correct: false}
      , {description: "購入処理サービスインスタンス用のリザーブドインスタンス。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon仮想プライベートクラウド（Amazon VPC）には、複数のプライベートサブネットが含まれています。 これらのプライベートサブネットのインスタンスは、インターネットを介してサードパーティの支払いアプリケーションプログラムインターフェイス（API）にアクセスする必要があります。 プライベートサブネット内のインスタンスに高可用性インターネットアクセスを提供するオプションはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "各可用性ゾーンにAWSストレージゲートウェイを作成し、同じ可用性ゾーン内のリソースがAWSストレージゲートウェイを使用するようにルーティングを設定します。", correct: false}
      , {description: "各可用性ゾーンにカスタマゲートウェイを作成し、リソースが同じ可用性ゾーン内のカスタマゲートウェイを使用するようにルーティングを設定します。", correct: false}
      , {description: "各可用性ゾーンにネットワークアドレス変換（NAT）ゲートウェイを作成し、リソースが同じ可用性ゾーン内のNATゲートウェイを使用するようにルーティングを構成します。", correct: true}
      , {description: "1つのアベイラビリティゾーンにNATゲートウェイを作成し、リソースがすべてのアベイラビリティゾーンでそのNATゲートウェイを使用するようにルーティングを設定します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ユーザがMySQL RDSをPIOPSで設定しています。 ユーザーが提供するDBストレージの最小サイズは？"
    , multiple_answer: false
    , answers: [
      {description: "1 TB", correct: false}
      , {description: "50 GB", correct: false}
      , {description: "5 GB", correct: false}
      , {description: "100 GB", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'ユーザーがMySQL RDSでPIOPSを有効にしようとしている場合、ストレージの最小サイズは100 GBにする必要があります。'
  }
  , {
    description: "Amazon ElastiCacheに関する正しい説明を選択してください。"
    , multiple_answer: false
    , answers: [
      {description: "これにより、分散メモリ内キャッシュ環境をクラウドに簡単に設定、管理、拡張することができます。", correct: true}
      , {description: "これにより、ソフトウェアをインストールした場合にのみ、キャッシュ環境を迅速に展開できます。", correct: false}
      , {description: "他のAmazon Webサービスとは統合されません。", correct: false}
      , {description: "Amazon仮想プライベートクラウド（Amazon VPC）環境では実行できません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'ElastiCacheは、クラウド内の分散メモリ内キャッシュ環境を簡単に設定、管理、および拡張できるWebサービスです。 分散キャッシュ環境の導入と管理に伴う複雑さを排除しながら、高性能でスケーラブルでコスト効率の高いキャッシュソリューションを提供します。 ElastiCacheを使用すると、ハードウェアのプロビジョニングやソフトウェアのインストールを行うことなく、キャッシュ環境を迅速に導入できます。参考：http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/WhatIs.html'
  }
  , {
    description: "ユーザは、起動設定の一部として設定されたIAMロールをどのようにリストできますか？"
    , multiple_answer: false
    , answers: [
      {description: "as-describe-launch-configs --iam-profile", correct: false}
      , {description: "as-describe-launch-configs --show-long", correct: true}
      , {description: "as-describe-launch-configs -iam-role", correct: false}
      , {description: "as-describe-launch-configs -role", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'as-describe-launch-configsは、指定された地域のAWSアカウントによって作成されたすべての起動設定パラメータを記述します。 一般に、Launch Config name、Instance Type、AMI IDなどの値を返します。設定で使用されるIAMプロファイルなどの追加パラメータが必要な場合は、コマンドを実行する必要があります。as-describe-launch-configs --show-long'
  }
  , {
    description: "非常に高いレベルの信頼性とパフォーマンスを実現するために、どのようなRAID方式がCloud Block Storageバックエンドで使用されていますか？"
    , multiple_answer: false
    , answers: [
      {description: "RAID 1（ミラー）", correct: false}
      , {description: "RAID 5（ブロックストライプ、分散パリティ）", correct: false}
      , {description: "RAID 10（ミラーリングされストライプ化されたブロック）", correct: true}
      , {description: "RAID 2（ビットレベルストライピング）", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'クラウドブロックストレージバックエンドストレージボリュームは、RAID 10方式を採用し、非常に高いレベルの信頼性とパフォーマンスを提供します。参考：http://www.rackspace.com/knowledge_center/product-faq/cloud-block-storage'
  }
  , {
    description: "ARNの大文字と小文字を区別しない一致をチェックするためにIdentity and Access Management（IAM）ポリシー内で使用できるAmazonリソース名（ARN）条件演算子はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "ArnCheck", correct: false}
      , {description: "ArnMatch", correct: false}
      , {description: "ArnCase", correct: false}
      , {description: "ArnLike", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon Resource Name（ARN）条件演算子を使用すると、キーをARNと比較してアクセスを制限する条件要素を構築できます。 例えば、ArnLikeは、ARNの大文字と小文字を区別しないマッチングです。 コロンで区切られた6つのARNコンポーネントはそれぞれ別々にチェックされ、それぞれに複数文字の一致ワイルドカード（*）または1文字の一致ワイルドカード（？）が含まれます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_ElementDescriptions.html'
  }
  , {
    description: "開発（Dev）環境とテスト環境をAWSに移行しようとしています。各環境をホストするために別々のAWSアカウントを使用することに決めました。連結決済を使用して、各口座明細をマスターAWS口座にリンクする予定です。マスターアカウントの管理者がDevアカウントとTestアカウントの両方のリソースを停止、削除、または終了するためのアクセス権を持つ方法を実装したいと考えています。この目標を達成するためのオプションを特定します。"
    , multiple_answer: false
    , answers: [
      {description: "完全な管理者権限を持つマスターアカウントでIAMユーザーを作成します。マスターアカウントからのアクセス許可を継承して、アカウント内のリソースへのマスターアカウントアクセスを許可する、クロスアカウントロールを開発アカウントとテストアカウントに作成します。", correct: false}
      , {description: "開発アカウントとテストアカウントに完全な管理者権限を与えるIAMユーザーとクロスアカウントロールをマスターアカウントに作成します。", correct: false}
      , {description: "マスターアカウントでIAMユーザーを作成する管理者のフルアクセス許可を持つ開発アカウントとテストアカウントでクロスアカウントロールを作成し、マスターアカウントにアクセスを許可します。", correct: true}
      , {description: "Consolidated Billingを使用してアカウントをリンクします。これにより、MasterアカウントのIAMユーザーは、DevアカウントとTestアカウントのリソースにアクセスできます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたの会社は、AWS上でソーシャルメディアサイトの大規模な公表を行う準備が整いました。 このWebサイトは、複数AZ RDS MySQL Extra Large DBインスタンスを使用して、複数の可用性ゾーンに展開されたEC2インスタンス上で実行されています。 このサイトは、毎秒の読み取りと書き込みの回数が非常に多く、最終的な一貫性モデルに依存しています。 包括的なテストの後で、RDS MySQLに関する読解競合があることがわかります。 これらの要件を満たすための最良のアプローチはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "各可用性ゾーンで実行されているElastiCacheインメモリキャッシュを展開する", correct: true}
      , {description: "複数のRDS MySQLインスタンスに負荷を分散するシャーディングの実装", correct: false}
      , {description: "RDS MySQLインスタンスサイズを大きくし、プロビジョニングされたIOPSを実装する", correct: true}
      , {description: "各可用性ゾーンにRDS MySQL読み取りレプリカを追加する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ユーザーは、PIOPSボリュームにEBS最適化インスタンスをプロビジョニングしました。 一般的に言えば、ユーザーが経験した帯域幅をI/Oチャンクで測定する必要があるのはAWSですか？"
    , multiple_answer: false
    , answers: [
      {description: "128 KB", correct: false}
      , {description: "256 KB", correct: true}
      , {description: "64 KB", correct: false}
      , {description: "32 KB", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IOPSは1秒当たりの入出力操作です。 Amazon EBSは1秒あたりの各I / O操作（つまり256 KB以下）を1 IOPSとして測定します。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html'
  }
  , {
    description: "PollForTaskアクションがAWSデータパイプラインのタスクランナーによって呼び出されたときの役割は何ですか"
    , multiple_answer: false
    , answers: [
      {description: "パイプライン定義を取得するために使用されます。", correct: false}
      , {description: "タスクランナーの進捗状況をAWSデータパイプラインに報告するために使用されます。", correct: false}
      , {description: "AWSデータパイプラインから実行するタスクを受け取るために使用されます。", correct: true}
      , {description: "タスクランナーがタスクを完了したときにAWSデータパイプラインに結果を通知するために使用されます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'タスクランナーは、AWSデータパイプラインから実行するタスクを受け取るためにPollForTaskを呼び出します。 タスクが作業キュー内で準備されている場合、PollForTaskはすぐに応答を返します。 キュー内で使用できるタスクがない場合、PollForTaskはロングポーリングを使用し、最大90秒間ポーリング接続を保持します。この間、新規にスケジュールされたタスクがタスクエージェントに渡されます。 リモートワーカーは、同じワーカーグループで応答を受信するまでPollForTaskを再度呼び出さないでください。これは最大90秒かかることがあります。参照：http://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PollForTask.html'
  }
  , {
    description: "組織は、Elastic Beanstalkを使用して拡張性の高いアプリケーションを設定しています。 彼らは、Elastic Load Balancing（ELB）とパブリックサブネットとプライベートサブネットを持つVirtual Private Cloud（VPC）を使用しています。 彼らは以下の要件を持っています：<br/>" +
"すべてのEC2インスタンスにはプライベートIPが必要です。<br/>" + 
"すべてのEC2インスタンスは、ELBを介してデータを受け取る必要があります。<br/>" + 
"これらのうちどれがこのセットアップでは必要ないでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "パブリックサブネットのみを使用してEC2インスタンスを起動します。", correct: true}
      , {description: "すべての着信トラフィックをELBからEC2インスタンスにルーティングするルーティングルールを作成します。", correct: false}
      , {description: "ELBとNATをパブリックサブネットの一部としてのみ構成します。", correct: false}
      , {description: "EC2インスタンスからのすべての発信トラフィックをNAT経由でルーティングするルーティングルールを作成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon仮想プライベートクラウド（Amazon VPC）を使用すると、ユーザーはAmazon Web Services（AWS）クラウドのプライベートな独立したセクションで仮想ネットワーキング環境を定義できます。ユーザーは仮想ネットワーキング環境を完全に制御できます。組織がAmazon EC2インスタンスにプライベートIPアドレスを要求している場合は、各可用性ゾーンにVPC用のパブリックサブネットとプライベートサブネットを作成する必要があります（これはAWS Elastic Beanstalkの要件です）。組織は公共のサブネットにELBやNATなどのパブリックリソースを追加し、AWS Elastic Beanstalkは固有の弾性IPアドレス（静的なパブリックIPアドレス）を割り当てます。組織は、Amazon EC2インスタンスをプライベートサブネットで起動し、AWS Elastic Beanstalkがルーティング不可能なプライベートIPアドレスを割り当てるようにする必要があります。組織は、次のルールを使用してルートテーブルを設定する必要があります。すべての着信トラフィックをELBからEC2インスタンスにルーティングします。 NAT経由でEC2インスタンスからのすべての発信トラフィックをルーティングします。参照：http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo-vpc.html'
  }
  , {
    description: "AWS OpsWorksの仮想プライベートクラウド（VPC）で作成されたスタックについて、どのステートメントが真実ではないのですか？"
    , multiple_answer: false
    , answers: [
      {description: "インスタンスがインターネットと通信できないサブネットは、パブリックサブネットと呼ばれます。", correct: true}
      , {description: "インスタンスがVPC内の他のインスタンスとしか通信できず、インターネットと直接通信できないサブネットは、プライベートサブネットと呼ばれます。", correct: false}
      , {description: "スタック内のすべてのインスタンスは、Amazon LinuxまたはUbuntu Linuxリポジトリなど、オペレーティングシステムが依存するパッケージリポジトリにアクセスできる必要があります。", correct: false}
      , {description: "あなたのアプリとカスタムCookbookレポジトリは、スタック内のすべてのインスタンスでアクセス可能でなければなりません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS OpsWorksでは、仮想プライベートクラウド（VPC）でスタックのインスタンスを作成することで、スタックのインスタンスへのユーザーアクセスを制御できます。たとえば、ユーザーがスタックのアプリケーションサーバーまたはデータベースに直接アクセスするのを望まず、すべてのパブリックトラフィックをElastic Load Balancer経由で転送する必要があるとします。 VPCは1つまたは複数のサブネットで構成され、各サブネットには1つまたは複数のインスタンスが含まれます。各サブネットには、宛先IPアドレスに基づいて発信トラフィックを送信する関連ルーティングテーブルがあります.VPC内のインスタンスは、通常、サブネットに関係なく相互に通信できます。インスタンスがインターネットと通信できるサブネットは、パブリックサブネットと呼ばれます。サブネットそのインスタンスはVPC内の他のインスタンスとしか通信できず、インターネットと直接通信できないものをプライベートサブネットと呼びます.AWS OpsWorksでは、プライベートサブネット内のインスタンスを含むスタック内のすべてのインスタンスが次のエンドポイント：AWS OpsWorksサービス、https://opsworks-instance-service.us-east-1.amazonaws.com .Amazon S3指定したオペレーティングシステムに応じて、Amazon LinuxまたはUbuntu 12.04 LTSのパッケージリポジトリ。あなたのアプリとカスタム料理のレポジトリ。参照：http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-vpc.html#workingstacksvpc-basics'
  }
  , {
    description: "SAMLトークンで発行されたクレームを編集する必要がある理由は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "NameIdentifierのクレームは、ADに格納されているユーザー名と同じであってはなりません。", correct: true}
      , {description: "認証は一貫して失敗します。", correct: false}
      , {description: "NameIdentifierクレームはクレームURIと同一であってはならない。", correct: false}
      , {description: "NameIdentifierクレームは、ADに格納されているユーザー名と同じでなければなりません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '名前識別子の主張は、ADに格納されているユーザー名と同じにすることはできません。アプリには、異なるURIsの参照セットが必要です。参照：https://azure.microsoft.com/en-us/documentation/articles/active-directory-saml-claimscustomization/'
  }
  , {
    description: "Amazon SNSに関しては、以下のサポートされているプッシュ通知サービスのいずれかを使用して、モバイルデバイスに通知メッセージを送信することができます。サポートされていないものはどれか："
    , multiple_answer: false
    , answers: [
      {description: "Microsoft Windows Mobile Messaging（MWMM）", correct: true}
      , {description: "Android向けGoogle Cloud Messaging（GCM）", correct: false}
      , {description: "Amazonデバイスメッセージング（ADM）", correct: false}
      , {description: "Appleプッシュ通知サービス（APNS）", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon SNSでは、モバイルデバイスのアプリケーションに通知メッセージを直接送信できます。モバイルエンドポイントに送信された通知メッセージは、メッセージアラート、バッジ更新、またはサウンドアラートとしてモバイルアプリに表示されます。 Microsoft Windows Mobile Messaging（MWMM）は存在せず、Amazon SNSではサポートされていません。参照：http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html'
  }
  , {
    description: "次のうちAWSデータパイプラインを使用して実行できないものはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "保存したデータに定期的にアクセスし、変換して処理し、結果を別のAWSサービスに効率的に転送します。", correct: false}
      , {description: "指定された間隔で、異なるAWS計算サービスとストレージサービスとオンプレミスデータソース間でデータを移動します。", correct: false}
      , {description: "保存されたデータに関するレポートを生成する。", correct: true}
      , {description: "耐障害性、再現性、可用性の高い複雑なデータ処理ワークロードを作成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "VPCのインターネット接続を設計しています。 Webサーバーはインターネット上で利用できる必要があります。 アプリケーションには高可用性アーキテクチャが必要です。 あなたはどのような選択肢を検討すべきですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "VPCでNATインスタンスを設定するNATインスタンス経由でデフォルトルートを作成し、すべてのサブネットに関連付けるNATインスタンスのパブリックIPアドレスを指すDNS Aレコードを設定します。", correct: false}
      , {description: "CloudFrontディストリビューションを設定し、WebサーバーのプライベートIPアドレスを指すようにオリジンを設定するCloudFrontディストリビューションにRoute53 CNAMEレコードを設定します。", correct: false}
      , {description: "すべてのWebサーバーをELBの背後に配置するRoute53 CNMIEがELB DNS名を指すように構成します。", correct: true}
      , {description: "すべてのWebサーバーにEIPを割り当てます。 ヘルスチェックとDNSフェイルオーバーを使用して、すべてのEIPでRoute53レコードセットを設定します。", correct: true}
	  , {description: "EIPでELBを構成するすべてのWebサーバーをELBの背後に配置するEIPを指すRoute53 Aレコードを構成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "政府機関のクライアントは、極秘データの一部に対して安全な暗号鍵ストレージを設定する必要があります。 あなたは、AWS CloudHSMがこれに最適なサービスであると判断します。 しかし、これが起こる前にいくつかの前提条件があるように見えます。その1つは、特定のポートが開いているセキュリティグループです。 これらのセキュリティグループに関して、以下のうち正しいものはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "ネットワークにポートが開いていないセキュリティグループ。", correct: false}
      , {description: "ポート3389（RDP用）のみがネットワークに公開されているセキュリティグループ。", correct: false}
      , {description: "ネットワークに開放されたポート22（SSH用）のみを持つセキュリティグループ。", correct: false}
      , {description: "ネットワークに開放されたポート22（SSHの場合）またはポート3389（RDPの場合）を持つセキュリティグループ。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS CloudHSMは、AWSクラウドでハードウェアセキュリティモジュール（HSM）を利用できるようにすることで、お客様に安全な暗号鍵ストレージを提供します.AWS CloudHSMは、HSMアプライアンスをプロビジョニングする前に、次の環境を必要とします。 AWS CloudHSMサービス.VPC内の1つのプライベートサブネット（インターネットゲートウェイのないサブネット）。このサブネットにはHSMアプライアンスがプロビジョニングされています.1つのパブリックサブネット（インターネットゲートウェイが接続されたサブネット）。コントロールインスタンスはこのサブネットにアタッチされます。AWSリソースへのアクセスをAWS CloudHSMに委譲するAWS IDおよびアクセス管理（IAM）の役割。SafeNetクライアントソフトウェアがインストールされているHSMアプライアンスと同じVPC内のEC2インスタンス。このインスタンスは制御インスタンスと呼ばれ、HSMアプライアンスへの接続および管理に使用されます。ポート22（SSHの場合）またはポート3389（RDPの場合）がネットワークに開放されているセキュリティグループ。このセキュリティグループはコントロールインスタンスに接続されているため、リモートからアクセスできます。'
  }
  , {
    description: "次のうち、EC2-ClassicインスタンスとEC2-VPCネットワークインターフェイスに適用されるセキュリティグループとルールの数について正しい記述はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "EC2-Classicでは、インスタンスを最大5つのセキュリティグループに関連付け、最大50のルールをセキュリティグループに追加できます。 EC2-VPCでは、ネットワークインターフェイスを最大500のセキュリティグループに関連付け、セキュリティグループに最大100のルールを追加できます。", correct: false}
      , {description: "EC2-Classicでは、インスタンスを最大500個のセキュリティグループに関連付け、最大50個のルールをセキュリティグループに追加できます。 EC2-VPCでは、ネットワークインターフェイスを最大5つのセキュリティグループに関連付け、最大100のルールをセキュリティグループに追加できます。", correct: false}
      , {description: "EC2-Classicでは、インスタンスを最大5つのセキュリティグループに関連付け、最大100のルールをセキュリティグループに追加できます。 EC2-VPCでは、ネットワークインターフェイスを最大500のセキュリティグループに関連付け、最大50のルールをセキュリティグループに追加できます。", correct: false}
      , {description: "EC2-Classicでは、インスタンスを最大500個のセキュリティグループに関連付け、最大100個のルールをセキュリティグループに追加できます。 EC2-VPCでは、ネットワークインターフェイスを最大5つのセキュリティグループに関連付け、最大50のルールをセキュリティグループに追加できます。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'セキュリティグループは、1つまたは複数のインスタンスのトラフィックを制御する仮想ファイアウォールとして機能します。 インスタンスを起動すると、1つまたは複数のセキュリティグループがインスタンスに関連付けられます。 関連付けられたインスタンスとの間でトラフィックを送受信できるようにする各セキュリティグループにルールを追加します。 EC2-Classicを使用している場合は、EC2-Classic専用に作成したセキュリティグループを使用する必要があります。 EC2-Classicでは、インスタンスを最大500個のセキュリティグループに関連付け、最大100個のルールをセキュリティグループに追加できます。 EC2-VPCを使用している場合は、VPC専用に作成されたセキュリティグループを使用する必要があります.EC2-VPCでは、ネットワークインターフェイスを最大5つのセキュリティグループに関連付け、最大50のルールをセキュリティグループに追加できます。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html'
  }
  , {
    description: "お使いのシステムでは、トラブルシューティングの処理中にダウンタイムが発生しました。 新しい管理者がいくつかのプロダクションEC2インスタンスを誤って終了したことがわかりました。 将来的に同様の状況を防ぐのに役立つ戦略はどれですか？ 管理者は、次のことができる必要があります。開発リソースの起動、停止の開始、および終了。 本番インスタンスを起動して起動します。"
    , multiple_answer: false
    , answers: [
      {description: "本番EC2終端保護を活用してインスタンスを終了することができないIAMユーザーを作成します。", correct: false}
      , {description: "特定のユーザーが本番EC2リソースを終了できないようにするIAMユーザーとともに、リソースベースのタグ付けを活用する。", correct: true}
      , {description: "EC2終端保護とマルチファクタ認証を活用します。これにより、ユーザーはEC2インスタンスを終了する前に認証を受ける必要があります", correct: false}
      , {description: "IAMユーザーを作成し、ユーザーが本番EC2インスタンスを終了できないようにするIAMロールを適用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたはAWS上で成功したマルチサイトWebアプリケーションを実行しており、マーケティング部門はアプリケーションにレポーティング層を追加するよう依頼しています。レポーティング層は、Webアプリケーションデータベースに格納されているユーザ生成情報からステータスレポートを30分間集約して公開します。現在、データベース層に複数AZ RDS MySQLインスタンスが実行されています。また、アプリケーション層とデータベース層の間にデータベースキャッシュ層としてElasticacheを実装しました。データベースにできるだけ影響を与えずにレポート層を正常に実装できるようにする答えを選択してください。"
    , multiple_answer: false
    , answers: [
      {description: "S3データベースからS3バケットにトランザクションログを継続的に送信し、S3バイト範囲要求を使用してS3バケットからレポートを生成します。", correct: false}
      , {description: "Multi-AZを介して管理されている同期レプリケートされたスタンバイRDS MySQLインスタンスを照会して、レポートを生成します。", correct: false}
      , {description: "Multi AZマスタデータベースに接続されているRDS読み取りレプリカを起動し、読み取りレプリカを照会してレポートを生成します。", correct: true}
      , {description: "ElastiCacheデータベースのキャッシュ層を照会して、レポートを生成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon Web Services（AWS）で大規模な寄付Webサイトをホストする予定です。 多くのデータベース書き込みを作成する大量の不確定量のトラフィックが予想されます。 AWSでホストされているデータベースへの書き込みをドロップしないことを確実にする。 どのサービスを使用しますか？"
    , multiple_answer: false
    , answers: [
      {description: "予測された最大書き込みスループットまでプロビジョニングされたIOPSを備えたAmazon RDS。", correct: false}
      , {description: "書き込みをキャプチャし、キューを排除してデータベースに書き込むためのAmazon Simple Queue Service（SQS）。", correct: true}
      , {description: "Amazon ElastiCacheは、書き込みがデータベースにコミットされるまで書き込みを格納します。", correct: false}
      , {description: "予想される最大書き込みスループットまでプロビジョニングされた書き込みスループットを備えたAmazon DynamoDB。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IAM内で数値条件を使用する場合、より冗長なバージョンではなく、使用可能なコンパレータの短いバージョンを使用できます。 次のうち、数値条件「NumericLessThanEquals」の短いバージョンはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "numlteq", correct: true}
      , {description: "numlteql", correct: false}
      , {description: "numltequals", correct: false}
      , {description: "numeql", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAM内で数値条件を使用する場合、より冗長なバージョンではなく、使用可能なコンパレータの短いバージョンを使用できます。 たとえば、numIteqはNumericLessThanEqualsの短いバージョンです。参照：http://awsdocs.s3.amazonaws.com/SQS/2011-10-01/sqs-dg-2011-10-01.pdf'
  }
  , {
    description: "IAMユーザーは、他のルートアカウントのバケットに属するオブジェクトに対してアクションを実行しようとしています。 AWS S3は以下のオプションのどれを検証しませんか？"
    , multiple_answer: false
    , answers: [
      {description: "オブジェクト所有者がIAMユーザーへのアクセスを提供しました。", correct: false}
      , {description: "バケット上のIAMユーザーの親からの許可", correct: true}
      , {description: "バケット所有者がIAMユーザに与える許可", correct: false}
      , {description: "IAMユーザーの親が提供する許可", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMユーザーが別のAWSユーザーのバケットに属するオブジェクトに対して何らかのアクションを実行しようとしている場合、S3はIAMユーザーの所有者が十分な許可を与えているかどうかを検証します。 また、バケットのポリシーとオブジェクト所有者によって定義されたポリシーも検証されます。参照：http://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-auth-workflow-objectoperation.html'
  }
  , {
    description: "専用インスタンスがVPCに起動されるとどうなりますか？"
    , multiple_answer: false
    , answers: [
      {description: "インスタンステナントが専用のVPCにインスタンスを起動する場合は、専用インスタンスを手動で作成する必要があります。", correct: false}
      , {description: "専用のインスタンステナントを持つVPCにインスタンスを起動すると、そのインスタンスは専用インスタンスとして作成されます。インスタンスのテナントに基づいてのみ作成されます。", correct: false}
      , {description: "インスタンステナントが専用のVPCにインスタンスを起動すると、インスタンスはインスタンスのテナントに関係なく、自動的に専用インスタンスになります。", correct: true}
      , {description: "これらのどれも真実ではありません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'インスタンスのテナンシーが専用のVPCにインスタンスを起動すると、インスタンスはインスタンスのテナントに関係なく、自動的に専用インスタンスになります。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html'
  }
  , {
    description: "プロキシソフトウェアを実行する1つのEC2インスタンスを展開し、VPC内のすべてのサブネットおよびEC2インスタンスからのトラフィックを受け入れるように設定する、EC2ホストアプリケーションから特定のドメインへの送信HTTPの接続を制限する会社のURLホワイトリストシステムを実装しています 。 ホワイトリスト構成で定義したドメインへのトラフィックのみを通過させるようにプロキシを構成します。夜間のメンテナンスウィンドウまたは10分で新しいソフトウェア更新をフェッチします。 各アップデートのサイズは約200MBで、インスタンス数は500です。VPCで定期的にアップデートを取得する数日後に、一部のマシンがメンテナンスウィンドウ内のアップデートの一部ではなく、すべてを正常にダウンロードできていないことがわかります。 これらのアップデートに使用されるダウンロードURLは、プロキシのホワイトリスト設定に正しくリストされており、インスタンス上のWebブラウザを使用して手動でアクセスできます。 何が起こっているのでしょうか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "小さすぎるEC2インスタンスタイプでプロキシを実行しているため、ネットワークスループットだけではすべてのインスタンスがアップデートをダウンロードできません。", correct: true}
      , {description: "プライベートサブネット内の十分なサイズのEC2インスタンスでプロキシを実行しており、ネットワークスループットが、サイズの小さいEC2インスタンス上で実行されているNATによって抑制されています。", correct: true}
      , {description: "影響を受けるEC2インスタンスを含むサブネットのルートテーブルは、ソフトウェア更新場所のネットワークトラフィックをプロキシに転送するように構成されていません。", correct: false}
      , {description: "プロキシを実行しているEC2インスタンスに十分なストレージを割り当てていないため、ネットワークバッファがいっぱいになり、一部の要求が失敗することがあります。", correct: false}
	  , {description: "パブリックサブネットでプロキシを実行していますが、インターネットゲートウェイ（IGW）を介して必要なネットワークスループットをサポートするのに十分なEIPを割り当てていません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Web企業は、VPCに配備された高可用性アプリケーションに外部支払いサービスを実装しようとしています。アプリケーションEC2インスタンスは公衆ELBの背後にあります。自動スケーリングは、アプリケーションが通常の負荷でトラフィックが増加するにつれてインスタンスを追加します。 Auto Scalingグループはピーク時に3倍に拡大することができます。アプリケーションインスタンスは、インターネット上の支払いサービスと通信する必要があり、通信に使用されるすべてのパブリックIPアドレスをホワイトリストに登録する必要があります。一度に許可されるホワイトリストIPアドレスは最大4つあり、API経由で追加できます。彼らはどのようにしてソリューションを設計すべきですか？"
    , multiple_answer: false
    , answers: [
      {description: "ハイアベイラビリティ用に設定された2つのNATインスタンスを介して支払いリクエストをルーティングし、MATインスタンスに接続された弾性IPアドレスをホワイトリストに登録します。", correct: false}
      , {description: "VPCインターネットゲートウェイパブリックIPをホワイトリストに登録し、インターネットゲートウェイ経由で支払い要求をルーティングします。", correct: false}
      , {description: "ELB IPアドレスをホワイトリストに登録し、ELBを介してアプリケーションサーバから支払い要求をルーティングします。", correct: false}
      , {description: "Auto Scalingグループ内のアプリケーションインスタンスにパブリックIPアドレスを自動的に割り当て、ブート時に各インスタンスのパブリックIPアドレスを支払い検証ホワイトリストAPIに追加するスクリプトを実行します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon Redshiftを使用し、dw1.8xlargeノードを展開する予定です。 この種の構成で展開する必要があるノードの最小量はいくらですか？"
    , multiple_answer: false
    , answers: [
      {description: "1", correct: false}
      , {description: "4", correct: false}
      , {description: "3", correct: false}
      , {description: "2", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon Redshiftのシングルノード構成の場合、利用可能な唯一のオプションは2つのオプションの中で最小です。 8XL超大ノードは、マルチノード構成でのみ使用できます。参照：http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html'
  }
  , {
    description: "組織には人事部門のVPCと管理部門のVPCがあります。 HR部門ではAdmin VPCで実行されているすべてのインスタンスにアクセスする必要があり、管理部門ではHR部門のすべてのリソースにアクセスする必要があります。 組織はどのようにこのシナリオを設定できますか？"
    , multiple_answer: false
    , answers: [
      {description: "AdminとHRのVPC間のVPCピアリングをセットアップします。", correct: true}
      , {description: "他のVPCのCIDRからのトラフィックを許可する両方のVPCでACLを設定します。", correct: false}
      , {description: "別のVPCのCIDRからのトラフィックを許可する各VPCでセキュリティグループを設定します。", correct: false}
      , {description: "1つのVPCのリソースを別のVPCから接続することはできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。 これにより、ユーザーは、ユーザーが定義した仮想ネットワークにAWSリソースを起動できます。 VPCピアリング接続を使用すると、プライベートIPアドレスを使用してピアVPC間で同じネットワークのようにトラフィックをルーティングできます。これは、同じまたは異なるAWSアカウントの1つのVPCが他のVPCのリソースに接続する場合に役立ちます。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-peering.html'
  }
  , {
    description: "あなたの会社はイベント登録サイトに直面している顧客を運営しています。 このサイトは、Webおよびアプリケーション層サーバーとMySQLデータベースを含む3層アーキテクチャーで構築されています。アプリケーションには通常の操作で6つのWeb層サーバーと6つのアプリケーション層サーバーが必要ですが、サーバーのキャパシティーは最低65％ MySQLデータベース。 3つのアベイラビリティゾーン（AZ）を持つ地域にこのアプリケーションを配備する場合、どのアーキテクチャが高可用性を提供しますか？"
    , multiple_answer: false
    , answers: [
      {description: "ELB（エラスティックロードバランサ）の背後にあるAuto Scaling Group内の各AZに3つのEC2（Elastic Compute Cloud）インスタンスを持つ2つのAZに展開されたWeb層と、各AZに3つのEC2インスタンスを持つ2つのAZに展開されたアプリケーション層ELBの背後にあるAuto Scaling Groupと、他のAZに読込みレプリカを配備した1つのRDS（Relational Database Service）インスタンス内にあります。", correct: false}
      , {description: "ELB（エラスティックロードバランサ）の背後にあるAuto Scaling Group内の各AZに2つのEC2（Elastic Compute Cloud）インスタンスを持つ3つのAZに展開され、各AZに2つのEC2インスタンスを持つ3つのAZに展開されたアプリケーション層 ELBの背後にあるAuto Scaling Groupと、2つの他のAZで読み取り複製を使用して配備された1つのRDS（リレーショナルデータベースサービス）インスタンス。", correct: false}
      , {description: "ELB（エラスティックロードバランサ）の背後にあるAuto Scaling Group内の各AZに3つのEC2（Elastic Compute Cloud）インスタンスを持つ2つのAZに展開されたWeb層と、2つのAZに3つのEC2インスタンスが配置されたアプリケーション層 ELSと複数AZ RDS（Relational Database Service）配備の背後にある自動スケーリンググループ", correct: false}
      , {description: "ELB（エラスティックロードバランサ）の背後にあるAuto Scaling Group内の各AZに2つのEC2（Elastic Compute Cloud）インスタンスを持つ3つのAZに展開されたWeb層。 また、ELBとMulti-AZ RDS（リレーショナルデータベースサービス）展開の背後にあるAuto Sccaling Group内の各AZに2つのEC2インスタンスを持つ3つのAZに展開されたアプリケーション層。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "DougはAWSアカウントにCIDR 10.201.0.0/16のVPCを作成しました。 このVPCでは、CIDRブロック10.201.31.0/24を持つパブリックサブネットを作成しました。 コンソールから新しいEC2を起動している間、彼はこのインスタンスにプライベートIPアドレス10.201.31.6を割り当てることができません。 この問題の最も一般的な原因はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "現在、プライベートアドレスIP 10.201.31.6が別のインターフェイスに割り当てられています。", correct: true}
      , {description: "プライベートIPアドレス10.201.31.6は、IPネットワーキングの目的でAmazonによって予約されています。", correct: false}
      , {description: "プライベートIPアドレス10.201.31.6は、プラットフォームのセキュリティの一部として、AmazonインフラストラクチャのACL経由でブロックされます。", correct: false}
      , {description: "プライベートIPアドレス10.201.31.6は、関連するサブネットのIPアドレス範囲の一部ではありません", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon VPCでは、プライベートIPアドレスをインスタンスに割り当てることができます。関連するサブネットのIPアドレス範囲の一部です。AmazonでIPネットワーキング目的で予約されていません。現在、別のインターフェイスに割り当てられていません。参照：http://aws.amazon.com/vpc/faqs/'
  }
  , {
    description: "IAMポリシーのPrincipal要素は、許可または拒否する必要のある特定のエンティティを参照しますが、_______は、指定されたエンティティ以外のすべてのユーザーに変換されます。"
    , multiple_answer: false
    , answers: [
      {description: "NotPrincipal", correct: true}
      , {description: "Vendor", correct: false}
      , {description: "Principal", correct: false}
      , {description: "Action", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMポリシーステートメントに含まれているNotPrincipal要素を使用すると、特定のリソースへのアクセスが許可または拒否されたプリンシパルのリストに対する例外を指定できます。NotPrincipal要素を使用してプリンシパルのリストに対する例外を指定します。 たとえば、NotPrincipal要素に指定されたプリンシパル以外のすべてのプリンシパルへのアクセスを拒否できます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Principal'
  }
  , {
    description: "組織では、VPCを使用してRDSをセットアップしています。 組織は、RDSがインターネットからアクセス可能であることを望んでいます。 このシナリオでは、以下で説明する構成のどれを必要としませんか？"
    , multiple_answer: false
    , answers: [
      {description: "組織は、コンソール上でRDSインスタンスを一般にアクセス可能にするパラメータを有効にする必要があります。", correct: false}
      , {description: "組織は、RDS VPCセキュリティグループ内のインターネットからのアクセスを許可する必要があります。", correct: false}
      , {description: "組織は外部IPを持つサブネットグループでRDSをセットアップする必要があります。", correct: true}
      , {description: "組織は、VPC属性のDNSホスト名とDNS解決を有効にする必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。これにより、ユーザーは、ユーザーが定義した仮想ネットワークにRDSなどのAWSリソースを起動できます。サブネットは、VPCのIPアドレス範囲のセグメントで、ユーザーはセキュリティと運用上のニーズに基づいてVPCリソースのグループに割り当てることができます。 DBサブネットグループは、ユーザーがVPCで作成し、ユーザーがRDS DBインスタンスに割り当てることができるサブネット（通常はプライベート）の集合です。 DBサブネットグループを使用すると、DBインスタンスを作成するときに特定のVPCを指定できます。 RDSインスタンスがインターネットからアクセスできる必要がある場合：組織は、VPC属性、DNSホスト名、DNS解決でRDSインスタンスが有効になっていることを設定する必要があります。組織は、RDSインスタンスを一般にアクセス可能にするコンソールでパラメータを有効にする必要があります組織は、RDS VPCセキュリティグループのインターネットからのアクセスを許可する必要があります。参照：http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html'
  }
  , {
    description: "リージョンごとに許可されるVPCのデフォルトの最大数は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "5", correct: true}
      , {description: "10", correct: false}
      , {description: "100", correct: false}
      , {description: "15", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'リージョンごとに許可されるVPCの最大数は5です。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html'
  }
  , {
    description: "ユーザーが必要なポート速度を決定する必要がある場合は、AWS Direct Connectを使用するどのステップですか？"
    , multiple_answer: false
    , answers: [
      {description: "クロスコネクトの完了", correct: false}
      , {description: "仮想インターフェイスの確認", correct: false}
      , {description: "ルータ構成のダウンロード", correct: false}
      , {description: "AWSダイレクトコネクト接続要求を送信する", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Direct Connectの接続リクエストを提出するためには、下記の情報を提供する必要があります。連絡先情報、接続するAWS Direct Connectionの場所、AWS Partner Network（APN）サービスを使用している場合は、AWS Direct Connectのパートナーの詳細、必要なポート速度、1Gbpsまたは10Gbpsのいずれかです。参照：http://docs.aws.amazon.com/directconnect/latest/UserGuide/getstarted.html#ConnectionRequest'
  }
  , {
    description: "現在、Webアプリケーションを運用しています。AWS US-East地域では、このアプリケーションはEC2インスタンスとRDS Multi-AZデータベースの自動スケーリングされたレイヤー上で実行されます。ITセキュリティコンプライアンスオフィサーは、信頼性の高い耐久性のあるログあなたのEC2の変更を追跡するソリューション。 IAMとRDSリソース。ソリューションは、ログデータの整合性と機密性を保証する必要があります。どちらのソリューションをお勧めしますか？"
    , multiple_answer: false
    , answers: [
      {description: "ログを保存する新しいS3バケットと、グローバルサービスオプションが選択された新しいCloudTrailトレイルを作成します。IAMの役割を使用します。S3バケットポリシーとマルチファクタ認証（MFA）ログを保存するS3バケットで削除します。", correct: true}
      , {description: "新しいS3バケットを1つ作成して新しいCloudTrailを作成し、ログを保存するSNSを構成して管理システムにログファイル配信通知を送信するS3バケットに関するIAMロールとS3バケットポリシーを使用すると、ログが保存されます。", correct: false}
      , {description: "既存のS3バケットを使用して新しいCloudTrailトレールを作成し、ログを保存し、グローバルサービスオプションを選択します。ログを保存しているS3バケットでS3 ACLとマルチファクタ認証（MFA）を使用して削除します。", correct: false}
      , {description: "3つの新しいS3バケットを作成して、AWS管理コンソール用、AWS SDK用、コマンドラインツール用のログを格納する3つの新しいCloudTrailを作成します。ログを格納するS3バケットにIAMロールとS3バケットポリシーを使用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "次のうち、Amazon ElastiCacheがサポートするキャッシュエンジンはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon ElastiCacheはMemcachedとRedisをサポートしています。", correct: true}
      , {description: "Amazon ElastiCacheはRedisとWinCacheをサポートしています。", correct: false}
      , {description: "Amazon ElastiCacheはMemcachedとHazelcastをサポートしています。", correct: false}
      , {description: "Amazon ElastiCacheはMemcachedのみをサポートしています。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    	, explanation: 'Amazon ElastiCacheでサポートされているキャッシュエンジンは、MemcachedとRedisです。参照：http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/SelectEngine.html'
  }
  , {
    description: "顧客はSSL対応のWebアプリケーションをAWSにデプロイしており、インスタンスへのログインとAPI呼び出しを行うEC2サービス管理者と、秘密鍵を含むアプリケーションのX.509証明書に対して排他的にアクセス権を持つセキュリティ担当者との間で役割の分離を実装したいと考えています。"
    , multiple_answer: false
    , answers: [
      {description: "セキュリティ管理者が所有するS3バケットに証明書をアップロードし、EC2によってのみアクセス可能なWebサーバーの役割。", correct: false}
      , {description: "CloudHSMからブート時に証明書を取得するようにWebサーバーを設定すると、セキュリティ担当者が管理します。", correct: false}
      , {description: "Webサーバー上のシステム権限を設定して、権限セキュリティー責任者にのみ証明書へのアクセスを制限します。", correct: false}
      , {description: "IAMポリシーを設定して、証明書ストアへのアクセスをセキュリティ担当者のみに許可し、ELBのSSLを終了します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "顧客がAWSへのAWS Direct Connect接続を確立しました。 リンクはアップしており、ルートは顧客側からアドバタイズされていますが、お客様はVPC内のEC2インスタンスからデータセンターにあるサーバーに接続することはできません。 この状況を改善するための実行可能なソリューションを提供する次のオプションはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "IPsec VPN接続をターゲットとしてルートテーブルにルートを追加します。", correct: true}
      , {description: "バーチャル・ピンネイト・ゲートウェイ（VGW）へのルート伝播を可能にする。", correct: false}
      , {description: "顧客ゲートウェイ（CGW）への経路伝播を可能にする。", correct: true}
      , {description: "'route'コマンドを使用して、すべてのインスタンスのルートテーブルを変更します。", correct: false}
	  , {description: "顧客のオンプレミス環境にルートを追加して、インスタンスVPCサブネットルートテーブルを変更します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IAMの有効なAmazonリソース名（ARN）はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "aws:iam::123456789012:instance-profile/Webserver", correct: false}
      , {description: "arn:aws:iam::123456789012:instance-profile/Webserver", correct: true}
      , {description: "123456789012:aws:iam::instance-profile/Webserver", correct: false}
      , {description: "arn:aws:iam::123456789012::instance-profile/Webserver", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "eu-west-1地域で15分ごとに更新されるニュースサイトを運営しています。 このWebサイトには、Elastic Load BalancerとAmazon RDSデータベースの背後にあるAuto Scalingグループを使用する世界中の視聴者がいます。静的コンテンツはAmazon S3にあり、Amazon CloudFrontを通じて配信されます。 Auto Scalingグループは、60％のCPU使用率でスケールアップイベントをトリガーするように設定されていますが、10.000のプロビジョニングIOPSを持つAmazon RDSextraラージDBインスタンスを使用すると、そのCPU使用率は約80％です。 空きメモリは2 GBの範囲です。 ウェブ解析レポートでは、ウェブページの平均ロード時間は約1.5〜2秒ですが、SEOコンサルタントは平均ロード時間を0.5秒未満に短縮したいと考えています。 ユーザーのページ読み込み時間をどのように改善しますか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Auto Scalingグループのスケールアップトリガーを30％に下げて、より積極的にスケールを調整します。", correct: true}
      , {description: "Amazon ElastiCacheキャッシングレイヤーをアプリケーションに追加して、セッションや頻繁なDBクエリを保存する", correct: true}
      , {description: "Amazon CloudFrontの動的コンテンツサポートを設定して、サイトから再利用可能なコンテンツをキャッシュできるようにする", correct: false}
      , {description: "Amazon RDSデータベースを高メモリの大容量インスタンスに切り替える", correct: true}
	  , {description: "別の地域に2番目のインストールをセットアップし、Amazon Route 53レイテンシーベースのルーティング機能を使用して適切な地域を選択します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "EC2インスタンス上で実行されているアプリケーションを使用すると、ユーザーは事前に署名されたURLを使用してプライベートS3バケットからファイルをダウンロードできます。 URLを生成する前に、アプリケーションはS3でファイルの存在を確認する必要があります。アプリケーションがAWS認証を使用してS3バケットに安全にアクセスするにはどうすればよいですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSアカウントのアクセスキーを使用します。アプリケーションは、アプリケーションのソースコードから資格情報を取得します。", correct: false}
      , {description: "S3バケット内のオブジェクトへのリストアクセスを許可するEC2のIAMロールを作成します。役割を持つインスタンスを起動し、EC2インスタンスのメタデータから役割の資格情報を取得します。", correct: true}
      , {description: "S3バケットへのリストアクセスを許可する権限を持つアプリケーション用のIAMユーザーを作成します。アプリケーションは、アプリケーションユーザーのみに読み取りアクセスを許可する権限を持つ一時ディレクトリからIAMユーザー資格情報を取得します。", correct: false}
      , {description: "S3バケットへのリストアクセスを許可する権限を持つアプリケーション用のIAMユーザーを作成します。インスタンスをIAMユーザーとして起動し、EC2インスタンスのユーザーデータからIAMユーザーの資格情報を取得します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Elastic Beanstalkを使用して会社のWebサイトを展開し、ログファイルの回転をS3に設定しました。 Elastic Map Reduceジョブは、S3のログを定期的に分析し、CIOと共有する使用ダッシュボードを構築しています。最近、クラウドフロントを使用して動的コンテンツ配信とWebサイトを起点としたWebサイト全体のパフォーマンスが向上しました。このアーキテクチャの変更後、使用ダッシュボードでは、Webサイトのトラフィックが一桁減少したことが示されます。どのようにあなたの使用ダッシュボードを修正するのですか？"
    , multiple_answer: false
    , answers: [
      {description: "Enable Cloud Frontを使用してアクセスログをS3に配信し、それらをElastic Map Reduceジョブの入力として使用します。", correct: false}
      , {description: "Elastic Map Reduceジョブの入力としてCloud Trailをオンにし、S3のトレイルログタイルを使用します", correct: false}
      , {description: "ElasticMapReduceジョブの入力としてCloud Watch ELBメトリックを使用するようにログ収集プロセスを変更する", correct: false}
	  , {description: "ElasticMapReduceジョブへのログ配信を更新するElastic Beanstalk \"Rebuild Environment\"オプションを使用します。", correct: true}
      , {description: "ElasticMapReduceジョブへのログ配信を更新するには、Elastic Beanstalkの「Restart App server（s）」オプションを使用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IAM Secure and Scalableは、スケーラブルで安全なSAASをクライアントに提供する組織です。 彼らはAWS VPC上に別々の層としてWebサーバーとAppサーバーをホストする予定です。 組織は、自動スケーリングとロードバランサをアプリケーションサーバー（middletier）で構成することによってスケーラビリティを実装したいと考えています。 次のオプションのどれが要件に合っていますか？"
    , multiple_answer: false
    , answers: [
      {description: "ELBはインターネットに面しているので、VPC内のロードバランサとしてHAProxyをセットアップすることをお勧めします。", correct: false}
      , {description: "VPCを使ってインターネットに接続しているELBを作成し、それを使ってすべてのAppサーバーを構成します。", correct: false}
      , {description: "ユーザーはEL2をEC2-CLASSICで作成し、セキュリティのためにSSHを有効にする必要があります。", correct: false}
      , {description: "VPCを使用して内部ロードバランサを作成し、すべてのアプリケーションサーバーをそのサーバーに登録します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon仮想プライベートクラウド（Amazon VPC）を使用すると、Amazon Web Services（AWS）クラウドのプライベートな独立したセクションで仮想ネットワーク環境を定義できます。 ユーザーは仮想ネットワーキング環境を完全に制御できます。 この仮想プライベートクラウド内で、ユーザーはELBやEC2インスタンスなどのAWSリソースを起動できます。 VPCで利用できるELBには、インターネットに面したELBと内部（プライベート）ELBの2種類があります。 Appサーバーなどの内部サーバーの場合、組織はVPCに内部ロードバランサを作成し、内部ロードバランサの背後にバックエンドアプリケーションインスタンスを配置できます。 内部ロードバランサは、プライベートIPアドレスを使用するバックエンドアプリケーションインスタンスに要求をルーティングし、内部ロードバランサからの要求のみを受け入れます。参照：http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/vpc-loadbalancertypes.html'
  }
  , {
    description: "顧客がウェブサイト上のクリックストリームデータを分析して、行動分析を行うことができるようにする必要があります。 顧客がクリックしたページと広告の順序を知る必要があります。 このデータは、顧客がサイトをクリックして粘着性および広告のクリックスルーを増やすように、ページレイアウトを変更するためにリアルタイムで使用されます。 このデータのキャプションと分析の要件を満たすのはどのオプションですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon S3にURLストアでウェブログのログを記録し、Elastic MapReduceで分析する", correct: false}
      , {description: "WebクリックをAmazon Kinesisにセッションでプッシュし、Kinesisワーカーを使用して動作を分析する", correct: true}
      , {description: "Clickイベントを直接Amazon Redshiftに書き込んでからSQLで分析する", correct: false}
      , {description: "セッションごとのWebクリックをAmazon SQSキューにパブリッシュし、これらのイベントをAmazon RDSに定期的に流し込み、SQLで分析します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織は、AWS VPCでアプリケーションをホストする予定です。 組織は専用インスタンスを求めています。 しかし、AWSのコンサルタントは、設計にはいくつかの制限があるため、VPCで専用のインスタンスを使用しないことを組織に勧告しました。 以下に述べるステートメントのうち、VPCでの専用インスタンスの制限事項でないものはどれですか。"
    , multiple_answer: false
    , answers: [
      {description: "このVPCで起動されるすべてのインスタンスは常に専用のインスタンスになり、ユーザーはデフォルトのテナントモデルを使用できません。", correct: false}
      , {description: "専用テナントVPCを使用するAWS RDSはサポートしていません。", correct: false}
      , {description: "専用のテナントモデルを持つリザーブドインスタンスは使用できません。", correct: true}
      , {description: "ユーザーが専用のテナントを設定したにもかかわらず、EBSボリュームはEC2インスタンスと同じテナントハードウェア上に存在しません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon仮想プライベートクラウド（Amazon VPC）を使用すると、ユーザーはAmazon Web Services（AWS）クラウドのプライベートな独立したセクションで仮想ネットワーキング環境を定義できます。ユーザーは仮想ネットワーキング環境を完全に制御できます。専用インスタンスは、単一の顧客専用のハードウェア上の仮想プライベートクラウド（VPC）で動作するAmazon EC2インスタンスです。クライアントの専用インスタンスは、ホストハードウェアレベルで、専用インスタンスではないインスタンスから物理的に分離されます。他のAWSアカウントに属しています。 VPCの専用テナントモデルで起動されるすべてのインスタンスは、常に専用インスタンスになります。専用テナントには、RDSなどの少数のサービスをサポートしないという制限があります。 EBSでさえ、専用ハードウェア上に置かれることはありません。ただし、専用のテナントを持つリザーブドインスタンスモデルを使用することで、一部のコストを節約したり、容量を確保したりすることもできます。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html'
  }
  , {
    description: "AWSデータパイプラインはAWSデータパイプラインで管理される計算リソースをいつ終結させますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSデータパイプラインは、AWSデータパイプライン管理の計算リソースを2時間ごとに終了します。", correct: false}
      , {description: "リソースを使用する最終アクティビティが実行されているとき", correct: false}
      , {description: "AWSデータパイプラインは、AWSデータパイプライン管理の計算リソースを12時間ごとに終了します。", correct: false}
      , {description: "リソースを使用する最終アクティビティが正常に完了した場合、または失敗した場合", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'これらのリソースを使用するスケジュールされた時間の最初のアクティビティは実行準備ができており、リソースを使用する最後のアクティビティが正常に完了するか失敗した場合にそれらのインスタンスが終了します。参照：https://aws.amazon.com/datapipeline/faqs/'
  }
  , {
    description: "組織は米国でCIAのソフトウェアを作っています。 CIAはAWS上でアプリケーションをホストすることに合意しましたが、安全な環境にあります。 組織は、AWS GovCloud地域でアプリケーションをホストすることを考えています。 組織がAWS標準の地域と比較してAWS GovCloudでホスティングしているときに、以下に述べる違いのどれが正しくないのですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS GovCLoudの請求は、標準AWSアカウントとは異なるアカウントで行われます。", correct: true}
      , {description: "GovCloud地域認証はAmazon.comから分離されています。", correct: false}
      , {description: "米国人のみに対する物理的および論理的管理アクセス。", correct: false}
      , {description: "物理的に隔離されており、他のすべての地域との論理ネットワークの隔離があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS GovCloud（US）は、米国の政府機関および顧客が特定の規制要件およびコンプライアンス要件に対処することによって、敏感なワークロードをクラウドに移行できるように設計された独立したAWS地域です。 AWS GovCloud（米国）地域は、米国国際航空交通規則（ITAR）の要件に準拠しています。米国人のみへの物理的および論理的な管理アクセスの制限標準のAWSアカウントよりアクセスキーや秘密のアクセスキーなどの別個のAWS GovCloud（US）資格があります。ユーザーはIAMでサインインしますユーザー名とパスワードAWS GovCloud（米国）地域認証はAmazon.comから完全に分離されています。組織がAWS GovCloudのEC2でホストする予定の場合、AWS GovCloud請求は標準のAWSアカウントであり、別途請求されることはありません。リファレンス：http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/whatis.html'
  }
  , {
    description: "組織は、AWSを使用してスケーラブルなWebアプリケーションをホストしています。 組織は、アプリケーションを拡張可能にするためにELBと自動スケーリングを設定しました。 アプリケーションがVPCでWebアプリケーションをホストする予定があるときに、ELBのために以下に述べる記述のどれを従う必要はありませんか？"
    , multiple_answer: false
    , answers: [
      {description: "ELBとすべてのインスタンスが同じサブネットに存在する必要があります。", correct: true}
      , {description: "セキュリティグループルールとネットワークACLを設定して、VPC内のサブネット間でトラフィックをルーティングできるようにします。", correct: false}
      , {description: "インターネット側のELBは、インターネットゲートウェイに関連付けられたルートテーブルを持つ必要があります。", correct: false}
      , {description: "インターネットに直面しているELBは、パブリックサブネット内になければなりません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon仮想プライベートクラウド（Amazon VPC）を使用すると、Amazon Web Services（AWS）クラウドのプライベートな独立したセクションで仮想ネットワーキング環境を定義できます。ユーザーは仮想ネットワーキング環境を完全に制御できます。この仮想プライベートクラウド内で、ユーザーはELBやEC2インスタンスなどのAWSリソースを起動できます。 VPCで利用できるELBには、インターネットに面したELBと内部（プライベート）ELBの2種類があります。 ELBに直面しているインターネットでは、ELBをパブリックサブネットに置く必要があります。ユーザーがパブリックサブネットを作成した後、パブリックサブネットのルートテーブルをインターネットゲートウェイに関連付けて、サブネット内のロードバランサがインターネットに接続できるようにする必要があります。 ELBとインスタンスは別々のサブネットに置くことができます。ただし、インスタンスとELB間の通信を可能にするには、セキュリティグループルールとネットワークACLを設定して、VPC内のサブネット間でトラフィックをルーティングできるようにする必要があります。参照：http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/CreateVPCForELB.html'
  }
  , {
    description: "ユーザーは、VPCウィザードを使用してパブリックサブネットとプライベートサブネットを持つVPCを作成しました。 VPCのCIDRは20.0.0.0/16です。 プライベートサブネットはCIDR 20.0.0.0/24を使用します。 NATインスタンスIDはi-a12345です。 インスタンスをインターネットに接続できるようにプライベートサブネットに添付されているメインルートテーブルには、以下のエントリのどれが必要ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Destination: 20.0.0.0/0 and Target: 80", correct: false}
      , {description: "Destination: 20.0.0.0/0 and Target: i-a12345", correct: false}
      , {description: "Destination: 20.0.0.0/24 and Target: i-a12345", correct: false}
      , {description: "Destination: 0.0.0.0/0 and Target: i-a12345", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'ユーザーは、VPCを使用してサブネットを作成し、そのサブネット内でインスタンスを起動できます。 ユーザーがパブリックプライベートサブネットを作成した場合、パブリックサブネットのインスタンスはインターネットから直接受信トラフィックを受信できますが、プライベートサブネットのインスタンスは受信できません。 これらのサブネットがウィザードで作成された場合、AWSは2つのルートテーブルを作成し、サブネットにアタッチします。 メインルートテーブルには、プライベートサブネット内のすべてのインスタンスがNATを使用してインターネットに接続できる「Destination：0.0.0.0/0 and Target：i-a12345」というエントリがあります。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html'
  }
  , {
    description: "組織は、AWS VPCでWebアプリケーションをホストする予定です。 組織は法的要件のためパブリッククラウドにデータベースをホストしたくない。 どのようにこのシナリオで組織を設定できますか？"
    , multiple_answer: false
    , answers: [
      {description: "組織は、パブリックサブネットと組織のデータセンター内のデータベースにアプリケーションサーバーを計画し、それらをVPNゲートウェイに接続する必要があります。", correct: true}
      , {description: "組織は、パブリックサブネット上にアプリケーションサーバーを計画し、安全なデータ操作のためにプライベートサブネットでRDSを使用する必要があります。", correct: false}
      , {description: "組織は、アプリケーションサーバーのパブリックサブネットを使用し、ローカルゲートウェイで安全にデータにアクセスするだけでなく、アクセスするためにストレージゲートウェイを備えたRDSを使用する必要があります。", correct: false}
      , {description: "組織は、パブリック・サブネットとプライベート・サブネット内のデータベースにあるアプリケーション・サーバーを、パブリック・クラウドにはないように計画する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。ユーザーは、VPC内の要件に従ってサブネットを作成できます。 ユーザーが自分のデータセンターからVPCに接続する場合は、ハードウェアVPNアクセスを使用してデータセンターに接続するパブリックおよびVPN専用サブネットをセットアップできます。 ユーザーがウィザードでこの設定を構成すると、VPNサブネットのすべてのトラフィックをルーティングする仮想プライベートゲートウェイが作成されます。仮想プライベートゲートウェイがVPCに接続され、ユーザーがコンソールからVPCを削除すると、 ゲートウェイを削除し、VPCを削除します。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html'
  }
  , {
    description: "現在3層のeコマースWebアプリケーションがオンプレミスに導入されており、拡張性と弾力性を高めるためにAWSに移行されます。Webサーバーは現在ネットワーク分散ファイルシステムを使用して読み取り専用データを共有しています。アプリケーションサーバー層は、 ディスカバリおよびIPマルチキャストに依存する共有セッション状態データベース層は、共有ストレージクラスタリングを使用してデータベースのフォールオーバー機能を提供し、複数の読み取りスレーブを使用してすべてのサーバー上のデータを分散し、分散ファイルシステムディレクトリをオフサイト テープAWSストレージとデータベースアーキテクチャは、アプリケーションの要件を満たしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "Webサーバー：S3に読み取り専用データを格納し、ブート時にS3からルートボリュームにコピーします。 Appサーバー：DynamoDBとIPユニキャストの組み合わせを使用して状態を共有します。データベース：複数のAZ配備と1つ以上の読込みレプリカでRDSを使用します。バックアップ：Webサーバー、アプリケーションサーバー、および、データベースを、スナップショットを使用して毎週にGlacierにバックアップします。", correct: false}
      , {description: "Webサーバー：読み取り専用データをEC2 NFSサーバーに保管します。 起動時に各Webサーバーにマウントします。 Appサーバー：DynamoDBとIPマルチキャストを組み合わせて状態を共有します。 データベース：複数のAZ配備と1つ以上の読み取りレプリカでRDSを使用します。 バックアップ：AMIを介して毎週バックアップされるWebサーバーとアプリケーションサーバー。DBスナップショットを使用してバックアップされるデータベース。", correct: false}
      , {description: "Webサーバー：S3に読み取り専用データを格納し、ブート時にS3からルートボリュームにコピーします。 Appサーバー：DynamoDBとIPユニキャストの組み合わせを使用して状態を共有します。 データベース：複数のAZ配備と1つ以上の読み取りレプリカでRDSを使用します。 バックアップ：AMIを介して毎週バックアップされるWebサーバーとアプリケーションサーバー。DBスナップショットを使用してバックアップされるデータベース。", correct: true}
      , {description: "Webサーバー：S3に読み取り専用データを格納し、ブート時にS3からルートボリュームにコピーします。 Appサーバー：DynamoDBとIPユニキャストの組み合わせを使用して状態を共有します。 データベース：マルチAZ展開でRDSを使用します。 バックアップ：AMIを介して毎週バックアップされるWebサーバーとアプリケーションサーバー。DBスナップショットを使用してバックアップされるデータベース。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "真または偽：RedisのAmazon ElastiCacheレプリケーショングループでは、パフォーマンスチューニング上の理由から、レプリカグループ内のキャッシュノードの役割を変更することができます。"
    , multiple_answer: false
    , answers: [
      {description: "真、しかし、パフォーマンスは低下します。", correct: false}
      , {description: "偽", correct: false}
      , {description: "真", correct: true}
      , {description: "偽、パフォーマンスチューニングを改善するためにレプリケーショングループを再作成する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon ElastiCacheでは、レプリケーショングループは、1つの主な読み書きクラスタと、最大5つの副読取り専用クラスタ（読み取りレプリカと呼ばれる）を持つRedis Cacheクラスタの集合です。 プライマリクラスタとレプリカの1つが役割を交換しながら、レプリケーショングループ内のキャッシュクラスタの役割を変更できます。 パフォーマンスチューニングの理由から、これを行うことができます。参照：http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Replication.Redis.Groups.htm'
  }
  , {
    description: "ユーザーがPIOPSでEBSボリュームを構成しました。 ユーザーは最適なスループットを経験していません。 次のうちEBSボリュームのI / Oパフォーマンスに影響を与えない要因はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "PIOPSを超える専用インスタンスのEBS帯域幅", correct: false}
      , {description: "EBSのボリュームサイズ", correct: true}
      , {description: "EC2帯域幅", correct: false}
      , {description: "インスタンスタイプはEBSに最適化されていません", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'ユーザーが予想されるIOPSまたはプロビジョニングされたスループットに遭遇していない場合は、EC2帯域幅が制限要因ではなく、インスタンスがEBS最適化（または10ギガビットネットワーク接続を含む）で、インスタンスタイプEBS専用帯域幅がIOPS 彼が提供した以上のもの。 参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html'
  }
  , {
    description: "正しいオプションセットを選択してください。 これらは、デフォルトセキュリティグループの初期設定です。"
    , multiple_answer: false
    , answers: [
      {description: "受信トラフィックを許可しない、すべての送信トラフィックを許可する、およびこのセキュリティグループに関連付けられたインスタンスを許可する", correct: true}
      , {description: "すべての受信トラフィックを許可する、送信トラフィックを許可しない、このセキュリティグループに関連付けられたインスタンスを許可する", correct: false}
      , {description: "インバウンドトラフィックを許可しない。すべてのアウトバウンドトラフィックを許可する。このセキュリティグループに関連付けられたインスタンスが互いに通信することを許可しない。", correct: false}
      , {description: "すべての着信トラフィックを許可する。すべての発信トラフィックを許可する。このセキュリティグループに関連付けられたインスタンスが互いに通信することを許可しない。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "一般的な製品のWebトラフィックを処理するために、最高財務責任者とITディレクターは、10のm1.largeのリザーブドインスタンス（RI）を2つのアベイラビリティゾーンに均等に分散して購入しました。ルート53は、トラフィックをElastic Load Balancer 。 数か月後に製品がさらに普及し、追加容量が必要となります。結果として、会社は2つのc3.2xメディア使用率RIを購入します。ELBに2つのc3 2xlargeインスタンスを登録し、m1.largeインスタンスが 100%の容量とc2 2倍のインスタンスには、未使用の大きな容量があります。どのオプションが最も費用効果が高く、EC2の容量を最も効果的に使用していますか？"
    , multiple_answer: false
    , answers: [
      {description: "自動スケーリンググループを設定し、ELBを使用してLaunch Configurationを実行すると、Cloudwatchによってトリガーされたときに最大10個のオンデマンドm1.largeインスタンスを追加できます。 c3.2xlargeインスタンスをシャットダウンします。", correct: false}
      , {description: "2つのc3.2xlargeインスタンスでELBを設定し、最大2つの追加のc3.2xlargeインスタンスに対してオンデマンド自動スケーリンググループを使用します。 m1.largeインスタンスをシャットダウンします。", correct: true}
      , {description: "Route 53レイテンシに基づくルーティングとヘルスチェックを直接使用して、EC2 m1.largeおよびc3.2xlargeインスタンスへのトラフィックを直接ルーティングします。 ELBをシャットダウンします。", correct: false}
      , {description: "各インスタンスタイプに対して別々のELBを使用し、ルート53加重ラウンドロビンを使用してELBに負荷を分散します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "どのIAMポリシー要素でアクションのリストに対して例外を指定できますか？"
    , multiple_answer: false
    , answers: [
      {description: "NotException", correct: false}
      , {description: "ExceptionAction", correct: false}
      , {description: "Exception", correct: false}
      , {description: "NotAction", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'NotAction要素では、アクションのリストに対する例外を指定できます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_ElementDescriptions.html'
  }
  , {
    description: "次のうち、AWS Direct Connectについて正しい記述はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSダイレクトコネクトへの接続では、1ギガビットイーサネット用のダブルクラッドファイバが必要で、ポートにオートネゴシエーションが有効になっている必要があります。", correct: false}
      , {description: "AWS Direct Connectロケーションは、関連付けられている地域のAmazon Web Servicesへのアクセスを提供します。", correct: true}
      , {description: "AWS Direct Connectは、内部ネットワークを標準の50ギガビットイーサネットケーブルを介してAWS Direct Connectにリンクします。", correct: false}
      , {description: "AWS Direct Connectを使用するには、ネットワークを新しいAWS Direct Connectロケーションに配置する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Direct Connectは、標準の1ギガビットまたは10ギガビットイーサネット光ファイバケーブルを使用して、内部ネットワークをAWS Direct Connectの場所にリンクします。 AWS Direct Connectロケーションは、関連する地域のAmazon Web Servicesへのアクセスと、他の米国地域へのアクセスを提供します。 AWS Direct Connectを使用するには、ネットワークが既存のAWS Direct Connectロケーションに配置されている必要があります。AWS Direct Connectへの接続には、シングルモードファイバ、1ギガビットイーサネットの場合は1000BASE-LX（1310nm）、10ギガビットイーサネットの場合は10GBASE- 。 ポートの自動ネゴシエーションは無効にする必要があります。参照：http://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html'
  }
  , {
    description: "パブリックサブネット内のNAT（ネットワークアドレス変換）デバイスとして機能するインスタンスを起動すると、NATデバイスをプライベートサブネットのインターネット接続トラフィックのターゲットにするためにルートテーブルが変更されます。 プライベートサブネット内のインスタンスからインターネットへの発信接続を試みると、成功しません。 問題を解決する次の手順はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "NATインスタンスのSource / Destination Checkアトリビュートのディセーブル化", correct: true}
      , {description: "プライベートサブネット内のインスタンスにエラスティックIPアドレスをアタッチする", correct: false}
      , {description: "NATインスタンスに第2のエラスネットワークインターフェイス（ENI）を接続し、プライベートサブネットに配置する", correct: false}
      , {description: "プライベートサブネット内のインスタンスに第2のエラスネットワークインターフェイス（ENI）を接続し、パブリックサブネットに配置する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたの会社は大量の空中画像データをS3にアップロードしていました。以前は、あなたのオンフレム環境では、このデータを処理するために専用のサーバー群を使い、Rabbit MQを使用しました。 サーバー。 処理されると、データはテープに送られ、オフサイトで出荷されます。 マネージャーは、現行の設計を維持し、AWSアーカイブストレージとメッセージングサービスを活用してコストを最小限に抑えるように指示しました。 どちらが正しい？"
    , multiple_answer: false
    , answers: [
      {description: "ジョブメッセージを渡すためにSQSを使用すると、EC2ワーカーインスタンスがアイドル状態になったときにクラウドウォッチアラームを使用して終了します。 データが処理されたら、S3オブジェクトのストレージクラスをRedundancy Redundancy Storageに変更します。", correct: false}
      , {description: "セットアップSOSのメッセージを処理するためにスポットインスタンスを使用するキューの深さによってトリガされた自動スケーリングされたワーカーデータが処理されます。", correct: false}
      , {description: "S3オブジェクトのストレージクラスをRedundancy Redundancy Storageに変更します。 SQSのメッセージを処理するためにスポットインスタンスを使用するキューの深さによって起動される自動スケールされたワーカーをセットアップします。データが処理されたら、S3オブジェクトのストレージクラスをGlacierに変更します。", correct: false}
      , {description: "SNSを使用してジョブメッセージを渡すと、クラウドウォッチアラームが使用され、スポットワーカーインスタンスがアイドル状態になったときに終了します。 データが処理されたら、S3オブジェクトのストレージクラスをGlacierに変更します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWS IAMのインスタンスプロファイル名の最大長はどれくらいですか？"
    , multiple_answer: false
    , answers: [
      {description: "512文字", correct: false}
      , {description: "128文字", correct: true}
      , {description: "1024文字", correct: false}
      , {description: "64文字", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'インスタンスプロファイル名の最大長は128文字です。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html'
  }
  , {
    description: "IAMポリシー内で、Null状態の最後にIfExists条件を追加できますか？"
    , multiple_answer: false
    , answers: [
      {description: "はい、すべての地域ではなく、Null条件の最後にIfExists条件を追加できます。", correct: false}
      , {description: "はい、条件に応じて、Null条件の最後にIfExists条件を追加できます。", correct: false}
      , {description: "いいえ、Null条件の最後にIfExists条件を追加することはできません。", correct: true}
      , {description: "はい、Null条件の最後にIfExists条件を追加できます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMポリシー内では、IfExistsをNull条件以外の条件演算子の最後に追加することができます。ポリシーキーが要求のコンテキスト内に存在する場合、条件比較が行われる必要があることを示すために使用できます。 それ以外の場合は、無視することができます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html'
  }
  , {
    description: "EBSボリュームで使用可能なストライピングオプションのうち、次のような欠点があります。 'ボリュームからペアへのすべての書き込みをミラーリングしているため、インスタンスからEBSに必要なI / O量がRAID 0に比べて倍増します。 あなたがどれほどストライプできるかを制限しています。"
    , multiple_answer: false
    , answers: [
      {description: "Raid 1", correct: false}
      , {description: "Raid 0", correct: false}
      , {description: "RAID 1+0 (RAID 10)", correct: true}
      , {description: "Raid 2", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'RAID 1 + 0（RAID 10）では、ストライプ数を制限して、ボリュームペアへのすべての書き込みをミラーリングしているため、インスタンスからEBSに必要なI / OがRAID0に比べて2倍になります。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html'
  }
  , {
    description: "AWS Data Pipelineでは、複数の計算リソースを同じパイプラインでどのように使用できますか？"
    , multiple_answer: false
    , answers: [
      {description: "同じパイプライン上で複数の計算リソースを使用するには、定義ファイルに複数のクラスターオブジェクトを定義し、runsOnフィールドを使用して各アクティビティーに使用するクラスターを関連付けます。", correct: true}
      , {description: "複数のクラスタ定義ファイルを定義することにより、同じパイプライン上で複数の計算リソースを使用できます。", correct: false}
      , {description: "同じパイプライン上で複数の計算リソースを使用するには、アクティビティに複数のクラスターを定義します。", correct: false}
      , {description: "同じパイプライン上で複数の計算リソースを使用することはできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSデータパイプラインの複数のクラスタオブジェクトを定義ファイルに定義し、runsOnフィールドを使用して各アクティビティに使用するクラスタを関連付けることで、複数の計算リソースをAWSデータパイプラインの同じパイプラインで使用できます。 それらのアクティビティに複数のインスタンスタイプを使用することができます。参照：https://aws.amazon.com/datapipeline/faqs/'
  }
  , {
    description: "アクティビティの成功、失敗、AWS Data Pipelineの遅延など、特定のアクティビティでトリガするアラームを定義するために使用できる、次のAWSサービスはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon SES", correct: false}
      , {description: "Amazon CodeDeploy", correct: false}
      , {description: "Amazon SNS", correct: true}
      , {description: "Amazon SQS", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Data Pipelineでは、アラームオブジェクトを作成し、アクティビティオブジェクトのonFail、onSuccess、またはonLateスロットで参照することで、Amazon SNSアラームを成功、失敗、遅延などのアクティビティでトリガするよう定義できます。参照：https://aws.amazon.com/datapipeline/faqs/'
  }
  , {
    description: "組織は、スケジュールに従ってEC2インスタンスを開始および停止できるアプリケーションを持っています。 組織は、そのソフトウェアに登録されるインスタンスのMACアドレスを必要とします。 このインスタンスはEC2-CLASSICで起動します。 インスタンスが起動されるたびに、組織はどのようにMAC登録を更新できますか？"
    , multiple_answer: false
    , answers: [
      {description: "組織は、インスタンスメタデータからMACアドレスを取得し、そのスクリプトを使用してアプリケーションに登録するブートストラップスクリプトを作成する必要があります。", correct: true}
      , {description: "組織は、ユーザーデータの一部としてMACアドレスを提供する必要があります。 したがって、インスタンスが起動されるたびに、スクリプトはそのインスタンスに固定MACアドレスを割り当てます。", correct: false}
      , {description: "インスタンスのMACアドレスは決して変更されません。 したがって、毎回MACアドレスを登録する必要はありません。", correct: false}
      , {description: "AWSはインスタンスにMACアドレスを提供しません。 インスタンスIDは、ソフトウェア登録のインスタンスを識別するために使用されます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSは、オンデマンドでスケーラブルなインフラストラクチャを提供します。 AWS EC2では、オンデマンドインスタンスを起動できます。 AWSは、EC2-CLASSICで起動されたインスタンスに固定MACアドレスを提供しません。インスタンスがEC2-VPCの一部として起動される場合、固定MACを持つENIを持つことができます。 ただし、EC2-CLASSICでは、インスタンスが起動または停止するたびに新しいMACアドレスが割り当てられます。このMACを取得するには、起動時にインスタンスのメタデータを取得してそのインスタンスからMACアドレスを取得できるスクリプトを実行できます メタデータ。 MACが受信されると、組織はそのMACをソフトウェアに登録できます。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapterinstancedata.html'
  }
  , {
    description: "AWS IAMのポリシーとアクセス許可のコンテキストでは、Condition要素は______です。"
    , multiple_answer: false
    , answers: [
      {description: "IAMポリシーを作成する上で決定的に重要", correct: false}
      , {description: "任意の要素", correct: true}
      , {description: "常にnullに設定", correct: false}
      , {description: "必須要素", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Condition要素（またはConditionブロック）を使用すると、ポリシーが有効なときの条件を指定できます。Condition要素は省略可能です。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_ElementDescriptions.html'
  }
  , {
    description: "Cognito Syncは、独自のバックエンドを必要とせずにモバイルデバイス間でユーザープロファイルデータを同期するために使用できるAWSサービスです。 デバイスがオンラインの場合、データを同期できます。 プッシュシンクも設定すると、何ができるのですか？"
    , multiple_answer: false
    , answers: [
      {description: "複数のデバイス間でユーザープロファイルが利用可能であることを他のデバイスに通知する", correct: false}
      , {description: "待ち時間の少ないユーザープロファイルデータの同期", correct: false}
      , {description: "アップデートが利用可能であることを直ちに他のデバイスに通知する", correct: true}
      , {description: "オンラインデータをより速く同期させる", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Cognito Syncは、独自のバックエンドを必要とせずにモバイルデバイス間でユーザープロファイルデータを同期するために使用できるAWSサービスです。 デバイスがオンラインのときはデータを同期できます。プッシュ同期を設定している場合は、他のデバイスにアップデートが利用可能であることを直ちに通知します。参照：http://docs.aws.amazon.com/cognito/devguide/sync/'
  }
  , {
    description: "AWSラムダパーミッションモデルに関しては、ラムダ関数を作成するときに、AWSラムダがあなたのためにラムダ関数を実行すると想定できるIAMロールを指定します。 この役割は、_____役割とも呼ばれます。"
    , multiple_answer: false
    , answers: [
      {description: "構成", correct: false}
      , {description: "実行", correct: true}
      , {description: "代表団", correct: false}
      , {description: "依存", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'ラムダ関数の呼び出し方法にかかわらず、AWS Lambdaは常に関数を実行します。 ラムダ関数を作成するときに、AWSラムダがあなたの代わりにラムダ関数を実行すると想定できるIAMロールを指定します。 このロールは、実行ロールとも呼ばれます。参照：http://docs.aws.amazon.com/lambda/latest/dg/lambda-dg.pdf'
  }
  , {
    description: "ユーザーがAWS Glacierで金庫を作成しようとしています。 ユーザーは通知を有効にする必要があります。 以下のオプションのうち、ユーザがAWSコンソールからの通知を有効にすることはできますか？"
    , multiple_answer: false
    , answers: [
      {description: "GlacierはAWSコンソールをサポートしていません", correct: false}
      , {description: "アーカイブのアップロード完了", correct: false}
      , {description: "ボールトアップロードジョブ完了", correct: false}
      , {description: "Vaultインベントリ検索ジョブ完了", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSコンソールから、ユーザーは通知をAmazon Simple Notification Service（SNS）に送信するように設定できます。 ユーザーは、Vault Inventory Retrieval Job CompleteやArchive Retrieval Job Completeなどの通知をトリガーする特定のジョブを選択できます。参照：http://docs.aws.amazon.com/amazonglacier/latest/dev/configuring- notificationsconsole.html'
  }
  , {
    description: "アプリケーションはデータ変換サービスを提供します。 変換されるデータを含むファイルは、まずAmazon S3にアップロードされ、スポットEC2インスタンスのフリートによって変換されます。 あなたのプレミアム顧客が提出したファイルは、最高の優先順位で変換されなければなりません。 どのようにこのようなシステムを実装する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "優先レベルを定義する属性を持つDynamoDBテーブルを使用します。 変換インスタンスは、タスクの優先順位で結果をソートします。", correct: false}
      , {description: "ルート53のレイテンシに基づいたルーティングを使用して、最も優先度の高いタスクを最も近いトランスフォーメーションインスタンスに送信します。", correct: false}
      , {description: "2つのSQSキューを使用します.1つは高優先度メッセージ用、もう1つはデフォルト優先度用です。 Transformationインスタンスは最初に高優先度キューをポーリングします。 メッセージがない場合は、デフォルトの優先度キューをポーリングします。", correct: true}
      , {description: "単一のSQSキューを使用します。 各メッセージには優先レベルが含まれています。 変換は、優先度の高いメッセージを最初にポーリングします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "以下はAWS Storageサービスですか？ 2つの回答を選択"
    , multiple_answer: true
    , answers: [
      {description: "AWS Relational Database Service (AWS RDS)", correct: false}
      , {description: "AWS ElastiCache", correct: false}
      , {description: "AWS Glacier", correct: true}
      , {description: "AWS Import/Export", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "MapMySiteはAWS VPCでWebアプリケーションを設定しています。組織は、HAおよびDR要件に独自のDBインスタンスを使用する代わりに、AWSRDSを使用することを決定しました。組織はRDSアクセスを保護したいと考えています。 WebアプリケーションをRDSでどのようにセットアップする必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "1つのパブリックサブネットと1つのプライベートサブネットでVPCを作成します。 RDSがプライベートサブネットで起動されている間にpublicsubnetでアプリケーションインスタンスを起動します。", correct: false}
      , {description: "VPC内の異なるAZにある公開および2つのプライベートサブネットを設定し、サブネットグループを作成します。そのサブネットグループを使用してRDSを起動します。", correct: true}
      , {description: "ネットワークインターフェイスを作成し、2つのサブネットを接続します。そのネットワークインターフェイスをRDSに接続して、DBインスタンスを起動します。", correct: false}
      , {description: "別々のVPCを2つ作成し、1つのVPCでWebアプリケーションを起動し、別のVPCでRDSを起動し、VPCピアリングと接続します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。 これにより、ユーザーは、ユーザーが定義した仮想ネットワークにRDSなどのAWSリソースを起動できます。 サブネットは、VPCのIPアドレス範囲のセグメントで、ユーザーはセキュリティと運用のニーズに基づいてVPCリソースのグループに割り当てることができます.DBサブネットグループは、ユーザーがVPCで作成できるサブネット（通常はプライベート）の集合で、 RDS DBインスタンスに割り当てます。 DBサブネットグループを使用すると、DBインスタンスの作成時に特定のVPCを指定できます。 各DBサブネットグループには、特定のリージョン内の少なくとも2つのアベイラビリティゾーンにサブネットが必要です。参照：http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html'
  }
  , {
    description: "直接接続リンクをインターネットに直接接続することはできますか？"
    , multiple_answer: false
    , answers: [
      {description: "はい、これはあなたがそれを支払った場合に行うことができます。", correct: false}
      , {description: "はい、これは特定の地域でのみ行うことができます。", correct: false}
      , {description: "はい", correct: false}
      , {description: "いいえ", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Direct Connectは、インターネットを使用してAWSクラウドサービスを利用する代わりの方法を提供するネットワークサービスです。 したがって、Direct Connectリンクはインターネットに直接接続することはできません。参照：http://aws.amazon.com/directconnect/faqs/'
  }
  , {
    description: "あなたのスタートアップは、あなたの最初の日に1日当たり10件の注文を期待する6ヶ月間を要する注文で、平均3〜4日間の生産を必要とするパーソナライズされたガジェットを販売する注文履行プロセスを実装したいと考えています。 6ヶ月後に1日当たり1000件、12ヶ月間に10,000件の注文を受け取ります。注文は、品質管理包装出荷および支払い処理のために製造工場に派遣された一貫性のある男性をチェックします。 プロセスの従業員がプロセスを繰り返すように強制する可能性があります。お客様は、注文状況や支払いの失敗などの注文に関する重大な問題について電子メールで通知されます。ケース・アーキテクチャーには、顧客データおよびオーダー用のRDS MySQLインスタンスを含むAWS Elastic Beanstalk 電子メールが確実に配信されていることを確認しながら注文履行プロセスをどのように実装できますか？"
    , multiple_answer: false
    , answers: [
      {description: "Elastic Beanstalkアプリケーションサーバーにビジネスプロセス管理アプリケーションを追加し、注文状況を追跡するためにROSデータベースを再利用することにより、Elastic Beanstalkインスタンスの1つを使用して電子メールを顧客に送信します。", correct: false}
      , {description: "最小/最大= 1のアクティビティワーカーのAuto Scalingグループと別のAutoScalinggroupのデシードインスタンスを含むSWFを使用します。deciderインスタンスを使用して顧客に電子メールを送信します。", correct: false}
      , {description: "アクティビティワーカーのAuto Scalingグループを持つSWFと、min / max = 1の別のAutoScalinggroupのdeciderインスタンスを使用して、SESを使用して顧客に電子メールを送信します。", correct: true}
      , {description: "SQSキューを使用してすべてのプロセスタスクを管理するタスクをポーリングして実行するEC2インスタンスの自動スケーリンググループを使用します。 顧客に電子メールを送信するには、SESを使用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "4つの500 GB EBSプロビジョニングIOPSボリュームが接続されたEC2インスタンスを起動しました。 EC2インスタンスはEBS-Optimizedで、EC2とEBSの間で500 Mbpsのスループットをサポートします。 4つのEBSボリュームは1つのRAID 0デバイスとして構成され、プロビジョニングされた各IOPSボリュームは4,000 IOPS（4,000 16KBの読み取りまたは書き込み）でプロビジョニングされ、合計16,000のランダムIOPSがインスタンスに与えられます。 EC2インスタンスは、最初は16,000 IOPSのランダムな読み取りおよび書き込みパフォーマンスを提供します。 その後、インスタンスの合計ランダムI / Oパフォーマンスを向上させるために、RAIDに2つの500 GB EBSプロビジョニングIOPSボリュームを2つ追加します。各ボリュームは、元の4つのような4,000のIOPにプロビジョニングされ、合計 EC2インスタンスでは24,000 IOPSです。 監視では、EC2インスタンスのCPU使用率が50％から70％に増加しましたが、インスタンスレベルで測定された合計ランダムIOPSはまったく増加しません。問題と有効な解決策は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "EBS-Optimizedスループットは、利用可能なIOPSの合計を制限します。 より大きなスループットを提供するEBSOptimizedインスタンスを使用します。", correct: false}
      , {description: "小さなブロックサイズが原因でパフォーマンスが低下し、I / Oスループットが制限されます。 64KBブロックを使用してスループットを向上させるように、デバイスドライバとファイルシステムを構成します。", correct: false}
      , {description: "標準のEBSインスタンスルートボリュームは、合計IOPSレートを制限します。 インスタンスのルートボリュームを500GB 4,000のプロビジョニングされたIOPSボリュームに変更します。", correct: true}
      , {description: "より大きいストレージボリュームは、より高いプロビジョニングIOPSレートをサポートします。 6つの各EBSボリュームのプロビジョニングされたボリュームを1TB.Eに増やします。 RAID 0は、約4つのデバイスに直線的にしかスケーリングされません。 4つのEBSプロビジョニングIOPSボリュームでRAID 0を使用しますが、各プロビジョニングIOPS EBSボリュームを6,000 IOPSに増やしてください。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "VPCでは、作成したDHCPオプションのセットを変更できますか？"
    , multiple_answer: false
    , answers: [
      {description: "はい、作成後48時間以内に一連のDHCPオプションを変更することができ、それらに関連するVPCもありません。", correct: false}
      , {description: "はい、DHCPオプションのセットは、作成した後はいつでも変更できます。", correct: false}
      , {description: "作成した後、DHCPオプションのセットを変更することはできません。", correct: true}
      , {description: "はい、作成後24時間以内に一連のDHCPオプションを変更できます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'DHCPオプションのセットを作成した後は、変更することはできません。 VPCに別のDHCPオプションセットを使用させる場合は、新しいセットを作成してVPCに関連付ける必要があります.DPCオプションをまったく使用しないようにVPCを設定することもできます。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html'
  }
  , {
    description: "あなたの顧客は、複数のWebサーバー、いくつかのアプリケーションサーバー、および小さなサーバー（50GB）のOracleデータベース情報（inthedデータベースと各種サーバーのファイルシステムの両方）で構成されるエンタープライズアプリケーションをAWSに展開することを望みます。バックアップシステムは、サーバー全体およびディスク全体のリストア、および2時間以上の復旧時間を伴う個々のファイルリストアをサポートする必要があります。彼らはデータベースとしてRDS Oracleを使用することを選択しました。バックアップ・アーキテクチャはこれらの要件を満たすでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "自動DBバックアップを使用したRDSのバックアップAMIを使用してEC2インスタンスをバックアップし、従来のエンタープライズバックアップソフトウェアを使用してファイルレベルのバックアップを提供して、S3にファイルレベルのバックアップを補完します。", correct: true}
      , {description: "複数のAZ展開を使用したRDSのバックアップAmisを使用してEC2インスタンスをバックアップし、ファイルシステムのデータをS3にコピーしてファイルレベルの復元を補完します。", correct: false}
      , {description: "毎日のDB自動バックアップを使用したRDSのバックアップEBSスナップショットを使用してEC2インスタンスをバックアップし、従来のエンタープライズバックアップソフトウェアを使用してファイルレベルのバックアップをAmazon Glacierに追加する", correct: false}
      , {description: "Oracle RMANを使用してRDSデータベースをS3にバックアップAmisを使用してEC2インスタンスをバックアップし、個別のボリューム復元用にEBSスナップショットを追加します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたのアプリケーションでは、2つのAZと複数のAZのRDSインスタンスに分散されたWeb /アプリケーションサーバーのAuto Scalingグループの前でELBを使用してデータの永続化を行っています。データベースCPUは、80％データベース上の操作は読み取りです。パフォーマンスを向上させるために、最近、単一ノードのMemcached ElastiCache Clusterを追加して、頻繁なDBクエリ結果をキャッシュしました。次の数週間で、全体のワークロードは30％増加すると予想されます。予想される追加の負荷で高可用性またはアプリケーションを維持するためにアーキテクチャ内の何かを変更する必要がありますか？どうして？"
    , multiple_answer: false
    , answers: [
      {description: "はい、キャッシュノードに障害が発生した場合、RDSインスタンスが負荷を処理できないため、2つのMemcached ElastiCache Clustersを異なるAZに配置する必要があります。", correct: true}
      , {description: "いいえ、キャッシュノードに障害が発生しても、利用可能な影響がなくてもDBから常に同じデータを取得できます。", correct: false}
      , {description: "キャッシュノードに障害が発生した場合、自動ElastiCacheノードリカバリ機能は、アベイラビリティの影響を防止します。", correct: false}
      , {description: "はい、1つのキャッシュノードに障害が発生した場合に負荷を処理するために、RDS DBマスターインスタンスと同じAZに2つのノードを持つMemcached ElastiCacheクラスタを配置する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織は、AWS VPCで管理ネットワークを設定する予定です。組織は、インターネットトラフィックとバックエンド管理トラフィックを許可するように、単一のVPCインスタンスでWebサーバーを保護しようとしています。組織は、バックエンド管理ネットワークインターフェイスが選択されたIP範囲からのみSSHトラフィックを受信できるようにする一方で、インターネットに直面しているWebサーバーはすべてのインターネットIPからのトラフィックを受信できるIPアドレスを持ちます。どのようにして組織は単一のインスタンスでWebサーバーを稼働させてこれを達成できますか？"
    , multiple_answer: false
    , answers: [
      {description: "1つのインスタンスに対して2つのIPアドレスを持つことはできません。", correct: false}
      , {description: "組織は、同じサブネットとセキュリティグループを持つ2つのネットワークインターフェイスを作成して、各ネットワークインターフェイスに個別のIPを割り当てる必要があります。", correct: false}
      , {description: "組織は、別々のサブネットを持つ2つのネットワークインターフェイスを作成し、1つのインスタンスに2つのサブネットと制御されたアクセス用のそれぞれのセキュリティグループを持たせる必要があります。", correct: true}
      , {description: "組織は、別のCIDRとセキュリティグループを持つことができる同じネットワークインターフェイスを使用して、2つの別個のサブネットでインスタンスを起動する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。これにより、ユーザーは、ユーザーが定義した仮想ネットワークにAWSリソースを起動できます。弾性ネットワークインターフェイス（ENI）は、ユーザーがVPC内のインスタンスに接続できる仮想ネットワークインターフェイスです。ユーザーは、2つの別個のネットワークインターフェイスを使用して管理ネットワークを作成できます。現在のシナリオでは、インスタンス上のセカンダリネットワークインターフェイスがパブリックに直面するトラフィックを処理し、プライマリネットワークインターフェイスがバックエンド管理トラフィックを処理し、より制限的なアクセスコントロールを持つVPC内の別のサブネットに接続する必要があります。ロードバランサの背後にあるかどうかに関わらないパブリックフェイリングインターフェイスには、インターネットからサーバーへのアクセスを許可する関連セキュリティグループがあり、プライベートフェイスインターフェイスには、許可されたIPアドレス範囲VPC内またはインターネット内、VPC内のプライベートサブネットまたは仮想プライベートゲートウェイ。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html'
  }
  , {
    description: "インメモリキャッシュはどのようにElastiCacheのアプリケーションのパフォーマンスを改善しますか？"
    , multiple_answer: false
    , answers: [
      {description: "頻繁にアクセスされるデータを含まない要求を削除することで、アプリケーションのパフォーマンスが向上します。", correct: false}
      , {description: "優れたデータベース索引付け手法を実装することにより、アプリケーションのパフォーマンスが向上します。", correct: false}
      , {description: "重要なデータをキャッシュするためにインスタンスRAMの一部を使用することにより、アプリケーションのパフォーマンスを向上させます。", correct: false}
      , {description: "遅延の小さいアクセスのために重要なデータをメモリに保存することにより、アプリケーションのパフォーマンスを向上させます。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon ElastiCacheでは、メモリー内のキャッシュによって、重要なデータをメモリに保存して、アプリケーションのパフォーマンスを向上させ、待ち時間の少ないアクセスを実現します。 キャッシュされた情報には、I / O集約型データベースクエリの結果または計算集約型の計算結果が含まれます。参照：http://aws.amazon.com/elasticache/faqs/#g4'
  }
  , {
    description: "貴社は最近、データセンターをAWS上のVPCに拡張し、必要なバーストコンピューティング能力を追加しました。ネットワークオペレーションセンターのメンバーは、AWSManagementConsoleにアクセスし、必要に応じてAmazon EC2インスタンスを管理できる必要があります。 IAMユーザーはNOCメンバーに参加し、それらのユーザーをAWS管理コンソールに再度サインインします。どのオプションがあなたのNOCメンバーのニーズを満たしますか？"
    , multiple_answer: false
    , answers: [
      {description: "OAuth 2 0を使用して一時的なAWSセキュリティ資格情報を取得し、NOCメンバーがAWS Management Consoleに署名し、簡単に証明することができるようにします。", correct: false}
      , {description: "Web Identity Federationを使用してAWS臨時セキュリティ資格情報を取得し、NOCメンバーがAWS Management Consoleにサインインできるようにします。", correct: false}
      , {description: "オンプレミスのSAML 2.0準拠アイデンティティプロバイダ（IDP）を使用して、AWSシングルサインオン（SSO）エンドポイント経由でAWS管理コンソールへのNOCメンバのアクセスを許可します。", correct: false}
      , {description: "社内のSAML 2.0-Complam Identity Provider（IDP）を使用して一時的なセキュリティクレデンシャルを取得し、NOCメンバーがAWS Management Consoleにサインインできるようにします。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ユーザーがAWS上で公開Webサイトをホストしています。ユーザーは、データベースとAWS VPC上のアプリケーションサーバーを持っています。ユーザーは、インターネットからの要求を受け取ることができないパッチアップグレードのためにインターネットに接続できるデータベースをセットアップしたいと考えています。ユーザーはこれをどのように設定できますか？"
    , multiple_answer: false
    , answers: [
      {description: "アウトバウンドトラフィックのみを許可するセキュリティグループを持つプライベートサブネット内のDBを設定します。", correct: false}
      , {description: "インバウンドデータのみを許可するセキュリティグループを持つパブリックサブネット内のDBを設定します。", correct: false}
      , {description: "ローカルデータセンターにDBを設定し、プライベートゲートウェイを使用してアプリケーションをDBに接続します。", correct: false}
      , {description: "送信用にNAT経由でインターネットに接続されているプライベートサブネットにDBをセットアップします。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。 これにより、ユーザーは、ユーザーが定義した仮想ネットワークにAWSリソースを起動できます。 AWSには、ユーザーがVPCのセキュリティを強化するために使用できる2つの機能があります。セキュリティグループとネットワークACLです。 ユーザがVPCでDBとAppの両方を設定したい場合、ユーザは1つのパブリックサブネットと1つのプライベートサブネットを作成する必要があります。DBはプライベートサブネットでホストされ、そのサブネット内のインスタンスはインターネットに到達できません。 彼のVPCでインターネットへのアウトバウンド接続を開始するが、ネットワークアドレス変換（NAT）インスタンスを使用してインターネットからの迷惑受信接続を防止する。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html'
  }
  , {
    description: "AWSからの増加許可なしに、1つの地域でユーザーが実行できるg2.2xlargeオンデマンドインスタンスの数はいくつですか？"
    , multiple_answer: false
    , answers: [
      {description: "20", correct: false}
      , {description: "2", correct: false}
      , {description: "5", correct: true}
      , {description: "10", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '一般に、AWS EC2では、オンデマンドインスタンス20個とスポットインスタンス100個を同時に実行できます。 この制限は、https://aws.amazon.com/contact-us/ec2-requestでリクエストすることで増やすことができます。 特定のタイプのインスタンスを除いて、制限は上記のものよりも低くなります。 g2.2xlargeの場合、ユーザーは一度に5つのオンデマンドインスタンスしか実行できません。参照：http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ec2'
  }
  , {
    description: "あなたの会社は、ペットの健康的なライフスタイルを促進するために家族を支援するためのバイオメトリクス情報を収集する次世代ペットカラーを開発中です。各カラーは30kbのバイオメトリックデータをJSONフォーマットで2秒ごとに処理し、健康のトレンド情報をウェブポータルを介してペット所有者や獣医に返します。管理は、次の要件を満たしている収集プラットフォームを設計することを任命しました。インバウンドバイオメトリックデータのリアルタイム分析の機能を提供するバイオメトリックデータの処理は非常に耐久性があります。弾力性と並列性データマイニングのために分析処理の結果を維持する必要があります。下で概説したアーキテクチャは、収集プラットフォームの初期要件を満たしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "S3を使用してインバウンドセンサーデータを収集し、日単位のスケジュールされたDataPipelineでS3からデータを分析し、その結果をRedshift Clusterに保存します。", correct: false}
      , {description: "AmazonのKinesisを使用して受信センサーデータを収集し、Kinesisクライアントでデータを分析し、結果をEMRを使用してRedshiftクラスターに保存します。", correct: true}
      , {description: "SQSを使用してインバウンドセンサーデータを収集し、Amazon KinesisでSQSからデータを分析し、結果をMicrosoft SQL Server RDSインスタンスに保存します。", correct: false}
      , {description: "EMRを使用してインバウンドセンサーデータを収集し、Amazon KinesisのデータをEURから分析して、私の結果をDynamoDBに返します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたの会社は、輸送中や休憩中に暗号化されなければならない数千の100 GBファイルに、何百万もの重要な取引を保存しています。アナリストは同時に、ファイルのサブセットに依存します。ファイルのサブセットは、最大5 TBのスペースを消費し、ビジネス上の意思決定を助けるためのシミュレーションを生成します。長期間のストレージおよび飛行中のデータサブセットに費用対効果の高いAWSソリューションを設計する必要があります。"
    , multiple_answer: false
    , answers: [
      {description: "Amazon Simple Storage Service（S3）を使用してサーバー側の暗号化を行い、Amazon EC2の一時ドライブのサブセットでシミュレーションを実行します。", correct: false}
      , {description: "Amazon S3をサーバー側の暗号化で使用し、Amazon EC2のメモリ内のサブセットでシミュレーションを実行します。", correct: false}
      , {description: "Amazon EMRでHDFSを使用し、Amazon EC2の一時ドライブ内のサブセットでシミュレーションを実行します。", correct: false}
      , {description: "Amazon Elastic MapReduce（EMR）でHDFSを使用し、Amazon Elastic Compute Cloud（EC2）のメモリ内のサブセットでシミュレーションを実行します。", correct: true}
      , {description: "暗号化されたAmazon Elastic Block Store（EBS）ボリュームに完全なデータセットを格納し、定期的にEC2ワークステーションに複製できるスナップショットを取得します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "非常に大規模な電子商取引サイトのセキュリティの全体的な姿勢を強化するためにあなたは雇われています。 彼らは、Webとアプリケーション層の前でELBを使用し、S3から直接提供される静的資産を持つVPCでうまく構築された多層アプリケーションを持っています。ダイナミックデータにRDSとDynamoOBの組み合わせを使用し、 EMRを使用してさらに処理するためにS3に入ります。疑わしいログエントリが見つかって、誰かが不正なアクセスを試みている疑いがあるため、懸念しています。"
    , multiple_answer: false
    , answers: [
      {description: "DirectConnectパートナーの場所でスペースをリースし、VPCへの1GDirectConnect接続を確立し、インターネット接続を確立し、ハードウェアWebアプリケーションファイアウォール（WAF）のトラフィックをフィルタすることを推奨します。 そして、トラフィックを、DirectConnect接続を介して、VPCで動作するアプリケーションに渡します。", correct: false}
      , {description: "以前に特定された敵対するソースIPを、Web層グループへの明示的なINBOUND DENY NACLとして追加する。", correct: false}
      , {description: "新しいELBを作成し、ホストベースのWAFを実行するEC2インスタンスの自動スケーリンググループを作成してWAF層を追加する新しいWAF層ELBに解決するためにRoute 53をリダイレクトするWAF層がトラフィックを現在のWeb層に渡すWeb層 セキュリティグループは、WAF層セキュリティグループからのトラフィックのみを更新するようになりました", correct: true}
      , {description: "Web層ELBからTLS 1.2以外のすべてを削除し、Advanced Protocol Filteringを有効にします。これにより、ELB自体がWAF機能を実行できるようになります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "PostgreSQL用のAmazon RDSでは、データベースの最大3TBとデータベースごとに30,000 IOPSをプロビジョニングできます。 50％の書き込みと50％の読み取りがcr1.8xlargeインスタンスで実行されているワークロードの場合、PostgreSQLの場合は25,000 IOPSを超えることができます。ただし、この制限を超えてプロビジョニングすることで、次のことを達成できます。"
    , multiple_answer: false
    , answers: [
      {description: "レイテンシが高くスループットが低い。", correct: false}
      , {description: "レイテンシが低く、スループットが高い。", correct: true}
      , {description: "高いスループットのみ。", correct: false}
      , {description: "高いレイテンシのみ。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'データベースインスタンスごとに最大3TBのストレージと30,000のIOPSをプロビジョニングできます。 50％の書き込みと50％の読み取りがcr1.8xlargeのインスタンスで実行されているワークロードでは、PostgreSQLのために25,000以上のIOPSを実現できます。 ただし、この制限を超えてプロビジョニングすると、レイテンシとスループットを向上させることができます。 実際の実現IOPSは、データベースのワークロード、インスタンスの種類、データベースエンジンの選択に基づいてプロビジョニングした金額とは異なる場合があります。参照：https://aws.amazon.com/rds/postgresql/'
  }
  , {
    description: "AWSのお客様は、公開ブログのウェブサイトを運営しています。サイトユーザーは月に2百万のblogentriesをアップロードします。平均ブログエントリーサイズは200 KBです。ブログエントリーへのアクセス率は、出版後6ヶ月で無視され、ユーザーは出版後1年のブログエントリーにほとんどアクセスしません。さらに、ブログエントリは、公開後最初の3ヶ月間に更新レートが高いため、6ヶ月後には更新されません。お客様は、CloudFrontを使用してユーザーの読み込み時間を改善したいと考えています。次のうちお客様に推奨するのはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "2つの異なるバケットにエントリを複製し、2つの別々のCloudFrontディストリビューションを作成します。ここで、S3accessはクラウドフロントIDのみに制限されています。", correct: false}
      , {description: "米国/欧州ユーザーの場合は「米国のヨーロッパ」の料金クラスを使用し、その他のユーザーの場合は「すべてのエッジの場所」を持つCloudFrontディストリビューションを作成します。", correct: false}
      , {description: "CloudFront IDのみに制限されたS3アクセスを持つCloudFront配布を作成し、CloudFrontbehaviorsで使用するためにアップロードされた月に従ってS3のブログエントリの場所を分割する。", correct: true}
      , {description: "Restrict Viewer Access Forward Query文字列をtrueに設定し、最小TTLを0に設定してCloudFrontディストリビューションを作成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWSにとって弾力性はどういう意味ですか？"
    , multiple_answer: false
    , answers: [
      {description: "摩擦を最小限に抑え、レイテンシを抑えながら、コンピューティングリソースを簡単に拡張する能力。", correct: false}
      , {description: "摩擦を最小限にして、コンピューティングリソースを容易に上下に拡大する能力。", correct: true}
      , {description: "将来の需要を想定してクラウドコンピューティングリソースを提供する能力。", correct: false}
      , {description: "最小限の摩擦でビジネス継続性イベントから回復する能力。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたのウェブサイトは、オンデマンドのトレーニングビデオをあなたの労働力に提供しています。動画は高解像度のMP4形式でアップロードされます。あなたの従業員は、ビデオの視聴にHTTPライブストリーミング（HLS）プロトコルを必要とする、提供されているタブレットを使用して、世界中で頻繁に配信されます。 Yourcompanyにはビデオトランスコーディングの専門知識はなく、コンサルタントに支払う必要がある場合もあります。高可用性とビデオ配信の品質を損なうことなく、最もコスト効率の高いアーキテクチャを実装するにはどうすればいいですか？"
    , multiple_answer: false
    , answers: [
      {description: "タスクを配布するためにSQSを使用してEC2上で実行されるビデオトランスコーディングパイプライン、およびキューの長さに応じてノードの数を調整する自動スケーリングEBSボリュームでビデオをホストし、EBSスナップショットを使用して数日後に元のファイルを増分バックアップします。 EC2からHLSのtranscodedvideosを提供するCloudFront", correct: false}
      , {description: "Elastic Transcoderを使用してオリジナルの高解像度MP4ビデオをHLSにトランスコードします。 EBSボリュームをhostvideosに、EBSスナップショットを使用して数日後に元のファイルを増分バックアップします。 EC2からのHRSトランスコードビデオを提供するCloudFront。", correct: false}
      , {description: "Elastic Transcoderを使用してオリジナルの高解像度MP4ビデオをHLSにトランスコードします。 S3は、数日後に元のファイルを氷河にアーカイブするために、ライフサイクルマネジメントでビデオをホストします。 CloudFrontはS3からのHLStranscoded動画を配信します。", correct: true}
      , {description: "タスクを配布するためにSQSを使用してEC2上で実行されるビデオトランスコーディングパイプライン、およびキューの長さに応じてノードの数を調整する自動スケーリングS3はLifecycleManagementで動画をホストし、数日後にすべてのファイルを氷河にアーカイブします。 CloudFrontは、グラシアからHLSトランスコードされた動画を配信します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon VPCでアプリケーションサーバーのネットワークインフラストラクチャを設計しています。ユーザーは、オンプレミスネットワークだけでなく、インターネットからアクセスできるすべてのアプリケーションインスタンスになります。オンプレミスネットワークは、AWS Direct Connectリンク経由でVPCに接続されています。上記の要件を満たすようにルーティングを設計する方法は？"
    , multiple_answer: false
    , answers: [
      {description: "インターネットゲートウェイ経由でデフォルトルートを使用して単一のルーティングテーブルを設定します。 AWSダイレクトコネクトのカスタマールータでデフォルト経路BGPを伝播します。ルーティングテーブルをすべてのVPCサブネットに関連付けます。", correct: true}
      , {description: "インターネットゲートウェイを経由してデフォルトルートを持つ単一のルーティングテーブルを設定します。 AWSダイレクトコネクトカスタマールータのBGP経由でオンプレミスネットワークの仕様を伝播します。ルーティングテーブルとすべてのVPCサブネットを関連付けます。", correct: false}
      , {description: "インターネットゲートウェイ経由でインターネットに接続し、VPNゲートウェイ経由でオンプレミスネットワークに接続する2つのデフォルトルートを持つ単一のルーティングテーブルを構成します。このルーティングテーブルは、VPC内のすべてのサブネットで使用します。", correct: false}
      , {description: "Configure 2つのルーティングテーブル：その上には、インターネットゲートウェイを介してデフォルトのルータがあり、その他にはVPNゲートウェイを介してadefaultルートがあります。両方のルーティングテーブルを各VPCサブネットに関連付けます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "VPC環境用のデータ漏洩防止ソリューションを設計しています。 あなたのVPCInstancesは、製品アップデートのためにインターネット上のソフトウェアデポとディストリビューションにアクセスできるようにしたいと思います。デポとディストリビューションは、サードパーティのCDN経由でURLでアクセスできます。 VPCインスタンスからインターネット上のホストへの他のアウトバウンド接続を明示的に指定したいと考えています。次のオプションのどれを検討しますか？"
    , multiple_answer: false
    , answers: [
      {description: "VPCにWebプロキシサーバを設定し、アウトバウンドアクセス用のURLベースのルールを適用するデフォルトルートを削除します。", correct: true}
      , {description: "セキュリティグループを実装し、送信ルールを設定してソフトウェアデポへのトラフィックのみを許可します。", correct: false}
      , {description: "すべてのインスタンスをプライベートVPCサブネットに移動すると、すべてのルーティングテーブルからデフォルトルートが削除され、ソフトウェアディポと配布専用のルートが追加されます。", correct: false}
      , {description: "暗黙の拒否を原則としてすべての特定の宛先にネットワークアクセス制御リストを実装します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "大規模な不動産仲介業者がオプションoを探求しています（既存のモバイルアプリケーションに費用対効果の高いロケーションベースのアラートを追加しています）。アプリケーションバックエンドインフラストラクチャは現在AWS上で稼動しています。このサービスにオプトインするユーザーは、 適切なアラートが届くようにするためには、配達時間を短くする必要があります。既存のmobileappには、米国全土で500万人のユーザーがいます。次のアーキテクチャ上の提案はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "モバイルアプリケーションは、Elastic Load BalancingとEC2インスタンスを使用してWebサービスエンドポイントにサブミットします。DynamoDBを使用して関連するオファーを保存および検索します。EC2インスタンスは、携帯キャリア/デバイスプロバイダと通信してアラートをモバイルアプリケーションにプッシュバックします。", correct: true}
      , {description: "AWS DirectConnectまたはVPNを使用してモバイルキャリアとの接続を確立するEC2インスタンスは、キャリア接続を介してモバイルアプリケーションのロケーションを受信します。RDSは、EC2インスタンスがモバイルキャリアと通信してアラートをモバイルアプリケーションにプッシュバックするために使用されます。", correct: false}
      , {description: "モバイルアプリケーションは、SQSを使用してデバイスの場所を送信します。 EC2インスタンスは、DynamoDBから関連する他のものを取得します。AWS Mobile Pushは、モバイルアプリケーションにオファーを送信するために使用されます。", correct: false}
      , {description: "モバイルアプリケーションは、AWS Mobile Pushを使用してデバイスの場所を送信します。EC2インスタンスは、DynamoDBから関連するオファーを取得します。EC2インスタンスはモバイルキャリア/デバイスプロバイダと通信し、アラートをモバイルアプリケーションにプッシュバックします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWSは、CPU使用量クレジットが付いたT2インスタンスを開始しました。 ある組織には、インスタンスを24時間稼働させ続ける職務があります。 しかし、この組織は、午前11時から午後12時の間にのみ使用率が高くなります。 組織はこの目的でT2小規模インスタンスを使用する予定です。2012年1月以降に複数のインスタンスが既に稼働している場合は、T2インスタンスを起動しながら以下のオプションを実装する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "組織は、T2インスタンスを起動する前に、まずEC2-VPCプラットフォームに移行する必要があります。", correct: false}
      , {description: "T2インスタンスを起動するとき、組織はEC2-VPCプラットフォームを持っていないので、このアカウントは新しいAWSアカウントを作成する必要があります。", correct: false}
      , {description: "VPCを作成し、そのVPCのサブネットの1つの一部としてT2インスタンスを起動します。", correct: true}
      , {description: "T2インスタンスを起動するとき、組織はEC2-VPCをプラットフォームとして選択する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。 ユーザーはVPC内の要件に従ってサブネットを作成できます.AWSアカウントは、ユーザーがAWSアカウントを作成した時期と使用している地域に応じてEC2-CLASSICとEC2-VPCの2つのプラットフォームを提供します。 ユーザーが2013-12-04の後にAWSアカウントを作成した場合、EC2-VPCのみがサポートされます。このシナリオでは、アカウントは必須の日付より前になっているため、サポートされているプラットフォームはEC2-CLASSICになります。 T2インスタンスはVPCの一部としてのみ起動できるため、VPCを作成する必要があります。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html'
  }
  , {
    description: "MikeはExamKiller.comのクラウドコンサルタントに任命されました。 ExamKillerには、米国東部地域で以下のVPCセットアップがあります。CIDRブロック10.10.0.0/16を持つVPC、CIDRブロック10.10.1.0/24Aを持つVPCのサブネット、CIDRブロック10.40.0.0/16を持つVPC、そのサブネットCIDRブロック10.40.1.0/24ExamKiller.comのVPCは、CIDRblock1 0.10.1.0/24のサブネットとCIDRブロック10.40.1.0/24の別のサブネットの2つのサブネット間のネットワーク接続を確立しようとしています。 MikeがExamKiller.comに推奨するソリューションはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "2つの仮想プライベートゲートウェイを作成し、それぞれのVPCで1つを構成します。", correct: false}
      , {description: "2つのインターネットゲートウェイを作成し、各VPCに1つずつ接続します。", correct: false}
      , {description: "両方のVPC間のVPCピアリング接続を作成します。", correct: true}
      , {description: "各サブネットに1つのEC2インスタンスを作成し、両方のインスタンスにElastic IPを割り当て、両方のEC2インスタンス間にセットアップサイト間VPN接続を設定します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'VPCピアリング接続は、2つのVPC間のネットワーク接続で、プライベートIPアドレスを使用してトラフィックをルーティングできます。 いずれかのVPCのEC2インスタンスは、同じネットワーク内にあるかのように互いに通信できます。 自分のVPC間でVPCピアリング接続を作成することも、単一のリージョン内の別のAWSアカウントでVPCとの接続を作成することもできます.AWSはVPCの既存のインフラストラクチャを使用してVPCピアリング接続を作成します。 それはゲートウェイでもVPN接続でもなく、物理ハードウェアの別の部分に依存しません。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-peering.html'
  }
  , {
    description: "あなたはモバイルスリープトラッキングアプリケーションを運営する会社の新しいITアーキテクトです。夜間にアクティブにすると、モバイルアプリは5分ごとに1キロバイトの収集データポイントを送信します。バックエンドはユーザーを認証し、データポイントをAmazon DynamoDBテーブルに書き出します。毎朝、テーブルをスキャンして昨夜のデータをユーザごとに抽出して集計し、結果をAmazon S3に保存します。ユーザーには、Amazon SNSモバイルプッシュ通知を介して、新しいデータが利用可能であることが通知されます。これは解析され、モバイルアプリによって視覚化されます。現在、ほとんどが北米を拠点とする約100,000人のユーザーを抱えています。バックエンドシステムのアーキテクチャあなたは何をお勧めしますか？ 2つの回答を選択"
    , multiple_answer: true
    , answers: [
      {description: "Amazon.comに保存されているJSONファイルの代わりに、モバイルアプリにAmazon DynamoDBに直接アクセスしてください。", correct: true}
      , {description: "Amazon DynamoDBとAmazonS3の両方に代わるAmazon Redshiftクラスタにデータを直接書き込みます。", correct: false}
      , {description: "Amazon SQSキューを導入し、Amazon DynamoDBテーブルへの書き込みをバッファし、プロビジョニングされた書き込みスループットを削減します。", correct: false}
      , {description: "Amazon Elasticacheを導入して、Amazon DynamoDBテーブルからの読み取りをキャッシュし、プロビジョニングされた読み取りスループットを削減します。 新しいAmazon DynamoDBテーブルを毎日作成し、そのデータがAmazon S3以降の前日にドロップします。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "オブジェクトをAmazon S3に置くと、オブジェクトが正常に保存されたという表示は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "HTTP 200結果コードとMD5チェックサムが一緒に取られて、操作が成功したことを示します。", correct: true}
      , {description: "Amazon S3は99.999999999％の耐久性のために設計されています。 したがって、データが挿入されたことを確認する必要はありません。", correct: false}
      , {description: "成功コードがS3オブジェクトメタデータに挿入される。", correct: false}
      , {description: "各S3アカウントには、_s3_logsという名前の特殊なバケットがあります。 成功コードは、このbucketwithatimestampとchecksumに書き込まれます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織は、DCをVPNゲートウェイを使用してAWSVPCに接続することで、データセンターを拡張する予定です。 組織は、動的にルーティングされるVPN接続を設定しています。 次の回答のうち、この設定をセットアップする必要はありません。"
    , multiple_answer: false
    , answers: [
      {description: "Cisco ASA、Juniper Jシリーズ、Juniper SSG、Yamahaなどのカスタマーゲートウェイのタイプ。", correct: false}
      , {description: "組織がVPCへのVPN接続を介してアドバタイズするためのエラスティックIP範囲。", correct: true}
      , {description: "カスタマゲートウェイの外部インターフェイスのインターネットルーティング可能なIPアドレス（静的）。", correct: false}
      , {description: "ボーダーゲートウェイプロトコル（BGP）顧客ゲートウェイの自律システム番号（ASN）。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon仮想プライベートクラウド（Amazon VPC）を使用すると、ユーザーはAmazon Web Services（AWS）クラウドのプライベートな独立したセクションで仮想ネットワーキング環境を定義できます。ユーザーは仮想ネットワーキング環境を完全に制御できます。組織は、ネットワークをクラウド内に拡張し、AWS VPCからインターネットに直接アクセスする必要があります。このため、パブリックサブネットとプライベートサブネット、および仮想プライベートゲートウェイを使用して仮想プライベートクラウド（VPC）を設定する必要がありますIPsec VPNトンネルを介してデータセンターネットワークと通信します。この構成を設定するには、VPN接続でAmazon VPCを使用する必要があります。組織のネットワーク管理者は、物理的なアプライアンスを顧客ゲートウェイとして指定し、構成する必要があります。この構成には、以下の情報を設定する必要があります。Cisco ASA、Juniper Jシリーズ、Juniper SSG、Yamahaカスタマーゲートウェイの外部インターフェイスのインターネットルーティング可能なIPアドレス（静的）ボーダーゲートウェイプロトコル（BGP）組織が動的にルーティングされたVPN接続を作成している場合、カスタマーゲートウェイのASN（Autonomous System Number）。ユーザーが望む内部ネットワークIP範囲VPN接続経由でVPCにアドバタイズします。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html'
  }
  , {
    description: "AWS Data Pipelineをポーリングしてタスクを実行するアプリケーションを特定し、そのタスクを実行します。"
    , multiple_answer: false
    , answers: [
      {description: "タスク実行者", correct: false}
      , {description: "タスクデプロイヤ", correct: false}
      , {description: "タスクランナー", correct: true}
      , {description: "タスクオプティマイザ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'タスクランナーは、AWSデータパイプラインをポーリングしてタスクを実行するアプリケーションです.AWS Data Pipelineのタスクランナーを使用するか、カスタムのタスクランナーアプリケーションを作成することができます。タスクランナーは、タスクランナーのデフォルトの実装です AWS Data Pipelineによって提供されます。タスクランナーがインストールおよび設定されると、AWS Data Pipelineは、アクティブ化したパイプラインに関連するタスクをポーリングします。 タスクがタスクランナーに割り当てられると、そのタスクが実行され、そのステータスがAWSデータパイプラインにレポートされます。 ワークフローでデフォルト以外の動作が必要な場合は、カスタムタスクランナーにその機能を実装する必要があります。参照：http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-how-remote-taskrunnerclient.html'
  }
  , {
    description: "あなたの運勢500社はAmazon S3versusの使用を評価するTCO分析を実施していますハードウェアを増やす結果として、従業員は個人的な書類の保管のためにAmazonA3を使用するアクセス権が与えられました。次のうちどれを考慮する必要がありますか 企業のADまたはLDAPディレクトリからのシングルサインオンを組み込んだソリューションを設定し、各ユーザーのアクセスをバケット内の指定されたユーザーフォルダに限定することができますか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "フェデレーションプロキシまたはアイデンティティプロバイダの設定", correct: true}
      , {description: "AWSセキュリティトークンサービスを使用して一時的なトークンを生成する", correct: true}
      , {description: "バケット内の各フォルダにタグを付ける", correct: false}
      , {description: "IAMの役割の設定。 バケット内のフォルダーにアクセスする必要がある社内ディレクトリ内のすべてのユーザーに、一致するIAMユーザーを設定する", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon Cognitoでは、モバイルアプリは、プロバイダのSDKを使用してアイデンティティプロバイダ（IdP）で認証されます。 エンドユーザーがIdPで認証されると、IdPから返されたOAuthまたはOpenID ConnectトークンがアプリによってAmazon Cognitoに渡されます。このトークンは、ユーザーに新しい_________を返し、一時的な制限付き権限のAWS資格情報を返します。"
    , multiple_answer: false
    , answers: [
      {description: "Cognito Key Pair", correct: false}
      , {description: "Cognito API", correct: false}
      , {description: "Cognito ID", correct: true}
      , {description: "Cognito SDK", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'モバイルアプリは、プロバイダのSDKを使用してIDプロバイダ（IdP）で認証されます。 エンドユーザーがIdPで認証されると、IdPから返されたOAuthまたはOpenID ConnectトークンがアプリによってAmazon Cognitoに渡され、ユーザーの新しいCognito IDと一時的な限定特権AWSクレデンシャルが返されます。参照：http://aws.amazon.com/cognito/faqs/'
  }
  , {
    description: "あなたのウェブサイトは、オンデマンドのトレーニングビデオをあなたの労働力に提供しています。動画は高解像度のMP4形式でアップロードされます。あなたの従業員は、ビデオの視聴にHTTPライブストリーミング（HLS）プロトコルを必要とする、提供されているタブレットを使用して、世界中で頻繁に配信されます。 Yourcompanyにはビデオトランスコーディングの専門知識はなく、コンサルタントに支払う必要がある場合もあります。高可用性とビデオ配信の品質を損なうことなく、最もコスト効率の高いアーキテクチャを実装するにはどうすればいいですか？"
    , multiple_answer: false
    , answers: [
      {description: "EC2でSQSを使用してタスクを配布し、Auto Scalingを使用してキューの長さに応じてノード数を調整するビデオトランスコーディングパイプライン。 EBSボリュームでビデオをホストし、EBSスナップショットを使用して数日後に元のファイルを増分バックアップします。 EC2からHLSのtranscodedvideosを提供するCloudFront", correct: false}
      , {description: "オリジナルの高解像度MP4ビデオをHLSにトランスコードするB.Elastic Transcoder。 EBSボリュームをhostvideosに、EBSスナップショットを使用して数日後に元のファイルを増分バックアップします。 EC2からの45HLSトランスコードされたビデオ。", correct: false}
      , {description: "オリジナルの高解像度MP4ビデオをHLSにトランスコードするC.Elastic Transcoder。 S3は、数日後に元のファイルを氷河にアーカイブするために、ライフサイクルマネジメントでビデオをホストします。 CloudFrontはS3からのHLStranscoded動画を配信します。", correct: true}
      , {description: "SQSを使用してEC2上で動作するビデオトランスコーディングパイプライン。タスクの自動配信とキューの長さに応じたノード数の自動調整。 S3はLifecycleManagementで動画をホストし、数日後にすべてのファイルを氷河にアーカイブします。 CloudFrontは、グラシアからHLSトランスコードされた動画を配信します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ユーザーがEBS PIOPSボリュームを使用しようとしています。 以下に挙げるオプションのどれがPIOPS EBSボリュームの正当なケースですか？"
    , multiple_answer: false
    , answers: [
      {description: "Analytics", correct: false}
      , {description: "システムのブートボリューム", correct: false}
      , {description: "Mongo DB", correct: true}
      , {description: "Log処理", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'プロビジョニングされたIOPSボリュームは、I/O集約型ワークロード、特にストレージパフォーマンスとランダムアクセスI / Oスループットの一貫性に敏感なデータベースワークロードのニーズを満たすように設計されています。 プロビジョニングされたIOPSボリュームは、I / O集約型ワークロード、特にランダムアクセスI / Oスループットのビジネスアプリケーション、NoSQL DB、RDBMSなどのデータベースワークロードにおけるストレージパフォーマンスと一貫性に敏感なデータベースワークロードなどのニーズを満たすように設計されています。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html'
  }
  , {
    description: "IAMのポリシー評価論理を適用している間に明示的な拒否が見つからない場合、執行コードは要求に適用される______の指示を探します。"
    , multiple_answer: false
    , answers: [
      {description: "キャンセル", correct: false}
      , {description: "中断", correct: false}
      , {description: "許可", correct: true}
      , {description: "有効", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '特定の要求に対して適用可能なポリシーの間に明示的な拒否が見つからない場合、IAMのPolicyEvaluation Logicは、要求が正常に完了できるかどうかを確認するための「許可」命令をチェックします。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_EvaluationLogic.html'
  }
  , {
    description: "あなたはAWS Business and Enterpriseサポートプランに加入しています。 あなたのビジネスには問題が残っており、テクニカルサポートのケースを開くには約20人のIAMユーザーが必要です。 AWS Business and Enterpriseサポートプランの下で、どのくらいの数のユーザーがテクニカルサポートのケースを開くことができますか？"
    , multiple_answer: false
    , answers: [
      {description: "5ユーザー", correct: false}
      , {description: "10ユーザー", correct: false}
      , {description: "無制限", correct: true}
      , {description: "1ユーザー", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "真または偽：Amazon ElastiCacheはRedisキー値ストアをサポートします。"
    , multiple_answer: false
    , answers: [
      {description: "True、ElastiCacheはRedisのKey-Valueストアをサポートしていますが、機能は限られています。", correct: false}
      , {description: "False、ElastiCacheはRedisのKey-Valueストアをサポートしていません。", correct: false}
      , {description: "ElastiCacheは、Redisキー値ストアをサポートしています。", correct: true}
      , {description: "False、ElastiCacheは、VPC環境にある場合のみRedisキー値ストアをサポートします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "VPC内のルーティングテーブルとネットワークACLを変更して、VPC内の他のインスタンスからDBインスタンスに到達できるようにするのは誰ですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS管理者", correct: false}
      , {description: "AWSアカウントの所有者", correct: true}
      , {description: "アマゾン", correct: false}
      , {description: "DBエンジンベンダー", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "真または偽：この時点でAmazon ElastiCacheクラスタはVPCで使用できません。"
    , multiple_answer: false
    , answers: [
      {description: "真", correct: false}
      , {description: "Trueですが、GovCloudでのみ利用できます。", correct: false}
      , {description: "Trueですが、彼らは要求に応じてのみ利用可能です。", correct: false}
      , {description: "FALSE", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたのデータ管理のビジネスロジックを指定するAWS Data Pipelineの次のコンポーネントはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "タスクランナー", correct: false}
      , {description: "パイプライン定義", correct: true}
      , {description: "AWSダイレクトコネクト", correct: false}
      , {description: "Amazonシンプルストレージサービス（Amazon S3）", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'パイプライン定義では、データ管理のビジネスロジックを指定します。参照：http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/what-isdatapipeline.html'
  }
  , {
    description: "ITインフラストラクチャの管理を担当するITオペレーションチームには4人の組織が所属しています。 組織は、各ユーザーが他のユーザーが変更できないゾーンでインスタンスを起動して管理するためのアクセス権を持つことをセットアップする必要があります。 以下で述べるオプションのどれをこれを設定するベストソリューションですか？"
    , multiple_answer: false
    , answers: [
      {description: "4つのAWSアカウントを作成し、各ユーザーに個別のアカウントへのアクセス権を付与します。", correct: false}
      , {description: "IAMユーザーを作成し、異なるサイズのインスタンスのみを起動する許可をユーザーに与えます。", correct: false}
      , {description: "4人のIAMユーザーと4人のVPCを作成し、各IAMユーザーが別々のVPCにアクセスできるようにします。", correct: false}
      , {description: "4つのサブネットを持つVPCを作成し、個々のIAMユー	ザーの各サブネットへのアクセスを許可します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ユーザーが3 GBのサイズと90 IOPSのPIOPS EBSボリュームを作成しようとしています。 AWSはボリュームを作成しますか？"
    , multiple_answer: false
    , answers: [
      {description: "いいえ、PIOPSとEBSのサイズ比が30未満です", correct: false}
      , {description: "はい、EBSとIOPSの比率が30未満です", correct: false}
      , {description: "No、EBSのサイズが4GB未満です", correct: true}
      , {description: "はい、PIOPSが100より高いので", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'プロビジョニングされたIOPS（SSD）ボリュームのサイズは、4 GiBから16 TiBの範囲で、ボリュームあたり最大20,000 IOPSをプロビジョニングできます。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes html#EBSVolumeTypes_piops'    	
  }
  , {
    description: "組織は、アプリケーションホスティング用のVPCを作成しています。 組織は、同じAZに2つのprivatesubnetsを作成し、別のゾーンに1つのサブネットを作成しました。 組織は内部ELBを持つaHAシステムを作成したいと考えています。これらのステートメントのうち、ELBの内部ELBに関しては真ですか？"
    , multiple_answer: false
    , answers: [
      {description: "ELBは、各アベイラビリティゾーンで1つのサブネットのみをサポートできます。", correct: true}
      , {description: "ELBはサブネットの選択を許可しません。 代わりに、VPCの利用可能なサブネットをすべて自動的に選択します。", correct: false}
      , {description: "ユーザーが内部ELBを作成している場合は、プライベートサブネットのみを使用する必要があります。", correct: false}
      , {description: "ELBは、ゾーンに関係なくすべてのサブネットをサポートできます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon仮想プライベートクラウド（Amazon VPC）を使用すると、ユーザーはAmazon Web Services（AWS）クラウドのプライベートな独立したセクションで仮想ネットワーキング環境を定義できます。ユーザーは仮想ネットワーキング環境を完全に制御できます。この仮想プライベートクラウド内で、ユーザーはELBやEC2インスタンスなどのAWSリソースを起動できます.VPCで利用できるELBは2つあります。インターネットフェースと内部（プライベート）ELBです。 Appサーバーなどの内部サーバーの場合、組織はVPCに内部ロードバランサを作成し、内部ロードバランサの背後にバックエンドアプリケーションインスタンスを配置できます。内部ロードバランサは、プライベートIPアドレスを使用し、内部ロードバランサからの要求のみを受け入れるバックエンドアプリケーションインスタンスに要求をルーティングします。内部ELBは、各AZ内のサブネットを1つしかサポートせず、サブネットを選択するようユーザーに求めます内部ELBを設定します。参照：http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/USVPC_creating_basic_lb.html'
  }
  , {
    description: "AWSでは、どのセキュリティ面が顧客の責任ですか？ 4つの回答を選択"
    , multiple_answer: true
    , answers: [
      {description: "セキュリティグループとACL（アクセス制御リスト）の設定", correct: true}
      , {description: "ストレージデバイスの廃止", correct: false}
      , {description: "EC2インスタンスのオペレーティングシステムでのパッチ管理", correct: true}
      , {description: "IAM資格のライフサイクル管理", correct: true}
      , {description: "リソースを計算するための物理アクセスの制御", correct: false}
      , {description: "EBS（Elastic Block Storage）ボリュームの暗号化", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "単一のVPCで顧客Webアプリケーション用の侵入検知防止（IDS / IPS）ソリューションを設計しています。インターネットからのトラフィックに対するIOS IPS保護を実装するオプションを検討しています。次のオプションのどれを検討しますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Webサーバーの前にリバースプロキシレイヤーを実装し、各リバースプロキシサーバーでIDS / IPSエージェントを構成します。", correct: true}
      , {description: "SSLリスナーを使用したElastic Load Balancingの実装Webアプリケーションの前に。", correct: false}
      , {description: "サブネットごとにインスタンスを設定して、ネットワークインターフェイスカードを混合モードに切り替え、ネットワークトラフィックを分析します。", correct: true}
      , {description: "VPCで動作している各インスタンスでIDS / IPSエージェントを実装する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IAM証明書ストアからSSL証明書を削除しようとしていますが、「Certificate：<certificate-id>がCloudFrontで使用されています」というメッセージが表示されています。 次のうち、このエラーが発生する理由はおそらくどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "SSL証明書を削除する前に、サーバー上でhttpsを設定する必要があります。", correct: false}
      , {description: "SSL証明書を削除する前に、IAMで適切なアクセスレベルを設定する必要があります", correct: false}
      , {description: "SSL証明書を削除する前に、SSL証明書をローテーションするか、カスタムSSL証明書をデフォルトのCloudFront証明書に戻す必要があります。", correct: true}
      , {description: "SSL証明書を削除することはできません。 AWSからリクエストする必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'CloudFrontは、.html、.css、.php、およびイメージファイルなどの静的および動的Webコンテンツのエンドユーザーへの配信を高速化するWebサービスです。すべてのCloudFront Webディストリビューションは、デフォルトのCloudFront証明書または カスタムSSL証明書を使用します。 SSL証明書を削除する前に、SSL証明書をローテーション（現在のカスタムSSL証明書を別のカスタムSSL証明書に置き換える）するか、カスタムSSL証明書を使用してデフォルトのCloudFront証明書を使用するように戻す必要があります。参照：http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Troubleshooting.html'
  }
  , {
    description: "Amazon ElastiCacheでは、デフォルトのキャッシュポートは次のとおりです。"
    , multiple_answer: false
    , answers: [
      {description: "Memcached 11210およびRedis 6380用。", correct: false}
      , {description: "Memcached 11211およびRedis 6380用。", correct: false}
      , {description: "Memcached 11210用、Redis 6379用。", correct: false}
      , {description: "Memcached 11211およびRedis 6379用。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon ElastiCacheでは、キャッシュクラスターの新しいポート番号を指定できます。デフォルトでは、Memcachedの場合は1211、Redisの場合は6379です。参照：http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/GettingStarted.AuthorizeAccess.html'
  }
  , {
    description: "あなたはソリューションアーキテクトとして、エンタープライズ顧客がane-commerceプラットフォームをAmazon VPC（Virtual Private Cloud）に移行するのを支援してきました。前のアーキテクトは既に3層VPCを導入しています。<br/>" +
    		"VPC: vpc-2f8bc447<br/>" + 
"IGW: igw-2d8bc445<br/>" +
"NACL: ad-208bc448<br/>" +
"Subnets and Route Tables:<br/>" +
"Web servers: subnet-258bc44d<br/>" +
"Application servers: subnet-248bc44c<br/>" +
"Database servers: subnet-9189c6f9<br/>" +
"Route Tables:rrb-218bc449 rtb-238bc44b<br/>" +
"Associations:<br/>" +
"subnet-258bc44d : rtb-218bc449<br/>" +
"subnet-248bc44c : rtb-238bc44b<br/>" +
"subnet-9189c6f9 : rtb-238bc44b<br/>" +
"これで、EC2インスタンスをVPCに展開する準備が整いました。Webサーバーがインターネットに直接アクセスできる必要があります。アプリケーションとデータベースサーバーはインターネットに直接アクセスできません。以下の構成では、アプリケーションとデータベースサーバー、 これらのサーバーがインターネットから更新プログラムを取得できるようにしますか？"
    , multiple_answer: false
    , answers: [
      {description: "サブネット-258bc44dで砦およびNATインスタンスを作成し、rtb-238bc44bからNATインスタンスにルートを追加します。", correct: true}
      , {description: "rtb-238bc44bからigw-2d8bc445へのルートを追加し、サブステーション248bc44c内でバスルームとNATインスタンスを追加します。", correct: false}
      , {description: "サブネット248bc44cで砦およびNATインスタンスを作成し、rtb-238bc44bからサブネット258bc44dへのルートを追加します。", correct: false}
      , {description: "サブネット258bc44dにバスルームとNATのインスタンスを作成し、rtb-238bc44bからIgw-2d8bc445にルートを追加し、サブネット258bc44dとサブネット248bc44cの間でアクセスできる新しいNACLを追加します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "デフォルトでは、IAMユーザーの一時的なセキュリティ資格情報は最大12時間有効ですが、______時間以上の期間を要求できます。"
    , multiple_answer: false
    , answers: [
      {description: "24", correct: false}
      , {description: "36", correct: true}
      , {description: "10", correct: false}
      , {description: "48", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'デフォルトでは、IAMユーザーの一時的なセキュリティ資格情報は最大12時間有効ですが、短くて15分、長くて36時間という期間を要求できます。参照：http://docs.aws.amazon.com /STS/latest/UsingSTS/CreatingSessionTokens.html'
  }
  , {
    description: "現在EC2インスタンスに接続されているEBSボリュームをoneAvailabilityZoneから別のAvailabilityZoneに移行するにはどうすればよいですか？"
    , multiple_answer: false
    , answers: [
      {description: "ボリュームを取り出し、それを他のAZの別のEC2インスタンスに接続します。", correct: false}
      , {description: "単に他のAZに新しいボリュームを作成し、元のボリュームをソースとして指定します。", correct: false}
      , {description: "ボリュームのスナップショットを作成し、他のAZのスナップショットから新しいボリュームを作成します。", correct: true}
      , {description: "ボリュームを取り出し、ec2-migrate-voiumeコマンドを使用して別のAZに移動します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ユーザーがCIDR 20.0.0.0/16のVPCを作成しました。 ユーザーはこのVPCではCIDR20.0.0.0/16のサブネットを1つ作成しました。ユーザーはCIDR 20.0.0.1/24と同じVPCで別のサブネットを作成しようとしています。 このシナリオでは何が起こるでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "VPCは自動的に最初のサブネットCIDRを変更し、2番目のサブネットIP範囲を許可します", correct: false}
      , {description: "第2のサブネットが作成されます。", correct: false}
      , {description: "CIDRオーバーラップエラーをスローします", correct: true}
      , {description: "VPCと同じCIDRを持つサブネットを作成することはできません", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。 ユーザーは、VPCを使用してサブネットを作成し、そのサブネット内でインスタンスを起動できます。 ユーザーは、同じサイズのVPCを持つサブネットを作成できます。 ただし、2番目のサブネットのCIDRが最初のサブネットと競合するため、他のサブネットを作成することはできません。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html'
  }
  , {
    description: "Amazon Elastic Compute Cloud（EC2）インスタンスのAuto Scalingグループの前面にあるElastic Load Balancing（ELB）ロードバランサで構成されるWebアプリケーションを担当します。新しいバージョンのアプリケーションを最近デプロイした場合、新しいAmazon Machine Image（AMI）が作成され、Auto Scalingグループがこの新しいAMIを参照する新しい起動設定で更新されました。ウェブサイトはエラーで応答していました。すべての事例がELBの健康診断に合格しました。今後の展開でエラーが発生するのを避けるために何をすべきですか？ （2つの答えを選択してください）"
    , multiple_answer: true
    , answers: [
      {description: "Elastic Load BalancingヘルスチェックをAuto Scalingグループに追加します。インスタンストロードバランサの早期登録を防止するために、ヘルスチェックができるだけ早く動作するように短期間を設定します。", correct: false}
      , {description: "Enable EC2インスタンスCloudWatchアラートを使用して、起動設定のAMIを以前のものに変更します。新しいAMIを使用しているインスタンスを大幅に終了します。", correct: false}
      , {description: "Elastic Load Balancingのヘルスチェック構成を設定して、アプリケーションの正常性をテストするアプリケーションの一部を対象にし、テストが失敗した場合はエラーを返します。", correct: true}
      , {description: "新しいAMIを参照する新しい起動設定を作成し、それをグループに関連付けます。グループのサイズを2倍にし、新しいインスタンスが正常になるのを待って元のサイズに戻します。新しいインスタンスが前回の起動設定を関連付けます。 Elastic Load Balancing不健全しきい値を高くして、不健全なインスタンスがロードバランサの背後で動作しないようにします。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWS IAMポリシーのStatement要素には、個々のステートメントの配列が含まれています。個々のステートメントは、中括弧{}で囲まれた（n）______ブロックです。"
    , multiple_answer: false
    , answers: [
      {description: "XML", correct: false}
      , {description: "JavaScript", correct: false}
      , {description: "JSON", correct: true}
      , {description: "AJAX", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMポリシーのStatement要素には、個々のステートメントの配列が含まれています。 個々のステートメントは、中括弧{}で囲まれたJSONブロックです。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_ElementDescriptions.html'
  }
  , {
    description: "AWS IAMの証明書IDの最大長は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "1024文字", correct: false}
      , {description: "512文字", correct: false}
      , {description: "64文字", correct: false}
      , {description: "128文字", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '証明書IDの最大長は128文字です。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html'
  }
  , {
    description: "CIDRブロックが10.0.0.0/28のVPCに3層Webアプリケーションをデプロイしました。7つのEC2インスタンスで2つのWebサーバー、2つのアプリケーションサーバー、2つのデータベースサーバー、1つのNATインスタンスを最初に展開します。アプリケーションサーバーとデータベースサーバーは、2つの稼働ゾーン（AZ）に展開されます。また、2つのWebサーバーの前にELBを配備し、Route53 for DNS Webを使用すると、配備後最初の数日間抽選が徐々に増加するため、新しい負荷を処理するためにアプリケーションの各ティアのインスタンス数を倍増させようとします残念ながら、一部のインスタンスの起動に失敗しました。次のうち根本原因は何か？（2つの回答を選択してください）"
    , multiple_answer: true
    , answers: [
      {description: "AWSは各サブネットのCIDRブロックに最初と最後のプライベートIPアドレスを予約しているので、新しいEC2インスタンスをすべて起動するためのアドレスは残っていません。", correct: false}
      , {description: "VPCのインターネットゲートウェイ（IGW）が拡張され、トラフィックスパイクを処理するインスタンスが増え、新しいインスタンスの起動に使用できるプライベートIPアドレスの数が減ります", correct: false}
      , {description: "ELBの規模が拡大し、トラフィックスパイクを処理するインスタンスが増え、新しいインスタンスの起動に使用できるプライベートIPアドレスの数が減ります", correct: true}
      , {description: "AWSはRoute53の各サブネットのCIDRブロックに1つのIPアドレスを予約しているので、新しいEC2インスタンスをすべて起動するのに十分なアドレスが残っていません", correct: false}
      , {description: "AWSは各サブネットのCIDRブロックの最初の4つと最後のIPアドレスを予約しているので、新しいEC2インスタンスをすべて起動するための余裕のあるアドレスがない", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織は、区画化のために1つのアプリケーションの複数のコンポーネントを作成しました。現在、すべてのコンポーネントは1つのEC2インスタンスでホストされています。 セキュリティー上の理由から、組織は既にVPCを使用していますが、個別のモジュール用に2つのSSLを実装したいと考えています。"
    , multiple_answer: false
    , answers: [
      {description: "別々のサブネットでそれぞれ2つのインスタンスを起動し、単一のIPに対してVPCピアリングを許可する必要があります。", correct: false}
      , {description: "複数の弾性IPアドレスを持つ複数のネットワークインターフェイスを持つVPCインスタンスを作成します。", correct: true}
      , {description: "ACLとそれに接続されたセキュリティグループの両方を持つVPCインスタンスを作成し、各IPアドレスの規則を除外します。", correct: false}
      , {description: "複数のサブネットが接続されたVPCインスタンスを作成し、それぞれに別のIPアドレスが設定されます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。 これにより、ユーザーは、ユーザーが定義した仮想ネットワークにAWSリソースを起動できます。 VPCを使用すると、ユーザーはインスタンスに複数のプライベートIPアドレスを指定できます。ユーザーがインスタンスに対して指定できるネットワークインターフェイスとプライベートIPアドレスの数は、インスタンスの種類によって異なります。 組織は各ネットワークインターフェイスを使用してEIPを割り当てることができます。 このシナリオは、単一のサーバー上で複数のSSL証明書を使用し、各証明書を特定のEIPアドレスに関連付けることにより、単一のEC2インスタンスで複数のWebサイトをホストする場合に役立ちます。 また、各ネットワークインターフェイスに複数のプライベートIPアドレスを持つファイアウォールやロードバランサなど、ネットワークアプライアンスを動作させるシナリオにも役立ちます。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html'
  }
  , {
    description: "Amazon Cognitoを使用してAmazon Mobile Analyticsサービスを使用する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "いいえ。 ただし、ベストプラクティスのためにAmazon Cognitoを使用することがAWSの推奨です。", correct: true}
      , {description: "はい。 IAMルートアクセス権を持っている場合にのみ使用する必要があります。", correct: false}
      , {description: "いいえ。これはまったく使用できず、AWS IAMアカウントを使用する必要があります。", correct: false}
      , {description: "はい。 AWSはAmazon Cognitoを使用してAmazon Mobile Analyticsサービスを使用することを推奨しています。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたの会社は、複数の国のユーザーをサポートするソーシャルメディアサイトを運営しています。 Webサイトのパーソナライゼーションとアドセレクションをサポートするために、ユーザー設定を読み込むことが最もレイテンシに敏感なコンポーネントです。あなたのアプリケーションは複数の地域に分かれており、どのオプションがこのアプリケーションの要望をサポートしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "S3からユーザーコンテンツを提供します。 CloudFrontを使用し、各地域のELB間でRoute53レイテンシベースのルーティングを使用する各地域のローカルDynamoDBテーブルからユーザー設定を取得し、SQSを利用してSQSワーカーによるユーザー設定の変更を取得して各テーブルに更新を伝播します。", correct: true}
      , {description: "S3 Copy APIを使用して、最近アクセスしたコンテンツを複数の地域にコピーし、S3からユーザーコンテンツを提供します。 各地域の動的コンテンツとELBを備えたCloudFront各地域のElasticCacheクラスタからユーザ設定を取得し、SNS通知を活用して各地域のワーカーノードにユーザ設定変更を伝播します。", correct: false}
      , {description: "S3 Copy APIを使用して、最近アクセスしたコンテンツを複数のリージョンにコピーし、S3 CloudFrontおよびRoute53レイテンシベースのルーティングからユーザーコンテンツを配信する。各地域のELB間。DynamoDBテーブルからユーザープリファレンスを取得し、SQSを利用して、 DynamoDB更新を伝播するためのSQSワーカ。", correct: false}
      , {description: "S3からのユーザコンテンツの配信。 各地域のElastiCacheクラスターからユーザー設定を取得し、Simple Workflow（SWF）を活用して、集中型OBから各ElastiCacheクラスターへのユーザー設定の伝播を管理します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IAMでは、以下のうち一時的なセキュリティ資格情報はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "一時的なセキュリティ資格情報を発行すると、それらを取り消すことはできません。", correct: true}
      , {description: "これらのどれも正しいわけではありません。", correct: false}
      , {description: "一時的なセキュリティ資格情報を発行すると、仮想MFAdeviceが使用されている場合にのみ資格を取り消すことができます。", correct: false}
      , {description: "一時的なセキュリティ証明書を発行すると、それらを取り消すことができます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMの一時資格は、定義された期間中有効です。したがって、取り消すことはできません。 ただし、資格情報を使用してAWS要求が行われるたびに権限が評価されるため、発行された後でも資格情報の権限を変更することで資格を取り消すことができます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_disableperms.html'
  }
  , {
    description: "IAM内で文字列条件を使用する場合、より冗長なものの代わりに使用可能なコンパレータの短いバージョンを使用できます.streqiは文字列条件の短いバージョンです。"
    , multiple_answer: false
    , answers: [
      {description: "StringEqualsIgnoreCase", correct: true}
      , {description: "StringNotEqualsIgnoreCase", correct: false}
      , {description: "StringLikeStringEquals", correct: false}
      , {description: "StringNotEquals", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAM内で文字列条件を使用する場合、より冗長なバージョンではなく、使用可能なコンパレータの短いバージョンを使用できます。 たとえば、streqiはStringEqualsIgnoreCaseの短いバージョンで、2つの文字列の間の完全一致をチェックします。参照：http://awsdocs.s3.amazonaws.com/SNS/20100331/sns-gsg-2010-03-31.pdf'
  }
  , {
    description: "災害復旧の目的で、別の地域に本番環境のミラーイメージを作成したいと考えています。 次の領域で再作成する必要のない次のAWSリソースはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Route 53レコードセット", correct: true}
      , {description: "IAMの役割", correct: false}
      , {description: "エラスチックIPアドレス（EIP）", correct: true}
      , {description: "EC2鍵ペア 起動設定。 セキュリティグループ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "国際企業は、単一地域でDynamoDBに依存する多層Webアプリケーションを導入しました規制上の理由から、復旧時間目標2時間とリカバリポイント目標24時間の別の地域で災害復旧機能が必要です。 彼らは定期的にデータを同期し、CloudFormationを使用してWebアプリケーションを迅速にプロビジョニングする必要があります。既存のWebアプリケーションの変更を最小限に抑え、データの同期に使用されるDynamoDBのスループットを制御し、 これらの要件を満たすためにどのような設計を選択しましたか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSデータパイプラインを使用して、DynamoDBのクロスリージョンコピーを1日に1回スケジュールするには、DynamoDBテーブルに最後の更新のタイムスタンプを表す「Lastupdated」属性を作成し、それをフィルタとして使用します。", correct: true}
      , {description: "EMRを使用し、カスタムスクリプトを作成して、SCAN操作を使用して現在の地域のDynamoDBからデータを取得し、それを第2領域のDynamoDBにプッシュします。", correct: false}
      , {description: "AWSデータパイプラインを使用して、現在の地域のDynamoDBテーブルを現在の地域のS3に1日に1回エクスポートするスケジュールを設定し、S3のデータを他の地域のDynamoDBにインポートする直後の別のタスクをスケジュールします。", correct: false}
      , {description: "各Anteを私の第2の領域のSQSキューにも送ります。 SQSキューの背後にある自動スケーリンググループを使用して、第2領域の書き込みを再生します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "trueまたはfalse：Amazon ElastiCacheでは、キャッシュセキュリティグループを使用して、VPCの一部であるキャッシュクラスターを構成できます。"
    , multiple_answer: false
    , answers: [
      {description: "false", correct: true}
      , {description: "true", correct: false}
      , {description: "これは、Amazon VPC環境で動作しているキャッシュクラスタにのみ適用されます。", correct: false}
      , {description: "Trueですが、コンソールナビゲーションペインからキャッシュセキュリティグループを使用してキャッシュクラスタを構成する場合に限ります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon ElastiCacheキャッシュセキュリティグループは、Amazon Virtual Private Cloud環境（VPC）で動作していないキャッシュクラスタにのみ適用されます。 Amazon Virtual Private Cloudで実行している場合は、コンソールのナビゲーションペインでキャッシュセキュリティグループを使用することはできません。参照：http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/CacheSecurityGroup.html'
  }
  , {
    description: "ERPアプリケーションは、単一の地域の複数のAZに展開されます。 障害が発生した場合、約1.5時間前にデータ破損が発生したことをユーザーが認識すると、Recovery Time Objective（RTO）は3時間未満、RPO（Recovery Point Objective）は15分でなければなりません。 この種の障害が発生した場合に、このRTOとRPOを達成できますか？"
    , multiple_answer: false
    , answers: [
      {description: "トランザクションログをS3に5分ごとに格納し、毎時DBバックアップをS3に実行します。", correct: true}
      , {description: "2つのアベイラビリティゾーン間の同期データベースマスタースレーブレプリケーションを使用します。", correct: false}
      , {description: "トランザクションログをS3に5分ごとに格納して、EC2インスタンスストアボリュームに毎時DBバックアップを取る。", correct: false}
      , {description: "5分ごとにS3に格納されたトランザクションログを使用して、氷河に保存された15分間のDBバックアップを作成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織がAWSでウェブサイトを設定しています。 組織は、AWS EC2インスタンスで実行されるさまざまなセキュリティ手段に取り組んでいます。 以下のセキュリティメカニズムのどれが、将来のデータ漏洩を避け、セキュリティの弱点を特定するのに役立たないでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazonの事前承認を得てAWSの侵入テストを実行します。", correct: false}
      , {description: "アプリケーションテスト用のSQLインジェクションを実行します。", correct: false}
      , {description: "コードを実行してメモリリークがないかチェックします。", correct: true}
      , {description: "AWSインスタンスで強化テストを実行します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSセキュリティは、共有セキュリティモデルに準拠しています。ユーザーはAmazonと同じくらい責任があります.Amazonはパブリッククラウドなので、ハッカーのターゲットとすることができます。 組織がAWS EC2でアプリケーションをホストする予定の場合、以下のセキュリティチェックをセキュリティ弱点/データ漏えいを見つけるための手段として実行する必要があります。攻撃者が行った侵入テストを実施して脆弱性を発見します。 組織は、侵入テストを実行する前にAWSから承認を取得する必要があります。不要なポートが開いているかどうかを確認するためのテストを実行します。DBインシデントを実行して、データベースのセキュリティ問題を検出します。 参照：http://aws.amazon.com/security/penetration-testing/'
  }
  , {
    description: "コンソールを使用してIAMロールを作成した場合のインスタンスプロファイルには、次のうちどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "インスタンスプロファイルは異なる名前を使用します。", correct: false}
      , {description: "コンソールは、インスタンス・プロファイルに対応する役割と同じ名前を付けます。", correct: true}
      , {description: "インスタンス・プロファイルは、ユーザーが手動で作成する必要があります。", correct: false}
      , {description: "コンソールは、役割とインスタンスのプロファイルを別々のアクションとして作成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon EC2では、インスタンスプロファイルをIAMロールのコンテナとして使用します。 コンソールを使用してIAMロールを作成すると、コンソールは自動的にインスタンスプロファイルを作成し、対応するロールと同じ名前を付けます。 AWS CLI、API、またはAWS SDKを使用してロールを作成する場合は、ロールとインスタンスのプロファイルを別々のアクションとして作成し、異なる名前を付けることができます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instanceprofiles.html'
  }
  , {
    description: "企業はサードパーティのSaaSアプリケーションを使用したいと考えています。 SaaSアプリケーションには、企業のアカウント内で実行されているAmazon EC2リソースを検出するためのいくつかのAPIコマンドにアクセスする必要があります。企業は、環境への外部アクセスを必要とする内部セキュリティポリシーを最低限の原則に準拠させる必要があり、 SaaSベンダーが使用する信用状を他の第三者が使用できないようにする。これらの条件のすべてを満たしているのはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS Management Consoleから、Security Credentialsページに移動し、アカウントのアクセスと秘密鍵を取得します。", correct: false}
      , {description: "企業アカウント内のIAMユーザーを作成し、SaaSアプリケーションが必要とするアクションのみを許可するユーザーポリシーをIAMユーザーに割り当て、ユーザーに新しいアクセスと秘密キーを作成し、これらの資格情報をSaaSプロバイダーに提供します。", correct: false}
      , {description: "クロスアカウントアクセスのためのIAMロールを作成するSaaSプロバイダのアカウントはロールを想定し、SaaSアプリケーションが要求するアクションのみを許可するポリシーを割り当てることができます。", correct: true}
      , {description: "ECAインスタンスのIAMロールを作成し、SaaSアプリケーションの動作に必要なアクションのみを許可するポリシーを割り当てる.iPAインスタンスを起動するときに使用するSaaSプロバイダにARNロールを提供する。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "B社はモバイル機器用の新しいゲームアプリを発売しています。ユーザーは、既存のソーシャルメディアアカウントを使用してゲームにログインし、データキャプチャを合理化します。 B社は、プレーヤデータとスコア情報をモバイルアプリからScore Dataという名前のDynamoDSテーブルに直接保存したいと思っています。進行状況データはGame State S3バケットに保存されます。 DynamoDBとS3にデータを格納するための最善の方法は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "EC2ロールで起動されたEC2インスタンスを使用して、Webサービスを介してモバイルアプリと通信するScore DataDynamoDBtableおよびGameState S3バケットへのアクセスを提供します。", correct: false}
      , {description: "Web IDフェデレーションを使用してScore DataDynamoDBtableおよびGame State S3バケットへのアクセスを提供する役割を担う一時的なセキュリティ資格情報を使用します。", correct: true}
      , {description: "ユーザーがAmazonアカウントでサインインできるようにAmazonを使用してログインします。モバイルアプリにScore Data DynamoDBテーブルとGame State S3バケットへのアクセスを提供します。", correct: false}
      , {description: "アクセス認証情報を持つIAMユーザーを使用して、モバイルAppを使用したScore DataDynamoDBテーブルとGame State S3バケットへのアクセスを提供する役割を割り当てます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "次のうちAmazon ElastiCacheの管理や管理タスクの実行に使用できないものはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSソフトウェア開発キット（SDK）", correct: false}
      , {description: "Amazon S3", correct: false}
      , {description: "ElastiCacheコマンドラインインターフェイス（CLI）", correct: false}
      , {description: "AWS CloudWatch", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "次のうちAmazon VPCサブネットの特徴はどれですか？ 2つの回答を選択"
    , multiple_answer: true
    , answers: [
      {description: "各サブネットは、高可用性環境を提供するために少なくとも2つの可用性ゾーンにまたがっています。", correct: true}
      , {description: "各サブネットは単一のアベイラビリティゾーンにマッピングされます。", correct: false}
      , {description: "CIDRブロックマスク/ 25は、サポートされる最小の範囲です。", correct: false}
      , {description: "デフォルトでは、すべてのサブネットは、プライベートでもパブリックでも、相互にルーティングできます。", correct: false}
      , {description: "プライベートサブネット内のインスタンスは、エラスティックIPを持つ場合にのみインターネットと通信できます。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "200個のPIOPSEBSボリュームの待ち時間を短縮するためにAWSが推奨する平均キュー長はどれくらいですか？"
    , multiple_answer: false
    , answers: [
      {description: "5", correct: false}
      , {description: "1", correct: true}
      , {description: "2", correct: false}
      , {description: "4", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'キューの長さは、デバイスの保留中のI / O要求の数です。 最適な平均待ち行列の長さは、顧客のワークロードごとに異なります。この値は、特定のアプリケーションのIOPSに対する感度と待ち時間によって異なります。 ワークロードが最適な平均キュー長を維持するのに十分なI / O要求を配信していない場合、EBSボリュームはプロビジョニングされたIOPSを一貫して配信しない可能性があります。 ただし、ワークロードの平均キュー長が最適値よりも長い場合、要求ごとのI / O待ち時間は増加します。 この場合、ユーザは自分のボリュームに対してより多くのIOPSをプロビジョニングする必要があります。 AWSでは、プロビジョニングされた200のIOPSごとに最適な平均キュー長を1に設定し、そのアプリケーション要件に基づいてその値を調整することを推奨します。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs -workload-demand.html'
  }
  , {
    description: "自動スケーリング要求は、要求とユーザの独自鍵から計算された_________署名で署名されます。"
    , multiple_answer: false
    , answers: [
      {description: "SSL", correct: false}
      , {description: "AES-256", correct: false}
      , {description: "HMAC-SHA1", correct: true}
      , {description: "X.509", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWS用のマルチプラットフォームWebアプリケーションを設計しています。このアプリケーションはEC2インスタンス上で実行され、PCからアクセスされます。タブレット、スマートフォンサポートされているアクセスプラットフォームは、Windows、MacOS、IOS、Androidです。異なるプラットフォームタイプには、個別のスティッキーセッションとSSL証明書の設定が必要です。"
    , multiple_answer: false
    , answers: [
      {description: "VPCで実行されているさまざまなプラットフォームタイプのWebアプリケーションを実行するEC2Instanceグループとセッション状態およびSSL証明書を処理するためのハイブリッドアーキテクチャの設定。", correct: false}
      , {description: "すべてのプラットフォーム用に1つのELBを設定して、その下にある複数のインスタンスに負荷を分散する。各EC2インスタンスは、特定のプラットフォーム用の機能を実装しています。", correct: false}
      , {description: "2つのELBを設定する最初のELBはすべてのプラットフォームのSSL証明書を処理し、各ELBのすべてのプラットフォームの2番目のELBハンドレスセッションスティッキネスは、各プラットフォームのWebアプリケーションを処理するために別々のEC2インスタンスグループを実行します。", correct: false}
      , {description: "複数のELBSを、Webアプリケーションの共通コンポーネントを実行するEC2インスタンスまたはEC2インスタンスのグループに割り当てます。各プラットフォームタイプごとに1つのELBセッションスティッキーおよびSSL終了は、ELBを実行します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWSが提供するAWS ITインフラストラクチャは、以下のITセキュリティ標準を遵守します。"
    , multiple_answer: true
    , answers: [
      {description: "SOC 1 / SSAE 16 / ISAE 3402（以前はSAS 70 Type II）、SOC 2およびSOC 3", correct: true}
      , {description: "FISMA、DIACAP、およびFedRAMP", correct: true}
      , {description: "PCI DSSレベル1、ISO 27001、ITARおよびFIPS 140-2", correct: true}
      , {description: "HIPAA、クラウドセキュリティアライアンス（CSA）、米国映画協会（MPAA）", correct: false}
      , {description: "すべて", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ユーザーは、AWS VPCで高可用性システムをホストする予定です。このシナリオでは、次のステートメントのどれが役立ちますか？"
    , multiple_answer: false
    , answers: [
      {description: "2つの別々のアベイラビリティゾーンでVPCサブネットを作成し、異なるサブネットにインスタンスを起動します。", correct: true}
      , {description: "1つのパブリックサブネットでVPCを作成し、そのサブネットを使用する異なるAZのインスタンスを起動します。", correct: false}
      , {description: "2つの別々のゾーンに2つのVPCを作成し、ELBでフェールオーバーをセットアップします.1つのVPCに障害が発生すると、トラフィックを別のVPCに迂回させます。", correct: false}
      , {description: "プライベートサブネットでVPCを作成し、そのサブネットを使用して異なるAZでインスタンスを起動します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "次のうちAWS Direct Connectを使用する利点はありません。"
    , multiple_answer: false
    , answers: [
      {description: "AWSダイレクトコネクトは、公衆と私的な環境の間のネットワーク分離を維持しながら、2つの異なる接続を使用することにより、公共および私的リソースへのアクセスをユーザーに提供します。", correct: true}
      , {description: "AWS Direct Connectは、インターネットベースの接続よりも一貫したネットワークエクスペリエンスを提供します。", correct: false}
      , {description: "AWSダイレクトコネクトを使用すると、お客様のプリムスからAWSへの専用ネットワーク接続を簡単に確立できます。", correct: false}
      , {description: "AWS Direct Connectはネットワークコストを削減します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Direct Connectを使用すると、構内からAWSへの専用ネットワーク接続を簡単に確立できます。 AWS Direct Connectを使用すると、AWSとデータセンター、オフィス、コロケーション環境の間でプライベート接続を確立することができます。これは、多くの場合、ネットワークコストを削減し、帯域幅スループットを向上させ、インターネット接続よりも一貫したネットワーク体験を提供します。 業界標準の802.1q VLANを使用すると、この専用接続を複数の仮想インターフェイスに分割できます。 これにより、同じ接続を使用して、パブリックIPアドレス空間を使用するAmazon S3に格納されたオブジェクトやプライベートIPスペースを使用するAmazon Virtual Private Cloud（VPC）内で実行されるAmazon EC2インスタンスなどのプライベートリソースにアクセスできます。 パブリック環境とプライベート環境のネットワーク分離。参考：http://aws.amazon.com/directconnect/#details'
  }
  , {
    description: "Web企業は、VPCを導入した侵入検知および防御システムを実装しようとしています。このプラットフォームは、VPC内部で実行されている何千ものインスタンスに拡張する能力を備えている必要があります。"
    , multiple_answer: false
    , answers: [
      {description: "監視ソフトウェアを使用してインスタンスを設定し、弾性ネットワークインターフェイス（ENI）は、VPC全体のトラフィックを見るために、トムクロスモードモードのパケットスニッフィングを設定します。", correct: false}
      , {description: "第2のVPCを作成し、第1のアプリケーションVPCからのすべてのトラフィックを、スケーラブル仮想化IDS / IPSプラットフォームが存在する第2のVPCを通してルーティングする。", correct: false}
      , {description: "ホストベースの 'route'コマンドを使用してVPCで実行されているサーバを設定し、すべてのトラフィックをスケーラブルな仮想化IDS / IPSに転送します。", correct: true}
      , {description: "各ホストを、すべてのネットワークトラフィックを収集し、検査のためにそのトラフィックをIDS / IPSプラットフォームに送信するエージェントで構成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織は、スケーラブルなデータニーズにNoSQL DBを使用する予定です。 組織はAWS VPCでアプリケーションを安全にホスティングしたいと考えています。どのようなアクションを組織に推奨できますか？"
    , multiple_answer: false
    , answers: [
      {description: "組織はAWSインスタンスに独自のNoSQLクラスタをセットアップし、ルーティングテーブルとサブネットを設定する必要があります。", correct: true}
      , {description: "組織は、デフォルトでは常にAWSによって提供されるデフォルトサブネットの一部であるため、DynamoDBのみを使用する必要があります。", correct: false}
      , {description: "組織はパブリックサブネット内にテーブルを作成する際にDynamoDBを使用する必要があります。", correct: false}
      , {description: "組織は、プライベートサブネット内にテーブルを作成するときにDynamoDBを使用する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon仮想プライベートクラウド（Amazon VPC）を使用すると、ユーザーはAmazon Web Services（AWS）クラウドのプライベートな独立したセクションで仮想ネットワーキング環境を定義できます。 ユーザーは仮想ネットワーキング環境を完全に制御できます。 現在、VPCはDynamoDBをサポートしていません。そのため、VPCを実装したい場合は、VPC内に独自のNoSQL DBをセットアップする必要があります。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Introduction.html'
  }
  , {
    description: "ユーザーはDB要件にEBSを使用する予定です。 ユーザーは、VPCのプライベートサブネットでEC2インスタントサービスを既に持っています。 ユーザーはEBSボリュームを実行中のインスタンスにどのように接続できますか？"
    , multiple_answer: false
    , answers: [
      {description: "ユーザーは、インスタンスのサブネットと同じゾーンにEBSを作成し、そのEBSをインスタンスに添付することができます。", correct: true}
      , {description: "インスタンスが停止するまで、VPCで実行中のインスタンスにEBSを接続することはできません。", correct: false}
      , {description: "ユーザーは、EBSの作成中に同じサブネットを指定し、実行中のインスタンスに接続することができます。", correct: false}
      , {description: "ユーザーは、同じVPC内でEBSを作成してから、実行中のインスタンスに接続する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。 ユーザーは、VPC内の要件に従ってサブネットを作成できます.VPCは常に地域固有です。 ユーザは、各Availability Zoneに1つ以上のサブネットを追加することにより、複数のAvailability ZoneにまたがるVPCを作成できます。起動されるインスタンスは、常にそれぞれのサブネットの同じAvailability Zoneにあります。 EBSを作成する場合、ユーザーはサブネットまたはVPCを指定できません。ただし、実行中のインスタンスにEBSボリュームを添付できるように、インスタンスと同じゾーンにEBSを作成する必要があります。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html#VPCSubnet'
  }
  , {
    description: "AWSダイレクトコネクトの使用を開始するには、次のどの手順でBGP（ボーダーゲートウェイプロトコル）を設定しますか？"
    , multiple_answer: false
    , answers: [
      {description: "クロスコネクトの完成", correct: false}
      , {description: "AWS Direct Connectによる冗長接続の設定", correct: false}
      , {description: "仮想インターフェイスを作成する", correct: true}
      , {description: "ルータ構成のダウンロード", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSダイレクトコネクトでは、BGP（Border Gateway Protocol）とBGP MD5認証をサポートする必要があり、ASN（Private Autonomous System Number）を提供して、Amazon VPCに接続する必要があります。 Amazon EC2やAmazon S3などの公開AWS製品に接続するには、所有している公開ASN（プライベートASN）も提供する必要があります。 仮想インターフェイスの作成ステップでBGPを設定する必要があります。参照：http://docs.aws.amazon.com/directconnect/latest/UserGuide/getstarted.html#createvirtualinterface'
  }
  , {
    description: "組織は5人のIAMユーザーを作成しました。 組織は同じloginIDを使用していて、別のパスワードを使用したいと考えています。 組織はこれをどのように達成することができますか？"
    , multiple_answer: false
    , answers: [
      {description: "組織は、それぞれのユーザーを別々の地域に作成して、それぞれのユーザーが独自のURLを持つようにする必要があります", correct: false}
      , {description: "組織は別のログインIDを作成する必要がありますが、IAMユーザーに同じエイリアスを与えて、thateachoneはエイリアスでログインできます", correct: false}
      , {description: "同じアカウントの複数のIAMユーザーに対して同じログインIDを使用することはできません", correct: true}
      , {description: "組織はさまざまなグループを作成し、同じログインIDを持つ各ユーザーを異なるグループに追加する必要があります。 ユーザーは、自分のグループIDでログインすることができます", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSアイデンティティとアクセス管理は、組織がさまざまなAWSサービスのユーザとユーザ権限を管理できるようにするWebサービスです。 組織がIAMユーザーを作成するときはいつでも、各ユーザーに固有のIDが必要です。 複数のユーザーに対して同じログインIDを使用することはできません。ユーザー、グループ、役割、インスタンスプロファイルの名前は、plus (+), equal (=), comma (,), period (.), at (@), dash (-) 参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_SettingUpUser.html'
  }
  , {
    description: "組織がライセンスソフトウェアを購入しています。 ソフトウェアライセンスは、特定のMACアドレスにのみ登録することができます。 組織はAWS環境でソフトウェアをホストします。 インスタンスが開始/停止/終了するたびにMACアドレスが変更されるため、組織はどのようにライセンス要件を満たすことができますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSで固定MACアドレスを使用することはできません。", correct: false}
      , {description: "組織はプライベートサブネットでVPCを使用し、そのサブネットでMACアドレスを設定する必要があります。", correct: false}
      , {description: "組織は、MACAddressが固定された弾性ネットワークインターフェイスを備えたVPCを使用する必要があります。", correct: true}
      , {description: "VPCは各EC2インスタンスのMACアドレスを設定できるため、組織はVPCを使用する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ロードバランシングサービスは、後続の接続が強制的にaserviceをオンラインにしている間、同じノードに転送させようとしますか？"
    , multiple_answer: false
    , answers: [
      {description: "ノードバランス", correct: false}
      , {description: "セッション保持", correct: false}
      , {description: "セッション多重化", correct: false}
      , {description: "Session永続性", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'セッション永続性は、負荷分散サービスの機能です。 それは、オンラインである限り、同じノードにリダイレクトされるサービスへの後続の接続を強制しようとします。参照：http://docs.rackspace.com/loadbalancers/api/v1.0/clb-devguide/content/Concepts-d1e233.html'
  }
  , {
    description: "貴社は以前は、使用頻度の高い、動的にルーティングされたVPN接続を、構内のデータセンターとAWS間で設定しました。あなたは最近、DirectConnect接続をプロビジョニングし、新しい接続の使用を開始します。 AWS ConsoleでDirectConnectの設定を行った後、次のオプションのどれがユーザーにとって最もシームレスな移行を実現しますか？"
    , multiple_answer: false
    , answers: [
      {description: "既存のVPN接続を削除してルーティングループを回避し、適切な設定でDirectConnectルーターを構成し、ネットワークトラフィックがDirectConnectを活用していることを確認します。", correct: false}
      , {description: "DirectConnectルータをBGP優先度の高いVPNルータに設定します.VerifynetworktrafficがDirectconnectを利用し、既存のVPN接続を削除します。", correct: false}
      , {description: "DirectConnect接続を指すようにVPCルートテーブルを更新する適切な設定で66DirectConnectrouterを設定し、ネットワークトラフィックがDirectConnectを利用していることを確認してからVPN接続を削除します。", correct: false}
      , {description: "DirectConnectルータを設定し、DirectConnect接続を指すようにVPCルートテーブルを更新し、より高いBGP優先順位でVPN接続を設定します。また、ネットワークトラフィックがDirectConnect接続をリバレッジすることを確認します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "次のポリシーをIAMグループに関連付けることができます。 そのグループのIAMユーザーは、コンソールを使用してユーザー名と一致するAWS S3の「ホームディレクトリ」にアクセスできます。{\"Version\": \"2012-10-17\",\"Statement\": [{\"Action\": [\"s3:*\"],\"Effect\": \"Allow\",\"Resource\": [\"arn:aws:s3:::bucket-name\"],\"Condition\":{\"StringLike\":{\"s3:prefix\":[\"home/${aws:username}/*\"]}}},{\"Action\":[\"s3:*\"],\"Effect\":\"Allow\",\"Resource\": [\"arn:aws:s3:::bucket-name/home/${aws:username}/*\"]}]}"
    , multiple_answer: false
    , answers: [
      {description: "true", correct: false}
      , {description: "false", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon Web Servicesへの直接接続を所有する方法はありますか？"
    , multiple_answer: false
    , answers: [
      {description: "いいえ、AWSは公開インターネットからのアクセスのみを許可します。", correct: false}
      , {description: "いいえ、VPCへの暗号化されたトンネルを作成できますが、接続を所有することはできません。", correct: false}
      , {description: "はい、Amazon Dedicated Connection経由でアクセスできます。", correct: false}
      , {description: "はい、あなたはAWS Direct Connect経由でアクセスできます。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Direct Connectは、標準の1ギガビットまたは10ギガビットイーサネット光ファイバケーブルを使用して、内部ネットワークをAWS Direct Connectの場所にリンクします。 ケーブルの一端はルータに接続され、もう一端はAWS Direct Connectルータに接続されます。 この接続を使用すると、Amazon Elastic Compute Cloud（Amazon EC2）やAmazon Simple Storage Service（Amazon S3）やAmazon Virtual Private Cloud（Amazon VPC）などのAWSクラウドに仮想インターフェイスを直接作成できます。 あなたのネットワークパスにインターネットサービスプロバイダを渡してください。参照：http://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html'
  }
  , {
    description: "非x86ハードウェアへの依存と、データバックアップにAWSを使用するために、オンプレミスのアプリケーションを実行しています。 バックアップアプリケーションは、POSIX互換のブロックベースストレージにのみ書き込むことができます。 140TBのデータがあり、ファイルサーバー上の単一のフォルダとしてマウントしたい場合バックアップが行われている間、このデータの一部にアクセスできる必要があります。 このユースケースに最も適したバックアップソリューションは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Storage Gatewayを使用し、Gateway Cachedボリュームを使用するように構成します。", correct: true}
      , {description: "データバックアップの対象としてS3を使用するようにバックアップソフトウェアを設定します。", correct: false}
      , {description: "データバックアップの対象としてGlacierを使用するようにバックアップソフトウェアを設定します。", correct: false}
      , {description: "ストレージ・ゲートウェイを使用して、ゲートウェイ・ストアド・ボリュームを使用するように構成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "クライアント認証証明書によるHTTPSクライアントの認証が必要なSSUTLSソリューションを設計しています。 ソリューションは弾力性がなければなりません.Webサーバーインフラストラクチャの設定には、次のオプションのどれを検討しますか？（Choose2回答）"
    , multiple_answer: true
    , answers: [
      {description: "TCP / 443でTCPリスナーを使用してELBを設定します。 そして、Webサーバーをその背後に置きます。", correct: true}
      , {description: "EIPでWebサーバーを構成します。 WebサーバーをRoute53レコードセットに配置し、すべてのWebサーバーに対してヘルスチェックを構成します。", correct: true}
      , {description: "HTTPSリスナーを使用してELBを設定し、Webサーバーをその背後に置きます。", correct: false}
      , {description: "CloudFrontディストリビューションの起点としてWebサーバーを設定します。 カスタムSSL証明書を使用するCloudFront配布。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon IAMでは、ロール名の最大長はどのくらいですか？"
    , multiple_answer: false
    , answers: [
      {description: "128文字", correct: false}
      , {description: "512文字", correct: false}
      , {description: "64文字", correct: true}
      , {description: "256文字", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon IAMでは、ロール名の最大長は64文字です。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html'    	
  }
  , {
    description: "アプリケーションのストレージレイヤを設計するように求められました。 このアプリケーションには少なくとも100,000 IOPSのディスク性能が必要です。 さらに、記憶層は、個々のディスク、EC2インスタンス、または可用性ゾーンでデータ損失なしに生き残ることができなければなりません。 あなたが提供するボリュームは、少なくとも3TBの容量を持たなければなりません。次の設計のどれがこれらの目標を達成するでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "us-east-1のc3.8xlargeインスタンスを開始します。 4x1TB EBSボリュームをプロビジョニングし、インスタンスにアタッチし、単一のRAID 5ボリュームとして構成します。 EBSスナップショットが15分ごとに実行されるようにしてください。", correct: false}
      , {description: "us-east-1のc3.8xlargeインスタンスを開始します。 3xlTB EBSボリュームをプロビジョニングし、それらをインスタンスに接続し、単一のRAID 0ボリュームとして構成します。 EBSスナップショットが15分ごとに実行されるようにしてください。", correct: false}
      , {description: "us-east-1aのi2.8xlargeインスタンスを開始します。インスタンスと共に提供される4つの800GB SSDephemeralディスクを使用してRAID 0ボリュームを作成します。 3x1TB EBSボリュームをプロビジョニングし、インスタンスにアタッチし、2番目のRAID 0ボリュームとして構成します。超薄型バックアップボリュームからEBSバックアップボリュームへの同期ブロックレベルの複製を構成します。", correct: true}
      , {description: "us-east-1のc3.8xlargeインスタンスを開始します。 AWS Storage Gatewayをプロビジョニングし、ストレージ容量を3 TB、IOPSを100,000に設定します。インスタンスにボリュームを接続します。 us-east-1aにi2.8xlargeインスタンスをインスタンス化します。インスタンスと共に提供される4つの800GB SSDephemeralディスクを使用してRAID 0ボリュームを作成します。 us-east-1b内の一意に設定されたインスタンスへの同期、ブロックレベルのレプリケーションを設定します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "現在AWS Direct Connectはどの帯域幅をサポートしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "10Mbpsおよび100Mbps", correct: false}
      , {description: "10Gbpsおよび100Gbps", correct: false}
      , {description: "100Mbpsおよび1Gbps", correct: false}
      , {description: "1Gbpsおよび10 Gbps", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Direct Connectionは現在、1Gbpsと10Gbpsをサポートしています。参照：http://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html'
  }
  , {
    description: "Amazon ElastiCacheでは、単一のキャッシュノードの障害は、アプリケーションの可用性とバックエンドデータベースの負荷に影響を与え、ElastiCacheは障害の発生したキャッシュノードの代替をプロビジョニングし、再投入されます。 この潜在的な可用性への影響を軽減するソリューションはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "容量を抑えたキャッシュノードの数を減らし、メモリと計算能力を分散します。", correct: false}
      , {description: "あなたのメモリを広げ、より大きい数のキャッシュノードに容量を計算します。それぞれのキャッシュノードはわずかなキャパシティしかありません。", correct: true}
      , {description: "大容量ノードの数を減らします。", correct: false}
      , {description: "大容量のキャッシュノードを多数追加する。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon ElastiCache CLIのコンテキストでは、過去24時間にallElastiCacheインスタンスイベントを表示するために次のコマンドのどれを使用できますか？"
    , multiple_answer: false
    , answers: [
      {description: "elasticache-events - 期間24", correct: false}
      , {description: "elasticache-events - 所要時間1440", correct: false}
      , {description: "elasticache-describe-events - 期間24", correct: false}
      , {description: "elasticache describe-events - ソースタイプのcache-cluster - 時間1440", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon ElastiCacheでは、コード "aws elasticache describe-events - source-type cache-cluster - duration 1440"を使用して過去24時間（1440分）のキャッシュクラスタイベントを一覧表示します。参照：http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/ECEvents.Viewing.html'
  }
  , {
    description: "ユーザがPIOPSでEBSボリュームを設定しました。 ユーザーは最適なスループットを経験していません。次のうち、そのEBSボリュームのI / Oパフォーマンスに影響を与えない要因は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "PIOPSを超える専用インスタンスのEBS帯域幅", correct: false}
      , {description: "EC2帯域幅", correct: false}
      , {description: "EBSのボリュームサイズ", correct: true}
      , {description: "インスタンスタイプがEBSに最適化されていない", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'ユーザーが予想されるIOPSまたはプロビジョニングされたスループットに遭遇していない場合は、EC2帯域幅が制限要因ではなく、インスタンスがEBS最適化（または10ギガビットネットワーク接続性を含む）で、インスタンスタイプEBS専用帯域幅がIOPSを超えている 彼が準備したよりも。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html'
  }
  , {
    description: "デフォルトでは、AmazonElastiCacheで実行できるキャッシュ・ノードの最大数はいくらですか？"
    , multiple_answer: false
    , answers: [
      {description: "20", correct: true}
      , {description: "50", correct: false}
      , {description: "100", correct: false}
      , {description: "200", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon ElastiCacheでは、最大20のキャッシュノードを実行できます。参照：http://aws.amazon.com/elasticache/faqs/'
  }
  , {
    description: "いくつかのファイルを取得する定期的な画像解析アプリケーションがあります。インプット分析では、各ファイルは出力ファイルに10個のファイルを書き込み、1日の入力ファイル数は1日の数時間で集中します。現在、入力データとその結果をホストする大規模なEBSボリュームを持つEC2上のサーバーは、プロセスを完了するために1日約20時間を要します。どのようなサービスを使用して精緻化時間を短縮し、ソリューションの可用性を向上させることができますか？"
    , multiple_answer: false
    , answers: [
      {description: "S3はI / Oファイルを格納します。 SQSを使用して、並列で動作するホストグループに詳細なコマンドを配布します.SQSキューの長さに応じてホストのグループを動的にサイズ変更するための自動スケーリング", correct: false}
      , {description: "I / Oファイルを格納するためのプロビジョニングIOPS（PIOPS）を備えたB.EBS。 SNSは並列SNS通知の数に応じてホストのグループのサイズを動的に調整する並列スケーリングで動作するホストのグループに精巧化コマンドを配布する", correct: false}
      , {description: "S3はI / Oファイルを格納し、SNSは蒸発コマンドを並列で動作するホストのグループに配信する.SNS通知の数に応じてホストのグループを動的にサイズ変更する自動スケーリング", correct: false}
      , {description: "SQSキューの長さに応じてホストのグループのサイズを動的に調整する並列自動スケーリングで動作するホストグループに精巧化コマンドを配布するためのI / OファイルSQSを格納するプロビジョニングIOPS（PIOPS）付きのEBS。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWSデータパイプラインの活動の1つが結果的に失敗し、3回再試行してからハードファイアウォールの状態になりました。 あなたはもう一度それを試してみたいです。 自動再処理の回数を3回以上増やすことは可能ですか？"
    , multiple_answer: false
    , answers: [
      {description: "はい、自動再試行回数を6回に増やすことができます。", correct: false}
      , {description: "はい、自動再試行回数を不定数に増やすことができます。", correct: false}
      , {description: "いいえ、自動再試行回数を増やすことはできません。", correct: false}
      , {description: "はい、自動再試行回数を10回に増やすことができます。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSデータパイプラインでは、すべてのアクティビティの試行が失敗した状態で返された場合、アクティビティは失敗します。 デフォルトでは、アクティビティはハード障害状態に入る前に3回再試行されます。 自動再試行の回数を10回に増やすことはできますが、システムでは不定期の再試行は許可されません。参照：https://aws.amazon.com/datapipeline/faqs/'    	
  }
  , {
    description: "あなたは最近、都市部の街中の騒音や大気の質を測定するセンサーを構築するスタートアップ企業に加わりました。同社では、AWSでホストされているバックエンドに対して、毎分3センサーの1秒間に約1KBのセンサーデータをアップロードする約100個のセンサーのパイロット展開を行っています。パイロットは、データベース上のピークまたはIOPSを測定し、現在の展開は、EC2インスタンスを使用する負荷分散された自動拡張摂取レイヤーと、500GB標準ストレージを備えたPostgreSQL RDSデータベースで構成されています。パイロットは成功とみなされ、CEOは注目を集めるか、潜在的な投資家になる。事業計画では、少なくとも100,000個のセンサを配置する必要があり、バックエンドでサポートする必要があります。また、少なくとも2年間のセンサデータを保存する必要があります。資金調達を確保するには、プラットフォームがこれらの要件を満たしているかどうかを確認して、さらなるスケーリングの余地を残す必要があります。どのセットアップの勝利が要件を満たしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "RDSインスタンスへの書き込みをバッファするために、SQSキューをイングレーションレイヤに追加する", correct: false}
      , {description: "データをDynamoDBテーブルに読み込み、古いデータをRedshiftクラスタに移動する", correct: false}
      , {description: "96TBのストレージを備えた6ノードRedshiftクラスタでRDSインスタンスを置き換える", correct: true}
      , {description: "現在のアーキテクチャを維持するが、RDSストレージを3TBおよび10KプロビジョニングIOPSにアップグレードする", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織はAWSでバックアップおよび復元システムを構内システムに設定しています。組織化にはHA（高可用性）およびDR（災害復旧）が必要ですが、コストを節約するために回復時間を長くすることは可能です。 どのような設定オプションを使用すれば、最も効果的な方法でコスト削減だけでなくDRも達成できますか？"
    , multiple_answer: false
    , answers: [
      {description: "事前設定されたサーバーを設定し、AMIを作成します.EIPとRoute 53を使用して、前提条件のAWSにすぐに切り替えます。", correct: false}
      , {description: "S3にバックアップデータを設定し、ストレージゲートウェイを使用して定期的にS3にデータを転送します。", correct: true}
      , {description: "自動スケーリングを使用して小さなインスタンスを設定します。 DRの場合、すべての負荷をAWSにオンフレムから迂回させます。", correct: false}
      , {description: "定期的に構内DBをEC2に複製し、パイロットライトと同様のシナリオを設定します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IVR（Interactive VoiceResponse）システムのコールアクティビティを追跡するには、永続的で耐久性のあるストレージが必要です。通話時間は、主に2〜3分です。トレースされた各コールは、アクティブまたはターミネータのいずれかになります。外部アプリケーションは、現在アクティブなコールのリストを分ごとに知る必要があります。通常、毎秒数回のコールがありますが、月に1回、最大1000コール/秒までの定期的なピークがあります。システムは24時間365日開いており、ダウンタイムは避けてください。履歴データは、ファイルに定期的にアーカイブされます。コスト削減はこのプロジェクトの優先事項です。このシナリオに適したデータベースの実装は可能な限り低コストで行いますか？"
    , multiple_answer: false
    , answers: [
      {description: "「アクティブ」または「終了」と等しい「状態」属性で、「呼び出し」テーブルとグローバルセカンダリインデックスを持つDynamoDBを使用します。 このように、グローバルセカンダリインデックスは、テーブルのすべてのアイテムに使用できます。", correct: false}
      , {description: "「ACTIVE_CALLS」と「TERMINATED_CALLS」の2つのテーブルを持つRDS Multi-AZを使用します。 この方法では、「ACTIVE_CALLS」テーブルは常に小さく、アクセスに効果的です。", correct: false}
      , {description: "「ACTIVE_CALLS」と「TERMINATED_CALLS」の2つのテーブルを持つRDS Multi-AZを使用します。 この方法では、「ACTIVE_CALLS」テーブルは常に小さく、アクセスに効果的です。", correct: true}
      , {description: "アクティブなコールのみに存在する「アクティブ」属性の「コール」テーブルとグローバルセカンダリインデックスを持つDynamoDBを使用します。 このようにして、グローバル・セカンダリ・インデックスは疎であり、より効果的です。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "アイデンティティとアクセス管理（IAM）に関して、あなたのコードには、あなたのコードがGoogleサービスにプログラムでアクセスするための特別なアカウントがありますか？"
    , multiple_answer: false
    , answers: [
      {description: "サービスアカウント", correct: true}
      , {description: "シンプルキー", correct: false}
      , {description: "OAuth", correct: false}
      , {description: "コードアカウント", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "会社のCFOは、従業員の1人がAWS利用報告ページのみを閲覧できるようにしたいと考えています。以下に述べるIAMポリシーステートメントのうち、AWSusagereportページへのアクセス権はユーザーに許されていますか？"
    , multiple_answer: false
    , answers: [
      {description: "\"Effect\": \"Allow\", \"Action\": [\"Describe\"], \"Resource\": \"Billing\"", correct: false}
      , {description: "\"Effect\": \"Allow\", \"Action\": [\"aws-portal: ViewBilling\"], \"Resource\": \"*\"", correct: false}
      , {description: "\"Effect\": \"Allow\", \"Action\": [\"aws-portal:ViewUsage\"], \"Resource\": \"*\"", correct: true}
      , {description: "\"Effect\": \"Allow\", \"Action\": [\"AccountUsage], \"Resource\": \"*\"", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSアイデンティティとアクセス管理は、組織がさまざまなAWSサービスのユーザとユーザ権限を管理できるようにするWebサービスです。 CFOがAWS使用レポートページへのアクセスのみを許可したい場合、そのIAMユーザーのポリシーは以下のようになります。{"Version"： "2012-10-17"、 "Statement"：[{"Effect"： "Allow "、"アクション "：[" aws-portal：ViewUsage "]、" Resource "：" * "}]}参照：http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissionsref.html'
  }
  , {
    description: "AWSからの承認を受けなくても、1つの地域で複数のcg1.4x大規模オンデマンドインスタンスを実行できますか？"
    , multiple_answer: false
    , answers: [
      {description: "20", correct: false}
      , {description: "2", correct: true}
      , {description: "5", correct: false}
      , {description: "10", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '一般に、AWS EC2では、オンデマンドインスタンス20個とスポットインスタンス100個を同時に実行できます。 この制限はhttps://aws.amazon.com/contact-us/ec2-requestでリクエストすることで増やすことができます。 特定のタイプのインスタンスを除いて、制限は上記のものよりも低くなります。 cg1.4xlargeの場合、ユーザーは一度に2つのオンデマンドインスタンスしか実行できません。参照：http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ec2'
  }
  , {
    description: "EC2インスタンス上で動作するアプリケーションがあります。このアプリケーションは、事前署名されたURLを使用して、プライベートS3バケットからfliesをダウンロードできます。 URLを生成する前に、アプリケーションはS3でファイルの存在を確認する必要があります。アプリケーションがAWS認証を使用してS3バケットに安全にアクセスする方法は？"
    , multiple_answer: false
    , answers: [
      {description: "AWSアカウントへのアクセスを使用するアプリケーションは、アプリケーションのソースコードから資格情報を取得します。", correct: false}
      , {description: "S3バケットへのリストアクセスをIAMユーザーとして許可し、EC2インスタンスユーザーデータからIAMユーザーの資格情報を取得する権限を持つアプリケーションのIAMユーザーを作成します。", correct: false}
      , {description: "S3バケット内のオブジェクトへのリストアクセスを許可するEC2のIAMロールを作成します。ロールを使用してインスタンスを起動し、EC2インスタンスのメタデータからロールの資格情報を取得します", correct: true}
      , {description: "S3バケットへのリストアクセスを許可する権限を持つアプリケーションのIAMユーザーを作成します。アプリケーションは、アプリケーションユーザーのみに読み取りアクセスを許可するアクセス権を持つ一時ディレクトリからIAMユーザー資格情報を取得します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon RDS APIは、VPC内のDBインスタンスを変更し、DBSecurityグループと関連付けるアクションを提供しますか？"
    , multiple_answer: false
    , answers: [
      {description: "はい、Amazonはこれを行いますが、MySQL RDSのみです。", correct: false}
      , {description: "はい", correct: true}
      , {description: "いいえ", correct: false}
      , {description: "はい、Amazonはこれを行いますが、Oracle RDSのみです。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon RDS APIで使用可能なModify DB Instanceアクションを使用して、インスタンスに含めるインスタンスIDとDBセキュリティグループを指定するパラメータDBインスタンス識別子とDBセキュリティグループの値を渡すことができます。参照：http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html'
  }
  , {
    description: "S3バケットとオブジェクトへのアクセスを制御するには："
    , multiple_answer: false
    , answers: [
      {description: "個人およびアクセス管理（IAM）ポリシー。", correct: false}
      , {description: "アクセス制御リスト（ACL）。", correct: false}
      , {description: "バケットポリシー。", correct: false}
      , {description: "他の選択肢全て", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "顧客は単一のシステム内でログストリーム（アクセスログアプリケーションログのセキュリティログなど）を統合しようとしています。 一旦統合されると、顧客はヒアリスティクスに基づいてこれらのログをリアルタイムで分析したいと考えています。 過去12時間に抽出したデータサンプルに戻す必要があるヒューリスティックを検証する必要がありますか？お客様の要件を満たす最善のアプローチは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "すべてのログイベントをAmazon SQSに送信し、EC2サーバーのAuto Scalingグループを設定してログを消費し、ヒューリスティックを適用します。", correct: false}
      , {description: "すべてのログイベントをAmazon Kinesisに送信し、クライアントプロセスを開発してログにヒューリスティックを適用します。", correct: true}
      , {description: "カスタムログを受信し、EMRを使用してヒューリスティックをログに適用するようにAmazon Cloudutilを設定します。", correct: false}
      , {description: "EC2 syslogdサーバのAuto Scalingグループを設定し、S3にログを保存し、EMRを使用してログにヒアリアーションを適用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon EC2のIAMロールのコンテキストでは、API要求を行うための許可を抹消することはできません。"
    , multiple_answer: false
    , answers: [
      {description: "IAMロールを作成することはできません。", correct: true}
      , {description: "アプリケーションで一時的な資格情報のセットを取得して使用させることができます。", correct: false}
      , {description: "インスタンスの起動時にロールを指定できます。", correct: false}
      , {description: "あなたはどのアカウントまたはAWSサービスがその役割を果たすことができるかを定義できます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazonは、アプリケーションが使用するセキュリティ資格情報を管理することなく、アプリケーションがインスタンスからAPI要求を安全に行うことができるようにIAMロールを設計しました。 AWS資格情報を作成して配布する代わりに、次のようにIAMロールを使用してAPIリクエストを作成する権限を委任できます。IAMロールを作成します。 役割を引き受けることができるアカウントまたはAWSサービスを定義します。役割を引き受けた後にアプリケーションが使用できるAPIアクションとリソースを定義します。 インスタンスの起動時にロールを指定します。 アプリケーションに一時的な資格情報のセットを取得させ、それらを使用させる。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html'
  }
  , {
    description: "組織では、AWS VPCとELBを使用してセキュアでスケーラブルなアプリケーションを作成する予定です。この組織にはすでに2つのインスタンスが実行されており、各インスタンスにはプライマリネットワークインターフェイスに加えてENIが関連付けられています。 プライマリネットワークインターフェイスと追加のENIの両方には、エラスティックIPが接続されています。 これらのインスタンスがELBに登録されており、組織がELBがインスタンスの特定のEIPにデータを送信することを希望する場合、どのようにしてこれを達成できますか？"
    , multiple_answer: false
    , answers: [
      {description: "組織は、ELBトラフィックを受信するために必要なIPがプライマリネットワークインターフェイスに接続されていることを確認する必要があります。", correct: true}
      , {description: "ELBに2つのENIがあるインスタンスにIP競合エラーが発生するため、インスタンスをアタッチすることはできません。", correct: false}
      , {description: "組織は、ELBトラフィックを受信するために必要なIPが追加のENIに接続されていることを確認する必要があります。", correct: false}
      , {description: "ELBがいずれかのEIPに送信する際に、特定のIPにデータを送信することはできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "複数のAWSデータパイプラインスケジュールを同じパイプライン内の異なるアクティビティについて定義するタスクが与えられました。 次のうちどれがこの作業を成功裏に達成するでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "複数のパイプライン定義ファイルを作成する", correct: false}
      , {description: "スケジュールオブジェクトファイルに複数のパイプライン定義を定義し、スケジュールフィールドを使用して目的のワークフローを正しいアクティビティに関連付ける", correct: false}
      , {description: "パイプライン定義ファイルで複数のスケジュールオブジェクトを定義し、スケジュールフィールドを使用して適切なアクティビティを適切なアクティビティに関連付ける", correct: true}
      , {description: "スケジュールフィールドに複数のスケジュールオブジェクトを定義する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ユーザーがElastiCacheをアプリケーション用に設定し、起動していればAmazonはそのサービスを提供しません。"
    , multiple_answer: false
    , answers: [
      {description: "クライアントプログラムがキャッシュクラスタ内のすべてのノードを自動的に識別し、これらのノードすべてへの接続を開始し維持する機能", correct: false}
      , {description: "障害検出と復旧、ソフトウェアパッチ作成などの一般的な管理タスクの自動化", correct: false}
      , {description: "異なるタイプのデータに対して、AWS Elasticache Redis実装でデフォルトのTTLを提供する。", correct: true}
      , {description: "キャッシュノードに関連付けられた詳細な監視メトリックを提供し、問題を迅速に診断して対応することができます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazonは、障害検出と回復、およびCloudWatchと呼ばれるソフトウェアのパッチと監視ツールを提供しています。 さらに、Amazon ElastiCacheのキャッシュクラスタのすべてのノードを自動的に識別して初期化するAuto Discoveryも提供しています。参照：http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/WhatIs.html'
  }
  , {
    description: "あなたの会社は、東京、支店などに本社を持ち、日本、ヨーロッパ、米国のAWSにマルチリージョン展開されたロジスティクスソフトウェアを使用しています。ロジスティックソフトウェアは3層アーキテクチャーで、現在データ用にMySQL 5.6を使用しています持続性。各地域で独自のデータベースが導入されていますHQ地域では、すべての地域からのデータを読み取る毎時バッチ処理を実行し、電子メールですべてのオフィスに送信される地域別レポートを計算します。このバッチ処理は、どのように要件を満たすためにデータベースアーキテクチャを構築するのですか？"
    , multiple_answer: false
    , answers: [
      {description: "各地域の展開では、地域のマスターとRDS MySQLを使用し、HQ地域の読み取りレプリカを使用します", correct: true}
      , {description: "各地域の展開には、地域のマスターと一緒にEC2のMySQLを使用し、HQ地域に毎時EBSスナップショットを送信します", correct: false}
      , {description: "各地域の展開には、地域のマスターと一緒にRDS MySQLを使用し、HQ地域に毎時RDSスナップショットを送信します", correct: false}
      , {description: "各地域の展開では、地域のマスターと一緒にEC2でMySQLを使用し、S3を使用してデータファイルをHQ地域に毎時コピーします", correct: false}
      , {description: "ダイレクトコネクトを使用して、地域のMySQL展開をすべてHQ領域に接続し、バッチ処理のネットワーク待ち時間を短縮します", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ユーザがMySQL RDSをPIOPSで設定しています。 ユーザーがプロビジョニングする必要がある最小限のPIOPSは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "1000", correct: true}
      , {description: "200", correct: false}
      , {description: "2000", correct: false}
      , {description: "500", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'ユーザがMySQL RDSでPIOPSを有効にしようとしている場合、ストレージの最小サイズは100 GB、最小PIOPSは1000でなければなりません。参照：http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.html'    	
  }
  , {
    description: "AWS CodeDeployを使用して、anAmazon仮想プライベートクラウド（VPC）内で実行中のAmazon EC2インスタンスにアプリケーションをデプロイする場合。 これを可能にするためにはどのような基準を満たさなければならないのですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon EC2インスタンスにインストールされたAWS CodeDeployエージェントは、公開されたAWS CodeDeployエンドポイントにのみアクセスできる必要があります。", correct: false}
      , {description: "Amazon EC2インスタンスにインストールされたAWS CodeDeployエージェントは、公開Amazon S3サービスエンドポイントにのみアクセスできる必要があります。", correct: false}
      , {description: "Amazon EC2インスタンスにインストールされたAWS CodeDeployエージェントは、PFAWA CodeDeployおよびAmazon S3サービスエンドポイントにアクセスできる必要があります。", correct: true}
      , {description: "現在のところ、AWS CodeDeployを使用して、Amazon Virtual Private Cloud（VPC）内でAmazon EC2インスタンスを実行するアプリケーションを展開することはできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS CodeDeployを使用して、Amazon Virtual Private Cloud（VPC）内で動作するAmazon EC2インスタンスにアプリケーションをデプロイできます。 ただし、Amazon EC2インスタンスにインストールされたAWS CodeDeployエージェントは、公開AWS CodeDeployおよびAmazon S3サービスエンドポイントにアクセスできる必要があります。参照：http://aws.amazon.com/codedeploy/faqs/'
  }
  , {
    description: "VPCで起動されたRDSインスタンスでプロビジョニングされたIOPSを使用できますか？"
    , multiple_answer: false
    , answers: [
      {description: "はい、Oracleベースのインスタンスでのみ使用できます。", correct: false}
      , {description: "はい、すべてのRDSインスタンスに使用できます。", correct: true}
      , {description: "いいえ", correct: false}
      , {description: "はい、MySQLベースのインスタンスでのみ使用できます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon RDSの基本ビルディングブロックはDBインスタンスです。 DBインスタンスストレージには、磁気、汎用（SSD）、およびプロビジョニングIOPS（SSD）の3種類があります。 サーバーを購入すると、CPU、メモリ、ストレージ、およびIOPSがすべてバンドルされます。 Amazon RDSでは、これらを分割して独立して拡張できます。 したがって、たとえば、より多くのCPU、少ないIOPS、またはより多くのストレージが必要な場合は、簡単に割り当てることができます。参照：http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/RDSFAQ.PIOPS.html'
  }
  , {
    description: "AWS Data Pipelineの次のコンポーネントのうち、タスクをポーリングしてそのタスクを実行するものはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "パイプライン定義", correct: false}
      , {description: "タスクランナー", correct: true}
      , {description: "Amazon弾性マップリデュース（EMR）", correct: false}
      , {description: "AWSダイレクトコネクト", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'タスクランナーはタスクをポーリングし、それらのタスクを実行します。参照：http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/what-isdatapipeline.html'
  }
  , {
    description: "AWS Direct Connect自体には、アクセスを制御するための特別なリソースはありません。 したがって、アイデンティティおよびアクセス管理（IAM）ポリシーで使用するAWS（直接接続Amazonリソース名）はありません。 これを念頭に置いて、AWSDirect Connectアクションへのアクセスを制御するポリシーを作成するにはどうすればよいですか？"
    , multiple_answer: false
    , answers: [
      {description: "リソース名フィールドを空白のままにすることができます。", correct: false}
      , {description: "リソースとしてAWS Direct Connectionの名前を選択できます。", correct: false}
      , {description: "アスタリスク（*）をリソースとして使用できます。", correct: true}
      , {description: "リソースの名前を作成できます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Direct Connect自体には、アクセスを制御するための特別なリソースはありません。 したがって、IAMポリシーで使用するAWS Direct Connect ARNはありません。 アスタリスク（*）をリソースとして使用して、AWSダイレクトコネクトのアクションへのアクセスを制御するポリシーを作成します。参照：http://docs.aws.amazon.com/directconnect/latest/UserGuide/using_iam.html'
  }
  , {
    description: "IAMの役割に付加する2つのポリシーは、アクセスポリシーと信頼ポリシーです。 Thetrustポリシーは、誰がAWSラムダアカウントのプリンシパルの役割を担うことができるかを確認し、AWSラムダアカウントのプリンシパルに________________アクションを許可します。"
    , multiple_answer: false
    , answers: [
      {description: "aws:AssumeAdmin", correct: false}
      , {description: "lambda:InvokeAsync", correct: false}
      , {description: "sts:InvokeAsync", correct: false}
      , {description: "sts:AssumeRole", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMの役割に付加する2つのポリシーは、アクセスポリシーと信頼ポリシーです。 役割の信頼ポリシーにアカウントを追加することは、信頼関係を確立することの半分に過ぎないことに注意してください。 デフォルトでは、信頼できるアカウントのユーザーは、そのアカウントの管理者が、役割のAmazon ResourceName（ARN）をsts：AssumeRoleアクションのAllow要素に追加することで、ユーザーが役割を引き受ける権限をユーザーに付与するまで、 リファレンス：http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_modify.html'
  }
  , {
    description: "組織は、アプリケーションがonAWSだけでなく実行されるマルチサイトソリューションを設定して、最小復旧時間目標（RTO）を達成しています。 次のうち、マルチサイトソリューションシナリオの要件を満たしていない構成はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "RTOに基づいたデータ複製の設定。", correct: false}
      , {description: "完全な容量のAWSと同様に、前提条件で実行されているアプリケーションを保留します。", correct: false}
      , {description: "両方のサイトからアクセスされる単一のDBインスタンスを設定します。", correct: true}
      , {description: "ルート53のような重み付けされたDNSサービスを設定して、サイト間でトラフィックをルーティングします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSには、DR（Disaster recovery）とHA（High Availability）のための多くのソリューションがあります。 組織がマルチサイトソリューションを使用してHAとDRを使用する場合は、1つは構内、もう1つはAWSでフルキャパシティを設定する必要があります。 組織は、加重されたDNSサービスをセットアップして、加重年齢に基づいて両方のサイトにトラフィックをルーティングする必要があります。 サイトの1つに障害が発生すると、負荷全体を別のサイトにルーティングできます。このシナリオでは、組織のRTOは最小限に抑えられます。 組織が単一のDBインスタンスを設定する場合、フェールオーバーではうまく機能しません。代わりに、各サイトに2つの別個のDBがあり、組織のRTO（復旧時間目標）に基づいてデータ複製をセットアップする必要があります。参照：http://d36cz9buwru1tt.cloudfront.net/AWS_Disaster_Recovery.pdf'
  }
  , {
    description: "あなたの会社は、文書の保存と共有のためにソーシャルメディアのウェブサイトを運営しています。 Webアプリケーションを使用すると、大きなファイルをアップロードしながら、必要に応じてアップロードを再開して一時停止することができます。 現在、ファイルはElastic load balancingに基づいてPHPフロントエンドにアップロードされ、受け取ったバイト数の平均（NetworkIn）に基づいたAmazon Elastic Compute Cloud（EC2）インスタンスのオートスケーリング艦隊にアップロードされます。 ファイルがアップロードされると、Amazon Simple Storage Service（S3）にコピーされます。 Amazon EC2インスタンスは、Amazon S3のアップロードを許可するAWS Identity and Access Management（IAM）ロールを使用します。 過去6ヶ月間にユーザーベースとスケールが大幅に増加し、AutoScalingグループのMaxパラメーターを数回増やす必要がありました。 CFOはコストの上昇を懸念しており、必要に応じてコストを最適化するためにアーキテクチャを調整するよう依頼しています。アーキテクチャを変更してコストを削減し、Webアプリケーションを安全かつスケーラブルに保つことができますか？"
    , multiple_answer: false
    , answers: [
      {description: "Auto Scalingの起動設定を、c3.8xlargeインスタンスを含むように変更します。それらのインスタンスは潜在的に10Gbpsのネットワークスループットをもたらす可能性があります。", correct: false}
      , {description: "あなたの取り込みパターンを再設計し、アイデンティティプロバイダに対してアプリケーションを認証させ、アイデンティティプロバイダをAWSセキュアトークンサービス（GetFederationToken）から一時的なAWS資格情報を取得するブローカーとして使用します。認証情報とS3エンドポイント/プレフィックスをアプリに安全に渡します。クライアント側のロジックを実装して、指定されたクレデンシャルとS3接頭辞を使用してファイルをAmazon S3に直接アップロードします。", correct: false}
      , {description: "取り込みパターンを再構築し、WebアプリケーションインスタンスをVPCパブリックサブネットに移動します。 各EC2インスタンスのパブリックIPアドレスを（自動スケーリング起動設定を使用して）アタッチします。Amazon Route 53ラウンドロビンレコードセットを使用し、HTTPヘルスチェックからDNSへのアプリケーションリクエストの負荷分散を行います。 この方法では、Elastic Load Balancingをバイパスしてコストを大幅に削減します。", correct: true}
      , {description: "あなたの取り込みパターンを再設計し、アイデンティティプロバイダに対してアプリケーションを認証させ、AWSセキュアトークンサービス（GetFederationToken）から一時的なAWS資格情報を取得するブローカーとしてアイデンティティプロバイダを使用します。 認証情報とS3エンドポイント/プレフィックスをアプリに安全に渡します。 S3 multipartアップロードAPIを使用して、指定された資格情報とS3接頭辞を使用してファイルをAmazon S3に直接アップロードするクライアント側のロジックを実装します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IAMのステートメントID（Sid）に関する真のステートメントを特定します。"
    , multiple_answer: false
    , answers: [
      {description: "IAM APIでSidを公開することはできません。", correct: true}
      , {description: "SQSおよびSNSが提供するサービスのポリシー文書のIDのサブIDとしてSid値を使用することはできません。", correct: false}
      , {description: "IID APIでSidを公開することができます。", correct: false}
      , {description: "ステートメント配列の各ステートメントにSid値を割り当てることはできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Sid（ステートメントID）は、ポリシーステートメントに指定するオプションの識別子です。 ステートメント配列の各ステートメントにSidに値を割り当てることができます。 IAMでは、SidはIAM APIに公開されていません。 このIDに基づいて特定のステートメントを取得することはできません。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Sid'
  }
  , {
    description: "ExamKillerには3つの部門があり、各部門にはそれぞれ独自のAWSアカウントがあります。 HRdepartmentは、ロールオンの従業員のすべてのデータがアップロードされるファイル共有サイトを作成しました。 従業員の在籍に関するデータをVPCでホストされているDBにアップロードします。財務部はHR部門のデータにアクセスして、従業員がいる日数に基づいて給与計算を計算します ExamKillerはこのシナリオをどのようにセットアップできますか？"
    , multiple_answer: false
    , answers: [
      {description: "各部門に別々のAWSアカウントがあるため、VPCピアリングを設定することはできません。", correct: false}
      , {description: "AdminおよびFinanceのVPCのためのVPCピアリングの設定。", correct: false}
      , {description: "FinanceとHRのVPCと、FinanceとAdminのVPC間のVPCピアリングを設定します。", correct: true}
      , {description: "AdminとHRのVPCのためのD.Setup VPCピアリング", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "オンプレミスインフラストラクチャとAmazon VPC間の接続ソリューションを設計しています。オンプレミスの自宅がVPCインスタンスと通信します。 VPNゲートウェイを使用し、AWSでサポートされているカスタマーゲートウェイでIPSecトンネルを終了させます。次の目的は、上に概説したようにIPSecトンネルを実装することで達成できますか？"
    , multiple_answer: true
    , answers: [
      {description: "通過中のデータの完全な保護", correct: false}
      , {description: "エンドツーエンドのアイデンティティ認証", correct: false}
      , {description: "インターネットを介したデータの暗号化", correct: true}
      , {description: "インターネット上での転送中のデータの保護", correct: true}
      , {description: "VPNゲートウェイと顧客ゲートウェイ間のピア識別認証", correct: true}
      , {description: "インターネットを介したデータの完全性の保護", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "新しいモバイルアプリケーションを開発しており、AWS.2wのユーザー環境設定を保存することを検討しています。複数のモバイルデバイスを使用してアプリケーションにアクセスするユーザーに、より均一なクロスデバイスエクスペリエンスを提供します。各ユーザーの嗜好データは50KBと見積もられており、さらに5百万人のお客様が定期的にアプリケーションを使用する予定です。ソリューションは、有効性が高く、可用性が高く、拡張性があり、安全である必要があります。その要件を満たすソリューションを設計するにはどうすればよいでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "ユーザー設定データを格納する2つの可用性ゾーンにRDS MySQLインスタンスを設定します。データベースの前にあるサーバーに、アプリケーションを公開して、セキュリティとアクセス資格情報を管理する", correct: false}
      , {description: "userpreferencesを保持するために必要な属性を持つ各ユーザーの項目を含むDynamoDBテーブルを設定します。モバイルアプリケーションは、DynamoDBtable.Utilize STSから直接ユーザープリファレンスを照会します。 Web Identity Federation、およびDynamoDB Fine Grained Access Controlを使用してアクセスを認証および認証します。", correct: true}
      , {description: "2つの可用性ゾーンに複数の読み取りレプリカを持つRDS MySQLインスタンスを設定して、ユーザーの参照データを格納します。モバイルアプリケーションは、読み取ったレプリカからユーザープリファレンスを照会します。", correct: false}
      , {description: "S3のユーザー設定データを保存します。各ユーザーのアイテムとユーザーのS3オブジェクトを指し示す属性を持つDynamoDBテーブルを設定します。モバイルアプリケーションは、S3 URLをDynamoDBから取得し、S3オブジェクトに直接アクセスして、STS、Web IDフェデレーション、およびS3 ACLを直接利用してアクセスを認証し、認証します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織がアプリケーション用にRDSを設定しています。 組織はVPCでRDSアクセスを保護したいと考えています。 VPCを使用してRDSを設計するときには、次のオプションのどれを選択する必要はありませんか？"
    , multiple_answer: false
    , answers: [
      {description: "組織は、パブリックサブネットとプライベートサブネットを持つサブネットグループを作成する必要があります。 どちらのサブネットも同じAZまたは別個のAZになることができます。", correct: true}
      , {description: "組織は、RDSフェールオーバーのために予約された各サブネットに最低1つのIPアドレスを保持する必要があります。", correct: false}
      , {description: "組織がインターネットからRDSに接続している場合は、DNSホスト名とDNS解決のVPC属性を有効にする必要があります。", correct: false}
      , {description: "組織は、別個のAZである複数のサブネットを使用してVPCを使用してサブネットグループを作成する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたの会社は現在、オンプレミスのデータセンターで実行されている2層のWebアプリケーションを持っています。過去2ヶ月でいくつかのインフラストラクチャの障害が発生し、財務的に重大な損失が発生しました.CIOはアプリケーションをAWSに移行することに強く同意します。 他の会社の役員に買収を達成しながら、短期的にはビジネスの継続性を向上させるための災害復旧計画を作成するよう依頼します。 彼は、目標復旧時間目標（RTO）を4時間、復旧ポイント目標（RPO）を1時間以下と定めています。 また、2週間以内にソリューションの実装を依頼します。 あなたのデータベースのサイズは200GBで、20Mbpsのインターネット接続があります。 あなたはコストを最小限に抑えながらどのようにしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "アプリケーションの新規インストールが含まれているEBSでサポートされているプラ​​イベートAMIを作成します。複数の可用性ゾーンにわたるアプリケーションの展開をサポートするために、AMIと必要なEC2、AutoScaling、およびELBリソースを含むaCloudFormationテンプレートを開発します。オンプレミスデータベースから安全なVPN接続を介してAWSのデータベースインスタンスに非同期にトランザクションをレプリケートします。", correct: true}
      , {description: "複数の可用性ゾーンにわたるAuto Scalingグループ内のEC2インスタンスにアプリケーションをデプロイします。 オンプレミスデータベースからセキュリティ保護されたVPN接続を介してAWSのデータベースインスタンスにトランザクションを非同期でレプリケートします。", correct: false}
      , {description: "アプリケーションの新規インストールが含まれているEBSバックアップのプライベートAMIを作成します。 1時間ごとにローカルデータベースをバックアップし、マルチパートアップロードを使用してS3バケットに暗号化してコピーするスクリプトをデータセンターに設定します。", correct: false}
      , {description: "アプリケーションの平均負荷をサポートできるコンピューティングに最適化されたEC2インスタンスにアプリケーションをインストールします。 セキュアなダイレクトコネクト接続を介して、オンプレミスデータベースからAWSのデータベースインスタンスにトランザクションを同期レプリケートします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織（口座ID 123412341234）がIAMポリシーを設定して、ユーザーが自分の信用状を変更できるようにしました。 下記の声明では、ユーザーは何を実行できるのですか？{\"Version\": \"2012-10-17\",\"Statement\": [{\"Effect\": \"Allow\",\"Action\": [\"iam:AddUserToGroup\",\"iam:RemoveUserFromGroup\",\"iam:GetGroup\"],\"Resource\": \"arn:aws:iam:: 123412341234:group/TestingGroup\"}]]"
    , multiple_answer: false
    , answers: [
      {description: "IAMユーザーに、TestingGroupというグループのメンバシップを更新するように許可します。", correct: true}
      , {description: "IAMポリシーは、無効なリソース名のためにエラーをスローします。", correct: false}
      , {description: "IAMポリシーにより、ユーザーは任意のIAMグループに加入できます", correct: false}
      , {description: "IAMユーザーにTestingGroupの削除を許可します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織は、VPCを使用して開始された単一のインスタンスで、Wordpressブログとjoomla CMSをホストする予定です。組織は、アプリケーションごとに別々のドメインを持ち、ルート53を使用して割り当てる必要があります。組織には、前述のように2つのアプリケーションがそれぞれ約10個のインスタンスがあります。このインスタンスを起動すると、組織は2つの別個のネットワークインターフェイス（プライマリ+ ENI）弾性IPの数が制限されていないので、弾性IPの代わりにAWSから公開IPを使用することが提案されました。組織にどのような行動を推奨しますか？"
    , multiple_answer: false
    , answers: [
      {description: "私は提案に同意しますが、組織が異なる公開IPに対して別個のサブネットを使用することを推奨します。", correct: false}
      , {description: "複数のENIを持つインスタンスには複数のENIを持つインスタンスにパブリックIPを割り当てないため、エラスティックIPのみを持つ必要があるため、私は同意しません。", correct: true}
      , {description: "AWS VPCが公開IPをENIに添付しないため、私は同意しません。ユーザは非弾性IPのみを使用しなければならない。", correct: false}
      , {description: "提案に同意します。組織が経路53でDNSを使用するため、AWSから公開IPを使用することをお勧めします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWS IAMのコンテキストでは、ユーザパスワード（ログインプロファイル）に関する真の記述を識別します。"
    , multiple_answer: false
    , answers: [
      {description: "それらにはUnicode文字が含まれている必要があります。", correct: false}
      , {description: "基本的なラテン文字（ASCII）を含むことができます。", correct: true}
      , {description: "スラッシュ（/）で始まり、終わりにする必要があります。", correct: false}
      , {description: "基本ラテン文字（ASCII）は使用できません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMユーザーのユーザーパスワード（ログインプロファイル）には、任意のBasic Latin（ASCII）文字を含めることができます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html'
  }
  , {
    description: "AWS IAMでは、次の定義済みポリシー条件キーのどれが、マルチファクタ認証（MFA）を使用して発行されたMFAで検証されたセキュリティ資格証明書がどれぐらい前（何秒）前にチェックされましたか？"
    , multiple_answer: false
    , answers: [
      {description: "aws:MultiFactorAuthAge", correct: true}
      , {description: "aws:MultiFactorAuthLast", correct: false}
      , {description: "aws:MFAAge", correct: false}
      , {description: "aws:MultiFactorAuthPrevious", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS：MultiFactorAuthAgeは、AWSによって提供される定義済みキーの1つで、IAMポリシーのCondition要素に含めることができます。 このキーを使用すると、マルチファクタ認証（MFA）を使用して要求を発行したMFAで検証されたセキュリティ資格情報を、どれくらい前に（秒単位で）確認することができます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_ElementDescriptions.html'
  }
  , {
    description: "会社は最近、AWSのVPCにデータセンターを拡張し、必要なバーストコンピューティング能力を追加しました。ネットワークオペレーションセンターのメンバーは、AWSManagementConsoleにアクセスし、必要に応じてAmazon EC2インスタンスを管理できる必要があります。 IAMユーザーはNOCメンバーに参加し、それらのユーザーをAWS管理コンソールに再度サインインします。どのオプションがあなたのNOCメンバーのニーズを満たしますか？"
    , multiple_answer: false
    , answers: [
      {description: "OAuth 2.0を使用して一時的なAWSセキュリティ資格情報を取得し、NOCメンバーがAWS管理コンソールに署名できるようにします。", correct: false}
      , {description: "Web Identity Federationを使用してAWS臨時セキュリティ資格情報を取得し、NOCメンバーがAWS Management Consoleにサインインできるようにします。", correct: false}
      , {description: "オンプレミスのSAML 2.0準拠アイデンティティプロバイダ（IDP）を使用して、AWSシングルサインオン（SSO）エンドポイント経由でAWS管理コンソールへのNOCメンバのアクセスを許可します。", correct: false}
      , {description: "社内のSAML2.0-Complam Identity Provider（IDP）を使用して一時的なセキュリティクレデンシャルを取得し、NOCメンバーがAWS Management Consoleにサインインできるようにします。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon VPCでは、パールートテーブルが許可されているBGP公示ルートのデフォルト最大数はいくらですか？"
    , multiple_answer: false
    , answers: [
      {description: "15", correct: false}
      , {description: "100", correct: true}
      , {description: "5", correct: false}
      , {description: "10", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'ルートテーブルごとに許可されるBGPアドバタイズドルートの最大数は100です。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html'
  }
  , {
    description: "デフォルトで送信元/宛先のチェックを実行するEC2インスタンスが、privateVPCサブネットで起動されます。すべてのセキュリティ、NACL、およびルーティング定義は、期待どおりに構成されます。 カスタムNATインスタンスは起動されます。カスタムNATインスタンスを動作させるには、次のうちどれを実行する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "NATインスタンスで送信元/宛先チェックを無効にする必要があります。", correct: true}
      , {description: "NATインスタンスはパブリックサブネットで起動する必要があります。", correct: false}
      , {description: "NATインスタンスはパブリックIPアドレスで設定する必要があります。", correct: false}
      , {description: "NATインスタンスは、弾性IPアドレスで構成する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '各EC2インスタンスは、デフォルトでソース/宛先チェックを実行します。 つまり、インスタンスは送信または受信するトラフィックの送信元または送信先でなければなりません。 ただし、NATインスタンスは、送信元または送信先がそれ自身ではない場合、トラフィックを送受信できる必要があります。 したがって、NATインスタンスで送信元/宛先のチェックを無効にする必要があります。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html#EIP_Disable_SrcDestCheck'
  }
  , {
    description: "次のうちAWSデータパイプラインを使用して実行できないものはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "耐障害性、再現性、可用性の高い複雑なデータ処理ワークロードを作成します。", correct: false}
      , {description: "保存したデータに規則正しくアクセスし、変換して大量に処理し、結果を別のAWSサービスに効率的に転送します。", correct: false}
      , {description: "Generateは、格納されたデータを報告します。", correct: true}
      , {description: "指定された間隔で、異なるAWS計算サービスとストレージサービス間、およびオンプレミスデータソース間でデータを移動します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Data Pipelineは、指定された間隔で、異なるAWS計算サービスとストレージサービス、オンプレミスデータソース間で確実にデータを処理し、移動するのに役立つWebサービスです。 AWS Data Pipelineを使用すると、保存されたデータに定期的にアクセスし、変換して処理し、結果を別のAWS.AWSデータ・パイプラインに効率的に転送して、フォールト・トレラントで反復可能な複雑なデータ処理ワークロードを簡単に作成できます。 高可用性。 AWS Data Pipelineでは、以前は社内のデータサイロでロックされていたデータを移動して処理することもできます。参照：http://aws.amazon.com/datapipeline/'
  }
  , {
    description: "Amazon Cognito IDプールはどのようなIDをサポートしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "これらは、認証されたアイデンティティと認証されていないアイデンティティの両方をサポートします。", correct: true}
      , {description: "これらは、認証されていないアイデンティティのみをサポートします。", correct: false}
      , {description: "これらは、認証されていないアイデンティティもサポートしていません。", correct: false}
      , {description: "これらは、認証されたアイデンティティだけをサポートします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon SNSでは、Amazon SNSとADMを使用してモバイルデバイスにプッシュ通知を送信するには、次の点を除く必要があります。"
    , multiple_answer: false
    , answers: [
      {description: "デバイストークン", correct: true}
      , {description: "Client ID", correct: false}
      , {description: "登録ID", correct: false}
      , {description: "クライアント秘密", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon SNSとADMを使用してモバイルデバイスにプッシュ通知を送信するには、次の情報を取得する必要があります。登録IDとクライアントの秘密 参照：http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushPrereq.html'
  }
  , {
    description: "WebアプリケーションのAWSへの移行を設計する必要があります。このアプリケーションは、カスタムWebサーバーを実行するLinux Webサーバーで構成されています。アプリケーションから生成されたログを永続的な場所に保存する必要があります。アプリケーションをAWSに移行するために選択できるオプションは何ですか？ （2つを選択）"
    , multiple_answer: true
    , answers: [
      {description: "カスタムWebサーバープラットフォームを使用して、AWS Elastic Beanstalkアプリケーションを作成します。 webserver実行可能ファイルとアプリケーション・プロジェクトおよびソース・ファイルを指定します。 AmazonSimpleStorage Service（S3）へのログファイルのローテーションを有効にします。", correct: true}
      , {description: "アプリケーションのDockerfileを作成します。 Dockerをインストールするカスタムレシピを作成し、Dockerfile.Createcustomerレシピを使用してDockerコンテナを展開して、Amazon CloudWatchLogsにログを公開するようにアプリケーションをインストールおよび設定します。", correct: false}
      , {description: "アプリケーションのDockerfileを作成します。 Dockerレイヤーで構成されるAWS OpsWorksスタックを作成して、Dockerファイルを停止します。 Amazon Cloudworksにログを公開するようにAmazon Kinesesをインストールおよび設定するカスタムレシピを作成します。", correct: false}
      , {description: "アプリケーションのDockerfileを作成します。 DockerプラットフォームとDockerファイルを使用して、AWS Elastic Beanstalkアプリケーションを作成します。アプリケーションログを自動的に公開するようにDocker設定のログを有効にします。 Amazon S3へのログファイルローテーションを有効にします。", correct: true}
      , {description: "VMインポート/エクスポートを使用して、サーバーの仮想マシンイメージをAMIとしてAWSにインポートします。 AMIからAmazon Elastic Compute Cloud（EC2）インスタンスを作成し、AmazonCloudWatch Logsエージェントをインストールして設定します。インスタンスから新しいAMIを作成します。 AMIプラットフォームと新しいAMIを使用してAWS Elastic Beanstalkアプリケーションを作成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織がJEEスタックを使用してWebアプリケーションを設定しています。 アプリケーションは、JBossアプリケーションサーバーとMySQL DBを使用します。アプリケーションには、JEEアプリケーションのビジネス機能が呼び出されるたびにすべてのアクティビティを記録するログモジュールがあります。 ログ・ファイルのサイズが大きいため、ロギング・アクティビティに時間がかかります。 アプリケーションが以下のような拡張可能なインフラストラクチャをセットアップしたい場合、edoptionsがこの設定を達成するのに役立つでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "I / Oの高いPIOPSを使用してEBS上のログファイルをホストします。", correct: false}
      , {description: "ロギングとアプリケーションサーバーが別々のサーバーにあり、両方が同じゾーンにあるようにする。", correct: false}
      , {description: "ネットワークの待ち時間が短くなるようにロギングとアプリケーションサーバーを同じインスタンスにホステッドします。", correct: false}
      , {description: "ロギング用の別のモジュールを作成し、SQSを使用してモジュールのコンパイルを行い、すべてのロギングのロギングが非同期であるようにします。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '組織は、HAとDRの複数のAZにまたがって、常に同じ地域の複数のEC2インスタンスを起動できます。 AWSアーキテクチャのプラクティスでは、メインアプリケーションのパフォーマンスに影響を与えずに並列に実行できるように、機能をコンパートメント化することを推奨しています。 このシナリオでは、ログファイルのサイズが大きいため、ロギングに時間がかかります。 したがって、組織はそれらを分けて別々のモジュールを作り、それらの間で非同期呼び出しを行うことが推奨されます。 このようにして、アプリケーションは要件に従って拡張でき、パフォーマンスはロギングの影響を受けません。参照：http://www.awsarchitectureblog.com/2014/03/aws-and-compartmentalization.html'
  }
  , {
    description: "ExamKillerは、マルチテナントの学習管理システム（LMS）を作成しました。 アプリケーションは、テナントのそれぞれのAWSアカウントのVPC内の異なるテナント（クライアント）に対してホストされます。 ExamKillerは、必要に応じて各テナントアップグレードのLMSに接続できる集中サーバをセットアップします.ExamKillerは、セキュリティ上の理由から、1つのテナントVPCが他のVPCに接続できないようにしたいと考えています。 ExamKillerはこのシナリオをどのようにセットアップできますか？"
    , multiple_answer: false
    , answers: [
      {description: "ExamKillerは、テナントの他のすべてのVPCにピアリングする1つの集中VPCをセットアップする必要があります。", correct: true}
      , {description: "ExamKillerは、すべてのVPCが相互にピアリングされた状態でVPCピアリングを設定する必要がありますが、テナントVPCのCIDRからのIPをブロックして、それらを拒否します。", correct: false}
      , {description: "ExamKillerは、同じCIDRを持つすべてのVPCをセットアップする必要がありますが、集中型VPCを使用する必要があります。この方法では、集中型VPCだけがVPCピアリングを使用して他のVPCと通信できます。", correct: false}
      , {description: "ExamKillerは、すべてのVPCに対して、VPCピアリングと一緒にメッシュ化されたすべてのVPCをセットアップする必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたのチームには、開発、テスト、実稼働環境に展開する必要のあるTomcatベースのJavaアプリケーションがあります。 いくつかの調査の後で、Elastic Beanstalkは、開発ツールとRDSとの緊密な統合のために、使いやすさのために使用します。 あなたのQAチームのリードは、夜間にあなたの環境に浄化された生産データセットをロールする必要があることを指摘しています。同様に、組織の他のソフトウェアチームは、VPCのEC2インスタンスを介して同じ復元データにアクセスします。 上記の要件を満たす永続性とセキュリティーの設定は次のようになります。"
    , multiple_answer: false
    , answers: [
      {description: "Elastic Beanstalk定義の一部としてRDSインスタンスを作成し、アプリケーションサブネット内のホストからアクセスできるようにセキュリティグループを変更します。", correct: true}
      , {description: "RDSインスタンスを別々に作成し、コード内のアプリケーションのDB接続文字列にIPアドレスを追加します。セキュリティグループを変更して、VPCのIPアドレスブロック内のホストからのアクセスを許可します。", correct: false}
      , {description: "あなたのRDSインスタンスを別途作成し、そのDNS名を環境変数としてアプリケーションのDB接続文字列に渡します。 クライアントマシン用のセキュリティグループを作成し、DBトラフィックの有効なソースとしてRDSインスタンス自体のセキュリティグループに追加します。", correct: false}
      , {description: "RDSインスタンスを個別に作成し、そのDNS名を環境変数としてDB接続文字列に渡します。セキュリティグループを変更して、アプリケーションサブネット内のホストからアクセスできるようにします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IAMポリシー内の1つの条件に1つのキーに複数の値が含まれている場合は、______を使用して評価されます。"
    , multiple_answer: false
    , answers: [
      {description: "OR", correct: true}
      , {description: "NAND", correct: false}
      , {description: "NOR", correct: false}
      , {description: "AND", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMポリシー内の単一の条件に1つのキーに複数の値が含まれている場合、論理ORを使用して評価されます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html'
  }
  , {
    description: "あなたの会社は、特注の技術的な改良を加えて、独自のスキーヘルメットをカスタムメイドで製作しています。お客様は、スキー場で個性を披露し、ヘッドアップディスプレイにアクセスできます。 GPSリアビューカム、ヘルメットに組み込むことを望む他の技術革新。現在の製造プロセスは、ヘルメットを組み立てるのに使用されるカスタム電子機器と材料が最高の基準になるようにする評価を含む、データが豊富で複雑です。アセスメントは、 CUDAを使用してGPUを使用してカスタムエレクトロニクスの障害モードをモデル化するための新しい評価セットを追加する必要がある自動アセスメントがあります。どのアーキテクチャでハイブリッドアプローチを使用して既存のプロセスを自動化し、アーキテクチャは時間の経過とともにプロセスの進化をサポートできますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSデータパイプラインを使用してデータとメタデータの移動と評価を管理するプレースメントグループでG2インスタンスのオートスケーリンググループを使用します。", correct: false}
      , {description: "Amazon Simple Workflow（SWF）を使用して、アセスメント、データおよびメタデータの移動を管理します。プレースメントグループ内のG2インスタンスの自動スケーリンググループを使用します。", correct: true}
      , {description: "Amazon Simple Workflow（SWF）を使用して、データおよびメタデータの評価移動を管理します。SR-IOV（シングルルートI / O仮想化）を使用してC3インスタンスの自動スケーリンググループを使用します。", correct: false}
      , {description: "AWSデータを使用してデータおよびメタデータの移動を管理し、評価はC3の自動拡張グループをSR-IOV（シングルルートI / O仮想化）で使用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織はAWS上に高可用性（HA）と災害復旧（DR）の両方を持つアプリケーションを設定しています。 組織は、復旧ポイント目標（RPO）と回復時間目標（RTO）の両方を10分にすることを望んでいます。 次のどのサービス構成が、組織がRPOとRTOを達成するのに役立つものではありませんか？"
    , multiple_answer: false
    , answers: [
      {description: "10分ごとにデータのスナップショットを作成し、それを他の領域にコピーします。", correct: false}
      , {description: "実行中のインスタンスに割り当てるためのエラスティックIPを使用し、ルート53を使用して、そのIPでユーザーのドメインをマップします。", correct: false}
      , {description: "必要に応じて自動フェールオーバーを可能にするために、ELBをマルチリージョンルーティングで作成します。", correct: true}
      , {description: "AMIコピーを使用して、他の地域でAMIを利用できるようにします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWS Direct Connectを実装しています。 AWS Direct Connectリンク全体で、AWSの公的サービスのエンドポイント、例えば、Amazon S3を使用する予定です。他のインターネットトラフィックが既存のリンクをインターネットサービスプロバイダに使用するようにしたい場合は、Amazon S3などのサービスへのアクセスにAWS Direct接続を設定する正しい方法はありますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWSダイレクトコネクトリンクのパブリックインターフェイスを設定するAmazon S3を指すAWSDirect Connectリンク経由で静的ルートを設定するBGPを使用してAWSへのデフォルトルートを通知します。", correct: false}
      , {description: "AWS Direct Connectリンクにプライベートインターフェイスを作成します。 Amazon S3を指すAWSDirect接続リンクを介してスタティックルートを設定するVPC内のネットワークへの特定のルートを設定します。", correct: false}
      , {description: "AWSダイレクトコネクトリンクでパブリックインターフェイスを作成するBGPルートを再配布するインフラストラクチャに再配布します。ネットワークの特定のルートをAWSに広告する。", correct: true}
      , {description: "AWSダイレクト接続リンクにプライベートインターフェイスを作成します。 BGPルートを再配布するインフラストラクチャに再配布し、AWSへのデフォルトルートをアドバタイズします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "顧客は、Amazon Elastic Computer Cloud（EC2）でホストされているWebアプリケーションを持っているAWS地域への10 GB AWS Direct Connect接続を持っています。このアプリケーションは、ACID（Atomicity、Consistency isolation、Durability）整合性モデルではなく、BASE（Basic Available。Stale Eventual consistency）を使用するオンプレミスメインフレームデータベースに依存しています。データベースが書き込み量を処理できないため、アプリケーションは望ましくない動作を示しています。オンプレミスデータベースリソースの負荷を最も費用対効果の高い方法でどのように削減できますか？"
    , multiple_answer: false
    , answers: [
      {description: "AWS上のオンプレミスデータベースとHadoopクラスタ間の同期メカニズムとして、Amazon Elastic Map Reduce（EMR）S3DistCpを使用します。", correct: true}
      , {description: "アプリケーションを修正してAmazon SQSキューに書き込み、キューをオンプレミスデータベースにフラッシュするワーカープロセスを開発します。", correct: false}
      , {description: "マップ機能を使用してオンプレミスデータベースに書き込むEMRクラスタにDynamoDBを使用してフィードを適用するようにアプリケーションを変更します。", correct: false}
      , {description: "書き込みを処理し、データパイプラインを使用して2つのデータベースを同期するために、AWS上にRDS読み取り - 複製データベースをプロビジョニングします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "バッチ処理として使用されるEC2インスタンス間でメッセージキューを設定するためにSimple QueueService（SQS）を使用したバッチ処理ソリューションのアーキテクチャ図を参照Cloud Watchmonitorsジョブ要求（キューに入れられたメッセージ）の数とAuto Scalingグループは、Cloud Watchアラームで設定されたパラメータに基づいてバッチサーバーを自動的に追加または削除します。このアーキテクチャーを使用して、費用対効果の高い効率的な方法で次の機能のいずれかを実装できますか？"
    , multiple_answer: false
    , answers: [
      {description: "ビジー状態のEC2instancethatがデイジーチェーン設定で次のインスタンスにメッセージを渡すのを許可することによって、並列処理によってジョブを実行するための全体的な石灰を減らします。", correct: false}
      , {description: "メッセージはSQSに残り、EC2インスタンスの回復はS3へのバックアップメッセージによるSQS障害に対するフォールトトレランスを実装し続けるため、EC2インスタンスの障害に対するフォールトトレランスを実装します。", correct: false}
      , {description: "SQSを介してメッセージを交換することにより、バッチ内のEC2インスタンス間でメッセージの受け渡しを実装します。", correct: false}
      , {description: "ジョブ要求の数を自動的に調整してEC2インスタンスの数を調整し、効果を向上させます。プライオリティメタデータフィールドをSQSmessagesに割り当てることによって、優先度の低いジョブの前に優先度の高いジョブを処理します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "顧客は、1つのシステムでログストリーム（アクセスログアプリケーションログのセキュリティログなど）を統合しようとしています。 一旦統合されると、ヒューリスティックに基づいてこれらのログをリアルタイムで分析することが求められます。 顧客はヒューリスティックを検証する必要があります。ヒューリスティックは、過去12時間から抽出されたデータサンプルに戻る必要があります。 顧客の要件を満たすための最良のアプローチは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "すべてのログイベントをAmazon Kinesisに送信し、クライアントプロセスを開発して、ヒューリスティックをログに適用します。", correct: true}
      , {description: "カスタムログを受け取るAmazon CloudLogicを設定し、ヒューリスティックを適用するためにEMRを使用します。", correct: false}
      , {description: "すべてのログイベントをAmazon SQSに送信し、EC2サーバーのAuto Scalingグループを設定してログを消費し、ヒューリスティックを適用します。", correct: false}
      , {description: "EC2 syslogdサーバーのAuto Scalingグループを設定し、S3にログを保存し、EMRを使用してログにヒューリスティックを適用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "バケット所有者は、別のアカウントのIAMユーザーがバケット内のオブジェクトをアップロードまたはアクセスすることを許可しました。 アカウントAのIAMユーザーが、アカウントBのIAMユーザーによって作成されたオブジェクトにアクセスしようとしています。このシナリオでは何が起こりますか？"
    , multiple_answer: false
    , answers: [
      {description: "複数のIAMユーザーに許可を与えることはできません。", correct: false}
      , {description: "AWS S3は、アカウントAの所有者、バケツ所有者、およびIAMユーザーBがオブジェクトに与えた適切な権利を検証します。", correct: true}
      , {description: "S3はアクセス権の競合のためエラーが発生するため、バケットポリシーは作成されません。", correct: false}
      , {description: "あるアカウントのIAMユーザーが他のIAMユーザーのオブジェクトにアクセスすることはできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMユーザーが別のAWSユーザーのバケットに属するオブジェクトに対して何らかのアクションを実行しようとすると、S3はIAMユーザーの所有者が十分な許可を与えているかどうかを検証します。 また、バケットのポリシーとオブジェクト所有者によって定義されたポリシーも検証されます。参照：http://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-auth-workflow-objectoperation.html'
  }
  , {
    description: "AWSアカウントIDが999988887777の組織で50人のIAMユーザーが作成されました。すべてのユーザーが同じグループ試験のキラーに追加されます。 組織が各IAMユーザーがAWSコンソールでログインできるようになっている場合、IAMユーザーはどのAWSログインURLを使用するのですか？"
    , multiple_answer: false
    , answers: [
      {description: "https://999988887777.aws.amazon.com/examkiller/", correct: false}
      , {description: "https://signin.aws.amazon.com/examkiller/", correct: false}
      , {description: "https://examkiller.signin.aws.amazon.com/999988887777/console/", correct: false}
      , {description: "https://999988887777.signin.aws.amazon.com/console/", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSのアイデンティティとアクセス管理は、組織がさまざまなAWSサービスのユーザーとユーザーのアクセス許可を管理できるようにするWebサービスです。 組織がIAMユーザーを作成すると、AWSコンソールにログインするための別のAWSコンソールURLが作成されます。 IAMユーザーのコンソールログインURLは、https：//AWS_Account_ID.signin.aws.amazon.com/console/になります。 AWSアカウントIDのみを使用し、グループまたはユーザーIDに依存しません。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html'
  }
  , {
    description: "AWSダイレクトコネクトでポリシーキーを実装する際に、Amazon EC2インスタンスから_____と要求を使用すると、インスタンスのパブリックIPアドレスが評価され、アクセスが許可されているかどうかが判断されます。"
    , multiple_answer: false
    , answers: [
      {description: "aws:SecureTransport", correct: false}
      , {description: "aws:EpochIP", correct: false}
      , {description: "aws:SourceIp", correct: true}
      , {description: "aws:CurrentTime", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon RDSでポリシーキーを実装しているときに、aws：SourceIpを使用し、Amazon EC2インスタンスから要求が来た場合、そのインスタンスのパブリックIPアドレスが評価され、アクセスが許可されているかどうかが判断されます。参照：http://docs.aws.amazon.com/directconnect/latest/UserGuide/using_iam.html'
  }
  , {
    description: "DaveはExample Corp.のメイン管理者であり、パスを使用して会社のユーザーを助け、各パスベースの部門ごとに別々の管理者グループを設定することにしました。彼が使うことを計画している経路の完全なリストのisasubsetに従って：。 /marketing. /sales. /legal Daveは、会社のマーケティング部門の管理者グループを作成し、itMarketing_Adminを呼び出して、/ marketingパスを割り当てます。グループのARN isarn：aws：iam :: 123456789012：group / marketing / Marketing_Admin.Daveは、marketing_Adminグループに、/ marketingパス内のすべてのグループとユーザーのallIAMアクションを使用する権限を与える次のポリシーを割り当てます。このポリシーは、corporatebucketの一部のオブジェクトに対するAWS S3アクションを実行する権限をMarking_Admingroupに与えます。{\"Version\": \"2012-10-17\",\"Statement\": [{\"Effect\": \"Deny\",\"Action\": \"iam:*\",\"Resource\": [\"arn:aws:iam::123456789012:group/marketing/*\",\"arn:aws:iam::123456789012:user/marketing/*\"]},{\"Effect\": \"Allow\",\"Action\": \"s3:*\", \"Resource\": \"arn:aws:s3:::example_bucket/marketing/*\"},{\"Effect\": \"Allow\",\"Action\": \"s3:ListBucket*\",\"Resource\": \"arn:aws:s3:::example_bucket\",\"Condition\":{\"StringLike\":{\"s3:prefix\": \"marketing/*\"}}}]}"
    , multiple_answer: false
    , answers: [
      {description: "true", correct: false}
      , {description: "false", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "レガシークライアント/サーバーアプリケーションをAWSに移行しています。アプリケーションは、特定のDNSドメイン（例えば、www.example.com）に応答し、複数のアプリケーションサーバおよびデータベースサーバを有する2層アーキテクチャを有する。リモートクライアントはTCPを使用してアプリケーションサーバーに接続します。アプリケーションサーバーは、正常に機能するためにクライアントのIPアドレスを知る必要があり、現在TCPソケットからその情報を取得しています。複数のAZ RDSのMySQLインスタンスがデータベースに使用されます。移行中にアプリケーションコードを変更できますが、変更要求を提出する必要があります。スケーラビリティと高可用性を最大化するためにAWSでアーキテクチャを実装する方法は？"
    , multiple_answer: false
    , answers: [
      {description: "アプリケーションでエイリアスリソースのサポートを実装するための変更要求を作成します。 Routes 53 AliasResource Recordを使用して、異なるAzの2つのアプリケーションサーバーに負荷を分散します。", correct: false}
      , {description: "アプリケーションにレイテンシベースルーティングのサポートを実装するための変更要求を提出します。 Latency Based Routingを有効にしたRoute53を使用すると、異なるAzの2つのアプリケーションサーバーに負荷を分散できます。", correct: false}
      , {description: "アプリケーションでクロスゾーンサポートを実装するための変更要求を提出します。 異なるAZの2つのアプリケーションサーバーであるTCPListenerとクロスゾーンロードバランシングが有効なELBを使用します。", correct: false}
      , {description: "アプリケーションでのプロキシプロトコルのサポートを実装するための変更要求を作成します。 異なるAzの2つのアプリケーションサーバーに負荷を分散するには、TCPListenerとProxy Protocolを有効にしたELBを使用します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWS Data Pipelineは、自社のオンプレミスリソースまたはAWSリソースに対するアクティビティをどのように実行しますか？"
    , multiple_answer: false
    , answers: [
      {description: "オンプレミスホストにインストールできるTask Runnerパッケージを提供しています。", correct: true}
      , {description: "他の選択肢になし", correct: false}
      , {description: "リソースが実行のためにアクセスできるタスクランナーファイルを提供すること。", correct: false}
      , {description: "社内のホストにインストールできるTask Runner jsonスクリプトを提供する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWSは伝統的なITコンピューティングの世界でどのように他のベンダーと容易に区別されますか？"
    , multiple_answer: false
    , answers: [
      {description: "経験があります。 スケーラブルで弾力的です。 安全です。 費用効果の高い 信頼性のある", correct: false}
      , {description: "安全。 フレキシブル。 費用効果の高い スケーラブルで弾力的です。 グローバル", correct: false}
      , {description: "セキュア。 フレキシブル。 費用効果の高い スケーラブルで弾力的です。 経験豊富な", correct: true}
      , {description: "フレキシブル。 費用効果の高い 動的。 安全です。 経験を積んだ。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IAMロールを使用してAmazonEC2インスタンスで実行されているアプリケーションへのアクセス許可を与えることに関する真の声明を特定する。"
    , multiple_answer: false
    , answers: [
      {description: "AWS資格情報がローテーションされた場合、開発者はルートAmazon EC2インスタンスのみを更新し、その資格情報を更新する必要があります。", correct: false}
      , {description: "AWS資格情報がローテーションされると、開発者は、パスワードポリシーが適用され、資格情報を使用するAmazon EC2インスタンスのみを更新する必要があります。", correct: false}
      , {description: "AWS資格情報がローテーションされると、資格情報を管理する必要がなく、長期的なセキュリティリスクが発生することもありません。", correct: true}
      , {description: "AWS資格情報をローテーションする場合は、資格情報を管理する必要があります。また、長期的なセキュリティリスクに対する注意を考慮する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMロールを使用してEC2インスタンス上で実行されるアプリケーションに権限を与えるには、少しの追加の設定が必要です。 ロールの資格情報は一時的で自動的にローテーションされるため、資格情報を管理する必要はなく、長期的なセキュリティリスクについて心配する必要はありません。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/role-usecase-ec2app.html'
  }
  , {
    description: "ユーザがPIOPSを使用してMySQL RDSインスタンスを作成しました。 以下の記述のどれがPIOPSの利点を理解するのに役立つでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "ユーザーは、拡張RDSオプションを使用してEBS I / Oの追加専用容量を達成できます", correct: false}
      , {description: "スタックを最適化した構成の標準EBSボリュームを使用します", correct: false}
      , {description: "最適化されたEBSボリュームと最適化された構成スタックを使用します。", correct: true}
      , {description: "EBSとRDS間の専用ネットワーク帯域幅を提供します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "組織がEC2インスタンスでアプリケーションをホストしました。 アプリケーションの設定と構成のために、複数のユーザーがインスタンスに接続します。 組織は、セキュリティ上のベストプラクティスを実装する予定です。 以下の中で指摘されていることは、組織がより良いセキュリティアレンジメントを達成するのに役立つものではないでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "IAMユーザだけに、EC2インスタンスと独自の秘密アクセス鍵で接続するようにします。", correct: true}
      , {description: "アプリケーション構成のためにEC2インスタンスに接続する必要がない場合、個々のユーザーのアクセス権を取り消す手順を作成します。", correct: false}
      , {description: "最新のOSパッチを適用し、常に更新してください。", correct: false}
      , {description: ".すべてのユーザーのパスワードベースのログインを無効にします。 すべてのユーザーは、独自のキーを使用してインスタンスと安全に接続する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWSはパブリッククラウドなので、EC2でホストされているすべてのアプリケーションはハッカーの攻撃を受けやすい傾向があります。 ユーザがEC2インスタンス上に適切なセキュリティメカニズムを設定することは非常に重要になります。 セキュリティ対策のいくつかを以下に示します：OSを最新のパッチで常に最新の状態に保つEC2インスタンスに接続し、そのキーを作成し、パスワードを無効にする必要がある場合は、常にOS内で別のユーザーを作成します。 EC2インスタンスが完了したときにユーザーのアクセスを取り消すことができます。不要なポートをロックするユーザーがEC2インスタンスで実行している可能性がある独自のアプリケーションを監査します。 IAMは、ユーザーがAWSのリソースやアクション（インスタンスの起動など）を処理する必要がある場合に便利です。 インスタンス（RDP / SSH）を接続するのは便利ではありません。参照：http://aws.amazon.com/articles/1233/'    	
  }
  , {
    description: "組織はセキュリティ監査を受けています。 監査人は、組織がAWS VPCのすべてのアプリケーションをホストしているように、AWS VPC構成を表示する必要があります。監査人は遠隔地から来ており、AWSにアクセスしてすべてのVPCレコードを表示したいと考えています。 AWSインフラストラクチャのセキュリティを犠牲にすることなく、"
    , multiple_answer: false
    , answers: [
      {description: "組織は、資格情報の共有がセキュリティを脅かすことを意味するため、要求を受け入れるべきではありません。", correct: false}
      , {description: "VPCを含むすべてのEC2サービスへの読み取り専用アクセス権を持つIAMロールを作成し、監査人に委任する。", correct: false}
      , {description: "AWS VPCへの読み取り専用アクセス権を持つIAMユーザーを作成し、監査人との資格情報を共有します。", correct: true}
      , {description: "組織はVPCフルアクセスのIAMユーザーを作成する必要がありますが、要求が組織のデータセンター以外のIPからのものであれば何も変更できない条件を設定してください。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWSデータパイプラインのスケジュールパイプラインに関連する3つのタイプのアイテムの1つである試行は、堅牢なデータ管理を提供します。次のステートメントのうち、試行は真実ではありませんか？"
    , multiple_answer: false
    , answers: [
      {description: "Attemptsは堅牢なデータ管理を提供します。", correct: false}
      , {description: "AWSデータパイプラインは、再試行回数が最大許容再試行回数に達するまで失敗した操作を再試行します。", correct: false}
      , {description: "An AWS Data Pipeline Attemptオブジェクトはパイプラインコンポーネントをコンパイルして一連のアクション可能なインスタンスを作成します。", correct: true}
      , {description: "AWSデータパイプライン試行オブジェクトは、適用可能であれば、さまざまな試行、結果、および失敗の理由を追跡します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Attemptsは、AWS Data Pipelineのスケジュールパイプラインに関連する3種類のアイテムのうちの1つであり、堅牢なデータ管理を提供します。 AWSデータパイプラインは、失敗した操作を再試行します。 タスクが許可された再試行の最大回数に達するまで、タスクは引き続き実行されます。 試行オブジェクトは、適切な場合、さまざまな試行、結果、および失敗の理由を追跡します。 本質的には、それはカウンターを備えたインスタンスです。 AWS Data Pipelineは、Amazon EMRクラスタやEC2インスタンスなど以前の試みと同じリソースを使用して再試行を行います。参照：http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-how-tasks-scheduled.html'
  }
  , {
    description: "IAMユーザーには、フェデレーションユーザーとロールのためのTemporary Security Credentialsをデフォルトで作成する権限がありません。 対照的に、IAMユーザーは特別な許可を必要とせずに______に電話をかけることができます"
    , multiple_answer: false
    , answers: [
      {description: "GetSessionName", correct: false}
      , {description: "GetFederationToken", correct: false}
      , {description: "GetSessionToken", correct: true}
      , {description: "GetFederationName", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '現在、STS APIコマンドのGetSessionTokenは、アカウント内のすべてのIAMユーザーが前の許可なしに使用できます。 対照的に、GetFederationTokenコマンドは制限されており、ユーザーがこの特定のActionに呼び出しを発行できるように、明示的なアクセス許可を与える必要があります。参照：http://docs.aws.amazon.com/STS/latest/UsingSTS/STSPermission.html'
  }
  , {
    description: "サーバー環境の寿命が近づいているレガシーWebアプリケーションの責任はお客様にあります。 アプリケーション環境には現在次の制限があるため、このアプリケーションをできるだけ早くAWSに移行したいと考えています。VMの単一の10GB VMDKがほぼ満杯です。 私の仮想ネットワークインターフェイスは10Mbpsのドライバを使用しているため、100MbpsのWAN接続は完全に利用されません。 現在、高度にカスタマイズされた形で実行されています。 VMware環境内のWindows VM あなたはインストールメディアを持っていません;これは8時間のRTO（回復時間目標）を持つミッションクリティカルなアプリケーションです。 RPO（RecoveryPoint Objective）は1時間です。 ビジネス継続性要件を満たしながら、このアプリケーションをAWSに移行するにはどうすればよいでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "vCenterのEC2 VMインポートコネクタを使用して、VMをEC2にインポートします。", correct: true}
      , {description: "インポート/エクスポートを使用して、VMをESSスナップショットとしてインポートし、EC2にアタッチします。", correct: false}
      , {description: "S3を使用してVMのバックアップを作成し、データをEC2に復元します。", correct: false}
      , {description: "ec2-bundle-instance APIを使用して、VMのイメージをEC2にインポートする", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "大量の予測不可能なトラフィック需要を受け取る、統合されたWebアプリケーション層とデータベース層を持つ読み取り専用のニュースレポートサイトでは、これらのトラフィック変動に自動的に対応できる必要があります。 これらの要件を満たすAWSサービスは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "ElastiCache Memcached inanautoscaimgグループを使用してWebおよびアプリケーション層のステートレスインスタンスを同期し、CloudWatchで監視し、読み取りレプリカでRDSを監視します。", correct: true}
      , {description: "読取りレプリカを使用してCloudWatchとRDSで監視されている自動拡張グループのWebおよびアプリケーション層のステートフルインスタンス。", correct: false}
      , {description: "CloudWatchおよびマルチAZ RDSで監視される自動拡張グループのWebおよびアプリケーション層のステートフルインスタンス。", correct: false}
      , {description: "CloudWatchおよびマルチAZ RDSで監視されている自動拡張グループで、ElastiCache Memcachedを使用してWebおよびアプリケーション層のステートレスインスタンスを同期しました。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "顧客のセキュリティポリシーでは、これらのインスタンスから顧客の仮想プライベートクラウド内の他のサービスへのすべてのアウトバウンド接続を、特定のx 509certificatを使用して認証する必要があります。また、x 509証明書は、認証のために信頼できるように、顧客の鍵管理サービスによって設計されていなければなりません。以下の構成のどれがこれらの要件をサポートしますか？"
    , multiple_answer: false
    , answers: [
      {description: "署名付き証明書を含むAmazon S3オブジェクトへのアクセスを許可するIAMロールを設定し、Auto Scalingグループを設定してこのロールでインスタンスを起動する最初の起動時にインスタンスのブートストラップでAmazon S3から証明書を取得する。", correct: true}
      , {description: "Auto Scalingグループが使用する証明書をAmazonマシンイメージに埋め込みます。Havethelaunchedインスタンスは、インスタンスに割り当てられたインスタンスIDを使用してSignatureのKey管理サービスに証明書署名要求を生成します。", correct: false}
      , {description: "自動スケーリンググループを設定して、信頼できるキー管理サービスに新しいインスタンスの起動に関するSNS通知を送信します。鍵管理サービスに署名証明書を生成させ、新しく起動されたインスタンスに直接送信します。", correct: false}
      , {description: "最初の起動時に新しい証明書を生成するように起動されたインスタンスを設定するKeymanagementサービスが関連するインスタンスのAuto Scalingグループをポーリングし、新しいインスタンスの証明書署名を送信するようにします（hatには特定のインスタンスIDが含まれます）。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "MySecureData社には、世界中に5つの支店があります。 彼らは、WebサーバーがAWSに入り、各ブランチがローカルデータセンターに独自のデータベースを持つように、データセンターを拡張したいと考えています。 ユーザーのログインに基づいて、会社はデータセンターに接続したいと考えています。 MySecureData社はこのシナリオをAWS VPCでどのように実装できますか？"
    , multiple_answer: false
    , answers: [
      {description: "アプリケーションサーバー用のパブリックサブネットで5つのVPCを作成し、VPNゲートウェイごとにVPNゲートウェイを設定して個別に接続します。", correct: false}
      , {description: "複数のVPN接続と通信するためにAWS VPN CloudHubを使用します。", correct: true}
      , {description: "複数のVPN接続と通信するためにAWS CloudGatewayを使用します。", correct: false}
      , {description: "単一のVPCから異なるデータセンターを接続することはできません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。 ユーザーはVPC内の要件に従ってサブネットを作成できます。ユーザーが自分のデータセンターからVPCに接続する場合、ハードウェアVPNアクセスを使用してデータセンターに接続するパブリックおよびVPN専用サブネットをセットアップできます。 組織に複数のVPN接続がある場合、AWS VPN CloudHubを使用してサイト間の安全な通信を提供できます.VPN CloudHubは、VPCの有無にかかわらず使用できる単純なハブ＆スポークモデルで動作します。この設計は、 複数のブランチオフィスおよび既存のインターネット接続を使用して、遠隔地のオフィス間のプライマリまたはバックアップの接続に便利な、潜在的に低コストのハブアンドスポークモデルを実装したいと考えています。参考：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPN_CloudHub.html'
  }
  , {
    description: "ユーザーがPIOPSボリュームを作成しています。 ユーザーがPIOPSとボリュームサイズの間で設定する必要がある最大比率はいくらですか？"
    , multiple_answer: false
    , answers: [
      {description: "5", correct: false}
      , {description: "10", correct: false}
      , {description: "20", correct: false}
      , {description: "30", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'プロビジョニングされたIOPSボリュームは、I / O集約型ワークロード、特にストレージパフォーマンスとランダムアクセスI / Oスループットの一貫性に敏感なデータベースワークロードのニーズを満たすように設計されています。 プロビジョニングされたIOPSボリュームのサイズ範囲は10 GB〜1 TBで、ユーザーはボリュームあたり最大4000 IOPSをプロビジョニングできます。要求されたボリュームサイズにプロビジョニングされたIOPSの比率は最大30です。 たとえば、3000 IOPSのボリュームは少なくとも100GB必要です。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html'
  }
  , {
    description: "特典登録会社は、パブリックWeb層にNAT（Network Address Translation）インスタンスを含むAWS上のVPCで動作する3層Webアプリケーションをホストしています。 新たな会計年度の給付登録期間に予想される作業負荷と、追加のオーバーヘッドに十分な準備容量があります。2日間の申し込みがうまくいってからWeb層が応答しなくなると、CloudWatchやその他の監視ツールを使って調査すると、 有益な会社に顧客がいない国からのポート80を介した15の特定のIPアドレスのセットからの着信トラフィックの大規模で予想外の量。 Web層インスタンスは非常にオーバーロードされているため、登録管理者はSSHさえできません。この攻撃に対する防御にはどのアクティビティが役立つでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "Web層に関連付けられたカスタムルートテーブルを作成し、IGW（インターネットゲートウェイ）からの攻撃IPアドレスをブロックします。", correct: false}
      , {description: "Web層サブネット内のNATインスタンスのEIP（Elastic IP Address）を変更し、新しいEIPでMain Route Tableを更新します", correct: false}
      , {description: "ポート80を介して攻撃するIPアドレスをブロックする15のセキュリティグループルールを作成する", correct: false}
      , {description: "攻撃者のIPアドレスをブロックする拒否ルールを持つWeb層サブネットに関連付けられた着信NACL（ネットワークアクセス制御リスト）を作成する", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたのデータセンター内で動作する仮想マシンからレガシーアプリケーションをAmazon VPCに移行する必要があります残念ながら、このアプリは多数のオンプレミスサービスにアクセスする必要があり、アプリを設定した時点ではまだあなたの会社で機能しています。 さらに悪いことに、ドキュメントはありません.VPC内で実行されているアプリケーションが、再構成されずに内部の依存関係にアクセスしてアクセスできるようにするにはどうすればよいでしょうか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "AWS内部サービスを収容するネットワークとVPC間の直接接続リンク。", correct: true}
      , {description: "VPN接続を可能にするインターネットゲートウェイ。", correct: false}
      , {description: "VPCインスタンスの弾性IPアドレス", correct: false}
      , {description: "オンプレミスと競合しないIPアドレス空間", correct: true}
      , {description: "インスタンスがその依存関係のIPアドレスを解決できるようにするAmazon Route 53のエントリ", correct: false}
      , {description: "現在の仮想マシンのVMインポート", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "会社のポリシーでは、機密データの暗号化が必要です。 E2データに添付されているEBSデータボリュームにデータを格納しながらデータを保護するための選択肢を検討しています。これらのオプションのどれを使用してもデータを暗号化できますか？ 3つの回答を選択"
    , multiple_answer: true
    , answers: [
      {description: "第三者のボリューム暗号化ツールの実装", correct: true}
      , {description: "サーバー上で実行されているすべてのサービスにSSL / TLSを実装する", correct: false}
      , {description: "EBSに保存する前に、アプリケーション内のデータを暗号化します。", correct: true}
      , {description: "ファイルシステムレベルでネイティブデータ暗号化ドライバを使用してデータを暗号化する", correct: true}
      , {description: "EBSボリュームはデフォルトで暗号化されているため、何もしない", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ソーシャルメディアサイトを設計しており、分散型サービス拒否（DDoS）攻撃を軽減する方法を検討しています。 次の中から実行可能な緩和手法はどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "各EC2インスタンスに複数のENI（elastic network interface）を追加して、ネットワーク帯域幅を広げます。", correct: false}
      , {description: "専用のインスタンスを使用して、各インスタンスが最大のパフォーマンスを発揮できるようにします。", correct: false}
      , {description: "静的コンテンツと動的コンテンツの両方にAmazon CloudFrontディストリビューションを使用します。", correct: true}
      , {description: "Web上に自動スケーリンググループを持つElastic Load Balancerを使用します。 AppおよびAmazon RelationalDatabase Service（RDS）層", correct: false}
      , {description: "Amazon CloudWatchを追加してネットワークインとCPU使用率が高いことを確認します。", correct: true}
      , {description: "インスタンスOSファイアウォールにルールを迅速に追加および削除するためのプロセスおよび機能を作成します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ある企業が人気のあるテレビ番組の投票システムを構築しており、視聴者がその公演を見て優勝者に投票するためにショーのウェブサイトにアクセスします。 ショーが終了してから短期間でサイトには何百万人もの訪問者が訪れることが予想されます。 訪問者はまずAmazon.comの資格情報を使用してサイトにログインし、投票を行います。 投票が完了すると、そのページに投票総数が表示されます。 同社は、優れたパフォーマンスを維持しながらトラフィックの急激な流入に対応できるだけでなく、コストを最小限に抑えることを望むようなサイトを構築する必要があります。 どのデザインパターンを使用すべきですか？"
    , multiple_answer: false
    , answers: [
      {description: "Webサーバーの自動スケールされたセットの前にCloudFrontとElastic Load Balancerを使用すると、Webサーバーは最初にLogin With Amazonサービスを呼び出してユーザーを認証し、ユーザー投票を処理し、その結果を複数のAZのリレーショナルデータベースサービスインスタンス。", correct: false}
      , {description: "CloudFrontとS3の静的Webサイトホスティング機能を使用してJavascript SDKを使用してLogin with Amazonサービスを呼び出してユーザーを認証し、IAMロールを使用してDynamoDBテーブルへのアクセス許可を取得してユーザー投票を保存します。", correct: false}
      , {description: "CloudFrontとElastic Load Balancerを自動スケーリングされたWebサーバーのセットの前に使用すると、Webサーバーは最初にLogin with Amazonサービスを呼び出してユーザーを認証し、Webサーバーはユーザーの投票を処理し、結果をa IAMを使用するDynamoDBテーブルEC2インスタンスのロールを使用してDynamoDBテーブルへのアクセス権を取得します。", correct: false}
      , {description: "Webサーバーは、自動的にスケールされたWebサーバーのセットの前にCloudFrontとElastic Load Balancerを使用すると、まず、Login With Amazonサービスを呼び出してユーザーを認証し、Webサーバーがユーザーの投票プロセスに勝ち、結果を EC2インスタンスのIAMロールを使用してSQSキューにアクセス権を取得するSQSキュー。 アプリケーションサーバーのセットは、キューからアイテムを取得し、その結果をDynamoDBテーブルに格納します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "6月にアカウントがハッキングされ、ハッカーがAWSアカウントからすべてのデータを削除したため、AWSアカウント所有者の1人が大きな問題に直面しました。 これはビジネスに大きな打撃を与えました。以下に述べた手順のどれがこの行動を防止するのに役立たなかったでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "各ユーザーとrootアカウントユーザーのMFAを設定します。", correct: false}
      , {description: "重要なデータのバックアップをオフサイト/オン・プレミスに行います。", correct: false}
      , {description: "一定の間隔でAMIとデータのスナップショットを作成し、コピーを別々の領域に保管します。", correct: true}
      , {description: "AWSアクセスキーとシークレットアクセスキーをほかのユーザーと共有しないでください。プログラム内に格納しないでください。代わりにIAMロールを使用してください。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon ElastiCacheでは、正しい記述はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "ElastiCacheクラスタをAmazon VPCプライベートサブネットに起動すると、すべてのキャッシュノードにそのサブネット内のパブリックIPアドレスが割り当てられます。", correct: false}
      , {description: "専用インスタンスのテナント用に設定されたVPCでElastiCacheを使用することはできません。", correct: true}
      , {description: "AWSアカウントがEC2-VPCプラットフォームのみをサポートしている場合、ElastiCacheはVPCでクラスタを起動しません。", correct: false}
      , {description: "ElastiCacheはAmazon Virtual Private Cloud（VPC）と完全に統合されていません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'VPCは、専用EC2以外のインスタンスを許可する必要があります。 専用インスタンスのテナント用に設定されたVPCでElastiCacheを使用することはできません。参照：http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/AmazonVPC.EC.html'
  }
  , {
    description: "ドメインname.example.comの下にある複数のAWSRegionsに渡って、グローバルオーディエンスを対象としたWebアプリケーションを配備しました。 Route53 Latency-Based Routingを使用して、ユーザに最も近い地域からのWeb要求ユーザにサービスを提供することにしました。サーバー停止時にビジネス継続性を提供するために、2つのWebサーバーに関連付けられた加重レコードセットを別々の可用性ゾーンに構成します。 DRテストを督促すると、いずれかの地域のすべてのWebサーバーを無効にすると、Route53は自動的にすべてのユーザーを他の地域に誘導しません。何が起こっているのでしょうか？ （2つを選ぶ）"
    , multiple_answer: true
    , answers: [
      {description: "リソースレコードセットは、加重リソースレコードセットと組み合わせて使用​​することはできません。", correct: false}
      , {description: "無効化されたWebサーバーに関連付けられている1つ以上の加重リソースレコードセットにHTTPヘルスチェックを設定していません。", correct: true}
      , {description: "使用不可能なサーバがある領域に設定されたレイテンシエイリアスリソースレコードに関連付けられた重みの値は、他の領域の重みよりも高い。", correct: false}
      , {description: "他の地域にある2つの稼働中のWebサーバーのうちの1つは、HTTPヘルスチェックをパスしませんでした。", correct: false}
      , {description: "サーバーを無効にした地域のexample.comに関連付けられているレイテンシエイリアスリソースレコードセットで、「Evaluate Target Health」を「Yes」に設定していませんでした。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "cr1.8xlargeインスタンスタイプはどのくらいのメモリを備えていますか？"
    , multiple_answer: false
    , answers: [
      {description: "224 GB", correct: false}
      , {description: "124 GB", correct: false}
      , {description: "184 GB", correct: false}
      , {description: "244 GB", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon Cognitoでは、無音プッシュ通知とは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "あなたのアプリケーションで受信されたプッシュメッセージで、ユーザーのデバイスには表示されません。", correct: true}
      , {description: "ユーザのデバイス上でアプリケーションの受信したプッシュメッセージで、ユーザの位置情報を返します。", correct: false}
      , {description: "あなたのアプリケーションで受信したプッシュメッセージで、ユーザーのデバイスで聞こえないユーザーのデバイスです。", correct: false}
      , {description: "ユーザのデバイス上でアプリケーションによって受信され、ユーザの認証クレデンシャルを返すプッシュメッセージである。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon CognitoはAmazon Simple Notification Service（SNS）を使用して、デバイスにサイレントプッシュ通知を送信します。 サイレントプッシュ通知は、ユーザーのデバイス上でアプリケーションによって受信されるプッシュメッセージで、ユーザーが表示しません。参照：http://aws.amazon.com/cognito/faqs/'
  }
  , {
    description: "Webスタートアップは、ElasticLoadBalancer、Java / TomcatアプリケーションサーバーのAuto-Scalingグループ、およびデータストアとしてのDynamoDBを使用して、Amazon EC2上で非常に成功したソーシャルニュースアプリケーションを実行します。メインのWebアプリケーションはm2.xlargeインスタンス 非常にメモリに拘束されています。新しいデプロイメントでは、アプリケーションサーバー用の新しいAMIの半自動化された作成とテストが必要です。このため、かなりの時間がかかります。したがって、1週間に1回しか実行されません。 アーキテクチャに統合されるべきである。 最初のテストでは、新しいコンポーネントがCPUにバインドされていることがわかりました。Chefの使用経験があるため、導入プロセスを合理化し、AWS OpsWorksをアプリケーションのライフサイクルツールとして使用して、アプリケーションの管理を簡素化し、 新しいチャットモジュールを最も費用対効果の高い柔軟な方法で統合するには、AWS Ops Worksの設定が必要ですか？"
    , multiple_answer: false
    , answers: [
      {description: "1つのAWS OpsWorksスタックを作成し、1つのAWS Ops Worksレイヤを作成し、1つのカスタムレシピを作成します", correct: false}
      , {description: "1つのAWS OpsWorksスタックを作成し、2つのAWS Ops Worksレイヤを作成し、1つのカスタムレシピを作成します", correct: false}
      , {description: "2つのAWS OpsWorksスタックを作成し、2つのAWS Ops Worksレイヤを作成し、1つのカスタムレシピを作成します", correct: true}
      , {description: "2つのAWS OpsWorksスタックを作成して2つのAWS Ops Worksレイヤーを作成し、2つのカスタムレシピを作成します", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "現在、Webデザイン会社は250人の顧客が大規模なグラフィックファイルをアップロードしてダウンロードするために使用する複数のFTPサーバーを運営しています。このシステムをAWSに移行して拡張性を高めたいと考えています。 どのようなAWSアーキテクチャをお勧めしますか？"
    , multiple_answer: false
    , answers: [
      {description: "ASKでは、顧客はFTPクライアントの代わりにS3クライアントを使用します。単一のS3バケットを作成する顧客ごとにIAMユーザを作成する 'username'ポリシー変数を使用してバケット内のアクセスディレクトリを許可するIAMポリシーを持つグループにIAMユーザを配置します。", correct: true}
      , {description: "Redundancy Storageがオンになっている単一のS3バケットを作成し、FTPクライアントではなくS3クライアントを使用するように顧客に依頼するバケットポリシーを使用して各顧客にバケットを作成する。", correct: false}
      , {description: "自動スケーリンググループの最小ネットワークトラフィックが所定のしきい値を下回ったときに自動的にスケールインするスケーリングポリシーを持つFTPサーバーの自動スケーリンググループを作成します。各インスタンスのユーザーデータ起動スクリプトの一部として、S3からのofftpusersの中央リストをロードします。", correct: false}
      , {description: "リクエスタペイをオンにしてS3バケットを1つ作成し、顧客にFTPクライアントのS3クライアントを使用するように依頼するバケットポリシーを使用して各顧客にバケットを作成し、その顧客にアクセスを許可する。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "AWSクラウドハードウェアセキュリティモジュール（HSM）のコンテキストでは、アプリケーションをCloudHSMインスタンスと同じVPCに配置する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "いいえ。ただし、アプリケーションとHSMクライアントが実行されているサーバーまたはインスタンスは、HSMへの接続可能性がなければなりません。", correct: true}
      , {description: "はい、いつも", correct: false}
      , {description: "いいえ。しかし、それらは同じAvailability Zoneに存在しなければなりません。", correct: false}
      , {description: "いいえ。しかし、DBインスタンスと同じAvailability Zoneに存在する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'アプリケーションは、CloudHSMインスタンスと同じVPCに存在する必要はありません。ただし、アプリケーションとHSMクライアントが実行されているサーバーまたはインスタンスは、HSMへのネットワーク（IP）到達可能性が必要です。 同じVPC、VPCピアリング、VPN接続、またはDirect Connectでアプリケーションを操作するなど、さまざまな方法でネットワーク接続を確立できます。参照：https://aws.amazon.com/cloudhsm/faqs/'
  }
  , {
    description: "社内に複数のPHP Webアプリケーションを展開しており、過去に大規模な休止を経験していました。企業の発表によるWebトラフィックの場合予測不能なバーストを発生させるために同様のアナウンスを試しています。トラフィックの予期しない増加を処理するためのインフラストラクチャ機能を迅速に改善する方法を見つけることができます。アプリケーションは現在、ロードバランサといくつかのLinuxApache WebサーバーとMySQLデータベースをホストするLinuxサーバーをホストするデータベース層で構成されるWeb層の2層で構成されています。下記のどのシナリオでフルサイト機能が提供されるのか、短期間であなたの能力を向上させるのに役立ちますか？"
    , multiple_answer: false
    , answers: [
      {description: "Failover環境：S3バケットを作成し、ウェブサイトホスティング用に設定します。ゾーンファイルのインポートを使用してDNStoRoute53を移行し、Route53 DNSフェールオーバーを活用してS3のhostedwebsiteにフェールオーバーします。", correct: false}
      , {description: "ハイブリッド環境：EC2でWebサーバーを起動するために使用できるAMIを作成します。 aAutoScalingグループを作成します.AutoScalingグループは、AMIを使用して着信トラフィックに基づいてWeb層を拡張します。 ElasticLoadBalancingを活用して、オンプレミスWebサーバーとAWSでホストされているサーバーとの間のトラフィックを分散します。", correct: false}
      , {description: "オンプレミス環境からのトラフィックのオフロード：CIoudFrontディストリビューションを設定し、カスタム起源のオブジェクトをキャッシュするようにconfigureCloudFrontを設定します。オブジェクトキャッシュの動作をカスタマイズすることを選択し、オブジェクトがキャッシュに存在する必要があるTTLを選択します。", correct: true}
      , {description: "AWSへの移行：VM Import / Exportを使用して、オンプレミスWebサーバーをAMIにすばやく変換します。インポートされたAMIを使用して着信トラフィックに基づいてWeb層を拡張するAuto Scalingグループを作成します。 RDS読み取りレプリカを作成し、RDSインスタンスとon-premisesMySQLサーバー間で複製をセットアップして、データベースを移行します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "企業Webアプリケーションは、Amazon Virtual Private Cloud（VPC）内に展開され、IPSec VPN経由で企業のデータセンターに接続されます。アプリケーションは、構内LDAPサーバーに対して認証する必要があります。認証後、ログインしている各ユーザーは、そのユーザー固有のAmazonSimpleStorage Space（S3）キースペースにのみアクセスできます。これら2つのアプローチはどちらの目的にも対応できますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "一時的なAWSセキュリティ資格を取得するためのIAMロールを想定するためのトークン・サービスアプリケーションはIDブローカーを呼び出して、適切なS3バケットにアクセスしてAWS一時的なセキュリティー資格情報を取得します。", correct: false}
      , {description: "アプリケーションはLDAPに対して認証を行い、そのユーザーに関連付けられたIAMロールの名前を取得します。 次に、アプリケーションはIAMセキュリティトークンサービスを呼び出して、そのIAMロールを想定します。 アプリケーションは、一時資格情報を使用して適切なS3バケットにアクセスできます。", correct: true}
      , {description: "LDAPに対して認証を行い、IAMセキュリティトークンサービスを呼び出してIAMフェデレーションされたユーザー資格情報を取得するIDブローカーを開発します。 アプリケーションはIDブローカーを呼び出して、IAMフェデレーションされたユーザー資格情報を適切なS3バケットにアクセスできるようにします。", correct: true}
      , {description: "アプリケーションはLDAPに対して認証され、アプリケーションはAWS IDとAccessManagement（IAM）セキュリティサービスを呼び出してLDAP資格情報を使用してIAMにログインし、アプリケーションはIAM一時資格情報を使用して適切なS3バケットにアクセスします。", correct: false}
      , {description: "アプリケーションは、LDAP資格情報を使用してIAMセキュリティトークンサービスに対して認証します。アプリケーションは、それらの一時的なAWSセキュリティ資格情報を使用して適切なS3バケットにアクセスします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "顧客は、市場全体で利用可能なすべての取引を表示するWebサイトを持っています。 このサイトでは一般的に5つの大きなEC2インスタンスの負荷が発生します。 しかし、感謝祭の休暇の1週間前に、彼らはほぼ20の大きなインスタンスの負荷に遭遇します。 その期間中の負荷は、オフィスのタイミングに基づいて日によって異なります。 以下のうちどれがコスト効果が高く、ウェブサイトのパフォーマンス向上に役立つのでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "休暇前期間中に10インスタンスを実行するように設定し、自動スケーリングスケジュールを使用してさらに10インスタンスを起動して、オフィス時間中にスケールアップするだけです。", correct: false}
      , {description: "就業時間中に10インスタンスしか実行せず、毎日手動で10インスタンスを起動します。", correct: false}
      , {description: "休暇前期間中に、20のインスタンスを連続して実行するように設定します。", correct: false}
      , {description: "休暇前の期間に、ネットワークI / Oポリシーに基づいて自動スケーリングを使用して、組織が稼動している15のインスタンスと、5つのインスタンスを拡大または縮小するシナリオを設定します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "管理者は、Amazon Cloudformationを使用してWeb層とアプリケーション層で構成される3層Webアプリケーションを配備しています。これはCloudFormationテンプレートの作成時にAmazon DynamoDBをストレージに利用し、アプリケーションインスタンスがAPI資格情報を公開していますか？"
    , multiple_answer: false
    , answers: [
      {description: "必要なDynamoDBテーブルを読み書きし、インスタンスプロファイルを参照してロールをアプリケーションインスタンスに関連付けるために必要な権限を持つIDとアクセス管理ロールを作成します。", correct: false}
      , {description: "Cloud FormationテンプレートのParameterセクションを使用して、要求されたDynamoDBテーブルを読み書きするために必要な権限を持つ、すでに作成されたIAMユーザーからAccess andSecretKeysを入力します。", correct: false}
      , {description: "必要なDynamoDBテーブルを読み書きし、アプリケーションインスタンスのインスタンスプロファイルプロパティでロールを参照するために必要な権限を持つIDとアクセス管理ロールを作成します。", correct: true}
      , {description: "必要なDynamoDBテーブルからの読み取りと書き込みが許可されているCloudFormationテンプレート内のアイデンティティとアクセス管理ユーザーを作成し、GetAtt関数を使用してAccessおよび秘密鍵を取得し、ユーザーデータを介してアプリケーションインスタンスに渡します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "あなたは写真共有モバイルアプリをデザインしています。 アプリケーションはすべての画像を1つのAmazon S3バケットに保存します。 ユーザーはモバイルデバイスからAmazon S3に直接写真をアップロードし、Amazon S3から直接自分の写真を表示してダウンロードすることができます。何百万人ものユーザーを潜在的に最も安全な方法で処理できるようにセキュリティを設定したいと考えています。サーバー 新しいユーザーが写真共有モバイルアプリケーションに登録すると、サイドアプリケーションが実行されますか？"
    , multiple_answer: false
    , answers: [
      {description: "IAMユーザーを作成します。バケットポリシーをIAMユーザの適切な権限で更新します。IAMユーザのアクセスキーと秘密鍵を生成し、モバイルアプリに格納し、その認証を使用してAmazon S3にアクセスします。", correct: false}
      , {description: "IAMユーザーを作成します。適切な権限をIAMユーザーに割り当てます。 IAMユーザーのアクセスキーと秘密鍵を生成し、モバイルアプリケーションに格納し、これらの資格情報を使用してaccessAmazonS3にアクセスします。", correct: false}
      , {description: "適切な権限を持つAWS Security Token Serviceを使用して、長期の認証情報を作成します。モバイルアプリでこれらの認証情報を保管し、それらを使用してAmazon S3にアクセスします。", correct: false}
      , {description: "Amazon RDSでユーザーの情報を記録し、適切な権限を持つIAMで役割を作成します。ユーザーがモバイルアプリケーションを使用する場合は、AWS Security TokenService \"AssumeRole\"機能を使用して一時的な資格情報を作成します。これらの資格情報をモバイルアプリのメモリに保存し、それらを使用してAmazon S3にアクセスします。次回ユーザーがモバイルアプリを実行したときに新しい認証情報を生成します。", correct: true}
      , {description: "Amazon DynamoDBにユーザーの情報を記録します。ユーザーがモバイルアプリを使用する場合は、AWS Security Token Serviceを適切な権限で使用してクレデンシャル認証を行います。モバイルアプリのメモリにストアを保存し、それらを使用してAmazon S3にアクセスします。次回ユーザーがモバイルアプリを実行するときにnewcredentialを生成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon Elastic MapReduce（Amazon EMR）を使用すると、膨大な量のデータを分析して処理できます。クラスタは、Hadoopというオープンソースフレームワークを使用して管理されます。 Hadoopジョブを実行するアプリケーションを設定しました。 アプリケーションはDynamoDBからデータを読み取り、100 TBの一時ファイルを生成します。プロセス全体が30分間実行され、ジョブの出力がS3に格納されます。 次のうちどれがこの場合最も費用対効果の高いソリューションですか？"
    , multiple_answer: false
    , answers: [
      {description: "スポットインスタンスを使用してHadoopジョブを実行し、永続データストア用のEBSボリュームでそれらを設定します。", correct: false}
      , {description: "スポットインスタンスを使用してHadoopジョブを実行し、出力ファイル保管のために断熱ストレージでそれらを設定します。", correct: true}
      , {description: "オンデマンドインスタンスを使用してHadoopジョブを実行し、EBSボリュームを永続ストレージ用に構成します。", correct: false}
      , {description: "オンデマンドインスタンスを使用してHadoopジョブを実行し、出力ファイルストレージ用の一時記憶域でそれらを設定します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "デフォルトでは、Amazon Cognitoは最後に書き込まれたバージョンのデータを保持します。 オーバーライドしてデータの競合をプログラム的に解決できます。 さらに、プッシュ同期では、新しいデータが利用可能であることを通知するために、アマゾン・コグニートを使用してアイデンティティに関連付けられたすべてのデバイスにサイレント________通知を送信できます。"
    , multiple_answer: false
    , answers: [
      {description: "get", correct: false}
      , {description: "post", correct: false}
      , {description: "pull", correct: false}
      , {description: "push", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'デフォルトでは、Amazon Cognitoは最後に書き込まれたバージョンのデータを保持します。 この動作を無効にして、データの競合をプログラムで解決できます。 さらにプッシュ同期により、AmazonCognitoを使用して、IDに関連付けられたすべてのデバイスにサイレントプッシュ通知を送信し、新しいデータが利用可能であることを通知することができます。参照：http://aws.amazon.com/cognito/faqs/'
  }
  , {
    description: "会社がAmazon Simple Storage Service（S3）にデータを格納しています。 同社のセキュリティポリシーは、データが安心して暗号化されるようにしている。 これを達成できる方法はどれですか？3つの回答を選択してください"
    , multiple_answer: true
    , answers: [
      {description: "AWS Key Management Serviceの管理キーを使用して、Amazon S3サーバー側の暗号化を使用します。", correct: true}
      , {description: "顧客が提供するキーを使用して、Amazon S3サーバー側の暗号化を使用します。", correct: true}
      , {description: "EC2キーペアでAmazon S3サーバー側の暗号化を使用します。", correct: false}
      , {description: "Amazon S3バケットポリシーを使用して、安静時のデータへのアクセスを制限する。", correct: false}
      , {description: "自分のマスターキーを使用してAmazon S3に取り込む前に、クライアント側のデータを暗号化します。", correct: true}
      , {description: "Amazon S3への転送中にSSLを使用してデータを暗号化します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "VPN接続を作成し、VPNデバイスがBorder Gateway Protocol（BGP）をサポートしています.VPN接続を設定するには次のうちどれを指定する必要がありますか？"
    , multiple_answer: false
    , answers: [
      {description: "クラスレスルーティング", correct: false}
      , {description: "Classfullルーティング", correct: false}
      , {description: "ダイナミックルーティング", correct: true}
      , {description: "スタティックルーティング", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'VPN接続を作成する場合は、使用するルーティングの種類を指定する必要があります。これは、VPNデバイスの製造元とモデルによって異なります。 VPNデバイスがBorderGatewayProtocol（BGP）をサポートしている場合は、VPN接続を設定するときに動的ルーティングを指定する必要があります。 デバイスがBGPをサポートしていない場合は、静的ルーティングを指定する必要があります。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html'
  }
  , {
    description: "組織はよりスマートなショッピング体験を提供するアプリケーションを開発しました。彼らは、社内アプリケーションにアクセスできないさまざまなステークホルダーにデモンストレーションを行い、AWS上でアプリケーションのデモバージョンをホストすることを決定する必要があります。 その結果、彼らは起動時に自動的にインスタンスに接続された固定された弾性IPを必要とします。このシナリオでは、以下のオプションのどれが弾性IPを自動的に割り当てるのに役立たないでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "システムブート時にインスタンスメタデータを取得し、そのメタデータを使用してパブリックIPを割り当てるスクリプトを記述します。", correct: true}
      , {description: "ユーザデータにエラスティックIPを提供し、そのエラスティックIPをフェッチしてインスタンスに割り当てるブートストラップスクリプトを設定します。", correct: false}
      , {description: "インスタンスの起動時に提供されるパラメータに基づいて、インスタンスを起動し、弾性IPを割り当てる制御アプリケーションを作成する。", correct: false}
      , {description: "VPCを使用してインスタンスを起動し、プライマリネットワークインターフェイスにエラスティックIPを割り当てます。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'EC2を使用すると、オンデマンドインスタンスを起動できます。 組織がデモ目的でのみアプリケーションを一時的に使用している場合、エラスティックIPを割り当てる最良の方法は次のとおりです。VPCを使用してインスタンスを起動し、プライマリネットワークインターフェイスにEIPを割り当てます。 このようにして、すべてのインスタンスが起動するたびに、同じIPを持つようになります。ブートストラップスクリプトを作成し、EIPの割り当てに使用できるユーザーデータなどのメタデータを提供します。インスタンスの開始および停止をスケジュールし、 コントローラーインスタンスがインスタンスのブートをチェックしてEIPを割り当てることができるように、EIPをパラメーターとして使用します。インスタンスメタデータは、パブリック/プライベートIPなどの現在のインスタンスデータを提供します。 EIPを割り当てることはできません。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapterinstancedata.html'
  }
  , {
    description: "組織がAWS VPC上にウェブサイトを設定しています。組織は、DOS攻撃を回避するためにいくつかのIPをブロックしています。 上記のIPからの要求がアプリケーションインスタンスにアクセスしないように組織はどのように構成できますか？"
    , multiple_answer: false
    , answers: [
      {description: "そのIPアドレスからのトラフィックを禁止する条件を持つVPC用のIAMポリシーを作成します。", correct: false}
      , {description: "選択したIPからのトラフィックを拒否するセキュリティグループをサブネットレベルで設定します。", correct: false}
      , {description: "そのIPアドレスからのアクセスを拒否するEC2インスタンスを持つセキュリティグループを設定します。", correct: false}
      , {description: "そのIPアドレスからのトラフィックを拒否するACLをサブネットに設定します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '仮想プライベートクラウド（VPC）は、ユーザーのAWSアカウント専用の仮想ネットワークです。 これにより、ユーザーは、ユーザーが定義した仮想ネットワークにAWSリソースを起動できます。 AWSには、ユーザーがVPCのセキュリティを強化するために使用できる2つの機能があります。セキュリティグループとネットワークACLです。 ACLはサブネットレベルで動作し、インスタンスレベルのセキュリティグループワーク。 ACLは許可と拒否の両方のルールを許可します。したがって、ユーザーが選択したIPからのトラフィックを拒否したい場合、サブネットでACLを使用することをお勧めします。参照：http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html'
  }
  , {
    description: "単一のVPCで顧客Webアプリケーション用の侵入検知防止（IDS / IPS）ソリューションを設計しています。インターネットからのトラフィックに対するIOS IPS保護を実装するオプションを検討しています。次のオプションのどれを検討しますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "VPCで動作している各インスタンスでIDS / IPSエージェントを実装する", correct: false}
      , {description: "サブネットごとにインスタンスを設定して、ネットワークインターフェイスカードを無差別モードに切り替え、ネットワークトラフィックを分析します。", correct: true}
      , {description: "SSLリスナーを使用したElastic Load Balancingの実装Webアプリケーションの前に。", correct: false}
      , {description: "Webサーバの前にリバースプロキシレイヤを実装し、各リバースプロキシサーバ上でIDS / IPSエージェントを設定します。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "真実または虚偽：「Amazon ElastiCacheのコンテキストでは、アプリケーションの観点から、クラスタ構成エンドポイントに接続することは、個々のキャッシュノードに直接接続することと同じです。"
    , multiple_answer: false
    , answers: [
      {description: "True、アプリケーションの観点からすると、クラスタ構成エンドポイントに接続することは、それぞれが一意のノード識別子を持つため、個々のキャッシュノードに直接接続することと変わりありません。", correct: false}
      , {description: "True、アプリケーションの観点から見ると、クラスタ構成エンドポイントに接続することは、個々のキャッシュノードに直接接続することと変わりありません。", correct: true}
      , {description: "False、キャッシュノードに接続できますが、クラスタ構成エンドポイントには接続できません。", correct: false}
      , {description: "False、クラスタ構成エンドポイントに接続できますが、キャッシュノードには接続できません。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'これは本当です。 アプリケーションの観点からは、クラスタ構成エンドポイントに接続することは、個々のキャッシュ・ノードに直接接続することと変わりありません。 キャッシュノードに接続するプロセスでは、アプリケーションは構成エンドポイントのDNS名を解決します。 構成エンドポイントはすべてのキャッシュノードのCNAMEエントリを維持するため、DNS名は1つのノードに解決されます。 クライアントはそのノードに接続できます。参照：http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/AutoDiscovery.HowAutoDiscoveryWorks.html'
  }
  , {
    description: "要求がIP10.10.10.1 / 32からのものでない場合、ユーザはすべての要求を拒否するIAMポリシーを設定しています。 もう1つのポリシーでは、午後5時から7時の間にすべてのリクエストを許可します。 ユーザーが午後6時にIP 55.109.10.12/32からのアクセスを要求しているときはどうなりますか？"
    , multiple_answer: false
    , answers: [
      {description: "アクセスを拒否する", correct: true}
      , {description: "時間やIPに基づいてポリシーを設定することはできません", correct: false}
      , {description: "時間やIPに基づいてポリシーを設定することはできません", correct: false}
      , {description: "アクセスを許可する", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '要求が行われると、AWS IAMポリシーは、要求を許可するか拒否するかを決定します。 評価ロジックは次の規則に従います。デフォルトでは、すべての要求は拒否されます。 （通常、アカウントのリソースのアカウント資格情報を使用して行われた要求は常に許可されます）。このデフォルトを上書きするのは、明示的な許可ポリシーです。 明示的な拒否ポリシーは、許可をオーバーライドします。 この場合は、明示的な拒否と明示的な許可があるためです。 したがって、オーバーライドを許可しないため、要求は拒否されます。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_EvaluationLogic.html'
  }
  , {
    description: "Amazon Redshiftでは、dw2.8xlargeノードにはいくつのスライスがありますか？"
    , multiple_answer: false
    , answers: [
      {description: "16", correct: false}
      , {description: "8", correct: false}
      , {description: "32", correct: true}
      , {description: "2", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon Redshiftの計算ノードのディスクストレージは、ノード上のプロセッサコアの数に等しい数のスライスに分割されています。 たとえば、各DW1.XL計算ノードには2つのスライスがあり、各DW2.8XL計算ノードには32のスライスがあります。参照：http://docs.aws.amazon.com/redshift/latest/dg/t_Distributing_data.html'
  }
  , {
    description: "組織がAWSを使用してスケーラブルなWebアプリケーションをホストしています。 組織は、アプリケーションをスケーラブルにするために、ELBとAuto Scalingに面するインターネットを構成しました。 アプリケーションがVPCでWebアプリケーションをホストする予定のときに、以下のステートメントのどれに従わなければならないのですか？"
    , multiple_answer: false
    , answers: [
      {description: "ELBは、公的または民間のサブネットに置くことができますが、非弾性IPに添付されたENIを持つ必要があります。", correct: false}
      , {description: "ELBはいかなるサブネットにも置かれてはいけません。 代わりにインターネットに直面するべきです。", correct: false}
      , {description: "ELBはインターネットトラフィックに直面するためにVPCのパブリックサブネットになければなりません。", correct: true}
      , {description: "ELBは公衆またはプライベートサブネットに置くことができますが、インターネットトラフィックを転送するためにルーティングテーブルを添付する必要があります。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon仮想プライベートクラウド（Amazon VPC）を使用すると、ユーザーはAmazon Web Services（AWS）クラウドのプライベートな独立したセクションで仮想ネットワーキング環境を定義できます。 ユーザーは仮想ネットワーキング環境を完全に制御できます。 この仮想プライベートクラウド内で、ユーザーはELBやEC2インスタンスなどのAWSリソースを起動できます。 VPCで利用できるELBには、インターネットに面したELBと内部（プライベート）ELBの2種類があります。 ELBに直面しているインターネットの場合、ELBはパブリックサブネットに存在する必要があります。 ユーザーがパブリックサブネットを作成した後、パブリックサブネットのルートテーブルをインターネットゲートウェイに関連付けて、サブネット内のロードバランサがインターネットに接続できるようにする必要があります。参照：http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/CreateVPCForELB.html'
  }
  , {
    description: "AWS Direct Connectロケーションは、他の米国地域へのアクセスと同様に、関連する地域のAmazon Web Servicesへのアクセスを提供しますか？"
    , multiple_answer: false
    , answers: [
      {description: "いいえ、関連付けられている地域にのみアクセスできます。", correct: false}
      , {description: "いいえ、それはそれが関連付けられている地域以外の米国の地域にのみアクセスします。", correct: false}
      , {description: "はい、アクセスできます。", correct: true}
      , {description: "はい、それはアクセスを提供しますが、リージョン内に1つの可用性ゾーンがある場合のみです。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'AWS Direct Connectロケーションは、関連する地域のAmazon Web Servicesへのアクセスと、他の米国地域へのアクセスを提供します。 たとえば、米国内の任意のAWS Direct Connectロケーションへの単一の接続をプロビジョニングし、それを使用してすべての米国地域およびAWS GovCloud（米国）のパブリックAWSサービスにアクセスできます。参照：http://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html'
  }
  , {
    description: "Amazon EC2のc4.8xlargeインスタンスが提供するネットワークパフォーマンスは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "非常に高いが可変", correct: false}
      , {description: "20ギガビット", correct: false}
      , {description: "5ギガビット", correct: false}
      , {description: "10ギガビット", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "RAID（安価なディスクの冗長アレイ）を含むセットアップを要求した顧客のために、いくつかのEBSボリュームをセットアップしています。 AWSにはRAID設定に関する推奨事項がいくつかあります。 Amazon EBSでは推奨されないRAID設定は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "RAID 1のみ", correct: false}
      , {description: "RAID 5のみ", correct: false}
      , {description: "RAID 5およびRAID 6", correct: true}
      , {description: "RAID 0のみ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'Amazon EBSでは、従来のベアメタルサーバーで使用できる標準的なRAID構成を使用できます。ただし、その特定のRAID構成がオペレーティングシステムでサポートされている限り、使用できます。 これは、すべてのRAIDがソフトウェアレベルで実行されるためです。 単一のボリュームで実現できるよりも大きなI / Oパフォーマンスを実現するため、RAID 0は複数のボリュームをストライプ化することができ、インスタンス冗長性の場合、RAID 1は2つのボリュームをミラーリングできます.RAID 5およびRAID 6は、 これらのRAIDモードのパリティ書き込み操作では、ボリュームに使用可能なIOPSの一部が消費されます。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html'
  }
  , {
    description: "IAMポリシーでロールの権限を定義する必要があります。 次のどの構成形式を使用しますか？"
    , multiple_answer: false
    , answers: [
      {description: "IAMポリシー言語で書かれたXML文書", correct: false}
      , {description: "あなたが選んだ言語で書かれたXML文書", correct: false}
      , {description: "JSON文書は、IAMポリシー言語で書かれています。", correct: true}
      , {description: "あなたが選んだ言語で書かれたJSON文書", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'IAMポリシーでロールの権限を定義します。 IAMポリシーは、IAMポリシー言語で記述されたJSONドキュメントです。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html'
  }
  , {
    description: "AmazonElastic Map Reduceを使用してAmazon S3に格納されている大量のデータを分析する必要があります。 処理中にCPUがほとんどアイドルであるcc2 8x largeインスタンスタイプを使用しています。 次のうち、ジョブの実行時間を短縮する最もコスト効率の高い方法はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon S3でより小さなファイルを作成します。", correct: false}
      , {description: "タスクグループを導入して、追加のcc2 8x大きなインスタンスを追加します。", correct: false}
      , {description: "集約I / Oパフォーマンスが高い小規模なインスタンスを使用します。", correct: true}
      , {description: "Amazon S3のファイル数を減らし、より大きなファイルを作成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "IAMロールを使用してonAmazon EC2インスタンスを実行しているアプリケーションに権限を与える際に、以下のうちどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "インスタンス上のすべてのアプリケーションは同じ役割を共有しますが、異なる権限を共有します。", correct: false}
      , {description: "インスタンス上のすべてのアプリケーションは、複数の役割と権限を共有します。", correct: false}
      , {description: "一度に複数の役割がEC2インスタンスに割り当てられます。", correct: false}
      , {description: "一度に1つの役割だけをEC2インスタンスに割り当てることができます。", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '一度にEC2インスタンスに割り当てられる役割は1つだけで、インスタンス上のすべてのアプリケーションは同じ役割と権限を共有します。参照：http://docs.aws.amazon.com/IAM/latest/UserGuide/role-usecase-ec2app.html'
  }
  , {
    description: "ユーザーが4000 IOPSおよび100 GBサイズのPIOPS EBSボリュームを作成しようとしています。 AWSは、ユーザがこのボリュームを作成することはできません。 これの根本原因は何でしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "PIOPSは、500 GBを超えるEBSでサポートされています", correct: false}
      , {description: "EBSでサポートされる最大IOPSは3000", correct: false}
      , {description: "IOPSとEBS容積の比が30より大きい", correct: true}
      , {description: "IOPSとEBS容積の比が50未満です", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: 'プロビジョニングされたIOPS（SSD）ボリュームのサイズは、4 GiBから16 TiBの範囲で、ボリュームあたり最大20,000 IOPSをプロビジョニングできます。 要求されたボリュームサイズにプロビジョニングされたIOPSの比率は最大30でなければなりません。 たとえば、3000 IOPSのボリュームは100 GB以上でなければなりません。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html#EBSVolumeTypes_piops'
  }
  , {
    description: "貴社の部門では、会社のログファイルから定期的な分析レポートを作成します。すべてのログデータは、Amazon S3で収集され、Amazon Redshiftデータウェアハウス用の日次PDFレポートとCSV形式の集計テーブルを生成する毎日Amazon Elastic MapReduce（EMR）ジョブによって処理されます。このシステムのコスト構造を最適化するよう依頼します。次の代替手段のどれかは、生データのシステムまたはデータの整合性の平均的なパフォーマンスを損なうことなくコストを削減しますか？"
    , multiple_answer: false
    , answers: [
      {description: "S3のすべてのデータに対して冗長ストレージ（RRS）を削減します。 Amazon EMRジョブには、スポットインスタンスとリザーブドインスタンスの組み合わせを使用します。 Amazon Redshift用の予約済みインスタンスを使用します。", correct: false}
      , {description: "S3のPDFおよび.csvデータの冗長記憶域（RRS）を削減します。 SpotインスタンスをEMRジョブに追加します。Amazon Redshiftのスポットインスタンスを使用します。", correct: false}
      , {description: "Amazon S3のPDFおよび.csvデータの冗長化ストレージ（RRS）を削減します。アマゾンEMRジョブにスポットインスタンスを追加します。 Amazon Redshift用の予約済みインスタンスを使用します。", correct: true}
      , {description: "Amazon S3のすべてのデータの冗長ストレージ（RRS）を削減します。 SpotインスタンスをAmazonEMRジョブに追加します。 Amazon Redshift用の予約済みインスタンスを使用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "新聞社の組織では、一般の人々が後ろのカタログを検索し、Javaで書かれたWebサイトを介して個々の新聞ページを検索できるようにするオンプレミスのアプリケーションを提供しています。 商用検索製品を作成します。 ホスティングプラットフォームとソフトウェアのライフサイクルは終わりました。組織はアーカイブをAWSに移行し、コスト効率の高いアーキテクチャを作り出し、可用性と耐久性を考慮して設計したいと考えています。 最も適切なのはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "冗長性の低いストアを使用してS3を使用し、スキャンしたファイルを提供し、EC2インスタンスに商用検索アプリケーションをインストールし、自動スケーリングとElastic Load Balancerで設定します。", correct: false}
      , {description: "CloudFormationを使用して環境をモデル化するには、Apache webserverおよびソース検索アプリケーションを実行するEC2インスタンスを使用し、複数の標準EBSボリュームをストライプ化してJPEGおよび検索インデックスを格納します。", correct: false}
      , {description: "標準的な冗長性を備えたS3を使用して、スキャンしたファイルを保存および提供し、クエリー処理にCloudSearchを使用し、Elastic Beanstalkを使用して複数の可用性ゾーンにわたってWebサイトをホストします。", correct: true}
      , {description: "単一のAZ RDSのMySQLインスタンスを使用します。検索インデックスを格納します。33d JPEGイメージは、EC2インスタンスを使用してWebサイトを提供し、ユーザーのクエリをSQLに変換します。", correct: false}
      , {description: "CloudFrontダウンロード配信を使用してJPEGをエンドユーザに配信し、現在の商用検索製品をJava ContainerまたはEC2インスタンスにインストールし、Route53をDNSラウンドロビンで使用します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "Amazon Cognitoで認証されたユーザーは、複数段階のプロセスを経て、循環的認証を起動できます。 Amazon Cognitoには、公開プロバイダとの認証に2つの異なるフローがあります。 そのうち2つの流れはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "AuthenticatedおよびNon-authenticated", correct: false}
      , {description: "公的および私的", correct: false}
      , {description: "高度で基本的な", correct: true}
      , {description: "Singleステップとマルチステップ", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ユーザーは、VPCのパブリックサブネットの一部である単一のEC2インスタンス上に、Webサーバーとアプリケーションサーバーをホストすることを計画しています。 ユーザーセットアップでは、アプリケーションとWebサーバーの両方に2つの独立したパブリックIPとセキュリティグループを分離する方法を教えてください。"
    , multiple_answer: false
    , answers: [
      {description: "2つの別々のサブネットを持つVPCを起動し、インスタンスを両方のサブネットの一部にします。", correct: false}
      , {description: "2つのネットワークインターフェイスを持つVPCインスタンスを起動します。 個別のセキュリティグループとエラスティックIPを割り当てます。", correct: true}
      , {description: "2つのネットワークインターフェイスを持つVPCインスタンスを起動します。 それぞれに個別のセキュリティグループを割り当て、AWSはそれぞれに別のパブリックIPを割り当てます。", correct: false}
      , {description: "パブリックサブネットの別々のVPCインスタンスへの要求をリダイレクトするように、ELBでVPCを起動します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
    , explanation: '1つのEC2インスタンスに複数のWebサイト（異なるIPを持つ）をホストする必要がある場合、AWSの推奨方法は次のとおりです。2つのネットワークインターフェイスを備えたVPCインスタンスを起動するVPC EIPプールからこれらのインターフェイスに弾性IPを割り当てます ）複数のセキュリティグループが必要な場合は、個別のセキュリティグループを割り当てるこのシナリオは、複数のプライベートIPを持つファイアウォールやロードバランサなどのネットワークアプライアンスを操作する場合にも役立ちます 各ネットワークインターフェイスのアドレス。参照：http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html'
  }
  , {
    description: "あなたは何千人もの従業員がいるあなたのグローバル企業のための個人用の文書アーカイブソリューションを設計しています。 各従業員は、このアーカイブソリューションにバックアップされる潜在的に1ギガバイトのデータを持っています。ソリューションは従業員にアプリケーションとして公開され、ファイルをアーカイブシステムにドラッグアンドドロップできます。 従業員はウェブインターフェースを通じてアーカイブを取り出すことができます。 企業ネットワークには、AWSへの高帯域幅のAWS Direct Connect接続があります。すべてのデータを暗号化してからクラウドにアップロードする必要があります。高可用性でコスト効率の高い方法でこれを実装してください。"
    , multiple_answer: false
    , answers: [
      {description: "暗号化されたリレーショナルデータベースのオンプレミスで暗号化キーを管理します。 ファイルを一時的に格納するのに十分なストレージを備えたオンプレミスサーバーを設定し、Amazon S3にアップロードして、アクセラレータ側のマスターキーを提供します。", correct: false}
      , {description: "ハードウェアセキュリティモジュール（HSM）アプライアンスのオンプレミスサービスの暗号化キーを、Amazon Glierierに直接ファイルを一時的に格納、暗号化、およびアップロードするための十分な記憶域を備えています。", correct: false}
      , {description: "Amazon Key Management Service（KMS）で暗号化キーを管理し、KMS顧客マスターキーIDを使用してクライアント側の暗号化を使用してAmazon SimpleStorage Service（S3）にアップロードし、Amazon S3ライフサイクルポリシーを設定してAmazon Glacierストレージ 層。", correct: true}
      , {description: "AWS CloudHSMアプライアンスの暗号化キーを管理します。 職場のデスクトップにアップロードする前にファイルを暗号化し、直接Amazon Glacierにアップロードします。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
  , {
    description: "ある企業は、RDS MySQLインスタンス上で実行されているメイントランザクションDBで1時間ごとにバッチ分析を実行して、Redshiftで実行中の中央データウェアハウスにデータを移入します。バッチの実行中、トランザクションアプリケーションは非常に遅いです。バッチが完了すると、トップマネジメントダッシュボードを新しいデータで更新する必要があります。ダッシュボードは、手動で送信された電子メールが更新が必要であることを通知すると現在開始されているオンプレミスを実行している別のシステムによって生成されます。オンプレミスシステムは、別のチームによって管理されているため、変更することはできません。このシナリオを最適化してパフォーマンスの問題を解決し、できるだけプロセスを自動化する方法は？"
    , multiple_answer: false
    , answers: [
      {description: "バッチ分析用にRedshiftでRDSを置き換え、オンプレミスシステムにダッシュボードを更新するよう通知するSNS。", correct: true}
      , {description: "オーダー分析のためにRDSをRedshiftに置き換え、SQSがオンプレミスシステムにメッセージを送信してダッシュボードを更新します。", correct: false}
      , {description: "バッチ分析用のRDS読み取りレプリカを作成し、オンプレミスシステムにダッシュボードの更新を通知するSNSを作成します。", correct: false}
      , {description: "バッチ分析用にRDS読み取りレプリカを作成し、オンプレミスシステムにメッセージを送信してダッシュボードを更新するSQSを作成します。", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Professional'
  }
]);
