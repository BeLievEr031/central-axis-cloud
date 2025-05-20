
const IntelligentAssetManagement = () => {
    return (
        <article className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="mb-8 text-4xl font-bold text-center">
                Intelligent Asset Management
            </h1>

            {/* Video + Intro Section */}
            <section className="mb-16 rounded-lg p-8 bg-background/80">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    <div className="relative w-full" style={{ paddingTop: "75%" }}>
                        <video
                            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover shadow-lg"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="https://www.centralaxis.com/landing/asset-mgt.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold">
                            Effortless Asset Management for Modern Data Centers
                        </h2>
                        <p className="mb-6 text-lg leading-relaxed">
                            CentralAxis delivers streamlined data center infrastructure
                            management through our intelligent asset management solution. Our
                            platform removes the burden of manual inventory processes and
                            eliminates disconnected systems.
                        </p>
                        <ul className="list-disc space-y-3 pl-5 text-lg">
                            <li>
                                <span className="font-semibold">Automated Discovery</span>: Identify and catalog your entire infrastructure automatically
                            </li>
                            <li>
                                <span className="font-semibold">Real-Time Tracking</span>: Monitor assets with precise location and status information
                            </li>
                            <li>
                                <span className="font-semibold">Synchronized Data</span>: Maintain a single source of truth across your organization
                            </li>
                            <li>
                                <span className="font-semibold">Comprehensive Lifecycle</span>: Manage assets from procurement to decommissioning
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Discovery Section */}
            <section className="mb-12">
                <h2 className="mb-6 text-center text-3xl font-semibold">
                    Automated Discovery &amp; Effortless Onboarding
                </h2>
                <div className="grid items-center gap-8 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-lg leading-relaxed">
                            Our intelligent discovery engine automatically identifies and
                            catalogs your entire infrastructure—from servers and network
                            devices to power systems and environmental sensors—with minimal
                            configuration required.
                        </p>
                        <ul className="list-disc space-y-3 pl-5 text-lg">
                            <li>
                                <span className="font-semibold">Zero-touch discovery</span>: Automated scanning detects new devices the moment they connect to your network
                            </li>
                            <li>
                                <span className="font-semibold">Bulk import capabilities</span>: Rapidly onboard existing assets with intelligent data mapping from spreadsheets or third-party systems
                            </li>
                            <li>
                                <span className="font-semibold">Intelligent classification</span>: ML-powered engine automatically categorizes assets and populates critical metadata
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-md">
                        <img
                            src="https://www.centralaxis.com/landing/asset-mgt-img.png"
                            alt="Automated asset discovery dashboard"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* DCIM Features Section */}
            <section className="mb-12">
                <h2 className="mb-4 text-center text-2xl font-semibold">
                    Comprehensive DCIM Features
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Real-Time Asset Tracking",
                            features: [
                                "Precise location tracking with rack-level visualization",
                                "Automated change detection and movement tracking",
                                "Asset relationship mapping with dependency visualization",
                                "Real-time status monitoring with customizable dashboards",
                            ],
                        },
                        {
                            title: "Synchronized Data Management",
                            features: [
                                "Bi-directional integration with CMDB and ITSM platforms",
                                "Real-time synchronization across all connected systems",
                                "Single source of truth for all asset data",
                                "Role-based access controls with detailed audit trails",
                            ],
                        },
                        {
                            title: "Comprehensive Lifecycle Management",
                            features: [
                                "End-to-end tracking from procurement to decommissioning",
                                "Automated warranty and service contract management",
                                "Predictive maintenance scheduling with failure analytics",
                                "Intelligent refresh planning with TCO analysis",
                            ],
                        },
                        {
                            title: "Advanced Capacity Planning",
                            features: [
                                "Real-time space, power, and cooling capacity monitoring",
                                'Predictive capacity modeling with "what-if" scenarios',
                                "Utilization optimization with AI-driven recommendations",
                                "Automated capacity reservation for planned deployments",
                            ],
                        },
                        {
                            title: "Complete Asset Change History",
                            features: [
                                "Comprehensive log of all asset modifications",
                                "Detailed maintenance and service records",
                                "Timestamped audit trail of configuration changes",
                                "Performance history and trend analysis",
                            ],
                        },
                        {
                            title: "Parent-Child Relationship Tracking",
                            features: [
                                "Visualize upstream and downstream dependencies",
                                "Impact analysis for changes and outages",
                                "Automated service mapping across infrastructure layers",
                                "Cascading alert management with root cause identification",
                            ],
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-gray-100 p-6 shadow-md bg-background/80"
                        >
                            <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                {item.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="https://www.centralaxis.com/landing/asset-mgt.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 p-8 text-center text-white">
                    <h2 className="mb-4 text-3xl font-semibold">
                        Transform Your Asset Management Today
                    </h2>
                    <p className="mb-6 text-lg">
                        Experience the difference that intelligent, automated asset
                        management can make for your data center
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="w-full rounded bg-white px-8 py-3 text-black transition-colors hover:bg-gray-100 sm:w-auto">
                                Schedule a Demo
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default IntelligentAssetManagement;
