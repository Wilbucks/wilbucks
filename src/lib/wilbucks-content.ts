export const email = "mailto:marieawilcox@outlook.com";
export const linkedin = "https://uk.linkedin.com/in/marieclutterbuck";
export const podcast = "https://open.spotify.com/episode/3H6HWOa1QC6c2XzBZmzUsH";
export const organisations = ["Binalyze", "Panaseer", "McLaren Applied", "Digital Barriers", "Siemens", "BAE Systems"];
export const focusAreas = [
  { title: "Understand the target market", question: "Where does your offer have the strongest relevance?", copy: "Identify the most relevant markets and segments, then the buying groups and decision-makers within them. This gives sales and marketing a shared view of where to focus." },
  { title: "Understand buyers and their needs", question: "What makes buyers choose?", copy: "Within those markets, clarify the problems buyers need to solve, what matters in their decisions and how they assess their options. Use buyer conversations and available evidence to guide the proposition." },
  { title: "Shape the value proposition and messaging", question: "Why should this offer matter to them?", copy: "Use that understanding to explain the value of your technology or service, why it is different and how it addresses buyer needs. Develop messaging that makes sense to the people involved in the decision." },
  { title: "Reach the right people at the right time", question: "How will the message reach buyers?", copy: "Choose the channels, communications and sales activity that fit your audience and their decision journey. Put the proposition to work in a go-to-market and communications strategy, from initial awareness through to a buying conversation." },
  { title: "Align sales and marketing", question: "How will the plan be put into practice?", copy: "Bring the work together in a joined-up go-to-market plan. Set sales priorities, equip teams with the material and enablement or training they need, and agree measures of commercial progress. Use buyer feedback and pipeline information to refine the approach." },
];
export const homeFocus = [
  { title: "Understand target markets and buyer needs", copy: "Identify the markets, buying groups and decision-makers that matter, and what they need to solve." },
  { title: "Validate and communicate the value proposition", copy: "Test the proposition against real customer needs, then express it in clear messaging buyers understand." },
  { title: "Choose how and when to reach people", copy: "Select the channels, communications and sales activity that reach the right people at the right time." },
  { title: "Develop the go-to-market and communications strategy", copy: "Bring markets, proposition, messaging and channels together in one practical plan." },
  { title: "Align sales and marketing", copy: "Support the plan with sales planning and training so both teams work from the same plan." },
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
  description: "Senior marketing leader with more than 20 years’ experience and VP and CMO-level roles across technology, cybersecurity and engineering businesses.",
  email: "marieawilcox@outlook.com", sameAs: [linkedin],
  knowsAbout: ["Go-to-market strategy", "Product marketing", "Category creation", "Demand generation", "Analyst relations", "Cybersecurity", "AI-enabled marketing"],
  hasCredential: { "@type": "EducationalOccupationalCredential", name: "Chartered Fellow of the Chartered Institute of Marketing (FCIM)", url: "https://www.credly.com/badges/5ffb7d43-1056-4cbf-9588-bb9d78f7ee6e/linked_in_profile" },
};
export const simonLinkedin = "https://www.linkedin.com/in/simon-wilcox/";
export const company = { "@type": "Organization", "@id": "/#wilbucks", name: "Wilbucks", description: "Independent sales and marketing consultancy helping technology businesses understand markets and buyers, develop value propositions and messaging, and put go-to-market plans into practice." };
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
export const profilePublications = ["Cisco Investments", "Solutions Review", "Infosecurity Magazine", "Rail Technology Magazine", "Intersec"].flatMap(outlet => publications.filter(item => item.outlet === outlet && item.category === "authored"));
export const profileQuotedCoverage = ["Infosecurity Magazine", "Computer Weekly"].flatMap(outlet => publications.filter(item => item.outlet === outlet && item.category === "quoted"));

export const profileLeadership = [
 { organisation: "CIM", role: "Chair of the CIM South East Region", copy: "I'm a Chartered Fellow of the Chartered Institute of Marketing (FCIM) and Chair of the CIM South East Region. I've hosted the region's event with Henley Business School for the past five years, bringing marketing professionals together to share ideas, experience and practical insight.", links: [{ label: "CIM South East committee", url: "https://regions.cim.co.uk/south-east/home/about/the-committee/" }, { label: "Chartered Fellow recognition", url: "https://www.credly.com/badges/5ffb7d43-1056-4cbf-9588-bb9d78f7ee6e/linked_in_profile" }] },
 { organisation: "CIISec", role: "Board Director", copy: "I'm a Board Director of CIISec, supporting the development and recognition of the information security profession.", links: [{ label: "CIISec board", url: "https://www.ciisec.org/about/board/" }] },
 { organisation: "CIISec Foundation", role: "Founding Trustee", copy: "I'm also a Founding Trustee of the CIISec Foundation, helping create opportunities for disadvantaged young people to access cybersecurity education and careers.", links: [] },
];

// ASOS incident coverage quoting Marie (October 2026). Journalist-written; never label as authored by Marie.
export const asosCoverage = [
 { outlet: "Sky News", title: "‘Panic piles on pressure’: Threatening message to ASOS customers was ‘psychological warfare’", url: "https://news.sky.com/story/asos-latest-customers-told-retailer-has-been-hacked-13591381?postid=12584472" },
 { outlet: "The Guardian", title: "ASOS investigating after thousands of customers get notification saying retailer has been hacked", url: "https://www.theguardian.com/business/live/2026/oct/06/euro-france-central-bank-interest-rates-bonds-latest-live-updates?page=with%3Ablock-6ac4c9ad8f08dedf5e7c6073" },
 { outlet: "The Standard", title: "ASOS issues update after customers sent hacked notification", url: "https://lnkd.in/eBSM_WWr" },
 { outlet: "Daily Mail", title: "ASOS hacked: customers receive message", url: "https://www.dailymail.com/news/article-16186489/ASOS-hacked-customers-receive-message.html" },
] as const;
