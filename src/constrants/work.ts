export interface WorkExperience {
  company: string
  position: string
  period: {
    start: string
    end: string | null
  }
  url: string
}

export const WorkExperiences: WorkExperience[] = [
  {
    company: 'Thai Beverage PLC',
    position: 'Application Development Officer',
    period: {
      start: "June 2022",
      end: null
    },
    url: 'https://www.thaibev.com/'
  }
]