import UnitsSection from "@/components/home/units/UnitsSection";
import Footer from "@/components/footer/FooterSection";


const UnitsPage = async () => {
    return (
        <>
            {await UnitsSection()}
            <Footer className="mobile" />
        </>
    );
};

export default UnitsPage;
