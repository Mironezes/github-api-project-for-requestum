import React, {useContext, useEffect} from 'react'
import {GithubContext} from '../context/github/githubContext'
import {Box, Card, Grid} from '@material-ui/core/'

export const History = () => {

  const {getPrevRequest, clearSearch, prevRequests: list} = useContext(GithubContext)

  useEffect(() => {
    getPrevRequest()
    return () => {
      clearSearch()
    }
  }, [])
  

  return (
    <Box component="section" className="history">
      <h3>Recent search requests</h3>
      {list.length > 0 
      ? <Grid container spacing={3}>
          {list.slice(0, 5).map((item, index) => {
            return (
              <Grid item sm={3} key={index}>
                <Card className="history-tile" >{item}</Card>
              </Grid>
            )
          })}
        </Grid>
      : <span>No data</span>  
      }
    </Box>

  )
}