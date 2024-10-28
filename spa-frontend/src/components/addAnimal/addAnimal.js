import React, { useState, useEffect } from 'react';
import { createAnimal, getLocations, getSexe, getSpecies, getCategory, getFur, getHealth, getRelations, getRace } from '../../services/api';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, FormGroup } from '@mui/material';

const AddAnimal = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [outDate, setOutDate] = useState(''); // Ajouté pour Out_Date
  const [birthdate, setBirthdate] = useState(''); // Ajouté pour Birthdate
  const [available, setAvailable] = useState(false);
  const [identification, setIdentification] = useState(false);
  const [species, setSpecies] = useState([]);
  const [sexes, setSexes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]); // Pour les catégories
  const [furs, setFurs] = useState([]); // Pour les types de fourrure
  const [healths, setHealths] = useState([]); // Pour les états de santé
  const [relations, setRelations] = useState([]); // Pour les relations
  const [races, setRaces] = useState([]); // Pour les races

  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [selectedSexe, setSelectedSexe] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFur, setSelectedFur] = useState('');
  const [selectedHealth, setSelectedHealth] = useState('');
  const [selectedRelation, setSelectedRelation] = useState('');
  const [selectedRace, setSelectedRace] = useState('');

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const speciesData = await getSpecies();
        const sexesData = await getSexe();
        const locationsData = await getLocations();
        const categoriesData = await getCategory();
        const fursData = await getFur();
        const healthsData = await getHealth();
        const relationsData = await getRelations();
        const racesData = await getRace();

        setSpecies(speciesData);
        setSexes(sexesData);
        setLocations(locationsData);
        setCategories(categoriesData);
        setFurs(fursData);
        setHealths(healthsData);
        setRelations(relationsData);
        setRaces(racesData);
      } catch (error) {
        console.error('Erreur lors de la récupération des options:', error);
      }
    };
    fetchOptions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const animalData = {
      Name: name,
      Age: age,
      Entry_Date: entryDate,
      Out_Date: outDate, // Ajouté pour Out_Date
      Birthdate: birthdate, // Ajouté pour Birthdate
      Available: available,
      Identification_Number: identification,
      ID_Species: selectedSpecies,
      ID_Sexe: selectedSexe,
      ID_Location: selectedLocation,
      ID_Category: selectedCategory, // Ajouté pour Category
      ID_Fur: selectedFur, // Ajouté pour Fur
      ID_Health: selectedHealth, // Ajouté pour Health
      ID_Relation: selectedRelation, // Ajouté pour Relation
      ID_Race: selectedRace, // Ajouté pour Race
    };

    try {
      const response = await createAnimal(animalData);
      console.log('Animal ajouté avec succès:', response);

      // Réinitialiser les champs
      setName('');
      setAge('');
      setEntryDate('');
      setOutDate('');
      setBirthdate('');
      setAvailable(false);
      setSelectedSpecies('');
      setSelectedSexe('');
      setSelectedLocation('');
      setSelectedCategory('');
      setSelectedFur('');
      setSelectedHealth('');
      setSelectedRelation('');
      setSelectedRace('');
    } catch (error) {
      console.error("Erreur lors de la création de l'animal:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
      <TextField label="Nom" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Âge" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      <TextField label="Date d'entrée" type="date" value={entryDate} onChange={(e) => setEntryDate(e.target.value)} required InputLabelProps={{ shrink: true }} />
      <TextField label="Date de sortie" type="date" value={outDate} onChange={(e) => setOutDate(e.target.value)}  InputLabelProps={{ shrink: true }} />
      <TextField label="Date de naissance" type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required InputLabelProps={{ shrink: true }} />
      <TextField label="Identification" type="number" value={identification} onChange={(e) => setIdentification(e.target.value)} />
      <FormControl>
        <InputLabel>Espèce</InputLabel>
        <Select value={selectedSpecies || ''} onChange={(e) => setSelectedSpecies(e.target.value)} required>
          {species.map((specie) => (
            <MenuItem key={specie.ID_Species} value={specie.ID_Species}>
              {specie.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Sexe</InputLabel>
        <Select value={selectedSexe || ''} onChange={(e) => setSelectedSexe(e.target.value)} required>
          {sexes.map((sex) => (
            <MenuItem key={sex.ID_Sexe} value={sex.ID_Sexe}>
              {sex.Type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Localisation</InputLabel>
        <Select value={selectedLocation || ''} onChange={(e) => setSelectedLocation(e.target.value)} required>
          {locations.map((location) => (
            <MenuItem key={location.ID_Location} value={location.ID_Location}>
              {location.City}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Catégorie</InputLabel>
        <Select value={selectedCategory || ''} onChange={(e) => setSelectedCategory(e.target.value)} required>
          {categories.map((category) => (
            <MenuItem key={category.ID_Category} value={category.ID_Category}>
              {category.Description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Type de fourrure</InputLabel>
        <Select value={selectedFur || ''} onChange={(e) => setSelectedFur(e.target.value)} required>
          {furs.map((fur) => (
            <MenuItem key={fur.ID_Fur} value={fur.ID_Fur}>
              {fur.Type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>État de santé</InputLabel>
        <Select value={selectedHealth || ''} onChange={(e) => setSelectedHealth(e.target.value)} required>
          {healths.map((health) => (
            <MenuItem key={health.ID_Health} value={health.ID_Health}>
              {health.Disease}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Relation</InputLabel>
        <Select value={selectedRelation || ''} onChange={(e) => setSelectedRelation(e.target.value)} required>
          {relations.map((relation) => (
            <MenuItem key={relation.ID_Relation} value={relation.ID_Relation}>
              {relation.Type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Race</InputLabel>
        <Select value={selectedRace || ''} onChange={(e) => setSelectedRace(e.target.value)} required>
          {races.map((race) => (
            <MenuItem key={race.ID_Race} value={race.ID_Race}>
              {race.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormGroup>
        <label>
          <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
          Disponible
        </label>
      </FormGroup>

      <Button type="submit" variant="contained" color="primary">
        Ajouter l'animal
      </Button>
    </form>
  );
};

export default AddAnimal;