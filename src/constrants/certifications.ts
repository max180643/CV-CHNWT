export interface Certification {
  name: string
  company: string
  issue: {
    month: string | null
    year: number
  }
  url: string | null
}

export const Certifications: Certification[] = [
  {
    name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    company: 'Amazon Web Services (AWS)',
    issue: {
      month: 'Apr',
      year: 2021
    },
    url: 'https://www.credly.com/badges/24865ec0-589e-41e8-ac7c-cc36ef5365dc'
  },
  {
    name: 'Networking Academy Learn-A-Thon 2020',
    company: 'Cisco',
    issue: {
      month: 'Oct',
      year: 2020
    },
    url: 'https://www.credly.com/badges/3fce9456-513d-43ee-b750-bbd0cefc203c'
  },
  {
    name: 'Introduction to Cybersecurity',
    company: 'Cisco',
    issue: {
      month: 'Sep',
      year: 2020
    },
    url: 'https://www.credly.com/badges/6cd347f1-219b-4ab1-8028-10610834a52b'
  }
]