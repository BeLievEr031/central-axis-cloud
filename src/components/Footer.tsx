import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-border px-12">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <img
                        src="https://www.centralaxis.com/logo_white_icon_only.png"
                        alt="Logo"
                        width={36}
                        height={36}
                        loading="lazy"
                        style={{ color: "transparent" }}
                    />
                    <p className="text-center text-sm leading-loose md:text-left">
                        Copyright © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};
