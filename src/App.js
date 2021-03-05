import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import {Container} from '@material-ui/core/'
import {Navigation} from './components/UI/Navigation'
import {AlertModal} from './components/UI/Alert'
import {Footer} from './components/UI/Footer'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import {AlertState} from './context/alert/AlertState'
import {GithubState} from './context/github/GithubState'


function App() {
  return (
    <GithubState>
      <AlertState>
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        <Navigation />
        <main className="page-content">
          <Container maxWidth="md"> 
            <AlertModal alert={{text: '', type: 'danger'}}/>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
      <Footer />
      </AlertState>
    </GithubState>

  )
}

export default App
