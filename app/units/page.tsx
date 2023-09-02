import UnitsSection from "@/components/units/UnitsSection";
import Footer from "@/components/footer/FooterSection";
import prisma from "@/prisma/client"


const UnitsPage = async () => {
    const units = await prisma.units.findMany({
        where: {
            occupied: true
        }
    });

    return (
        <>
            <UnitsSection units={units} />
            <Footer units={units} />
        </>
    );
};


export default UnitsPage;