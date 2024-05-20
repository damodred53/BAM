import React from "react";
import NavBar from "../../Composants/NavBar/NavBar";
import BigHeaderPicture from "../../Composants/BigHeaderPicture/BigHeaderPicture";

const LandingPage = () => {

    return (

        <>
            <NavBar />
            <section >
                <div className="landingpage">
                    <BigHeaderPicture />
                </div>
            </section>
        </>

    )
}

export default LandingPage;