import React from 'react';
import carsData from '../data/cars.json'; 
import CarCard from './CarCardComponent';

function CarList({ filters, onCarSelect, onFavoriteToggle, favorites }) {
  const { selectedTypes, selectedCapacities, priceRange } = filters;

  const filteredCars = carsData.filter((car) => {
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(car.type);
    const matchesCapacity =
      selectedCapacities.length === 0 ||
      selectedCapacities.includes(car.capacity);
    const matchesPrice =
      car.price_per_day >= priceRange[0] && car.price_per_day <= priceRange[1];
    return matchesType && matchesCapacity && matchesPrice;
  });

  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#3563E9' }}>
        Cars Catalogue ({filteredCars.length} Cars)
      </h2>
  
      {filteredCars.length > 0 ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => onCarSelect(car)} 
              onFavoriteToggle={onFavoriteToggle} 
              isFavorite={favorites.some((fav) => fav.id === car.id)} 
            />
          ))}
        </div>
      ) : (
        <p style={{ color: '#8A8A8A', fontSize: '16px' }}>
          No cars found matching your criteria.
        </p>
      )}
    </div>
  );  
}

export default CarList;
