import "./App.css";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store/store";
import CharacterSheet from "./CharacterManagement/CharacterSheet";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CharacterCreator from "./pages/CharacterCreatorPage";
import PostGameCheckPage from "./pages/PostGameCheckPage";
import EditCharacterPage from "./pages/EditCharacterPage";

function App() {
  // Initialize your state from localStorage or use default values
  const [appState, setAppState] = useState(
    JSON.parse(localStorage.getItem("appState")) ||
      {
        // Define your initial state here
      }
  );

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(appState));
  }, [appState]);

  return (
    <Provider store={store}>
      <div className="App">
        <Router basename="/crescent-sea-character-page">
          <div>Show some text</div>
        </Router>
        {/* <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route
              path="/character-sheet"
              element={<CharacterSheet confirmation={false} />}
            />
            <Route path="/character-creator" element={<CharacterCreator />} />
            <Route path="/finalize" element={<PostGameCheckPage />} />
            <Route path="/edit" element={<EditCharacterPage />} />
          </Routes>
        </Router> */}
      </div>
    </Provider>
  );
}

export default App;
