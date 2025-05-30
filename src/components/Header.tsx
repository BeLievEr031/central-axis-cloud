import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className="sticky top-0 z-[9999999] flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all border-b text-white px-8">
            <div className="container flex h-16 items-center justify-between py-4" style={{ maxWidth: "unset" }}>
                <div className="flex w-full items-center justify-between py-2">
                    {/* Logo Section */}
                    <div className="flex gap-6 md:gap-10">
                        <a className="hidden items-center space-x-2 md:flex" href="/">
                            <img
                                alt="CentralAxis Logo"
                                loading="lazy"
                                width="36"
                                height="36"
                                style={{ color: "transparent" }}
                                src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75"
                            />
                            <div className="text-2xl font-semibold">CentralAxis</div>
                        </a>
                        <a className="flex items-center space-x-2 md:hidden" href="/">
                            <img
                                alt="CentralAxis Logo"
                                loading="lazy"
                                width="36"
                                height="36"
                                style={{ color: "transparent" }}
                                src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75"
                            />
                            <span className="font-bold">CentralAxis</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-6 lg:flex">
                        {renderDropdown("Data Center Infrastructure Management", [
                            { name: "Monitoring Devices", href: "/dc-management/monitoring" },
                            { name: "Asset Tracking", href: "dc-management/asset-management" },
                            { name: "Network Management", href: "/dc-management/networking" },
                            { name: "Change Managmeent", href: "/dc-management/change-management" },
                            { name: "Colocation Management", href: "/dc-management/colocation" },
                            { name: "Data Center Planner", href: "/dc-management/dc-planner" },
                            { name: "Firmware Management", href: "/dc-management/firmware" },
                            { name: "IP Address Management", href: "/dc-management/ipam" },
                            { name: "Customer Portal", href: "/dc-management/customer-portal" },
                            { name: "Custom Insights", href: "/dc-management/insights" },
                            { name: "Custom Data Center Solutions", href: "/dc-management/custom-solutions" },
                        ])}

                        {renderDropdown("Intelligence Solutions", [
                            { name: "Digital Twins", href: "/intelligence/digital-twins" },
                            { name: "Smart Power Mapping", href: "/intelligence/power-mapping" },
                            { name: "Predictive Failure and Alerting", href: "/intelligence/predictive-failure" },
                            { name: "Smart Control Systems", href: "/intelligence/control-systems" },
                            { name: "Automated Discovery", href: "/intelligence/discovery" },
                        ])}

                        {renderDropdown("Data Center Compliance", [
                            { name: "DCOI Compliance", href: "/compliance/dcoi" },
                            { name: "(EU) 2023/1791", href: "/compliance/eu-2023-1791" },
                            { name: "EN 50600", href: "/compliance/en-50600" },
                            { name: "LEED Certification", href: "/compliance/leed" },
                            { name: "ISO/IEC 30134-2", href: "/compliance/iso-iec-30134-2" },
                            { name: "(EPA) ENERGY STAR", href: "/compliance/energy-star" },
                            { name: "European Commission JRC", href: "/compliance/ec-jrc" },
                        ])}

                        {renderDropdown("Sustainability Blog", [
                            {
                                name: "Energy Efficiency",
                                href: "/energy-solutions/pue-tracking"
                            },
                            { name: "Stranded Energy Map", href: "/energy-solutions/energy-map" },
                            { name: "Environmental Product Declaration", href: "/energy-solutions/environmental-product-declaration" },
                            { name: "Renewables Integration", href: "/energy-solutions/renewables-integration" },
                            { name: "Power Resource Management", href: "/energy-solutions/power-resource-managment" },
                        ])}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        aria-label="Toggle Menu"
                        className="col-start-3 flex items-center justify-center gap-2 justify-self-end rounded border border-border p-2 lg:hidden lg:h-7"
                        style={{ marginLeft: "auto" }}
                        onClick={() => setOpen(!open)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-menu"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>

                    {open && <div className="block lg:hidden">
                        <div className="bg-surface-primary dark:bg-dark-surface-primary fixed left-0 top-[calc(var(--da-header-height))] z-10 h-auto w-full">
                            <div className="flex flex-col gap-8 px-6 py-8">
                                <SidebarNav />
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </header>
    );
};

type DropdownItem = {
    name: string;
    href: string;
};

const renderDropdown = (title: string, items: DropdownItem[]) => {
    return (
        <div className="group relative">
            <button className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm">
                {title}
                <span className="ml-1">▼</span>
            </button>
            <div className="invisible absolute right-0 mt-2 w-64 rounded-md border border-white bg-background opacity-0 shadow-lg transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
                <div className="py-1">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            className="block px-4 py-2 text-sm font-semibold text-primary hover:text-foreground/80"
                            to={item.href}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};



const SidebarNav = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string | null) => {
        setOpenMenu(prev => (prev === menu ? null : menu));
    };

    const isOpen = (menu: string | null) => openMenu === menu;

    const sections = [
        {
            key: 'dcim',
            title: 'Data Center Infrastructure Management',
            links: [
                { href: '/dc-management/monitoring', label: 'Monitoring Devices' },
                { href: '/dc-management/asset-management', label: 'Asset Tracking' },
                { href: '/dc-management/networking', label: 'Network Management' },
                { href: '/dc-management/change-management', label: 'Change Management' },
                { href: '/dc-management/colocation', label: 'Colocation Management' },
                { href: '/dc-management/dc-planner', label: 'Data Center Planner' },
                { href: '/dc-management/firmware', label: 'Firmware Management' },
                { href: '/dc-management/ipam', label: 'IP Address Management' },
                { href: '/dc-management/customer-portal', label: 'Customer Portal' },
                { href: '/dc-management/insights', label: 'Custom Insights' },
                { href: '/dc-management/custom-solutions', label: 'Custom Data Center Solutions' },
            ],
        },
        {
            key: 'intelligence',
            title: 'Intelligence Solutions',
            links: [
                { href: '/intelligence/digital-twins', label: 'Digital Twins' },
                { href: '/intelligence/power-mapping', label: 'Smart Power Mapping' },
                { href: '/intelligence/predictive-failure', label: 'Predictive Failure and Alerting' },
                { href: '/intelligence/control-systems', label: 'Smart Control Systems' },
                { href: '/intelligence/discovery', label: 'Automated Discovery' },
            ],
        },
        {
            key: 'compliance',
            title: 'Data Center Compliance',
            links: [
                { href: '/compliance/dcoi', label: 'DCOI Compliance' },
                { href: '/compliance/eu-2023-1791', label: '(EU) 2023/1791' },
                { href: '/compliance/en-50600', label: 'EN 50600' },
                { href: '/compliance/leed', label: 'LEED Certification' },
                { href: '/compliance/iso-iec-30134-2', label: 'ISO/IEC 30134-2' },
                { href: '/compliance/energy-star', label: '(EPA) ENERGY STAR' },
                { href: '/compliance/ec-jrc', label: 'European Commission Joint Research Centre (JRC)' },
            ],
        },
        {
            key: 'sustainability',
            title: 'Sustainability Blog',
            links: [
                { href: '/energy-solutions/pue-tracking', label: 'Energy Efficiency' },
                { href: '/energy-solutions/energy-map', label: 'Stranded Energy Map' },
                { href: '/energy-solutions/environmental-product-declaration', label: 'Environmental Product Declaration' },
                { href: '/energy-solutions/renewables-integration', label: 'Renewables Integration' },
                { href: '/energy-solutions/power-resource-managment', label: 'Power Resource Management' },
            ],
        },
    ];

    return (
        <nav className="flex flex-col gap-4">
            {sections.map(section => (
                <div key={section.key}>
                    <button
                        onClick={() => toggleMenu(section.key)}
                        className="flex items-center gap-2 px-3 py-1.5 w-full text-left"
                    >
                        {section.title}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`lucide lucide-chevron-down text-text-tertiary dark:text-dark-text-tertiary h-min transform transition-transform ${isOpen(section.key) ? 'rotate-180' : 'rotate-0'
                                }`}
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                    <ul
                        className={`flex origin-top transform-gpu flex-col gap-2 overflow-hidden pl-4 transition-all duration-300 ${isOpen(section.key) ? 'max-h-96' : 'max-h-0'
                            }`}
                        style={{ overflowY: 'auto' }}
                    >
                        {section.links.map((link, i) => (
                            <li key={i}>
                                <Link
                                    className="text-text-tertiary dark:text-dark-text-tertiary flex items-center gap-2 rounded-md px-3 py-1.5"
                                    to={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
};


export default Header;
