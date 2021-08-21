import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import Car from "../car/Car";

export default function Cars() {

  let [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then(data => setCars([...data]));
  }, [cars])

  return (
      <div>
        {
          cars.map(carItem => <Car key={carItem.id} {...carItem}/>)
        }
      </div>
  );
}
