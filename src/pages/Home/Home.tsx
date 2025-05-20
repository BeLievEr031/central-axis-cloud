import { CallToActionSection } from "../../components/CallToActionSection"
import Customers from "../../components/Customers"
import { DemoBanner } from "../../components/DemoBanner"
import { FaqSection } from "../../components/FaqSection"
import { FeatureSection } from "../../components/FeatureSection"
import Hero from "../../components/Hero"
import SolutionsOverview from "../../components/SolutionsOverview"

function Home() {
    return (
        <main className='min-h-[calc(100svh-var(--header-height))]'>
            <Hero />
            <Customers />
            <SolutionsOverview />
            <CallToActionSection />
            <FeatureSection />
            <DemoBanner />
            <FaqSection />
        </main>
    )
}

export default Home