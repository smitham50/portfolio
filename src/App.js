import React from 'react';
import NavBar from './components/NavBar';
import InfoBar from './components/InfoBar';
import Content from './components/Content';
import Skills from './components/Skills';
import './component-stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
        <main>
          <InfoBar />
          <Skills />
          <Content />
        </main>
    </div>
  );
}

export default App;
