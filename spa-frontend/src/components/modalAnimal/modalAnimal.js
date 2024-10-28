import React from 'react';
import { Modal } from '@mui/material';
import './modalAnimal.css';
import imageDog from '../AnimalCard/images/laika.jpeg';

const ModalAnimal = ({ isOpen, handleClose, selectedAnimal }) => {
  console.log(selectedAnimal);
  const formattedEntryDate = selectedAnimal && selectedAnimal.EntryDate 
  ? new Date(selectedAnimal.EntryDate).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long', // '2-digit' pour le mois numérique
      day: 'numeric'
    }) 
  : 'Date non disponible';
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="animal-details-modal-title"
      aria-describedby="animal-details-modal-content"
    >
      <div className="animal-details-modal">
        {selectedAnimal ? (
          <div className="modal-content">
            <img src={imageDog} alt={selectedAnimal.name} className="animal-image" />
            <div className="animal-info">
              <h2 id="animal-details-modal-title">{selectedAnimal.Name}</h2>
              <p><strong>Nom:</strong> {selectedAnimal.Name}</p>
              <p><strong>Âge:</strong> {selectedAnimal.Age} ans</p>
              <p><strong>Date d'entrée:</strong> {formattedEntryDate}</p>
              <p><strong>Disponible:</strong> {selectedAnimal.Available ? "Oui" : "Non"}</p>
              <p><strong>Espèce ID:</strong> {selectedAnimal.Specie}</p>
              <p><strong>Sexe:</strong> {selectedAnimal.Sexe}</p>
              <p><strong>Race:</strong> {selectedAnimal.Race}</p>
              <p><strong>Fur:</strong> {selectedAnimal.Fur}</p>
              <p><strong>Catégorie:</strong> {selectedAnimal.Category}</p>
              <p><strong>Relation ID:</strong> {selectedAnimal.Relation}</p>
              <p><strong>Santé:</strong> {selectedAnimal.Health}</p>
              <p><strong>Localisation ID:</strong> {selectedAnimal.City}</p>
            </div>
          </div>
        ) : (
          <p>Aucun animal sélectionné</p>
        )}
      </div>
    </Modal>
  );
}

export default ModalAnimal;