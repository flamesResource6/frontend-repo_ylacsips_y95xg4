import React from 'react'

export default function Navbar({ onCartClick, cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="font-extrabold text-gray-900 tracking-tight">KBBQ Portable</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#catalog" className="hover:text-gray-900">Shop</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </nav>
        <button
          onClick={onCartClick}
          className="relative inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-black transition"
        >
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="grid place-items-center rounded-full bg-white text-gray-900 text-xs w-5 h-5 font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
