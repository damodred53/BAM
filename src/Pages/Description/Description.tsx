
import NavBar from "../../Composants/NavBar/NavBar";
import PictureDescription from "../../assets/pictureDescription.png";
import BigHeaderDescription from "../../Composants/BigPictureDescription/BigPictureDescription";
import Footer from "../../Composants/Footer/Footer";
import DroppingMenusPart from "../../Composants/DroppingMenusPart/DroppingMenusPart";
import { Provider } from "react-redux";
import { store } from "../../../redux";
import NatureProgres from "../../Composants/NatureProgres/NatureProgres.tsx";
import Irregulomadaire from "../../Composants/Irregulomadaire/Irregulomadaire.tsx";

const Description = () => {

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