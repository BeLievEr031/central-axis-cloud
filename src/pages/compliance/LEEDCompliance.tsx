import React from "react";
import LeedCertificatImg from "../../assets/leed-certification-levels.webp"
import LeedProcessingImg from "../../assets/leed-process_ongreening.webp"
import BackgroundVdo from "../../assets/background.webm"

const LEEDCompliance: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-6">LEED Compliance for Data Centers</h1>

            {/* What is LEED */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What is LEED?</h2>
                <p className="mb-4">
                    LEED (Leadership in Energy and Environmental Design) is a globally recognized green building certification program developed by the U.S. Green Building Council (USGBC). It provides a framework for healthy, highly efficient, and cost-saving green buildings.
                </p>
                <p>
                    For data centers, LEED certification demonstrates a commitment to sustainability, energy efficiency, and environmental responsibility.
                </p>
            </section>

            {/* Why LEED Matters */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Why LEED Matters for Data Centers</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Energy Efficiency: LEED-certified data centers consume less energy, reducing operational costs.</li>
                    <li>Environmental Impact: Certification ensures reduced carbon footprint and resource consumption.</li>
                    <li>Water Conservation: LEED promotes water-efficient cooling systems and landscaping.</li>
                    <li>Corporate Responsibility: Demonstrates commitment to sustainability and environmental stewardship.</li>
                    <li>Market Differentiation: LEED certification can be a competitive advantage in the data center industry.</li>
                </ul>
            </section>

            {/* Certification Levels */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">LEED Certification Levels</h2>
                <div className="relative w-full">
                    <img
                        src={LeedCertificatImg}
                        alt="LEED certification levels"
                        className="object-contain"
                    />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    Figure 1: LEED certification levels - Certified, Silver, Gold, and Platinum.
                </p>
            </section>

            {/* Key Credits */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key LEED Credits for Data Centers</h2>
                <p className="mb-4">Data centers can earn LEED points in several categories, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Energy and Atmosphere: Optimize energy performance, use renewable energy</li>
                    <li>Water Efficiency: Reduce water usage in cooling systems</li>
                    <li>Materials and Resources: Use sustainable materials, manage waste</li>
                    <li>Indoor Environmental Quality: Maintain good air quality, thermal comfort</li>
                    <li>Innovation: Implement cutting-edge green technologies</li>
                    <li>Regional Priority: Address geographically specific environmental priorities</li>
                </ul>
            </section>

            {/* CentralAxis Support */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How CentralAxis Helps with LEED Compliance</h2>
                <p className="mb-4">
                    CentralAxis offers comprehensive solutions to help data centers achieve and maintain LEED certification:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Energy monitoring and optimization tools</li>
                    <li>Water usage tracking and efficiency recommendations</li>
                    <li>Waste management and recycling program support</li>
                    <li>Indoor environmental quality monitoring</li>
                    <li>Automated reporting for LEED documentation</li>
                    <li>Continuous performance tracking for maintaining certification</li>
                </ul>
            </section>

            {/* LEED Certification Process */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">LEED Certification Process</h2>
                <div className="relative w-full">
                    <img
                        src={LeedProcessingImg}
                        alt="LEED Certification Process"
                        className="object-contain"
                        sizes="100vw"
                    />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    Figure 2: Overview of the LEED certification process for data centers.
                </p>
            </section>

            {/* Call to Action with Video Background */}
            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src={BackgroundVdo}
                        type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 opacity-70" />
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">Achieve LEED Compliance with CentralAxis</h2>
                    <p className="mb-4">
                        Ready to make your data center more sustainable and efficient? Let CentralAxis guide you through the LEED certification process and help you maintain compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors">
                                Schedule a Consultation
                            </button>
                        </a>
                        <a href="mailto:info@centralaxis.co">
                            <button className="bg-white text-green-500 px-6 py-2 rounded border border-green-500 hover:bg-green-100 transition-colors">
                                Request LEED Info Pack
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default LEEDCompliance;
