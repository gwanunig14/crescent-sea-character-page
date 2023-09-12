import './App.css';
import React from 'react';
import CharacterCreator from './CharacterCreation/CharacterCreator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>
          Create New Character +
        </button>
        {CharacterCreator()}
      </header>
    </div>
  );
}

export default App;
