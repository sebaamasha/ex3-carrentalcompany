import React, { useState } from 'react';
import Filters from '../components/FilterComponent';
import CarList from '../components/CarListComponent';
import CarDetails from '../components/CarDetailsComponent';
import FavoritesList from '../components/FavoritesCarsComponent';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';

function HomePage() {
  const [filters, setFilters] = useState({
    selectedTypes: [],
    selectedCapacities: [],
    priceRange: [0, 100],
  });
  const [selectedView, setSelectedView] = useState('list'); 
  const [selectedCar, setSelectedCar] = useState(null);
  const [favorites, setFavorites] = useState([]); 

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setSelectedView('details'); 
  };

  const handleFavoriteToggle = (car) => {
    car.favorite = !car.favorite; 
    setFavorites((prevFavorites) =>
      car.favorite
        ? [...prevFavorites, car] 
        : prevFavorites.filter((fav) => fav.id !== car.id) 
    );
  };
  

  const handleFavoritesClick = () => {
    setSelectedView('favorites');
  };

  const handleBackToList = () => {
    setSelectedView('list'); 
    setSelectedCar(null);
  };
  const handleHomeClick = () => {
    setSelectedView('list');
    setSelectedCar(null);
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onFavoritesClick={handleFavoritesClick} onHomeClick={handleHomeClick} />
        <main style={{ flex: 1, display: 'flex', width: '100%' }}>
        <Filters onFilterChange={handleFilterChange} />
        <div style={{ flex: 1, padding: '20px' }}>
        {selectedView === 'list' && (
            <CarList
              filters={filters}
              onCarSelect={handleCarSelect}
              onFavoriteToggle={handleFavoriteToggle}
              favorites={favorites}
            />
          )}
          {selectedView === 'details' && selectedCar && (
            <CarDetails car={selectedCar} onBack={handleBackToList} />
          )}
          {selectedView === 'favorites' && (
            <FavoritesList favorites={favorites} onBack={handleBackToList} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
