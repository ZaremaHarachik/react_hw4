import {useState} from "react";
import {saveCar} from "../../services/car.api.service";

export default function AddCarForm() {

    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');

    let onModelInputChange = (e) => {
        setModel(e.target.value);
    }

    let onPriceInputChange = (e) => {
        setPrice(e.target.value);
    }

    let onYearInputChange = (e) => {
        setYear(e.target.value);
    }

    let save = (e) => {
        e.preventDefault();
        if (!model.length || model.length > 20) {
            alert('The number of letters is less than 20');
        } else if (price < 0) {
            alert('The price is more than 0');
        } else if (year < 1990 || year > 2021) {
            alert('Enter  produce year (1990 - 2021)');
        } else {
            const car = {
                'model': model,
                'price': price,
                'year': year
            }
            saveCar(car);
        }
    }
    return (
        <div>
            <form onSubmit={save}>
                    Enter car model
                    <input type="text" name={'model'} value={model} onChange={onModelInputChange}/>
                    Enter car price
                    <input type="number" name={'price'} value={price} onChange={onPriceInputChange}/>
                    Enter produce year
                    <input type="number" name={'year'} value={year} onChange={onYearInputChange}/>
                <input type="submit"/>
            </form>

        </div>
    );
}