import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar';
import InfoBar from './components/InfoBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Landing from './components/Landing';
import './component-stylesheets/App.css';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <main>
        <TransitionGroup>
          <CSSTransition
            timeout={250}
            classNames='fade'
            key={location.key}
          >
            <Switch location={location}>
              <Route exact path='/'>
                <Landing />
              </Route>
              <Route path='/about'>
                <InfoBar />
              </Route>
              <Route path='/skills'>
                <Skills />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
}

export default App;
