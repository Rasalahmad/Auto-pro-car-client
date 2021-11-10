import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CarDetails = () => {
    const {carId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/carDetails/${carId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDetails(data)
        })
    }, [])
    return (
        <div>
            <h2>Car Detals of {carId}</h2>
            {/* {
                details.map(dt => <div>
                    <h2>{dt?.name}</h2>
                </div>)
            } */}
        </div>
    );
};

export default CarDetails;