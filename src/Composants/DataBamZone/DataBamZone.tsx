import { useEffect, useState } from "react";
import { handleBeerData } from "../../Services/Services";
import DisplayDataBam from "./DisplayDataBam";

interface BeerData {
    id: number;
    name: string;
    presentation: string;
  }

const DataBamZone = () => {
  const [beerData, setBeerData] = useState<BeerData[]>([]);
  const [group1, setGroup1] = useState<BeerData[]>([]);
  const [group2, setGroup2] = useState<BeerData[]>([]);
  const [group3, setGroup3] = useState<BeerData[]>([]);
  const [group4, setGroup4] = useState<BeerData[]>([]);

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datafetched = await handleBeerData();
        setBeerData(datafetched);
      } catch (error) {
        console.log("impossible de récupérer les données : ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const newGroup1 = beerData.filter((beer) => beer.id < 4);
    setGroup1(newGroup1);
    const newGroup2 = beerData.filter((beer) => beer.id >3 && beer.id< 7);
    setGroup2(newGroup2);
    const newGroup3 = beerData.filter((beer) => beer.id >6 && beer.id< 10);
    setGroup3(newGroup3);
    const newGroup4 = beerData.filter((beer) => beer.id >9 && beer.id< 12);
    setGroup4(newGroup4);

  }, [beerData]);

  console.log('le groupe 1 : ', group1)
  console.log('le groupe 2 : ',group2)
  console.log('le groupe 3 : ',group3)
  console.log('le groupe 4 : ',group4)

  return (
    <section>
      <div className="main_display">
        <DisplayDataBam beers={group1} />
        <DisplayDataBam beers={group2} />
        <DisplayDataBam beers={group3} />
        <DisplayDataBam beers={group4} />
      </div>
    </section>
  );
};

export default DataBamZone;
