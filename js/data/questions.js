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
    description: "2つのAZ(AZ-1とAZ-2)内のサブネット設定がされたAuto Scalingグループがある。現在それぞれのAZに2台ずつAuto Scalingグループに所属しているEC2インスタンスが起動している。Auto ScalingポリシーでCPU利用率が70%を超えたら2台インスタンスを増やし、40%を下回ったら1台インスタンスを減らし、さらに30%を下回ったら1台インスタンスを減らす設定をしている。CPU利用率が次のように遷移した場合、各AZのインスタンス数の分布として発生しうる選択肢はどれか？正しい選択肢を全て選べ。"
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
      {description: "Amazon S3 stores data in fixed size blocks.", correct: false}
      , {description: "Objects are identified by a numbered address.", correct: false}
      , {description: "Objects can be any size.", correct: false}
      , {description: "Objects contain both data and metadata.", correct: true}
      , {description: "Objects are stored in buckets.", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）の適切な使用例ではないものはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Storing web content", correct: false}
      , {description: "Storing a file system mounted to an Amazon Elastic Compute Cloud (Amazon EC2) instance", correct: true}
      , {description: "Storing backups for a relational database", correct: false}
      , {description: "Primary storage for a database", correct: true}
      , {description: "Storing logs for analytics", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）の重要な特徴は何ですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "All objects have a URL.", correct: true}
      , {description: "Amazon S3 can store unlimited amounts of data.", correct: true}
      , {description: "Objects are world-readable by default.", correct: false}
      , {description: "Amazon S3 uses a REST (Representational State Transfer) Application Program Interface (API).", correct: true}
      , {description: "You must pre-allocate the storage in a bucket.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）データへのアクセスを制限するために使用できる機能はどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Enable static website hosting on the bucket.", correct: false}
      , {description: "Create a pre-signed URL for an object.", correct: true}
      , {description: "Use an Amazon S3 Access Control List (ACL) on a bucket or object.", correct: true}
      , {description: "Use a lifecycle policy.", correct: false}
      , {description: "Use an Amazon S3 bucket policy.", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "アプリケーションは重要なデータをAmazon Simple Storage Service（Amazon S3）に保存します。Amazon S3は、不注意または故意の削除から保護する必要があります。 このデータはどのように保護されますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Use cross-region replication to copy data to another bucket automatically.", correct: false}
      , {description: "Set a vault lock.", correct: false}
      , {description: "Enable versioning on the bucket.", correct: true}
      , {description: "Use a lifecycle policy to migrate data to Amazon Glacier.", correct: false}
      , {description: "Enable MFA Delete on the bucket.", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社はAmazon Simple Storage Service（Amazon S3）にドキュメントを保存しますが、コストを最小限に抑えたいと考えています。 ほとんどの文書は約1ヶ月間だけ積極的に使用され、次にあまり頻繁に使用されません。 ただし、要求された場合、すべてのデータを数分以内に利用できる必要があります。 どのようにこれらの要件を満たすことができますか？"
    , multiple_answer: false
    , answers: [
      {description: "Migrate the data to Amazon S3 Reduced Redundancy Storage (RRS) after 30 days.", correct: false}
      , {description: "Migrate the data to Amazon Glacier after 30 days.", correct: false}
      , {description: "Migrate the data to Amazon S3 Standard – Infrequent Access (IA) after 30 days.", correct: true}
      , {description: "Turn on versioning, then migrate the older version to Amazon Glacier.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "高耐久性のためにAmazon Simple Storage Service（Amazon S3）にデータを保存する方法は？"
    , multiple_answer: false
    , answers: [
      {description: "Data is automatically replicated to other regions.", correct: false}
      , {description: "Data is automatically replicated within a region.", correct: true}
      , {description: "Data is replicated only if versioning is enabled on the bucket.", correct: false}
      , {description: "Data is automatically backed up on tape and restored if needed.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のいずれかの記述が正しいAmazon Simple Storage Service（Amazon S3）のURLに基づいていますか？" +

                  "https://bucket1.abc.com.s3.amazonaws.com/folderx/myfile.doc"
    , multiple_answer: false
    , answers: [
      {description: "The object “myfile.doc” is stored in the folder “folderx” in the bucket “bucket1.abc.com.”", correct: false}
      , {description: "The object “myfile.doc” is stored in the bucket “bucket1.abc.com.”", correct: false}
      , {description: "The object “folderx/myfile.doc” is stored in the bucket “bucket1.abc.com.”", correct: true}
      , {description: "The object “myfile.doc” is stored in the bucket “bucket1.”", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "誰があなたのAmazon Simple Storage Service（Amazon S3）データにアクセスしたのか、どこから何をすべきかを記録するには？"
    , multiple_answer: false
    , answers: [
      {description: "Enable versioning on the bucket.", correct: false}
      , {description: "Enable website hosting on the bucket.", correct: false}
      , {description: "Enable server access logs on the bucket.", correct: true}
      , {description: "Create an AWS Identity and Access Management (IAM) bucket policy.", correct: false}
      , {description: "Enable Amazon CloudWatch logs.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）バケットでクロスリージョンレプリケーションを有効にする理由は何ですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "You want a backup of your data in case of accidental deletion.", correct: false}
      , {description: "You have a set of users or customers who can access the second bucket with lower latency.", correct: true}
      , {description: "For compliance reasons, you need to store data in a location at least 300 miles away from the first region.", correct: true}
      , {description: "Your data needs at least five nines of durability.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社では、外部ストレージに送信されるすべてのデータを暗号化して送信する必要があります。 どのAmazon Simple Storage Service（Amazon S3）暗号化ソリューションがこの要件を満たしますか？"
    , multiple_answer: false
    , answers: [
      {description: "Server-Side Encryption (SSE) with AWS-managed keys (SSE-S3)", correct: false}
      , {description: "SSE with customer-provided keys (SSE-C)", correct: false}
      , {description: "Client-side encryption with customer-managed keys", correct: true}
      , {description: "Server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS)", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）バケットに格納されたデータにアクセスする一般的なWebアプリケーションがあります。 アクセスは非常に読み込みが集中し、多くのクライアントから要求される要求速度は最大500 GET /秒です。 この場合、Amazon S3のパフォーマンスとスケーラビリティをどのように高めることができますか？"
    , multiple_answer: false
    , answers: [
      {description: "Turn on cross-region replication to ensure that data is served from multiple locations.", correct: false}
      , {description: "Ensure randomness in the namespace by including a hash prefix to key names.", correct: true}
      , {description: "Turn on server access logging.", correct: false}
      , {description: "Ensure that key names are sequential to enable pre-fetch.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）バケットでクロスリージョンレプリケーションを有効にするには、何が必要ですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Enable versioning on the bucket.", correct: true}
      , {description: "Enable a lifecycle rule to migrate data to the second region.", correct: false}
      , {description: "Enable static website hosting.", correct: false}
      , {description: "Create an AWS Identity and Access Management (IAM) policy to allow Amazon S3 to replicate objects on your behalf.", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたの会社には100TBの財務記録があり、法律で7年間保管する必要があります。 経験によると、1歳以上の記録はアクセスされない可能性があります。 次のいずれかのストレージプランが、費用対効果の最も高い方法でこれらのニーズを満たしていますか？"
    , multiple_answer: false
    , answers: [
      {description: "Store the data on Amazon Elastic Block Store (Amazon EBS) volumes attached to t2.micro instances.", correct: false}
      , {description: "Store the data on Amazon Simple Storage Service (Amazon S3) with lifecycle policies that change the storage class to Amazon Glacier after one year and delete the object after seven years.", correct: true}
      , {description: "Store the data in Amazon DynamoDB and run daily script to delete data older than seven years.", correct: false}
      , {description: "Store the data in Amazon Elastic MapReduce (Amazon EMR).", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（S3）バケットポリシーは、Amazon S3バケットへのアクセスを制限することができます。 （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Company name", correct: false}
      , {description: "IP address range", correct: true}
      , {description: "AWS account", correct: true}
      , {description: "Country of origin", correct: false}
      , {description: "Objects with a specific prefix", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）は最終的に一貫したストレージシステムです。 最終的な一貫性の結果として失効したデータを取得することは可能ですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "GET after PUT of a new object", correct: false}
      , {description: "GET or LIST after a DELETE", correct: true}
      , {description: "GET after overwrite PUT (PUT to an existing key)", correct: true}
      , {description: "DELETE after PUT of new object", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Simple Storage Service（Amazon S3）バケットで静的なWebサイトをホストするためには何が必要ですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Configure the bucket for static hosting and specify an index and error document.", correct: true}
      , {description: "Create a bucket with the same name as the website.", correct: true}
      , {description: "Enable File Transfer Protocol (FTP) on the bucket.", correct: false}
      , {description: "Make the objects in the bucket world-readable.", correct: true}
      , {description: "Enable HTTP on the bucket.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたは、AWS上でホストされている貴重なメディアファイルを持っており、それらをあなたのWebアプリケーションの認証されたユーザーにのみ提供することにしたいです。 あなたは、あなたのコンテンツが無料で盗まれ、配布される可能性があると懸念しています。 どのようにあなたのコンテンツを保護することができますか？"
    , multiple_answer: false
    , answers: [
      {description: "Use static web hosting.", correct: false}
      , {description: "Generate pre-signed URLs for content in the web application.", correct: true}
      , {description: "Use AWS Identity and Access Management (IAM) policies to restrict access.", correct: false}
      , {description: "Use logging to track your content.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Glacierは以下のどのデータに適していますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Is infrequently or rarely accessed", correct: true}
      , {description: "Must be immediately available when needed", correct: false}
      , {description: "Is available after a three- to five-hour restore period", correct: true}
      , {description: "Is frequently erased within 30 days", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Glacierについての真実は？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon Glacier stores data in objects that live in archives.", correct: false}
      , {description: "Amazon Glacier archives are identified by user-specified key names.", correct: false}
      , {description: "Amazon Glacier archives take three to five hours to restore.", correct: true}
      , {description: "Amazon Glacier vaults can be locked.", correct: true}
      , {description: "Amazon Glacier can be used as a standalone service and as an Amazon S3 storage class.", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "ほとんどの場合、安定したトラフィックをサポートするために、Webアプリケーションには4つのインスタンスが必要です。 毎月最終日に、トラフィックは3倍になります。 このトラフィックパターンを処理する費用効果の高い方法は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Run 12 Reserved Instances all of the time.", correct: false}
      , {description: "Run four On-Demand Instances constantly, then add eight more On-Demand Instances on the last day of each month.", correct: false}
      , {description: "Run four Reserved Instances constantly, then add eight On-Demand Instances on the last day of each month.", correct: true}
      , {description: "Run four On-Demand Instances constantly, then add eight Reserved Instances on the last day of each month.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "受注処理アプリケーションは、2つの予約インスタンスが10件/分を処理するキューから抽出された受注を処理します。 処理中に注文が失敗した場合、注文はペナルティなしでキューに戻されます。 週末の販売のため、キューには数百の注文がバックアップされています。 バックアップは大惨事ではありませんが、顧客が確認メールをすばやく入手できるように、バックアップを排除したいと考えています。 受注用のキューを排除する費用効果の高い方法は何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Create more queues.", correct: false}
      , {description: "Deploy additional Spot Instances to assist in processing the orders.", correct: true}
      , {description: "Deploy additional Reserved Instances to assist in processing the orders.", correct: false}
      , {description: "Deploy additional On-Demand Instances to assist in processing the orders.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "新しいAmazon Elastic Compute Cloud（Amazon EC2）Windowsインスタンスを起動するときに指定する必要があるのはどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "The Amazon EC2 instance ID", correct: false}
      , {description: "Password for the administrator account", correct: false}
      , {description: "Amazon EC2 instance type", correct: true}
      , {description: "Amazon Machine Image (AMI)", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "us-east-1aにm3.xlarge Linux Reservedインスタンスを購入しました。 この予約をどのように変更できますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Change it into two m3.large instances.", correct: true}
      , {description: "Change it to a Windows instance.", correct: false}
      , {description: "Move it to us-east-1b.", correct: true}
      , {description: "Change it to an m4.xlarge.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "インスタンスは2つのセキュリティグループに関連付けられています。 1つ目は、ポートレスのCIDR（Classless Inter-Domain Routing）ブロック72.14.0.0/16からのリモートデスクトッププロトコル（RDP）アクセスを可能にすることです。 2つ目は、CIDRブロック0.0.0.0/0からのポート80経由のHTTPアクセスを許可します。 あなたのインスタンスに到達できるトラフィックは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "RDP and HTTP access from CIDR block 0.0.0.0/0", correct: false}
      , {description: "No traffic is allowed.", correct: false}
      , {description: "RDP and HTTP traffic from 72.14.0.0/16", correct: false}
      , {description: "RDP traffic over port 3389 from 72.14.0.0/16 and HTTP traffic over port 80 from 0.0.00/0", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうち拡張ネットワークの機能はどれですか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "More Packets Per Second (PPS)", correct: true}
      , {description: "Lower latency", correct: true}
      , {description: "Multiple network interfaces", correct: false}
      , {description: "Border Gateway Protocol (BGP) routing", correct: false}
      , {description: "Less jitter", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "高性能コンピューティング（HPC）クラスターを作成しており、インスタンス間の待ち時間と帯域幅が非常に小さくなっています。 次のどのような組み合わせによってこれが可能になりますか？ （3つの回答を選んでください）"
    , multiple_answer: true
    , answers: [
      {description: "Use an instance type with 10 Gbps network performance.", correct: true}
      , {description: "Put the instances in a placement group.", correct: true}
      , {description: "Use Dedicated Instances.", correct: false}
      , {description: "Enable enhanced networking on the instances.", correct: true}
      , {description: "Use Reserved Instances.", correct: false}
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
      {description: "Automatic backups", correct: false}
      , {description: "Data is lost when the instance stops.", correct: true}
      , {description: "Very high IOPS", correct: true}
      , {description: "Charge is based on the total amount of storage provisioned.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Block Store（Amazon EBS）の機能は次のうちどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Data stored on Amazon EBS is automatically replicated within an Availability Zone.", correct: true}
      , {description: "Amazon EBS data is automatically backed up to tape.", correct: false}
      , {description: "Amazon EBS volumes can be encrypted transparently to workloads on the attached instance.", correct: true}
      , {description: "Data on an Amazon EBS volume is lost when the attached instance is stopped.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Block Store（Amazon EBS）ボリュームのスナップショットを撮る必要があります。 ボリュームはどれくらいの期間利用できませんか？"
    , multiple_answer: false
    , answers: [
      {description: "It depends on the provisioned size of the volume.", correct: false}
      , {description: "The volume will be available immediately.", correct: true}
      , {description: "It depends on the amount of data stored on the volume.", correct: false}
      , {description: "It depends on whether the attached instance is an Amazon EBS-optimized instance.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "スナップショットからAmazon Elastic Block Store（Amazon EBS）ボリュームをリストアしています。 データが利用可能になるまでの期間はどのくらいですか？"
    , multiple_answer: false
    , answers: [
      {description: "It depends on the provisioned size of the volume.", correct: false}
      , {description: "The data will be available immediately.", correct: true}
      , {description: "It depends on the amount of data stored on the volume.", correct: false}
      , {description: "It depends on whether the attached instance is an Amazon EBS-optimized instance.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "耐久性が必要なデータには、15,000の一貫性のあるIOPSを必要とするワークロードがあります。 次のステップのどのような組み合わせが必要ですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Use an Amazon Elastic Block Store (Amazon EBS)-optimized instance.", correct: true}
      , {description: "Use an instance store.", correct: false}
      , {description: "Use a Provisioned IOPS SSD volume.", correct: true}
      , {description: "Use a magnetic volume.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "次のうちブートストラップによって達成できるものはどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Install the most current security updates.", correct: false}
      , {description: "Install the current version of the application.", correct: false}
      , {description: "Configure Operating System (OS) services.", correct: false}
      , {description: "All of the other choices.", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "SSHを使って新しいLinuxインスタンスに接続するにはどうすればいいですか？"
    , multiple_answer: false
    , answers: [
      {description: "Decrypt the root password.", correct: false}
      , {description: "Using a certificate", correct: false}
      , {description: "Using the private half of the instance’s key pair", correct: true}
      , {description: "Using Multi-Factor Authentication (MFA)", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "VMのインポート/エクスポートでは、既存の仮想マシンを次のようにインポートできます。（2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Amazon Elastic Block Store (Amazon EBS) volumes", correct: false}
      , {description: "Amazon Elastic Compute Cloud (Amazon EC2) instances", correct: true}
      , {description: "Amazon Machine Images (AMIs)", correct: true}
      , {description: "Security groups", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Compute Cloud（Amazon EC2）インスタンスをWeb上で扱うために使用できるのは次のうちどれですか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Windows machine name", correct: false}
      , {description: "Public DNS name", correct: true}
      , {description: "Amazon EC2 instance ID", correct: false}
      , {description: "Elastic IP address", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "正しく復号化された管理者パスワードとRDPを使用すると、起動したばかりのWindowsインスタンスにログインできなくなります。 次のうちどれが考えられる理由はありますか？"
    , multiple_answer: false
    , answers: [
      {description: "There is no security group rule that allows RDP access over port 3389 from your IP address.", correct: true}
      , {description: "The instance is a Reserved Instance.", correct: false}
      , {description: "The instance is not using enhanced networking.", correct: false}
      , {description: "The instance is not an Amazon EBS-optimized instance.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "通常の使用中に1,500 IOPSで1 TBの耐久性ブロックストレージが必要な作業負荷があります。 毎晩、15分間3000 IOPSが必要なExtract、Transform、Load（ETL）タスクがあります。 このワークロードに最も適したボリュームタイプは何ですか？"
    , multiple_answer: false
    , answers: [
      {description: "Use a Provisioned IOPS SSD volume at 3,000 IOPS.", correct: false}
      , {description: "Use an instance store.", correct: false}
      , {description: "Use a general-purpose SSD volume.", correct: true}
      , {description: "Use a magnetic volume.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "あなたはElastic IPアドレスをどのように請求されますか？"
    , multiple_answer: false
    , answers: [
      {description: "Hourly when they are associated with an instance", correct: false}
      , {description: "Hourly when they are not associated with an instance", correct: true}
      , {description: "Based on the data that flows through them", correct: false}
      , {description: "Based on the instance type to which they are attached", correct: false}
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
      {description: "A main route table is created by default.", correct: true}
      , {description: "Three subnets are created by default—one for each Availability Zone.", correct: false}
      , {description: "Three subnets are created by default in one Availability Zone.", correct: false}
      , {description: "An IGW is created by default.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "US-East-1で新しいVPCを作成し、このAmazon VPC内に3つのサブネットを用意します。 次のうちどれが当てはまりますか？"
    , multiple_answer: false
    , answers: [
      {description: "By default, these subnets will not be able to communicate with each other; you will need to create routes.", correct: false}
      , {description: "All subnets are public by default.", correct: false}
      , {description: "All subnets will be able to communicate with each other by default.", correct: true}
      , {description: "Each subnet will have identical CIDR blocks.", correct: false}
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
      {description: "Your NAT is in a public subnet, but it needs to be in a private subnet.", correct: false}
      , {description: "Your NAT should be behind an Elastic Load Balancer.", correct: false}
      , {description: "You should disable source/destination checks on the NAT.", correct: true}
      , {description: "Your NAT has been deployed on a Windows instance, but your other instances are Linux. You should redeploy the NAT onto a Linux instance.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Block Store（Amazon EBS）に関連付けられたEIPを持つAmazon VPC内のAmazon EC2インスタンスが停止され、開始された場合、次のうちどれが発生しますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "The EIP will be dissociated from the instance.", correct: false}
      , {description: "All data on instance-store devices will be lost.", correct: true}
      , {description: "All data on Amazon EBS devices will be lost.", correct: false}
      , {description: "The ENI is detached.", correct: false}
      , {description: "The underlying host for the instance is changed.", correct: true}
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
      , {description: "There is no default maximum number of VPCs within a region.", correct: false}
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
      {description: "The CIDR block representing the IP address range", correct: true}
      , {description: "One or more subnets for the Amazon VPC", correct: false}
      , {description: "The region for the Amazon VPC", correct: true}
      , {description: "Amazon VPC Peering relationships", correct: false}
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
    description: "Port 80でリスニングするElastic Load Balancingロードバランサを作成し、ポート80でリッスンしている単一のAmazon Elastic Compute Cloud（Amazon EC2）インスタンスに登録しました。クライアントは正しいプロトコルでロードバランサにリクエストを行い、 ロードバランサのポート。 このシナリオでは、バランサは何コネクションを維持していますか？"
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
      {description: "Launch configuration name, Amazon Machine Image (AMI), and instance type", correct: true}
      , {description: "Launch configuration name, AMI, instance type, and key pair", correct: false}
      , {description: "Launch configuration name, AMI, instance type, key pair, and security group", correct: false}
      , {description: "Launch configuration name, AMI, instance type, key pair, security group, and block device mapping", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "複数のAmazon EC2インスタンス上で実行されている会社の既存のアプリケーション用のアプリケーションロギングソリューションは、お客様が担当しています。 AWS内のアプリケーションログを集約するための最良の方法はどれですか？"
    , multiple_answer: false
    , answers: [
      {description: "Amazon CloudWatch custom metrics", correct: false}
      , {description: "Amazon CloudWatch Logs Agent", correct: true}
      , {description: "An Elastic Load Balancing listener", correct: false}
      , {description: "An internal Elastic Load Balancing load balancer", correct: false}
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
      {description: "You cannot define an Auto Scaling group larger than 20.", correct: false}
      , {description: "The Auto Scaling group maximum value cannot be more than 20.", correct: false}
      , {description: "You did not attach an Elastic Load Balancing load balancer to the Auto Scaling group.", correct: false}
      , {description: "You have not raised your default Amazon EC2 capacity (20) for the new region.", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "1つのX.509証明書を持つElastic Load Balancingロードバランサの背後にある複数のAmazon EC2インスタンスに複数のHTTPS（Hypertext Transfer Protocol Secure）Webサイトをホストしたいとします。 ロードバランサに接続するクライアントに接続時に警告が表示されないように、SSL（Secure Sockets Layer）証明書をどのように構成する必要がありますか。"
    , multiple_answer: false
    , answers: [
      {description: "Create one SSL certificate with a Subject Alternative Name (SAN) value for each website name.", correct: true}
      , {description: "Create one SSL certificate with the Server Name Indication (SNI) value checked.", correct: false}
      , {description: "Create multiple SSL certificates with a SAN value for each website name.", correct: false}
      , {description: "Create SSL certificates for each Availability Zone with a SAN value for each website name.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Webアプリケーションのフロントエンドは、Elastic Load Balancingロードバランサの背後にある複数のAmazon Compute Cloud（Amazon EC2）インスタンスで構成されています。 これらのAmazon EC2インスタンスでヘルスチェックを実行するようにロードバランサを設定しました。 インスタンスがヘルスチェックに合格しなかった場合、どのステートメントが正しいでしょうか？"
    , multiple_answer: false
    , answers: [
      {description: "The instance is replaced automatically by the load balancer.", correct: false}
      , {description: "The instance is terminated automatically by the load balancer.", correct: false}
      , {description: "The load balancer stops sending traffic to the instance that failed its health check.", correct: true}
      , {description: "The instance is quarantined by the load balancer for root cause analysis.", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon Elastic Compute Cloud（Amazon EC2）の基本監視パッケージでは、Amazon CloudWatchのメトリックはどのように使用できますか？"
    , multiple_answer: false
    , answers: [
      {description: "Web server visible metrics such as number of failed transaction requests", correct: false}
      , {description: "Operating system visible metrics such as memory utilization", correct: false}
      , {description: "Database visible metrics such as number of connections", correct: false}
      , {description: "Hypervisor visible metrics such as CPU utilization", correct: true}
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
      {description: "Sends traffic to healthy instances", correct: false}
      , {description: "Responds to changing conditions by adding or terminating Amazon Elastic Compute Cloud (Amazon EC2) instances", correct: true}
      , {description: "Collects and tracks metrics and sets alarms", correct: false}
      , {description: "Delivers push notifications", correct: false}
      , {description: "Launches instances from a specified Amazon Machine Image (AMI)", correct: true}
      , {description: "Enforces a minimum number of running Amazon EC2 instances", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Auto Scalingグループの一部ではなく、Auto Scalingグループが起動設定を参照するのはなぜですか？"
    , multiple_answer: false
    , answers: [
      {description: "It allows you to change the Amazon Elastic Compute Cloud (Amazon EC2) instance type and Amazon Machine Image (AMI) without disrupting the Auto Scaling group.", correct: false}
      , {description: "It facilitates rolling out a patch to an existing set of instances managed by an Auto Scaling group.", correct: false}
      , {description: "It allows you to change security groups associated with the instances launched without having to make changes to the Auto Scaling group.", correct: false}
      , {description: "All of the other choices", correct: true}
      , {description: "None of the other choices", correct: false}
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
      , {description: "Already running instances if they use the same Amazon Machine Image (AMI) as the Auto Scaling group’s launch configuration and are not already part of another Auto Scaling group", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Amazon CloudWatchはどのタイプの監視計画をサポートしていますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Basic monitoring, which is free", correct: true}
      , {description: "Basic monitoring, which has an additional cost", correct: false}
      , {description: "Ad hoc monitoring, which is free", correct: false}
      , {description: "Ad hoc monitoring, which has an additional cost", correct: false}
      , {description: "Detailed monitoring, which is free", correct: false}
      , {description: "Detailed monitoring, which has an additional cost", correct: true}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "Elastic Load Balancingのヘルスチェックは、次のようになります。（3つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "A ping", correct: true}
      , {description: "A key pair verification", correct: false}
      , {description: "A connection attempt", correct: true}
      , {description: "A page request", correct: true}
      , {description: "An Amazon Elastic Compute Cloud (Amazon EC2) instance status check", correct: false}
    ]
    , category: 'AWS-Certified-Solutions-Architect-Associate-EN'
  }
  , {
    description: "接続排水を使用するElastic Load Balancingロードバランサに登録されたAmazon Elastic Compute Cloud（Amazon EC2）インスタンスが登録解除または不健全になった場合、次のうちどれが実行されますか？ （2つの回答を選択）"
    , multiple_answer: true
    , answers: [
      {description: "Immediately close all existing connections to that instance.", correct: false}
      , {description: "Keep the connections open to that instance, and attempt to complete in-flight requests.", correct: true}
      , {description: "Redirect the requests to a user-defined error page like “Oops this is embarrassing” or “Under Construction.”", correct: true}
      , {description: "Forcibly close all connections to that instance after a timeout period.", correct: false}
      , {description: "Leave the connections open as long as the load balancer is running.", correct: false}
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
      , {description: "Hypertext Transfer Protocol Secure (HTTPS) using Secure Sockets Layer (SSL)", correct: true}
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
]);
