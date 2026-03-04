'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Server, Shield, Cloud, Headphones, Gauge, Workflow } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const serviceCards = [
  { icon: Server, title: 'Managed IT', description: 'Proactive monitoring, maintenance, and optimization across your infrastructure.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Layered defense, threat response, and policy hardening for modern risk.' },
  { icon: Cloud, title: 'Cloud Platforms', description: 'Secure cloud migrations and managed environments for distributed teams.' },
]

const advantageCards = [
  { icon: Headphones, title: 'Responsive Support', description: 'Fast triage and expert escalation from a dedicated technical team.' },
  { icon: Gauge, title: 'Performance Focus', description: 'Continuous tuning to keep systems stable, secure, and efficient.' },
  { icon: Workflow, title: 'Strategic IT Roadmap', description: 'Technology planning aligned to your growth and operational priorities.' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">Technology Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Infrastructure, security, and support designed for business continuity and scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-400" />
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 uppercase tracking-wide mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gray-100" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">Why Sentinel IT</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">A practical IT partner for fast-moving teams that cannot afford downtime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantageCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="text-center p-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 uppercase tracking-wide mb-2">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <div className="relative">
        <svg className="absolute -top-px w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-primary-950" />
        </svg>
        <footer className="bg-primary-950 text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-display text-2xl font-bold text-accent-400 uppercase tracking-wider mb-4">Sentinel IT Solutions</h3>
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed">Managed IT and cybersecurity services for businesses that need uptime, security, and scale.</p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/services" className="hover:text-accent-400 transition-colors">Services</Link></li>
                  <li><Link href="/case-studies" className="hover:text-accent-400 transition-colors">Case Studies</Link></li>
                  <li><Link href="/team" className="hover:text-accent-400 transition-colors">Team Members</Link></li>
                  <li><Link href="/about" className="hover:text-accent-400 transition-colors">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>233 S. Wacker Drive, Suite 4200</li>
                  <li>Chicago, IL 60606</li>
                  <li>info@sentinelit.com</li>
                  <li>(312) 555-0142</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-primary-800 mt-12 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Sentinel IT Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
