export default function ReviewSection({ reviews }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-6">
        <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm">📝</span>
        Web上の口コミ
      </h2>
      <div className="space-y-4">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
                {String.fromCharCode(65 + (i % 26))}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">口コミ {i + 1}</p>
                {review.source && (
                  <p className="text-xs text-gray-400">{review.source}</p>
                )}
              </div>
              {review.rating && (
                <div className="ml-auto flex">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={`text-sm ${j < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
