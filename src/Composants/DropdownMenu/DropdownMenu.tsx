import React from "react";
import Cursor from "../../assets/cursor.svg";
import { useRef, useState } from "react";

interface DropdownMenuProps {
    paragraphe: string;
    titre : string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({paragraphe, titre}) => {  

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
        </div>
    </div>
)
}
export default DropdownMenu;