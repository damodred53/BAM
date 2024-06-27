import { useState, useEffect } from "react";
import CardFirstColumn from "../CardFirstColumn/CardFirstColumn";
import PhotoVitrine from "../../assets/photo_vitrine.png";
import CardSecondColumn from "../CardSecondColumn/CardSecondColumn";



const Vitrine = () => {
    const [dataBam, setDataBam] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("../../../DataBAM/DataBam.json");
                const data = await response.json();
                setDataBam(data);
            } catch (error) {
                console.log("Impossible d'aller chercher les données", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="vitrine">
            <h1 className="vitrine_main_title">HONNEUR AUX BAM !!</h1>
            <div className="vitrine_first_column">
                {dataBam.map((cardBam) => (
                    cardBam.id <= 6 ? <CardFirstColumn key={cardBam.id} id={cardBam.id} name={cardBam.name} presentation={cardBam.presentation} /> : null
                ))}
            </div>
            <div className="vitrine_picture">
                <img src={PhotoVitrine} alt="Vitrine" />
            </div>
            <div className="vitrine_second_column">
                {dataBam.map((cardBam) => (
                    cardBam.id >= 7 ? <CardSecondColumn key={cardBam.id} id={cardBam.id} name={cardBam.name} presentation={cardBam.presentation} /> : null
                ))}
            </div>
            
        </section>
    );
};

export default Vitrine;
