export interface Intern {
  company: string
  position: string
  period: {
    start: string
    end: string | null
  }
  url: string
  projects: InternProject[] | null
}

export interface InternProject {
  name: string
  description: string
  url: string | null
}

export const Interns: Intern[] = [
  {
    company: 'Dek-D Interactive Company Limited',
    position: 'Frontend Developer',
    period: {
      start: 'Aug 2021',
      end: 'Nov 2021'
    },
    url: "https://www.dek-d.com/",
    projects: [
      {
        name: "Dek-D School Application",
        description: "Online Learning Mobile Application",
        url: "https://school.dek-d.com/app"
      }
    ]
  }
]