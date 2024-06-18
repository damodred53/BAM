
import React from "react";
import NavBar from "../../Composants/NavBar/NavBar";
import PictureDescription from "../../assets/pictureDescription.png";
import BigHeaderDescription from "../../Composants/BigPictureDescription/BigPictureDescription";
import Footer from "../../Composants/Footer/Footer";
import DroppingMenusPart from "../../Composants/DroppingMenusPart/DroppingMenusPart";
import { Provider } from "react-redux";
import { store } from "../../../redux";

const Description = () => {

    return (

        <Provider store={store}>
            <section>
                <NavBar />
                <BigHeaderDescription picture={PictureDescription}/>
                <hr className="brown_bare2"></hr>
                <DroppingMenusPart />
                <Footer />
            </section>
        </Provider>
    )
}

export default Description;