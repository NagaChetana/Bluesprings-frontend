import React from 'react'
import { Button } from '../../../../components/ui/button'

export const HeroBannerSection = () => {
  return (
    <section className="w-full pt-[84px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 py-24 flex items-center gap-12 relative z-10">
        <div className="flex-1 opacity-0 translate-y-[-1rem] animate-fade-in">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 opacity-0 animate-fade-in [--animation-delay:200ms]">
            ✨ AI-Powered Customer Support
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Empower your Support with{' '}
            <span className="gradient-text">BlueSprings</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Smart, automated and human-like customer service for your business.
            Handle thousands of queries with 99.9% accuracy.
          </p>
          <div className="flex gap-4 opacity-0 animate-fade-in [--animation-delay:400ms]">
            <Button className="rounded-full px-8 py-6 text-base bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105">
              Try Demo Free
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
              Contact Sales
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex gap-8 mt-12 opacity-0 animate-fade-in [--animation-delay:600ms]">
            <div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Daily Queries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Automation</div>
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[320px] rounded-3xl flex-shrink-0 shadow-2xl relative opacity-0 animate-scale-in [--animation-delay:400ms] overflow-hidden bg-white">
          {/* Professional customer service dashboard illustration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <svg className="w-full h-full" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Dashboard window */}
              <rect x="20" y="20" width="360" height="240" rx="12" fill="white" filter="url(#shadow)" />
              
              {/* Header bar */}
              <rect x="20" y="20" width="360" height="40" rx="12" fill="url(#headerGradient)" />
              <circle cx="40" cy="40" r="6" fill="white" opacity="0.3" />
              <circle cx="56" cy="40" r="6" fill="white" opacity="0.3" />
              <circle cx="72" cy="40" r="6" fill="white" opacity="0.3" />
              
              {/* Sidebar */}
              <rect x="30" y="70" width="100" height="180" rx="8" fill="#F3F4F6" />
              <rect x="40" y="80" width="80" height="8" rx="4" fill="#E5E7EB" />
              <rect x="40" y="100" width="80" height="8" rx="4" fill="#3B82F6" />
              <rect x="40" y="120" width="80" height="8" rx="4" fill="#E5E7EB" />
              <rect x="40" y="140" width="80" height="8" rx="4" fill="#E5E7EB" />
              
              {/* Main content area - Chat interface */}
              <rect x="140" y="70" width="230" height="180" rx="8" fill="#FAFAFA" />
              
              {/* Chat messages */}
              <g opacity="0.9">
                {/* Incoming message */}
                <rect x="150" y="85" width="140" height="30" rx="15" fill="#E0E7FF" />
                <rect x="160" y="95" width="80" height="4" rx="2" fill="#6366F1" />
                <rect x="160" y="103" width="100" height="4" rx="2" fill="#818CF8" />
                
                {/* Outgoing message */}
                <rect x="230" y="125" width="130" height="30" rx="15" fill="url(#messageGradient)" />
                <rect x="240" y="135" width="90" height="4" rx="2" fill="white" opacity="0.9" />
                <rect x="240" y="143" width="70" height="4" rx="2" fill="white" opacity="0.9" />
                
                {/* Incoming message */}
                <rect x="150" y="165" width="120" height="30" rx="15" fill="#E0E7FF" />
                <rect x="160" y="175" width="70" height="4" rx="2" fill="#6366F1" />
                <rect x="160" y="183" width="50" height="4" rx="2" fill="#818CF8" />
              </g>
              
              {/* Avatar bubbles */}
              <circle cx="150" cy="100" r="12" fill="url(#avatarGradient1)" />
              <circle cx="350" cy="140" r="12" fill="url(#avatarGradient2)" />
              <circle cx="150" cy="180" r="12" fill="url(#avatarGradient1)" />
              
              {/* Typing indicator */}
              <g transform="translate(150, 210)">
                <rect x="0" y="0" width="60" height="20" rx="10" fill="#F3F4F6" />
                <circle cx="15" cy="10" r="3" fill="#9CA3AF">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="30" cy="10" r="3" fill="#9CA3AF">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="45" cy="10" r="3" fill="#9CA3AF">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Stats badges */}
              <g transform="translate(240, 70)">
                <rect width="60" height="24" rx="12" fill="#10B981" opacity="0.1" />
                <text x="30" y="16" fontSize="10" fill="#10B981" fontWeight="bold" textAnchor="middle">✓ Live</text>
              </g>
              
              <g transform="translate(310, 70)">
                <rect width="50" height="24" rx="12" fill="#3B82F6" opacity="0.1" />
                <text x="25" y="16" fontSize="10" fill="#3B82F6" fontWeight="bold" textAnchor="middle">AI On</text>
              </g>
              
              {/* Floating elements */}
              <circle cx="360" cy="250" r="20" fill="url(#floatGradient)" opacity="0.6">
                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="40" cy="250" r="15" fill="#FBBF24" opacity="0.4">
                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="2.5s" repeatCount="indefinite" />
              </circle>
              
              {/* Gradients and filters */}
              <defs>
                <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                <linearGradient id="messageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                <linearGradient id="avatarGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                <linearGradient id="avatarGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="floatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                  <feOffset dx="0" dy="4" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.1"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBannerSection
