
const videoBaseUrl = "https://centralaxis.com"; // replace with actual base URL

const digitalTwinFeatures = [
    {
        title: "3D Rack & Room Views",
        points: [
            "Full 3D replication of rooms, racks, and assets",
            "Pan, zoom, and rotate with intuitive controls",
            "Hover and click for live status and metadata",
        ],
    },
    {
        title: "Live Heat Maps",
        points: [
            "Real-time thermal overlays across aisles and racks",
            "Visualize hot spots, airflow, and cooling impact",
            "Integrates with environmental sensors",
        ],
    },
    {
        title: "Asset-Level Drilldown",
        points: [
            "Click into any asset to view live status & details",
            "Track power draw, temperature, and network links",
            "Overlay alerts, maintenance status, or tickets",
        ],
    },
    {
        title: "Real-Time Synchronization",
        points: [
            "Instantly reflects asset moves, adds, or changes",
            "No manual syncing or refresh required",
            "Backed by live DCIM data feeds",
        ],
    },
    {
        title: "Capacity & Planning Layers",
        points: [
            "View space, power, and cooling utilization",
            "Simulate placement scenarios in 3D",
            "Plan for growth with predictive overlays",
        ],
    },
    {
        title: "Custom Visualizations",
        points: [
            "Highlight custom KPIs or SLA zones",
            "Toggle layers like cabling, power, network, or alerts",
            "Filter views by team, customer, or site",
        ],
    },
];

const DigitalTwin = () => (
    <article className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold text-center">
            Real-Time Digital Twin of Your Data Center
        </h1>

        <section className="relative mb-16 overflow-hidden rounded-lg">
            <video
                autoPlay
                loop
                playsInline
                className="w-full h-auto object-cover rounded-lg shadow-lg"
            >
                <source src={`${videoBaseUrl}/landing/digital-twin.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>

        <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl font-semibold">
                A Live 3D View of Your Infrastructure
            </h2>
            <p className="text-lg leading-relaxed">
                The CentralAxis Digital Twin creates a real-time 3D replica of your data
                center, synced directly with your DCIM environment. From rack-level views
                to temperature overlays, gain full visibility, faster troubleshooting, and
                smarter planning — all in one immersive interface.
            </p>
        </section>

        <section className="mb-12">
            <h2 className="mb-6 text-3xl font-semibold text-center">
                Digital Twin Capabilities
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {digitalTwinFeatures.map(({ title, points }, idx) => (
                    <div
                        key={idx}
                        className="rounded-lg p-6 shadow-md"
                    >
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

        <section className="relative overflow-hidden rounded-lg">
            <video
                autoPlay
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src={`${videoBaseUrl}/landing/digital-twin.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 p-8 text-center text-white">
                <h2 className="mb-4 text-3xl font-semibold">
                    Experience Your Data Center Like Never Before
                </h2>
                <p className="mb-6 text-lg">
                    Bring your operations to life with a true digital twin that shows
                    everything in real time — and in 3D.
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

export default DigitalTwin;
