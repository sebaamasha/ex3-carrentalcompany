import React, { useState, useEffect } from 'react';
import { Typography, Checkbox, FormControlLabel, Slider, Box } from '@mui/material';
import carsData from '../data/cars.json'; 

function Filters({ onFilterChange }) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCapacities, setSelectedCapacities] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const carTypes = Array.from(
    carsData.reduce((acc, car) => acc.add(car.type), new Set())
  ).map((type) => ({
    label: type,
    count: carsData.filter((car) => car.type === type).length,
  }));

  const capacities = Array.from(
    carsData.reduce((acc, car) => acc.add(car.capacity), new Set())
  ).map((capacity) => ({
    label: capacity,
    count: carsData.filter((car) => car.capacity === capacity).length,
  }));

  const maxPrice = Math.max(...carsData.map((car) => car.price_per_day));

  const handleTypeChange = (type) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(updatedTypes);
    updateFilters(updatedTypes, selectedCapacities, priceRange);
  };

  const handleCapacityChange = (capacity) => {
    const updatedCapacities = selectedCapacities.includes(capacity)
      ? selectedCapacities.filter((c) => c !== capacity)
      : [...selectedCapacities, capacity];
    setSelectedCapacities(updatedCapacities);
    updateFilters(selectedTypes, updatedCapacities, priceRange);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    updateFilters(selectedTypes, selectedCapacities, newValue);
  };

  const updateFilters = (types, capacities, price) => {
    onFilterChange({
      selectedTypes: types,
      selectedCapacities: capacities,
      priceRange: price,
    });
  };

  useEffect(() => {
    updateFilters(selectedTypes, selectedCapacities, priceRange);
  }, []);

  return (
    <Box style={{ width: '300px', padding: '20px', borderRight: '1px solid #ccc' }}>
      <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        Type
      </Typography>
      {carTypes.map((type) => (
        <FormControlLabel
          key={type.label}
          control={
            <Checkbox
              checked={selectedTypes.includes(type.label)}
              onChange={() => handleTypeChange(type.label)}
            />
          }
          label={`${type.label} (${type.count})`}
          style={{ display: 'block' }}
        />
      ))}

      <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>
        Capacity
      </Typography>
      {capacities.map((capacity) => (
        <FormControlLabel
          key={capacity.label}
          control={
            <Checkbox
              checked={selectedCapacities.includes(capacity.label)}
              onChange={() => handleCapacityChange(capacity.label)}
            />
          }
          label={`${capacity.label} (${capacity.count})`}
          style={{ display: 'block' }}
        />
      ))}

      <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: '20px' }}>
        Price per day
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={maxPrice}
      />
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Max: ${priceRange[1].toFixed(2)}
      </Typography>
    </Box>
  );
}

export default Filters;
