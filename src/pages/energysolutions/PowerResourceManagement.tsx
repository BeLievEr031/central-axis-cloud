export default function PowerResourceManagement() {
    return (
        <article className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Power Resource Mapping for Data Centers</h1>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Revolutionize Your Data Center's Energy Efficiency</h2>
                <p className="mb-4">
                    CentralAxis's Power Resource Mapping solution addresses a critical inefficiency in data center operations. Traditionally, data centers overprovision their energy supply, paying for significantly more power than they use on average to accommodate potential spikes. Our innovative approach allows you to operate closer to 100% of your energy capacity daily, dramatically reducing costs without compromising reliability.
                </p>
                <p className="mb-4">
                    During peak demand, our system instantly taps into alternative energy reserves, ensuring uninterrupted operation while maintaining optimal efficiency. This flexible and responsive approach translates to significant savings and improved sustainability for your data center.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Key Features of Power Resource Mapping</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Real-time Energy Usage Monitoring",
                            points: [
                                "Granular tracking of power consumption patterns",
                                "AI-driven prediction of energy demand spikes",
                                "Dynamic adjustment of power allocation",
                            ],
                        },
                        {
                            title: "Flexible Reserve System",
                            points: [
                                "Instant access to alternative energy sources",
                                "Seamless integration with existing power infrastructure",
                                "Automated switching to reserve power during peak demand",
                            ],
                        },
                        {
                            title: "Optimization Analytics",
                            points: [
                                "Machine learning algorithms for energy usage optimization",
                                "Customized recommendations for energy efficiency improvements",
                                "Scenario planning for future capacity needs",
                            ],
                        },
                        {
                            title: "Cost Savings Calculator",
                            points: [
                                "Real-time visualization of cost savings",
                                "Projected ROI based on optimized energy usage",
                                "Comparison with traditional energy provisioning models",
                            ],
                        },
                    ].map(({ title, points }) => (
                        <div className="p-6 rounded-lg shadow-md" key={title}>
                            <h3 className="text-xl font-semibold mb-3">{title}</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Benefits of CentralAxis Power Resource Mapping</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Significant reduction in energy costs through optimized usage</li>
                    <li>Enhanced reliability with instant access to reserve power</li>
                    <li>Improved sustainability through more efficient energy consumption</li>
                    <li>Increased operational flexibility to handle varying workloads</li>
                    <li>Better capacity planning and infrastructure scaling</li>
                    <li>Reduced carbon footprint and improved environmental compliance</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <ol className="list-decimal pl-5 mt-4 space-y-2">
                    <li>Continuous monitoring of data center power consumption</li>
                    <li>AI-driven prediction of upcoming demand spikes</li>
                    <li>Proactive allocation of power resources</li>
                    <li>Instant activation of flexible reserves when needed</li>
                    <li>Seamless return to standard operation post-spike</li>
                </ol>
            </section>

            <section className="relative overflow-hidden rounded-lg">
                <video autoPlay loop playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/energy_optimization_background.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 opacity-80"></div>
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">Optimize Your Data Center's Energy Strategy</h2>
                    <p className="mb-4">
                        Ready to revolutionize your data center's energy efficiency? Let our experts show you how Power Resource Mapping can significantly reduce your costs while maintaining peak performance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                                Schedule a Power Optimization Consultation
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
}
