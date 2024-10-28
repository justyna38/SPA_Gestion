import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets'; // Pour l'adoption
import InfoIcon from '@mui/icons-material/Info'; // Pour "À propos"

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SPA Animal Shelter
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    <HomeIcon /> Home
                </Button>
                <Button color="inherit" component={Link} to="/adopt">
                    <PetsIcon /> Adopt
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    <InfoIcon /> About Us
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;