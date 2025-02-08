import React from 'react';
import { Favorite } from '@mui/icons-material';

function CarCard({ car, onClick, onFavoriteToggle }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #EDEDED',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        width: '250px',
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      <img
        src={car.image}
        alt={car.name}
        style={{
          width: '100%',
          height: '150px',
          borderRadius: '10px',
        }}
      />

      <div style={{ marginTop: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>{car.name}</h3>
          <Favorite
            onClick={(e) => {
              e.stopPropagation(); 
              onFavoriteToggle(car); 
            }}
            style={{
              color: car.favorite ? 'red' : 'gray',
              cursor: 'pointer',
            }}
          />
        </div>
        <p style={{ margin: '5px 0', color: '#8A8A8A', fontSize: '14px' }}>{car.type}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '12px', color: '#8A8A8A' }}>
        <div>
          <img src={car.fuel_capacity_icon} alt="Fuel" style={{ width: '16px', marginRight: '5px' }} />
          {car.fuel_capacity}
        </div>
        <div>
          <img src={car.transmission_icon} alt="Transmission" style={{ width: '16px', marginRight: '5px' }} />
          {car.transmission}
        </div>
        <div>
          <img src={car.capacity_icon} alt="Capacity" style={{ width: '16px', marginRight: '5px' }} />
          {car.capacity}
        </div>
      </div>

      <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>${car.price_per_day} / day</p>
        <button
          style={{
            backgroundColor: '#3563E9',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default CarCard;
