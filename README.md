# Decoupled IT Services

A professional website starter for managed service providers (MSPs), IT consulting firms, and technology service companies. Built with Next.js 15 and Drupal CMS, this starter helps IT businesses showcase their services, highlight client success stories, and attract new leads through a modern, responsive web presence.

![Decoupled IT Services Screenshot](docs/screenshot.png)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/decoupled-it-services&project-name=it-services-site)

## Features

- **Services** -- Present managed IT, cybersecurity, cloud, and help desk offerings with category filtering, pricing info, and detailed descriptions
- **Case Studies** -- Showcase client success stories with industry tags, results summaries, and before/after project details
- **Team Members** -- Display staff profiles with positions, certifications (CISSP, PMP, Azure, etc.), and professional photos
- **Homepage** -- Configurable hero section, key statistics (uptime, clients served, endpoints managed), featured services, and call-to-action
- **Basic Pages** -- Static content for About, Contact, and other informational pages

## Quick Start

### 1. Clone the template

```bash
npx degit nextagencyio/decoupled-it-services my-it-services
cd my-it-services
npm install
```

### 2. Run interactive setup

```bash
npm run setup
```

This interactive script will:
- Authenticate with Decoupled.io (opens browser)
- Create a new Drupal space
- Wait for provisioning (~90 seconds)
- Configure your `.env.local` file
- Import sample content

### 3. Start development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Manual Setup

If you prefer to run each step manually:

<details>
<summary>Click to expand manual setup steps</summary>

### Authenticate with Decoupled.io

```bash
npx decoupled-cli@latest auth login
```

### Create a Drupal space

```bash
npx decoupled-cli@latest spaces create "Sentinel IT Solutions"
```

Note the space ID returned (e.g., `Space ID: 1234`). Wait ~90 seconds for provisioning.

### Configure environment

```bash
npx decoupled-cli@latest spaces env 1234 --write .env.local
```

### Import content

```bash
npm run setup-content
```

This imports the following sample content:

**Services:**
- Managed IT Services (24/7 monitoring, patch management, vendor management)
- Cybersecurity & Compliance (EDR, SIEM, MFA, HIPAA/SOC 2 auditing)
- Cloud Solutions & Migration (Microsoft 365, Azure/AWS, hybrid cloud)
- Help Desk & End-User Support (phone/email/chat, remote troubleshooting)

**Case Studies:**
- Meridian Health -- HIPAA-compliant cloud migration (94% downtime reduction)
- Sterling Law Group -- Zero trust security transformation (SOC 2 Type II certified)
- Apex Manufacturing -- IT consolidation across 3 facilities ($180K annual savings)

**Team Members:**
- David Park (Founder & CEO -- CISSP, PMP, ITIL v4 Master)
- Rachel Kim (Director of Security -- CISSP, CEH, CISM)
- Marcus Thompson (Cloud Solutions Architect -- Azure, AWS, GCP certified)

**Pages:**
- About Sentinel IT Solutions
- Contact Us

</details>

## Content Types

### Service
| Field | Type | Description |
|-------|------|-------------|
| title | string | Service name |
| body | rich text | Full service description |
| service_category | taxonomy | Category (managed-it, cybersecurity, cloud-services, etc.) |
| icon_name | string | Lucide icon identifier |
| image | image | Service hero image |
| price_range | string | Pricing information |

### Case Study
| Field | Type | Description |
|-------|------|-------------|
| title | string | Case study title |
| body | rich text | Full project narrative |
| industry | taxonomy | Client industry (healthcare, finance, legal, etc.) |
| client_name | string | Client organization name |
| results_summary | string | Key results overview |
| image | image | Featured project image |

### Team Member
| Field | Type | Description |
|-------|------|-------------|
| title | string | Staff member name |
| body | rich text | Professional biography |
| position | string | Job title |
| certifications | string[] | Professional certifications |
| email | string | Contact email |
| photo | image | Profile headshot |

### Homepage
| Field | Type | Description |
|-------|------|-------------|
| hero_title | string | Main headline |
| hero_subtitle | string | Supporting tagline |
| hero_description | rich text | Hero body copy |
| stats_items | paragraph[] | Key statistics (number + label) |
| featured_items_title | string | Services section heading |
| cta_title | string | Call-to-action heading |
| cta_description | rich text | CTA body copy |
| cta_primary / cta_secondary | string | CTA button labels |

## Customization

### Colors & Branding
Edit `tailwind.config.js` to customize the violet and cyan color scheme used throughout the site. Update the Header component logo and site name.

### Content Structure
Modify `data/it-services-content.json` to add or change content types, taxonomies (service categories, industries), and sample content.

### Components
React components are in `app/components/`. Key files:
- `HomepageRenderer.tsx` -- Main landing page layout
- `ServiceCard.tsx` / `CaseStudyCard.tsx` -- Listing cards
- `Header.tsx` -- Navigation and branding

## Demo Mode

Demo mode allows you to showcase the application without connecting to a Drupal backend. It displays mock content for all pages.

### Enable Demo Mode

Set the environment variable:

```bash
NEXT_PUBLIC_DEMO_MODE=true
```

Or add to `.env.local`:
```
NEXT_PUBLIC_DEMO_MODE=true
```

### Removing Demo Mode

To convert to a production app with real data:

1. Delete `lib/demo-mode.ts`
2. Delete `data/mock/` directory
3. Delete `app/components/DemoModeBanner.tsx`
4. Remove `DemoModeBanner` from `app/layout.tsx`
5. Remove demo mode checks from `app/api/graphql/route.ts`

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/decoupled-it-services)

Set `NEXT_PUBLIC_DEMO_MODE=true` in Vercel environment variables for a demo deployment.

### Other Platforms
Works with any Node.js hosting platform that supports Next.js.

## Documentation

- [Decoupled.io Docs](https://www.decoupled.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drupal GraphQL](https://www.decoupled.io/docs/graphql)

## License

MIT
