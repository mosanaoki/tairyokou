import { useParams, Link } from 'react-router-dom'
import { shops } from '../data/shops'
import StarRating from '../components/StarRating'
import ReviewSection from '../components/ReviewSection'
import XPostSection from '../components/XPostSection'

export default function ShopDetail() {
  const { id } = useParams()
  const shop = shops.find((s) => s.id === id)

  if (!shop) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">店舗が見つかりませんでした。</p>
        <Link to="/" className="text-purple-600 mt-4 inline-block">ホームに戻る</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-purple-600 transition-colors no-underline text-gray-400">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{shop.name}</span>
      </nav>

      {/* Shop Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm text-purple-500 font-medium mb-1">{shop.concept}</p>
            <h1 className="text-3xl font-bold text-gray-800">{shop.name}</h1>
          </div>
          <StarRating rating={shop.rating} size="lg" />
        </div>

        {/* Info Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem icon="📍" label="住所" value={shop.address} />
          <InfoItem icon="🚶" label="アクセス" value={shop.access} />
          <InfoItem icon="🕐" label="営業時間" value={shop.hours} />
          <InfoItem icon="📅" label="定休日" value={shop.holidays} />
          <InfoItem icon="💰" label="料金システム" value={shop.priceSystem} />
          <InfoItem icon="🍹" label="ドリンク" value={shop.drinkMenu} />
        </div>
      </div>

      {/* Good Points & Caution */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
          <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
            <span className="text-lg">👍</span> おすすめポイント
          </h3>
          <ul className="space-y-2">
            {shop.goodPoints.map((point, i) => (
              <li key={i} className="text-sm text-green-700 flex items-start gap-2">
                <span className="text-green-400 mt-0.5 shrink-0">●</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
          <h3 className="font-bold text-amber-700 mb-4 flex items-center gap-2">
            <span className="text-lg">⚠️</span> 注意ポイント
          </h3>
          <ul className="space-y-2">
            {shop.cautionPoints.map((point, i) => (
              <li key={i} className="text-sm text-amber-700 flex items-start gap-2">
                <span className="text-amber-400 mt-0.5 shrink-0">●</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Reviews */}
      <ReviewSection reviews={shop.webReviews} />

      {/* X Posts */}
      {shop.xPosts.length > 0 && <XPostSection posts={shop.xPosts} />}

      {/* Sources */}
      <section className="mt-10 bg-gray-50 rounded-2xl p-6 border border-gray-100">
        <h3 className="text-sm font-bold text-gray-500 mb-3">情報ソース</h3>
        <ul className="space-y-1">
          {shop.sources.map((src, i) => (
            <li key={i}>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-purple-500 hover:underline break-all"
              >
                {src}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Back */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors no-underline"
        >
          ← 一覧に戻る
        </Link>
      </div>
    </div>
  )
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
      <span className="text-lg shrink-0">{icon}</span>
      <div>
        <p className="text-xs text-gray-400 font-medium">{label}</p>
        <p className="text-sm text-gray-700 mt-0.5">{value}</p>
      </div>
    </div>
  )
}
