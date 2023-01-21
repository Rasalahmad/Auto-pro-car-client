import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import "./CarDetails.css";

const CarDetails = () => {
  const { carId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://car-service-psi.vercel.app/carDetails/${carId}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, [carId]);
  return (
    <Box className="container">
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{ my: "100px", fontWeight: "bold" }}
      >
        <span style={{ color: "blue" }}>{details?.name}'s</span> SPECIFICATION
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image={details?.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {details?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price ${details?.price}
              </Typography>
            </CardContent>
            <CardActions className="cardAction">
              <NavLink
                style={{ textDecoration: "none", color: "#fff" }}
                to={`/userDetails/${details._id}`}
              >
                <Button size="small" variant="contained" color="success">
                  Place Order
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} md={6}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Brand Name</th>
                <td>{details?.name}</td>
              </tr>
              <tr>
                <th scope="row">Body Style</th>
                <td>{details?.bodyStyle}</td>
              </tr>
              <tr>
                <th scope="row">Engine</th>
                <td>{details?.engine}</td>
              </tr>
              <tr>
                <th scope="row">Color</th>
                <td>{details?.color}</td>
              </tr>
              <tr>
                <th scope="row">Drive Type</th>
                <td>{details?.driveType}</td>
              </tr>
              <tr>
                <th scope="row">Transmission</th>
                <td>{details?.transmission}</td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarDetails;
