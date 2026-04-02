const cityIntroTemplates = [
  `Looking for a boudoir photographer in {city}, {state}? You've come to the right place. {city} is home to talented boudoir photographers who specialize in creating stunning, empowering portraits. Whether you're celebrating a milestone, preparing a gift for someone special, or simply treating yourself, our directory connects you with the best boudoir photographers in the {city} area.`,

  `{city}, {state} has a thriving boudoir photography scene, with experienced photographers offering everything from classic and elegant to bold and modern styles. Our curated directory features verified boudoir photographers in {city} who are dedicated to making you feel confident and beautiful during your session.`,

  `Discover top-rated boudoir photographers in {city}, {state}. From intimate studio sessions to creative on-location shoots throughout the {city} area, our directory helps you find the perfect photographer to capture your unique beauty. Every photographer listed has been selected for their professionalism, artistry, and commitment to client comfort.`,

  `The boudoir photography community in {city}, {state} continues to grow as more people discover the empowering experience of a professional boudoir session. Whether you're a first-timer or a returning client, {city}'s boudoir photographers offer a range of styles and packages to suit your vision and budget.`,

  `Welcome to the premier directory for boudoir photographers in {city}, {state}. Our hand-picked selection of {city} boudoir photographers includes specialists in bridal boudoir, couples sessions, maternity boudoir, and luxury editorial-style shoots. Browse portfolios, read reviews, and find your perfect photographer match.`,

  `{city} is known for its vibrant arts scene, and boudoir photography is no exception. The talented photographers in {city}, {state} bring creativity, professionalism, and a keen artistic eye to every session. Explore our directory to find boudoir photographers in {city} who will help you feel comfortable and create images you'll treasure.`,

  `Planning a boudoir photoshoot in {city}, {state}? Start your search here. Our directory features {city}'s most skilled boudoir photographers, complete with portfolios, pricing information, and client reviews. From luxurious studio settings to unique {city} locations, find the photographer who matches your style.`,

  `Experience the art of boudoir photography in {city}, {state}. Our directory connects you with professional photographers who specialize in creating intimate, tasteful portraits that celebrate your confidence and beauty. Each {city} photographer in our listings has been vetted for quality, professionalism, and positive client experiences.`,

  `Whether you're searching for a bridal boudoir photographer, a couples session, or a solo empowerment shoot in {city}, {state}, our directory has you covered. {city}'s boudoir photography professionals offer diverse styles from classic black-and-white to vibrant modern aesthetics, ensuring you find the perfect fit.`,

  `{city}, {state} offers an incredible selection of boudoir photographers ready to help you capture your most confident self. From cozy home sessions to professional studio environments throughout {city}, our directory makes it easy to compare photographers, read reviews, and book your perfect boudoir experience.`,

  `Find your ideal boudoir photographer in {city}, {state} through our comprehensive directory. The {city} area boasts photographers skilled in a variety of boudoir styles, from vintage glamour to contemporary fine art. Each listing includes portfolio samples, specialties, and contact information to streamline your search.`,

  `Boudoir photography in {city}, {state} is more popular than ever, and for good reason. A professional boudoir session is a transformative experience that celebrates self-love and confidence. Our {city} directory features photographers who create a safe, comfortable environment while producing stunning, gallery-worthy images.`,
];

const stateIntroTemplates = [
  `Find the best boudoir photographers across {state}. Our comprehensive directory covers major cities and towns throughout the state, making it easy to discover talented photographers near you. Whether you're in a bustling metro area or a charming small town, {state} has incredible boudoir photography talent waiting to capture your beauty.`,

  `{state} is home to a diverse community of boudoir photographers, from established studios in major cities to boutique photographers in smaller towns. Browse our {state} directory to find photographers who match your style, budget, and location. Every photographer listed has been selected for their professionalism and artistry.`,

  `Explore boudoir photographers throughout {state}. Our state-wide directory features photographers in cities large and small, each bringing their unique artistic vision to the intimate art of boudoir photography. From classic elegance to modern editorial styles, {state}'s photographers offer something for everyone.`,
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getCityIntro(city: string, state: string): string {
  const index = hashString(city + state) % cityIntroTemplates.length;
  return cityIntroTemplates[index]
    .replace(/{city}/g, city)
    .replace(/{state}/g, state);
}

export function getStateIntro(state: string): string {
  const index = hashString(state) % stateIntroTemplates.length;
  return stateIntroTemplates[index].replace(/{state}/g, state);
}

export function getCityFAQs(
  city: string,
  state: string,
  faqs: Array<{ question: string; answer: string }>
): Array<{ question: string; answer: string }> {
  return faqs.map((faq) => ({
    question: faq.question.replace(/{city}/g, city).replace(/{state}/g, state),
    answer: faq.answer.replace(/{city}/g, city).replace(/{state}/g, state),
  }));
}

export function getStateFAQs(
  state: string,
  faqs: Array<{ question: string; answer: string }>
): Array<{ question: string; answer: string }> {
  return faqs.map((faq) => ({
    question: faq.question.replace(/{state}/g, state),
    answer: faq.answer.replace(/{state}/g, state),
  }));
}

export function generateCityMetaTitle(city: string, state: string, count?: number): string {
  if (count && count > 0) {
    return `${count} Best Boudoir Photographers in ${city}, ${state} (2026)`;
  }
  return `Best Boudoir Photographers in ${city}, ${state} | Boudoir Photography Club`;
}

export function generateCityMetaDescription(
  city: string,
  state: string
): string {
  return `Find top-rated boudoir photographers in ${city}, ${state}. Browse portfolios, read reviews, and book your empowering boudoir photography session today. Free quotes available.`;
}

export function generateStateMetaTitle(state: string): string {
  return `Boudoir Photographers in ${state} | Find Local Studios | Boudoir Photography Club`;
}

export function generateStateMetaDescription(state: string): string {
  return `Browse the best boudoir photographers across ${state}. Find studios in every major city, compare portfolios and prices, and book your session today.`;
}
