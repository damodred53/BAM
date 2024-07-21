
import NavBar from "../../Composants/NavBar/NavBar";
import PictureDescription from "../../assets/pictureDescription.webp";
import BigHeaderDescription from "../../Composants/BigPictureDescription/BigPictureDescription";
import Footer from "../../Composants/Footer/Footer";
import DroppingMenusPart from "../../Composants/DroppingMenusPart/DroppingMenusPart";
import { Provider } from "react-redux";
import { store } from "../../../redux";
import NatureProgres from "../../Composants/NatureProgres/NatureProgres.tsx";
import Irregulomadaire from "../../Composants/Irregulomadaire/Irregulomadaire.tsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Description = () => {

    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0);
    },[location])

    return (

        <Provider store={store}>
            <section>
                <NavBar />
                <BigHeaderDescription picture={PictureDescription}/>
                <hr className="brown_bare2"></hr>
                <DroppingMenusPart />
                <hr className="brown_bare2"></hr>
                <NatureProgres />
                <hr className="brown_bare2"></hr>
                <Irregulomadaire />
                <Footer />
            </section>
        </Provider>
    )
}

export default Description;