import type { NextPage } from 'next'

import { Education, Skill, Contact, Footer } from '../components/index'

const Page: NextPage = (props) => {
  return (
    <div className='container mx-auto px-4 font-Montserrat'>
      <p className='text-4xl mt-12 text-white font-black tracking-wider'>Chanwit Settavongsin</p>
      <div>
        <p className='text-primary text-xl tracking-wide'>Junior Developer</p>
      </div>
      <div>
        <Education />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Page
