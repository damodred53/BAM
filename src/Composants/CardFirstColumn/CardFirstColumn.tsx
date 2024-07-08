
import { useDispatch, useSelector } from "react-redux";
import Blanche from "../../assets/LogoBam/Blanche.webp";
import Ambrée from "../../assets/LogoBam/Ambrée.webp";
import Blonde from "../../assets/LogoBam/Blonde.webp";
import Brune from "../../assets/LogoBam/Brune.webp";
import Terroir from "../../assets/LogoBam/Terroir.webp";
import Masquée from "../../assets/LogoBam/Masquée.webp";
import Cursor from "../../assets/darkArrow.png";
import { setVisiblePresentation } from "../../../redux";
import { useRef } from "react";

const CardFirstColumn = ({ id, name, presentation }) => {
    const logoContentPart = useRef(null);
    const dispatch = useDispatch();
    // @ts-expect-error Pour le moment, impossible de régler redux avec typescript
    const visiblePresentationId = useSelector((state) => state.presentation.visiblePresentationId);

    const logoBamFirstColumn = [Blanche, Ambrée, Blonde, Brune, Terroir, Masquée];
    const foundLogoBam = logoBamFirstColumn[id - 1];

    const isVisible = visiblePresentationId === id;

    const handleDisplay = () => {
        dispatch(setVisiblePresentation(isVisible ? null : id));
    };

    return (
        <div className="first_column" ref={logoContentPart}>
            <div className="first_column_span">
                <h2 className="first_column_title">{name}</h2>
                <img className="first_column_logo" src={foundLogoBam} alt="Card Image 1" onClick={handleDisplay} />
            </div>
            <div className="first_column_container">
                <img className="first_column_cursor first_column_container_img" src={Cursor} alt="cursor de sélection jaune" />
            </div>
            
            <div className={`first_column_presentation presentation ${isVisible ? 'visible' : 'hidden'}`}>
                <p className="first_column_presentation_paragraph">{presentation}</p>
                <img className="first_column_presentation_logo" src={foundLogoBam} alt="Card Image 3" />
            </div>
        </div>
    );
};

export default CardFirstColumn;
