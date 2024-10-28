import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import './statistics.css';

const StatsSection = () => {
    return (
        <section className="stats-section">
            <Typography variant="h2" className="stats-title">
                Notre Impact en Chiffres
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h3">1 200+</Typography>
                            <Typography>Animaux Adoptés</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h3">250+</Typography>
                            <Typography>Bénévoles</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h3">50 000€+</Typography>
                            <Typography>Dons Collectés</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h3">500+</Typography>
                            <Typography>Sauvetages Réussis</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div className="stats-image">
                <img src="https://your-image-url.com/stats-illustration.jpg" alt="Illustration des statistiques du refuge" />
            </div>
        </section>
    );
};

export default StatsSection;
