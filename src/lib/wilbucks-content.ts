export const email = "mailto:marieawilcox@outlook.com";
export const linkedin = "https://uk.linkedin.com/in/marieclutterbuck";
export const podcast = "https://open.spotify.com/episode/3H6HWOa1QC6c2XzBZmzUsH";
export const organisations = ["Binalyze", "Panaseer", "McLaren Applied", "Digital Barriers", "Siemens", "BAE Systems"];
export const focusAreas = [
  { title: "Commercial strategy and market entry", question: "Where is the strongest commercial opportunity?", copy: "Examine target accounts, buying requirements and routes to market before committing sales and marketing effort. Define what entering a market would require, rather than treating interest as evidence of demand." },
  { title: "Sales strategy and business development", question: "How are opportunities developed and pursued?", copy: "Review account priorities, buyer conversations and the decisions that move a sale forward. Consider how client relationships support further business." },
  { title: "Positioning and propositions", question: "Can a buyer explain why they would choose your product?", copy: "Establish the relevant use case, the alternatives and the evidence behind the proposition. Use that in sales material and marketing messages." },
  { title: "Product marketing and go-to-market", question: "What does sales need to take the product to market?", copy: "Work through audiences, use cases and launch priorities. Make product information usable in a buying conversation, not just accurate as a technical description." },
  { title: "Demand generation and pipeline", question: "Where does marketing interest stop becoming a sales opportunity?", copy: "Examine targeting, channels, qualification and follow-up. Agree what counts as a useful opportunity and how sales and marketing assess it." },
  { title: "AI-enabled marketing", question: "Which tasks are worth changing?", copy: "Assess uses such as research, content preparation and workflow automation against information quality, time spent and review requirements. Do not adopt a tool simply because it uses AI." },
];
export const homeFocus = [
  { title: "Propositions and positioning", copy: "What are buyers being asked to buy, and why should they choose it over the alternatives?" },
  { title: "Sales strategy and routes to market", copy: "Which customers deserve attention? How will you reach them and develop the relationship?" },
  { title: "Demand generation", copy: "Is marketing reaching potential buyers and producing opportunities that sales can pursue?" },
];
export const media = [
  { outlet: "The Guardian", title: "ASOS investigating after customers receive hacking notification", url: "https://www.theguardian.com/business/live/2026/oct/06/euro-france-central-bank-interest-rates-bonds-latest-live-updates?CMP=share_btn_url&page=with%3Ablock-6ac4cea68f083381b4684035", date: "6 October 2026", syndicated: false },
  { outlet: "Sky News", title: "Threatening message to ASOS customers was ‘psychological warfare’", url: "https://news.sky.com/story/asos-latest-customers-told-retailer-has-been-hacked-13591381?postid=12585094", date: "6 October 2026", syndicated: false },
  { outlet: "Daily Mail", title: "ASOS customers receive message threatening to leak their data", url: "https://www.dailymail.com/news/article-16186489/Asos-hacked-customers-receive-message.html", date: "6 October 2026", syndicated: false },
  { outlet: "France 24", title: "ASOS probes ‘unauthorised activity’ after phone alerts", url: "https://www.france24.com/en/live-news/20261006-asos-says-probing-unauthorised-activity-after-phone-alerts", date: "6 October 2026", syndicated: true },
  { outlet: "The Straits Times", title: "Online fashion giant ASOS probes hacking phone alerts", url: "https://www.straitstimes.com/world/europe/online-fashion-giant-asos-probes-unauthorised-activity-after-hacking-phone-alerts?ref=search-results", date: "7 October 2026", syndicated: true },
  { outlet: "Barron’s", title: "ASOS says probing ‘unauthorised activity’ after phone alerts", url: "https://www.barrons.com/news/asos-says-probing-unauthorised-activity-after-phone-alerts-c17c53a5?eafs_enabled=false", date: "6 October 2026", syndicated: true },
];
export const person = {
  "@type": "Person", "@id": "/marie-wilcox#person", name: "Marie Wilcox", jobTitle: "Director", worksFor: { "@type": "Organization", "@id": "/#wilbucks", name: "Wilbucks" },
  description: "Senior technology marketing leader with more than 20 years’ experience in positioning, product marketing, go-to-market strategy and demand generation.",
  email: "marieawilcox@outlook.com", sameAs: [linkedin],
  knowsAbout: ["Go-to-market strategy", "Product marketing", "Category creation", "Demand generation", "Analyst relations", "Cybersecurity", "AI-enabled marketing"],
  hasCredential: { "@type": "EducationalOccupationalCredential", name: "Fellow of the Chartered Institute of Marketing (FCIM)" },
};
export const simonLinkedin = "https://www.linkedin.com/in/simon-wilcox/";
export const company = { "@type": "Organization", "@id": "/#wilbucks", name: "Wilbucks", description: "Independent sales and marketing consultancy for technology businesses." };
export const simonPerson = { "@type": "Person", "@id": "/simon-wilcox#person", name: "Simon Wilcox", sameAs: [simonLinkedin], worksFor: company, jobTitle: "Director" };
export const directorIntroductions = [
  { name: "Marie Wilcox", path: "/marie-wilcox" as const, copy: "Senior technology marketing leader. Her experience covers positioning, product marketing, go-to-market strategy and demand generation, including the practical use of AI in marketing." },
  { name: "Simon Wilcox", path: "/simon-wilcox" as const, copy: "Sales and commercial leader with a technology and security background. His focus covers business development, sales strategy, market entry and client relationships." },
];
export type Publication = { title: string; outlet: string; date: string; url: string; category: "authored" | "quoted"; attribution: string; context: string };
export const publications: Publication[] = [
 { title: "From Zero Day Attack to Zero Day Recovery", outlet: "Infosecurity Magazine", date: "1 August 2018", url: "https://www.infosecurity-magazine.com/opinions/zero-day-attack-recovery/", category: "authored", attribution: "By Marie Clutterbuck, then Chief Marketing Officer at Tectrade", context: "Recovering data after destructive cyber attacks." },
 { title: "No excuse for derailing station IT", outlet: "Rail Technology Magazine", date: "10 June 2019", url: "https://www.railtechnologymagazine.com/Comment/no-excuse-for-derailing-station-it", category: "authored", attribution: "By Marie Clutterbuck, then CMO at Tectrade", context: "Railway station IT vulnerabilities and recovery." },
 { title: "Stay one step ahead", outlet: "Intersec", date: "June 2019", url: "https://www.intersecmag.co.uk/stay-one-step-ahead/", category: "authored", attribution: "By Marie Clutterbuck", context: "Businesses as targets for cyber crime." },
 { title: "Restoring Cybersecurity Confidence Amidst a Resource Crisis", outlet: "Solutions Review", date: "30 August 2023", url: "https://solutionsreview.com/security-information-event-management/restoring-cybersecurity-confidence-amidst-a-resource-crisis/", category: "authored", attribution: "By Marie Wilcox, then Security Evangelist at Panaseer", context: "Cybersecurity resources and confidence." },
 { title: "UK plc failing on multiple cyber measures", outlet: "Computer Weekly", date: "9 April 2024", url: "https://www.computerweekly.com/news/366580174/UK-plc-failing-on-multiple-cyber-measures", category: "quoted", attribution: "By Alex Scroxton; quotes Marie Wilcox as Security Evangelist at Panaseer", context: "UK organisations’ cyber controls and security visibility." },
 { title: "From Alerts to Answers: Unlocking XDR’s Full Potential with Forensic Visibility", outlet: "Cisco Investments", date: "9 September 2025", url: "https://www.ciscoinvestments.com/posts/from-alerts-to-answers-unlocking-xdrs-full-potential-with-forensic-visibility", category: "authored", attribution: "By Marie Wilcox, identified with Binalyze at publication", context: "Forensic visibility and security investigations." },
 { title: "Soft Market, Hard Choices: The State of Cyber Insurance", outlet: "Infosecurity Magazine", date: "31 December 2025", url: "https://www.infosecurity-magazine.com/news-features/the-state-of-cyber-insurance-2025/", category: "quoted", attribution: "By Stephen Pritchard; quotes Marie Wilcox as VP at Binalyze and CIISec board director at publication", context: "Cyber insurance and enterprise risk management." },
];
export const principles = [
 ["Use buyer feedback.", "Test assumptions against sales conversations and available evidence."],
 ["Make decisions before adding activity.", "More content or outreach is not always the answer."],
 ["Keep claims defensible.", "Explain what the product can do without stretching the evidence."],
 ["Use tools for a reason.", "AI is useful where it improves a defined task. Outputs still need checking."],
];

// Preserve the other collected links as research records, not public catalogue entries.
export const recentPublications: Publication[] = [
 // This linked update has no heading; retain a descriptive label rather than inventing a publisher title.
 { title: "ASOS investigating after customers receive hacking notification", outlet: "The Guardian", date: "6 October 2026", url: "https://www.theguardian.com/business/live/2026/oct/06/euro-france-central-bank-interest-rates-bonds-latest-live-updates?CMP=share_btn_url&page=with%3Ablock-6ac4cea68f083381b4684035", category: "quoted", attribution: "Quotes Marie Wilcox as vice president of market strategy at Binalyze at publication.", context: "Commentary on the ASOS incident in a written live-blog update." },
 ...["Cisco Investments", "Infosecurity Magazine"].flatMap(outlet => publications.filter(item => item.outlet === outlet && item.date.includes("2025"))),
];
export const earlierPublications = ["9 April 2024", "30 August 2023", "10 June 2019", "1 August 2018"].flatMap(date => publications.filter(item => item.date === date));
export const profilePublications = ["Cisco Investments", "Solutions Review"].flatMap(outlet => publications.filter(item => item.outlet === outlet));
