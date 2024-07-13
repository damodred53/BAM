import { useState, useEffect } from "react";
import CardFirstColumn from "../CardFirstColumn/CardFirstColumn";
import PhotoVitrine from "../../assets/photo_vitrine.webp";
import CardSecondColumn from "../CardSecondColumn/CardSecondColumn";
import { handleBeerData } from "../../Services/Services";

// Définir le type des données
interface BeerData {
    id: number;
    name: string;
    presentation: string;
}

const Vitrine = () => {
    const [dataBam, setDataBam] = useState<BeerData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await handleBeerData();
                const data = await response;
                setDataBam(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
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
