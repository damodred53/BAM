import { useSelector } from "react-redux";
import DropdownMenu from "../DropdownMenu/DropdownMenu.tsx";

const Mapping = () => {
    //@ts-expect-error Pour le moment, impossible de comprendre cette erreur de TypeScript
    const data = useSelector((state) => state.dataDropDown.data);

    return (
        <div className="mapping">
            
            {data.map((contentMenu, index) => (
                
                <DropdownMenu 
                    key={index}
                    titre={contentMenu.titre}
                    paragraphe={contentMenu.texte}
                    image={contentMenu.image}
                    name={contentMenu.liste?.map(item => item.name) }
                    link={contentMenu.liste?.map(item => item.link)}
                />
            ))}
        </div>
    );
};

export default Mapping;
