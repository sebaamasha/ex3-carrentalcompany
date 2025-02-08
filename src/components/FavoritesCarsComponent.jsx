import React from 'react';
import CarCard from './CarCardComponent';

function FavoritesList({ favorites, onBack, onFavoriteToggle }) {
  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#3563E9',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Back to List
      </button>
      <h2 style={{ marginBottom: '20px', color: '#3563E9' }}>
        Favorites ({favorites.length})
      </h2>
      {favorites.length > 0 ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {favorites.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => {}}
              onFavoriteToggle={onFavoriteToggle}
              isFavorite={car.favorite}
            />
          ))}
        </div>
      ) : (
        <p style={{ color: '#8A8A8A' }}>No favorite cars yet!</p>
      )}
    </div>
  );
}

export default FavoritesList;
