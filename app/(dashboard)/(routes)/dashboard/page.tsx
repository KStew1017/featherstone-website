import Dashboard from "@/components/dashboard/Dashboard";
import prisma from "@/prisma/client";


const DashboardPage = async () => {
    const units = await prisma.units.findMany({
        include: {
            tenant: true,
        },
        orderBy: [
            {
                id: "asc",
            },
        ],
    });

    const tenants = (await prisma.tenants.findMany({
        include: {
            unit: {
                include: {
                    tenant: true,
                },
            },
        },
        orderBy: [
            {
                id: "asc",
            },
        ],
    }))

    return (
        <>
            <Dashboard units={units} tenants={tenants} />
        </>
    );
};

export default DashboardPage;