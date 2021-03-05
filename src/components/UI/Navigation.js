import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {Box, Grid, Container} from '@material-ui/core/'

export const Navigation = () => (
  <Box component={'header'} className="header">
  <Container>
    <Grid 
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <div className="header-logo"><Link to="/">GitHub Searcher</Link></div>

      <nav className="header-menu">
        <NavLink  to="/" exact className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">Information</NavLink>
      </nav>
    </Grid>
  </Container>
  </Box>
)
