import React, {useReducer} from 'react'
import {CLEAR_SEARCH, GET_USER_REPS, GET_USER, GET_PREV_REQUEST, SEARCH_USERS, SEARCH_REPOS, SET_LOADING, SET_USERS_SEARCH, CLEAR_USER, SET_REPOS_SEARCH} from '../actionTypes'
import {GithubContext} from './githubContext'
import {githubReducer} from './githubReducer'
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const withCreds = url => {
  return `${url}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}
 
export const GithubState = ({children}) => {

  const initialState = {
    user: {},
    userRepos: [],
    repo: {}, 
    users: [],
    repos: [],
    prevRequests: [],
    isLoading: false,
    isUsersSearch: true,
    isReposSearch: true
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async value => {
    setLoading()

    const response = await axios.get(
      withCreds(`https:/api.github.com/search/users?q=${value}&per_page=8&order=desc`)
    )
    
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    })
  }

  const searchRepos = async value => {
    setLoading()

    const response = await axios.get(
      withCreds(`https:/api.github.com/search/repositories?q=${value}&per_page=8&order=desc`)
    )
    
    dispatch({
      type: SEARCH_REPOS,
      payload: response.data.items
    })
  }


  const setReposSearch = async () => {
    dispatch({
      type: SET_REPOS_SEARCH,
    })

  }
  
  const setUsersSearch = async () => {
    dispatch({
      type: SET_USERS_SEARCH,
    })

  }
  


  const getUser = async name => {
    setLoading()

    const response = await axios.get(
      withCreds(`https:/api.github.com/users/${name}?`)
    )

    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }

  const getReps = async name => {
    setLoading()

    const response = await axios.get(
      withCreds(`https:/api.github.com/users/${name}/repos?per_page=8&sort=updated`)
    )

    dispatch({
      type: GET_USER_REPS,
      payload: response.data
    })   
  }

  const clearSearch = () => dispatch({
    type: CLEAR_SEARCH
  })

  const clearUser = () => dispatch({
    type: CLEAR_USER
  })

  const setLoading = () => dispatch({
    type: SET_LOADING
  })

  const getPrevRequest = async () => {

    let itemsList
    let maxAllowedItems = 100

    if (localStorage.getItem('Search Requests History')) {
      itemsList = localStorage.getItem('Search Requests History').split(',').reverse()
    
      dispatch({
        type: GET_PREV_REQUEST,
        payload: itemsList
      })

      if(itemsList.length > maxAllowedItems) {
        localStorage.clear()
      }
    }
  }

  const {user, users, userRepos, repo, repos, isLoading, isUsersSearch, isReposSearch, prevRequests} = state

  return(
    <GithubContext.Provider 
      value={{setLoading, searchUsers, searchRepos, getUser, getReps, clearSearch, setUsersSearch, setReposSearch, getPrevRequest, clearUser,
            user, users, userRepos, repo, repos, isLoading, isUsersSearch, isReposSearch, prevRequests
      }}>
      {children}
    </GithubContext.Provider>
  )
}