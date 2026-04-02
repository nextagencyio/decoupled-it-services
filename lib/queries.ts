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
      heroDescription { processed summary }
      statsItems
      featuredItemsTitle
      ctaTitle
      ctaDescription { processed summary }
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
        ... on NodeService {
          serviceCategory
          iconName
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          priceRange
        }
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
          serviceCategory
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
        ... on NodeCaseStudy {
          industry
          clientName
          resultsSummary
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
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
          industry
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
        ... on NodeTeamMember {
          position
          certifications
          email
          photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
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
          }
          ... on NodePage {
            id
            title
            body { processed }
          }
        }
      }
    }
  }
`
