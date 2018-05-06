// テストデータ
questions.add([
  {
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
]);
