import ESGReportingImg from "../../assets/ESG_reporting.webp"
import ISOInfoImg from "../../assets/ISO_info.webp"
import AnimationVdo from "../../assets/Animation.mp4"
import BackgroundVdo from "../../assets/background.webm"

export default function ISO301342Compliance() {
    return (
        <article className="mx-auto max-w-4xl px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">ISO/IEC 30134-2 Compliance for Data Centers</h1>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">What is ISO/IEC 30134-2?</h2>
                <p className="mb-4">
                    ISO/IEC 30134-2 is an international standard that specifies the requirements for determining the Power Usage Effectiveness (PUE) of a data center. It provides a consistent and globally recognized method for calculating and reporting PUE.
                </p>
                <p>
                    This standard is part of the ISO/IEC 30134 series, which focuses on data center Key Performance Indicators (KPIs).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">Why ISO/IEC 30134-2 Matters</h2>
                <ul className="list-disc space-y-2 pl-5">
                    <li>Standardization: Ensures consistent PUE calculation across the industry.</li>
                    <li>Benchmarking: Allows for fair comparison between different data centers.</li>
                    <li>Efficiency Improvement: Provides a clear metric for tracking and improving energy efficiency.</li>
                    <li>Regulatory Compliance: Many regions are adopting this standard for energy efficiency regulations.</li>
                    <li>Credibility: Demonstrates commitment to recognized international standards.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">Key Aspects of ISO/IEC 30134-2</h2>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="w-full md:w-1/2 relative">
                        <img
                            alt="ESG Reporting"
                            loading="lazy"
                            decoding="async"
                            sizes="100vw"
                            src={ESGReportingImg}
                            style={{
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                objectFit: "contain",
                                color: "transparent",
                            }}
                        />
                        <p className="mt-2 text-sm text-gray-500">Figure 1: Key aspects and requirements of ISO/IEC 30134-2 standard.</p>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <img
                            alt="ISO Information"
                            loading="lazy"
                            decoding="async"
                            sizes="100vw"
                            src={ISOInfoImg}
                            style={{
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                objectFit: "contain",
                                color: "transparent",
                            }}
                        />
                        <p className="mt-2 text-sm text-gray-500">Figure 2: Additional information about ISO/IEC 30134-2.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">PUE Calculation According to ISO/IEC 30134-2</h2>
                <p className="mb-4">The standard defines PUE as:</p>
                <p className="mb-4 font-semibold">PUE = Total Data Center Energy / IT Equipment Energy</p>
                <p className="mb-4">Key considerations in the calculation include:</p>
                <ul className="list-disc space-y-2 pl-5">
                    <li>Clear definition of data center boundaries</li>
                    <li>Specified measurement points for energy consumption</li>
                    <li>Guidelines for measurement intervals and data collection</li>
                    <li>Categorization of PUE measurement (PUE0, PUE1, PUE2, PUE3)</li>
                    <li>Reporting requirements and data presentation</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">How CentralAxis Helps with ISO/IEC 30134-2 Compliance</h2>
                <p className="mb-4">CentralAxis offers comprehensive solutions to help data centers achieve and maintain compliance with ISO/IEC 30134-2:</p>
                <ul className="list-disc space-y-2 pl-5">
                    <li>Automated PUE calculation according to the standard</li>
                    <li>Real-time energy monitoring and data collection</li>
                    <li>Clear visualization of PUE trends and components</li>
                    <li>Customizable reporting tools for ISO/IEC 30134-2 requirements</li>
                    <li>Alerting system for PUE threshold violations</li>
                    <li>Recommendations for PUE improvement based on collected data</li>
                    <li>Integration with other data center management tools</li>
                </ul>
            </section>

            <section className="mb-8">
                <video
                    autoPlay
                    loop
                    playsInline
                    className="h-full w-full md:w-1/2 object-cover mx-auto"
                    muted
                >
                    <source
                        src={AnimationVdo}
                        type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="mt-2 text-sm text-gray-500">Figure 2: Benefits of achieving ISO/IEC 30134-2 compliance for data centers.</p>

            </section>


            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src={BackgroundVdo} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 opacity-80"></div>
                <div className="relative z-10 p-6 text-white text-center">
                    <h2 className="mb-4 text-2xl font-semibold">Achieve ISO/IEC 30134-2 Compliance with CentralAxis</h2>
                    <p className="mb-4">
                        Ready to ensure your data center's PUE measurements meet international standards? Let CentralAxis guide you through ISO/IEC 30134-2 compliance and help you optimize your energy efficiency.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row justify-center">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="rounded border border-blue-500 bg-black px-6 py-2 text-white transition-colors hover:bg-blue-100">
                                Schedule a Consultation
                            </button>
                        </a>
                        <a href="mailto:info@centralaxis.co">
                            <button className="rounded border border-blue-500 bg-white px-6 py-2 text-black transition-colors hover:bg-blue-100">
                                Request ISO/IEC 30134-2 Guide
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
}
