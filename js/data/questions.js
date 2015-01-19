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
    description: "クラウドサービスにおける，従量課金を利用した EDoS(Economic Denial of Service. Economic Denial of Sustainability)攻撃の説明はどれか。"
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
    "<table border=\"1\">" + 
    "<tr><td colspan=\"2\"></td><td>案1</td><td>案2</td><td>案3</td><td>案4</td></tr>" + 
    "<tr><td rowspan=\"3\">効果</td><td>セキュリティ強化</td><td>3</td><td>4</td><td>5</td><td>2</td></tr>" + 
    "<tr><td>システム運用品質向上</td><td>2</td><td>4</td><td>2</td><td>5</td></tr>" + 
    "<tr><td>作業コスト削減</td><td>5</td><td>4</td><td>2</td><td>4</td></tr>" + 
    "<tr><td rowspan=\"3\">リスク</td><td>スケジュールリスク</td><td>2</td><td>4</td><td>1</td><td>5</td></tr>" + 
    "<tr><td>技術リスク</td><td>4</td><td>1</td><td>5</td><td>1</td></tr>" + 
    "</table>" + 
    "<p>重み付け表" + 
    "<table border=\"1\">" + 
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
]);
