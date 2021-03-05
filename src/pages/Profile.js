import React, {useContext, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {GithubContext} from '../context/github/githubContext'
import {UserRepositories} from '../components/UserRepositories'
import {makeStyles} from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import {Spinner} from '../components/UI/Loader'
import {Box, Typography, Breadcrumbs, Link, Grid, Button, ButtonGroup, Card, CardContent, CardMedia} from '@material-ui/core/'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));


export const Profile = ({match}) => {
  const classes = useStyles();
  const {getUser, getReps, isLoading, user, userRepos, clearUser} = useContext(GithubContext)
  const userLogin = match.params.name

  useEffect(() => {
    getUser(userLogin)
    getReps(userLogin)
    return () => {
      clearUser()
    }
  }, [])

  if(isLoading) {
    <Spinner/>
  }

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
        <Link component={NavLink}  color="inherit" to="/" >
          <HomeIcon className={classes.icon} />
          Back to search
        </Link>
        <Typography color="textPrimary">{user.login}`s profile</Typography>
      </Breadcrumbs>

      <Grid container direction="row" spacing={3}>
        <Grid item sm={4} >
            <Card component="section" className="profile-card">
              <CardMedia
                component="img"
                image={user.avatar_url}
                alt={user.login}
              />
              <CardContent>
                <h3>{user.name || 'Anonymous'}</h3>
                {  
                  user.location
                  ? <p><strong>Location:</strong> {user.location}</p>
                  : null
                }
                {  
                  user.company
                  ? <p><strong>Company:</strong> {user.company}</p>
                  : null
                }
                <p><strong>Followers:</strong> {user.followers}</p>
                <p><strong>Public repositories: </strong>{user.public_repos}</p>

                <Button variant="contained" color="primary" href={user.html_url} target="_blank">Profile on GitHub</Button>
              </CardContent>
            </Card>
        </Grid>

        <Grid item sm={8}>
          <Box component="section" className="profile-details">
            <h1>{user.login}</h1>
            <p><strong>Bio:</strong> {user.bio || "Unknown"}</p>
            {
              user.blog 
              ? <p><strong>Website:</strong> {user.blog}</p> 
              : null
            }
            
            <Box className="profile-stats">
              <span><strong>Followers:</strong> {user.followers}</span>
              <span><strong>Followin:</strong> {user.following}</span>
              <span><strong>Repositories:</strong> {user.public_repos}</span>
              <span><strong>Gists:</strong> {user.public_repos}</span>
            </Box>
          </Box>


            <UserRepositories repos={userRepos} />
        </Grid>
      </Grid>
    </>
  )
}