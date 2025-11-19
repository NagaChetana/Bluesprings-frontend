import React from 'react'

export const Avatar = ({ children, size = 40, className = '' }) => (
  <div
    className={`rounded-full bg-gray-300 inline-flex items-center justify-center text-gray-700 ${className}`}
    style={{ width: size, height: size }}
  >
    {children}
  </div>
)
