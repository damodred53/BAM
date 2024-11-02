import React from "react";
import Stout from "../../assets/LogoBam/Stout.webp";
import Mars from "../../assets/LogoBam/Mars.webp";
import Poussin from "../../assets/LogoBam/Poussin.webp";
import Noel from "../../assets/LogoBam/Noël.webp";
import Cervoise from "../../assets/LogoBam/Cervoise.webp";
import Cursor from "../../assets/darkArrow.webp";
import { useDispatch, useSelector } from "react-redux";
import { setVisiblePresentation } from "../../../redux";

interface CardSecondColumnProps {
    id: number;
    name: string;
    presentation: string;
}

const CardSecondColumn: React.FC<CardSecondColumnProps> = ({ id, name, presentation }) => {

    

    const logoBamSecondColumn = [Stout, Mars, Poussin, Noel, Cervoise];
    
    let foundLogoBam = "";
    for ( let i = 0 ; i < logoBamSecondColumn.length  ; i++ ) {
        
        if (id === i+7) {
            foundLogoBam = logoBamSecondColumn[i];
        } 
       
    }

    const dispatch = useDispatch();
    // @ts-expect-error Pour le moment, impossible de régler redux avec typescript
    const visiblePresentationId = useSelector((state) => state.presentation.visiblePresentationId);


    const isVisible = visiblePresentationId === id;

    const handleDisplay = () => {
        dispatch(setVisiblePresentation(isVisible ? null : id));
    };


    return (
        
        <div className="second_column" >

            <div className={`second_column_presentation presentation ${isVisible ? "visible" : "hidden"}`} >
                <img className="second_column_presentation_logo" src={foundLogoBam} alt="Card Image 3"  />
                <p className="second_column_presentation_paragraph">{presentation}</p>
            </div>
            <div className="second_column_container">
                <img className="second_column_cursor first_column_container_img" src={Cursor} alt="cursor de sélection jaune" />
            </div>
            
            <span className="second_column_span">
                <img className="second_column_logo"  src={foundLogoBam} alt="Card Image 1" onClick={handleDisplay} />
                <h2 className="second_column_title">{name}</h2>
            </span>
            
        </div>
        
    );
};

export default CardSecondColumn;
