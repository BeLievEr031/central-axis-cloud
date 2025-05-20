
function Customers() {
    return (
        <section className="relative flex flex-col items-center gap-10 py-14 md:py-[72px]">
            <h2 className="text-dark-text-tertiary text-center tracking-tight opacity-80">
                Seamless integrations with any data center hardware
            </h2>
            <div className="no-scrollbar flex max-w-full justify-center overflow-auto">
                <div className="logoCarousel w-full overflow-hidden relative">
                    <div
                        className="from-surface-primary dark:from-dark-surface-primary pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-transparent bg-gradient-to-r xl:hidden"
                        style={{ zIndex: 1 }}
                    />
                    <div
                        className="from-surface-primary dark:from-dark-surface-primary pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-transparent bg-gradient-to-l xl:hidden"
                        style={{ zIndex: 1 }}
                    />
                    <div className="logoTrack flex">
                        {[
                            "nvidia",
                            "amd",
                            "cisco",
                            "dell",
                            "hp",
                            "intel",
                            "lenovo",
                            "schneider",
                            "supermicro",
                            "nvidia",
                            "amd",
                            "cisco",
                            "dell",
                            "hp",
                            "intel",
                            "lenovo",
                            "schneider",
                            "supermicro",
                        ].map((logo, index) => (
                            <figure
                                key={index}
                                className="logoItem flex h-16 items-center px-2 py-3 lg:p-4"
                            >
                                <img
                                    alt={logo.charAt(0).toUpperCase() + logo.slice(1)}
                                    loading="lazy"
                                    width="50"
                                    height="50"
                                    decoding="async"
                                    className="w-24 lg:w-32 object-scale-down"
                                    src={`https://www.centralaxis.com/landing/logos/${logo}.svg`}
                                    style={{ color: "transparent" }}
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customers