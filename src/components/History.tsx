const History = () => {
  const timeline = [
    {
      stage: 'Customer Purchase',
      date: '20 March 2024',
      location: 'Ayurvedic Wellness Store, Mumbai',
      status: 'current',
      icon: '🛒',
      description: 'Product purchased by customer'
    },
    {
      stage: 'Manufacturing',
      date: '15 March 2024',
      location: 'Ayurvedic Manufacturing Unit, Kerala',
      status: 'completed',
      icon: '⚙️',
      description: 'Traditional Ayurvedic formulation and processing'
    },
    {
      stage: 'Ingredient Processing',
      date: '10 March 2024',
      location: 'Spice Processing Center, Kerala',
      status: 'completed',
      icon: '🌿',
      description: 'Ingredient cleaning, drying, and preparation'
    },
    {
      stage: 'Quality Control',
      date: '18 March 2024',
      location: 'Certification Lab, Bangalore',
      status: 'completed',
      icon: '🔬',
      description: 'Quality testing and certification'
    },
    {
      stage: 'Harvest/Collection Event',
      date: '05 March 2024',
      location: 'Organic Farms, Wayanad, Kerala',
      status: 'completed',
      icon: '🚜',
      description: 'Ashwagandha and herbs harvested from certified organic farms'
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Supply Chain Timeline */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#1C1C1C' }}>
            Supply Chain Traceability
          </h2>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg ${
                    item.status === 'current' 
                      ? 'transform scale-110' 
                      : ''
                  }`}
                  style={{
                    backgroundColor: item.status === 'current' ? '#FF7438' : '#25CC73',
                    color: '#FFFFFF'
                  }}>
                    {item.icon}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-12 mt-2 rounded-full" style={{ backgroundColor: '#00B7FF' }}></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="p-4 rounded-xl hover:shadow-md transition-all duration-300" 
                       style={{ backgroundColor: '#FFFFE3' }}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold" style={{ color: '#1C1C1C' }}>
                        {item.stage}
                      </h3>
                      {item.status === 'current' && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold" 
                              style={{ backgroundColor: '#FF7438', color: '#FFFFFF' }}>
                          CURRENT
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm mb-2" style={{ color: '#874FFF' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">{item.date}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm mb-3" style={{ color: '#00B7FF' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-semibold">{item.location}</span>
                    </div>
                    
                    <p className="text-sm" style={{ color: '#1C1C1C' }}>
                      {item.description}
                    </p>
                    
                    {/* Blockchain verification */}
                    <div className="flex items-center space-x-2 mt-3">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center" 
                           style={{ backgroundColor: '#25CC73' }}>
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold" style={{ color: '#25CC73' }}>
                        Blockchain Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map View and Certificates */}
      <div className="space-y-8">
        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#1C1C1C' }}>
              Source Location Map
            </h3>
            <div className="w-full h-64 rounded-xl flex items-center justify-center text-6xl" 
                 style={{ backgroundColor: '#FFFFE3' }}>
              🗺️
            </div>
            <p className="text-center mt-4 text-sm" style={{ color: '#1C1C1C' }}>
              Interactive map showing farm locations and supply chain route
            </p>
            <button 
              className="w-full mt-4 flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              style={{ backgroundColor: '#00B7FF', color: '#FFFFFF' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>View Interactive Map</span>
            </button>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#1C1C1C' }}>
              Certificates & Lab Tests
            </h3>
            <div className="space-y-4">
              <button 
                className="w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#FFFFE3' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#25CC73' }}>
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  <span className="font-semibold" style={{ color: '#1C1C1C' }}>
                    Organic Certification
                  </span>
                </div>
                <svg className="w-5 h-5" style={{ color: '#FF7438' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button 
                className="w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#FFFFE3' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#874FFF' }}>
                    <span className="text-white text-sm">🔬</span>
                  </div>
                  <span className="font-semibold" style={{ color: '#1C1C1C' }}>
                    Lab Test Results
                  </span>
                </div>
                <svg className="w-5 h-5" style={{ color: '#FF7438' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button 
                className="w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#FFFFE3' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#00B7FF' }}>
                    <span className="text-white text-sm">📋</span>
                  </div>
                  <span className="font-semibold" style={{ color: '#1C1C1C' }}>
                    Harvest Conditions
                  </span>
                </div>
                <svg className="w-5 h-5" style={{ color: '#FF7438' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History