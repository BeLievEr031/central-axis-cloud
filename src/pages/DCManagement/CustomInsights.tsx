
const insightsFeatures = [
    {
        title: 'GPU & Memory Utilization',
        points: [
            'Track usage trends over time across servers or clusters',
            'Set alerts for thresholds and usage anomalies',
            'Support workload placement decisions with data',
        ],
    },
    {
        title: 'CPU & Compute Health',
        points: [
            'Monitor processor utilization across applications',
            'Analyze spikes and dips across days or weeks',
            'Identify underperforming or overloaded systems',
        ],
    },
    {
        title: 'PDU & UPS Utilization',
        points: [
            'Analyze load distribution across power strips',
            'Track voltage/current trends over time',
            'Detect early signs of failure or inefficiency',
        ],
    },
    {
        title: 'Custom Metrics & Sensors',
        points: [
            'Bring in any telemetry from your existing devices',
            'Build custom dashboards and analytics views',
            'Correlate environmental metrics with workload data',
        ],
    },
    {
        title: 'Correlation Heatmaps',
        points: [
            'Visualize interdependencies between metrics',
            'Detect root cause patterns across systems',
            'Power anomaly detection models and alerting',
        ],
    },
    {
        title: 'Historical Trend Analysis',
        points: [
            'Look back across weeks or months of usage data',
            'Compare performance across assets or clusters',
            'Support capacity planning and resource allocation',
        ],
    },
];

const CustomInsights = () => {
    return (
        <article className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="mb-8 text-4xl font-bold text-center">Custom Insights &amp; Analytics</h1>

            <section className="relative mb-16 overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                >
                    <source src="https://centralaxis.com/landing/insights.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            <section className="mb-16">
                <h2 className="mb-4 text-2xl font-semibold text-center">
                    Unified Visibility Across Your Infrastructure
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    CentralAxis brings together performance and operational data from all corners of your data center — compute,
                    power, and environment — into a single analytics engine. Gain insights that go beyond charts to detect
                    patterns, identify root causes, and prevent downtime.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {insightsFeatures.map((feature, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg p-6 shadow-md bg-background/80"
                        >
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
                    <source src="https://centralaxis.com/landing/insights.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 p-8 text-center text-white">
                    <h2 className="mb-4 text-3xl font-semibold">Unlock Deep Operational Intelligence</h2>
                    <p className="mb-6 text-lg">
                        CentralAxis Custom Insights empowers your team to see the whole picture, react faster, and plan smarter.
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
};

export default CustomInsights;
