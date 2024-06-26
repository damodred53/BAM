import React from "react";
import Stout from "../../assets/LogoBam/Stout.webp";
import Mars from "../../assets/LogoBam/Mars.webp";
import Poussin from "../../assets/LogoBam/Poussin.webp";
import Noel from "../../assets/LogoBam/Noël.webp";
import Cervoise from "../../assets/LogoBam/Cervoise.webp";
import Cursor from "../../assets/darkArrow.png";
import { useDispatch, useSelector } from "react-redux";
import { setVisiblePresentation } from "../../../redux";

interface CardSecondColumnProps {
    id: number;
    name: string;
    presentation: string;
}

const CardSecondColumn: React.FC<CardSecondColumnProps> = ({ id, name, presentation }) => {

    /*const [isVisible, setIsVisible] = useState(false);*/

    const logoBamSecondColumn = [Stout, Mars, Poussin, Noel, Cervoise];
    /*console.log(id)*/
    let foundLogoBam = "";
    for ( let i = 0 ; i < logoBamSecondColumn.length  ; i++ ) {
        /*console.log("valeur de i :  ", i)*/
        if (id === i+7) {
            foundLogoBam = logoBamSecondColumn[i];
        } 
        /*console.log("j'ai trouvé : ", foundLogoBam)*/
    }

    /*const logoContentPart = useRef(null);*/
    const dispatch = useDispatch();
    // @ts-expect-error Pour le moment, impossible de régler redux avec typescript
    const visiblePresentationId = useSelector((state) => state.presentation.visiblePresentationId);

    /*const logoBamFirstColumn = [Blanche, Ambrée, Blonde, Brune, Terroir, Masquée];*/
    /*const foundLogoBam = logoBamFirstColumn[id - 1];*/

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

            <img className="second_column_cursor" src={Cursor} alt="cursor de sélection jaune"  />

            <span className="second_column_span">
                <h2 className="second_column_title">{name}</h2>
                <img className="second_column_logo"  src={foundLogoBam} alt="Card Image 1" onClick={handleDisplay} />
            </span>
            
        </div>
        
    );
};

export default CardSecondColumn;
