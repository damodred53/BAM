
import NavBar from "../../Composants/NavBar/NavBar";
import Footer from "../../Composants/Footer/Footer";
import MentionsLegalesText from "../../Composants/MentionsLegales/MentionsLegalesText";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MentionLegales = () => {

    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    },[location])

    return (

        <section className="legales">
            <NavBar />
            <MentionsLegalesText />
            <Footer />
        </section>
    )
}

export default MentionLegales;