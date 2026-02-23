import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🍸</span>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            西中島ガールズバー Review
          </h1>
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium no-underline">
            ホーム
          </Link>
          <a href="#ranking" className="text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium no-underline">
            ランキング
          </a>
        </nav>
      </div>
    </header>
  )
}
