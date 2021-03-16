export interface Education {
  name: string
  level: string
  info: string | null
  year: {
    start: number
    end: number | null
  }
}

export const Educations: Education[] = [
  {
    name: "King Mongkut's Institute of Technology Ladkrabang",
    level: "Bachelor’s Degree",
    info: "Faculty of IT",
    year: {
      start: 2018,
      end: null
    }
  },
  {
    name: "Suankularbwittayalai Rangsit",
    level: "High School",
    info: null,
    year: {
      start: 2012,
      end: 2018
    }
  }
]