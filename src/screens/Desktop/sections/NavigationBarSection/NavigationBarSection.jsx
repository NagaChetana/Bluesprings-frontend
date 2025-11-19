import React, { useState, useEffect } from 'react'
import { Button } from '../../../../components/ui/button'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Testimonials', href: '#testimonials' }
]

export const NavigationBarSection = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect backdrop-blur-xl shadow-xl border-b border-gray-200/20' : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-[1400px] mx-auto w-full grid grid-cols-3 items-center px-6 py-1">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BS</span>
          </div>
          <span className="font-bold text-gray-900 text-2xl tracking-tight">BlueSprings</span>
        </div>
        {/* Centered Navigation Links */}
        <div className="flex justify-center">
          <div className="flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative font-medium text-gray-700 text-sm hover:text-blue-600 transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button (right) */}
        <div className="flex justify-end">
          <Button className="rounded-full px-8 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBarSection
