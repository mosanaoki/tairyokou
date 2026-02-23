export default function StarRating({ rating, size = 'md' }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.3 && rating % 1 <= 0.7
  const sizeClass = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-sm' : 'text-lg'

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={i} className={`${sizeClass} text-yellow-400`}>★</span>)
    } else if (i === fullStars && hasHalf) {
      stars.push(
        <span key={i} className={`${sizeClass} relative`}>
          <span className="text-gray-300">★</span>
          <span className="absolute inset-0 overflow-hidden w-1/2 text-yellow-400">★</span>
        </span>
      )
    } else {
      stars.push(<span key={i} className={`${sizeClass} text-gray-300`}>★</span>)
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      <span className={`font-semibold ${size === 'lg' ? 'text-xl' : 'text-sm'} text-gray-700 ml-1`}>
        {rating.toFixed(1)}
      </span>
    </div>
  )
}
