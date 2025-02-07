import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

function CarCard({ car }) {
  const [isFavorite, setIsFavorite] = useState(car.favorite);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card style={{ borderRadius: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
      {/* תמונת הרכב */}
      <CardMedia
        component="img"
        height="140"
        image={car.image}
        alt={car.name}
      />

      {/* פרטי הרכב */}
      <CardContent>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          {car.name}
        </Typography>
        <Typography variant="body2" style={{ color: '#757575' }}>
          {car.type}
        </Typography>
        <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '10px' }}>
          ${car.price_per_day} / day
        </Typography>

        {/* כפתור לב */}
        <IconButton onClick={handleFavoriteToggle} style={{ color: isFavorite ? '#f44336' : '#757575' }}>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>

        {/* כפתור Rent Now */}
        <Button
          variant="contained"
          color="primary"
          style={{ float: 'right', marginTop: '-40px', borderRadius: '20px' }}
        >
          Rent Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default CarCard;
