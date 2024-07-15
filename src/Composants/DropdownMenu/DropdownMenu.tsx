import React from "react";
import Cursor from "../../assets/cursor.webp";
import { useRef, useState } from "react";
import InstagramLogo from "../../assets/InstagramLogo.webp";
import MayenneLogo from "../../assets/bougerMayenne.webp";

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
        <div className={"dropdown_visible_part"} onClick={displayContent}>
            <h2 className="dropdown_visible_part_title">{titre}</h2>
            <img className={`dropdown_visible_part_cursor ${isDisplayActivated ? "rotation" : ""}`} src={Cursor} alt="curseur" ></img>
        </div>
    
        <div className={` dropdown_invisible_part ${isDisplayActivated ? "displayed" : ""} custom-scrollbar`}  ref={dropdownContentPart}>
            <div className="dropdown_invisible_part_paragraph">
                <span className="dropdown_invisible_part_paragraph_span">{paragraphe}</span>
            </div>
            {image ? 
                <div className="imageMainDiv">
                    <div className="imageMainDiv_div" title="page Instagram encore en construction">
                        <a href="" className="imageMainDiv_div_link">
                            <p className="imageMainDiv_div_paragraph" >Venez découvrir l’Instragram de la BAM </p>
                            <img className="imageMainDiv_div_link_picture" src={InstagramLogo} />
                        </a>
                    </div>

                    <div className="imageMainDiv_div">
                        <a className="imageMainDiv_div_link" href="https://www.bouger-en-mayenne.com/" target="_blank">
                            <img className="imageMainDiv_div_link_picture2"  src= {MayenneLogo} />
                            <p className="imageMainDiv_div_paragraph">Pour venir bouger en Mayenne</p>
                        </a>
                    </div>
                </div>
                : ""
            }
        </div>

        
        
    </div>
)
}
export default DropdownMenu;