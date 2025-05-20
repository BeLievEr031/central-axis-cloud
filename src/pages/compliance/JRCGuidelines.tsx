import SustainabilityImg from "../../assets/sustainability.webp"
import BackgroundVdo from "../../assets/background.webm"

const JRCGuidelines = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">
                European Commission Joint Research Centre (JRC) Guidelines for Data Centers
            </h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What is the Joint Research Centre (JRC)?</h2>
                <p className="mb-4">
                    The Joint Research Centre (JRC) is the European Commission's science and knowledge service. It provides independent scientific advice and support to EU policy-making processes. In the context of data centers, the JRC has developed guidelines and best practices for energy efficiency and environmental sustainability.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">JRC's Role in Data Center Efficiency</h2>
                <p className="mb-4">
                    The JRC has been instrumental in developing the EU Code of Conduct for Data Centre Energy Efficiency. This voluntary initiative aims to inform and stimulate data center operators and owners to reduce energy consumption in a cost-effective manner without hampering the mission-critical function of data centers.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Areas of JRC Guidelines</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>IT Equipment and Services</li>
                    <li>Cooling Systems</li>
                    <li>Data Center Power Equipment</li>
                    <li>Data Center Building</li>
                    <li>Monitoring and Reporting</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Aligning with JRC Guidelines</h2>
                <div className="w-full flex items-center justify-center">
                    <img
                        alt="Benefits of adhering to JRC guidelines"
                        loading="lazy"
                        width={800}
                        height={600}
                        decoding="async"
                        src={SustainabilityImg}
                        sizes="100vw"
                        style={{ color: "transparent", width: "100%", height: "auto" }}
                    />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    Figure 1: Adhering to JRC guidelines for data centers requires understanding natural environment factors and energy efficiency measures.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">JRC Best Practices for Data Centers</h2>
                <p className="mb-4">The JRC recommends several best practices, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Implementing free cooling where possible</li>
                    <li>Optimizing air management and temperature settings</li>
                    <li>Using energy-efficient IT equipment</li>
                    <li>Implementing effective power management strategies</li>
                    <li>Regular monitoring and reporting of energy consumption</li>
                    <li>Considering renewable energy sources</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How CentralAxis Helps with JRC Compliance</h2>
                <p className="mb-4">
                    CentralAxis offers comprehensive solutions to help data centers align with JRC guidelines:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Energy consumption monitoring and analysis tools</li>
                    <li>Cooling system optimization features</li>
                    <li>Power usage effectiveness (PUE) tracking</li>
                    <li>Automated reporting aligned with JRC requirements</li>
                    <li>Recommendations for energy efficiency improvements</li>
                    <li>Integration with renewable energy systems</li>
                </ul>
            </section>

            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src={BackgroundVdo}
                        type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 opacity-70"></div>
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">Align with JRC Guidelines using CentralAxis</h2>
                    <p className="mb-4">
                        Ready to optimize your data center's energy efficiency according to European standards? Let CentralAxis help you implement JRC best practices and achieve compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://calendly.com/margarita-centralaxis/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors">
                                Schedule a Consultation
                            </button>
                        </a>
                        <a href="mailto:info@centralaxis.co">
                            <button className="bg-white text-green-500 px-6 py-2 rounded border border-green-500 hover:bg-green-50 transition-colors">
                                Request JRC Compliance Guide
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default JRCGuidelines;
