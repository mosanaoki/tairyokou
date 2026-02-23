import ShopCard from '../components/ShopCard'
import { shops } from '../data/shops'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <p className="text-sm font-medium tracking-widest uppercase mb-4 opacity-80">
            Nishinakajima Girls Bar Review
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            西中島ガールズバー
            <br />
            <span className="text-yellow-300">厳選レビュー</span>
          </h2>
          <p className="mt-6 text-lg opacity-90 max-w-xl mx-auto">
            Web上の口コミ・Xのリアルな声を徹底調査。
            <br />
            評判の良い3店舗を厳選してご紹介します。
          </p>
        </div>
      </section>

      {/* Shop Cards */}
      <section id="ranking" className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid gap-6 md:grid-cols-3">
          {shops.map((shop, i) => (
            <ShopCard key={shop.id} shop={shop} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* Area Info */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4">西中島エリアについて</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            西中島は新大阪駅から徒歩圏内、地下鉄御堂筋線「西中島南方」駅と阪急「南方」駅が利用できる便利な立地。
            ビジネスマンが多く集まるエリアで、リーズナブルに楽しめるガールズバーが充実しています。
            1セット60分3,000円前後からと大阪市内でもトップクラスのコスパの良さが魅力です。
          </p>
        </div>
      </section>
    </div>
  )
}
