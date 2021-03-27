import React from 'react'
import { Github, Linkedin } from './icons/index'

export const Footer: React.FC = (props) => {
  return (
    <footer>
      <div className='mt-10 mb-5 flex max-w-full'>
        <div className='flex ml-auto'>
          <a href='https://www.linkedin.com/in/max180643/' className='text-gray-300 hover:text-primary mx-1'>
            <Linkedin size={10} />
          </a>
          <a href='https://github.com/max180643' className='text-gray-300 hover:text-primary mx-1'>
            <Github size={10} />
          </a>
        </div>
      </div>
    </footer>
  )
}
