import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom
import store from "./store/store";
import CharacterSheet from "./CharacterManagement/CharacterSheet";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CharacterCreator from "./pages/CharacterCreatorPage";
import PostGameCheckPage from "./pages/PostGameCheckPage";
import { TestingCharacter1 } from "./TestingData";
import { getDatabase, ref, set } from "firebase/database";
import { database } from "./database";

function App() {
  // function writeUserData(userId) {
  //   const db = database;
  //   set(ref(db, "characters/" + userId), {
  //     paul: TestingCharacter1,
  //   });
  // }

  // writeUserData("gregory");

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
            <Route path="/finalize" element={<PostGameCheckPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
