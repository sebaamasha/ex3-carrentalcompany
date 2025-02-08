import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePagetemp';
import FavoritesPage from './components/FavoritesCarsComponent';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (car) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.id === car.id)) {
        return prevFavorites.filter((fav) => fav.id !== car.id); 
      } else {
        return [...prevFavorites, car]; 
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
