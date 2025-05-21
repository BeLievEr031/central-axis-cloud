
const RenewableEnergyIntegration = () => {
    return (
        <article className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">
                Renewable Energy Integration for Data Centers
            </h1>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">
                    Powering the Future with On-Site Renewables
                </h2>
                <p className="mb-4">
                    CentralAxis leads the charge in integrating large-scale renewable energy
                    reserves directly into data center operations. Our innovative approach
                    combines on-site solar and wind installations with intelligent energy
                    management systems, providing a sustainable, cost-effective, and reliable
                    power solution for modern data centers.
                </p>
                <p className="mb-4">
                    By leveraging on-site renewable energy, data centers can significantly
                    reduce their carbon footprint, lower operational costs, and tap into
                    lucrative government incentives designed to promote sustainable
                    practices in the tech industry.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Key Features of Our Renewable Integration Services
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Large-Scale On-Site Solar Arrays",
                            items: [
                                "Custom-designed solar installations to maximize energy capture",
                                "Advanced photovoltaic technology for optimal efficiency",
                                "Scalable solutions to meet growing energy demands"
                            ]
                        },
                        {
                            title: "On-Site Wind Turbine Farms",
                            items: [
                                "Strategic placement for maximum wind energy harvesting",
                                "Low-noise, high-efficiency turbine technology",
                                "Adaptable designs for various geographical locations"
                            ]
                        },
                        {
                            title: "Intelligent Energy Management System",
                            items: [
                                "Real-time monitoring and optimization of energy flow",
                                "Seamless integration with grid power for uninterrupted operation",
                                "Predictive analytics for energy production and consumption"
                            ]
                        },
                        {
                            title: "Energy Storage Solutions",
                            items: [
                                "High-capacity battery systems for energy storage",
                                "Load balancing to optimize renewable energy usage",
                                "Backup power capabilities for enhanced reliability"
                            ]
                        }
                    ].map(({ title, items }) => (
                        <div
                            key={title}
                            className="p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-semibold mb-3">{title}</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Government Incentives for Renewable Energy in Data Centers
                </h2>
                <p className="mb-4">
                    Data centers implementing large-scale renewable energy solutions can
                    benefit from various government incentives, including:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    {[
                        "Federal Investment Tax Credit (ITC) for solar installations",
                        "Production Tax Credits (PTC) for wind energy systems",
                        "Accelerated depreciation benefits (MACRS)",
                        "State-specific renewable energy credits and rebates",
                        "Grants and low-interest loans for green energy projects",
                        "Carbon offset credits and emissions reduction incentives"
                    ].map((incentive) => (
                        <li key={incentive}>{incentive}</li>
                    ))}
                </ul>
                <p className="mt-4">
                    Our team of experts will guide you through the process of identifying and
                    securing these incentives, maximizing the financial benefits of your
                    renewable energy integration.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Benefits of CentralAxis Renewable Integration
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                    {[
                        "Significant reduction in operational energy costs",
                        "Enhanced energy independence and reliability",
                        "Substantial decrease in carbon footprint and environmental impact",
                        "Positive public image and corporate social responsibility",
                        "Potential for energy sales back to the grid during low-usage periods",
                        "Future-proofing against rising energy costs and regulations",
                        "Competitive advantage in the data center market"
                    ].map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                    ))}
                </ul>
            </section>

            <section className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 opacity-80"></div>
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">
                        Transform Your Data Center with Renewable Energy
                    </h2>
                    <p className="mb-4">
                        Ready to harness the power of on-site renewables and unlock government
                        incentives? Let our experts show you how to revolutionize your data
                        center's energy strategy with large-scale solar and wind integration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors">
                                Schedule a Renewable Energy Consultation
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default RenewableEnergyIntegration;
