
import { useEffect } from "react";
import { fetchDropdownDatas } from "../../Services/Services.tsx";
import { useDispatch } from "react-redux";
import {addData} from "../../../redux";
import Mapping from "./Mapping.tsx";

const DroppingMenusPart = () => {


    const dispatch = useDispatch();

    useEffect( () => {

        const getData = async () => {

            const response = fetchDropdownDatas();
            const data = await response;
            dispatch(addData(data));
        }
        getData();
        
        }, [dispatch]);

        

    return (
        <div className="menus_part">
            <h2 className="menus_part_title">La Bam en plus de mots</h2>
            <Mapping />
        </div>

    )
}

export default DroppingMenusPart;