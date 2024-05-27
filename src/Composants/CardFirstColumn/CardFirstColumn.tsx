import React from "react";
import Blanche from "../../assets/LogoBam/Blanche.webp";
import Ambrée from "../../assets/LogoBam/Ambrée.webp";
import Blonde from "../../assets/LogoBam/Blonde.webp";
import Brune from "../../assets/LogoBam/Brune.webp";
import Terroir from "../../assets/LogoBam/Terroir.webp";
import Masquée from "../../assets/LogoBam/Masquée.webp";
import Cursor from "../../assets/darkArrow.png";

interface CardFirstColumnProps {
    id: number;
    name: string;
    presentation: string;
}

const CardFirstColumn: React.FC<CardFirstColumnProps> = ({ id, name, presentation }) => {

    const logoBamFirstColumn = [Blanche, Ambrée, Blonde, Brune, Terroir, Masquée];
    let foundLogoBam = "";
    for ( let i = 0 ; i < logoBamFirstColumn.length ; i++ ) {
        if (id === i+1) {
            foundLogoBam = logoBamFirstColumn[i]
        } 
        console.log("j'ai trouvé : ", foundLogoBam)
    }

    return (
        
        <div className="first_column">
            <span className="first_column_span">
                <h2 className="first_column_title">{name}</h2>
                <img className="first_column_logo"  src={foundLogoBam} alt="Card Image 1" />
            </span>
            
            <img className="first_column_cursor" src={Cursor} alt="cursor de sélection jaune"  />
            <div className="first_column_presentation">
                <p className="first_column_presentation_paragraph">{presentation}</p>
                <img className="first_column_presentation_logo" src={foundLogoBam} alt="Card Image 3" />
            </div>
        </div>
        
    );
};

export default CardFirstColumn;
