const Composition = () => {
  const ingredients = [
    { 
      name: 'Ashwagandha Root Powder', 
      quantity: '500mg',
      image: '🌿',
      description: 'Premium organic Ashwagandha root from Kerala farms'
    },
    { 
      name: 'Ceylon Cinnamon', 
      quantity: '200mg',
      image: '🍃',
      description: 'Authentic Ceylon cinnamon for warming properties'
    },
    { 
      name: 'Dried Ginger Root', 
      quantity: '150mg',
      image: '🫚',
      description: 'Organic ginger root for digestive support'
    },
    { 
      name: 'Cardamom Pods', 
      quantity: '100mg',
      image: '🌱',
      description: 'Green cardamom pods for aromatic flavor'
    },
    { 
      name: 'Black Pepper', 
      quantity: '50mg',
      image: '⚫',
      description: 'Piperine-rich black pepper for bioavailability'
    },
    { 
      name: 'Turmeric Root', 
      quantity: '300mg',
      image: '🟡',
      description: 'Curcumin-rich turmeric for anti-inflammatory support'
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#1C1C1C' }}>
          Ingredient Composition
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl border-2 border-transparent hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ backgroundColor: '#FFFFE3' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF7438'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              {/* Ingredient Image Placeholder */}
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-3" 
                     style={{ backgroundColor: '#FFFFFF' }}>
                  {ingredient.image}
                </div>
                <div className="text-lg font-bold mb-1" style={{ color: '#FF7438' }}>
                  {ingredient.quantity}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1C1C1C' }}>
                  {ingredient.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#1C1C1C' }}>
                  {ingredient.description}
                </p>
              </div>

              {/* Verification Badge */}
              <div className="flex items-center justify-center mt-4 space-x-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#25CC73' }}></div>
                <span className="text-xs font-semibold" style={{ color: '#25CC73' }}>
                  Verified Source
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Composition Summary */}
        <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: '#FFFFE3' }}>
          <div className="text-center">
            <h4 className="text-lg font-bold mb-3" style={{ color: '#00B7FF' }}>
              Composition Summary
            </h4>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
              All ingredients are sourced from certified organic farms and undergo rigorous quality testing. 
              Each component is blockchain-verified with complete traceability from farm to final product.
            </p>
            <button 
              className="inline-flex items-center space-x-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              style={{ backgroundColor: '#874FFF', color: '#FFFFFF' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>View Detailed Analysis</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Composition