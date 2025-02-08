import React, { useState } from 'react';

function CarDetails({ car }) {
  const [isFavorite, setIsFavorite] = useState(car.favorite);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <div
          style={{
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#E0E7FF',
            padding: '10px',
          }}
        >
          <img
            src={car.image}
            alt={car.name}
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <img
            src={car.image}
            alt="Thumbnail 1"
            style={{
              width: '70px',
              height: '50px',
              borderRadius: '5px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
          <img
            src={car.view2}
            alt="Thumbnail 2"
            style={{
              width: '70px',
              height: '50px',
              borderRadius: '5px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
          <img
            src={car.view3}
            alt="Thumbnail 3"
            style={{
              width: '70px',
              height: '50px',
              borderRadius: '5px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' }}>{car.name}</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', margin: '10px 0' }}>
          <span style={{ color: '#FBBF24', fontSize: '18px' }}>
            {'★'.repeat(Math.floor(car.rating))}
            {'☆'.repeat(5 - Math.floor(car.rating))}
          </span>
          <span style={{ color: '#8A8A8A', fontSize: '14px' }}>
            {car.review_count} Reviewers
          </span>
        </div>

        <p style={{ color: '#596780', margin: '10px 0' }}>{car.description}</p>

        <div style={{ marginBottom: '15px' }}>
          <p style={{ margin: '5px 0' }}>
            <strong>Type Car:</strong> {car.type}
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Capacity:</strong> {car.capacity}
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Steering:</strong> {car.transmission}
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Gasoline:</strong> {car.fuel_capacity}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>${car.price_per_day} / days</p>
          <button
            style={{
              backgroundColor: '#3563E9',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
