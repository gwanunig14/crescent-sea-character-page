import './App.css';
import React from 'react';
import CharacterCreator from './CharacterCreation/CharacterCreator';
import { Button } from 'react-bootstrap';
import CharacterSheet from './CharacterManagement/CharacterSheet';
import { TestingCharacter } from './DataTemplates/Skills/StarterRaces';

function App() {
const character = TestingCharacter
  return (
    <div className="App">
      <header className="App-header">
        <Button>
          Create New Character +
        </Button>
        {CharacterSheet(character)}
      </header>
    </div>
  );
}

export default App;
