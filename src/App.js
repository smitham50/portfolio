import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar';
import InfoBar from './components/InfoBar';
import Projects from './components/Projects';
import Landing from './components/Landing';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

function App() {
  const location = useLocation();

  return (
    <div>
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
    </div>
  );
}

export default App;
