import { 
  TrendingUp, 
  Palette, 
  Video, 
  Target, 
  Code, 
  Share2,
  Lightbulb,
  Search,
  Compass,
  LineChart,
  Megaphone
} from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  longDescription: string;
  features: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  highlightColor: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  featured: boolean;
  color: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  highlightColor: string;
}

export const SERVICES: Service[] = [
  {
    id: "strategy-consulting",
    slug: "marketing-strategy-consulting",
    title: "Marketing Strategy & Consulting",
    shortDescription: "Data-driven commercial roadmaps to align your marketing initiatives with high-growth business objectives.",
    iconName: "TrendingUp",
    longDescription: "We engineer actionable strategic frameworks designed to guide your business toward sustainable expansion. By combining thorough market research, data analysis, and competitive positioning, we clarify your message and outline the path to scaling customer acquisition.",
    features: [
      "Comprehensive Competitor & Industry Benchmarking",
      "Customer Persona Definition & Journey Mapping",
      "Product-Market Fit & Value Proposition Alignment",
      "Omnichannel Campaign Calendars & Budget Allocation",
      "KPI Definition & Analytics Dashboard Setup"
    ],
    deliverables: [
      "Go-To-Market Strategic Playbook",
      "Customer Acquisition Funnel Model",
      "6-Month Campaign Action Plan",
      "Measurement & Analytics Dashboard Framework"
    ],
    process: [
      { title: "01. Discovery & Audit", description: "Reviewing your current efforts, analyzing past performance data, and defining commercial goals." },
      { title: "02. Market Intelligence", description: "Studying customer behavior, tracking competitors, and identifying untapped market angles." },
      { title: "03. Strategy Formulation", description: "Designing the growth architecture, messages, marketing channels, and budget configurations." },
      { title: "04. Activation & Review", description: "Launching key initiatives with direct dashboard feedback and weekly optimization sprints." }
    ],
    highlightColor: "from-[#06599B] to-[#2D7FC0]"
  },
  {
    id: "branding-identity",
    slug: "branding-identity",
    title: "Branding & Identity",
    shortDescription: "Formulating memorable brand architectures, emotional connections, and clean typographic identity systems.",
    iconName: "Palette",
    longDescription: "A modern brand is more than just a logo—it is a collection of emotional associations and operational promises. We translate your company's core values into an immersive visual and verbal identity system that stands out in crowded marketplaces.",
    features: [
      "Logo System & Visual Mark Creation",
      "Color Palette & Typographic Hierarchy Design",
      "Brand Voice & Message Style Guides",
      "Corporate Collateral & Stationery Kits",
      "Digital Brand Guideline Portals"
    ],
    deliverables: [
      "Interactive Digital Brand Book",
      "Master Asset Package (Vector, Web, Mobile)",
      "Editorial & Tone-of-Voice Playbook",
      "Social Media Visual Templates"
    ],
    process: [
      { title: "01. Heritage & Purpose", description: "Conducting interviews to uncover the history, mission, values, and core promise of your organization." },
      { title: "02. Visual Concepting", description: "Creating mood boards, styles, and distinct design systems for typography and identity marks." },
      { title: "03. Execution & Refining", description: "Polishing vector paths, defining rules for lockups, and finalizing primary palette values." },
      { title: "04. System Handover", description: "Organizing and exporting asset libraries for internal design teams and external vendors." }
    ],
    highlightColor: "from-[#06599B] to-[#2D7FC0]"
  },
  {
    id: "creative-content",
    slug: "creative-content-production",
    title: "Creative & Content Production",
    shortDescription: "High-impact visual narratives, videos, and written assets that capture attention and build community engagement.",
    iconName: "Video",
    longDescription: "We craft premium content that bridges the gap between commercial strategy and creative execution. From commercial product photography and cinematic brand films to compelling copywriting, we produce visual media designed to command attention and encourage interaction.",
    features: [
      "Cinematic Video & Social Reel Production",
      "Professional Product & Editorial Photography",
      "SEO Copywriting & Long-Form Article Creation",
      "Ad Creative Concepting & Visual Variations",
      "Motion Design & Interactive Digital Assets"
    ],
    deliverables: [
      "Premium Visual Asset Repository",
      "Cinematic Brand Intro & Promotional Videos",
      "Optimized Copy Library for Web & Social",
      "Custom Graphic and UI Illustration Set"
    ],
    process: [
      { title: "01. Creative Briefing", description: "Aligning on visual goals, scripting, storyboarding, and establishing shot lists." },
      { title: "02. Production Day", description: "Directing professional filming and studio photography utilizing state-of-the-art equipment." },
      { title: "03. Post-Production", description: "Color-grading, editing, applying sound design, adding motion overlays, and proofreading copy." },
      { title: "04. Multi-Format Delivery", description: "Optimizing all assets for mobile displays, web platforms, print, and major ad networks." }
    ],
    highlightColor: "from-[#06599B] to-[#0A6AB8]"
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "High-yield paid media acquisition, search engine dominance, and systematic funnel optimizations.",
    iconName: "Target",
    longDescription: "We scale business revenue using search marketing, paid advertising, and conversion rate optimization (CRO). Our marketing systems bypass generic metrics to focus directly on customer acquisition cost (CAC), return on ad spend (ROAS), and customer lifetime value (LTV).",
    features: [
      "Paid Media & PPC Management (Google, Meta, LinkedIn)",
      "Technical SEO Audits & Ongoing Content Rankings",
      "Lead Generation & Retargeting Infrastructure",
      "Automated Email Nurturing & CRM Setup",
      "A/B Landing Page Conversion Optimizations"
    ],
    deliverables: [
      "Active PPC Search & Display Campaigns",
      "Full On-Page & Off-Page SEO Blueprint",
      "High-Converting Landing Page Designs",
      "Weekly Performance Attribution Reports"
    ],
    process: [
      { title: "01. Funnel Auditing", description: "Identifying bottlenecks, drop-off points, and tracking leaks in your current lead cycle." },
      { title: "02. Campaign Building", description: "Structuring ad groups, conducting keyword research, writing ad copy, and defining audience tags." },
      { title: "03. Optimization", description: "Bidding dynamically, testing creative variations, and updating negative keywords list daily." },
      { title: "04. Expansion", description: "Allocating budgets toward top-performing segments and introducing advanced lookalike lookups." }
    ],
    highlightColor: "from-[#06599B] to-[#2D7FC0]"
  },
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Speed-optimized, SEO-first, responsive React applications utilizing modern technologies and smooth UI animations.",
    iconName: "Code",
    longDescription: "We build modern, fast web applications that act as high-performance conversion tools. Combining clean React and Next.js foundations with smooth animations and responsive Tailwind styles, we deliver websites that rank highly on search engines and engage visitors.",
    features: [
      "Next.js App Router Architecture & Static Generation",
      "Fully Responsive Interface Layouts (Mobile to Ultrawide)",
      "High Core Web Vitals & Web Performance Optimization",
      "Headless CMS Implementations (Sanity, Contentful)",
      "Secure API integrations & Custom Web Tools"
    ],
    deliverables: [
      "Production-Ready Next.js & React Source Code",
      "Integrated Content Management System Panel",
      "Global CDN Setup & Domain Security Configuration",
      "Page Speed & Performance Audit Reports"
    ],
    process: [
      { title: "01. Wireframing & UX", description: "Defining layout blueprints, navigation routes, and interactive components." },
      { title: "02. UI Design System", description: "Creating pixel-perfect high-fidelity interface layouts using Tailwind colors and guides." },
      { title: "03. Frontend Engineering", description: "Writing structured React components with TypeScript types and Framer Motion dynamics." },
      { title: "04. Testing & Deployment", description: "Verifying cross-device responsiveness, auditing load times, and launching to global servers." }
    ],
    highlightColor: "from-[#06599B] to-[#2D7FC0]"
  },
  {
    id: "social-media",
    slug: "social-media-management",
    title: "Social Media Management",
    shortDescription: "Building consistent digital communities, managing social profiles, and scaling organic brand presence.",
    iconName: "Share2",
    longDescription: "We design organic social systems that turn passive followers into active advocates. Our management model mixes regular calendar organization, modern graphic grids, and direct community monitoring to keep your brand at the center of online conversations.",
    features: [
      "Monthly Content Calendar Planning & Ideation",
      "Grid Visual Style & Asset Templates Designing",
      "Copywriting for Instagram, LinkedIn, and X",
      "Community Engagement & Direct Message Responses",
      "Influencer Outreach & Partnership Management"
    ],
    deliverables: [
      "30-Day Automated Content Calendar",
      "Branded Graphic & Video Story Assets",
      "Engagement Guidelines & Brand FAQ Guides",
      "Monthly Growth Analytics & Reach Breakdowns"
    ],
    process: [
      { title: "01. Profile & Audience Audit", description: "Reviewing existing social networks, audience metrics, and platform voice opportunities." },
      { title: "02. Content Calendar Drafting", description: "Fleshing out templates, content streams, creative briefs, and writing captions." },
      { title: "03. Production & Publishing", description: "Designing graphic templates, editing videos, and scheduling posts for peak active hours." },
      { title: "04. Interaction & Growth", description: "Replying to comments, initiating outbound outreach, and monitoring trending industry formats." }
    ],
    highlightColor: "from-[#2D7FC0] to-[#06599B]"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "lumina-fintech",
    slug: "lumina-fintech-brand-accelerator",
    title: "Lumina Fintech Rebrand",
    client: "Lumina Partners",
    category: "Branding & Strategy",
    description: "Creating a modern visual identity system and digital design language to help Lumina secure its Series B funding round.",
    challenge: "Lumina fintech had robust backend transaction technology but lacked a premium brand appearance that felt trustworthy and forward-looking to institutional venture capital networks.",
    solution: "We designed a complete vector design system, formulated a dark-mode product UI language, and produced custom vector elements showcasing simplified transaction pipelines.",
    results: [
      "Secured $24M Series B funding within 3 months of launch",
      "Increased website session duration by 142%",
      "Achieved a 98% brand sentiment rating among initial corporate testers"
    ],
    services: ["Marketing Strategy & Consulting", "Branding & Identity", "Website Development"],
    featured: true,
    color: "from-[#06599B] via-[#06599B] to-[#06599B]"
  },
  {
    id: "apex-wellness",
    slug: "apex-wellness-digital-dominance",
    title: "Apex Wellness Growth Campaign",
    client: "Apex Health Inc.",
    category: "Digital Marketing",
    description: "Scaling a nationwide D2C wellness membership model through paid acquisition funnels and custom landing page experiences.",
    challenge: "Apex wellness was getting high impression volume through initial media partnerships but suffered from low conversion rates on landing pages, resulting in high customer acquisition costs.",
    solution: "We restructured the paid Google and Meta targeting hierarchies, implemented multi-variant landing page funnels, and optimized checkouts for mobile conversions.",
    results: [
      "Decreased average customer acquisition cost (CAC) by 43%",
      "Increased paid media return on ad spend (ROAS) to 4.8x",
      "Generated 18,000 new monthly active subscribers"
    ],
    services: ["Digital Marketing", "Creative & Content Production", "Website Development"],
    featured: true,
    color: "from-[#2D7FC0] via-[#2D7FC0] to-[#06599B]"
  },
  {
    id: "vanguard-real-estate",
    slug: "vanguard-luxury-living",
    title: "Vanguard Luxury Real Estate Web App",
    client: "Vanguard Group",
    category: "Website Development & Creative",
    description: "Developing an interactive Web3-ready listing portal and cinematic video strategy for high-net-worth real estate buyers.",
    challenge: "Static listing platforms were failing to capture the premium feeling of multi-million dollar residential estates, resulting in low lead submissions from prospective buyers.",
    solution: "We engineered a Next.js real estate search application with interactive 3D floor map renders and built a catalog of cinematic listing videos.",
    results: [
      "Drove $120M in real estate inquiries within the first 60 days",
      "Generated a 400% increase in qualified high-net-worth buyer leads",
      "Ranked #1 for local luxury estate target keywords"
    ],
    services: ["Website Development", "Creative & Content Production", "Social Media Management"],
    featured: true,
    color: "from-[#06599B] via-[#06599B] to-[#2D7FC0]"
  },
  {
    id: "zenith-saas",
    slug: "zenith-saas-social-growth",
    title: "Zenith SaaS Social Pipeline",
    client: "Zenith Technology",
    category: "Social Media & Creative",
    description: "Establishing a corporate leadership content plan on LinkedIn and Twitter to build trust and generate organic pipeline.",
    challenge: "Zenith SaaS was struggling with traditional outbound sales responses, and needed a way to build inbound organic reach from enterprise operations leaders.",
    solution: "We developed a structured personal branding framework for Zenith's executive team, focusing on high-value infographics and industry thought leadership.",
    results: [
      "Scaled executive profile impressions to over 1.2M impressions monthly",
      "Increased organic demo requests from social channels by 210%",
      "Generated $1.6M in direct attributed pipeline value"
    ],
    services: ["Social Media Management", "Creative & Content Production", "Marketing Strategy & Consulting"],
    featured: false,
    color: "from-[#06599B] via-[#06599B] to-[#0A6AB8]"
  }
];

export const TEAM: TeamMember[] = [
  { id: "member-1", name: "Sarah Jenkins", role: "Founder & Chief Strategist", image: "/team/sarah.jpg" },
  { id: "member-2", name: "David Chen", role: "Creative Director", image: "/team/david.jpg" },
  { id: "member-3", name: "Elena Rostova", role: "Head of Digital Performance", image: "/team/elena.jpg" },
  { id: "member-4", name: "Marcus Thorne", role: "Lead Developer", image: "/team/marcus.jpg" }
];

export const METRICS: Metric[] = [
  { value: "94%", label: "Average Client Revenue Increase" },
  { value: "4.8x", label: "Paid Advertising ROAS Average" },
  { value: "85+", label: "Creative & Design Awards Won" },
  { value: "98%", label: "Partner Retention & Renewal Rate" }
];

// Helper to get Icon Component dynamically
export function getServiceIcon(name: string) {
  switch (name) {
    case 'TrendingUp': return TrendingUp;
    case 'Palette': return Palette;
    case 'Video': return Video;
    case 'Target': return Target;
    case 'Code': return Code;
    case 'Share2': return Share2;
    case 'Lightbulb': return Lightbulb;
    case 'Search': return Search;
    case 'Compass': return Compass;
    case 'LineChart': return LineChart;
    case 'Megaphone': return Megaphone;
    default: return Lightbulb;
  }
}

// Partners Data
export const PARTNERS: Partner[] = [
  {
    id: "tech-solutions",
    name: "Tech Solutions",
    logo: "/tech-solution-logo/tech-logo.jpeg",
    description: "We collaborate with Tech Solutions to deliver advanced digital solutions, custom software development, ERP implementation, web applications, business automation, and technology consulting services. This partnership enables us to provide end-to-end solutions that combine business expertise with technical excellence.",
    website: "https://tech-solution-six-orpin.vercel.app",
    highlightColor: "from-[#06599B] to-[#2D7FC0]"
  }
];

