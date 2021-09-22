import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import blogg from "./images/blogg.png"

const App = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Mini Blogger</Typography>
                <img src={blogg} alt='blog' height="60" />
            </AppBar>
        </Container>
    );
};

export default App;