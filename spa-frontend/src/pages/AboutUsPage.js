import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import './AboutUsPage.css';

const AboutPage = () => {
    return (
        <Container>
            <Grid container spacing={4} style={{ marginTop: '20px' }}>
                {/* Notre Mission */}
                <Grid item xs={12}>
                    <Card className="card" style={{ display: 'flex', height: '350px' }}>
                        <Box sx={{ width: '33%', display: 'flex' }}>
                            <CardMedia
                                component="img"
                                alt="Notre mission"
                                image="https://images.unsplash.com/photo-1690068023705-11ace51ef86d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="Notre Mission"
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                        <CardContent sx={{ width: '67%' }}>
                            <Typography variant="h4" gutterBottom color="primary">
                                Notre Mission
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Nous sommes un groupe dévoué à la protection des animaux, inspiré par les valeurs de la Société Protectrice des Animaux.
                                Notre mission est de fournir un refuge sûr et aimant aux animaux abandonnés ou maltraités, en leur offrant une seconde chance
                                de trouver une famille aimante.
                            </Typography>
                            <Button variant="contained" color="primary" href="/mission">
                                En savoir plus
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Nos Valeurs */}
                <Grid item xs={12}>
                    <Card className="card" style={{ display: 'flex', height: '350px' }}>
                        <Box sx={{ width: '33%', display: 'flex' }}>
                            <CardMedia
                                component="img"
                                alt="Nos valeurs"
                                image="https://images.unsplash.com/photo-1551779891-b83901e1f8b3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="Nos Valeurs"
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                        <CardContent sx={{ width: '67%' }}>
                            <Typography variant="h4" gutterBottom color="primary">
                                Nos Valeurs
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Nos valeurs sont basées sur le respect, la bienveillance et la compassion envers tous les animaux. Nous croyons que chaque vie animale mérite protection et dignité.
                            </Typography>
                            <Button variant="contained" color="primary" href="/valeurs">
                                En savoir plus
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Notre Équipe */}
                <Grid item xs={12}>
                    <Card className="card" style={{ display: 'flex', height: '350px' }}>
                        <Box sx={{ width: '33%', display: 'flex' }}>
                            <CardMedia
                                component="img"
                                alt="Notre équipe"
                                image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="Notre Équipe"
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                        <CardContent sx={{ width: '67%' }}>
                            <Typography variant="h4" gutterBottom color="primary">
                                Notre Équipe
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Notre équipe est composée de passionnés d'animaux, bénévoles et professionnels, qui partagent une même vision : offrir une meilleure vie aux animaux abandonnés.
                            </Typography>
                            <Button variant="contained" color="primary" href="/equipe">
                                En savoir plus
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
};

export default AboutPage;
