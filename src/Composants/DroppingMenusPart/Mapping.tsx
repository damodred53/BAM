import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu.tsx";

const Mapping = () => {

    const data = useSelector((state) => state.dataDropDown.data);
        console.log("voici ce que je récupère du store : ", data)
    useEffect(() => {

        

    }, []);


    

    return (

        <div className="mapping">
            {
                data.map((contentMenu) => {
                    return (
                        <DropdownMenu titre={contentMenu.titre} paragraphe={contentMenu.texte}/>
                    )
                } )
            }
        </div>

    )
}

export default Mapping;