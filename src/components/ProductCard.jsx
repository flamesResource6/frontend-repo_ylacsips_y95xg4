import React from 'react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 flex flex-col">
      <div className="aspect-video bg-gray-100 rounded-xl mb-3 overflow-hidden">
        {product.images && product.images[0] ? (
          <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center text-gray-400">Image</div>
        )}
      </div>
      <h4 className="font-semibold text-gray-900">{product.title}</h4>
      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      <div className="mt-auto flex items-center justify-between pt-3">
        <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
        <button
          onClick={() => onAdd(product)}
          className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-3 py-1.5 text-sm font-semibold hover:bg-black transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
