import React from "react";

type CallToActionCardProps = {
    title: string;
    description: string;
    primaryLink: {
        href: string;
        label: string;
    };
    secondaryLink: {
        href: string;
        label: string;
    };
};

export const CallToActionCard: React.FC<CallToActionCardProps> = ({
    title,
    description,
    primaryLink,
    secondaryLink,
}) => {
    return (
        <article className="bg-accent-500/10 dark:bg-accent-600/10 flex flex-col justify-center gap-9 self-stretch rounded-xl p-6 lg:flex-row lg:justify-between lg:p-10">
            <div className="flex flex-col gap-2">
                <h4 className="text-text-primary dark:text-dark-text-primary text-3xl font-medium lg:text-4xl">
                    {title}
                </h4>
                <p className="text-text-secondary dark:text-dark-text-secondary text-lg lg:text-xl">
                    {description}
                </p>
            </div>
            <div className="grid grid-cols-2 items-center gap-2 md:flex lg:flex-col">
                <a
                    href={primaryLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ring-control bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full px-3.5 text-sm font-normal outline-none outline-0 focus-visible:ring-2 md:px-5"
                >
                    {primaryLink.label}
                </a>
                <a
                    href={secondaryLink.href}
                    className="ring-control bg-surface-secondary text-text-primary dark:bg-dark-surface-secondary dark:text-dark-text-primary dark:border-dark-border hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full border border-border px-3.5 text-sm font-normal outline-none outline-0 focus-visible:ring-2 md:px-5"
                >
                    {secondaryLink.label}
                </a>
            </div>
        </article>
    );
};
