import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from 'react-rating';
import './Review.css'

const Review = () => {
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        fetch('https://fierce-dusk-72833.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setCollection(data);
            })
    }, [])
    return (
        <Box className="container">
            <Typography variant="h4" sx={{ my: '50px' }} component="div">
                Clients Review
            </Typography>
            <Grid container spacing={2}>
                {
                    collection.map(pd => <Grid
                        item xs={12} sm={6}  md={4}
                        key={pd._id
                        }
                    >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={pd?.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {pd.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {pd.description}
                                </Typography>
                                <Typography >
                                    <Rating
                                    className="rating"
                                        initialRating={pd.rating}
                                        emptySymbol="far fa-star icon-color"
                                        fullSymbol="fas fa-star icon-color"
                                    ></Rating>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Review;
