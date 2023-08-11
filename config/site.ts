export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Featherstone Business Park",
    description: "Versatile commercial spaces tailored to fit your needs in secure and accessible warehouses.",
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
        href: "/location",
    },
    {
        label: "Community",
        href: "/community",
    },
    {
        label: "Contact",
        href: "/contact",
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
            href: "/location",
        },
        {
            label: "Community",
            href: "/community",
        },
        {
            label: "Contact",
            href: "/contact",
        }
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui-docs-v2.vercel.app",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev"
    }
};
