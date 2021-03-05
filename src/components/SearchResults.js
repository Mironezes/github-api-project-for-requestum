import {SearchResultCard } from './UI/SearchResultCard'
import PropTypes from 'prop-types'
import {Box, Grid} from '@material-ui/core/'

export const SearchResults = ({title, entities}) => {

  SearchResults.defaultProps = {
    title: 'Search results',
    entities: [],
  }

  SearchResults.propTypes = {
    title: PropTypes.string.isRequired,
    entities: PropTypes.array.isRequired,
  }

  return (
    <Box component="section" className="search-results">
      <h3>{title}</h3>
      <Grid container direction="row"  spacing={3}>
        {entities.map(entity => {
            return (
              <Grid item lg={3} sm={4} xs={12} key={entity.id} >
                <SearchResultCard entity={entity}/>
              </Grid>
            )
          })}
      </Grid>
    </Box> 
  )
}


