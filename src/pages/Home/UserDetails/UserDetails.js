import React from 'react';
import { useForm } from 'react-hook-form';
import './UserDetails.css';



const UserDetails = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    fetch('http://localhost:5000/saveUserInfo', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        if(result.insertedId){
            alert('Order Process Successfully')
            reset();
        }
    })
      
    };
    return (
        <div>
            <form className = 'shipping-form' onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="name" {...register("name")} />
            <input defaultValue="name" {...register("email", { required: true })} />
            {errors.email && <span className = 'error'>This field is required</span>}
            <input placeholder = 'Address' {...register("address")} />
            <input placeholder = 'City' {...register("city")} />
            <input placeholder = 'Phone' {...register("phone")} />
            <input type="submit" />
            </form>
        </div>
    );
};

export default UserDetails;