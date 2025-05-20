import FeatureHighlight from "./ui/FeatureHighlight"

const features = [
    {
        "poster_url": "https://www.centralaxis.com/posters/monitoring.png",
        "video_url": "https://www.centralaxis.com/hb-monitoring.mp4",
        "title": "Advanced Monitoring",
        "description": "CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.",
        "features": [
            "Real-time performance metrics and predictive analytics",
            "Automated alerts and intelligent incident response",
            "Comprehensive reporting and trend analysis"
        ]
    },
    {
        "poster_url": "https://www.centralaxis.com/posters/networking.png",
        "video_url": "https://www.centralaxis.com/landing/networking-b.mp4",
        "title": "Network Management and Monitoring",
        "description": "Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.",
        "features": [
            "Real-time network performance monitoring and bandwidth optimization",
            "Automated network security and threat detection",
            "Advanced network diagnostics and troubleshooting tools"
        ]
    },
    {
        "video_url": "https://www.centralaxis.com/landing/asset-management-b.mp4",
        "title": "Asset Management",
        "description": "Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.",
        "features": [
            "Automated inventory tracking and lifecycle management",
            "Intelligent ticketing based on asset health and performance",
            "Efficient resource allocation and optimization"
        ]
    },
    {
        "video_url": "https://www.centralaxis.com/landing/SinglePane-b.mp4",
        "title": "A Single Pane of Glass",
        "description": "A unified view across all of your BMS and EPMS systems, tailored to your needs.",
        "features": [
            "Comprehensive visibility across all of your colocation infrastructure",
            "Customizable interface tailored to your specific operational requirements and priorities.",
            "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management."
        ]
    },
    {
        "video_url": "https://www.centralaxis.com/landing/__compliance.mp4",
        "title": "Built-In Compliance",
        "description": "CentralAxis provides compliance as a service for data centers.",
        "features": [
            "Track data for EU, US, and global regulatory standards.",
            "We guarantee compliance and handle every step between monitoring and reporting."
        ]
    },
    {
        "video_url": "https://www.centralaxis.com/landing/dc-planning.mp4",
        "title": "Data Center Planning",
        "description": "Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.",
        "features": [
            "Model new architectures and see detailed implications on power and cooling needs.",
            "Design unique specifications for your data center.",
            "Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability."
        ]
    }


]
function SolutionsOverview() {
    return (
        <section
            className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]"
        >
            <div className="flex flex-col items-center gap-3 self-center">
                <h3 className="bg-surface-secondary text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
                    Built for AI
                </h3>
                <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
                    <h4 className="text-pretty text-center text-3xl font-medium md:text-4xl">
                        Modernizing the Digital Backbone
                    </h4>
                </div>
                <p className="text-text-tertiary dark:text-dark-text-tertiary max-w-screen-md text-pretty text-center text-lg font-light md:text-xl">
                    Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.
                </p>
            </div>
            <div className="flex flex-col gap-6">
                {
                    features.map((item, index) => {
                        return <FeatureHighlight item={item} key={index} />
                    })
                }
            </div>
        </section>
    )
}

export default SolutionsOverview 