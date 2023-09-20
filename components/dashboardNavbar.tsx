"use client";

import {
    Card,
    Grid,
    Tab,
    TabList,
    TabGroup,
    TabPanel,
    TabPanels,
} from "@tremor/react";
import '../styles/style.css';
import { BrandDark } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";


const DashboardNavbar = () => {
    const { user } = useUser();
    const admin = user?.publicMetadata.role

    return (
        <main className="p-12">
            <div className="flex items-center justify-between">
                <BrandDark />
                <div className="flex items-center">
                    <p className="text-grey text-[24px] mr-2 font-sans font-bold">
                        <span className="text-[12px] text-grey/50 mr-2">signed in as </span>{user?.username}
                    </p>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                userButtonTrigger:
                                    "focus:shadow-none",
                                userButtonAvatarBox:
                                    "w-[50px] h-[50px] rounded-full border-2 border-gold transition ease-s-curve hover:drop-shadow-lg hover:scale-105 hover:translate-y-[-2px]",
                            }
                        }}
                    />
                </div>
            </div>
            <TabGroup className="mt-6">
                <TabList className="flex border-b border-grey overflow-x-visible ">
                    <div className="flex w-full justify-between">
                        {siteConfig.dashboardNavItems.map((item) => (
                            <Tab
                                className={`text-grey ui-not-selected:text-[20px] ui-selected:text-[20px] font-sans font-bold hover:border-gold hover:text-gold ui-selected:text-gold ui-selected:border-gold ui-selected:border-b-3 transition ease-s-curve duration-1000`}
                            >
                                {item.label}
                            </Tab>
                        ))}
                    </div>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                            <Card>
                                <div className="h-28" />
                            </Card>
                            <Card>
                                <div className="h-28" />
                            </Card>
                        </Grid>
                        <div className="mt-6">
                            <Card>
                                <div className="h-80" />
                            </Card>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
      );
};

export default DashboardNavbar;