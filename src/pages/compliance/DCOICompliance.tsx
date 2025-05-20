import ComplianceServiceImg from "../../assets/complianceServices.png"
import DCOIRequirementImg from "../../assets/DCOI_requirements.png"
import ComplianceDashboardImg from "../../assets/compliance_dashboard.png"
import BackgroundVdo from "../../assets/background.webm"

const DCOICompliance = () => (
    <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">
            Data Center Optimization Initiative (DCOI) Compliance
        </h1>

        {/* What is DCOI? */}
        <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">What is DCOI?</h2>
            <p className="mb-4">
                The Data Center Optimization Initiative (DCOI) is a United States federal
                government mandate designed to improve the efficiency and performance of
                federal data centers. Established in 2016 and updated in 2019, DCOI aims to
                optimize and consolidate data centers across federal agencies.
            </p>
            <div className="relative w-full pt-[56.25%]">
                <img
                    alt="DCOI Compliance Services"
                    src={ComplianceServiceImg}
                    className="absolute inset-0 h-full w-full object-contain"
                />
            </div>
        </section>

        {/* Key DCOI Requirements */}
        <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Key DCOI Requirements</h2>
            <p className="mb-4">DCOI mandates several key optimization metrics:</p>
            <ul className="mb-4 list-disc space-y-2 pl-5">
                <li>Virtualization: Increase virtual machine-to-server ratio</li>
                <li>Energy Metering: Install energy metering in all data centers</li>
                <li>
                    Power Usage Effectiveness (PUE): Maintain a PUE of 1.5 or lower (1.4 for
                    new data centers)
                </li>
                <li>Facility Utilization: Improve space utilization and maintain high server utilization</li>
                <li>Cloud Migration: Prioritize cloud-based solutions over on-premises infrastructure</li>
            </ul>
            <div className="relative w-full pt-[56.25%]">
                <img
                    alt="DCOI Requirements"
                    src={DCOIRequirementImg}
                    className="absolute inset-0 h-full w-full object-contain"
                />
            </div>
            <p className="mb-4 text-sm text-gray-500">
                Figure 3: Visual representation of key DCOI requirements and targets.
            </p>
        </section>

        {/* How CentralAxis Facilitates DCOI Compliance */}
        <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
                How CentralAxis Facilitates DCOI Compliance
            </h2>
            <p className="mb-4">
                CentralAxis offers a comprehensive suite of tools and features designed to
                meet and exceed DCOI requirements, helping agencies optimize their data
                center operations and achieve compliance:
            </p>

            <ul className="mb-4 list-disc space-y-4 pl-5">
                {/* Power Management */}
                <li>
                    <strong>Power Management and PUE Tracking:</strong>
                    <ul className="mt-2 list-circle pl-5 space-y-1">
                        <li>Real-time energy consumption monitoring across all data center components</li>
                        <li>Automated PUE calculation and trending</li>
                        <li>Alerts for PUE thresholds exceeding DCOI requirements (1.5 for existing, 1.4 for new data centers)</li>
                        <li>Power usage forecasting and optimization recommendations</li>
                    </ul>
                </li>

                {/* Virtualization */}
                <li>
                    <strong>Virtualization Management:</strong>
                    <ul className="mt-2 list-circle pl-5 space-y-1">
                        <li>Detailed VM-to-server ratio tracking and reporting</li>
                        <li>Automated VM allocation and load balancing to maximize efficiency</li>
                        <li>Idle VM detection and consolidation recommendations</li>
                        <li>Virtualization capacity planning tools</li>
                    </ul>
                </li>

                {/* Energy Metering */}
                <li>
                    <strong>Energy Metering and Environmental Monitoring:</strong>
                    <ul className="mt-2 list-circle pl-5 space-y-1">
                        <li>Integration with facility-wide energy metering systems</li>
                        <li>Granular energy usage breakdown by equipment type and area</li>
                        <li>Environmental sensor data correlation (temperature, humidity) with energy usage</li>
                        <li>Automated reporting on energy metering coverage and accuracy</li>
                    </ul>
                </li>

                {/* Utilization Tracking */}
                <li>
                    <strong>Utilization Rate Tracking and Optimization:</strong>
                    <ul className="mt-2 list-circle pl-5 space-y-1">
                        <li>Real-time server and storage utilization monitoring</li>
                        <li>Automated identification of underutilized resources</li>
                        <li>Capacity trending and forecasting to prevent over-provisioning</li>
                        <li>Recommendations for resource reallocation or decommissioning</li>
                    </ul>
                </li>

                {/* Cloud Migration */}
                <li>
                    <strong>Cloud Migration and Hybrid Infrastructure Management:</strong>
                    <ul className="mt-2 list-circle pl-5 space-y-1">
                        <li>Cloud readiness assessments for on-premises workloads</li>
                        <li>Cost comparison tools for on-premises vs. cloud scenarios</li>
                        <li>Automated workload migration planning and execution</li>
                        <li>Unified management interface for hybrid cloud/on-premises environments</li>
                    </ul>
                </li>

                {/* Reporting */}
                <li>
                    <strong>Compliance Reporting and Analytics:</strong>
                    <ul className="mt-2 list-circle pl-5 space-y-1">
                        <li>Automated generation of OMB-compliant DCOI reports</li>
                        <li>Customizable dashboards for real-time compliance status monitoring</li>
                        <li>Historical trend analysis for all DCOI metrics</li>
                        <li>AI-driven predictive analytics for future compliance challenges</li>
                    </ul>
                </li>

                {/* Interoperability */}
                <li>
                    <strong>Integration and Interoperability:</strong>
                    <ul className="mt-2 list-circle pl-5 space-y-1">
                        <li>Seamless integration with existing government IT management systems</li>
                        <li>Support for standard data exchange formats and APIs</li>
                        <li>Compatibility with major hardware vendors and cloud service providers</li>
                        <li>Scalable architecture to accommodate agencies of all sizes</li>
                    </ul>
                </li>
            </ul>

            <div className="relative w-full pt-[56.25%]">
                <img
                    alt="DCOI Compliance Dashboard"
                    src={ComplianceDashboardImg}
                    className="absolute inset-0 h-full w-full object-contain"
                />
            </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden rounded-lg mt-16">
            <video
                autoPlay
                loop
                playsInline
                muted
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src={BackgroundVdo} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative z-10 p-6 text-white">
                <h2 className="mb-4 text-2xl font-semibold">
                    Achieve DCOI Compliance with CentralAxis
                </h2>
                <p className="mb-4">
                    Ready to optimize your government data center and meet DCOI
                    requirements? Let CentralAxis guide you through the compliance process
                    and help you maintain optimal performance.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                        href="https://calendly.com/margarita-centralaxis/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600">
                            Schedule a Consultation
                        </button>
                    </a>
                    <a href="mailto:info@centralaxis.co">
                        <button className="rounded border border-blue-500 bg-white px-6 py-2 text-blue-500 transition-colors hover:bg-blue-50">
                            Request DCOI Compliance Guide
                        </button>
                    </a>
                </div>
            </div>
        </section>
    </article>
);

export default DCOICompliance;
