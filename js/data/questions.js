// テストデータ
questions.add([
  {
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
    "<img src = \"js/data/H26_q16.png\"/>"
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
    "<img src = \"js/data/h26_q21.png\"/>"
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
    "<img src = \"js/data/H26_q22.png\"/>"
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
    "<img src = \"js/data/H25_q18.png\"/>"
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
    "<img src = \"js/data/H26_q16.png\"/>"
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
    "<img src = \"js/data/H22_q10.png\"/>"
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
    "<img src = \"js/data/H22_q18.png\"/>"
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
    "<img src = \"js/data/H26_q22.png\"/>"
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
    "<img src = \"js/data/H21_q10.png\"/>"
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
]);
