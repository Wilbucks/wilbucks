export const email = "mailto:marieawilcox@outlook.com";
export const linkedin = "https://uk.linkedin.com/in/marieclutterbuck";
export const podcast = "https://open.spotify.com/episode/3H6HWOa1QC6c2XzBZmzUsH";
export const organisations = ["Binalyze", "Panaseer", "McLaren Applied", "Digital Barriers", "Siemens", "BAE Systems"];
export const focusAreas = [
  { title: "Go-to-market strategy", question: "Where is the next market opportunity?", copy: "Connect market understanding, commercial ambition and the work of reaching the right buyers." },
  { title: "Product marketing & positioning", question: "Why should your market care?", copy: "Translate technical capability into a clear proposition, a relevant narrative and a reason to choose." },
  { title: "Demand generation", question: "How does interest become opportunity?", copy: "Bring positioning, demand and sales conversations together around meaningful commercial goals." },
  { title: "Cybersecurity & enterprise technology", question: "How do you make complexity clear?", copy: "Communicate complex technology through its implications for businesses, customers and trust." },
  { title: "AI-enabled marketing", question: "Where can AI make work better?", copy: "Explore practical AI-enabled workflows with strategy, brand credibility and human judgement at the centre." },
  { title: "Leadership & alignment", question: "Are sales and marketing moving together?", copy: "Connect marketing priorities with leadership decisions and the wider commercial direction." },
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
  description: "Technology marketing and go-to-market executive, cybersecurity commentator and AI-enabled growth practitioner with 20+ years’ experience.",
  email: "marieawilcox@outlook.com", sameAs: [linkedin],
  knowsAbout: ["Go-to-market strategy", "Product marketing", "Category creation", "Demand generation", "Analyst relations", "Cybersecurity", "AI-enabled marketing"],
  hasCredential: { "@type": "EducationalOccupationalCredential", name: "Fellow of the Chartered Institute of Marketing (FCIM)" },
};
export const simonLinkedin = "https://www.linkedin.com/in/simon-wilcox/";
export const company = { "@type": "Organization", "@id": "/#wilbucks", name: "Wilbucks", description: "Independent sales and marketing consultancy for technology businesses." };
export const simonPerson = { "@type": "Person", "@id": "/simon-wilcox#person", name: "Simon Wilcox", sameAs: [simonLinkedin], worksFor: company, jobTitle: "Director" };
export const directorIntroductions = [
  { name: "Marie Wilcox", path: "/marie-wilcox" as const, copy: "Senior technology marketing leader with experience across cybersecurity, enterprise technology, go-to-market strategy, product marketing and demand generation." },
  { name: "Simon Wilcox", path: "/simon-wilcox" as const, copy: "A technology and cybersecurity perspective, with a professional focus on data intelligence in security and government." },
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
 ["Clarity before activity", "Know what needs to change before deciding what to do."],
 ["The buyer’s problem matters", "Explain value in terms customers recognise, not only technical features."],
 ["Sales and marketing belong together", "Connect the proposition, outreach and sales conversation."],
 ["Technology needs judgement", "Consider AI where it serves the task, with human responsibility for decisions and communication."],
 ["Claims need evidence", "Separate ambition from demonstrated results."],
];
