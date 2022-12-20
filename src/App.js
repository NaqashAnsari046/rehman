import React from "react";
import Settings from "./components/Settings";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import ProfileVerification from "./components/ProfileVerification";
import General from "./components/General.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/setting/" element={<Settings />}>
          <Route path="/setting/general" element={<General />} />
          <Route path="/setting/notifications" element={<Notifications />} />
          <Route path="/setting/profile" element={<Profile />} />
          <Route path="/setting/profile-verification" element={<ProfileVerification />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
