import React from 'react'
import Hero from './components/hero/hero'
import Resume from './components/resume/resume'

export interface LinkItem {
  path: string
  name: string
  component: React.ReactNode
  index?: boolean
}

export const routes: LinkItem[] = [
  { path: 'hero', name: 'Home', component: <Hero />, index: true },
  //{ path: 'social', name: 'My Social' },
  { path: 'resume-experience', name: 'Experience', component: <Resume /> },
  //{ path: 'resume-education', name: 'Education' },
  //{ path: 'review', name: 'Review' },
  //{ path: 'portfolio', name: 'Portfolio' },
  //{ path: 'extra-section', name: 'Extra Skills' },
  //{ path: 'contact-section', name: 'Contact Me' },
]
