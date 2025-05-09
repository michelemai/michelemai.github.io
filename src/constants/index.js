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
    title: "UBC Course Connect (Android Mobile App)",
    image: project1,
    description:
      "Built a mobile app for UBC students to view historical grade data and join course forums. Developed features like admin access, personalized course recommendations, and real-time push notifications using Android Studio, Node.js, and MongoDB. Deployed the backend on Azure with secure HTTPS via AWS API Gateway.",
    link:"https://github.com/michele8231/UBC-Course-Connect",
    technologies: ["Java (Android Studio)", "Node.js", "MongoDB", "Azure", "AWS API Gateway"],
  },
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
