import React from 'react'

const features = [
  { title: 'Smokeless Airflow', desc: 'Engineered vents and baffles reduce smoke while keeping the perfect sizzle.' },
  { title: 'Rapid Heat', desc: 'Up to 12,000 BTU equivalent for restaurant-grade searing in minutes.' },
  { title: 'Fuel Flex', desc: 'Compatible with butane, propane, or charcoal inserts depending on model.' },
  { title: 'Easy Clean', desc: 'Detachable grease tray and non-stick plate for quick cleanup.' },
  { title: 'Travel Ready', desc: 'Fold-flat design with carry handle fits in small car trunks.' },
  { title: 'Built to Last', desc: 'Powder-coated steel frame with reinforced rivets and 2-year warranty.' },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Why you’ll love it</h2>
        <p className="text-gray-600 mt-2">Purpose-built for social cooking and unforgettable meals.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="text-2xl mb-3">🔥</div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
