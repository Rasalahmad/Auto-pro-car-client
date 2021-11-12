import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './UserDetails.css';
import useFirebase from '../../hooks/useFirebase';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const { user } = useFirebase();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' });
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://fierce-dusk-72833.herokuapp.com/carDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [id]);

    const onSubmit = data => {
        console.log(data)
        data.service = service;
        data.status = 'Pending';
        fetch('https://fierce-dusk-72833.herokuapp.com/saveUserInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Order Process Successfully')
                    reset();
                }
            })

    };


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div>
                        <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className='error'>This field is required</span>}
                            <input placeholder='Address' {...register("address")} />
                            <input placeholder='City' {...register("city")} />
                            <input placeholder='Phone' {...register("phone")} />
                            <input type="submit" />
                        </form>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: '50px' }}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="300"
                            image={service?.img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {service?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price ${service?.price}
                            </Typography>
                        </CardContent>
                        <CardActions className="cardAction">
                            <NavLink style={{ textDecoration: 'none', backgroundColor: 'warining' }}
                                to='/home'>
                                <Button color="inherit">Back Home</Button>
                            </NavLink>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>

    );
};

export default UserDetails;