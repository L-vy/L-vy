export interface CardEntry { title: string; sub: string; text: string; date: string; image?: string; link?: string; hint?: string }
export interface OrgItem { title: string; text: string; listTitle: string; list: string[] }
export const education = { image: '/images/education.svg', year: 'Expected 2028', school: 'BINUS University', degree: "Bachelor's Degree in Computer Science, Cloud Technology Track" }
// In text fields, **double asterisks** render as bold.
export interface OrgItem { title: string; text: string; listTitle: string; list: string[]; photos?: string[] }
export const experience = {
  organization: [
    { title: 'Bina Nusantara Computer Club', listTitle: 'Roles', list: ['Learning and Training (LnT) Staff of Board 37'],
      photos: ['/images/experience/bncc-1.svg', '/images/experience/bncc-2.svg', '/images/experience/bncc-3.svg'],
      text: 'Active contributor and leader managing community programs, educational initiatives, and large-scale tech events. Experienced in front-end class coordination, design direction (mood boards, branding, and digital assets), and seamless online event execution via Zoom.' },
    { title: 'Lab Curiosity', listTitle: 'Competitions', list: ['GoGlobal Innovators Challenge 2025 (UK & SEA Edition)', 'The 6th WINACTION International Business Model Canvas Competition', 'Agrivition Pekan Penalaran'],
      text: 'Active member and innovator collaborating with multidisciplinary, multicultural teams to design business models and pitch SDG-driven solutions. Experienced in professional training focused on advanced problem-solving, teamwork, and high-impact presentations.' },
  ] as OrgItem[],
  leadership: { title: 'Freshmen Leader & Partner', subtitle: 'First Year Program BINUSIAN 29',
    photos: ['/images/experience/lead-1.svg', '/images/experience/lead-2.svg', '/images/experience/lead-3.svg'],
    text: 'Experienced student leader who guided incoming freshmen through university orientation, mentored student groups, and facilitated classroom sessions. Delivered presentations on institutional values and coordinated a community tree planting project aligned with the SDGs.' },
  other: { title: 'IJSRS 2026', subtitle: 'Presenting in a Student Research Symposium',
    photos: ['/images/experience/ijsrs-1.svg', '/images/experience/ijsrs-2.svg'],
    text: 'Presented an ongoing research project titled "**Intelliseed: a drone for reforestation**" at the symposium. An autonomous seed-planting drone system that utilizes sensors and remote mapping to perform automated, cost-effective reforestation in hard-to-reach areas.' },
}
// Add `image: '/images/awards/xyz.svg'` to a card to replace its gray placeholder.
export const awards: CardEntry[] = [
  { title: 'WINACTION International Business Model Canvas Competition', sub: 'Top 4 Finalist', date: '05.2025', image: '/images/awards/winaction.svg',
    text: 'Developed Morive, a compact solar-powered atmospheric water generator using local moringa-seed filtration to address water scarcity.' },
  { title: 'Agrivition Pekan Penalaran', sub: 'Finalist', date: '12.2024', image: '/images/awards/agrivition.svg',
    text: 'Designed a regenerative agriculture framework combining drip irrigation, biochar, and vermicomposting to tackle drought and porous soil.' },
]
// TODO: replace the example.com links with the real paper URLs.
export const publications: CardEntry[] = [
  { title: 'Application of First-Order Markov Chain Models in Earthquake Activity Prediction', sub: 'IEEE INFINITYS 2026', date: '2026', link: 'https://ieeexplore.ieee.org/document/11665972', image: '/images/publications/infinitys.svg',
    hint: '2026 IEEE International Conference on Instrumentation, Networks, Future Sustainability, Information Theory, Transportation, and Systems',
    text: 'Explored first-order Markov chain models to analyze and forecast patterns in earthquake activity in Indonesia.' },
  { title: 'Cost sensitive ordinal classification for meningitis risk stratification considering clinical aspects to minimize false negatives', sub: 'ICCSCI 2026', date: '2026', link: 'https://www.sciencedirect.com/science/article/pii/S1877050926029558', image: '/images/publications/iccsci.svg',
    hint: 'The 11th International Conference on Computer Science and Computational Intelligence 2026',
    text: 'Investigated cost-sensitive ordinal classification to minimize false negatives in meningitis risk stratification using clinical metrics.' },
]
