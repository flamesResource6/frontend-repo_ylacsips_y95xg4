import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function Catalog({ onAdd }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products/featured`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured portable BBQ tables</h2>
            <p className="text-gray-600 mt-2">Innovative, durable, and ready to grill anywhere.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:opacity-80">View all</a>
        </div>

        {loading ? (
          <p className="mt-10 text-gray-600">Loading products...</p>
        ) : error ? (
          <p className="mt-10 text-red-600">{error}</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <ProductCard key={p._id} product={p} onAdd={onAdd} />)
            )}
          </div>
        )}
      </div>
    </section>
  )
}
