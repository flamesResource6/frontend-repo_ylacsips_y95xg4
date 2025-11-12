import React from 'react'

export default function CartDrawer({ open, onClose, items = [], onCheckout }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between border-b px-6">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="text-sm text-gray-600 hover:text-gray-900">Close</button>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-200px)]">
          {items.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3 border-b pb-3">
                <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden">
                  {it.images && it.images[0] ? (
                    <img src={it.images[0]} alt={it.title} className="w-full h-full object-cover" />
                  ) : null}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{it.title}</div>
                  <div className="text-sm text-gray-600">Qty {it.qty}</div>
                </div>
                <div className="font-semibold">${(it.price * it.qty).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-3 font-semibold hover:bg-black disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
