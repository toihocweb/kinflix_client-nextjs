import { ServiceItem } from '../utils/ServiceItem_interface';

type Parties = ServiceItem[];

export const serviceData: Parties = [
    {
        id: 1,
        title: 'クラウドサイン',
        sub: '電子契約サービス',
        img: '/images/service1_cloudsign@2x.png',
        modalImg: '/images/detail_cloudsign@2x.png',
        description: `標準価格からテックビズポイントで還元いたします。 契約書だけでなく、発注書・納品書・請求書・領収書など、 さまざまな対外的なやりとりにご利用いただけます。<br />
        ※利用金額に応じて2%分のテックビズポイントを還元いたします。`,
        categories: ['バックオフィス'],
    },
    {
        id: 2,
        title: 'Toones',
        sub: 'クラウド型ビジネス支援サービス',
        img: '/images/service2_toones@2x.png',
        modalImg: '/images/detail_toones.png',
        description: `標準価格から テックビズポイントで還元いたします。自営業者・法人向けに必要なバックオフィスサービスをクラウドを介して、リアルにも提供いたします。 <br />
        ※利用金額の2%分のテックビズポイントを還元いたします。`,
        categories: ['バックオフィス'],
    },
    {
        id: 3,
        title: 'テックビズ税務サポート',
        sub: '記帳・確定申告代行',
        img: '/images/service3_taxsupport@2x.png',
        modalImg: '/images/detail_taxsupport.png',
        description: `テックビズ会員の個人事業主様のみを対象に、特価5,000円(税別)～にて、毎月の記帳作業＋確定申告作業をテックビズ会員専属の税理士 が代行いたします。確定申告前になって慌てることがないように、各月の領収書を漏れなく記帳することができます。`,
        categories: ['バックオフィス'],
    },
    {
        id: 4,
        title: 'coin space',
        sub: 'コワーキングスペース',
        img: '/images/service4_coinspace@2x.png',
        modalImg: '/images/detail_coinspace.png',
        description: `会員様限定で標準価格から割引をいたします。電源・Wi-FI完備。仕事や趣味に、誰でも気軽に利用できます。<br />
        ※割引コードで送付いたします。`,
        categories: ['ワークスペース'],
    },
    {
        id: 5,
        title: 'Karigo',
        sub: 'バーチャルオフィス',
        img: '/images/service5_karigo@2x.png',
        modalImg: '/images/detail_karigo.png',
        description: `標準価格からテックビズポイントで還元いたします。オフィス機能をお得に取り揃えることができ、あなたのビジネスをさらに快適にします。<br />
        ※キャンペーンコードを送付いたします。 コードを入力して申し込むとテックビズポイントを還元いたします。`,
        categories: ['ワークスペース'],
    },
    {
        id: 6,
        title: 'SERVCORP',
        sub: 'コワーキングスペース',
        img: '/images/service6_servcorp@2x.png',
        modalImg: '/images/detail_servcorp.png',
        description: `標準価格からテックビズポイントで還元いたします。全国の一等地オフィスビルで即日スタートできるレンタルオフィス・コワーキングスペース・バーチャルオフィス・貸会議室を提供しています。<br />
        ※契約金額に応じて2%分のテックビズポイントを還元いたします。`,
        categories: ['ワークスペース'],
    },
    {
        id: 7,
        title: 'FLOC',
        sub: 'ブロックチェーン大学校',
        img: '/images/service7_floc@2x.png',
        modalImg: '/images/detail_floc.png',
        description: `標準価格からテックビズポイントで還元いたします。FLOCは最短3ヶ月で実践的な技術が身につくブロックチェーン総合スクールです。 ゼロからはもちろん、エンジニアやビジネスなど様々なコースをニーズに合わせて選べます。<br />
        ※契約金額に応じて2%分のテックビズポイントを還元いたします。`,
        categories: ['スキルアップ'],
    },
    {
        id: 8,
        title: 'Financial Academy',
        sub: 'お金の教養が学べるスクール',
        img: '/images/service8_financialacademy@2x.png',
        modalImg: '/images/detail_financialacademy.png',
        description: `ファイナンシャルアカデミーとは、「お金の教養」を身につけるための日本最大級の総合マネースクールです。 貯蓄や家計管理といった生活に身近なお金から、資産運用、キャリア、人生と社会を豊かにするお金の使い方までを学ぶことができます。<br />
        ※契約金額に応じて2%分のテックビズポイントを還元いたします。`,
        categories: ['スキルアップ'],
    },
    {
        id: 9,
        title: 'Udemy',
        sub: '世界最大級のオンライン学習プラットフォーム',
        img: '/images/service9_udemy@2x.png',
        modalImg: '/images/detail_udemy.png',
        description: `Udemyは、学びたい人、教えたい人のためのオンラインのマーケットプレイスです。 プログラミング、マーケティング、データサイエンスなど、100000以上のコースを2400万人の受講生が学んでいます。<br />
        ※契約金額に応じて2%分のテックビズポイントを還元いたします。`,
        categories: ['スキルアップ'],
    },
    {
        id: 10,
        title: '家賃が実る家',
        sub: 'ITフリーランス向け譲渡型賃貸住宅',
        img: '/images/service10_minoru@2x.png',
        modalImg: '/images/detail_minoru.png',
        description: `テックビズ会員限定で譲渡型賃貸住宅をご提供いたします。 譲渡型賃貸住宅は賃貸として入居しながら住宅取得ができる新しいカタチの住宅です。 個人事業主でも入居が容易であり、マイホームを取得することが可能です。`,
        categories: ['ライフスタイル'],
    },
];
