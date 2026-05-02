/**
 * Working Team grid (About → Our Story → Working Team).
 * Headshots: common-about-us-page on CloudFront; add new files there and map below.
 */
const PLACEHOLDER_IMG =
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg";

const CDN =
  "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page";

const COMPANY_LI = "https://www.linkedin.com/company/reallives-foundation/";

export const workingTeamMembers = [
  {
    name: "Parag Mankeekar",
    desc: "Team Leader",
    img: `${CDN}/ceo-image.jpg`,
    linkedinUrl: "https://www.linkedin.com/in/reallives/",
  },
  {
    name: "Ravi Gulhane",
    desc: "CTO",
    img: `${CDN}/ravi-gulhane.jpg`,
    linkedinUrl: "https://www.linkedin.com/in/ravigulhane/",
  },
  {
    name: "Ajit Ghanekar",
    desc: "Chief Stasitician",
    img: `${CDN}/ajit-ghanekar.jpg`,
    linkedinUrl: "https://www.linkedin.com/in/ajit-ghanekar/",
  },
  {
    name: "Atharva Nijampurkar",
    desc: "Senior Backend Developer",
    img: `${CDN}/atharva.jpg`,
    linkedinUrl: "https://www.linkedin.com/in/atharva-nijampurkar-973674195/",
  },
  {
    name: "Pankaj Sapkal",
    desc: "Chief Strategist",
    img: `${CDN}/pankaj-sapkal.jpg`,
    linkedinUrl: COMPANY_LI,
  },
  {
    name: "Vidya Mankeekar",
    desc: "Account and HR",
    img: PLACEHOLDER_IMG,
    linkedinUrl: COMPANY_LI,
  },
  {
    name: "Viraj Kabbur",
    desc: "Product Manager",
    img: `${CDN}/viraj.jpg`,
    linkedinUrl: "https://www.linkedin.com/in/virajkabbur/",
  },
  {
    name: "Adarsh Vishwakarma",
    desc: "Frontend Developer",
    img: `${CDN}/adarsh.jpeg`,
    linkedinUrl: COMPANY_LI,
  },
  {
    name: "Janhavi Desai",
    desc: "Translation Intern",
    img: `${CDN}/janhavi.png`,
    linkedinUrl: "https://www.linkedin.com/in/janhavi-hemant-desai-330442281/",
  },
  {
    name: "Sakshi Kulkarni",
    desc: "Translation Intern",
    img: `${CDN}/sakshi.png`,
    linkedinUrl: "https://www.linkedin.com/in/sakshi-kulkarni-b16460313/",
  },
  {
    name: "Bhoomi Luniya",
    desc: "AI Intern",
    img: `${CDN}/bhoomi.jpeg`,
    linkedinUrl: "https://www.linkedin.com/in/bhoomi-luniya-3393aa371/",
  },
];
