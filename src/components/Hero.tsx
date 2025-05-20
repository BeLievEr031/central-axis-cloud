function Hero() {
    return (
        <section
            className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10 text-white"
            style={{ minHeight: `calc(630px - var(--header-height))` }}
        >
            <div
                className="dark:border-dark-border absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border"
            >
                <div className="col-span-1 flex h-full items-center justify-center"></div>
                <div
                    className="dark:border-dark-border col-span-1 flex h-full items-center justify-center border-x border-border"
                ></div>
                <div className="col-span-1 flex h-full items-center justify-center"></div>
            </div>

            <div
                className="dark:divide-dark-border relative z-10 flex flex-col divide-y divide-red-500 pt-[35px] border-2 border-red-700"
            >
                <div>
                    <div
                        className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24 border-2 border-green-500"
                    >
                        <h1
                            className="text-text-primary dark:text-dark-text-primary max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] md:tracking-[-2.16px]"
                        >
                            Data Center Management Software
                        </h1>
                        <h2
                            className="text-md text-text-tertiary dark:text-dark-text-tertiary max-w-2xl text-pretty text-center md:text-lg"
                        >
                            Increase uptime, reduce costs, automate operations, and stay compliant.
                        </h2>
                        <h2
                            className="text-md text-text-tertiary dark:text-dark-text-tertiary max-w-2xl text-pretty text-center md:text-lg"
                        >
                            Built for colocations, data centers, and cloud providers.
                        </h2>
                    </div>
                </div>
                <div className="flex items-start justify-center px-8 sm:px-24">
                    <div
                        className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]"
                    >
                        <a
                            className="ring-control bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 flex inline-flex !h-14 h-8 w-full shrink-0 flex-col items-center justify-center gap-1 px-3.5 !text-base text-sm font-normal outline-none focus-visible:ring-2 md:px-5"
                            href="https://calendly.com/margarita-centralaxis/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Request Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero