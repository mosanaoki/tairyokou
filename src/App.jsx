const spots = [
  {
    name: 'アユタヤ遺跡',
    vibe: '🏛️ 歴史ロマン',
    description:
      'バンコクから日帰りで行ける世界遺産。巨大な仏塔や遺跡を巡ると、旅のテンションが一気に上がる王道スポット。暑くなる前の朝スタートがおすすめ。',
    tip: '往復はツアー or 配車アプリ＋鉄道を併用すると楽。',
  },
  {
    name: 'うるさいマッサージ',
    vibe: '💆‍♂️ にぎやかリラックス',
    description:
      '名前のインパクトどおり、楽しい雰囲気でリフレッシュできる候補スポット。観光で歩き疲れた足を回復して夜に備える中継地点に◎。',
    tip: '公式サイト: https://brad-bury.com/',
    link: 'https://brad-bury.com/',
  },
  {
    name: 'カオサン通り',
    vibe: '🍻 お祭りナイト',
    description:
      '世界中の旅行者が集まる、バンコク夜遊びの定番。バー、屋台、音楽がぎゅっと詰まっていて、3人で歩くだけでも楽しい。',
    tip: '混雑前の20時台に入ると動きやすい。',
  },
  {
    name: 'ソイカウボーイ',
    vibe: '🌈 ネオン散策',
    description:
      '色鮮やかなネオンが続く、アソーク近くの有名ナイトエリア。短い通りにお店が並んでいて、初見でも雰囲気をつかみやすい。',
    tip: '写真撮影のマナーと店舗ルールは必ず確認。',
  },
  {
    name: 'テーメーカフェ',
    vibe: '🌃 深夜スポット',
    description:
      'アクセスしやすい立地で、夜遅くまで人が行き交うエリア。周辺と合わせて回しやすく、夜プランのハブとして便利。',
    tip: '終電時間を先にチェックして帰路を確保。',
  },
  {
    name: 'ナナプラザ',
    vibe: '✨ バンコク夜の名所',
    description:
      '多層フロアに店舗が集まる、バンコクを代表するナイトスポット。短時間でも独特の熱気を体験できる。',
    tip: '入店前に予算感を3人で共有しておくと安心。',
  },
  {
    name: 'ヤングプレイス',
    vibe: '🧭 ルート候補',
    description:
      '夜のはしごルート候補に挙がるスポット。現地の最新情報で営業状況を確認しながら、柔軟に立ち寄るとスムーズ。',
    tip: '当日Google Mapで営業状況と口コミを再確認。',
  },
  {
    name: 'ゴーゴーバー キングキャッスル',
    vibe: '🎶 はしご向き',
    description:
      'パッポン界隈で知られる候補店。近隣にバーや飲食店が多く、複数スポットをテンポよく回りたい夜に向いている。',
    tip: '1軒目を軽めにして2〜3軒回ると満足度高め。',
  },
  {
    name: 'カラオケ ロミオとジュリエット',
    vibe: '🎤 締めの一軒',
    description:
      '座ってゆっくり楽しめるカラオケ系スポット。歩き回ったあとに、3人で旅の感想を語りながら締めるのにぴったり。',
    tip: '終電後は配車アプリでホテル直帰ルートを確保。',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="eyebrow">BANGKOK BOYS TRIP 2026</p>
          <h1>男3人、バンコクを遊びつくす。</h1>
          <p className="lead">
            昼はアユタヤで冒険、夜はネオン街ではしご旅。ワクワク感を重視した
            「楽しい旅計画サイト」を React + Vite で作成しました。
          </p>
          <div className="hero__chips">
            <span>🏛️ 歴史</span>
            <span>🍜 屋台</span>
            <span>🌃 ナイトライフ</span>
            <span>🚕 安全移動</span>
          </div>
        </div>
      </header>

      <main className="container main">
        <section className="panel plan">
          <h2>おすすめの1日イメージ</h2>
          <ol>
            <li>朝〜昼：アユタヤ遺跡で観光＆写真</li>
            <li>夕方：マッサージで体力回復</li>
            <li>夜：カオサン or アソーク周辺をはしご</li>
            <li>深夜：カラオケで締めてホテルへ</li>
          </ol>
        </section>

        <section>
          <h2 className="section-title">スポット紹介</h2>
          <div className="spot-grid">
            {spots.map((spot) => (
              <article key={spot.name} className="spot-card">
                <p className="spot-vibe">{spot.vibe}</p>
                <h3>{spot.name}</h3>
                <p>{spot.description}</p>
                {spot.link ? (
                  <p className="tip">
                    {spot.tip.split('https://brad-bury.com/')[0]}
                    <a href={spot.link} target="_blank" rel="noreferrer noopener">
                      https://brad-bury.com/
                    </a>
                  </p>
                ) : (
                  <p className="tip">💡 {spot.tip}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="panel safety">
          <h2>3人旅を楽しく安全にするコツ</h2>
          <ul>
            <li>財布・カード・現金は3人で分散管理する。</li>
            <li>お酒を飲む日は、ホテル帰還ルートを先に決める。</li>
            <li>深夜帯は流しタクシーより配車アプリ優先。</li>
            <li>強引な客引きにはついて行かず、3人で行動。</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Have fun in Bangkok! 🇹🇭 最高の男子旅になりますように。</p>
        </div>
      </footer>
    </div>
  )
}

export default App
