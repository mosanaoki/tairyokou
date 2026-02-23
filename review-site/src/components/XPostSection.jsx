export default function XPostSection({ posts }) {
  const sentimentColors = {
    positive: 'bg-green-50 border-green-200 text-green-700',
    neutral: 'bg-gray-50 border-gray-200 text-gray-600',
    negative: 'bg-red-50 border-red-200 text-red-600',
  }

  const sentimentLabels = {
    positive: 'ポジティブ',
    neutral: 'ニュートラル',
    negative: 'ネガティブ',
  }

  const positive = posts.filter(p => p.sentiment === 'positive').length
  const neutral = posts.filter(p => p.sentiment === 'neutral').length
  const negative = posts.filter(p => p.sentiment === 'negative').length
  const total = posts.length || 1

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-6">
        <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm">𝕏</span>
        Xのリアルな声
      </h2>

      {/* Sentiment Bar */}
      <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm mb-6">
        <p className="text-sm font-medium text-gray-600 mb-3">センチメント分析</p>
        <div className="flex rounded-full overflow-hidden h-4">
          {positive > 0 && (
            <div className="bg-green-400 transition-all" style={{ width: `${(positive / total) * 100}%` }} />
          )}
          {neutral > 0 && (
            <div className="bg-gray-300 transition-all" style={{ width: `${(neutral / total) * 100}%` }} />
          )}
          {negative > 0 && (
            <div className="bg-red-400 transition-all" style={{ width: `${(negative / total) * 100}%` }} />
          )}
        </div>
        <div className="flex gap-4 mt-2 text-xs text-gray-500">
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full" />ポジティブ {positive}件</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-gray-300 rounded-full" />ニュートラル {neutral}件</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-400 rounded-full" />ネガティブ {negative}件</span>
        </div>
      </div>

      {/* Posts */}
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, i) => (
          <div key={i} className={`rounded-xl p-4 border ${sentimentColors[post.sentiment]}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/60">
                {post.topic}
              </span>
              <span className="text-xs opacity-70">
                {sentimentLabels[post.sentiment]}
              </span>
            </div>
            <p className="text-sm leading-relaxed">{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
