import React from 'react'
import { Card, CardContent } from './ui/card'

const featuresData = [
  {
    title: 'Check Order Status',
    description: 'Customers can instantly view their current order progress with real-time updates.',
    icon: '📦',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'Track Order', 
    description: 'Customers can instantly view their current order progress with real-time updates.', 
    icon: '🚚',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Check Stock', 
    description: 'Customers can instantly view their current order progress with real-time updates.', 
    icon: '📊',
    color: 'from-green-500 to-teal-500'
  },
  { 
    title: 'Initialize Resend', 
    description: 'Customers can instantly view their current order progress with real-time updates.', 
    icon: '🔄',
    color: 'from-orange-500 to-red-500'
  },
  { 
    title: 'Initialize Refund', 
    description: 'Customers can instantly view their current order progress with real-time updates.', 
    icon: '💳',
    color: 'from-indigo-500 to-blue-500'
  },
  { 
    title: 'Handle Mails', 
    description: 'Customers can instantly view their current order progress with real-time updates.', 
    icon: '📧',
    color: 'from-pink-500 to-rose-500'
  },
  { 
    title: 'Handle Queries', 
    description: 'Customers can instantly view their current order progress with real-time updates.', 
    icon: '💬',
    color: 'from-yellow-500 to-orange-500'
  },
  { 
    title: 'Dashboard', 
    description: 'Customers can instantly view their current order progress with real-time updates.', 
    icon: '📈',
    color: 'from-teal-500 to-green-500'
  }
]

const FeaturesPage = () => {
  return (
    <section className="w-full px-4 py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-gray-900 text-4xl mb-8">Explore Our Features</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white rounded-2xl border-2 border-red-400 hover:border-blue-300 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden opacity-0 animate-slide-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{feature.description}</p>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                  see it in action 
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesPage
