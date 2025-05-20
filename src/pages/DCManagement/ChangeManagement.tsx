
const ChangeManagement = () => {
    return (
        <article className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="mb-8 text-4xl font-bold text-center">Intelligent Change Management</h1>

            <section className="mb-16 p-8 rounded-lg bg-background/80">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="relative w-full" style={{ paddingTop: '75%' }}>
                        <video
                            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover shadow-lg"
                            autoPlay
                            loop
                            playsInline
                        >
                            <source src="https://www.centralaxis.com/landing/change-management.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold">Change Made Easy</h2>
                        <p className="mb-6 text-lg leading-relaxed">
                            CentralAxis simplifies change management with a built-in work order system that seamlessly guides tasks from creation to completion. Empower your data center team with automated workflows, smart routing, and complete visibility.
                        </p>
                        <ul className="list-disc space-y-3 pl-5 text-lg">
                            <li>Streamlined request-to-complete change process</li>
                            <li>Integrated work order creation, approval &amp; fulfillment</li>
                            <li>Minimized swivel-chair management and inbox chaos</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="mb-6 text-3xl font-semibold text-center">Visual, Accurate Work Orders</h2>
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div>
                        <p className="mb-4 text-lg leading-relaxed">
                            Deliver clarity to every team member with visual work orders that contain everything needed to get the job done right—on time and the first time.
                        </p>
                        <ul className="list-disc space-y-3 pl-5 text-lg">
                            <li>Visual rack elevations and diagrams included</li>
                            <li>Smart routing to appropriate teams based on task type</li>
                            <li>Complete, accurate working instructions pre-filled</li>
                            <li>Work quality ensured through standardized templates</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img
                            src="https://www.centralaxis.com/landing/change-request.png"
                            alt="Visual work order example"
                            className="rounded-lg w-full"
                        />
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold text-center">Monitor, Manage &amp; Report Across Systems</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: 'Unified Change Oversight',
                            items: [
                                'Real-time status tracking of all open change requests',
                                'Central dashboard for managing work across sites',
                                'Audit trail of changes with detailed timestamps',
                            ],
                        },
                        {
                            title: 'ITSM & CMDB Sync',
                            items: [
                                'Consolidated data shared between DC & IT CMDBs',
                                'Eliminate manual entry with bidirectional syncing',
                                'Supports standard and custom field mappings',
                            ],
                        },
                        {
                            title: 'Data Accuracy & Visibility',
                            items: [
                                'Ensure all stakeholders see the same data',
                                'Improve decision-making with consistent updates',
                                'Reduce errors with automated verification processes',
                            ],
                        },
                    ].map((card, idx) => (
                        <div key={idx} className="rounded-lg bg-gray-100 p-6 shadow-md bg-background/80">
                            <h3 className="mb-3 text-xl font-semibold">{card.title}</h3>
                            <ul className="list-disc space-y-2 pl-5">
                                {card.items.map((item, i) => (
                                    <li key={i}>{item}</li>
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
                    <source src="https://www.centralaxis.com/landing/change-management.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 p-8 text-center text-white">
                    <h2 className="mb-4 text-3xl font-semibold">Optimize Your Change Management Workflow</h2>
                    <p className="mb-6 text-lg">
                        Empower your data center operations team with intelligent, integrated change workflows.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendly.com/margarita-centralaxis/30min"
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

export default ChangeManagement;
