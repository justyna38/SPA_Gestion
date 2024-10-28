// components/sideBarreFilter/SideBarreFilter.js

import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { getLocations, getSexe, getSpecies } from '../../services/api';

const SideBarreFilter = ({ selectedSex, setSelectedSex, selectedLocation, setSelectedLocation, selectedSpecie, setSelectedSpecie, onApplyFilters }) => {
  const [locations, setLocations] = useState([]);
  const [sexes, setSexes] = useState([]);
  const [species, setSpecies] = useState([]);
  const [loadingLocations, setLoadingLocations] = useState(true);
  const [loadingSexes, setLoadingSexes] = useState(true);
  const [loadingSpecies, setLoadingSpecies] = useState(true);

  const fetchLocations = async () => {
    try {
      const data = await getLocations();
      setLocations(data);
      setLoadingLocations(false);
    } catch (error) {
      console.error("Error fetching locations:", error);
      setLoadingLocations(false);
    }
  };

  const fetchSexe = async () => {
    try {
      const data = await getSexe();
      setSexes(data);
      setLoadingSexes(false);
    } catch (error) {
      console.error("Error fetching sexe:", error);
      setLoadingSexes(false);
    }
  };

  const fetchSpecies = async () => {
    try {
      const data = await getSpecies();
      setSpecies(data);
      setLoadingSpecies(false);
    } catch (error) {
      console.error("Error fetching species:", error);
      setLoadingSpecies(false);
    }
  };

  useEffect(() => {
    fetchLocations();
    fetchSexe();
    fetchSpecies();
  }, []);

  const handleSexChange = (event) => {
    setSelectedSex(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSpecieChange = (event) => {
    setSelectedSpecie(event.target.value);
  };

  return (
    <div className="sidebar-filter">
      <FormControl fullWidth margin="normal" disabled={loadingSpecies}>
        <InputLabel id="spacie-select-label">Quel animal</InputLabel>
        <Select
          labelId="spacie-select-label"
          value={selectedSpecie || ""} 
          onChange={handleSpecieChange}
        >
          <MenuItem value="">Tous</MenuItem>
          {species.map((specie) => (
            <MenuItem key={specie.Name} value={specie.Name}>
              {specie.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal" disabled={loadingSexes}>
        <InputLabel id="sex-select-label">Sexe</InputLabel>
        <Select
          labelId="sex-select-label"
          value={selectedSex || ""} 
          onChange={handleSexChange}
        >
          <MenuItem value="">Tous</MenuItem>
          {sexes.map((sexe) => (
            <MenuItem key={sexe.Type} value={sexe.Type}>
              {sexe.Type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal" disabled={loadingLocations}>
        <InputLabel id="location-select-label">Localisation</InputLabel>
        <Select
          labelId="location-select-label"
          value={selectedLocation || ""} 
          onChange={handleLocationChange}
        >
          <MenuItem value="">Toutes</MenuItem>
          {locations.map((location) => (
            <MenuItem key={location.ID_Location} value={location.ID_Location}>
              {location.City}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={onApplyFilters}
        style={{ marginTop: '16px' }}
      >
        Appliquer les filtres
      </Button>
    </div>
  );
};

export default SideBarreFilter;