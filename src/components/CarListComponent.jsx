import React from 'react';
import { Grid, Typography } from '@mui/material';
import carsData from '../data/cars.json';
import CarCard from './CarCardComponent';

function CarList() {
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      {/* כותרת הקטלוג */}
      <Typography variant="h5" style={{ marginBottom: '20px' }}>
        Cars Catalogue ({carsData.length} Cars)
      </Typography>

      {/* גריד של רכבים */}
      <Grid container spacing={3}>
        {carsData.map((car) => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CarList;
