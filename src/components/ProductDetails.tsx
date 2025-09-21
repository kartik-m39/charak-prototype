const ProductDetails = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl" style={{ backgroundColor: '#FFFFE3' }}>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#FF7438' }}>
                  BATCH ID
                </label>
                <p className="text-lg font-mono font-bold" style={{ color: '#1C1C1C' }}>
                  AYU-ASH-2024-001
                </p>
              </div>
              
              <div className="p-4 rounded-xl" style={{ backgroundColor: '#FFFFE3' }}>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#FF7438' }}>
                  CATEGORY
                </label>
                <p className="text-lg font-semibold" style={{ color: '#1C1C1C' }}>
                  Ayurvedic Herbal Supplement
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#FFFFE3' }}>
                  <label className="text-sm font-semibold mb-2 block" style={{ color: '#00B7FF' }}>
                    PRODUCTION DATE
                  </label>
                  <p className="text-base font-semibold" style={{ color: '#1C1C1C' }}>
                    15 March 2024
                  </p>
                </div>
                
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#FFFFE3' }}>
                  <label className="text-sm font-semibold mb-2 block" style={{ color: '#FF3838' }}>
                    EXPIRY DATE
                  </label>
                  <p className="text-base font-semibold" style={{ color: '#1C1C1C' }}>
                    15 March 2026
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl" style={{ backgroundColor: '#FFFFE3' }}>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#874FFF' }}>
                  SOURCE LOCATION
                </label>
                <p className="text-lg font-semibold" style={{ color: '#1C1C1C' }}>
                  Organic Farms, Kerala, India
                </p>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                Product Description
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                Our premium Ashwagandha Latte blend combines the ancient wisdom of Ayurveda with modern wellness needs. 
                Crafted with organically grown Ashwagandha root, warming spices, and carefully selected herbs to support 
                stress relief and vitality.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Each batch is meticulously prepared following traditional Ayurvedic principles and modern quality standards, 
                ensuring maximum potency and purity.
              </p>
            </div>

            {/* Certification Buttons */}
            <div className="space-y-3">
              <button 
                className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: '#25CC73', color: '#FFFFFF' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>View Lab Certificate</span>
              </button>
              
              <button 
                className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: '#00B7FF', color: '#FFFFFF' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Expand Details</span>
              </button>
            </div>
          </div>
        </div>

        {/* Blockchain Verification Badge */}
        <div className="mt-8 p-6 rounded-2xl border-2" style={{ backgroundColor: '#FFFFE3', borderColor: '#25CC73' }}>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#25CC73' }}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold" style={{ color: '#25CC73' }}>
                Blockchain Verified Authenticity
              </h4>
              <p className="text-sm" style={{ color: '#1C1C1C' }}>
                Product authenticity and supply chain integrity confirmed on Hyperledger Fabric
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails