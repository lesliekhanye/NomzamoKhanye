// lib/projects-data.ts

export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tools: string[];
  highlights: string[];
  color: string;
  location: string;
  duration: string;
  client: string;
  objectives: string[];
  methodology: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  recommendations: string[];
  gallery: string[];
  reportSections: {
    title: string;
    content: string;
  }[];
  sdgs: string[];
  keywords: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: "green-city-development",
    title: "Green City Development in South Africa",
    category: "Sustainable Development",
    description:
      "Comprehensive analysis and strategic planning for sustainable urban development incorporating green infrastructure, renewable energy systems, and climate-resilient design principles.",
    fullDescription:
      "This comprehensive project focuses on developing sustainable urban environments in South Africa through innovative green infrastructure solutions, renewable energy integration, and climate-resilient design principles. The project addresses critical urban challenges including carbon emissions, biodiversity loss, and climate change adaptation.",
    image: "/project1.jpeg",
    location: "Johannesburg, South Africa",
    duration: "12 months",
    client: "City of Johannesburg",
    tools: [
      "GIS Mapping",
      "Environmental Impact Assessment",
      "Stakeholder Analysis",
      "Policy Framework",
    ],
    highlights: [
      "Reduced carbon footprint by 35%",
      "Integrated 50+ green spaces",
      "Sustainable water management system",
      "Community engagement framework",
    ],
    color: "green",
    objectives: [
      "Develop comprehensive green infrastructure strategy",
      "Integrate renewable energy systems",
      "Create climate-resilient urban design",
      "Establish community engagement frameworks",
      "Implement sustainable water management",
    ],
    methodology: [
      "Comprehensive site analysis and mapping",
      "Stakeholder consultation and engagement",
      "Environmental impact assessment",
      "Policy framework development",
      "Implementation strategy design",
    ],
    challenges: [
      "Limited existing green infrastructure",
      "Budget constraints for implementation",
      "Coordination between multiple stakeholders",
      "Climate change adaptation requirements",
      "Community acceptance and participation",
    ],
    solutions: [
      "Phased implementation approach",
      "Public-private partnership model",
      "Community-based maintenance programs",
      "Integrated water management systems",
      "Green building incentive programs",
    ],
    outcomes: [
      "35% reduction in carbon footprint",
      "50+ new green spaces established",
      "Improved air quality metrics",
      "Enhanced community engagement",
      "Sustainable funding model developed",
    ],
    recommendations: [
      "Scale implementation to other districts",
      "Develop maintenance capacity building",
      "Establish monitoring and evaluation system",
      "Create policy replication framework",
      "Expand community participation programs",
    ],
    gallery: [
      "/gallery/green-city-1.jpg",
      "/gallery/green-city-2.jpg",
      "/gallery/green-city-3.jpg",
      "/gallery/green-city-4.jpg",
    ],
    reportSections: [
      {
        title: "Executive Summary",
        content:
          "This project represents a comprehensive approach to sustainable urban development in South Africa, integrating green infrastructure, renewable energy, and community engagement to create resilient urban environments.",
      },
      {
        title: "Methodology",
        content:
          "The project employed a multi-faceted approach combining GIS analysis, stakeholder consultation, environmental assessment, and policy development to create a holistic green city strategy.",
      },
      {
        title: "Findings and Recommendations",
        content:
          "Key findings demonstrate the potential for significant environmental and social benefits through integrated green infrastructure development, with recommendations for scaling and replication.",
      },
    ],
    sdgs: [
      "SDG 11: Sustainable Cities and Communities",
      "SDG 13: Climate Action",
      "SDG 15: Life on Land",
      "SDG 6: Clean Water and Sanitation",
    ],
    keywords: [
      "sustainable development",
      "green infrastructure",
      "urban planning",
      "climate resilience",
    ],
  },
  {
    id: 2,
    slug: "informal-settlements-upgrading",
    title: "Upgrading of Informal Settlements",
    category: "Community Development",
    description:
      "Strategic intervention plan for informal settlement upgrading focusing on infrastructure development, housing improvement, and community empowerment while preserving social networks.",
    fullDescription:
      "This project develops a comprehensive approach to informal settlement upgrading that balances infrastructure development with community empowerment, ensuring that interventions improve living conditions while preserving valuable social networks and community structures.",
    image: "/project2.jpg",
    location: "Klerksdorp, South Africa",
    duration: "5 months",
    client: "City of Matlosana",
    tools: [
      "Participatory Planning",
      "Social Impact Assessment",
      "Infrastructure Design",
      "Community Mapping",
    ],
    highlights: [
      "Improved living conditions for 200+ families",
      "Enhanced access to basic services",
      "Preserved community social structures",
      "Sustainable livelihood programs",
    ],
    color: "blue",
    objectives: [
      "Improve basic infrastructure and services",
      "Enhance housing quality and security",
      "Preserve existing social networks",
      "Develop sustainable livelihood opportunities",
      "Strengthen community governance structures",
    ],
    methodology: [
      "Community-based participatory planning",
      "Household and infrastructure surveys",
      "Social network mapping",
      "Livelihood assessment",
      "Stakeholder engagement workshops",
    ],
    challenges: [
      "Complex land tenure issues",
      "Limited financial resources",
      "Diverse community needs and priorities",
      "Integration with formal city systems",
      "Maintaining community cohesion during upgrading",
    ],
    solutions: [
      "In-situ upgrading approach",
      "Community-led implementation",
      "Flexible tenure arrangements",
      "Incremental service delivery",
      "Local economic development programs",
    ],
    outcomes: [
      "200+ families with improved living conditions",
      "100% access to basic services",
      "Preserved community social structures",
      "100+ new livelihood opportunities created",
      "Strengthened local governance",
    ],
    recommendations: [
      "Develop replicable upgrading models",
      "Establish community maintenance systems",
      "Create policy frameworks for informal settlements",
      "Build local capacity for ongoing development",
      "Integrate with city-wide planning processes",
    ],
    gallery: [
      "/gallery/settlements-1.jpg",
      "/gallery/settlements-2.jpg",
      "/gallery/settlements-3.jpg",
      "/gallery/settlements-4.jpg",
    ],
    reportSections: [
      {
        title: "Community Assessment",
        content:
          "Comprehensive analysis of existing conditions, community assets, and development priorities identified through participatory planning processes.",
      },
      {
        title: "Upgrading Strategy",
        content:
          "Detailed strategy for in-situ upgrading that balances infrastructure improvement with community empowerment and social network preservation.",
      },
      {
        title: "Implementation Framework",
        content:
          "Practical framework for community-led implementation with support systems for capacity building and ongoing development.",
      },
    ],
    sdgs: [
      "SDG 11: Sustainable Cities and Communities",
      "SDG 1: No Poverty",
      "SDG 6: Clean Water and Sanitation",
      "SDG 8: Decent Work and Economic Growth",
    ],
    keywords: [
      "informal settlements",
      "community development",
      "participatory planning",
      "urban upgrading",
    ],
  },
  {
    id: 3,
    slug: "turffontein-housing-project",
    title: "Housing Project in Turffontein",
    category: "Housing Development",
    description:
      "Comprehensive housing development project aligned with UN Sustainable Development Goals, focusing on affordable housing solutions and integrated community facilities.",
    fullDescription:
      "This housing development project in Turffontein demonstrates how affordable housing can be developed in alignment with UN Sustainable Development Goals, creating integrated communities with mixed-income housing and comprehensive community facilities.",
    image: "/project3.png",
    location: "Turffontein, Johannesburg",
    duration: "4 months",
    client: "Johannesburg Housing Authority",
    tools: [
      "Housing Policy Analysis",
      "SDG Framework",
      "Financial Modeling",
      "Urban Design",
    ],
    highlights: [
      "500+ affordable housing units",
      "Aligned with SDG 11: Sustainable Cities",
      "Integrated community facilities",
      "Mixed-income housing model",
    ],
    color: "purple",
    objectives: [
      "Deliver quality affordable housing",
      "Create integrated mixed-income communities",
      "Align development with SDG targets",
      "Provide comprehensive community facilities",
      "Ensure long-term sustainability",
    ],
    methodology: [
      "Housing needs assessment",
      "Financial feasibility analysis",
      "Community consultation process",
      "Urban design development",
      "SDG alignment framework",
    ],
    challenges: [
      "Land acquisition and preparation",
      "Funding and financing arrangements",
      "Infrastructure capacity constraints",
      "Community integration requirements",
      "Long-term maintenance sustainability",
    ],
    solutions: [
      "Phased development approach",
      "Mixed-financing model",
      "Infrastructure upgrade program",
      "Community facility integration",
      "Homeowner association establishment",
    ],
    outcomes: [
      "500+ affordable housing units delivered",
      "Mixed-income community established",
      "Full alignment with SDG 11 targets",
      "Comprehensive community facilities",
      "200+ jobs created during construction",
    ],
    recommendations: [
      "Replicate model in other areas",
      "Develop maintenance capacity",
      "Establish ongoing community support",
      "Create policy guidelines for similar projects",
      "Monitor long-term sustainability outcomes",
    ],
    gallery: [
      "/gallery/turffontein-1.jpg",
      "/gallery/turffontein-2.jpg",
      "/gallery/turffontein-3.jpg",
      "/gallery/turffontein-4.jpg",
    ],
    reportSections: [
      {
        title: "Project Overview",
        content:
          "Comprehensive overview of the Turffontein housing development project, including objectives, scope, and alignment with sustainable development goals.",
      },
      {
        title: "Design and Development",
        content:
          "Detailed analysis of the urban design approach, housing typologies, and community facility integration that characterizes this mixed-income development.",
      },
      {
        title: "Impact and Sustainability",
        content:
          "Assessment of project outcomes, community impact, and long-term sustainability measures including maintenance and community management systems.",
      },
    ],
    sdgs: [
      "SDG 11: Sustainable Cities and Communities",
      "SDG 1: No Poverty",
      "SDG 8: Decent Work and Economic Growth",
      "SDG 10: Reduced Inequalities",
    ],
    keywords: [
      "affordable housing",
      "mixed-income development",
      "SDG alignment",
      "community facilities",
    ],
  },
];
