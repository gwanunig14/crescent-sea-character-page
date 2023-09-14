import './App.css';
import React from 'react';
import { Provider } from "react-redux";
import store from "./store/store";
import { Button } from 'react-bootstrap';
import CharacterSheet from './CharacterManagement/CharacterSheet';
import { TestingCharacter } from './DataTemplates/Skills/StarterRaces';

function App() {
const character = TestingCharacter
  return (
    <Provider store={store}>
      <div className="App">
        <Button>
          Create New Character +
        </Button>
        {CharacterSheet(character)}
      </div>
    </Provider>
  );
}

export default App;
