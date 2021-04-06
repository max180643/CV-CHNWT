import React from 'react'

import { Section } from './section'

import { Skills } from '../constants/skills'

export const Skill: React.FC = (props) => {
  return (
    <Section title='Skills'>
      <div className='grid grid-flow-col grid-cols-4 grid-rows-4 gap-5 py-0 px-5'>
        {Skills.map((skill) => {
          return (
            <div key={skill}>
              <p className='text-center text-secondary text-base font-bold'>{skill}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
