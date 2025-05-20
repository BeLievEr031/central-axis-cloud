
const videoBaseUrl = "https://centralaxis.com"; // Replace with your actual domain

const smartAlertFeatures = [
    {
        title: "Predictive Failure Models",
        points: [
            "Analyzes patterns to detect early signs of failure",
            "Monitors sensors, power, environment, and asset behavior",
            "Supports proactive maintenance workflows",
        ],
    },
    {
        title: "Smart Alert Filtering",
        points: [
            "Reduces false alarms and alert storms",
            "Correlates events to avoid duplicates",
            "Escalates only high-risk, confirmed issues",
        ],
    },
    {
        title: "Root Cause Correlation",
        points: [
            "Links alerts to physical, network, and power dependencies",
            "Heatmap-based fault tracing and impact zones",
            "Drives faster incident resolution",
        ],
    },
    {
        title: "Ticketing Integration",
        points: [
            "Auto-create tickets in ServiceNow, Jira, Zendesk, and more",
            "Bi-directional sync for ticket status and updates",
            "Custom routing rules by site, team, or asset type",
        ],
    },
    {
        title: "Real-Time Dashboards",
        points: [
            "Live view of all active and predicted incidents",
            "Group alerts by location, severity, or asset class",
            "Enable operations to act before failures occur",
        ],
    },
    {
        title: "Custom Alert Policies",
        points: [
            "Set thresholds based on asset, site, or risk profile",
            "Integrate business logic into alert rules",
            "Enable silent alerts for observability without noise",
        ],
    },
];

const SmartAlerting = () => (
    <article className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold text-center">
            Predictive Failure Detection & Smart Alerting
        </h1>

        <section className="relative mb-16 overflow-hidden rounded-lg">
            <video
                autoPlay
                loop
                playsInline
                className="w-full h-auto object-cover rounded-lg shadow-lg"
            >
                <source src={`${videoBaseUrl}/landing/alerts.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>

        <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl font-semibold">Real Issues. Zero Noise.</h2>
            <p className="text-lg leading-relaxed">
                CentralAxis monitors your infrastructure for both real-time failures and early warning signals. Our intelligent alerting engine filters out the noise, prioritizes true risk, and integrates with the tools your team already uses — like ServiceNow, Jira, and more.
            </p>
        </section>

        <section className="mb-12">
            <h2 className="mb-6 text-3xl font-semibold text-center">
                What Makes CentralAxis Different
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {smartAlertFeatures.map(({ title, points }, index) => (
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
                <source src={`${videoBaseUrl}/landing/alerts.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 p-8 text-center text-white">
                <h2 className="mb-4 text-3xl font-semibold">
                    Spot Problems Early — and Solve Them Fast
                </h2>
                <p className="mb-6 text-lg">
                    CentralAxis gives you predictive intelligence and alerting that makes sense — not noise. Empower your ops teams to focus on what matters most.
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

export default SmartAlerting;
