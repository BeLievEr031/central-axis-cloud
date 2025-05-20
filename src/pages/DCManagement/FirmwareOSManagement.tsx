const featureCards = [
    {
        title: 'Centralized Management Console',
        points: [
            'Single-pane-of-glass view for all firmware and OS versions',
            'Real-time status monitoring of all components',
            'Customizable dashboards for different management roles',
        ],
    },
    {
        title: 'Automated Update Deployment',
        points: [
            'Scheduled or on-demand firmware and OS updates',
            'Staged rollouts to minimize operational impact',
            'Automatic rollback capabilities in case of issues',
        ],
    },
    {
        title: 'Comprehensive Component Support',
        points: [
            'Management of server BIOS/UEFI firmware',
            'NIC agent firmware and driver updates',
            'Storage controller and drive firmware management',
            'Network switch and router OS updates',
        ],
    },
    {
        title: 'Security and Compliance',
        points: [
            'Vulnerability scanning and patch management',
            'Compliance reporting for regulatory requirements',
            'Secure update channels with integrity verification',
        ],
    },
];

const benefits = [
    'Increased operational efficiency through unified management',
    'Enhanced security posture with timely vulnerability patching',
    'Reduced downtime and improved system stability',
    'Simplified compliance management and reporting',
    'Cost savings through automated and optimized update processes',
    'Improved performance with latest firmware and OS optimizations',
    'Future-proofing of infrastructure with continuous updates',
];

const processSteps = [
    'Initial fleet assessment and inventory',
    'Establishment of baseline firmware and OS versions',
    'Development of customized update strategy',
    'Automated scanning for available updates',
    'Staged deployment of updates across the fleet',
    'Post-update testing and verification',
    'Continuous monitoring and reporting',
];

const FirmwareOSManagement = () => {
    return (
        <article className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Firmware and OS Management</h1>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Unified Fleet Management for Modern Data Centers</h2>
                <p className="mb-4">
                    In today's rapidly evolving technological landscape, maintaining an up-to-date and secure firmware and
                    operating system environment is crucial for optimal data center performance. CentralAxis offers a
                    comprehensive solution for managing firmware and OS across your entire data center fleet, including NIC
                    agents and other critical components.
                </p>
                <p className="mb-4">
                    Our advanced management platform ensures that your entire infrastructure remains unified, secure, and
                    operating at peak efficiency, reducing downtime and enhancing overall performance.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Key Features of Our Firmware and OS Management Solution
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {featureCards.map((card, index) => (
                        <div key={index} className="bg-background/80 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {card.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Benefits of CentralAxis Firmware and OS Management
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Firmware and OS Management Process</h2>
                <ol className="list-decimal pl-5 mt-4 space-y-2">
                    {processSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </section>

            <section className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-background/80 opacity-80"></div>
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">
                        Optimize Your Data Center's Firmware and OS Management
                    </h2>
                    <p className="mb-4">
                        Ready to streamline your firmware and OS management processes? Let our experts show you how to maintain a
                        unified, secure, and high-performing data center fleet.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                                Schedule a Firmware Management Consultation
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default FirmwareOSManagement;
