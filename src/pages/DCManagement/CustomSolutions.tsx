
const solutionsFeatures = [
    {
        title: 'Data Center Migrations',
        points: [
            'End-to-end asset tracking and transfer coordination',
            'Dependency mapping and risk analysis',
            'Visual migration plans with milestone tracking',
        ],
    },
    {
        title: 'Legacy Network Mapping',
        points: [
            'Auto-discovery of devices and logical paths',
            'Visual topology maps across racks and layers',
            'Integration with existing documentation and diagrams',
        ],
    },
    {
        title: 'Custom Dashboards & Interfaces',
        points: [
            'Tailored UIs for different teams or tenants',
            'Role-based access to specific views and data',
            'Interactive maps, KPI panels, and visualizations',
        ],
    },
    {
        title: 'Workflow Automation',
        points: [
            'Custom ticketing and change processes',
            'API connectors to ITSM, BMS, CMDB, or HR systems',
            'Scheduled tasks, triggers, and automation rules',
        ],
    },
    {
        title: 'Advanced Reporting & Exports',
        points: [
            'Exportable compliance and audit reports',
            'Custom data pipelines and historical trend reports',
            'Data federation from multiple DCIM sources',
        ],
    },
    {
        title: 'Tailored Integrations',
        points: [
            'Connect legacy tools with modern APIs',
            'Bridge gaps between cloud and on-prem environments',
            'Build middleware or adapters around custom business logic',
        ],
    },
];

const CustomSolutions = () => (
    <article className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold text-center">
            Custom Solutions Built for Your Data Center
        </h1>

        <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl font-semibold">
                Every data center is different — so we build to match.
            </h2>
            <p className="text-lg leading-relaxed">
                Whether you’re migrating to a new site, mapping legacy networks, or need a
                custom integration built around your workflow — the CentralAxis team can help.
                We deliver full-service, flexible solutions tailored to your infrastructure,
                processes, and business goals.
            </p>
        </section>

        <section className="mb-12">
            <h2 className="mb-6 text-3xl font-semibold text-center">What We Can Deliver</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {solutionsFeatures.map(({ title, points }, idx) => (
                    <div key={idx} className="rounded-lg bg-background/80 p-6 shadow-md">
                        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            {points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        <section className="relative overflow-hidden rounded-lg text-white py-16 px-8 text-center">
            <h2 className="mb-4 text-3xl font-semibold">
                Let’s Build Your Ideal Data Center Solution
            </h2>
            <p className="mb-6 text-lg max-w-2xl mx-auto">
                CentralAxis is more than just a platform — it’s a partner. From migration to
                modernization, we collaborate with your team to design and deliver
                high-impact solutions that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="https://calendly.com/margarita-centralaxis/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="rounded bg-white px-8 py-3 text-black transition-colors hover:bg-gray-100 w-full sm:w-auto">
                        Book a Consultation
                    </button>
                </a>
            </div>
        </section>
    </article>
);

export default CustomSolutions;
