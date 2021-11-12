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
        <Box sx={{my: '100px'}}>
            <Typography gutterBottom variant="h4" sx={{fontWeight: 'bold', my: '100px'}} component="div">
                TECHNOLOGY
            </Typography>
            <img src="http://autopro.jwsuperthemes.com/wp-content/uploads/2016/12/1111.jpg" width="100%" alt="" />
            <Grid container spacing={2} sx={{mt: "50px"}}>
                {
                    technology.map(tg => <Grid
                        key={tg._id}
                        item xs={12} md={4}
                    >
                        <img src={tg?.icon} width="200px" height="200px" alt="" />
                        <p>{tg?.name}</p>
                        <p>{tg?.description}</p>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Technology;