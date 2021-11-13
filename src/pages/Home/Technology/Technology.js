import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
// import './Technology.css';

const Technology = () => {
    const [technology, setTechnology] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/technology')
            .then(res => res.json())
            .then(data => {
                setTechnology(data)
            })
    }, [])

    return (
        <Box sx={{ my: '100px' }} className="container">
            <Typography gutterBottom variant="h4" sx={{ fontWeight: 'bold', my: '100px' }} component="div">
                TECHNOLOGY
            </Typography>
            <img src="http://autopro.jwsuperthemes.com/wp-content/uploads/2016/12/1111.jpg" width="100%" alt="" />
            <Grid container spacing={2} sx={{ mt: "50px" }}>
                {
                    technology.map(tg => <Grid
                        key={tg._id}
                        item xs={12} sm={6} md={4}
                        className="tech-card"
                    >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={tg?.icon}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {tg?.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {tg?.description.slice(0, 150)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Technology;