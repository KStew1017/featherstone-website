import UnitsSection from "@/components/home/units/UnitsSection";
import Footer from "@/components/footer/FooterSection";
import prisma from "@/prisma/client"


const UnitsPage = async () => {
    const units = await prisma.units.findMany({
        where: {
            occupied: false
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
