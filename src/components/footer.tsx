import React from 'react'
import { Github } from './icons/index'

export const Footer: React.FC = (props) => {
  return (
    <footer>
      <div className='mt-10 mb-5 flex max-w-full'>
        <div className='flex ml-auto'>
          <Github />
        </div>
      </div>
    </footer>
  )
}
