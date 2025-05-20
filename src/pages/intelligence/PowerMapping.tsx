
const videoBaseUrl = "https://centralaxis.com"; // Replace with actual base URL

const powerMappingFeatures = [
    {
        title: "Upstream-to-Downstream Tracing",
        points: [
            "Map power flow from utility feed to rack level",
            "Track dependencies across UPS, panels, circuits, and PDUs",
            "Visualize chain of impact during outages or anomalies",
        ],
    },
    {
        title: "Live Circuit & PDU Monitoring",
        points: [
            "Track voltage, current, and power draw in real time",
            "Set alerts for load thresholds or fluctuations",
            "Support preventative maintenance with trend data",
        ],
    },
    {
        title: "Busway & Panel Board Visualization",
        points: [
            "View connection points across horizontal and vertical paths",
            "Identify unused breakers or capacity bottlenecks",
            "Supports legacy and modern power systems",
        ],
    },
    {
        title: "Impact Analysis & Fault Mapping",
        points: [
            "Quickly trace which racks are affected by an upstream failure",
            "Visual alerts for any cascading effects",
            "Supports rapid incident resolution workflows",
        ],
    },
    {
        title: "Energy Optimization Insights",
        points: [
            "Identify underutilized circuits and power zones",
            "Balance loads and optimize distribution efficiency",
            "Drive sustainability and cost-reduction goals",
        ],
    },
    {
        title: "Dynamic Power Dashboards",
        points: [
            "Real-time views of power draw by zone, room, or rack",
            "Custom KPI panels for energy, redundancy, and alerts",
            "Supports export, API, and role-based access",
        ],
    },
];

const PowerMapping = () => (
    <article className="mx-auto max-w-6xl px-4 py-8 text-white">
        <h1 className="mb-8 text-4xl font-bold text-center">
            End-to-End Power Mapping & Optimization
        </h1>

        <section className="relative mb-16 overflow-hidden rounded-lg">
            <video
                autoPlay
                loop
                playsInline
                className="w-full h-auto object-cover rounded-lg shadow-lg"
            >
                <source src={`${videoBaseUrl}/landing/power-mapping.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>

        <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl font-semibold">
                Complete Visibility from Source to Rack
            </h2>
            <p className="text-lg leading-relaxed">
                CentralAxis gives you full-stack insight into power distribution — from
                transformers and UPS systems to busways, branch circuits, PDUs, and
                individual racks. Visualize your power infrastructure, track real-time
                utilization, and quickly identify the impact of upstream issues.
            </p>
        </section>

        <section className="mb-12">
            <h2 className="mb-6 text-3xl font-semibold text-center">
                Key Capabilities of Power Mapping
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {powerMappingFeatures.map(({ title, points }, index) => (
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
                <source src={`${videoBaseUrl}/landing/power-mapping.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 p-8 text-center text-white">
                <h2 className="mb-4 text-3xl font-semibold">
                    Map, Monitor, and Optimize Your Power Infrastructure
                </h2>
                <p className="mb-6 text-lg">
                    CentralAxis brings power data to life — so you can prevent issues,
                    maximize uptime, and run a smarter data center.
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

export default PowerMapping;
