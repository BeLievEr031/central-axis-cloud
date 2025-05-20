const DataCenterPlanning = () => {
    return (
        <article className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Data Center Planning</h1>

            <section className="mb-12 relative">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
                        autoPlay
                        loop
                        playsInline
                    >
                        <source src="https://www.centralaxis.com/Video3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                    CentralAxis Data Center Planning in action
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Advanced Planning Solutions</h2>
                <p className="mb-4">
                    CentralAxis offers state-of-the-art planning solutions for your data center, providing
                    interactive rack selection and real-time updates on power and infrastructure requirements to
                    optimize layout, capacity, and efficiency.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Key Planning Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-background/80 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Interactive Rack Selection</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Visual 3D modeling of data center layout</li>
                            <li>Drag-and-drop rack placement and configuration</li>
                            <li>Real-time updates on space utilization</li>
                        </ul>
                    </div>

                    <div className="bg-background/80 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Power Requirement Analysis</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Instant power consumption estimates based on rack selection</li>
                            <li>Power distribution planning and optimization</li>
                            <li>Capacity planning for UPS and backup systems</li>
                        </ul>
                    </div>

                    <div className="bg-background/80 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Cooling Infrastructure Planning</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Heat load calculations based on selected equipment</li>
                            <li>Cooling system recommendations and sizing</li>
                            <li>Airflow modeling and optimization</li>
                        </ul>
                    </div>

                    <div className="bg-background/80 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Network Infrastructure Planning</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Automated cable length calculations and routing</li>
                            <li>Network topology visualization and optimization</li>
                            <li>Bandwidth requirement forecasting</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Benefits of CentralAxis Planning</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Optimized space utilization and capacity planning</li>
                    <li>Reduced time and cost in data center design and deployment</li>
                    <li>Improved energy efficiency through precise infrastructure sizing</li>
                    <li>Future-proofing through scalable design and growth forecasting</li>
                    <li>Risk mitigation through comprehensive infrastructure analysis</li>
                </ul>
            </section>

            <section className="relative overflow-hidden rounded-lg">
                <video
                    autoPlay
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://www.centralaxis.com/background.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 opacity-80"></div>
                <div className="relative z-10 p-6 text-white">
                    <h2 className="text-2xl font-semibold mb-4">
                        Plan Your Ideal Data Center with CentralAxis
                    </h2>
                    <p className="mb-4">
                        Experience the power of CentralAxis's advanced planning solutions. Our team of experts is
                        ready to help you design and optimize your data center for maximum efficiency and scalability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
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
};

export default DataCenterPlanning;
