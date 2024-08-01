import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Beerlist = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/beers/ale"
        );

        //replacing
        const mappedBeer = response.data.map((beer) => ({
          ...beer,
          newEntity: beer.price.replace("$", ""),
        }));

        //then sorting
        const sortedBeers = mappedBeer.sort(
          (a, b) => a.newEntity - b.newEntity
        );

        //filtering
        const filteredBeers = sortedBeers.filter(
          (beer) => beer.rating.average > 4.5
        );

        setBeers(filteredBeers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <Container>
      <Grid container spacing={3} m={1}>
        {beers.map((beer) => (
          <Grid item xs={12} sm={6} md={4} key={beer?.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={beer?.image}
                alt={beer?.name}
              />
              <CardContent>
                <Typography variant="h6">{beer?.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {beer?.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {beer?.rating.average} ({beer?.rating.reviews}{" "}
                  reviews)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Beerlist;
