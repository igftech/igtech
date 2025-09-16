import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN, // Optional: for write operations
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ queries for content
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]{
    title,
    description,
    logo,
    primaryColor,
    secondaryColor
  }`,
  
  heroSection: `*[_type == "heroSection"][0]{
    title,
    subtitle,
    description,
    ctaText,
    backgroundImage,
    stats[]
  }`,
  
  aboutSection: `*[_type == "aboutSection"][0]{
    title,
    description,
    story,
    promise,
    values[]
  }`,
  
  programs: `*[_type == "program"] | order(order asc){
    title,
    description,
    icon,
    features[],
    slug
  }`,
  
  mathTournament: `*[_type == "mathTournament"][0]{
    title,
    subtitle,
    edition,
    date,
    venue,
    address,
    description,
    prizes[],
    eligibility[],
    timeline[],
    registrationOpen
  }`,
  
  contactInfo: `*[_type == "contactInfo"][0]{
    offices[],
    email,
    phone,
    socialLinks[]
  }`
};