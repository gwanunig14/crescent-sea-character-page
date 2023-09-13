import './App.css';
import React from 'react';
import CharacterCreator from './CharacterCreation/CharacterCreator';
import { Button } from 'react-bootstrap';
import CharacterSheet from './CharacterManagement/CharacterSheet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>
          Create New Character +
        </Button>
        {CharacterSheet()}
      </header>
    </div>
  );
}

export default App;
