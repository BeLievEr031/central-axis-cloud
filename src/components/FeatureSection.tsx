import React from "react";
import { FeaturesList } from "./ui/FeaturesList";

export const FeatureSection: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center gap-10 py-14 lg:container md:py-[72px] lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28">
            <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
                <div className="sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10">
                    <div className="flex flex-col items-start gap-3 self-start">
                        <h3 className="bg-surface-secondary text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
                            Built for Scale
                        </h3>
                        <div className="flex max-w-[800px] flex-col items-start justify-center gap-1 self-start">
                            <h4
                                className="text-pretty text-left text-3xl font-medium md:text-4xl"
                                title="Supercharge Team Productivity"
                            >
                                Dynamic Resource Management
                            </h4>
                        </div>
                        <p className="text-text-tertiary dark:text-dark-text-tertiary max-w-screen-md text-pretty text-left text-lg font-light md:text-xl">
                            Seamlessly expand from racks to data centers. Our system grows
                            with you, automatically managing resources across your entire
                            infrastructure.
                        </p>
                    </div>
                </div>
            </div>
            <FeaturesList />
        </section>
    );
};
