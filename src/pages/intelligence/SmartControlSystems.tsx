
const videoBaseUrl = "https://centralaxis.com"; // Replace with your actual base domain

const controlCapabilities = [
    {
        title: "Remote Power Control",
        points: [
            "Power cycle servers and racks remotely",
            "Integrate with smart PDUs and UPS systems",
            "Enforce safety protocols and approval workflows",
        ],
    },
    {
        title: "Environmental Automation",
        points: [
            "Automate cooling adjustments based on sensor data",
            "Link temperature/humidity changes to control actions",
            "Improve efficiency while avoiding human error",
        ],
    },
    {
        title: "Access & Entry Management",
        points: [
            "Control badge access by schedule, role, or request",
            "Digitally authorize visitors and on-site work",
            "Integrates with facility security systems",
        ],
    },
    {
        title: "Policy-Based Workflows",
        points: [
            "Automate tasks based on thresholds or ticket status",
            "Trigger control actions from ITSM or CMDB events",
            "Audit every control action with logs and approvals",
        ],
    },
    {
        title: "Integration with Smart Hands",
        points: [
            "Assign tasks to on-site teams from the control portal",
            "Link control actions to change tickets or service orders",
            "Track and verify execution in real time",
        ],
    },
    {
        title: "Secure Control Infrastructure",
        points: [
            "Encrypted, role-based access to all control features",
            "Multi-factor control approval for sensitive operations",
            "Detailed audit trail for compliance and accountability",
        ],
    },
];

const SmartControlSystems = () => (
    <article className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold text-center">
            Smart Control Systems for Modern Data Centers
        </h1>

        <section className="relative mb-16 overflow-hidden rounded-lg">
            <video
                autoPlay
                loop
                playsInline
                className="w-full h-auto object-cover rounded-lg shadow-lg"
            >
                <source src={`${videoBaseUrl}/landing/controls.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>

        <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl font-semibold">Take Control — From Anywhere</h2>
            <p className="text-lg leading-relaxed">
                With CentralAxis Smart Control Systems, you get full command over key infrastructure components — remotely, securely, and intelligently. From power cycling and access control to environmental automation and service requests, every control is built to reduce response times and operational overhead.
            </p>
        </section>

        <section className="mb-12">
            <h2 className="mb-6 text-3xl font-semibold text-center">
                Key Smart Control Capabilities
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {controlCapabilities.map(({ title, points }, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-6 shadow-md"
                    >
                        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                        <ul className="list-disc space-y-2 pl-5">
                            {points.map((point, idx) => (
                                <li key={idx}>{point}</li>
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
                <source src={`${videoBaseUrl}/landing/controls.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 p-8 text-center text-white">
                <h2 className="mb-4 text-3xl font-semibold">
                    Control Smarter. Operate Safer.
                </h2>
                <p className="mb-6 text-lg">
                    CentralAxis brings smart control to every layer of your data center — with the precision, speed, and accountability you need to operate at scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://calendly.com/margarita-centralaxis/30min"
                        target="_blank"
                        rel="noopener noreferrer"
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

export default SmartControlSystems;
