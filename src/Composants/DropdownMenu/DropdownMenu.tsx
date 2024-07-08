import React from "react";
import Cursor from "../../assets/cursor.svg";
import { useRef, useState } from "react";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import MayenneLogo from "../../assets/bougerMayenne.png";

interface DropdownMenuProps {
    paragraphe: string;
    titre : string;
    image? : boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({paragraphe, titre, image}) => {  

const dropdownContentPart = useRef(null)
const [isDisplayActivated, setIsDisplayActivated] = useState(false)

    const displayContent = () => {

        const selectedInstance = dropdownContentPart.current;

        if (!isDisplayActivated) {
            selectedInstance.style.display = "block";
            setIsDisplayActivated(true)

        } else {
            selectedInstance.style.display = "none";
            setIsDisplayActivated(false)
        }
    }



    return (
    <div data-testid="dropdown-1" className="dropdown ">
        <div className={"dropdown_visible_part"}>
            <h2 className="dropdown_visible_part_title">{titre}</h2>
            <img className={`dropdown_visible_part_cursor ${isDisplayActivated ? "rotation" : ""}`} src={Cursor} alt="curseur" onClick={displayContent}></img>
        </div>
    
        <div className={` dropdown_invisible_part ${isDisplayActivated ? "displayed" : ""} custom-scrollbar`}  ref={dropdownContentPart}>
            <div className="dropdown_invisible_part_paragraph">
                <span className="dropdown_invisible_part_paragraph_span">{paragraphe}</span>
            </div>
            {image ? 
                <div className="imageMainDiv">
                    <div className="imageMainDiv_div" title="page Instagram encore en construction">
                        <p className="imageMainDiv_div_paragraph" >Venez découvrir l’Instragram de la BAM </p>
                        <a href="" className="imageMainDiv_div_link">
                            <img className="imageMainDiv_div_link_picture" src={InstagramLogo} />
                        </a>
                    </div>

                    <div className="imageMainDiv_div">
                        <a className="imageMainDiv_div_link" href="https://www.bouger-en-mayenne.com/" target="_blank">
                            <img className="imageMainDiv_div_link_picture2"  src= {MayenneLogo} />
                        </a>
                        <p className="imageMainDiv_div_paragraph">Pour venir bouger en Mayenne</p>
                    </div>
                </div>
                : ""
            }
        </div>

        
        
    </div>
)
}
export default DropdownMenu;