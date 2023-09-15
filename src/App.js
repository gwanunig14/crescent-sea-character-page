import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom
import store from "./store/store";
import CharacterSheet from "./CharacterManagement/CharacterSheet";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CharacterCreator from "./CharacterCreation/CharacterCreator";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {/* Use Routes to define your routes */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route
              path="/character-sheet"
              element={<CharacterSheet confirmation={false} />}
            />
            <Route path="/character-creator" element={<CharacterCreator />} />
            <Route path="/personal" />
            <Route path="/characteristic" />
            <Route path="/skill" />
            <Route path="/finalize" />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
