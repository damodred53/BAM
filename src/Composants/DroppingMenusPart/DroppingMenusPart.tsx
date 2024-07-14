

import Mapping from "./Mapping.tsx";

const DroppingMenusPart = () => {

    /*const [datas, setDatas] = useState([]);*/
    /*const dispatch = useDispatch();*/

    /*useEffect(() => {

        const getData = async () => {

            const response = await fetchDropdownDatas();
            const data = await response;
            dispatch(addData(data));
        }
        getData();
        
        }, [dispatch]);*/
        

        /*useEffect(() => {

            const fetchData = async () => {
            try {
                    const response = await fetchDropdownDatas();
                    const data = await response;
                    setDatas(data);
                }
                catch (error) {
                    console.log("impossible d'aller chercher les données des menus déroulants", error);
                }
            } 
            
            fetchData();
        }, []);*/

  

    return (
        <div className="menus_part">
            <h2 className="menus_part_title">La Bam en plus de mots</h2>
            <Mapping />
        </div>

    )
}

export default DroppingMenusPart;