import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Technology = () => {
    const [technology, setTechnology] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/technology')
            .then(res => res.json())
            .then(data => {
                setTechnology(data)
                console.log(data)
            })
    }, [])

    return (
        <Box sx>
            <Container/>
            <Typography gutterBottom variant="h2" component="div">
                TECHNOLOGY
            </Typography>
            <img src="http://autopro.jwsuperthemes.com/wp-content/uploads/2016/12/1111.jpg" alt="" />
            <Grid container spacing={2}>
                {
                    technology.map(tg => <Grid
                        key={tg._id}
                        item xs={12} md={4}
                    >
                        <img src={tg.icon} width="200px" alt="" />
                        <p>{tg.name}</p>
                        <p>{tg.description}</p>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Technology;