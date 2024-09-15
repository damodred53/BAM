

import { useSelector } from "react-redux";
import DropdownMenu from "../DropdownMenu/DropdownMenu.tsx";


const Mapping = () => {

     //@ts-expect-error Pour le moment, impossible de comprendre cette erreur de typescript
    const data = useSelector((state) => state.dataDropDown.data);

    /*console.log(data)*/
    const arrayName: string[] = [];
    const arrayLink: string[] = [];

    data.forEach((test) => {
        /*console.log(test.liste?.name)*/
        /*console.log(test)*/

        if (test.liste) {
            for (let i = 0 ; i < test.liste.length ; i++)
            { 
                arrayName.push(test.liste[i].name);
                arrayLink.push(test.liste[i].link);
            }

        }
    })

    return (

        <div className="mapping">
            {
                data.map((contentMenu) => {
                    return (
                        <DropdownMenu 
                            key={contentMenu.titre}
                            titre={contentMenu.titre}
                            paragraphe={contentMenu.texte}  
                            link={arrayLink}
                            name={arrayName}
                        />
                    )
                } )
            }
        </div>

    )
}

export default Mapping;