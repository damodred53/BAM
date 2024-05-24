import React from "react";
import { useState, useEffect } from "react";
import CardFirstColumn from "../CardFirstColumn/CardFirstColumn";
import PhotoVitrine from "../../assets/photo_vitrine.png"

const Vitrine = () => {

    const [ dataBam, setDataBam ] = useState<CardBam[]>([]);

    interface CardBam {
        id: number;
        name: string;
        presentation: string;
    }

    useEffect(() => {

        const fetchData = async () => {

            try {
                const  response = await fetch("../../../public/DataBAM/DataBam.json");
                
                if (response) {
                    const data = await response.json();
                    
                    setDataBam(data)
                }
        
            } catch (error) {
                console.log("Impossible d'aller chercher les données" , error)
            }
    
        }
        fetchData()
    }, [])
    
    console.log("Voici mes données stockées dans mon state : ", dataBam);
    

    return (
        <section className="vitrine">
            <h1>HONNEUR AUX BAM !!</h1>

            <div className="vitrine_first_column">
                {dataBam.map((cardBam) => {
                    return (
                        cardBam.id <= 6 ? <CardFirstColumn key={cardBam.id} id={cardBam.id} name={cardBam.name} presentation={cardBam.presentation} /> : ""
                    )
                } )}
            </div>
            
            <div className="vitrine_picture">
                <img src={PhotoVitrine} />
            </div>
            <div className="vitrine_second_column">
                {dataBam.map((cardBam) => {
                    return (
                        cardBam.id >= 7 ? <CardFirstColumn key={cardBam.id} id={cardBam.id} name={cardBam.name} presentation={cardBam.presentation} /> : ""
                    )
                })}
            </div>

        </section>
    )
}

export default Vitrine;



