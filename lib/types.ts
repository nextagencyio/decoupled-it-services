export interface DrupalHomepage {
  id: string
  title: string
  path?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string; summary?: string }
  statsItems?: string
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: { processed: string; summary?: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalPage {
  id: string
  title: string
  path?: string

}

export interface DrupalService {
  id: string
  title: string
  path?: string
  serviceCategory?: string
  iconName?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  priceRange?: string
}

export interface DrupalCaseStudy {
  id: string
  title: string
  path?: string
  industry?: string
  clientName?: string
  resultsSummary?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DrupalTeamMember {
  id: string
  title: string
  path?: string
  position?: string
  certifications?: string
  email?: string
  photo?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

export interface CaseStudiesData {
  nodeCaseStudies: {
    nodes: DrupalCaseStudy[]
  }
}

export interface TeamMembersData {
  nodeTeamMembers: {
    nodes: DrupalTeamMember[]
  }
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}
