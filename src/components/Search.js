import React, {useContext, useState} from 'react'
import {useDebouncedCallback} from 'use-debounce'
import {Grid, Checkbox, Box, Button, FormGroup, FormControlLabel, TextField} from '@material-ui/core/'
import {AlertContext} from '../context/alert/alertContext'
import {GithubContext} from '../context/github/githubContext'
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded';

export const Search = () => {
  const [value, setValue] = useState('')

  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const searchHandler = () => {    
    if(value.trim()) {
      let prevRequests = localStorage.getItem('Search Requests History')
      prevRequests = prevRequests ? prevRequests.split(',') : [];
      prevRequests.push(value)
      localStorage.setItem('Search Requests History', prevRequests.toString())

      alert.hideAlert()

      if (github.isUsersSearch && github.isReposSearch) {
        github.searchUsers(value.trim())
        github.searchRepos(value.trim())
      }

      if(github.isUsersSearch) {
        github.searchUsers(value.trim())
      }
      if (github.isReposSearch) {
        github.searchRepos(value.trim())
      }

    } else {
      alert.showAlert('Search request can`t be empty', 'danger')
      github.clearSearch()
    }
  }

  const searchDebounced = useDebouncedCallback(searchHandler, 1000)

  const onClearResults = () => {
    github.clearSearch()
    setValue('')
    github.getPrevRequest()
  }

  const searchByUsers = () => {
    github.clearSearch()
    github.setUsersSearch()
    searchHandler()
  }

  const searchByRepos = () => {
    github.clearSearch()
    github.setReposSearch()
    searchHandler()
  }


  return (
   <Box component="section" className="search-panel">
      <Grid container direction="column" >

        <h1>Search panel</h1> 

        <Grid container direction="row" justify="space-between" className="search-panel-filters">
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox color="primary" checked={github.isUsersSearch} onChange={searchByUsers} name="checkUsers" />}
                label="Users"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={github.isReposSearch} onChange={searchByRepos} name="checkRepos" />}
                label="Repos"
              />
            </FormGroup>
            <Button size="small" variant="contained" color="secondary" title="Clear all"  onClick={onClearResults}><DeleteSweepRoundedIcon /></Button>
        </Grid>

        <TextField label="e.g. mironezes" variant="filled" value={value} onChange={e => setValue(e.target.value)} onKeyDown ={() => searchDebounced.callback() } />
      </Grid>
   </Box> 
  

  )
}