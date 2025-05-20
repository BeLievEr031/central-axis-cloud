const Monitoring = () => {
    return (
        <article className="mx-auto max-w-6xl px-4 py-8 text-white">
            <h1 className="mb-8 text-4xl font-bold">
                Infrastructure Monitoring &amp; Asset Management
            </h1>

            {/* Section: Video Header */}
            <section className="relative mb-12">
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <video
                        className="absolute left-0 top-0 h-full w-full rounded-lg object-cover shadow-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://www.centralaxis.com/landing/hb-monitoring.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                    Real-time monitoring and asset management dashboard
                </div>
            </section>

            {/* Section: Intro */}
            <section className="mb-12">
                <h2 className="mb-6 text-3xl font-semibold">
                    Intelligent Infrastructure Management
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                    CentralAxis delivers an integrated platform that combines advanced
                    monitoring capabilities with comprehensive asset management. Our
                    solution provides real-time insights, predictive analytics, and
                    automated maintenance scheduling to optimize your data center
                    operations and extend infrastructure lifespan.
                </p>
            </section>

            {/* Section: Features */}
            <section className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold">
                    Comprehensive Monitoring Features
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {[
                        {
                            title: "Advanced Performance Monitoring",
                            features: [
                                "Real-time server and application performance tracking with ML-powered anomaly detection",
                                "Predictive analytics for capacity planning and resource optimization",
                                "Custom alerting thresholds with automated incident response",
                                "Historical trend analysis and performance forecasting",
                            ],
                        },
                        {
                            title: "Power & Environmental Monitoring",
                            features: [
                                "Granular power monitoring with per-device energy profiling",
                                "Advanced PUE optimization with AI-driven recommendations",
                                "3D thermal mapping with predictive cooling analytics",
                                "Environmental sensor integration and compliance tracking",
                            ],
                        },
                        {
                            title: "Asset Lifecycle Management",
                            features: [
                                "Automated asset discovery and inventory management",
                                "Predictive maintenance scheduling with failure prediction",
                                "Warranty and service contract tracking",
                                "Asset utilization optimization and replacement planning",
                            ],
                        },
                        {
                            title: "Infrastructure Analytics",
                            features: [
                                "Comprehensive infrastructure health scoring",
                                "Cost analysis and optimization recommendations",
                                "Capacity trending and growth forecasting",
                                "Custom reporting and compliance documentation",
                            ],
                        },
                    ].map((section, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-background/80 p-6 shadow-md"
                        // className="rounded-lg bg-gray-100 p-6 shadow-md dark:bg-gray-800"
                        >
                            <h3 className="mb-3 text-xl font-semibold">{section.title}</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                {section.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section: Key Benefits */}
            <section className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "Operational Excellence",
                            points: [
                                "Reduce downtime through predictive maintenance",
                                "Optimize resource utilization",
                                "Streamline maintenance workflows",
                            ],
                        },
                        {
                            title: "Cost Optimization",
                            points: [
                                "Reduce energy consumption by up to 40%",
                                "Extend equipment lifespan",
                                "Optimize maintenance costs",
                            ],
                        },
                        {
                            title: "Risk Management",
                            points: [
                                "Ensure regulatory compliance",
                                "Prevent equipment failures",
                                "Enhance security monitoring",
                            ],
                        },
                    ].map((benefit, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-background/80 p-6"
                        >
                            <h3 className="mb-3 text-lg font-semibold">{benefit.title}</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                {benefit.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section: Call to Action */}
            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="https://www.centralaxis.com/landing/hb-monitoring.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 p-8 text-center text-white">
                    <h2 className="mb-4 text-3xl font-semibold">Try It Today</h2>
                    <p className="mb-6 text-lg">
                        See how CentralAxis can transform your infrastructure management
                    </p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://calendly.com/margarita-centralaxis/30min"
                    >
                        <button className="rounded bg-white px-8 py-3 text-black transition-colors hover:bg-gray-100">
                            Schedule a Chat
                        </button>
                    </a>
                </div>
            </section>
        </article>
    );
};

export default Monitoring;
