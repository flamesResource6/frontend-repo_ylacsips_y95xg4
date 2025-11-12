import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Catalog from './components/Catalog'
import CartDrawer from './components/CartDrawer'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p._id === product._id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 }
        return copy
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const checkout = async () => {
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        items: cart.map((it) => ({
          product_id: it._id,
          title: it.title,
          slug: it.slug || it._id,
          quantity: it.qty,
          unit_price: it.price,
          variant: null,
        })),
        customer: {
          name: 'Guest',
          email: 'guest@example.com',
          phone: '',
          address_line1: 'N/A',
          city: 'N/A',
          state: 'N/A',
          postal_code: '00000',
          country: 'US',
        },
        subtotal: cart.reduce((s, it) => s + it.price * it.qty, 0),
        shipping: 0,
        tax: 0,
        total: cart.reduce((s, it) => s + it.price * it.qty, 0),
        status: 'pending',
      }
      const res = await fetch(`${base}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Checkout failed')
      alert(`Order received! ID: ${data.order_id}`)
      setCart([])
      setCartOpen(false)
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCartClick={() => setCartOpen(true)} cartCount={cart.reduce((n, i) => n + i.qty, 0)} />
      <main>
        <Hero />
        <FeatureGrid />
        <Catalog onAdd={addToCart} />
      </main>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onCheckout={checkout} />
      <footer id="about" className="border-t mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} KBBQ Portable. Crafted for great food and good company.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
