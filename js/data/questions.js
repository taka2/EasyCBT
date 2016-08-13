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
      {description: "ブラックリストは，臨弱性があるサイトの IPアドレスを登録したものであり，該当する通信を遮断する。", correct: false}
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
    description: "システム監査報告書に記載された改善勧告に対して，被監査部門から提出された改善計画を経営者がITガパナンスの観点から評価する際の方針のうち，適切なものはどれか。"
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
      {description: "”コンビュータウイルスに感染している”といった偽の警告を出して利用者を脅し，ウイルス対策ソフトの購入などを迫る。", correct: false}
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
      {description: "コンビュータで必要なセキュリティ設定項目を識別するための識別子である。", correct: false}
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
    description: "DMZ上のコンビュータがインターネットからのpingに応答しないようにファイアウォールのルールを定めるとき，”通過禁止”に設定するものはどれか。"
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
      , {description: "コンビュータやルータのアクセス可能な通信ポートを外部から調査するツール", correct: false}
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
    description: "コンビュータとスイッチングハブ（レイヤ 2スイッチ）の間，又は2台のスイッチングハブの聞を接続する複数の物理回線を論理的に1本の回線に束ねる技術はどれか。"
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
      , {description: "国レベルや企業・組織内に設置され，コンビュータセキュリティインシデントに関する報告を受け取り，調査し，対応活動を行う組織の総称である。", correct: true}
      , {description: "情報技術を利用し，信教や政治的な目標を達成するという目的をもった人や組織の総称である。", correct: false}
    ]
    , category: 'SC-H25-SPRING'
  }
  , {
    description: "NISTの定義によるクラウドコンビューティングのサービスモデルにおいて，パブリッククラウドサービスの利用企業のシステム管理者が，仮想サーバのゲストOSに係る設定作業及びセキュリティパッチ管理作業を実施可かどうかの組合せのうち，適切なものはどれか。"
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
      , {description: "コンビュータがウイルスやワームに感染していないことをチェックするツール", correct: false}
      , {description: "コンビュータやルータのアクセス可能な通信ポートを外部から調査するツール", correct: false}
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
    description: "コンビュータとスイッチングハブの間，又は2台のスイッチングハブの問を接続する複数の物理回線を論理的に1本の回線に束ねる技術はどれか。"
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
      , {description: "最高性能のコンビュータを用い，膨大な時間やコストを掛けて暗号強度をより確実なものとすること", correct: false}
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
      , {description: "コンビュータウイルスによるデータの破壊を防ぐ。", correct: false}
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
    description: "DMZ上のコンビュータがインターネットからのpingに応答しないようにファイアウォールのセキュリティルールを定めるとき，＂通過禁止＂に設定するものはどれか。"
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
    description: "プロジェクトの進捗管理をEVM(Earned Value Management) で行っている。コストが超過せず，納期にも遅れないと予想されるプロジェクトはどれか。ここで，それぞれのプロジェクトの開発の生産性は現在までと変わらないものとする。<br/>" +
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
      , {description: "コンビュータウイルスによるデータの破壊を防ぐ。", correct: false}
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
      , {description: "現在の担当者では解決できなかったインシデントの対応を，広範にわたる関係者を招集する権限をもっ上級マネージャに委ねる。", correct: true}
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
    description: "物流業務において，lO%の物流コストの削減の目標を立てて，図のような業務プロセスの改善活動を実施している。図中のcに相当する活動はどれか。<br><br>" +
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
      {description: "XML文書をペースとしたメッセージをHTTPなどのプロトコルで交換することによって，他のコンビュータ上のオブジェクトにアクセスするための仕様である。", correct: false}
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
]);
