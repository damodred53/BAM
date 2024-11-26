import React from "react";
import Cursor from "../../assets/cursor.webp";
import { useRef, useState } from "react";
import InstagramLogo from "../../assets/InstagramLogo.webp";
import MayenneLogo from "../../assets/bougerMayenne.webp";
interface DropdownMenuProps {
    paragraphe: string | string[];
    titre? : string;
    image? : string;
    name?: string[];
    contact? : string[];
    link? : string[]
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({paragraphe, titre, image, link, name }) => {  

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
    
        <div className={`dropdown_invisible_part ${isDisplayActivated ? "displayed" : ""} custom-scrollbar`}  ref={dropdownContentPart}>
            { !link && Array.isArray(paragraphe) && 
                paragraphe.map((date, index) => (
                    <ul key={index} className="dropdown_invisible_part_concurrent_list">
                        <li className="dropdown_invisible_part_concurrent_list_name">{date}</li>
                    </ul>
                ))
            }

            {/* intégration des différents partie présentant les autres producteurs locaux de bières*/}

            {name && link &&
            
                <div className="dropdown_invisible_part_concurrent">
                    {name.map((name2, index) => (
                        <ul key={index} className="dropdown_invisible_part_concurrent_list">
                            <li className="dropdown_invisible_part_concurrent_list_name">{name2}</li>
                            <li ><a className="dropdown_invisible_part_concurrent_list_link" target="_blank" href={`${link[index]}`}><div className="dropdown_invisible_part_concurrent_list_link_span">Lien vers le site du producteur</div></a></li>
                        </ul>
                        ))
                    }
                </div>
            }


            {image === "instagram" ? 
                <div className="imageMainDiv">
                    <div className="imageMainDiv_div" title="page Instagram encore en construction">
                        <a href="" className="imageMainDiv_div_link">
                            <p className="imageMainDiv_div_paragraph" >Compte instagram à venir très prochainement !</p>
                            <img className="imageMainDiv_div_link_picture" src={InstagramLogo} />
                        </a>
                    </div>
                </div> : ""
                }
                    
            {image === "mayenne" ?
                    <div className="imageMainDiv_div">
                        <a className="imageMainDiv_div_link" href="https://www.bouger-en-mayenne.com/" target="_blank">
                            <img className="imageMainDiv_div_link_picture2"  src= {MayenneLogo} />
                            <p className="imageMainDiv_div_paragraph">Pour venir bouger en Mayenne</p>
                        </a>
                    </div>
                    
                : ""
            }
        </div>
    </div>
)
}
export default DropdownMenu;