// CMS Content Types and Management
export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      label: string;
      value: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    description: string;
    story: string;
    promise: string;
    impact: {
      label: string;
      value: string;
    }[];
  };
  programs: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      features: string[];
      icon: string;
    }[];
  };
  mathTournament: {
    title: string;
    edition: string;
    date: string;
    venue: string;
    address: string;
    description: string;
    prizes: {
      position: string;
      amount: string;
    }[];
    timeline: {
      date: string;
      event: string;
      status: string;
    }[];
    eligibility: string[];
  };
  contact: {
    title: string;
    description: string;
    offices: {
      name: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
    }[];
  };
}

// Default content that can be managed via Sanity CMS
export const defaultContent: SiteContent = {
  hero: {
    title: "Empowering Nigeria's Future",
    subtitle: "Educational Excellence Initiative", 
    description: "Supporting senior secondary school students and teachers across Nigeria in pursuit of excellence and heritage",
    stats: [
      { label: "Students Supported", value: "1000+", description: "Students Supported" },
      { label: "Partner Schools", value: "50+", description: "Partner Schools" },
      { label: "Years of Impact", value: "4", description: "Years of Impact" }
    ]
  },
  about: {
    title: "Championing Educational Excellence",
    description: "The Igiehon Foundation is dedicated to transforming Nigeria's educational landscape by providing comprehensive support to senior secondary school students and teachers.",
    story: "Founded with a vision to bridge the educational gap in Nigeria, the Igiehon Foundation has been at the forefront of educational reform since its inception. We believe that every student deserves access to quality education and every teacher deserves the resources to excel.",
    promise: "In pursuit of excellence and heritage, building tomorrow's leaders today.",
    impact: [
      { label: "Students Supported", value: "1,000+" },
      { label: "Schools Partnered", value: "50+" },
      { label: "Teachers Trained", value: "200+" },
      { label: "Tournaments Held", value: "3" }
    ]
  },
  programs: {
    title: "Comprehensive Educational Support",
    description: "We offer a range of carefully designed programs to support students, teachers, and schools in achieving educational excellence across Nigeria.",
    items: [
      {
        title: "Academic Support Program",
        description: "Comprehensive support for senior secondary school students across all subjects with focus on STEM education.",
        features: [
          "Mathematics and Science tutoring",
          "Study materials and resources", 
          "Exam preparation workshops",
          "Scholarship opportunities"
        ],
        icon: "BookOpen"
      },
      {
        title: "Teacher Development Initiative",
        description: "Empowering educators with modern teaching methodologies and resources to enhance classroom effectiveness.",
        features: [
          "Professional development workshops",
          "Teaching resources and materials",
          "Peer collaboration networks",
          "Technology integration training"
        ],
        icon: "Users"
      },
      {
        title: "Excellence Recognition Awards", 
        description: "Celebrating outstanding achievements in academics and recognizing exceptional contributions to education.",
        features: [
          "Student achievement awards",
          "Teacher excellence recognition",
          "School performance incentives",
          "Community impact certificates"
        ],
        icon: "Trophy"
      },
      {
        title: "Innovation & Research Hub",
        description: "Fostering creativity and research among students and teachers through innovative programs and facilities.",
        features: [
          "Science project competitions",
          "Research methodology training",
          "Innovation showcases", 
          "STEM career guidance"
        ],
        icon: "Lightbulb"
      }
    ]
  },
  mathTournament: {
    title: "IGF Math Tournament",
    edition: "4th Edition - 2025",
    date: "November 29, 2025",
    venue: "SIO Event Centre",
    address: "Ikpotan Road, Benin City, Nigeria",
    description: "Nigeria's premier mathematics competition bringing together the brightest minds from secondary schools across the nation.",
    prizes: [
      { position: "1st Place", amount: "₦500,000" },
      { position: "2nd Place", amount: "₦300,000" },
      { position: "3rd Place", amount: "₦200,000" },
      { position: "4th-10th", amount: "₦50,000" }
    ],
    timeline: [
      { date: "January 2025", event: "Registration Opens", status: "upcoming" },
      { date: "March 2025", event: "Regional Qualifiers", status: "upcoming" },
      { date: "October 2025", event: "Semi-Finals", status: "upcoming" },
      { date: "November 29, 2025", event: "Grand Finals", status: "upcoming" }
    ],
    eligibility: [
      "SS1, SS2, and SS3 students from Nigerian secondary schools",
      "Public and private schools are eligible to participate",
      "Maximum of 5 students per school for registration",
      "Students must be enrolled and actively attending school"
    ]
  },
  contact: {
    title: "Contact Our Team",
    description: "Ready to join our mission or have questions about our programs? We'd love to hear from you.",
    offices: [
      {
        name: "Lagos Office (Headquarters)",
        address: "F19, Lekki Town Square Mall, Lekki Phase 1, Lagos, Nigeria",
        phone: "+234 801 234 5678",
        email: "info@igiehonfoundation.org",
        hours: "Mon - Fri: 9:00 AM - 5:00 PM"
      },
      {
        name: "Benin City Office", 
        address: "Near SIO Event Centre, Ikpotan Road, Benin City, Nigeria",
        phone: "+234 802 345 6789",
        email: "benin@igiehonfoundation.org",
        hours: "Mon - Fri: 9:00 AM - 4:00 PM"
      }
    ]
  }
};