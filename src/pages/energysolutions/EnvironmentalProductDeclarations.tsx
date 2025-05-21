import EPDsImg from "../../assets/EPDs.webp"
import EPDRegulationImg from "../../assets/RegulationEPDs.webp"
import BackgroundVdo from "../../assets/background.webm"
const epdSupportItems = [
    "EPD database integration for easy access to product environmental data",
    "LCA tools for conducting assessments on data center components",
    "Reporting features to generate EPD-compliant documentation",
    "Analysis tools to compare products based on their environmental impact",
    "Integration with green building certification processes",
];

const epdBenefits = [
    "Transparency: EPDs provide clear, verified environmental impact data.",
    "Informed Decision-Making: Helps in choosing more sustainable products and technologies.",
    "Regulatory Compliance: Supports meeting environmental regulations and standards.",
    "Green Certifications: Facilitates achieving certifications like LEED or BREEAM.",
    "Competitive Advantage: Demonstrates commitment to sustainability to clients and stakeholders.",
];

export default function EnvironmentalProductDeclarations() {
    return (
        <article className="mx-auto max-w-4xl px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">
                Environmental Product Declarations (EPDs) for Data Center Sustainability
            </h1>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">What are EPDs?</h2>
                <p className="mb-4">
                    Environmental Product Declarations (EPDs) are standardized documents
                    that provide transparent and comparable information about the
                    life-cycle environmental impact of products. For data centers, EPDs can
                    cover various components, from servers and networking equipment to
                    cooling systems and building materials.
                </p>
                <p>
                    EPDs are based on Life Cycle Assessments (LCAs) and provide quantified
                    environmental information on the entire lifecycle of a product, from
                    raw material extraction to end-of-life disposal or recycling.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                    Why EPDs Matter for Data Centers
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                    {epdBenefits.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                    EPD Implementation in Data Centers
                </h2>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-1">
                        <div className="relative h-64 w-full">
                            <img
                                alt="Life cycle stages covered in an EPD"
                                className="object-contain h-full"
                                src={EPDsImg}

                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            Figure 1: Life cycle stages covered in an EPD.
                        </p>
                    </div>
                    <div className="flex-1">
                        <div className="relative h-64 w-full">
                            <img
                                alt="Environmental impact categories in EPDs"
                                className="object-contain h-full"
                                src={EPDRegulationImg}
                            />
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            Figure 2: Environmental impact categories typically included in
                            EPDs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                    How CentralAxis Supports EPD Implementation
                </h2>
                <p className="mb-4">
                    CentralAxis offers comprehensive solutions to help data centers
                    implement and leverage EPDs:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                    {epdSupportItems.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source
                        src={BackgroundVdo}
                        type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 rounded-lg p-6 text-white">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Embrace Sustainability with EPD-Driven Insights
                    </h2>
                    <p className="mb-4">
                        Ready to enhance your data center's environmental performance?
                        Discover how CentralAxis can help you leverage EPDs for sustainable
                        growth and operational excellence.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="rounded bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600">
                                Schedule a Demo
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
}
