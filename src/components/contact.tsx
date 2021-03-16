import React from 'react'

import { Section } from './section'

export const Contact: React.FC = props => {
  return (
    <Section title="Contacts">
      <div className="pl-5 my-3">
        <p className="text-primary text-lg">If you want to contact me, send me an email.</p>
        <p className="text-secondary text-base">max180643@gmail.com</p>
      </div>
    </Section>
  )
}