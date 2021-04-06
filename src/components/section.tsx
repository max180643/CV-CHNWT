import React from 'react'

export interface SectionProps {
  title: string
}

export const Section: React.FC<SectionProps> = (props) => {
  const { title, children } = props

  return (
    <React.Fragment>
      <p className='text-2xl text-white font-bold mt-7 mb-3'>{title}</p>
      {children}
    </React.Fragment>
  )
}
