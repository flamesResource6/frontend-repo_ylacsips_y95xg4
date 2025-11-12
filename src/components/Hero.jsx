import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Authentic Korean BBQ, anywhere.
          </h1>
          <p className="mt-5 text-gray-700 text-lg">
            Premium portable Korean BBQ tables engineered for flavor, fuel-efficiency, and durability. Bring the searing heat and sizzling joy to your patio, campsite, or tabletop.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 font-semibold shadow hover:bg-black transition">
              Shop Portable Tables
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-900 px-6 py-3 font-semibold hover:bg-gray-50 transition">
              Why Ours?
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Free shipping over $99 · 2-year warranty · 30-day returns
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-tr from-orange-200 via-rose-200 to-amber-100 shadow-lg" />
          <div className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur rounded-xl p-4 shadow border border-gray-200">
            <p className="text-sm font-semibold text-gray-800">Heat distribution A+</p>
            <p className="text-xs text-gray-600">Carbon steel plate · 12k BTU · Smokeless airflow</p>
          </div>
        </div>
      </div>
    </section>
  )
}
