import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Card, CardContent, CardMedia, Box, Button} from '@material-ui/core/';

export const SearchResultCard = ({entity}) => {
  
  SearchResultCard.defaultProps = {
    entity: {}
  }

  SearchResultCard.propTypes = {
    entity: PropTypes.object.isRequired
  }

  return (
    <Card className="search-results-card">
      <CardMedia
        component="img"
        image={entity.avatar_url}
        alt={entity.login}
      />
      <CardContent>
        <h2>{entity.login || entity.name}</h2>
        {entity.owner 
            ? <Box className="repo-details">
                <span className="repo-details_lang"><strong>Language:</strong> {entity.language || "Unknown"}</span>
                <span className="repo-details__desc"><strong>Description:</strong> {entity.description}</span>
              </Box>
            : null
          }
          {entity.login 
            ? <Button variant="contained" color="primary" component={Link} to={`/profile/${entity.login}`}>View profile</Button>
            : null
          }        
      </CardContent>
    </Card>
  )
}