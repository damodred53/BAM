

import React from "react";
import NavBar from "../../Composants/NavBar/NavBar";
import Footer from "../../Composants/Footer/Footer";
import MentionsLegalesText from "../../Composants/MentionsLegales/MentionsLegalesText";

const MentionLegales = () => {

    return (

        <section className="legales">
            <NavBar />
            <MentionsLegalesText />
            <Footer />
        </section>
    )
}

export default MentionLegales;