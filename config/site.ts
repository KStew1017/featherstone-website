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
            label: "Units",
            href: "/dashboard/units",
            index: 1,
        },
        {
            label: "Tenants",
            href: "/dashboard/tenants",
            index: 2,
        },
        {
            label: "Statements",
            href: "/dashboard/invoices",
            index: 3,
        },
        {
            label: "Contact Form Responses",
            href: "/dashboard/responses",
            index: 4,
        },
    ]
};
