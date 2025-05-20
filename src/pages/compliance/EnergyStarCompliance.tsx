import CAEnergyStartsImg from "../../assets/CA_EnergyStarts.webp"
import BackgroundVdo from "../../assets/background.webm"
const EnergyStarCompliance = () => {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Energy Star Compliance for Data Centers</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">What is Energy Star for Data Centers?</h2>
        <p className="mb-4">
          Energy Star is a voluntary program established by the U.S. Environmental Protection Agency (EPA) that promotes energy efficiency. The Energy Star certification for data centers recognizes top-performing facilities that demonstrate superior energy performance.
        </p>
        <p>
          This certification helps data centers reduce energy consumption, lower operating costs, and minimize their environmental impact.
        </p>
      </section>

      <section className="mb-8 flex w-full items-center justify-center">
        <img
          alt="Key aspects of Energy Star certification"
          loading="lazy"
          width={800}
          height={600}
          decoding="async"
          src={CAEnergyStartsImg}
          sizes="100vw"
          style={{ color: "transparent", width: "100%", height: "auto" }}
        />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Why Energy Star Matters for Data Centers</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Energy Efficiency: Encourages adoption of best practices in energy management.</li>
          <li>Cost Savings: Lower energy consumption leads to reduced operational costs.</li>
          <li>Environmental Impact: Helps reduce greenhouse gas emissions and carbon footprint.</li>
          <li>Industry Recognition: Demonstrates leadership in energy efficiency to stakeholders.</li>
          <li>Competitive Advantage: Differentiates your facility in the market.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Energy Star Score Calculation for Data Centers</h2>
        <p className="mb-4">Energy Star uses the Power Usage Effectiveness (PUE) metric as a key component in its scoring system:</p>
        <p className="mb-4 font-semibold">PUE = Total Facility Energy / IT Equipment Energy</p>
        <p className="mb-4">Key considerations in the Energy Star certification process include:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Minimum of 12 months of energy consumption data</li>
          <li>IT energy metering at UPS output</li>
          <li>Whole building energy metering</li>
          <li>Achievement of a minimum Energy Star score of 75 out of 100</li>
          <li>Compliance with indoor environmental quality standards</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">How CentralAxis Helps with Energy Star Compliance</h2>
        <p className="mb-4">CentralAxis offers comprehensive solutions to help data centers achieve and maintain Energy Star certification:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Automated PUE calculation and tracking</li>
          <li>Real-time energy monitoring and data collection</li>
          <li>Clear visualization of energy consumption trends</li>
          <li>Customizable reporting tools for Energy Star requirements</li>
          <li>Alerting system for energy efficiency deviations</li>
          <li>Recommendations for energy optimization based on collected data</li>
          <li>Support for Energy Star application and documentation process</li>
        </ul>
      </section>

      <section className="relative overflow-hidden rounded-lg">
        <video
          autoPlay
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src={BackgroundVdo}
            type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 p-6 text-white">
          <h2 className="mb-4 text-2xl font-semibold">Achieve Energy Star Certification with CentralAxis</h2>
          <p className="mb-4">
            Ready to improve your data center's energy efficiency and earn Energy Star certification? Let CentralAxis guide you through the process and help you optimize your energy performance.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded border bg-black px-6 py-2 text-white transition-colors hover:bg-blue-50">
                Schedule a Consultation
              </button>
            </a>
            <a href="mailto:info@centralaxis.co">
              <button className="rounded border bg-white px-6 py-2 text-black transition-colors hover:bg-blue-50">
                Request Energy Star Guide
              </button>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default EnergyStarCompliance;
