type Education = {
  institution: string;
  highlight: string;
  duration: string;
};

type Experience = {
  role: string;
  employer: string;
  duration: string;
};

type Accolade = {
  title: string;
  source: string;
  name: string;
  url: string;
  duration: string;
};

export const name: string = "Nicholas Ly";
export const description: string =
  "Nicholas Ly is a software engineer, writer, and open-source enthusiast.";

export const education: Education[] = [
  {
    institution: "Michigan State University",
    highlight: "Bachelor of Science, Computer Science",
    duration: "Aug 2019 - May 2023",
  },
];

export const experience: Experience[] = [
  {
    role: "Associate Software Engineer",
    employer: "Vervint",
    duration: "Sep 2023 - Present",
  },
  {
    role: "Web Development Intern",
    employer: "Vervint",
    duration: "May 2023 - Sep 2023",
  },
];

export const accolades: Accolade[] = [
  {
    title: "2 x University Student Research Challenge Winner",
    source: "NASA",
    name: "AIDED",
    url: "https://aided-website.vercel.app/",
    duration: "October 2022 and October 2023",
  },
  {
    title: "Best Web App",
    source: "SpartaHack 8",
    name: "Momentum",
    url: "https://devpost.com/software/momentum-flsu7o",
    duration: "January 2023",
  },
];
