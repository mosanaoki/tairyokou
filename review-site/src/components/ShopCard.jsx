import { Link } from 'react-router-dom'
import StarRating from './StarRating'

export default function ShopCard({ shop, rank }) {
  const rankColors = {
    1: 'from-yellow-400 to-amber-500',
    2: 'from-gray-300 to-gray-400',
    3: 'from-amber-600 to-amber-700',
  }

  return (
    <Link to={`/shop/${shop.id}`} className="group block no-underline">
      <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
        {/* Rank Badge */}
        <div className={`absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-br ${rankColors[rank]} flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
          {rank}
        </div>

        {/* Gradient Top Bar */}
        <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400" />

        <div className="p-6 pt-8">
          {/* Shop Name & Concept */}
          <div className="ml-10">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
              {shop.name}
            </h3>
            <p className="text-sm text-purple-500 font-medium mt-1">{shop.concept}</p>
          </div>

          {/* Rating */}
          <div className="mt-4">
            <StarRating rating={shop.rating} />
          </div>

          {/* Info Grid */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-400 shrink-0">📍</span>
              <span className="text-gray-600">{shop.access}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-400 shrink-0">🕐</span>
              <span className="text-gray-600">{shop.hours}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-400 shrink-0">💰</span>
              <span className="text-gray-600">{shop.priceRange}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-400 shrink-0">✨</span>
              <span className="text-gray-600">{shop.highlight}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {shop.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-5 text-right">
            <span className="text-purple-600 text-sm font-medium group-hover:underline">
              詳細を見る →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
