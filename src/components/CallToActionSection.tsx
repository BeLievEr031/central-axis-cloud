import React from "react";
import { CallToActionCard } from "./ui/CallToActionCard";

export const CallToActionSection: React.FC = () => {
    return (
        <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
            <CallToActionCard
                title="We've Built the Future of Data Centers"
                description="Contact our team for a demo"
                primaryLink={{
                    href: "https://calendly.com/margarita-centralaxis/30min",
                    label: "Set Up a Time",
                }}
                secondaryLink={{
                    href: "/learn-more",
                    label: "Learn More",
                }}
            />
        </section>
    );
};
