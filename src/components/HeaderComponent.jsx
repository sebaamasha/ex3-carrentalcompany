import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Favorite, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Header({ onFavoritesClick, onHomeClick }) {
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', padding: '0 20px' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          style={{ cursor: 'pointer', fontWeight: 'bold', color: '#3563E9' }}
          onClick={() => {
            navigate('/');
            onHomeClick();
          }}
        >
          ShenCarCar
        </Typography>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '5px 15px',
            width: '40%',
            borderBlockColor: '#596780',
          }}
        >
          <Search style={{ color: '#C3D4E966', marginRight: '5px' }} />
          <input
            type="text"
            placeholder="Search cars..."
            style={{
              border: 'none',
              outline: 'none',
              width: '100%',
            }}
          />
        </div>

        <IconButton onClick={onFavoritesClick} style={{ color: '#596780' }}>
          <Favorite />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
