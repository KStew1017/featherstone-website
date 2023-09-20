export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Featherstone Business Park",
    description: "Versatile commercial spaces tailored to fit your needs in secure and accessible warehouses.",
    images: {
        tempBG: "/../public/temp-hero.jpg",
    },
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Units",
            href: "/units",
        },
        {
            label: "Location",
            href: "#location",
        },
        {
            label: "Contact",
            href: "#contact",
        }
    ],
    navMenuItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Units",
            href: "/units",
        },
        {
            label: "Location",
            href: "#location",
        },
        {
            label: "Contact",
            href: "#contact",
        }
    ],
    dashboardNavItems: [
        {
            label: "Overview",
            href: "/dashboard",
            index: 1,
        },
        {
            label: "Units",
            href: "/dashboard/units",
            index: 2,
        },
        {
            label: "Tenants",
            href: "/dashboard/tenants",
            index: 3,
        },
        {
            label: "Statements",
            href: "/dashboard/invoices",
            index: 4,
        },
        {
            label: "Payments",
            href: "/dashboard/payments",
            index: 5,
        },
        {
            label: "Settings",
            href: "/dashboard/settings",
            index: 6,
        },
    ]
};
