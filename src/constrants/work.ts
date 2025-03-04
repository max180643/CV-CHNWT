export interface WorkExperience {
  company: string;
  position: string;
  period: {
    start: string;
    end: string | null;
  };
  url: string;
}

export const WorkExperiences: WorkExperience[] = [
  {
    company: "TCC Technology",
    position: "Application Development Officer",
    period: {
      start: "October 2024",
      end: null,
    },
    url: "https://www.tcc-technology.com/",
  },
  {
    company: "Thai Beverage PLC",
    position: "Application Development Officer",
    period: {
      start: "June 2022",
      end: "November 2024",
    },
    url: "https://www.thaibev.com/",
  },
];
