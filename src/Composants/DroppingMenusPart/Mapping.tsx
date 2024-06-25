
import { useSelector } from "react-redux";
import DropdownMenu from "../DropdownMenu/DropdownMenu.tsx";

const Mapping = () => {

    // @ts-expect-error Pour le moment, impossible de comprendre cette erreur de typescript
    const data = useSelector((state) => state.dataDropDown.data);
        console.log("voici ce que je récupère du store : ", data)


    return (

        <div className="mapping">
            {
                data.map((contentMenu) => {
                    return (
                        <DropdownMenu key={contentMenu.titre} titre={contentMenu.titre} paragraphe={contentMenu.texte} {...(contentMenu.image ? { image: contentMenu.image } : {})}/>
                    )
                } )
            }
        </div>

    )
}

export default Mapping;