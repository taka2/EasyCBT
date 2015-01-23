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
]);
