
const NetworkMonitoring = () => {
  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-center">Network Monitoring</h1>

      <section className="relative mb-12">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <video
            className="absolute left-0 top-0 h-full w-full rounded-lg shadow-lg"
            autoPlay
            loop
            playsInline
          >
            <source src="https://www.centralaxis.com/landing/networking-b.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          CentralAxis Network Monitoring and Visualization Platform
        </div>
      </section>

      <section className="mb-12 text-center">
        <h2 className="mb-6 text-3xl font-semibold">Advanced Network Monitoring Solutions</h2>
        <p className="mb-4 text-lg leading-relaxed">
          CentralAxis provides comprehensive network monitoring with real-time visualization, detailed port mapping, and intelligent connection tracking. Our platform delivers deep insights into your network topology, traffic patterns, and device connectivity, enabling proactive management and optimal performance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-center">Network Monitoring Capabilities</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: 'Real-time Network Visualization',
              items: [
                'Interactive topology maps with live updates',
                'Detailed device and connection status monitoring',
                'Port-level activity tracking and analysis',
                'Bandwidth utilization heat maps',
              ],
            },
            {
              title: 'Connection Analytics',
              items: [
                'Real-time connection tracking and logging',
                'Port mapping and service discovery',
                'Protocol-level traffic analysis',
                'Historical connection pattern analysis',
              ],
            },
            {
              title: 'Performance Monitoring',
              items: [
                'Detailed latency and throughput metrics',
                'Port-level performance statistics',
                'Network bottleneck identification',
                'Custom performance threshold alerts',
              ],
            },
            {
              title: 'Advanced Diagnostics',
              items: [
                'Automated network health checks',
                'Deep packet inspection and analysis',
                'Connection quality monitoring',
                'Network path analysis tools',
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-md bg-background/80"
            >
              <h3 className="mb-4 text-xl font-semibold">{section.title}</h3>
              <ul className="list-disc space-y-3 pl-5">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-center">Monitoring Benefits</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Visibility',
              items: [
                'Complete network topology mapping',
                'Real-time connection tracking',
                'Comprehensive port monitoring',
              ],
            },
            {
              title: 'Analysis',
              items: [
                'Deep traffic pattern insights',
                'Historical trend analysis',
                'Performance bottleneck detection',
              ],
            },
            {
              title: 'Optimization',
              items: [
                'Data-driven network tuning',
                'Proactive issue detection',
                'Capacity planning insights',
              ],
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="rounded-lg p-6 bg-background/80"
            >
              <h3 className="mb-3 text-lg font-semibold">{benefit.title}</h3>
              <ul className="list-disc space-y-2 pl-5">
                {benefit.items.map((item, i) => (
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
          <source src="https://www.centralaxis.com/landing/networking-b.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-8 text-center text-white">
          <h2 className="mb-4 text-3xl font-semibold">Try It Today</h2>
          <p className="mb-6 text-lg">
            Experience comprehensive network monitoring with CentralAxis
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/margarita-centralaxis/30min"
          >
            <button className="rounded bg-white px-8 py-3 text-black transition-colors hover:bg-gray-100">
              Schedule a Chat
            </button>
          </a>
        </div>
      </section>
    </article>
  );
};

export default NetworkMonitoring;
