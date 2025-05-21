import PUEEampleImg from "../../assets/PUE_Example.webp"
import DCEPImg from "../../assets/DCEP.webp"
import DPPEImg from "../../assets/DPPE.webp"
import BackgroundVdo from "../../assets/background.webm"

const metrics = [
    {
        title: "Power Usage Effectiveness (PUE)",
        description:
            "Power Usage Effectiveness (PUE) is the most widely adopted metric for data center energy efficiency. Developed by The Green Grid, PUE measures the ratio of total facility energy consumption to IT equipment energy consumption. A perfect PUE score would be 1.0, indicating all power is used by IT equipment.",
        image: {
            src: PUEEampleImg,
            alt: "PUE Calculation Diagram",
        },
    },
    {
        title: "Data Center Performance per Energy (DPPE)",
        description:
            "DPPE is a comprehensive metric that evaluates data center energy efficiency through four key components:",
        bullets: [
            "IT Equipment Energy Efficiency (ITEE)",
            "IT Equipment Utilization (ITEU)",
            "Facility Energy Efficiency (FEE)",
            "Green Energy Coefficient (GEC)",
        ],
        image: {
            src: DPPEImg,
            alt: "DPPE Components Breakdown",
        },
    },
    {
        title: "Data Center Energy Productivity (DCEP)",
        description:
            "DCEP measures the useful work produced by a data center divided by the total energy consumed to produce that work. This metric provides a more nuanced view of data center efficiency by focusing on productivity rather than just power consumption.",
        sublists: [
            {
                title: "Measuring Useful Work",
                items: [
                    "Task completion metrics",
                    "Network throughput",
                    "Storage utilization",
                    "Computing cycles completed",
                ],
            },
            {
                title: "Energy Assessment",
                items: [
                    "Total facility energy consumption",
                    "Time-based energy analysis",
                    "Workload-specific energy tracking",
                    "Environmental impact considerations",
                ],
            },
        ],
        image: {
            src: DCEPImg,
            alt: "DCEP Metrics Breakdown",
        },
    },
];

const trackingFeatures = [
    {
        title: "PUE Monitoring",
        items: [
            "Real-time PUE calculation and tracking",
            "Automated alerts for PUE threshold violations",
            "Historical PUE trend analysis",
            "Cooling efficiency optimization recommendations",
        ],
    },
    {
        title: "DPPE Management",
        items: [
            "Component-level DPPE tracking",
            "Green energy usage monitoring",
            "IT equipment efficiency analysis",
            "Facility optimization suggestions",
        ],
    },
    {
        title: "DCEP Analysis",
        items: [
            "Workload productivity measurement",
            "Energy consumption correlation",
            "Performance optimization recommendations",
            "Custom DCEP reporting and analytics",
        ],
    },
];

export default function PUETracking() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Understanding Data Center Efficiency Metrics</h1>

            {metrics.map((metric, idx) => (
                <section key={idx} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{metric.title}</h2>
                    <p className="mb-4">{metric.description}</p>

                    {metric.bullets && (
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            {metric.bullets.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}

                    {metric.sublists && (
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            {metric.sublists.map((sub, i) => (
                                <li key={i}>
                                    <strong>{sub.title}:</strong>
                                    <ul className="list-circle pl-5 mt-2">
                                        {sub.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                        <img
                            src={metric.image.src}
                            alt={metric.image.alt}
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                    </div>
                </section>
            ))}

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How CentralAxis Tracks These Metrics</h2>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    {trackingFeatures.map((feature, i) => (
                        <li key={i}>
                            <strong>{feature.title}:</strong>
                            <ul className="list-circle pl-5 mt-2">
                                {feature.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={BackgroundVdo} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">Optimize Your Data Center Efficiency</h2>
                    <p className="mb-4">
                        Ready to improve your data center's efficiency metrics? Let CentralAxis help you implement
                        comprehensive monitoring and optimization strategies for PUE, DPPE, and DCEP.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://calendly.com/margarita-centralaxis/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                                Schedule a Consultation
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
}
