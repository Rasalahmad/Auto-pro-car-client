import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "react-rating";
import SkeletonDiv from "../../Shared/SkeletonDiv";
import "./Review.css";
import "../../Home/Services/Services.css";

const Review = () => {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://car-service-psi.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setCollection(data);
        setLoading(false);
      });
  }, []);
  return (
    <Box className="serviceContainer">
      <Box>
        <Typography variant="h4" sx={{ my: "50px" }} component="div">
          CLIENTS REVIEW
        </Typography>
        {!loading ? (
          <Grid container spacing={2}>
            {collection.map((pd) => (
              <Grid item xs={12} sm={6} md={4} key={pd._id}>
                <Card sx={{ maxWidth: 345, m: "20px auto" }}>
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
                    <Typography>
                      <Rating
                        className="rating"
                        initialRating={pd.rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                      ></Rating>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box className="skeleton-loader">
            <SkeletonDiv />
            <SkeletonDiv />
            <SkeletonDiv />
            <SkeletonDiv />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Review;
