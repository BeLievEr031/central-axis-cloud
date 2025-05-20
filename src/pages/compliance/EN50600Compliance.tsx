import React from "react";
import EN50600Img from "../../assets/EN-50600.png"
import BackgroundVdo from "../../assets/background.webm"

const EN50600Compliance: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-6">
                EN 50600 Compliance for Data Centers
            </h1>

            {/* Introduction Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    What is EN 50600 for Data Centers?
                </h2>
                <p className="mb-4">
                    EN 50600 is a comprehensive European standard series that provides detailed
                    requirements and recommendations for data center facilities and infrastructures.
                    This internationally recognized standard enables a modular approach to data
                    center design, operation, and efficiency.
                </p>
                <p>
                    The standard allows organizations to classify different aspects of their data
                    center independently, providing greater flexibility and precision in facility
                    assessment.
                </p>
            </section>

            {/* Image Section */}
            <section className="mb-8">
                <div className="w-full flex items-center justify-center">

                    <img
                        src={EN50600Img}
                        alt="Key aspects of EN 50600 classification"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>
            </section>

            {/* Importance Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    Why EN 50600 Matters for Data Centers
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Flexibility: Independent classification of different infrastructure components.</li>
                    <li>International Recognition: Widely accepted standard, especially in European markets.</li>
                    <li>Comprehensive Coverage: Addresses all critical facility infrastructure elements.</li>
                    <li>Risk Management: Structured approach to availability and security requirements.</li>
                    <li>Cost Optimization: Ability to target investments where they matter most.</li>
                </ul>
            </section>

            {/* Classification System Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    EN 50600 Classification System
                </h2>
                <p className="mb-4">
                    EN 50600 uses a class-based system (1-4) for different facility aspects:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Power Distribution Systems (Class 1-4)</li>
                    <li>Environmental Control Systems (Class 1-4)</li>
                    <li>Telecommunications Cabling Infrastructure (Class 1-4)</li>
                    <li>Physical Security Systems (Class 1-4)</li>
                    <li>Data Center Management and Operation (Class 1-4)</li>
                </ul>
                <p className="mt-4">
                    Each class represents increasing levels of availability and functionality,
                    allowing facilities to optimize their infrastructure based on specific business
                    needs.
                </p>
            </section>

            {/* CentralAxis Solutions Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    How CentralAxis Helps with EN 50600 Compliance
                </h2>
                <p className="mb-4">
                    CentralAxis offers comprehensive solutions to help data centers achieve and
                    maintain EN 50600 compliance:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Component-level monitoring and classification assessment</li>
                    <li>Real-time tracking of availability metrics for all infrastructure systems</li>
                    <li>Customizable dashboards for different EN 50600 components</li>
                    <li>Gap analysis tools for achieving desired classification levels</li>
                    <li>Performance monitoring and optimization recommendations</li>
                    <li>Documentation support for certification process</li>
                    <li>Regular compliance checks and reporting</li>
                </ul>
            </section>

            {/* Video CTA Section */}
            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={BackgroundVdo} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-70" />
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">
                        Achieve EN 50600 Compliance with CentralAxis
                    </h2>
                    <p className="mb-4">
                        Ready to enhance your data center's infrastructure and achieve EN 50600
                        compliance? Let CentralAxis guide you through the classification process and
                        help you optimize your facility performance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
                        >
                            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                                Get certified now
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default EN50600Compliance;
