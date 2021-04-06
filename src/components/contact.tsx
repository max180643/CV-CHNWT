import React from 'react'

import { Section } from './section'

export const Contact: React.FC = (props) => {
  return (
    <Section title='Contacts'>
      <div className='pl-5 my-3'>
        <p className='text-primary text-lg'>If you want to contact me, send me an email.</p>
        <a className='text-secondary text-base' href='mailto:max180643@gmail.com'>
          max180643@gmail.com
        </a>
      </div>
    </Section>
  )
}
