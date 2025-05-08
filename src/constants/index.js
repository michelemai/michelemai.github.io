import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";


export const ABOUT_TEXT_P1 = `I first learned how to code in the 12th grade in an AP Comp Sci class I decided to sign up for last minute because my friend was doing it too. I always thought coding was super complicated and I didn't understand
why other students would pick it as their elective. I'd always pick electives like art and dance. However, this class quickly became my favourite class in the 12th grade. Coding become a creative outlet that I once thought could only
be found in things like art and dance. 
`;

export const ABOUT_TEXT_P2 = `Fast forward to the present day where I graduated with a degree in computer engineering. I am constantly learning new skills with the things I build. While most of my experience lies in 
backend web development, I love learning and taking on new challenges like teaching myself React (hence this website!) as I work towards becoming a well-rounded full stack developer.   
`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Aug 2023",
    role: "Software Engineering Intern",
    company: "Dyne Technologies",
    link: "https://www.dyneapp.ca/",
    description: `At Dyne, I developed Python services to integrate with POS systems like Oracle Micros and Lightspeed, enabling transactional data collection for ML driven features such as dynamic pricing. I also built TypeScript API endpoints to extract and analyze customer reviews from Google and Yelp using SerpAPI, improving sentiment insights for restaurant clients.`,
    technologies: ["TypeScript", "Python", "REST APIs"],
  },
  {
    year: "Jan 2022 - Sept 2022",
    role: "Software Engineering Intern",
    company: "Space Alpha Insights",
    link: "https://www.spacealphainsights.com/",
    description: `I built a PyQt-based database GUI using Python and SQL, following the MVC design pattern. I implemented features like auto-refresh to ensure real-time data updates while users edited entries. I also participated in weekly demos and code reviews with a cross-functional team of software, embedded, and test engineers.`,
    technologies: ["Python", "PyQt", "SQL", "MariaDB"],
  },
  {
    year: "June 2021 - Sept 2021",
    role: "Technical Sales Engineering Intern",
    company: "Cisco Systems",
    link:"https://www.cisco.com/site/ca/en/index.html",
    description: `I completed the technical sales training program at Cisco. I conducted digital transformation research for enterprise accounts ranging from $300K to $10M. Additionally, I designed a Webex bot using Python and JavaScript that integrated with Cisco’s security APIs (like AMP), allowing users to check device vulnerabilities through chat commands.`,
    technologies: ["Sales Training", "Technical Presentations", "Python", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    link:"https://github.com/michele8231/UBC-Course-Connect",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    link:"https://github.com/michele8231/UBC-Course-Connect",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    link:"https://github.com/michele8231/UBC-Course-Connect",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    link:"https://github.com/michele8231/UBC-Course-Connect",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
