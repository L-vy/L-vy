export interface ProjectLink { label: string; url: string }
export interface Project {
  id: string; title: string; shortDescription: string; description: string
  image: string; prototypeImage: string; categories: string[]; tools: string[]; type: string
  links: ProjectLink[]; releaseDate: string; contributions: string[]
}
const img = (name: string) => `/images/projects/${name}.svg`
export const projects: Project[] = [
  {
    id: 'project01', title: 'Web-Based CDSS Engineering for Meningitis Risk Stratification with Cost-Sensitive False-Negative Minimization',
    shortDescription: 'Clinical decision support for meningitis risk.',
    description: "A web-based CDSS that uses a Random Forest model to predict the risk level of a patient's meningitis and provide an AI-generated summary based on the data. The model was adapted from previous research and this project serves as a continuation to build the CDSS prototype. It features two operational modes: single-patient and batch processing.",
    image: img('cdss-meningitis'), prototypeImage: img('cdss-meningitis'), categories: ['Application Development', 'UI/UX'],
    tools: ['Flask', 'Python', 'Google AI Studio', 'Figma'], type: 'Group project',
    links: [{ label: 'Repository', url: 'https://github.com/chrysan95/meningitis_risk_assessment' }], releaseDate: 'June 2026',
    contributions: ['Investigated core issues and analyzed relevant literature.', 'Modeled and mapped out the software development flows.', 'Formulated initial user interfaces for both single-patient and batch processing modes.'],
  },
  {
    id: 'project02', title: 'Klerve', shortDescription: 'Haptic pen and AI app that helps people with ADHD regain focus.',
    description: "This project, which started as an ideation, is designed to help individuals with ADHD or focus difficulties by using a haptic pen connected to an app. The AI-based system tracks body and eye movements, then provides vibration alerts that help users regain focus. It aligns with Google.org's focus on education while implementing human-centered AI technology.",
    image: img('klerve'), prototypeImage: img('klerve'), categories: ['UI/UX'], tools: ['Figma'], type: 'Group project',
    links: [{ label: 'Proposal', url: 'https://drive.google.com/file/d/1Z4kwclvYXWxlEG2Ly2cNN0OCXOssgMGx/view?usp=sharing' }, { label: 'Video', url: 'https://youtu.be/0q1nO0iuCGU?si=mCvCKTX16-4OYDPh' }],
    releaseDate: 'March 2026',
    contributions: ['Researched target user needs and primary focus challenges.', 'Structured and designed the proposal layout for a highly readable review.', 'Assisted in designing initial interface concepts for the prototype app.'],
  },
  {
    id: 'project03', title: 'Ducky', shortDescription: 'Gamified flashcard app for smarter university studying.',
    description: 'Ducky is a gamified learning application made for university students who have trouble building a proper learning strategy. Built on a simple, memory-focused flashcard app, it makes studying more engaging and digestible in a shorter span of time. Each day presents a daily quest to unlock Ducky skins, completed by checking off to-do lists or earning XP in the training hall.',
    image: img('ducky'), prototypeImage: img('ducky'), categories: ['UI/UX'], tools: ['Figma'], type: 'Self-initiated project',
    links: [{ label: 'Prototype', url: 'https://www.figma.com/proto/vDHKPYqVWF5EF2O1UojpyD/Final-Project-UI-UX?node-id=77-3&p=f&viewport=-196%2C-27%2C0.02&t=XdKJMJBtwxoFTxZr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=77%3A3&show-proto-sidebar=1&page-id=37%3A4298' }, { label: 'Overview', url: 'https://drive.google.com/file/d/1gh3WKY70dS-ZdYFia5I56Ok9MZQVw0ZY/view?usp=sharing' }],
    releaseDate: 'May 2025',
    contributions: ['Researched user needs through targeted surveys.', 'Designed interactive app prototype layouts.', 'Conducted app evaluations and user testing.', 'Structured the case study presentation and wireframes.'],
  },
  {
    id: 'project04', title: 'Perfect Farm', shortDescription: 'Marketplace for odd-looking produce to reduce food waste.',
    description: 'An online platform that enables farmers to sell odd-looking fruits and vegetables directly to consumers. These products are still fit for consumption but do not meet standard market appearances. The project aims to reduce food waste and give consumers affordable yet healthy diets, supporting UN Sustainable Development Goals 1, 2, and 10.',
    image: img('perfect-farm'), prototypeImage: img('perfect-farm'), categories: ['UI/UX'], tools: ['Figma'], type: 'Group project',
    links: [{ label: 'Prototype', url: 'https://www.figma.com/proto/0NArwISPxhp6qkAFpMuTFR/GoGlobal-Innovation?node-id=26-292&p=f&viewport=103%2C214%2C0.21&t=yB5uVCZkxzJckIVd-1&scaling=min-zoom&content-scaling=fixed&page-id=24%3A2' }, { label: 'Overview', url: 'https://canva.link/1w0f1v8fhv46lss' }],
    releaseDate: 'June 2025',
    contributions: ['Researched food waste relevancy across UK and SEA regions.', 'Formatted and structured the presentation layout.', 'Designed initial customer and farmer interface prototype layouts and app logo.'],
  },
]
