import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar';
import InfoBar from './components/InfoBar';
import Projects from './components/Projects';
import Landing from './components/Landing';
import './component-stylesheets/App.css';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const AppContainer = styled.div`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto Mono", monospace;
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

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

function App() {
  const location = useLocation();

  return (
    <AppContainer>
      <header>
        <NavBar />
      </header>
      <Main>
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
              <Route path='/projects'>
                <Projects />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Main>
    </AppContainer>
  );
}

export default App;
