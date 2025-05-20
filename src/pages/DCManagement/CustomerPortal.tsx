
const colocationFeatures = [
    {
        title: 'Live Power Monitoring',
        points: [
            'Real-time visibility into power usage and trends',
            'Branch circuit monitoring and alerts',
            'Usage summaries by cabinet or service ID',
        ],
    },
    {
        title: 'Access Control',
        points: [
            'Request and schedule access to the facility',
            'Manage authorized users per customer site',
            'Track access logs and approvals in one place',
        ],
    },
    {
        title: 'Order & Service Cart',
        points: [
            'Request new IP addresses or VLANs',
            'Order smart hands, hardware, or installs',
            'Track order history and status updates',
        ],
    },
    {
        title: 'Invoice History',
        points: [
            'View billing history and itemized charges',
            'Export invoices for reconciliation',
            'Optional integration with billing platforms',
        ],
    },
    {
        title: 'White-Labeled Experience',
        points: [
            'Custom branding and customer-specific views',
            'Modular layout based on service entitlements',
            'Multi-tenant secure architecture',
        ],
    },
    {
        title: 'Built-In with CentralAxis',
        points: [
            'No bolt-ons or separate systems needed',
            'Leverages existing DCIM data and logic',
            'Rapid deployment and customer onboarding',
        ],
    },
];

const CustomerPortal = () => {
    return (
        <article className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="mb-8 text-4xl font-bold text-center">Colocation Customer Portal</h1>

            <section className="relative mb-16 overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                >
                    <source
                        src="https://centralaxis.com/landing/colocation-video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </section>

            <section className="mb-16 text-center max-w-3xl mx-auto">
                <h2 className="mb-4 text-2xl font-semibold">
                    What if your colocation customers had real-time insight — and real control?
                </h2>
                <p className="text-lg leading-relaxed">
                    CentralAxis gives you a fully integrated, white-labeled customer portal that connects directly to your DCIM
                    data. Let customers view power usage, manage access, submit orders, and track historical invoices — all in one
                    unified interface.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="mb-6 text-3xl font-semibold text-center">Key Features for Your Colocation Clients</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {colocationFeatures.map((feature, index) => (
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
                <video
                    autoPlay
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source
                        src="https://centralaxis.com/landing/colocation-video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 p-8 text-center text-white">
                    <h2 className="mb-4 text-3xl font-semibold">
                        Give Your Colocation Customers the Experience They Deserve
                    </h2>
                    <p className="mb-6 text-lg">
                        With CentralAxis, you can offer a modern, data-rich portal as a built-in part of your colocation service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="rounded bg-white px-8 py-3 text-black transition-colors hover:bg-gray-100 w-full sm:w-auto">
                                Schedule a Demo
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default CustomerPortal;
