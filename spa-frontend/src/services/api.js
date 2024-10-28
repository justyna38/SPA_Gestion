import axios from 'axios';

// Définit la base de l'URL de l'API
const API_URL = process.env.BACKEND || "http://localhost:8080"; // URL de ton serveur Node.js
//const API_URL = process.env.REACT_APP_API_BACKEND;
const test = `${API_URL}/animals`;
console.log("Ceci est un test",test);
// Fonction pour obtenir les animaux depuis l'API
export const getAnimals = async () => {
  try {

    console.log(API_URL);
    const response = await axios.get(`${API_URL}/animals`);
    return response.data;
  } catch (error) {
    console.error('Error fetching animals:', error);
    throw error;
  }
};

export const getLocations = async () => {
  try {
    const response = await axios.get(`${API_URL}/locations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching location:', error);
    throw error;
  }
};


export const getSexe = async () => {
  try {
    const response = await axios.get(`${API_URL}/sexe`);
    return response.data;
  } catch (error) {
    console.error('Error fetching species:', error);
    throw error;
  }
};

export const getSpecies = async () => {
  try {
    const response = await axios.get(`${API_URL}/species`);
    return response.data;
  } catch (error) {
    console.error('Error fetching species:', error);
    throw error;
  }
};
export const getCategory = async () => {
  try {
    const response = await axios.get(`${API_URL}/category`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error;
  }
};
export const getFur = async () => {
  try {
    const response = await axios.get(`${API_URL}/fur`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fur:', error);
    throw error;
  }
};

export const getHealth = async () => {
  try {
    const response = await axios.get(`${API_URL}/health`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fur:', error);
    throw error;
  }
};
export const getRace = async () => {
  try {
    const response = await axios.get(`${API_URL}/race`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fur:', error);
    throw error;
  }
};
export const getRelations = async () => {
  try {
    const response = await axios.get(`${API_URL}/relations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fur:', error);
    throw error;
  }
};




export const createAnimal = async (animalData) => {
  try {
    const response = await axios.post(`${API_URL}/animals`, animalData);
    return response.data;
  } catch (error) {
    console.error('Error creating animal:', error);
    throw error;
  }
};