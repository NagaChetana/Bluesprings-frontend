import React from 'react'
import { Card } from '../../../../components/ui/card'

const aboutItems = [
  { 
    title: 'Speed', 
    subtitle: '"Lightning-fast response times"',
    icon: '⚡',
    color: 'from-yellow-400 to-orange-500'
  },
  { 
    title: 'Efficiency', 
    subtitle: '"Streamlined operations"',
    icon: '🎯',
    color: 'from-blue-400 to-indigo-500'
  },
  { 
    title: 'Reliability', 
    subtitle: '"99.9% uptime guarantee"',
    icon: '🛡️',
    color: 'from-green-400 to-emerald-500'
  }
]

export const AboutUsSection = () => {
  return (
    <section id="about" className="w-full py-20 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
          Why Choose Us
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">About BlueSprings</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          BlueSprings provides intelligent customer-service solutions that streamline your operations — from tracking orders to managing refunds — all in one unified system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutItems.map((item, idx) => (
            <Card 
              key={idx} 
              className="p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group opacity-0 animate-slide-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 italic">{item.subtitle}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
