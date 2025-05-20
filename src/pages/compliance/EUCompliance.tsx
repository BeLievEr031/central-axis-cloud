import React from "react";
import BackgroundVdo from "../../assets/background.webm"

const EUCompliance: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Heading */}
            <h1 className="text-3xl font-bold mb-6">
                EU Data Centre Regulation 2023/1791 Compliance
            </h1>

            {/* Intro Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    Understanding the EU Data Centre Directive
                </h2>
                <p className="mb-4">
                    The EU Directive 2023/1791 introduces comprehensive reporting
                    requirements for data centres across the European Union, focusing on
                    transparency, energy efficiency, and sustainability of digital
                    infrastructure.
                </p>
                <p>
                    This landmark regulation mandates detailed reporting on energy
                    consumption, technical capabilities, and environmental impact for data
                    centres.
                </p>
            </section>

            {/* Grid of 3 Feature Cards */}
            <section className="mb-8">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Reporting Requirements */}
                    <div className="border rounded-lg p-4 shadow-sm">
                        <h2 className="text-xl font-semibold mb-3">Reporting Requirements</h2>
                        <ul className="space-y-2 text-sm">
                            <li>• Installed IT Power Demand</li>
                            <li>• Total Energy Consumption</li>
                            <li>• Water Usage Effectiveness</li>
                            <li>• Renewable Energy Consumption</li>
                            <li>• Server and Storage Capacity</li>
                            <li>• Data Traffic Volumes</li>
                            <li>• Waste Heat Reuse</li>
                        </ul>
                    </div>

                    {/* Sustainability Indicators */}
                    <div className="border rounded-lg p-4 shadow-sm">
                        <h2 className="text-xl font-semibold mb-3">Sustainability Indicators</h2>
                        <ul className="space-y-2 text-sm">
                            <li>• Power Usage Effectiveness (PUE)</li>
                            <li>• Water Usage Effectiveness (WUE)</li>
                            <li>• Energy Reuse Factor (ERF)</li>
                            <li>• Renewable Energy Factor (REF)</li>
                            <li className="text-gray-400 italic">Measures efficiency and impact</li>
                        </ul>
                    </div>

                    {/* CentralAxis Solutions */}
                    <div className="border rounded-lg p-4 shadow-sm">
                        <h2 className="text-xl font-semibold mb-3">
                            CentralAxis Compliance Solutions
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>• Automated Data Collection</li>
                            <li>• Real-time Metric Tracking</li>
                            <li>• Comprehensive Reporting</li>
                            <li>• Energy Monitoring</li>
                            <li>• Renewable Integration Assessment</li>
                            <li>• Waste Heat Optimization</li>
                            <li>• Compliance Documentation</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Video CTA Section */}
            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={BackgroundVdo} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-70" />
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">
                        Navigate EU Regulation Compliance with CentralAxis
                    </h2>
                    <p className="mb-4">
                        Ready to transform regulatory complexity into a competitive
                        advantage? Let CentralAxis guide you through EU Data Centre
                        Regulation compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                                Schedule Compliance Consultation
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default EUCompliance;
