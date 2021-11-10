import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './Footer.css'

const Footer = () => {
    return (
        <Box className='footer-container'>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', my: '20px' }} component="div">
                        CONTACT US
                    </Typography>
                    <Typography variant="body1" component="div">
                        <i className="fas fa-phone"></i> ++8018-362-990-90 <br />
                        <i class="fas fa-map-marker"></i> VIP Road, Bandarban Saadar, Bandarban, Bangladesh <br />
                        <i class="fas fa-envelope"></i> autopro@gmail.com
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: '20px' }} component="div">
                        CONNECT WITH SOCIAL MEDIA
                    </Typography>
                    <Typography variant="body1" component="div">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-google-plus-g"></i>
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', my: '20px' }} component="div">
                        INFORMATION
                    </Typography>
                    <Typography variant="body1" component="div">
                        About Us <br />
                        Contact Us <br />
                        FAQ? <br />
                        News <br />
                        Autopro Global <br />
                        Advance Search <br />
                        Sills Map <br />
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', my: '20px' }} component="div">
                        INFORMATION
                    </Typography>
                    <Typography variant="body1" component="div">
                        Meseum <br />
                        Esperienza <br />
                        Academia <br />
                        Events <br />
                        Shopping & Auction <br />
                        Advance Search <br />
                        Careers <br />
                        Mobile App   <br />
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', my: '20px' }} component="div">
                        SUBSCRIBE NEWSLETTER
                    </Typography>
                    <Typography variant="body1" component="div">
                        Enter your email address below to subscribe to my newsletter. Get update surveys and offers
                    </Typography>
                    <Box>
                        <TextField id="standard-basic" sx={{ width: '75%', my: '15px', color: '#fff' }} label="Your Email" type="email" variant="standard" />
                        <Button sx={{ width: '75%', color: '#fff' }} variant="outlined">Subscribe</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;