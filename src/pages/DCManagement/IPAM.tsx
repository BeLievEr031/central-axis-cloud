import React from 'react';

const ipamFeatures = [
    {
        title: 'Automated Discovery',
        points: [
            'Continuously scans the network to detect new devices',
            'Auto-updates inventory when changes are made',
            'Integrates with switch, router, and DHCP data',
        ],
    },
    {
        title: 'Visual IP Address Map',
        points: [
            'Interactive UI to browse IP blocks and usage',
            'Color-coded status indicators for availability',
            'Subnet visualizations with drill-down views',
        ],
    },
    {
        title: 'IP Conflict Prevention',
        points: [
            'Detects duplicate or overlapping assignments instantly',
            'Alerts and blocks unauthorized changes',
            'Ensures policy-compliant IP usage',
        ],
    },
    {
        title: 'DHCP/DNS Integration',
        points: [
            'Integrates with leading DNS & DHCP servers',
            'Keeps records consistent across network systems',
            'Real-time updates to leases and name resolutions',
        ],
    },
    {
        title: 'Role-Based Access & Auditing',
        points: [
            'Granular user permissions by region, site, or subnet',
            'Detailed logs of every assignment and change',
            'Compliance-ready reporting and export tools',
        ],
    },
    {
        title: 'Self-Service & API Access',
        points: [
            'Enable teams to request and reserve IPs via self-service',
            'APIs for provisioning, querying, and updating IP info',
            'Integrate with CI/CD and infrastructure-as-code tools',
        ],
    },
];

const IPAM = () => {
    return (
        <article className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="mb-8 text-center text-4xl font-bold">
                Intelligent IP Address Management (IPAM)
            </h1>

            <section className="mb-16 rounded-lg p-8 bg-background/80">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    <div className="relative w-full" style={{ paddingTop: '75%' }}>
                        <video
                            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover shadow-lg"
                            autoPlay
                            loop
                            playsInline
                        >
                            <source src="https://www.centralaxis.com/landing/ipam-vid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold">
                            Eliminate IP Conflicts & Simplify Network Management
                        </h2>
                        <p className="mb-6 text-lg leading-relaxed">
                            CentralAxis IPAM provides a centralized, automated system for managing all IP addresses across your data
                            center and enterprise networks. Reduce errors, streamline provisioning, and ensure total visibility over
                            your IP space.
                        </p>
                        <ul className="list-disc space-y-3 pl-5 text-lg">
                            <li>Real-time discovery and inventory of all IP addresses</li>
                            <li>Automated conflict detection and resolution</li>
                            <li>Centralized view of subnets, VLANs, and IP assignments</li>
                            <li>Integrated with DNS and DHCP systems</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="mb-6 text-center text-3xl font-semibold">
                    Powerful IPAM Features Built for Scale
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {ipamFeatures.map((feature, index) => (
                        <div key={index} className="rounded-lg bg-background/80 p-6 shadow-md">
                            <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                {feature.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative overflow-hidden rounded-lg">
                <video autoPlay loop playsInline className="absolute inset-0 h-full w-full object-cover">
                    <source src="https://www.centralaxis.com/landing/ipam-vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-background/80 opacity-60"></div>
                <div className="relative z-10 p-8 text-center text-white">
                    <h2 className="mb-4 text-3xl font-semibold">Take Control of Your IP Infrastructure</h2>
                    <p className="mb-6 text-lg">
                        Discover how CentralAxis IPAM can bring visibility, control, and efficiency to your network.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/margarita-centralaxis/30min">
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

export default IPAM;
