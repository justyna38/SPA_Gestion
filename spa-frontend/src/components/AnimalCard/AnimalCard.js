import React from "react";
import "./AnimalCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import imageDog from './images/laika.jpeg';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const categorizeAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
  
    if (ageYears === 0 && ageMonths < 12) {
        return `Chiot (${ageMonths} mois)`;
    } else if (ageYears < 7) {
        return `Adulte (${ageYears} ans)`;
    } else {
        return `Senior (${ageYears} ans)`;
    }
};

const AnimalCard = ({ image, name, location, race, age, gender, sos, onClick }) => {
    const ageCategory = categorizeAge(age);
    return (
        <div className="animalCard" onClick={onClick}>
            <Card className="card">
                <div className="image-container">
                    {sos && <div className="sos-circle">SOS</div>}
                    <CardMedia
                        component="img"
                        height="200"
                        image={imageDog}
                        alt={`Photo de ${name}`}
                    />
                </div>
                <CardContent>
                    <Typography variant="h5" component="div" className="name">
                        {name}
                    </Typography>
                    <Typography variant="body2" className="details">
                        {race} | {location} | {gender === 'male' ? <MaleIcon /> : <FemaleIcon />} | {ageCategory}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default AnimalCard;