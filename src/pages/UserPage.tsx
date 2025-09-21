import { useState, useEffect } from 'react'
import ProductDetails from '../components/ProductDetails'
import Composition from '../components/Composition'
import History from '../components/History'

const UserPage = () => {
  const [activeView, setActiveView] = useState('details')

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const renderContent = () => {
    switch (activeView) {
      case 'details':
        return <ProductDetails />
      case 'composition':
        return <Composition />
      case 'provenance':
        return <History />
      default:
        return <ProductDetails />
    }
  }

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FFFFE3' }}>
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#1C1C1C' }}>
              Ashwagandha Latte
            </h1>
            <p className="text-lg sm:text-xl mb-4" style={{ color: '#FF7438' }}>
              Premium Ayurvedic Herbal Blend
            </p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#25CC73' }}></div>
              <span className="text-sm font-medium" style={{ color: '#25CC73' }}>
                Blockchain Verified
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-white rounded-2xl p-2 shadow-lg mb-8  overflow-x-hidden">
          <button
            onClick={() => setActiveView('details')}
            className={`flex-1 min-w-0 flex items-center justify-center space-x-2 py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 ${
              activeView === 'details'
                ? 'text-white shadow-lg transform scale-100'
                : 'hover:shadow-md'
            }`}
            style={{
              backgroundColor: activeView === 'details' ? '#FF7438' : 'transparent',
              color: activeView === 'details' ? '#FFFFFF' : '#1C1C1C'
            }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden sm:inline">Product Details</span>
            <span className="sm:hidden">Details</span>
          </button>
          <button
            onClick={() => setActiveView('composition')}
            className={`flex-1 min-w-0 flex items-center justify-center space-x-2 py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 ${
              activeView === 'composition'
                ? 'text-white shadow-lg transform scale-105'
                : 'hover:shadow-md'
            }`}
            style={{
              backgroundColor: activeView === 'composition' ? '#00B7FF' : 'transparent',
              color: activeView === 'composition' ? '#FFFFFF' : '#1C1C1C'
            }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="hidden sm:inline">Composition</span>
            <span className="sm:hidden">Ingredients</span>
          </button>
          <button
            onClick={() => setActiveView('provenance')}
            className={`flex-1 min-w-0 flex items-center justify-center space-x-2 py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 ${
              activeView === 'provenance'
                ? 'text-white shadow-lg transform scale-105'
                : 'hover:shadow-md'
            }`}
            style={{
              backgroundColor: activeView === 'provenance' ? '#874FFF' : 'transparent',
              color: activeView === 'provenance' ? '#FFFFFF' : '#1C1C1C'
            }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="hidden sm:inline">Provenance</span>
            <span className="sm:hidden">Origin</span>
          </button>
        </div>

        {/* Content */}
        <div className="transition-all duration-500 ease-in-out">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default UserPage