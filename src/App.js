import './App.css';
import React from 'react';
import CharacterCreator from './CharacterCreation/CharacterCreator';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>
          Create New Character +
        </Button>
        {CharacterCreator()}
      </header>
    </div>
  );
}

export default App;
