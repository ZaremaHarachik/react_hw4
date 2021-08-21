const getCars = () => {
    return fetch("http://195.72.144.67/api/v1/cars")
        .then(value => value.json());
}

export {getCars};