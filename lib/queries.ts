// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_SERVICES = gql`
  query GetServices($first: Int = 10) {
    nodeServices(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        body { processed }
        serviceCategory {
          ... on TermServiceCategory {
            id
            name
          }
        }
        iconName
        image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        priceRange
      }
    }
  }
`

export const GET_SERVICE_BY_PATH = gql`
  query GetServiceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeService {
            id
            title
            path
            body { processed }
            serviceCategory {
              ... on TermServiceCategory {
                id
                name
              }
            }
            iconName
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            priceRange
          }
        }
      }
    }
  }
`

export const GET_CASE_STUDIES = gql`
  query GetCaseStudies($first: Int = 10) {
    nodeCaseStudies(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        body { processed }
        industry {
          ... on TermIndustry {
            id
            name
          }
        }
        clientName
        resultsSummary
        image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
      }
    }
  }
`

export const GET_CASE_STUDY_BY_PATH = gql`
  query GetCaseStudyByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeCaseStudy {
            id
            title
            path
            body { processed }
            industry {
              ... on TermIndustry {
                id
                name
              }
            }
            clientName
            resultsSummary
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($first: Int = 10) {
    nodeTeamMembers(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        body { processed }
        position
        certifications
        email
        photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
      }
    }
  }
`

export const GET_TEAM_MEMBER_BY_PATH = gql`
  query GetTeamMemberByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTeamMember {
            id
            title
            path
            body { processed }
            position
            certifications
            email
            photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          __typename
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription { processed }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription { processed }
            ctaPrimary
            ctaSecondary
          }
          ... on NodePage {
            id
            title
            body { processed }
          }
          ... on NodeService {
            id
            title
            path
            body { processed }
            serviceCategory {
              ... on TermServiceCategory {
                id
                name
              }
            }
            iconName
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            priceRange
          }
          ... on NodeCaseStudy {
            id
            title
            path
            body { processed }
            industry {
              ... on TermIndustry {
                id
                name
              }
            }
            clientName
            resultsSummary
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodeTeamMember {
            id
            title
            path
            body { processed }
            position
            certifications
            email
            photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`
