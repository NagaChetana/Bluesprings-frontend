import React from 'react'

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
)


// FeaturesPage 64 - 82 