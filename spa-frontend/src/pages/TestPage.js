import React, { useEffect } from 'react';
import axios from 'axios';

const TestPage = () => {
  useEffect(() => {
    // Fonction pour tester la connexion
    const serveurBackend = process.env.BACKEND || "http://localhost:8080";
    const query = "/test-connection";

    const testConnection = async () => {
      try {
        const response = await axios.get(serveurBackend+query); // Route de test Node.js
        console.log(response.data.message); // Affiche la réponse dans la console
      } catch (error) {
        console.error('Error connecting to server:', error);
      }
    };

    testConnection(); // Appel à la fonction de test lors du montage du composant
  }, []);

  return (
    <div>
      <h1>Test de Connexion</h1>
    </div>
  );
};

export default TestPage;