
const discoveryFeatures = [
    {
        title: "Zero-Touch Asset Detection",
        points: [
            "Instant detection of new servers, network gear, PDUs, and more",
            "No agent install or manual scanning required",
            "Captures model, location, and serial details automatically",
        ],
    },
    {
        title: "AI-Powered Classification",
        points: [
            "Auto-fills manufacturer, model, and specs using AI inference",
            "Cross-references public databases and internal lookup tables",
            "Normalizes naming and metadata for consistency",
        ],
    },
    {
        title: "Dynamic Port & Cable Mapping",
        points: [
            "Detects plugged/unplugged ports in real time",
            "Tracks cable path changes across racks and panels",
            "Maintains accurate live connection topology",
        ],
    },
    {
        title: "Change Detection & Auto-Updates",
        points: [
            "Captures infrastructure changes as they happen",
            "No manual audits or reconciliations needed",
            "Alert or log any unexpected changes in assets or cabling",
        ],
    },
    {
        title: "Bulk Import Friendly",
        points: [
            "Ingests spreadsheets, exports, or CMDB data",
            "Enriches incomplete records automatically",
            "Supports custom mapping rules and field merging",
        ],
    },
    {
        title: "Audit-Ready Accuracy",
        points: [
            "Complete history of discovery events",
            "Track who/what/when of every asset and change",
            "Ensure compliance with confidence",
        ],
    },
];

const AutomatedDiscovery = () => (
    <article className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold text-center">
            AI-Powered Automated Discovery
        </h1>

        <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl font-semibold">
                Discover, Classify, and Sync — Automatically
            </h2>
            <p className="text-lg leading-relaxed">
                CentralAxis dramatically reduces the time and effort needed to manage your data center inventory. With AI-powered automated discovery, new assets are detected the moment they come online, classified with accurate metadata, and integrated seamlessly into your DCIM — no spreadsheets or manual entry required.
            </p>
        </section>

        <section className="mb-12">
            <h2 className="mb-6 text-3xl font-semibold text-center">
                Built to Save Hours — and Prevent Errors
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {discoveryFeatures.map(({ title, points }, idx) => (
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

        <section className="text-white text-center rounded-lg py-16 px-8 mt-16">
            <h2 className="mb-4 text-3xl font-semibold">
                Spend Less Time Managing — and More Time Optimizing
            </h2>
            <p className="mb-6 text-lg max-w-2xl mx-auto">
                With automated discovery from CentralAxis, you can eliminate hours of manual effort, reduce errors, and maintain real-time visibility across your infrastructure.
            </p>
            <a
                href="https://calendly.com/margarita-centralaxis/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
            >
                <button className="rounded bg-white px-8 py-3 text-black transition-colors hover:bg-gray-100">
                    Schedule a Demo
                </button>
            </a>
        </section>
    </article>
);

export default AutomatedDiscovery;
