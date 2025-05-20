import Customers from './components/Customers'
import Header from './components/Header'
import Hero from './components/Hero'
import SolutionsOverview from './components/SolutionsOverview'
import { CallToActionSection } from './components/CallToActionSection'
import { FeatureSection } from './components/FeatureSection'
import { DemoBanner } from './components/DemoBanner'
import { FaqSection } from './components/FaqSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='flex min-h-screen flex-col text-white'>
      <Header />
      <main className='min-h-[calc(100svh-var(--header-height))]'>
        <Hero />
        <Customers />
        <SolutionsOverview />
        <CallToActionSection />
        <FeatureSection />
        <DemoBanner />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

export default App