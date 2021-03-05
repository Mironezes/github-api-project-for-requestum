import React from 'react'
import PropTypes from 'prop-types'
import {Box, Grid, Card, CardContent} from '@material-ui/core/'

export const UserRepositories = ({repos}) => {

  UserRepositories.defaultProps = {
    repos: []
  }

  UserRepositories.propTypes = {
    repos: PropTypes.array.isRequired
  }

  return (
    <Box component="section" className="profile-latest-repos">
      <h3 className="mb-3">Latest repositories:</h3>
      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
        {repos.map(repo => (
            <Grid item sm={6} xs={12} key={repo.id} >
            <Card className="profile-latest-repos-tile">
              <CardContent>
                <h4>
                  <a 
                    href={repo.html_url}
                    rel="noreferrer"
                    target="_blank"
                    className="repo-link"
                  >{repo.name}
                  </a>
                </h4>
                <small>updated at {repo.updated_at}</small>
              </CardContent>
            </Card>
            </Grid>
            )
          ) 
        }
      </Grid>
    </Box>
  )
}
