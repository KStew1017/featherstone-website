"use client";

import {
    Tab,
    TabList,
    TabGroup,
    TabPanel,
    TabPanels,
} from "@tremor/react";
import { BrandDark } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { ReactNode } from "react";
import { Unit, Tenant } from "@/types";

import UnitsTab from "./UnitsTab";
import TenantsTab from "./TenantsTab";


const Dashboard = ({ units, tenants }: { units: Unit[], tenants: Tenant[] }) => {
    const { user } = useUser();
    const admin = user?.publicMetadata.role;

    return (
        <main className="p-12">
            <div className="flex items-center justify-between">
                <BrandDark />
                <div className="flex items-center">
                    <div className="flex flex-col">
                        <p className="text-grey text-[24px] mr-4 font-sans font-bold">
                            <span className="text-[12px] text-grey/50 mr-2">signed in as </span>{user?.username}
                        </p>
                        <p className="text-grey/50 text-[12px] mr-4 font-sans font-bold text-end">
                            ({admin as ReactNode})
                        </p>
                    </div>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                userButtonTrigger:
                                    "focus:shadow-none",
                                userButtonAvatarBox:
                                    "w-[50px] h-[50px] rounded-full border-2 border-gold transition ease-s-curve hover:drop-shadow-lg hover:scale-105 hover:translate-y-[-2px]",
                                userButtonPopoverCard:
                                    "bg-tan-100 border-2 border-gold font-sans",
                                userPreviewMainIdentifier:
                                    "text-grey text-[18px] font-bold",
                                userPreviewSecondaryIdentifier:
                                    "text-grey/50",
                                userButtonPopoverActionButton:
                                    "hover:bg-tan-200",
                                userButtonPopoverActionButtonText:
                                    "text-[16px]",
                                userButtonPopoverActionButtonIcon:
                                    "w-[20px] h-[20px]",
                                userButtonPopoverFooter:
                                    "hidden"
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
                                key={item.label}
                            >
                                {item.label}
                            </Tab>
                        ))}
                    </div>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    </TabPanel>
                    <TabPanel>
                        <UnitsTab units={units} />
                    </TabPanel>
                    <TabPanel>
                        <TenantsTab tenants={tenants} />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
      );
};

export default Dashboard;