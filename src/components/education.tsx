import React from 'react'

import { Section } from './section'

import { Educations } from '../constants/educations'

export const Education: React.FC = (props) => {
  return (
    <Section title='Educations'>
      {Educations.map((education) => {
        const { name, level, info, year, url } = education

        return (
          <div className='pl-5 my-3' key={name}>
            <a className='text-primary font-bold text-lg' href={url} target='_blank'>
              {name}
            </a>
            <p className='text-secondary text-base'>{`${level}${info !== null ? `, ${info}` : ''} | ${year.start} - ${
              year.end === null ? 'Now' : year.end
            }`}</p>
          </div>
        )
      })}
    </Section>
  )
}
