interface Prop {
    item: {
        poster_url?: string;
        video_url: string;
        title: string;
        description: string;
        features: string[];
    }
}
function FeatureHighlight({ item }: Prop) {
    return (
        <article className="bg-surface-secondary dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
                <div
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 'var(--radius)',
                        display: 'block',
                        height: '100%',
                        width: '100%',
                        aspectRatio: '16 / 9',
                        inset: '0px',
                    }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={item.poster_url ? "https://www.centralaxis.com/posters/monitoring.png" : ""}
                        style={{
                            aspectRatio: '16 / 9',
                            height: '100%',
                            width: '100%',
                            position: 'absolute',
                            border: 'none',
                            objectFit: 'contain',
                            borderRadius: 'var(--radius)',
                        }}
                    >
                        <source src={item.video_url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
                <div className="flex flex-col items-start gap-2">
                    <h5 className=" text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                        {item.title}
                    </h5>
                    <p className="text-text-secondary dark:text-dark-text-secondary font-normal md:text-lg">
                        {item.description}
                    </p>
                </div>
                <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                    {item.features.map((item, index) => (
                        <li
                            key={index}
                            className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal"
                        >
                            <span
                                className="bg-surface-tertiary dark:bg-dark-surface-tertiary flex size-6 items-center justify-center rounded-full"
                                style={{ minWidth: '1.5rem' }}
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-text-tertiary dark:text-dark-text-tertiary"
                                >
                                    <path
                                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default FeatureHighlight