export interface Education {
  name: string
  level: string
  info: string | null
  year: {
    start: number
    end: number | null
  }
  url: string
}

export const Educations: Education[] = [
  {
    name: "King Mongkut's Institute of Technology Ladkrabang",
    level: 'Bachelor’s Degree',
    info: 'Faculty of IT',
    year: {
      start: 2018,
      end: null,
    },
    url: 'https://www.it.kmitl.ac.th/th/',
  },
  {
    name: 'Suankularbwittayalai Rangsit',
    level: 'High School',
    info: null,
    year: {
      start: 2012,
      end: 2018,
    },
    url: 'http://www.skr.ac.th/',
  },
]
