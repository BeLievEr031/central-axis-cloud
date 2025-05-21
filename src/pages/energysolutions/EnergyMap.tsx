import BackgroundVdo from "../../assets/background.webm"
import DataCenterMap from "../../components/DataCenterMap";
const features = [
    {
        title: "Interactive Mapping",
        items: [
            "Real-time visualization of stranded energy hotspots",
            "Detailed information on energy availability and costs",
            "Customizable filters for specific energy requirements",
        ],
    },
    {
        title: "Data Center Suitability Analysis",
        items: [
            "Assessment of infrastructure and connectivity in target areas",
            "Climate and geological risk evaluation",
            "Regulatory and compliance insights for each location",
        ],
    },
    {
        title: "Energy Source Evaluation",
        items: [
            "Analysis of energy source reliability and sustainability",
            "Forecasting of long-term energy availability",
            "Integration potential with renewable energy sources",
        ],
    },
    {
        title: "ROI Calculator",
        items: [
            "Estimation of potential cost savings from stranded energy",
            "Comparison of different locations based on energy costs",
            "Long-term financial projections for data center operations",
        ],
    },
];

const benefits = [
    "Significant reduction in operational costs through discounted or free energy",
    "Enhanced sustainability and reduced carbon footprint",
    "Access to untapped markets and expansion opportunities",
    "Improved energy security and reliability",
    "Potential for partnerships with local energy providers and communities",
    "Competitive advantage in the data center industry",
];

const EnergyMap = () => {
    return (
        <article className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Stranded Energy for Data Centers</h1>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Unlock the Power of Stranded Energy</h2>
                <p className="mb-4">
                    CentralAxis offers innovative solutions to help you identify and leverage stranded energy sources for your data center operations. Our interactive maps highlight potential hotspots in Latin America where you can access free or heavily discounted energy, significantly reducing operational costs and enhancing sustainability.
                </p>
            </section>

            <DataCenterMap />
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Key Features of Our Stranded Energy Solution</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3" > {feature.title}</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {feature.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section >

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Benefits of Leveraging Stranded Energy</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </section>

            <section className="relative overflow-hidden rounded-lg">
                <video autoPlay loop playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src={BackgroundVdo} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-background/80 opacity-80"></div>
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">Optimize Your Data Center's Energy Strategy</h2>
                    <p className="mb-4">
                        Discover the potential of stranded energy for your data center operations. Let our experts guide you through the process of identifying and leveraging these cost-effective and sustainable energy sources.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition-colors">
                                Schedule an Energy Consultation
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article >
    );
};

export default EnergyMap;
