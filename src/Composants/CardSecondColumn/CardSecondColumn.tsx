import React from "react";
import Stout from "../../assets/LogoBam/Stout.webp";
import Mars from "../../assets/LogoBam/Mars.webp";
import Poussin from "../../assets/LogoBam/Poussin.webp";
import Noel from "../../assets/LogoBam/Noël.webp";
import Cervoise from "../../assets/LogoBam/Cervoise.webp";
import Cursor from "../../assets/darkArrow.png";

interface CardSecondColumnProps {
    id: number;
    name: string;
    presentation: string;
}

const CardSecondColumn: React.FC<CardSecondColumnProps> = ({ id, name, presentation }) => {

    const logoBamSecondColumn = [Stout, Mars, Poussin, Noel, Cervoise];
    console.log(id)
    let foundLogoBam = "";
    for ( let i = 0 ; i < logoBamSecondColumn.length  ; i++ ) {
        console.log("valeur de i :  ", i)
        if (id === i+7) {
            
            foundLogoBam = logoBamSecondColumn[i]
        } 
        console.log("j'ai trouvé : ", foundLogoBam)
    }

    return (
        
        <div className="first_column">

            <div className="first_column_presentation">
                <img className="first_column_presentation_logo" src={foundLogoBam} alt="Card Image 3" />
                <p className="first_column_presentation_paragraph">{presentation}</p>
            </div>

            <span className="first_column_span">
                <h2 className="first_column_title">{name}</h2>
                <img className="first_column_logo"  src={foundLogoBam} alt="Card Image 1" />
            </span>
            
            <img className="first_column_cursor" src={Cursor} alt="cursor de sélection jaune"  />
            
        </div>
        
    );
};

export default CardSecondColumn;
