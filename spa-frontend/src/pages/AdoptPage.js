// pages/AdoptPage.js
import Header from '../components/header/Header';
import AnimalCard from '../components/AnimalCard/AnimalCard';
import ModalAnimal from '../components/modalAnimal/modalAnimal';
import './AdoptPage.css';
import SideBarreFilter from "../components/sideBarreFilter/SideBarreFilter";
import { Grid, Pagination, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getAnimals } from '../services/api';

const AdoptPage = () => {
  const [page, setPage] = useState(1);
  const animalsPerPage = 6;
  const [selectedSpecie, setSelectedSpecie] = useState('');
  const [selectedSex, setSelectedSex] = useState('');  // État pour le filtre sexe
  const [selectedLocation, setSelectedLocation] = useState('');
  const [animals, setAnimals] = useState([]); // Tableau d'animaux récupéré de l'API
  const [loading, setLoading] = useState(true);
  const [loadingFilters, setLoadingFilters] = useState(false); 
  const [filteredAnimals, setFilteredAnimals] = useState([]); // État pour les animaux filtrés

  const fetchAnimals = async () => {
    try {
      const data = await getAnimals(); // Récupération des animaux
      setAnimals(data); // Mise à jour de l'état
      setFilteredAnimals(data); // Initialiser filteredAnimals avec tous les animaux
      setLoading(false); // Fin du chargement
    } catch (error) {
      console.error('Erreur lors de la récupération des animaux:', error);
      setLoading(false); // Même en cas d'erreur, on arrête le chargement
    }
  };

  useEffect(() => {
    fetchAnimals(); // Appel de la fonction pour récupérer les animaux
  }, []);

  const applyFilters = async () => {
    setLoadingFilters(true); // Commencer le chargement des filtres
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulation du délai de 2 secondes

    // Filtrer les animaux
    const newFilteredAnimals = animals.filter(animal => {
      const matchSpecies = selectedSpecie === '' || animal.SpeciesName === selectedSpecie;
      const matchSex = selectedSex === '' || animal.SexeType === selectedSex;
      const matchLocation = selectedLocation === '' || animal.Location_ID_Location === selectedLocation;

      return matchSex && matchLocation && matchSpecies; // retourne vrai seulement si les deux conditions sont remplies
    });

    setFilteredAnimals(newFilteredAnimals); // Mettre à jour les animaux filtrés
    setLoadingFilters(false); // Fin du chargement des filtres
  };

  const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage);

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  const indexOfLastAnimal = page * animalsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
  const currentAnimals = filteredAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleOpenModal = (animal) => {
    const fullAnimalInfo = {
      Name: animal.AnimalName,
      Sexe: animal.SexeType,
      Age: animal.Age,
      City: animal.City,
      Fur: animal.FurType,
      Available: animal.Available,
      Race: animal.RaceName,
      Relation: animal.RelationType,
      Specie: animal.SpeciesName,
      Health: animal.HealthDisease,
      EntryDate: animal.Entry_Date,
      BirthDate: animal.BirthDate,
      Category: animal.CategoryDescription
    };
    setSelectedAnimal(fullAnimalInfo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Grid container spacing={2}>
      {/* Sidebar à gauche */}
      <Grid item xs={12} md={4}>
        <div className="container">
          <div className="side-barre-filter">
            <SideBarreFilter 
              selectedSpecie ={selectedSpecie}
              setSelectedSpecie={setSelectedSpecie}
              selectedSex={selectedSex}
              setSelectedSex={setSelectedSex}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              onApplyFilters={applyFilters}
            />
          </div>
        </div>
      </Grid>

      {/* Cartes des animaux */}
      <Grid item xs={12} md={8}>
        {loading ? (
          <p>Chargement des animaux...</p> // Affichage pendant le chargement initial
        ) : loadingFilters ? ( // Vérification si les filtres sont en train d'être appliqués
        <div className="loading-container"> {/* Nouveau conteneur pour le chargement */}
            <CircularProgress />
           </div>
        ) : (
          <div className="animalCards">
            {currentAnimals.length > 0 ? (
              currentAnimals.map((animal, index) => (
                <AnimalCard
                  key={index}
                  name={animal.AnimalName} 
                  race={animal.RaceName}
                  location={`${animal.City}`}
                  age={animal.Birthdate}
                  onClick={() => handleOpenModal(animal)}
                />
              ))
            ) : (
              <p>Aucun animal trouvé.</p> // Si aucun animal ne correspond aux filtres
            )}
          </div>
        )}
        <Pagination
          count={Math.ceil(filteredAnimals.length / animalsPerPage)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Grid>

      {/* Modal for Animal Details */}
      <ModalAnimal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        selectedAnimal={selectedAnimal}
      />
    </Grid>
  );
};

export default AdoptPage;