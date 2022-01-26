import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import "./Services.css";
import SkeletonDiv from '../../Shared/SkeletonDiv';

const Services = () => {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://fierce-dusk-72833.herokuapp.com/collection')
            .then(res => res.json())
            .then(data => {
                setCollection(data);
                setLoading(false);
            })
    }, [collection])
    return (
        <Box className="serviceContainer">
            {loading ?
                <Box className="skeleton-loader">
                    <SkeletonDiv />
                    <SkeletonDiv />
                    <SkeletonDiv />
                    <SkeletonDiv />
                    <SkeletonDiv />
                    <SkeletonDiv />
                </Box> : <Box className="container">
                    <Typography variant="h4" sx={{ my: '50px' }} component="div">
                        Our Collection
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            collection.slice(0, 6).map(pd => <Grid
                                item xs={12} sm={6} md={4}
                                key={pd._id
                                }
                            >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={pd.img}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {pd.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Price: $ {pd.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Model: $ {pd.model}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <NavLink to={`/carDetails/${pd._id}`}>
                                            <Button size="small">Buy Now</Button>
                                        </NavLink>
                                    </CardActions>
                                </Card>
                            </Grid>)
                        }
                    </Grid>
                </Box>}
        </Box>
    );
};

export default Services;
