import React, {useContext} from 'react'
import {Search} from '../components/Search'
import {SearchResults} from '../components/SearchResults'
import {GithubContext} from '../context/github/githubContext'
import {History} from '../components/History'
import {Spinner} from '../components/UI/Loader'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const Home = () => {

  const {isLoading, users, repos, isUsersSearch, isReposSearch} = useContext(GithubContext)

  return (
    <>
      <Search />

      {isLoading
      ?
        <Spinner/>
      :
      <>
      {isUsersSearch && users.length > 0
        ? <SearchResults title={"Users"} entities={users}/>
        : null
      }
      {isReposSearch && repos.length > 0
        ? <SearchResults title={"Repositories"} entities={repos}/>
        : null
      }

      <History/>

      </>
      }
    </>
  )
}
