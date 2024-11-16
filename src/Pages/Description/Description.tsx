
import NavBar from "../../Composants/NavBar/NavBar";
import PictureDescription from "../../assets/pictureDescription.webp";
import BigHeaderDescription from "../../Composants/BigPictureDescription/BigPictureDescription";
import Footer from "../../Composants/Footer/Footer";
import DroppingMenusPart from "../../Composants/DroppingMenusPart/DroppingMenusPart";
import { Provider, useDispatch } from "react-redux";
import { addData, store } from "../../../redux";
import NatureProgres from "../../Composants/NatureProgres/NatureProgres.tsx";
import Irregulomadaire from "../../Composants/Irregulomadaire/Irregulomadaire.tsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchDropdownDatas } from "../../Services/Services.tsx";

const Description = () => {

    const location = useLocation()
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0);
    },[location])

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                
                    const response = await fetchDropdownDatas();
                    const data = await response;
                    dispatch(addData(data));
                }
                catch (error) {
                    console.log("impossible d'aller chercher les données des menus déroulants", error);
                }
            } 
            
            fetchData2();
    
    }, [])
    

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