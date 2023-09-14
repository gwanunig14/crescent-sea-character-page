import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom
import store from "./store/store";
import { Button } from "react-bootstrap";
import CharacterSheet from "./CharacterManagement/CharacterSheet";
import LoginPage from "./pages/LoginPage";
import ExistingCharacterPage from "./pages/ExistingCharacterPage";
import AddCharacterPage from "./pages/AddCharacterPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {/* Use Routes to define your routes */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home-page" />
            <Route
              path="/existing-character"
              element={<ExistingCharacterPage />}
            />
            <Route path="/add-character" element={<AddCharacterPage />}>
              <Route path="personal" />
              <Route path="characteristic" />
              <Route path="skill" />
              <Route path="finalize" />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
