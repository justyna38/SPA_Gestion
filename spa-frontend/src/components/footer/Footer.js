import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#f8f9fa', padding: '20px 0' }}>
            <Container>
                <Typography variant="h6" align="center" gutterBottom>
                    Suivez-nous sur les réseaux sociaux
                </Typography>
                <Box display="flex" justifyContent="center">
                    <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook" color="primary">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton href="https://www.twitter.com" target="_blank" aria-label="Twitter" color="primary">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram" color="primary">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" color="primary">
                        <LinkedInIcon />
                    </IconButton>
                </Box>
                <Typography variant="body2" align="center" color="textSecondary" style={{ marginTop: '20px' }}>
                    &copy; {new Date().getFullYear()} SPA Animal Shelter. Tous droits réservés.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
