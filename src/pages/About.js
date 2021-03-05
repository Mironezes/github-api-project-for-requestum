import React from 'react'
import {Paper} from '@material-ui/core/'

export const About = () => {

  return (
      <Paper component="section" className="about-app">
          <h1>Information</h1>
          <p>Current app version: <strong>1.2.1</strong></p>
          <p>Latest update: <strong>3/5/2021</strong></p> 
      </Paper>
  )
}