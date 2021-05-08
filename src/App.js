import React from 'react';
import NavBar from './components/NavBar';
import InfoBar from './components/InfoBar';
import Content from './components/Content';
import './component-stylesheets/NavBar.css';
import './component-stylesheets/App.css';
import './component-stylesheets/About.css';
import './component-stylesheets/InfoBar.css';
import './component-stylesheets/Projects.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <main>
          <InfoBar />
          <Content />
        </main>
      </header>
    </div>
  );
}

export default App;
