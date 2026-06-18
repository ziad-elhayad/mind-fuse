/**
 * Centralized Content Dictionary for Mind Fuse Website
 * 
 * This file contains all static text content for the website organized by page and section.
 * To update website content, edit this file instead of modifying individual components.
 * 
 * Structure:
 * - navigation: Global navigation links and CTAs
 * - home: Home page content
 * - about: About page content  
 * - services: Services page content
 * - contact: Contact page content
 * - footer: Footer content
 * - common: Reusable text (buttons, validation, etc.)
 */

export const contentDictionary = {
  // ==================== NAVIGATION ====================
  navigation: {
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
    ctaButton: "Let's Create",
    mobileMenu: {
      ctaText: "Want to partner with us?",
      ctaButton: "Start a Project",
    },
    logoAlt: "Mind Fuse Marketing Agency",
  },

  // ==================== HOME PAGE ====================
  home: {
    hero: {
      badge: "Pioneering Digital Growth",
      headline: {
        line1: "Market Your Brand",
      },
      description: "AN Marketing Agency — Expert Strategy, Creative Campaigns, Results-Driven Solutions. Trusted by Businesses Worldwide.",
      primaryButton: "Market Your Brand",
      secondaryButton: "Contact Us",
      scrollIndicator: "Scroll",
    },
    heroCard: {
      badge: "Live Campaign",
      metricLabel: "Attributed ROAS",
      metricValue: "4.82x",
      performanceLabel: "Performance Index",
      performanceValue: "94%",
      leadsLabel: "Leads",
      leadsValue: "+320%",
      cacLabel: "CAC",
      cacValue: "-43%",
    },
    aboutUs: {
      sectionTitle: "About AN Marketing Agency",
      content: "A brief overview of who the agency is, its founding story, and its mission to help businesses grow through smart digital marketing strategies.",
      keyMessage: "AN Marketing Agency combines expert strategy, creative execution, and data-driven results to help brands succeed in the competitive Egyptian and global market.",
      ctaButton: "Our Services",
    },
    services: {
      sectionLabel: "Our Services",
      sectionTitle: "What We Offer",
      sectionDescription: "A visual grid or card layout showcasing the agency's full service offering. Each service card contains an icon, a title, and a short description.",
      exploreButton: "Learn More",
    },
    whyUs: {
      sectionTitle: "Why AN Marketing Agency",
      subtitle: "Built for Brands That Want Real Growth",
      points: [
        "360° integrated marketing solutions",
        "Transparent reporting & measurable KPIs",
        "In-house multidisciplinary team",
        "Data-driven execution",
        "Strategy-first approach"
      ]
    },
    marquee: [
      "Marketing Strategy",
      "Brand Identity",
      "Creative Production",
      "Digital Marketing",
      "Web Development",
      "Social Media",
      "SEO & SEM",
      "Paid Media",
      "Content Design",
      "Analytics",
    ],
    techMarquee: [
      "Framer Motion",
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "React 19",
      "Sanity CMS",
      "Vercel Edge",
      "Figma Design",
      "Webflow",
      "Ahrefs",
    ],
    metrics: {
      sectionLabel: "What We Deliver",
      sectionTitle: "Core Service Pillars",
      sectionDescription: "Our services span creative identity and engineering frameworks to structure your modern market deployment.",
      exploreButton: "Explore",
    },
    featuredProjects: {
      sectionLabel: "Selected Outcomes",
      sectionTitle: "Featured Case Studies",
      allProjectsButton: "All Projects",
      readCaseStudy: "Read Case Study",
    },
    methodology: {
      sectionLabel: "Our Flow",
      sectionTitle: "Operational Blueprint",
      sectionDescription: "We bypass disconnected structures to merge marketing strategy with frontend deployment.",
      steps: [
        {
          step: "01",
          title: "Strategy Formulation",
          description: "We review acquisition performance and configure visual message positions for target audiences.",
        },
        {
          step: "02",
          title: "Creative & Engineering",
          description: "Production of cinematic assets combined with optimised React & Next.js page code.",
        },
        {
          step: "03",
          title: "Scale Operations",
          description: "Launching campaigns through paid networks and automated CRM conversion sequences.",
        },
      ],
    },
    bottomCta: {
      title: "Ready to accelerate your brand's digital pipeline?",
      description: "Connect with our strategists to discuss designs, optimisations, or conversion funnels.",
      primaryButton: "Book Strategy Session",
      secondaryButton: "Review Services",
    },
  },

  // ==================== ABOUT PAGE ====================
  about: {
    hero: {
      sectionLabel: "About Us",
      title: "AN Marketing Agency",
      description: "AN Marketing Agency is a 360° marketing agency providing fully integrated marketing solutions designed to help brands grow, scale, and compete in today's fast-moving digital landscape. We don't believe in isolated tactics or short-term wins. Instead, we build complete marketing ecosystems that align strategy, creativity, technology, and performance to achieve real business results.",
    },
    mission: {
      title: "Our Mission",
      content: "Our mission is to help businesses achieve sustainable growth by delivering measurable, scalable, and customized marketing solutions that align with their objectives and market realities. We aim to turn marketing efforts into tangible outcomes—not just visibility, but performance.",
    },
    vision: {
      title: "Our Vision",
      content: "To become a trusted marketing partner for ambitious brands across Egypt and the region, known for strategic thinking, execution excellence, and long-term impact.",
    },
    values: {
      title: "Our Values",
      values: [
        {
          title: "Strategic Thinking",
          description: "Every decision is backed by research, analysis, and clear objectives.",
        },
        {
          title: "Accountability",
          description: "We take ownership of our work and deliver on our promises.",
        },
        {
          title: "Transparency",
          description: "Open communication and honest reporting build trust.",
        },
        {
          title: "Innovation with Purpose",
          description: "Creative solutions that drive real business results.",
        },
        {
          title: "Long-Term Partnerships",
          description: "We grow with our clients and build lasting relationships.",
        },
      ],
    },
    differentiators: {
      title: "What Makes Us Different",
      items: [
        {
          title: "360° Approach",
          description: "We cover the entire marketing spectrum—from strategy to execution—ensuring consistency and efficiency across all channels.",
        },
        {
          title: "Strategy Before Execution",
          description: "Every project starts with research, analysis, and clear objectives.",
        },
        {
          title: "In-House Expertise",
          description: "All services are handled by our internal team, ensuring quality control and seamless collaboration.",
        },
        {
          title: "Performance & Transparency",
          description: "We focus on KPIs, reporting, and continuous optimization to maximize ROI.",
        },
        {
          title: "Business-Focused Marketing",
          description: "We don't market for attention—we market for growth.",
        },
      ],
    },
    approach: {
      title: "Our Approach",
      steps: [
        {
          step: "Discovery & Analysis",
          description: "Understanding your business, market, audience, and goals.",
        },
        {
          step: "Strategic Planning",
          description: "Building a tailored marketing roadmap aligned with your objectives.",
        },
        {
          step: "Creative & Technical Execution",
          description: "Design, content, development, and performance marketing work together.",
        },
        {
          step: "Optimization & Growth",
          description: "Continuous testing, reporting, and improvement for sustainable results.",
        },
      ],
    },
    ceoQuote: {
      name: "Ahmed Nabil",
      role: "CEO",
      quote: "Marketing is not about visibility alone—it's about building systems that drive growth. At AN Marketing Agency, we focus on strategy, integration, and measurable impact to help brands scale with confidence.",
    },
    cta: {
      title: "Let's turn your marketing into a growth engine.",
      description: "Work with a 360° agency that understands strategy, performance, and scale.",
      button: "Contact Us",
    },
  },

  // ==================== SERVICES PAGE ====================
  services: {
    hero: {
      sectionLabel: "Core Competencies",
      headline: {
        line1: "Comprehensive Digital",
        line2: "Services.",
      },
      description: "Based on the service models of AN Marketing, we structure campaign planning, creative visual assets, performance marketing, and modern React development.",
    },
    sectionLabel: "What We Deliver",
    sectionTitle: "Core Service Pillars",
    sectionDescription: "Our services span creative identity and engineering frameworks to structure your modern market deployment.",
    exploreButton: "Explore",
    deliverablesLabel: "Deliverables",
    processButton: "Process & Outcomes",
    cta: {
      title: "Need a customized digital strategy?",
      description: "We structure custom service scopes tailored to your industry, target audience size, and current positioning.",
      button: "Start Strategy Assessment",
    },
  },

  // ==================== CONTACT PAGE ====================
  contact: {
    hero: {
      sectionLabel: "Get In Touch",
      headline: {
        line1: "Let's construct",
        line2: "your project.",
      },
      description: "Discuss campaign architectures, identity visual structures, SEO priorities, or custom React frameworks with our specialists.",
    },
    contactInfo: [
      {
        icon: "Mail",
        label: "Email Inquiry",
        value: "hello@mindfuse.agency",
        href: "mailto:hello@mindfuse.agency",
      },
      {
        icon: "Phone",
        label: "Phone Assessment",
        value: "+1 (800) 555-FUSE",
        href: "tel:+18005553873",
      },
      {
        icon: "MapPin",
        label: "Main Workspace",
        value: "84 Creative Hub, Design District, NY",
        href: "#",
      },
    ],
    form: {
      nameLabel: "Your Name *",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address *",
      emailPlaceholder: "john@example.com",
      companyLabel: "Company / Agency (Optional)",
      companyPlaceholder: "Acme Corp",
      capabilitiesLabel: "Requested Capabilities",
      messageLabel: "Message *",
      messagePlaceholder: "Outline your timeline, goals, and budget scopes...",
      submitButton: "Submit Brief Outline",
      submittingText: "Processing Brief...",
    },
    success: {
      title: "Brief Logged.",
      description: "Thank you for contacting Mind Fuse. Our growth strategists will analyze your targets and follow up within 24 business hours.",
      resetButton: "Reset Form",
    },
    validation: {
      requiredFields: "Please fill out the required fields (Name, Email, Message)",
    },
  },

  // ==================== FOOTER ====================
  footer: {
    brandDescription: "We design and scale digital presence for ambitious brands. Melding creative strategy with advanced modern execution.",
    navigation: {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Contact & Brief", href: "/contact" },
      ],
    },
    services: {
      title: "Services",
    },
    newsletter: {
      title: "Stay Updated",
      description: "Get insights into digital positioning and strategies delivered to your inbox.",
      placeholder: "Enter your email",
      button: "Join",
    },
    bottom: {
      copyright: (year: number) => `© ${year} Mind Fuse. All rights reserved. Content based on AN Marketing.`,
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
  },

  // ==================== COMMON ====================
  common: {
    loading: {
      initialising: "Initialising",
    },
    buttons: {
      explore: "Explore",
      learnMore: "Learn More",
      viewAll: "View All",
      contact: "Contact",
      getStarted: "Get Started",
    },
    validation: {
      required: "This field is required",
      email: "Please enter a valid email",
    },
    accessibility: {
      toggleMenu: "Toggle Menu",
      linkedin: "LinkedIn",
      twitter: "Twitter",
      instagram: "Instagram",
      github: "GitHub",
    },
  },
} as const;

// Type exports for TypeScript support
export type ContentDictionary = typeof contentDictionary;
