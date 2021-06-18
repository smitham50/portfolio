import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar';
import InfoBar from './components/InfoBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Landing from './components/Landing';
import './component-stylesheets/App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto Mono", monospace;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  ul {
    padding: 0;
  }

  a:hover {
    transform: scale(1.05);
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter .fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
`;

function App() {
  const location = useLocation();

  return (
    <AppContainer>
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
    </AppContainer>
  );
}

export default App;
