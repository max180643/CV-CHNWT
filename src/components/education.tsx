import React from 'react'

import { Section } from './section'

import { Educations } from '../constants/educations'

export const Education: React.FC = props => {
  return (
    <Section title="Educations">
      {
        Educations.map((education) => {
          const { name, level, info, year } = education

          return (
            <div className="pl-5 my-3" key={name}>
              <p className="text-primary font-bold text-lg">{name}</p>
              <p className="text-secondary text-base">{`${level}${info !== null ? `, ${info}` : ''} | ${year.start} - ${year.end === null ? 'Now' : year.end}`}</p>
            </div>
          )
        })
      }
    </Section>
  )
}