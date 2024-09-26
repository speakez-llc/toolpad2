import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import InsightsRounded from '@mui/icons-material/InsightsRounded';

export default function ProjectPage() {
  const [fadeIn, setFadeIn] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFadeIn(true);
    return () => setFadeIn(false);
  }, []);

  const handlePageTransition = (url) => {
    setFadeIn(false);
    setIsTransitioning(true);
    setTimeout(() => {
      router.push(url);
    }, 500); // Match the timeout duration with the fade-out duration
  };

  return (
    <Fade in={fadeIn} timeout={{ enter: 500, exit: 500 }}>
      <div>
        <Typography variant="h4" gutterBottom>
        <InsightsRounded style={{ margin: 8, verticalAlign: 'middle', fontSize: '3rem' }} />
          Classic analytics meets cutting-edge decision support...
        </Typography>
        <Grid item sm={12} margin={4}>
          <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is the content of the first card.
                </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is the content of the first card.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is the content of the second card.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is the content of the third card.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
}

ProjectPage.requireAuth = false;